import { Any, } from "@carbon-sdk/codec";
import { Params } from "@carbon-sdk/codec/ethermint/evm/v1/evm";
import { AccessListTx, DynamicFeeTx, LegacyTx, MsgEthereumTx, MsgUpdateParams } from "@carbon-sdk/codec/ethermint/evm/v1/tx";
import { CarbonTx } from "@carbon-sdk/util";
import { ethers } from "ethers";
import { accessListify, arrayify } from "ethers/lib/utils";
import BaseModule from "./base";
import { protobufPackage as evmTxProtobufPackage } from "@carbon-sdk/codec/ethermint/evm/v1/tx";

export type TxData = LegacyTx | AccessListTx | DynamicFeeTx


export class EvmModule extends BaseModule {
    public async sendEvmTx(req: ethers.providers.TransactionRequest, opts?: CarbonTx.SignTxOpts) {
        const wallet = this.getWallet();

        const value = MsgEthereumTx.fromPartial({
            data: constructTxDataAny(req)
        })

        return await wallet.sendTx(
            {
                typeUrl: CarbonTx.Types.MsgEthereumTx,
                value,
            },
            opts
        );
    }

    public async updateParams(p: EvmModule.UpdateParams, opts?: CarbonTx.SignTxOpts) {

        const wallet = this.getWallet();
        const value = MsgUpdateParams.fromPartial({
            authority: p.creator,
            params: Params.fromPartial({
                ...p.params,
                ...p.chainConfig
            })
        })

        return await wallet.sendTx(
            {
                typeUrl: CarbonTx.Types.MsgEvmUpdateParams,
                value,
            },
            opts
        );
    }
}

// Referenced from ethermint v0.21.0 Switcheo/ethermint/x/evm/types/msg.go 
export function constructTxDataAny(req: ethers.providers.TransactionRequest): Any {
    const accessList = req?.accessList && req.accessList.length > 0
    let txDataBz = new Uint8Array()
    let txType = ""
    if (!accessList) {
        txDataBz = LegacyTx.encode(LegacyTx.fromPartial({
            nonce: req.nonce?.toString() ?? "0",
            to: req.to,
            value: req.value?.toString() ?? "0",
            gas: req.gasLimit?.toString() ?? "0",
            gasPrice: req.gasPrice?.toString() ?? "0",
            data: req.data ? arrayify(req.data) : undefined

        })).finish()
        txType = 'LegacyTx'
    }
    if (accessList && req?.maxPriorityFeePerGas && req?.maxFeePerGas) {
        txDataBz = DynamicFeeTx.encode(DynamicFeeTx.fromPartial({
            chainId: req.chainId?.toString() ?? "0",
            nonce: req.nonce?.toString() ?? "0",
            to: req.to,
            value: req.value?.toString() ?? "0",
            gas: req.gasLimit?.toString() ?? "0",
            gasTipCap: req.maxPriorityFeePerGas?.toString() ?? "0",
            gasFeeCap: req.maxFeePerGas?.toString() ?? "0",
            data: req.data ? arrayify(req.data) : undefined,
            accesses: req.accessList ? accessListify(req.accessList) : undefined
        })).finish()
        txType = 'DynamicFeeTx'
    }
    if (accessList) {
        txDataBz = AccessListTx.encode(AccessListTx.fromPartial({
            chainId: req.chainId?.toString() ?? "0",
            nonce: req.nonce?.toString() ?? "0",
            to: req.to,
            value: req.value?.toString() ?? "0",
            gas: parseInt(req.gasLimit?.toString() ?? "0", 10),
            gasPrice: req.gasPrice?.toString() ?? "0",
            data: req.data ? arrayify(req.data) : undefined,
            accesses: req.accessList ? accessListify(req.accessList) : undefined
        })).finish()
        txType = 'AccessListTx'

    }
    return Any.fromPartial({
        typeUrl: `/${evmTxProtobufPackage}.${txType}`,
        value: txDataBz
    });
}

export namespace EvmModule {
    export interface UpdateParams {
        creator: string;
        params: Params;
        chainConfig: ChainConfig;
    }
    export interface Params {
        evmDenom: string;
        enableCreate: boolean;
        enableCall: boolean;
        extraEIPs: Uint8Array;
        allowUnprotectedTxs: boolean;
    }
    export interface ChainConfig {
        homesteadBlock: number;
        daoForkBlock: number;
        daoForkSupport: boolean;
        eip150Block: number;
        eip150Hash: string;
        eip155Block: number;
        eip158Block: number;
        byzantiumBlock: number;
        constantinopleBlock: number;
        petersburgBlock: number;
        istanbulBlock: number;
        londonBlock: number;
        arrowGlacierBlock: number;
        grayGlacierBlock: number;
        mergeNetsplitBlock: number;
        shanghaiBlock: number;
        cancunBlock: number
    }
}





