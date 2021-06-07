import CarbonQueryClient from "@carbon-sdk/CarbonQueryClient";
import { CarbonTx } from "@carbon-sdk/util/tx";
import { CarbonWallet } from "@carbon-sdk/wallet";
import { EncodeObject } from "@cosmjs/proto-signing";

export interface SDKProvider {
  query: CarbonQueryClient;
  log: (...args: any[]) => void;
  getConnectedWallet: () => CarbonWallet;
}

class BaseModule {
  constructor(
    public readonly sdkProvider: SDKProvider,
  ) { }

  protected getWallet(): CarbonWallet {
    return this.sdkProvider.getConnectedWallet();
  }

  protected log(...args: any[]): void {
    this.sdkProvider.log(`[${this.constructor.name}]`, ...args);
  }

  protected async sendTx(msg: EncodeObject, opts: CarbonTx.SignTxOpts): Promise<unknown> {
    const wallet = this.getWallet();
    return await wallet.sendTx(msg, opts);
  }
}

export default BaseModule;
