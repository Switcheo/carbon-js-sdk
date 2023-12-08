/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Any } from "../../../google/protobuf/any";
import { Params, AccessTuple, Log } from "./evm";

export const protobufPackage = "ethermint.evm.v1";

/** MsgEthereumTx encapsulates an Ethereum transaction as an SDK message. */
export interface MsgEthereumTx {
  /** data is inner transaction data of the Ethereum transaction */
  data?: Any;
  /** size is the encoded storage size of the transaction (DEPRECATED) */
  size: number;
  /** hash of the transaction in hex format */
  hash: string;
  /**
   * from is the ethereum signer address in hex format. This address value is checked
   * against the address derived from the signature (V, R, S) using the
   * secp256k1 elliptic curve
   */
  from: string;
}

/**
 * LegacyTx is the transaction data of regular Ethereum transactions.
 * NOTE: All non-protected transactions (i.e non EIP155 signed) will fail if the
 * AllowUnprotectedTxs parameter is disabled.
 */
export interface LegacyTx {
  /** nonce corresponds to the account nonce (transaction sequence). */
  nonce: Long;
  /** gas_price defines the value for each gas unit */
  gasPrice: string;
  /** gas defines the gas limit defined for the transaction. */
  gas: Long;
  /** to is the hex formatted address of the recipient */
  to: string;
  /** value defines the unsigned integer value of the transaction amount. */
  value: string;
  /** data is the data payload bytes of the transaction. */
  data: Uint8Array;
  /** v defines the signature value */
  v: Uint8Array;
  /** r defines the signature value */
  r: Uint8Array;
  /** s define the signature value */
  s: Uint8Array;
}

/** AccessListTx is the data of EIP-2930 access list transactions. */
export interface AccessListTx {
  /** chain_id of the destination EVM chain */
  chainId: string;
  /** nonce corresponds to the account nonce (transaction sequence). */
  nonce: Long;
  /** gas_price defines the value for each gas unit */
  gasPrice: string;
  /** gas defines the gas limit defined for the transaction. */
  gas: Long;
  /** to is the recipient address in hex format */
  to: string;
  /** value defines the unsigned integer value of the transaction amount. */
  value: string;
  /** data is the data payload bytes of the transaction. */
  data: Uint8Array;
  /** accesses is an array of access tuples */
  accesses: AccessTuple[];
  /** v defines the signature value */
  v: Uint8Array;
  /** r defines the signature value */
  r: Uint8Array;
  /** s define the signature value */
  s: Uint8Array;
}

/** DynamicFeeTx is the data of EIP-1559 dinamic fee transactions. */
export interface DynamicFeeTx {
  /** chain_id of the destination EVM chain */
  chainId: string;
  /** nonce corresponds to the account nonce (transaction sequence). */
  nonce: Long;
  /** gas_tip_cap defines the max value for the gas tip */
  gasTipCap: string;
  /** gas_fee_cap defines the max value for the gas fee */
  gasFeeCap: string;
  /** gas defines the gas limit defined for the transaction. */
  gas: Long;
  /** to is the hex formatted address of the recipient */
  to: string;
  /** value defines the the transaction amount. */
  value: string;
  /** data is the data payload bytes of the transaction. */
  data: Uint8Array;
  /** accesses is an array of access tuples */
  accesses: AccessTuple[];
  /** v defines the signature value */
  v: Uint8Array;
  /** r defines the signature value */
  r: Uint8Array;
  /** s define the signature value */
  s: Uint8Array;
}

/** ExtensionOptionsEthereumTx is an extension option for ethereum transactions */
export interface ExtensionOptionsEthereumTx {}

/** MsgEthereumTxResponse defines the Msg/EthereumTx response type. */
export interface MsgEthereumTxResponse {
  /**
   * hash of the ethereum transaction in hex format. This hash differs from the
   * Tendermint sha256 hash of the transaction bytes. See
   * https://github.com/tendermint/tendermint/issues/6539 for reference
   */
  hash: string;
  /**
   * logs contains the transaction hash and the proto-compatible ethereum
   * logs.
   */
  logs: Log[];
  /**
   * ret is the returned data from evm function (result or data supplied with revert
   * opcode)
   */
  ret: Uint8Array;
  /** vm_error is the error returned by vm execution */
  vmError: string;
  /** gas_used specifies how much gas was consumed by the transaction */
  gasUsed: Long;
}

