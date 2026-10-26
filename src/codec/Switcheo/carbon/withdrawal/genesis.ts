/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import {
  AccountRecord,
  DenomTotal,
  LiveBalance,
  Params,
  SnapshotSummary,
  Ticket,
  UnclaimedDeposit,
} from "./withdrawal";

export const protobufPackage = "Switcheo.carbon.withdrawal";

/** GenesisState defines the withdrawal module's genesis state. */
export interface GenesisState {
  params?: Params;
  /** the snapshot step's summary; absent until the step has run */
  snapshot?: SnapshotSummary;
  initialRecords: AccountRecord[];
  liveBalances: LiveBalance[];
  denomTotals: DenomTotal[];
  tickets: Ticket[];
  unclaimedDeposits: UnclaimedDeposit[];
}

function createBaseGenesisState(): GenesisState {
  return {
    params: undefined,
    snapshot: undefined,
    initialRecords: [],
    liveBalances: [],
    denomTotals: [],
    tickets: [],
    unclaimedDeposits: [],
  };
}

export const GenesisState = {
  encode(message: GenesisState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    if (message.snapshot !== undefined) {
      SnapshotSummary.encode(message.snapshot, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.initialRecords) {
      AccountRecord.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.liveBalances) {
      LiveBalance.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    for (const v of message.denomTotals) {
      DenomTotal.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    for (const v of message.tickets) {
      Ticket.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    for (const v of message.unclaimedDeposits) {
      UnclaimedDeposit.encode(v!, writer.uint32(58).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenesisState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.params = Params.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.snapshot = SnapshotSummary.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.initialRecords.push(AccountRecord.decode(reader, reader.uint32()));
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.liveBalances.push(LiveBalance.decode(reader, reader.uint32()));
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.denomTotals.push(DenomTotal.decode(reader, reader.uint32()));
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.tickets.push(Ticket.decode(reader, reader.uint32()));
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.unclaimedDeposits.push(UnclaimedDeposit.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GenesisState {
    return {
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined,
      snapshot: isSet(object.snapshot) ? SnapshotSummary.fromJSON(object.snapshot) : undefined,
      initialRecords: Array.isArray(object?.initialRecords)
        ? object.initialRecords.map((e: any) => AccountRecord.fromJSON(e))
        : [],
      liveBalances: Array.isArray(object?.liveBalances)
        ? object.liveBalances.map((e: any) => LiveBalance.fromJSON(e))
        : [],
      denomTotals: Array.isArray(object?.denomTotals) ? object.denomTotals.map((e: any) => DenomTotal.fromJSON(e)) : [],
      tickets: Array.isArray(object?.tickets) ? object.tickets.map((e: any) => Ticket.fromJSON(e)) : [],
      unclaimedDeposits: Array.isArray(object?.unclaimedDeposits)
        ? object.unclaimedDeposits.map((e: any) => UnclaimedDeposit.fromJSON(e))
        : [],
    };
  },

  toJSON(message: GenesisState): unknown {
    const obj: any = {};
    message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    message.snapshot !== undefined &&
      (obj.snapshot = message.snapshot ? SnapshotSummary.toJSON(message.snapshot) : undefined);
    if (message.initialRecords) {
      obj.initialRecords = message.initialRecords.map((e) => e ? AccountRecord.toJSON(e) : undefined);
    } else {
      obj.initialRecords = [];
    }
    if (message.liveBalances) {
      obj.liveBalances = message.liveBalances.map((e) => e ? LiveBalance.toJSON(e) : undefined);
    } else {
      obj.liveBalances = [];
    }
    if (message.denomTotals) {
      obj.denomTotals = message.denomTotals.map((e) => e ? DenomTotal.toJSON(e) : undefined);
    } else {
      obj.denomTotals = [];
    }
    if (message.tickets) {
      obj.tickets = message.tickets.map((e) => e ? Ticket.toJSON(e) : undefined);
    } else {
      obj.tickets = [];
    }
    if (message.unclaimedDeposits) {
      obj.unclaimedDeposits = message.unclaimedDeposits.map((e) => e ? UnclaimedDeposit.toJSON(e) : undefined);
    } else {
      obj.unclaimedDeposits = [];
    }
    return obj;
  },

  create(base?: DeepPartial<GenesisState>): GenesisState {
    return GenesisState.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<GenesisState>): GenesisState {
    const message = createBaseGenesisState();
    message.params = (object.params !== undefined && object.params !== null)
      ? Params.fromPartial(object.params)
      : undefined;
    message.snapshot = (object.snapshot !== undefined && object.snapshot !== null)
      ? SnapshotSummary.fromPartial(object.snapshot)
      : undefined;
    message.initialRecords = object.initialRecords?.map((e) => AccountRecord.fromPartial(e)) || [];
    message.liveBalances = object.liveBalances?.map((e) => LiveBalance.fromPartial(e)) || [];
    message.denomTotals = object.denomTotals?.map((e) => DenomTotal.fromPartial(e)) || [];
    message.tickets = object.tickets?.map((e) => Ticket.fromPartial(e)) || [];
    message.unclaimedDeposits = object.unclaimedDeposits?.map((e) => UnclaimedDeposit.fromPartial(e)) || [];
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
