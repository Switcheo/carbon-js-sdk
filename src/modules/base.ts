import { SDKProvider } from "@carbon-sdk/provider";
import { CarbonTx } from "@carbon-sdk/util";
import { CarbonWallet } from "@carbon-sdk/wallet";
import { EncodeObject } from "@cosmjs/proto-signing";

class BaseModule {
  constructor(public readonly sdkProvider: SDKProvider) {}

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
