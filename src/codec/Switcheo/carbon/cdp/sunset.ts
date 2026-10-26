/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Coin } from "../../../cosmos/base/v1beta1/coin";

export const protobufPackage = "Switcheo.carbon.cdp";

/**
 * SunsetArchiveRecord is one account's Nitron position at the halt and everything the sunset step paid for it. The
 * step writes one per account before any balance moves; nothing in Nitron reads them. Amounts are raw units.
 */
export interface SunsetArchiveRecord {
  address: string;
  /**
   * retired marks an account that had at least one leg retired rather than paid as a wallet's. That is the nlend
   * account (its position and balances), a USC-retired wallet (its USC burned, its other legs paid), or a module or
   * system account (its USC burned, its cibt redeemed in kind)
   */
  retired: boolean;
  /**
   * the Nitron position: supplied underlying (free and locked cibt at the exchange rate), borrowed tokens with
   * interest, USC debt with interest, and their USD values at the sunset price table's prices
   */
  supplied: Coin[];
  borrowed: Coin[];
  uscDebt: string;
  suppliedUsd: string;
  /** borrowed_usd values borrowed plus usc_debt */
  borrowedUsd: string;
  netUsd: string;
  /** what the position paid */
  inKind: Coin[];
  cgt1: string;
  zilUnits: string;
  zilWrittenOffUsd: string;
  badDebtUsd: string;
  /** wallet USC and the payout denom paid for it */
  walletUsc: string;
  walletUscCgt1: string;
  /** paid_usd values everything paid for the position, in_kind and cgt1, at the price table's prices */
  paidUsd: string;
}

/**
 * SunsetAssetRecord is one Nitron asset as the sunset step found it, and how its claims were settled. One per
 * asset, written before any balance moves. Amounts are raw units; prices are USD per whole token.
 */
export interface SunsetAssetRecord {
  denom: string;
  decimals: Long;
  /**
   * treatment is the deduction class the denom was classified into: cgt1, usd, nlend, in_kind (SWTH), eth, neo or
   * zil. Every class but zil is returned in kind
   */
  treatment: string;
  /**
   * price_usd is the price every claim and debt in the denom was valued at, the sunset price table's row for it, except
   * a debt in SWTH (debt_price_usd)
   */
  priceUsd: string;
  /**
   * payout_denom and payout_price_usd are what a lent-out shortfall in the denom was paid in and that denom's price;
   * empty for a denom written off
   */
  payoutDenom: string;
  payoutPriceUsd: string;
  /**
   * payout_per_token is the whole payout-denom tokens one whole lent-out token of the denom was paid
   * (price_usd, or debt_price_usd when set, / payout_price_usd); zero when there is no payout denom
   */
  payoutPerToken: string;
  /**
   * the lending pool before the unwind: cibt supply, what the module held, what was lent out with its accrued
   * interest, and the underlying one whole cibt redeemed for (exchange rate)
   */
  cibtSupply: string;
  moduleHolding: string;
  lentOut: string;
  accruedInterest: string;
  underlyingPerCibt: string;
  /** total_claims is what every cibt holder was owed in the underlying: cibt_supply at the exchange rate */
  totalClaims: string;
  /** price_source is the sunset price table's source for the price (decision 26), "none" when nothing priced the denom */
  priceSource: string;
  /**
   * price_as_of_unix is when the price was observed, the price table row's as_of in unix seconds; zero when the row has
   * none (a price fixed by a decision or set to $0) or nothing priced the denom
   */
  priceAsOfUnix: Long;
  /**
   * interest_multiplier is the asset's cumulative interest multiplier after accrual to the block, which with each
   * account's initial multiplier turns a stored principal into the borrowed amount archived
   */
  interestMultiplier: string;
  /**
   * how the claims in the denom were settled, filled in once the payouts and the sweep are done. shortfall is
   * total_claims beyond module_holding (the lent-out part); debt_taken_usd is the value of claims in the denom that
   * repaid their holders' debts and were not paid out; returned_in_kind is the denom paid out as itself; paid_cgt1 is
   * the payout denom paid for claims in the denom; bad_debt_usd is the unpaid debt in the denom (a borrowed asset);
   * swept is what the module still held of the denom, moved to swept_to (the nlend account for nlend, else the
   * community pool, named by the distribution module address)
   */
  shortfall: string;
  debtTakenUsd: string;
  returnedInKind: string;
  paidCgt1: string;
  badDebtUsd: string;
  swept: string;
  sweptTo: string;
  /**
   * debt_price_usd is the price a debt in the denom and its lent-out units were valued at when that is not price_usd:
   * for SWTH, which counts nothing as collateral, Nitron's oracle price at the block whenever anyone owes it
   * (decision 27); zero otherwise
   */
  debtPriceUsd: string;
}

/** SunsetFunding is one draw the step made to fund its payouts. */
export interface SunsetFunding {
  source: string;
  amount?: Coin;
  /** pays_for names the leg the draw funds */
  paysFor: string;
}

/** SunsetSummaryRecord is the step's totals, written once at its end. */
export interface SunsetSummaryRecord {
  height: Long;
  payoutDenom: string;
  /** sweep_account is where everything but nlend was swept: the community pool, named by the distribution module address */
  sweepAccount: string;
  accountsSettled: Long;
  uscHoldersPaid: Long;
  cgt1Nitron: string;
  cgt1Usc: string;
  inKindTotal: Coin[];
  badDebtUsd: string;
  zilWrittenOffUsd: string;
  funding: SunsetFunding[];
  /**
   * swept is what the module still held after every payout: the collateral debts took, ZIL's written-off reserve and
   * rounding. Its nlend went to the nlend account (nlend_collected), the rest to the community pool (sweep_account)
   */
  swept: Coin[];
  /**
   * nlend_collected is the nlend the step sent to the nlend account instead of a user: the collateral taken against
   * debts and rounding
   */
  nlendCollected: string;
  /**
   * the cgt/1 picture. cgt1_drawn is every draw across the funding sources, the community pool and the insurance
   * fund; cgt1_reserve_paid is the module's own cgt/1 returned to its lenders in kind; cgt1_swept is the module's
   * cgt/1 left after every payout, the collateral kept against debts and rounding, moved to the community pool;
   * cgt1_shore_up is cgt1_drawn less cgt1_swept, the cgt/1 the sources are out once the leftover comes back
   */
  cgt1Drawn: string;
  cgt1ReservePaid: string;
  cgt1Swept: string;
  cgt1ShoreUp: string;
  /**
   * burned is every cibt and USC denom the clear stage collected into the module and burned, each equal to the
   * denom's whole supply at that moment
   */
  burned: Coin[];
  /** usc_bad_debt_usd is the part of bad_debt_usd that is unpaid USC debt; the rest is on the borrowed assets' records */
  uscBadDebtUsd: string;
}

