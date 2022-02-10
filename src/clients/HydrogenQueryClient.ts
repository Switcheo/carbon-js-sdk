import { APIUtils } from "@carbon-sdk/util"
import { NetworkConfig } from "@carbon-sdk/constant";
import  * as Hydrogen from "../hydrogen"
import { Blockchain } from "@carbon-sdk/util/blockchain";
import { EnumMember } from "typescript";

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
      this.apiManager = new APIUtils.APIManager(config.hydrogenUrl, HydrogenEndpoints)
  }

  // Status api
  async Stats(): Promise<Hydrogen.QueryGetStatsResponse> {
    const request = this.apiManager.path('stats')
    const response = await request.get()
    return response.data as Hydrogen.QueryGetStatsResponse
  }

  // Transfer Payloads api
  async TransferPayloads(req: Hydrogen.QueryGetTransferPayloadsRequest): Promise<Hydrogen.QueryGetTransferPayloadsResponse> {
    const request = this.apiManager.path('transfer_payloads', {}, {
      ...req,
      include_tx: req.include_tx ?? true,
    })
    const response = await request.get()
    const parsedResponseData = response.data.data.map((item: any) => {
      const itemParsed = JSON.parse(JSON.stringify(item), (key, value) => {
        if (key === 'created_at' || key === 'updated_at' || key === 'broadcasted_at') {
          return value ? new Date(value) : null
        }
        if (key === 'blockchain' || key === 'destination_blockchain') {
          const blockchainValue = value as string
          const matchedEnum = Object.keys(Blockchain).findIndex((enumMember) => enumMember.toUpperCase() === blockchainValue.toUpperCase())
          return Object.values(Blockchain)[matchedEnum] as Blockchain
        }
        return value
      })
      return itemParsed
    })
    return {
      ...response.data,
      data: parsedResponseData,
    } as Hydrogen.QueryGetTransferPayloadsResponse
  }
}

export default HydrogenQueryClient