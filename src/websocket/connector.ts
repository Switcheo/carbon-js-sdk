import NodeWebSocket from "ws";
import { generateChannelId, parseChannelId } from "./channel";
import * as WSConnectorTypes from "./types";
import * as WSModels from "./models";

// delay between pings.
// see WSConnector.intervalHeartbeat
const DEFAULT_INTERVAL_HEARTBEAT = 3000;

// 2x DEFAULT_INTERVAL_HEARTBEAT to allow for missing
// one heartbeat without triggering disconnect.
// see WSConnector.timeoutHeartbeat
const DEFAULT_TIMEOUT_HEARTBEAT = 6100;

// see WSConnector.timeoutConnect
const DEFAULT_TIMEOUT_CONNECT = 2000;

export const { WSChannel, WSRequest } = WSConnectorTypes;
export { WSConnectorTypes };
export { WSModels };

export interface WSStatusChangeListener {
  (connected: boolean): void;
}

/**
 * See WSConnector class members for description of
 * each configuration option.
 */
export interface WSConnectorOptions {
  endpoint: string;
  onStatusChange?: WSStatusChangeListener;
  debugMode?: boolean;

  timeoutConnect?: number;

  intervalHeartbeat?: number;
  timeoutHeartbeat?: number;
  disableHeartbeat?: boolean;
}

export interface WSResult<T = unknown> {
  requestId?: string;
  channel?: string;
  outOfSequence: boolean;
  timestamp: Date;
  data: T;
}

interface PromiseHandler {
  requestId?: string;
  resolve: (result?: WSResult<any>) => void;
  reject: (reason?: any) => void;
}

interface WSError {
  code: string;
  message: string;
}

interface WSMessage<T> {
  requestId: string;
  channel?: string;
  sequenceNumber: number;
  error?: WSError;
  result?: WSResult<T>;
}

export interface WSSubscriber {
  (result: WSResult<unknown>): void;
}

interface PromiseHandlerCache {
  [index: string]: PromiseHandler;
}

interface MessageSubscribers {
  [index: string]: WSSubscriber;
}

/**
 * WSConnector is a wrapper class to manage websocket connections with the server. It makes use of
 * WebSocket instances to connect to the server.
 *
 * Provides a synchronised way of executing requests on websocket @see {WSConnector.request}.
 *
 * Multiple subscriptions to the same channel is not supported at the moment, but would be trival
 * to implement.
 *
 * @example
 * (async () => {
 *   const wsConnector = new WSConnector({
 *     endpoint: WS_ENDPOINT,
 *   });
 *
 *   // run connect before executing any request/subscription
 *   await wsConnector.connect();
 *
 *   // request for data
 *   const result: WSResult<RecentTradesBody> = await wsConnector.request<RecentTradesBody>("get_recent_trades", {
 *      market: "swth_eth",
 *   });
 *
 *   // subscribe to new channel
 *   await wsConnector.subscribe({ channel: WSChannel.market_stats }, (result: WSResult<MarketStats>) => {
 *     console.log("received market stats", result);
 *   });
 *
 *   // unsubscribe
 *   await wsConnector.unsubscribe({ channel: WSChannel.market_stats });
 *
 *   // clean up
 *   await wsConnector.disconnect();
 * })();
 */
export class WSConnector {
  // websocket endpoint
  endpoint: string;

  // prints logs if set to true
  debugMode: boolean;

  // delay in milliseconds before a ping message is sent to
  // the socket server
  // disables ping messages if value is ≤ 0
  intervalHeartbeat: number;

  // timeout in milliseconds before connection is deemed broken.
  // resets every intervalHeartbeat
  // disables timeout if value is ≤ 0
  timeoutHeartbeat: number;

  // timeout in milliseconds to try to connect to websocket
  // endpoint.
  timeoutConnect: number;

  // flag for disabling websocket heartbeats entirely
  // meaning websocket will not disconnect on client
  // when connection is broken
  disableHeartbeat: boolean;

  // websocket instance
  websocket: WebSocket | NodeWebSocket | null = null;

  // used to tracking websocket messages, increment by 1 every request
  requestIdCounter: number = 0;

  // true if connection initiated, even if connection is not established
  // will cause reconnect attempts if true.
  shouldConnect: boolean = false;

  // true only if connection is established and ready to use
  connected: boolean = false;

  // called whenever WSConnector.connected changes
  statusChangeListener?: WSStatusChangeListener;

  // promise abstraction handler for WSConnector.connect
  connectPromiseHandler: PromiseHandler | null = null;

  // promise abstraction handlers store for WSConnector.request
  requestHandlers: PromiseHandlerCache = {};

  // channel subscription handlers
  channelHandlers: MessageSubscribers = {};

