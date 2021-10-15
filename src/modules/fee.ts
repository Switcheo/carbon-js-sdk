import { FeeResult } from "@carbon-sdk/util/transferfees";
import BaseModule from "./base";

export class FeeModule extends BaseModule {

  public async getDepositWithdrawalFees(denom: string) {
    const networkConfig = this.sdkProvider.getConfig();
    const url = `${networkConfig.feeURL}/fees?denom=${denom}`
    const result = await fetch(url).then(res => res.json()) as FeeResult

    return result
  }

}
