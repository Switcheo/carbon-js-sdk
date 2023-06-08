import CarbonSDK from "@carbon-sdk/CarbonSDK";
import { Any } from "@carbon-sdk/codec";
import { PubKey as EthSecp256k1PubKey } from "@carbon-sdk/codec/ethermint/crypto/v1/ethsecp256k1/keys";
import { ethers } from "ethers";

export const ETH_SECP256K1_TYPE = '/ethermint.crypto.v1.ethsecp256k1.PubKey'

export const PUBLIC_KEY_SIGNING_TEXT = 'Sign your public key to merge your Carbon account: '

export function encodeAnyEthSecp256k1PubKey(pubkey: Uint8Array): Any {
    const ethPubKey = EthSecp256k1PubKey.fromPartial({
        key: pubkey,
    })
    return Any.fromPartial({
        typeUrl: ETH_SECP256K1_TYPE,
        value: EthSecp256k1PubKey.encode(ethPubKey).finish(),
    })

}

export function parseChainId(evmChainId?: string): string {
    // eslint check if workaround is sound
    if (!evmChainId) {
        throw new Error("chain-id is undefined")
    }
    const chainId = evmChainId.trim()

    if (chainId.length > 48) {
        throw new Error(`chain-id '${chainId}' cannot exceed 48 chars`)
    }

    if (!chainId.match(/^[a-z]+_\d+-\d+$/)) {
        throw new Error(`chain-id '${chainId}' does not conform to the required format`)
    }
    return chainId.split("_")[1].split("-")[0]
}

export async function populateEvmTransactionDetails(api: CarbonSDK, req: ethers.providers.TransactionRequest): Promise<ethers.providers.TransactionRequest> {
    const provider = api.evmJsonRpc
    const evmHexAddress = api.wallet?.evmHexAddress ?? ''
    const request: ethers.providers.TransactionRequest = {
        to: req.to ?? '',
        from: req.from ?? api.wallet?.evmHexAddress,
        nonce: req.nonce ?? (await provider.getTransactionCount(evmHexAddress)),
        data: req.data,
        value: `0x${Number(req.value).toString(16)}`,
        chainId: req.chainId ?? Number(parseChainId(await api.wallet?.getEvmChainId())),
        // type = 0, 1 or 2 where 0 = legacyTx, 1 = AccessListTx, 2 = DynamicTx. Defaults to DynamicTx 
        type: req.type ?? 2,
        accessList: req.accessList,
    }
    const gasLimit = (await provider.estimateGas(request)).toHexString()
    const gasFee = await provider.getFeeData()
    if (!req.gasPrice) {
        // Dynamic Tx
        return {
            ...request,
            maxPriorityFeePerGas: req.maxPriorityFeePerGas ?? gasFee.maxPriorityFeePerGas?.toHexString(),
            maxFeePerGas: req.maxFeePerGas ?? gasFee.maxFeePerGas?.toHexString(),
            gasLimit,
            type: 2
        }
    }
    if (req.accessList) {
        // AccessList Tx 
        return {
            ...request,
            gasLimit,
            type: 1
        }
    }
    // LegacyTx
    return {
        ...request,
        gasLimit,
        type: 0
    }

}