  // used for track ws message sequence, for some cases a out of sequence
  // message is invalid and request have to be resent.
  sequenceNumberCache: {
    [index: string]: number;
  } = {};

  // interval ID for tracking active setInterval
  heartbeatInterval?: number;

  // timeout ID for tracking active setTimeout
  heartbeatTimeout?: number;

  // timeout ID for catching websocket instantiation error
  // which cannot be caught with a try-catch block
  initFailureTimeout?: number;

  public static generateChannelId = generateChannelId;

  public static parseChannelId = parseChannelId;

  /**
   * Initialises an instance of WSConnector with the specified options
   * @param {WSConnectorOptions} options - options to configure the WSConnector instance
   */
  constructor(options: WSConnectorOptions) {
    const {
      endpoint,
      debugMode = false,
      timeoutConnect = DEFAULT_TIMEOUT_CONNECT,
      intervalHeartbeat = DEFAULT_INTERVAL_HEARTBEAT,
      timeoutHeartbeat = DEFAULT_TIMEOUT_HEARTBEAT,
      disableHeartbeat = false,
      onStatusChange,
    } = options;

    this.endpoint = endpoint;
    this.debugMode = debugMode;
    this.timeoutConnect = timeoutConnect;
    this.intervalHeartbeat = intervalHeartbeat;
    this.timeoutHeartbeat = timeoutHeartbeat;
    this.disableHeartbeat = disableHeartbeat;
    this.statusChangeListener = onStatusChange;
  }

  /**
   * Starts a connection to the server via a WebSocket instance
   * rejects the promise if connection cannot be established within WSConnector.timeoutConnect
   * milliseconds.
   *
   * @see WSConnector documentation for usage example
   */
  public async connect(): Promise<unknown> {
    if (this.shouldConnect) {
      // resolve promise immediately if already connecting
      return Promise.resolve();
    }

    this.shouldConnect = true;

    this.connectWebSocket();

    return new Promise((resolve, reject) => {
      this.connectPromiseHandler = { resolve, reject };
    });
  }

  /**
   * Disconnects the WebSocket connection with endpoint, releases resources and reverse states.
   * It is safe to call WSConnector.connect() again once WSConnector.disconnect() is called.
   *
   * @see WSConnector documentation for usage example
   */
  public disconnect() {
    this.shouldConnect = false;
    this.disconnectWebsocket();
  }

  /**
   * Subscribes to the channels specified with the websocket. Sends a subscription data frame with
   * channel ID to WebSocket server.
   * @param {WSConnectorTypes.WsSubscriptionParams | WSConnectorTypes.WsSubscriptionParams[]} params a list of parameters specifying the channels to connect to
   * @param {WSSubscriber} handler an event handler that subscribes to the websocket channels
   *
   * @see WSConnector documentation for usage example
   */
  public subscribe(params: WSConnectorTypes.WsSubscriptionParams | WSConnectorTypes.WsSubscriptionParams[], handler: WSSubscriber) {
    const channels: string[] = [];
    if (!Array.isArray(params)) {
      params = [params]; // eslint-disable-line no-param-reassign
    }

    for (const param of params as WSConnectorTypes.WsSubscriptionParams[]) {
      const channelId = generateChannelId(param);
      const shouldSubscribe = this.channelHandlers[channelId] === undefined;
      this.channelHandlers[channelId] = handler;

      if (shouldSubscribe) {
        channels.push(channelId);
      }
    }

    this.send("subscribe", { channels });
  }

  /**
   * Unsubscribes to the websocket channels indicated in the params, by broadcasting an unsubscribe
   * message to these channels.
   * @param {WSConnectorTypes.WsSubscriptionParams | WSConnectorTypes.WsSubscriptionParams[]} params - channel(s) to unsubcribe to
   *
   * @see WSConnector documentation for usage example
   */
  public unsubscribe(params: WSConnectorTypes.WsSubscriptionParams | WSConnectorTypes.WsSubscriptionParams[]) {
    if (!Array.isArray(params)) {
      params = [params]; // eslint-disable-line no-param-reassign
    }

    const channelIds: string[] = [];
    for (const param of params) {
      const channelId = generateChannelId(param);
      const shouldUnsubscribe = this.channelHandlers[channelId] !== undefined;
      delete this.channelHandlers[channelId];

      if (shouldUnsubscribe) {
        channelIds.push(channelId);
      }
    }

    this.send("unsubscribe", {
      channels: channelIds,
    });
  }

