import {
  ChainInfoExplorerTmRpc,
  ChainIds,
  ChannelSet,
  DefaultGasPriceStep,
  EmbedChainInfosInit,
  GasPriceStep,
  ibcWhitelist,
  AssetListObj,
  swthChannels,
  swthIbcWhitelist,
  ibcNetworkRegex,
} from "@carbon-sdk/constant";
import { KeplrAccount } from "@carbon-sdk/provider";
import { AppCurrency, CW20Currency, Secret20Currency } from "@keplr-wallet/types";
import { Blockchain, BlockchainV2 } from "./blockchain";
import { SimpleMap } from "./type";
import { ethers } from "ethers";

// Create IBC minimal denom
export function makeIBCMinimalDenom(sourceChannelId: string, coinMinimalDenom: string): string {
  const sourceChannelIdProcess =
    sourceChannelId.indexOf("transfer/") === 0 ? sourceChannelId.split("/").splice(1).join("/") : sourceChannelId;
  const bytes = Buffer.from(`transfer/${sourceChannelIdProcess}/${coinMinimalDenom}`);
  const hash = ethers.utils.sha256(bytes).replace(/0x/i, "").toUpperCase();
  return `ibc/${hash}`;
}

export const EmbedChainInfos = Object.values(EmbedChainInfosInit).reduce(
  (prev: SimpleMap<ChainInfoExplorerTmRpc>, chainInfo: ChainInfoExplorerTmRpc) => {
    if (swthIbcWhitelist.includes(chainInfo.chainId)) {
      const chainChannels = swthChannels[chainInfo.chainId]?.ibc;
      chainInfo.currencies.push({
        ...KeplrAccount.SWTH_CURRENCY,
        coinMinimalDenom: makeIBCMinimalDenom(chainChannels?.dstChannel ?? "channel-0", KeplrAccount.SWTH_CURRENCY.coinMinimalDenom),
      });
    }
    prev[chainInfo.chainId] = chainInfo;
    return prev;
  },
  {}
);

export const totalAssetObj: AssetListObj = Object.values(EmbedChainInfos).reduce(
  (prev: AssetListObj, chainInfo: ChainInfoExplorerTmRpc) => {
    if (!ibcWhitelist.includes(chainInfo.chainId)) return prev;

    const newAssetObj = prev;
    const assetsObj: SimpleMap<AppCurrency> = {};
    const channelsObj = swthChannels[chainInfo.chainId];
    chainInfo.currencies.forEach((currency: AppCurrency) => {
      const channelSet: ChannelSet | undefined =
        "type" in currency && channelsObj.cw20 ? (channelsObj.cw20 as ChannelSet) : channelsObj.ibc;
      let ibcAddr =
        currency.coinDenom.toLowerCase() === "swth"
          ? currency.coinMinimalDenom
          : makeIBCMinimalDenom(channelSet?.sourceChannel ?? "channel-0", currency.coinMinimalDenom);

      // TODO: Remove when implementing dynamic ibc chain info
      if (currency.coinMinimalDenom === "ibc/D189335C6E4A68B513C10AB227BF1C1D38C746766278BA3EEB4FB14124F1D858") {
        ibcAddr = "ibc/7FBDBEEEBA9C50C4BCDF7BF438EAB99E64360833D240B32655C96E319559E911";
      }
      assetsObj[ibcAddr] = currency;
    });
    newAssetObj[chainInfo.chainId] = assetsObj;
    return newAssetObj;
  },
  {}
);

export const ChainIdBlockchainMapV2: SimpleMap<BlockchainV2> = {
  [ChainIds.Osmosis]: "Osmosis",
  [ChainIds.Terra]: "Terra",
  [ChainIds.CosmosHub]: "Cosmos Hub",
  [ChainIds.Juno]: "Juno",
  [ChainIds.Evmos]: "Evmos",
  [ChainIds.Axelar]: "Axelar",
  [ChainIds.Stride]: "Stride",
  [ChainIds.Kujira]: "Kujira",
  [ChainIds.Terra2]: "Terra (CW20)",
  [ChainIds.Quicksilver]: "Quicksilver",
  [ChainIds.Comdex]: "Comdex",
  [ChainIds.StafiHub]: "Stafihub",
  [ChainIds.Persistence]: "Persistence Core",
  [ChainIds.Stargaze]: "Stargaze",
  [ChainIds.Canto]: "Canto",
  [ChainIds.OmniFlixHub]: "Omniflix Hub",
  [ChainIds.Agoric]: "Agoric",
};

