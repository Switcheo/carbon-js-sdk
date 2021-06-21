/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "Switcheo.carbon.broker";

export interface QueryInsuranceBalanceRequest {}

export interface QueryInsuranceBalanceResponse {
  insuranceFundBalances: InsuranceFundBalance[];
}

export interface InsuranceFundBalance {
  amount: string;
  denom: string;
}

const baseQueryInsuranceBalanceRequest: object = {};

export const QueryInsuranceBalanceRequest = {
  encode(
    _: QueryInsuranceBalanceRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryInsuranceBalanceRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryInsuranceBalanceRequest,
    } as QueryInsuranceBalanceRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): QueryInsuranceBalanceRequest {
    const message = {
      ...baseQueryInsuranceBalanceRequest,
    } as QueryInsuranceBalanceRequest;
    return message;
  },

  toJSON(_: QueryInsuranceBalanceRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<QueryInsuranceBalanceRequest>
  ): QueryInsuranceBalanceRequest {
    const message = {
      ...baseQueryInsuranceBalanceRequest,
    } as QueryInsuranceBalanceRequest;
    return message;
  },
};

const baseQueryInsuranceBalanceResponse: object = {};

export const QueryInsuranceBalanceResponse = {
  encode(
    message: QueryInsuranceBalanceResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.insuranceFundBalances) {
      InsuranceFundBalance.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryInsuranceBalanceResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryInsuranceBalanceResponse,
    } as QueryInsuranceBalanceResponse;
    message.insuranceFundBalances = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.insuranceFundBalances.push(
            InsuranceFundBalance.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryInsuranceBalanceResponse {
    const message = {
      ...baseQueryInsuranceBalanceResponse,
    } as QueryInsuranceBalanceResponse;
    message.insuranceFundBalances = [];
    if (
      object.insuranceFundBalances !== undefined &&
      object.insuranceFundBalances !== null
    ) {
      for (const e of object.insuranceFundBalances) {
        message.insuranceFundBalances.push(InsuranceFundBalance.fromJSON(e));
      }
    }
    return message;
  },

  toJSON(message: QueryInsuranceBalanceResponse): unknown {
    const obj: any = {};
    if (message.insuranceFundBalances) {
      obj.insuranceFundBalances = message.insuranceFundBalances.map((e) =>
        e ? InsuranceFundBalance.toJSON(e) : undefined
      );
    } else {
      obj.insuranceFundBalances = [];
    }
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryInsuranceBalanceResponse>
  ): QueryInsuranceBalanceResponse {
    const message = {
      ...baseQueryInsuranceBalanceResponse,
    } as QueryInsuranceBalanceResponse;
    message.insuranceFundBalances = [];
    if (
      object.insuranceFundBalances !== undefined &&
      object.insuranceFundBalances !== null
    ) {
      for (const e of object.insuranceFundBalances) {
        message.insuranceFundBalances.push(InsuranceFundBalance.fromPartial(e));
      }
    }
    return message;
  },
};

const baseInsuranceFundBalance: object = { amount: "", denom: "" };

export const InsuranceFundBalance = {
  encode(
    message: InsuranceFundBalance,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.amount !== "") {
      writer.uint32(10).string(message.amount);
    }
    if (message.denom !== "") {
      writer.uint32(18).string(message.denom);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): InsuranceFundBalance {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseInsuranceFundBalance } as InsuranceFundBalance;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.amount = reader.string();
          break;
        case 2:
          message.denom = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): InsuranceFundBalance {
    const message = { ...baseInsuranceFundBalance } as InsuranceFundBalance;
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = String(object.amount);
    } else {
      message.amount = "";
    }
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = String(object.denom);
    } else {
      message.denom = "";
    }
    return message;
  },

  toJSON(message: InsuranceFundBalance): unknown {
    const obj: any = {};
    message.amount !== undefined && (obj.amount = message.amount);
    message.denom !== undefined && (obj.denom = message.denom);
    return obj;
  },

  fromPartial(object: DeepPartial<InsuranceFundBalance>): InsuranceFundBalance {
    const message = { ...baseInsuranceFundBalance } as InsuranceFundBalance;
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = object.amount;
    } else {
      message.amount = "";
    }
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = object.denom;
    } else {
      message.denom = "";
    }
    return message;
  },
};

/** Query defines the gRPC querier service. */
export interface Query {
  /** this line is used by starport scaffolding # 2 */
  InsuranceBalance(
    request: QueryInsuranceBalanceRequest
  ): Promise<QueryInsuranceBalanceResponse>;
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.InsuranceBalance = this.InsuranceBalance.bind(this);
  }
  InsuranceBalance(
    request: QueryInsuranceBalanceRequest
  ): Promise<QueryInsuranceBalanceResponse> {
    const data = QueryInsuranceBalanceRequest.encode(request).finish();
    const promise = this.rpc.request(
      "Switcheo.carbon.broker.Query",
      "InsuranceBalance",
      data
    );
    return promise.then((data) =>
      QueryInsuranceBalanceResponse.decode(new _m0.Reader(data))
    );
  }
}

interface Rpc {
  request(
    service: string,
    method: string,
    data: Uint8Array
  ): Promise<Uint8Array>;
}

type Builtin =
  | Date
  | Function
  | Uint8Array
  | string
  | number
  | boolean
  | undefined
  | Long;
export type DeepPartial<T> = T extends Builtin
  ? T
  : T extends Array<infer U>
  ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U>
  ? ReadonlyArray<DeepPartial<U>>
  : T extends {}
  ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}
