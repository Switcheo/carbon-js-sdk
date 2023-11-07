import { Params } from "@carbon-sdk/codec/ethermint/feemarket/v1/feemarket";
import { MsgUpdateParams } from "@carbon-sdk/codec/ethermint/feemarket/v1/tx";
import { CarbonTx } from "@carbon-sdk/util";
import BigNumber from "bignumber.js";
import BaseModule from "./base";



export class FeemarketModule extends BaseModule {


    public async updateParams(params: FeemarketModule.UpdateParams, opts?: CarbonTx.SignTxOpts) {

        const wallet = this.getWallet();
        const value = MsgUpdateParams.fromPartial({
            authority: params.creator,
            params: Params.fromPartial({
                noBaseFee: params.noBaseFee,
                baseFeeChangeDenominator: params.baseFeeChangeDenominator,
                elasticityMultiplier: params.elasticityMulitplier,
                enableHeight: params.enableHeight,
                baseFee: params.baseFee.toString(10),
                minGasPrice: params.minGasPrice.toString(10),
                minGasMultiplier: params.minGasMulitplier.toString(10),
                gasLimitPerBlock: params.gasLimitPerBlock.toString(10),
                maxBaseFee: params.maxBaseFee.toString(10),
            }),
        })

        return await wallet.sendTx(
            {
                typeUrl: CarbonTx.Types.MsgUpdateParams,
                value,
            },
            opts
        );
    }
}



export namespace FeemarketModule {

    export interface UpdateParams {
        creator: string;
        noBaseFee: boolean;
        baseFeeChangeDenominator: number;
        elasticityMulitplier: number;
        enableHeight: number;
        baseFee: BigNumber;
        minGasPrice: BigNumber;
        minGasMulitplier: number;
        gasLimitPerBlock: number;
        maxBaseFee: BigNumber;
    }

}





