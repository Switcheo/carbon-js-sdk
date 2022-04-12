import { ChainInfoExplorerTmRpc, EmbedChainInfosInit, ibcWhitelist, totalAssetObj } from "@carbon-sdk/constant";
import { KeplrAccount } from "@carbon-sdk/provider";
import { Hash } from "@keplr-wallet/crypto";
import { AppCurrency } from "@keplr-wallet/types";
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

export const EmbedChainInfos = Object.values(EmbedChainInfosInit).reduce((prev: SimpleMap<ChainInfoExplorerTmRpc>, chainInfo: ChainInfoExplorerTmRpc) => {
  if (ibcWhitelist.includes(chainInfo.chainId)) {
    const swthIbc = totalAssetObj[chainInfo.chainId].swth;
    chainInfo.currencies.push({
      ...KeplrAccount.SWTH_CURRENCY,
      coinMinimalDenom: makeIBCMinimalDenom(swthIbc?.ibc?.dst_channel ?? '', KeplrAccount.SWTH_CURRENCY.coinMinimalDenom),
    });
  }
	prev[chainInfo.chainId] = chainInfo;
	return prev;
}, {});

export const BlockchainMap = Object.values(EmbedChainInfos).reduce((prev: SimpleMap<string>, chainInfo: ChainInfoExplorerTmRpc) => {
	if (!ibcWhitelist.includes(chainInfo.chainId)) {
		return prev;
	}
	const newPrev = prev;
	chainInfo.currencies.forEach((currency: AppCurrency) => {
		if (currency.coinDenom.toLowerCase() === "swth") {
			newPrev[currency.coinMinimalDenom] = chainInfo.chainId;
		} else {
			const ibcAddr = makeIBCMinimalDenom("channel-0", currency.coinMinimalDenom);
			newPrev[ibcAddr] = chainInfo.chainId;
		}
	});
	return newPrev;
}, {});
