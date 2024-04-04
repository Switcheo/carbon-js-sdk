import { DEFAULT_FEE_DENOM } from "@carbon-sdk/constant";
import { BN_ZERO } from "@carbon-sdk/util/number";
import { TxGasCostTypeDefaultKey } from "@carbon-sdk/util/tx";
import { SimpleMap } from "@carbon-sdk/util/type";
import BigNumber from "bignumber.js";

class GasFee {
    constructor(
        public readonly txGasCosts: SimpleMap<BigNumber>,
        public readonly txGasPrices: SimpleMap<BigNumber>,
        public readonly defaultFeeDenom = DEFAULT_FEE_DENOM,
    ) {
    }

    public getFee(msgTypeUrl: string, denom: string = DEFAULT_FEE_DENOM): BigNumber | null {
        const minGasPrice = this.getGasPrice(denom);

        if (!minGasPrice) return null;

        const msgGasCost = this.getGasCost(msgTypeUrl);
        return msgGasCost.times(minGasPrice);
    }

    public getGasPrice(denom: string): BigNumber | null {
        const gasPrice = this.txGasPrices[denom];
        if (!gasPrice) {
            console.warn("denom not supported for paying gas", denom);
        }
        return gasPrice ?? null;
    }

    public getGasCost(msgTypeUrl: string): BigNumber {
        return this.txGasCosts[msgTypeUrl] ?? this.txGasCosts[TxGasCostTypeDefaultKey] ?? BN_ZERO;
    }

}

export default GasFee;
