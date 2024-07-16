import { Token } from "@carbon-sdk/codec/Switcheo/carbon/coin/token";
import { DenomTrace } from "@carbon-sdk/codec/ibc/applications/transfer/v1/transfer";
import { MsgTransfer } from "@carbon-sdk/codec/ibc/applications/transfer/v1/tx";
import { Asset, ChainRegistryItem, CosmosChainsObj, DenomUnit, ExtendedChainInfo, FeeToken, IBCAddress, cw20TokenRegex, ibcNetworkRegex, ibcTransferChannelRegex } from "@carbon-sdk/constant";
import { ChainInfo, KeplrAccount } from "@carbon-sdk/provider";
import { CarbonTx, IBCUtils, TypeUtils } from "@carbon-sdk/util";
import { AppCurrency, Currency } from "@keplr-wallet/types";
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
      memo: params.memo,
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
      memo: params.memo,
    });

    return await wallet.sendTx(
      {
        typeUrl: CarbonTx.Types.MsgTransfer,
        value,
      },
      msgOpts,
    );
  }

  async getChainInfoMap(denomTraces: TypeUtils.SimpleMap<DenomTrace> = {}): Promise<TypeUtils.SimpleMap<ExtendedChainInfo>> {
    const tokenClient = this.sdkProvider.getTokenClient();

    const ibcBridges = tokenClient.bridges.ibc;
    const chainsResponse = await fetch(`https://chains.cosmos.directory/`);
    const chainsData = (await chainsResponse.json() as CosmosChainsObj);
    const chainInfoMap: TypeUtils.SimpleMap<ExtendedChainInfo> = {};


    for (let ibc = 0; ibc < ibcBridges.length; ibc++) {
      const ibcBridge = ibcBridges[ibc];
      const chainId = ibcBridge.chain_id_name;
      const chainName = ibcBridge.chain_id_name.match(ibcNetworkRegex)?.[1] ?? "";
      const chainData = chainsData.chains.find((d) => d.chain_id === chainId);
      let chainInfo: ChainInfo | undefined = await this.getChainInfo(chainName);
      
      if (chainInfo === undefined) {
        const fallbackChainInfo = await this.getAssembledChainInfo(chainId, chainData);
        chainInfo = fallbackChainInfo;
      }

      if (chainInfo) {
        chainInfoMap[ibcBridge.chain_id_name] = {
          ...chainInfo,
          minimalDenomMap: {},
          bestRpcs: chainData?.best_apis.rpc ?? [],
        };
      }
    }

    const carbonChainInfo = await KeplrAccount.getChainInfo(this.sdkProvider);
    if (carbonChainInfo) {
      chainInfoMap[carbonChainInfo.chainId] = {
        ...carbonChainInfo,
        minimalDenomMap: {},
        bestRpcs: [],
      };
    }

    for (const key in denomTraces) {
      const denomTrace = denomTraces[key];
      const denom = IBCUtils.makeIBCMinimalDenom(denomTrace.path, denomTrace.baseDenom);
      const token = tokenClient.tokenForDenom(denom)
      if (!token) continue;

      const isChainNativeToken = denomTrace.path.split("/").length === 2;
      const chainId = tokenClient.getIbcChainIdFromToken(token);

      if (chainId && chainInfoMap[chainId]) {
        const cw20RegexArr = denomTrace.baseDenom.match(cw20TokenRegex);
        const coinGeckoId = tokenClient.geckoTokenNames?.[denom] ?? tokenClient.geckoTokenNames?.[denomTrace.baseDenom] ?? "";
        const dstDenom = isChainNativeToken ? denomTrace.baseDenom.replace(/:/g, '/') : IBCUtils.makeIBCMinimalDenom(denomTrace.path.replace(ibcTransferChannelRegex, "").replace(/^\//, ''), denomTrace.baseDenom);
        const currency = this.getAppCurrency(dstDenom, coinGeckoId, token, cw20RegexArr);
        const chainInfo = chainInfoMap[chainId];
        chainInfo.currencies.push(currency);
        chainInfo.minimalDenomMap[token.denom] = dstDenom;
      }
    }

    return chainInfoMap;
  }

  getAppCurrency(coinMinimalDenom: string, coinGeckoId: string, tokenInfo?: Token, cw20RegexArr?: RegExpMatchArray | null): AppCurrency {
    const appCurrency = {
      coinDenom: tokenInfo?.symbol ?? "",
      coinMinimalDenom: coinMinimalDenom,
      coinDecimals: tokenInfo?.decimals.toNumber() ?? 0,
      coinGeckoId: coinGeckoId,
      ...cw20RegexArr?.length && ({
        type: "cw20",
        contractAddress: cw20RegexArr[1] ?? "",
      }),
    };
    return appCurrency as AppCurrency;
  }


  async getChainInfo(chainName: string): Promise<ChainInfo | undefined> {
    if (!chainName || chainName === "mainnet") return undefined
    const chainInfoResponse = await fetch(`https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/master/cosmos/${chainName}.json`)
    if (!chainInfoResponse.ok) {
      if (chainInfoResponse.status === 404) {
        return undefined;
      }
    }
    const chainInfoJson = await chainInfoResponse.json();
    return chainInfoJson as ChainInfo;
  }

  async getAssembledChainInfo(chainId: string, chainData?: ChainRegistryItem): Promise<ChainInfo | undefined> {
    const defaultChainInfo = IBCUtils.EmbedChainInfos[chainId];
    if (chainData) {
      try {
        const chainInfoResponse = await fetch(`https://raw.githubusercontent.com/cosmos/chain-registry/master/${chainData.chain_name}/chain.json`);
        const chainInfoJson = await chainInfoResponse.json();
        const chainAssetListResponse = await fetch(`https://raw.githubusercontent.com/cosmos/chain-registry/master/${chainData.chain_name}/assetlist.json`);
        const assetListJson = await chainAssetListResponse.json();
        const features: string[] = [];
        if (chainData.cosmwasm_enabled) {
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

        const stakeCurrency: Currency = {
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
          const maxExponentDenomUnit = correspondingAsset.denom_units.reduce((prev: DenomUnit, current: DenomUnit) => {
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
            },
          };
        });

        return {
          rpc: defaultChainInfo.rpc ?? chainInfoJson.apis.rpc[0].address,
          rest: defaultChainInfo.rest ?? chainInfoJson.apis.rest[0].address,
          chainId: chainInfoJson.chain_id,
          chainName: chainInfoJson.chain_name,
          bip44:
          {
            coinType: chainInfoJson.slip44,
          },
          bech32Config: IBCAddress.defaultBech32Config(chainInfoJson.bech32_prefix),
          stakeCurrency: stakeCurrency,
          currencies: currencies,
          feeCurrencies: feeCurrencies,
          features: [
            "ibc-transfer",
            "ibc-go",
          ],
        };
      } catch (error) {
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
    memo?: string;
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
    memo?: string;
  }
}
