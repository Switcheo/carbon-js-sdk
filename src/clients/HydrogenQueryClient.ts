import { APIUtils } from "@carbon-sdk/util"
import { Hydrogen } from "@carbon-sdk/index"
import { NetworkConfig } from "@carbon-sdk/constant";

export const HydrogenEndpoints = {
  // Status api
  'stats': '/stats',

  // Transfer Payloads api
  'transfer_payloads': '/transfer_payloads',
}


class HydrogenQueryClient {
  public readonly apiManager: APIUtils.APIManager<typeof HydrogenEndpoints>
  
  constructor(
      config: NetworkConfig
  ) {
      const responseParser: APIUtils.ResponseParser = this.parseResponse.bind(this);
      this.apiManager = new APIUtils.APIManager(config.hydrogenUrl, HydrogenEndpoints, responseParser)
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

  // Status api
  async Stats(): Promise<Hydrogen.QueryGetStatsResponse> {
    const request = this.apiManager.path('stats')
    const response = await request.get()
    return response.data as Hydrogen.QueryGetStatsResponse
  }

  // Transfer Payloads api
  async TransferPayloads(req: Hydrogen.QueryGetTransferPayloadsRequest): Promise<Hydrogen.QueryGetTransferPayloadsResponse> {
    const request = this.apiManager.path('transfer_payloads', {}, req)
    const response = await request.get()
    return response.data as Hydrogen.QueryGetTransferPayloadsResponse
  }
}

export default HydrogenQueryClient