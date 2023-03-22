import { Any, registry } from "@carbon-sdk/codec";
import { PubKey as EthSecp256k1PubKey } from "@carbon-sdk/codec/ethermint/crypto/v1/ethsecp256k1/keys";

export const ETH_SECP256K1_TYPE = '/ethermint.crypto.v1.ethsecp256k1.PubKey'

export function encodeAnyEthSecp256k1PubKey(pubkey: Uint8Array): Any {
    return registry.encodeAsAny({
        typeUrl: ETH_SECP256K1_TYPE,
        value: EthSecp256k1PubKey.fromPartial({
            key: pubkey,
        }),
    });
}

export function parseChainId(evmChainId: string): string {
    const chainId = evmChainId.trim()

    if (chainId.length > 48) {
        throw new Error(`chain-id '${chainId}' cannot exceed 48 chars`)
    }

    if (!chainId.match(/^[0-9a-f]+$/i)) {
        throw new Error(`chain-id '${chainId}' does not conform to the required format`)
    }
    return chainId.split("_")[1].split("-")[0]
}
