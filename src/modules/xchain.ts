import { MsgProcessCrossChainTx } from '@carbon-sdk/codec/ccm/tx';
import { MsgSyncHeaders } from '@carbon-sdk/codec/headersync/tx'
import { CarbonTx } from "@carbon-sdk/util"
import BaseModule from "./base"

export class XChainModule extends BaseModule {

  public async syncHeader(params: XChainModule.SyncHeaderParams) {
    const wallet = this.getWallet();

    const value = MsgSyncHeaders.fromPartial({
      syncer: wallet.bech32Address,
      headers: params.headers
    })

    return await wallet.sendTx({
      typeUrl: CarbonTx.Types.MsgSyncHeaders,
      value,
    })
  }

  public async processCrossChainTx(params: XChainModule.ProcessCrossChainTxParams) {
    const wallet = this.getWallet();

    const value = MsgProcessCrossChainTx.fromPartial({
      submitter: wallet.bech32Address,
      // Always From Poly so chainId = 0, should I not hardcode?
      fromChainId: 0,
      proof: params.proof,
      header: params.header,
      headerProof: params.headerProof,
      currentHeader: params.currentHeader,
    })

    return await wallet.sendTx({
      typeUrl: CarbonTx.Types.MsgSyncHeaders,
      value,
    })
  }
}

export namespace XChainModule {
  export interface SyncHeaderParams {
    headers: string[]
  }

  export interface ProcessCrossChainTxParams {
    proof: string;
    header: string;
    headerProof: string;
    currentHeader: string;
  }
}
