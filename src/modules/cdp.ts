import { MsgAddCollateral, MsgAddDebt, MsgRemoveCollateral, MsgRemoveDebt } from "@carbon-sdk/codec/cdp/tx";
import { CarbonTx } from "@carbon-sdk/util";
import BaseModule from "./base";
import { BigNumber } from "bignumber.js";
import Long from "long";

export class CDPModule extends BaseModule {

  public async addCollateral(params: CDPModule.AddCollateralParams, opts?: CarbonTx.SignTxOpts) {
    const wallet = this.getWallet();

    const value = MsgAddCollateral.fromPartial({
      creator: wallet.bech32Address,
      vaultTypeId: new Long(params.vaultTypeId),
      amount: params.amount.toString(10),
    })

    return await wallet.sendTx({
      typeUrl: CarbonTx.Types.MsgAddCollateral,
      value,
    }, opts);
  }

  public async removeCollateral(params: CDPModule.RemoveCollateralParams, opts?: CarbonTx.SignTxOpts) {
    const wallet = this.getWallet();

    const value = MsgRemoveCollateral.fromPartial({
      creator: wallet.bech32Address,
      vaultTypeId: new Long(params.vaultTypeId),
      amount: params.amount.toString(10),
    })

    return await wallet.sendTx({
      typeUrl: CarbonTx.Types.MsgRemoveCollateral,
      value,
    }, opts);
  }

  public async addDebt(params: CDPModule.AddDebtParams, opts?: CarbonTx.SignTxOpts) {
    const wallet = this.getWallet();

    const value = MsgAddDebt.fromPartial({
      creator: wallet.bech32Address,
      vaultTypeId: new Long(params.vaultTypeId),
      amount: params.amount.toString(10),
    })

    return await wallet.sendTx({
      typeUrl: CarbonTx.Types.MsgAddDebt,
      value,
    }, opts);
  }

  public async removeDebt(params: CDPModule.RemoveDebtParams, opts?: CarbonTx.SignTxOpts) {
    const wallet = this.getWallet();

    const value = MsgRemoveDebt.fromPartial({
      creator: wallet.bech32Address,
      vaultTypeId: new Long(params.vaultTypeId),
      amount: params.amount.toString(10),
    })

    return await wallet.sendTx({
      typeUrl: CarbonTx.Types.MsgRemoveDebt,
      value,
    }, opts);
  }
}

export namespace CDPModule {
  export interface AddCollateralParams {
    vaultTypeId: number
    amount: BigNumber
  }

  export interface RemoveCollateralParams {
    vaultTypeId: number
    amount: BigNumber
  }

  export interface AddDebtParams {
    vaultTypeId: number
    amount: BigNumber
  }

  export interface RemoveDebtParams {
    vaultTypeId: number
    amount: BigNumber
  }
};
