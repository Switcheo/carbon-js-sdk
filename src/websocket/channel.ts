import {
  WSChannel, WsSubscribeAccountTradesAllParams, WsSubscribeAccountTradesByMarketParams, WsSubscribeBooksParams,
  WsSubscribeCandlesticksParams, WsSubscribeCommitmentParams, WsSubscribeLeveragesAllParams,
  WsSubscribeLeveragesByMarketParams, WsSubscribeMarketStatsAllParams, WsSubscribeMarketStatsByMarketParams,
  WsSubscribeOrdersAllParams,WsSubscribeOrdersByMarketParams, WsSubscribePoolsAllParams, WsSubscribePoolsByIdParams,
  WsSubscribePositionsAllParams, WsSubscribePositionsByMarketParams, WsSubscribeRecentTradesParams,
  WsSubscribeWalletBalanceParams, WsSubscriptionParams,
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
    default:
      throw new Error(`invalid subscription channel: ${params.channel}`)
  }
}

export const parseChannelId = (rawChannelId: string): WsSubscriptionParams => {
  const [channel, market, resolution, address, id] = rawChannelId.split(':')
  switch (channel) {
    case WSChannel.candlesticks:
      return {
        channel,
        market,
        resolution,
      } as WsSubscribeCandlesticksParams
    case WSChannel.books:
      return {
        channel,
        market,
      } as WsSubscribeBooksParams
    case WSChannel.recent_trades:
      return {
        channel,
        market,
      } as WsSubscribeRecentTradesParams
    case WSChannel.orders:
      return {
        channel,
        address,
      } as WsSubscribeOrdersAllParams
    case WSChannel.orders_by_market:
      return {
        channel,
        market,
        address,
      } as WsSubscribeOrdersByMarketParams
    case WSChannel.balances:
      return {
        channel,
        address,
      } as WsSubscribeWalletBalanceParams
    case WSChannel.account_trades:
      return {
        channel,
        address,
      } as WsSubscribeAccountTradesAllParams
    case WSChannel.account_trades_by_market:
      return {
        channel,
        market,
        address,
      } as WsSubscribeAccountTradesByMarketParams
    case WSChannel.market_stats:
      return {
        channel,
      } as WsSubscribeMarketStatsAllParams
    case WSChannel.market_stats_by_market:
      return {
        channel,
        market,
      } as WsSubscribeMarketStatsByMarketParams
    case WSChannel.leverages:
      return {
        channel,
        address,
      } as WsSubscribeLeveragesAllParams
    case WSChannel.leverages_by_market:
      return {
        channel,
        market,
        address,
      } as WsSubscribeLeveragesByMarketParams
    case WSChannel.positions:
      return {
        channel,
        address,
      } as WsSubscribePositionsAllParams
    case WSChannel.positions_by_market:
      return {
        channel,
        market,
        address,
      } as WsSubscribePositionsByMarketParams
    case WSChannel.pools:
      return {
        channel,
      } as WsSubscribePoolsAllParams
    case WSChannel.pools_by_id:
      return {
        channel,
        id,
      } as WsSubscribePoolsByIdParams
    case WSChannel.commitments:
      return {
        channel,
        address,
      } as WsSubscribeCommitmentParams
    default:
      throw new Error('Error parsing channelId')
  }
}
