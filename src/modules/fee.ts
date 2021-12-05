import { FetchUtils } from "@carbon-sdk/util";
import { FeeResult } from "@carbon-sdk/util/transferfees";
import BaseModule from "./base";

export class FeeModule extends BaseModule {

  public async getDepositWithdrawalFees(denom: string) {
    const networkConfig = this.sdkProvider.getConfig();
    const url = `${networkConfig.feeURL}/fees?denom=${denom}`
    const result = await FetchUtils.fetch(url).then(res => res.json()) as FeeResult

    return result
  }

}
