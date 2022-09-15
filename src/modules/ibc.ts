import { MsgTransfer } from "@carbon-sdk/codec/ibc/applications/transfer/v1/tx";
import { CarbonTx } from "@carbon-sdk/util";
import BigNumber from "bignumber.js";
import BaseModule from "./base";

export class IBCModule extends BaseModule {

  public async sendIBCTransfer(params: IBCModule.SendIBCTransferParams, msgOpts?: CarbonTx.SignTxOpts) {
    const wallet = this.getWallet();

    if (!params.revisionHeight) {
      const lastHeight: number = await this.sdkProvider.query.chain.getHeight();
      // Set the timeout height as the current height + 150.
      params.revisionHeight = (lastHeight ?? 0) + 150;
    }

    const value = MsgTransfer.fromPartial({
      sourcePort: params.sourcePort,
      sourceChannel: params.sourceChannel,
      token: {
        denom: params.denom,
        amount: params.amount.toString(10),
      },
      sender: params.sender ?? wallet.bech32Address,
      receiver: params.receiver,
      timeoutHeight: {
        revisionHeight: params.revisionHeight,
        revisionNumber: params.revisionNumber ?? 1,
      },
      ...params.timeoutTimestamp && {
        timeoutTimestamp: params.timeoutTimestamp,
      },
    });

    return await wallet.sendTx({
      typeUrl: CarbonTx.Types.MsgTransfer,
      value,
    }, msgOpts);
  }

}

export namespace IBCModule {
  export interface SendIBCTransferParams {
    sender?: string
    receiver: string
    amount: BigNumber
    denom: string
    sourceChannel: string
    sourcePort: string
    revisionHeight?: number
    revisionNumber?: number
    timeoutTimestamp?: number
  }
};
