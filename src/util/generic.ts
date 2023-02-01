import { sha256 } from "@cosmjs/crypto";
import { Tendermint34Client } from "@cosmjs/tendermint-rpc";

export const overrideConfig = <T = unknown>(defaults: T, override?: Partial<T>) => {
  const result: T = { ...defaults };

  if (!override) return result;

  for (const key of Object.keys(override)) {
    // @ts-ignore
    const member = override[key];
    if (typeof member === "undefined") continue;

    if (typeof member === "object") {
      // @ts-ignore
      result[key] = overrideConfig(result[key], member);
    } else {
      // @ts-ignore
      result[key] = member;
    }
  }

  return result;
};

export const sortObject = (input: any): unknown => {
  if (typeof input !== "object") return input;
  if (Array.isArray(input)) return input.map(sortObject);

  const output = {};
  Object.keys(input)
    .sort()

    // @ts-ignore noImplicitAny
    .forEach((key) => (output[key] = sortObject(input[key])));

  return output;
};

export const stripHexPrefix = (input: string) => {
  return input?.slice(0, 2) === "0x" ? input.slice(2) : input;
};

export const appendHexPrefix = (input: string) => {
  return input?.slice(0, 2) === "0x" ? input : `0x${input}`;
};

export const computeTxHash = (bytes?: Uint8Array | Buffer): string | undefined => {
  if (!bytes) return bytes;

  return toTxHash(sha256(bytes));
};
export const toTxHash = (bytes?: Uint8Array | Buffer): string | undefined => {
  if (!bytes) return bytes;

  return Buffer.from(bytes).toString("hex").toUpperCase();
};

/**
 * Make tendermint client send RPC requests with the same request
 * ID instead of using a random id that is unread in the client.
 *
 * Motivation: enhanced cache-ability on API providers.
 *
 * Broadcast methods are untouched to ensure retries don't hit cache.
 */
export const modifyTmClient = (tmClient: Tendermint34Client) => {
  try {
    const p = (tmClient as any).p;
    const newEncoder = { ...p };
    for (const method of Object.getOwnPropertyNames(p)) {
      if (method === "encodeBroadcastTx" || typeof p[method] !== "function") continue;
      const ogHandler = p[method];
      newEncoder[method] = (req: any) => {
        const result = ogHandler(req);
        if (req.method === "abci_query" && req.params.path === "/cosmos.auth.v1beta1.Query/Account") {
          return result;
        }

        return {
          ...result,
          id: 42,
        };
      };
    }
    (tmClient as any).p = newEncoder;
  } catch (error) {
    console.error("failed to modify tm client");
    console.error(error);
  }

  return tmClient;
};

export const callIgnoreError = <T = any>(runnable: () => T) => {
  return runnable();
};

export class QueueManager<T = void, V = void> {
  triggerDelay: number;
  maxDelayThreshold: number;

  currTriggerThreshold: number = 0;
  currQueueTrigger: NodeJS.Timeout | null = null;

  isProcessingQueue: boolean = false;

  private queue: T[] = [];

  constructor(private readonly processor: (input: T) => V, options: QueueManager.Options = {}) {
    this.triggerDelay = options.triggerDelay ?? 300;
    this.maxDelayThreshold = options.maxDelayThreshold ?? 1000;
  }

  public enqueue(task: T, skipTrigger = false) {
    this.queue.unshift(task);
    if (!skipTrigger) this.trigger();
  }

  public trigger() {
    const currentTimeMillis = new Date().getTime();

    // do not shift delay later if next schedule
    if (this.currTriggerThreshold && currentTimeMillis + this.triggerDelay > this.currTriggerThreshold) {
      return;
    }

    if (!this.currTriggerThreshold && this.maxDelayThreshold > 0) {
      this.currTriggerThreshold = currentTimeMillis + this.maxDelayThreshold; // max wait for 1s before dispatching queue
    }

    clearTimeout(this.currQueueTrigger as unknown as number);

    this.currQueueTrigger = setTimeout(this.process.bind(this), this.triggerDelay);
  }

  private async process() {
    if (this.isProcessingQueue) return;
    this.isProcessingQueue = true; // activate sync lock
    this.currTriggerThreshold = 0; // reset to 0

    try {
      while (this.queue.length) {
        const item = this.queue.pop()!;
        try {
          await this.processor(item);
        } catch (error) {
          console.error("queue manager process item failed");
          console.error(error);
        }
      }
    } finally {
      this.isProcessingQueue = false;
    }
  }
}
export namespace QueueManager {
  export interface Options {
    triggerDelay?: number;
    maxDelayThreshold?: number;
  }
}
