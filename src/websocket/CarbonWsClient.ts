interface Subscription {
  channel: string
  onMessage: (e: MessageEvent) => void
}

export class CarbonSocketWrapper {
  url: string | null
  socket: WebSocket | null
  subscriptions: Array<Subscription>

  constructor() {
    this.url = null
    this.socket = null
    this.subscriptions = []
  }

  public connect(url: string) {
    this.url = url
    this.socket = new WebSocket(url)
    this.socket.onmessage = this.onMessage
  }

  public disconnect() {
    if (this.socket) {
      this.socket.close()
      this.socket = null
    }
  }

  private onMessage(e: MessageEvent) {
    const existingSubscription = this.subscriptions.find((o: Subscription) => 
      o.channel === e?.data?.result?.channel
    )
    if (existingSubscription) {
      existingSubscription.onMessage(e)
    }
  }

  public subscribeToRecentTrades(market: string, onMessage: (e: MessageEvent) => void): void {
    const channel = `recent_trades.${market}`
    this.subscribe(channel, onMessage)
  }

  public unsubscribeFromRecentTrades(market: string, onMessage: (e: MessageEvent) => void): void {
    const channel = `recent_trades.${market}`
    this.subscribe(channel, onMessage)
  }


  public subscribe(channel: string, onMessage: (e: MessageEvent) => void): void {
    if (!this.socket) return

    const msg = JSON.stringify({
      id: channel,
      method: 'subscribe',
      params: { "channels": [...channel] }
    })

    this.socket.send(msg)
    this.subscriptions.push({
      channel: channel,
      onMessage
    })
  }

  public unsubscribe(channel: string, onMessage: (e: MessageEvent) => void): void {
    try {
      if (!this.socket) return

      const msg = JSON.stringify({
        id: channel,
        method: 'unsubscribe',
        params: { "channels": [...channel] }
      })

      this.socket.send(msg)
      this.subscriptions.push({
        channel: channel,
        onMessage
      })
    } catch (e) { console.log(e.message) }
  }
}