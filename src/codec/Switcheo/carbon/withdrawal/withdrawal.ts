/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "Switcheo.carbon.withdrawal";

/**
 * AccountClass says whose an account's balance is. The snapshot step sets it; the team list (Params) adds the team's
 * abilities on top of a USER record and never changes the class.
 */
export enum AccountClass {
  /** ACCOUNT_CLASS_USER - a user's balance, withdrawable as Arbitrum USDC */
  ACCOUNT_CLASS_USER = 0,
  /** ACCOUNT_CLASS_PROTOCOL - the community pool and the vaults' dust, owned by the group 1 policy, which alone draws it in kind (decisions 19, 32) */
  ACCOUNT_CLASS_PROTOCOL = 1,
  /** ACCOUNT_CLASS_FROZEN - a blacklisted account: recorded, never withdrawable */
  ACCOUNT_CLASS_FROZEN = 2,
  /**
   * ACCOUNT_CLASS_RESERVED - an account no key on Carbon controls, an interchain account or an IBC transfer escrow: recorded so what it held
   * is owned on the books, never withdrawable, never listed, swept at the shutdown
   */
  ACCOUNT_CLASS_RESERVED = 3,
  UNRECOGNIZED = -1,
}

export function accountClassFromJSON(object: any): AccountClass {
  switch (object) {
    case 0:
    case "ACCOUNT_CLASS_USER":
      return AccountClass.ACCOUNT_CLASS_USER;
    case 1:
    case "ACCOUNT_CLASS_PROTOCOL":
      return AccountClass.ACCOUNT_CLASS_PROTOCOL;
    case 2:
    case "ACCOUNT_CLASS_FROZEN":
      return AccountClass.ACCOUNT_CLASS_FROZEN;
    case 3:
    case "ACCOUNT_CLASS_RESERVED":
      return AccountClass.ACCOUNT_CLASS_RESERVED;
    case -1:
    case "UNRECOGNIZED":
    default:
      return AccountClass.UNRECOGNIZED;
  }
}

