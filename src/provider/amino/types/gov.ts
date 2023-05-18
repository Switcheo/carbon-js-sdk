import { MsgSubmitProposal } from "@carbon-sdk/codec/cosmos/gov/v1beta1/tx";
import {
  CreateOracleProposal,
  CreateTokenProposal,
  SetCommitmentCurveProposal,
  SetMsgGasCostProposal,
  SetMinGasPriceProposal,
  RemoveMsgGasCostProposal,
  RemoveMinGasPriceProposal,
  SetRewardCurveProposal,
  SetRewardsWeightsProposal,
  SettlementPriceProposal,
  UpdateMarketProposal,
  UpdatePoolProposal,
  UpdateGroupedTokenConfigParams,
} from "@carbon-sdk/codec";
import { GovUtils, TypeUtils } from "@carbon-sdk/util";
import * as CarbonTx from "@carbon-sdk/util/tx";
import { AminoConverter } from "@cosmjs/stargate";
import { AminoInit, ConvertEncType, AminoProcess, AminoValueMap, generateAminoType, mapEachIndiv } from "../utils";
import { TextProposal } from "@carbon-sdk/codec/cosmos/gov/v1beta1/gov";

const TxTypes: TypeUtils.SimpleMap<string> = {
  SubmitProposal: "cosmos-sdk/MsgSubmitProposal",
  Deposit: "cosmos-sdk/MsgDeposit",
  Vote: "cosmos-sdk/MsgVote",
  TextProposal: "cosmos-sdk/TextProposal"
};

const ContentTypes: TypeUtils.SimpleMap<string> = {
  [GovUtils.ProposalTypes.CreateToken]: "coin/CreateTokenProposal",
  [GovUtils.ProposalTypes.SetMsgGasCost]: "fee/SetMsgGasCostProposal",
  [GovUtils.ProposalTypes.SetMinGasPrice]: "fee/SetMinGasPriceProposal",
  [GovUtils.ProposalTypes.RemoveMsgGasCost]: "fee/RemoveMsgGasCostProposal",
  [GovUtils.ProposalTypes.RemoveMinGasPrice]: "fee/RemoveMinGasPriceProposal",
  [GovUtils.ProposalTypes.SetCommitmentCurve]: "liquiditypool/SetCommitmentCurveProposal",
  [GovUtils.ProposalTypes.SetRewardCurve]: "liquiditypool/SetRewardCurveProposal",
  [GovUtils.ProposalTypes.SetRewardsWeights]: "liquiditypool/SetRewardsWeightsProposal",
  [GovUtils.ProposalTypes.UpdatePool]: "liquiditypool/UpdatePoolProposal",
  [GovUtils.ProposalTypes.UpdateMarket]: "market/UpdateMarketProposal",
  [GovUtils.ProposalTypes.CreateOracle]: "oracle/CreateOracleProposal",
  [GovUtils.ProposalTypes.SettlementPrice]: "pricing/SettlementPriceProposal",
  [GovUtils.ProposalTypes.CreateGroup]: "coin/CreateGroupProposal",
  [GovUtils.ProposalTypes.UpdateGroup]: "coin.UpdateGroupProposal",
  [GovUtils.ProposalTypes.RegisterToGroup]: "coin/RegisterToGroupProposal",
  [GovUtils.ProposalTypes.DeregisterFromGroup]: "coin.DeregisterFromGroupProposal",
  [GovUtils.ProposalTypes.WithdrawFromGroup]: "coin/WithdrawFromGroupProposal",
  [GovUtils.ProposalTypes.UpdateGroupTokenConfig]: "coin.UpdateGroupTokenConfigProposal",
  [GovUtils.ProposalTypes.Text]: "cosmos-sdk/TextProposal",
};

