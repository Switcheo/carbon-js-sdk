/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "Switcheo.carbon.admin";

/**
 * SwthHolding records every place an address holds SWTH once the sunset's steps
 * have run, before the futures sweep, in raw units, so the holdings can be paid
 * out off chain. The record moves nothing.
 */
export interface SwthHolding {
  address: string;
  /** bank balance, locked vesting coins included */
  bank: string;
  /** futures (trading) balance */
  futures: string;
  /** margin locked by open spot orders */
  openOrders: string;
  /**
   * SWTH in liquidity pools, zero once the pool steps have deprecated every
   * funded pool; the record step fails if a pool with a SWTH side remains
   */
  liquidityPools: string;
  /** SWTH lent into the CDP, from cibt held and locked as collateral */
  cdpClaims: string;
  /** stake delegated to any validator, bonded or not */
  delegated: string;
  /** stake in the unbonding queue */
  unbonding: string;
  /** unclaimed staking rewards */
  rewards: string;
  /**
   * the DMX retro allocation the address was promised (decision 12), in raw
   * units; a promise, not SWTH on chain
   */
  airdrop: string;
  /**
   * the DMX promised for the nlend the address held going into the nlend
   * redemption: one DMX per US dollar at the sunset price table's nlend
   * price, floored, in raw units (decision 49); a promise, not SWTH on chain
   */
  nlendBonus: string;
  /** sum of every field above, the airdrop and the nlend bonus included */
  total: string;
}

function createBaseSwthHolding(): SwthHolding {
  return {
    address: "",
    bank: "",
    futures: "",
    openOrders: "",
    liquidityPools: "",
    cdpClaims: "",
    delegated: "",
    unbonding: "",
    rewards: "",
    airdrop: "",
    nlendBonus: "",
    total: "",
  };
}

export const SwthHolding = {
  encode(message: SwthHolding, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.bank !== "") {
      writer.uint32(18).string(message.bank);
    }
    if (message.futures !== "") {
      writer.uint32(26).string(message.futures);
    }
    if (message.openOrders !== "") {
      writer.uint32(34).string(message.openOrders);
    }
    if (message.liquidityPools !== "") {
      writer.uint32(42).string(message.liquidityPools);
    }
    if (message.cdpClaims !== "") {
      writer.uint32(50).string(message.cdpClaims);
    }
    if (message.delegated !== "") {
      writer.uint32(58).string(message.delegated);
    }
    if (message.unbonding !== "") {
      writer.uint32(66).string(message.unbonding);
    }
    if (message.rewards !== "") {
      writer.uint32(74).string(message.rewards);
    }
    if (message.airdrop !== "") {
      writer.uint32(90).string(message.airdrop);
    }
    if (message.nlendBonus !== "") {
      writer.uint32(98).string(message.nlendBonus);
    }
    if (message.total !== "") {
      writer.uint32(82).string(message.total);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SwthHolding {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSwthHolding();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.address = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.bank = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.futures = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.openOrders = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.liquidityPools = reader.string();
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.cdpClaims = reader.string();
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.delegated = reader.string();
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.unbonding = reader.string();
          continue;
        case 9:
          if (tag !== 74) {
            break;
          }

          message.rewards = reader.string();
          continue;
        case 11:
          if (tag !== 90) {
            break;
          }

          message.airdrop = reader.string();
          continue;
        case 12:
          if (tag !== 98) {
            break;
          }

          message.nlendBonus = reader.string();
          continue;
        case 10:
          if (tag !== 82) {
            break;
          }

          message.total = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): SwthHolding {
    return {
      address: isSet(object.address) ? String(object.address) : "",
      bank: isSet(object.bank) ? String(object.bank) : "",
      futures: isSet(object.futures) ? String(object.futures) : "",
      openOrders: isSet(object.openOrders) ? String(object.openOrders) : "",
      liquidityPools: isSet(object.liquidityPools) ? String(object.liquidityPools) : "",
      cdpClaims: isSet(object.cdpClaims) ? String(object.cdpClaims) : "",
      delegated: isSet(object.delegated) ? String(object.delegated) : "",
      unbonding: isSet(object.unbonding) ? String(object.unbonding) : "",
      rewards: isSet(object.rewards) ? String(object.rewards) : "",
      airdrop: isSet(object.airdrop) ? String(object.airdrop) : "",
      nlendBonus: isSet(object.nlendBonus) ? String(object.nlendBonus) : "",
      total: isSet(object.total) ? String(object.total) : "",
    };
  },

  toJSON(message: SwthHolding): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    message.bank !== undefined && (obj.bank = message.bank);
    message.futures !== undefined && (obj.futures = message.futures);
    message.openOrders !== undefined && (obj.openOrders = message.openOrders);
    message.liquidityPools !== undefined && (obj.liquidityPools = message.liquidityPools);
    message.cdpClaims !== undefined && (obj.cdpClaims = message.cdpClaims);
    message.delegated !== undefined && (obj.delegated = message.delegated);
    message.unbonding !== undefined && (obj.unbonding = message.unbonding);
    message.rewards !== undefined && (obj.rewards = message.rewards);
    message.airdrop !== undefined && (obj.airdrop = message.airdrop);
    message.nlendBonus !== undefined && (obj.nlendBonus = message.nlendBonus);
    message.total !== undefined && (obj.total = message.total);
    return obj;
  },

  create(base?: DeepPartial<SwthHolding>): SwthHolding {
    return SwthHolding.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<SwthHolding>): SwthHolding {
    const message = createBaseSwthHolding();
    message.address = object.address ?? "";
    message.bank = object.bank ?? "";
    message.futures = object.futures ?? "";
    message.openOrders = object.openOrders ?? "";
    message.liquidityPools = object.liquidityPools ?? "";
    message.cdpClaims = object.cdpClaims ?? "";
    message.delegated = object.delegated ?? "";
    message.unbonding = object.unbonding ?? "";
    message.rewards = object.rewards ?? "";
    message.airdrop = object.airdrop ?? "";
    message.nlendBonus = object.nlendBonus ?? "";
    message.total = object.total ?? "";
    return message;
  },
};

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends Long ? string | number | Long : T extends Array<infer U> ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
