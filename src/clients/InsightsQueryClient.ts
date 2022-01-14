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

  // User api
  async ActiveAccounts(req: Insights.QueryGetActiveAccountsRequest): Promise<Insights.InsightsQueryResponse<Insights.QueryGetActiveAccountsResponse>> {
    const request = this.apiManager.path('user/active', {}, req)
    const response = await request.get()
    return response.data as Insights.InsightsQueryResponse<Insights.QueryGetActiveAccountsResponse>
  }

  async UserProfile(req: Insights.QueryGetUserProfileRequest): Promise<Insights.InsightsQueryResponse<Insights.QueryGetUserProfileResponse>> {
    const request = this.apiManager.path('user/profile', {}, req)
    const response = await request.get()
    return response.data as Insights.InsightsQueryResponse<Insights.QueryGetUserProfileResponse>
  }

  // Pool api
  async Pools(req: Insights.QueryGetPoolsRequest): Promise<Insights.InsightsQueryResponse<Insights.QueryGetPoolsResponse>> {
    const request = this.apiManager.path('pool/list', {}, req)
    const response = await request.get()
    return response.data as Insights.InsightsQueryResponse<Insights.QueryGetPoolsResponse>
  }

  async PoolsVolume(req: Insights.QueryGetPoolVolumeRequest): Promise<Insights.InsightsQueryResponse<Insights.QueryGetPoolVolumeResponse>> {
    const queryParams = {
      poolId: req.poolId,
      interval: req.interval,
      from: req.from,
      until: req.until,
    }
    const request = this.apiManager.path('pools/volume', {}, queryParams)
    const response = await request.get()
    return response.data as Insights.InsightsQueryResponse<Insights.QueryGetPoolVolumeResponse>
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

  async marketsVolume(req: Insights.QueryGetMarketVolumeRequest): Promise<Insights.InsightsQueryResponse<Insights.QueryGetMarketVolumeResponse>> {
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
  async Nodes(req: Insights.QueryGetNodesRequest): Promise<Insights.InsightsQueryResponse<Insights.QueryGetNodesResponse>> {
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
