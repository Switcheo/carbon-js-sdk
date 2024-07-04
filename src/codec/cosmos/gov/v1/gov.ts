/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Duration } from "../../../google/protobuf/duration";
import { Timestamp } from "../../../google/protobuf/timestamp";
import { Coin } from "../../base/v1beta1/coin";
import { Any } from "../../../google/protobuf/any";

export const protobufPackage = "cosmos.gov.v1";

/** Since: cosmos-sdk 0.46 */

/** VoteOption enumerates the valid vote options for a given governance proposal. */
export enum VoteOption {
  /** VOTE_OPTION_UNSPECIFIED - VOTE_OPTION_UNSPECIFIED defines a no-op vote option. */
  VOTE_OPTION_UNSPECIFIED = 0,
  /** VOTE_OPTION_YES - VOTE_OPTION_YES defines a yes vote option. */
  VOTE_OPTION_YES = 1,
  /** VOTE_OPTION_ABSTAIN - VOTE_OPTION_ABSTAIN defines an abstain vote option. */
  VOTE_OPTION_ABSTAIN = 2,
  /** VOTE_OPTION_NO - VOTE_OPTION_NO defines a no vote option. */
  VOTE_OPTION_NO = 3,
  /** VOTE_OPTION_NO_WITH_VETO - VOTE_OPTION_NO_WITH_VETO defines a no with veto vote option. */
  VOTE_OPTION_NO_WITH_VETO = 4,
  UNRECOGNIZED = -1,
}

export function voteOptionFromJSON(object: any): VoteOption {
  switch (object) {
    case 0:
    case "VOTE_OPTION_UNSPECIFIED":
      return VoteOption.VOTE_OPTION_UNSPECIFIED;
    case 1:
    case "VOTE_OPTION_YES":
      return VoteOption.VOTE_OPTION_YES;
    case 2:
    case "VOTE_OPTION_ABSTAIN":
      return VoteOption.VOTE_OPTION_ABSTAIN;
    case 3:
    case "VOTE_OPTION_NO":
      return VoteOption.VOTE_OPTION_NO;
    case 4:
    case "VOTE_OPTION_NO_WITH_VETO":
      return VoteOption.VOTE_OPTION_NO_WITH_VETO;
    case -1:
    case "UNRECOGNIZED":
    default:
      return VoteOption.UNRECOGNIZED;
  }
}

export function voteOptionToJSON(object: VoteOption): string {
  switch (object) {
    case VoteOption.VOTE_OPTION_UNSPECIFIED:
      return "VOTE_OPTION_UNSPECIFIED";
    case VoteOption.VOTE_OPTION_YES:
      return "VOTE_OPTION_YES";
    case VoteOption.VOTE_OPTION_ABSTAIN:
      return "VOTE_OPTION_ABSTAIN";
    case VoteOption.VOTE_OPTION_NO:
      return "VOTE_OPTION_NO";
    case VoteOption.VOTE_OPTION_NO_WITH_VETO:
      return "VOTE_OPTION_NO_WITH_VETO";
    default:
      return "UNKNOWN";
  }
}

/** ProposalStatus enumerates the valid statuses of a proposal. */
export enum ProposalStatus {
  /** PROPOSAL_STATUS_UNSPECIFIED - PROPOSAL_STATUS_UNSPECIFIED defines the default proposal status. */
  PROPOSAL_STATUS_UNSPECIFIED = 0,
  /**
   * PROPOSAL_STATUS_DEPOSIT_PERIOD - PROPOSAL_STATUS_DEPOSIT_PERIOD defines a proposal status during the deposit
   * period.
   */
  PROPOSAL_STATUS_DEPOSIT_PERIOD = 1,
  /**
   * PROPOSAL_STATUS_VOTING_PERIOD - PROPOSAL_STATUS_VOTING_PERIOD defines a proposal status during the voting
   * period.
   */
  PROPOSAL_STATUS_VOTING_PERIOD = 2,
  /**
   * PROPOSAL_STATUS_PASSED - PROPOSAL_STATUS_PASSED defines a proposal status of a proposal that has
   * passed.
   */
  PROPOSAL_STATUS_PASSED = 3,
  /**
   * PROPOSAL_STATUS_REJECTED - PROPOSAL_STATUS_REJECTED defines a proposal status of a proposal that has
   * been rejected.
   */
  PROPOSAL_STATUS_REJECTED = 4,
  /**
   * PROPOSAL_STATUS_FAILED - PROPOSAL_STATUS_FAILED defines a proposal status of a proposal that has
   * failed.
   */
  PROPOSAL_STATUS_FAILED = 5,
  UNRECOGNIZED = -1,
}

export function proposalStatusFromJSON(object: any): ProposalStatus {
  switch (object) {
    case 0:
    case "PROPOSAL_STATUS_UNSPECIFIED":
      return ProposalStatus.PROPOSAL_STATUS_UNSPECIFIED;
    case 1:
    case "PROPOSAL_STATUS_DEPOSIT_PERIOD":
      return ProposalStatus.PROPOSAL_STATUS_DEPOSIT_PERIOD;
    case 2:
    case "PROPOSAL_STATUS_VOTING_PERIOD":
      return ProposalStatus.PROPOSAL_STATUS_VOTING_PERIOD;
    case 3:
    case "PROPOSAL_STATUS_PASSED":
      return ProposalStatus.PROPOSAL_STATUS_PASSED;
    case 4:
    case "PROPOSAL_STATUS_REJECTED":
      return ProposalStatus.PROPOSAL_STATUS_REJECTED;
    case 5:
    case "PROPOSAL_STATUS_FAILED":
      return ProposalStatus.PROPOSAL_STATUS_FAILED;
    case -1:
    case "UNRECOGNIZED":
    default:
      return ProposalStatus.UNRECOGNIZED;
  }
}

