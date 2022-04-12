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

  async CompetitionLeaderboard(req: Insights.QueryGetCompetitionLeaderboardRequest): Promise<Insights.InsightsQueryResponse<Insights.QueryGetCompetitionLeaderboardResponse>> {
    const queryParams = {
      market: req.market,
      from: req.from,
      until: req.until,
    }
    const request = this.apiManager.path('competition/leaderboard', {}, queryParams)
    const response = await request.get()
    return response.data as Insights.InsightsQueryResponse<Insights.QueryGetCompetitionLeaderboardResponse>
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
}

export default InsightsQueryClient
