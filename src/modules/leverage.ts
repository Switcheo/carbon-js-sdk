import { MsgSetLeverage, MsgToggleMarginMode } from "@carbon-sdk/codec/Switcheo/carbon/leverage/tx";
import { CarbonTx } from "@carbon-sdk/util";
import BaseModule from "./base";
import { BigNumber } from "bignumber.js";

export class LeverageModule extends BaseModule {
  public async set(params: LeverageModule.SetLeverageParams, opts?: CarbonTx.SignTxOpts) {
    const wallet = this.getWallet();
    const creator = params.creator ?? wallet.bech32Address

    const value = MsgSetLeverage.fromPartial({
      creator,
      marketId: params.marketId,
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
      const creator = param.creator ?? wallet.bech32Address
      const value = MsgSetLeverage.fromPartial({
        creator,
        marketId: param.marketId,
        leverage: param.leverage.shiftedBy(18).toString(10),
      });

      return {
        typeUrl: CarbonTx.Types.MsgSetLeverage,
        value,
      };
    });

    return await wallet.sendTxs(msgs, opts);
  }

  public async toggleMarginMode(params: LeverageModule.ToggleMarginModeParams, opts?: CarbonTx.SignTxOpts) {
    const wallet = this.getWallet();
    const value = MsgToggleMarginMode.fromPartial({
      creator: wallet.bech32Address,
      marketId: params.marketId,
    });

    return await wallet.sendTx({
      typeUrl: CarbonTx.Types.MsgToggleMarginMode,
      value,
    }, opts);
  }
}

export namespace LeverageModule {
  export interface SetLeverageParams {
    creator?: string;
    marketId: string;
    leverage: BigNumber;
  }

  export interface ToggleMarginModeParams {
    marketId: string;
  }
}
