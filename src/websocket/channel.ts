import {
  WSChannel,
  WsSubscribeAccountTradesAllParams,
  WsSubscribeAccountTradesByMarketParams,
  WsSubscribeTokenDebts,
  WsSubscribeAllTokenPrices,
  WsSubscribeBooksParams,
  WsSubscribeCandlesticksParams,
  WsSubscribeCDPBorrows,
  WsSubscribeCDPCollaterals,
  WsSubscribeCDPLiquidateCollaterals,
  WsSubscribeCommitmentParams,
  WsSubscribeLeveragesAllParams,
  WsSubscribeLeveragesByMarketParams,
  WsSubscribeMarketStatsAllParams,
  WsSubscribeMarketStatsByMarketParams,
  WsSubscribeOrdersAllParams,
  WsSubscribeOrdersByMarketParams,
  WsSubscribePoolsAllParams,
  WsSubscribePoolsByIdParams,
  WsSubscribePositionsAllParams,
  WsSubscribePositionsByMarketParams,
  WsSubscribeRecentTradesParams,
  WsSubscribeRewardDebts,
  WsSubscribeRewardSchemes,
  WsSubscribeTokenDebtByDenom,
  WsSubscribeTokenPrices,
  WsSubscribeWalletBalanceParams,
  WsSubscriptionParams,
  WsSubscribeCDPTokenSupply,
  WsSubscribeCDPTokenSupplyByDenom,
  WsSubscribeTokenSupplyByDenom,
  WsSubscribeMarketLiquidityUsageMultiplier as WsSubscribeMarketLiquidityUsageMultiplier,
  WsSubscribeOTCRFQsByAddress,
  WsSubscribeOTCQuotesForRfq,
} from "./types";

