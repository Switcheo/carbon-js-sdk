import { StargateClient } from "@cosmjs/stargate";
import { Tendermint34Client } from "@cosmjs/tendermint-rpc";

/**
 * BlockchainClient is functionally the same with StargateClient,
 * with an additional static initializer:
 * 
 * ```
 * BlockchainClient.connectWithTm(tmClient: Tendermint34Client)
 * ```
 * 
 * @see StargateClient
 */
class BlockchainClient extends StargateClient {
  static connectWithTm(tmClient: Tendermint34Client): BlockchainClient {
    return new BlockchainClient(tmClient, {});
  }
}

export default BlockchainClient;