export function proposalStatusToJSON(object: ProposalStatus): string {
  switch (object) {
    case ProposalStatus.PROPOSAL_STATUS_UNSPECIFIED:
      return "PROPOSAL_STATUS_UNSPECIFIED";
    case ProposalStatus.PROPOSAL_STATUS_DEPOSIT_PERIOD:
      return "PROPOSAL_STATUS_DEPOSIT_PERIOD";
    case ProposalStatus.PROPOSAL_STATUS_VOTING_PERIOD:
      return "PROPOSAL_STATUS_VOTING_PERIOD";
    case ProposalStatus.PROPOSAL_STATUS_PASSED:
      return "PROPOSAL_STATUS_PASSED";
    case ProposalStatus.PROPOSAL_STATUS_REJECTED:
      return "PROPOSAL_STATUS_REJECTED";
    case ProposalStatus.PROPOSAL_STATUS_FAILED:
      return "PROPOSAL_STATUS_FAILED";
    default:
      return "UNKNOWN";
  }
}

/** WeightedVoteOption defines a unit of vote for vote split. */
export interface WeightedVoteOption {
  /** option defines the valid vote options, it must not contain duplicate vote options. */
  option: VoteOption;
  /** weight is the vote weight associated with the vote option. */
  weight: string;
}

/**
 * Deposit defines an amount deposited by an account address to an active
 * proposal.
 */
export interface Deposit {
  /** proposal_id defines the unique id of the proposal. */
  proposalId: Long;
  /** depositor defines the deposit addresses from the proposals. */
  depositor: string;
  /** amount to be deposited by depositor. */
  amount: Coin[];
}

/** Proposal defines the core field members of a governance proposal. */
export interface Proposal {
  /** id defines the unique id of the proposal. */
  id: Long;
  /** messages are the arbitrary messages to be executed if the proposal passes. */
  messages: Any[];
  /** status defines the proposal status. */
  status: ProposalStatus;
  /**
   * final_tally_result is the final tally result of the proposal. When
   * querying a proposal via gRPC, this field is not populated until the
   * proposal's voting period has ended.
   */
  finalTallyResult?: TallyResult;
  /** submit_time is the time of proposal submission. */
  submitTime?: Date;
  /** deposit_end_time is the end time for deposition. */
  depositEndTime?: Date;
  /** total_deposit is the total deposit on the proposal. */
  totalDeposit: Coin[];
  /** voting_start_time is the starting time to vote on a proposal. */
  votingStartTime?: Date;
  /** voting_end_time is the end time of voting on a proposal. */
  votingEndTime?: Date;
  /**
   * metadata is any arbitrary metadata attached to the proposal.
   * the recommended format of the metadata is to be found here:
   * https://docs.cosmos.network/v0.47/modules/gov#proposal-3
   */
  metadata: string;
  /**
   * title is the title of the proposal
   *
   * Since: cosmos-sdk 0.47
   */
  title: string;
  /**
   * summary is a short summary of the proposal
   *
   * Since: cosmos-sdk 0.47
   */
  summary: string;
  /**
   * proposer is the address of the proposal sumbitter
   *
   * Since: cosmos-sdk 0.47
   */
  proposer: string;
  /**
   * expedited defines if the proposal is expedited
   *
   * Since: cosmos-sdk 0.50
   */
  expedited: boolean;
  /**
   * failed_reason defines the reason why the proposal failed
   *
   * Since: cosmos-sdk 0.50
   */
  failedReason: string;
}

/** TallyResult defines a standard tally for a governance proposal. */
export interface TallyResult {
  /** yes_count is the number of yes votes on a proposal. */
  yesCount: string;
  /** abstain_count is the number of abstain votes on a proposal. */
  abstainCount: string;
  /** no_count is the number of no votes on a proposal. */
  noCount: string;
  /** no_with_veto_count is the number of no with veto votes on a proposal. */
  noWithVetoCount: string;
}

/**
 * Vote defines a vote on a governance proposal.
 * A Vote consists of a proposal ID, the voter, and the vote option.
 */
export interface Vote {
  /** proposal_id defines the unique id of the proposal. */
  proposalId: Long;
  /** voter is the voter address of the proposal. */
  voter: string;
  /** options is the weighted vote options. */
  options: WeightedVoteOption[];
  /**
   * metadata is any arbitrary metadata attached to the vote.
   * the recommended format of the metadata is to be found here: https://docs.cosmos.network/v0.47/modules/gov#vote-5
   */
  metadata: string;
}

/**
 * DepositParams defines the params for deposits on governance proposals.
 *
 * @deprecated
 */
export interface DepositParams {
  /** Minimum deposit for a proposal to enter voting period. */
  minDeposit: Coin[];
  /**
   * Maximum period for Atom holders to deposit on a proposal. Initial value: 2
   * months.
   */
  maxDepositPeriod?: Duration;
}

/**
 * VotingParams defines the params for voting on governance proposals.
 *
 * @deprecated
 */
export interface VotingParams {
  /** Duration of the voting period. */
  votingPeriod?: Duration;
}

/**
 * TallyParams defines the params for tallying votes on governance proposals.
 *
 * @deprecated
 */
export interface TallyParams {
  /**
   * Minimum percentage of total stake needed to vote for a result to be
   * considered valid.
   */
  quorum: string;
  /** Minimum proportion of Yes votes for proposal to pass. Default value: 0.5. */
  threshold: string;
  /**
   * Minimum value of Veto votes to Total votes ratio for proposal to be
   * vetoed. Default value: 1/3.
   */
  vetoThreshold: string;
}

/**
 * Params defines the parameters for the x/gov module.
 *
 * Since: cosmos-sdk 0.47
 */
