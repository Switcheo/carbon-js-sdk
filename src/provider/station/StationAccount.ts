import { MinGasPrice } from "@carbon-sdk/codec";
import { CARBON_GAS_PRICE, Network, decTypeDecimals } from "@carbon-sdk/constant";
import { CarbonSDK, Models } from "@carbon-sdk/index";
import { AddressUtils, CarbonTx, NumberUtils } from "@carbon-sdk/util";
import { CarbonSigner, CarbonSignerTypes } from "@carbon-sdk/wallet";
import { Algo } from "@cosmjs/proto-signing";
import { Leap } from "@cosmos-kit/leap";
import { AccountData, AppCurrency, ChainInfo, FeeCurrency } from "@keplr-wallet/types";
import SDKProvider from "../sdk";
import { ethers } from "ethers";
import { WalletController as Station } from '@terra-money/wallet-controller'
import { ExtensionOptions, SimplePublicKey } from '@terra-money/feather.js';

const SWTH: FeeCurrency = {
  coinDenom: "SWTH",
  coinMinimalDenom: "swth",
  coinDecimals: 8,
  coinGeckoId: "switcheo",
  gasPriceStep: CARBON_GAS_PRICE,
};
class StationAccount {
  static SWTH_CURRENCY: AppCurrency = SWTH;
  static BASE_CHAIN_INFO = {
    bip44: { coinType: AddressUtils.SWTHAddress.coinType() },
    currencies: [],
    feeCurrencies: [SWTH],
    gasPriceStep: SWTH.gasPriceStep,
  } as const;

  static createStationSigner(station: Station, chainId: string, publicKey: string, address: string): CarbonSigner {
    const signDirect = async (signerAddress: string, doc: Models.Tx.SignDoc) => {
      const signOpts: ExtensionOptions = {
          waitForConfirmation: false,
          purgeQueue: false,
          chainID: chainId,
          msgs: []
      };
      const signedResult = await station!.sign(signOpts, signerAddress );
      console.log('INFO: the signed reusult is ',signedResult)
      return {
        signed: doc,
        signature: {
          pub_key: {
            type: '/cosmos.crypto.secp256k1.PubKey',
            value: publicKey
          },
          signature: signedResult.result.signatures[0]

        }
      }
      
    };


    const signAmino = async (signerAddress: string, doc: CarbonTx.StdSignDoc) => {
        const signOpts: ExtensionOptions = {
            waitForConfirmation: false,
            purgeQueue: false,
            chainID: chainId,
            msgs: []
        };
        
        return await station!.sign(signOpts, signerAddress );
      };
  


      const getAccounts = async () => {

       console.log('INFO: station account getaccount')

        return [
          {
            // Possible to change to "ethsecp256k1" ?
            algo: "secp256k1" as Algo,
            address,
            pubkey: Uint8Array.from(Buffer.from(publicKey, 'base64'))
          },
        ]
    };
    

    const sendEvmTransaction = async (api: CarbonSDK, req: ethers.providers.TransactionRequest) => {
      throw new Error("signing not available");
    }

    return {
      type: CarbonSignerTypes.BrowserInjected,
      signDirect,
      getAccounts,
      sendEvmTransaction
    };



  }

  static async getChainId(configProvider: SDKProvider): Promise<string> {
    const chainId = await configProvider.query.chain.getChainId();
    return chainId;
  }

  static async getChainInfo(configProvider: SDKProvider): Promise<ChainInfo> {
    const config = configProvider.getConfig();
    const bech32Prefix = config.Bech32Prefix;

    const chainId = await configProvider.query.chain.getChainId();
    const gasPricesResult = await configProvider.query.fee.MinGasPriceAll({});
    const tokenClient = configProvider.getTokenClient();
    const coingeckoIdMap = tokenClient.geckoTokenNames;
    const feeCurrencies: FeeCurrency[] = gasPricesResult.minGasPrices.reduce((result: FeeCurrency[], price: MinGasPrice) => {
      const token = tokenClient.tokenForDenom(price.denom);
      if (!token || token.denom === "swth") return result;
      // Check if gas price is valid, else add default
      const gasPriceAdjusted = NumberUtils.bnOrZero(price.gasPrice).shiftedBy(-decTypeDecimals);
      const minGasPrice =
        gasPriceAdjusted.isNaN() || gasPriceAdjusted.isZero()
          ? StationAccount.BASE_CHAIN_INFO.gasPriceStep?.low ?? CARBON_GAS_PRICE.low
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
      feeCurrencies: [StationAccount.SWTH_CURRENCY, ...feeCurrencies],
      bip44: StationAccount.BASE_CHAIN_INFO.bip44,
      currencies: [StationAccount.SWTH_CURRENCY, ...feeCurrencies] as AppCurrency[],
      stakeCurrency: StationAccount.SWTH_CURRENCY,
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

  static getPublicKeyAndAddress(station: Station): Promise<{ key: string, address: string }> {
    console.log('INFO: getPublicKeyAndAddress')

    return new Promise((resolve, reject) => {
        const subscription = station.connectedWallet().subscribe(async (wallet) => {
      console.log('INFO: wallet.address ',wallet?.addresses)
      console.log('INFO: wallet.network ',wallet?.network)
            if (wallet) {
                console.log('INFO: Connected wallet: ', wallet)
                const bytes = Buffer.from('sign message', 'utf-8')

                try {
                    console.log('INFO: signing using walletaddress: ', wallet.addresses['carbon-1'])
                    const signResult = await station.signBytes(bytes, wallet.addresses['carbon-1'])
                    console.log('INFO: signresult ', signResult)


                    const publicKey = signResult.result.public_key as SimplePublicKey;
                    const key = publicKey.toData().key;
                    console.log('INFO: signinged key is: ', key)
                    console.log('INFO: ', typeof(key))
                    const address = wallet.addresses['carbon-1'];
                    subscription?.unsubscribe()

                    resolve({ key, address });
                } catch (error) {
                    reject(error);
                }
            } 
        });
    });
}
}

namespace StationAccount {}

export default StationAccount;
