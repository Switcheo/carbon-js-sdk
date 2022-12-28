import { ChainInfoExplorerTmRpc, ibcDefaultGas } from "@carbon-sdk/constant/ibc";
// import { iOS } from "@carbon-sdk/util/external";
import { EmbedChainInfos } from "@carbon-sdk/util/ibc";
import { IndexedDBKVStore } from "@keplr-wallet/common";
import {
  AccountStore, ChainStore, CosmosAccount, CosmosQueries, CosmwasmAccount, CosmwasmQueries, QueriesStore,
} from "@keplr-wallet/stores";
import { ChainInfo, Keplr } from "@keplr-wallet/types";
import EventEmitter from "eventemitter3";
import semver from "semver";

export class RootStore {
  public readonly chainStore: ChainStore;

  public readonly queriesStore: QueriesStore<
    [CosmosQueries, CosmwasmQueries]
  >;

  public readonly accountStore: AccountStore<
    [CosmosAccount, CosmwasmAccount]
  >;

  constructor(getKeplr: () => Promise<any>, additionalChains?: ChainInfo[]) {
    const embedChainInfos = Object.values(EmbedChainInfos).map((chainInfo: ChainInfoExplorerTmRpc) => {
      const newChainInfo: any = chainInfo;
      if (newChainInfo.tmRpc) delete newChainInfo.tmRpc;
      if (newChainInfo.explorerUrlToTx) delete newChainInfo.explorerUrlToTx;
      return newChainInfo as ChainInfo
    }) as ChainInfo[];
    if (additionalChains && additionalChains?.length > 0) {
      embedChainInfos.push(...additionalChains)
    }

    const eventListener = (() => {
      // On client-side (web browser), use the global window object.
      if (typeof window !== "undefined") {
        return window;
      }

      // On server-side (nodejs), there is no global window object.
      // Alternatively, use the event emitter library.
      const emitter = new EventEmitter();
      return {
        addEventListener: (type: string, fn: () => unknown) => {
          emitter.addListener(type, fn);
        },
        removeEventListener: (type: string, fn: () => unknown) => {
          emitter.removeListener(type, fn);
        },
      };
    })();

    async function suggestChainFromWindow(
      keplr: Keplr,
      chainInfo: ChainInfo
    ) {
      const info = {
        ...chainInfo,
        stakeCurrency: {
          ...chainInfo.stakeCurrency,
          coinImageUrl: chainInfo.stakeCurrency.coinImageUrl
            ? window.origin + chainInfo.stakeCurrency.coinImageUrl
            : undefined,
        },
        currencies: chainInfo.currencies.map((currency) => ({
          ...currency,
          coinImageUrl: currency.coinImageUrl
            ? window.origin + currency.coinImageUrl
            : undefined,
        })),
        feeCurrencies: chainInfo.feeCurrencies.map((currency) => ({
          ...currency,
          coinImageUrl: currency.coinImageUrl
            ? window.origin + currency.coinImageUrl
            : undefined,
        })),
      };
      await keplr.experimentalSuggestChain(info);
    }

    this.chainStore = new ChainStore<ChainInfo>(embedChainInfos);

    this.queriesStore = new QueriesStore(
      new IndexedDBKVStore("store_web_queries"),
      this.chainStore,
      CosmosQueries.use(),
      CosmwasmQueries.use(),
    );

    this.accountStore = new AccountStore(
      eventListener,
      this.chainStore,
      () => {
        return {
          suggestChain: true,
          suggestChainFn: async (keplr, chainInfo) => {
            if (
              keplr.mode === "mobile-web" &&
              // In keplr mobile below 0.10.9, there is no receiver for the suggest chain.
              // Therefore, it cannot be processed because it takes infinite pending.
              // As of 0.10.10, experimental support was added.
              !semver.satisfies(keplr.version, ">=0.10.10")
            ) {
              // Can't suggest the chain on mobile web.
              return;
            }

            await suggestChainFromWindow(keplr, chainInfo.raw);
          },
          autoInit: true,
          getKeplr,
        };
      },
      CosmosAccount.use({
        queriesStore: this.queriesStore,
        msgOptsCreator: () => ({ ibcTransfer: { gas: ibcDefaultGas } }),
      }),
      CosmwasmAccount.use({ queriesStore: this.queriesStore }),
    );
  }
}

export function createRootStore(getKeplr: () => Promise<any>, additionalChains?: ChainInfo[]): RootStore | null {
  // TODO: Un-comment if Safari iOS mobile crashes the page
  // if (iOS()) {
  //   return null
  // }

  return new RootStore(getKeplr, additionalChains);
}
