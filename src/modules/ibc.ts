import { MsgTransfer } from "@carbon-sdk/codec/ibc/applications/transfer/v1/tx";
import { CarbonTx, NumberUtils } from "@carbon-sdk/util";
import BigNumber from "bignumber.js";
import BaseModule from "./base";

export class IBCModule extends BaseModule {

  public async sendIBCTransfer(params: IBCModule.SendIBCTransferParams) {
    const wallet = this.getWallet();

    const lastHeight: number = await this.sdkProvider.query.chain.getHeight();
    // Set the timeout height as the current height + 150.
    const revisionHeight = NumberUtils.bnOrZero(lastHeight, NumberUtils.BN_ZERO).plus(150);

    const value = MsgTransfer.fromPartial({
      sourcePort: "transfer",
      sourceChannel: params.sourceChannel,
      token: {
        denom: params.denom,
        amount: params.amount.toString(10),
      },
      sender: params.sender,
      receiver: params.receiver,
      timeoutHeight: {
        revisionHeight: revisionHeight.toString(10),
        revisionNumber: params.revisionNumber.toString(10),
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
    revisionNumber: BigNumber
  }
};
