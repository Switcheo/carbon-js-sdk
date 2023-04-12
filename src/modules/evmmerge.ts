import { MsgMergeAccount } from "@carbon-sdk/codec";
import { Params } from "@carbon-sdk/codec/ethermint/evm/v1/evm";
import { MsgEthereumTx, MsgUpdateParams } from "@carbon-sdk/codec/ethermint/evm/v1/tx";
import { CarbonTx } from "@carbon-sdk/util";
import { ethers } from "ethers";
import BaseModule from "./base";



export class EvmMergeModule extends BaseModule {


    public async mergeAccount(params: EvmMergeModule.MergeAccountParams, opts?: CarbonTx.SignTxOpts) {

        const wallet = this.getWallet();
        const value = MsgMergeAccount.fromPartial({
            creator: params.creator,
            pubKey: params.pubKey,
            pubKeySig: params.pubKeySig
        })

        return await wallet.sendTx(
            {
                typeUrl: CarbonTx.Types.MsgMergeAccount,
                value,
            },
            opts
        );
    }
}



export namespace EvmMergeModule {
    export interface MergeAccountParams {
        creator: string;
        pubKey: string;
        pubKeySig: string;
    }

}





