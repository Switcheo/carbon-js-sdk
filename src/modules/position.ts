import { MsgSetMargin } from "@carbon-sdk/codec/Switcheo/carbon/position/tx";
import { CarbonTx } from "@carbon-sdk/util";
import { BigNumber } from "bignumber.js";
import BaseModule from "./base";

export class PositionModule extends BaseModule {
  public async editMargin(params: PositionModule.SetMarginParams, opts?: CarbonTx.SignTxOpts) {
    const wallet = this.getWallet();
    const creator = params.creator ?? wallet.bech32Address;

    const value = MsgSetMargin.fromPartial({
      creator,
      marketId: params.marketId,
      margin: params.margin.toString(10),
    });

    return await wallet.sendTx(
      {
        typeUrl: CarbonTx.Types.MsgSetMargin,
        value,
      },
      opts
    );
  }

  public async editMargins(params: PositionModule.SetMarginParams[], opts?: CarbonTx.SignTxOpts) {
    const wallet = this.getWallet();

    const msgs = params.map((param) => {
      const creator = param.creator ?? wallet.bech32Address;
      const value = MsgSetMargin.fromPartial({
        creator,
        marketId: param.marketId,
        margin: param.margin.toString(10),
      });

      return {
        typeUrl: CarbonTx.Types.MsgSetMargin,
        value,
      };
    });

    return await wallet.sendTxs(msgs, opts);
  }
}

export namespace PositionModule {
  export interface SetMarginParams {
    creator?: string;
    marketId: string;
    margin: BigNumber;
  }
}
