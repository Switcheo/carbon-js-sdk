/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { BoolValue } from "../../../google/protobuf/wrappers";

export const protobufPackage = "Switcheo.carbon.withdrawal";

/** MsgWithdraw is a user's or a team wallet's withdrawal of USD. */
export interface MsgWithdraw {
  sender: string;
  /** the USD to withdraw, 18 decimals; at most the live balance. What the exit cannot pay out of it stays on the balance */
  usd: string;
  /** the address on the exit's chain that receives the payout */
  recipient: string;
}

export interface MsgWithdrawResponse {
  ticketId: Long;
  /** what the exit pays in its denom's base units, before the relay fee */
  paid: string;
}

/** MsgRetryTicket reissues a reverted ticket's transfer. */
export interface MsgRetryTicket {
  sender: string;
  ticketId: Long;
  /** a new recipient on the exit's chain; empty keeps the ticket's */
  recipient: string;
}

export interface MsgRetryTicketResponse {
  /** the bridge's outbound nonce of the new transfer */
  nonce: Long;
}

/**
 * MsgUpdateTeamList adds addresses to the team list and removes others. A removed wallet keeps its balance and loses
 * only the team's abilities.
 */
export interface MsgUpdateTeamList {
  creator: string;
  add: string[];
  remove: string[];
}

export interface MsgUpdateTeamListResponse {
}

/** ExitUpdate changes the exit's switch or relay fee; an unset field keeps its value. */
export interface ExitUpdate {
  enabled?: boolean;
  /** in the exit denom's base units */
  relayFee: string;
}

/** MsgUpdateControls sets the module's switches. Every field is optional; an unset one keeps its value. */
export interface MsgUpdateControls {
  creator: string;
  userWithdrawalsEnabled?: boolean;
  rebalancingEnabled?: boolean;
  exit?: ExitUpdate;
  stockWarningUsd: string;
  paused?: boolean;
  /** deposit denoms added and removed: the USDC a listed wallet's deposit is credited in */
  addDepositDenoms: string[];
  removeDepositDenoms: string[];
  /** the smallest withdrawal, in USD with 18 decimals */
  minWithdrawalUsd: string;
}

export interface MsgUpdateControlsResponse {
}

/**
 * MsgRebalanceWithdrawal is a listed wallet's in-kind withdrawal: amount of denom from the broker over the denom's
 * bridge connection to recipient, debiting the wallet's USD balance at the table price. The admin policy may name a
 * protocol record as the account debited.
 */
export interface MsgRebalanceWithdrawal {
  sender: string;
  /** the brdg/ denom paid; the broker must hold it and the bridge must map it */
  denom: string;
  amount: string;
  recipient: string;
  /** the balance debited: the sender's when empty, or a protocol record the admin policy draws */
  account: string;
}

export interface MsgRebalanceWithdrawalResponse {
  ticketId: Long;
  /** the USD debited, 18 decimals */
  usd: string;
}

/** MsgResolveUnclaimedDeposit returns one stray deposit in kind, as a ticket paid from the unclaimed account. */
export interface MsgResolveUnclaimedDeposit {
  creator: string;
  id: Long;
  /** the address on the source chain */
  recipient: string;
  /** the connection to return over; required only when the denom is mapped on more than one */
  connectionId: string;
}

export interface MsgResolveUnclaimedDepositResponse {
  ticketId: Long;
}

/**
 * MsgReconcileBroker is the policy's answer to a broken holdings check: the coin the broker holds beyond the module's
 * tally becomes an unclaimed deposit in the protocol's name, returned like a stray deposit. A shortfall is a loss, not
 * a reconciliation, and is refused.
 */
export interface MsgReconcileBroker {
  creator: string;
  denom: string;
}

export interface MsgReconcileBrokerResponse {
  unclaimedId: Long;
  surplus: string;
}

function createBaseMsgWithdraw(): MsgWithdraw {
  return { sender: "", usd: "", recipient: "" };
}

