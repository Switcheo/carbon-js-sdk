import { NetworkConfig } from '@carbon-sdk/constant';
import { APIUtils } from '@carbon-sdk/util';
import { Insights } from '..';

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

  // Pool api
  async Pools(req: Insights.QueryGetPoolsRequest): Promise<Insights.InsightsQueryResponse<Insights.QueryGetPoolsResponse>> {
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

  // Block api
  async Blocks(req: Insights.QueryGetBlocksRequest): Promise<Insights.InsightsQueryResponse<Insights.QueryGetBlocksResponse>> {
    const request = this.apiManager.path('block/list', {}, req)
    const response = await request.get()
    return response.data as Insights.InsightsQueryResponse<Insights.QueryGetBlocksResponse>
  }

  async Block(req: Insights.QueryGetBlockRequest): Promise<Insights.InsightsQueryResponse<Insights.QueryGetBlockResponse>> {
    const request = this.apiManager.path('block/list', req)
    const response = await request.get()
    return response.data as Insights.InsightsQueryResponse<Insights.QueryGetBlockResponse>
  }

  async BlockAtUnix(req: Insights.QueryGetBlockAtUnixRequest): Promise<Insights.InsightsQueryResponse<Insights.QueryGetBlockResponse>> {
    const request = this.apiManager.path('block/unix', req)
    const response = await request.get()
    return response.data as Insights.InsightsQueryResponse<Insights.QueryGetBlockResponse>
  }

  async BlockTime(): Promise<Insights.InsightsQueryResponse<Insights.QueryGetBlockTimeResponse>> {
    const request = this.apiManager.path('block/time')
    const response = await request.get()
    return response.data as Insights.InsightsQueryResponse<Insights.QueryGetBlockTimeResponse>
  }

  // Transaction api
  async Txs(req: Insights.QueryGetTransactionsRequest): Promise<Insights.InsightsQueryResponse<Insights.QueryGetTransactionsResponse>> {
    const request = this.apiManager.path('tx/list', {}, req)
    const response = await request.get()
    return response.data as Insights.InsightsQueryResponse<Insights.QueryGetTransactionsResponse>
  }

  async TxTypes(): Promise<Insights.InsightsQueryResponse<Insights.QueryGetTransactionTypesResponse>> {
    const request = this.apiManager.path('tx/types')
    const response = await request.get()
    return response.data as Insights.InsightsQueryResponse<Insights.QueryGetTransactionTypesResponse>
  }

  async TxActivity(req: Insights.QueryGetTransactionActivityRequest): Promise<Insights.InsightsQueryResponse<Insights.QueryGetTransactionActivityResponse>> {
    const request = this.apiManager.path('tx/activity', {}, req)
    const response = await request.get()
    return response.data as Insights.InsightsQueryResponse<Insights.QueryGetTransactionActivityResponse>
  }

  // Balance api
  async BalanceTotal(): Promise<Insights.InsightsQueryResponse<Insights.QueryGetTotalBalancesResponse>> {
    const request = this.apiManager.path('balance/total')
    const response = await request.get()
    return response.data as Insights.InsightsQueryResponse<Insights.QueryGetTotalBalancesResponse>
  }

  async BalanceList(req: Insights.QueryGetRichListRequest): Promise<Insights.InsightsQueryResponse<Insights.QueryGetRichListResponse>> {
    const request = this.apiManager.path('balance/list', {}, req)
    const response = await request.get()
    return response.data as Insights.InsightsQueryResponse<Insights.QueryGetRichListResponse>
  }
}

export default InsightsQueryClient
