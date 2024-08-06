import CarbonSDK from "@carbon-sdk/CarbonSDK";
import { Carbon, Duration } from "@carbon-sdk/codec";
import { NetworkConfigProvider, NetworkConfigs } from "@carbon-sdk/constant";
import { ABIs } from "@carbon-sdk/eth";
import { CarbonTx } from "@carbon-sdk/util";
import { Coin } from "@cosmjs/stargate";
import BigNumber from "bignumber.js";
import { ethers } from "ethers";
export interface AxelarBridgeClientOpts {
  configProvider: NetworkConfigProvider;
}
interface ETHTxParams {
  gasPriceGwei?: BigNumber;
  gasLimit?: BigNumber;
  signer?: ethers.Signer;
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

export interface WithdrawParams {
  connectionId: string;
  receiver: string;
  tokens: Coin;
  relayFee: Coin;
  expirySeconds: number;
}

export interface QueryContractParams {
  contractAddress: string;
  network: CarbonSDK.Network;
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
    const { contractAddress, receiverAddress, network, depositTokenExternalAddress, amount, token, nonce, gasLimit, gasPriceGwei, signCompleteCallback } = params;

    console.log('deposit params', params)
    console.log('deposit NetworkConfigs', NetworkConfigs)
    if (gasLimit?.lt(150000)) {
      throw new Error("Minimum gas required: 150,000")
    }
    const rpcProvider = new ethers.providers.JsonRpcProvider(NetworkConfigs[network].evmJsonRpcUrl)
    console.log('deposit rpcProvider', rpcProvider)

    const signer = rpcProvider.getSigner()
    console.log('deposit signer', signer)
    const contract = new ethers.Contract(contractAddress, ABIs.axelarBridge, rpcProvider)

    console.log('deposit contract', contract)
    console.log('deposit signCompleteCallback before', signCompleteCallback)
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
    console.log('deposit signCompleteCallback after', signCompleteCallback)

    signCompleteCallback?.()

    return depositResultTx
  }

  public async withdraw(api: CarbonSDK, params: WithdrawParams, opts?: CarbonTx.SignTxOpts) {
    const {
      connectionId,
      receiver,
      tokens,
      relayFee,
      expirySeconds,
    } = params
    const wallet = api.getConnectedWallet()
    const walletAddress = wallet.bech32Address ?? ''
    const expiryDuration = Duration.fromPartial({
      seconds: expirySeconds,
    })
    const value = Carbon.Bridge.MsgWithdrawToken.fromPartial({
      creator: walletAddress,
      connectionId,
      receiver,
      tokens,
      relayFee,
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