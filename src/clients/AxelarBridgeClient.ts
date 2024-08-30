import { NetworkConfigProvider } from "@carbon-sdk/constant";
import { ABIs } from "@carbon-sdk/eth";
import BigNumber from "bignumber.js";
import { ethers } from "ethers";

export interface AxelarBridgeClientOpts {
  configProvider: NetworkConfigProvider;
}

export interface DepositParams {
  contractAddress: string;
  senderAddress: string;
  receiverAddress: string;
  amount: BigNumber;
  depositTokenExternalAddress: string;
  rpcUrl: string;
  gasPriceGwei?: BigNumber;
  gasLimit?: BigNumber;
  signer: ethers.Signer;
  nonce?: number
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
    const { contractAddress, senderAddress, receiverAddress, depositTokenExternalAddress, amount, signer, rpcUrl } = params;
    const rpcProvider = new ethers.providers.JsonRpcProvider(rpcUrl)
    const contract = new ethers.Contract(contractAddress, ABIs.axelarBridge, rpcProvider)

    return await contract.connect(signer).deposit(
      senderAddress, // tokenSender
      receiverAddress, // carbonReceiver bech32Address
      depositTokenExternalAddress, // asset
      amount.toString(10),
    )
  }
}

export default AxelarBridgeClient