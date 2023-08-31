import { SDKProvider } from "@carbon-sdk/provider";
import { GenericUtils, NumberUtils, TypeUtils } from "@carbon-sdk/util";
import { QueryClient, createProtobufRpcClient } from "@cosmjs/stargate";
import { Tendermint34Client } from "@cosmjs/tendermint-rpc";
import BigNumber from "bignumber.js";
import { QueryClientImpl as CosmWasmQueryClient } from "cosmjs-types/cosmwasm/wasm/v1/query";
import BaseModule from "./base";
import { getBestRpcTmClient } from "@carbon-sdk/util/generic";
import { ExtendedChainInfo } from "@carbon-sdk/constant";

export interface BalanceResponse {
  contractAddress: string
  balance: BigNumber
}

export class CosmWasmModule extends BaseModule {
  private cosmWasmClient: CosmWasmQueryClient

  constructor(sdkProvider: SDKProvider, cosmClient: CosmWasmQueryClient) {
    super(sdkProvider);
    this.cosmWasmClient = cosmClient;
  }

  public static async instanceWithChainInfo(sdkProvider: SDKProvider, chainInfo: ExtendedChainInfo) {
    if (chainInfo.activeRpc) {
      try {
        const tmClient = await Tendermint34Client.connect(chainInfo.activeRpc);
        return CosmWasmModule.instanceWithTmClient(sdkProvider, tmClient)
      } catch (error) { }
    }

    const { client, rpcUrl } = await getBestRpcTmClient(chainInfo.bestRpcs.map(r => r.address));
    chainInfo.activeRpc = rpcUrl;
    return CosmWasmModule.instanceWithTmClient(sdkProvider, client);
  }

  public static async instanceWithTmClient(sdkProvider: SDKProvider, tmClient: Tendermint34Client) {
    const baseClient = new QueryClient(tmClient);
    const rpcClient = createProtobufRpcClient(baseClient);
    const cosmWasmClient = new CosmWasmQueryClient(rpcClient);
    return new CosmWasmModule(sdkProvider, cosmWasmClient);
  }

  public static async instance(sdkProvider: SDKProvider, tmRpcUrl: string) {
    const tmClient = await Tendermint34Client.connect(tmRpcUrl);
    return CosmWasmModule.instanceWithTmClient(sdkProvider, tmClient);
  }

  public async queryCosmwasmBalance(walletAddress: string, contractAddr: string): Promise<BalanceResponse> {
    const finalResult: BalanceResponse = {
      contractAddress: contractAddr,
      balance: NumberUtils.BN_ZERO,
    }
    try {
      const smartContract = await this.cosmWasmClient.SmartContractState({
        address: contractAddr,
        queryData: Buffer.from(JSON.stringify({ balance: { address: walletAddress } }), 'utf-8'),
      });
      const result = Buffer.from(smartContract.data).toString("utf-8");
      const balanceJson = JSON.parse(result);
      finalResult.balance = NumberUtils.bnOrZero(balanceJson.balance);
    } catch (err) {
      console.error(err);
    }
    return finalResult;
  }

  public async queryCosmwasmBalances(walletAddress: string, contractAddresses: string[]): Promise<TypeUtils.SimpleMap<BigNumber>> {
    const balancesMap = await Promise.all(contractAddresses.map((contractAddr: string) => this.queryCosmwasmBalance(walletAddress, contractAddr)));
    return balancesMap.reduce((prev: TypeUtils.SimpleMap<BigNumber>, balance: BalanceResponse) => {
      prev[balance.contractAddress] = balance.balance;
      return prev;
    }, {});
  };
}
