import { WithdrawFromGroupEvent } from "@carbon-sdk/codec";
import { MsgMintToken, MsgWithdraw, MsgDepositToGroup, MsgWithdrawFromGroup } from "@carbon-sdk/codec/coin/tx";
import { CarbonTx } from "@carbon-sdk/util";
import { EncodeObject } from "@cosmjs/proto-signing";
import BigNumber from "bignumber.js";
import { Coin } from "cosmjs-types/cosmos/base/v1beta1/coin";
import BaseModule from "./base";

export class CoinModule extends BaseModule {
  public async createWithdrawal(params: CoinModule.CreateWithdrawalParams, opts?: CarbonTx.SignTxOpts) {
    const wallet = this.getWallet();

    const value = MsgWithdraw.fromPartial({
      creator: wallet.bech32Address,
      toAddress: params.toAddress,
      denom: params.denom,
      amount: params.amount.toString(10),
      feeAmount: params.feeAmount.toString(10),
      feeAddress: params.feeAddress,
    });

    return await wallet.sendTx(
      {
        typeUrl: CarbonTx.Types.MsgWithdraw,
        value,
      },
      opts
    );
  }

  public async mintToken(params: CoinModule.MintTokenParams, opts?: CarbonTx.SignTxOpts) {
    const wallet = this.getWallet();

    const value = MsgMintToken.fromPartial({
      creator: params.creator ?? wallet.bech32Address,
      denom: params.denom,
      amount: params.amount.toString(10),
      to: params.to ?? wallet.bech32Address,
    });

    return await wallet.sendTx(
      {
        typeUrl: CarbonTx.Types.MsgMintToken,
        value,
      },
      opts
    );
  }
    /// call 
  public async depositToGroup(params: CoinModule.DepositToGroupParams, opts?: CarbonTx.SignTxOpts) {
    const wallet = this.getWallet();

    const value = MsgDepositToGroup.fromPartial({
      creator: params.creator ?? wallet.bech32Address,
      depositCoin: params.depositCoin
    })

    return await wallet.sendTx(
      {
        typeUrl: CarbonTx.Types.MsgDepositToGroup,
        value,
      },
      opts
    )
  }

  public async convertToGroup(params: CoinModule.DepositToGroupParams[], opts?: CarbonTx.SignTxOpts) {
    const wallet = this.getWallet();
    const messages: EncodeObject[] = params.map(param => ({
      typeUrl: CarbonTx.Types.MsgDepositToGroup,
      value: MsgDepositToGroup.fromPartial({
        creator: param.creator ?? wallet.bech32Address,
        depositCoin: param.depositCoin,
      }),
    }));

    console.log("xx", JSON.stringify(messages))
    return await wallet.sendTxs(
      messages,
      opts
    )
  }

  public async withdrawFromGroup(params: CoinModule.WithdrawFromGroupParams, opts?: CarbonTx.SignTxOpts) {
    const wallet = this.getWallet();

    const value = MsgWithdrawFromGroup.fromPartial({
      creator: params.creator ?? wallet.bech32Address,
      sourceCoin: params.sourceCoin
    })

    return await wallet.sendTx(
      {
        typeUrl: CarbonTx.Types.MsgWithdrawFromGroup,
        value,
      },
      opts
    )
  }
}

export namespace CoinModule {
  export interface CreateWithdrawalParams {
    toAddress: string;
    denom: string;
    amount: BigNumber;
    feeAmount: BigNumber;
    feeAddress: string;
  }

  export interface MintTokenParams {
    creator?: string;
    denom: string;
    amount: BigNumber;
    to?: string;
  }

  export interface DepositToGroupParams {
    creator?: string;
    depositCoin: Coin;
  }

  export interface WithdrawFromGroupParams {
    creator?: string;
    sourceCoin: Coin;
  }
}
