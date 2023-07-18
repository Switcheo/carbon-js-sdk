import { EIP712Types } from "@carbon-sdk/codec";
import { DEFAULT_CARBON_DOMAIN_FIELDS, LEGACY_DEFAULT_EIP712_TYPES } from "@carbon-sdk/constant/eip712";
import AminoTypesMap from "@carbon-sdk/provider/amino/AminoTypesMap";
import { parseChainId } from "@carbon-sdk/util/ethermint";
import { StdSignDoc } from "@cosmjs/amino/build";
import { Coin } from "@cosmjs/proto-signing";
import { TypedDataDomain, TypedDataField } from "@ethersproject/abstract-signer";
import { capitalize } from "lodash";
import { SimpleMap } from "./type";


export interface LegacyEIP712Tx {
    readonly types: SimpleMap<TypedDataField[]>;
    readonly primaryType: string;
    readonly domain: TypedDataDomain;
    readonly message: LegacyEIP712StdSignDoc;
}
export type EIP712Fee = {
    readonly amount: readonly Coin[];
    readonly gas: string;
    readonly feePayer: string;
}

type LegacyEIP712StdSignDoc = StdSignDoc & { fee: EIP712Fee }
function getTypes(msgTypeUrl: string, aminoMsgValue: any): SimpleMap<TypedDataField[]> {
    return {
        ...LEGACY_DEFAULT_EIP712_TYPES,
        ...getMsgValueType(msgTypeUrl, aminoMsgValue, "MsgValue")
    }
}

function getMsgValueType(msgTypeUrl: string, msgValue: any, msgTypeName: string, objectName?: string, nestedType: boolean = false, msgTypeDefinitions: SimpleMap<TypedDataField[]> = {}): SimpleMap<TypedDataField[]> {
    const packageName = msgTypeUrl.split(".").slice(0, -1).join(".")
    const msgFieldType = msgTypeUrl.split(".").pop()!
    const typeName = getTypeName(msgTypeName, objectName, nestedType, false)
    const fieldsDefinition = EIP712Types[packageName][msgFieldType]
    if (isNonZeroField(msgValue)) {
        if (!msgTypeDefinitions[typeName]) {
            msgTypeDefinitions[typeName] = [];
        }
        fieldsDefinition.forEach(({ packageName, name, type }: any) => {
            let fieldValue;
            if (Array.isArray(msgValue)) {
                //Assumption: Take first value in array to determine which fields are populated
                fieldValue = msgValue.length > 0 ? msgValue[0][name] : []
            }
            else {
                fieldValue = msgValue[name]
            }
            if (isNonZeroField(fieldValue)) {
                //For nested structs
                if (packageName) {
                    const isArray = type.includes('[]') ? true : false
                    const objectName = typeName === 'MsgValue' ? 'MsgValue' : typeName.split('Type')[1]
                    const nestedType = getTypeName(name, objectName, true, isArray)
                    msgTypeDefinitions[typeName] = [...msgTypeDefinitions[typeName], { name, type: nestedType }]
                    //Special logic if nested struct is google protobuf's Any type
                    if (isGoogleProtobufAnyPackage(packageName, type)) {
                        const nestedAnyTypeName = isArray ? nestedType.split('[]')[0] : nestedType
                        const nestedAnyValueType = `${nestedAnyTypeName}Value`
                        msgTypeDefinitions[nestedAnyTypeName] = [{ name: "type", type: "string" }, { name: "value", type: nestedAnyValueType }]
                        const anyObjectTypeNameSplit = nestedAnyTypeName.split('Type')[1]
                        const messageTypeUrl = AminoTypesMap.fromAmino(fieldValue).typeUrl
                        getMsgValueType(messageTypeUrl, fieldValue.value, "value", anyObjectTypeNameSplit, true, msgTypeDefinitions)
                    }
                    else {
                        const typeStructName = type.includes('[]') ? type.split('[]')[0] : type
                        const messageTypeUrl = `${packageName}.${typeStructName}`
                        getMsgValueType(messageTypeUrl, fieldValue, name, objectName, true, msgTypeDefinitions)

                    }
                }
                else {
                    msgTypeDefinitions[typeName] = [...msgTypeDefinitions[typeName], { name, type }]
                }
            }
        })
    }
    return msgTypeDefinitions
}

function getTypeName(name: string, objectName?: string, nestedType: boolean = false, isArray: boolean = false) {
    if (nestedType) {
        return `Type${objectName === 'MsgValue' ? '' : objectName}${name.split('_').map(subName => capitalize(subName)).join('')}${isArray ? '[]' : ''}`
    }
    return name
}

function isGoogleProtobufAnyPackage(packageName: string, type: string): boolean {
    return packageName === '/google.protobuf' && type == 'Any'
}

function isNonZeroField(fieldValue: any): boolean {
    // zero fields are considered falsey
    if (fieldValue == "0") {
        return false;
    }
    // empty arrays are considered truthy
    if (Array.isArray(fieldValue)) {
        return fieldValue.length !== 0
    }
    // empty objects are considered truthy
    if (fieldValue && typeof fieldValue === 'object' && Object.keys(fieldValue).length === 0) {
        return false
    }
    return fieldValue
}


export function legacyConstructEIP712Tx(doc: LegacyEIP712StdSignDoc): LegacyEIP712Tx {
    // Legacy EIP-712 can only accept batch msgs of the same type
    const msg = doc.msgs[0]
    const eip712Tx = {
        types: getTypes(AminoTypesMap.fromAmino(msg).typeUrl, msg.value),
        primaryType: "Tx",
        domain: { ...DEFAULT_CARBON_DOMAIN_FIELDS, chainId: parseChainId(doc.chain_id) },
        message: doc
    }
    return eip712Tx
}
