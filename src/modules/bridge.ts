import { Carbon } from "@carbon-sdk/CarbonSDK";
import { Duration } from "@carbon-sdk/codec";
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
      amount: tokenAmount,
    }

    const relayFee: Coin = {
      denom: relayDenom,
      amount: relayAmount,
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
    tokenAmount: string;
    relayDenom: string;
    relayAmount: string;
    expirySeconds: number;
  }
}
