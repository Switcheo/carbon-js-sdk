export enum WSChannel {
  candlesticks = "candlesticks",
  books = "books",
  recent_trades = "recent_trades",
  orders = "orders",
  orders_by_market = "orders_by_market",
  balances = "balances",
  account_trades = "account_trades",
  account_trades_by_market = "account_trades_by_market",
  market_stats = "market_stats",
  market_stats_by_market = "market_stats_by_market",
  leverages = "leverages",
  leverages_by_market = "leverages_by_market",
  positions = "positions",
  positions_by_market = "positions_by_market",
  pools = "pools",
  pools_by_id = "pools_by_id",
  token_prices = "token_prices",
  token_prices_by_denom = "token_prices_by_denom",
  commitments = "commitments",
  cdp_borrows = "cdp_borrows",
  cdp_collaterals = "cdp_collaterals",
  cdp_liquidate_collaterals = "cdp_liquidate_collaterals",
  cdp_token_debts = "cdp_token_debts",
  cdp_token_debts_by_denom = "cdp_token_debts_by_denom",
  cdp_reward_schemes = "cdp_reward_schemes",
  cdp_reward_debts = "cdp_reward_debts",
  cdp_token_supply = "cdp_token_supply",
  cdp_token_supply_by_denom = "cdp_token_supply_by_denom",
  token_supply_by_denom = "token_supply_by_denom",
  market_liquidity_usage_multiplier = "market_liquidity_usage_multiplier",
}

export enum WSRequest {
  MarketStats = "get_market_stats",
  OrderHistory = "get_order_history",
  RecentTrades = "get_recent_trades",
  Candlesticks = "get_candlesticks",
  OpenOrders = "get_open_orders",
  AccountTrades = "get_account_trades",
  Leverages = "get_leverages",
  Positions = "get_positions",
  OpenPositions = "get_open_positions",
  ClosedPosition = "get_closed_positions",
  Balances = "get_balances",
  OrderBook = "get_orderbook",
  Pools = "get_pools",
  Commitments = "get_commitments",
  CDPAllAssets = "get_cdp_all_assets",
  CDPAssets = "get_cdp_assets",
  CDPAccountCollaterals = "get_cdp_account_collaterals",
  CDPAccountDebts = "get_cdp_account_debts",
  CDPAccountData = "get_cdp_account_data",
  CDPParams = "get_cdp_params",
  CDPAllRateStrategies = "get_cdp_all_rate_strategies",
  CDPRateStrategies = "get_cdp_rate_strategies",
  CDPBorrows = "get_cdp_borrows",
  CDPTotalBorrows = "get_cdp_total_borrows",
  CDPCollaterals = "get_cdp_collaterals",
  CDPTotalCollaterals = "get_cdp_total_collaterals",
  CDPLiquidateCollateral = "get_cdp_liquidate_collateral",
  CDPTokenDebt = "get_cdp_token_debt",
  CDPAllTokenDebts = "get_cdp_all_token_debts",
  CDPStablecoinDebt = "get_cdp_stablecoin_debt",
  CDPLiquidations = "get_cdp_liquidations",
  CDPAccountStablecoin = "get_cdp_account_stablecoin",
  CDPRewardSchemes = "get_cdp_reward_schemes",
  CDPRewardsDebts = "get_cdp_reward_debts",
}

export interface WsGetRecentTradesParams {
  market: string;
}

export interface WsGetCandlesticksParams {
  market: string;
  resolution: string;
  from?: string;
  to?: string;
}

export interface WsGetOrderHistoryParams {
  market: string;
  address: string;
}

export interface WsGetOpenOrdersParams {
  market: string;
  address: string;
}

export interface WsGetAccountTradesParams {
  market: string;
  address: string;
  page?: number;
}

export interface WsGetMarketStatsParams {
  market: string;
}

export interface WsGetLeveragesParams {
  market: string;
  address: string;
}

export interface WsGetPositionsParams {
  market: string;
  address: string;
  status?: string;
  order_by?: string;
  pagination?: {
    page?: string;
    page_size?: string;
  };
}

export interface WsGetCommitmentsParams {
  address: string;
}

export interface WsGetCDPParams {}

export interface WsGetCDPAssetParams {
  denom: string;
}

export interface WsGetCDPAccountParams {
  address: string;
}

export interface WsGetCDPRateStrategiesParams {
  name: string;
}

