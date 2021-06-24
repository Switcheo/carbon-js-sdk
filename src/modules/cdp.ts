import { MsgAddCollateral, MsgAddDebt, MsgRemoveCollateral, MsgRemoveDebt } from "@carbon-sdk/codec/cdp/tx";
import { CarbonTx } from "@carbon-sdk/util/tx";
import BaseModule from "./base";
import { BigNumber } from "bignumber.js";
import Long from "long";

export class CdpModule extends BaseModule {

  public async addCollateral(params: CdpModule.AddCollateralParams) {
    const wallet = this.getWallet();

    const value = MsgAddCollateral.fromPartial({
      creator: wallet.bech32Address,
      vaultTypeId: new Long(params.vaultTypeId),
      amount: params.amount.shiftedBy(18).toString(10),
    })

    return await wallet.sendTx({
      typeUrl: CarbonTx.Types.MsgAddCollateral,
      value,
    });
  }

  public async removeCollateral(params: CdpModule.RemoveCollateralParams) {
    const wallet = this.getWallet();

    const value = MsgRemoveCollateral.fromPartial({
      creator: wallet.bech32Address,
      vaultTypeId: new Long(params.vaultTypeId),
      amount: params.amount.shiftedBy(18).toString(10),
    })

    return await wallet.sendTx({
      typeUrl: CarbonTx.Types.MsgRemoveCollateral,
      value,
    });
  }

  public async addDebt(params: CdpModule.AddDebtParams) {
    const wallet = this.getWallet();

    const value = MsgAddDebt.fromPartial({
      creator: wallet.bech32Address,
      vaultTypeId: new Long(params.vaultTypeId),
      amount: params.amount.shiftedBy(18).toString(10),
    })

    return await wallet.sendTx({
      typeUrl: CarbonTx.Types.MsgAddDebt,
      value,
    });
  }

  public async removeDebt(params: CdpModule.RemoveDebtParams) {
    const wallet = this.getWallet();

    const value = MsgRemoveDebt.fromPartial({
      creator: wallet.bech32Address,
      vaultTypeId: new Long(params.vaultTypeId),
      amount: params.amount.shiftedBy(18).toString(10),
    })

    return await wallet.sendTx({
      typeUrl: CarbonTx.Types.MsgRemoveDebt,
      value,
    });
  }
}

export namespace CdpModule {
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