  /**
   * Sends a message to the websocket channels.
   * @param {string} method - the type of message to send to the websocket channels. Available
   * options: subscribe, unsubscribe, get_recent_trades, get_candlesticks, get_open_orders,
   * get_account_trades, get_market_stats, get_leverages, get_open_positions, get_closed_positions
   * @param {any} params - An object containing parameters based on the specified method
   */
  public send(method: string, params: any) {
    this.sendMessage(
      JSON.stringify({
        id: `g${++this.requestIdCounter}`,
        method,
        params,
      })
    );
  }

  /**
   * Requests data from the server endpoint
   * @param {string} method - the type of message to send to the websocket channels. Available
   * options: subscribe, unsubscribe, get_recent_trades, get_candlesticks, get_open_orders,
   * get_account_trades, get_market_stats, get_leverages, get_open_positions, get_closed_positions
   * @param {any} params - parameters based on the specified method
   *
   * @returns {Promise<WSResult<T>>} - a Promise resolving to the response from the endpoint
   *
   * @see WSConnector documentation for usage example
   */
  public async request<T = unknown>(method: string, params: any): Promise<WSResult<T> | undefined> {
    const requestId = `r${++this.requestIdCounter}`;

    this.sendMessage(
      JSON.stringify({
        id: requestId,
        method,
        params,
      })
    );

    return new Promise((resolve, reject) => {
      this.requestHandlers[requestId] = { requestId, resolve, reject };
    });
  }

  /**
   * Sends a message to the web socket
   * @param {string | Buffer} data - the message sent to the web socket
   */
  private sendMessage(data: string | Buffer) {
    const socket = this.getSocket();
    this.debugLog("WSConnector.sendMessage", data);
    socket?.send(data);
  }

  /**
   * An event handler that is called when a connection is started with the WebSocket instance.
   * @param {Event} ev - the event that is called with
   */
  private onOpen(ev: Event): any {
    this.debugLog("WSConnector.onOpen", ev);

    // clear timeout for killing connect attempts
    clearTimeout(this.timeoutConnect);

    this.connected = true;
    this.connectPromiseHandler?.resolve();
    this.connectPromiseHandler = null;

    this.updateConnectStatus();
    this.startHeartbeat();
  }

  /**
   * An event handler that is called when a MessageEvent is emitted from the server
   * @param {MessageEvent} ev - the MessageEvent that is emitted from the server
   */
  private onMessage(ev: MessageEvent) {
    this.debugLog("WSConnector.onMessage", ev);

    if (ev.data === "pong") {
      this.restartHeartbeatTimeout();
      return;
    }

    const message = this.parseWsMessage<unknown>(ev);

    if (!message.requestId && message.channel) {
      const channelHandler = this.channelHandlers[message.channel];
      if (!channelHandler) {
        this.debugLog(`handler not found for channel: ${message.channel}`);
        try {
          const params = parseChannelId(message.channel);
          this.unsubscribe({ channel: params.channel as WSConnectorTypes.WSChannel });
        } catch (error) {
          // ignore error
        }
        return;
      }

      channelHandler(message.result!);
      return;
    }

    if (!message.requestId?.startsWith("r")) {
      return;
    }

    const handler = this.requestHandlers[message.requestId];
    if (!handler) {
      this.debugLog(`handler not found for request: ${message.requestId}`);
      return;
    }

    if (message.error) {
      handler.reject(message.error);
    } else {
      handler.resolve(message.result);
    }
    delete this.requestHandlers[message.requestId];
  }

  /**
   * An event listener that is called when an error occurs on the WebSocket connection
   * @param {Event} ev - the error event occurring on the WebSocket connection
   */
  private onError(ev: Event) {
    this.debugLog("WSConnector.onError", ev);

    const handlers: PromiseHandler[] = Object.values(this.requestHandlers);
    console.error(ev);
    const error = new Error("WebSocket error occurred");
    for (const handler of handlers) {
      handler.reject(error);
      if (handler.requestId) {
        delete this.requestHandlers[handler.requestId];
      }
    }
  }

  /**
   * An event handler that is triggered when the WebSocket connection is closed.
   * @param {Event} ev - the event called with this event handler.
   */
  private onClose(ev: Event) {
    this.debugLog("WSConnector.onClose", ev);

    this.disconnectWebsocket();
  }

  /**
   * An accessor to the WebSocket instance in this WSConnector instance
   */
  private getSocket() {
    if (!this.connected) {
      throw new Error("WebSocket not connected");
    }

    return this.websocket;
  }

  /**
   * Updates the connection status of the WebSocket instance
   */
  private updateConnectStatus() {
    try {
      this.statusChangeListener?.(this.connected);
    } catch (error) {
      console.error(error);
    }
  }

  /**
   * Sends ping messages to the websocket to indicate to the server that the WebSocket connection with the server is still alive.
   */
  private sendHeartbeat() {
    this.websocket?.send("ping");
  }

