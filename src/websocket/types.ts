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

export interface WsGetRecentTradesParams {
  market: string
}

export interface WsGetCandlesticksParams {
  market: string
  resolution: string
  from?: string
  to?: string
}
export interface WsGetOrderHistoryParams {
  market: string
  address: string
}

export interface WsGetOpenOrdersParams {
  market: string
  address: string
}

export interface WsGetAccountTradesParams {
  market: string
  address: string
  page?: number
}

export interface WsGetMarketStatsParams {
  market: string
}

export interface WsGetLeveragesParams {
  market: string
  address: string
}

export interface WsGetPositionsParams {
  market: string
  address: string
}

export interface WsSubscribeParams {
  channel: WSChannel
}

export interface WsSubscribeCandlesticksParams extends WsSubscribeParams {
  market: string
  resolution: string
  subscribeUID: string
}

export interface WsSubscribeRecentTradesParams extends WsSubscribeParams {
  market: string
}

export interface WsSubscribeOrdersParams extends WsSubscribeParams {
  market?: string
  address: string
}

export interface WsSubscribeBooksParams extends WsSubscribeParams {
  market: string
}

export interface WsSubscribeWalletBalanceParams extends WsSubscribeParams {
  address: string
}

export interface WsSubscribeAccountTradesParams extends WsSubscribeParams {
  market?: string
  address: string
}

export interface WsSubscribeMarketStatsParams extends WsSubscribeParams {
  market?: string
}

export interface WsSubscribeLeveragesParams extends WsSubscribeParams {
  market?: string
  address: string
}

export interface WsSubscribePositionsParams extends WsSubscribeParams {
  market?: string
  address: string
}

export interface WsUnsubscribeCandlesticksParams extends WsSubscribeParams {
  market: string
  resolution: string
}

export type WsSubscriptionParams =
  | WsSubscribeCandlesticksParams
  | WsSubscribeRecentTradesParams
  | WsSubscribeOrdersParams
  | WsSubscribeBooksParams
  | WsSubscribeWalletBalanceParams
  | WsSubscribeAccountTradesParams
  | WsSubscribeMarketStatsParams
  | WsSubscribeLeveragesParams
  | WsSubscribePositionsParams
  | WsUnsubscribeCandlesticksParams
