import { MsgSubmitProposal } from "@carbon-sdk/codec/cosmos/gov/v1beta1/tx";
import {
  ChangeNumQuotesProposal, ChangeSwapFeeProposal, CreateMarketProposal, CreateOracleProposal,
  CreateTokenProposal, LinkPoolProposal, ProposalTypes, SetCommitmentCurveProposal, 
  SetMsgFeeProposal, SetRewardCurveProposal, SetRewardsWeightsProposal, UnlinkPoolProposal,
  SettlementPriceProposal, UpdateMarketProposal,
} from "@carbon-sdk/codec";
import { CarbonTx, GovUtils, TypeUtils } from "@carbon-sdk/util";
import { AminoConverter } from "@cosmjs/stargate";
import {
  AminoInit, ConvertEncType, AminoProcess, AminoValueMap,
  generateAminoType, mapEachIndiv,
} from "../utils";

const TxTypes: TypeUtils.SimpleMap<string> = {
  SubmitProposal: "cosmos-sdk/MsgSubmitProposal",
  Deposit: "cosmos-sdk/MsgDeposit",
  Vote: "cosmos-sdk/MsgVote",
};

const ContentTypes: TypeUtils.SimpleMap<string> = {
  [ProposalTypes.CreateToken]: "coin/CreateTokenProposal",
  [ProposalTypes.SetMsgFee]: "fee/SetMsgFeeProposal",
  [ProposalTypes.SetCommitmentCurve]: 'liquiditypool/SetCommitmentCurveProposal',
  [ProposalTypes.ChangeNumQuotes]: 'liquiditypool/ChangeNumQuotesProposal',
  [ProposalTypes.SetRewardCurve]: 'liquiditypool/SetRewardCurveProposal',
  [ProposalTypes.SetRewardsWeights]: 'liquiditypool/SetRewardsWeightsProposal',
  [ProposalTypes.ChangeSwapFee]: "liquiditypool/ChangeSwapFeeProposal",
  [ProposalTypes.LinkPool]: "liquiditypool/LinkPoolProposal",
  [ProposalTypes.UnlinkPool]: "liquiditypool/UnlinkPoolProposal",
  [ProposalTypes.CreateMarket]: "market/CreateMarketProposal",
  [ProposalTypes.UpdateMarket]: "market/UpdateMarketProposal",
  [ProposalTypes.CreateOracle]: "oracle/CreateOracleProposal",
  [ProposalTypes.SettlementPrice]: "pricing/SettlementPriceProposal",
};

const SubmitProposalMsg: AminoInit = {
  aminoType: TxTypes.SubmitProposal,
  valueMap: {},
};

const MsgDeposit: AminoInit = {
  aminoType: TxTypes.Deposit,
  valueMap: {
    proposalId: ConvertEncType.Long,
  },
};

const MsgVote: AminoInit = {
  aminoType: TxTypes.Vote,
  valueMap: {
    proposalId: ConvertEncType.Long,
    option: ConvertEncType.NumToStr,
  },
};

const CreateMarket: AminoValueMap = {
  value: {
    msg: {
      basePrecision: ConvertEncType.Long,
      quotePrecision: ConvertEncType.Long,
      tickSize: ConvertEncType.Dec,
      makerFee: ConvertEncType.Dec,
      takerFee: ConvertEncType.Dec,
      createdBlockHeight: ConvertEncType.Long,
      initialMarginBase: ConvertEncType.Dec,
      initialMarginStep: ConvertEncType.Dec,
      maintenanceMarginRatio: ConvertEncType.Dec,
      maxLiquidationOrderDuration: ConvertEncType.Duration,
      expiryTime: ConvertEncType.Date,
      closedBlockHeight: ConvertEncType.Long,
    },
  },
};

const CreateToken: AminoValueMap = {
  value: {
    msg: {
      decimals: ConvertEncType.Long,
      chainId: ConvertEncType.Long,
      bridgeId: ConvertEncType.Long,
    },
  },
};

const ChangeNumQuotes: AminoValueMap = {
  value: {
    msg: {
      poolId: ConvertEncType.Long,
      numQuotes: ConvertEncType.Long,
    },
  },
};

const ChangeSwapFee: AminoValueMap = {
  value: {
    msg: {
      poolId: ConvertEncType.Long,
      swapFee: ConvertEncType.Dec,
    },
  },
};

