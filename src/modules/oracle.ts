import { MsgCreateVote } from "@carbon-sdk/codec/oracle/tx";
import { CarbonTx } from "@carbon-sdk/util";
import BaseModule from "./base";
import Long from "long";

export class OracleModule extends BaseModule {

  public async createVote(params: OracleModule.CreateVoteParams, opts?: CarbonTx.SignTxOpts) {
    const wallet = this.getWallet();

    const value = MsgCreateVote.fromPartial({
      creator: wallet.bech32Address,
      oracleId: params.oracleId,
      timestamp: new Long(params.timestamp),
      data: params.data,
    })

    return await wallet.sendTx({
      typeUrl: CarbonTx.Types.MsgCreateVote,
      value,
    }, opts);
  }
}

export namespace OracleModule {
  export interface CreateVoteParams {
    oracleId: string;
    timestamp: number;
    data: string;
  }
};
