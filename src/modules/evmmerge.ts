import { CarbonTx } from "@carbon-sdk/util";
import { Carbon } from "@carbon-sdk/CarbonSDK";
import BaseModule from "./base";



export class EvmMergeModule extends BaseModule {
  public async mergeAccount(params: EvmMergeModule.MergeAccountParams, opts?: CarbonTx.SignTxOpts) {
    const wallet = this.getWallet();
    const value = Carbon.Evmmerge.MsgMergeAccount.fromPartial({
      creator: params.creator,
      pubKey: params.pubKey,
      pubKeySig: params.pubKeySig,
    });

    return await wallet.sendTx({
      typeUrl: CarbonTx.Types.MsgMergeAccount,
      value,
    }, opts);
  }
}

export namespace EvmMergeModule {
  export interface MergeAccountParams {
    creator: string;
    pubKey: string;
    pubKeySig: string;
  }
}





