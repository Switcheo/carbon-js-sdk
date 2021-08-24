import { AppCurrency, ChainInfo } from "@keplr-wallet/types";
import { AddressUtils } from "@carbon-sdk/util";
import { DEFAULT_GAS_PRICE, Network } from "@carbon-sdk/constant";
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
      low: DEFAULT_GAS_PRICE.toNumber(),
      average: DEFAULT_GAS_PRICE.toNumber(),
      high: DEFAULT_GAS_PRICE.toNumber(),
    },
  } as const

  static async getChainInfo(configProvider: SDKProvider): Promise<ChainInfo> {
    const config = configProvider.getConfig();
    const bech32Prefix = config.Bech32Prefix;

    const chainId = await configProvider.query.chain.getChainId();

    return {
      feeCurrencies: [KeplrAccount.SWTH_CURRENCY],
      gasPriceStep: KeplrAccount.BASE_CHAIN_INFO.gasPriceStep,
      bip44: KeplrAccount.BASE_CHAIN_INFO.bip44,
      currencies: [KeplrAccount.SWTH_CURRENCY],
      stakeCurrency: KeplrAccount.SWTH_CURRENCY,
      rest: config.restUrl,
      rpc: config.rpcUrl,
      chainName: config.network === Network.MainNet ? `Switcheo TradeHub` : `Switcheo TradeHub (${config.network})`,
      chainId: chainId,
      bech32Config: {
        bech32PrefixAccAddr: `${bech32Prefix}`,
        bech32PrefixAccPub: `${bech32Prefix}pub`,
        bech32PrefixValAddr: `${bech32Prefix}valoper`,
        bech32PrefixValPub: `${bech32Prefix}valoperpub`,
        bech32PrefixConsAddr: `${bech32Prefix}valcons`,
        bech32PrefixConsPub: `${bech32Prefix}valconspub`,
      },
    }
  }
}

namespace KeplrAccount {

}

export default KeplrAccount;
