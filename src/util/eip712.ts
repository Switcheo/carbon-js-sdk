import { DEFAULT_CARBON_DOMAIN_FIELDS, DEFAULT_EIP712_TYPES } from "@carbon-sdk/constant/eip712";
import { StdSignDoc } from "@cosmjs/amino/build";
import { TypedDataDomain, TypedDataField } from "@ethersproject/abstract-signer";
import { TypeUtils } from ".";
import { parseChainId } from "@carbon-sdk/util/ethermint";
import { EIP712Types, registry } from "@carbon-sdk/codec";
import AminoTypesMap from "@carbon-sdk/provider/amino/AminoTypesMap";
import { Coin } from "@cosmjs/proto-signing";
import { capitalize } from "lodash";
import { AminoMsg } from "@cosmjs/amino";


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

function getMsgValueType(msgTypeUrl: string, aminoMsgValue: any, msgTypeName: string, objectName?: string, nestedType: boolean = false, msgTypeDefinitions: TypeUtils.SimpleMap<TypedDataField[]> = {}): TypeUtils.SimpleMap<TypedDataField[]> {
    const packageName = msgTypeUrl.split(".").slice(0, -1).join(".")
    const msgFieldType = msgTypeUrl.split(".").pop()!
    const typeName = getTypeName(msgTypeName, objectName, nestedType, false)
    const fieldsDefinition = EIP712Types[packageName][msgFieldType]

    const objectValue = getFieldValue(aminoMsgValue)
    if (isNonZeroField(objectValue)) {
        if (!msgTypeDefinitions[typeName]) {
            msgTypeDefinitions[typeName] = [];
        }
        fieldsDefinition.forEach(({ packageName, name, type }: any) => {
            //Assumption: Take first value in array to determine which fields are populated
            const fieldValue = Array.isArray(aminoMsgValue) ? aminoMsgValue[0][name] : aminoMsgValue[name]
            if (isNonZeroField(fieldValue)) {
                //For nested structs
                if (packageName) {
                    const isArray = type.includes('[]') ? true : false
                    const objectName = typeName === 'MsgValue' ? 'MsgValue' : typeName.split('Type')[1]
                    const nestedType = getTypeName(name, objectName, true, isArray)
                    msgTypeDefinitions[typeName] = [...msgTypeDefinitions[typeName], { name, type: nestedType }]
                    const objectNameSplit = typeName === 'MsgValue' ? 'MsgValue' : objectName.split(/(?=[A-Z])/).join('')
                    //Special logic if nested struct is google protobuf's Any type
                    if (isGoogleProtobufAnyPackage(packageName, type)) {
                        const nestedAnyTypeName = isArray ? nestedType.split('[]')[0] : nestedType
                        const nestedAnyValueType = `${nestedAnyTypeName}Value`
                        msgTypeDefinitions[nestedAnyTypeName] = [{ name: "type", type: "string" }, { name: "value", type: nestedAnyValueType }]
                        const anyObjectTypeNameSplit = nestedAnyTypeName.split('Type')[1].split(/(?=[A-Z])/).join('')
                        const messageTypeUrl = AminoTypesMap.fromAmino(fieldValue).typeUrl
                        getMsgValueType(messageTypeUrl, fieldValue.value, "value", anyObjectTypeNameSplit, true, msgTypeDefinitions)
                    }
                    else {
                        const typeStructName = type.includes('[]') ? type.split('[]')[0] : type
                        const messageTypeUrl = `${packageName}.${typeStructName}`
                        getMsgValueType(messageTypeUrl, fieldValue, name, objectNameSplit, true, msgTypeDefinitions)

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
    if (Array.isArray(fieldValue)) {
        return fieldValue.length !== 0
    }
    if (fieldValue && typeof fieldValue === 'object' && Object.keys(fieldValue).length === 0) {
        return false
    }
    return fieldValue
}

function getFieldValue(aminoMsgValue: any): any {
    if (Array.isArray(aminoMsgValue)) {
        //Assumption: Take first value in array to determine fieldType later on
        return aminoMsgValue[0]
    }
    return aminoMsgValue
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