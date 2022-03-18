import { ChainInfoExplorerTmRpc, EmbedChainInfosInit, ibcAssetObj, ibcDisplayOverride, swthIbcWhitelist } from "@carbon-sdk/constant";
import { Hash } from "@keplr-wallet/crypto";
import { KeplrAccount } from "@carbon-sdk/provider";

import { SimpleMap } from "./type";

export const FuturesDenomOverride: SimpleMap<string> = {
  WBTC: 'BTC',
  USDC: 'USD',
  iusd: 'USD',
};

// Create IBC minimal denom
export function makeIBCMinimalDenom(sourceChannelId: string, coinMinimalDenom: string): string {
	return (
		'ibc/' +
		Buffer.from(Hash.sha256(Buffer.from(`transfer/${sourceChannelId}/${coinMinimalDenom}`)))
			.toString('hex')
			.toUpperCase()
	);
};

const swthIbc = ibcAssetObj.assets[ibcDisplayOverride['swth']];
export const EmbedChainInfos = Object.values(EmbedChainInfosInit).reduce((prev: SimpleMap<ChainInfoExplorerTmRpc>, chainInfo: ChainInfoExplorerTmRpc) => {
	if (swthIbcWhitelist.includes(chainInfo.chainId)) {
		chainInfo.currencies.push({
			...KeplrAccount.SWTH_CURRENCY,
			coinMinimalDenom: makeIBCMinimalDenom(swthIbc.ibc?.dst_channel ?? '', KeplrAccount.SWTH_CURRENCY.coinMinimalDenom),
		})
	}
	prev[chainInfo.chainId] = chainInfo;
	return prev;
}, {});
