type Subscribe = (channel: string, onMessage: (e: MessageEvent) => void) => void

export class CarbonWsSubClient {
  subscribe: Subscribe

  constructor(subscribe: Subscribe) {
    this.subscribe = subscribe
  }
}