const SubmitProposalMsg: AminoInit = {
  aminoType: TxTypes.SubmitProposal,
  valueMap: {},
};
const MsgTextProposal: AminoInit = {
  aminoType: TxTypes.TextProposal,
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
      tradingBandwidth: ConvertEncType.NumToStr,
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

const CreateGroup: AminoValueMap = {
  value: {
    msg: {
      creator: ConvertEncType.Long,
      name: ConvertEncType.Long,
      chequeTokenSymbol: ConvertEncType.Long,
      oraclieId: ConvertEncType.Long,
    }
  }
}

const UpdateGroup: AminoValueMap = {
  value: {
    msg: {
      creator: ConvertEncType.Long,
      groupId: ConvertEncType.Long,
      updateGroupParams: {
        name: ConvertEncType.Long,
      },
    }
  }
}

const RegisterToGroup: AminoValueMap = {
  value: {
    msg: {
      creator: ConvertEncType.Long,
      groupId: ConvertEncType.Long,
      denom: ConvertEncType.Long,
    }
  }
}

const DeregisterFromGroup: AminoValueMap = {
  value: {
    msg: {
      creator: ConvertEncType.Long,
      groupId: ConvertEncType.Long,
      denom: ConvertEncType.Long,
    }
  }
}

const UpdateGroupConfig: AminoValueMap = {
  value: {
    msg: {
      creator: ConvertEncType.Long,
      denom: ConvertEncType.Long,
      updatedGroupedTokenConfigParams: {
        isActive: ConvertEncType.Long,
      }
    }
  }
}

const UpdatePool: AminoValueMap = {
  value: {
    msg: {
      poolId: ConvertEncType.Long,
      swapFee: ConvertEncType.Dec,
      numQuotes: ConvertEncType.Long,
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
}

interface DirectProposalRes {
  newContent: {
    typeUrl: string;
    value: Uint8Array;
  };
  newAmino: AminoValueMap;
}

const preProcessAmino = (value: TypeUtils.SimpleMap<any>, valueMap: AminoValueMap): TypeUtils.SimpleMap<any> | null | undefined => {
  return mapEachIndiv(value, valueMap, false);
};

const checkDecodeProposal = (content: any, amino: AminoValueMap): AminoProposalRes => {
  const decodedValue = GovUtils.decodeContent(content);
  const newContent = {
    type: ContentTypes[content.typeUrl],
    value: decodedValue.value,
  };
  const newAmino = { ...amino };

  switch (content.typeUrl) {
    case GovUtils.ProposalTypes.UpdatePool:
      newAmino.content = { ...UpdatePool };
      break;
    case GovUtils.ProposalTypes.CreateToken:
      newAmino.content = { ...CreateToken };
      break;
    case GovUtils.ProposalTypes.CreateGroup:
      newAmino.content = { ...CreateGroup };
      break;
    case GovUtils.ProposalTypes.UpdateGroup:
      newAmino.content = { ...UpdateGroup };
      break;
    case GovUtils.ProposalTypes.RegisterToGroup:
      newAmino.content = { ...RegisterToGroup };
      break;
    case GovUtils.ProposalTypes.DeregisterFromGroup:
      newAmino.content = { ...DeregisterFromGroup };
      break;
    case GovUtils.ProposalTypes.UpdateGroupTokenConfig:
      newAmino.content = { ...UpdateGroupConfig };
      break;
    case GovUtils.ProposalTypes.SetCommitmentCurve:
      newAmino.content = { ...SetCommitmentCurve };
      break;
    case GovUtils.ProposalTypes.SetRewardCurve:
      newAmino.content = { ...SetRewardCurve };
      break;
    case GovUtils.ProposalTypes.SetRewardsWeights:
      newAmino.content = { ...SetRewardWeights };
      break;
    case GovUtils.ProposalTypes.SetMsgGasCost:
      newAmino.content = {};
      break;
    case GovUtils.ProposalTypes.SetMinGasPrice:
      newAmino.content = {};
      break;
    case GovUtils.ProposalTypes.RemoveMsgGasCost:
      newAmino.content = {};
      break;
    case GovUtils.ProposalTypes.RemoveMinGasPrice:
      newAmino.content = {};
      break;
    case GovUtils.ProposalTypes.SettlementPrice:
      newAmino.content = { ...SettlementPrice };
      break;
    case GovUtils.ProposalTypes.CreateOracle:
      newAmino.content = { ...CreateOracle };
      break;
    case GovUtils.ProposalTypes.UpdateMarket:
      newAmino.content = { ...UpdateMarket };
      break;
    case GovUtils.ProposalTypes.Text:
      newAmino.content = {};
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
    case ContentTypes[GovUtils.ProposalTypes.UpdatePool]:
      const updatePoolMsg = preProcessAmino(content.value.msg, UpdatePool.value.msg);
      const updatePoolProp = UpdatePoolProposal.fromPartial({
        ...content.value,
        msg: updatePoolMsg,
      });
      return {
        newContent: {
          typeUrl: GovUtils.ProposalTypes.UpdatePool,
          value: UpdatePoolProposal.encode(updatePoolProp).finish(),
        },
        newAmino: {
          ...amino,
        },
      };
    case ContentTypes[GovUtils.ProposalTypes.CreateToken]:
      const createTokenMsg = preProcessAmino(content.value.msg, CreateToken.value.msg);
      const createTokenProp = CreateTokenProposal.fromPartial({
        ...content.value,
        msg: createTokenMsg,
      });
      return {
        newContent: {
          typeUrl: GovUtils.ProposalTypes.CreateToken,
          value: CreateTokenProposal.encode(createTokenProp).finish(),
        },
        newAmino: {
          ...amino,
        },
      };
    case ContentTypes[GovUtils.ProposalTypes.SetMsgGasCost]:
      const setMsgGasCostMsg = preProcessAmino(content.value.msg, {});
      const setMsgGasCostProp = SetMsgGasCostProposal.fromPartial({
        ...content.value,
        msg: setMsgGasCostMsg,
      });
      return {
        newContent: {
          typeUrl: GovUtils.ProposalTypes.SetMsgGasCost,
          value: SetMsgGasCostProposal.encode(setMsgGasCostProp).finish(),
        },
        newAmino: {
          ...amino,
        },
      };
    case ContentTypes[GovUtils.ProposalTypes.SetMinGasPrice]:
      const setMinGasPriceMsg = preProcessAmino(content.value.msg, {});
      const setMinGasPriceProp = SetMinGasPriceProposal.fromPartial({
        ...content.value,
        msg: setMinGasPriceMsg,
      });
      return {
        newContent: {
          typeUrl: GovUtils.ProposalTypes.SetMinGasPrice,
          value: SetMinGasPriceProposal.encode(setMinGasPriceProp).finish(),
        },
        newAmino: {
          ...amino,
        },
      };
    case ContentTypes[GovUtils.ProposalTypes.RemoveMsgGasCost]:
      const removeMsgGasCostMsg = preProcessAmino(content.value.msg, {});
      const removeMsgGasCostProp = RemoveMsgGasCostProposal.fromPartial({
        ...content.value,
        msg: removeMsgGasCostMsg,
      });
      return {
        newContent: {
          typeUrl: GovUtils.ProposalTypes.RemoveMsgGasCost,
          value: RemoveMsgGasCostProposal.encode(removeMsgGasCostProp).finish(),
        },
        newAmino: {
          ...amino,
        },
      };
    case ContentTypes[GovUtils.ProposalTypes.RemoveMinGasPrice]:
      const removeMinGasPriceMsg = preProcessAmino(content.value.msg, {});
      const removeMinGasPriceProp = RemoveMinGasPriceProposal.fromPartial({
        ...content.value,
        msg: removeMinGasPriceMsg,
      });
      return {
        newContent: {
          typeUrl: GovUtils.ProposalTypes.RemoveMinGasPrice,
          value: RemoveMinGasPriceProposal.encode(removeMinGasPriceProp).finish(),
        },
        newAmino: {
          ...amino,
        },
      };
    case ContentTypes[GovUtils.ProposalTypes.SetCommitmentCurve]:
      const setCommitCurveMsg = preProcessAmino(content.value.msg, SetCommitmentCurve.value.msg);
      const commitCurveProp = SetCommitmentCurveProposal.fromPartial({
        ...content.value,
        msg: setCommitCurveMsg,
      });
      return {
        newContent: {
          typeUrl: GovUtils.ProposalTypes.SetCommitmentCurve,
          value: SetCommitmentCurveProposal.encode(commitCurveProp).finish(),
        },
        newAmino: {
          ...amino,
        },
      };
    case ContentTypes[GovUtils.ProposalTypes.SetRewardCurve]:
      const setRewardCurveMsg = preProcessAmino(content.value.msg, SetRewardCurve.value.msg);
      const rewardCurveProp = SetRewardCurveProposal.fromPartial({
        ...content.value,
        msg: setRewardCurveMsg,
      });
      return {
        newContent: {
          typeUrl: GovUtils.ProposalTypes.SetRewardCurve,
          value: SetRewardCurveProposal.encode(rewardCurveProp).finish(),
        },
        newAmino: {
          ...amino,
        },
      };
    case ContentTypes[GovUtils.ProposalTypes.SetRewardsWeights]:
      const setRewardWeightsMsg = preProcessAmino(content.value.msg, SetRewardWeights.value.msg);
      const rewardWeightsProp = SetRewardsWeightsProposal.fromPartial({
        ...content.value,
        msg: setRewardWeightsMsg,
      });
      return {
        newContent: {
          typeUrl: GovUtils.ProposalTypes.SetRewardsWeights,
          value: SetRewardsWeightsProposal.encode(rewardWeightsProp).finish(),
        },
        newAmino: {
          ...amino,
        },
      };
    case ContentTypes[GovUtils.ProposalTypes.SettlementPrice]:
      const settlementMsg = preProcessAmino(content.value.msg, SettlementPrice.value.msg);
      const settlementProp = SettlementPriceProposal.fromPartial({
        ...content.value,
        msg: settlementMsg,
      });
      return {
        newContent: {
          typeUrl: GovUtils.ProposalTypes.SettlementPrice,
          value: SettlementPriceProposal.encode(settlementProp).finish(),
        },
        newAmino: {
          ...amino,
        },
      };
    case ContentTypes[GovUtils.ProposalTypes.CreateOracle]:
      const createOracleMsg = preProcessAmino(content.value.msg, CreateOracle.value.msg);
      const createOracleProp = CreateOracleProposal.fromPartial({
        ...content.value,
        msg: createOracleMsg,
      });
      return {
        newContent: {
          typeUrl: GovUtils.ProposalTypes.CreateOracle,
          value: CreateOracleProposal.encode(createOracleProp).finish(),
        },
        newAmino: {
          ...amino,
        },
      };
    case ContentTypes[GovUtils.ProposalTypes.UpdateMarket]:
      const updateMarketMsg = preProcessAmino(content.value.msg, UpdateMarket.value.msg);
      const updateMarketProp = UpdateMarketProposal.fromPartial({
        ...content.value,
        msg: updateMarketMsg,
      });
      return {
        newContent: {
          typeUrl: GovUtils.ProposalTypes.UpdateMarket,
          value: UpdateMarketProposal.encode(updateMarketProp).finish(),
        },
        newAmino: {
          ...amino,
        },
      };
      case ContentTypes[GovUtils.ProposalTypes.Text]:
        const textProposal = TextProposal.fromPartial({
          ...content.value,
        });
        return {
          newContent: {
            typeUrl: GovUtils.ProposalTypes.Text,
            value: TextProposal.encode(textProposal).finish(),
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
};

const GovAmino: TypeUtils.SimpleMap<AminoConverter> = {
  [CarbonTx.Types.MsgSubmitProposal]: generateAminoType(SubmitProposalMsg, proposalAminoProcess),
  [CarbonTx.Types.MsgDeposit]: generateAminoType(MsgDeposit),
  [CarbonTx.Types.MsgVote]: generateAminoType(MsgVote),
  [CarbonTx.Types.TextProposal]: generateAminoType(MsgTextProposal)
};

export default GovAmino;
