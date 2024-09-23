import { TypeUtils } from "../lib";
import protobufDefinitons from './protobuf-def.json'

export type TypeDefinition = {
    name: string;
    type: string;
    packageName?: string;
}
export type EIP712TypesDefinition = TypeUtils.SimpleMap<TypeUtils.SimpleMap<Array<TypeDefinition>>>



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
    const packageName = getPackageName(field.typeName)
    const fieldTypeName = field.typeName?.split('.').pop()
    if (packageName) {
        if (packageName !== "google.protobuf") {
            fieldDescriptor.packageName = `/${packageName}`
        }
        else if (!convertGoogleProtobufTypingToPrimitive(fieldTypeName.toLowerCase())) {
            fieldDescriptor.packageName = `/${packageName}`
        }
    }
    return fieldDescriptor
}



function getFieldType(field: any): string {
    const fieldLabelRepeated = field.label == 'LABEL_REPEATED' ? true : false
    const fieldTypeName = field.typeName?.split('.').pop()

    if (field.type === 'TYPE_MESSAGE') {
        const packageName = getPackageName(field.typeName)
        if (packageName && packageName == "google.protobuf") {
            const googleProtobufType = convertGoogleProtobufTypingToPrimitive(fieldTypeName.toLowerCase())
            const typeName = googleProtobufType ? googleProtobufType : fieldTypeName
            return `${typeName}${fieldLabelRepeated ? '[]' : ''}`
        }
        return `${fieldTypeName}${fieldLabelRepeated ? '[]' : ''}`
    }
    return `${getSolidityTyping(field.type.split('_').pop().toLowerCase())}${fieldLabelRepeated ? '[]' : ''}`
}

function getPackageName(typeName: string): string {
    if (typeName) {
        // Remove type definition from package path
        const packageDirectories = typeName.substring(1).split(".")
        packageDirectories.pop()
        return packageDirectories.join(".")
    }
    return ""

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

function convertGoogleProtobufTypingToPrimitive(fieldType: string): string {
    switch (fieldType) {
        case 'duration':
        case 'timestamp':
        case 'stringvalue':
            return 'string'
        case 'int64value':
            return 'int64'
        case 'uint64value':
            return 'uint64'
        case 'int32value':
            return 'int32'
        case 'uint32value':
            return 'uint32'
        case 'boolvalue':
            return 'bool'
        case 'bytesvalue':
            return 'uint8[]'
        default:
    }
    return ''
}