export const generateChannelId = (params: WsSubscriptionParams): string => {
  switch (params.channel) {
    case WSChannel.candlesticks: {
      const { channel, market_id, resolution } = params as WsSubscribeCandlesticksParams;
      return [channel, market_id, resolution].join(":");
    }
    case WSChannel.books: {
      const { channel, market_id } = params as WsSubscribeBooksParams;
      return [channel, market_id].join(":");
    }
    case WSChannel.recent_trades: {
      const { channel, market_id } = params as WsSubscribeRecentTradesParams;
      return [channel, market_id].join(":");
    }
    case WSChannel.orders: {
      const { channel, address } = params as WsSubscribeOrdersAllParams;
      return [channel, address].join(":");
    }
    case WSChannel.orders_by_market: {
      const { channel, market_id, address } = params as WsSubscribeOrdersByMarketParams;
      return [channel, market_id, address].join(":");
    }
    case WSChannel.balances: {
      const { channel, address } = params as WsSubscribeWalletBalanceParams;
      return [channel, address].join(":");
    }
    case WSChannel.account_trades: {
      const { channel, address } = params as WsSubscribeAccountTradesAllParams;
      return [channel, address].join(":");
    }
    case WSChannel.account_trades_by_market: {
      const { channel, market_id, address } = params as WsSubscribeAccountTradesByMarketParams;
      return [channel, market_id, address].join(":");
    }
    case WSChannel.market_stats: {
      const { channel } = params as WsSubscribeMarketStatsAllParams;
      return [channel].join(":");
    }
    case WSChannel.market_stats_by_market: {
      const { channel, market_id } = params as WsSubscribeMarketStatsByMarketParams;
      return [channel, market_id].join(":");
    }
    case WSChannel.leverages: {
      const { channel, address } = params as WsSubscribeLeveragesAllParams;
      return [channel, address].join(":");
    }
    case WSChannel.leverages_by_market: {
      const { channel, market_id, address } = params as WsSubscribeLeveragesByMarketParams;
      return [channel, market_id, address].join(":");
    }
    case WSChannel.positions: {
      const { channel, address } = params as WsSubscribePositionsAllParams;
      return [channel, address].join(":");
    }
    case WSChannel.positions_by_market: {
      const { channel, market_id, address } = params as WsSubscribePositionsByMarketParams;
      return [channel, market_id, address].join(":");
    }
    case WSChannel.pools: {
      const { channel } = params as WsSubscribePoolsAllParams;
      return [channel].join(":");
    }
    case WSChannel.pools_by_id: {
      const { channel, id } = params as WsSubscribePoolsByIdParams;
      return [channel, id].join(":");
    }
    case WSChannel.token_prices: {
      const { channel } = params as WsSubscribeAllTokenPrices;
      return [channel].join(":");
    }
    case WSChannel.token_prices_by_denom: {
      const { channel, denom } = params as WsSubscribeTokenPrices;
      return [channel, denom].join(":");
    }
    case WSChannel.commitments: {
      const { channel, address } = params as WsSubscribeCommitmentParams;
      return [channel, address].join(":");
    }
    case WSChannel.cdp_borrows: {
      const { channel, address } = params as WsSubscribeCDPBorrows;
      return [channel, address].join(":");
    }
    case WSChannel.cdp_collaterals: {
      const { channel, address } = params as WsSubscribeCDPCollaterals;
      return [channel, address].join(":");
    }
    case WSChannel.cdp_liquidate_collaterals: {
      const { channel } = params as WsSubscribeCDPLiquidateCollaterals;
      return [channel].join(":");
    }
    case WSChannel.cdp_token_debts: {
      const { channel } = params as WsSubscribeTokenDebts;
      return [channel].join(":");
    }
    case WSChannel.cdp_token_debts_by_denom: {
      const { channel, denom } = params as WsSubscribeTokenDebtByDenom;
      return [channel, denom].join(":");
    }
    case WSChannel.cdp_reward_schemes: {
      const { channel } = params as WsSubscribeRewardSchemes;
      return [channel].join(":");
    }
    case WSChannel.cdp_reward_debts: {
      const { channel, address } = params as WsSubscribeRewardDebts;
      return [channel, address].join(":");
    }
    case WSChannel.cdp_token_supply: {
      const { channel } = params as WsSubscribeCDPTokenSupply;
      return [channel].join(":");
    }
    case WSChannel.cdp_token_supply_by_denom: {
      const { channel, denom } = params as WsSubscribeCDPTokenSupplyByDenom;
      return [channel, denom].join(":");
    }
    case WSChannel.token_supply_by_denom: {
      const { channel, denom } = params as WsSubscribeTokenSupplyByDenom;
      return [channel, denom].join(":");
    }
    case WSChannel.market_liquidity_usage_multiplier: {
      const { channel } = params as WsSubscribeMarketLiquidityUsageMultiplier;
      return [channel].join(":");
    }
    case WSChannel.otc_rfqs_by_address: {
      const { channel, address } = params as WsSubscribeOTCRFQsByAddress;
      return [channel, address].join(":");
    }
    case WSChannel.otc_quotes_for_rfq: {
      const { channel, rfq_id } = params as WsSubscribeOTCQuotesForRfq;
      return [channel, rfq_id].join(":");
    }
    default:
      throw new Error(`invalid subscription channel: ${params.channel}`);
  }
};

