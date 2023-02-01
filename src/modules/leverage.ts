import { MsgSetLeverage } from "@carbon-sdk/codec/leverage/tx";
import { CarbonTx } from "@carbon-sdk/util";
import BaseModule from "./base";
import { BigNumber } from "bignumber.js";

export class LeverageModule extends BaseModule {
  public async set(params: LeverageModule.SetLeverageParams, opts?: CarbonTx.SignTxOpts) {
    const wallet = this.getWallet();

    const value = MsgSetLeverage.fromPartial({
      creator: wallet.bech32Address,
      market: params.market,
      leverage: params.leverage.shiftedBy(18).toString(10),
    });

    return await wallet.sendTx(
      {
        typeUrl: CarbonTx.Types.MsgSetLeverage,
        value,
      },
      opts
    );
  }

  public async setLeverages(params: LeverageModule.SetLeverageParams[], opts?: CarbonTx.SignTxOpts) {
    const wallet = this.getWallet();

    const msgs = params.map((param) => {
      const value = MsgSetLeverage.fromPartial({
        creator: wallet.bech32Address,
        market: param.market,
        leverage: param.leverage.shiftedBy(18).toString(10),
      });

      return {
        typeUrl: CarbonTx.Types.MsgSetLeverage,
        value,
      };
    });

    return await wallet.sendTxs(msgs, opts);
  }
}

export namespace LeverageModule {
  export interface SetLeverageParams {
    market: string;
    leverage: BigNumber;
  }
}