export interface Params {
  /** Minimum deposit for a proposal to enter voting period. */
  minDeposit: Coin[];
  /**
   * Maximum period for Atom holders to deposit on a proposal. Initial value: 2
   * months.
   */
  maxDepositPeriod?: Duration;
  /** Duration of the voting period. */
  votingPeriod?: Duration;
  /**
   * Minimum percentage of total stake needed to vote for a result to be
   *  considered valid.
   */
  quorum: string;
  /** Minimum proportion of Yes votes for proposal to pass. Default value: 0.5. */
  threshold: string;
  /**
   * Minimum value of Veto votes to Total votes ratio for proposal to be
   *  vetoed. Default value: 1/3.
   */
  vetoThreshold: string;
  /** The ratio representing the proportion of the deposit value that must be paid at proposal submission. */
  minInitialDepositRatio: string;
  /**
   * The cancel ratio which will not be returned back to the depositors when a proposal is cancelled.
   *
   * Since: cosmos-sdk 0.50
   */
  proposalCancelRatio: string;
  /**
   * The address which will receive (proposal_cancel_ratio * deposit) proposal deposits.
   * If empty, the (proposal_cancel_ratio * deposit) proposal deposits will be burned.
   *
   * Since: cosmos-sdk 0.50
   */
  proposalCancelDest: string;
  /**
   * Duration of the voting period of an expedited proposal.
   *
   * Since: cosmos-sdk 0.50
   */
  expeditedVotingPeriod?: Duration;
  /**
   * Minimum proportion of Yes votes for proposal to pass. Default value: 0.67.
   *
   * Since: cosmos-sdk 0.50
   */
  expeditedThreshold: string;
  /** Minimum expedited deposit for a proposal to enter voting period. */
  expeditedMinDeposit: Coin[];
  /** burn deposits if a proposal does not meet quorum */
  burnVoteQuorum: boolean;
  /** burn deposits if the proposal does not enter voting period */
  burnProposalDepositPrevote: boolean;
  /** burn deposits if quorum with vote type no_veto is met */
  burnVoteVeto: boolean;
  /**
   * The ratio representing the proportion of the deposit value minimum that must be met when making a deposit.
   * Default value: 0.01. Meaning that for a chain with a min_deposit of 100stake, a deposit of 1stake would be
   * required.
   *
   * Since: cosmos-sdk 0.50
   */
  minDepositRatio: string;
}

const baseWeightedVoteOption: object = { option: 0, weight: "" };

export const WeightedVoteOption = {
  encode(
    message: WeightedVoteOption,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.option !== 0) {
      writer.uint32(8).int32(message.option);
    }
    if (message.weight !== "") {
      writer.uint32(18).string(message.weight);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): WeightedVoteOption {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseWeightedVoteOption } as WeightedVoteOption;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.option = reader.int32() as any;
          break;
        case 2:
          message.weight = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): WeightedVoteOption {
    const message = { ...baseWeightedVoteOption } as WeightedVoteOption;
    message.option =
      object.option !== undefined && object.option !== null
        ? voteOptionFromJSON(object.option)
        : 0;
    message.weight =
      object.weight !== undefined && object.weight !== null
        ? String(object.weight)
        : "";
    return message;
  },

  toJSON(message: WeightedVoteOption): unknown {
    const obj: any = {};
    message.option !== undefined &&
      (obj.option = voteOptionToJSON(message.option));
    message.weight !== undefined && (obj.weight = message.weight);
    return obj;
  },

  fromPartial(object: DeepPartial<WeightedVoteOption>): WeightedVoteOption {
    const message = { ...baseWeightedVoteOption } as WeightedVoteOption;
    message.option = object.option ?? 0;
    message.weight = object.weight ?? "";
    return message;
  },
};

const baseDeposit: object = { proposalId: Long.UZERO, depositor: "" };

