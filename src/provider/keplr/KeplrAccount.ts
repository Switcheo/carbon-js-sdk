import { MinGasPrice } from "@carbon-sdk/codec";
import { Network } from "@carbon-sdk/constant";
import { Models } from "@carbon-sdk/index";
import { AddressUtils, CarbonTx } from "@carbon-sdk/util";
import { CarbonSigner, CarbonSignerTypes } from "@carbon-sdk/wallet";
import { Algo } from "@cosmjs/proto-signing";
import { AppCurrency, ChainInfo, Keplr, Key } from "@keplr-wallet/types";
import SDKProvider from "../sdk";

const SWTH = {
  coinDenom: "SWTH",
  coinMinimalDenom: "swth",
  coinDecimals: 8,
  coinGeckoId: "switcheo",
}

class KeplrAccount {
  static SWTH_CURRENCY: AppCurrency = SWTH
  static BASE_CHAIN_INFO = {
    bip44: { coinType: AddressUtils.SWTHAddress.coinType() },
    currencies: [],
    feeCurrencies: [SWTH],
    gasPriceStep: {
      low: 1,
      average: 1.5,
      high: 2,
    },
  } as const;

  static createKeplrSigner(keplr: Keplr, chainInfo: ChainInfo, account: Key): CarbonSigner {
    const signDirect = async (signerAddress: string, doc: Models.Tx.SignDoc) => {
      const signOpts = { preferNoSetFee: true };
      return await keplr!.signDirect(chainInfo.chainId, signerAddress, doc, signOpts);
    };
    const signAmino = async (signerAddress: string, doc: CarbonTx.StdSignDoc) => {
      const signOpts = { preferNoSetFee: true };
      return await keplr!.signAmino(chainInfo.chainId, signerAddress, doc, signOpts);
    };

    const getAccounts = async () => [{
      algo: 'secp256k1' as Algo,
      address: account.bech32Address,
      pubkey: account.pubKey,
    }];

    return {
      type: CarbonSignerTypes.BrowserInjected,
      signDirect,
      signAmino,
      getAccounts,
    };
  }

  static async getChainInfo(configProvider: SDKProvider): Promise<ChainInfo> {
    const config = configProvider.getConfig();
    const bech32Prefix = config.Bech32Prefix;

    const chainId = await configProvider.query.chain.getChainId();
    const gasPricesResult = await configProvider.query.fee.MinGasPriceAll({});
    const tokenClient = configProvider.getTokenClient();
    const coingeckoIdMap = tokenClient.geckoTokenNames;
    const feeCurrencies: AppCurrency[] = gasPricesResult.minGasPrices.reduce((result: AppCurrency[], price: MinGasPrice) => {
      const token = tokenClient.tokenForDenom(price.denom);
      if (!token || token.denom === 'swth') return result;
      result.push({
        coinDenom: token.symbol ?? token.denom,
        coinMinimalDenom: token.denom,
        coinDecimals: token.decimals.toNumber(),
        coinGeckoId: coingeckoIdMap[token.denom],
      });
      return result;
    }, [] as AppCurrency[]);

    return {
      feeCurrencies: [KeplrAccount.SWTH_CURRENCY, ...feeCurrencies],
      gasPriceStep: KeplrAccount.BASE_CHAIN_INFO.gasPriceStep,
      bip44: KeplrAccount.BASE_CHAIN_INFO.bip44,
      currencies: [KeplrAccount.SWTH_CURRENCY, ...feeCurrencies],
      stakeCurrency: KeplrAccount.SWTH_CURRENCY,
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
    }
  }
}

namespace KeplrAccount {

}

export default KeplrAccount;
