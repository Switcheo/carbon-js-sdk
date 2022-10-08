import { NetworkConfig } from "@carbon-sdk/constant"
import { Insights } from "@carbon-sdk/index"
import { APIUtils } from "@carbon-sdk/util"

class InsightsQueryClient {
  public readonly apiManager: APIUtils.APIManager<typeof Insights.InsightsEndpoints>

  constructor(
    config: NetworkConfig
  ) {
    const responseParser: APIUtils.ResponseParser = this.parseResponse.bind(this);
    this.apiManager = new APIUtils.APIManager(config.insightsUrl, Insights.InsightsEndpoints, responseParser)
  }

  async parseResponse(response: Response): Promise<APIUtils.RequestResult> {
    const { status, statusText, headers, url } = response
    const result: APIUtils.RequestResult = { status, statusText, headers, url }

    try {
      const responseJson = await response.json()
      result.data = responseJson

    } catch (e) {
      console.error(e);
    }

    if (response.status >= 400 && response.status < 600) {
      throw new APIUtils.RequestError(result, result.data?.error?.message || 'unknown error')
    }

    return result;
  }

  // Chain api
  async Stake(req: Insights.QueryGetStakeRequest = {}): Promise<Insights.InsightsQueryResponse<Insights.QueryGetStakeResponse>> {
    const request = this.apiManager.path('chain/stake', {}, req)
    const response = await request.get()
    return response.data as Insights.InsightsQueryResponse<Insights.QueryGetStakeResponse>
  }

  async Transaction(req: Insights.QueryGetTransactionRequest = {}) :
    Promise<Insights.InsightsQueryResponse<Insights.QueryGetTransactionResponse>> {
    const request = this.apiManager.path('chain/transaction', {}, req)
    const response = await request.get()
    return response.data as Insights.InsightsQueryResponse<Insights.QueryGetTransactionResponse>
  }

  async AvgBlockTime(req: Insights.QueryGetAvgBlockTimeRequest) :
  Promise<Insights.InsightsQueryResponse<Insights.QueryGetAvgBlockTimeResponse>> {
    const queryParams = {
      hours: req.hours
    }
    const request = this.apiManager.path('chain/blocktime', {}, queryParams)
    const response = await request.get()
    return response.data as Insights.InsightsQueryResponse<Insights.QueryGetAvgBlockTimeResponse>
  }

  // User api
  async ActiveAccounts(req: Insights.QueryGetActiveAccountsRequest = {}): Promise<Insights.InsightsQueryResponse<Insights.QueryGetActiveAccountsResponse>> {
    const request = this.apiManager.path('user/active', {}, req)
    const response = await request.get()
    return response.data as Insights.InsightsQueryResponse<Insights.QueryGetActiveAccountsResponse>
  }

  async UserProfile(req: Insights.QueryGetUserProfileRequest): Promise<Insights.InsightsQueryResponse<Insights.QueryGetUserProfileResponse>> {
    const request = this.apiManager.path('user/profile', {}, req)
    const response = await request.get()
    return response.data as Insights.InsightsQueryResponse<Insights.QueryGetUserProfileResponse>
  }

  async UserGrowth(req: Insights.QueryGetUserGrowthRequest = {}): Promise<Insights.InsightsQueryResponse<Insights.QueryGetUserGrowthResponse>> {
    const request = this.apiManager.path('user/growth', {}, req)
    const response = await request.get()
    return response.data as Insights.InsightsQueryResponse<Insights.QueryGetUserGrowthResponse>
  }

  async TotalUsers(req: Insights.QueryGetTotalUsersRequest = {}) :
    Promise<Insights.InsightsQueryResponse<Insights.QueryGetTotalUsersResponse>> {
    const request = this.apiManager.path('user/total', {}, req)
    const response = await request.get()
    return response.data as Insights.InsightsQueryResponse<Insights.QueryGetTotalUsersResponse>
  }

  // Pool api
  async Pools(req: Insights.QueryGetPoolsRequest = {}): Promise<Insights.InsightsQueryResponse<Insights.QueryGetPoolsResponse>> {
    const request = this.apiManager.path('pool/list', {}, req)
    const response = await request.get()
    return response.data as Insights.InsightsQueryResponse<Insights.QueryGetPoolsResponse>
  }

  async PoolHistory(query: Insights.QueryGetPoolHistoryRequest): Promise<Insights.InsightsQueryResponse<Insights.QueryGetPoolHistoryResponse>> {
    const request = this.apiManager.path('pool/history', {}, {
      sort: query.sort ?? 'DESC',
      limit: query.limit ?? 100,
      offset: query.offset ?? 0,
      poolId: query.poolId
    })
    const response = await request.get()
    return response.data as Insights.InsightsQueryResponse<Insights.QueryGetPoolHistoryResponse>
  }

