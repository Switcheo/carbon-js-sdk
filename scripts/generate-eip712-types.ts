import fs from "fs";
import path from "path";

export type TypeDefinition = {
  name: string;
  type: string;
  packageName?: string;
};
export type EIP712TypesDefinition = Record<string, Record<string, TypeDefinition[]>>;

type ProtobufField = {
  name: string;
  type: string;
  typeName?: string;
  label?: string;
};
type ProtobufMessage = {
  name: string;
  field?: ProtobufField[];
};
type ProtobufFile = {
  package: string;
  messageType?: ProtobufMessage[];
};
type ProtobufDefinitions = {
  file: ProtobufFile[];
};

const descriptorPath = path.join(__dirname, "protobuf-def.json");
const fallbackPath = path.join(__dirname, "eip712-types.json");

export function generateEIP712types(): EIP712TypesDefinition {
  if (!fs.existsSync(descriptorPath)) {
    return JSON.parse(fs.readFileSync(fallbackPath, "utf8")) as EIP712TypesDefinition;
  }

  const protobufDefinitions = JSON.parse(fs.readFileSync(descriptorPath, "utf8")) as ProtobufDefinitions;
  const definition: EIP712TypesDefinition = {};
  for (const file of protobufDefinitions.file) {
    if (file.messageType?.length) {
      generateMessageFieldTypes(file, file.messageType, definition);
    }
  }

  const temporary = `${fallbackPath}.tmp`;
  fs.writeFileSync(temporary, `${JSON.stringify(definition, null, 2)}\n`);
  fs.renameSync(temporary, fallbackPath);
  return definition;
}

function generateMessageFieldTypes(file: ProtobufFile, messages: ProtobufMessage[], definition: EIP712TypesDefinition): void {
  for (const message of messages) {
    const fields = message.field?.length ? generateMessageFields(message) : [];
    definition[`/${file.package}`] = {
      ...definition[`/${file.package}`],
      [message.name]: fields,
    };
  }
}

function generateMessageFields(message: ProtobufMessage): TypeDefinition[] {
  return (message.field ?? []).map(generateFieldDescription);
}

function generateFieldDescription(field: ProtobufField): TypeDefinition {
  const descriptor: TypeDefinition = {
    name: field.name,
    type: getFieldType(field),
  };
  const packageName = getPackageName(field.typeName);
  const fieldTypeName = field.typeName?.split(".").pop() ?? "";
  if (packageName) {
    if (packageName !== "google.protobuf" || !convertGoogleProtobufTypingToPrimitive(fieldTypeName.toLowerCase())) {
      descriptor.packageName = `/${packageName}`;
    }
  }
  return descriptor;
}

function getFieldType(field: ProtobufField): string {
  const repeated = field.label === "LABEL_REPEATED";
  const fieldTypeName = field.typeName?.split(".").pop() ?? "";
  if (field.type === "TYPE_MESSAGE") {
    const packageName = getPackageName(field.typeName);
    if (packageName === "google.protobuf") {
      const primitive = convertGoogleProtobufTypingToPrimitive(fieldTypeName.toLowerCase());
      return `${primitive || fieldTypeName}${repeated ? "[]" : ""}`;
    }
    return `${fieldTypeName}${repeated ? "[]" : ""}`;
  }
  return `${getSolidityTyping(field.type.split("_").pop()?.toLowerCase() ?? "")}${repeated ? "[]" : ""}`;
}

function getPackageName(typeName?: string): string {
  if (!typeName) return "";
  const packageDirectories = typeName.substring(1).split(".");
  packageDirectories.pop();
  return packageDirectories.join(".");
}

function getSolidityTyping(fieldType: string): string {
  switch (fieldType) {
    case "timestamp":
    case "string": return "string";
    case "bool": return "bool";
    case "int":
    case "int64": return "int64";
    case "int8": return "int8";
    case "int16": return "int16";
    case "int32": return "int32";
    case "uint":
    case "uint64": return "uint64";
    case "uint8:": return "uint8";
    case "bytes": return "uint8[]";
    case "uint16": return "uint16";
    case "uint32": return "uint32";
    default: return "";
  }
}

function convertGoogleProtobufTypingToPrimitive(fieldType: string): string {
  switch (fieldType) {
    case "duration":
    case "timestamp":
    case "stringvalue": return "string";
    case "int64value": return "int64";
    case "uint64value": return "uint64";
    case "int32value": return "int32";
    case "uint32value": return "uint32";
    case "boolvalue": return "bool";
    case "bytesvalue": return "uint8[]";
    default: return "";
  }
}
