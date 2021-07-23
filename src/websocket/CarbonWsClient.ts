interface Subscription {
  channel: string
  onMessageHandler: (e: MessageEvent) => void
}

export interface WSStatusChangeListener {
  (connected: boolean): void
}

export interface ConstructorArgs {
  url: string
}

export interface WSResult<T = unknown> {
  requestId?: string
  channel?: string
  outOfSequence: boolean
  timestamp: Date
  data: T
}

export enum WSChannel {
  candlesticks = 'candlesticks',
  books = 'books',
  recent_trades = 'recent_trades',
  orders = 'orders',
  orders_by_market = 'orders_by_market',
  balances = 'balances',
  account_trades = 'account_trades',
  account_trades_by_market = 'account_trades_by_market',
  market_stats = 'market_stats',
  market_stats_by_market = 'market_stats_by_market',
  leverages = 'leverages',
  leverages_by_market = 'leverages_by_market',
  positions = 'positions',
  positions_by_market = 'positions_by_market',
}

export enum WsRequestMethod {
  order_history = 'get_order_history',
  recent_trades = 'get_recent_trades',
  candlesticks = 'get_candlesticks',
  open_orders = 'get_open_orders',
  account_trades = 'get_account_trades',
  market_stats = 'get_market_stats',
  leverages = 'get_leverages',
  open_positions = 'get_open_positions',
  closed_positions = 'get_closed_positions',
}

/**
 * This is a wrapper class to manage websocket connections with the server.
 * 
 * You can either make use of the subscribe/unsubscribe method or preferably
 * the wrapper functions @see {CarbonWsClient.subscribeToCandleSticks}.
 * 
 * Subscriptions are managed internally. Just provide a callback function when you subscribe.
 * 
 * Multiple subscriptions to the same channel is not supported.
 */

export class CarbonWsClient {
  url: string
  socket: WebSocket | null
  subscriptions: Array<Subscription> // Stores subscriptions and their handlers.
  keepSocketAlive: boolean
  socketTimeout: NodeJS.Timeout | null
  heartbeatInterval: NodeJS.Timeout | null

  // Tracks ws message sequence.
  // For some cases a out of sequence message is invalid and request has to be resent.
  sequenceNumberCache: {
    [index: string]: number
  } = {}

  constructor(options: ConstructorArgs) {
    const { url } = options
    this.subscriptions = []
    this.keepSocketAlive = true
    this.socket = null
    this.socketTimeout = null
    this.heartbeatInterval = null
    this.url = url
    this.connectSocket()
  }

  public disconnect() {
    if (this.socket) {
      this.keepSocketAlive = false
      this.socket.close()
      this.socket = null
    }
  }

  private connectSocket() {
    this.socket = new WebSocket(this.url)
    this.socket.addEventListener('open', (event) => this.onOpen(event))
    this.socket.addEventListener('message', (event) => this.onMessage(event))
    this.socket.addEventListener('close', (event) => this.onClose(event))
    this.socket.addEventListener('error', (event) => this.onError(event))
  }

  private onOpen(e: Event) {
    this.startHeartBeat()
  }

  private onMessage(e: MessageEvent) {
    if (e.data === 'pong') {
      this.pong()
      return
    }

    const existingSubscription = this.subscriptions.find((o: Subscription) =>
      o.channel === e?.data?.result?.channel
    )

    if (existingSubscription) {
      existingSubscription.onMessageHandler(e)
    }
  }

  private onClose(e: CloseEvent) {
    this.stopHeartBeat()

    if (this.keepSocketAlive) {
      this.connectSocket()
    }
  }

  private onError(e: Event) {
    if (this.socket) this.socket.close()
  }

  private startHeartBeat() {
    this.heartbeatInterval = setInterval(() => this.ping, 3000);
  }

  private stopHeartBeat() {
    if (this.heartbeatInterval) {
      clearInterval(this.heartbeatInterval)
    }
  }

  private ping() {
    if (!this.socket) return
    if (this.socket.readyState !== 1) return

    this.socket.send("ping")

    this.socketTimeout = setTimeout(() => {
      if (this.socket) this.socket.close()
    }, 5000)
  }

  private pong() {
    if (this.socketTimeout) clearTimeout(this.socketTimeout);
  }

  private getSocket() {
    if (this.socket?.readyState !== 1) {
      throw new Error('WebSocket not connected')
    }

    return this.socket
  }

  private sendMessage(data: string | Buffer) {
    const socket = this.getSocket()

    this.debugLog('WSConnector.sendMessage', data)
    socket?.send(data)
  }

  private debugLog(...args: any[]) {
    // if (!this.debugMode) return

    console.log(...args);
  }

  public request(method: string, onMessageHandler: (e: MessageEvent) => void, params: any): void {
    if (this.subscriptions.find((s: Subscription) => s.channel === method)) {
      throw new Error('Already subscribed')
    }

    const msg: string = JSON.stringify({
      id: method,
      method,
      params,
    })

    this.sendMessage(msg)
    this.subscriptions.push({
      channel: method,
      onMessageHandler
    })
  }

