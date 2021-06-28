import { MsgCreateOracle } from "@carbon-sdk/codec/oracle/tx";
import BaseModule from "./base";
import Long from "long";
import { CarbonTx } from "@carbon-sdk/util";

export class AdminModule extends BaseModule {

  public async createOracle(params: AdminModule.CreateOracleParams) {
    const wallet = this.getWallet();

    const value = MsgCreateOracle.fromPartial({
        creator: wallet.bech32Address,
        id: params.id,
        description: params.description,
        minTurnoutPercentage: new Long(params.minTurnoutPercentage),
        maxResultAge: new Long(params.maxResultAge),
        securityType: params.securityType,
        resultStrategy: params.resultStrategy,
        resolution: new Long(params.resolution),
        spec: params.spec,
    })

    return await wallet.sendTx({
      typeUrl: CarbonTx.Types.MsgCreateOracle,
      value,
    });
  }

}

export namespace AdminModule {
  export interface CreateOracleParams {
	id: string
	description: string
	minTurnoutPercentage: number
	maxResultAge: number
	securityType: string
	resultStrategy: string
	resolution: number
	spec: string
  }
};
