import type SDKProvider from "@carbon-sdk/provider/sdk/SDKProvider";
import type { SignTxOpts } from "@carbon-sdk/util/tx";
import type { CarbonWallet } from "@carbon-sdk/wallet/CarbonWallet";
import type { EncodeObject } from "@cosmjs/proto-signing";

export interface ModuleProvider {
  getConnectedWallet: () => CarbonWallet;
  log: (...args: any[]) => void;
}

class BaseModule<TProvider extends ModuleProvider = SDKProvider> {
  constructor(public readonly sdkProvider: TProvider) {}

  protected getWallet(): CarbonWallet {
    return this.sdkProvider.getConnectedWallet();
  }

  protected log(...args: any[]): void {
    this.sdkProvider.log(`[${this.constructor.name}]`, ...args);
  }

  protected async sendTx(msg: EncodeObject, opts: SignTxOpts): Promise<unknown> {
    const wallet = this.getWallet();
    return await wallet.sendTx(msg, opts);
  }
}

export default BaseModule;
