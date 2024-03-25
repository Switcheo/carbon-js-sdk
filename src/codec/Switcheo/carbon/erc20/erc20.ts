/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "Switcheo.carbon.erc20";

/** Owner enumerates the ownership of a ERC20 contract. */
export enum Owner {
  /** OWNER_UNSPECIFIED - OWNER_UNSPECIFIED defines an invalid/undefined owner. */
  OWNER_UNSPECIFIED = 0,
  /** OWNER_MODULE - OWNER_MODULE - erc20 is owned by the erc20 module account. */
  OWNER_MODULE = 1,
  /** OWNER_EXTERNAL - OWNER_EXTERNAL - erc20 is owned by an external account. */
  OWNER_EXTERNAL = 2,
  UNRECOGNIZED = -1,
}

export function ownerFromJSON(object: any): Owner {
  switch (object) {
    case 0:
    case "OWNER_UNSPECIFIED":
      return Owner.OWNER_UNSPECIFIED;
    case 1:
    case "OWNER_MODULE":
      return Owner.OWNER_MODULE;
    case 2:
    case "OWNER_EXTERNAL":
      return Owner.OWNER_EXTERNAL;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Owner.UNRECOGNIZED;
  }
}

export function ownerToJSON(object: Owner): string {
  switch (object) {
    case Owner.OWNER_UNSPECIFIED:
      return "OWNER_UNSPECIFIED";
    case Owner.OWNER_MODULE:
      return "OWNER_MODULE";
    case Owner.OWNER_EXTERNAL:
      return "OWNER_EXTERNAL";
    default:
      return "UNKNOWN";
  }
}

/**
 * TokenPair defines an instance that records a pairing consisting of a native
 *  Cosmos Coin and an ERC20 token address.
 */
export interface TokenPair {
  /** erc20_address is the hex address of ERC20 contract token */
  erc20Address: string;
  /** denom defines the cosmos base denomination to be mapped to */
  denom: string;
  /** enabled defines the token mapping enable status */
  enabled: boolean;
  /**
   * contract_owner is the an ENUM specifying the type of ERC20 owner (0
   * invalid, 1 ModuleAccount, 2 external address)
   */
  contractOwner: Owner;
}

const baseTokenPair: object = {
  erc20Address: "",
  denom: "",
  enabled: false,
  contractOwner: 0,
};

export const TokenPair = {
  encode(
    message: TokenPair,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.erc20Address !== "") {
      writer.uint32(10).string(message.erc20Address);
    }
    if (message.denom !== "") {
      writer.uint32(18).string(message.denom);
    }
    if (message.enabled === true) {
      writer.uint32(24).bool(message.enabled);
    }
    if (message.contractOwner !== 0) {
      writer.uint32(32).int32(message.contractOwner);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TokenPair {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseTokenPair } as TokenPair;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.erc20Address = reader.string();
          break;
        case 2:
          message.denom = reader.string();
          break;
        case 3:
          message.enabled = reader.bool();
          break;
        case 4:
          message.contractOwner = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): TokenPair {
    const message = { ...baseTokenPair } as TokenPair;
    message.erc20Address =
      object.erc20Address !== undefined && object.erc20Address !== null
        ? String(object.erc20Address)
        : "";
    message.denom =
      object.denom !== undefined && object.denom !== null
        ? String(object.denom)
        : "";
    message.enabled =
      object.enabled !== undefined && object.enabled !== null
        ? Boolean(object.enabled)
        : false;
    message.contractOwner =
      object.contractOwner !== undefined && object.contractOwner !== null
        ? ownerFromJSON(object.contractOwner)
        : 0;
    return message;
  },

  toJSON(message: TokenPair): unknown {
    const obj: any = {};
    message.erc20Address !== undefined &&
      (obj.erc20Address = message.erc20Address);
    message.denom !== undefined && (obj.denom = message.denom);
    message.enabled !== undefined && (obj.enabled = message.enabled);
    message.contractOwner !== undefined &&
      (obj.contractOwner = ownerToJSON(message.contractOwner));
    return obj;
  },

  fromPartial(object: DeepPartial<TokenPair>): TokenPair {
    const message = { ...baseTokenPair } as TokenPair;
    message.erc20Address = object.erc20Address ?? "";
    message.denom = object.denom ?? "";
    message.enabled = object.enabled ?? false;
    message.contractOwner = object.contractOwner ?? 0;
    return message;
  },
};

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
