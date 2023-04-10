import { Any, registry, } from "@carbon-sdk/codec";
import { ChainConfig, Params } from "@carbon-sdk/codec/ethermint/evm/v1/evm";
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

    return await wallet.sendTx({
        typeUrl: CarbonTx.Types.MsgEthereumTx,
        value,
    }, opts);
  }

  public async updateParams(p: EvmModule.UpdateParams, opts?: CarbonTx.SignTxOpts) {
    const wallet = this.getWallet();
    const value = MsgUpdateParams.fromPartial({
      authority: p.creator,
      params: Params.fromPartial({
        evmDenom: p.params.evmDenom,
        enableCreate: p.params.enableCreate,
        enableCall: p.params.enableCall,
        extraEips: p.params.extraEIPs,
        allowUnprotectedTxs: p.params.allowUnprotectedTxs,
        chainConfig: ChainConfig.fromPartial({
          homesteadBlock: p.chainConfig.homesteadBlock.toString(10),
          daoForkBlock: p.chainConfig.daoForkBlock.toString(10),
          daoForkSupport: p.chainConfig.daoForkSupport,
          eip150Block: p.chainConfig.eip150Block.toString(10),
          eip150Hash: p.chainConfig.eip150Hash,
          eip155Block: p.chainConfig.eip155Block.toString(10),
          eip158Block: p.chainConfig.eip158Block.toString(10),
          byzantiumBlock: p.chainConfig.byzantiumBlock.toString(10),
          constantinopleBlock: p.chainConfig.constantinopleBlock.toString(10),
          petersburgBlock: p.chainConfig.petersburgBlock.toString(10),
          istanbulBlock: p.chainConfig.istanbulBlock.toString(10),
          muirGlacierBlock: p.chainConfig.muirGlacierBlock.toString(10),
          berlinBlock: p.chainConfig.berlinBlock.toString(10),
          londonBlock: p.chainConfig.londonBlock.toString(10),
          arrowGlacierBlock: p.chainConfig.arrowGlacierBlock.toString(10),
          grayGlacierBlock: p.chainConfig.grayGlacierBlock.toString(10),
          mergeNetsplitBlock: p.chainConfig.mergeNetsplitBlock.toString(10),
          shanghaiBlock: p.chainConfig.shanghaiBlock.toString(10),
          cancunBlock: p.chainConfig.cancunBlock.toString(10),
        })
      })
    });

    return await wallet.sendTx({
      typeUrl: CarbonTx.Types.MsgEvmUpdateParams,
      value,
    }, opts);
  }
}

// Referenced from ethermint v0.21.0 Switcheo/ethermint/x/evm/types/msg.go 
export function constructTxDataAny(req: ethers.providers.TransactionRequest): Any {
  const accessList = req?.accessList && req.accessList.length > 0
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





