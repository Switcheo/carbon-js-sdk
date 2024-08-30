import { MsgCreateRfq } from "@carbon-sdk/codec/Switcheo/carbon/otc/tx";
import { CarbonTx } from "@carbon-sdk/util";
import BaseModule from "./base";

export class OTCModule extends BaseModule {
  public async createRfq(denoms: OTCModule.CreateRfqParams[]) {
    const wallet = this.getWallet();

    const value = MsgCreateRfq.fromPartial({
      requester: wallet.bech32Address,
      sellCoins: denoms,
      buyDenom: 'swth',
      expiryTime: new Date(Date.now() + 1000 * 60 * 60),
    })

    return await wallet.sendTx({
      value,
      typeUrl: CarbonTx.Types.MsgCreateRfq,
    })
  }
}

export namespace OTCModule {
  export interface CreateRfqParams {
    denom: string;
    amount: string;
  }
}
