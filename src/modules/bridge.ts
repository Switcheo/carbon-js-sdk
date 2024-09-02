import { Carbon } from "@carbon-sdk/CarbonSDK";
import { Duration } from "@carbon-sdk/codec";
import BigNumber from "bignumber.js";
import { Coin } from "cosmjs-types/cosmos/base/v1beta1/coin";
import Long from "long";
import { CarbonTx } from "../util";
import BaseModule from "./base";

export class BridgeModule extends BaseModule {
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
}
