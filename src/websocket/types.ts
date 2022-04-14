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
  pools = 'pools',
  pools_by_id = 'pools_by_id',
  commitments = 'commitments',
}

export enum WSRequest {
  MarketStats = 'get_market_stats',
  OrderHistory = 'get_order_history',
  RecentTrades = 'get_recent_trades',
  Candlesticks = 'get_candlesticks',
  OpenOrders = 'get_open_orders',
  AccountTrades = 'get_account_trades',
  Leverages = 'get_leverages',
  Positions = 'get_positions',
  OpenPositions = 'get_open_positions',
  ClosedPosition = 'get_closed_positions',
  Balances = 'get_balances',
  OrderBook = 'get_orderbook',
  Pools = 'get_pools',
  Commitments = 'get_commitments',
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
  status?: string
  order_by?: string
  pagination?: {
    page?: string
    page_size?: string
  }
}

export interface WsGetCommitmentsParams {
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

export interface WsSubscribeBooksParams extends WsSubscribeParams {
  market: string
}

export interface WsSubscribeRecentTradesParams extends WsSubscribeParams {
  market: string
}

export interface WsSubscribeOrdersAllParams extends WsSubscribeParams {
  address: string
}

export interface WsSubscribeOrdersByMarketParams extends WsSubscribeParams {
  market: string
  address: string
}

export interface WsSubscribeWalletBalanceParams extends WsSubscribeParams {
  address: string
}

export interface WsSubscribeAccountTradesAllParams extends WsSubscribeParams {
  address: string
}

export interface WsSubscribeAccountTradesByMarketParams extends WsSubscribeParams {
  market: string
  address: string
}

export interface WsSubscribeMarketStatsAllParams extends WsSubscribeParams { }

export interface WsSubscribeMarketStatsByMarketParams extends WsSubscribeParams {
  market: string
}

export interface WsSubscribeLeveragesAllParams extends WsSubscribeParams {
  address: string
}

export interface WsSubscribeLeveragesByMarketParams extends WsSubscribeParams {
  market: string
  address: string
}

export interface WsSubscribePositionsAllParams extends WsSubscribeParams {
  address: string
}

export interface WsSubscribePositionsByMarketParams extends WsSubscribeParams {
  market: string
  address: string
}

export interface WsSubscribePoolsAllParams extends WsSubscribeParams { }

export interface WsSubscribePoolsByIdParams extends WsSubscribeParams {
  id: string
}

export interface WsSubscribeCommitmentParams extends WsSubscribeParams {
  address: string
}

export interface WsUnsubscribeCandlesticksParams extends WsSubscribeParams {
  market: string
  resolution: string
}

export type WsSubscriptionParams =
  | WsSubscribeCandlesticksParams
  | WsSubscribeBooksParams
  | WsSubscribeRecentTradesParams
  | WsSubscribeOrdersAllParams
  | WsSubscribeOrdersByMarketParams
  | WsSubscribeWalletBalanceParams
  | WsSubscribeAccountTradesAllParams
  | WsSubscribeAccountTradesByMarketParams
  | WsSubscribeMarketStatsAllParams
  | WsSubscribeMarketStatsByMarketParams
  | WsSubscribeLeveragesAllParams
  | WsSubscribeLeveragesByMarketParams
  | WsSubscribePositionsAllParams
  | WsSubscribePositionsByMarketParams
  | WsSubscribePoolsAllParams
  | WsSubscribePoolsByIdParams
  | WsSubscribeCommitmentParams
  | WsUnsubscribeCandlesticksParams