  public subscribe(channel: string, onMessageHandler: (e: MessageEvent) => void): void {
    if (this.subscriptions.find((s: Subscription) => s.channel === channel)) {
      throw new Error('Already subscribed')
    }

    const msg: string = JSON.stringify({
      id: channel,
      method: 'subscribe',
      params: { "channels": [...channel] }
    })

    this.sendMessage(msg)
    this.subscriptions.push({
      channel: channel,
      onMessageHandler
    })
  }

  public unsubscribe(channel: string): void {
    const msg = JSON.stringify({
      id: channel,
      method: 'unsubscribe',
      params: { "channels": [...channel] }
    })

    this.sendMessage(msg)

    const index = this.subscriptions.findIndex((o: Subscription) => o.channel === channel)

    if (index) {
      this.subscriptions.splice(index, 1)
    }
  }

  /* Subscription and unsubscription wrapper methods */

  /* Candlesticks */
  public getCandlesticks(market: string, resolution: string, from: string, to: string, onMessageHandler: (e: MessageEvent) => void) {
    const params = { market, resolution, from, to }
    this.request(WsRequestMethod.candlesticks, onMessageHandler, params)
  }

  public subscribeToCandleSticks(market: string, resolution: string, onMessage: (e: MessageEvent) => void): void {
    const channel = `${WSChannel.candlesticks}.${market}.${resolution}`
    this.subscribe(channel, onMessage)
  }

  public unsubscribeFromCandleSticks(market: string, resolution: string): void {
    const channel = `${WSChannel.candlesticks}.${market}.${resolution}`
    this.unsubscribe(channel)
  }

  /**
   * Orderbooks
   * This does not require a request before subscribing 
   * The first subscription message will return you the book 
   * */

  public subscribeToBooks(market: string, onMessage: (e: MessageEvent) => void): void {
    const channel = `${WSChannel.books}.${market}`
    this.subscribe(channel, onMessage)
  }

  public unsubscribeFromBooks(market: string): void {
    const channel = `${WSChannel.books}.${market}`
    this.unsubscribe(channel)
  }

  /* RecentTrades */
  public getRecentTrades(market: string, onMessageHandler: (e: MessageEvent) => void) {
    const params = { market }
    this.request(WsRequestMethod.recent_trades, onMessageHandler, params)
  }

  public subscribeToRecentTrades(market: string, onMessage: (e: MessageEvent) => void): void {
    const channel = `${WSChannel.recent_trades}.${market}`
    this.subscribe(channel, onMessage)
  }

  public unsubscribeFromRecentTrades(market: string): void {
    const channel = `${WSChannel.recent_trades}.${market}`
    this.unsubscribe(channel)
  }

  /* Orders */

  public getOrderHistory(address: string, onMessageHandler: (e: MessageEvent) => void) {
    const params = { address }
    this.request(WsRequestMethod.order_history, onMessageHandler, params)
  }

  public getOpenOrders(market: string, address: string, onMessageHandler: (e: MessageEvent) => void) {
    const params = { market, address }
    this.request(WsRequestMethod.order_history, onMessageHandler, params)
  }

  public subscribeToOrders(address: string, onMessage: (e: MessageEvent) => void): void {
    const channel = `${WSChannel.orders}.${address}`
    this.subscribe(channel, onMessage)
  }

  public unsubscribeFromOrders(address: string): void {
    const channel = `${WSChannel.orders_by_market}.${address}`
    this.unsubscribe(channel)
  }

  /* Orders by market */
  public getOrderHistoryByMarket(market: string, address: string, onMessageHandler: (e: MessageEvent) => void) {
    const params = { market, address }
    this.request(WsRequestMethod.order_history, onMessageHandler, params)
  }

  public subscribeToOrdersByMarket(market: string, address: string, onMessage: (e: MessageEvent) => void): void {
    const channel = `${WSChannel.orders_by_market}.${market}.${address}`
    this.subscribe(channel, onMessage)
  }

  public unsubscribeFromOrdersByMarket(market: string, address: string): void {
    const channel = `${WSChannel.orders_by_market}.${market}.${address}`
    this.unsubscribe(channel)
  }

  /* Balances */
  public subscribeToBalances(address: string, onMessage: (e: MessageEvent) => void): void {
    const channel = `${WSChannel.balances}.${address}`
    this.subscribe(channel, onMessage)
  }

  public unsubscribeFromBalances(address: string): void {
    const channel = `${WSChannel.balances}.${address}`
    this.unsubscribe(channel)
  }

  /* Account trades */
  public getAccountTrades(address: string, onMessageHandler: (e: MessageEvent) => void) {
    const params = { address }
    this.request(WsRequestMethod.account_trades, onMessageHandler, params)
  }

  public subscribeToAccountTrades(address: string, onMessage: (e: MessageEvent) => void): void {
    const channel = `${WSChannel.account_trades}.${address}`
    this.subscribe(channel, onMessage)
  }

