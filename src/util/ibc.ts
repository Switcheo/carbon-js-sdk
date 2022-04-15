import { ChainInfoExplorerTmRpc, ChainIds, EmbedChainInfosInit, ibcWhitelist, AssetListObj, swthChannels, swthIbcWhitelist } from "@carbon-sdk/constant";
import { KeplrAccount } from "@carbon-sdk/provider";
import { Hash } from "@keplr-wallet/crypto";
import { AppCurrency } from "@keplr-wallet/types";
import { Blockchain } from "./blockchain";
import { SimpleMap } from "./type";

// Create IBC minimal denom
export function makeIBCMinimalDenom(sourceChannelId: string, coinMinimalDenom: string): string {
	const sourceChannelIdProcess = sourceChannelId.indexOf("transfer/") === 0
		? sourceChannelId.split("/").splice(1).join("/")
		: sourceChannelId;
	return (
		'ibc/' +
		Buffer.from(Hash.sha256(Buffer.from(`transfer/${sourceChannelIdProcess}/${coinMinimalDenom}`)))
			.toString('hex')
			.toUpperCase()
	);
};

export const EmbedChainInfos = Object.values(EmbedChainInfosInit).reduce((prev: SimpleMap<ChainInfoExplorerTmRpc>, chainInfo: ChainInfoExplorerTmRpc) => {
  if (swthIbcWhitelist.includes(chainInfo.chainId)) {
		const chainChannels = swthChannels[chainInfo.chainId]
		chainInfo.currencies.push({
			...KeplrAccount.SWTH_CURRENCY,
      coinMinimalDenom: makeIBCMinimalDenom(chainChannels?.dstChannel ?? "channel-0", KeplrAccount.SWTH_CURRENCY.coinMinimalDenom),
		})
  }
	prev[chainInfo.chainId] = chainInfo;
	return prev;
}, {});

export const totalAssetObj: AssetListObj = Object.values(EmbedChainInfos).reduce((prev: AssetListObj, chainInfo: ChainInfoExplorerTmRpc) => {
	if (!ibcWhitelist.includes(chainInfo.chainId)) return prev;

	const newAssetObj = prev;
	const assetsObj: SimpleMap<AppCurrency> = {};
	const channelsObj = swthChannels[chainInfo.chainId];
	chainInfo.currencies.forEach((currency: AppCurrency) => {
		const ibcAddr = makeIBCMinimalDenom(channelsObj?.sourceChannel ?? "channel-0", currency.coinMinimalDenom);
		assetsObj[ibcAddr] = currency;
	});
	newAssetObj[chainInfo.chainId] = assetsObj;
	return newAssetObj;
}, {});

export const ChainIdBlockchainMap: SimpleMap<Blockchain> = {
	[ChainIds.Osmosis]: Blockchain.Osmosis,
	[ChainIds.Terra]: Blockchain.Terra,
};

export const getIbcChainFromBlockchain = (blockchain: Blockchain | undefined): ChainIds | undefined => {
	if (!blockchain) return undefined;
	Object.entries(ChainIdBlockchainMap).forEach(([key, value]) => {
		if (blockchain === value) {
			return key;
		}
	})
	return undefined;
}

export const BlockchainMap = Object.values(EmbedChainInfos).reduce((prev: SimpleMap<Blockchain | undefined>, chainInfo: ChainInfoExplorerTmRpc) => {
	if (!ibcWhitelist.includes(chainInfo.chainId)) {
		return prev;
	}
	const newPrev = prev;
	const channelsObj = swthChannels[chainInfo.chainId]
	chainInfo.currencies.forEach((currency: AppCurrency) => {
		if (currency.coinDenom.toLowerCase() === "swth") {
			newPrev[currency.coinMinimalDenom] = ChainIdBlockchainMap[chainInfo.chainId];
		} else {
			const ibcAddr = makeIBCMinimalDenom(channelsObj?.sourceChannel ?? "channel-0", currency.coinMinimalDenom);
			newPrev[ibcAddr] = ChainIdBlockchainMap[chainInfo.chainId];
		}
	});
	return newPrev;
}, {});
