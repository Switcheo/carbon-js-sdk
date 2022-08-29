import { APIUtils } from "@carbon-sdk/util"
import { Network, NetworkConfig } from "@carbon-sdk/constant";
import { BlockchainUtils } from "@carbon-sdk/util";
import { ChainTransaction, CrossChainTransfer, CrossChainTransferDetailed, GetDetailedTransfersResponse, GetStatsResponse, GetTransfersRequest, GetTransfersResponse } from "../hydrogen";
import dayjs from "dayjs";
import { FeeQuote, GetFeeQuoteRequest, GetFeeQuoteResponse } from "@carbon-sdk/hydrogen/feeQuote";

export const HydrogenEndpoints = {
  // Status api
  'stats': '/stats',

  // Transfer Payloads api
  'transfer_payloads': '/transfer_payloads',

  // Fee service api
  'fee_quote': '/fee_quote',
}

const formatDateField = (value?: string | null) => {
  if (typeof value !== "string") return null;
  return dayjs(value);
}

const formatCrossChainTransfer = (value: any): CrossChainTransfer => {
  if (typeof value !== "object") return value;
  return {
    ...value,
    created_at: formatDateField(value.created_at?.toString()),
    updated_at: formatDateField(value.updated_at?.toString()),
    source_blockchain: BlockchainUtils.parseBlockchain(value.source_blockchain),
    bridging_blockchain: BlockchainUtils.parseBlockchain(value.bridging_blockchain),
    destination_blockchain: BlockchainUtils.parseBlockchain(value.destination_blockchain),
  }
}

const formatCrossChainTransferDetailed = (value: any): CrossChainTransferDetailed => {
  if (!value || typeof value !== "object") return value;
  return {
    ...formatCrossChainTransfer(value),
    source_event: formatChainEvent(value.source_event),
    bridging_event: formatChainEvent(value.bridging_event),
    destination_event: formatChainEvent(value.destination_event),
  }
}

const formatChainEvent = (value: any): ChainTransaction | null => {
  if (!value || typeof value !== "object") return value;
  return {
    ...value,
    confirmed_at: formatDateField(value.confirmed_at?.toString()),
    created_at: formatDateField(value.created_at?.toString()),
    updated_at: formatDateField(value.updated_at?.toString()),
    destination_blockchain: BlockchainUtils.parseBlockchain(value.destination_blockchain),
    blockchain: BlockchainUtils.parseBlockchain(value.blockchain),
  } as ChainTransaction;
}

const formatFeeQuote = (value: any): FeeQuote => {
  if (typeof value !== "object") return value;
  return {
    ...value,
    blockchain: BlockchainUtils.parseBlockchain(value.blockchain),
    created_at: formatDateField(value.created_at?.toString()),
    expires_at: formatDateField(value.expires_at?.toString()),
  }
}

class HydrogenClient {
  private readonly apiManager: APIUtils.APIManager<typeof HydrogenEndpoints>

  constructor(
    private config: NetworkConfig
  ) {
    this.apiManager = new APIUtils.APIManager(config.hydrogenUrl, HydrogenEndpoints)
  }

  checkState() {
    if (!this.apiManager.apiPrefix?.length) {
      if ([Network.TestNet, Network.LocalHost].includes(this.config.network))
        throw new Error(`hydrogen service not available on ${this.config.network}`);
      throw new Error("hydrogen api url is empty");
    }
  }

  // Status api
  async getStats(): Promise<GetStatsResponse> {
    this.checkState();
    const request = this.apiManager.path('stats')
    const response = await request.get()
    return response.data as GetStatsResponse
  }

  async getTransfers(req: GetTransfersRequest): Promise<GetTransfersResponse> {
    this.checkState();
    const request = this.apiManager.path('transfer_payloads', {}, {
      ...req,
      include_tx: false,
    })
    const response = await request.get();
    const result = response.data;

    return {
      ...result,
      data: result.data.map(formatCrossChainTransfer),
    }
  }

  async getDetailedTransfers(req: GetTransfersRequest): Promise<GetDetailedTransfersResponse> {
    this.checkState();
    const request = this.apiManager.path('transfer_payloads', {}, {
      ...req,
      include_tx: true,
    })
    const response = await request.get();
    const result = response.data;

    return {
      ...result,
      data: result.data.map(formatCrossChainTransferDetailed),
    }
  }

  async getFeeQuote(req: GetFeeQuoteRequest): Promise<GetFeeQuoteResponse> {
    // this.checkState();
    const request = this.apiManager.path('fee_quote', {}, {
      ...req,
      include_tx: false,
    })
    const response = await request.get()
    const result = response.data

    return formatFeeQuote(result)
  }
}

export default HydrogenClient
