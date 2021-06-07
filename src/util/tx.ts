import { TxTypes } from "@carbon-sdk/codec";
import { DEFAULT_FEE } from "@carbon-sdk/constant";
import { StdFee } from "@cosmjs/amino";
import { GeneratedType } from "@cosmjs/proto-signing";

export namespace CarbonTx {
  export interface SignTxOpts {
    fee?: StdFee;
    memo?: string;
  }

  export interface TxLog {
    msg_index: number;
    log: string;
    events: unknown[]
  }

  export interface TxResponse {
    height: string;
    txhash: string;
    raw_log: string;

    gas_wanted: string;
    gas_used: string;

    // only if tx succeeds
    logs: TxLog[];

    // only if tx fails
    code?: number;
    codespace?: string;
  }

  export const Types = TxTypes;
}

export const DEFAULT_SIGN_OPTS: CarbonTx.SignTxOpts = {
  fee: DEFAULT_FEE,
  memo: "",
}
