import { MsgActivateSubAccount, MsgCreateSubAccount, MsgRemoveSubAccount } from "@carbon-sdk/codec/subaccount/tx";
import { CarbonTx } from "@carbon-sdk/util";
import BaseModule from "./base";

export class SubAccountModule extends BaseModule {

  public async create(params: SubAccountModule.CreateSubAccountParams, opts?: CarbonTx.SignTxOpts) {
    const wallet = this.getWallet();

    const value = MsgCreateSubAccount.fromPartial({
      creator: wallet.bech32Address,
      subAddress: params.subAddress,
    })

    return await wallet.sendTx({
      typeUrl: CarbonTx.Types.MsgCreateSubAccount,
      value,
    }, opts);
  }

  public async activate(params: SubAccountModule.ActivateSubAccountParams, opts?: CarbonTx.SignTxOpts) {
    const wallet = this.getWallet();

    const value = MsgActivateSubAccount.fromPartial({
      creator: wallet.bech32Address,
      expectedMainAccount: params.expectedMainAccount,
    })

    return await wallet.sendTx({
      typeUrl: CarbonTx.Types.MsgActivateSubAccount,
      value,
    }, opts);
  }

  public async remove(params: SubAccountModule.RemoveSubAccountParams, opts?: CarbonTx.SignTxOpts) {
    const wallet = this.getWallet();

    const value = MsgRemoveSubAccount.fromPartial({
      creator: wallet.bech32Address,
      subAddress: params.subAddress,
    })

    return await wallet.sendTx({
      typeUrl: CarbonTx.Types.MsgRemoveSubAccount,
      value,
    }, opts);
  }
}

export namespace SubAccountModule {
  export interface CreateSubAccountParams {
    subAddress: string
  }

  export interface ActivateSubAccountParams {
    expectedMainAccount: string
  }

  export interface RemoveSubAccountParams {
    subAddress: string
  }
};
