import CarbonSDK from "@carbon-sdk/CarbonSDK";
import { Carbon, Duration } from "@carbon-sdk/codec";
import { NetworkConfigProvider } from "@carbon-sdk/constant";
import { ABIs } from "@carbon-sdk/eth";
import { CarbonTx } from "@carbon-sdk/util";
import BigNumber from "bignumber.js";
import { ethers } from "ethers";
import Long from "long";

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

export interface WithdrawParams {
  connectionId: string;
  receiver: string;
  tokenDenom: string;
  tokenAmount: string;
  relayDenom: string;
  relayAmount: string;
  expirySeconds: number;
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

  public async withdraw(api: CarbonSDK, params: WithdrawParams, opts?: CarbonTx.SignTxOpts) {
    const {
      connectionId,
      receiver,
      tokenDenom,
      tokenAmount,
      relayDenom,
      relayAmount,
      expirySeconds,
    } = params
    const wallet = api.getConnectedWallet()
    const walletAddress = wallet.bech32Address ?? ''
    const expiryDuration = Duration.fromPartial({
      seconds: new Long(expirySeconds),
    })
    const value = Carbon.Bridge.MsgWithdrawToken.fromPartial({
      creator: walletAddress,
      connectionId,
      receiver,
      tokens: {
        denom: tokenDenom,
        amount: tokenAmount,
      },
      relayFee: {
        denom: relayDenom,
        amount: relayAmount,
      },
      expiryDuration,
    })

    return await wallet.sendTx(
      {
        typeUrl: CarbonTx.Types.MsgWithdrawToken,
        value,
      },
      opts
    );
  }
}

export default AxelarBridgeClient