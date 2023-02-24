import { Token } from '@carbon-sdk/codec'
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
  ChannelConfig,
} from "@carbon-sdk/constant";
import { KeplrAccount } from "@carbon-sdk/provider";
import { BRIDGE_IDS } from "@carbon-sdk/util/blockchain";
import { Hash } from "@keplr-wallet/crypto";
import { AppCurrency } from "@keplr-wallet/types";
import { Blockchain } from "./blockchain";
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
};

export const getIbcChainFromBlockchain = (blockchain: Blockchain | undefined): ChainIds | undefined => {
  let ibcChain: ChainIds | undefined = undefined;
  Object.entries(ChainIdBlockchainMap).forEach(([key, value]) => {
    if (blockchain && blockchain.includes(value)) {
      ibcChain = key as ChainIds;
    }
  });
  return ibcChain;
};

export const getBlockchainFromSourceChain = (token?: Token): Blockchain | undefined => {
  if (!token || token?.bridgeId.toNumber() !== BRIDGE_IDS.ibc) return undefined;
  const sourceChainId = Math.max(token.chainId.toNumber() - 1, 0);
  const sourceChannelId = `channel-${sourceChainId}`;
  let chainId: ChainIds | undefined

  Object.entries(swthChannels).forEach(([key, value]: [string, ChannelConfig]) => {
    if (chainId) return

    if (value.sourceChannel === sourceChannelId) {
      chainId = key as ChainIds
    }
  });
  return chainId ? ChainIdBlockchainMap[chainId] : undefined;
}

export const BlockchainMap = Object.values(EmbedChainInfos).reduce(
  (prev: SimpleMap<Blockchain | undefined>, chainInfo: ChainInfoExplorerTmRpc) => {
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
