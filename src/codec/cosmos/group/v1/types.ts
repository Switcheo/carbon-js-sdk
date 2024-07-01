/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Duration } from "../../../google/protobuf/duration";
import { Any } from "../../../google/protobuf/any";
import { Timestamp } from "../../../google/protobuf/timestamp";

export const protobufPackage = "cosmos.group.v1";

/** Since: cosmos-sdk 0.46 */

/** VoteOption enumerates the valid vote options for a given proposal. */
export enum VoteOption {
  /**
   * VOTE_OPTION_UNSPECIFIED - VOTE_OPTION_UNSPECIFIED defines an unspecified vote option which will
   * return an error.
   */
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

/** ProposalStatus defines proposal statuses. */
export enum ProposalStatus {
  /** PROPOSAL_STATUS_UNSPECIFIED - An empty value is invalid and not allowed. */
  PROPOSAL_STATUS_UNSPECIFIED = 0,
  /** PROPOSAL_STATUS_SUBMITTED - Initial status of a proposal when submitted. */
  PROPOSAL_STATUS_SUBMITTED = 1,
  /**
   * PROPOSAL_STATUS_ACCEPTED - Final status of a proposal when the final tally is done and the outcome
   * passes the group policy's decision policy.
   */
  PROPOSAL_STATUS_ACCEPTED = 2,
  /**
   * PROPOSAL_STATUS_REJECTED - Final status of a proposal when the final tally is done and the outcome
   * is rejected by the group policy's decision policy.
   */
  PROPOSAL_STATUS_REJECTED = 3,
  /**
   * PROPOSAL_STATUS_ABORTED - Final status of a proposal when the group policy is modified before the
   * final tally.
   */
  PROPOSAL_STATUS_ABORTED = 4,
  /**
   * PROPOSAL_STATUS_WITHDRAWN - A proposal can be withdrawn before the voting start time by the owner.
   * When this happens the final status is Withdrawn.
   */
  PROPOSAL_STATUS_WITHDRAWN = 5,
  UNRECOGNIZED = -1,
}

export function proposalStatusFromJSON(object: any): ProposalStatus {
  switch (object) {
    case 0:
    case "PROPOSAL_STATUS_UNSPECIFIED":
      return ProposalStatus.PROPOSAL_STATUS_UNSPECIFIED;
    case 1:
    case "PROPOSAL_STATUS_SUBMITTED":
      return ProposalStatus.PROPOSAL_STATUS_SUBMITTED;
    case 2:
    case "PROPOSAL_STATUS_ACCEPTED":
      return ProposalStatus.PROPOSAL_STATUS_ACCEPTED;
    case 3:
    case "PROPOSAL_STATUS_REJECTED":
      return ProposalStatus.PROPOSAL_STATUS_REJECTED;
    case 4:
    case "PROPOSAL_STATUS_ABORTED":
      return ProposalStatus.PROPOSAL_STATUS_ABORTED;
    case 5:
    case "PROPOSAL_STATUS_WITHDRAWN":
      return ProposalStatus.PROPOSAL_STATUS_WITHDRAWN;
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
    case ProposalStatus.PROPOSAL_STATUS_SUBMITTED:
      return "PROPOSAL_STATUS_SUBMITTED";
    case ProposalStatus.PROPOSAL_STATUS_ACCEPTED:
      return "PROPOSAL_STATUS_ACCEPTED";
    case ProposalStatus.PROPOSAL_STATUS_REJECTED:
      return "PROPOSAL_STATUS_REJECTED";
    case ProposalStatus.PROPOSAL_STATUS_ABORTED:
      return "PROPOSAL_STATUS_ABORTED";
    case ProposalStatus.PROPOSAL_STATUS_WITHDRAWN:
      return "PROPOSAL_STATUS_WITHDRAWN";
    default:
      return "UNKNOWN";
  }
}

/** ProposalExecutorResult defines types of proposal executor results. */
export enum ProposalExecutorResult {
  /** PROPOSAL_EXECUTOR_RESULT_UNSPECIFIED - An empty value is not allowed. */
  PROPOSAL_EXECUTOR_RESULT_UNSPECIFIED = 0,
  /** PROPOSAL_EXECUTOR_RESULT_NOT_RUN - We have not yet run the executor. */
  PROPOSAL_EXECUTOR_RESULT_NOT_RUN = 1,
  /** PROPOSAL_EXECUTOR_RESULT_SUCCESS - The executor was successful and proposed action updated state. */
  PROPOSAL_EXECUTOR_RESULT_SUCCESS = 2,
  /** PROPOSAL_EXECUTOR_RESULT_FAILURE - The executor returned an error and proposed action didn't update state. */
  PROPOSAL_EXECUTOR_RESULT_FAILURE = 3,
  UNRECOGNIZED = -1,
}

export function proposalExecutorResultFromJSON(
  object: any
): ProposalExecutorResult {
  switch (object) {
    case 0:
    case "PROPOSAL_EXECUTOR_RESULT_UNSPECIFIED":
      return ProposalExecutorResult.PROPOSAL_EXECUTOR_RESULT_UNSPECIFIED;
    case 1:
    case "PROPOSAL_EXECUTOR_RESULT_NOT_RUN":
      return ProposalExecutorResult.PROPOSAL_EXECUTOR_RESULT_NOT_RUN;
    case 2:
    case "PROPOSAL_EXECUTOR_RESULT_SUCCESS":
      return ProposalExecutorResult.PROPOSAL_EXECUTOR_RESULT_SUCCESS;
    case 3:
    case "PROPOSAL_EXECUTOR_RESULT_FAILURE":
      return ProposalExecutorResult.PROPOSAL_EXECUTOR_RESULT_FAILURE;
    case -1:
    case "UNRECOGNIZED":
    default:
      return ProposalExecutorResult.UNRECOGNIZED;
  }
}

export function proposalExecutorResultToJSON(
  object: ProposalExecutorResult
): string {
  switch (object) {
    case ProposalExecutorResult.PROPOSAL_EXECUTOR_RESULT_UNSPECIFIED:
      return "PROPOSAL_EXECUTOR_RESULT_UNSPECIFIED";
    case ProposalExecutorResult.PROPOSAL_EXECUTOR_RESULT_NOT_RUN:
      return "PROPOSAL_EXECUTOR_RESULT_NOT_RUN";
    case ProposalExecutorResult.PROPOSAL_EXECUTOR_RESULT_SUCCESS:
      return "PROPOSAL_EXECUTOR_RESULT_SUCCESS";
    case ProposalExecutorResult.PROPOSAL_EXECUTOR_RESULT_FAILURE:
      return "PROPOSAL_EXECUTOR_RESULT_FAILURE";
    default:
      return "UNKNOWN";
  }
}

/**
 * Member represents a group member with an account address,
 * non-zero weight, metadata and added_at timestamp.
 */
export interface Member {
  /** address is the member's account address. */
  address: string;
  /** weight is the member's voting weight that should be greater than 0. */
  weight: string;
  /** metadata is any arbitrary metadata attached to the member. */
  metadata: string;
  /** added_at is a timestamp specifying when a member was added. */
  addedAt?: Date;
}

/**
 * MemberRequest represents a group member to be used in Msg server requests.
 * Contrary to `Member`, it doesn't have any `added_at` field
 * since this field cannot be set as part of requests.
 */
export interface MemberRequest {
  /** address is the member's account address. */
  address: string;
  /** weight is the member's voting weight that should be greater than 0. */
  weight: string;
  /** metadata is any arbitrary metadata attached to the member. */
  metadata: string;
}

/**
 * ThresholdDecisionPolicy is a decision policy where a proposal passes when it
 * satisfies the two following conditions:
 * 1. The sum of all `YES` voter's weights is greater or equal than the defined
 *    `threshold`.
 * 2. The voting and execution periods of the proposal respect the parameters
 *    given by `windows`.
 */
export interface ThresholdDecisionPolicy {
  /**
   * threshold is the minimum weighted sum of `YES` votes that must be met or
   * exceeded for a proposal to succeed.
   */
  threshold: string;
  /** windows defines the different windows for voting and execution. */
  windows?: DecisionPolicyWindows;
}

/**
 * PercentageDecisionPolicy is a decision policy where a proposal passes when
 * it satisfies the two following conditions:
 * 1. The percentage of all `YES` voters' weights out of the total group weight
 *    is greater or equal than the given `percentage`.
 * 2. The voting and execution periods of the proposal respect the parameters
 *    given by `windows`.
 */
export interface PercentageDecisionPolicy {
  /**
   * percentage is the minimum percentage of the weighted sum of `YES` votes must
   * meet for a proposal to succeed.
   */
  percentage: string;
  /** windows defines the different windows for voting and execution. */
  windows?: DecisionPolicyWindows;
}

/** DecisionPolicyWindows defines the different windows for voting and execution. */
export interface DecisionPolicyWindows {
  /**
   * voting_period is the duration from submission of a proposal to the end of voting period
   * Within this times votes can be submitted with MsgVote.
   */
  votingPeriod?: Duration;
  /**
   * min_execution_period is the minimum duration after the proposal submission
   * where members can start sending MsgExec. This means that the window for
   * sending a MsgExec transaction is:
   * `[ submission + min_execution_period ; submission + voting_period + max_execution_period]`
   * where max_execution_period is a app-specific config, defined in the keeper.
   * If not set, min_execution_period will default to 0.
   *
   * Please make sure to set a `min_execution_period` that is smaller than
   * `voting_period + max_execution_period`, or else the above execution window
   * is empty, meaning that all proposals created with this decision policy
   * won't be able to be executed.
   */
  minExecutionPeriod?: Duration;
}

/** GroupInfo represents the high-level on-chain information for a group. */
export interface GroupInfo {
  /** id is the unique ID of the group. */
  id: Long;
  /** admin is the account address of the group's admin. */
  admin: string;
  /**
   * metadata is any arbitrary metadata to attached to the group.
   * the recommended format of the metadata is to be found here: https://docs.cosmos.network/v0.47/modules/group#group-1
   */
  metadata: string;
  /**
   * version is used to track changes to a group's membership structure that
   * would break existing proposals. Whenever any members weight is changed,
   * or any member is added or removed this version is incremented and will
   * cause proposals based on older versions of this group to fail
   */
  version: Long;
  /** total_weight is the sum of the group members' weights. */
  totalWeight: string;
  /** created_at is a timestamp specifying when a group was created. */
  createdAt?: Date;
}

/** GroupMember represents the relationship between a group and a member. */
export interface GroupMember {
  /** group_id is the unique ID of the group. */
  groupId: Long;
  /** member is the member data. */
  member?: Member;
}

/** GroupPolicyInfo represents the high-level on-chain information for a group policy. */
export interface GroupPolicyInfo {
  /** address is the account address of group policy. */
  address: string;
  /** group_id is the unique ID of the group. */
  groupId: Long;
  /** admin is the account address of the group admin. */
  admin: string;
  /**
   * metadata is any arbitrary metadata attached to the group policy.
   * the recommended format of the metadata is to be found here:
   * https://docs.cosmos.network/v0.47/modules/group#decision-policy-1
   */
  metadata: string;
  /**
   * version is used to track changes to a group's GroupPolicyInfo structure that
   * would create a different result on a running proposal.
   */
  version: Long;
  /** decision_policy specifies the group policy's decision policy. */
  decisionPolicy?: Any;
  /** created_at is a timestamp specifying when a group policy was created. */
  createdAt?: Date;
}

/**
 * Proposal defines a group proposal. Any member of a group can submit a proposal
 * for a group policy to decide upon.
 * A proposal consists of a set of `sdk.Msg`s that will be executed if the proposal
 * passes as well as some optional metadata associated with the proposal.
 */
export interface Proposal {
  /** id is the unique id of the proposal. */
  id: Long;
  /** group_policy_address is the account address of group policy. */
  groupPolicyAddress: string;
  /**
   * metadata is any arbitrary metadata attached to the proposal.
   * the recommended format of the metadata is to be found here:
   * https://docs.cosmos.network/v0.47/modules/group#proposal-4
   */
  metadata: string;
  /** proposers are the account addresses of the proposers. */
  proposers: string[];
  /** submit_time is a timestamp specifying when a proposal was submitted. */
  submitTime?: Date;
  /**
   * group_version tracks the version of the group at proposal submission.
   * This field is here for informational purposes only.
   */
  groupVersion: Long;
  /**
   * group_policy_version tracks the version of the group policy at proposal submission.
   * When a decision policy is changed, existing proposals from previous policy
   * versions will become invalid with the `ABORTED` status.
   * This field is here for informational purposes only.
   */
  groupPolicyVersion: Long;
  /** status represents the high level position in the life cycle of the proposal. Initial value is Submitted. */
  status: ProposalStatus;
  /**
   * final_tally_result contains the sums of all weighted votes for this
   * proposal for each vote option. It is empty at submission, and only
   * populated after tallying, at voting period end or at proposal execution,
   * whichever happens first.
   */
  finalTallyResult?: TallyResult;
  /**
   * voting_period_end is the timestamp before which voting must be done.
   * Unless a successful MsgExec is called before (to execute a proposal whose
   * tally is successful before the voting period ends), tallying will be done
   * at this point, and the `final_tally_result`and `status` fields will be
   * accordingly updated.
   */
  votingPeriodEnd?: Date;
  /** executor_result is the final result of the proposal execution. Initial value is NotRun. */
  executorResult: ProposalExecutorResult;
  /** messages is a list of `sdk.Msg`s that will be executed if the proposal passes. */
  messages: Any[];
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
}

/** TallyResult represents the sum of weighted votes for each vote option. */
export interface TallyResult {
  /** yes_count is the weighted sum of yes votes. */
  yesCount: string;
  /** abstain_count is the weighted sum of abstainers. */
  abstainCount: string;
  /** no_count is the weighted sum of no votes. */
  noCount: string;
  /** no_with_veto_count is the weighted sum of veto. */
  noWithVetoCount: string;
}

/** Vote represents a vote for a proposal.string metadata */
export interface Vote {
  /** proposal is the unique ID of the proposal. */
  proposalId: Long;
  /** voter is the account address of the voter. */
  voter: string;
  /** option is the voter's choice on the proposal. */
  option: VoteOption;
  /**
   * metadata is any arbitrary metadata attached to the vote.
   * the recommended format of the metadata is to be found here: https://docs.cosmos.network/v0.47/modules/group#vote-2
   */
  metadata: string;
  /** submit_time is the timestamp when the vote was submitted. */
  submitTime?: Date;
}

const baseMember: object = { address: "", weight: "", metadata: "" };

export const Member = {
  encode(
    message: Member,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.weight !== "") {
      writer.uint32(18).string(message.weight);
    }
    if (message.metadata !== "") {
      writer.uint32(26).string(message.metadata);
    }
    if (message.addedAt !== undefined) {
      Timestamp.encode(
        toTimestamp(message.addedAt),
        writer.uint32(34).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Member {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMember } as Member;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.weight = reader.string();
          break;
        case 3:
          message.metadata = reader.string();
          break;
        case 4:
          message.addedAt = fromTimestamp(
            Timestamp.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Member {
    const message = { ...baseMember } as Member;
    message.address =
      object.address !== undefined && object.address !== null
        ? String(object.address)
        : "";
    message.weight =
      object.weight !== undefined && object.weight !== null
        ? String(object.weight)
        : "";
    message.metadata =
      object.metadata !== undefined && object.metadata !== null
        ? String(object.metadata)
        : "";
    message.addedAt =
      object.addedAt !== undefined && object.addedAt !== null
        ? fromJsonTimestamp(object.addedAt)
        : undefined;
    return message;
  },

  toJSON(message: Member): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    message.weight !== undefined && (obj.weight = message.weight);
    message.metadata !== undefined && (obj.metadata = message.metadata);
    message.addedAt !== undefined &&
      (obj.addedAt = message.addedAt.toISOString());
    return obj;
  },

  fromPartial(object: DeepPartial<Member>): Member {
    const message = { ...baseMember } as Member;
    message.address = object.address ?? "";
    message.weight = object.weight ?? "";
    message.metadata = object.metadata ?? "";
    message.addedAt = object.addedAt ?? undefined;
    return message;
  },
};

const baseMemberRequest: object = { address: "", weight: "", metadata: "" };

export const MemberRequest = {
  encode(
    message: MemberRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.weight !== "") {
      writer.uint32(18).string(message.weight);
    }
    if (message.metadata !== "") {
      writer.uint32(26).string(message.metadata);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MemberRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMemberRequest } as MemberRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.weight = reader.string();
          break;
        case 3:
          message.metadata = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MemberRequest {
    const message = { ...baseMemberRequest } as MemberRequest;
    message.address =
      object.address !== undefined && object.address !== null
        ? String(object.address)
        : "";
    message.weight =
      object.weight !== undefined && object.weight !== null
        ? String(object.weight)
        : "";
    message.metadata =
      object.metadata !== undefined && object.metadata !== null
        ? String(object.metadata)
        : "";
    return message;
  },

  toJSON(message: MemberRequest): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    message.weight !== undefined && (obj.weight = message.weight);
    message.metadata !== undefined && (obj.metadata = message.metadata);
    return obj;
  },

  fromPartial(object: DeepPartial<MemberRequest>): MemberRequest {
    const message = { ...baseMemberRequest } as MemberRequest;
    message.address = object.address ?? "";
    message.weight = object.weight ?? "";
    message.metadata = object.metadata ?? "";
    return message;
  },
};

const baseThresholdDecisionPolicy: object = { threshold: "" };

export const ThresholdDecisionPolicy = {
  encode(
    message: ThresholdDecisionPolicy,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.threshold !== "") {
      writer.uint32(10).string(message.threshold);
    }
    if (message.windows !== undefined) {
      DecisionPolicyWindows.encode(
        message.windows,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): ThresholdDecisionPolicy {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseThresholdDecisionPolicy,
    } as ThresholdDecisionPolicy;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.threshold = reader.string();
          break;
        case 2:
          message.windows = DecisionPolicyWindows.decode(
            reader,
            reader.uint32()
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ThresholdDecisionPolicy {
    const message = {
      ...baseThresholdDecisionPolicy,
    } as ThresholdDecisionPolicy;
    message.threshold =
      object.threshold !== undefined && object.threshold !== null
        ? String(object.threshold)
        : "";
    message.windows =
      object.windows !== undefined && object.windows !== null
        ? DecisionPolicyWindows.fromJSON(object.windows)
        : undefined;
    return message;
  },

  toJSON(message: ThresholdDecisionPolicy): unknown {
    const obj: any = {};
    message.threshold !== undefined && (obj.threshold = message.threshold);
    message.windows !== undefined &&
      (obj.windows = message.windows
        ? DecisionPolicyWindows.toJSON(message.windows)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<ThresholdDecisionPolicy>
  ): ThresholdDecisionPolicy {
    const message = {
      ...baseThresholdDecisionPolicy,
    } as ThresholdDecisionPolicy;
    message.threshold = object.threshold ?? "";
    message.windows =
      object.windows !== undefined && object.windows !== null
        ? DecisionPolicyWindows.fromPartial(object.windows)
        : undefined;
    return message;
  },
};

const basePercentageDecisionPolicy: object = { percentage: "" };

export const PercentageDecisionPolicy = {
  encode(
    message: PercentageDecisionPolicy,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.percentage !== "") {
      writer.uint32(10).string(message.percentage);
    }
    if (message.windows !== undefined) {
      DecisionPolicyWindows.encode(
        message.windows,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): PercentageDecisionPolicy {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...basePercentageDecisionPolicy,
    } as PercentageDecisionPolicy;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.percentage = reader.string();
          break;
        case 2:
          message.windows = DecisionPolicyWindows.decode(
            reader,
            reader.uint32()
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): PercentageDecisionPolicy {
    const message = {
      ...basePercentageDecisionPolicy,
    } as PercentageDecisionPolicy;
    message.percentage =
      object.percentage !== undefined && object.percentage !== null
        ? String(object.percentage)
        : "";
    message.windows =
      object.windows !== undefined && object.windows !== null
        ? DecisionPolicyWindows.fromJSON(object.windows)
        : undefined;
    return message;
  },

  toJSON(message: PercentageDecisionPolicy): unknown {
    const obj: any = {};
    message.percentage !== undefined && (obj.percentage = message.percentage);
    message.windows !== undefined &&
      (obj.windows = message.windows
        ? DecisionPolicyWindows.toJSON(message.windows)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<PercentageDecisionPolicy>
  ): PercentageDecisionPolicy {
    const message = {
      ...basePercentageDecisionPolicy,
    } as PercentageDecisionPolicy;
    message.percentage = object.percentage ?? "";
    message.windows =
      object.windows !== undefined && object.windows !== null
        ? DecisionPolicyWindows.fromPartial(object.windows)
        : undefined;
    return message;
  },
};

const baseDecisionPolicyWindows: object = {};

export const DecisionPolicyWindows = {
  encode(
    message: DecisionPolicyWindows,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.votingPeriod !== undefined) {
      Duration.encode(message.votingPeriod, writer.uint32(10).fork()).ldelim();
    }
    if (message.minExecutionPeriod !== undefined) {
      Duration.encode(
        message.minExecutionPeriod,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): DecisionPolicyWindows {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseDecisionPolicyWindows } as DecisionPolicyWindows;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.votingPeriod = Duration.decode(reader, reader.uint32());
          break;
        case 2:
          message.minExecutionPeriod = Duration.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): DecisionPolicyWindows {
    const message = { ...baseDecisionPolicyWindows } as DecisionPolicyWindows;
    message.votingPeriod =
      object.votingPeriod !== undefined && object.votingPeriod !== null
        ? Duration.fromJSON(object.votingPeriod)
        : undefined;
    message.minExecutionPeriod =
      object.minExecutionPeriod !== undefined &&
      object.minExecutionPeriod !== null
        ? Duration.fromJSON(object.minExecutionPeriod)
        : undefined;
    return message;
  },

  toJSON(message: DecisionPolicyWindows): unknown {
    const obj: any = {};
    message.votingPeriod !== undefined &&
      (obj.votingPeriod = message.votingPeriod
        ? Duration.toJSON(message.votingPeriod)
        : undefined);
    message.minExecutionPeriod !== undefined &&
      (obj.minExecutionPeriod = message.minExecutionPeriod
        ? Duration.toJSON(message.minExecutionPeriod)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<DecisionPolicyWindows>
  ): DecisionPolicyWindows {
    const message = { ...baseDecisionPolicyWindows } as DecisionPolicyWindows;
    message.votingPeriod =
      object.votingPeriod !== undefined && object.votingPeriod !== null
        ? Duration.fromPartial(object.votingPeriod)
        : undefined;
    message.minExecutionPeriod =
      object.minExecutionPeriod !== undefined &&
      object.minExecutionPeriod !== null
        ? Duration.fromPartial(object.minExecutionPeriod)
        : undefined;
    return message;
  },
};

const baseGroupInfo: object = {
  id: Long.UZERO,
  admin: "",
  metadata: "",
  version: Long.UZERO,
  totalWeight: "",
};

export const GroupInfo = {
  encode(
    message: GroupInfo,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (!message.id.isZero()) {
      writer.uint32(8).uint64(message.id);
    }
    if (message.admin !== "") {
      writer.uint32(18).string(message.admin);
    }
    if (message.metadata !== "") {
      writer.uint32(26).string(message.metadata);
    }
    if (!message.version.isZero()) {
      writer.uint32(32).uint64(message.version);
    }
    if (message.totalWeight !== "") {
      writer.uint32(42).string(message.totalWeight);
    }
    if (message.createdAt !== undefined) {
      Timestamp.encode(
        toTimestamp(message.createdAt),
        writer.uint32(50).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GroupInfo {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseGroupInfo } as GroupInfo;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.uint64() as Long;
          break;
        case 2:
          message.admin = reader.string();
          break;
        case 3:
          message.metadata = reader.string();
          break;
        case 4:
          message.version = reader.uint64() as Long;
          break;
        case 5:
          message.totalWeight = reader.string();
          break;
        case 6:
          message.createdAt = fromTimestamp(
            Timestamp.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GroupInfo {
    const message = { ...baseGroupInfo } as GroupInfo;
    message.id =
      object.id !== undefined && object.id !== null
        ? Long.fromString(object.id)
        : Long.UZERO;
    message.admin =
      object.admin !== undefined && object.admin !== null
        ? String(object.admin)
        : "";
    message.metadata =
      object.metadata !== undefined && object.metadata !== null
        ? String(object.metadata)
        : "";
    message.version =
      object.version !== undefined && object.version !== null
        ? Long.fromString(object.version)
        : Long.UZERO;
    message.totalWeight =
      object.totalWeight !== undefined && object.totalWeight !== null
        ? String(object.totalWeight)
        : "";
    message.createdAt =
      object.createdAt !== undefined && object.createdAt !== null
        ? fromJsonTimestamp(object.createdAt)
        : undefined;
    return message;
  },

  toJSON(message: GroupInfo): unknown {
    const obj: any = {};
    message.id !== undefined &&
      (obj.id = (message.id || Long.UZERO).toString());
    message.admin !== undefined && (obj.admin = message.admin);
    message.metadata !== undefined && (obj.metadata = message.metadata);
    message.version !== undefined &&
      (obj.version = (message.version || Long.UZERO).toString());
    message.totalWeight !== undefined &&
      (obj.totalWeight = message.totalWeight);
    message.createdAt !== undefined &&
      (obj.createdAt = message.createdAt.toISOString());
    return obj;
  },

  fromPartial(object: DeepPartial<GroupInfo>): GroupInfo {
    const message = { ...baseGroupInfo } as GroupInfo;
    message.id =
      object.id !== undefined && object.id !== null
        ? Long.fromValue(object.id)
        : Long.UZERO;
    message.admin = object.admin ?? "";
    message.metadata = object.metadata ?? "";
    message.version =
      object.version !== undefined && object.version !== null
        ? Long.fromValue(object.version)
        : Long.UZERO;
    message.totalWeight = object.totalWeight ?? "";
    message.createdAt = object.createdAt ?? undefined;
    return message;
  },
};

const baseGroupMember: object = { groupId: Long.UZERO };

export const GroupMember = {
  encode(
    message: GroupMember,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (!message.groupId.isZero()) {
      writer.uint32(8).uint64(message.groupId);
    }
    if (message.member !== undefined) {
      Member.encode(message.member, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GroupMember {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseGroupMember } as GroupMember;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.groupId = reader.uint64() as Long;
          break;
        case 2:
          message.member = Member.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GroupMember {
    const message = { ...baseGroupMember } as GroupMember;
    message.groupId =
      object.groupId !== undefined && object.groupId !== null
        ? Long.fromString(object.groupId)
        : Long.UZERO;
    message.member =
      object.member !== undefined && object.member !== null
        ? Member.fromJSON(object.member)
        : undefined;
    return message;
  },

  toJSON(message: GroupMember): unknown {
    const obj: any = {};
    message.groupId !== undefined &&
      (obj.groupId = (message.groupId || Long.UZERO).toString());
    message.member !== undefined &&
      (obj.member = message.member ? Member.toJSON(message.member) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<GroupMember>): GroupMember {
    const message = { ...baseGroupMember } as GroupMember;
    message.groupId =
      object.groupId !== undefined && object.groupId !== null
        ? Long.fromValue(object.groupId)
        : Long.UZERO;
    message.member =
      object.member !== undefined && object.member !== null
        ? Member.fromPartial(object.member)
        : undefined;
    return message;
  },
};

const baseGroupPolicyInfo: object = {
  address: "",
  groupId: Long.UZERO,
  admin: "",
  metadata: "",
  version: Long.UZERO,
};

export const GroupPolicyInfo = {
  encode(
    message: GroupPolicyInfo,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (!message.groupId.isZero()) {
      writer.uint32(16).uint64(message.groupId);
    }
    if (message.admin !== "") {
      writer.uint32(26).string(message.admin);
    }
    if (message.metadata !== "") {
      writer.uint32(34).string(message.metadata);
    }
    if (!message.version.isZero()) {
      writer.uint32(40).uint64(message.version);
    }
    if (message.decisionPolicy !== undefined) {
      Any.encode(message.decisionPolicy, writer.uint32(50).fork()).ldelim();
    }
    if (message.createdAt !== undefined) {
      Timestamp.encode(
        toTimestamp(message.createdAt),
        writer.uint32(58).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GroupPolicyInfo {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseGroupPolicyInfo } as GroupPolicyInfo;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.groupId = reader.uint64() as Long;
          break;
        case 3:
          message.admin = reader.string();
          break;
        case 4:
          message.metadata = reader.string();
          break;
        case 5:
          message.version = reader.uint64() as Long;
          break;
        case 6:
          message.decisionPolicy = Any.decode(reader, reader.uint32());
          break;
        case 7:
          message.createdAt = fromTimestamp(
            Timestamp.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GroupPolicyInfo {
    const message = { ...baseGroupPolicyInfo } as GroupPolicyInfo;
    message.address =
      object.address !== undefined && object.address !== null
        ? String(object.address)
        : "";
    message.groupId =
      object.groupId !== undefined && object.groupId !== null
        ? Long.fromString(object.groupId)
        : Long.UZERO;
    message.admin =
      object.admin !== undefined && object.admin !== null
        ? String(object.admin)
        : "";
    message.metadata =
      object.metadata !== undefined && object.metadata !== null
        ? String(object.metadata)
        : "";
    message.version =
      object.version !== undefined && object.version !== null
        ? Long.fromString(object.version)
        : Long.UZERO;
    message.decisionPolicy =
      object.decisionPolicy !== undefined && object.decisionPolicy !== null
        ? Any.fromJSON(object.decisionPolicy)
        : undefined;
    message.createdAt =
      object.createdAt !== undefined && object.createdAt !== null
        ? fromJsonTimestamp(object.createdAt)
        : undefined;
    return message;
  },

  toJSON(message: GroupPolicyInfo): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    message.groupId !== undefined &&
      (obj.groupId = (message.groupId || Long.UZERO).toString());
    message.admin !== undefined && (obj.admin = message.admin);
    message.metadata !== undefined && (obj.metadata = message.metadata);
    message.version !== undefined &&
      (obj.version = (message.version || Long.UZERO).toString());
    message.decisionPolicy !== undefined &&
      (obj.decisionPolicy = message.decisionPolicy
        ? Any.toJSON(message.decisionPolicy)
        : undefined);
    message.createdAt !== undefined &&
      (obj.createdAt = message.createdAt.toISOString());
    return obj;
  },

  fromPartial(object: DeepPartial<GroupPolicyInfo>): GroupPolicyInfo {
    const message = { ...baseGroupPolicyInfo } as GroupPolicyInfo;
    message.address = object.address ?? "";
    message.groupId =
      object.groupId !== undefined && object.groupId !== null
        ? Long.fromValue(object.groupId)
        : Long.UZERO;
    message.admin = object.admin ?? "";
    message.metadata = object.metadata ?? "";
    message.version =
      object.version !== undefined && object.version !== null
        ? Long.fromValue(object.version)
        : Long.UZERO;
    message.decisionPolicy =
      object.decisionPolicy !== undefined && object.decisionPolicy !== null
        ? Any.fromPartial(object.decisionPolicy)
        : undefined;
    message.createdAt = object.createdAt ?? undefined;
    return message;
  },
};

const baseProposal: object = {
  id: Long.UZERO,
  groupPolicyAddress: "",
  metadata: "",
  proposers: "",
  groupVersion: Long.UZERO,
  groupPolicyVersion: Long.UZERO,
  status: 0,
  executorResult: 0,
  title: "",
  summary: "",
};

export const Proposal = {
  encode(
    message: Proposal,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (!message.id.isZero()) {
      writer.uint32(8).uint64(message.id);
    }
    if (message.groupPolicyAddress !== "") {
      writer.uint32(18).string(message.groupPolicyAddress);
    }
    if (message.metadata !== "") {
      writer.uint32(26).string(message.metadata);
    }
    for (const v of message.proposers) {
      writer.uint32(34).string(v!);
    }
    if (message.submitTime !== undefined) {
      Timestamp.encode(
        toTimestamp(message.submitTime),
        writer.uint32(42).fork()
      ).ldelim();
    }
    if (!message.groupVersion.isZero()) {
      writer.uint32(48).uint64(message.groupVersion);
    }
    if (!message.groupPolicyVersion.isZero()) {
      writer.uint32(56).uint64(message.groupPolicyVersion);
    }
    if (message.status !== 0) {
      writer.uint32(64).int32(message.status);
    }
    if (message.finalTallyResult !== undefined) {
      TallyResult.encode(
        message.finalTallyResult,
        writer.uint32(74).fork()
      ).ldelim();
    }
    if (message.votingPeriodEnd !== undefined) {
      Timestamp.encode(
        toTimestamp(message.votingPeriodEnd),
        writer.uint32(82).fork()
      ).ldelim();
    }
    if (message.executorResult !== 0) {
      writer.uint32(88).int32(message.executorResult);
    }
    for (const v of message.messages) {
      Any.encode(v!, writer.uint32(98).fork()).ldelim();
    }
    if (message.title !== "") {
      writer.uint32(106).string(message.title);
    }
    if (message.summary !== "") {
      writer.uint32(114).string(message.summary);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Proposal {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseProposal } as Proposal;
    message.proposers = [];
    message.messages = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.uint64() as Long;
          break;
        case 2:
          message.groupPolicyAddress = reader.string();
          break;
        case 3:
          message.metadata = reader.string();
          break;
        case 4:
          message.proposers.push(reader.string());
          break;
        case 5:
          message.submitTime = fromTimestamp(
            Timestamp.decode(reader, reader.uint32())
          );
          break;
        case 6:
          message.groupVersion = reader.uint64() as Long;
          break;
        case 7:
          message.groupPolicyVersion = reader.uint64() as Long;
          break;
        case 8:
          message.status = reader.int32() as any;
          break;
        case 9:
          message.finalTallyResult = TallyResult.decode(
            reader,
            reader.uint32()
          );
          break;
        case 10:
          message.votingPeriodEnd = fromTimestamp(
            Timestamp.decode(reader, reader.uint32())
          );
          break;
        case 11:
          message.executorResult = reader.int32() as any;
          break;
        case 12:
          message.messages.push(Any.decode(reader, reader.uint32()));
          break;
        case 13:
          message.title = reader.string();
          break;
        case 14:
          message.summary = reader.string();
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
    message.groupPolicyAddress =
      object.groupPolicyAddress !== undefined &&
      object.groupPolicyAddress !== null
        ? String(object.groupPolicyAddress)
        : "";
    message.metadata =
      object.metadata !== undefined && object.metadata !== null
        ? String(object.metadata)
        : "";
    message.proposers = (object.proposers ?? []).map((e: any) => String(e));
    message.submitTime =
      object.submitTime !== undefined && object.submitTime !== null
        ? fromJsonTimestamp(object.submitTime)
        : undefined;
    message.groupVersion =
      object.groupVersion !== undefined && object.groupVersion !== null
        ? Long.fromString(object.groupVersion)
        : Long.UZERO;
    message.groupPolicyVersion =
      object.groupPolicyVersion !== undefined &&
      object.groupPolicyVersion !== null
        ? Long.fromString(object.groupPolicyVersion)
        : Long.UZERO;
    message.status =
      object.status !== undefined && object.status !== null
        ? proposalStatusFromJSON(object.status)
        : 0;
    message.finalTallyResult =
      object.finalTallyResult !== undefined && object.finalTallyResult !== null
        ? TallyResult.fromJSON(object.finalTallyResult)
        : undefined;
    message.votingPeriodEnd =
      object.votingPeriodEnd !== undefined && object.votingPeriodEnd !== null
        ? fromJsonTimestamp(object.votingPeriodEnd)
        : undefined;
    message.executorResult =
      object.executorResult !== undefined && object.executorResult !== null
        ? proposalExecutorResultFromJSON(object.executorResult)
        : 0;
    message.messages = (object.messages ?? []).map((e: any) => Any.fromJSON(e));
    message.title =
      object.title !== undefined && object.title !== null
        ? String(object.title)
        : "";
    message.summary =
      object.summary !== undefined && object.summary !== null
        ? String(object.summary)
        : "";
    return message;
  },

  toJSON(message: Proposal): unknown {
    const obj: any = {};
    message.id !== undefined &&
      (obj.id = (message.id || Long.UZERO).toString());
    message.groupPolicyAddress !== undefined &&
      (obj.groupPolicyAddress = message.groupPolicyAddress);
    message.metadata !== undefined && (obj.metadata = message.metadata);
    if (message.proposers) {
      obj.proposers = message.proposers.map((e) => e);
    } else {
      obj.proposers = [];
    }
    message.submitTime !== undefined &&
      (obj.submitTime = message.submitTime.toISOString());
    message.groupVersion !== undefined &&
      (obj.groupVersion = (message.groupVersion || Long.UZERO).toString());
    message.groupPolicyVersion !== undefined &&
      (obj.groupPolicyVersion = (
        message.groupPolicyVersion || Long.UZERO
      ).toString());
    message.status !== undefined &&
      (obj.status = proposalStatusToJSON(message.status));
    message.finalTallyResult !== undefined &&
      (obj.finalTallyResult = message.finalTallyResult
        ? TallyResult.toJSON(message.finalTallyResult)
        : undefined);
    message.votingPeriodEnd !== undefined &&
      (obj.votingPeriodEnd = message.votingPeriodEnd.toISOString());
    message.executorResult !== undefined &&
      (obj.executorResult = proposalExecutorResultToJSON(
        message.executorResult
      ));
    if (message.messages) {
      obj.messages = message.messages.map((e) =>
        e ? Any.toJSON(e) : undefined
      );
    } else {
      obj.messages = [];
    }
    message.title !== undefined && (obj.title = message.title);
    message.summary !== undefined && (obj.summary = message.summary);
    return obj;
  },

  fromPartial(object: DeepPartial<Proposal>): Proposal {
    const message = { ...baseProposal } as Proposal;
    message.id =
      object.id !== undefined && object.id !== null
        ? Long.fromValue(object.id)
        : Long.UZERO;
    message.groupPolicyAddress = object.groupPolicyAddress ?? "";
    message.metadata = object.metadata ?? "";
    message.proposers = (object.proposers ?? []).map((e) => e);
    message.submitTime = object.submitTime ?? undefined;
    message.groupVersion =
      object.groupVersion !== undefined && object.groupVersion !== null
        ? Long.fromValue(object.groupVersion)
        : Long.UZERO;
    message.groupPolicyVersion =
      object.groupPolicyVersion !== undefined &&
      object.groupPolicyVersion !== null
        ? Long.fromValue(object.groupPolicyVersion)
        : Long.UZERO;
    message.status = object.status ?? 0;
    message.finalTallyResult =
      object.finalTallyResult !== undefined && object.finalTallyResult !== null
        ? TallyResult.fromPartial(object.finalTallyResult)
        : undefined;
    message.votingPeriodEnd = object.votingPeriodEnd ?? undefined;
    message.executorResult = object.executorResult ?? 0;
    message.messages = (object.messages ?? []).map((e) => Any.fromPartial(e));
    message.title = object.title ?? "";
    message.summary = object.summary ?? "";
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

const baseVote: object = {
  proposalId: Long.UZERO,
  voter: "",
  option: 0,
  metadata: "",
};

export const Vote = {
  encode(message: Vote, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.proposalId.isZero()) {
      writer.uint32(8).uint64(message.proposalId);
    }
    if (message.voter !== "") {
      writer.uint32(18).string(message.voter);
    }
    if (message.option !== 0) {
      writer.uint32(24).int32(message.option);
    }
    if (message.metadata !== "") {
      writer.uint32(34).string(message.metadata);
    }
    if (message.submitTime !== undefined) {
      Timestamp.encode(
        toTimestamp(message.submitTime),
        writer.uint32(42).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Vote {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseVote } as Vote;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.proposalId = reader.uint64() as Long;
          break;
        case 2:
          message.voter = reader.string();
          break;
        case 3:
          message.option = reader.int32() as any;
          break;
        case 4:
          message.metadata = reader.string();
          break;
        case 5:
          message.submitTime = fromTimestamp(
            Timestamp.decode(reader, reader.uint32())
          );
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
    message.option =
      object.option !== undefined && object.option !== null
        ? voteOptionFromJSON(object.option)
        : 0;
    message.metadata =
      object.metadata !== undefined && object.metadata !== null
        ? String(object.metadata)
        : "";
    message.submitTime =
      object.submitTime !== undefined && object.submitTime !== null
        ? fromJsonTimestamp(object.submitTime)
        : undefined;
    return message;
  },

  toJSON(message: Vote): unknown {
    const obj: any = {};
    message.proposalId !== undefined &&
      (obj.proposalId = (message.proposalId || Long.UZERO).toString());
    message.voter !== undefined && (obj.voter = message.voter);
    message.option !== undefined &&
      (obj.option = voteOptionToJSON(message.option));
    message.metadata !== undefined && (obj.metadata = message.metadata);
    message.submitTime !== undefined &&
      (obj.submitTime = message.submitTime.toISOString());
    return obj;
  },

  fromPartial(object: DeepPartial<Vote>): Vote {
    const message = { ...baseVote } as Vote;
    message.proposalId =
      object.proposalId !== undefined && object.proposalId !== null
        ? Long.fromValue(object.proposalId)
        : Long.UZERO;
    message.voter = object.voter ?? "";
    message.option = object.option ?? 0;
    message.metadata = object.metadata ?? "";
    message.submitTime = object.submitTime ?? undefined;
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
