import { CarbonWsSubClient } from "./CarbonWsSubClient";

export class RecentTradesWsClient extends CarbonWsSubClient {
  public subscribeToRecentTrades(market: string, onMessage: (e: MessageEvent) => void): void {
    const channel = `recent_trades.${market}`
    this.subscribe(channel, onMessage)
  }

  public unsubscribeFromRecentTrades(market: string, onMessage: (e: MessageEvent) => void): void {
    const channel = `recent_trades.${market}`
    this.subscribe(channel, onMessage)
  }
}