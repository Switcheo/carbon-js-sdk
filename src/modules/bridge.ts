import { Carbon } from "@carbon-sdk/CarbonSDK";
import { Duration } from "@carbon-sdk/codec";
import { ABIs } from "@carbon-sdk/eth";
import BigNumber from "bignumber.js";
import { Coin } from "cosmjs-types/cosmos/base/v1beta1/coin";
import { ethers } from "ethers";
import Long from "long";
import { CarbonTx, FetchUtils } from "../util";
import BaseModule from "./base";

export class BridgeModule extends BaseModule {
  public async getRelayFees(relayDenom: string, connectionId: string) {
    const config = this.sdkProvider.getTokenClient().configProvider.getConfig();
    const url = `${config.hydrogenUrl}/bridge_fees?fee_denom=${relayDenom}&connection_id=${connectionId}`;
    const requestOptions = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    }
    const result: BridgeModule.BridgeRelayFees = await FetchUtils.fetch(url, requestOptions).then((res) => res.json());
    return result
  }

  public async withdraw(params: BridgeModule.WithdrawParams, opts?: CarbonTx.SignTxOpts) {
    const {
      connectionId,
      receiver,
      tokenDenom,
      tokenAmount,
      relayDenom,
      relayAmount,
      expirySeconds,
    } = params
    const wallet = this.getWallet()
    const walletAddress = wallet.bech32Address ?? ''
    const expiryDuration = Duration.fromPartial({
      seconds: new Long(expirySeconds),
    })
    const tokens: Coin = {
      denom: tokenDenom,
      amount: tokenAmount.toString(10),
    }

    const relayFee: Coin = {
      denom: relayDenom,
      amount: relayAmount.toString(10),
    }

    const value = Carbon.Bridge.MsgWithdrawToken.fromPartial({
      creator: walletAddress,
      connectionId,
      receiver,
      tokens: tokens,
      relayFee: relayFee,
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

  // withdrawing + unwrapping to the native token (wETH => ETH)
  public async withdrawAndExecute(params: BridgeModule.WithdrawAndExecuteParams, opts?: CarbonTx.SignTxOpts) {
    const {
      connectionId,
      executionContract,
      executionBytes,
      tokenDenom,
      tokenAmount,
      relayDenom,
      relayAmount,
      expirySeconds,
    } = params
    const method = 'withdraw_native'
    const wallet = this.getWallet()
    const walletAddress = wallet.bech32Address
    const expiryDuration = Duration.fromPartial({
      seconds: new Long(expirySeconds),
    })
    const value = Carbon.Bridge.MsgExecuteFromCarbon.fromPartial({
      creator: walletAddress,
      connectionId,
      executionContract,
      method,
      executionBytes,
      tokens: {
        denom: tokenDenom,
        amount: tokenAmount.toString(10),
      },
      relayFee: {
        denom: relayDenom,
        amount: relayAmount.toString(10),
      },
      expiryDuration,
    })

    return await wallet.sendTx(
      {
        typeUrl: CarbonTx.Types.MsgExecuteFromCarbon,
        value,
      },
      opts
    )
  }

  // lock deposit
  public async deposit(params: BridgeModule.DepositParams): Promise<BridgeModule.EthersTransactionResponse> {
    const {
      contractAddress,
      senderAddress,
      receiverAddress,
      depositTokenExternalAddress,
      amount,
      signer,
      rpcUrl,
      nonce,
      gasPriceGwei,
      gasLimit,
      isNativeTokenDeposit = false,
    } = params;
    const rpcProvider = new ethers.providers.JsonRpcProvider(rpcUrl);
    const abi = isNativeTokenDeposit ? ABIs.nativeDepositer : ABIs.axelarBridge;
    const contract = new ethers.Contract(contractAddress, abi, rpcProvider);

    const txParams = {
      nonce,
      ...(gasPriceGwei && { gasPrice: gasPriceGwei.shiftedBy(9).toString(10) }),
      ...(gasLimit && { gasLimit: gasLimit.toString(10) }),
      ...(isNativeTokenDeposit && { value: amount.toString(10) }),
    };

    if (isNativeTokenDeposit) {
      return await contract.connect(signer).deposit(
        senderAddress, // tokenSender
        receiverAddress, // carbonReceiver bech32Address
        txParams
      );
    }

    return await contract.connect(signer).deposit(
      senderAddress, // tokenSender
      receiverAddress, // carbonReceiver bech32Address
      depositTokenExternalAddress, // asset
      amount.toString(10),
      txParams
    );
  }
}

export namespace BridgeModule {
  export interface WithdrawParams {
    connectionId: string;
    receiver: string;
    tokenDenom: string;
    tokenAmount: BigNumber;
    relayDenom: string;
    relayAmount: BigNumber;
    expirySeconds: number;
  }

  export interface WithdrawAndExecuteParams {
    connectionId: string;
    executionContract: string;
    executionBytes: Uint8Array;
    tokenDenom: string;
    tokenAmount: BigNumber;
    relayDenom: string;
    relayAmount: BigNumber;
    expirySeconds: number;
  }

  export interface BridgeRelayFees {
    deposit: string,
    withdraw: string,
    execute: string,
    withdraw_and_execute: string,
    register_token: string,
    deregister_token: string,
    time_quoted_at: string,
  }

  export interface DepositParams {
    contractAddress: string;
    senderAddress: string;
    receiverAddress: string;
    amount: BigNumber;
    depositTokenExternalAddress?: string;
    rpcUrl: string;
    gasPriceGwei?: BigNumber;
    gasLimit?: BigNumber;
    signer: ethers.Signer;
    nonce?: number;
    isNativeTokenDeposit?: boolean;
  }

  export interface EthersTransactionResponse extends ethers.Transaction {
    wait: () => Promise<ethers.Transaction>;
  }
}