export const Deposit = {
  encode(
    message: Deposit,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (!message.proposalId.isZero()) {
      writer.uint32(8).uint64(message.proposalId);
    }
    if (message.depositor !== "") {
      writer.uint32(18).string(message.depositor);
    }
    for (const v of message.amount) {
      Coin.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Deposit {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseDeposit } as Deposit;
    message.amount = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.proposalId = reader.uint64() as Long;
          break;
        case 2:
          message.depositor = reader.string();
          break;
        case 3:
          message.amount.push(Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Deposit {
    const message = { ...baseDeposit } as Deposit;
    message.proposalId =
      object.proposalId !== undefined && object.proposalId !== null
        ? Long.fromString(object.proposalId)
        : Long.UZERO;
    message.depositor =
      object.depositor !== undefined && object.depositor !== null
        ? String(object.depositor)
        : "";
    message.amount = (object.amount ?? []).map((e: any) => Coin.fromJSON(e));
    return message;
  },

  toJSON(message: Deposit): unknown {
    const obj: any = {};
    message.proposalId !== undefined &&
      (obj.proposalId = (message.proposalId || Long.UZERO).toString());
    message.depositor !== undefined && (obj.depositor = message.depositor);
    if (message.amount) {
      obj.amount = message.amount.map((e) => (e ? Coin.toJSON(e) : undefined));
    } else {
      obj.amount = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<Deposit>): Deposit {
    const message = { ...baseDeposit } as Deposit;
    message.proposalId =
      object.proposalId !== undefined && object.proposalId !== null
        ? Long.fromValue(object.proposalId)
        : Long.UZERO;
    message.depositor = object.depositor ?? "";
    message.amount = (object.amount ?? []).map((e) => Coin.fromPartial(e));
    return message;
  },
};

const baseProposal: object = {
  id: Long.UZERO,
  status: 0,
  metadata: "",
  title: "",
  summary: "",
  proposer: "",
  expedited: false,
  failedReason: "",
};

export const Proposal = {
  encode(
    message: Proposal,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (!message.id.isZero()) {
      writer.uint32(8).uint64(message.id);
    }
    for (const v of message.messages) {
      Any.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.status !== 0) {
      writer.uint32(24).int32(message.status);
    }
    if (message.finalTallyResult !== undefined) {
      TallyResult.encode(
        message.finalTallyResult,
        writer.uint32(34).fork()
      ).ldelim();
    }
    if (message.submitTime !== undefined) {
      Timestamp.encode(
        toTimestamp(message.submitTime),
        writer.uint32(42).fork()
      ).ldelim();
    }
    if (message.depositEndTime !== undefined) {
      Timestamp.encode(
        toTimestamp(message.depositEndTime),
        writer.uint32(50).fork()
      ).ldelim();
    }
    for (const v of message.totalDeposit) {
      Coin.encode(v!, writer.uint32(58).fork()).ldelim();
    }
    if (message.votingStartTime !== undefined) {
      Timestamp.encode(
        toTimestamp(message.votingStartTime),
        writer.uint32(66).fork()
      ).ldelim();
    }
    if (message.votingEndTime !== undefined) {
      Timestamp.encode(
        toTimestamp(message.votingEndTime),
        writer.uint32(74).fork()
      ).ldelim();
    }
    if (message.metadata !== "") {
      writer.uint32(82).string(message.metadata);
    }
    if (message.title !== "") {
      writer.uint32(90).string(message.title);
    }
    if (message.summary !== "") {
      writer.uint32(98).string(message.summary);
    }
    if (message.proposer !== "") {
      writer.uint32(106).string(message.proposer);
    }
    if (message.expedited === true) {
      writer.uint32(112).bool(message.expedited);
    }
    if (message.failedReason !== "") {
      writer.uint32(122).string(message.failedReason);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Proposal {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseProposal } as Proposal;
    message.messages = [];
    message.totalDeposit = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.uint64() as Long;
          break;
        case 2:
          message.messages.push(Any.decode(reader, reader.uint32()));
          break;
        case 3:
          message.status = reader.int32() as any;
          break;
        case 4:
          message.finalTallyResult = TallyResult.decode(
            reader,
            reader.uint32()
          );
          break;
        case 5:
          message.submitTime = fromTimestamp(
            Timestamp.decode(reader, reader.uint32())
          );
          break;
        case 6:
          message.depositEndTime = fromTimestamp(
            Timestamp.decode(reader, reader.uint32())
          );
          break;
        case 7:
          message.totalDeposit.push(Coin.decode(reader, reader.uint32()));
          break;
        case 8:
          message.votingStartTime = fromTimestamp(
            Timestamp.decode(reader, reader.uint32())
          );
          break;
        case 9:
          message.votingEndTime = fromTimestamp(
            Timestamp.decode(reader, reader.uint32())
          );
          break;
        case 10:
          message.metadata = reader.string();
          break;
        case 11:
          message.title = reader.string();
          break;
        case 12:
          message.summary = reader.string();
          break;
        case 13:
          message.proposer = reader.string();
          break;
        case 14:
          message.expedited = reader.bool();
          break;
        case 15:
          message.failedReason = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Proposal {
    const message = { ...baseProposal } as Proposal;
    message.id =
      object.id !== undefined && object.id !== null
        ? Long.fromString(object.id)
        : Long.UZERO;
    message.messages = (object.messages ?? []).map((e: any) => Any.fromJSON(e));
    message.status =
      object.status !== undefined && object.status !== null
        ? proposalStatusFromJSON(object.status)
        : 0;
    message.finalTallyResult =
      object.finalTallyResult !== undefined && object.finalTallyResult !== null
        ? TallyResult.fromJSON(object.finalTallyResult)
        : undefined;
    message.submitTime =
      object.submitTime !== undefined && object.submitTime !== null
        ? fromJsonTimestamp(object.submitTime)
        : undefined;
    message.depositEndTime =
      object.depositEndTime !== undefined && object.depositEndTime !== null
        ? fromJsonTimestamp(object.depositEndTime)
        : undefined;
    message.totalDeposit = (object.totalDeposit ?? []).map((e: any) =>
      Coin.fromJSON(e)
    );
    message.votingStartTime =
      object.votingStartTime !== undefined && object.votingStartTime !== null
        ? fromJsonTimestamp(object.votingStartTime)
        : undefined;
    message.votingEndTime =
      object.votingEndTime !== undefined && object.votingEndTime !== null
        ? fromJsonTimestamp(object.votingEndTime)
        : undefined;
    message.metadata =
      object.metadata !== undefined && object.metadata !== null
        ? String(object.metadata)
        : "";
    message.title =
      object.title !== undefined && object.title !== null
        ? String(object.title)
        : "";
    message.summary =
      object.summary !== undefined && object.summary !== null
        ? String(object.summary)
        : "";
    message.proposer =
      object.proposer !== undefined && object.proposer !== null
        ? String(object.proposer)
        : "";
    message.expedited =
      object.expedited !== undefined && object.expedited !== null
        ? Boolean(object.expedited)
        : false;
    message.failedReason =
      object.failedReason !== undefined && object.failedReason !== null
        ? String(object.failedReason)
        : "";
    return message;
  },

  toJSON(message: Proposal): unknown {
    const obj: any = {};
    message.id !== undefined &&
      (obj.id = (message.id || Long.UZERO).toString());
    if (message.messages) {
      obj.messages = message.messages.map((e) =>
        e ? Any.toJSON(e) : undefined
      );
    } else {
      obj.messages = [];
    }
    message.status !== undefined &&
      (obj.status = proposalStatusToJSON(message.status));
    message.finalTallyResult !== undefined &&
      (obj.finalTallyResult = message.finalTallyResult
        ? TallyResult.toJSON(message.finalTallyResult)
        : undefined);
    message.submitTime !== undefined &&
      (obj.submitTime = message.submitTime.toISOString());
    message.depositEndTime !== undefined &&
      (obj.depositEndTime = message.depositEndTime.toISOString());
    if (message.totalDeposit) {
      obj.totalDeposit = message.totalDeposit.map((e) =>
        e ? Coin.toJSON(e) : undefined
      );
    } else {
      obj.totalDeposit = [];
    }
    message.votingStartTime !== undefined &&
      (obj.votingStartTime = message.votingStartTime.toISOString());
    message.votingEndTime !== undefined &&
      (obj.votingEndTime = message.votingEndTime.toISOString());
    message.metadata !== undefined && (obj.metadata = message.metadata);
    message.title !== undefined && (obj.title = message.title);
    message.summary !== undefined && (obj.summary = message.summary);
    message.proposer !== undefined && (obj.proposer = message.proposer);
    message.expedited !== undefined && (obj.expedited = message.expedited);
    message.failedReason !== undefined &&
      (obj.failedReason = message.failedReason);
    return obj;
  },

  fromPartial(object: DeepPartial<Proposal>): Proposal {
    const message = { ...baseProposal } as Proposal;
    message.id =
      object.id !== undefined && object.id !== null
        ? Long.fromValue(object.id)
        : Long.UZERO;
    message.messages = (object.messages ?? []).map((e) => Any.fromPartial(e));
    message.status = object.status ?? 0;
    message.finalTallyResult =
      object.finalTallyResult !== undefined && object.finalTallyResult !== null
        ? TallyResult.fromPartial(object.finalTallyResult)
        : undefined;
    message.submitTime = object.submitTime ?? undefined;
    message.depositEndTime = object.depositEndTime ?? undefined;
    message.totalDeposit = (object.totalDeposit ?? []).map((e) =>
      Coin.fromPartial(e)
    );
    message.votingStartTime = object.votingStartTime ?? undefined;
    message.votingEndTime = object.votingEndTime ?? undefined;
    message.metadata = object.metadata ?? "";
    message.title = object.title ?? "";
    message.summary = object.summary ?? "";
    message.proposer = object.proposer ?? "";
    message.expedited = object.expedited ?? false;
    message.failedReason = object.failedReason ?? "";
    return message;
  },
};

const baseTallyResult: object = {
  yesCount: "",
  abstainCount: "",
  noCount: "",
  noWithVetoCount: "",
};

export const TallyResult = {
  encode(
    message: TallyResult,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.yesCount !== "") {
      writer.uint32(10).string(message.yesCount);
    }
    if (message.abstainCount !== "") {
      writer.uint32(18).string(message.abstainCount);
    }
    if (message.noCount !== "") {
      writer.uint32(26).string(message.noCount);
    }
    if (message.noWithVetoCount !== "") {
      writer.uint32(34).string(message.noWithVetoCount);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TallyResult {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseTallyResult } as TallyResult;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.yesCount = reader.string();
          break;
        case 2:
          message.abstainCount = reader.string();
          break;
        case 3:
          message.noCount = reader.string();
          break;
        case 4:
          message.noWithVetoCount = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): TallyResult {
    const message = { ...baseTallyResult } as TallyResult;
    message.yesCount =
      object.yesCount !== undefined && object.yesCount !== null
        ? String(object.yesCount)
        : "";
    message.abstainCount =
      object.abstainCount !== undefined && object.abstainCount !== null
        ? String(object.abstainCount)
        : "";
    message.noCount =
      object.noCount !== undefined && object.noCount !== null
        ? String(object.noCount)
        : "";
    message.noWithVetoCount =
      object.noWithVetoCount !== undefined && object.noWithVetoCount !== null
        ? String(object.noWithVetoCount)
        : "";
    return message;
  },

  toJSON(message: TallyResult): unknown {
    const obj: any = {};
    message.yesCount !== undefined && (obj.yesCount = message.yesCount);
    message.abstainCount !== undefined &&
      (obj.abstainCount = message.abstainCount);
    message.noCount !== undefined && (obj.noCount = message.noCount);
    message.noWithVetoCount !== undefined &&
      (obj.noWithVetoCount = message.noWithVetoCount);
    return obj;
  },

  fromPartial(object: DeepPartial<TallyResult>): TallyResult {
    const message = { ...baseTallyResult } as TallyResult;
    message.yesCount = object.yesCount ?? "";
    message.abstainCount = object.abstainCount ?? "";
    message.noCount = object.noCount ?? "";
    message.noWithVetoCount = object.noWithVetoCount ?? "";
    return message;
  },
};

const baseVote: object = { proposalId: Long.UZERO, voter: "", metadata: "" };

export const Vote = {
  encode(message: Vote, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.proposalId.isZero()) {
      writer.uint32(8).uint64(message.proposalId);
    }
    if (message.voter !== "") {
      writer.uint32(18).string(message.voter);
    }
    for (const v of message.options) {
      WeightedVoteOption.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    if (message.metadata !== "") {
      writer.uint32(42).string(message.metadata);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Vote {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseVote } as Vote;
    message.options = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.proposalId = reader.uint64() as Long;
          break;
        case 2:
          message.voter = reader.string();
          break;
        case 4:
          message.options.push(
            WeightedVoteOption.decode(reader, reader.uint32())
          );
          break;
        case 5:
          message.metadata = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Vote {
    const message = { ...baseVote } as Vote;
    message.proposalId =
      object.proposalId !== undefined && object.proposalId !== null
        ? Long.fromString(object.proposalId)
        : Long.UZERO;
    message.voter =
      object.voter !== undefined && object.voter !== null
        ? String(object.voter)
        : "";
    message.options = (object.options ?? []).map((e: any) =>
      WeightedVoteOption.fromJSON(e)
    );
    message.metadata =
      object.metadata !== undefined && object.metadata !== null
        ? String(object.metadata)
        : "";
    return message;
  },

  toJSON(message: Vote): unknown {
    const obj: any = {};
    message.proposalId !== undefined &&
      (obj.proposalId = (message.proposalId || Long.UZERO).toString());
    message.voter !== undefined && (obj.voter = message.voter);
    if (message.options) {
      obj.options = message.options.map((e) =>
        e ? WeightedVoteOption.toJSON(e) : undefined
      );
    } else {
      obj.options = [];
    }
    message.metadata !== undefined && (obj.metadata = message.metadata);
    return obj;
  },

  fromPartial(object: DeepPartial<Vote>): Vote {
    const message = { ...baseVote } as Vote;
    message.proposalId =
      object.proposalId !== undefined && object.proposalId !== null
        ? Long.fromValue(object.proposalId)
        : Long.UZERO;
    message.voter = object.voter ?? "";
    message.options = (object.options ?? []).map((e) =>
      WeightedVoteOption.fromPartial(e)
    );
    message.metadata = object.metadata ?? "";
    return message;
  },
};

const baseDepositParams: object = {};

export const DepositParams = {
  encode(
    message: DepositParams,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.minDeposit) {
      Coin.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.maxDepositPeriod !== undefined) {
      Duration.encode(
        message.maxDepositPeriod,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DepositParams {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseDepositParams } as DepositParams;
    message.minDeposit = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.minDeposit.push(Coin.decode(reader, reader.uint32()));
          break;
        case 2:
          message.maxDepositPeriod = Duration.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): DepositParams {
    const message = { ...baseDepositParams } as DepositParams;
    message.minDeposit = (object.minDeposit ?? []).map((e: any) =>
      Coin.fromJSON(e)
    );
    message.maxDepositPeriod =
      object.maxDepositPeriod !== undefined && object.maxDepositPeriod !== null
        ? Duration.fromJSON(object.maxDepositPeriod)
        : undefined;
    return message;
  },

  toJSON(message: DepositParams): unknown {
    const obj: any = {};
    if (message.minDeposit) {
      obj.minDeposit = message.minDeposit.map((e) =>
        e ? Coin.toJSON(e) : undefined
      );
    } else {
      obj.minDeposit = [];
    }
    message.maxDepositPeriod !== undefined &&
      (obj.maxDepositPeriod = message.maxDepositPeriod
        ? Duration.toJSON(message.maxDepositPeriod)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<DepositParams>): DepositParams {
    const message = { ...baseDepositParams } as DepositParams;
    message.minDeposit = (object.minDeposit ?? []).map((e) =>
      Coin.fromPartial(e)
    );
    message.maxDepositPeriod =
      object.maxDepositPeriod !== undefined && object.maxDepositPeriod !== null
        ? Duration.fromPartial(object.maxDepositPeriod)
        : undefined;
    return message;
  },
};

const baseVotingParams: object = {};

export const VotingParams = {
  encode(
    message: VotingParams,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.votingPeriod !== undefined) {
      Duration.encode(message.votingPeriod, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): VotingParams {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseVotingParams } as VotingParams;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.votingPeriod = Duration.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): VotingParams {
    const message = { ...baseVotingParams } as VotingParams;
    message.votingPeriod =
      object.votingPeriod !== undefined && object.votingPeriod !== null
        ? Duration.fromJSON(object.votingPeriod)
        : undefined;
    return message;
  },

  toJSON(message: VotingParams): unknown {
    const obj: any = {};
    message.votingPeriod !== undefined &&
      (obj.votingPeriod = message.votingPeriod
        ? Duration.toJSON(message.votingPeriod)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<VotingParams>): VotingParams {
    const message = { ...baseVotingParams } as VotingParams;
    message.votingPeriod =
      object.votingPeriod !== undefined && object.votingPeriod !== null
        ? Duration.fromPartial(object.votingPeriod)
        : undefined;
    return message;
  },
};

const baseTallyParams: object = {
  quorum: "",
  threshold: "",
  vetoThreshold: "",
};

export const TallyParams = {
  encode(
    message: TallyParams,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.quorum !== "") {
      writer.uint32(10).string(message.quorum);
    }
    if (message.threshold !== "") {
      writer.uint32(18).string(message.threshold);
    }
    if (message.vetoThreshold !== "") {
      writer.uint32(26).string(message.vetoThreshold);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TallyParams {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseTallyParams } as TallyParams;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.quorum = reader.string();
          break;
        case 2:
          message.threshold = reader.string();
          break;
        case 3:
          message.vetoThreshold = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): TallyParams {
    const message = { ...baseTallyParams } as TallyParams;
    message.quorum =
      object.quorum !== undefined && object.quorum !== null
        ? String(object.quorum)
        : "";
    message.threshold =
      object.threshold !== undefined && object.threshold !== null
        ? String(object.threshold)
        : "";
    message.vetoThreshold =
      object.vetoThreshold !== undefined && object.vetoThreshold !== null
        ? String(object.vetoThreshold)
        : "";
    return message;
  },

  toJSON(message: TallyParams): unknown {
    const obj: any = {};
    message.quorum !== undefined && (obj.quorum = message.quorum);
    message.threshold !== undefined && (obj.threshold = message.threshold);
    message.vetoThreshold !== undefined &&
      (obj.vetoThreshold = message.vetoThreshold);
    return obj;
  },

  fromPartial(object: DeepPartial<TallyParams>): TallyParams {
    const message = { ...baseTallyParams } as TallyParams;
    message.quorum = object.quorum ?? "";
    message.threshold = object.threshold ?? "";
    message.vetoThreshold = object.vetoThreshold ?? "";
    return message;
  },
};

const baseParams: object = {
  quorum: "",
  threshold: "",
  vetoThreshold: "",
  minInitialDepositRatio: "",
  proposalCancelRatio: "",
  proposalCancelDest: "",
  expeditedThreshold: "",
  burnVoteQuorum: false,
  burnProposalDepositPrevote: false,
  burnVoteVeto: false,
  minDepositRatio: "",
};

export const Params = {
  encode(
    message: Params,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.minDeposit) {
      Coin.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.maxDepositPeriod !== undefined) {
      Duration.encode(
        message.maxDepositPeriod,
        writer.uint32(18).fork()
      ).ldelim();
    }
    if (message.votingPeriod !== undefined) {
      Duration.encode(message.votingPeriod, writer.uint32(26).fork()).ldelim();
    }
    if (message.quorum !== "") {
      writer.uint32(34).string(message.quorum);
    }
    if (message.threshold !== "") {
      writer.uint32(42).string(message.threshold);
    }
    if (message.vetoThreshold !== "") {
      writer.uint32(50).string(message.vetoThreshold);
    }
    if (message.minInitialDepositRatio !== "") {
      writer.uint32(58).string(message.minInitialDepositRatio);
    }
    if (message.proposalCancelRatio !== "") {
      writer.uint32(66).string(message.proposalCancelRatio);
    }
    if (message.proposalCancelDest !== "") {
      writer.uint32(74).string(message.proposalCancelDest);
    }
    if (message.expeditedVotingPeriod !== undefined) {
      Duration.encode(
        message.expeditedVotingPeriod,
        writer.uint32(82).fork()
      ).ldelim();
    }
    if (message.expeditedThreshold !== "") {
      writer.uint32(90).string(message.expeditedThreshold);
    }
    for (const v of message.expeditedMinDeposit) {
      Coin.encode(v!, writer.uint32(98).fork()).ldelim();
    }
    if (message.burnVoteQuorum === true) {
      writer.uint32(104).bool(message.burnVoteQuorum);
    }
    if (message.burnProposalDepositPrevote === true) {
      writer.uint32(112).bool(message.burnProposalDepositPrevote);
    }
    if (message.burnVoteVeto === true) {
      writer.uint32(120).bool(message.burnVoteVeto);
    }
    if (message.minDepositRatio !== "") {
      writer.uint32(130).string(message.minDepositRatio);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Params {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseParams } as Params;
    message.minDeposit = [];
    message.expeditedMinDeposit = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.minDeposit.push(Coin.decode(reader, reader.uint32()));
          break;
        case 2:
          message.maxDepositPeriod = Duration.decode(reader, reader.uint32());
          break;
        case 3:
          message.votingPeriod = Duration.decode(reader, reader.uint32());
          break;
        case 4:
          message.quorum = reader.string();
          break;
        case 5:
          message.threshold = reader.string();
          break;
        case 6:
          message.vetoThreshold = reader.string();
          break;
        case 7:
          message.minInitialDepositRatio = reader.string();
          break;
        case 8:
          message.proposalCancelRatio = reader.string();
          break;
        case 9:
          message.proposalCancelDest = reader.string();
          break;
        case 10:
          message.expeditedVotingPeriod = Duration.decode(
            reader,
            reader.uint32()
          );
          break;
        case 11:
          message.expeditedThreshold = reader.string();
          break;
        case 12:
          message.expeditedMinDeposit.push(
            Coin.decode(reader, reader.uint32())
          );
          break;
        case 13:
          message.burnVoteQuorum = reader.bool();
          break;
        case 14:
          message.burnProposalDepositPrevote = reader.bool();
          break;
        case 15:
          message.burnVoteVeto = reader.bool();
          break;
        case 16:
          message.minDepositRatio = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Params {
    const message = { ...baseParams } as Params;
    message.minDeposit = (object.minDeposit ?? []).map((e: any) =>
      Coin.fromJSON(e)
    );
    message.maxDepositPeriod =
      object.maxDepositPeriod !== undefined && object.maxDepositPeriod !== null
        ? Duration.fromJSON(object.maxDepositPeriod)
        : undefined;
    message.votingPeriod =
      object.votingPeriod !== undefined && object.votingPeriod !== null
        ? Duration.fromJSON(object.votingPeriod)
        : undefined;
    message.quorum =
      object.quorum !== undefined && object.quorum !== null
        ? String(object.quorum)
        : "";
    message.threshold =
      object.threshold !== undefined && object.threshold !== null
        ? String(object.threshold)
        : "";
    message.vetoThreshold =
      object.vetoThreshold !== undefined && object.vetoThreshold !== null
        ? String(object.vetoThreshold)
        : "";
    message.minInitialDepositRatio =
      object.minInitialDepositRatio !== undefined &&
      object.minInitialDepositRatio !== null
        ? String(object.minInitialDepositRatio)
        : "";
    message.proposalCancelRatio =
      object.proposalCancelRatio !== undefined &&
      object.proposalCancelRatio !== null
        ? String(object.proposalCancelRatio)
        : "";
    message.proposalCancelDest =
      object.proposalCancelDest !== undefined &&
      object.proposalCancelDest !== null
        ? String(object.proposalCancelDest)
        : "";
    message.expeditedVotingPeriod =
      object.expeditedVotingPeriod !== undefined &&
      object.expeditedVotingPeriod !== null
        ? Duration.fromJSON(object.expeditedVotingPeriod)
        : undefined;
    message.expeditedThreshold =
      object.expeditedThreshold !== undefined &&
      object.expeditedThreshold !== null
        ? String(object.expeditedThreshold)
        : "";
    message.expeditedMinDeposit = (object.expeditedMinDeposit ?? []).map(
      (e: any) => Coin.fromJSON(e)
    );
    message.burnVoteQuorum =
      object.burnVoteQuorum !== undefined && object.burnVoteQuorum !== null
        ? Boolean(object.burnVoteQuorum)
        : false;
    message.burnProposalDepositPrevote =
      object.burnProposalDepositPrevote !== undefined &&
      object.burnProposalDepositPrevote !== null
        ? Boolean(object.burnProposalDepositPrevote)
        : false;
    message.burnVoteVeto =
      object.burnVoteVeto !== undefined && object.burnVoteVeto !== null
        ? Boolean(object.burnVoteVeto)
        : false;
    message.minDepositRatio =
      object.minDepositRatio !== undefined && object.minDepositRatio !== null
        ? String(object.minDepositRatio)
        : "";
    return message;
  },

  toJSON(message: Params): unknown {
    const obj: any = {};
    if (message.minDeposit) {
      obj.minDeposit = message.minDeposit.map((e) =>
        e ? Coin.toJSON(e) : undefined
      );
    } else {
      obj.minDeposit = [];
    }
    message.maxDepositPeriod !== undefined &&
      (obj.maxDepositPeriod = message.maxDepositPeriod
        ? Duration.toJSON(message.maxDepositPeriod)
        : undefined);
    message.votingPeriod !== undefined &&
      (obj.votingPeriod = message.votingPeriod
        ? Duration.toJSON(message.votingPeriod)
        : undefined);
    message.quorum !== undefined && (obj.quorum = message.quorum);
    message.threshold !== undefined && (obj.threshold = message.threshold);
    message.vetoThreshold !== undefined &&
      (obj.vetoThreshold = message.vetoThreshold);
    message.minInitialDepositRatio !== undefined &&
      (obj.minInitialDepositRatio = message.minInitialDepositRatio);
    message.proposalCancelRatio !== undefined &&
      (obj.proposalCancelRatio = message.proposalCancelRatio);
    message.proposalCancelDest !== undefined &&
      (obj.proposalCancelDest = message.proposalCancelDest);
    message.expeditedVotingPeriod !== undefined &&
      (obj.expeditedVotingPeriod = message.expeditedVotingPeriod
        ? Duration.toJSON(message.expeditedVotingPeriod)
        : undefined);
    message.expeditedThreshold !== undefined &&
      (obj.expeditedThreshold = message.expeditedThreshold);
    if (message.expeditedMinDeposit) {
      obj.expeditedMinDeposit = message.expeditedMinDeposit.map((e) =>
        e ? Coin.toJSON(e) : undefined
      );
    } else {
      obj.expeditedMinDeposit = [];
    }
    message.burnVoteQuorum !== undefined &&
      (obj.burnVoteQuorum = message.burnVoteQuorum);
    message.burnProposalDepositPrevote !== undefined &&
      (obj.burnProposalDepositPrevote = message.burnProposalDepositPrevote);
    message.burnVoteVeto !== undefined &&
      (obj.burnVoteVeto = message.burnVoteVeto);
    message.minDepositRatio !== undefined &&
      (obj.minDepositRatio = message.minDepositRatio);
    return obj;
  },

  fromPartial(object: DeepPartial<Params>): Params {
    const message = { ...baseParams } as Params;
    message.minDeposit = (object.minDeposit ?? []).map((e) =>
      Coin.fromPartial(e)
    );
    message.maxDepositPeriod =
      object.maxDepositPeriod !== undefined && object.maxDepositPeriod !== null
        ? Duration.fromPartial(object.maxDepositPeriod)
        : undefined;
    message.votingPeriod =
      object.votingPeriod !== undefined && object.votingPeriod !== null
        ? Duration.fromPartial(object.votingPeriod)
        : undefined;
    message.quorum = object.quorum ?? "";
    message.threshold = object.threshold ?? "";
    message.vetoThreshold = object.vetoThreshold ?? "";
    message.minInitialDepositRatio = object.minInitialDepositRatio ?? "";
    message.proposalCancelRatio = object.proposalCancelRatio ?? "";
    message.proposalCancelDest = object.proposalCancelDest ?? "";
    message.expeditedVotingPeriod =
      object.expeditedVotingPeriod !== undefined &&
      object.expeditedVotingPeriod !== null
        ? Duration.fromPartial(object.expeditedVotingPeriod)
        : undefined;
    message.expeditedThreshold = object.expeditedThreshold ?? "";
    message.expeditedMinDeposit = (object.expeditedMinDeposit ?? []).map((e) =>
      Coin.fromPartial(e)
    );
    message.burnVoteQuorum = object.burnVoteQuorum ?? false;
    message.burnProposalDepositPrevote =
      object.burnProposalDepositPrevote ?? false;
    message.burnVoteVeto = object.burnVoteVeto ?? false;
    message.minDepositRatio = object.minDepositRatio ?? "";
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

function toTimestamp(date: Date): Timestamp {
  const seconds = numberToLong(date.getTime() / 1_000);
  const nanos = (date.getTime() % 1_000) * 1_000_000;
  return { seconds, nanos };
}

function fromTimestamp(t: Timestamp): Date {
  let millis = t.seconds.toNumber() * 1_000;
  millis += t.nanos / 1_000_000;
  return new Date(millis);
}

function fromJsonTimestamp(o: any): Date {
  if (o instanceof Date) {
    return o;
  } else if (typeof o === "string") {
    return new Date(o);
  } else {
    return fromTimestamp(Timestamp.fromJSON(o));
  }
}

function numberToLong(number: number) {
  return Long.fromNumber(number);
}

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}