  public unsubscribeFromAccountTrades(address: string): void {
    const channel = `${WSChannel.account_trades}.${address}`
    this.unsubscribe(channel)
  }

  /* Account trades by market */
  public getAccountTradesByMarket(market: string, address: string, onMessageHandler: (e: MessageEvent) => void) {
    const params = { market, address }
    this.request(WsRequestMethod.account_trades, onMessageHandler, params)
  }
  public subscribeToAccountTradesByMarket(market: string, address: string, onMessage: (e: MessageEvent) => void): void {
    const channel = `${WSChannel.account_trades_by_market}.${market}.${address}`
    this.subscribe(channel, onMessage)
  }

  public unsubscribeFromAccountTradesByMarket(market: string, address: string): void {
    const channel = `${WSChannel.account_trades_by_market}.${market}.${address}`
    this.unsubscribe(channel)
  }

  /* Market Stats*/
  public getMarketStats(onMessageHandler: (e: MessageEvent) => void) {
    const params = {}
    this.request(WsRequestMethod.market_stats, onMessageHandler, params)
  }

  public subscribeToMarketStats(onMessage: (e: MessageEvent) => void): void {
    const channel = `${WSChannel.market_stats}`
    this.subscribe(channel, onMessage)
  }

  public unsubscribeFromMarketStats(): void {
    const channel = `${WSChannel.market_stats}`
    this.unsubscribe(channel)
  }

  /* Market Stats by market */
  public getMarketStatsByMarket(market: string, onMessageHandler: (e: MessageEvent) => void) {
    const params = { market }
    this.request(WsRequestMethod.order_history, onMessageHandler, params)
  }

  public subscribeToMarketStatsByMarket(market: string, onMessage: (e: MessageEvent) => void): void {
    const channel = `${WSChannel.market_stats_by_market}.${market}`
    this.subscribe(channel, onMessage)
  }

  public unsubscribeFromMarketStatsByMarket(market: string): void {
    const channel = `${WSChannel.market_stats_by_market}.${market}`
    this.unsubscribe(channel)
  }

  /* Leverages */
  public getLeverages(address: string, onMessageHandler: (e: MessageEvent) => void) {
    const params = { address }
    this.request(WsRequestMethod.leverages, onMessageHandler, params)
  }

  public subscribeToLeverages(address: string, onMessage: (e: MessageEvent) => void): void {
    const channel = `${WSChannel.leverages}.${address}`
    this.subscribe(channel, onMessage)
  }

  public unsubscribeFromLeverages(address: string): void {
    const channel = `${WSChannel.leverages}.${address}`
    this.unsubscribe(channel)
  }

  /* Leverages by market*/
  public getLeveragesByMarket(address: string, market: string, onMessageHandler: (e: MessageEvent) => void) {
    const params = { address, market }
    this.request(WsRequestMethod.leverages, onMessageHandler, params)
  }

  public subscribeToLeveragesByMarket(market: string, address: string, onMessage: (e: MessageEvent) => void): void {
    const channel = `${WSChannel.leverages}.${market}.${address}`
    this.subscribe(channel, onMessage)
  }

  public unsubscribeFromLeveragesByMarket(market: string, address: string): void {
    const channel = `${WSChannel.leverages}.${market}.${address}`
    this.unsubscribe(channel)
  }

  /* Positions */
  public getOpenPositions(address: string, onMessageHandler: (e: MessageEvent) => void) {
    const params = { address }
    this.request(WsRequestMethod.open_positions, onMessageHandler, params)
  }

  public getClosedPositions(address: string, onMessageHandler: (e: MessageEvent) => void) {
    const params = { address }
    this.request(WsRequestMethod.closed_positions, onMessageHandler, params)
  }

  public subscribeToPositions(address: string, onMessage: (e: MessageEvent) => void): void {
    const channel = `${WSChannel.positions}.${address}`
    this.subscribe(channel, onMessage)
  }

  public unsubscribeFromPositions(address: string): void {
    const channel = `${WSChannel.positions}.${address}`
    this.unsubscribe(channel)
  }

  /* Positions by market*/
  public getOpenPositionsByMarket(address: string, market: string, onMessageHandler: (e: MessageEvent) => void) {
    const params = { address, market }
    this.request(WsRequestMethod.open_positions, onMessageHandler, params)
  }

  public getClosedPositionsByMarket(address: string, market: string, onMessageHandler: (e: MessageEvent) => void) {
    const params = { address, market }
    this.request(WsRequestMethod.closed_positions, onMessageHandler, params)
  }

  public subscribeToPositionsByMarket(market: string, address: string, onMessage: (e: MessageEvent) => void): void {
    const channel = `${WSChannel.positions_by_market}.${market}.${address}`
    this.subscribe(channel, onMessage)
  }

  public unsubscribeFromPositionsByMarket(market: string, address: string): void {
    const channel = `${WSChannel.positions_by_market}.${market}.${address}`
    this.unsubscribe(channel)
  }
}