/**
 * NlendRedemptionRecord is one address's nlend as the redemption step found it, after the Nitron unwind returned
 * Nitron's nlend in kind, and the payout denom it was paid. A retired record is a module, system or team account
 * whose nlend was collected unpaid. One per holder, written once.
 */
export interface NlendRedemptionRecord {
  address: string;
  nlend: string;
  cgt1: string;
  retired: boolean;
}

/**
 * NlendRedemptionSummary is the redemption step's totals: the IOU's supply before, what the step collected into the
 * nlend account, what the account already held, and the payout denom paid. collected + already_held equals
 * supply_before, which the step then burns, so account_balance_after is zero and no nlend is left.
 */
export interface NlendRedemptionSummary {
  height: Long;
  nlendDenom: string;
  payoutDenom: string;
  nlendAccount: string;
  /** price_usd is the USD value of one whole nlend, and payout_price_usd that of one whole payout-denom token */
  priceUsd: string;
  payoutPriceUsd: string;
  supplyBefore: string;
  alreadyHeld: string;
  collected: string;
  collectedUnpaid: string;
  cgt1Paid: string;
  holdersPaid: Long;
  holdersRetired: Long;
  accountBalanceAfter: string;
}

function createBaseSunsetArchiveRecord(): SunsetArchiveRecord {
  return {
    address: "",
    retired: false,
    supplied: [],
    borrowed: [],
    uscDebt: "",
    suppliedUsd: "",
    borrowedUsd: "",
    netUsd: "",
    inKind: [],
    cgt1: "",
    zilUnits: "",
    zilWrittenOffUsd: "",
    badDebtUsd: "",
    walletUsc: "",
    walletUscCgt1: "",
    paidUsd: "",
  };
}

