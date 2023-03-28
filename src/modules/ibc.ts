import { DenomTrace } from "@carbon-sdk/codec/ibc/applications/transfer/v1/transfer";
import { MsgTransfer } from "@carbon-sdk/codec/ibc/applications/transfer/v1/tx";
import { ibcNetworkRegex, ibcTransferChannelRegex } from "@carbon-sdk/constant";
import { ChainInfo } from "@carbon-sdk/provider";
import { CarbonTx, IBCUtils, TypeUtils } from "@carbon-sdk/util";
import { AppCurrency } from "@keplr-wallet/types";
import BigNumber from "bignumber.js";
import BaseModule from "./base";

export class IBCModule extends BaseModule {
  public async sendIBCTransfer(params: IBCModule.SendIBCTransferParams, msgOpts?: CarbonTx.SignTxOpts) {
    const wallet = this.getWallet();

    if (!params.revisionHeight) {
      const lastHeight: number = await this.sdkProvider.query.chain.getHeight();
      // Set the timeout height as the current height + 150.
      params.revisionHeight = (lastHeight ?? 0) + 150;
    }

    const value = MsgTransfer.fromPartial({
      sourcePort: params.sourcePort,
      sourceChannel: params.sourceChannel,
      token: {
        denom: params.denom,
        amount: params.amount.toString(10),
      },
      sender: params.sender ?? wallet.bech32Address,
      receiver: params.receiver,
      timeoutHeight: {
        revisionHeight: params.revisionHeight,
        revisionNumber: params.revisionNumber ?? 1,
      },
      ...(params.timeoutTimestamp && {
        timeoutTimestamp: params.timeoutTimestamp,
      }),
    });

    return await wallet.sendTx(
      {
        typeUrl: CarbonTx.Types.MsgTransfer,
        value,
      },
      msgOpts
    );
  }

  async getChainInfoMap(): Promise<TypeUtils.SimpleMap<ChainInfo>> {
    const tokenClient = this.sdkProvider.getTokenClient();
    const ibcBridges = tokenClient.bridges.ibc;
    const denomTracesArr = Object.values(tokenClient.denomTraces);

    const chainInfoMap: TypeUtils.SimpleMap<ChainInfo> = {};
    for (let ibc = 0; ibc < ibcBridges.length; ibc++) {
      const ibcBridge = ibcBridges[ibc];
      const chainName = ibcBridge.chain_id_name.match(ibcNetworkRegex)?.[1] ?? "";
      const chainInfo = await this.getChainInfo(chainName, ibcBridge.chain_id_name);

      if (chainInfo) {
        const extraCurrencies = denomTracesArr.reduce((prev: AppCurrency[], denomTrace: DenomTrace) => {
          const firstTransferChannel = denomTrace.path.match(ibcTransferChannelRegex)?.[0]?.replace("transfer/", "");
          const rootPath = denomTrace.path.replace(ibcTransferChannelRegex, "");
          if (!(
            (rootPath.length > 0 && firstTransferChannel === ibcBridge.channels.src_channel)
              || (firstTransferChannel === ibcBridge.channels.dst_channel && denomTrace.baseDenom === "swth")
          )) {
            return prev;
          }

          const coinMinimalDenom = IBCUtils.makeIBCMinimalDenom(denomTrace.path, denomTrace.baseDenom);
          const tokenInfo = tokenClient.tokenForDenom(coinMinimalDenom) ?? tokenClient.tokenForDenom(denomTrace.baseDenom);
          prev.push({
            coinDenom: tokenInfo?.symbol ?? "",
            coinMinimalDenom: denomTrace.baseDenom === 'swth' ? coinMinimalDenom : IBCUtils.makeIBCMinimalDenom(rootPath, denomTrace.baseDenom),
            coinDecimals: tokenInfo?.decimals.toNumber() ?? 0,
            coinGeckoId: tokenClient?.geckoTokenNames?.[coinMinimalDenom] ?? tokenClient?.geckoTokenNames?.[denomTrace.baseDenom] ?? "",
          } as AppCurrency)
          return prev;
        }, []);
        const newChainInfo: ChainInfo = {
          ...chainInfo,
          currencies: chainInfo.currencies.concat(extraCurrencies),
        }
        chainInfoMap[ibcBridge.chain_id_name] = newChainInfo; 
      }
    }
    return chainInfoMap;
  }

  async getChainInfo(chainName: string, chainId: string): Promise<ChainInfo | undefined> {
    if (!chainName) return undefined
  
    try {
      const chainInfoResponse = await fetch(`https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/master/cosmos/${chainName}.json`);
      const chainInfoJson = await chainInfoResponse.json();
      return chainInfoJson as ChainInfo;
    } catch (err) {
      return IBCUtils.EmbedChainInfos[chainId];
    }
  }
}

export namespace IBCModule {
  export interface SendIBCTransferParams {
    sender?: string;
    receiver: string;
    amount: BigNumber;
    denom: string;
    sourceChannel: string;
    sourcePort: string;
    revisionHeight?: number;
    revisionNumber?: number;
    timeoutTimestamp?: number;
  }
}
