import { MsgTransfer } from "@carbon-sdk/codec/ibc/applications/transfer/v1/tx";
import { DenomTraceExtended } from "@carbon-sdk/clients/TokenClient";
import { ChainRegistryItem, CosmosChainsObj, ExtendedChainInfo, IBCAddress, cw20TokenRegex, factoryIbcMinimalDenomRegex, ibcNetworkRegex, ibcTransferChannelRegex, publicRpcNodes } from "@carbon-sdk/constant";
import { ChainInfo, KeplrAccount } from "@carbon-sdk/provider";
import { CarbonTx, IBCUtils, TypeUtils } from "@carbon-sdk/util";
import { AppCurrency, Currency } from "@keplr-wallet/types";
import BigNumber from "bignumber.js";
import Long from "long";
import BaseModule from "./base";
import { FeeToken, Asset, DenomUnit } from "@carbon-sdk/constant";
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
    const chainsResponse = await fetch(`https://chains.cosmos.directory/`);
    const chainsData = (await chainsResponse.json() as CosmosChainsObj);
    const chainInfoMap: TypeUtils.SimpleMap<ExtendedChainInfo> = {};


    for (let ibc = 0; ibc < ibcBridges.length; ibc++) {
      const ibcBridge = ibcBridges[ibc];
      const chainName = ibcBridge.chain_id_name.match(ibcNetworkRegex)?.[1] ?? "";
      let chainInfo: ChainInfo | undefined;
      chainInfo = await this.getChainInfo(chainName);
      if (chainInfo === undefined){
        const fallbackChainInfo = await this.getAssembledChainInfo(chainsData.chains, ibcBridge.chain_id_name, ibcBridge.chainName);
        chainInfo = fallbackChainInfo;
      }


      if (chainInfo) {
        const isCosmWasm = chainInfo.features?.includes("cosmwasm");
        const extendedChainInfo: ExtendedChainInfo = {
          ...chainInfo,
          rpc: isCosmWasm ? publicRpcNodes[ibcBridge.chainName] : chainInfo.rpc,
          minimalDenomMap: chainInfoMap[chainInfo.chainId]?.minimalDenomMap ?? {},
        };

        const extraCurrencies = denomTracesArr.reduce((prev: AppCurrency[], denomTrace: DenomTraceExtended) => {
          const firstTransferChannel = denomTrace.path.match(ibcTransferChannelRegex)?.[0]?.replace("transfer/", "");
          const cw20RegexArr = denomTrace.baseDenom.match(cw20TokenRegex);
          const rootPath = denomTrace.path.replace(ibcTransferChannelRegex, "").replace(/^\//, '');
          const checkedBaseDenom = denomTrace.baseDenom.match(factoryIbcMinimalDenomRegex) ? denomTrace.baseDenom.replace(/:/g, '/') : denomTrace.baseDenom;
          const coinMinimalDenom = IBCUtils.makeIBCMinimalDenom(denomTrace.path, denomTrace.baseDenom);
          const tokenInfo = denomTrace.token;
          const isNativeDenom = tokenClient.isCarbonToken(tokenInfo);
          if (!(
            ((rootPath.length > 0 || cw20RegexArr?.length) && firstTransferChannel === ibcBridge.channels.src_channel)
              || (firstTransferChannel === ibcBridge.channels.dst_channel && isNativeDenom)
          )) {
            if (rootPath.length === 0 && firstTransferChannel === ibcBridge.channels.src_channel) {
              extendedChainInfo.minimalDenomMap[coinMinimalDenom] = checkedBaseDenom;
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

  async getChainInfo(chainName: string): Promise<ChainInfo | undefined> {
    if (!chainName) return undefined
    const chainInfoResponse = await fetch(`https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/master/cosmos/${chainName}.json`)
    if (!chainInfoResponse.ok) {
      if (chainInfoResponse.status === 404){
        return undefined;
      } 
    }
    const chainInfoJson = await chainInfoResponse.json();
    return chainInfoJson as ChainInfo;
  }

  async getAssembledChainInfo(chainsData: ChainRegistryItem[], chainId: string, bridgeChainName: string): Promise<ChainInfo | undefined> {
    const selectedChainData = chainsData.find((chainData: ChainRegistryItem) => {
      return chainData.chain_name.includes(bridgeChainName.toLowerCase()) || chainData.chain_id.includes(bridgeChainName.toLowerCase());
    });

    const defaultChainInfo = IBCUtils.EmbedChainInfos[chainId];
    if (selectedChainData) {
      try {
        const chainInfoResponse = await fetch(`https://raw.githubusercontent.com/cosmos/chain-registry/master/${selectedChainData.chain_name}/chain.json`);
        const chainInfoJson = await chainInfoResponse.json();
        const chainAssetListResponse = await fetch(`https://raw.githubusercontent.com/cosmos/chain-registry/master/${selectedChainData.chain_name}/assetlist.json`);
        const assetListJson = await chainAssetListResponse.json();
        const features: string[] = [];
        if (selectedChainData.cosmwasm_enabled) {
          features.push("cosmwasm");
        }

        // Extract the staking currency denomination from chainInfoJson (min. denom)
        const stakingCurrencyDenom = chainInfoJson.staking.staking_tokens?.[0]?.denom || '';

        
        // Find the asset that matches the stakingCurrencyDenom
        const stakingAsset = assetListJson.assets.find((asset: Asset) => {
          return asset.denom_units.some((unit: any) => unit.denom === stakingCurrencyDenom);
        });

        // Find the highest denom unit
        const maxExponentDenomUnit = stakingAsset.denom_units.reduce((prev: DenomUnit, current: DenomUnit) => {
          return (prev.exponent > current.exponent) ? prev : current;
        });

        let stakeCurrency: Currency = {
          coinDenom: maxExponentDenomUnit.denom.toUpperCase(),
          coinMinimalDenom: stakingCurrencyDenom,
          coinDecimals: maxExponentDenomUnit.exponent,
          coinGeckoId: stakingAsset?.coingecko_id ?? '',
        };


        const currencies = assetListJson.assets.map((asset: Asset) => {
          // Find the denom_unit with the maximum exponent
          const maxExponentDenomUnit = asset.denom_units.reduce((prev, current) => {
            return (prev.exponent > current.exponent) ? prev : current;
          });
          return {
            coinDenom: maxExponentDenomUnit.denom.toUpperCase(),
            coinMinimalDenom: asset.base,
            coinDecimals: maxExponentDenomUnit.exponent,
            coinGeckoId: asset.coingecko_id,
          };
        });
        
        // Filter out fee tokens which do not have a corresponding asset
        const validFeeTokens = chainInfoJson.fees.fee_tokens.filter((feeToken: FeeToken) => {
          const correspondingAsset = assetListJson.assets.find((asset: Asset) => asset.base === feeToken.denom);
          return correspondingAsset !== undefined;
        });
        const feeCurrencies = validFeeTokens.map((feeToken: FeeToken) => {
          // Find the corresponding asset for the fee token
          const correspondingAsset = assetListJson.assets.find((asset: Asset) => asset.base === feeToken.denom);
          // Find the denom_unit with the maximum exponent
          const maxExponentDenomUnit = correspondingAsset.denom_units.reduce((prev: DenomUnit, current:DenomUnit) => {
            return (prev.exponent > current.exponent) ? prev : current;
          });
          return {
            coinDenom: maxExponentDenomUnit.denom.toUpperCase(),
            coinMinimalDenom: feeToken.denom,
            coinDecimals: maxExponentDenomUnit.exponent,
            coinGeckoId: correspondingAsset.coingecko_id,
            gasPriceStep: {
              low: feeToken.low_gas_price,
              average: feeToken.average_gas_price,
              high: feeToken.high_gas_price,
            }
          };
        });
        
        return {
          rpc: defaultChainInfo.rpc ?? chainInfoJson.apis.rpc[0].address,
          rest: defaultChainInfo.rest ?? chainInfoJson.apis.rest[0].address,
          chainId: chainInfoJson.chain_id,
          chainName: chainInfoJson.chain_name,
          bip44: 
          {
            coinType: chainInfoJson.slip44
          },
          bech32Config: IBCAddress.defaultBech32Config(chainInfoJson.bech32_prefix),
          stakeCurrency: stakeCurrency,
          currencies: currencies,
          feeCurrencies: feeCurrencies,
          features: [
            "ibc-transfer",
            "ibc-go"
          ]
        };
    } catch(error){
      return defaultChainInfo;
    }

    } else {
      return defaultChainInfo;
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
