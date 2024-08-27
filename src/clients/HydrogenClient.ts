import { Network, NetworkConfig } from "@carbon-sdk/constant";
import { APIUtils, BlockchainUtils } from "@carbon-sdk/util";
import { getFormattedBlockchainName } from "@carbon-sdk/util/blockchain";
import dayjs from "dayjs";
import {
  ChainTransaction,
  CrossChainTransfer,
  CrossChainTransferDetailed,
  GetDetailedTransfersResponse,
  GetRelaysRequest,
  GetRelaysResponse,
  GetStatsResponse,
  GetTransfersRequest,
  GetTransfersResponse,
  RelaysResponse,
} from "../hydrogen";
import { GetFeeQuoteRequest, GetFeeQuoteResponse } from "@carbon-sdk/hydrogen/feeQuote";
import TokenClient from './TokenClient'

export const HydrogenEndpoints = {
  // Status api
  stats: "/stats",

  // Transfer Payloads api
  transfer_payloads: "/transfer_payloads",

  // Relays api
  relays: "/relays",

  // Fee service api
  fee_quote: "/fee_quote",
};

const formatDateField = (value?: string | null) => {
  if (typeof value !== "string") return null;
  return dayjs(value);
};

// temporary function to parse okt/okc blockchain
// to remove when automatic deposit/withdraw feature is deployed
const parseHydrogenBlockchain = (blockchain: string): BlockchainUtils.Blockchain | null => {
  if (blockchain === "okx") return BlockchainUtils.Blockchain.Okc;
  return BlockchainUtils.parseBlockchain(blockchain);
};

const formatCrossChainTransfer = (value: any): CrossChainTransfer => {
  if (typeof value !== "object") return value;
  return {
    ...value,
    created_at: formatDateField(value.created_at?.toString()),
    updated_at: formatDateField(value.updated_at?.toString()),
    source_blockchain: parseHydrogenBlockchain(value.source_blockchain),
    bridging_blockchain: parseHydrogenBlockchain(value.bridging_blockchain),
    destination_blockchain: parseHydrogenBlockchain(value.destination_blockchain),
  };
};

const formatCrossChainTransferDetailed = (value: any): CrossChainTransferDetailed => {
  if (!value || typeof value !== "object") return value;
  return {
    ...formatCrossChainTransfer(value),
    source_event: formatChainEvent(value.source_event),
    bridging_event: formatChainEvent(value.bridging_event),
    destination_event: formatChainEvent(value.destination_event),
  };
};

const formatRelaysTransfers = (value: any): RelaysResponse => {
  if (!value || typeof value !== "object") return value;
  return {
    ...value,
    created_at: formatDateField(value.created_at?.toString()),
    updated_at: formatDateField(value.updated_at?.toString()),
    source_blockchain: parseHydrogenBlockchain(value.source_blockchain),
    destination_blockchain: parseHydrogenBlockchain(value.destination_blockchain),
  };
};

const formatChainEvent = (value: any): ChainTransaction | null => {
  if (!value || typeof value !== "object") return value;
  return {
    ...value,
    confirmed_at: formatDateField(value.confirmed_at?.toString()),
    created_at: formatDateField(value.created_at?.toString()),
    updated_at: formatDateField(value.updated_at?.toString()),
    blockchain: parseHydrogenBlockchain(value.blockchain),
  } as ChainTransaction;
};

const formatFeeQuote = (value: any): GetFeeQuoteResponse => {
  if (typeof value !== "object") return value;
  return {
    ...value,
    blockchain: parseHydrogenBlockchain(value.blockchain),
    created_at: formatDateField(value.created_at?.toString()),
    expires_at: formatDateField(value.expires_at?.toString()),
  };
};

const getBridgeBlockchainFromId = (bridgeId: number): BlockchainUtils.BlockchainV2 => {
  switch (bridgeId) {
    case 1:
      return 'Polynetwork'
    case 2:
      return 'Ibc'
    case 3:
      return 'Axelar'
    default:
      return 'Polynetwork'
  }
}

class HydrogenClient {
  private readonly apiManager: APIUtils.APIManager<typeof HydrogenEndpoints>;
  private readonly tokenClient: TokenClient;

  constructor(private config: NetworkConfig, tokenClient: TokenClient) {
    this.apiManager = new APIUtils.APIManager(config.hydrogenUrl, HydrogenEndpoints);
    this.tokenClient = tokenClient
  }

  public static instance(config: NetworkConfig, tokenClient: TokenClient) {
    return new HydrogenClient(config, tokenClient);
  }

  checkState() {
    if (!this.apiManager.apiPrefix?.length) {
      if ([Network.TestNet, Network.LocalHost].includes(this.config.network))
        throw new Error(`hydrogen service not available on ${this.config.network}`);
      throw new Error("hydrogen api url is empty");
    }
  }