const CreateOracle: AminoValueMap = {
  value: {
    msg: {
      minTurnoutPercentage: ConvertEncType.Long,
      maxResultAge: ConvertEncType.Long,
      resolution: ConvertEncType.Long,
    },
  },
};

const LinkPool: AminoValueMap = {
  value: {
    msg: {
      poolId: ConvertEncType.Long,
    },
  },
};

const SetCommitmentCurve: AminoValueMap = {
  value: {
    msg: {
      maxDuration: ConvertEncType.Long,
    },
  },
};

const SetRewardCurve: AminoValueMap = {
  value: {
    msg: {
      startTime: ConvertEncType.Date,
      reductionIntervalSeconds: ConvertEncType.Long,
    },
  },
};

const SetRewardWeights: AminoValueMap = {
  value: {
    msg: {
      poolId: ConvertEncType.Long,
    },
  },
};

const UnlinkPool: AminoValueMap = {
  value: {
    msg: {
      poolId: ConvertEncType.Long,
    },
  },
};

const UpdateMarket: AminoValueMap = {
  value: {
    msg: {
      tickSize: ConvertEncType.Dec,
      makerFee: ConvertEncType.Dec,
      takerFee: ConvertEncType.Dec,
      initialMarginBase: ConvertEncType.Dec,
      initialMarginStep: ConvertEncType.Dec,
      maintenanceMarginRatio: ConvertEncType.Dec,
      maxLiquidationOrderDuration: ConvertEncType.Duration,
    },
  },
};

const SettlementPrice: AminoValueMap = {
  value: {
    msg: {
      settlementPrice: ConvertEncType.Dec,
    },
  },
};

interface AminoProposalRes {
  newContent: {
    type: string;
    value: any;
  };
  newAmino: AminoValueMap;
};

interface DirectProposalRes {
  newContent: {
    typeUrl: string;
    value: Uint8Array;
  },
  newAmino: AminoValueMap;
}

const preProcessAmino = (
  value: TypeUtils.SimpleMap<any>,
  valueMap: AminoValueMap
): TypeUtils.SimpleMap<any> | null | undefined => {
  return mapEachIndiv(value, valueMap, false);

  // Alt solution - Check if all proposals work with mapEachIndiv
  // const newValue: TypeUtils.SimpleMap<any> = {};
  // Object.keys(value).forEach((label: string) => {
  //   const camelKey = TypeUtils.snakeToCamel(label);
  //   if (value[label]?.length) {
  //     newValue[camelKey] = value[label].map((labelItem: any) => {
  //       return preProcessAmino(value[label], valueMap)
  //     });
  //     return;
  //   }

  //   newValue[camelKey] = paramConverter(value[label], valueMap[camelKey] as ConvertEncType, false);
  // });
  // console.log("newValue", newValue);
  // return newValue;
};

const checkDecodeProposal = (content: any, amino: AminoValueMap): AminoProposalRes => {
  const decodedValue = GovUtils.decodeContent(content);
  const newContent = {
    type: ContentTypes[content.typeUrl],
    value: decodedValue.value,
  }
  const newAmino = { ...amino };

  switch (content.typeUrl) {
    case ProposalTypes.CreateMarket:
      newAmino.content = { ...CreateMarket };
      break;
    case ProposalTypes.ChangeNumQuotes:
      newAmino.content = { ...ChangeNumQuotes };
      break;
    case ProposalTypes.ChangeSwapFee:
      newAmino.content = { ...ChangeSwapFee };
      break;
    case ProposalTypes.CreateToken:
      newAmino.content = { ...CreateToken };
      break;
    case ProposalTypes.SetCommitmentCurve:
      newAmino.content = { ...SetCommitmentCurve };
      break;
    case ProposalTypes.SetRewardCurve:
      newAmino.content = { ...SetRewardCurve };
      break;
    case ProposalTypes.SetRewardsWeights:
      newAmino.content = { ...SetRewardWeights };
      break;
    case ProposalTypes.SetMsgFee:
      newAmino.content = {};
      break;
    case ProposalTypes.SettlementPrice:
      newAmino.content = { ...SettlementPrice };
      break;
    case ProposalTypes.CreateOracle:
      newAmino.content = { ...CreateOracle };
      break;
    case ProposalTypes.LinkPool:
      newAmino.content = { ...LinkPool };
      break;
    case ProposalTypes.UnlinkPool:
      newAmino.content = { ...UnlinkPool };
      break;
    case ProposalTypes.UpdateMarket:
      newAmino.content = { ...UpdateMarket };
      break;
    default:
      break;
  }
  return {
    newContent,
    newAmino,
  };
};