export const parseChannelId = (rawChannelId: string): WsSubscriptionParams => {
  const [channel, param0, param1] = rawChannelId.split(":");
  switch (channel) {
    case WSChannel.candlesticks:
      return {
        channel,
        market_id: param0,
        resolution: param1,
      } as WsSubscribeCandlesticksParams;
    case WSChannel.books:
      return {
        channel,
        market_id: param0,
      } as WsSubscribeBooksParams;
    case WSChannel.recent_trades:
      return {
        channel,
        market_id: param0,
      } as WsSubscribeRecentTradesParams;
    case WSChannel.orders:
      return {
        channel,
        address: param0,
      } as WsSubscribeOrdersAllParams;
    case WSChannel.orders_by_market:
      return {
        channel,
        market_id: param0,
        address: param1,
      } as WsSubscribeOrdersByMarketParams;
    case WSChannel.balances:
      return {
        channel,
        address: param0,
      } as WsSubscribeWalletBalanceParams;
    case WSChannel.account_trades:
      return {
        channel,
        address: param0,
      } as WsSubscribeAccountTradesAllParams;
    case WSChannel.account_trades_by_market:
      return {
        channel,
        market_id: param0,
        address: param1,
      } as WsSubscribeAccountTradesByMarketParams;
    case WSChannel.market_stats:
      return {
        channel,
      } as WsSubscribeMarketStatsAllParams;
    case WSChannel.market_stats_by_market:
      return {
        channel,
        market_id: param0,
      } as WsSubscribeMarketStatsByMarketParams;
    case WSChannel.leverages:
      return {
        channel,
        address: param0,
      } as WsSubscribeLeveragesAllParams;
    case WSChannel.leverages_by_market:
      return {
        channel,
        market_id: param0,
        address: param1,
      } as WsSubscribeLeveragesByMarketParams;
    case WSChannel.positions:
      return {
        channel,
        address: param0,
      } as WsSubscribePositionsAllParams;
    case WSChannel.positions_by_market:
      return {
        channel,
        market_id: param0,
        address: param1,
      } as WsSubscribePositionsByMarketParams;
    case WSChannel.pools:
      return {
        channel,
      } as WsSubscribePoolsAllParams;
    case WSChannel.pools_by_id:
      return {
        channel,
        id: param0,
      } as WsSubscribePoolsByIdParams;
    case WSChannel.commitments:
      return {
        channel,
        address: param0,
      } as WsSubscribeCommitmentParams;
    case WSChannel.token_prices:
      return {
        channel,
      } as WsSubscribeAllTokenPrices;
    case WSChannel.token_prices_by_denom:
      return {
        channel,
        denom: param0,
      } as WsSubscribeTokenPrices;
    case WSChannel.cdp_borrows:
      return {
        channel,
        address: param0,
      } as WsSubscribeCDPBorrows;
    case WSChannel.cdp_collaterals:
      return {
        channel,
        address: param0,
      } as WsSubscribeCDPCollaterals;
    case WSChannel.cdp_liquidate_collaterals:
      return {
        channel,
      } as WsSubscribeCDPLiquidateCollaterals;
    case WSChannel.cdp_token_debts:
      return {
        channel,
      } as WsSubscribeTokenDebts;
    case WSChannel.cdp_token_debts_by_denom:
      return {
        channel,
        denom: param0,
      } as WsSubscribeTokenDebtByDenom;
    case WSChannel.cdp_reward_schemes:
      return {
        channel,
      } as WsSubscribeRewardSchemes;
    case WSChannel.cdp_reward_debts:
      return {
        channel,
        address: param0,
      } as WsSubscribeRewardDebts;
    case WSChannel.cdp_token_supply:
      return {
        channel,
      } as WsSubscribeCDPTokenSupply;
    case WSChannel.cdp_token_supply_by_denom:
      return {
        channel,
        denom: param0,
      } as WsSubscribeCDPTokenSupplyByDenom;
    case WSChannel.token_supply_by_denom:
      return {
        channel,
        denom: param0,
      } as WsSubscribeTokenSupplyByDenom;
    case WSChannel.market_liquidity_usage_multiplier:
      return {
        channel,
      } as WsSubscribeMarketLiquidityUsageMultiplier;
    case WSChannel.otc_rfqs_by_address:
      return {
        channel,
      } as WsSubscribeOTCRFQsByAddress;
    case WSChannel.otc_quotes_for_rfq:
      return {
        channel,
        rfq_id: param0,
      } as WsSubscribeOTCQuotesForRfq;
    default:
      throw new Error("Error parsing channelId");
  }
};
