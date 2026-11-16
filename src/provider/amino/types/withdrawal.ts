import { TypeUtils } from "@carbon-sdk/util";
import * as CarbonTx from "@carbon-sdk/util/tx";
import { AminoConverter } from "@cosmjs/stargate";
import BigNumber from "bignumber.js";
import Long from "long";

// Each field maps to carbon's legacy amino JSON as its Go json tag in x/withdrawal/types/tx.pb.go reads.
// generateAminoType cannot express these messages: it drops a false BoolValue, writes empty lists, and rebuilds
// uint64 ids through Number.
//
// toAmino returns undefined to omit the field. fromAmino receives undefined when the field is absent.
interface FieldMap {
  toAmino: (value: any) => unknown;
  fromAmino: (value: any) => unknown;
}

type Fields = TypeUtils.SimpleMap<FieldMap>;

const DEC_PLACES = 18;

// string; omitted when empty
const str: FieldMap = {
  toAmino: (value?: string) => value || undefined,
  fromAmino: (value?: string) => value ?? "",
};

// non-nullable math.Int; always written, as "0" when unset
const int: FieldMap = {
  toAmino: (value?: string) => value || "0",
  fromAmino: (value?: string) => value ?? "",
};

// nullable math.Int; omitted when unset
const optionalInt: FieldMap = str;

// nullable math.LegacyDec; protobuf carries it scaled by 10^18, and amino writes it with 18 decimals
const optionalDec: FieldMap = {
  toAmino: (value?: string) => (value ? new BigNumber(value).shiftedBy(-DEC_PLACES).toFixed(DEC_PLACES) : undefined),
  fromAmino: (value?: string) => (value === undefined ? "" : new BigNumber(value).shiftedBy(DEC_PLACES).toFixed(0)),
};

// uint64; a decimal string, omitted when zero
const uint64: FieldMap = {
  toAmino: (value?: Long) => {
    const id = Long.fromValue(value ?? Long.UZERO).toUnsigned();
    return id.isZero() ? undefined : id.toString();
  },
  fromAmino: (value?: string) => (value === undefined ? Long.UZERO : Long.fromString(value, true)),
};

// google.protobuf.BoolValue; omitted when unset, and written when false
const optionalBool: FieldMap = {
  toAmino: (value?: boolean) => value ?? undefined,
  fromAmino: (value?: boolean) => value,
};

// repeated string; omitted when empty
const strs: FieldMap = {
  toAmino: (value?: string[]) => (value?.length ? value : undefined),
  fromAmino: (value?: string[]) => value ?? [],
};

const toAminoFields = (fields: Fields, value: TypeUtils.SimpleMap<any>): TypeUtils.SimpleMap<unknown> => {
  const amino: TypeUtils.SimpleMap<unknown> = {};
  Object.entries(fields).forEach(([key, field]) => {
    const aminoValue = field.toAmino(value[key]);
    if (aminoValue !== undefined) amino[TypeUtils.camelToSnake(key)] = aminoValue;
  });
  return amino;
};

const fromAminoFields = (fields: Fields, amino: TypeUtils.SimpleMap<any>): TypeUtils.SimpleMap<unknown> => {
  const value: TypeUtils.SimpleMap<unknown> = {};
  Object.entries(fields).forEach(([key, field]) => {
    value[key] = field.fromAmino(amino[TypeUtils.camelToSnake(key)]);
  });
  return value;
};

// nullable nested message; omitted when unset
const optionalMessage = (fields: Fields): FieldMap => ({
  toAmino: (value?: TypeUtils.SimpleMap<any>) => (value ? toAminoFields(fields, value) : undefined),
  fromAmino: (value?: TypeUtils.SimpleMap<any>) => (value === undefined ? undefined : fromAminoFields(fields, value)),
});

const converter = (aminoType: string, fields: Fields): AminoConverter => ({
  aminoType,
  toAmino: (value: TypeUtils.SimpleMap<any>) => toAminoFields(fields, value),
  fromAmino: (amino: TypeUtils.SimpleMap<any>) => fromAminoFields(fields, amino),
});

const WithdrawalAmino: TypeUtils.SimpleMap<AminoConverter> = {
  [CarbonTx.Types.MsgWithdrawalWithdraw]: converter("withdrawal/Withdraw", {
    sender: str,
    usd: int,
    recipient: str,
  }),
  [CarbonTx.Types.MsgRetryTicket]: converter("withdrawal/RetryTicket", {
    sender: str,
    ticketId: uint64,
    recipient: str,
  }),
  [CarbonTx.Types.MsgUpdateTeamList]: converter("withdrawal/UpdateTeamList", {
    creator: str,
    add: strs,
    remove: strs,
  }),
  [CarbonTx.Types.MsgUpdateControls]: converter("withdrawal/UpdateControls", {
    creator: str,
    userWithdrawalsEnabled: optionalBool,
    rebalancingEnabled: optionalBool,
    exit: optionalMessage({
      enabled: optionalBool,
      relayFee: optionalInt,
    }),
    stockWarningUsd: optionalDec,
    paused: optionalBool,
    addDepositDenoms: strs,
    removeDepositDenoms: strs,
    minWithdrawalUsd: optionalInt,
  }),
  [CarbonTx.Types.MsgRebalanceWithdrawal]: converter("withdrawal/RebalanceWithdrawal", {
    sender: str,
    denom: str,
    amount: int,
    recipient: str,
    account: str,
  }),
  [CarbonTx.Types.MsgResolveUnclaimedDeposit]: converter("withdrawal/ResolveUnclaimedDeposit", {
    creator: str,
    id: uint64,
    recipient: str,
    connectionId: str,
  }),
  [CarbonTx.Types.MsgReconcileBroker]: converter("withdrawal/ReconcileBroker", {
    creator: str,
    denom: str,
  }),
};

export default WithdrawalAmino;