/** MsgUpdateParams defines a Msg for updating the x/evm module parameters. */
export interface MsgUpdateParams {
  /** authority is the address of the governance account. */
  authority: string;
  /**
   * params defines the x/evm parameters to update.
   * NOTE: All parameters must be supplied.
   */
  params?: Params;
}

/**
 * MsgUpdateParamsResponse defines the response structure for executing a
 * MsgUpdateParams message.
 */
export interface MsgUpdateParamsResponse {}

const baseMsgEthereumTx: object = { size: 0, hash: "", from: "" };

export const MsgEthereumTx = {
  encode(
    message: MsgEthereumTx,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.data !== undefined) {
      Any.encode(message.data, writer.uint32(10).fork()).ldelim();
    }
    if (message.size !== 0) {
      writer.uint32(17).double(message.size);
    }
    if (message.hash !== "") {
      writer.uint32(26).string(message.hash);
    }
    if (message.from !== "") {
      writer.uint32(34).string(message.from);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgEthereumTx {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgEthereumTx } as MsgEthereumTx;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.data = Any.decode(reader, reader.uint32());
          break;
        case 2:
          message.size = reader.double();
          break;
        case 3:
          message.hash = reader.string();
          break;
        case 4:
          message.from = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgEthereumTx {
    const message = { ...baseMsgEthereumTx } as MsgEthereumTx;
    message.data =
      object.data !== undefined && object.data !== null
        ? Any.fromJSON(object.data)
        : undefined;
    message.size =
      object.size !== undefined && object.size !== null
        ? Number(object.size)
        : 0;
    message.hash =
      object.hash !== undefined && object.hash !== null
        ? String(object.hash)
        : "";
    message.from =
      object.from !== undefined && object.from !== null
        ? String(object.from)
        : "";
    return message;
  },

  toJSON(message: MsgEthereumTx): unknown {
    const obj: any = {};
    message.data !== undefined &&
      (obj.data = message.data ? Any.toJSON(message.data) : undefined);
    message.size !== undefined && (obj.size = message.size);
    message.hash !== undefined && (obj.hash = message.hash);
    message.from !== undefined && (obj.from = message.from);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgEthereumTx>): MsgEthereumTx {
    const message = { ...baseMsgEthereumTx } as MsgEthereumTx;
    message.data =
      object.data !== undefined && object.data !== null
        ? Any.fromPartial(object.data)
        : undefined;
    message.size = object.size ?? 0;
    message.hash = object.hash ?? "";
    message.from = object.from ?? "";
    return message;
  },
};

const baseLegacyTx: object = {
  nonce: Long.UZERO,
  gasPrice: "",
  gas: Long.UZERO,
  to: "",
  value: "",
};

export const LegacyTx = {
  encode(
    message: LegacyTx,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (!message.nonce.isZero()) {
      writer.uint32(8).uint64(message.nonce);
    }
    if (message.gasPrice !== "") {
      writer.uint32(18).string(message.gasPrice);
    }
    if (!message.gas.isZero()) {
      writer.uint32(24).uint64(message.gas);
    }
    if (message.to !== "") {
      writer.uint32(34).string(message.to);
    }
    if (message.value !== "") {
      writer.uint32(42).string(message.value);
    }
    if (message.data.length !== 0) {
      writer.uint32(50).bytes(message.data);
    }
    if (message.v.length !== 0) {
      writer.uint32(58).bytes(message.v);
    }
    if (message.r.length !== 0) {
      writer.uint32(66).bytes(message.r);
    }
    if (message.s.length !== 0) {
      writer.uint32(74).bytes(message.s);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): LegacyTx {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseLegacyTx } as LegacyTx;
    message.data = new Uint8Array();
    message.v = new Uint8Array();
    message.r = new Uint8Array();
    message.s = new Uint8Array();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.nonce = reader.uint64() as Long;
          break;
        case 2:
          message.gasPrice = reader.string();
          break;
        case 3:
          message.gas = reader.uint64() as Long;
          break;
        case 4:
          message.to = reader.string();
          break;
        case 5:
          message.value = reader.string();
          break;
        case 6:
          message.data = reader.bytes();
          break;
        case 7:
          message.v = reader.bytes();
          break;
        case 8:
          message.r = reader.bytes();
          break;
        case 9:
          message.s = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): LegacyTx {
    const message = { ...baseLegacyTx } as LegacyTx;
    message.nonce =
      object.nonce !== undefined && object.nonce !== null
        ? Long.fromString(object.nonce)
        : Long.UZERO;
    message.gasPrice =
      object.gasPrice !== undefined && object.gasPrice !== null
        ? String(object.gasPrice)
        : "";
    message.gas =
      object.gas !== undefined && object.gas !== null
        ? Long.fromString(object.gas)
        : Long.UZERO;
    message.to =
      object.to !== undefined && object.to !== null ? String(object.to) : "";
    message.value =
      object.value !== undefined && object.value !== null
        ? String(object.value)
        : "";
    message.data =
      object.data !== undefined && object.data !== null
        ? bytesFromBase64(object.data)
        : new Uint8Array();
    message.v =
      object.v !== undefined && object.v !== null
        ? bytesFromBase64(object.v)
        : new Uint8Array();
    message.r =
      object.r !== undefined && object.r !== null
        ? bytesFromBase64(object.r)
        : new Uint8Array();
    message.s =
      object.s !== undefined && object.s !== null
        ? bytesFromBase64(object.s)
        : new Uint8Array();
    return message;
  },

  toJSON(message: LegacyTx): unknown {
    const obj: any = {};
    message.nonce !== undefined &&
      (obj.nonce = (message.nonce || Long.UZERO).toString());
    message.gasPrice !== undefined && (obj.gasPrice = message.gasPrice);
    message.gas !== undefined &&
      (obj.gas = (message.gas || Long.UZERO).toString());
    message.to !== undefined && (obj.to = message.to);
    message.value !== undefined && (obj.value = message.value);
    message.data !== undefined &&
      (obj.data = base64FromBytes(
        message.data !== undefined ? message.data : new Uint8Array()
      ));
    message.v !== undefined &&
      (obj.v = base64FromBytes(
        message.v !== undefined ? message.v : new Uint8Array()
      ));
    message.r !== undefined &&
      (obj.r = base64FromBytes(
        message.r !== undefined ? message.r : new Uint8Array()
      ));
    message.s !== undefined &&
      (obj.s = base64FromBytes(
        message.s !== undefined ? message.s : new Uint8Array()
      ));
    return obj;
  },

  fromPartial(object: DeepPartial<LegacyTx>): LegacyTx {
    const message = { ...baseLegacyTx } as LegacyTx;
    message.nonce =
      object.nonce !== undefined && object.nonce !== null
        ? Long.fromValue(object.nonce)
        : Long.UZERO;
    message.gasPrice = object.gasPrice ?? "";
    message.gas =
      object.gas !== undefined && object.gas !== null
        ? Long.fromValue(object.gas)
        : Long.UZERO;
    message.to = object.to ?? "";
    message.value = object.value ?? "";
    message.data = object.data ?? new Uint8Array();
    message.v = object.v ?? new Uint8Array();
    message.r = object.r ?? new Uint8Array();
    message.s = object.s ?? new Uint8Array();
    return message;
  },
};

const baseAccessListTx: object = {
  chainId: "",
  nonce: Long.UZERO,
  gasPrice: "",
  gas: Long.UZERO,
  to: "",
  value: "",
};

export const AccessListTx = {
  encode(
    message: AccessListTx,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.chainId !== "") {
      writer.uint32(10).string(message.chainId);
    }
    if (!message.nonce.isZero()) {
      writer.uint32(16).uint64(message.nonce);
    }
    if (message.gasPrice !== "") {
      writer.uint32(26).string(message.gasPrice);
    }
    if (!message.gas.isZero()) {
      writer.uint32(32).uint64(message.gas);
    }
    if (message.to !== "") {
      writer.uint32(42).string(message.to);
    }
    if (message.value !== "") {
      writer.uint32(50).string(message.value);
    }
    if (message.data.length !== 0) {
      writer.uint32(58).bytes(message.data);
    }
    for (const v of message.accesses) {
      AccessTuple.encode(v!, writer.uint32(66).fork()).ldelim();
    }
    if (message.v.length !== 0) {
      writer.uint32(74).bytes(message.v);
    }
    if (message.r.length !== 0) {
      writer.uint32(82).bytes(message.r);
    }
    if (message.s.length !== 0) {
      writer.uint32(90).bytes(message.s);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AccessListTx {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseAccessListTx } as AccessListTx;
    message.accesses = [];
    message.data = new Uint8Array();
    message.v = new Uint8Array();
    message.r = new Uint8Array();
    message.s = new Uint8Array();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.chainId = reader.string();
          break;
        case 2:
          message.nonce = reader.uint64() as Long;
          break;
        case 3:
          message.gasPrice = reader.string();
          break;
        case 4:
          message.gas = reader.uint64() as Long;
          break;
        case 5:
          message.to = reader.string();
          break;
        case 6:
          message.value = reader.string();
          break;
        case 7:
          message.data = reader.bytes();
          break;
        case 8:
          message.accesses.push(AccessTuple.decode(reader, reader.uint32()));
          break;
        case 9:
          message.v = reader.bytes();
          break;
        case 10:
          message.r = reader.bytes();
          break;
        case 11:
          message.s = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): AccessListTx {
    const message = { ...baseAccessListTx } as AccessListTx;
    message.chainId =
      object.chainId !== undefined && object.chainId !== null
        ? String(object.chainId)
        : "";
    message.nonce =
      object.nonce !== undefined && object.nonce !== null
        ? Long.fromString(object.nonce)
        : Long.UZERO;
    message.gasPrice =
      object.gasPrice !== undefined && object.gasPrice !== null
        ? String(object.gasPrice)
        : "";
    message.gas =
      object.gas !== undefined && object.gas !== null
        ? Long.fromString(object.gas)
        : Long.UZERO;
    message.to =
      object.to !== undefined && object.to !== null ? String(object.to) : "";
    message.value =
      object.value !== undefined && object.value !== null
        ? String(object.value)
        : "";
    message.data =
      object.data !== undefined && object.data !== null
        ? bytesFromBase64(object.data)
        : new Uint8Array();
    message.accesses = (object.accesses ?? []).map((e: any) =>
      AccessTuple.fromJSON(e)
    );
    message.v =
      object.v !== undefined && object.v !== null
        ? bytesFromBase64(object.v)
        : new Uint8Array();
    message.r =
      object.r !== undefined && object.r !== null
        ? bytesFromBase64(object.r)
        : new Uint8Array();
    message.s =
      object.s !== undefined && object.s !== null
        ? bytesFromBase64(object.s)
        : new Uint8Array();
    return message;
  },

  toJSON(message: AccessListTx): unknown {
    const obj: any = {};
    message.chainId !== undefined && (obj.chainId = message.chainId);
    message.nonce !== undefined &&
      (obj.nonce = (message.nonce || Long.UZERO).toString());
    message.gasPrice !== undefined && (obj.gasPrice = message.gasPrice);
    message.gas !== undefined &&
      (obj.gas = (message.gas || Long.UZERO).toString());
    message.to !== undefined && (obj.to = message.to);
    message.value !== undefined && (obj.value = message.value);
    message.data !== undefined &&
      (obj.data = base64FromBytes(
        message.data !== undefined ? message.data : new Uint8Array()
      ));
    if (message.accesses) {
      obj.accesses = message.accesses.map((e) =>
        e ? AccessTuple.toJSON(e) : undefined
      );
    } else {
      obj.accesses = [];
    }
    message.v !== undefined &&
      (obj.v = base64FromBytes(
        message.v !== undefined ? message.v : new Uint8Array()
      ));
    message.r !== undefined &&
      (obj.r = base64FromBytes(
        message.r !== undefined ? message.r : new Uint8Array()
      ));
    message.s !== undefined &&
      (obj.s = base64FromBytes(
        message.s !== undefined ? message.s : new Uint8Array()
      ));
    return obj;
  },

  fromPartial(object: DeepPartial<AccessListTx>): AccessListTx {
    const message = { ...baseAccessListTx } as AccessListTx;
    message.chainId = object.chainId ?? "";
    message.nonce =
      object.nonce !== undefined && object.nonce !== null
        ? Long.fromValue(object.nonce)
        : Long.UZERO;
    message.gasPrice = object.gasPrice ?? "";
    message.gas =
      object.gas !== undefined && object.gas !== null
        ? Long.fromValue(object.gas)
        : Long.UZERO;
    message.to = object.to ?? "";
    message.value = object.value ?? "";
    message.data = object.data ?? new Uint8Array();
    message.accesses = (object.accesses ?? []).map((e) =>
      AccessTuple.fromPartial(e)
    );
    message.v = object.v ?? new Uint8Array();
    message.r = object.r ?? new Uint8Array();
    message.s = object.s ?? new Uint8Array();
    return message;
  },
};

const baseDynamicFeeTx: object = {
  chainId: "",
  nonce: Long.UZERO,
  gasTipCap: "",
  gasFeeCap: "",
  gas: Long.UZERO,
  to: "",
  value: "",
};

export const DynamicFeeTx = {
  encode(
    message: DynamicFeeTx,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.chainId !== "") {
      writer.uint32(10).string(message.chainId);
    }
    if (!message.nonce.isZero()) {
      writer.uint32(16).uint64(message.nonce);
    }
    if (message.gasTipCap !== "") {
      writer.uint32(26).string(message.gasTipCap);
    }
    if (message.gasFeeCap !== "") {
      writer.uint32(34).string(message.gasFeeCap);
    }
    if (!message.gas.isZero()) {
      writer.uint32(40).uint64(message.gas);
    }
    if (message.to !== "") {
      writer.uint32(50).string(message.to);
    }
    if (message.value !== "") {
      writer.uint32(58).string(message.value);
    }
    if (message.data.length !== 0) {
      writer.uint32(66).bytes(message.data);
    }
    for (const v of message.accesses) {
      AccessTuple.encode(v!, writer.uint32(74).fork()).ldelim();
    }
    if (message.v.length !== 0) {
      writer.uint32(82).bytes(message.v);
    }
    if (message.r.length !== 0) {
      writer.uint32(90).bytes(message.r);
    }
    if (message.s.length !== 0) {
      writer.uint32(98).bytes(message.s);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DynamicFeeTx {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseDynamicFeeTx } as DynamicFeeTx;
    message.accesses = [];
    message.data = new Uint8Array();
    message.v = new Uint8Array();
    message.r = new Uint8Array();
    message.s = new Uint8Array();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.chainId = reader.string();
          break;
        case 2:
          message.nonce = reader.uint64() as Long;
          break;
        case 3:
          message.gasTipCap = reader.string();
          break;
        case 4:
          message.gasFeeCap = reader.string();
          break;
        case 5:
          message.gas = reader.uint64() as Long;
          break;
        case 6:
          message.to = reader.string();
          break;
        case 7:
          message.value = reader.string();
          break;
        case 8:
          message.data = reader.bytes();
          break;
        case 9:
          message.accesses.push(AccessTuple.decode(reader, reader.uint32()));
          break;
        case 10:
          message.v = reader.bytes();
          break;
        case 11:
          message.r = reader.bytes();
          break;
        case 12:
          message.s = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): DynamicFeeTx {
    const message = { ...baseDynamicFeeTx } as DynamicFeeTx;
    message.chainId =
      object.chainId !== undefined && object.chainId !== null
        ? String(object.chainId)
        : "";
    message.nonce =
      object.nonce !== undefined && object.nonce !== null
        ? Long.fromString(object.nonce)
        : Long.UZERO;
    message.gasTipCap =
      object.gasTipCap !== undefined && object.gasTipCap !== null
        ? String(object.gasTipCap)
        : "";
    message.gasFeeCap =
      object.gasFeeCap !== undefined && object.gasFeeCap !== null
        ? String(object.gasFeeCap)
        : "";
    message.gas =
      object.gas !== undefined && object.gas !== null
        ? Long.fromString(object.gas)
        : Long.UZERO;
    message.to =
      object.to !== undefined && object.to !== null ? String(object.to) : "";
    message.value =
      object.value !== undefined && object.value !== null
        ? String(object.value)
        : "";
    message.data =
      object.data !== undefined && object.data !== null
        ? bytesFromBase64(object.data)
        : new Uint8Array();
    message.accesses = (object.accesses ?? []).map((e: any) =>
      AccessTuple.fromJSON(e)
    );
    message.v =
      object.v !== undefined && object.v !== null
        ? bytesFromBase64(object.v)
        : new Uint8Array();
    message.r =
      object.r !== undefined && object.r !== null
        ? bytesFromBase64(object.r)
        : new Uint8Array();
    message.s =
      object.s !== undefined && object.s !== null
        ? bytesFromBase64(object.s)
        : new Uint8Array();
    return message;
  },

  toJSON(message: DynamicFeeTx): unknown {
    const obj: any = {};
    message.chainId !== undefined && (obj.chainId = message.chainId);
    message.nonce !== undefined &&
      (obj.nonce = (message.nonce || Long.UZERO).toString());
    message.gasTipCap !== undefined && (obj.gasTipCap = message.gasTipCap);
    message.gasFeeCap !== undefined && (obj.gasFeeCap = message.gasFeeCap);
    message.gas !== undefined &&
      (obj.gas = (message.gas || Long.UZERO).toString());
    message.to !== undefined && (obj.to = message.to);
    message.value !== undefined && (obj.value = message.value);
    message.data !== undefined &&
      (obj.data = base64FromBytes(
        message.data !== undefined ? message.data : new Uint8Array()
      ));
    if (message.accesses) {
      obj.accesses = message.accesses.map((e) =>
        e ? AccessTuple.toJSON(e) : undefined
      );
    } else {
      obj.accesses = [];
    }
    message.v !== undefined &&
      (obj.v = base64FromBytes(
        message.v !== undefined ? message.v : new Uint8Array()
      ));
    message.r !== undefined &&
      (obj.r = base64FromBytes(
        message.r !== undefined ? message.r : new Uint8Array()
      ));
    message.s !== undefined &&
      (obj.s = base64FromBytes(
        message.s !== undefined ? message.s : new Uint8Array()
      ));
    return obj;
  },

  fromPartial(object: DeepPartial<DynamicFeeTx>): DynamicFeeTx {
    const message = { ...baseDynamicFeeTx } as DynamicFeeTx;
    message.chainId = object.chainId ?? "";
    message.nonce =
      object.nonce !== undefined && object.nonce !== null
        ? Long.fromValue(object.nonce)
        : Long.UZERO;
    message.gasTipCap = object.gasTipCap ?? "";
    message.gasFeeCap = object.gasFeeCap ?? "";
    message.gas =
      object.gas !== undefined && object.gas !== null
        ? Long.fromValue(object.gas)
        : Long.UZERO;
    message.to = object.to ?? "";
    message.value = object.value ?? "";
    message.data = object.data ?? new Uint8Array();
    message.accesses = (object.accesses ?? []).map((e) =>
      AccessTuple.fromPartial(e)
    );
    message.v = object.v ?? new Uint8Array();
    message.r = object.r ?? new Uint8Array();
    message.s = object.s ?? new Uint8Array();
    return message;
  },
};

const baseExtensionOptionsEthereumTx: object = {};

export const ExtensionOptionsEthereumTx = {
  encode(
    _: ExtensionOptionsEthereumTx,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): ExtensionOptionsEthereumTx {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseExtensionOptionsEthereumTx,
    } as ExtensionOptionsEthereumTx;
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

  fromJSON(_: any): ExtensionOptionsEthereumTx {
    const message = {
      ...baseExtensionOptionsEthereumTx,
    } as ExtensionOptionsEthereumTx;
    return message;
  },

  toJSON(_: ExtensionOptionsEthereumTx): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<ExtensionOptionsEthereumTx>
  ): ExtensionOptionsEthereumTx {
    const message = {
      ...baseExtensionOptionsEthereumTx,
    } as ExtensionOptionsEthereumTx;
    return message;
  },
};

