import CarbonSDK from "@carbon-sdk/CarbonSDK";
import { Carbon } from "@carbon-sdk/codec";
import { EthNetworkConfig, NetworkConfig, NetworkConfigProvider, NetworkConfigs } from "@carbon-sdk/constant";
import { ABIs } from "@carbon-sdk/eth";
import BigNumber from "bignumber.js";
import { ethers } from "ethers";
import { Blockchain } from "..";
export interface AxelarBridgeClientOpts {
  configProvider: NetworkConfigProvider;
}
interface ETHTxParams {
  gasPriceGwei?: BigNumber;
  gasLimit?: BigNumber;
  signer: ethers.Signer;
  nonce?: number
}
export interface DepositParams extends ETHTxParams {
  contractAddress: string;
  receiverAddress: string;
  amount: BigNumber;
  depositTokenExternalAddress: string;
  network: CarbonSDK.Network;
  token: Carbon.Coin.Token;
  nonce?: number;
  signCompleteCallback?: () => void;
}

export interface EthersTransactionResponse extends ethers.Transaction {
  wait: () => Promise<ethers.Transaction>;
}

type SupportedBlockchains = Blockchain.BinanceSmartChain | Blockchain.Ethereum | Blockchain.Arbitrum | Blockchain.Polygon | Blockchain.Okc;

export class AxelarBridgeClient {
  static SUPPORTED_BLOCKCHAINS = [Blockchain.BinanceSmartChain, Blockchain.Ethereum, Blockchain.Arbitrum, Blockchain.Polygon, Blockchain.Okc] as const;
  static BLOCKCHAIN_KEY = {
    [Blockchain.BinanceSmartChain]: "bsc",
    [Blockchain.Ethereum]: "eth",
    [Blockchain.Arbitrum]: "arbitrum",
    [Blockchain.Polygon]: "polygon",
    [Blockchain.Okc]: "okc",
  };
  static BLOCKCHAINV2_MAPPING = {
    [Blockchain.BinanceSmartChain]: "Binance Smart Chain",
    [Blockchain.Ethereum]: "Ethereum",
    [Blockchain.Arbitrum]: "Arbitrum",
    [Blockchain.Polygon]: "Polygon",
    [Blockchain.Okc]: "OKC",
  };

  private constructor(
    public readonly configProvider: NetworkConfigProvider,
    public readonly blockchain: typeof AxelarBridgeClient.SUPPORTED_BLOCKCHAINS[number],
  ) { }

  // lock deposit 
  public async deposit(params: DepositParams): Promise<EthersTransactionResponse> {
    const { contractAddress, receiverAddress, network, depositTokenExternalAddress, amount, token, nonce, gasLimit, gasPriceGwei, signer, signCompleteCallback } = params;

    if (gasLimit?.lt(150000)) {
      throw new Error("Minimum gas required: 150,000")
    }
    const rpcProvider = new ethers.providers.JsonRpcProvider(NetworkConfigs[network].evmJsonRpcUrl)

    const contract = new ethers.Contract(contractAddress, ABIs.axelarBridge, rpcProvider)
    const depositResultTx = await contract.connect(signer).deposit(
      receiverAddress, // carbonReceiver
      depositTokenExternalAddress, // asset
      amount.toString(),
      {
        nonce,
        value: "0",
        ...gasPriceGwei && ({ gasPrice: gasPriceGwei.shiftedBy(9).toString(10) }),
        ...gasLimit && ({ gasLimit: gasLimit.toString(10) }),

        // add tx value for ETH deposits, omit if ERC20 token
        ...(token.tokenAddress === "0000000000000000000000000000000000000000" && {
          value: amount.toString(),
        }),
      }
    )

    signCompleteCallback?.()

    return depositResultTx
  }

  public getProvider() {
    new ethers.providers.JsonRpcProvider(this.getProviderUrl())
  }

  public getNetworkConfig(): NetworkConfig {
    return this.configProvider.getConfig();
  }

  public getConfig(): EthNetworkConfig {
    const networkConfig = this.getNetworkConfig();
    const blockchain = this.blockchain as SupportedBlockchains;
    return networkConfig[AxelarBridgeClient.BLOCKCHAIN_KEY[blockchain] as SupportedBlockchains];
  }

  public getProviderUrl() {
    return this.getConfig().rpcURL;
  }
}

export default AxelarBridgeClient