import {
  WSChannel, WsSubscribeAccountTradesParams, WsSubscribeBooksParams,
  WsSubscribeCandlesticksParams,
  WsSubscribeLeveragesParams,
  WsSubscribeMarketStatsParams, WsSubscribeOrdersParams,
  WsSubscribePositionsParams, WsSubscribeRecentTradesParams,
  WsSubscribeWalletBalanceParams, WsSubscriptionParams,
} from './types'

export const generateChannelId = (params: WsSubscriptionParams): string => {
  switch (params.channel) {
    case WSChannel.candlesticks: {
      const { channel, market, resolution } = params as WsSubscribeCandlesticksParams
      return [channel, market, resolution].join('.')
    }
    case WSChannel.books: {
      const { channel, market } = params as WsSubscribeBooksParams
      return [channel, market].join('.')
    }
    case WSChannel.recent_trades: {
      const { channel, market } = params as WsSubscribeRecentTradesParams
      return [channel, market].join('.')
    }
    case WSChannel.orders: {
      const { channel, address } = params as WsSubscribeOrdersParams
      return [channel, address].join('.')
    }
    case WSChannel.orders_by_market: {
      const { channel, market, address } = params as WsSubscribeOrdersParams
      return [channel, market, address].join('.')
    }
    case WSChannel.balances: {
      const { channel, address } = params as WsSubscribeWalletBalanceParams
      return [channel, address].join('.')
    }
    case WSChannel.account_trades: {
      const { channel, address } = params as WsSubscribeAccountTradesParams
      return [channel, address].join('.')
    }
    case WSChannel.account_trades_by_market: {
      const { channel, market, address } = params as WsSubscribeAccountTradesParams
      return [channel, market, address].join('.')
    }
    case WSChannel.market_stats: {
      const { channel } = params as WsSubscribeMarketStatsParams
      return [channel].join('.')
    }
    case WSChannel.market_stats_by_market: {
      const { channel, market } = params as WsSubscribeMarketStatsParams
      return [channel, market].join('.')
    }
    case WSChannel.leverages: {
      const { channel, address } = params as WsSubscribeWalletBalanceParams
      return [channel, address].join('.')
    }
    case WSChannel.leverages_by_market: {
      const { channel, market, address } = params as WsSubscribeOrdersParams
      return [channel, market, address].join('.')
    }
    case WSChannel.positions: {
      const { channel, address } = params as WsSubscribePositionsParams
      return [channel, address].join('.')
    }
    case WSChannel.positions_by_market: {
      const { channel, market, address } = params as WsSubscribePositionsParams
      return [channel, market, address].join('.')
    }
    default:
      throw new Error(`invalid subscription channel: ${params.channel}`)
  }
}

export const parseChannelId = (rawChannelId: string): WsSubscriptionParams => {
  const [channel, market, resolution, address] = rawChannelId.split('.')
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
      } as WsSubscribeOrdersParams
    case WSChannel.orders_by_market:
      return {
        channel,
        market,
        address,
      } as WsSubscribeOrdersParams
    case WSChannel.balances:
      return {
        channel,
        address,
      } as WsSubscribeWalletBalanceParams
    case WSChannel.account_trades:
      return {
        channel,
        address,
      } as WsSubscribeAccountTradesParams
    case WSChannel.account_trades_by_market:
      return {
        channel,
        market,
        address,
      } as WsSubscribeAccountTradesParams
    case WSChannel.market_stats:
      return {
        channel,
      } as WsSubscribeMarketStatsParams
    case WSChannel.market_stats_by_market:
      return {
        channel,
        market,
      } as WsSubscribeMarketStatsParams
    case WSChannel.leverages:
      return {
        channel,
        address,
      } as WsSubscribeLeveragesParams
    case WSChannel.leverages_by_market:
      return {
        channel,
        market,
        address,
      } as WsSubscribeLeveragesParams
    case WSChannel.positions:
      return {
        channel,
        address,
      } as WsSubscribePositionsParams
    case WSChannel.positions_by_market:
      return {
        channel,
        market,
        address,
      } as WsSubscribePositionsParams
    default:
      throw new Error('Error parsing channelId')
  }
}
