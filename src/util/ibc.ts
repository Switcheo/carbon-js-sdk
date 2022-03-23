import { AssetData, ChainInfoExplorerTmRpc, EmbedChainInfosInit, tokenBlacklist } from "@carbon-sdk/constant";
import { Hash } from "@keplr-wallet/crypto";
import osmosisAssetLists from "assetlists/osmosis-1/osmosis-1.assetlist.json";
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
  if (chainInfo.chainId === "osmosis-1") {
    const osmoAssetFiltered = osmosisAssetLists.assets.filter((asset: AssetData) => {
      const assetDenom = asset.symbol.toLowerCase();
      return assetDenom !== "osmo" && assetDenom !== "ion" && !tokenBlacklist.includes(assetDenom);
    });

    osmoAssetFiltered.forEach((asset: AssetData) => {
      chainInfo.currencies.push({
        coinDenom: asset.symbol,
        coinMinimalDenom: asset.base,
        coinDecimals: asset.denom_units[1]?.exponent ?? 0,
        coinGeckoId: asset.coingecko_id,
      })
    })
	}
	prev[chainInfo.chainId] = chainInfo;
	return prev;
}, {});
