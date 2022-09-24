import { MinGasPrice } from "@carbon-sdk/codec";
import { Network } from "@carbon-sdk/constant";
import { AddressUtils } from "@carbon-sdk/util";
import { AppCurrency, ChainInfo } from "@keplr-wallet/types";
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
  } as const

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
        coinDenom: token.denom,
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
