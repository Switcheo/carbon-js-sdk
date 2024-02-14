import { TxTypes } from "@carbon-sdk/codec";
import { Carbon } from "@carbon-sdk/CarbonSDK";
import BigNumber from "bignumber.js";
import { CarbonTx } from "../util";
import BaseModule from "./base";
import { getRewardWithdrawalMsg } from "@carbon-sdk/util/alliance";

export class AllianceModule extends BaseModule {
  public async delegateTokens(params: AllianceModule.DelegateTokensParams, opts?: CarbonTx.SignTxOpts) {
    const wallet = this.getWallet();
    const value = Carbon.Alliance.MsgDelegate.fromPartial({
      delegatorAddress: params.delegatorAddress ?? wallet.bech32Address,
      validatorAddress: params.validatorAddress,
      amount: {
        amount: params.amount.toString(10),
        denom: params.denom,
      },
    });

    return wallet.sendTx(
      {
        typeUrl: TxTypes.MsgAllianceDelegate,
        value,
      },
      opts
    );
  }

  public async undelegateTokens(params: AllianceModule.DelegateTokensParams, opts?: CarbonTx.SignTxOpts) {
    const wallet = this.getWallet();
    const value = Carbon.Alliance.MsgUndelegate.fromPartial({
      delegatorAddress: params.delegatorAddress ?? wallet.bech32Address,
      validatorAddress: params.validatorAddress,
      amount: {
        amount: params.amount.toString(10),
        denom: params.denom,
      },
    });

    return wallet.sendTx(
      {
        typeUrl: TxTypes.MsgAllianceUndelegate,
        value,
      },
      opts
    );
  }

  public async redelegateTokens(params: AllianceModule.RedelegateTokensParams, opts?: CarbonTx.SignTxOpts) {
    const wallet = this.getWallet();
    const value = Carbon.Alliance.MsgRedelegate.fromPartial({
      delegatorAddress: params.delegatorAddress ?? wallet.bech32Address,
      validatorSrcAddress: params.validatorSrcAddress,
      validatorDstAddress: params.validatorDstAddress,
      amount: {
        amount: params.amount.toString(10),
        denom: params.denom,
      },
    });

    return wallet.sendTx(
      {
        typeUrl: TxTypes.MsgAllianceRedelegate,
        value,
      },
      opts
    );
  }

  public async claimRewards(params: AllianceModule.ClaimRewardsParams, opts?: CarbonTx.SignTxOpts) {
    const wallet = this.getWallet();
    const value = Carbon.Alliance.MsgClaimDelegationRewards.fromPartial({
      delegatorAddress: params.delegatorAddress ?? wallet.bech32Address,
      validatorAddress: params.validatorAddress,
      denom: params.denom,
    });
    return wallet.sendTx(
      {
        typeUrl: TxTypes.MsgAllianceClaimDelegationRewards,
        value,
      },
      opts
    );
  }

  public async withdrawAllRewards(params: AllianceModule.WithdrawAllRewardsParams, opts?: CarbonTx.SignTxOpts) {
    const wallet = this.getWallet();
    const walletAddress = wallet.bech32Address;
    const msgs = params.delegations.map((delegation) => {
      return getRewardWithdrawalMsg(walletAddress, delegation.denom, delegation.validatorAddress, params.delegatorAddress)
    });
    return wallet.sendTxs(msgs, opts);
  }
}

export namespace AllianceModule {
  export interface DelegateTokensParams {
    delegatorAddress?: string;
    validatorAddress: string;
    amount: BigNumber;
    denom: string;
  }
  export interface UndelegateTokensParams {
    delegatorAddress?: string;
    validatorAddress: string;
    amount: BigNumber;
    denom: string;
  }
  export interface RedelegateTokensParams {
    delegatorAddress?: string;
    validatorSrcAddress: string;
    validatorDstAddress: string;
    amount: BigNumber;
    denom: string;
  }
  export interface ClaimRewardsParams {
    delegatorAddress?: string;
    validatorAddress: string;
    denom: string;
  }
  export interface WithdrawAllRewardsParams {
    delegatorAddress?: string;
    delegations: {
      validatorAddress: string,
      denom: string,
    }[];
  }
}
