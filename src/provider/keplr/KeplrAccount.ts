import { Carbon } from "@carbon-sdk/CarbonSDK";
import { capitalize } from "lodash";
import { CARBON_GAS_PRICE, CarbonEvmChainIDs, Network, NetworkConfigs, decTypeDecimals } from "@carbon-sdk/constant";
import { CarbonSDK, Models } from "@carbon-sdk/index";
import { AddressUtils, CarbonTx, FetchUtils, NumberUtils } from "@carbon-sdk/util";
import { CarbonSigner, CarbonSignerTypes } from "@carbon-sdk/wallet";
import { Algo } from "@cosmjs/proto-signing";
import { AppCurrency, ChainInfo, FeeCurrency, Keplr, Key } from "@keplr-wallet/types";
import SDKProvider from "../sdk";
import { ethers } from "ethers";
import { PUBLIC_KEY_SIGNING_TEXT, parseChainId, populateUnsignedEvmTranscation } from "@carbon-sdk/util/ethermint";
import { signTransactionWrapper } from "@carbon-sdk/util/provider";
import { parseEvmError } from "../metamask/error";

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
      return await signTransactionWrapper(
        async () => {
          const signOpts = { preferNoSetFee: true };
          return await keplr!.signDirect(chainInfo.chainId, signerAddress, doc, signOpts);
        })
    };
    const signAmino = async (signerAddress: string, doc: CarbonTx.StdSignDoc) => {
      return await signTransactionWrapper(async () => {
        const signOpts = { preferNoSetFee: true };
        return await keplr!.signAmino(chainInfo.chainId, signerAddress, doc, signOpts);
      })
    };

    const getAccounts = async () => [
      {
        algo: "secp256k1" as Algo,
        address: account.bech32Address,
        pubkey: account.pubKey,
      },
    ];

    const sendEvmTransaction = async (api: CarbonSDK, req: ethers.providers.TransactionRequest): Promise<string> => {
      try {
        const chainId = Number(parseChainId(api.wallet?.getEvmChainId()))
        const chainIdHex = `0x${chainId.toString(16)}`
        await KeplrAccount.switchEvmChain(keplr, chainIdHex)
        const unsignedTx = await populateUnsignedEvmTranscation(api, req)
        const tx = {
          ...unsignedTx,
          chainId,
          from: api.wallet?.evmHexAddress ?? '',
        }
        return await KeplrAccount.sendEvmTransaction(keplr, tx)
      }
      catch (error) {
        console.error(error)
        throw (parseEvmError(error as Error))
      }
    }
    const signMessage = async (address: string, message: string): Promise<string> => {
      const chainId = chainInfo.chainId
      const { signature } = await keplr.signArbitrary(chainId, address, message)
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

  static createKeplrSignerAmino(keplr: Keplr, chainInfo: ChainInfo, account: Key): CarbonSigner {
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

    const sendEvmTransaction = async (api: CarbonSDK, req: ethers.providers.TransactionRequest): Promise<string> => {
      try {
        const chainId = Number(parseChainId(api.wallet?.getEvmChainId()))
        const chainIdHex = `0x${chainId.toString(16)}`
        await KeplrAccount.switchEvmChain(keplr, chainIdHex)
        const unsignedTx = await populateUnsignedEvmTranscation(api, req)
        const tx = {
          ...unsignedTx,
          chainId,
          from: api.wallet?.evmHexAddress ?? '',
        }
        return await KeplrAccount.sendEvmTransaction(keplr, tx)
      }
      catch (error) {
        console.error(error)
        throw (parseEvmError(error as Error))
      }
    }

    const signMessage = async (address: string, message: string): Promise<string> => {
      const chainId = chainInfo.chainId
      const { signature } = await keplr.signArbitrary(chainId, address, message)
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

  static async queryFeeCurrencies(configProvider: SDKProvider): Promise<FeeCurrency[]> {
    const tokenClient = configProvider.getTokenClient();
    const coingeckoIdMap = tokenClient.geckoTokenNames;

    // Query minGasPrices from on-chain (for testnet/devnet/localhost)
    const gasPricesResult = await configProvider.query.fee.MinGasPriceAll({});
    const feeCurrencies: FeeCurrency[] = gasPricesResult.minGasPrices.reduce((result: FeeCurrency[], price: Carbon.Fee.MinGasPrice) => {
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

  static async getEvmChainInfo(configProvider: SDKProvider): Promise<ChainInfo | null> {
    const config = configProvider.getConfig()
    const { network } = config
    try {
      const chainInfo = JSON.parse("{\"rpc\":\"https://evm-api.carbon.network\",\"nodeProvider\":{\"name\":\"Switcheo Labs\",\"email\":\"info@switcheo.network\",\"website\":\"https://www.switcheo.com/\"},\"chainId\":\"eip155:9790\",\"chainName\":\"Carbon EVM\",\"chainSymbolImageUrl\":\"https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/eip155:9790/chain.png\",\"bip44\":{\"coinType\":118},\"currencies\":[{\"coinDenom\":\"SWTH\",\"coinMinimalDenom\":\"swth\",\"coinDecimals\":18,\"coinGeckoId\":\"switcheo\"}],\"feeCurrencies\":[{\"coinDenom\":\"SWTH\",\"coinMinimalDenom\":\"swth\",\"coinDecimals\":18,\"coinGeckoId\":\"switcheo\"}],\"rest\":\"https://evm-api.carbon.network\",\"evm\":{\"chainId\":9790,\"rpc\":\"https://evm-api.carbon.network\"},\"features\":[\"eth-address-gen\",\"eth-key-sign\"],\"beta\":true}")
      if (network === Network.MainNet) return chainInfo
      return {
        ...chainInfo,
        rpc: NetworkConfigs[network].evmJsonRpcUrl,
        chainId: `eip155:${parseChainId(CarbonEvmChainIDs[network])}`,
        chainName: `Carbon EVM ${capitalize(network)}`,
        rest: NetworkConfigs[network].evmJsonRpcUrl,
        evm: {
          chainId: Number(parseChainId(CarbonEvmChainIDs[network])),
          rpc:NetworkConfigs[network].evmJsonRpcUrl,
        },
      }
    } catch (error) {
      console.warn('unable to get evm chain info: ', error)
    }
    return null
  }

  static async sendEvmTransaction(keplr: Keplr, tx: ethers.utils.UnsignedTransaction): Promise<string> {
    return await keplr.ethereum.request({ method: 'eth_sendTransaction', params: [tx] });
  }

  static async switchEvmChain(keplr: Keplr, chainId: string) {
    await keplr.ethereum.request({ method: 'wallet_switchEthereumChain', params: [{ chainId }] });
  }

  static async getChainInfo(configProvider: SDKProvider): Promise<ChainInfo> {
    const config = configProvider.getConfig();
    const bech32Prefix = config.Bech32Prefix;

    const chainId = config.chainId;
    const url = "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/master/cosmos/carbon.json"
    let keplrChainInfo
    try {
      keplrChainInfo = await (await FetchUtils.fetch(url)).json();
    } catch (error) {
      console.warn(error)
    }

    if (config.network === Network.MainNet && keplrChainInfo) {
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

namespace KeplrAccount { }

export default KeplrAccount;