export function accountClassToJSON(object: AccountClass): string {
  switch (object) {
    case AccountClass.ACCOUNT_CLASS_USER:
      return "ACCOUNT_CLASS_USER";
    case AccountClass.ACCOUNT_CLASS_PROTOCOL:
      return "ACCOUNT_CLASS_PROTOCOL";
    case AccountClass.ACCOUNT_CLASS_FROZEN:
      return "ACCOUNT_CLASS_FROZEN";
    case AccountClass.ACCOUNT_CLASS_RESERVED:
      return "ACCOUNT_CLASS_RESERVED";
    case AccountClass.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

/** TicketStatus is where a withdrawal stands. */
export enum TicketStatus {
  /** TICKET_STATUS_PENDING - debited and handed to the bridge; not yet acknowledged */
  TICKET_STATUS_PENDING = 0,
  /** TICKET_STATUS_DONE - the bridge confirmed it; the payout left */
  TICKET_STATUS_DONE = 1,
  /**
   * TICKET_STATUS_REVERTED - the bridge reverted it on proof (a timeout, an error acknowledgement, an expired relay) and refunded the broker;
   * the balance stays debited and the owner retries
   */
  TICKET_STATUS_REVERTED = 2,
  /** TICKET_STATUS_HELD - reverted by the admin's message, without proof; only the policy may retry it */
  TICKET_STATUS_HELD = 3,
  UNRECOGNIZED = -1,
}

export function ticketStatusFromJSON(object: any): TicketStatus {
  switch (object) {
    case 0:
    case "TICKET_STATUS_PENDING":
      return TicketStatus.TICKET_STATUS_PENDING;
    case 1:
    case "TICKET_STATUS_DONE":
      return TicketStatus.TICKET_STATUS_DONE;
    case 2:
    case "TICKET_STATUS_REVERTED":
      return TicketStatus.TICKET_STATUS_REVERTED;
    case 3:
    case "TICKET_STATUS_HELD":
      return TicketStatus.TICKET_STATUS_HELD;
    case -1:
    case "UNRECOGNIZED":
    default:
      return TicketStatus.UNRECOGNIZED;
  }
}

export function ticketStatusToJSON(object: TicketStatus): string {
  switch (object) {
    case TicketStatus.TICKET_STATUS_PENDING:
      return "TICKET_STATUS_PENDING";
    case TicketStatus.TICKET_STATUS_DONE:
      return "TICKET_STATUS_DONE";
    case TicketStatus.TICKET_STATUS_REVERTED:
      return "TICKET_STATUS_REVERTED";
    case TicketStatus.TICKET_STATUS_HELD:
      return "TICKET_STATUS_HELD";
    case TicketStatus.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

/** Balance is one denom of a snapshot record, in base units. */
export interface Balance {
  denom: string;
  amount: string;
}

/**
 * AccountRecord is an address's balances at the snapshot, token by token. Written once and never changed, it is the
 * history behind the address's USD balance.
 */
export interface AccountRecord {
  address: string;
  class: AccountClass;
  balances: Balance[];
}

/**
 * LiveBalance is what an address may still withdraw, in USD with 18 decimals: its snapshot record valued at the sunset
 * price table, less every withdrawal, plus a listed wallet's USDC deposits. Nothing else raises it.
 */
export interface LiveBalance {
  address: string;
  class: AccountClass;
  usd: string;
}

/**
 * DenomTotal is the module's book of one denom in the broker: what the snapshot moved in from accounts and from the
 * dissolved vaults, what the module believes the broker holds now, and how much of that is owed to reverted tickets
 * awaiting a retry.
 */
export interface DenomTotal {
  denom: string;
  fromAccounts: string;
  fromVaults: string;
  /**
   * moved in by the snapshot, raised by deposits and refunds, lowered by tickets paid. The end block compares it with
   * the bank
   */
  held: string;
  /** refunded by the bridge for tickets not yet retried; rebalancing may not spend it */
  reserved: string;
}

/**
 * GroupDissolution records one token group the snapshot step dissolved: its vault's contents moved into the broker and
 * the cheques the broker swept in were burnt.
 */
export interface GroupDissolution {
  groupId: Long;
  chequeDenom: string;
  vaultAddress: string;
  vaultBalances: Balance[];
  /** cheques the broker held after the sweep and burnt */
  chequesBurned: string;
  /** cheques still held outside the broker's scope, not burnt */
  chequesLeft: string;
}

/** SnapshotSummary is written once, by the snapshot step. */
export interface SnapshotSummary {
  height: Long;
  brokerAddress: string;
  /** records written, by class */
  userAccounts: Long;
  protocolAccounts: Long;
  frozenAccounts: Long;
  /** balances recorded across every record */
  balances: Long;
  /** denoms held at the snapshot that the price table does not price; they are worth nothing */
  unpricedDenoms: string[];
  groups: GroupDissolution[];
  /** sha256 over the initial records in address order, hex */
  snapshotHash: string;
  reservedAccounts: Long;
  /** every live balance at the snapshot, in USD with 18 decimals */
  totalUsd: string;
}

/** Params are the module's switches, every one set by the group 1 policy. */
export interface Params {
  /** addresses with the team's abilities: USDC deposits credit, in-kind withdrawals. Empty at the migration */
  teamList: string[];
  /** the user class may withdraw; off until the dispute phase ends */
  userWithdrawalsEnabled: boolean;
  /** the team list may withdraw in kind; on from the resume so the team can rebalance */
  rebalancingEnabled: boolean;
  /** the one exit the module pays users through: Arbitrum USDC, one for one */
  exit?: Exit;
  /** below this USD value of the exit's stock in the broker the module warns; 0 disables */
  stockWarningUsd: string;
  /**
   * set by a broken end-block check or by the policy; every withdrawal, retry and return is refused until the policy
   * resumes
   */
  paused: boolean;
  pauseReason: string;
  /** the USDC denoms a listed wallet's deposit is credited in, at the table price: members of the dissolved USD group */
  depositDenoms: string[];
  /** the dissolved USD group's cheque (cgt/1); only that group's members may be deposit denoms */
  usdCheque: string;
}

/** Exit is the way out of the broker: a brdg/ denom paid over its bridge connection. */
export interface Exit {
  name: string;
  denom: string;
  connectionId: string;
  enabled: boolean;
  /** relay fee in the exit denom, taken from the amount paid; zero allowed */
  relayFee: string;
}

/**
 * Ticket is one withdrawal: the USD debited, the payout, and the bridge transfer it authorised. The bridge's freeze lets
 * a transfer out only against a matching ticket. Tickets are the withdrawal log; a retry reissues the same ticket.
 */
export interface Ticket {
  id: Long;
  address: string;
  /** the USD debited, 18 decimals; zero for the return of an unclaimed deposit */
  usd: string;
  /** the exit taken, its denom and connection */
  exit: string;
  exitDenom: string;
  connectionId: string;
  /** what the exit pays in its denom's base units, relay fee included; the recipient gets paid less fee */
  paid: string;
  fee: string;
  /** the table price of the exit denom, USD per whole token */
  priceExit: string;
  recipient: string;
  height: Long;
  /** the bridge's outbound nonce for the latest transfer */
  nonce: Long;
  status: TicketStatus;
  /** the unclaimed deposit a return ticket pays out; zero for a ticket that debited a balance */
  unclaimedId: Long;
  /** how many times the transfer was reissued after a revert */
  retries: number;
  /** the nonces of the reverted transfers before the current one, oldest first */
  previousNonces: Long[];
}

/**
 * UnclaimedDeposit is a deposit Carbon would not credit: an Axelar deposit to an address off the team list, or a
 * listed wallet's deposit of anything but USDC. The coin sits in the unclaimed account, outside the broker and
 * credited to nobody, until the group 1 policy returns it in kind to an address on its source chain.
 */
export interface UnclaimedDeposit {
  id: Long;
  receiver: string;
  denom: string;
  amount: string;
  height: Long;
  /** empty while unresolved; then "returned", with the ticket */
  resolution: string;
  ticketId: Long;
  /** the depositor's address on the source chain (the bridge's sender, or the IBC packet's) */
  source: string;
}

/**
 * Coverage is the figure the module reports every block. The users' claims against the exit's stock warn; the books,
 * every claim against every coin the broker holds at table prices, pause when they do not hold.
 */
export interface Coverage {
  height: Long;
  /** the user class's balances */
  claimsUsd: string;
  /** the exit denom the broker holds beyond what reverted tickets are owed */
  deliverableUsd: string;
  /** deliverable less claims; negative when the exit cannot pay every user today */
  surplusUsd: string;
  /** the exit's stock is below the stock warning parameter */
  warning: boolean;
  /** every live balance, whoever's */
  totalClaimsUsd: string;
  /** every coin the broker holds at table prices */
  holdingsUsd: string;
  /**
   * holdings less every claim less what reverted tickets are owed: the vaults' excess and payout rounding, never below
   * the tolerance
   */
  booksSurplusUsd: string;
  /** what reverted tickets awaiting a retry are owed, at table prices */
  reservedUsd: string;
}

function createBaseBalance(): Balance {
  return { denom: "", amount: "" };
}

export const Balance = {
  encode(message: Balance, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    if (message.amount !== "") {
      writer.uint32(18).string(message.amount);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Balance {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBalance();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.denom = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.amount = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Balance {
    return {
      denom: isSet(object.denom) ? String(object.denom) : "",
      amount: isSet(object.amount) ? String(object.amount) : "",
    };
  },

  toJSON(message: Balance): unknown {
    const obj: any = {};
    message.denom !== undefined && (obj.denom = message.denom);
    message.amount !== undefined && (obj.amount = message.amount);
    return obj;
  },

  create(base?: DeepPartial<Balance>): Balance {
    return Balance.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<Balance>): Balance {
    const message = createBaseBalance();
    message.denom = object.denom ?? "";
    message.amount = object.amount ?? "";
    return message;
  },
};

function createBaseAccountRecord(): AccountRecord {
  return { address: "", class: 0, balances: [] };
}

export const AccountRecord = {
  encode(message: AccountRecord, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.class !== 0) {
      writer.uint32(16).int32(message.class);
    }
    for (const v of message.balances) {
      Balance.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AccountRecord {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAccountRecord();
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
          if (tag !== 16) {
            break;
          }

          message.class = reader.int32() as any;
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.balances.push(Balance.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): AccountRecord {
    return {
      address: isSet(object.address) ? String(object.address) : "",
      class: isSet(object.class) ? accountClassFromJSON(object.class) : 0,
      balances: Array.isArray(object?.balances) ? object.balances.map((e: any) => Balance.fromJSON(e)) : [],
    };
  },

  toJSON(message: AccountRecord): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    message.class !== undefined && (obj.class = accountClassToJSON(message.class));
    if (message.balances) {
      obj.balances = message.balances.map((e) => e ? Balance.toJSON(e) : undefined);
    } else {
      obj.balances = [];
    }
    return obj;
  },

  create(base?: DeepPartial<AccountRecord>): AccountRecord {
    return AccountRecord.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<AccountRecord>): AccountRecord {
    const message = createBaseAccountRecord();
    message.address = object.address ?? "";
    message.class = object.class ?? 0;
    message.balances = object.balances?.map((e) => Balance.fromPartial(e)) || [];
    return message;
  },
};

function createBaseLiveBalance(): LiveBalance {
  return { address: "", class: 0, usd: "" };
}

export const LiveBalance = {
  encode(message: LiveBalance, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.class !== 0) {
      writer.uint32(16).int32(message.class);
    }
    if (message.usd !== "") {
      writer.uint32(26).string(message.usd);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): LiveBalance {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLiveBalance();
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
          if (tag !== 16) {
            break;
          }

          message.class = reader.int32() as any;
          continue;
        case 3:
          if (tag !== 26) {
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

  fromJSON(object: any): LiveBalance {
    return {
      address: isSet(object.address) ? String(object.address) : "",
      class: isSet(object.class) ? accountClassFromJSON(object.class) : 0,
      usd: isSet(object.usd) ? String(object.usd) : "",
    };
  },

  toJSON(message: LiveBalance): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    message.class !== undefined && (obj.class = accountClassToJSON(message.class));
    message.usd !== undefined && (obj.usd = message.usd);
    return obj;
  },

  create(base?: DeepPartial<LiveBalance>): LiveBalance {
    return LiveBalance.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<LiveBalance>): LiveBalance {
    const message = createBaseLiveBalance();
    message.address = object.address ?? "";
    message.class = object.class ?? 0;
    message.usd = object.usd ?? "";
    return message;
  },
};

function createBaseDenomTotal(): DenomTotal {
  return { denom: "", fromAccounts: "", fromVaults: "", held: "", reserved: "" };
}

export const DenomTotal = {
  encode(message: DenomTotal, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    if (message.fromAccounts !== "") {
      writer.uint32(18).string(message.fromAccounts);
    }
    if (message.fromVaults !== "") {
      writer.uint32(26).string(message.fromVaults);
    }
    if (message.held !== "") {
      writer.uint32(42).string(message.held);
    }
    if (message.reserved !== "") {
      writer.uint32(50).string(message.reserved);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DenomTotal {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDenomTotal();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.denom = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.fromAccounts = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.fromVaults = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.held = reader.string();
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.reserved = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): DenomTotal {
    return {
      denom: isSet(object.denom) ? String(object.denom) : "",
      fromAccounts: isSet(object.fromAccounts) ? String(object.fromAccounts) : "",
      fromVaults: isSet(object.fromVaults) ? String(object.fromVaults) : "",
      held: isSet(object.held) ? String(object.held) : "",
      reserved: isSet(object.reserved) ? String(object.reserved) : "",
    };
  },

  toJSON(message: DenomTotal): unknown {
    const obj: any = {};
    message.denom !== undefined && (obj.denom = message.denom);
    message.fromAccounts !== undefined && (obj.fromAccounts = message.fromAccounts);
    message.fromVaults !== undefined && (obj.fromVaults = message.fromVaults);
    message.held !== undefined && (obj.held = message.held);
    message.reserved !== undefined && (obj.reserved = message.reserved);
    return obj;
  },

  create(base?: DeepPartial<DenomTotal>): DenomTotal {
    return DenomTotal.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<DenomTotal>): DenomTotal {
    const message = createBaseDenomTotal();
    message.denom = object.denom ?? "";
    message.fromAccounts = object.fromAccounts ?? "";
    message.fromVaults = object.fromVaults ?? "";
    message.held = object.held ?? "";
    message.reserved = object.reserved ?? "";
    return message;
  },
};

function createBaseGroupDissolution(): GroupDissolution {
  return {
    groupId: Long.UZERO,
    chequeDenom: "",
    vaultAddress: "",
    vaultBalances: [],
    chequesBurned: "",
    chequesLeft: "",
  };
}

export const GroupDissolution = {
  encode(message: GroupDissolution, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.groupId.isZero()) {
      writer.uint32(8).uint64(message.groupId);
    }
    if (message.chequeDenom !== "") {
      writer.uint32(18).string(message.chequeDenom);
    }
    if (message.vaultAddress !== "") {
      writer.uint32(26).string(message.vaultAddress);
    }
    for (const v of message.vaultBalances) {
      Balance.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    if (message.chequesBurned !== "") {
      writer.uint32(42).string(message.chequesBurned);
    }
    if (message.chequesLeft !== "") {
      writer.uint32(50).string(message.chequesLeft);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GroupDissolution {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGroupDissolution();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.groupId = reader.uint64() as Long;
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.chequeDenom = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.vaultAddress = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.vaultBalances.push(Balance.decode(reader, reader.uint32()));
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.chequesBurned = reader.string();
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.chequesLeft = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GroupDissolution {
    return {
      groupId: isSet(object.groupId) ? Long.fromValue(object.groupId) : Long.UZERO,
      chequeDenom: isSet(object.chequeDenom) ? String(object.chequeDenom) : "",
      vaultAddress: isSet(object.vaultAddress) ? String(object.vaultAddress) : "",
      vaultBalances: Array.isArray(object?.vaultBalances)
        ? object.vaultBalances.map((e: any) => Balance.fromJSON(e))
        : [],
      chequesBurned: isSet(object.chequesBurned) ? String(object.chequesBurned) : "",
      chequesLeft: isSet(object.chequesLeft) ? String(object.chequesLeft) : "",
    };
  },

  toJSON(message: GroupDissolution): unknown {
    const obj: any = {};
    message.groupId !== undefined && (obj.groupId = (message.groupId || Long.UZERO).toString());
    message.chequeDenom !== undefined && (obj.chequeDenom = message.chequeDenom);
    message.vaultAddress !== undefined && (obj.vaultAddress = message.vaultAddress);
    if (message.vaultBalances) {
      obj.vaultBalances = message.vaultBalances.map((e) => e ? Balance.toJSON(e) : undefined);
    } else {
      obj.vaultBalances = [];
    }
    message.chequesBurned !== undefined && (obj.chequesBurned = message.chequesBurned);
    message.chequesLeft !== undefined && (obj.chequesLeft = message.chequesLeft);
    return obj;
  },

  create(base?: DeepPartial<GroupDissolution>): GroupDissolution {
    return GroupDissolution.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<GroupDissolution>): GroupDissolution {
    const message = createBaseGroupDissolution();
    message.groupId = (object.groupId !== undefined && object.groupId !== null)
      ? Long.fromValue(object.groupId)
      : Long.UZERO;
    message.chequeDenom = object.chequeDenom ?? "";
    message.vaultAddress = object.vaultAddress ?? "";
    message.vaultBalances = object.vaultBalances?.map((e) => Balance.fromPartial(e)) || [];
    message.chequesBurned = object.chequesBurned ?? "";
    message.chequesLeft = object.chequesLeft ?? "";
    return message;
  },
};

function createBaseSnapshotSummary(): SnapshotSummary {
  return {
    height: Long.ZERO,
    brokerAddress: "",
    userAccounts: Long.UZERO,
    protocolAccounts: Long.UZERO,
    frozenAccounts: Long.UZERO,
    balances: Long.UZERO,
    unpricedDenoms: [],
    groups: [],
    snapshotHash: "",
    reservedAccounts: Long.UZERO,
    totalUsd: "",
  };
}

export const SnapshotSummary = {
  encode(message: SnapshotSummary, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.height.isZero()) {
      writer.uint32(8).int64(message.height);
    }
    if (message.brokerAddress !== "") {
      writer.uint32(18).string(message.brokerAddress);
    }
    if (!message.userAccounts.isZero()) {
      writer.uint32(24).uint64(message.userAccounts);
    }
    if (!message.protocolAccounts.isZero()) {
      writer.uint32(32).uint64(message.protocolAccounts);
    }
    if (!message.frozenAccounts.isZero()) {
      writer.uint32(40).uint64(message.frozenAccounts);
    }
    if (!message.balances.isZero()) {
      writer.uint32(48).uint64(message.balances);
    }
    for (const v of message.unpricedDenoms) {
      writer.uint32(58).string(v!);
    }
    for (const v of message.groups) {
      GroupDissolution.encode(v!, writer.uint32(66).fork()).ldelim();
    }
    if (message.snapshotHash !== "") {
      writer.uint32(74).string(message.snapshotHash);
    }
    if (!message.reservedAccounts.isZero()) {
      writer.uint32(80).uint64(message.reservedAccounts);
    }
    if (message.totalUsd !== "") {
      writer.uint32(90).string(message.totalUsd);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SnapshotSummary {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSnapshotSummary();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.height = reader.int64() as Long;
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.brokerAddress = reader.string();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.userAccounts = reader.uint64() as Long;
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.protocolAccounts = reader.uint64() as Long;
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.frozenAccounts = reader.uint64() as Long;
          continue;
        case 6:
          if (tag !== 48) {
            break;
          }

          message.balances = reader.uint64() as Long;
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.unpricedDenoms.push(reader.string());
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.groups.push(GroupDissolution.decode(reader, reader.uint32()));
          continue;
        case 9:
          if (tag !== 74) {
            break;
          }

          message.snapshotHash = reader.string();
          continue;
        case 10:
          if (tag !== 80) {
            break;
          }

          message.reservedAccounts = reader.uint64() as Long;
          continue;
        case 11:
          if (tag !== 90) {
            break;
          }

          message.totalUsd = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): SnapshotSummary {
    return {
      height: isSet(object.height) ? Long.fromValue(object.height) : Long.ZERO,
      brokerAddress: isSet(object.brokerAddress) ? String(object.brokerAddress) : "",
      userAccounts: isSet(object.userAccounts) ? Long.fromValue(object.userAccounts) : Long.UZERO,
      protocolAccounts: isSet(object.protocolAccounts) ? Long.fromValue(object.protocolAccounts) : Long.UZERO,
      frozenAccounts: isSet(object.frozenAccounts) ? Long.fromValue(object.frozenAccounts) : Long.UZERO,
      balances: isSet(object.balances) ? Long.fromValue(object.balances) : Long.UZERO,
      unpricedDenoms: Array.isArray(object?.unpricedDenoms) ? object.unpricedDenoms.map((e: any) => String(e)) : [],
      groups: Array.isArray(object?.groups) ? object.groups.map((e: any) => GroupDissolution.fromJSON(e)) : [],
      snapshotHash: isSet(object.snapshotHash) ? String(object.snapshotHash) : "",
      reservedAccounts: isSet(object.reservedAccounts) ? Long.fromValue(object.reservedAccounts) : Long.UZERO,
      totalUsd: isSet(object.totalUsd) ? String(object.totalUsd) : "",
    };
  },

  toJSON(message: SnapshotSummary): unknown {
    const obj: any = {};
    message.height !== undefined && (obj.height = (message.height || Long.ZERO).toString());
    message.brokerAddress !== undefined && (obj.brokerAddress = message.brokerAddress);
    message.userAccounts !== undefined && (obj.userAccounts = (message.userAccounts || Long.UZERO).toString());
    message.protocolAccounts !== undefined &&
      (obj.protocolAccounts = (message.protocolAccounts || Long.UZERO).toString());
    message.frozenAccounts !== undefined && (obj.frozenAccounts = (message.frozenAccounts || Long.UZERO).toString());
    message.balances !== undefined && (obj.balances = (message.balances || Long.UZERO).toString());
    if (message.unpricedDenoms) {
      obj.unpricedDenoms = message.unpricedDenoms.map((e) => e);
    } else {
      obj.unpricedDenoms = [];
    }
    if (message.groups) {
      obj.groups = message.groups.map((e) => e ? GroupDissolution.toJSON(e) : undefined);
    } else {
      obj.groups = [];
    }
    message.snapshotHash !== undefined && (obj.snapshotHash = message.snapshotHash);
    message.reservedAccounts !== undefined &&
      (obj.reservedAccounts = (message.reservedAccounts || Long.UZERO).toString());
    message.totalUsd !== undefined && (obj.totalUsd = message.totalUsd);
    return obj;
  },

  create(base?: DeepPartial<SnapshotSummary>): SnapshotSummary {
    return SnapshotSummary.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<SnapshotSummary>): SnapshotSummary {
    const message = createBaseSnapshotSummary();
    message.height = (object.height !== undefined && object.height !== null)
      ? Long.fromValue(object.height)
      : Long.ZERO;
    message.brokerAddress = object.brokerAddress ?? "";
    message.userAccounts = (object.userAccounts !== undefined && object.userAccounts !== null)
      ? Long.fromValue(object.userAccounts)
      : Long.UZERO;
    message.protocolAccounts = (object.protocolAccounts !== undefined && object.protocolAccounts !== null)
      ? Long.fromValue(object.protocolAccounts)
      : Long.UZERO;
    message.frozenAccounts = (object.frozenAccounts !== undefined && object.frozenAccounts !== null)
      ? Long.fromValue(object.frozenAccounts)
      : Long.UZERO;
    message.balances = (object.balances !== undefined && object.balances !== null)
      ? Long.fromValue(object.balances)
      : Long.UZERO;
    message.unpricedDenoms = object.unpricedDenoms?.map((e) => e) || [];
    message.groups = object.groups?.map((e) => GroupDissolution.fromPartial(e)) || [];
    message.snapshotHash = object.snapshotHash ?? "";
    message.reservedAccounts = (object.reservedAccounts !== undefined && object.reservedAccounts !== null)
      ? Long.fromValue(object.reservedAccounts)
      : Long.UZERO;
    message.totalUsd = object.totalUsd ?? "";
    return message;
  },
};

function createBaseParams(): Params {
  return {
    teamList: [],
    userWithdrawalsEnabled: false,
    rebalancingEnabled: false,
    exit: undefined,
    stockWarningUsd: "",
    paused: false,
    pauseReason: "",
    depositDenoms: [],
    usdCheque: "",
  };
}

export const Params = {
  encode(message: Params, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.teamList) {
      writer.uint32(10).string(v!);
    }
    if (message.userWithdrawalsEnabled === true) {
      writer.uint32(16).bool(message.userWithdrawalsEnabled);
    }
    if (message.rebalancingEnabled === true) {
      writer.uint32(24).bool(message.rebalancingEnabled);
    }
    if (message.exit !== undefined) {
      Exit.encode(message.exit, writer.uint32(34).fork()).ldelim();
    }
    if (message.stockWarningUsd !== "") {
      writer.uint32(42).string(message.stockWarningUsd);
    }
    if (message.paused === true) {
      writer.uint32(48).bool(message.paused);
    }
    if (message.pauseReason !== "") {
      writer.uint32(58).string(message.pauseReason);
    }
    for (const v of message.depositDenoms) {
      writer.uint32(66).string(v!);
    }
    if (message.usdCheque !== "") {
      writer.uint32(74).string(message.usdCheque);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Params {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.teamList.push(reader.string());
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.userWithdrawalsEnabled = reader.bool();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.rebalancingEnabled = reader.bool();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.exit = Exit.decode(reader, reader.uint32());
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.stockWarningUsd = reader.string();
          continue;
        case 6:
          if (tag !== 48) {
            break;
          }

          message.paused = reader.bool();
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.pauseReason = reader.string();
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.depositDenoms.push(reader.string());
          continue;
        case 9:
          if (tag !== 74) {
            break;
          }

          message.usdCheque = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Params {
    return {
      teamList: Array.isArray(object?.teamList) ? object.teamList.map((e: any) => String(e)) : [],
      userWithdrawalsEnabled: isSet(object.userWithdrawalsEnabled) ? Boolean(object.userWithdrawalsEnabled) : false,
      rebalancingEnabled: isSet(object.rebalancingEnabled) ? Boolean(object.rebalancingEnabled) : false,
      exit: isSet(object.exit) ? Exit.fromJSON(object.exit) : undefined,
      stockWarningUsd: isSet(object.stockWarningUsd) ? String(object.stockWarningUsd) : "",
      paused: isSet(object.paused) ? Boolean(object.paused) : false,
      pauseReason: isSet(object.pauseReason) ? String(object.pauseReason) : "",
      depositDenoms: Array.isArray(object?.depositDenoms) ? object.depositDenoms.map((e: any) => String(e)) : [],
      usdCheque: isSet(object.usdCheque) ? String(object.usdCheque) : "",
    };
  },

  toJSON(message: Params): unknown {
    const obj: any = {};
    if (message.teamList) {
      obj.teamList = message.teamList.map((e) => e);
    } else {
      obj.teamList = [];
    }
    message.userWithdrawalsEnabled !== undefined && (obj.userWithdrawalsEnabled = message.userWithdrawalsEnabled);
    message.rebalancingEnabled !== undefined && (obj.rebalancingEnabled = message.rebalancingEnabled);
    message.exit !== undefined && (obj.exit = message.exit ? Exit.toJSON(message.exit) : undefined);
    message.stockWarningUsd !== undefined && (obj.stockWarningUsd = message.stockWarningUsd);
    message.paused !== undefined && (obj.paused = message.paused);
    message.pauseReason !== undefined && (obj.pauseReason = message.pauseReason);
    if (message.depositDenoms) {
      obj.depositDenoms = message.depositDenoms.map((e) => e);
    } else {
      obj.depositDenoms = [];
    }
    message.usdCheque !== undefined && (obj.usdCheque = message.usdCheque);
    return obj;
  },

  create(base?: DeepPartial<Params>): Params {
    return Params.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<Params>): Params {
    const message = createBaseParams();
    message.teamList = object.teamList?.map((e) => e) || [];
    message.userWithdrawalsEnabled = object.userWithdrawalsEnabled ?? false;
    message.rebalancingEnabled = object.rebalancingEnabled ?? false;
    message.exit = (object.exit !== undefined && object.exit !== null) ? Exit.fromPartial(object.exit) : undefined;
    message.stockWarningUsd = object.stockWarningUsd ?? "";
    message.paused = object.paused ?? false;
    message.pauseReason = object.pauseReason ?? "";
    message.depositDenoms = object.depositDenoms?.map((e) => e) || [];
    message.usdCheque = object.usdCheque ?? "";
    return message;
  },
};

function createBaseExit(): Exit {
  return { name: "", denom: "", connectionId: "", enabled: false, relayFee: "" };
}

export const Exit = {
  encode(message: Exit, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.denom !== "") {
      writer.uint32(18).string(message.denom);
    }
    if (message.connectionId !== "") {
      writer.uint32(26).string(message.connectionId);
    }
    if (message.enabled === true) {
      writer.uint32(32).bool(message.enabled);
    }
    if (message.relayFee !== "") {
      writer.uint32(42).string(message.relayFee);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Exit {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseExit();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.name = reader.string();
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

          message.connectionId = reader.string();
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.enabled = reader.bool();
          continue;
        case 5:
          if (tag !== 42) {
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

  fromJSON(object: any): Exit {
    return {
      name: isSet(object.name) ? String(object.name) : "",
      denom: isSet(object.denom) ? String(object.denom) : "",
      connectionId: isSet(object.connectionId) ? String(object.connectionId) : "",
      enabled: isSet(object.enabled) ? Boolean(object.enabled) : false,
      relayFee: isSet(object.relayFee) ? String(object.relayFee) : "",
    };
  },

  toJSON(message: Exit): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    message.denom !== undefined && (obj.denom = message.denom);
    message.connectionId !== undefined && (obj.connectionId = message.connectionId);
    message.enabled !== undefined && (obj.enabled = message.enabled);
    message.relayFee !== undefined && (obj.relayFee = message.relayFee);
    return obj;
  },

  create(base?: DeepPartial<Exit>): Exit {
    return Exit.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<Exit>): Exit {
    const message = createBaseExit();
    message.name = object.name ?? "";
    message.denom = object.denom ?? "";
    message.connectionId = object.connectionId ?? "";
    message.enabled = object.enabled ?? false;
    message.relayFee = object.relayFee ?? "";
    return message;
  },
};

function createBaseTicket(): Ticket {
  return {
    id: Long.UZERO,
    address: "",
    usd: "",
    exit: "",
    exitDenom: "",
    connectionId: "",
    paid: "",
    fee: "",
    priceExit: "",
    recipient: "",
    height: Long.ZERO,
    nonce: Long.UZERO,
    status: 0,
    unclaimedId: Long.UZERO,
    retries: 0,
    previousNonces: [],
  };
}

export const Ticket = {
  encode(message: Ticket, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.id.isZero()) {
      writer.uint32(8).uint64(message.id);
    }
    if (message.address !== "") {
      writer.uint32(18).string(message.address);
    }
    if (message.usd !== "") {
      writer.uint32(26).string(message.usd);
    }
    if (message.exit !== "") {
      writer.uint32(42).string(message.exit);
    }
    if (message.exitDenom !== "") {
      writer.uint32(50).string(message.exitDenom);
    }
    if (message.connectionId !== "") {
      writer.uint32(58).string(message.connectionId);
    }
    if (message.paid !== "") {
      writer.uint32(66).string(message.paid);
    }
    if (message.fee !== "") {
      writer.uint32(74).string(message.fee);
    }
    if (message.priceExit !== "") {
      writer.uint32(90).string(message.priceExit);
    }
    if (message.recipient !== "") {
      writer.uint32(98).string(message.recipient);
    }
    if (!message.height.isZero()) {
      writer.uint32(104).int64(message.height);
    }
    if (!message.nonce.isZero()) {
      writer.uint32(112).uint64(message.nonce);
    }
    if (message.status !== 0) {
      writer.uint32(120).int32(message.status);
    }
    if (!message.unclaimedId.isZero()) {
      writer.uint32(128).uint64(message.unclaimedId);
    }
    if (message.retries !== 0) {
      writer.uint32(136).uint32(message.retries);
    }
    writer.uint32(146).fork();
    for (const v of message.previousNonces) {
      writer.uint64(v);
    }
    writer.ldelim();
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Ticket {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTicket();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.id = reader.uint64() as Long;
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.address = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.usd = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.exit = reader.string();
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.exitDenom = reader.string();
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.connectionId = reader.string();
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.paid = reader.string();
          continue;
        case 9:
          if (tag !== 74) {
            break;
          }

          message.fee = reader.string();
          continue;
        case 11:
          if (tag !== 90) {
            break;
          }

          message.priceExit = reader.string();
          continue;
        case 12:
          if (tag !== 98) {
            break;
          }

          message.recipient = reader.string();
          continue;
        case 13:
          if (tag !== 104) {
            break;
          }

          message.height = reader.int64() as Long;
          continue;
        case 14:
          if (tag !== 112) {
            break;
          }

          message.nonce = reader.uint64() as Long;
          continue;
        case 15:
          if (tag !== 120) {
            break;
          }

          message.status = reader.int32() as any;
          continue;
        case 16:
          if (tag !== 128) {
            break;
          }

          message.unclaimedId = reader.uint64() as Long;
          continue;
        case 17:
          if (tag !== 136) {
            break;
          }

          message.retries = reader.uint32();
          continue;
        case 18:
          if (tag === 144) {
            message.previousNonces.push(reader.uint64() as Long);

            continue;
          }

          if (tag === 146) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.previousNonces.push(reader.uint64() as Long);
            }

            continue;
          }

          break;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Ticket {
    return {
      id: isSet(object.id) ? Long.fromValue(object.id) : Long.UZERO,
      address: isSet(object.address) ? String(object.address) : "",
      usd: isSet(object.usd) ? String(object.usd) : "",
      exit: isSet(object.exit) ? String(object.exit) : "",
      exitDenom: isSet(object.exitDenom) ? String(object.exitDenom) : "",
      connectionId: isSet(object.connectionId) ? String(object.connectionId) : "",
      paid: isSet(object.paid) ? String(object.paid) : "",
      fee: isSet(object.fee) ? String(object.fee) : "",
      priceExit: isSet(object.priceExit) ? String(object.priceExit) : "",
      recipient: isSet(object.recipient) ? String(object.recipient) : "",
      height: isSet(object.height) ? Long.fromValue(object.height) : Long.ZERO,
      nonce: isSet(object.nonce) ? Long.fromValue(object.nonce) : Long.UZERO,
      status: isSet(object.status) ? ticketStatusFromJSON(object.status) : 0,
      unclaimedId: isSet(object.unclaimedId) ? Long.fromValue(object.unclaimedId) : Long.UZERO,
      retries: isSet(object.retries) ? Number(object.retries) : 0,
      previousNonces: Array.isArray(object?.previousNonces)
        ? object.previousNonces.map((e: any) => Long.fromValue(e))
        : [],
    };
  },

  toJSON(message: Ticket): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = (message.id || Long.UZERO).toString());
    message.address !== undefined && (obj.address = message.address);
    message.usd !== undefined && (obj.usd = message.usd);
    message.exit !== undefined && (obj.exit = message.exit);
    message.exitDenom !== undefined && (obj.exitDenom = message.exitDenom);
    message.connectionId !== undefined && (obj.connectionId = message.connectionId);
    message.paid !== undefined && (obj.paid = message.paid);
    message.fee !== undefined && (obj.fee = message.fee);
    message.priceExit !== undefined && (obj.priceExit = message.priceExit);
    message.recipient !== undefined && (obj.recipient = message.recipient);
    message.height !== undefined && (obj.height = (message.height || Long.ZERO).toString());
    message.nonce !== undefined && (obj.nonce = (message.nonce || Long.UZERO).toString());
    message.status !== undefined && (obj.status = ticketStatusToJSON(message.status));
    message.unclaimedId !== undefined && (obj.unclaimedId = (message.unclaimedId || Long.UZERO).toString());
    message.retries !== undefined && (obj.retries = Math.round(message.retries));
    if (message.previousNonces) {
      obj.previousNonces = message.previousNonces.map((e) => (e || Long.UZERO).toString());
    } else {
      obj.previousNonces = [];
    }
    return obj;
  },

  create(base?: DeepPartial<Ticket>): Ticket {
    return Ticket.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<Ticket>): Ticket {
    const message = createBaseTicket();
    message.id = (object.id !== undefined && object.id !== null) ? Long.fromValue(object.id) : Long.UZERO;
    message.address = object.address ?? "";
    message.usd = object.usd ?? "";
    message.exit = object.exit ?? "";
    message.exitDenom = object.exitDenom ?? "";
    message.connectionId = object.connectionId ?? "";
    message.paid = object.paid ?? "";
    message.fee = object.fee ?? "";
    message.priceExit = object.priceExit ?? "";
    message.recipient = object.recipient ?? "";
    message.height = (object.height !== undefined && object.height !== null)
      ? Long.fromValue(object.height)
      : Long.ZERO;
    message.nonce = (object.nonce !== undefined && object.nonce !== null) ? Long.fromValue(object.nonce) : Long.UZERO;
    message.status = object.status ?? 0;
    message.unclaimedId = (object.unclaimedId !== undefined && object.unclaimedId !== null)
      ? Long.fromValue(object.unclaimedId)
      : Long.UZERO;
    message.retries = object.retries ?? 0;
    message.previousNonces = object.previousNonces?.map((e) => Long.fromValue(e)) || [];
    return message;
  },
};

function createBaseUnclaimedDeposit(): UnclaimedDeposit {
  return {
    id: Long.UZERO,
    receiver: "",
    denom: "",
    amount: "",
    height: Long.ZERO,
    resolution: "",
    ticketId: Long.UZERO,
    source: "",
  };
}

export const UnclaimedDeposit = {
  encode(message: UnclaimedDeposit, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.id.isZero()) {
      writer.uint32(8).uint64(message.id);
    }
    if (message.receiver !== "") {
      writer.uint32(18).string(message.receiver);
    }
    if (message.denom !== "") {
      writer.uint32(26).string(message.denom);
    }
    if (message.amount !== "") {
      writer.uint32(34).string(message.amount);
    }
    if (!message.height.isZero()) {
      writer.uint32(40).int64(message.height);
    }
    if (message.resolution !== "") {
      writer.uint32(50).string(message.resolution);
    }
    if (!message.ticketId.isZero()) {
      writer.uint32(56).uint64(message.ticketId);
    }
    if (message.source !== "") {
      writer.uint32(66).string(message.source);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UnclaimedDeposit {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUnclaimedDeposit();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.id = reader.uint64() as Long;
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.receiver = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.denom = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.amount = reader.string();
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.height = reader.int64() as Long;
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.resolution = reader.string();
          continue;
        case 7:
          if (tag !== 56) {
            break;
          }

          message.ticketId = reader.uint64() as Long;
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.source = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): UnclaimedDeposit {
    return {
      id: isSet(object.id) ? Long.fromValue(object.id) : Long.UZERO,
      receiver: isSet(object.receiver) ? String(object.receiver) : "",
      denom: isSet(object.denom) ? String(object.denom) : "",
      amount: isSet(object.amount) ? String(object.amount) : "",
      height: isSet(object.height) ? Long.fromValue(object.height) : Long.ZERO,
      resolution: isSet(object.resolution) ? String(object.resolution) : "",
      ticketId: isSet(object.ticketId) ? Long.fromValue(object.ticketId) : Long.UZERO,
      source: isSet(object.source) ? String(object.source) : "",
    };
  },

  toJSON(message: UnclaimedDeposit): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = (message.id || Long.UZERO).toString());
    message.receiver !== undefined && (obj.receiver = message.receiver);
    message.denom !== undefined && (obj.denom = message.denom);
    message.amount !== undefined && (obj.amount = message.amount);
    message.height !== undefined && (obj.height = (message.height || Long.ZERO).toString());
    message.resolution !== undefined && (obj.resolution = message.resolution);
    message.ticketId !== undefined && (obj.ticketId = (message.ticketId || Long.UZERO).toString());
    message.source !== undefined && (obj.source = message.source);
    return obj;
  },

  create(base?: DeepPartial<UnclaimedDeposit>): UnclaimedDeposit {
    return UnclaimedDeposit.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<UnclaimedDeposit>): UnclaimedDeposit {
    const message = createBaseUnclaimedDeposit();
    message.id = (object.id !== undefined && object.id !== null) ? Long.fromValue(object.id) : Long.UZERO;
    message.receiver = object.receiver ?? "";
    message.denom = object.denom ?? "";
    message.amount = object.amount ?? "";
    message.height = (object.height !== undefined && object.height !== null)
      ? Long.fromValue(object.height)
      : Long.ZERO;
    message.resolution = object.resolution ?? "";
    message.ticketId = (object.ticketId !== undefined && object.ticketId !== null)
      ? Long.fromValue(object.ticketId)
      : Long.UZERO;
    message.source = object.source ?? "";
    return message;
  },
};

function createBaseCoverage(): Coverage {
  return {
    height: Long.ZERO,
    claimsUsd: "",
    deliverableUsd: "",
    surplusUsd: "",
    warning: false,
    totalClaimsUsd: "",
    holdingsUsd: "",
    booksSurplusUsd: "",
    reservedUsd: "",
  };
}

export const Coverage = {
  encode(message: Coverage, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.height.isZero()) {
      writer.uint32(8).int64(message.height);
    }
    if (message.claimsUsd !== "") {
      writer.uint32(18).string(message.claimsUsd);
    }
    if (message.deliverableUsd !== "") {
      writer.uint32(26).string(message.deliverableUsd);
    }
    if (message.surplusUsd !== "") {
      writer.uint32(34).string(message.surplusUsd);
    }
    if (message.warning === true) {
      writer.uint32(40).bool(message.warning);
    }
    if (message.totalClaimsUsd !== "") {
      writer.uint32(58).string(message.totalClaimsUsd);
    }
    if (message.holdingsUsd !== "") {
      writer.uint32(66).string(message.holdingsUsd);
    }
    if (message.booksSurplusUsd !== "") {
      writer.uint32(74).string(message.booksSurplusUsd);
    }
    if (message.reservedUsd !== "") {
      writer.uint32(82).string(message.reservedUsd);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Coverage {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCoverage();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.height = reader.int64() as Long;
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.claimsUsd = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.deliverableUsd = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.surplusUsd = reader.string();
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.warning = reader.bool();
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.totalClaimsUsd = reader.string();
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.holdingsUsd = reader.string();
          continue;
        case 9:
          if (tag !== 74) {
            break;
          }

          message.booksSurplusUsd = reader.string();
          continue;
        case 10:
          if (tag !== 82) {
            break;
          }

          message.reservedUsd = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Coverage {
    return {
      height: isSet(object.height) ? Long.fromValue(object.height) : Long.ZERO,
      claimsUsd: isSet(object.claimsUsd) ? String(object.claimsUsd) : "",
      deliverableUsd: isSet(object.deliverableUsd) ? String(object.deliverableUsd) : "",
      surplusUsd: isSet(object.surplusUsd) ? String(object.surplusUsd) : "",
      warning: isSet(object.warning) ? Boolean(object.warning) : false,
      totalClaimsUsd: isSet(object.totalClaimsUsd) ? String(object.totalClaimsUsd) : "",
      holdingsUsd: isSet(object.holdingsUsd) ? String(object.holdingsUsd) : "",
      booksSurplusUsd: isSet(object.booksSurplusUsd) ? String(object.booksSurplusUsd) : "",
      reservedUsd: isSet(object.reservedUsd) ? String(object.reservedUsd) : "",
    };
  },

  toJSON(message: Coverage): unknown {
    const obj: any = {};
    message.height !== undefined && (obj.height = (message.height || Long.ZERO).toString());
    message.claimsUsd !== undefined && (obj.claimsUsd = message.claimsUsd);
    message.deliverableUsd !== undefined && (obj.deliverableUsd = message.deliverableUsd);
    message.surplusUsd !== undefined && (obj.surplusUsd = message.surplusUsd);
    message.warning !== undefined && (obj.warning = message.warning);
    message.totalClaimsUsd !== undefined && (obj.totalClaimsUsd = message.totalClaimsUsd);
    message.holdingsUsd !== undefined && (obj.holdingsUsd = message.holdingsUsd);
    message.booksSurplusUsd !== undefined && (obj.booksSurplusUsd = message.booksSurplusUsd);
    message.reservedUsd !== undefined && (obj.reservedUsd = message.reservedUsd);
    return obj;
  },

  create(base?: DeepPartial<Coverage>): Coverage {
    return Coverage.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<Coverage>): Coverage {
    const message = createBaseCoverage();
    message.height = (object.height !== undefined && object.height !== null)
      ? Long.fromValue(object.height)
      : Long.ZERO;
    message.claimsUsd = object.claimsUsd ?? "";
    message.deliverableUsd = object.deliverableUsd ?? "";
    message.surplusUsd = object.surplusUsd ?? "";
    message.warning = object.warning ?? false;
    message.totalClaimsUsd = object.totalClaimsUsd ?? "";
    message.holdingsUsd = object.holdingsUsd ?? "";
    message.booksSurplusUsd = object.booksSurplusUsd ?? "";
    message.reservedUsd = object.reservedUsd ?? "";
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