const checkEncodeProposal = (content: any, amino: AminoValueMap): DirectProposalRes => {
  switch (content.type) {
    case ContentTypes[ProposalTypes.CreateMarket]:
      const createMarketMsg = preProcessAmino(content.value.msg, CreateMarket.value.msg);
      const createMarketProp = CreateMarketProposal.fromPartial({
        ...content.value,
        msg: createMarketMsg,
      });
      return {
        newContent: {
          typeUrl: ProposalTypes.CreateMarket,
          value: CreateMarketProposal.encode(createMarketProp).finish(),
        },
        newAmino: {
          ...amino,
        },
      };
    case ContentTypes[ProposalTypes.ChangeNumQuotes]:
      const newNumQuotesMsg = preProcessAmino(content.value.msg, ChangeNumQuotes.value.msg);
      const numQuotesProp = ChangeNumQuotesProposal.fromPartial({
        ...content.value,
        msg: newNumQuotesMsg,
      });
      return {
        newContent: {
          typeUrl: ProposalTypes.ChangeNumQuotes,
          value: ChangeNumQuotesProposal.encode(numQuotesProp).finish(),
        },
        newAmino: {
          ...amino,
        },
      };
    case ContentTypes[ProposalTypes.ChangeSwapFee]:
      const newSwapFeeMsg = preProcessAmino(content.value.msg, ChangeSwapFee.value.msg);
      const swapFeeProp = ChangeSwapFeeProposal.fromPartial({
        ...content.value,
        msg: newSwapFeeMsg,
      });
      return {
        newContent: {
          typeUrl: ProposalTypes.ChangeSwapFee,
          value: ChangeSwapFeeProposal.encode(swapFeeProp).finish(),
        },
        newAmino: {
          ...amino,
        },
      };
    case ContentTypes[ProposalTypes.CreateToken]:
      const createTokenMsg = preProcessAmino(content.value.msg, CreateToken.value.msg);
      const createTokenProp = CreateTokenProposal.fromPartial({
        ...content.value,
        msg: createTokenMsg,
      });
      return {
        newContent: {
          typeUrl: ProposalTypes.CreateToken,
          value: CreateTokenProposal.encode(createTokenProp).finish(),
        },
        newAmino: {
          ...amino,
        },
      };
    case ContentTypes[ProposalTypes.SetMsgFee]:
      const setMsgFeeMsg = preProcessAmino(content.value.msg, {});
      const msgFeeProp = SetMsgFeeProposal.fromPartial({
        ...content.value,
        msg: setMsgFeeMsg,
      });
      return {
        newContent: {
          typeUrl: ProposalTypes.SetMsgFee,
          value: SetMsgFeeProposal.encode(msgFeeProp).finish(),
        },
        newAmino: {
          ...amino,
        },
      };
    case ContentTypes[ProposalTypes.SetCommitmentCurve]:
      const setCommitCurveMsg = preProcessAmino(content.value.msg, SetCommitmentCurve.value.msg);
      const commitCurveProp = SetCommitmentCurveProposal.fromPartial({
        ...content.value,
        msg: setCommitCurveMsg,
      });
      return {
        newContent: {
          typeUrl: ProposalTypes.SetCommitmentCurve,
          value: SetCommitmentCurveProposal.encode(commitCurveProp).finish(),
        },
        newAmino: {
          ...amino,
        },
      };
    case ContentTypes[ProposalTypes.SetRewardCurve]:
      const setRewardCurveMsg = preProcessAmino(content.value.msg, SetRewardCurve.value.msg);
      const rewardCurveProp = SetRewardCurveProposal.fromPartial({
        ...content.value,
        msg: setRewardCurveMsg,
      });
      return {
        newContent: {
          typeUrl: ProposalTypes.SetRewardCurve,
          value: SetRewardCurveProposal.encode(rewardCurveProp).finish(),
        },
        newAmino: {
          ...amino,
        },
      };
    case ContentTypes[ProposalTypes.SetRewardsWeights]:
      const setRewardWeightsMsg = preProcessAmino(content.value.msg, SetRewardWeights.value.msg);
      const rewardWeightsProp = SetRewardsWeightsProposal.fromPartial({
        ...content.value,
        msg: setRewardWeightsMsg,
      });
      return {
        newContent: {
          typeUrl: ProposalTypes.SetRewardsWeights,
          value: SetRewardsWeightsProposal.encode(rewardWeightsProp).finish(),
        },
        newAmino: {
          ...amino,
        },
      };
    case ContentTypes[ProposalTypes.SettlementPrice]:
      const settlementMsg = preProcessAmino(content.value.msg, SettlementPrice.value.msg);
      const settlementProp = SettlementPriceProposal.fromPartial({
        ...content.value,
        msg: settlementMsg,
      });
      return {
        newContent: {
          typeUrl: ProposalTypes.SettlementPrice,
          value: SettlementPriceProposal.encode(settlementProp).finish(),
        },
        newAmino: {
          ...amino,
        },
      };
    case ContentTypes[ProposalTypes.CreateOracle]:
      const createOracleMsg = preProcessAmino(content.value.msg, CreateOracle.value.msg);
      const createOracleProp = CreateOracleProposal.fromPartial({
        ...content.value,
        msg: createOracleMsg,
      });
      return {
        newContent: {
          typeUrl: ProposalTypes.CreateOracle,
          value: CreateOracleProposal.encode(createOracleProp).finish(),
        },
        newAmino: {
          ...amino,
        },
      };
    case ContentTypes[ProposalTypes.LinkPool]:
      const linkPoolMsg = preProcessAmino(content.value.msg, LinkPool.value.msg);
      const linkPoolProp = LinkPoolProposal.fromPartial({
        ...content.value,
        msg: linkPoolMsg,
      });
      return {
        newContent: {
          typeUrl: ProposalTypes.LinkPool,
          value: LinkPoolProposal.encode(linkPoolProp).finish(),
        },
        newAmino: {
          ...amino,
        },
      };
    case ContentTypes[ProposalTypes.UnlinkPool]:
      const unlinkPoolMsg = preProcessAmino(content.value.msg, UnlinkPool.value.msg);
      const unlinkPoolProp = LinkPoolProposal.fromPartial({
        ...content.value,
        msg: unlinkPoolMsg,
      });
      return {
        newContent: {
          typeUrl: ProposalTypes.UnlinkPool,
          value: UnlinkPoolProposal.encode(unlinkPoolProp).finish(),
        },
        newAmino: {
          ...amino,
        },
      };
    case ContentTypes[ProposalTypes.UpdateMarket]:
      const updateMarketMsg = preProcessAmino(content.value.msg, UpdateMarket.value.msg);
      const updateMarketProp = UpdateMarketProposal.fromPartial({
        ...content.value,
        msg: updateMarketMsg,
      });
      return {
        newContent: {
          typeUrl: ProposalTypes.UpdateMarket,
          value: UpdateMarketProposal.encode(updateMarketProp).finish(),
        },
        newAmino: {
          ...amino,
        },
      };
    default:
      return {
        newContent: {
          typeUrl: "",
          value: new Uint8Array(),
        },
        newAmino: {
          ...amino,
        },
      };
  }
};

const proposalAminoProcess: AminoProcess = {
  toAminoProcess: (amino: AminoValueMap, input: any) => {
    const { content } = input as MsgSubmitProposal;
    const propResponse = checkDecodeProposal(content, amino);
    return {
      amino: propResponse.newAmino,
      input: {
        ...input,
        content: propResponse.newContent,
      },
    };
  },
  fromAminoProcess: (amino: AminoValueMap, input: any) => {
    const { content } = input;
    const propResponse = checkEncodeProposal(content, amino);
    return {
      amino: propResponse.newAmino,
      input: {
        ...input,
        content: propResponse.newContent,
      },
    };
  },
}

const GovAmino: TypeUtils.SimpleMap<AminoConverter> = {
  [CarbonTx.Types.MsgSubmitProposal]: generateAminoType(SubmitProposalMsg, proposalAminoProcess),
  [CarbonTx.Types.MsgDeposit]: generateAminoType(MsgDeposit),
  [CarbonTx.Types.MsgVote]: generateAminoType(MsgVote),
};

export default GovAmino;