const baseMsgEthereumTxResponse: object = {
  hash: "",
  vmError: "",
  gasUsed: Long.UZERO,
};

export const MsgEthereumTxResponse = {
  encode(
    message: MsgEthereumTxResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.hash !== "") {
      writer.uint32(10).string(message.hash);
    }
    for (const v of message.logs) {
      Log.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.ret.length !== 0) {
      writer.uint32(26).bytes(message.ret);
    }
    if (message.vmError !== "") {
      writer.uint32(34).string(message.vmError);
    }
    if (!message.gasUsed.isZero()) {
      writer.uint32(40).uint64(message.gasUsed);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgEthereumTxResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgEthereumTxResponse } as MsgEthereumTxResponse;
    message.logs = [];
    message.ret = new Uint8Array();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.hash = reader.string();
          break;
        case 2:
          message.logs.push(Log.decode(reader, reader.uint32()));
          break;
        case 3:
          message.ret = reader.bytes();
          break;
        case 4:
          message.vmError = reader.string();
          break;
        case 5:
          message.gasUsed = reader.uint64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgEthereumTxResponse {
    const message = { ...baseMsgEthereumTxResponse } as MsgEthereumTxResponse;
    message.hash =
      object.hash !== undefined && object.hash !== null
        ? String(object.hash)
        : "";
    message.logs = (object.logs ?? []).map((e: any) => Log.fromJSON(e));
    message.ret =
      object.ret !== undefined && object.ret !== null
        ? bytesFromBase64(object.ret)
        : new Uint8Array();
    message.vmError =
      object.vmError !== undefined && object.vmError !== null
        ? String(object.vmError)
        : "";
    message.gasUsed =
      object.gasUsed !== undefined && object.gasUsed !== null
        ? Long.fromString(object.gasUsed)
        : Long.UZERO;
    return message;
  },

  toJSON(message: MsgEthereumTxResponse): unknown {
    const obj: any = {};
    message.hash !== undefined && (obj.hash = message.hash);
    if (message.logs) {
      obj.logs = message.logs.map((e) => (e ? Log.toJSON(e) : undefined));
    } else {
      obj.logs = [];
    }
    message.ret !== undefined &&
      (obj.ret = base64FromBytes(
        message.ret !== undefined ? message.ret : new Uint8Array()
      ));
    message.vmError !== undefined && (obj.vmError = message.vmError);
    message.gasUsed !== undefined &&
      (obj.gasUsed = (message.gasUsed || Long.UZERO).toString());
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgEthereumTxResponse>
  ): MsgEthereumTxResponse {
    const message = { ...baseMsgEthereumTxResponse } as MsgEthereumTxResponse;
    message.hash = object.hash ?? "";
    message.logs = (object.logs ?? []).map((e) => Log.fromPartial(e));
    message.ret = object.ret ?? new Uint8Array();
    message.vmError = object.vmError ?? "";
    message.gasUsed =
      object.gasUsed !== undefined && object.gasUsed !== null
        ? Long.fromValue(object.gasUsed)
        : Long.UZERO;
    return message;
  },
};

