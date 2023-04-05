import { MsgTransfer } from "@carbon-sdk/codec/ibc/applications/transfer/v1/tx";
import { DenomTraceExtended } from "@carbon-sdk/clients/TokenClient";
import { ExtendedChainInfo, cw20TokenRegex, ibcNetworkRegex, ibcTransferChannelRegex, publicRpcNodes } from "@carbon-sdk/constant";
import { ChainInfo, KeplrAccount } from "@carbon-sdk/provider";
import { CarbonTx, IBCUtils, TypeUtils } from "@carbon-sdk/util";
import { AppCurrency } from "@keplr-wallet/types";
import BigNumber from "bignumber.js";
import Long from "long";
import BaseModule from "./base";

export class IBCModule extends BaseModule {
  /** @deprecated please use sendIbcTransferUpdated instead */
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
      msgOpts,
    );
  }

  public async sendIbcTransferV2(params: IBCModule.SendIBCTransferV2Params, msgOpts?: CarbonTx.SignTxOpts) {
    const wallet = this.getWallet();

    const value = MsgTransfer.fromPartial({
      sourcePort: params.sourcePort,
      sourceChannel: params.sourceChannel,
      token: {
        denom: params.denom,
        amount: params.amount.toString(10),
      },
      sender: params.sender ?? wallet.bech32Address,
      receiver: params.receiver,
      ...params.timeoutHeight && ({
        timeoutHeight: {
          revisionHeight: new Long(params.timeoutHeight.revisionHeight.toNumber()),
          revisionNumber: new Long(params.timeoutHeight.revisionNumber.toNumber()),          
        },
      }),
      ...params.timeoutTimestamp && ({
        timeoutTimestamp: params.timeoutTimestamp.toNumber(),
      }),
    });

    return await wallet.sendTx(
      {
        typeUrl: CarbonTx.Types.MsgTransfer,
        value,
      },
      msgOpts,
    );
  }

  async getChainInfoMap(): Promise<TypeUtils.SimpleMap<ExtendedChainInfo>> {
    const tokenClient = this.sdkProvider.getTokenClient();
    const ibcBridges = tokenClient.bridges.ibc;
    const denomTracesArr = Object.values(tokenClient.denomTraces);

    const chainInfoMap: TypeUtils.SimpleMap<ExtendedChainInfo> = {};
    for (let ibc = 0; ibc < ibcBridges.length; ibc++) {
      const ibcBridge = ibcBridges[ibc];
      const chainName = ibcBridge.chain_id_name.match(ibcNetworkRegex)?.[1] ?? "";
      const chainInfo = await this.getChainInfo(chainName, ibcBridge.chain_id_name);

      if (chainInfo) {
        const isCosmWasm = chainInfo.features?.includes("cosmwasm");
        const extendedChainInfo: ExtendedChainInfo = {
          ...chainInfo,
          rpc: isCosmWasm ? publicRpcNodes[ibcBridge.chainName] : chainInfo.rpc,
          minimalDenomMap: {},
        };

        const extraCurrencies = denomTracesArr.reduce((prev: AppCurrency[], denomTrace: DenomTraceExtended) => {
          const firstTransferChannel = denomTrace.path.match(ibcTransferChannelRegex)?.[0]?.replace("transfer/", "");
          const cw20RegexArr = denomTrace.baseDenom.match(cw20TokenRegex);
          const rootPath = denomTrace.path.replace(ibcTransferChannelRegex, "").replace(/^\//, '');
          const coinMinimalDenom = IBCUtils.makeIBCMinimalDenom(denomTrace.path, denomTrace.baseDenom);
          const tokenInfo = denomTrace.token;
          const isNativeDenom = tokenClient.isCarbonToken(tokenInfo);
          if (!(
            ((rootPath.length > 0 || cw20RegexArr?.length) && firstTransferChannel === ibcBridge.channels.src_channel)
              || (firstTransferChannel === ibcBridge.channels.dst_channel && isNativeDenom)
          )) {
            if (firstTransferChannel === ibcBridge.channels.src_channel && rootPath.length === 0) {
              extendedChainInfo.minimalDenomMap[coinMinimalDenom] = denomTrace.baseDenom;
            }
            return prev;
          }

          let initCoinMinimalDenom = denomTrace.baseDenom;
          if (cw20RegexArr?.length) {
            prev.push({
              coinDenom: tokenInfo?.symbol ?? "",
              coinMinimalDenom: initCoinMinimalDenom,
              coinDecimals: tokenInfo?.decimals.toNumber() ?? 0,
              coinGeckoId: tokenClient?.geckoTokenNames?.[coinMinimalDenom] ?? tokenClient?.geckoTokenNames?.[denomTrace.baseDenom] ?? "",
              type: "cw20",
              contractAddress: cw20RegexArr[1] ?? "",
            } as AppCurrency);
          } else {
            initCoinMinimalDenom = isNativeDenom ? coinMinimalDenom : IBCUtils.makeIBCMinimalDenom(rootPath, denomTrace.baseDenom);
            prev.push({
              coinDenom: tokenInfo?.symbol ?? "",
              coinMinimalDenom: initCoinMinimalDenom,
              coinDecimals: tokenInfo?.decimals.toNumber() ?? 0,
              coinGeckoId: tokenClient?.geckoTokenNames?.[coinMinimalDenom] ?? tokenClient?.geckoTokenNames?.[denomTrace.baseDenom] ?? "",
            } as AppCurrency);
          }
          extendedChainInfo.minimalDenomMap[isNativeDenom ? denomTrace.baseDenom : coinMinimalDenom] = initCoinMinimalDenom;
          return prev;
        }, []);

        chainInfoMap[ibcBridge.chain_id_name] = {
          ...extendedChainInfo,
          currencies: chainInfo.currencies.concat(extraCurrencies),
        } as ExtendedChainInfo;
      }
    }

    const swthChainInfo = await KeplrAccount.getChainInfo(this.sdkProvider);
    if (swthChainInfo) {
      chainInfoMap[swthChainInfo.chainId] = {
        ...swthChainInfo,
        minimalDenomMap: {},
      };
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
  /** @deprecated sendIBCTransfer function is deprecated, please use sendIbcTransferUpdated instead */
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

  export interface SendIBCTransferV2Params {
    sender?: string;
    receiver: string;
    amount: BigNumber;
    denom: string;
    sourceChannel: string;
    sourcePort: string;
    timeoutHeight?: {
      revisionNumber: BigNumber;
      revisionHeight: BigNumber;
    };
    timeoutTimestamp?: BigNumber;
  }
}
