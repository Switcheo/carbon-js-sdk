import { ChainInfoExplorerTmRpc } from "@carbon-sdk/constant/ibc";
import {
  AccountStore,
  ChainStore,
  QueriesStore,
  AccountWithCosmos,
  QueriesWithCosmos,
} from "@keplr-wallet/stores";
import { IndexedDBKVStore } from "@keplr-wallet/common";
import { ChainInfo } from "@keplr-wallet/types";
import { iOS } from "@carbon-sdk/util/external";
import { EmbedChainInfos } from "@carbon-sdk/util/token";

export class RootStore {
  public readonly chainStore: ChainStore;

  public readonly queriesStore: QueriesStore<QueriesWithCosmos>;
  public readonly accountStore: AccountStore<AccountWithCosmos>;

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
    this.chainStore = new ChainStore<ChainInfo>(embedChainInfos);

    this.queriesStore = new QueriesStore(
      new IndexedDBKVStore("store_queries"),
      this.chainStore,
      getKeplr,
      QueriesWithCosmos,
    );

    this.accountStore = new AccountStore(
      window,
      AccountWithCosmos,
      this.chainStore,
      this.queriesStore,
      {
        defaultOpts: {
          prefetching: false,
          suggestChain: true,
          autoInit: true,
          getKeplr,
        },
      }
    );
  }
}

export function createRootStore(getKeplr: () => Promise<any>, additionalChains?: ChainInfo[]): RootStore | null {
  if (iOS()) {
    return null
  }

  return new RootStore(getKeplr, additionalChains);
}
