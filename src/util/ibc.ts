import {
  ChainInfoExplorerTmRpc,
  ChainIds,
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
import { Hash } from "@keplr-wallet/crypto";
import { AppCurrency } from "@keplr-wallet/types";
import { BlockchainV2 } from "./blockchain";
import { SimpleMap } from "./type";

// Create IBC minimal denom
export function makeIBCMinimalDenom(sourceChannelId: string, coinMinimalDenom: string): string {
  const sourceChannelIdProcess =
    sourceChannelId.indexOf("transfer/") === 0 ? sourceChannelId.split("/").splice(1).join("/") : sourceChannelId;
  return (
    "ibc/" +
    Buffer.from(Hash.sha256(Buffer.from(`transfer/${sourceChannelIdProcess}/${coinMinimalDenom}`)))
      .toString("hex")
      .toUpperCase()
  );
}

export const EmbedChainInfos = Object.values(EmbedChainInfosInit).reduce(
  (prev: SimpleMap<ChainInfoExplorerTmRpc>, chainInfo: ChainInfoExplorerTmRpc) => {
    if (swthIbcWhitelist.includes(chainInfo.chainId)) {
      const chainChannels = swthChannels[chainInfo.chainId];
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
      const ibcAddr =
        currency.coinDenom.toLowerCase() === "swth"
          ? currency.coinMinimalDenom
          : makeIBCMinimalDenom(channelsObj?.sourceChannel ?? "channel-0", currency.coinMinimalDenom);
      assetsObj[ibcAddr] = currency;
    });
    newAssetObj[chainInfo.chainId] = assetsObj;
    return newAssetObj;
  },
  {}
);

export const ChainIdBlockchainMap: SimpleMap<BlockchainV2> = {
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
      if (currency.coinDenom.toLowerCase() === "swth") {
        newPrev[currency.coinMinimalDenom] = ChainIdBlockchainMap[chainInfo.chainId];
      } else {
        const ibcAddr = makeIBCMinimalDenom(channelsObj?.sourceChannel ?? "channel-0", currency.coinMinimalDenom);
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
