import { APIUtils } from '@carbon-sdk/util';
import { Insights } from '..';

class InsightsQueryClient {
  public readonly apiManager: APIUtils.APIManager<typeof Insights.InsightsEndpoints>

  constructor(
    insightsRestUrl: string,
  ) {
    const responseParser: APIUtils.ResponseParser = this.parseResponse.bind(this);
    this.apiManager = new APIUtils.APIManager(insightsRestUrl, Insights.InsightsEndpoints, responseParser)
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

  async getPoolVolume(req: Insights.QueryGetPoolVolumeRequest): Promise<Insights.InsightsQueryResponse<Insights.QueryGetPoolVolumeResponse>> {
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

  async getRichList(req: Insights.QueryGetRichListRequest): Promise<Insights.InsightsQueryResponse<Insights.QueryGetRichListResponse>> {
    const request = this.apiManager.path('balance/list', {}, req)
    const response = await request.get()
    return response.data as Insights.InsightsQueryResponse<Insights.QueryGetRichListResponse>
  }
}

export default InsightsQueryClient
