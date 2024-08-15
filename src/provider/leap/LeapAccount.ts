import { Carbon } from "@carbon-sdk/CarbonSDK";
import { CARBON_GAS_PRICE, decTypeDecimals, Network, NetworkConfigs } from "@carbon-sdk/constant";
import { CarbonSDK, Models } from "@carbon-sdk/index";
import { AddressUtils, CarbonTx, NumberUtils } from "@carbon-sdk/util";
import { CarbonSigner, CarbonSignerTypes } from "@carbon-sdk/wallet";
import { Algo } from "@cosmjs/proto-signing";
import { Leap } from "@cosmos-kit/leap-extension";

import { populateUnsignedEvmTranscation } from "@carbon-sdk/util/ethermint";
import { signTransactionWrapper } from "@carbon-sdk/util/provider";
import { AppCurrency, ChainInfo, EthSignType, FeeCurrency } from "@keplr-wallet/types";
import { ethers } from "ethers";
import { parseEvmError } from "../metamask/error";
import SDKProvider from "../sdk";

const SWTH: FeeCurrency = {
  coinDenom: "SWTH",
  coinMinimalDenom: "swth",
  coinDecimals: 8,
  coinGeckoId: "switcheo",
  gasPriceStep: CARBON_GAS_PRICE,
};
class LeapAccount {
  static SWTH_CURRENCY: AppCurrency = SWTH;
  static BASE_CHAIN_INFO = {
    bip44: { coinType: AddressUtils.SWTHAddress.coinType() },
    currencies: [],
    feeCurrencies: [SWTH],
    gasPriceStep: SWTH.gasPriceStep,
  } as const;

  static createLeapSigner(leap: Leap, chainId: string): CarbonSigner {
    const signDirect = async (signerAddress: string, doc: Models.Tx.SignDoc) => {
      return await signTransactionWrapper(async () => {
        const signOpts = { preferNoSetFee: true };
        return await leap!.signDirect(chainId, signerAddress, doc, signOpts);
      })
    };

    const signAmino = async (signerAddress: string, doc: CarbonTx.StdSignDoc) => {
      return await signTransactionWrapper(async () => {
        const signOpts = { preferNoSetFee: true };
        return await leap!.signAmino(chainId, signerAddress, doc, signOpts);
      })
    };

    const getAccounts = async () => {
      const account = await leap.getKey(chainId);
      return [
        {
          algo: "secp256k1" as Algo,
          address: account.bech32Address,
          pubkey: account.pubKey,
        },
      ];
    };

    const sendEvmTransaction = async (api: CarbonSDK, req: ethers.providers.TransactionRequest) => { // eslint-disable-line
      try {
        // workaround for version mismatch in cosmos-kit/leap and leap-extension
        const leapInterface = leap as any
        if (typeof (leapInterface as any).signEthereum === 'function') {

          const unsignedTx = await populateUnsignedEvmTranscation(api, req)
          const signedTx = await leapInterface!.signEthereum(
            // carbon chain id
            api.wallet?.getChainId() ?? '',
            // cosmos address
            api.wallet?.bech32Address ?? '',
            JSON.stringify(unsignedTx),
            EthSignType.TRANSACTION,
          ) as Uint8Array
          const rlpEncodedHex = ethers.utils.serializeTransaction(unsignedTx, signedTx)
          const provider = new ethers.providers.JsonRpcProvider(NetworkConfigs[api.network].evmJsonRpcUrl)
          return (await provider.sendTransaction(rlpEncodedHex)).hash
        } else {
          throw new Error("signing not available")
        }
      }
      catch (error) {
        console.error(error)
        throw (parseEvmError(error as Error))
      }
    }

    const signMessage = async (address: string, message: string): Promise<string> => {
      const { signature } = await leap.signArbitrary(chainId, address, message)
      return Buffer.from(signature, 'base64').toString('hex')
    }

    return {
      type: CarbonSignerTypes.BrowserInjected,
      signDirect,
      signAmino,
      getAccounts,
      sendEvmTransaction,
      signMessage,
    };
  }

