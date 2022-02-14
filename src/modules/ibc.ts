import { MsgTransfer } from "@carbon-sdk/codec/ibc/applications/transfer/v1/tx";
import { CarbonTx, NumberUtils } from "@carbon-sdk/util";
import BigNumber from "bignumber.js";
import Long from "long";
import BaseModule from "./base";

export class IBCModule extends BaseModule {

  public async sendIBCTransfer(params: IBCModule.SendIBCTransferParams) {
    const wallet = this.getWallet();

    const lastHeight: number = await this.sdkProvider.query.chain.getHeight();
    // Set the timeout height as the current height + 150.
    const revisionHeight = new Long(lastHeight ?? 0).add(150);

    const value = MsgTransfer.fromPartial({
      sourcePort: params.sourcePort,
      sourceChannel: params.sourceChannel,
      token: {
        denom: params.denom,
        amount: params.amount.toString(10),
      },
      sender: params.sender,
      receiver: params.receiver,
      timeoutHeight: {
        revisionHeight: params.revisionNumber ?? revisionHeight,
        revisionNumber: params.revisionNumber,
      },
      ...params.timeoutTimestamp && {
        timeoutTimestamp: params.timeoutTimestamp,
      },
    });

    return await wallet.sendTx({
      typeUrl: CarbonTx.Types.MsgTransfer,
      value,
    });
  }

}

export namespace IBCModule {
  export interface SendIBCTransferParams {
    sender: string
    receiver: string
    amount: BigNumber
    denom: string
    sourceChannel: string
    sourcePort: string
    revisionHeight?: Long
    revisionNumber: Long
    timeoutTimestamp?: Long
  }
};
