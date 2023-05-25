import { SDKProvider } from "@carbon-sdk/provider";
import { GenericUtils, NumberUtils, TypeUtils } from "@carbon-sdk/util";
import BigNumber from "bignumber.js";
import {
  QueryClientImpl as CosmWasmQueryClient,
} from "cosmjs-types/cosmwasm/wasm/v1/query";
import { createProtobufRpcClient, QueryClient } from "@cosmjs/stargate";
import { Tendermint34Client } from "@cosmjs/tendermint-rpc";
import BaseModule from "./base";

export interface BalanceResponse {
  contractAddress: string
  balance: BigNumber
}

export class CosmWasmModule extends BaseModule {
  private cosmWasmClient: CosmWasmQueryClient

  constructor(cosmClient: CosmWasmQueryClient, sdkProvider: SDKProvider) {
    super(sdkProvider);
    this.cosmWasmClient = cosmClient;
  }

  public static async instance(tmRpcUrl: string, sdkProvider: SDKProvider) {
    const tmClient = GenericUtils.modifyTmClient(await Tendermint34Client.connect(tmRpcUrl));
    const baseClient = new QueryClient(tmClient);
    const rpcClient = createProtobufRpcClient(baseClient);
    const cosmWasmClient = new CosmWasmQueryClient(rpcClient);
    return new CosmWasmModule(cosmWasmClient, sdkProvider);
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
  }
}