const baseMsgUpdateParams: object = { authority: "" };

export const MsgUpdateParams = {
  encode(
    message: MsgUpdateParams,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateParams {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgUpdateParams } as MsgUpdateParams;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authority = reader.string();
          break;
        case 2:
          message.params = Params.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgUpdateParams {
    const message = { ...baseMsgUpdateParams } as MsgUpdateParams;
    message.authority =
      object.authority !== undefined && object.authority !== null
        ? String(object.authority)
        : "";
    message.params =
      object.params !== undefined && object.params !== null
        ? Params.fromJSON(object.params)
        : undefined;
    return message;
  },

  toJSON(message: MsgUpdateParams): unknown {
    const obj: any = {};
    message.authority !== undefined && (obj.authority = message.authority);
    message.params !== undefined &&
      (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgUpdateParams>): MsgUpdateParams {
    const message = { ...baseMsgUpdateParams } as MsgUpdateParams;
    message.authority = object.authority ?? "";
    message.params =
      object.params !== undefined && object.params !== null
        ? Params.fromPartial(object.params)
        : undefined;
    return message;
  },
};

const baseMsgUpdateParamsResponse: object = {};

export const MsgUpdateParamsResponse = {
  encode(
    _: MsgUpdateParamsResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgUpdateParamsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgUpdateParamsResponse,
    } as MsgUpdateParamsResponse;
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

  fromJSON(_: any): MsgUpdateParamsResponse {
    const message = {
      ...baseMsgUpdateParamsResponse,
    } as MsgUpdateParamsResponse;
    return message;
  },

  toJSON(_: MsgUpdateParamsResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgUpdateParamsResponse>
  ): MsgUpdateParamsResponse {
    const message = {
      ...baseMsgUpdateParamsResponse,
    } as MsgUpdateParamsResponse;
    return message;
  },
};

/** Msg defines the evm Msg service. */
export interface Msg {
  /** EthereumTx defines a method submitting Ethereum transactions. */
  EthereumTx(request: MsgEthereumTx): Promise<MsgEthereumTxResponse>;
  /**
   * UpdateParams defined a governance operation for updating the x/evm module parameters.
   * The authority is hard-coded to the Cosmos SDK x/gov module account
   */
  UpdateParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse>;
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.EthereumTx = this.EthereumTx.bind(this);
    this.UpdateParams = this.UpdateParams.bind(this);
  }
  EthereumTx(request: MsgEthereumTx): Promise<MsgEthereumTxResponse> {
    const data = MsgEthereumTx.encode(request).finish();
    const promise = this.rpc.request(
      "ethermint.evm.v1.Msg",
      "EthereumTx",
      data
    );
    return promise.then((data) =>
      MsgEthereumTxResponse.decode(new _m0.Reader(data))
    );
  }

  UpdateParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse> {
    const data = MsgUpdateParams.encode(request).finish();
    const promise = this.rpc.request(
      "ethermint.evm.v1.Msg",
      "UpdateParams",
      data
    );
    return promise.then((data) =>
      MsgUpdateParamsResponse.decode(new _m0.Reader(data))
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

declare var self: any | undefined;
declare var window: any | undefined;
declare var global: any | undefined;
var globalThis: any = (() => {
  if (typeof globalThis !== "undefined") return globalThis;
  if (typeof self !== "undefined") return self;
  if (typeof window !== "undefined") return window;
  if (typeof global !== "undefined") return global;
  throw "Unable to locate global object";
})();

const atob: (b64: string) => string =
  globalThis.atob ||
  ((b64) => globalThis.Buffer.from(b64, "base64").toString("binary"));
function bytesFromBase64(b64: string): Uint8Array {
  const bin = atob(b64);
  const arr = new Uint8Array(bin.length);
  for (let i = 0; i < bin.length; ++i) {
    arr[i] = bin.charCodeAt(i);
  }
  return arr;
}

const btoa: (bin: string) => string =
  globalThis.btoa ||
  ((bin) => globalThis.Buffer.from(bin, "binary").toString("base64"));
function base64FromBytes(arr: Uint8Array): string {
  const bin: string[] = [];
  for (const byte of arr) {
    bin.push(String.fromCharCode(byte));
  }
  return btoa(bin.join(""));
}

type Builtin =
  | Date
  | Function
  | Uint8Array
  | string
  | number
  | boolean
  | undefined;
export type DeepPartial<T> = T extends Builtin
  ? T
  : T extends Long
  ? string | number | Long
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
