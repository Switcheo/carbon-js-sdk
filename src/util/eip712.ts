import { DEFAULT_CARBON_DOMAIN_FIELDS, DEFAULT_EIP712_TYPES } from "@carbon-sdk/constant/eip712";
import { StdSignDoc } from "@cosmjs/amino/build";
import { TypedDataDomain, TypedDataField } from "@ethersproject/abstract-signer";
import { TypeUtils } from ".";
import { parseChainId } from "@carbon-sdk/util/ethermint";
import { EIP712Types, registry } from "@carbon-sdk/codec";
import AminoTypesMap from "@carbon-sdk/provider/amino/AminoTypesMap";


export interface EIP712Tx {
    readonly types: TypeUtils.SimpleMap<Array<TypedDataField>>;
    readonly primaryType: string;
    readonly domain: TypedDataDomain;
    readonly message: StdSignDoc
}

function getTypes(msgTypeUrl: string, aminoMsgValue: any): TypeUtils.SimpleMap<Array<TypedDataField>> {
    return {
        ...DEFAULT_EIP712_TYPES,
        ...getMsgValueType(msgTypeUrl, aminoMsgValue, "MsgValue"),
    }
}

function getMsgValueType(msgTypeUrl: string, aminoMsgValue: any, msgTypeName: string, msgTypeDefinitions: TypeUtils.SimpleMap<Array<TypedDataField>> = {}): TypeUtils.SimpleMap<Array<TypedDataField>> {
    const packageName = msgTypeUrl.split(".").splice(-1).join()
    const msgFieldType = msgTypeUrl.split(".").pop()!
    const fieldsDefinition = EIP712Types[packageName][msgFieldType]
    const nonZeroFieldsDefinition: Array<TypedDataField> = []
    fieldsDefinition.forEach(({ packageName, name, type }: any) => {
        const fieldValue = aminoMsgValue[name]
        if (fieldValue && fieldValue!.length) {
            nonZeroFieldsDefinition.push({ name, type })
            msgTypeDefinitions[msgTypeName] = { ...msgTypeDefinitions[msgTypeName], ...nonZeroFieldsDefinition }
            if (packageName) {
                const typeUrl = `${packageName}.${type}`
                const nestedAminoMsgValue = isMessage(typeUrl) ? aminoMsgValue[name]["value"] : aminoMsgValue[name]
                getMsgValueType(typeUrl, nestedAminoMsgValue, type, msgTypeDefinitions)
            }
        }
    })
    return msgTypeDefinitions
}

function isMessage(msgTypeUrl: string) {
    return registry.lookupType(msgTypeUrl) !== undefined
}

export function constructEIP712Tx(doc: StdSignDoc): EIP712Tx {
    // EIP-712 can only accept batch msgs of the same type
    const msg = doc.msgs[0]
    return {
        types: getTypes(AminoTypesMap.fromAmino(msg).typeUrl, msg.value),
        primaryType: "Tx",
        domain: { ...DEFAULT_CARBON_DOMAIN_FIELDS, chainId: parseChainId(doc.chain_id) },
        message: doc
    }
}