  /**
   * Resets the heartbeat timeout. (timeout: after a specified amount of time, if there are no heartbeats detected from the server, the connection with the server is considered to be lost and the WebSocket connection will be closed)
   */
  private restartHeartbeatTimeout() {
    clearTimeout(this.heartbeatTimeout);

    if (this.disableHeartbeat || this.timeoutHeartbeat <= 0) {
      // configured to disable heartbeat checks
      return;
    }

    this.heartbeatTimeout = setTimeout(this.onHeartbeatTimeout.bind(this), this.timeoutHeartbeat) as unknown as number;
  }

  /**
   * Disconnects the websocket connection when there is no heartbeat detected for more than the time specified in {@link WSConnector#timeoutHeartbeat}
   */
  private onHeartbeatTimeout() {
    this.debugLog("heartbeat timed out");
    console.warn("ws heartbeat missed, killing zombie connection");

    this.disconnect();
  }

  /**
   * Starts sending heartbeats to the server in regular intervals
   */
  private startHeartbeat() {
    // call receive heartbeat to start timeout
    this.restartHeartbeatTimeout();

    if (this.disableHeartbeat || this.intervalHeartbeat <= 0) {
      // configured to disable heartbeat checks
      return;
    }

    this.heartbeatInterval = setInterval(this.sendHeartbeat.bind(this), this.intervalHeartbeat) as unknown as number;
  }

  /**
   * Parses messages sent from the server via the WebSocket connection
   * @param {MessageEvent} ev - the MessageEvent emitted from the server
   * @returns {WSMessage<T>} - the parsed message
   */
  private parseWsMessage<T>(ev: MessageEvent): WSMessage<T> {
    try {
      const { id, sequence_number: sequenceNumber, error, channel, ...rest } = JSON.parse(ev.data);
      const outOfSequence = sequenceNumber < this.sequenceNumberCache[channel];
      if (!outOfSequence) {
        this.sequenceNumberCache[channel] = sequenceNumber;
      }

      return {
        requestId: id,
        channel,
        sequenceNumber,
        error: error as WSError,
        result: {
          requestId: id,
          channel,
          timestamp: new Date(),
          outOfSequence,
          data: rest,
        },
      };
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  /**
   * Rejects the WebSocket connection attempt when an error is encountered
   * @param {Error} error - the error causing the failure to connect with the websocket
   */
  private rejectConnect(error: Error) {
    clearTimeout(this.initFailureTimeout);

    this.connectPromiseHandler?.reject(error);
    this.connectPromiseHandler = null;
  }

  /**
   * Disconnects the connection with the websocket
   */
  private disconnectWebsocket() {
    try {
      this.websocket?.close();
    } catch (e) {
      // ignore error on disconnect
    } finally {
      clearInterval(this.heartbeatInterval);
      clearTimeout(this.heartbeatTimeout);

      this.sequenceNumberCache = {};
      this.websocket = null;
      if (this.connected) {
        this.connected = false;

        this.updateConnectStatus();
      }
    }
  }

  /**
   * Initialises a new WebSocket instance with the specified endpoint.
   */
  private connectWebSocket() {
    this.disconnect();

    try {
      if (typeof WebSocket !== "undefined") {
        // this works on browsers js vm
        const websocket = new WebSocket(this.endpoint);
        websocket.onopen = this.onOpen.bind(this);
        websocket.onclose = this.onClose.bind(this);
        websocket.onerror = this.onError.bind(this);
        websocket.onmessage = this.onMessage.bind(this);

        this.websocket = websocket;
      } else {
        // and this works on nodejs vm
        const websocket = new NodeWebSocket(this.endpoint);
        websocket.on("open", this.onOpen.bind(this));
        websocket.on("close", this.onClose.bind(this));
        websocket.on("error", this.onError.bind(this));
        websocket.on("message", (data: string) => this.onMessage({ data } as MessageEvent));

        this.websocket = websocket;
      }
      this.requestHandlers = {};

      // set timeout to kill websocket instantiation attempt
      // because error for constructor cannot be caught
      // i.e. new WebSocket(…)
      // https://stackoverflow.com/questions/22919638
      this.initFailureTimeout = setTimeout(() => {
        this.rejectConnect(new Error("websocket connect time out"));
      }, this.timeoutConnect) as unknown as number;
    } catch (error) {
      console.error(error);
      if (error instanceof Error) {
        this.rejectConnect(error);
      }
    }
  }

  /**
   * A helper message to log methods when they are called
   * WSConnector#debugMode must be set to true to turn on logging.
   * @param {any[]} args - items to be logged
   */
  private debugLog(...args: any[]) {
    if (!this.debugMode) return;

    console.log(...args);
  }
}
