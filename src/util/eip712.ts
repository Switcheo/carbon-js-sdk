import { DEFAULT_CARBON_DOMAIN_FIELDS, DEFAULT_EIP712_TYPES } from "@carbon-sdk/constant/eip712";
import { StdSignDoc } from "@cosmjs/amino/build";
import { TypedDataDomain, TypedDataField } from "@ethersproject/abstract-signer";
import { TypeUtils } from ".";
import { parseChainId } from "@carbon-sdk/util/ethermint";
import { EIP712Types, registry } from "@carbon-sdk/codec";
import AminoTypesMap from "@carbon-sdk/provider/amino/AminoTypesMap";
import { Coin } from "@cosmjs/proto-signing";


export interface EIP712Tx {
    readonly types: TypeUtils.SimpleMap<TypedDataField[]>;
    readonly primaryType: string;
    readonly domain: TypedDataDomain;
    readonly message: Eip712StdSignDoc;
}
export type EIP712Fee = {
    readonly amount: readonly Coin[];
    readonly gas: string;
    readonly feePayer: string;
}

type Eip712StdSignDoc = StdSignDoc & { fee: EIP712Fee }
function getTypes(msgTypeUrl: string, aminoMsgValue: any): TypeUtils.SimpleMap<TypedDataField[]> {
    return {
        ...DEFAULT_EIP712_TYPES,
        ...getMsgValueType(msgTypeUrl, aminoMsgValue, "MsgValue")
    }
}

function getMsgValueType(msgTypeUrl: string, aminoMsgValue: any, msgTypeName: string, msgTypeDefinitions: TypeUtils.SimpleMap<TypedDataField[]> = {}): TypeUtils.SimpleMap<TypedDataField[]> {
    const packageName = msgTypeUrl.split(".").slice(0, -1).join(".")
    const msgFieldType = msgTypeUrl.split(".").pop()!
    const fieldsDefinition = EIP712Types[packageName][msgFieldType]
    fieldsDefinition.forEach(({ packageName, name, type }: any) => {
        const fieldValue = aminoMsgValue[name]
        if (isNonZeroField(fieldValue)) {
            if (!msgTypeDefinitions[msgTypeName]) {
                msgTypeDefinitions[msgTypeName] = [];
            }
            msgTypeDefinitions[msgTypeName] = [...msgTypeDefinitions[msgTypeName], { name, type }]
            if (packageName) {
                const typeUrl = `${packageName}.${type}`
                const nestedAminoMsgValue = isMessage(typeUrl) ? aminoMsgValue[name]["value"] : aminoMsgValue[name]
                getMsgValueType(typeUrl, nestedAminoMsgValue, type, msgTypeDefinitions)
            }
        }
    })
    return msgTypeDefinitions
}

function isNonZeroField(fieldValue: any): boolean {
    if (Array.isArray(fieldValue)) {
        return !fieldValue.length
    }
    return fieldValue
}

function isMessage(msgTypeUrl: string) {
    return registry.lookupType(msgTypeUrl) !== undefined
}

export function constructEIP712Tx(doc: Eip712StdSignDoc): EIP712Tx {
    // EIP-712 can only accept batch msgs of the same type
    const msg = doc.msgs[0]
    const eip712Tx = {
        types: getTypes(AminoTypesMap.fromAmino(msg).typeUrl, msg.value),
        primaryType: "Tx",
        domain: { ...DEFAULT_CARBON_DOMAIN_FIELDS, chainId: parseChainId(doc.chain_id) },
        message: doc
    }
    return eip712Tx
}