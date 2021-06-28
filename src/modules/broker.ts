import { MsgInitiateLiquidation } from "@carbon-sdk/codec/broker/tx";
import { CarbonTx } from "@carbon-sdk/util/tx";
import BaseModule from "./base";

export class BrokerModule extends BaseModule {

  public async initiateLiquidation(params: BrokerModule.InitiateLiquidationParams) {
    const wallet = this.getWallet();

    const value = MsgInitiateLiquidation.fromPartial({
      creator: wallet.bech32Address,
      positions: params.positions,
    })

    return await wallet.sendTx({
      typeUrl: CarbonTx.Types.MsgInitiateLiquidation,
      value,
    });
  }

  public async initiateLiquidations(params: BrokerModule.InitiateLiquidationParams[]) {
    const wallet = this.getWallet();

    const msgs = params.map(param => {
        const value = MsgInitiateLiquidation.fromPartial({
            creator: wallet.bech32Address,
            positions: param.positions,
          })

      return {
        typeUrl: CarbonTx.Types.MsgInitiateLiquidation,
        value,
      }
    })

    return await wallet.sendTxs(msgs, CarbonTx.DEFAULT_SIGN_OPTS);
  }
}

export namespace BrokerModule {
  export interface InitiateLiquidationParams {
    positions: LiquidationPosition[]
  }

  interface LiquidationPosition {
      market: string
      address: string
  }
};
