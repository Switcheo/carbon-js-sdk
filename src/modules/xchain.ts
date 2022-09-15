import { MsgProcessCrossChainTx, MsgProcessZionCrossChainTx } from '@carbon-sdk/codec/ccm/tx'
import { MsgSyncHeaders } from '@carbon-sdk/codec/headersync/tx'
import { CarbonTx } from "@carbon-sdk/util"
import { CHAIN_IDS } from '@carbon-sdk/util/blockchain'
import BaseModule from "./base"

export class XChainModule extends BaseModule {

  public async syncHeader(params: XChainModule.SyncHeaderParams, opts?: CarbonTx.SignTxOpts) {
    const wallet = this.getWallet()

    const value = MsgSyncHeaders.fromPartial({
      syncer: wallet.bech32Address,
      headers: params.headers
    })

    return await wallet.sendTx({
      typeUrl: CarbonTx.Types.MsgSyncHeaders,
      value,
    }, opts)
  }

  public async processCrossChainTx(params: XChainModule.ProcessCrossChainTxParams, opts?: CarbonTx.SignTxOpts) {
    const wallet = this.getWallet()

    const value = MsgProcessCrossChainTx.fromPartial({
      submitter: wallet.bech32Address,
      fromChainId: CHAIN_IDS.polynetwork,
      proof: params.proof,
      header: params.header,
      headerProof: params.headerProof,
      currentHeader: params.currentHeader,
    })

    return await wallet.sendTx({
      typeUrl: CarbonTx.Types.MsgProcessCrossChainTx,
      value,
    }, opts)
  }

  public async processZionCrossChainTx(params: XChainModule.ProcessZionCrossChainTxParams, opts?: CarbonTx.SignTxOpts) {
    const wallet = this.getWallet()

    const value = MsgProcessZionCrossChainTx.fromPartial({
      submitter: wallet.bech32Address,
      fromChainId: CHAIN_IDS.polynetwork,
      proof: params.proof,
      header: params.header,
      rawCrossTx: params.rawCrossTx,
    })

    return await wallet.sendTx({
      typeUrl: CarbonTx.Types.MsgProcessZionCrossChainTx,
      value,
    }, opts)
  }
}

export namespace XChainModule {
  export interface SyncHeaderParams {
    headers: string[]
  }

  export interface ProcessCrossChainTxParams {
    proof: string
    header: string
    headerProof?: string
    currentHeader?: string
  }

  export interface ProcessZionCrossChainTxParams {
    proof: string
    header: string
    rawCrossTx: string
  }
}
