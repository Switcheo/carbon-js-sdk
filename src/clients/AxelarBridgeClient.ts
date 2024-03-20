import CarbonSDK from "@carbon-sdk/CarbonSDK";
import { Carbon } from "@carbon-sdk/codec";
import { NetworkConfigProvider, NetworkConfigs } from "@carbon-sdk/constant";
import { ABIs } from "@carbon-sdk/eth";
import BigNumber from "bignumber.js";
import { ethers } from "ethers";
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

export class AxelarBridgeClient {

  private constructor(
    public readonly configProvider: NetworkConfigProvider,
  ) { }

  public static instance(opts: AxelarBridgeClientOpts) {
    const { configProvider } = opts
    return new AxelarBridgeClient(configProvider)
  }

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
}

export default AxelarBridgeClient