export const SunsetArchiveRecord = {
  encode(message: SunsetArchiveRecord, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.retired === true) {
      writer.uint32(16).bool(message.retired);
    }
    for (const v of message.supplied) {
      Coin.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.borrowed) {
      Coin.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    if (message.uscDebt !== "") {
      writer.uint32(42).string(message.uscDebt);
    }
    if (message.suppliedUsd !== "") {
      writer.uint32(50).string(message.suppliedUsd);
    }
    if (message.borrowedUsd !== "") {
      writer.uint32(58).string(message.borrowedUsd);
    }
    if (message.netUsd !== "") {
      writer.uint32(66).string(message.netUsd);
    }
    for (const v of message.inKind) {
      Coin.encode(v!, writer.uint32(74).fork()).ldelim();
    }
    if (message.cgt1 !== "") {
      writer.uint32(82).string(message.cgt1);
    }
    if (message.zilUnits !== "") {
      writer.uint32(114).string(message.zilUnits);
    }
    if (message.zilWrittenOffUsd !== "") {
      writer.uint32(122).string(message.zilWrittenOffUsd);
    }
    if (message.badDebtUsd !== "") {
      writer.uint32(130).string(message.badDebtUsd);
    }
    if (message.walletUsc !== "") {
      writer.uint32(138).string(message.walletUsc);
    }
    if (message.walletUscCgt1 !== "") {
      writer.uint32(146).string(message.walletUscCgt1);
    }
    if (message.paidUsd !== "") {
      writer.uint32(194).string(message.paidUsd);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SunsetArchiveRecord {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSunsetArchiveRecord();
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

          message.retired = reader.bool();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.supplied.push(Coin.decode(reader, reader.uint32()));
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.borrowed.push(Coin.decode(reader, reader.uint32()));
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.uscDebt = reader.string();
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.suppliedUsd = reader.string();
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.borrowedUsd = reader.string();
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.netUsd = reader.string();
          continue;
        case 9:
          if (tag !== 74) {
            break;
          }

          message.inKind.push(Coin.decode(reader, reader.uint32()));
          continue;
        case 10:
          if (tag !== 82) {
            break;
          }

          message.cgt1 = reader.string();
          continue;
        case 14:
          if (tag !== 114) {
            break;
          }

          message.zilUnits = reader.string();
          continue;
        case 15:
          if (tag !== 122) {
            break;
          }

          message.zilWrittenOffUsd = reader.string();
          continue;
        case 16:
          if (tag !== 130) {
            break;
          }

          message.badDebtUsd = reader.string();
          continue;
        case 17:
          if (tag !== 138) {
            break;
          }

          message.walletUsc = reader.string();
          continue;
        case 18:
          if (tag !== 146) {
            break;
          }

          message.walletUscCgt1 = reader.string();
          continue;
        case 24:
          if (tag !== 194) {
            break;
          }

          message.paidUsd = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): SunsetArchiveRecord {
    return {
      address: isSet(object.address) ? String(object.address) : "",
      retired: isSet(object.retired) ? Boolean(object.retired) : false,
      supplied: Array.isArray(object?.supplied) ? object.supplied.map((e: any) => Coin.fromJSON(e)) : [],
      borrowed: Array.isArray(object?.borrowed) ? object.borrowed.map((e: any) => Coin.fromJSON(e)) : [],
      uscDebt: isSet(object.uscDebt) ? String(object.uscDebt) : "",
      suppliedUsd: isSet(object.suppliedUsd) ? String(object.suppliedUsd) : "",
      borrowedUsd: isSet(object.borrowedUsd) ? String(object.borrowedUsd) : "",
      netUsd: isSet(object.netUsd) ? String(object.netUsd) : "",
      inKind: Array.isArray(object?.inKind) ? object.inKind.map((e: any) => Coin.fromJSON(e)) : [],
      cgt1: isSet(object.cgt1) ? String(object.cgt1) : "",
      zilUnits: isSet(object.zilUnits) ? String(object.zilUnits) : "",
      zilWrittenOffUsd: isSet(object.zilWrittenOffUsd) ? String(object.zilWrittenOffUsd) : "",
      badDebtUsd: isSet(object.badDebtUsd) ? String(object.badDebtUsd) : "",
      walletUsc: isSet(object.walletUsc) ? String(object.walletUsc) : "",
      walletUscCgt1: isSet(object.walletUscCgt1) ? String(object.walletUscCgt1) : "",
      paidUsd: isSet(object.paidUsd) ? String(object.paidUsd) : "",
    };
  },

  toJSON(message: SunsetArchiveRecord): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    message.retired !== undefined && (obj.retired = message.retired);
    if (message.supplied) {
      obj.supplied = message.supplied.map((e) => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.supplied = [];
    }
    if (message.borrowed) {
      obj.borrowed = message.borrowed.map((e) => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.borrowed = [];
    }
    message.uscDebt !== undefined && (obj.uscDebt = message.uscDebt);
    message.suppliedUsd !== undefined && (obj.suppliedUsd = message.suppliedUsd);
    message.borrowedUsd !== undefined && (obj.borrowedUsd = message.borrowedUsd);
    message.netUsd !== undefined && (obj.netUsd = message.netUsd);
    if (message.inKind) {
      obj.inKind = message.inKind.map((e) => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.inKind = [];
    }
    message.cgt1 !== undefined && (obj.cgt1 = message.cgt1);
    message.zilUnits !== undefined && (obj.zilUnits = message.zilUnits);
    message.zilWrittenOffUsd !== undefined && (obj.zilWrittenOffUsd = message.zilWrittenOffUsd);
    message.badDebtUsd !== undefined && (obj.badDebtUsd = message.badDebtUsd);
    message.walletUsc !== undefined && (obj.walletUsc = message.walletUsc);
    message.walletUscCgt1 !== undefined && (obj.walletUscCgt1 = message.walletUscCgt1);
    message.paidUsd !== undefined && (obj.paidUsd = message.paidUsd);
    return obj;
  },

  create(base?: DeepPartial<SunsetArchiveRecord>): SunsetArchiveRecord {
    return SunsetArchiveRecord.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<SunsetArchiveRecord>): SunsetArchiveRecord {
    const message = createBaseSunsetArchiveRecord();
    message.address = object.address ?? "";
    message.retired = object.retired ?? false;
    message.supplied = object.supplied?.map((e) => Coin.fromPartial(e)) || [];
    message.borrowed = object.borrowed?.map((e) => Coin.fromPartial(e)) || [];
    message.uscDebt = object.uscDebt ?? "";
    message.suppliedUsd = object.suppliedUsd ?? "";
    message.borrowedUsd = object.borrowedUsd ?? "";
    message.netUsd = object.netUsd ?? "";
    message.inKind = object.inKind?.map((e) => Coin.fromPartial(e)) || [];
    message.cgt1 = object.cgt1 ?? "";
    message.zilUnits = object.zilUnits ?? "";
    message.zilWrittenOffUsd = object.zilWrittenOffUsd ?? "";
    message.badDebtUsd = object.badDebtUsd ?? "";
    message.walletUsc = object.walletUsc ?? "";
    message.walletUscCgt1 = object.walletUscCgt1 ?? "";
    message.paidUsd = object.paidUsd ?? "";
    return message;
  },
};

function createBaseSunsetAssetRecord(): SunsetAssetRecord {
  return {
    denom: "",
    decimals: Long.ZERO,
    treatment: "",
    priceUsd: "",
    payoutDenom: "",
    payoutPriceUsd: "",
    payoutPerToken: "",
    cibtSupply: "",
    moduleHolding: "",
    lentOut: "",
    accruedInterest: "",
    underlyingPerCibt: "",
    totalClaims: "",
    priceSource: "",
    priceAsOfUnix: Long.ZERO,
    interestMultiplier: "",
    shortfall: "",
    debtTakenUsd: "",
    returnedInKind: "",
    paidCgt1: "",
    badDebtUsd: "",
    swept: "",
    sweptTo: "",
    debtPriceUsd: "",
  };
}

export const SunsetAssetRecord = {
  encode(message: SunsetAssetRecord, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    if (!message.decimals.isZero()) {
      writer.uint32(16).int64(message.decimals);
    }
    if (message.treatment !== "") {
      writer.uint32(26).string(message.treatment);
    }
    if (message.priceUsd !== "") {
      writer.uint32(34).string(message.priceUsd);
    }
    if (message.payoutDenom !== "") {
      writer.uint32(42).string(message.payoutDenom);
    }
    if (message.payoutPriceUsd !== "") {
      writer.uint32(50).string(message.payoutPriceUsd);
    }
    if (message.payoutPerToken !== "") {
      writer.uint32(58).string(message.payoutPerToken);
    }
    if (message.cibtSupply !== "") {
      writer.uint32(66).string(message.cibtSupply);
    }
    if (message.moduleHolding !== "") {
      writer.uint32(74).string(message.moduleHolding);
    }
    if (message.lentOut !== "") {
      writer.uint32(82).string(message.lentOut);
    }
    if (message.accruedInterest !== "") {
      writer.uint32(90).string(message.accruedInterest);
    }
    if (message.underlyingPerCibt !== "") {
      writer.uint32(98).string(message.underlyingPerCibt);
    }
    if (message.totalClaims !== "") {
      writer.uint32(106).string(message.totalClaims);
    }
    if (message.priceSource !== "") {
      writer.uint32(114).string(message.priceSource);
    }
    if (!message.priceAsOfUnix.isZero()) {
      writer.uint32(120).int64(message.priceAsOfUnix);
    }
    if (message.interestMultiplier !== "") {
      writer.uint32(130).string(message.interestMultiplier);
    }
    if (message.shortfall !== "") {
      writer.uint32(138).string(message.shortfall);
    }
    if (message.debtTakenUsd !== "") {
      writer.uint32(146).string(message.debtTakenUsd);
    }
    if (message.returnedInKind !== "") {
      writer.uint32(154).string(message.returnedInKind);
    }
    if (message.paidCgt1 !== "") {
      writer.uint32(162).string(message.paidCgt1);
    }
    if (message.badDebtUsd !== "") {
      writer.uint32(170).string(message.badDebtUsd);
    }
    if (message.swept !== "") {
      writer.uint32(178).string(message.swept);
    }
    if (message.sweptTo !== "") {
      writer.uint32(186).string(message.sweptTo);
    }
    if (message.debtPriceUsd !== "") {
      writer.uint32(194).string(message.debtPriceUsd);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SunsetAssetRecord {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSunsetAssetRecord();
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
          if (tag !== 16) {
            break;
          }

          message.decimals = reader.int64() as Long;
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.treatment = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.priceUsd = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.payoutDenom = reader.string();
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.payoutPriceUsd = reader.string();
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.payoutPerToken = reader.string();
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.cibtSupply = reader.string();
          continue;
        case 9:
          if (tag !== 74) {
            break;
          }

          message.moduleHolding = reader.string();
          continue;
        case 10:
          if (tag !== 82) {
            break;
          }

          message.lentOut = reader.string();
          continue;
        case 11:
          if (tag !== 90) {
            break;
          }

          message.accruedInterest = reader.string();
          continue;
        case 12:
          if (tag !== 98) {
            break;
          }

          message.underlyingPerCibt = reader.string();
          continue;
        case 13:
          if (tag !== 106) {
            break;
          }

          message.totalClaims = reader.string();
          continue;
        case 14:
          if (tag !== 114) {
            break;
          }

          message.priceSource = reader.string();
          continue;
        case 15:
          if (tag !== 120) {
            break;
          }

          message.priceAsOfUnix = reader.int64() as Long;
          continue;
        case 16:
          if (tag !== 130) {
            break;
          }

          message.interestMultiplier = reader.string();
          continue;
        case 17:
          if (tag !== 138) {
            break;
          }

          message.shortfall = reader.string();
          continue;
        case 18:
          if (tag !== 146) {
            break;
          }

          message.debtTakenUsd = reader.string();
          continue;
        case 19:
          if (tag !== 154) {
            break;
          }

          message.returnedInKind = reader.string();
          continue;
        case 20:
          if (tag !== 162) {
            break;
          }

          message.paidCgt1 = reader.string();
          continue;
        case 21:
          if (tag !== 170) {
            break;
          }

          message.badDebtUsd = reader.string();
          continue;
        case 22:
          if (tag !== 178) {
            break;
          }

          message.swept = reader.string();
          continue;
        case 23:
          if (tag !== 186) {
            break;
          }

          message.sweptTo = reader.string();
          continue;
        case 24:
          if (tag !== 194) {
            break;
          }

          message.debtPriceUsd = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): SunsetAssetRecord {
    return {
      denom: isSet(object.denom) ? String(object.denom) : "",
      decimals: isSet(object.decimals) ? Long.fromValue(object.decimals) : Long.ZERO,
      treatment: isSet(object.treatment) ? String(object.treatment) : "",
      priceUsd: isSet(object.priceUsd) ? String(object.priceUsd) : "",
      payoutDenom: isSet(object.payoutDenom) ? String(object.payoutDenom) : "",
      payoutPriceUsd: isSet(object.payoutPriceUsd) ? String(object.payoutPriceUsd) : "",
      payoutPerToken: isSet(object.payoutPerToken) ? String(object.payoutPerToken) : "",
      cibtSupply: isSet(object.cibtSupply) ? String(object.cibtSupply) : "",
      moduleHolding: isSet(object.moduleHolding) ? String(object.moduleHolding) : "",
      lentOut: isSet(object.lentOut) ? String(object.lentOut) : "",
      accruedInterest: isSet(object.accruedInterest) ? String(object.accruedInterest) : "",
      underlyingPerCibt: isSet(object.underlyingPerCibt) ? String(object.underlyingPerCibt) : "",
      totalClaims: isSet(object.totalClaims) ? String(object.totalClaims) : "",
      priceSource: isSet(object.priceSource) ? String(object.priceSource) : "",
      priceAsOfUnix: isSet(object.priceAsOfUnix) ? Long.fromValue(object.priceAsOfUnix) : Long.ZERO,
      interestMultiplier: isSet(object.interestMultiplier) ? String(object.interestMultiplier) : "",
      shortfall: isSet(object.shortfall) ? String(object.shortfall) : "",
      debtTakenUsd: isSet(object.debtTakenUsd) ? String(object.debtTakenUsd) : "",
      returnedInKind: isSet(object.returnedInKind) ? String(object.returnedInKind) : "",
      paidCgt1: isSet(object.paidCgt1) ? String(object.paidCgt1) : "",
      badDebtUsd: isSet(object.badDebtUsd) ? String(object.badDebtUsd) : "",
      swept: isSet(object.swept) ? String(object.swept) : "",
      sweptTo: isSet(object.sweptTo) ? String(object.sweptTo) : "",
      debtPriceUsd: isSet(object.debtPriceUsd) ? String(object.debtPriceUsd) : "",
    };
  },

  toJSON(message: SunsetAssetRecord): unknown {
    const obj: any = {};
    message.denom !== undefined && (obj.denom = message.denom);
    message.decimals !== undefined && (obj.decimals = (message.decimals || Long.ZERO).toString());
    message.treatment !== undefined && (obj.treatment = message.treatment);
    message.priceUsd !== undefined && (obj.priceUsd = message.priceUsd);
    message.payoutDenom !== undefined && (obj.payoutDenom = message.payoutDenom);
    message.payoutPriceUsd !== undefined && (obj.payoutPriceUsd = message.payoutPriceUsd);
    message.payoutPerToken !== undefined && (obj.payoutPerToken = message.payoutPerToken);
    message.cibtSupply !== undefined && (obj.cibtSupply = message.cibtSupply);
    message.moduleHolding !== undefined && (obj.moduleHolding = message.moduleHolding);
    message.lentOut !== undefined && (obj.lentOut = message.lentOut);
    message.accruedInterest !== undefined && (obj.accruedInterest = message.accruedInterest);
    message.underlyingPerCibt !== undefined && (obj.underlyingPerCibt = message.underlyingPerCibt);
    message.totalClaims !== undefined && (obj.totalClaims = message.totalClaims);
    message.priceSource !== undefined && (obj.priceSource = message.priceSource);
    message.priceAsOfUnix !== undefined && (obj.priceAsOfUnix = (message.priceAsOfUnix || Long.ZERO).toString());
    message.interestMultiplier !== undefined && (obj.interestMultiplier = message.interestMultiplier);
    message.shortfall !== undefined && (obj.shortfall = message.shortfall);
    message.debtTakenUsd !== undefined && (obj.debtTakenUsd = message.debtTakenUsd);
    message.returnedInKind !== undefined && (obj.returnedInKind = message.returnedInKind);
    message.paidCgt1 !== undefined && (obj.paidCgt1 = message.paidCgt1);
    message.badDebtUsd !== undefined && (obj.badDebtUsd = message.badDebtUsd);
    message.swept !== undefined && (obj.swept = message.swept);
    message.sweptTo !== undefined && (obj.sweptTo = message.sweptTo);
    message.debtPriceUsd !== undefined && (obj.debtPriceUsd = message.debtPriceUsd);
    return obj;
  },

  create(base?: DeepPartial<SunsetAssetRecord>): SunsetAssetRecord {
    return SunsetAssetRecord.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<SunsetAssetRecord>): SunsetAssetRecord {
    const message = createBaseSunsetAssetRecord();
    message.denom = object.denom ?? "";
    message.decimals = (object.decimals !== undefined && object.decimals !== null)
      ? Long.fromValue(object.decimals)
      : Long.ZERO;
    message.treatment = object.treatment ?? "";
    message.priceUsd = object.priceUsd ?? "";
    message.payoutDenom = object.payoutDenom ?? "";
    message.payoutPriceUsd = object.payoutPriceUsd ?? "";
    message.payoutPerToken = object.payoutPerToken ?? "";
    message.cibtSupply = object.cibtSupply ?? "";
    message.moduleHolding = object.moduleHolding ?? "";
    message.lentOut = object.lentOut ?? "";
    message.accruedInterest = object.accruedInterest ?? "";
    message.underlyingPerCibt = object.underlyingPerCibt ?? "";
    message.totalClaims = object.totalClaims ?? "";
    message.priceSource = object.priceSource ?? "";
    message.priceAsOfUnix = (object.priceAsOfUnix !== undefined && object.priceAsOfUnix !== null)
      ? Long.fromValue(object.priceAsOfUnix)
      : Long.ZERO;
    message.interestMultiplier = object.interestMultiplier ?? "";
    message.shortfall = object.shortfall ?? "";
    message.debtTakenUsd = object.debtTakenUsd ?? "";
    message.returnedInKind = object.returnedInKind ?? "";
    message.paidCgt1 = object.paidCgt1 ?? "";
    message.badDebtUsd = object.badDebtUsd ?? "";
    message.swept = object.swept ?? "";
    message.sweptTo = object.sweptTo ?? "";
    message.debtPriceUsd = object.debtPriceUsd ?? "";
    return message;
  },
};

function createBaseSunsetFunding(): SunsetFunding {
  return { source: "", amount: undefined, paysFor: "" };
}

export const SunsetFunding = {
  encode(message: SunsetFunding, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.source !== "") {
      writer.uint32(10).string(message.source);
    }
    if (message.amount !== undefined) {
      Coin.encode(message.amount, writer.uint32(18).fork()).ldelim();
    }
    if (message.paysFor !== "") {
      writer.uint32(26).string(message.paysFor);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SunsetFunding {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSunsetFunding();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.source = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.amount = Coin.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.paysFor = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): SunsetFunding {
    return {
      source: isSet(object.source) ? String(object.source) : "",
      amount: isSet(object.amount) ? Coin.fromJSON(object.amount) : undefined,
      paysFor: isSet(object.paysFor) ? String(object.paysFor) : "",
    };
  },

  toJSON(message: SunsetFunding): unknown {
    const obj: any = {};
    message.source !== undefined && (obj.source = message.source);
    message.amount !== undefined && (obj.amount = message.amount ? Coin.toJSON(message.amount) : undefined);
    message.paysFor !== undefined && (obj.paysFor = message.paysFor);
    return obj;
  },

  create(base?: DeepPartial<SunsetFunding>): SunsetFunding {
    return SunsetFunding.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<SunsetFunding>): SunsetFunding {
    const message = createBaseSunsetFunding();
    message.source = object.source ?? "";
    message.amount = (object.amount !== undefined && object.amount !== null)
      ? Coin.fromPartial(object.amount)
      : undefined;
    message.paysFor = object.paysFor ?? "";
    return message;
  },
};

function createBaseSunsetSummaryRecord(): SunsetSummaryRecord {
  return {
    height: Long.ZERO,
    payoutDenom: "",
    sweepAccount: "",
    accountsSettled: Long.ZERO,
    uscHoldersPaid: Long.ZERO,
    cgt1Nitron: "",
    cgt1Usc: "",
    inKindTotal: [],
    badDebtUsd: "",
    zilWrittenOffUsd: "",
    funding: [],
    swept: [],
    nlendCollected: "",
    cgt1Drawn: "",
    cgt1ReservePaid: "",
    cgt1Swept: "",
    cgt1ShoreUp: "",
    burned: [],
    uscBadDebtUsd: "",
  };
}

export const SunsetSummaryRecord = {
  encode(message: SunsetSummaryRecord, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.height.isZero()) {
      writer.uint32(8).int64(message.height);
    }
    if (message.payoutDenom !== "") {
      writer.uint32(18).string(message.payoutDenom);
    }
    if (message.sweepAccount !== "") {
      writer.uint32(34).string(message.sweepAccount);
    }
    if (!message.accountsSettled.isZero()) {
      writer.uint32(40).int64(message.accountsSettled);
    }
    if (!message.uscHoldersPaid.isZero()) {
      writer.uint32(48).int64(message.uscHoldersPaid);
    }
    if (message.cgt1Nitron !== "") {
      writer.uint32(74).string(message.cgt1Nitron);
    }
    if (message.cgt1Usc !== "") {
      writer.uint32(90).string(message.cgt1Usc);
    }
    for (const v of message.inKindTotal) {
      Coin.encode(v!, writer.uint32(114).fork()).ldelim();
    }
    if (message.badDebtUsd !== "") {
      writer.uint32(130).string(message.badDebtUsd);
    }
    if (message.zilWrittenOffUsd !== "") {
      writer.uint32(138).string(message.zilWrittenOffUsd);
    }
    for (const v of message.funding) {
      SunsetFunding.encode(v!, writer.uint32(146).fork()).ldelim();
    }
    for (const v of message.swept) {
      Coin.encode(v!, writer.uint32(154).fork()).ldelim();
    }
    if (message.nlendCollected !== "") {
      writer.uint32(162).string(message.nlendCollected);
    }
    if (message.cgt1Drawn !== "") {
      writer.uint32(170).string(message.cgt1Drawn);
    }
    if (message.cgt1ReservePaid !== "") {
      writer.uint32(186).string(message.cgt1ReservePaid);
    }
    if (message.cgt1Swept !== "") {
      writer.uint32(194).string(message.cgt1Swept);
    }
    if (message.cgt1ShoreUp !== "") {
      writer.uint32(202).string(message.cgt1ShoreUp);
    }
    for (const v of message.burned) {
      Coin.encode(v!, writer.uint32(210).fork()).ldelim();
    }
    if (message.uscBadDebtUsd !== "") {
      writer.uint32(234).string(message.uscBadDebtUsd);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SunsetSummaryRecord {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSunsetSummaryRecord();
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

          message.payoutDenom = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.sweepAccount = reader.string();
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.accountsSettled = reader.int64() as Long;
          continue;
        case 6:
          if (tag !== 48) {
            break;
          }

          message.uscHoldersPaid = reader.int64() as Long;
          continue;
        case 9:
          if (tag !== 74) {
            break;
          }

          message.cgt1Nitron = reader.string();
          continue;
        case 11:
          if (tag !== 90) {
            break;
          }

          message.cgt1Usc = reader.string();
          continue;
        case 14:
          if (tag !== 114) {
            break;
          }

          message.inKindTotal.push(Coin.decode(reader, reader.uint32()));
          continue;
        case 16:
          if (tag !== 130) {
            break;
          }

          message.badDebtUsd = reader.string();
          continue;
        case 17:
          if (tag !== 138) {
            break;
          }

          message.zilWrittenOffUsd = reader.string();
          continue;
        case 18:
          if (tag !== 146) {
            break;
          }

          message.funding.push(SunsetFunding.decode(reader, reader.uint32()));
          continue;
        case 19:
          if (tag !== 154) {
            break;
          }

          message.swept.push(Coin.decode(reader, reader.uint32()));
          continue;
        case 20:
          if (tag !== 162) {
            break;
          }

          message.nlendCollected = reader.string();
          continue;
        case 21:
          if (tag !== 170) {
            break;
          }

          message.cgt1Drawn = reader.string();
          continue;
        case 23:
          if (tag !== 186) {
            break;
          }

          message.cgt1ReservePaid = reader.string();
          continue;
        case 24:
          if (tag !== 194) {
            break;
          }

          message.cgt1Swept = reader.string();
          continue;
        case 25:
          if (tag !== 202) {
            break;
          }

          message.cgt1ShoreUp = reader.string();
          continue;
        case 26:
          if (tag !== 210) {
            break;
          }

          message.burned.push(Coin.decode(reader, reader.uint32()));
          continue;
        case 29:
          if (tag !== 234) {
            break;
          }

          message.uscBadDebtUsd = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): SunsetSummaryRecord {
    return {
      height: isSet(object.height) ? Long.fromValue(object.height) : Long.ZERO,
      payoutDenom: isSet(object.payoutDenom) ? String(object.payoutDenom) : "",
      sweepAccount: isSet(object.sweepAccount) ? String(object.sweepAccount) : "",
      accountsSettled: isSet(object.accountsSettled) ? Long.fromValue(object.accountsSettled) : Long.ZERO,
      uscHoldersPaid: isSet(object.uscHoldersPaid) ? Long.fromValue(object.uscHoldersPaid) : Long.ZERO,
      cgt1Nitron: isSet(object.cgt1Nitron) ? String(object.cgt1Nitron) : "",
      cgt1Usc: isSet(object.cgt1Usc) ? String(object.cgt1Usc) : "",
      inKindTotal: Array.isArray(object?.inKindTotal) ? object.inKindTotal.map((e: any) => Coin.fromJSON(e)) : [],
      badDebtUsd: isSet(object.badDebtUsd) ? String(object.badDebtUsd) : "",
      zilWrittenOffUsd: isSet(object.zilWrittenOffUsd) ? String(object.zilWrittenOffUsd) : "",
      funding: Array.isArray(object?.funding) ? object.funding.map((e: any) => SunsetFunding.fromJSON(e)) : [],
      swept: Array.isArray(object?.swept) ? object.swept.map((e: any) => Coin.fromJSON(e)) : [],
      nlendCollected: isSet(object.nlendCollected) ? String(object.nlendCollected) : "",
      cgt1Drawn: isSet(object.cgt1Drawn) ? String(object.cgt1Drawn) : "",
      cgt1ReservePaid: isSet(object.cgt1ReservePaid) ? String(object.cgt1ReservePaid) : "",
      cgt1Swept: isSet(object.cgt1Swept) ? String(object.cgt1Swept) : "",
      cgt1ShoreUp: isSet(object.cgt1ShoreUp) ? String(object.cgt1ShoreUp) : "",
      burned: Array.isArray(object?.burned) ? object.burned.map((e: any) => Coin.fromJSON(e)) : [],
      uscBadDebtUsd: isSet(object.uscBadDebtUsd) ? String(object.uscBadDebtUsd) : "",
    };
  },

  toJSON(message: SunsetSummaryRecord): unknown {
    const obj: any = {};
    message.height !== undefined && (obj.height = (message.height || Long.ZERO).toString());
    message.payoutDenom !== undefined && (obj.payoutDenom = message.payoutDenom);
    message.sweepAccount !== undefined && (obj.sweepAccount = message.sweepAccount);
    message.accountsSettled !== undefined && (obj.accountsSettled = (message.accountsSettled || Long.ZERO).toString());
    message.uscHoldersPaid !== undefined && (obj.uscHoldersPaid = (message.uscHoldersPaid || Long.ZERO).toString());
    message.cgt1Nitron !== undefined && (obj.cgt1Nitron = message.cgt1Nitron);
    message.cgt1Usc !== undefined && (obj.cgt1Usc = message.cgt1Usc);
    if (message.inKindTotal) {
      obj.inKindTotal = message.inKindTotal.map((e) => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.inKindTotal = [];
    }
    message.badDebtUsd !== undefined && (obj.badDebtUsd = message.badDebtUsd);
    message.zilWrittenOffUsd !== undefined && (obj.zilWrittenOffUsd = message.zilWrittenOffUsd);
    if (message.funding) {
      obj.funding = message.funding.map((e) => e ? SunsetFunding.toJSON(e) : undefined);
    } else {
      obj.funding = [];
    }
    if (message.swept) {
      obj.swept = message.swept.map((e) => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.swept = [];
    }
    message.nlendCollected !== undefined && (obj.nlendCollected = message.nlendCollected);
    message.cgt1Drawn !== undefined && (obj.cgt1Drawn = message.cgt1Drawn);
    message.cgt1ReservePaid !== undefined && (obj.cgt1ReservePaid = message.cgt1ReservePaid);
    message.cgt1Swept !== undefined && (obj.cgt1Swept = message.cgt1Swept);
    message.cgt1ShoreUp !== undefined && (obj.cgt1ShoreUp = message.cgt1ShoreUp);
    if (message.burned) {
      obj.burned = message.burned.map((e) => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.burned = [];
    }
    message.uscBadDebtUsd !== undefined && (obj.uscBadDebtUsd = message.uscBadDebtUsd);
    return obj;
  },

  create(base?: DeepPartial<SunsetSummaryRecord>): SunsetSummaryRecord {
    return SunsetSummaryRecord.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<SunsetSummaryRecord>): SunsetSummaryRecord {
    const message = createBaseSunsetSummaryRecord();
    message.height = (object.height !== undefined && object.height !== null)
      ? Long.fromValue(object.height)
      : Long.ZERO;
    message.payoutDenom = object.payoutDenom ?? "";
    message.sweepAccount = object.sweepAccount ?? "";
    message.accountsSettled = (object.accountsSettled !== undefined && object.accountsSettled !== null)
      ? Long.fromValue(object.accountsSettled)
      : Long.ZERO;
    message.uscHoldersPaid = (object.uscHoldersPaid !== undefined && object.uscHoldersPaid !== null)
      ? Long.fromValue(object.uscHoldersPaid)
      : Long.ZERO;
    message.cgt1Nitron = object.cgt1Nitron ?? "";
    message.cgt1Usc = object.cgt1Usc ?? "";
    message.inKindTotal = object.inKindTotal?.map((e) => Coin.fromPartial(e)) || [];
    message.badDebtUsd = object.badDebtUsd ?? "";
    message.zilWrittenOffUsd = object.zilWrittenOffUsd ?? "";
    message.funding = object.funding?.map((e) => SunsetFunding.fromPartial(e)) || [];
    message.swept = object.swept?.map((e) => Coin.fromPartial(e)) || [];
    message.nlendCollected = object.nlendCollected ?? "";
    message.cgt1Drawn = object.cgt1Drawn ?? "";
    message.cgt1ReservePaid = object.cgt1ReservePaid ?? "";
    message.cgt1Swept = object.cgt1Swept ?? "";
    message.cgt1ShoreUp = object.cgt1ShoreUp ?? "";
    message.burned = object.burned?.map((e) => Coin.fromPartial(e)) || [];
    message.uscBadDebtUsd = object.uscBadDebtUsd ?? "";
    return message;
  },
};

function createBaseNlendRedemptionRecord(): NlendRedemptionRecord {
  return { address: "", nlend: "", cgt1: "", retired: false };
}

export const NlendRedemptionRecord = {
  encode(message: NlendRedemptionRecord, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.nlend !== "") {
      writer.uint32(18).string(message.nlend);
    }
    if (message.cgt1 !== "") {
      writer.uint32(26).string(message.cgt1);
    }
    if (message.retired === true) {
      writer.uint32(32).bool(message.retired);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): NlendRedemptionRecord {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseNlendRedemptionRecord();
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

          message.nlend = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.cgt1 = reader.string();
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.retired = reader.bool();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): NlendRedemptionRecord {
    return {
      address: isSet(object.address) ? String(object.address) : "",
      nlend: isSet(object.nlend) ? String(object.nlend) : "",
      cgt1: isSet(object.cgt1) ? String(object.cgt1) : "",
      retired: isSet(object.retired) ? Boolean(object.retired) : false,
    };
  },

  toJSON(message: NlendRedemptionRecord): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    message.nlend !== undefined && (obj.nlend = message.nlend);
    message.cgt1 !== undefined && (obj.cgt1 = message.cgt1);
    message.retired !== undefined && (obj.retired = message.retired);
    return obj;
  },

  create(base?: DeepPartial<NlendRedemptionRecord>): NlendRedemptionRecord {
    return NlendRedemptionRecord.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<NlendRedemptionRecord>): NlendRedemptionRecord {
    const message = createBaseNlendRedemptionRecord();
    message.address = object.address ?? "";
    message.nlend = object.nlend ?? "";
    message.cgt1 = object.cgt1 ?? "";
    message.retired = object.retired ?? false;
    return message;
  },
};

function createBaseNlendRedemptionSummary(): NlendRedemptionSummary {
  return {
    height: Long.ZERO,
    nlendDenom: "",
    payoutDenom: "",
    nlendAccount: "",
    priceUsd: "",
    payoutPriceUsd: "",
    supplyBefore: "",
    alreadyHeld: "",
    collected: "",
    collectedUnpaid: "",
    cgt1Paid: "",
    holdersPaid: Long.ZERO,
    holdersRetired: Long.ZERO,
    accountBalanceAfter: "",
  };
}

export const NlendRedemptionSummary = {
  encode(message: NlendRedemptionSummary, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.height.isZero()) {
      writer.uint32(8).int64(message.height);
    }
    if (message.nlendDenom !== "") {
      writer.uint32(18).string(message.nlendDenom);
    }
    if (message.payoutDenom !== "") {
      writer.uint32(26).string(message.payoutDenom);
    }
    if (message.nlendAccount !== "") {
      writer.uint32(34).string(message.nlendAccount);
    }
    if (message.priceUsd !== "") {
      writer.uint32(42).string(message.priceUsd);
    }
    if (message.payoutPriceUsd !== "") {
      writer.uint32(50).string(message.payoutPriceUsd);
    }
    if (message.supplyBefore !== "") {
      writer.uint32(58).string(message.supplyBefore);
    }
    if (message.alreadyHeld !== "") {
      writer.uint32(66).string(message.alreadyHeld);
    }
    if (message.collected !== "") {
      writer.uint32(74).string(message.collected);
    }
    if (message.collectedUnpaid !== "") {
      writer.uint32(82).string(message.collectedUnpaid);
    }
    if (message.cgt1Paid !== "") {
      writer.uint32(90).string(message.cgt1Paid);
    }
    if (!message.holdersPaid.isZero()) {
      writer.uint32(96).int64(message.holdersPaid);
    }
    if (!message.holdersRetired.isZero()) {
      writer.uint32(104).int64(message.holdersRetired);
    }
    if (message.accountBalanceAfter !== "") {
      writer.uint32(114).string(message.accountBalanceAfter);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): NlendRedemptionSummary {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseNlendRedemptionSummary();
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

          message.nlendDenom = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.payoutDenom = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.nlendAccount = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.priceUsd = reader.string();
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.payoutPriceUsd = reader.string();
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.supplyBefore = reader.string();
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.alreadyHeld = reader.string();
          continue;
        case 9:
          if (tag !== 74) {
            break;
          }

          message.collected = reader.string();
          continue;
        case 10:
          if (tag !== 82) {
            break;
          }

          message.collectedUnpaid = reader.string();
          continue;
        case 11:
          if (tag !== 90) {
            break;
          }

          message.cgt1Paid = reader.string();
          continue;
        case 12:
          if (tag !== 96) {
            break;
          }

          message.holdersPaid = reader.int64() as Long;
          continue;
        case 13:
          if (tag !== 104) {
            break;
          }

          message.holdersRetired = reader.int64() as Long;
          continue;
        case 14:
          if (tag !== 114) {
            break;
          }

          message.accountBalanceAfter = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): NlendRedemptionSummary {
    return {
      height: isSet(object.height) ? Long.fromValue(object.height) : Long.ZERO,
      nlendDenom: isSet(object.nlendDenom) ? String(object.nlendDenom) : "",
      payoutDenom: isSet(object.payoutDenom) ? String(object.payoutDenom) : "",
      nlendAccount: isSet(object.nlendAccount) ? String(object.nlendAccount) : "",
      priceUsd: isSet(object.priceUsd) ? String(object.priceUsd) : "",
      payoutPriceUsd: isSet(object.payoutPriceUsd) ? String(object.payoutPriceUsd) : "",
      supplyBefore: isSet(object.supplyBefore) ? String(object.supplyBefore) : "",
      alreadyHeld: isSet(object.alreadyHeld) ? String(object.alreadyHeld) : "",
      collected: isSet(object.collected) ? String(object.collected) : "",
      collectedUnpaid: isSet(object.collectedUnpaid) ? String(object.collectedUnpaid) : "",
      cgt1Paid: isSet(object.cgt1Paid) ? String(object.cgt1Paid) : "",
      holdersPaid: isSet(object.holdersPaid) ? Long.fromValue(object.holdersPaid) : Long.ZERO,
      holdersRetired: isSet(object.holdersRetired) ? Long.fromValue(object.holdersRetired) : Long.ZERO,
      accountBalanceAfter: isSet(object.accountBalanceAfter) ? String(object.accountBalanceAfter) : "",
    };
  },

  toJSON(message: NlendRedemptionSummary): unknown {
    const obj: any = {};
    message.height !== undefined && (obj.height = (message.height || Long.ZERO).toString());
    message.nlendDenom !== undefined && (obj.nlendDenom = message.nlendDenom);
    message.payoutDenom !== undefined && (obj.payoutDenom = message.payoutDenom);
    message.nlendAccount !== undefined && (obj.nlendAccount = message.nlendAccount);
    message.priceUsd !== undefined && (obj.priceUsd = message.priceUsd);
    message.payoutPriceUsd !== undefined && (obj.payoutPriceUsd = message.payoutPriceUsd);
    message.supplyBefore !== undefined && (obj.supplyBefore = message.supplyBefore);
    message.alreadyHeld !== undefined && (obj.alreadyHeld = message.alreadyHeld);
    message.collected !== undefined && (obj.collected = message.collected);
    message.collectedUnpaid !== undefined && (obj.collectedUnpaid = message.collectedUnpaid);
    message.cgt1Paid !== undefined && (obj.cgt1Paid = message.cgt1Paid);
    message.holdersPaid !== undefined && (obj.holdersPaid = (message.holdersPaid || Long.ZERO).toString());
    message.holdersRetired !== undefined && (obj.holdersRetired = (message.holdersRetired || Long.ZERO).toString());
    message.accountBalanceAfter !== undefined && (obj.accountBalanceAfter = message.accountBalanceAfter);
    return obj;
  },

  create(base?: DeepPartial<NlendRedemptionSummary>): NlendRedemptionSummary {
    return NlendRedemptionSummary.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<NlendRedemptionSummary>): NlendRedemptionSummary {
    const message = createBaseNlendRedemptionSummary();
    message.height = (object.height !== undefined && object.height !== null)
      ? Long.fromValue(object.height)
      : Long.ZERO;
    message.nlendDenom = object.nlendDenom ?? "";
    message.payoutDenom = object.payoutDenom ?? "";
    message.nlendAccount = object.nlendAccount ?? "";
    message.priceUsd = object.priceUsd ?? "";
    message.payoutPriceUsd = object.payoutPriceUsd ?? "";
    message.supplyBefore = object.supplyBefore ?? "";
    message.alreadyHeld = object.alreadyHeld ?? "";
    message.collected = object.collected ?? "";
    message.collectedUnpaid = object.collectedUnpaid ?? "";
    message.cgt1Paid = object.cgt1Paid ?? "";
    message.holdersPaid = (object.holdersPaid !== undefined && object.holdersPaid !== null)
      ? Long.fromValue(object.holdersPaid)
      : Long.ZERO;
    message.holdersRetired = (object.holdersRetired !== undefined && object.holdersRetired !== null)
      ? Long.fromValue(object.holdersRetired)
      : Long.ZERO;
    message.accountBalanceAfter = object.accountBalanceAfter ?? "";
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