export const MsgWithdraw = {
  encode(message: MsgWithdraw, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.usd !== "") {
      writer.uint32(18).string(message.usd);
    }
    if (message.recipient !== "") {
      writer.uint32(26).string(message.recipient);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgWithdraw {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgWithdraw();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.sender = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.usd = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.recipient = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgWithdraw {
    return {
      sender: isSet(object.sender) ? String(object.sender) : "",
      usd: isSet(object.usd) ? String(object.usd) : "",
      recipient: isSet(object.recipient) ? String(object.recipient) : "",
    };
  },

  toJSON(message: MsgWithdraw): unknown {
    const obj: any = {};
    message.sender !== undefined && (obj.sender = message.sender);
    message.usd !== undefined && (obj.usd = message.usd);
    message.recipient !== undefined && (obj.recipient = message.recipient);
    return obj;
  },

  create(base?: DeepPartial<MsgWithdraw>): MsgWithdraw {
    return MsgWithdraw.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<MsgWithdraw>): MsgWithdraw {
    const message = createBaseMsgWithdraw();
    message.sender = object.sender ?? "";
    message.usd = object.usd ?? "";
    message.recipient = object.recipient ?? "";
    return message;
  },
};

function createBaseMsgWithdrawResponse(): MsgWithdrawResponse {
  return { ticketId: Long.UZERO, paid: "" };
}

export const MsgWithdrawResponse = {
  encode(message: MsgWithdrawResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.ticketId.isZero()) {
      writer.uint32(8).uint64(message.ticketId);
    }
    if (message.paid !== "") {
      writer.uint32(18).string(message.paid);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgWithdrawResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgWithdrawResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.ticketId = reader.uint64() as Long;
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.paid = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgWithdrawResponse {
    return {
      ticketId: isSet(object.ticketId) ? Long.fromValue(object.ticketId) : Long.UZERO,
      paid: isSet(object.paid) ? String(object.paid) : "",
    };
  },

  toJSON(message: MsgWithdrawResponse): unknown {
    const obj: any = {};
    message.ticketId !== undefined && (obj.ticketId = (message.ticketId || Long.UZERO).toString());
    message.paid !== undefined && (obj.paid = message.paid);
    return obj;
  },

  create(base?: DeepPartial<MsgWithdrawResponse>): MsgWithdrawResponse {
    return MsgWithdrawResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<MsgWithdrawResponse>): MsgWithdrawResponse {
    const message = createBaseMsgWithdrawResponse();
    message.ticketId = (object.ticketId !== undefined && object.ticketId !== null)
      ? Long.fromValue(object.ticketId)
      : Long.UZERO;
    message.paid = object.paid ?? "";
    return message;
  },
};

function createBaseMsgRetryTicket(): MsgRetryTicket {
  return { sender: "", ticketId: Long.UZERO, recipient: "" };
}

export const MsgRetryTicket = {
  encode(message: MsgRetryTicket, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (!message.ticketId.isZero()) {
      writer.uint32(16).uint64(message.ticketId);
    }
    if (message.recipient !== "") {
      writer.uint32(26).string(message.recipient);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRetryTicket {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRetryTicket();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.sender = reader.string();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.ticketId = reader.uint64() as Long;
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.recipient = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgRetryTicket {
    return {
      sender: isSet(object.sender) ? String(object.sender) : "",
      ticketId: isSet(object.ticketId) ? Long.fromValue(object.ticketId) : Long.UZERO,
      recipient: isSet(object.recipient) ? String(object.recipient) : "",
    };
  },

  toJSON(message: MsgRetryTicket): unknown {
    const obj: any = {};
    message.sender !== undefined && (obj.sender = message.sender);
    message.ticketId !== undefined && (obj.ticketId = (message.ticketId || Long.UZERO).toString());
    message.recipient !== undefined && (obj.recipient = message.recipient);
    return obj;
  },

  create(base?: DeepPartial<MsgRetryTicket>): MsgRetryTicket {
    return MsgRetryTicket.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<MsgRetryTicket>): MsgRetryTicket {
    const message = createBaseMsgRetryTicket();
    message.sender = object.sender ?? "";
    message.ticketId = (object.ticketId !== undefined && object.ticketId !== null)
      ? Long.fromValue(object.ticketId)
      : Long.UZERO;
    message.recipient = object.recipient ?? "";
    return message;
  },
};

function createBaseMsgRetryTicketResponse(): MsgRetryTicketResponse {
  return { nonce: Long.UZERO };
}

export const MsgRetryTicketResponse = {
  encode(message: MsgRetryTicketResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.nonce.isZero()) {
      writer.uint32(8).uint64(message.nonce);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRetryTicketResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRetryTicketResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.nonce = reader.uint64() as Long;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgRetryTicketResponse {
    return { nonce: isSet(object.nonce) ? Long.fromValue(object.nonce) : Long.UZERO };
  },

  toJSON(message: MsgRetryTicketResponse): unknown {
    const obj: any = {};
    message.nonce !== undefined && (obj.nonce = (message.nonce || Long.UZERO).toString());
    return obj;
  },

  create(base?: DeepPartial<MsgRetryTicketResponse>): MsgRetryTicketResponse {
    return MsgRetryTicketResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<MsgRetryTicketResponse>): MsgRetryTicketResponse {
    const message = createBaseMsgRetryTicketResponse();
    message.nonce = (object.nonce !== undefined && object.nonce !== null) ? Long.fromValue(object.nonce) : Long.UZERO;
    return message;
  },
};

function createBaseMsgUpdateTeamList(): MsgUpdateTeamList {
  return { creator: "", add: [], remove: [] };
}

export const MsgUpdateTeamList = {
  encode(message: MsgUpdateTeamList, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    for (const v of message.add) {
      writer.uint32(18).string(v!);
    }
    for (const v of message.remove) {
      writer.uint32(26).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateTeamList {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateTeamList();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.creator = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.add.push(reader.string());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.remove.push(reader.string());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgUpdateTeamList {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      add: Array.isArray(object?.add) ? object.add.map((e: any) => String(e)) : [],
      remove: Array.isArray(object?.remove) ? object.remove.map((e: any) => String(e)) : [],
    };
  },

  toJSON(message: MsgUpdateTeamList): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    if (message.add) {
      obj.add = message.add.map((e) => e);
    } else {
      obj.add = [];
    }
    if (message.remove) {
      obj.remove = message.remove.map((e) => e);
    } else {
      obj.remove = [];
    }
    return obj;
  },

  create(base?: DeepPartial<MsgUpdateTeamList>): MsgUpdateTeamList {
    return MsgUpdateTeamList.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<MsgUpdateTeamList>): MsgUpdateTeamList {
    const message = createBaseMsgUpdateTeamList();
    message.creator = object.creator ?? "";
    message.add = object.add?.map((e) => e) || [];
    message.remove = object.remove?.map((e) => e) || [];
    return message;
  },
};

function createBaseMsgUpdateTeamListResponse(): MsgUpdateTeamListResponse {
  return {};
}

export const MsgUpdateTeamListResponse = {
  encode(_: MsgUpdateTeamListResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateTeamListResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateTeamListResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(_: any): MsgUpdateTeamListResponse {
    return {};
  },

  toJSON(_: MsgUpdateTeamListResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create(base?: DeepPartial<MsgUpdateTeamListResponse>): MsgUpdateTeamListResponse {
    return MsgUpdateTeamListResponse.fromPartial(base ?? {});
  },

  fromPartial(_: DeepPartial<MsgUpdateTeamListResponse>): MsgUpdateTeamListResponse {
    const message = createBaseMsgUpdateTeamListResponse();
    return message;
  },
};

function createBaseExitUpdate(): ExitUpdate {
  return { enabled: undefined, relayFee: "" };
}

export const ExitUpdate = {
  encode(message: ExitUpdate, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.enabled !== undefined) {
      BoolValue.encode({ value: message.enabled! }, writer.uint32(10).fork()).ldelim();
    }
    if (message.relayFee !== "") {
      writer.uint32(18).string(message.relayFee);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ExitUpdate {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseExitUpdate();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.enabled = BoolValue.decode(reader, reader.uint32()).value;
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.relayFee = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ExitUpdate {
    return {
      enabled: isSet(object.enabled) ? Boolean(object.enabled) : undefined,
      relayFee: isSet(object.relayFee) ? String(object.relayFee) : "",
    };
  },

  toJSON(message: ExitUpdate): unknown {
    const obj: any = {};
    message.enabled !== undefined && (obj.enabled = message.enabled);
    message.relayFee !== undefined && (obj.relayFee = message.relayFee);
    return obj;
  },

  create(base?: DeepPartial<ExitUpdate>): ExitUpdate {
    return ExitUpdate.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<ExitUpdate>): ExitUpdate {
    const message = createBaseExitUpdate();
    message.enabled = object.enabled ?? undefined;
    message.relayFee = object.relayFee ?? "";
    return message;
  },
};

function createBaseMsgUpdateControls(): MsgUpdateControls {
  return {
    creator: "",
    userWithdrawalsEnabled: undefined,
    rebalancingEnabled: undefined,
    exit: undefined,
    stockWarningUsd: "",
    paused: undefined,
    addDepositDenoms: [],
    removeDepositDenoms: [],
    minWithdrawalUsd: "",
  };
}

export const MsgUpdateControls = {
  encode(message: MsgUpdateControls, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.userWithdrawalsEnabled !== undefined) {
      BoolValue.encode({ value: message.userWithdrawalsEnabled! }, writer.uint32(18).fork()).ldelim();
    }
    if (message.rebalancingEnabled !== undefined) {
      BoolValue.encode({ value: message.rebalancingEnabled! }, writer.uint32(26).fork()).ldelim();
    }
    if (message.exit !== undefined) {
      ExitUpdate.encode(message.exit, writer.uint32(34).fork()).ldelim();
    }
    if (message.stockWarningUsd !== "") {
      writer.uint32(42).string(message.stockWarningUsd);
    }
    if (message.paused !== undefined) {
      BoolValue.encode({ value: message.paused! }, writer.uint32(50).fork()).ldelim();
    }
    for (const v of message.addDepositDenoms) {
      writer.uint32(58).string(v!);
    }
    for (const v of message.removeDepositDenoms) {
      writer.uint32(66).string(v!);
    }
    if (message.minWithdrawalUsd !== "") {
      writer.uint32(74).string(message.minWithdrawalUsd);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateControls {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateControls();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.creator = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.userWithdrawalsEnabled = BoolValue.decode(reader, reader.uint32()).value;
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.rebalancingEnabled = BoolValue.decode(reader, reader.uint32()).value;
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.exit = ExitUpdate.decode(reader, reader.uint32());
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.stockWarningUsd = reader.string();
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.paused = BoolValue.decode(reader, reader.uint32()).value;
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.addDepositDenoms.push(reader.string());
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.removeDepositDenoms.push(reader.string());
          continue;
        case 9:
          if (tag !== 74) {
            break;
          }

          message.minWithdrawalUsd = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgUpdateControls {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      userWithdrawalsEnabled: isSet(object.userWithdrawalsEnabled) ? Boolean(object.userWithdrawalsEnabled) : undefined,
      rebalancingEnabled: isSet(object.rebalancingEnabled) ? Boolean(object.rebalancingEnabled) : undefined,
      exit: isSet(object.exit) ? ExitUpdate.fromJSON(object.exit) : undefined,
      stockWarningUsd: isSet(object.stockWarningUsd) ? String(object.stockWarningUsd) : "",
      paused: isSet(object.paused) ? Boolean(object.paused) : undefined,
      addDepositDenoms: Array.isArray(object?.addDepositDenoms)
        ? object.addDepositDenoms.map((e: any) => String(e))
        : [],
      removeDepositDenoms: Array.isArray(object?.removeDepositDenoms)
        ? object.removeDepositDenoms.map((e: any) => String(e))
        : [],
      minWithdrawalUsd: isSet(object.minWithdrawalUsd) ? String(object.minWithdrawalUsd) : "",
    };
  },

  toJSON(message: MsgUpdateControls): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.userWithdrawalsEnabled !== undefined && (obj.userWithdrawalsEnabled = message.userWithdrawalsEnabled);
    message.rebalancingEnabled !== undefined && (obj.rebalancingEnabled = message.rebalancingEnabled);
    message.exit !== undefined && (obj.exit = message.exit ? ExitUpdate.toJSON(message.exit) : undefined);
    message.stockWarningUsd !== undefined && (obj.stockWarningUsd = message.stockWarningUsd);
    message.paused !== undefined && (obj.paused = message.paused);
    if (message.addDepositDenoms) {
      obj.addDepositDenoms = message.addDepositDenoms.map((e) => e);
    } else {
      obj.addDepositDenoms = [];
    }
    if (message.removeDepositDenoms) {
      obj.removeDepositDenoms = message.removeDepositDenoms.map((e) => e);
    } else {
      obj.removeDepositDenoms = [];
    }
    message.minWithdrawalUsd !== undefined && (obj.minWithdrawalUsd = message.minWithdrawalUsd);
    return obj;
  },

  create(base?: DeepPartial<MsgUpdateControls>): MsgUpdateControls {
    return MsgUpdateControls.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<MsgUpdateControls>): MsgUpdateControls {
    const message = createBaseMsgUpdateControls();
    message.creator = object.creator ?? "";
    message.userWithdrawalsEnabled = object.userWithdrawalsEnabled ?? undefined;
    message.rebalancingEnabled = object.rebalancingEnabled ?? undefined;
    message.exit = (object.exit !== undefined && object.exit !== null)
      ? ExitUpdate.fromPartial(object.exit)
      : undefined;
    message.stockWarningUsd = object.stockWarningUsd ?? "";
    message.paused = object.paused ?? undefined;
    message.addDepositDenoms = object.addDepositDenoms?.map((e) => e) || [];
    message.removeDepositDenoms = object.removeDepositDenoms?.map((e) => e) || [];
    message.minWithdrawalUsd = object.minWithdrawalUsd ?? "";
    return message;
  },
};

function createBaseMsgUpdateControlsResponse(): MsgUpdateControlsResponse {
  return {};
}

export const MsgUpdateControlsResponse = {
  encode(_: MsgUpdateControlsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateControlsResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateControlsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(_: any): MsgUpdateControlsResponse {
    return {};
  },

  toJSON(_: MsgUpdateControlsResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create(base?: DeepPartial<MsgUpdateControlsResponse>): MsgUpdateControlsResponse {
    return MsgUpdateControlsResponse.fromPartial(base ?? {});
  },

  fromPartial(_: DeepPartial<MsgUpdateControlsResponse>): MsgUpdateControlsResponse {
    const message = createBaseMsgUpdateControlsResponse();
    return message;
  },
};

function createBaseMsgRebalanceWithdrawal(): MsgRebalanceWithdrawal {
  return { sender: "", denom: "", amount: "", recipient: "", account: "" };
}

export const MsgRebalanceWithdrawal = {
  encode(message: MsgRebalanceWithdrawal, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.denom !== "") {
      writer.uint32(18).string(message.denom);
    }
    if (message.amount !== "") {
      writer.uint32(26).string(message.amount);
    }
    if (message.recipient !== "") {
      writer.uint32(34).string(message.recipient);
    }
    if (message.account !== "") {
      writer.uint32(42).string(message.account);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRebalanceWithdrawal {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRebalanceWithdrawal();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.sender = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.denom = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.amount = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.recipient = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.account = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgRebalanceWithdrawal {
    return {
      sender: isSet(object.sender) ? String(object.sender) : "",
      denom: isSet(object.denom) ? String(object.denom) : "",
      amount: isSet(object.amount) ? String(object.amount) : "",
      recipient: isSet(object.recipient) ? String(object.recipient) : "",
      account: isSet(object.account) ? String(object.account) : "",
    };
  },

  toJSON(message: MsgRebalanceWithdrawal): unknown {
    const obj: any = {};
    message.sender !== undefined && (obj.sender = message.sender);
    message.denom !== undefined && (obj.denom = message.denom);
    message.amount !== undefined && (obj.amount = message.amount);
    message.recipient !== undefined && (obj.recipient = message.recipient);
    message.account !== undefined && (obj.account = message.account);
    return obj;
  },

  create(base?: DeepPartial<MsgRebalanceWithdrawal>): MsgRebalanceWithdrawal {
    return MsgRebalanceWithdrawal.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<MsgRebalanceWithdrawal>): MsgRebalanceWithdrawal {
    const message = createBaseMsgRebalanceWithdrawal();
    message.sender = object.sender ?? "";
    message.denom = object.denom ?? "";
    message.amount = object.amount ?? "";
    message.recipient = object.recipient ?? "";
    message.account = object.account ?? "";
    return message;
  },
};

function createBaseMsgRebalanceWithdrawalResponse(): MsgRebalanceWithdrawalResponse {
  return { ticketId: Long.UZERO, usd: "" };
}

export const MsgRebalanceWithdrawalResponse = {
  encode(message: MsgRebalanceWithdrawalResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.ticketId.isZero()) {
      writer.uint32(8).uint64(message.ticketId);
    }
    if (message.usd !== "") {
      writer.uint32(18).string(message.usd);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRebalanceWithdrawalResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRebalanceWithdrawalResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.ticketId = reader.uint64() as Long;
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.usd = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgRebalanceWithdrawalResponse {
    return {
      ticketId: isSet(object.ticketId) ? Long.fromValue(object.ticketId) : Long.UZERO,
      usd: isSet(object.usd) ? String(object.usd) : "",
    };
  },

  toJSON(message: MsgRebalanceWithdrawalResponse): unknown {
    const obj: any = {};
    message.ticketId !== undefined && (obj.ticketId = (message.ticketId || Long.UZERO).toString());
    message.usd !== undefined && (obj.usd = message.usd);
    return obj;
  },

  create(base?: DeepPartial<MsgRebalanceWithdrawalResponse>): MsgRebalanceWithdrawalResponse {
    return MsgRebalanceWithdrawalResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<MsgRebalanceWithdrawalResponse>): MsgRebalanceWithdrawalResponse {
    const message = createBaseMsgRebalanceWithdrawalResponse();
    message.ticketId = (object.ticketId !== undefined && object.ticketId !== null)
      ? Long.fromValue(object.ticketId)
      : Long.UZERO;
    message.usd = object.usd ?? "";
    return message;
  },
};

function createBaseMsgResolveUnclaimedDeposit(): MsgResolveUnclaimedDeposit {
  return { creator: "", id: Long.UZERO, recipient: "", connectionId: "" };
}

export const MsgResolveUnclaimedDeposit = {
  encode(message: MsgResolveUnclaimedDeposit, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (!message.id.isZero()) {
      writer.uint32(16).uint64(message.id);
    }
    if (message.recipient !== "") {
      writer.uint32(26).string(message.recipient);
    }
    if (message.connectionId !== "") {
      writer.uint32(34).string(message.connectionId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgResolveUnclaimedDeposit {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgResolveUnclaimedDeposit();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.creator = reader.string();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.id = reader.uint64() as Long;
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.recipient = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.connectionId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgResolveUnclaimedDeposit {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      id: isSet(object.id) ? Long.fromValue(object.id) : Long.UZERO,
      recipient: isSet(object.recipient) ? String(object.recipient) : "",
      connectionId: isSet(object.connectionId) ? String(object.connectionId) : "",
    };
  },

  toJSON(message: MsgResolveUnclaimedDeposit): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.id !== undefined && (obj.id = (message.id || Long.UZERO).toString());
    message.recipient !== undefined && (obj.recipient = message.recipient);
    message.connectionId !== undefined && (obj.connectionId = message.connectionId);
    return obj;
  },

  create(base?: DeepPartial<MsgResolveUnclaimedDeposit>): MsgResolveUnclaimedDeposit {
    return MsgResolveUnclaimedDeposit.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<MsgResolveUnclaimedDeposit>): MsgResolveUnclaimedDeposit {
    const message = createBaseMsgResolveUnclaimedDeposit();
    message.creator = object.creator ?? "";
    message.id = (object.id !== undefined && object.id !== null) ? Long.fromValue(object.id) : Long.UZERO;
    message.recipient = object.recipient ?? "";
    message.connectionId = object.connectionId ?? "";
    return message;
  },
};

function createBaseMsgResolveUnclaimedDepositResponse(): MsgResolveUnclaimedDepositResponse {
  return { ticketId: Long.UZERO };
}

export const MsgResolveUnclaimedDepositResponse = {
  encode(message: MsgResolveUnclaimedDepositResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.ticketId.isZero()) {
      writer.uint32(8).uint64(message.ticketId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgResolveUnclaimedDepositResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgResolveUnclaimedDepositResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.ticketId = reader.uint64() as Long;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgResolveUnclaimedDepositResponse {
    return { ticketId: isSet(object.ticketId) ? Long.fromValue(object.ticketId) : Long.UZERO };
  },

  toJSON(message: MsgResolveUnclaimedDepositResponse): unknown {
    const obj: any = {};
    message.ticketId !== undefined && (obj.ticketId = (message.ticketId || Long.UZERO).toString());
    return obj;
  },

  create(base?: DeepPartial<MsgResolveUnclaimedDepositResponse>): MsgResolveUnclaimedDepositResponse {
    return MsgResolveUnclaimedDepositResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<MsgResolveUnclaimedDepositResponse>): MsgResolveUnclaimedDepositResponse {
    const message = createBaseMsgResolveUnclaimedDepositResponse();
    message.ticketId = (object.ticketId !== undefined && object.ticketId !== null)
      ? Long.fromValue(object.ticketId)
      : Long.UZERO;
    return message;
  },
};

function createBaseMsgReconcileBroker(): MsgReconcileBroker {
  return { creator: "", denom: "" };
}

export const MsgReconcileBroker = {
  encode(message: MsgReconcileBroker, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.denom !== "") {
      writer.uint32(18).string(message.denom);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgReconcileBroker {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgReconcileBroker();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.creator = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.denom = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgReconcileBroker {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      denom: isSet(object.denom) ? String(object.denom) : "",
    };
  },

  toJSON(message: MsgReconcileBroker): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.denom !== undefined && (obj.denom = message.denom);
    return obj;
  },

  create(base?: DeepPartial<MsgReconcileBroker>): MsgReconcileBroker {
    return MsgReconcileBroker.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<MsgReconcileBroker>): MsgReconcileBroker {
    const message = createBaseMsgReconcileBroker();
    message.creator = object.creator ?? "";
    message.denom = object.denom ?? "";
    return message;
  },
};

function createBaseMsgReconcileBrokerResponse(): MsgReconcileBrokerResponse {
  return { unclaimedId: Long.UZERO, surplus: "" };
}

export const MsgReconcileBrokerResponse = {
  encode(message: MsgReconcileBrokerResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.unclaimedId.isZero()) {
      writer.uint32(8).uint64(message.unclaimedId);
    }
    if (message.surplus !== "") {
      writer.uint32(18).string(message.surplus);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgReconcileBrokerResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgReconcileBrokerResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.unclaimedId = reader.uint64() as Long;
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.surplus = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgReconcileBrokerResponse {
    return {
      unclaimedId: isSet(object.unclaimedId) ? Long.fromValue(object.unclaimedId) : Long.UZERO,
      surplus: isSet(object.surplus) ? String(object.surplus) : "",
    };
  },

  toJSON(message: MsgReconcileBrokerResponse): unknown {
    const obj: any = {};
    message.unclaimedId !== undefined && (obj.unclaimedId = (message.unclaimedId || Long.UZERO).toString());
    message.surplus !== undefined && (obj.surplus = message.surplus);
    return obj;
  },

  create(base?: DeepPartial<MsgReconcileBrokerResponse>): MsgReconcileBrokerResponse {
    return MsgReconcileBrokerResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<MsgReconcileBrokerResponse>): MsgReconcileBrokerResponse {
    const message = createBaseMsgReconcileBrokerResponse();
    message.unclaimedId = (object.unclaimedId !== undefined && object.unclaimedId !== null)
      ? Long.fromValue(object.unclaimedId)
      : Long.UZERO;
    message.surplus = object.surplus ?? "";
    return message;
  },
};

/** Msg defines the withdrawal Msg service. */
export interface Msg {
  /** Withdraw pays part of the sender's USD balance as Arbitrum USDC, one for one, from the broker. It costs no gas. */
  Withdraw(request: MsgWithdraw): Promise<MsgWithdrawResponse>;
  /**
   * RetryTicket reissues a withdrawal the bridge reverted, to the same or a new recipient, with no balance change. The
   * owner retries a ticket reverted on proof; only the admin policy retries one the admin reverted by hand.
   */
  RetryTicket(request: MsgRetryTicket): Promise<MsgRetryTicketResponse>;
  /** UpdateTeamList adds and removes the whitelisted team wallets. Admin or authority only. */
  UpdateTeamList(request: MsgUpdateTeamList): Promise<MsgUpdateTeamListResponse>;
  /**
   * UpdateControls sets the switches: withdrawals per class, the exit's enable and relay fee, the stock warning, the
   * pause, the deposit denoms. Admin or authority only.
   */
  UpdateControls(request: MsgUpdateControls): Promise<MsgUpdateControlsResponse>;
  /**
   * RebalanceWithdrawal pays a listed wallet any token the broker holds, in kind over that token's own connection,
   * debiting its USD balance at the table price. The admin policy may draw a protocol record the same way.
   */
  RebalanceWithdrawal(request: MsgRebalanceWithdrawal): Promise<MsgRebalanceWithdrawalResponse>;
  /** ResolveUnclaimedDeposit returns a stray deposit in kind to an address on its source chain. Admin or authority only. */
  ResolveUnclaimedDeposit(request: MsgResolveUnclaimedDeposit): Promise<MsgResolveUnclaimedDepositResponse>;
  /** ReconcileBroker books a coin that reached the broker outside the module's bookkeeping as an unclaimed deposit. */
  ReconcileBroker(request: MsgReconcileBroker): Promise<MsgReconcileBrokerResponse>;
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  private readonly service: string;
  constructor(rpc: Rpc, opts?: { service?: string }) {
    this.service = opts?.service || "Switcheo.carbon.withdrawal.Msg";
    this.rpc = rpc;
    this.Withdraw = this.Withdraw.bind(this);
    this.RetryTicket = this.RetryTicket.bind(this);
    this.UpdateTeamList = this.UpdateTeamList.bind(this);
    this.UpdateControls = this.UpdateControls.bind(this);
    this.RebalanceWithdrawal = this.RebalanceWithdrawal.bind(this);
    this.ResolveUnclaimedDeposit = this.ResolveUnclaimedDeposit.bind(this);
    this.ReconcileBroker = this.ReconcileBroker.bind(this);
  }
  Withdraw(request: MsgWithdraw): Promise<MsgWithdrawResponse> {
    const data = MsgWithdraw.encode(request).finish();
    const promise = this.rpc.request(this.service, "Withdraw", data);
    return promise.then((data) => MsgWithdrawResponse.decode(_m0.Reader.create(data)));
  }

  RetryTicket(request: MsgRetryTicket): Promise<MsgRetryTicketResponse> {
    const data = MsgRetryTicket.encode(request).finish();
    const promise = this.rpc.request(this.service, "RetryTicket", data);
    return promise.then((data) => MsgRetryTicketResponse.decode(_m0.Reader.create(data)));
  }

  UpdateTeamList(request: MsgUpdateTeamList): Promise<MsgUpdateTeamListResponse> {
    const data = MsgUpdateTeamList.encode(request).finish();
    const promise = this.rpc.request(this.service, "UpdateTeamList", data);
    return promise.then((data) => MsgUpdateTeamListResponse.decode(_m0.Reader.create(data)));
  }

  UpdateControls(request: MsgUpdateControls): Promise<MsgUpdateControlsResponse> {
    const data = MsgUpdateControls.encode(request).finish();
    const promise = this.rpc.request(this.service, "UpdateControls", data);
    return promise.then((data) => MsgUpdateControlsResponse.decode(_m0.Reader.create(data)));
  }

  RebalanceWithdrawal(request: MsgRebalanceWithdrawal): Promise<MsgRebalanceWithdrawalResponse> {
    const data = MsgRebalanceWithdrawal.encode(request).finish();
    const promise = this.rpc.request(this.service, "RebalanceWithdrawal", data);
    return promise.then((data) => MsgRebalanceWithdrawalResponse.decode(_m0.Reader.create(data)));
  }

  ResolveUnclaimedDeposit(request: MsgResolveUnclaimedDeposit): Promise<MsgResolveUnclaimedDepositResponse> {
    const data = MsgResolveUnclaimedDeposit.encode(request).finish();
    const promise = this.rpc.request(this.service, "ResolveUnclaimedDeposit", data);
    return promise.then((data) => MsgResolveUnclaimedDepositResponse.decode(_m0.Reader.create(data)));
  }

  ReconcileBroker(request: MsgReconcileBroker): Promise<MsgReconcileBrokerResponse> {
    const data = MsgReconcileBroker.encode(request).finish();
    const promise = this.rpc.request(this.service, "ReconcileBroker", data);
    return promise.then((data) => MsgReconcileBrokerResponse.decode(_m0.Reader.create(data)));
  }
}

interface Rpc {
  request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}

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