export const ChainIdBlockchainMap: SimpleMap<Blockchain> = {
  [ChainIds.Osmosis]: Blockchain.Osmosis,
  [ChainIds.Terra]: Blockchain.Terra,
  [ChainIds.CosmosHub]: Blockchain.CosmosHub,
  [ChainIds.Juno]: Blockchain.Juno,
  [ChainIds.Evmos]: Blockchain.Evmos,
  [ChainIds.Axelar]: Blockchain.Axelar,
  [ChainIds.Stride]: Blockchain.Stride,
  [ChainIds.Kujira]: Blockchain.Kujira,
  [ChainIds.Terra2]: Blockchain.Terra2,
  [ChainIds.Quicksilver]: Blockchain.Quicksilver,
  [ChainIds.Comdex]: Blockchain.Comdex,
  [ChainIds.StafiHub]: Blockchain.StafiHub,
  [ChainIds.Persistence]: Blockchain.Persistence,
  [ChainIds.Stargaze]: Blockchain.Stargaze,
  [ChainIds.Canto]: Blockchain.Canto,
  [ChainIds.OmniFlixHub]: Blockchain.OmniFlixHub,
  [ChainIds.Agoric]: Blockchain.Agoric,
  [ChainIds.Sommelier]: Blockchain.Sommelier,
};

export const getIbcChainFromBlockchain = (blockchain: BlockchainV2 | undefined): ChainIds | undefined => {
  let ibcChain: ChainIds | undefined = undefined;
  Object.entries(ChainIdBlockchainMap).forEach(([key, value]) => {
    if (blockchain && blockchain.includes(value)) {
      ibcChain = key as ChainIds;
    }
  });
  return ibcChain;
};

export const BlockchainMap = Object.values(EmbedChainInfos).reduce(
  (prev: SimpleMap<string | undefined>, chainInfo: ChainInfoExplorerTmRpc) => {
    if (!ibcWhitelist.includes(chainInfo.chainId)) {
      return prev;
    }
    const newPrev = prev;
    const channelsObj = swthChannels[chainInfo.chainId];
    chainInfo.currencies.forEach((currency: AppCurrency) => {
      // TODO: Remove when implementing dynamic ibc chain info
      if (currency.coinMinimalDenom === "ibc/D189335C6E4A68B513C10AB227BF1C1D38C746766278BA3EEB4FB14124F1D858") {
        newPrev["ibc/7FBDBEEEBA9C50C4BCDF7BF438EAB99E64360833D240B32655C96E319559E911"] = ChainIdBlockchainMap[chainInfo.chainId];
        return;
      }

      if (currency.coinDenom.toLowerCase() === "swth") {
        newPrev[currency.coinMinimalDenom] = ChainIdBlockchainMap[chainInfo.chainId];
      } else {
        const channelSet: ChannelSet | undefined =
          "type" in currency && channelsObj.cw20 ? (channelsObj.cw20 as ChannelSet) : channelsObj.ibc;
        const ibcAddr = makeIBCMinimalDenom(channelSet?.sourceChannel ?? "channel-0", currency.coinMinimalDenom);
        newPrev[ibcAddr] = ChainIdBlockchainMap[chainInfo.chainId];
      }
    });
    return newPrev;
  },
  {}
);

export interface ChainIdOutput {
  identifier: string;
  version: number;
}

export const parseChainId = (chainId: string): ChainIdOutput => {
  const chainArr = chainId.match(ibcNetworkRegex);
  return {
    identifier: chainArr?.[1] ?? "",
    version: parseInt(chainArr?.[2] ?? "0"),
  };
};

export const calculateMaxFee = (gasStep: GasPriceStep = DefaultGasPriceStep, gas: number = 0): number => {
  return gasStep.high * gas;
};

export const estimateFeeStep = (gasStep: GasPriceStep = DefaultGasPriceStep, gas: number = 0, stepId: keyof GasPriceStep = "average") => {
  const currentGasStep = gasStep[stepId] ?? 0;
  return currentGasStep * gas;
};

export const isCw20Token = (currency: AppCurrency): boolean => {
  if (!("type" in currency)) return false;

  const depositCurrency = currency as CW20Currency | Secret20Currency;
  return depositCurrency.type === "cw20";
};
