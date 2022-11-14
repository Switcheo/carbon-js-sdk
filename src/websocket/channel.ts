import {
  WSChannel, WsSubscribeAccountTradesAllParams, WsSubscribeAccountTradesByMarketParams, WsSubscribeAllTokenDebts, WsSubscribeBooksParams,
  WsSubscribeCandlesticksParams, WsSubscribeCDPBorrows, WsSubscribeCDPCollaterals, WsSubscribeCDPLiquidateCollaterals,
  WsSubscribeCommitmentParams, WsSubscribeLeveragesAllParams, WsSubscribeLeveragesByMarketParams,
  WsSubscribeMarketStatsAllParams, WsSubscribeMarketStatsByMarketParams, WsSubscribeOrdersAllParams,
  WsSubscribeOrdersByMarketParams, WsSubscribePoolsAllParams, WsSubscribePoolsByIdParams, WsSubscribePositionsAllParams,
  WsSubscribePositionsByMarketParams, WsSubscribeRecentTradesParams, WsSubscribeWalletBalanceParams, WsSubscriptionParams,
  WsSubscribeTokenDebt,
  WsSubscribeRewardSchemes,
  WsSubscribeRewardDebts,
} from './types'

export const generateChannelId = (params: WsSubscriptionParams): string => {
  switch (params.channel) {
    case WSChannel.candlesticks: {
      const { channel, market, resolution } = params as WsSubscribeCandlesticksParams
      return [channel, market, resolution].join(':')
    }
    case WSChannel.books: {
      const { channel, market } = params as WsSubscribeBooksParams
      return [channel, market].join(':')
    }
    case WSChannel.recent_trades: {
      const { channel, market } = params as WsSubscribeRecentTradesParams
      return [channel, market].join(':')
    }
    case WSChannel.orders: {
      const { channel, address } = params as WsSubscribeOrdersAllParams
      return [channel, address].join(':')
    }
    case WSChannel.orders_by_market: {
      const { channel, market, address } = params as WsSubscribeOrdersByMarketParams
      return [channel, market, address].join(':')
    }
    case WSChannel.balances: {
      const { channel, address } = params as WsSubscribeWalletBalanceParams
      return [channel, address].join(':')
    }
    case WSChannel.account_trades: {
      const { channel, address } = params as WsSubscribeAccountTradesAllParams
      return [channel, address].join(':')
    }
    case WSChannel.account_trades_by_market: {
      const { channel, market, address } = params as WsSubscribeAccountTradesByMarketParams
      return [channel, market, address].join(':')
    }
    case WSChannel.market_stats: {
      const { channel } = params as WsSubscribeMarketStatsAllParams
      return [channel].join(':')
    }
    case WSChannel.market_stats_by_market: {
      const { channel, market } = params as WsSubscribeMarketStatsByMarketParams
      return [channel, market].join(':')
    }
    case WSChannel.leverages: {
      const { channel, address } = params as WsSubscribeLeveragesAllParams
      return [channel, address].join(':')
    }
    case WSChannel.leverages_by_market: {
      const { channel, market, address } = params as WsSubscribeLeveragesByMarketParams
      return [channel, market, address].join(':')
    }
    case WSChannel.positions: {
      const { channel, address } = params as WsSubscribePositionsAllParams
      return [channel, address].join(':')
    }
    case WSChannel.positions_by_market: {
      const { channel, market, address } = params as WsSubscribePositionsByMarketParams
      return [channel, market, address].join(':')
    }
    case WSChannel.pools: {
      const { channel } = params as WsSubscribePoolsAllParams
      return [channel].join(':')
    }
    case WSChannel.pools_by_id: {
      const { channel, id } = params as WsSubscribePoolsByIdParams
      return [channel, id].join(':')
    }
    case WSChannel.commitments: {
      const { channel, address } = params as WsSubscribeCommitmentParams
      return [channel, address].join(':')
    }
    case WSChannel.cdp_borrows: {
      const { channel, address } = params as WsSubscribeCDPBorrows
      return [channel, address].join(':')
    }
    case WSChannel.cdp_collaterals: {
      const { channel, address } = params as WsSubscribeCDPCollaterals
      return [channel, address].join(':')
    }
    case WSChannel.cdp_liquidate_collaterals: {
      const { channel } = params as WsSubscribeCDPLiquidateCollaterals
      return [channel].join(':')
    }
    case WSChannel.cdp_all_token_debts: {
      const { channel } = params as WsSubscribeAllTokenDebts
      return [channel].join(':')
    }
    case WSChannel.cdp_token_debt: {
      const { channel, denom } = params as WsSubscribeTokenDebt
      return [channel, denom].join(':')
    }
    case WSChannel.cdp_reward_schemes: {
      const { channel, address } = params as WsSubscribeRewardSchemes
      return [channel, address].join(':')
    }
    case WSChannel.cdp_reward_debts: {
      const { channel, address } = params as WsSubscribeRewardDebts
      return [channel, address].join(':')
    }
    default:
      throw new Error(`invalid subscription channel: ${params.channel}`)
  }
}