  static createLeapSignerAmino(leap: Leap, chainId: string): CarbonSigner {
    const signAmino = async (signerAddress: string, doc: CarbonTx.StdSignDoc) => {
      return await signTransactionWrapper(async () => {
        const signOpts = { preferNoSetFee: true };
        return await leap!.signAmino(chainId, signerAddress, doc, signOpts);
      })
    };

    const getAccounts = async () => {
      const account = await leap.getKey(chainId);
      return [
        {
          algo: "secp256k1" as Algo,
          address: account.bech32Address,
          pubkey: account.pubKey,
        },
      ];
    };


    const sendEvmTransaction = async (api: CarbonSDK, req: ethers.providers.TransactionRequest) => { // eslint-disable-line
      try {
        const leapInterface = leap as any
        if (typeof (leapInterface as any).signEthereum === 'function') {

          const unsignedTx = await populateUnsignedEvmTranscation(api, req)
          const signedTx = await leapInterface!.signEthereum(
            // carbon chain id
            api.wallet?.getChainId() ?? '',
            // cosmos address
            api.wallet?.bech32Address ?? '',
            JSON.stringify(unsignedTx),
            EthSignType.TRANSACTION,
          ) as Uint8Array
          const rlpEncodedHex = ethers.utils.serializeTransaction(unsignedTx, signedTx)
          const provider = new ethers.providers.JsonRpcProvider(NetworkConfigs[api.network].evmJsonRpcUrl)
          return (await provider.sendTransaction(rlpEncodedHex)).hash
        } else {
          throw new Error("signing not available")
        }
      }
      catch (error) {
        console.error(error)
        throw (parseEvmError(error as Error))
      }
    }

    const signMessage = async (address: string, message: string): Promise<string> => {
      const { signature } = await leap.signArbitrary(chainId, address, message)
      return Buffer.from(signature, 'base64').toString('hex')
    }

    return {
      type: CarbonSignerTypes.BrowserInjected,
      signAmino,
      getAccounts,
      sendEvmTransaction,
      signMessage,
    };
  }

  static async getChainId(configProvider: SDKProvider): Promise<string> {
    const chainId = await configProvider.query.chain.getChainId();
    return chainId;
  }

  static async getChainInfo(configProvider: SDKProvider): Promise<ChainInfo> {
    const config = configProvider.getConfig();
    const bech32Prefix = config.Bech32Prefix;

    const chainId = config.chainId;
    const gasPricesResult = await configProvider.query.fee.MinGasPriceAll({});
    const tokenClient = configProvider.getTokenClient();
    const coingeckoIdMap = tokenClient.geckoTokenNames;
    const feeCurrencies: FeeCurrency[] = gasPricesResult.minGasPrices.reduce((result: FeeCurrency[], price: Carbon.Fee.MinGasPrice) => {
      const token = tokenClient.tokenForDenom(price.denom);
      if (!token || token.denom === "swth") return result;
      // Check if gas price is valid, else add default
      const gasPriceAdjusted = NumberUtils.bnOrZero(price.gasPrice).shiftedBy(-decTypeDecimals);
      const minGasPrice =
        gasPriceAdjusted.isNaN() || gasPriceAdjusted.isZero()
          ? LeapAccount.BASE_CHAIN_INFO.gasPriceStep?.low ?? CARBON_GAS_PRICE.low
          : gasPriceAdjusted.toNumber();
      result.push({
        coinDenom: token.symbol ?? token.denom,
        coinMinimalDenom: token.denom,
        coinDecimals: token.decimals.toNumber(),
        coinGeckoId: coingeckoIdMap[token.denom],
        gasPriceStep: {
          low: minGasPrice,
          average: minGasPrice,
          high: minGasPrice,
        },
      });
      return result;
    }, [] as FeeCurrency[]);

    return {
      feeCurrencies: [LeapAccount.SWTH_CURRENCY, ...feeCurrencies],
      bip44: LeapAccount.BASE_CHAIN_INFO.bip44,
      currencies: [LeapAccount.SWTH_CURRENCY, ...feeCurrencies] as AppCurrency[],
      stakeCurrency: LeapAccount.SWTH_CURRENCY,
      rest: config.restUrl,
      rpc: config.tmRpcUrl,
      chainName: config.network === Network.MainNet ? `Carbon` : `Carbon (${config.network})`,
      chainId: chainId,
      bech32Config: {
        bech32PrefixAccAddr: `${bech32Prefix}`,
        bech32PrefixAccPub: `${bech32Prefix}pub`,
        bech32PrefixValAddr: `${bech32Prefix}valoper`,
        bech32PrefixValPub: `${bech32Prefix}valoperpub`,
        bech32PrefixConsAddr: `${bech32Prefix}valcons`,
        bech32PrefixConsPub: `${bech32Prefix}valconspub`,
      },
      features: ["stargate", "ibc-transfer", "ibc-go"],
    };
  }
}

namespace LeapAccount { }

export interface LeapExtended extends Leap {
  experimentalSuggestChain(chainInfo: ChainInfo): Promise<void>;
}

export default LeapAccount;