export interface WsGetCdpTokenDebt {
  denom: string;
}

export interface WsGetCdpAllTokenDebts {}

export interface WsGetCdpStablecoinDebt {}

export interface WsGetCdpStablecoinInterest {}

export interface WsGetCdpLiquidations {}

export interface WsGetCdpRewardSchemes {}

export interface WsGetCdpRewardDebts {
  address: string;
}

export interface WsSubscribeParams {
  channel: WSChannel;
}

export interface WsSubscribeCandlesticksParams extends WsSubscribeParams {
  market: string;
  resolution: string;
  subscribeUID: string;
}

export interface WsSubscribeBooksParams extends WsSubscribeParams {
  market: string;
}

export interface WsSubscribeRecentTradesParams extends WsSubscribeParams {
  market: string;
}

export interface WsSubscribeOrdersAllParams extends WsSubscribeParams {
  address: string;
}

export interface WsSubscribeOrdersByMarketParams extends WsSubscribeParams {
  market: string;
  address: string;
}

export interface WsSubscribeWalletBalanceParams extends WsSubscribeParams {
  address: string;
}

export interface WsSubscribeAccountTradesAllParams extends WsSubscribeParams {
  address: string;
}

export interface WsSubscribeAccountTradesByMarketParams extends WsSubscribeParams {
  market: string;
  address: string;
}

export interface WsSubscribeMarketStatsAllParams extends WsSubscribeParams {}

export interface WsSubscribeMarketStatsByMarketParams extends WsSubscribeParams {
  market: string;
}

export interface WsSubscribeLeveragesAllParams extends WsSubscribeParams {
  address: string;
}

export interface WsSubscribeLeveragesByMarketParams extends WsSubscribeParams {
  market: string;
  address: string;
}

export interface WsSubscribePositionsAllParams extends WsSubscribeParams {
  address: string;
}

export interface WsSubscribePositionsByMarketParams extends WsSubscribeParams {
  market: string;
  address: string;
}

export interface WsSubscribePoolsAllParams extends WsSubscribeParams {}

export interface WsSubscribePoolsByIdParams extends WsSubscribeParams {
  id: string;
}

export interface WsSubscribeCommitmentParams extends WsSubscribeParams {
  address: string;
}

export interface WsUnsubscribeCandlesticksParams extends WsSubscribeParams {
  market: string;
  resolution: string;
}

export interface WsSubscribeCDPBorrows extends WsSubscribeParams {
  address: string;
}

export interface WsSubscribeCDPCollaterals extends WsSubscribeParams {
  address: string;
}

export interface WsSubscribeCDPLiquidateCollaterals extends WsSubscribeParams {}

export interface WsSubscribeTokenDebts extends WsSubscribeParams {}

export interface WsSubscribeTokenDebtByDenom extends WsSubscribeParams {
  denom: string;
}

export interface WsSubscribeRewardSchemes extends WsSubscribeParams {}

export interface WsSubscribeRewardDebts extends WsSubscribeParams {
  address?: string;
}

export interface WsSubscribeTokenPrices extends WsSubscribeParams {
  denom: string;
}

export interface WsSubscribeAllTokenPrices extends WsSubscribeParams {}
export interface WsSubscribeCDPTokenSupplyByDenom extends WsSubscribeParams {
  denom: string;
}

export interface WsSubscribeCDPTokenSupply extends WsSubscribeParams {}

export interface WsSubscribeTokenSupplyByDenom extends WsSubscribeParams {
  denom: string;
}

export interface WsSubscribeMarketLiquidityUsageMultiplier extends WsSubscribeParams { }

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
  | WsSubscribeTokenPrices
  | WsSubscribeAllTokenPrices
  | WsSubscribeCommitmentParams
  | WsUnsubscribeCandlesticksParams
  | WsSubscribeCDPBorrows
  | WsSubscribeCDPCollaterals
  | WsSubscribeCDPLiquidateCollaterals
  | WsSubscribeTokenDebts
  | WsSubscribeTokenDebtByDenom
  | WsSubscribeRewardSchemes
  | WsSubscribeRewardDebts
  | WsSubscribeCDPTokenSupply
  | WsSubscribeCDPTokenSupplyByDenom
  | WsSubscribeTokenSupplyByDenom
  | WsSubscribeMarketLiquidityUsageMultiplier;