export const parseChannelId = (rawChannelId: string): WsSubscriptionParams => {
  const [channel, param0, param1] = rawChannelId.split(':')
  switch (channel) {
    case WSChannel.candlesticks:
      return {
        channel,
        market: param0,
        resolution: param1,
      } as WsSubscribeCandlesticksParams
    case WSChannel.books:
      return {
        channel,
        market: param0,
      } as WsSubscribeBooksParams
    case WSChannel.recent_trades:
      return {
        channel,
        market: param0,
      } as WsSubscribeRecentTradesParams
    case WSChannel.orders:
      return {
        channel,
        address: param0,
      } as WsSubscribeOrdersAllParams
    case WSChannel.orders_by_market:
      return {
        channel,
        market: param0,
        address: param1,
      } as WsSubscribeOrdersByMarketParams
    case WSChannel.balances:
      return {
        channel,
        address: param0,
      } as WsSubscribeWalletBalanceParams
    case WSChannel.account_trades:
      return {
        channel,
        address: param0,
      } as WsSubscribeAccountTradesAllParams
    case WSChannel.account_trades_by_market:
      return {
        channel,
        market: param0,
        address: param1,
      } as WsSubscribeAccountTradesByMarketParams
    case WSChannel.market_stats:
      return {
        channel,
      } as WsSubscribeMarketStatsAllParams
    case WSChannel.market_stats_by_market:
      return {
        channel,
        market: param0,
      } as WsSubscribeMarketStatsByMarketParams
    case WSChannel.leverages:
      return {
        channel,
        address: param0,
      } as WsSubscribeLeveragesAllParams
    case WSChannel.leverages_by_market:
      return {
        channel,
        market: param0,
        address: param1,
      } as WsSubscribeLeveragesByMarketParams
    case WSChannel.positions:
      return {
        channel,
        address: param0,
      } as WsSubscribePositionsAllParams
    case WSChannel.positions_by_market:
      return {
        channel,
        market: param0,
        address: param1,
      } as WsSubscribePositionsByMarketParams
    case WSChannel.pools:
      return {
        channel,
      } as WsSubscribePoolsAllParams
    case WSChannel.pools_by_id:
      return {
        channel,
        id: param0,
      } as WsSubscribePoolsByIdParams
    case WSChannel.commitments:
      return {
        channel,
        address: param0,
      } as WsSubscribeCommitmentParams
    case WSChannel.cdp_borrows:
      return {
        channel,
        address: param0,
      } as WsSubscribeCDPBorrows
    case WSChannel.cdp_collaterals:
      return {
        channel,
        address: param0,
      } as WsSubscribeCDPCollaterals
    case WSChannel.cdp_liquidate_collaterals:
      return {
        channel,
      } as WsSubscribeCDPLiquidateCollaterals
    case WSChannel.cdp_all_token_debts:
      return {
        channel,
      } as WsSubscribeAllTokenDebts
    case WSChannel.cdp_token_debt:
      return {
        channel,
        denom: param0,
      } as WsSubscribeTokenDebt
    case WSChannel.cdp_reward_schemes:
      return {
        channel,
        address: param0,
      } as WsSubscribeRewardSchemes
    case WSChannel.cdp_reward_debts:
      return {
        channel,
        address: param0,
      } as WsSubscribeRewardDebts
    default:
      throw new Error('Error parsing channelId')
  }
}