  async PoolVolume(req: Insights.QueryGetPoolVolumeRequest): Promise<Insights.InsightsQueryResponse<Insights.QueryGetPoolVolumeResponse>> {
    const routeParams = { poolId: req.poolId }
    const queryParams = {
      interval: req.interval,
      from: req.from,
      until: req.until,
    }
    const request = this.apiManager.path('pool/volume', routeParams, queryParams)
    const response = await request.get()
    return response.data as Insights.InsightsQueryResponse<Insights.QueryGetPoolVolumeResponse>
  }

  async PoolsVolume(req: Insights.QueryGetPoolsVolumeRequest = {}): Promise<Insights.InsightsQueryResponse<Insights.QueryGetPoolsVolumeResponse>> {
    const queryParams = {
      market: req.market,
      interval: req.interval,
      from: req.from,
      until: req.until,
    }
    const request = this.apiManager.path('pools/volume', {}, queryParams)
    const response = await request.get()
    return response.data as Insights.InsightsQueryResponse<Insights.QueryGetPoolsVolumeResponse>
  }

  async CompetitionList(req: Insights.QueryGetCompetitionListRequest = {}): Promise<Insights.InsightsQueryResponse<Insights.QueryGetCompetitionListResponse>> {
    const request = this.apiManager.path('competition/list', {}, req)
    const response = await request.get()
    return response.data as Insights.InsightsQueryResponse<Insights.QueryGetCompetitionListResponse>
  }

  async VolumeCompetitionLeaderboard(req: Insights.QueryGetVolumeCompetitionLeaderboardRequest): Promise<Insights.InsightsQueryResponse<Insights.QueryGetVolumeCompetitionLeaderboardResponse>> {
    const queryParams = {
      competitionId: req.competitionId,
      ...req.from && { from: req.from },
      ...req.until && { until: req.until },
      ...req.market && { market: req.market },
    }
    const request = this.apiManager.path('competition/leaderboard', {}, queryParams)
    const response = await request.get()
    return response.data as Insights.InsightsQueryResponse<Insights.QueryGetVolumeCompetitionLeaderboardResponse>
  }

  async PNLCompetitionLeaderboard(req: Insights.QueryGetPNLCompetitionLeaderboardRequest): Promise<Insights.InsightsQueryResponse<Insights.QueryGetPNLCompetitionLeaderboardResponse>> {
    const queryParams = {
      competitionId: req.competitionId,
      ...req.market && { market: req.market },
    }
    const request = this.apiManager.path('competition/leaderboardpnl', {}, queryParams)
    const response = await request.get()
    return response.data as Insights.InsightsQueryResponse<Insights.QueryGetPNLCompetitionLeaderboardResponse>
  }

  async PoolsLiquidity(req: Insights.QueryGetPoolsLiquidityRequest = {}): Promise<Insights.InsightsQueryResponse<Insights.QueryGetPoolsLiquidityResponse>> {
    const queryParams = {
      poolId: req.poolId,
      interval: req.interval,
      from: req.from,
      until: req.until,
    }
    const request = this.apiManager.path('pools/liquidity', {}, queryParams)
    const response = await request.get()
    return response.data as Insights.InsightsQueryResponse<Insights.QueryGetPoolsLiquidityResponse>
  }

  async MarketsVolume(req: Insights.QueryGetMarketVolumeRequest = {}): Promise<Insights.InsightsQueryResponse<Insights.QueryGetMarketVolumeResponse>> {
    const queryParams = {
      market: req.market,
      interval: req.interval,
      from: req.from,
      until: req.until,
    }
    const request = this.apiManager.path('market/volume', {}, queryParams)
    const response = await request.get()
    return response.data as Insights.InsightsQueryResponse<Insights.QueryGetMarketVolumeResponse>
  }

  // Node api
  async Nodes(req: Insights.QueryGetNodesRequest = {}): Promise<Insights.InsightsQueryResponse<Insights.QueryGetNodesResponse>> {
    const request = this.apiManager.path('node/list', {}, req)
    const response = await request.get()
    return response.data as Insights.InsightsQueryResponse<Insights.QueryGetNodesResponse>
  }


  // Balance api
  async BalanceTotal(req: Insights.QueryGetTotalBalanceRequest): Promise<Insights.InsightsQueryResponse<Insights.QueryGetTotalBalanceResponse>> {
    const request = this.apiManager.path('balance/total', {}, req)
    const response = await request.get()
    return response.data as Insights.InsightsQueryResponse<Insights.QueryGetTotalBalanceResponse>
  }

  async BalanceList(req: Insights.QueryGetBalanceListRequest): Promise<Insights.InsightsQueryResponse<Insights.QueryGetBalanceListResponse>> {
    const request = this.apiManager.path('balance/list', {}, req)
    const response = await request.get()
    return response.data as Insights.InsightsQueryResponse<Insights.QueryGetBalanceListResponse>
  }

