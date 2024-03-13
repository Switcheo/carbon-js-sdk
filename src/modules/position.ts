import { MsgSetMargin } from "@carbon-sdk/codec/Switcheo/carbon/position/tx";
import { CarbonTx } from "@carbon-sdk/util";
import { BigNumber } from "bignumber.js";
import BaseModule from "./base";

export class PositionModule extends BaseModule {
  public async editMargin(params: PositionModule.SetMarginParams, opts?: CarbonTx.SignTxOpts) {
    const wallet = this.getWallet();

    const value = MsgSetMargin.fromPartial({
      creator: wallet.bech32Address,
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
      const value = MsgSetMargin.fromPartial({
        creator: wallet.bech32Address,
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
    marketId: string;
    margin: BigNumber;
  }
}
