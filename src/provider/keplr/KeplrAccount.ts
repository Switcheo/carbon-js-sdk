import { MinGasPrice } from "@carbon-sdk/codec";
import { CARBON_GAS_PRICE, Network, decTypeDecimals } from "@carbon-sdk/constant";
import { CarbonSDK, Models } from "@carbon-sdk/index";
import { AddressUtils, CarbonTx, FetchUtils, NumberUtils } from "@carbon-sdk/util";
import { CarbonSigner, CarbonSignerTypes } from "@carbon-sdk/wallet";
import { Algo } from "@cosmjs/proto-signing";
import { AppCurrency, ChainInfo, EthSignType, FeeCurrency, Keplr, Key } from "@keplr-wallet/types";
import SDKProvider from "../sdk";
import { ethers } from "ethers";
import { PUBLIC_KEY_SIGNING_TEXT, populateEvmTransactionDetails } from "@carbon-sdk/util/ethermint";

const SWTH: FeeCurrency = {
  coinDenom: "SWTH",
  coinMinimalDenom: "swth",
  coinDecimals: 8,
  coinGeckoId: "switcheo",
  gasPriceStep: CARBON_GAS_PRICE,
};

class KeplrAccount {
  static SWTH_CURRENCY: AppCurrency = SWTH;
  static BASE_CHAIN_INFO = {
    bip44: { coinType: AddressUtils.SWTHAddress.coinType() },
    currencies: [],
    feeCurrencies: [SWTH],
    gasPriceStep: SWTH.gasPriceStep,
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

    const getAccounts = async () => [
      {
        algo: "secp256k1" as Algo,
        address: account.bech32Address,
        pubkey: account.pubKey,
      },
    ];

    const sendEvmTransaction = async (api: CarbonSDK, req: ethers.providers.TransactionRequest): Promise<ethers.providers.TransactionResponse> => {
      const request = await populateEvmTransactionDetails(api, req)
      const signedTx = await keplr!.signEthereum(
        // carbon chain id
        api.wallet?.getChainId()!,
        // cosmos address
        api.wallet?.bech32Address!,
        JSON.stringify(request),
        EthSignType.TRANSACTION,
      )
      const rlpEncodedHex = `0x${Buffer.from(signedTx).toString('hex')}`;
      return await api.evmJsonRpc.sendTransaction(rlpEncodedHex)
    }

    return {
      type: CarbonSignerTypes.BrowserInjected,
      signDirect,
      signAmino,
      getAccounts,
      sendEvmTransaction
    };
  }

  static async queryFeeCurrencies(configProvider: SDKProvider): Promise<FeeCurrency[]> {
    const tokenClient = configProvider.getTokenClient();
    const coingeckoIdMap = tokenClient.geckoTokenNames;

    // Query minGasPrices from on-chain (for testnet/devnet/localhost)
    const gasPricesResult = await configProvider.query.fee.MinGasPriceAll({});
    const feeCurrencies: FeeCurrency[] = gasPricesResult.minGasPrices.reduce((result: FeeCurrency[], price: MinGasPrice) => {
      const token = tokenClient.tokenForDenom(price.denom);
      if (!token || token.denom === "swth") return result;
      // Check if gas price is valid, else add default
      const gasPriceAdjusted = NumberUtils.bnOrZero(price.gasPrice).shiftedBy(-decTypeDecimals);
      const minGasPrice =
        gasPriceAdjusted.isNaN() || gasPriceAdjusted.isZero()
          ? KeplrAccount.BASE_CHAIN_INFO.gasPriceStep?.low ?? CARBON_GAS_PRICE.low
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

    return feeCurrencies;
  }

  static processCurrencies(feeCurrencies: FeeCurrency[]): AppCurrency[] {
    return feeCurrencies.reduce((prevCurrencies: AppCurrency[], feeCurrency: FeeCurrency) => {
      const currentFeeCurrency: AppCurrency = {
        coinDenom: feeCurrency.coinDenom,
        coinMinimalDenom: feeCurrency.coinMinimalDenom,
        coinDecimals: feeCurrency.coinDecimals,
        coinGeckoId: feeCurrency.coinGeckoId,
      };
      prevCurrencies.push(currentFeeCurrency);
      return prevCurrencies;
    }, []);
  }

  static async getChainInfo(configProvider: SDKProvider): Promise<ChainInfo> {
    const config = configProvider.getConfig();
    const bech32Prefix = config.Bech32Prefix;

    const chainId = await configProvider.query.chain.getChainId();

    // Query fee currencies from keplr-chain-registry
    const keplrChainInfo = await (await FetchUtils.fetch("https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/master/cosmos/carbon.json")).json();
    if (config.network === Network.MainNet) {
      if (keplrChainInfo.nodeProvider) {
        delete keplrChainInfo.nodeProvider;
      }
      return keplrChainInfo as ChainInfo
    }

    const feeCurrencies = await this.queryFeeCurrencies(configProvider);

    const networkFees = [KeplrAccount.SWTH_CURRENCY, ...feeCurrencies];
    const currencies = this.processCurrencies(networkFees);

    return {
      feeCurrencies: networkFees,
      bip44: KeplrAccount.BASE_CHAIN_INFO.bip44,
      currencies: currencies,
      stakeCurrency: KeplrAccount.SWTH_CURRENCY,
      rest: config.restUrl,
      rpc: config.tmRpcUrl,
      chainName: `Carbon (${config.network})`,
      chainId: chainId,
      bech32Config: {
        bech32PrefixAccAddr: `${bech32Prefix}`,
        bech32PrefixAccPub: `${bech32Prefix}pub`,
        bech32PrefixValAddr: `${bech32Prefix}valoper`,
        bech32PrefixValPub: `${bech32Prefix}valoperpub`,
        bech32PrefixConsAddr: `${bech32Prefix}valcons`,
        bech32PrefixConsPub: `${bech32Prefix}valconspub`,
      },
      features: ["ibc-transfer", "ibc-go"],
    };
  }

  static async signPublicKeyMergeAccount(publicKey: string, address: string, chainId: string, keplr: Keplr) {
    const message = `${PUBLIC_KEY_SIGNING_TEXT}${publicKey}`;
    return KeplrAccount.signArbitrary(address, chainId, message, keplr)
  }

  static async signArbitrary(signerAddress: string, chainId: string, message: string, keplr: Keplr) {
    const signature = await keplr.signArbitrary(
      chainId,
      signerAddress,
      message,
    )
    return Buffer.from(signature.signature, 'base64').toString('hex')
  }
}

namespace KeplrAccount {}

export default KeplrAccount;