  async BalanceChange(req: Insights.QueryGetBalanceChangeRequest): Promise<Insights.InsightsQueryResponse<Insights.QueryGetBalanceChangeResponse>> {
    const request = this.apiManager.path('balance/change', req)
    const response = await request.get()
    return response.data as Insights.InsightsQueryResponse<Insights.QueryGetBalanceChangeResponse>
  }

  async BalanceHistory(req: Insights.QueryGetBalanceHistoryRequest): Promise<Insights.InsightsQueryResponse<Insights.QueryGetBalanceHistoryResponse>> {
    const routeParams = {
      address: req.address,
      denom: req.denom,
    }
    const queryParams = {
      interval: req.interval,
      limit: req.limit,
    }
    const request = this.apiManager.path('balance/history', routeParams, queryParams)
    const response = await request.get()
    return response.data as Insights.InsightsQueryResponse<Insights.QueryGetBalanceHistoryResponse>
  }

  async BalanceSupply(): Promise<Insights.InsightsQueryResponse<Insights.QueryGetBalanceSupplyResponse>> {
    const request = this.apiManager.path('balance/supply')
    const response = await request.get()
    return response.data as Insights.InsightsQueryResponse<Insights.QueryGetBalanceSupplyResponse>
  }

  async BalanceDistribution(req: Insights.QueryGetBalanceDistributionRequest = {}): Promise<Insights.InsightsQueryResponse<Insights.QueryGetBalanceDistributionResponse>> {
    const request = this.apiManager.path('balance/distribution', {}, req)
    const response = await request.get()
    return response.data as Insights.InsightsQueryResponse<Insights.QueryGetBalanceDistributionResponse>
  }

  // Positions api
  async LiquidationEngine(query: Insights.GetLiquidationEngineParams): Promise<Insights.InsightsQueryResponse<Insights.QueryGetLiquidationEngineResponse>> {
    const request = this.apiManager.path('position/liquidation/engine', {}, {
      sort: query.sort ?? 'DESC',
      limit: query.limit ?? 100,
      offset: query.offset ?? 0
    })
    const response = await request.get()
    return response.data as Insights.InsightsQueryResponse<Insights.QueryGetLiquidationEngineResponse>
  }

  async LiquidationAndADL(query: Insights.GetLiquidationAndADLQueryParams): Promise<Insights.InsightsQueryResponse<Insights.QueryGetLiquidationAndADLResponse>> {
    const request = this.apiManager.path('position/liquidation', {}, {
      sort: query.sort ?? 'DESC',
      limit: query.limit ?? 100,
      offset: query.offset ?? 0
    })
    const response = await request.get()
    return response.data as Insights.InsightsQueryResponse<Insights.QueryGetLiquidationAndADLResponse>
  }

  async PositionsView(req: Insights.GetPositionsViewPathParams, query: Insights.GetPositionsViewQueryParams): Promise<Insights.InsightsQueryResponse<Insights.QueryGetPositionsViewResponse>> {
    const request = this.apiManager.path('position/view', req, {
      sort: query.sort ?? 'DESC',
      limit: query.limit ?? 100,
      offset: query.offset ?? 0,
      market: query.market ?? ''
    })
    const response = await request.get()
    return response.data as Insights.InsightsQueryResponse<Insights.QueryGetPositionsViewResponse>
  }

  async Leaderboard(req: Insights.GetLeaderboardPathParams, query: Insights.GetLeaderboardQueryParams): Promise<Insights.InsightsQueryResponse<Insights.QueryGetLeaderboardResponse>> {
    const request = this.apiManager.path('position/leaderboard', req, {
      market: query.market ?? '',
      sort: query.sort ?? 'DESC',
      limit: query.limit ?? 100,
      offset: query.offset ?? 0,
      address: query.address ?? '',
    })
    const response = await request.get()
    return response.data as Insights.InsightsQueryResponse<Insights.QueryGetLeaderboardResponse>
  }

  //Coin Gecko Tokens
  async DenomToGeckoIdMap(): Promise<Insights.InsightsQueryResponse<Insights.QueryDenomToGeckoIdMap>> {
    const request = this.apiManager.path('info/denom_gecko_map')
    const response = await request.get()
    return response.data as Insights.InsightsQueryResponse<Insights.QueryDenomToGeckoIdMap>
  }

  async FundingHistory(query: Insights.QueryGetFundingRateRequest): Promise<Insights.InsightsQueryResponse<Insights.QueryGetFundingRateResponse>> {
    const request = this.apiManager.path('market/funding', {}, {
      market: query.market ?? '',
      limit: query.limit ?? 100,
      offset: query.offset ?? 0,
    })
    const response = await request.get()
    return response.data as Insights.InsightsQueryResponse<Insights.QueryGetFundingRateResponse>
  }
}

export default InsightsQueryClient
