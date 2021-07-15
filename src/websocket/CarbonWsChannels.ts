type Subscribe = (channel: string, onMessage: (e: MessageEvent) => void) => void

export class CarbonWsChannels {
  subscribe: Subscribe
  unsubscribe: Subscribe

  constructor(subscribe: Subscribe, unsubscribe: Subscribe) {
    this.subscribe = subscribe
    this.unsubscribe = unsubscribe
  }

  public subscribeToRecentTrades(market: string, onMessage: (e: MessageEvent) => void): void {
    const channel = `recent_trades.${market}`
    this.subscribe(channel, onMessage)
  }

  public unsubscribeFromRecentTrades(market: string, onMessage: (e: MessageEvent) => void): void {
    const channel = `recent_trades.${market}`
    this.unsubscribe(channel, onMessage)
  }
}