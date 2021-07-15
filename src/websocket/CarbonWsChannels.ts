type Subscribe = (channel: string, onMessage: (e: MessageEvent) => void) => void

export class CarbonWsChannels {
  subscribe: Subscribe

  constructor(subscribe: Subscribe) {
    this.subscribe = subscribe
  }

  public subscribeToRecentTrades(market: string, onMessage: (e: MessageEvent) => void): void {
    const channel = `recent_trades.${market}`
    this.subscribe(channel, onMessage)
  }

  public unsubscribeFromRecentTrades(market: string, onMessage: (e: MessageEvent) => void): void {
    const channel = `recent_trades.${market}`
    this.subscribe(channel, onMessage)
  }
}