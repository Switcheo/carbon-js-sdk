import { TypeUtils } from "../lib";
import protobufDefinitons from './protobuf-def.json'

export type TypeDefinition = {
    name: string;
    type: string;
    packageName?: string;
}
export type EIP712TypesDefinition = TypeUtils.SimpleMap<TypeUtils.SimpleMap<Array<TypeDefinition>>>

const pointerMessageFieldTypes = ['stringvalue', 'boolvalue']


export function generateEIP712types(): EIP712TypesDefinition {
    const eip712TypesDefinition: EIP712TypesDefinition = {}

    protobufDefinitons.file.forEach((file) => {
        const messages = file.messageType
        if (messages && messages.length > 0) {
            generateMsgsFieldTypes(file, messages, eip712TypesDefinition)
        }
    })
    return eip712TypesDefinition

}

function generateMsgsFieldTypes(file: any, messages: any[], eip712TypesDefinition: EIP712TypesDefinition) {
    if (messages && messages.length > 0) {
        messages.forEach((message: any) => {
            const messageName = message.name
            let fieldsMapping: TypeDefinition[] = []
            if (message.field && message.field.length > 0) {
                fieldsMapping = generateMsgFieldTypes(message)
            }
            eip712TypesDefinition[`/${file.package}`] = {
                ...eip712TypesDefinition[`/${file.package}`],
                [messageName]: fieldsMapping,
            }
        })
    }

}

function generateMsgFieldTypes(message: any): TypeDefinition[] {
    const fieldsMapping: TypeDefinition[] = []
    if (message.field && message.field.length > 0) {
        message.field.forEach((field: any) => {
            const fieldDescriptor = generateFieldDescription(field)
            fieldsMapping.push(fieldDescriptor)
        })
    }

    return fieldsMapping
}

function generateFieldDescription(field: any): TypeDefinition {
    const fieldName = field.name
    const fieldType = getFieldType(field)
    const fieldDescriptor: TypeDefinition = {
        name: fieldName,
        type: fieldType,
    }
    if (field.typeName) {
        // Remove type definition from package path
        const packageDirectories = field.typeName.substring(1).split(".")
        packageDirectories.pop()
        const packageName = packageDirectories.join(".")
        fieldDescriptor.packageName = `/${packageName}`
    }
    return fieldDescriptor
}


function getFieldType(field: any): string {
    const fieldLabelRepeated = field.label == 'LABEL_REPEATED' ? true : false
    const fieldTypeName = field.typeName?.split('.').pop()
    if (pointerMessageFieldTypes.includes(fieldTypeName?.toLowerCase())) {
        return `string${fieldTypeName
            ?.toLowerCase()
            .substring(0, fieldTypeName?.toLowerCase().length - 5)
            ? '[]'
            : ''
            }`
    }
    if (field.type === 'TYPE_MESSAGE') {
        return `${fieldTypeName}${fieldLabelRepeated ? '[]' : ''}`
    }
    return `${getSolidityTyping(field.type.split('_').pop().toLowerCase())}${fieldLabelRepeated ? '[]' : ''
        }`
}

function getSolidityTyping(fieldType: string): string {
    switch (fieldType) {
        case 'timestamp':
        case 'string':
            return 'string'
        case 'bool':
            return 'bool'
        case 'int':
            return 'int64'
        case 'int8':
            return 'int8'
        case 'int16':
            return 'int16'
        case 'int32':
            return 'int32'
        case 'int64':
            return 'int64'
        case 'uint':
            return 'uint64'
        case 'uint8:':
            return 'uint8'
        case 'bytes':
            return 'uint8[]'
        case 'uint16':
            return 'uint16'
        case 'uint32':
            return 'uint32'
        case 'uint64':
            return 'uint64'
        default:
    }
    return ''
}