  public formatCrossChainTransferV2 = (value: any): CrossChainTransfer => {
    if (typeof value !== "object") return value;
    // brdg tokens will all be chain_id 0 which will also be deprecated in future
    // hence for brdg tokens cannot use chain_id to differentiate between blockchains
    const isBridgeToken = this.tokenClient.isBridgedToken(value.carbon_token_id)
    return {
      ...value,
      created_at: formatDateField(value.created_at?.toString()),
      updated_at: formatDateField(value.updated_at?.toString()),
      source_blockchain: isBridgeToken ? getFormattedBlockchainName(value.source_blockchain) : this.tokenClient.getBlockchainV2FromIDs(value.from_chain_id, value.bridge_id),
      bridging_blockchain: getBridgeBlockchainFromId(value.bridge_id),
      destination_blockchain: isBridgeToken ? getFormattedBlockchainName(value.destination_blockchain) : this.tokenClient.getBlockchainV2FromIDs(value.to_chain_id, value.bridge_id),
      source_event: this.formatChainEventV2(value.source_event, value.source_blockchain ?? ''),
      bridging_event: this.formatChainEventV2(value.bridging_event, getBridgeBlockchainFromId(value.bridge_id)),
      destination_event: this.formatChainEventV2(value.destination_event, value.destination_blockchain ?? ''),
      relay: this.formatRelaysTransfersV2(value.relay),
    };
  };

  public formatCrossChainTransferDetailedV2 = (value: any): CrossChainTransferDetailed => {
    if (!value || typeof value !== "object") return value;
    const isBridgeToken = this.tokenClient.isBridgedToken(value.carbon_token_id)
    const source_blockchain = isBridgeToken ? getFormattedBlockchainName(value.source_blockchain) : this.tokenClient.getBlockchainV2FromIDs(value.from_chain_id, value.bridge_id)
    const destination_blockchain = isBridgeToken ? getFormattedBlockchainName(value.destination_blockchain) : this.tokenClient.getBlockchainV2FromIDs(value.to_chain_id, value.bridge_id)
    const bridging_blockchain = getBridgeBlockchainFromId(value.bridge_id)
    return {
      ...this.formatCrossChainTransferV2(value),
      source_event: this.formatChainEventV2(value.source_event, source_blockchain ?? ''),
      bridging_event: this.formatChainEventV2(value.bridging_event, bridging_blockchain),
      destination_event: this.formatChainEventV2(value.destination_event, destination_blockchain ?? ''),
    };
  };

  public formatRelaysTransfersV2 = (value: any): RelaysResponse => {
    if (!value || typeof value !== "object") return value;
    return {
      ...value,
      created_at: formatDateField(value.created_at?.toString()),
      updated_at: formatDateField(value.updated_at?.toString()),
    };
  };

  public formatChainEventV2 = (value: any, blockchain: BlockchainUtils.BlockchainV2): ChainTransaction | null => {
    if (!value || typeof value !== "object") return value;
    return {
      ...value,
      confirmed_at: formatDateField(value.confirmed_at?.toString()),
      created_at: formatDateField(value.created_at?.toString()),
      updated_at: formatDateField(value.updated_at?.toString()),
      blockchain,
    } as ChainTransaction;
  };

  public formatFeeQuoteV2 = (value: any, blockchain: BlockchainUtils.BlockchainV2): GetFeeQuoteResponse => {
    if (typeof value !== "object") return value;
    return {
      ...value,
      blockchain,
      created_at: formatDateField(value.created_at?.toString()),
      expires_at: formatDateField(value.expires_at?.toString()),
    };
  };

  // Status api
  async getStats(): Promise<GetStatsResponse> {
    this.checkState();
    const request = this.apiManager.path("stats");
    const response = await request.get();
    return response.data as GetStatsResponse;
  }

  async getTransfers(req: GetTransfersRequest, version = "V1"): Promise<GetTransfersResponse> {
    this.checkState();
    const request = this.apiManager.path(
      "transfer_payloads",
      {},
      { ...req }
    );
    const response = await request.get();
    const result = response.data;

    return {
      ...result,
      data: result.data.map(version === "V1" ? formatCrossChainTransfer : this.formatCrossChainTransferV2),
    };
  }

  async getDetailedTransfers(req: GetTransfersRequest, version = "V1"): Promise<GetDetailedTransfersResponse> {
    this.checkState();
    const request = this.apiManager.path(
      "transfer_payloads",
      {},
      {
        ...req,
        include_tx: true,
      }
    );
    const response = await request.get();
    const result = response.data;

    return {
      ...result,
      data: result.data.map(version === "V1" ? formatCrossChainTransferDetailed : this.formatCrossChainTransferDetailedV2),
    };
  }

  async getRelaysTransfers(req: GetRelaysRequest, version = "V1"): Promise<GetRelaysResponse> {
    this.checkState();
    const request = this.apiManager.path(
      "relays",
      {},
      {
        ...req,
        include_tx: true,
      }
    );
    const response = await request.get();
    const result = response.data;

    return {
      ...result,
      data: result.data.map(version === "V1" ? formatRelaysTransfers : this.formatRelaysTransfersV2),
    };
  }

  async getFeeQuote(req: GetFeeQuoteRequest, blockchain: BlockchainUtils.Blockchain | BlockchainUtils.BlockchainV2 | undefined = undefined, version = "V1"): Promise<GetFeeQuoteResponse> {
    this.checkState();
    const request = this.apiManager.path(
      "fee_quote",
      {},
      {
        ...req,
      }
    );
    const response = await request.post({ body: { fee_denoms: req.fee_denoms } });
    const result = response.data;

    return version === "V1" ? formatFeeQuote(result) : this.formatFeeQuoteV2(result, blockchain!);
  }
}

export default HydrogenClient;
