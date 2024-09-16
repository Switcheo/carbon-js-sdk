import { MsgAcceptQuote, MsgCancelRfq, MsgCreateRfq } from "@carbon-sdk/codec/Switcheo/carbon/otc/tx";
import { CarbonTx } from "@carbon-sdk/util";
import BaseModule from "./base";

export class OTCModule extends BaseModule {
  public async createRfq(params: OTCModule.CreateRfqParams, opts?: CarbonTx.SignTxOpts) {
    const wallet = this.getWallet();
    const { denoms: sellCoins, buyDenom, expiryTime } = params;

    const value = MsgCreateRfq.fromPartial({
      requester: wallet.bech32Address,
      sellCoins,
      buyDenom: buyDenom ?? 'swth',
      expiryTime: new Date(Date.parse(expiryTime.toString())),
    })

    return await wallet.sendTx({
      value,
      typeUrl: CarbonTx.Types.MsgCreateRfq,
    }, opts)
  }

  public async cancelRfq(rfqId: string, opts?: CarbonTx.SignTxOpts) {
    const wallet = this.getWallet();

    const value = MsgCancelRfq.fromPartial({
      requester: wallet.bech32Address,
      id: rfqId,
    })

    return await wallet.sendTx({
      value,
      typeUrl: CarbonTx.Types.MsgCancelRfq,
    }, opts)
  }

  public async acceptQuote(quoteId: string, opts?: CarbonTx.SignTxOpts) {
    const wallet = this.getWallet();

    const value = MsgAcceptQuote.fromPartial({
      requester: wallet.bech32Address,
      id: quoteId,
    })

    return await wallet.sendTx({
      value,
      typeUrl: CarbonTx.Types.MsgAcceptQuote,
    }, opts)
  }
}

export namespace OTCModule {
  export interface CreateRfqParams {
    denoms: {
      denom: string;
      amount: string;
    }[],
    buyDenom: string
    expiryTime: Date
  }
}
