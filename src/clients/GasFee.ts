import { BN_ZERO } from "@carbon-sdk/util/number";
import { SimpleMap } from "@carbon-sdk/util/type";
import BigNumber from "bignumber.js";
import { TxGasCostTypeDefaultKey } from "@carbon-sdk/util/tx";
import { DEFAULT_FEE_DENOM } from "@carbon-sdk/constant";

class GasFee {
    public readonly txGasCosts?: SimpleMap<BigNumber>;
    public readonly txGasPrices?: SimpleMap<BigNumber>;

    constructor(txGasCosts: SimpleMap<BigNumber>, txGasPrices: SimpleMap<BigNumber>) {
        this.txGasCosts = txGasCosts
        this.txGasPrices = txGasPrices
    }

    public static instance(txGasCosts: SimpleMap<BigNumber> = {}, txGasPrices: SimpleMap<BigNumber> = {}) {
        return new GasFee(txGasCosts, txGasPrices);
      }

    public getFee(msgTypeUrl: string, denom: string = DEFAULT_FEE_DENOM): BigNumber {
        const minGasPrice = this.getGasPrice(denom);
        const msgGasCost = this.getGasCost(msgTypeUrl);

        return msgGasCost.times(minGasPrice);
    }

    public getGasPrice(denom: string) {
        if (!this.txGasPrices) {
            console.warn("tx gas prices not initialized");
        }

        const gasPrice = this.txGasPrices?.[denom];
        if (!gasPrice) {
            console.warn("denom not supported for paying gas");
        }
        return gasPrice ?? BN_ZERO;
    }

    public getGasCost(msgTypeUrl: string) {
        if (!this.txGasCosts) {
            console.warn("tx gas costs not initialized");
        }
        return this.txGasCosts?.[msgTypeUrl] ?? this.txGasCosts?.[TxGasCostTypeDefaultKey] ?? BN_ZERO;
    }

}

export default GasFee;
