import { Any, registry } from "@carbon-sdk/codec";
import { AccessListTx, DynamicFeeTx, LegacyTx, MsgEthereumTx, protobufPackage as evmTxProtobufPackage } from "@carbon-sdk/codec/ethermint/evm/v1/tx";
import { CarbonTx } from "@carbon-sdk/util";
import { ethers } from "ethers";
import { accessListify, arrayify } from "ethers/lib/utils";
import BaseModule from "./base";

export type TxData = LegacyTx | AccessListTx | DynamicFeeTx

export class EvmModule extends BaseModule {
  public async sendEvmTx(req: ethers.providers.TransactionRequest, opts?: CarbonTx.SignTxOpts) {
    const wallet = this.getWallet();

    const value = MsgEthereumTx.fromPartial({
      data: constructTxDataAny(req),
    })

    return await wallet.sendTx({
      typeUrl: CarbonTx.Types.MsgEthereumTx,
      value,
    }, opts);
  }
}

// Referenced from ethermint v0.21.0 Switcheo/ethermint/x/evm/types/msg.go 
export function constructTxDataAny(req: ethers.providers.TransactionRequest): Any {
  const accessList = req?.accessList ? accessListify(req.accessList).length > 0 : false
  let txData: TxData = LegacyTx.fromPartial({})
  let txType = ""
  if (!accessList) {
    txData = LegacyTx.fromPartial({
      nonce: req.nonce?.toString() ?? "0",
      to: req.to,
      value: req.value?.toString() ?? "0",
      gas: req.gasLimit?.toString() ?? "0",
      gasPrice: req.gasPrice?.toString() ?? "0",
      data: req.data ? arrayify(req.data) : undefined,
    })
    txType = 'LegacyTx';
  }
  if (accessList && req?.maxPriorityFeePerGas && req?.maxFeePerGas) {
    txData = DynamicFeeTx.fromPartial({
      chainId: req.chainId?.toString() ?? "0",
      nonce: req.nonce?.toString() ?? "0",
      to: req.to,
      value: req.value?.toString() ?? "0",
      gas: req.gasLimit?.toString() ?? "0",
      gasTipCap: req.maxPriorityFeePerGas?.toString() ?? "0",
      gasFeeCap: req.maxFeePerGas?.toString() ?? "0",
      data: req.data ? arrayify(req.data) : undefined,
      accesses: req.accessList ? accessListify(req.accessList) : undefined,
    });
    txType = 'DynamicFeeTx';
  }
  if (accessList) {
    txData = AccessListTx.fromPartial({
      chainId: req.chainId?.toString() ?? "0",
      nonce: req.nonce?.toString() ?? "0",
      to: req.to,
      value: req.value?.toString() ?? "0",
      gas: parseInt(req.gasLimit?.toString() ?? "0", 10),
      gasPrice: req.gasPrice?.toString() ?? "0",
      data: req.data ? arrayify(req.data) : undefined,
      accesses: req.accessList ? accessListify(req.accessList) : undefined,
    });
    txType = 'AccessListTx';
  }
  return registry.encodeAsAny({
    typeUrl: `/${evmTxProtobufPackage}.${txType}`,
    value: txData,
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
    extraEIPs: Array<number>;
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
    muirGlacierBlock: number;
    berlinBlock: number;
    londonBlock: number;
    arrowGlacierBlock: number;
    grayGlacierBlock: number;
    mergeNetsplitBlock: number;
    shanghaiBlock: number;
    cancunBlock: number;
  }
}





