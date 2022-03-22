import { ChainInfoExplorerTmRpc, EmbedChainInfosInit, osmosisAssetObj, osmoDisplayOverride, ibcWhitelist } from "@carbon-sdk/constant";
import { KeplrAccount } from "@carbon-sdk/provider";
import { Hash } from "@keplr-wallet/crypto";
import { SimpleMap } from "./type";

// Create IBC minimal denom
export function makeIBCMinimalDenom(sourceChannelId: string, coinMinimalDenom: string): string {
	return (
		'ibc/' +
		Buffer.from(Hash.sha256(Buffer.from(`transfer/${sourceChannelId}/${coinMinimalDenom}`)))
			.toString('hex')
			.toUpperCase()
	);
};

const swthIbc = osmosisAssetObj.assets[osmoDisplayOverride['swth']];
export const EmbedChainInfos = Object.values(EmbedChainInfosInit).reduce((prev: SimpleMap<ChainInfoExplorerTmRpc>, chainInfo: ChainInfoExplorerTmRpc) => {
	if (ibcWhitelist.includes(chainInfo.chainId)) {
		chainInfo.currencies.push({
			...KeplrAccount.SWTH_CURRENCY,
			coinMinimalDenom: makeIBCMinimalDenom(swthIbc.ibc?.dst_channel ?? '', KeplrAccount.SWTH_CURRENCY.coinMinimalDenom),
		})
	}
	prev[chainInfo.chainId] = chainInfo;
	return prev;
}, {});
