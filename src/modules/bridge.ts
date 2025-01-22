import { Carbon } from "@carbon-sdk/CarbonSDK";
import { Duration } from "@carbon-sdk/codec";
import BigNumber from "bignumber.js";
import { Coin } from "cosmjs-types/cosmos/base/v1beta1/coin";
import { ethers } from "ethers";
import Long from "long";
import { CarbonTx, FetchUtils } from "../util";
import { assembleTxRequest } from "../util/evm";
import BaseModule from "./base";

export class BridgeModule extends BaseModule {
  public async getRelayFees(relayDenom: string, connectionId: string) {
    const config = this.sdkProvider.getTokenClient().configProvider.getConfig();
    const url = `${config.hydrogenUrl}/bridge_fees?fee_denom=${relayDenom}&connection_id=${connectionId}`;
    const requestOptions = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    };
    const result: BridgeModule.BridgeRelayFees = await FetchUtils.fetch(url, requestOptions).then((res) => res.json());
    return result;
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
    } = params;
    const wallet = this.getWallet();
    const walletAddress = wallet.bech32Address ?? "";
    const expiryDuration = Duration.fromPartial({
      seconds: new Long(expirySeconds),
    });
    const tokens: Coin = {
      denom: tokenDenom,
      amount: tokenAmount.toString(10),
    };

    const relayFee: Coin = {
      denom: relayDenom,
      amount: relayAmount.toString(10),
    };

    const value = Carbon.Bridge.MsgWithdrawToken.fromPartial({
      creator: walletAddress,
      connectionId,
      receiver,
      tokens: tokens,
      relayFee: relayFee,
      expiryDuration,
    });

    return await wallet.sendTx({
      typeUrl: CarbonTx.Types.MsgWithdrawToken,
      value,
    }, opts);
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
    } = params;
    const method = "withdraw_native";
    const wallet = this.getWallet();
    const walletAddress = wallet.bech32Address;
    const expiryDuration = Duration.fromPartial({
      seconds: new Long(expirySeconds),
    });
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
    });

    return await wallet.sendTx({
      typeUrl: CarbonTx.Types.MsgExecuteFromCarbon,
      value,
    }, opts);
  }

  // approve allowance
  public async approve(params: BridgeModule.ApproveParams): Promise<ethers.providers.TransactionResponse> {
    const {
      amount,
      contractAddress,
      tokenAddress,
      senderAddress,
      signer,
      customGasLimit,
      customGasPrice,
      customNonce,
    } = params;
    const request: ethers.providers.TransactionRequest = assembleTxRequest({
      abiFunctionName: "approve",
      txParams: [contractAddress, amount.toString(10)],
      contractAddress: tokenAddress,
      walletAddress: senderAddress,

      customGasLimit,
      customGasPrice,
      customNonce,
    });

    const result = await signer.sendTransaction(request);
    return result;
  }

  // deposit native tokens (e.g. ETH on Ethereum)
  public async depositNativeToken(params: BridgeModule.DepositNativeTokenParams): Promise<ethers.providers.TransactionResponse> {
    const {
      contractAddress,
      senderAddress,
      receiverAddress,
      amount,
      signer,
      customGasLimit,
      customGasPrice,
      customNonce,
    } = params
    const request: ethers.providers.TransactionRequest = assembleTxRequest({
      abiFunctionName: "deposit",
      abiFunction: "function deposit(address, string)",
      txParams: [senderAddress, receiverAddress],
      contractAddress,
      walletAddress: senderAddress,

      customGasLimit,
      customGasPrice,
      customNonce,
      value: amount,
    });
    return signer.sendTransaction(request);
  }

  // deposit other tokens (e.g. USDC on Ethereum)
  public async deposit(params: BridgeModule.DepositParams): Promise<ethers.providers.TransactionResponse> {
    const {
      contractAddress,
      senderAddress,
      receiverAddress,
      tokenAddress,
      amount,
      signer,
      customNonce,
      customGasLimit,
      customGasPrice,
    } = params;
    const request: ethers.providers.TransactionRequest = assembleTxRequest({
      abiFunctionName: "deposit",
      abiFunction: "function deposit(address, string, address, uint256)",
      txParams: [
        senderAddress, // tokenSender
        receiverAddress, // carbonReceiver bech32Address
        tokenAddress, // token address
        amount.toString(10),
      ],
      contractAddress,
      walletAddress: senderAddress,

      customGasLimit,
      customGasPrice,
      customNonce,
    });
    return signer.sendTransaction(request);
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

  export interface ApproveParams {
    // tx parameters
    amount: BigNumber;
    contractAddress: string;
    senderAddress: string;
    tokenAddress: string;
    // helpers
    signer: ethers.Signer;

    // custom gas parameters
    customGasPrice?: ethers.BigNumber;
    customGasLimit?: ethers.BigNumber;
    customNonce?: number;
  }

  export interface DepositNativeTokenParams {
    // tx parameters
    amount: BigNumber;
    contractAddress: string;
    senderAddress: string;
    receiverAddress: string;
    // helpers
    signer: ethers.Signer;

    // custom gas parameters
    customGasPrice?: ethers.BigNumber;
    customGasLimit?: ethers.BigNumber;
    customNonce?: number;
  }

  export interface DepositParams {
    // submission params
    contractAddress: string;
    senderAddress: string;
    receiverAddress: string;
    amount: BigNumber;
    tokenAddress: string;
    // helpers
    signer: ethers.Signer;

    // custom gas parameters
    customGasPrice?: ethers.BigNumber;
    customGasLimit?: ethers.BigNumber;
    customNonce?: number;
    isNativeTokenDeposit?: boolean;
  }
}
