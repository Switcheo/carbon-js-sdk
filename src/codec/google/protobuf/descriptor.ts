/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "google.protobuf";

/** The full set of known editions. */
export enum Edition {
  /** EDITION_UNKNOWN - A placeholder for an unknown edition value. */
  EDITION_UNKNOWN = 0,
  /**
   * EDITION_LEGACY - A placeholder edition for specifying default behaviors *before* a feature
   * was first introduced.  This is effectively an "infinite past".
   */
  EDITION_LEGACY = 900,
  /**
   * EDITION_PROTO2 - Legacy syntax "editions".  These pre-date editions, but behave much like
   * distinct editions.  These can't be used to specify the edition of proto
   * files, but feature definitions must supply proto2/proto3 defaults for
   * backwards compatibility.
   */
  EDITION_PROTO2 = 998,
  EDITION_PROTO3 = 999,
  /**
   * EDITION_2023 - Editions that have been released.  The specific values are arbitrary and
   * should not be depended on, but they will always be time-ordered for easy
   * comparison.
   */
  EDITION_2023 = 1000,
  EDITION_2024 = 1001,
  /**
   * EDITION_1_TEST_ONLY - Placeholder editions for testing feature resolution.  These should not be
   * used or relied on outside of tests.
   */
  EDITION_1_TEST_ONLY = 1,
  EDITION_2_TEST_ONLY = 2,
  EDITION_99997_TEST_ONLY = 99997,
  EDITION_99998_TEST_ONLY = 99998,
  EDITION_99999_TEST_ONLY = 99999,
  /**
   * EDITION_MAX - Placeholder for specifying unbounded edition support.  This should only
   * ever be used by plugins that can expect to never require any changes to
   * support a new edition.
   */
  EDITION_MAX = 2147483647,
  UNRECOGNIZED = -1,
}

export function editionFromJSON(object: any): Edition {
  switch (object) {
    case 0:
    case "EDITION_UNKNOWN":
      return Edition.EDITION_UNKNOWN;
    case 900:
    case "EDITION_LEGACY":
      return Edition.EDITION_LEGACY;
    case 998:
    case "EDITION_PROTO2":
      return Edition.EDITION_PROTO2;
    case 999:
    case "EDITION_PROTO3":
      return Edition.EDITION_PROTO3;
    case 1000:
    case "EDITION_2023":
      return Edition.EDITION_2023;
    case 1001:
    case "EDITION_2024":
      return Edition.EDITION_2024;
    case 1:
    case "EDITION_1_TEST_ONLY":
      return Edition.EDITION_1_TEST_ONLY;
    case 2:
    case "EDITION_2_TEST_ONLY":
      return Edition.EDITION_2_TEST_ONLY;
    case 99997:
    case "EDITION_99997_TEST_ONLY":
      return Edition.EDITION_99997_TEST_ONLY;
    case 99998:
    case "EDITION_99998_TEST_ONLY":
      return Edition.EDITION_99998_TEST_ONLY;
    case 99999:
    case "EDITION_99999_TEST_ONLY":
      return Edition.EDITION_99999_TEST_ONLY;
    case 2147483647:
    case "EDITION_MAX":
      return Edition.EDITION_MAX;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Edition.UNRECOGNIZED;
  }
}

export function editionToJSON(object: Edition): string {
  switch (object) {
    case Edition.EDITION_UNKNOWN:
      return "EDITION_UNKNOWN";
    case Edition.EDITION_LEGACY:
      return "EDITION_LEGACY";
    case Edition.EDITION_PROTO2:
      return "EDITION_PROTO2";
    case Edition.EDITION_PROTO3:
      return "EDITION_PROTO3";
    case Edition.EDITION_2023:
      return "EDITION_2023";
    case Edition.EDITION_2024:
      return "EDITION_2024";
    case Edition.EDITION_1_TEST_ONLY:
      return "EDITION_1_TEST_ONLY";
    case Edition.EDITION_2_TEST_ONLY:
      return "EDITION_2_TEST_ONLY";
    case Edition.EDITION_99997_TEST_ONLY:
      return "EDITION_99997_TEST_ONLY";
    case Edition.EDITION_99998_TEST_ONLY:
      return "EDITION_99998_TEST_ONLY";
    case Edition.EDITION_99999_TEST_ONLY:
      return "EDITION_99999_TEST_ONLY";
    case Edition.EDITION_MAX:
      return "EDITION_MAX";
    default:
      return "UNKNOWN";
  }
}

/**
 * The protocol compiler can output a FileDescriptorSet containing the .proto
 * files it parses.
 */
export interface FileDescriptorSet {
  file: FileDescriptorProto[];
}

/** Describes a complete .proto file. */
export interface FileDescriptorProto {
  /** file name, relative to root of source tree */
  name: string;
  /** e.g. "foo", "foo.bar", etc. */
  package: string;
  /** Names of files imported by this file. */
  dependency: string[];
  /** Indexes of the public imported files in the dependency list above. */
  publicDependency: number[];
  /**
   * Indexes of the weak imported files in the dependency list.
   * For Google-internal migration only. Do not use.
   */
  weakDependency: number[];
  /** All top-level definitions in this file. */
  messageType: DescriptorProto[];
  enumType: EnumDescriptorProto[];
  service: ServiceDescriptorProto[];
  extension: FieldDescriptorProto[];
  options?: FileOptions;
  /**
   * This field contains optional information about the original source code.
   * You may safely remove this entire field without harming runtime
   * functionality of the descriptors -- the information is needed only by
   * development tools.
   */
  sourceCodeInfo?: SourceCodeInfo;
  /**
   * The syntax of the proto file.
   * The supported values are "proto2", "proto3", and "editions".
   *
   * If `edition` is present, this value must be "editions".
   */
  syntax: string;
  /** The edition of the proto file. */
  edition: Edition;
}

/** Describes a message type. */
export interface DescriptorProto {
  name: string;
  field: FieldDescriptorProto[];
  extension: FieldDescriptorProto[];
  nestedType: DescriptorProto[];
  enumType: EnumDescriptorProto[];
  extensionRange: DescriptorProto_ExtensionRange[];
  oneofDecl: OneofDescriptorProto[];
  options?: MessageOptions;
  reservedRange: DescriptorProto_ReservedRange[];
  /**
   * Reserved field names, which may not be used by fields in the same message.
   * A given name may only be reserved once.
   */
  reservedName: string[];
}

export interface DescriptorProto_ExtensionRange {
  /** Inclusive. */
  start: number;
  /** Exclusive. */
  end: number;
  options?: ExtensionRangeOptions;
}

/**
 * Range of reserved tag numbers. Reserved tag numbers may not be used by
 * fields or extension ranges in the same message. Reserved ranges may
 * not overlap.
 */
export interface DescriptorProto_ReservedRange {
  /** Inclusive. */
  start: number;
  /** Exclusive. */
  end: number;
}

export interface ExtensionRangeOptions {
  /** The parser stores options it doesn't recognize here. See above. */
  uninterpretedOption: UninterpretedOption[];
  /**
   * For external users: DO NOT USE. We are in the process of open sourcing
   * extension declaration and executing internal cleanups before it can be
   * used externally.
   */
  declaration: ExtensionRangeOptions_Declaration[];
  /** Any features defined in the specific edition. */
  features?: FeatureSet;
  /**
   * The verification state of the range.
   * TODO: flip the default to DECLARATION once all empty ranges
   * are marked as UNVERIFIED.
   */
  verification: ExtensionRangeOptions_VerificationState;
}

/** The verification state of the extension range. */
export enum ExtensionRangeOptions_VerificationState {
  /** DECLARATION - All the extensions of the range must be declared. */
  DECLARATION = 0,
  UNVERIFIED = 1,
  UNRECOGNIZED = -1,
}

export function extensionRangeOptions_VerificationStateFromJSON(
  object: any
): ExtensionRangeOptions_VerificationState {
  switch (object) {
    case 0:
    case "DECLARATION":
      return ExtensionRangeOptions_VerificationState.DECLARATION;
    case 1:
    case "UNVERIFIED":
      return ExtensionRangeOptions_VerificationState.UNVERIFIED;
    case -1:
    case "UNRECOGNIZED":
    default:
      return ExtensionRangeOptions_VerificationState.UNRECOGNIZED;
  }
}

export function extensionRangeOptions_VerificationStateToJSON(
  object: ExtensionRangeOptions_VerificationState
): string {
  switch (object) {
    case ExtensionRangeOptions_VerificationState.DECLARATION:
      return "DECLARATION";
    case ExtensionRangeOptions_VerificationState.UNVERIFIED:
      return "UNVERIFIED";
    default:
      return "UNKNOWN";
  }
}

export interface ExtensionRangeOptions_Declaration {
  /** The extension number declared within the extension range. */
  number: number;
  /**
   * The fully-qualified name of the extension field. There must be a leading
   * dot in front of the full name.
   */
  fullName: string;
  /**
   * The fully-qualified type name of the extension field. Unlike
   * Metadata.type, Declaration.type must have a leading dot for messages
   * and enums.
   */
  type: string;
  /**
   * If true, indicates that the number is reserved in the extension range,
   * and any extension field with the number will fail to compile. Set this
   * when a declared extension field is deleted.
   */
  reserved: boolean;
  /**
   * If true, indicates that the extension must be defined as repeated.
   * Otherwise the extension must be defined as optional.
   */
  repeated: boolean;
}

/** Describes a field within a message. */
export interface FieldDescriptorProto {
  name: string;
  number: number;
  label: FieldDescriptorProto_Label;
  /**
   * If type_name is set, this need not be set.  If both this and type_name
   * are set, this must be one of TYPE_ENUM, TYPE_MESSAGE or TYPE_GROUP.
   */
  type: FieldDescriptorProto_Type;
  /**
   * For message and enum types, this is the name of the type.  If the name
   * starts with a '.', it is fully-qualified.  Otherwise, C++-like scoping
   * rules are used to find the type (i.e. first the nested types within this
   * message are searched, then within the parent, on up to the root
   * namespace).
   */
  typeName: string;
  /**
   * For extensions, this is the name of the type being extended.  It is
   * resolved in the same manner as type_name.
   */
  extendee: string;
  /**
   * For numeric types, contains the original text representation of the value.
   * For booleans, "true" or "false".
   * For strings, contains the default text contents (not escaped in any way).
   * For bytes, contains the C escaped value.  All bytes >= 128 are escaped.
   */
  defaultValue: string;
  /**
   * If set, gives the index of a oneof in the containing type's oneof_decl
   * list.  This field is a member of that oneof.
   */
  oneofIndex: number;
  /**
   * JSON name of this field. The value is set by protocol compiler. If the
   * user has set a "json_name" option on this field, that option's value
   * will be used. Otherwise, it's deduced from the field's name by converting
   * it to camelCase.
   */
  jsonName: string;
  options?: FieldOptions;
  /**
   * If true, this is a proto3 "optional". When a proto3 field is optional, it
   * tracks presence regardless of field type.
   *
   * When proto3_optional is true, this field must belong to a oneof to signal
   * to old proto3 clients that presence is tracked for this field. This oneof
   * is known as a "synthetic" oneof, and this field must be its sole member
   * (each proto3 optional field gets its own synthetic oneof). Synthetic oneofs
   * exist in the descriptor only, and do not generate any API. Synthetic oneofs
   * must be ordered after all "real" oneofs.
   *
   * For message fields, proto3_optional doesn't create any semantic change,
   * since non-repeated message fields always track presence. However it still
   * indicates the semantic detail of whether the user wrote "optional" or not.
   * This can be useful for round-tripping the .proto file. For consistency we
   * give message fields a synthetic oneof also, even though it is not required
   * to track presence. This is especially important because the parser can't
   * tell if a field is a message or an enum, so it must always create a
   * synthetic oneof.
   *
   * Proto2 optional fields do not set this flag, because they already indicate
   * optional with `LABEL_OPTIONAL`.
   */
  proto3Optional: boolean;
}

export enum FieldDescriptorProto_Type {
  /**
   * TYPE_DOUBLE - 0 is reserved for errors.
   * Order is weird for historical reasons.
   */
  TYPE_DOUBLE = 1,
  TYPE_FLOAT = 2,
  /**
   * TYPE_INT64 - Not ZigZag encoded.  Negative numbers take 10 bytes.  Use TYPE_SINT64 if
   * negative values are likely.
   */
  TYPE_INT64 = 3,
  TYPE_UINT64 = 4,
  /**
   * TYPE_INT32 - Not ZigZag encoded.  Negative numbers take 10 bytes.  Use TYPE_SINT32 if
   * negative values are likely.
   */
  TYPE_INT32 = 5,
  TYPE_FIXED64 = 6,
  TYPE_FIXED32 = 7,
  TYPE_BOOL = 8,
  TYPE_STRING = 9,
  /**
   * TYPE_GROUP - Tag-delimited aggregate.
   * Group type is deprecated and not supported after google.protobuf. However, Proto3
   * implementations should still be able to parse the group wire format and
   * treat group fields as unknown fields.  In Editions, the group wire format
   * can be enabled via the `message_encoding` feature.
   */
  TYPE_GROUP = 10,
  /** TYPE_MESSAGE - Length-delimited aggregate. */
  TYPE_MESSAGE = 11,
  /** TYPE_BYTES - New in version 2. */
  TYPE_BYTES = 12,
  TYPE_UINT32 = 13,
  TYPE_ENUM = 14,
  TYPE_SFIXED32 = 15,
  TYPE_SFIXED64 = 16,
  /** TYPE_SINT32 - Uses ZigZag encoding. */
  TYPE_SINT32 = 17,
  /** TYPE_SINT64 - Uses ZigZag encoding. */
  TYPE_SINT64 = 18,
  UNRECOGNIZED = -1,
}

export function fieldDescriptorProto_TypeFromJSON(
  object: any
): FieldDescriptorProto_Type {
  switch (object) {
    case 1:
    case "TYPE_DOUBLE":
      return FieldDescriptorProto_Type.TYPE_DOUBLE;
    case 2:
    case "TYPE_FLOAT":
      return FieldDescriptorProto_Type.TYPE_FLOAT;
    case 3:
    case "TYPE_INT64":
      return FieldDescriptorProto_Type.TYPE_INT64;
    case 4:
    case "TYPE_UINT64":
      return FieldDescriptorProto_Type.TYPE_UINT64;
    case 5:
    case "TYPE_INT32":
      return FieldDescriptorProto_Type.TYPE_INT32;
    case 6:
    case "TYPE_FIXED64":
      return FieldDescriptorProto_Type.TYPE_FIXED64;
    case 7:
    case "TYPE_FIXED32":
      return FieldDescriptorProto_Type.TYPE_FIXED32;
    case 8:
    case "TYPE_BOOL":
      return FieldDescriptorProto_Type.TYPE_BOOL;
    case 9:
    case "TYPE_STRING":
      return FieldDescriptorProto_Type.TYPE_STRING;
    case 10:
    case "TYPE_GROUP":
      return FieldDescriptorProto_Type.TYPE_GROUP;
    case 11:
    case "TYPE_MESSAGE":
      return FieldDescriptorProto_Type.TYPE_MESSAGE;
    case 12:
    case "TYPE_BYTES":
      return FieldDescriptorProto_Type.TYPE_BYTES;
    case 13:
    case "TYPE_UINT32":
      return FieldDescriptorProto_Type.TYPE_UINT32;
    case 14:
    case "TYPE_ENUM":
      return FieldDescriptorProto_Type.TYPE_ENUM;
    case 15:
    case "TYPE_SFIXED32":
      return FieldDescriptorProto_Type.TYPE_SFIXED32;
    case 16:
    case "TYPE_SFIXED64":
      return FieldDescriptorProto_Type.TYPE_SFIXED64;
    case 17:
    case "TYPE_SINT32":
      return FieldDescriptorProto_Type.TYPE_SINT32;
    case 18:
    case "TYPE_SINT64":
      return FieldDescriptorProto_Type.TYPE_SINT64;
    case -1:
    case "UNRECOGNIZED":
    default:
      return FieldDescriptorProto_Type.UNRECOGNIZED;
  }
}

export function fieldDescriptorProto_TypeToJSON(
  object: FieldDescriptorProto_Type
): string {
  switch (object) {
    case FieldDescriptorProto_Type.TYPE_DOUBLE:
      return "TYPE_DOUBLE";
    case FieldDescriptorProto_Type.TYPE_FLOAT:
      return "TYPE_FLOAT";
    case FieldDescriptorProto_Type.TYPE_INT64:
      return "TYPE_INT64";
    case FieldDescriptorProto_Type.TYPE_UINT64:
      return "TYPE_UINT64";
    case FieldDescriptorProto_Type.TYPE_INT32:
      return "TYPE_INT32";
    case FieldDescriptorProto_Type.TYPE_FIXED64:
      return "TYPE_FIXED64";
    case FieldDescriptorProto_Type.TYPE_FIXED32:
      return "TYPE_FIXED32";
    case FieldDescriptorProto_Type.TYPE_BOOL:
      return "TYPE_BOOL";
    case FieldDescriptorProto_Type.TYPE_STRING:
      return "TYPE_STRING";
    case FieldDescriptorProto_Type.TYPE_GROUP:
      return "TYPE_GROUP";
    case FieldDescriptorProto_Type.TYPE_MESSAGE:
      return "TYPE_MESSAGE";
    case FieldDescriptorProto_Type.TYPE_BYTES:
      return "TYPE_BYTES";
    case FieldDescriptorProto_Type.TYPE_UINT32:
      return "TYPE_UINT32";
    case FieldDescriptorProto_Type.TYPE_ENUM:
      return "TYPE_ENUM";
    case FieldDescriptorProto_Type.TYPE_SFIXED32:
      return "TYPE_SFIXED32";
    case FieldDescriptorProto_Type.TYPE_SFIXED64:
      return "TYPE_SFIXED64";
    case FieldDescriptorProto_Type.TYPE_SINT32:
      return "TYPE_SINT32";
    case FieldDescriptorProto_Type.TYPE_SINT64:
      return "TYPE_SINT64";
    default:
      return "UNKNOWN";
  }
}

export enum FieldDescriptorProto_Label {
  /** LABEL_OPTIONAL - 0 is reserved for errors */
  LABEL_OPTIONAL = 1,
  LABEL_REPEATED = 3,
  /**
   * LABEL_REQUIRED - The required label is only allowed in google.protobuf.  In proto3 and Editions
   * it's explicitly prohibited.  In Editions, the `field_presence` feature
   * can be used to get this behavior.
   */
  LABEL_REQUIRED = 2,
  UNRECOGNIZED = -1,
}

export function fieldDescriptorProto_LabelFromJSON(
  object: any
): FieldDescriptorProto_Label {
  switch (object) {
    case 1:
    case "LABEL_OPTIONAL":
      return FieldDescriptorProto_Label.LABEL_OPTIONAL;
    case 3:
    case "LABEL_REPEATED":
      return FieldDescriptorProto_Label.LABEL_REPEATED;
    case 2:
    case "LABEL_REQUIRED":
      return FieldDescriptorProto_Label.LABEL_REQUIRED;
    case -1:
    case "UNRECOGNIZED":
    default:
      return FieldDescriptorProto_Label.UNRECOGNIZED;
  }
}

export function fieldDescriptorProto_LabelToJSON(
  object: FieldDescriptorProto_Label
): string {
  switch (object) {
    case FieldDescriptorProto_Label.LABEL_OPTIONAL:
      return "LABEL_OPTIONAL";
    case FieldDescriptorProto_Label.LABEL_REPEATED:
      return "LABEL_REPEATED";
    case FieldDescriptorProto_Label.LABEL_REQUIRED:
      return "LABEL_REQUIRED";
    default:
      return "UNKNOWN";
  }
}

/** Describes a oneof. */
export interface OneofDescriptorProto {
  name: string;
  options?: OneofOptions;
}

/** Describes an enum type. */
export interface EnumDescriptorProto {
  name: string;
  value: EnumValueDescriptorProto[];
  options?: EnumOptions;
  /**
   * Range of reserved numeric values. Reserved numeric values may not be used
   * by enum values in the same enum declaration. Reserved ranges may not
   * overlap.
   */
  reservedRange: EnumDescriptorProto_EnumReservedRange[];
  /**
   * Reserved enum value names, which may not be reused. A given name may only
   * be reserved once.
   */
  reservedName: string[];
}

/**
 * Range of reserved numeric values. Reserved values may not be used by
 * entries in the same enum. Reserved ranges may not overlap.
 *
 * Note that this is distinct from DescriptorProto.ReservedRange in that it
 * is inclusive such that it can appropriately represent the entire int32
 * domain.
 */
export interface EnumDescriptorProto_EnumReservedRange {
  /** Inclusive. */
  start: number;
  /** Inclusive. */
  end: number;
}

/** Describes a value within an enum. */
export interface EnumValueDescriptorProto {
  name: string;
  number: number;
  options?: EnumValueOptions;
}

/** Describes a service. */
export interface ServiceDescriptorProto {
  name: string;
  method: MethodDescriptorProto[];
  options?: ServiceOptions;
}

/** Describes a method of a service. */
export interface MethodDescriptorProto {
  name: string;
  /**
   * Input and output type names.  These are resolved in the same way as
   * FieldDescriptorProto.type_name, but must refer to a message type.
   */
  inputType: string;
  outputType: string;
  options?: MethodOptions;
  /** Identifies if client streams multiple client messages */
  clientStreaming: boolean;
  /** Identifies if server streams multiple server messages */
  serverStreaming: boolean;
}

export interface FileOptions {
  /**
   * Sets the Java package where classes generated from this .proto will be
   * placed.  By default, the proto package is used, but this is often
   * inappropriate because proto packages do not normally start with backwards
   * domain names.
   */
  javaPackage: string;
  /**
   * Controls the name of the wrapper Java class generated for the .proto file.
   * That class will always contain the .proto file's getDescriptor() method as
   * well as any top-level extensions defined in the .proto file.
   * If java_multiple_files is disabled, then all the other classes from the
   * .proto file will be nested inside the single wrapper outer class.
   */
  javaOuterClassname: string;
  /**
   * If enabled, then the Java code generator will generate a separate .java
   * file for each top-level message, enum, and service defined in the .proto
   * file.  Thus, these types will *not* be nested inside the wrapper class
   * named by java_outer_classname.  However, the wrapper class will still be
   * generated to contain the file's getDescriptor() method as well as any
   * top-level extensions defined in the file.
   */
  javaMultipleFiles: boolean;
  /**
   * This option does nothing.
   *
   * @deprecated
   */
  javaGenerateEqualsAndHash: boolean;
  /**
   * A proto2 file can set this to true to opt in to UTF-8 checking for Java,
   * which will throw an exception if invalid UTF-8 is parsed from the wire or
   * assigned to a string field.
   *
   * TODO: clarify exactly what kinds of field types this option
   * applies to, and update these docs accordingly.
   *
   * Proto3 files already perform these checks. Setting the option explicitly to
   * false has no effect: it cannot be used to opt proto3 files out of UTF-8
   * checks.
   */
  javaStringCheckUtf8: boolean;
  optimizeFor: FileOptions_OptimizeMode;
  /**
   * Sets the Go package where structs generated from this .proto will be
   * placed. If omitted, the Go package will be derived from the following:
   *   - The basename of the package import path, if provided.
   *   - Otherwise, the package statement in the .proto file, if present.
   *   - Otherwise, the basename of the .proto file, without extension.
   */
  goPackage: string;
  /**
   * Should generic services be generated in each language?  "Generic" services
   * are not specific to any particular RPC system.  They are generated by the
   * main code generators in each language (without additional plugins).
   * Generic services were the only kind of service generation supported by
   * early versions of google.protobuf.
   *
   * Generic services are now considered deprecated in favor of using plugins
   * that generate code specific to your particular RPC system.  Therefore,
   * these default to false.  Old code which depends on generic services should
   * explicitly set them to true.
   */
  ccGenericServices: boolean;
  javaGenericServices: boolean;
  pyGenericServices: boolean;
  /**
   * Is this file deprecated?
   * Depending on the target platform, this can emit Deprecated annotations
   * for everything in the file, or it will be completely ignored; in the very
   * least, this is a formalization for deprecating files.
   */
  deprecated: boolean;
  /**
   * Enables the use of arenas for the proto messages in this file. This applies
   * only to generated classes for C++.
   */
  ccEnableArenas: boolean;
  /**
   * Sets the objective c class prefix which is prepended to all objective c
   * generated classes from this .proto. There is no default.
   */
  objcClassPrefix: string;
  /** Namespace for generated classes; defaults to the package. */
  csharpNamespace: string;
  /**
   * By default Swift generators will take the proto package and CamelCase it
   * replacing '.' with underscore and use that to prefix the types/symbols
   * defined. When this options is provided, they will use this value instead
   * to prefix the types/symbols defined.
   */
  swiftPrefix: string;
  /**
   * Sets the php class prefix which is prepended to all php generated classes
   * from this .proto. Default is empty.
   */
  phpClassPrefix: string;
  /**
   * Use this option to change the namespace of php generated classes. Default
   * is empty. When this option is empty, the package name will be used for
   * determining the namespace.
   */
  phpNamespace: string;
  /**
   * Use this option to change the namespace of php generated metadata classes.
   * Default is empty. When this option is empty, the proto file name will be
   * used for determining the namespace.
   */
  phpMetadataNamespace: string;
  /**
   * Use this option to change the package of ruby generated classes. Default
   * is empty. When this option is not set, the package name will be used for
   * determining the ruby package.
   */
  rubyPackage: string;
  /** Any features defined in the specific edition. */
  features?: FeatureSet;
  /**
   * The parser stores options it doesn't recognize here.
   * See the documentation for the "Options" section above.
   */
  uninterpretedOption: UninterpretedOption[];
}

/** Generated classes can be optimized for speed or code size. */
export enum FileOptions_OptimizeMode {
  /** SPEED - Generate complete code for parsing, serialization, */
  SPEED = 1,
  /** CODE_SIZE - etc. */
  CODE_SIZE = 2,
  /** LITE_RUNTIME - Generate code using MessageLite and the lite runtime. */
  LITE_RUNTIME = 3,
  UNRECOGNIZED = -1,
}

export function fileOptions_OptimizeModeFromJSON(
  object: any
): FileOptions_OptimizeMode {
  switch (object) {
    case 1:
    case "SPEED":
      return FileOptions_OptimizeMode.SPEED;
    case 2:
    case "CODE_SIZE":
      return FileOptions_OptimizeMode.CODE_SIZE;
    case 3:
    case "LITE_RUNTIME":
      return FileOptions_OptimizeMode.LITE_RUNTIME;
    case -1:
    case "UNRECOGNIZED":
    default:
      return FileOptions_OptimizeMode.UNRECOGNIZED;
  }
}

export function fileOptions_OptimizeModeToJSON(
  object: FileOptions_OptimizeMode
): string {
  switch (object) {
    case FileOptions_OptimizeMode.SPEED:
      return "SPEED";
    case FileOptions_OptimizeMode.CODE_SIZE:
      return "CODE_SIZE";
    case FileOptions_OptimizeMode.LITE_RUNTIME:
      return "LITE_RUNTIME";
    default:
      return "UNKNOWN";
  }
}

export interface MessageOptions {
  /**
   * Set true to use the old proto1 MessageSet wire format for extensions.
   * This is provided for backwards-compatibility with the MessageSet wire
   * format.  You should not use this for any other reason:  It's less
   * efficient, has fewer features, and is more complicated.
   *
   * The message must be defined exactly as follows:
   *   message Foo {
   *     option message_set_wire_format = true;
   *     extensions 4 to max;
   *   }
   * Note that the message cannot have any defined fields; MessageSets only
   * have extensions.
   *
   * All extensions of your type must be singular messages; e.g. they cannot
   * be int32s, enums, or repeated messages.
   *
   * Because this is an option, the above two restrictions are not enforced by
   * the protocol compiler.
   */
  messageSetWireFormat: boolean;
  /**
   * Disables the generation of the standard "descriptor()" accessor, which can
   * conflict with a field of the same name.  This is meant to make migration
   * from proto1 easier; new code should avoid fields named "descriptor".
   */
  noStandardDescriptorAccessor: boolean;
  /**
   * Is this message deprecated?
   * Depending on the target platform, this can emit Deprecated annotations
   * for the message, or it will be completely ignored; in the very least,
   * this is a formalization for deprecating messages.
   */
  deprecated: boolean;
  /**
   * Whether the message is an automatically generated map entry type for the
   * maps field.
   *
   * For maps fields:
   *     map<KeyType, ValueType> map_field = 1;
   * The parsed descriptor looks like:
   *     message MapFieldEntry {
   *         option map_entry = true;
   *         optional KeyType key = 1;
   *         optional ValueType value = 2;
   *     }
   *     repeated MapFieldEntry map_field = 1;
   *
   * Implementations may choose not to generate the map_entry=true message, but
   * use a native map in the target language to hold the keys and values.
   * The reflection APIs in such implementations still need to work as
   * if the field is a repeated message field.
   *
   * NOTE: Do not set the option in .proto files. Always use the maps syntax
   * instead. The option should only be implicitly set by the proto compiler
   * parser.
   */
  mapEntry: boolean;
  /**
   * Enable the legacy handling of JSON field name conflicts.  This lowercases
   * and strips underscored from the fields before comparison in proto3 only.
   * The new behavior takes `json_name` into account and applies to proto2 as
   * well.
   *
   * This should only be used as a temporary measure against broken builds due
   * to the change in behavior for JSON field name conflicts.
   *
   * TODO This is legacy behavior we plan to remove once downstream
   * teams have had time to migrate.
   *
   * @deprecated
   */
  deprecatedLegacyJsonFieldConflicts: boolean;
  /** Any features defined in the specific edition. */
  features?: FeatureSet;
  /** The parser stores options it doesn't recognize here. See above. */
  uninterpretedOption: UninterpretedOption[];
}

export interface FieldOptions {
  /**
   * NOTE: ctype is deprecated. Use `features.(pb.cpp).string_type` instead.
   * The ctype option instructs the C++ code generator to use a different
   * representation of the field than it normally would.  See the specific
   * options below.  This option is only implemented to support use of
   * [ctype=CORD] and [ctype=STRING] (the default) on non-repeated fields of
   * type "bytes" in the open source release.
   * TODO: make ctype actually deprecated.
   */
  ctype: FieldOptions_CType;
  /**
   * The packed option can be enabled for repeated primitive fields to enable
   * a more efficient representation on the wire. Rather than repeatedly
   * writing the tag and type for each element, the entire array is encoded as
   * a single length-delimited blob. In proto3, only explicit setting it to
   * false will avoid using packed encoding.  This option is prohibited in
   * Editions, but the `repeated_field_encoding` feature can be used to control
   * the behavior.
   */
  packed: boolean;
  /**
   * The jstype option determines the JavaScript type used for values of the
   * field.  The option is permitted only for 64 bit integral and fixed types
   * (int64, uint64, sint64, fixed64, sfixed64).  A field with jstype JS_STRING
   * is represented as JavaScript string, which avoids loss of precision that
   * can happen when a large value is converted to a floating point JavaScript.
   * Specifying JS_NUMBER for the jstype causes the generated JavaScript code to
   * use the JavaScript "number" type.  The behavior of the default option
   * JS_NORMAL is implementation dependent.
   *
   * This option is an enum to permit additional types to be added, e.g.
   * goog.math.Integer.
   */
  jstype: FieldOptions_JSType;
  /**
   * Should this field be parsed lazily?  Lazy applies only to message-type
   * fields.  It means that when the outer message is initially parsed, the
   * inner message's contents will not be parsed but instead stored in encoded
   * form.  The inner message will actually be parsed when it is first accessed.
   *
   * This is only a hint.  Implementations are free to choose whether to use
   * eager or lazy parsing regardless of the value of this option.  However,
   * setting this option true suggests that the protocol author believes that
   * using lazy parsing on this field is worth the additional bookkeeping
   * overhead typically needed to implement it.
   *
   * This option does not affect the public interface of any generated code;
   * all method signatures remain the same.  Furthermore, thread-safety of the
   * interface is not affected by this option; const methods remain safe to
   * call from multiple threads concurrently, while non-const methods continue
   * to require exclusive access.
   *
   * Note that lazy message fields are still eagerly verified to check
   * ill-formed wireformat or missing required fields. Calling IsInitialized()
   * on the outer message would fail if the inner message has missing required
   * fields. Failed verification would result in parsing failure (except when
   * uninitialized messages are acceptable).
   */
  lazy: boolean;
  /**
   * unverified_lazy does no correctness checks on the byte stream. This should
   * only be used where lazy with verification is prohibitive for performance
   * reasons.
   */
  unverifiedLazy: boolean;
  /**
   * Is this field deprecated?
   * Depending on the target platform, this can emit Deprecated annotations
   * for accessors, or it will be completely ignored; in the very least, this
   * is a formalization for deprecating fields.
   */
  deprecated: boolean;
  /** For Google-internal migration only. Do not use. */
  weak: boolean;
  /**
   * Indicate that the field value should not be printed out when using debug
   * formats, e.g. when the field contains sensitive credentials.
   */
  debugRedact: boolean;
  retention: FieldOptions_OptionRetention;
  targets: FieldOptions_OptionTargetType[];
  editionDefaults: FieldOptions_EditionDefault[];
  /** Any features defined in the specific edition. */
  features?: FeatureSet;
  featureSupport?: FieldOptions_FeatureSupport;
  /** The parser stores options it doesn't recognize here. See above. */
  uninterpretedOption: UninterpretedOption[];
}

export enum FieldOptions_CType {
  /** STRING - Default mode. */
  STRING = 0,
  /**
   * CORD - The option [ctype=CORD] may be applied to a non-repeated field of type
   * "bytes". It indicates that in C++, the data should be stored in a Cord
   * instead of a string.  For very large strings, this may reduce memory
   * fragmentation. It may also allow better performance when parsing from a
   * Cord, or when parsing with aliasing enabled, as the parsed Cord may then
   * alias the original buffer.
   */
  CORD = 1,
  STRING_PIECE = 2,
  UNRECOGNIZED = -1,
}

export function fieldOptions_CTypeFromJSON(object: any): FieldOptions_CType {
  switch (object) {
    case 0:
    case "STRING":
      return FieldOptions_CType.STRING;
    case 1:
    case "CORD":
      return FieldOptions_CType.CORD;
    case 2:
    case "STRING_PIECE":
      return FieldOptions_CType.STRING_PIECE;
    case -1:
    case "UNRECOGNIZED":
    default:
      return FieldOptions_CType.UNRECOGNIZED;
  }
}

export function fieldOptions_CTypeToJSON(object: FieldOptions_CType): string {
  switch (object) {
    case FieldOptions_CType.STRING:
      return "STRING";
    case FieldOptions_CType.CORD:
      return "CORD";
    case FieldOptions_CType.STRING_PIECE:
      return "STRING_PIECE";
    default:
      return "UNKNOWN";
  }
}

export enum FieldOptions_JSType {
  /** JS_NORMAL - Use the default type. */
  JS_NORMAL = 0,
  /** JS_STRING - Use JavaScript strings. */
  JS_STRING = 1,
  /** JS_NUMBER - Use JavaScript numbers. */
  JS_NUMBER = 2,
  UNRECOGNIZED = -1,
}

export function fieldOptions_JSTypeFromJSON(object: any): FieldOptions_JSType {
  switch (object) {
    case 0:
    case "JS_NORMAL":
      return FieldOptions_JSType.JS_NORMAL;
    case 1:
    case "JS_STRING":
      return FieldOptions_JSType.JS_STRING;
    case 2:
    case "JS_NUMBER":
      return FieldOptions_JSType.JS_NUMBER;
    case -1:
    case "UNRECOGNIZED":
    default:
      return FieldOptions_JSType.UNRECOGNIZED;
  }
}

export function fieldOptions_JSTypeToJSON(object: FieldOptions_JSType): string {
  switch (object) {
    case FieldOptions_JSType.JS_NORMAL:
      return "JS_NORMAL";
    case FieldOptions_JSType.JS_STRING:
      return "JS_STRING";
    case FieldOptions_JSType.JS_NUMBER:
      return "JS_NUMBER";
    default:
      return "UNKNOWN";
  }
}

/** If set to RETENTION_SOURCE, the option will be omitted from the binary. */
export enum FieldOptions_OptionRetention {
  RETENTION_UNKNOWN = 0,
  RETENTION_RUNTIME = 1,
  RETENTION_SOURCE = 2,
  UNRECOGNIZED = -1,
}

export function fieldOptions_OptionRetentionFromJSON(
  object: any
): FieldOptions_OptionRetention {
  switch (object) {
    case 0:
    case "RETENTION_UNKNOWN":
      return FieldOptions_OptionRetention.RETENTION_UNKNOWN;
    case 1:
    case "RETENTION_RUNTIME":
      return FieldOptions_OptionRetention.RETENTION_RUNTIME;
    case 2:
    case "RETENTION_SOURCE":
      return FieldOptions_OptionRetention.RETENTION_SOURCE;
    case -1:
    case "UNRECOGNIZED":
    default:
      return FieldOptions_OptionRetention.UNRECOGNIZED;
  }
}

export function fieldOptions_OptionRetentionToJSON(
  object: FieldOptions_OptionRetention
): string {
  switch (object) {
    case FieldOptions_OptionRetention.RETENTION_UNKNOWN:
      return "RETENTION_UNKNOWN";
    case FieldOptions_OptionRetention.RETENTION_RUNTIME:
      return "RETENTION_RUNTIME";
    case FieldOptions_OptionRetention.RETENTION_SOURCE:
      return "RETENTION_SOURCE";
    default:
      return "UNKNOWN";
  }
}

/**
 * This indicates the types of entities that the field may apply to when used
 * as an option. If it is unset, then the field may be freely used as an
 * option on any kind of entity.
 */
export enum FieldOptions_OptionTargetType {
  TARGET_TYPE_UNKNOWN = 0,
  TARGET_TYPE_FILE = 1,
  TARGET_TYPE_EXTENSION_RANGE = 2,
  TARGET_TYPE_MESSAGE = 3,
  TARGET_TYPE_FIELD = 4,
  TARGET_TYPE_ONEOF = 5,
  TARGET_TYPE_ENUM = 6,
  TARGET_TYPE_ENUM_ENTRY = 7,
  TARGET_TYPE_SERVICE = 8,
  TARGET_TYPE_METHOD = 9,
  UNRECOGNIZED = -1,
}

export function fieldOptions_OptionTargetTypeFromJSON(
  object: any
): FieldOptions_OptionTargetType {
  switch (object) {
    case 0:
    case "TARGET_TYPE_UNKNOWN":
      return FieldOptions_OptionTargetType.TARGET_TYPE_UNKNOWN;
    case 1:
    case "TARGET_TYPE_FILE":
      return FieldOptions_OptionTargetType.TARGET_TYPE_FILE;
    case 2:
    case "TARGET_TYPE_EXTENSION_RANGE":
      return FieldOptions_OptionTargetType.TARGET_TYPE_EXTENSION_RANGE;
    case 3:
    case "TARGET_TYPE_MESSAGE":
      return FieldOptions_OptionTargetType.TARGET_TYPE_MESSAGE;
    case 4:
    case "TARGET_TYPE_FIELD":
      return FieldOptions_OptionTargetType.TARGET_TYPE_FIELD;
    case 5:
    case "TARGET_TYPE_ONEOF":
      return FieldOptions_OptionTargetType.TARGET_TYPE_ONEOF;
    case 6:
    case "TARGET_TYPE_ENUM":
      return FieldOptions_OptionTargetType.TARGET_TYPE_ENUM;
    case 7:
    case "TARGET_TYPE_ENUM_ENTRY":
      return FieldOptions_OptionTargetType.TARGET_TYPE_ENUM_ENTRY;
    case 8:
    case "TARGET_TYPE_SERVICE":
      return FieldOptions_OptionTargetType.TARGET_TYPE_SERVICE;
    case 9:
    case "TARGET_TYPE_METHOD":
      return FieldOptions_OptionTargetType.TARGET_TYPE_METHOD;
    case -1:
    case "UNRECOGNIZED":
    default:
      return FieldOptions_OptionTargetType.UNRECOGNIZED;
  }
}

export function fieldOptions_OptionTargetTypeToJSON(
  object: FieldOptions_OptionTargetType
): string {
  switch (object) {
    case FieldOptions_OptionTargetType.TARGET_TYPE_UNKNOWN:
      return "TARGET_TYPE_UNKNOWN";
    case FieldOptions_OptionTargetType.TARGET_TYPE_FILE:
      return "TARGET_TYPE_FILE";
    case FieldOptions_OptionTargetType.TARGET_TYPE_EXTENSION_RANGE:
      return "TARGET_TYPE_EXTENSION_RANGE";
    case FieldOptions_OptionTargetType.TARGET_TYPE_MESSAGE:
      return "TARGET_TYPE_MESSAGE";
    case FieldOptions_OptionTargetType.TARGET_TYPE_FIELD:
      return "TARGET_TYPE_FIELD";
    case FieldOptions_OptionTargetType.TARGET_TYPE_ONEOF:
      return "TARGET_TYPE_ONEOF";
    case FieldOptions_OptionTargetType.TARGET_TYPE_ENUM:
      return "TARGET_TYPE_ENUM";
    case FieldOptions_OptionTargetType.TARGET_TYPE_ENUM_ENTRY:
      return "TARGET_TYPE_ENUM_ENTRY";
    case FieldOptions_OptionTargetType.TARGET_TYPE_SERVICE:
      return "TARGET_TYPE_SERVICE";
    case FieldOptions_OptionTargetType.TARGET_TYPE_METHOD:
      return "TARGET_TYPE_METHOD";
    default:
      return "UNKNOWN";
  }
}

export interface FieldOptions_EditionDefault {
  edition: Edition;
  /** Textproto value. */
  value: string;
}

/** Information about the support window of a feature. */
export interface FieldOptions_FeatureSupport {
  /**
   * The edition that this feature was first available in.  In editions
   * earlier than this one, the default assigned to EDITION_LEGACY will be
   * used, and proto files will not be able to override it.
   */
  editionIntroduced: Edition;
  /**
   * The edition this feature becomes deprecated in.  Using this after this
   * edition may trigger warnings.
   */
  editionDeprecated: Edition;
  /**
   * The deprecation warning text if this feature is used after the edition it
   * was marked deprecated in.
   */
  deprecationWarning: string;
  /**
   * The edition this feature is no longer available in.  In editions after
   * this one, the last default assigned will be used, and proto files will
   * not be able to override it.
   */
  editionRemoved: Edition;
}

export interface OneofOptions {
  /** Any features defined in the specific edition. */
  features?: FeatureSet;
  /** The parser stores options it doesn't recognize here. See above. */
  uninterpretedOption: UninterpretedOption[];
}

export interface EnumOptions {
  /**
   * Set this option to true to allow mapping different tag names to the same
   * value.
   */
  allowAlias: boolean;
  /**
   * Is this enum deprecated?
   * Depending on the target platform, this can emit Deprecated annotations
   * for the enum, or it will be completely ignored; in the very least, this
   * is a formalization for deprecating enums.
   */
  deprecated: boolean;
  /**
   * Enable the legacy handling of JSON field name conflicts.  This lowercases
   * and strips underscored from the fields before comparison in proto3 only.
   * The new behavior takes `json_name` into account and applies to proto2 as
   * well.
   * TODO Remove this legacy behavior once downstream teams have
   * had time to migrate.
   *
   * @deprecated
   */
  deprecatedLegacyJsonFieldConflicts: boolean;
  /** Any features defined in the specific edition. */
  features?: FeatureSet;
  /** The parser stores options it doesn't recognize here. See above. */
  uninterpretedOption: UninterpretedOption[];
}

export interface EnumValueOptions {
  /**
   * Is this enum value deprecated?
   * Depending on the target platform, this can emit Deprecated annotations
   * for the enum value, or it will be completely ignored; in the very least,
   * this is a formalization for deprecating enum values.
   */
  deprecated: boolean;
  /** Any features defined in the specific edition. */
  features?: FeatureSet;
  /**
   * Indicate that fields annotated with this enum value should not be printed
   * out when using debug formats, e.g. when the field contains sensitive
   * credentials.
   */
  debugRedact: boolean;
  /** Information about the support window of a feature value. */
  featureSupport?: FieldOptions_FeatureSupport;
  /** The parser stores options it doesn't recognize here. See above. */
  uninterpretedOption: UninterpretedOption[];
}

export interface ServiceOptions {
  /** Any features defined in the specific edition. */
  features?: FeatureSet;
  /**
   * Is this service deprecated?
   * Depending on the target platform, this can emit Deprecated annotations
   * for the service, or it will be completely ignored; in the very least,
   * this is a formalization for deprecating services.
   */
  deprecated: boolean;
  /** The parser stores options it doesn't recognize here. See above. */
  uninterpretedOption: UninterpretedOption[];
}

export interface MethodOptions {
  /**
   * Is this method deprecated?
   * Depending on the target platform, this can emit Deprecated annotations
   * for the method, or it will be completely ignored; in the very least,
   * this is a formalization for deprecating methods.
   */
  deprecated: boolean;
  idempotencyLevel: MethodOptions_IdempotencyLevel;
  /** Any features defined in the specific edition. */
  features?: FeatureSet;
  /** The parser stores options it doesn't recognize here. See above. */
  uninterpretedOption: UninterpretedOption[];
}

/**
 * Is this method side-effect-free (or safe in HTTP parlance), or idempotent,
 * or neither? HTTP based RPC implementation may choose GET verb for safe
 * methods, and PUT verb for idempotent methods instead of the default POST.
 */
export enum MethodOptions_IdempotencyLevel {
  IDEMPOTENCY_UNKNOWN = 0,
  /** NO_SIDE_EFFECTS - implies idempotent */
  NO_SIDE_EFFECTS = 1,
  /** IDEMPOTENT - idempotent, but may have side effects */
  IDEMPOTENT = 2,
  UNRECOGNIZED = -1,
}

export function methodOptions_IdempotencyLevelFromJSON(
  object: any
): MethodOptions_IdempotencyLevel {
  switch (object) {
    case 0:
    case "IDEMPOTENCY_UNKNOWN":
      return MethodOptions_IdempotencyLevel.IDEMPOTENCY_UNKNOWN;
    case 1:
    case "NO_SIDE_EFFECTS":
      return MethodOptions_IdempotencyLevel.NO_SIDE_EFFECTS;
    case 2:
    case "IDEMPOTENT":
      return MethodOptions_IdempotencyLevel.IDEMPOTENT;
    case -1:
    case "UNRECOGNIZED":
    default:
      return MethodOptions_IdempotencyLevel.UNRECOGNIZED;
  }
}

export function methodOptions_IdempotencyLevelToJSON(
  object: MethodOptions_IdempotencyLevel
): string {
  switch (object) {
    case MethodOptions_IdempotencyLevel.IDEMPOTENCY_UNKNOWN:
      return "IDEMPOTENCY_UNKNOWN";
    case MethodOptions_IdempotencyLevel.NO_SIDE_EFFECTS:
      return "NO_SIDE_EFFECTS";
    case MethodOptions_IdempotencyLevel.IDEMPOTENT:
      return "IDEMPOTENT";
    default:
      return "UNKNOWN";
  }
}

/**
 * A message representing a option the parser does not recognize. This only
 * appears in options protos created by the compiler::Parser class.
 * DescriptorPool resolves these when building Descriptor objects. Therefore,
 * options protos in descriptor objects (e.g. returned by Descriptor::options(),
 * or produced by Descriptor::CopyTo()) will never have UninterpretedOptions
 * in them.
 */
export interface UninterpretedOption {
  name: UninterpretedOption_NamePart[];
  /**
   * The value of the uninterpreted option, in whatever type the tokenizer
   * identified it as during parsing. Exactly one of these should be set.
   */
  identifierValue: string;
  positiveIntValue: Long;
  negativeIntValue: Long;
  doubleValue: number;
  stringValue: Uint8Array;
  aggregateValue: string;
}

/**
 * The name of the uninterpreted option.  Each string represents a segment in
 * a dot-separated name.  is_extension is true iff a segment represents an
 * extension (denoted with parentheses in options specs in .proto files).
 * E.g.,{ ["foo", false], ["bar.baz", true], ["moo", false] } represents
 * "foo.(bar.baz).moo".
 */
export interface UninterpretedOption_NamePart {
  namePart: string;
  isExtension: boolean;
}

/**
 * TODO Enums in C++ gencode (and potentially other languages) are
 * not well scoped.  This means that each of the feature enums below can clash
 * with each other.  The short names we've chosen maximize call-site
 * readability, but leave us very open to this scenario.  A future feature will
 * be designed and implemented to handle this, hopefully before we ever hit a
 * conflict here.
 */
export interface FeatureSet {
  fieldPresence: FeatureSet_FieldPresence;
  enumType: FeatureSet_EnumType;
  repeatedFieldEncoding: FeatureSet_RepeatedFieldEncoding;
  utf8Validation: FeatureSet_Utf8Validation;
  messageEncoding: FeatureSet_MessageEncoding;
  jsonFormat: FeatureSet_JsonFormat;
}

export enum FeatureSet_FieldPresence {
  FIELD_PRESENCE_UNKNOWN = 0,
  EXPLICIT = 1,
  IMPLICIT = 2,
  LEGACY_REQUIRED = 3,
  UNRECOGNIZED = -1,
}

export function featureSet_FieldPresenceFromJSON(
  object: any
): FeatureSet_FieldPresence {
  switch (object) {
    case 0:
    case "FIELD_PRESENCE_UNKNOWN":
      return FeatureSet_FieldPresence.FIELD_PRESENCE_UNKNOWN;
    case 1:
    case "EXPLICIT":
      return FeatureSet_FieldPresence.EXPLICIT;
    case 2:
    case "IMPLICIT":
      return FeatureSet_FieldPresence.IMPLICIT;
    case 3:
    case "LEGACY_REQUIRED":
      return FeatureSet_FieldPresence.LEGACY_REQUIRED;
    case -1:
    case "UNRECOGNIZED":
    default:
      return FeatureSet_FieldPresence.UNRECOGNIZED;
  }
}

export function featureSet_FieldPresenceToJSON(
  object: FeatureSet_FieldPresence
): string {
  switch (object) {
    case FeatureSet_FieldPresence.FIELD_PRESENCE_UNKNOWN:
      return "FIELD_PRESENCE_UNKNOWN";
    case FeatureSet_FieldPresence.EXPLICIT:
      return "EXPLICIT";
    case FeatureSet_FieldPresence.IMPLICIT:
      return "IMPLICIT";
    case FeatureSet_FieldPresence.LEGACY_REQUIRED:
      return "LEGACY_REQUIRED";
    default:
      return "UNKNOWN";
  }
}

export enum FeatureSet_EnumType {
  ENUM_TYPE_UNKNOWN = 0,
  OPEN = 1,
  CLOSED = 2,
  UNRECOGNIZED = -1,
}

export function featureSet_EnumTypeFromJSON(object: any): FeatureSet_EnumType {
  switch (object) {
    case 0:
    case "ENUM_TYPE_UNKNOWN":
      return FeatureSet_EnumType.ENUM_TYPE_UNKNOWN;
    case 1:
    case "OPEN":
      return FeatureSet_EnumType.OPEN;
    case 2:
    case "CLOSED":
      return FeatureSet_EnumType.CLOSED;
    case -1:
    case "UNRECOGNIZED":
    default:
      return FeatureSet_EnumType.UNRECOGNIZED;
  }
}

export function featureSet_EnumTypeToJSON(object: FeatureSet_EnumType): string {
  switch (object) {
    case FeatureSet_EnumType.ENUM_TYPE_UNKNOWN:
      return "ENUM_TYPE_UNKNOWN";
    case FeatureSet_EnumType.OPEN:
      return "OPEN";
    case FeatureSet_EnumType.CLOSED:
      return "CLOSED";
    default:
      return "UNKNOWN";
  }
}

export enum FeatureSet_RepeatedFieldEncoding {
  REPEATED_FIELD_ENCODING_UNKNOWN = 0,
  PACKED = 1,
  EXPANDED = 2,
  UNRECOGNIZED = -1,
}

export function featureSet_RepeatedFieldEncodingFromJSON(
  object: any
): FeatureSet_RepeatedFieldEncoding {
  switch (object) {
    case 0:
    case "REPEATED_FIELD_ENCODING_UNKNOWN":
      return FeatureSet_RepeatedFieldEncoding.REPEATED_FIELD_ENCODING_UNKNOWN;
    case 1:
    case "PACKED":
      return FeatureSet_RepeatedFieldEncoding.PACKED;
    case 2:
    case "EXPANDED":
      return FeatureSet_RepeatedFieldEncoding.EXPANDED;
    case -1:
    case "UNRECOGNIZED":
    default:
      return FeatureSet_RepeatedFieldEncoding.UNRECOGNIZED;
  }
}

export function featureSet_RepeatedFieldEncodingToJSON(
  object: FeatureSet_RepeatedFieldEncoding
): string {
  switch (object) {
    case FeatureSet_RepeatedFieldEncoding.REPEATED_FIELD_ENCODING_UNKNOWN:
      return "REPEATED_FIELD_ENCODING_UNKNOWN";
    case FeatureSet_RepeatedFieldEncoding.PACKED:
      return "PACKED";
    case FeatureSet_RepeatedFieldEncoding.EXPANDED:
      return "EXPANDED";
    default:
      return "UNKNOWN";
  }
}

export enum FeatureSet_Utf8Validation {
  UTF8_VALIDATION_UNKNOWN = 0,
  VERIFY = 2,
  NONE = 3,
  UNRECOGNIZED = -1,
}

export function featureSet_Utf8ValidationFromJSON(
  object: any
): FeatureSet_Utf8Validation {
  switch (object) {
    case 0:
    case "UTF8_VALIDATION_UNKNOWN":
      return FeatureSet_Utf8Validation.UTF8_VALIDATION_UNKNOWN;
    case 2:
    case "VERIFY":
      return FeatureSet_Utf8Validation.VERIFY;
    case 3:
    case "NONE":
      return FeatureSet_Utf8Validation.NONE;
    case -1:
    case "UNRECOGNIZED":
    default:
      return FeatureSet_Utf8Validation.UNRECOGNIZED;
  }
}

export function featureSet_Utf8ValidationToJSON(
  object: FeatureSet_Utf8Validation
): string {
  switch (object) {
    case FeatureSet_Utf8Validation.UTF8_VALIDATION_UNKNOWN:
      return "UTF8_VALIDATION_UNKNOWN";
    case FeatureSet_Utf8Validation.VERIFY:
      return "VERIFY";
    case FeatureSet_Utf8Validation.NONE:
      return "NONE";
    default:
      return "UNKNOWN";
  }
}

export enum FeatureSet_MessageEncoding {
  MESSAGE_ENCODING_UNKNOWN = 0,
  LENGTH_PREFIXED = 1,
  DELIMITED = 2,
  UNRECOGNIZED = -1,
}

export function featureSet_MessageEncodingFromJSON(
  object: any
): FeatureSet_MessageEncoding {
  switch (object) {
    case 0:
    case "MESSAGE_ENCODING_UNKNOWN":
      return FeatureSet_MessageEncoding.MESSAGE_ENCODING_UNKNOWN;
    case 1:
    case "LENGTH_PREFIXED":
      return FeatureSet_MessageEncoding.LENGTH_PREFIXED;
    case 2:
    case "DELIMITED":
      return FeatureSet_MessageEncoding.DELIMITED;
    case -1:
    case "UNRECOGNIZED":
    default:
      return FeatureSet_MessageEncoding.UNRECOGNIZED;
  }
}

export function featureSet_MessageEncodingToJSON(
  object: FeatureSet_MessageEncoding
): string {
  switch (object) {
    case FeatureSet_MessageEncoding.MESSAGE_ENCODING_UNKNOWN:
      return "MESSAGE_ENCODING_UNKNOWN";
    case FeatureSet_MessageEncoding.LENGTH_PREFIXED:
      return "LENGTH_PREFIXED";
    case FeatureSet_MessageEncoding.DELIMITED:
      return "DELIMITED";
    default:
      return "UNKNOWN";
  }
}

export enum FeatureSet_JsonFormat {
  JSON_FORMAT_UNKNOWN = 0,
  ALLOW = 1,
  LEGACY_BEST_EFFORT = 2,
  UNRECOGNIZED = -1,
}

export function featureSet_JsonFormatFromJSON(
  object: any
): FeatureSet_JsonFormat {
  switch (object) {
    case 0:
    case "JSON_FORMAT_UNKNOWN":
      return FeatureSet_JsonFormat.JSON_FORMAT_UNKNOWN;
    case 1:
    case "ALLOW":
      return FeatureSet_JsonFormat.ALLOW;
    case 2:
    case "LEGACY_BEST_EFFORT":
      return FeatureSet_JsonFormat.LEGACY_BEST_EFFORT;
    case -1:
    case "UNRECOGNIZED":
    default:
      return FeatureSet_JsonFormat.UNRECOGNIZED;
  }
}

export function featureSet_JsonFormatToJSON(
  object: FeatureSet_JsonFormat
): string {
  switch (object) {
    case FeatureSet_JsonFormat.JSON_FORMAT_UNKNOWN:
      return "JSON_FORMAT_UNKNOWN";
    case FeatureSet_JsonFormat.ALLOW:
      return "ALLOW";
    case FeatureSet_JsonFormat.LEGACY_BEST_EFFORT:
      return "LEGACY_BEST_EFFORT";
    default:
      return "UNKNOWN";
  }
}

/**
 * A compiled specification for the defaults of a set of features.  These
 * messages are generated from FeatureSet extensions and can be used to seed
 * feature resolution. The resolution with this object becomes a simple search
 * for the closest matching edition, followed by proto merges.
 */
export interface FeatureSetDefaults {
  defaults: FeatureSetDefaults_FeatureSetEditionDefault[];
  /**
   * The minimum supported edition (inclusive) when this was constructed.
   * Editions before this will not have defaults.
   */
  minimumEdition: Edition;
  /**
   * The maximum known edition (inclusive) when this was constructed. Editions
   * after this will not have reliable defaults.
   */
  maximumEdition: Edition;
}

/**
 * A map from every known edition with a unique set of defaults to its
 * defaults. Not all editions may be contained here.  For a given edition,
 * the defaults at the closest matching edition ordered at or before it should
 * be used.  This field must be in strict ascending order by edition.
 */
export interface FeatureSetDefaults_FeatureSetEditionDefault {
  edition: Edition;
  /** Defaults of features that can be overridden in this edition. */
  overridableFeatures?: FeatureSet;
  /** Defaults of features that can't be overridden in this edition. */
  fixedFeatures?: FeatureSet;
}

/**
 * Encapsulates information about the original source file from which a
 * FileDescriptorProto was generated.
 */
export interface SourceCodeInfo {
  /**
   * A Location identifies a piece of source code in a .proto file which
   * corresponds to a particular definition.  This information is intended
   * to be useful to IDEs, code indexers, documentation generators, and similar
   * tools.
   *
   * For example, say we have a file like:
   *   message Foo {
   *     optional string foo = 1;
   *   }
   * Let's look at just the field definition:
   *   optional string foo = 1;
   *   ^       ^^     ^^  ^  ^^^
   *   a       bc     de  f  ghi
   * We have the following locations:
   *   span   path               represents
   *   [a,i)  [ 4, 0, 2, 0 ]     The whole field definition.
   *   [a,b)  [ 4, 0, 2, 0, 4 ]  The label (optional).
   *   [c,d)  [ 4, 0, 2, 0, 5 ]  The type (string).
   *   [e,f)  [ 4, 0, 2, 0, 1 ]  The name (foo).
   *   [g,h)  [ 4, 0, 2, 0, 3 ]  The number (1).
   *
   * Notes:
   * - A location may refer to a repeated field itself (i.e. not to any
   *   particular index within it).  This is used whenever a set of elements are
   *   logically enclosed in a single code segment.  For example, an entire
   *   extend block (possibly containing multiple extension definitions) will
   *   have an outer location whose path refers to the "extensions" repeated
   *   field without an index.
   * - Multiple locations may have the same path.  This happens when a single
   *   logical declaration is spread out across multiple places.  The most
   *   obvious example is the "extend" block again -- there may be multiple
   *   extend blocks in the same scope, each of which will have the same path.
   * - A location's span is not always a subset of its parent's span.  For
   *   example, the "extendee" of an extension declaration appears at the
   *   beginning of the "extend" block and is shared by all extensions within
   *   the block.
   * - Just because a location's span is a subset of some other location's span
   *   does not mean that it is a descendant.  For example, a "group" defines
   *   both a type and a field in a single declaration.  Thus, the locations
   *   corresponding to the type and field and their components will overlap.
   * - Code which tries to interpret locations should probably be designed to
   *   ignore those that it doesn't understand, as more types of locations could
   *   be recorded in the future.
   */
  location: SourceCodeInfo_Location[];
}

export interface SourceCodeInfo_Location {
  /**
   * Identifies which part of the FileDescriptorProto was defined at this
   * location.
   *
   * Each element is a field number or an index.  They form a path from
   * the root FileDescriptorProto to the place where the definition appears.
   * For example, this path:
   *   [ 4, 3, 2, 7, 1 ]
   * refers to:
   *   file.message_type(3)  // 4, 3
   *       .field(7)         // 2, 7
   *       .name()           // 1
   * This is because FileDescriptorProto.message_type has field number 4:
   *   repeated DescriptorProto message_type = 4;
   * and DescriptorProto.field has field number 2:
   *   repeated FieldDescriptorProto field = 2;
   * and FieldDescriptorProto.name has field number 1:
   *   optional string name = 1;
   *
   * Thus, the above path gives the location of a field name.  If we removed
   * the last element:
   *   [ 4, 3, 2, 7 ]
   * this path refers to the whole field declaration (from the beginning
   * of the label to the terminating semicolon).
   */
  path: number[];
  /**
   * Always has exactly three or four elements: start line, start column,
   * end line (optional, otherwise assumed same as start line), end column.
   * These are packed into a single field for efficiency.  Note that line
   * and column numbers are zero-based -- typically you will want to add
   * 1 to each before displaying to a user.
   */
  span: number[];
  /**
   * If this SourceCodeInfo represents a complete declaration, these are any
   * comments appearing before and after the declaration which appear to be
   * attached to the declaration.
   *
   * A series of line comments appearing on consecutive lines, with no other
   * tokens appearing on those lines, will be treated as a single comment.
   *
   * leading_detached_comments will keep paragraphs of comments that appear
   * before (but not connected to) the current element. Each paragraph,
   * separated by empty lines, will be one comment element in the repeated
   * field.
   *
   * Only the comment content is provided; comment markers (e.g. //) are
   * stripped out.  For block comments, leading whitespace and an asterisk
   * will be stripped from the beginning of each line other than the first.
   * Newlines are included in the output.
   *
   * Examples:
   *
   *   optional int32 foo = 1;  // Comment attached to foo.
   *   // Comment attached to bar.
   *   optional int32 bar = 2;
   *
   *   optional string baz = 3;
   *   // Comment attached to baz.
   *   // Another line attached to baz.
   *
   *   // Comment attached to moo.
   *   //
   *   // Another line attached to moo.
   *   optional double moo = 4;
   *
   *   // Detached comment for corge. This is not leading or trailing comments
   *   // to moo or corge because there are blank lines separating it from
   *   // both.
   *
   *   // Detached comment for corge paragraph 2.
   *
   *   optional string corge = 5;
   *   /* Block comment attached
   *    * to corge.  Leading asterisks
   *    * will be removed. * /
   *   /* Block comment attached to
   *    * grault. * /
   *   optional int32 grault = 6;
   *
   *   // ignored detached comments.
   */
  leadingComments: string;
  trailingComments: string;
  leadingDetachedComments: string[];
}

/**
 * Describes the relationship between generated code and its original source
 * file. A GeneratedCodeInfo message is associated with only one generated
 * source file, but may contain references to different source .proto files.
 */
export interface GeneratedCodeInfo {
  /**
   * An Annotation connects some span of text in generated code to an element
   * of its generating .proto file.
   */
  annotation: GeneratedCodeInfo_Annotation[];
}

export interface GeneratedCodeInfo_Annotation {
  /**
   * Identifies the element in the original source .proto file. This field
   * is formatted the same as SourceCodeInfo.Location.path.
   */
  path: number[];
  /** Identifies the filesystem path to the original source .proto. */
  sourceFile: string;
  /**
   * Identifies the starting offset in bytes in the generated code
   * that relates to the identified object.
   */
  begin: number;
  /**
   * Identifies the ending offset in bytes in the generated code that
   * relates to the identified object. The end offset should be one past
   * the last relevant byte (so the length of the text = end - begin).
   */
  end: number;
  semantic: GeneratedCodeInfo_Annotation_Semantic;
}

/**
 * Represents the identified object's effect on the element in the original
 * .proto file.
 */
export enum GeneratedCodeInfo_Annotation_Semantic {
  /** NONE - There is no effect or the effect is indescribable. */
  NONE = 0,
  /** SET - The element is set or otherwise mutated. */
  SET = 1,
  /** ALIAS - An alias to the element is returned. */
  ALIAS = 2,
  UNRECOGNIZED = -1,
}

export function generatedCodeInfo_Annotation_SemanticFromJSON(
  object: any
): GeneratedCodeInfo_Annotation_Semantic {
  switch (object) {
    case 0:
    case "NONE":
      return GeneratedCodeInfo_Annotation_Semantic.NONE;
    case 1:
    case "SET":
      return GeneratedCodeInfo_Annotation_Semantic.SET;
    case 2:
    case "ALIAS":
      return GeneratedCodeInfo_Annotation_Semantic.ALIAS;
    case -1:
    case "UNRECOGNIZED":
    default:
      return GeneratedCodeInfo_Annotation_Semantic.UNRECOGNIZED;
  }
}

export function generatedCodeInfo_Annotation_SemanticToJSON(
  object: GeneratedCodeInfo_Annotation_Semantic
): string {
  switch (object) {
    case GeneratedCodeInfo_Annotation_Semantic.NONE:
      return "NONE";
    case GeneratedCodeInfo_Annotation_Semantic.SET:
      return "SET";
    case GeneratedCodeInfo_Annotation_Semantic.ALIAS:
      return "ALIAS";
    default:
      return "UNKNOWN";
  }
}

const baseFileDescriptorSet: object = {};

export const FileDescriptorSet = {
  encode(
    message: FileDescriptorSet,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.file) {
      FileDescriptorProto.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): FileDescriptorSet {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseFileDescriptorSet } as FileDescriptorSet;
    message.file = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.file.push(
            FileDescriptorProto.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): FileDescriptorSet {
    const message = { ...baseFileDescriptorSet } as FileDescriptorSet;
    message.file = (object.file ?? []).map((e: any) =>
      FileDescriptorProto.fromJSON(e)
    );
    return message;
  },

  toJSON(message: FileDescriptorSet): unknown {
    const obj: any = {};
    if (message.file) {
      obj.file = message.file.map((e) =>
        e ? FileDescriptorProto.toJSON(e) : undefined
      );
    } else {
      obj.file = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<FileDescriptorSet>): FileDescriptorSet {
    const message = { ...baseFileDescriptorSet } as FileDescriptorSet;
    message.file = (object.file ?? []).map((e) =>
      FileDescriptorProto.fromPartial(e)
    );
    return message;
  },
};

const baseFileDescriptorProto: object = {
  name: "",
  package: "",
  dependency: "",
  publicDependency: 0,
  weakDependency: 0,
  syntax: "",
  edition: 0,
};

export const FileDescriptorProto = {
  encode(
    message: FileDescriptorProto,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.package !== "") {
      writer.uint32(18).string(message.package);
    }
    for (const v of message.dependency) {
      writer.uint32(26).string(v!);
    }
    writer.uint32(82).fork();
    for (const v of message.publicDependency) {
      writer.int32(v);
    }
    writer.ldelim();
    writer.uint32(90).fork();
    for (const v of message.weakDependency) {
      writer.int32(v);
    }
    writer.ldelim();
    for (const v of message.messageType) {
      DescriptorProto.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    for (const v of message.enumType) {
      EnumDescriptorProto.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    for (const v of message.service) {
      ServiceDescriptorProto.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    for (const v of message.extension) {
      FieldDescriptorProto.encode(v!, writer.uint32(58).fork()).ldelim();
    }
    if (message.options !== undefined) {
      FileOptions.encode(message.options, writer.uint32(66).fork()).ldelim();
    }
    if (message.sourceCodeInfo !== undefined) {
      SourceCodeInfo.encode(
        message.sourceCodeInfo,
        writer.uint32(74).fork()
      ).ldelim();
    }
    if (message.syntax !== "") {
      writer.uint32(98).string(message.syntax);
    }
    if (message.edition !== 0) {
      writer.uint32(112).int32(message.edition);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): FileDescriptorProto {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseFileDescriptorProto } as FileDescriptorProto;
    message.dependency = [];
    message.publicDependency = [];
    message.weakDependency = [];
    message.messageType = [];
    message.enumType = [];
    message.service = [];
    message.extension = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 2:
          message.package = reader.string();
          break;
        case 3:
          message.dependency.push(reader.string());
          break;
        case 10:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.publicDependency.push(reader.int32());
            }
          } else {
            message.publicDependency.push(reader.int32());
          }
          break;
        case 11:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.weakDependency.push(reader.int32());
            }
          } else {
            message.weakDependency.push(reader.int32());
          }
          break;
        case 4:
          message.messageType.push(
            DescriptorProto.decode(reader, reader.uint32())
          );
          break;
        case 5:
          message.enumType.push(
            EnumDescriptorProto.decode(reader, reader.uint32())
          );
          break;
        case 6:
          message.service.push(
            ServiceDescriptorProto.decode(reader, reader.uint32())
          );
          break;
        case 7:
          message.extension.push(
            FieldDescriptorProto.decode(reader, reader.uint32())
          );
          break;
        case 8:
          message.options = FileOptions.decode(reader, reader.uint32());
          break;
        case 9:
          message.sourceCodeInfo = SourceCodeInfo.decode(
            reader,
            reader.uint32()
          );
          break;
        case 12:
          message.syntax = reader.string();
          break;
        case 14:
          message.edition = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): FileDescriptorProto {
    const message = { ...baseFileDescriptorProto } as FileDescriptorProto;
    message.name =
      object.name !== undefined && object.name !== null
        ? String(object.name)
        : "";
    message.package =
      object.package !== undefined && object.package !== null
        ? String(object.package)
        : "";
    message.dependency = (object.dependency ?? []).map((e: any) => String(e));
    message.publicDependency = (object.publicDependency ?? []).map((e: any) =>
      Number(e)
    );
    message.weakDependency = (object.weakDependency ?? []).map((e: any) =>
      Number(e)
    );
    message.messageType = (object.messageType ?? []).map((e: any) =>
      DescriptorProto.fromJSON(e)
    );
    message.enumType = (object.enumType ?? []).map((e: any) =>
      EnumDescriptorProto.fromJSON(e)
    );
    message.service = (object.service ?? []).map((e: any) =>
      ServiceDescriptorProto.fromJSON(e)
    );
    message.extension = (object.extension ?? []).map((e: any) =>
      FieldDescriptorProto.fromJSON(e)
    );
    message.options =
      object.options !== undefined && object.options !== null
        ? FileOptions.fromJSON(object.options)
        : undefined;
    message.sourceCodeInfo =
      object.sourceCodeInfo !== undefined && object.sourceCodeInfo !== null
        ? SourceCodeInfo.fromJSON(object.sourceCodeInfo)
        : undefined;
    message.syntax =
      object.syntax !== undefined && object.syntax !== null
        ? String(object.syntax)
        : "";
    message.edition =
      object.edition !== undefined && object.edition !== null
        ? editionFromJSON(object.edition)
        : 0;
    return message;
  },

  toJSON(message: FileDescriptorProto): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    message.package !== undefined && (obj.package = message.package);
    if (message.dependency) {
      obj.dependency = message.dependency.map((e) => e);
    } else {
      obj.dependency = [];
    }
    if (message.publicDependency) {
      obj.publicDependency = message.publicDependency.map((e) => e);
    } else {
      obj.publicDependency = [];
    }
    if (message.weakDependency) {
      obj.weakDependency = message.weakDependency.map((e) => e);
    } else {
      obj.weakDependency = [];
    }
    if (message.messageType) {
      obj.messageType = message.messageType.map((e) =>
        e ? DescriptorProto.toJSON(e) : undefined
      );
    } else {
      obj.messageType = [];
    }
    if (message.enumType) {
      obj.enumType = message.enumType.map((e) =>
        e ? EnumDescriptorProto.toJSON(e) : undefined
      );
    } else {
      obj.enumType = [];
    }
    if (message.service) {
      obj.service = message.service.map((e) =>
        e ? ServiceDescriptorProto.toJSON(e) : undefined
      );
    } else {
      obj.service = [];
    }
    if (message.extension) {
      obj.extension = message.extension.map((e) =>
        e ? FieldDescriptorProto.toJSON(e) : undefined
      );
    } else {
      obj.extension = [];
    }
    message.options !== undefined &&
      (obj.options = message.options
        ? FileOptions.toJSON(message.options)
        : undefined);
    message.sourceCodeInfo !== undefined &&
      (obj.sourceCodeInfo = message.sourceCodeInfo
        ? SourceCodeInfo.toJSON(message.sourceCodeInfo)
        : undefined);
    message.syntax !== undefined && (obj.syntax = message.syntax);
    message.edition !== undefined &&
      (obj.edition = editionToJSON(message.edition));
    return obj;
  },

  fromPartial(object: DeepPartial<FileDescriptorProto>): FileDescriptorProto {
    const message = { ...baseFileDescriptorProto } as FileDescriptorProto;
    message.name = object.name ?? "";
    message.package = object.package ?? "";
    message.dependency = (object.dependency ?? []).map((e) => e);
    message.publicDependency = (object.publicDependency ?? []).map((e) => e);
    message.weakDependency = (object.weakDependency ?? []).map((e) => e);
    message.messageType = (object.messageType ?? []).map((e) =>
      DescriptorProto.fromPartial(e)
    );
    message.enumType = (object.enumType ?? []).map((e) =>
      EnumDescriptorProto.fromPartial(e)
    );
    message.service = (object.service ?? []).map((e) =>
      ServiceDescriptorProto.fromPartial(e)
    );
    message.extension = (object.extension ?? []).map((e) =>
      FieldDescriptorProto.fromPartial(e)
    );
    message.options =
      object.options !== undefined && object.options !== null
        ? FileOptions.fromPartial(object.options)
        : undefined;
    message.sourceCodeInfo =
      object.sourceCodeInfo !== undefined && object.sourceCodeInfo !== null
        ? SourceCodeInfo.fromPartial(object.sourceCodeInfo)
        : undefined;
    message.syntax = object.syntax ?? "";
    message.edition = object.edition ?? 0;
    return message;
  },
};

const baseDescriptorProto: object = { name: "", reservedName: "" };

export const DescriptorProto = {
  encode(
    message: DescriptorProto,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    for (const v of message.field) {
      FieldDescriptorProto.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.extension) {
      FieldDescriptorProto.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    for (const v of message.nestedType) {
      DescriptorProto.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.enumType) {
      EnumDescriptorProto.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    for (const v of message.extensionRange) {
      DescriptorProto_ExtensionRange.encode(
        v!,
        writer.uint32(42).fork()
      ).ldelim();
    }
    for (const v of message.oneofDecl) {
      OneofDescriptorProto.encode(v!, writer.uint32(66).fork()).ldelim();
    }
    if (message.options !== undefined) {
      MessageOptions.encode(message.options, writer.uint32(58).fork()).ldelim();
    }
    for (const v of message.reservedRange) {
      DescriptorProto_ReservedRange.encode(
        v!,
        writer.uint32(74).fork()
      ).ldelim();
    }
    for (const v of message.reservedName) {
      writer.uint32(82).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DescriptorProto {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseDescriptorProto } as DescriptorProto;
    message.field = [];
    message.extension = [];
    message.nestedType = [];
    message.enumType = [];
    message.extensionRange = [];
    message.oneofDecl = [];
    message.reservedRange = [];
    message.reservedName = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 2:
          message.field.push(
            FieldDescriptorProto.decode(reader, reader.uint32())
          );
          break;
        case 6:
          message.extension.push(
            FieldDescriptorProto.decode(reader, reader.uint32())
          );
          break;
        case 3:
          message.nestedType.push(
            DescriptorProto.decode(reader, reader.uint32())
          );
          break;
        case 4:
          message.enumType.push(
            EnumDescriptorProto.decode(reader, reader.uint32())
          );
          break;
        case 5:
          message.extensionRange.push(
            DescriptorProto_ExtensionRange.decode(reader, reader.uint32())
          );
          break;
        case 8:
          message.oneofDecl.push(
            OneofDescriptorProto.decode(reader, reader.uint32())
          );
          break;
        case 7:
          message.options = MessageOptions.decode(reader, reader.uint32());
          break;
        case 9:
          message.reservedRange.push(
            DescriptorProto_ReservedRange.decode(reader, reader.uint32())
          );
          break;
        case 10:
          message.reservedName.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): DescriptorProto {
    const message = { ...baseDescriptorProto } as DescriptorProto;
    message.name =
      object.name !== undefined && object.name !== null
        ? String(object.name)
        : "";
    message.field = (object.field ?? []).map((e: any) =>
      FieldDescriptorProto.fromJSON(e)
    );
    message.extension = (object.extension ?? []).map((e: any) =>
      FieldDescriptorProto.fromJSON(e)
    );
    message.nestedType = (object.nestedType ?? []).map((e: any) =>
      DescriptorProto.fromJSON(e)
    );
    message.enumType = (object.enumType ?? []).map((e: any) =>
      EnumDescriptorProto.fromJSON(e)
    );
    message.extensionRange = (object.extensionRange ?? []).map((e: any) =>
      DescriptorProto_ExtensionRange.fromJSON(e)
    );
    message.oneofDecl = (object.oneofDecl ?? []).map((e: any) =>
      OneofDescriptorProto.fromJSON(e)
    );
    message.options =
      object.options !== undefined && object.options !== null
        ? MessageOptions.fromJSON(object.options)
        : undefined;
    message.reservedRange = (object.reservedRange ?? []).map((e: any) =>
      DescriptorProto_ReservedRange.fromJSON(e)
    );
    message.reservedName = (object.reservedName ?? []).map((e: any) =>
      String(e)
    );
    return message;
  },

  toJSON(message: DescriptorProto): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    if (message.field) {
      obj.field = message.field.map((e) =>
        e ? FieldDescriptorProto.toJSON(e) : undefined
      );
    } else {
      obj.field = [];
    }
    if (message.extension) {
      obj.extension = message.extension.map((e) =>
        e ? FieldDescriptorProto.toJSON(e) : undefined
      );
    } else {
      obj.extension = [];
    }
    if (message.nestedType) {
      obj.nestedType = message.nestedType.map((e) =>
        e ? DescriptorProto.toJSON(e) : undefined
      );
    } else {
      obj.nestedType = [];
    }
    if (message.enumType) {
      obj.enumType = message.enumType.map((e) =>
        e ? EnumDescriptorProto.toJSON(e) : undefined
      );
    } else {
      obj.enumType = [];
    }
    if (message.extensionRange) {
      obj.extensionRange = message.extensionRange.map((e) =>
        e ? DescriptorProto_ExtensionRange.toJSON(e) : undefined
      );
    } else {
      obj.extensionRange = [];
    }
    if (message.oneofDecl) {
      obj.oneofDecl = message.oneofDecl.map((e) =>
        e ? OneofDescriptorProto.toJSON(e) : undefined
      );
    } else {
      obj.oneofDecl = [];
    }
    message.options !== undefined &&
      (obj.options = message.options
        ? MessageOptions.toJSON(message.options)
        : undefined);
    if (message.reservedRange) {
      obj.reservedRange = message.reservedRange.map((e) =>
        e ? DescriptorProto_ReservedRange.toJSON(e) : undefined
      );
    } else {
      obj.reservedRange = [];
    }
    if (message.reservedName) {
      obj.reservedName = message.reservedName.map((e) => e);
    } else {
      obj.reservedName = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<DescriptorProto>): DescriptorProto {
    const message = { ...baseDescriptorProto } as DescriptorProto;
    message.name = object.name ?? "";
    message.field = (object.field ?? []).map((e) =>
      FieldDescriptorProto.fromPartial(e)
    );
    message.extension = (object.extension ?? []).map((e) =>
      FieldDescriptorProto.fromPartial(e)
    );
    message.nestedType = (object.nestedType ?? []).map((e) =>
      DescriptorProto.fromPartial(e)
    );
    message.enumType = (object.enumType ?? []).map((e) =>
      EnumDescriptorProto.fromPartial(e)
    );
    message.extensionRange = (object.extensionRange ?? []).map((e) =>
      DescriptorProto_ExtensionRange.fromPartial(e)
    );
    message.oneofDecl = (object.oneofDecl ?? []).map((e) =>
      OneofDescriptorProto.fromPartial(e)
    );
    message.options =
      object.options !== undefined && object.options !== null
        ? MessageOptions.fromPartial(object.options)
        : undefined;
    message.reservedRange = (object.reservedRange ?? []).map((e) =>
      DescriptorProto_ReservedRange.fromPartial(e)
    );
    message.reservedName = (object.reservedName ?? []).map((e) => e);
    return message;
  },
};

const baseDescriptorProto_ExtensionRange: object = { start: 0, end: 0 };

export const DescriptorProto_ExtensionRange = {
  encode(
    message: DescriptorProto_ExtensionRange,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.start !== 0) {
      writer.uint32(8).int32(message.start);
    }
    if (message.end !== 0) {
      writer.uint32(16).int32(message.end);
    }
    if (message.options !== undefined) {
      ExtensionRangeOptions.encode(
        message.options,
        writer.uint32(26).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): DescriptorProto_ExtensionRange {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseDescriptorProto_ExtensionRange,
    } as DescriptorProto_ExtensionRange;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.start = reader.int32();
          break;
        case 2:
          message.end = reader.int32();
          break;
        case 3:
          message.options = ExtensionRangeOptions.decode(
            reader,
            reader.uint32()
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): DescriptorProto_ExtensionRange {
    const message = {
      ...baseDescriptorProto_ExtensionRange,
    } as DescriptorProto_ExtensionRange;
    message.start =
      object.start !== undefined && object.start !== null
        ? Number(object.start)
        : 0;
    message.end =
      object.end !== undefined && object.end !== null ? Number(object.end) : 0;
    message.options =
      object.options !== undefined && object.options !== null
        ? ExtensionRangeOptions.fromJSON(object.options)
        : undefined;
    return message;
  },

  toJSON(message: DescriptorProto_ExtensionRange): unknown {
    const obj: any = {};
    message.start !== undefined && (obj.start = message.start);
    message.end !== undefined && (obj.end = message.end);
    message.options !== undefined &&
      (obj.options = message.options
        ? ExtensionRangeOptions.toJSON(message.options)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<DescriptorProto_ExtensionRange>
  ): DescriptorProto_ExtensionRange {
    const message = {
      ...baseDescriptorProto_ExtensionRange,
    } as DescriptorProto_ExtensionRange;
    message.start = object.start ?? 0;
    message.end = object.end ?? 0;
    message.options =
      object.options !== undefined && object.options !== null
        ? ExtensionRangeOptions.fromPartial(object.options)
        : undefined;
    return message;
  },
};

const baseDescriptorProto_ReservedRange: object = { start: 0, end: 0 };

export const DescriptorProto_ReservedRange = {
  encode(
    message: DescriptorProto_ReservedRange,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.start !== 0) {
      writer.uint32(8).int32(message.start);
    }
    if (message.end !== 0) {
      writer.uint32(16).int32(message.end);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): DescriptorProto_ReservedRange {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseDescriptorProto_ReservedRange,
    } as DescriptorProto_ReservedRange;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.start = reader.int32();
          break;
        case 2:
          message.end = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): DescriptorProto_ReservedRange {
    const message = {
      ...baseDescriptorProto_ReservedRange,
    } as DescriptorProto_ReservedRange;
    message.start =
      object.start !== undefined && object.start !== null
        ? Number(object.start)
        : 0;
    message.end =
      object.end !== undefined && object.end !== null ? Number(object.end) : 0;
    return message;
  },

  toJSON(message: DescriptorProto_ReservedRange): unknown {
    const obj: any = {};
    message.start !== undefined && (obj.start = message.start);
    message.end !== undefined && (obj.end = message.end);
    return obj;
  },

  fromPartial(
    object: DeepPartial<DescriptorProto_ReservedRange>
  ): DescriptorProto_ReservedRange {
    const message = {
      ...baseDescriptorProto_ReservedRange,
    } as DescriptorProto_ReservedRange;
    message.start = object.start ?? 0;
    message.end = object.end ?? 0;
    return message;
  },
};

const baseExtensionRangeOptions: object = { verification: 0 };

export const ExtensionRangeOptions = {
  encode(
    message: ExtensionRangeOptions,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.uninterpretedOption) {
      UninterpretedOption.encode(v!, writer.uint32(7994).fork()).ldelim();
    }
    for (const v of message.declaration) {
      ExtensionRangeOptions_Declaration.encode(
        v!,
        writer.uint32(18).fork()
      ).ldelim();
    }
    if (message.features !== undefined) {
      FeatureSet.encode(message.features, writer.uint32(402).fork()).ldelim();
    }
    if (message.verification !== 0) {
      writer.uint32(24).int32(message.verification);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): ExtensionRangeOptions {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseExtensionRangeOptions } as ExtensionRangeOptions;
    message.uninterpretedOption = [];
    message.declaration = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 999:
          message.uninterpretedOption.push(
            UninterpretedOption.decode(reader, reader.uint32())
          );
          break;
        case 2:
          message.declaration.push(
            ExtensionRangeOptions_Declaration.decode(reader, reader.uint32())
          );
          break;
        case 50:
          message.features = FeatureSet.decode(reader, reader.uint32());
          break;
        case 3:
          message.verification = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ExtensionRangeOptions {
    const message = { ...baseExtensionRangeOptions } as ExtensionRangeOptions;
    message.uninterpretedOption = (object.uninterpretedOption ?? []).map(
      (e: any) => UninterpretedOption.fromJSON(e)
    );
    message.declaration = (object.declaration ?? []).map((e: any) =>
      ExtensionRangeOptions_Declaration.fromJSON(e)
    );
    message.features =
      object.features !== undefined && object.features !== null
        ? FeatureSet.fromJSON(object.features)
        : undefined;
    message.verification =
      object.verification !== undefined && object.verification !== null
        ? extensionRangeOptions_VerificationStateFromJSON(object.verification)
        : 0;
    return message;
  },

  toJSON(message: ExtensionRangeOptions): unknown {
    const obj: any = {};
    if (message.uninterpretedOption) {
      obj.uninterpretedOption = message.uninterpretedOption.map((e) =>
        e ? UninterpretedOption.toJSON(e) : undefined
      );
    } else {
      obj.uninterpretedOption = [];
    }
    if (message.declaration) {
      obj.declaration = message.declaration.map((e) =>
        e ? ExtensionRangeOptions_Declaration.toJSON(e) : undefined
      );
    } else {
      obj.declaration = [];
    }
    message.features !== undefined &&
      (obj.features = message.features
        ? FeatureSet.toJSON(message.features)
        : undefined);
    message.verification !== undefined &&
      (obj.verification = extensionRangeOptions_VerificationStateToJSON(
        message.verification
      ));
    return obj;
  },

  fromPartial(
    object: DeepPartial<ExtensionRangeOptions>
  ): ExtensionRangeOptions {
    const message = { ...baseExtensionRangeOptions } as ExtensionRangeOptions;
    message.uninterpretedOption = (object.uninterpretedOption ?? []).map((e) =>
      UninterpretedOption.fromPartial(e)
    );
    message.declaration = (object.declaration ?? []).map((e) =>
      ExtensionRangeOptions_Declaration.fromPartial(e)
    );
    message.features =
      object.features !== undefined && object.features !== null
        ? FeatureSet.fromPartial(object.features)
        : undefined;
    message.verification = object.verification ?? 0;
    return message;
  },
};

const baseExtensionRangeOptions_Declaration: object = {
  number: 0,
  fullName: "",
  type: "",
  reserved: false,
  repeated: false,
};

export const ExtensionRangeOptions_Declaration = {
  encode(
    message: ExtensionRangeOptions_Declaration,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.number !== 0) {
      writer.uint32(8).int32(message.number);
    }
    if (message.fullName !== "") {
      writer.uint32(18).string(message.fullName);
    }
    if (message.type !== "") {
      writer.uint32(26).string(message.type);
    }
    if (message.reserved === true) {
      writer.uint32(40).bool(message.reserved);
    }
    if (message.repeated === true) {
      writer.uint32(48).bool(message.repeated);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): ExtensionRangeOptions_Declaration {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseExtensionRangeOptions_Declaration,
    } as ExtensionRangeOptions_Declaration;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.number = reader.int32();
          break;
        case 2:
          message.fullName = reader.string();
          break;
        case 3:
          message.type = reader.string();
          break;
        case 5:
          message.reserved = reader.bool();
          break;
        case 6:
          message.repeated = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ExtensionRangeOptions_Declaration {
    const message = {
      ...baseExtensionRangeOptions_Declaration,
    } as ExtensionRangeOptions_Declaration;
    message.number =
      object.number !== undefined && object.number !== null
        ? Number(object.number)
        : 0;
    message.fullName =
      object.fullName !== undefined && object.fullName !== null
        ? String(object.fullName)
        : "";
    message.type =
      object.type !== undefined && object.type !== null
        ? String(object.type)
        : "";
    message.reserved =
      object.reserved !== undefined && object.reserved !== null
        ? Boolean(object.reserved)
        : false;
    message.repeated =
      object.repeated !== undefined && object.repeated !== null
        ? Boolean(object.repeated)
        : false;
    return message;
  },

  toJSON(message: ExtensionRangeOptions_Declaration): unknown {
    const obj: any = {};
    message.number !== undefined && (obj.number = message.number);
    message.fullName !== undefined && (obj.fullName = message.fullName);
    message.type !== undefined && (obj.type = message.type);
    message.reserved !== undefined && (obj.reserved = message.reserved);
    message.repeated !== undefined && (obj.repeated = message.repeated);
    return obj;
  },

  fromPartial(
    object: DeepPartial<ExtensionRangeOptions_Declaration>
  ): ExtensionRangeOptions_Declaration {
    const message = {
      ...baseExtensionRangeOptions_Declaration,
    } as ExtensionRangeOptions_Declaration;
    message.number = object.number ?? 0;
    message.fullName = object.fullName ?? "";
    message.type = object.type ?? "";
    message.reserved = object.reserved ?? false;
    message.repeated = object.repeated ?? false;
    return message;
  },
};

const baseFieldDescriptorProto: object = {
  name: "",
  number: 0,
  label: 1,
  type: 1,
  typeName: "",
  extendee: "",
  defaultValue: "",
  oneofIndex: 0,
  jsonName: "",
  proto3Optional: false,
};

export const FieldDescriptorProto = {
  encode(
    message: FieldDescriptorProto,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.number !== 0) {
      writer.uint32(24).int32(message.number);
    }
    if (message.label !== 1) {
      writer.uint32(32).int32(message.label);
    }
    if (message.type !== 1) {
      writer.uint32(40).int32(message.type);
    }
    if (message.typeName !== "") {
      writer.uint32(50).string(message.typeName);
    }
    if (message.extendee !== "") {
      writer.uint32(18).string(message.extendee);
    }
    if (message.defaultValue !== "") {
      writer.uint32(58).string(message.defaultValue);
    }
    if (message.oneofIndex !== 0) {
      writer.uint32(72).int32(message.oneofIndex);
    }
    if (message.jsonName !== "") {
      writer.uint32(82).string(message.jsonName);
    }
    if (message.options !== undefined) {
      FieldOptions.encode(message.options, writer.uint32(66).fork()).ldelim();
    }
    if (message.proto3Optional === true) {
      writer.uint32(136).bool(message.proto3Optional);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): FieldDescriptorProto {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseFieldDescriptorProto } as FieldDescriptorProto;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 3:
          message.number = reader.int32();
          break;
        case 4:
          message.label = reader.int32() as any;
          break;
        case 5:
          message.type = reader.int32() as any;
          break;
        case 6:
          message.typeName = reader.string();
          break;
        case 2:
          message.extendee = reader.string();
          break;
        case 7:
          message.defaultValue = reader.string();
          break;
        case 9:
          message.oneofIndex = reader.int32();
          break;
        case 10:
          message.jsonName = reader.string();
          break;
        case 8:
          message.options = FieldOptions.decode(reader, reader.uint32());
          break;
        case 17:
          message.proto3Optional = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): FieldDescriptorProto {
    const message = { ...baseFieldDescriptorProto } as FieldDescriptorProto;
    message.name =
      object.name !== undefined && object.name !== null
        ? String(object.name)
        : "";
    message.number =
      object.number !== undefined && object.number !== null
        ? Number(object.number)
        : 0;
    message.label =
      object.label !== undefined && object.label !== null
        ? fieldDescriptorProto_LabelFromJSON(object.label)
        : 1;
    message.type =
      object.type !== undefined && object.type !== null
        ? fieldDescriptorProto_TypeFromJSON(object.type)
        : 1;
    message.typeName =
      object.typeName !== undefined && object.typeName !== null
        ? String(object.typeName)
        : "";
    message.extendee =
      object.extendee !== undefined && object.extendee !== null
        ? String(object.extendee)
        : "";
    message.defaultValue =
      object.defaultValue !== undefined && object.defaultValue !== null
        ? String(object.defaultValue)
        : "";
    message.oneofIndex =
      object.oneofIndex !== undefined && object.oneofIndex !== null
        ? Number(object.oneofIndex)
        : 0;
    message.jsonName =
      object.jsonName !== undefined && object.jsonName !== null
        ? String(object.jsonName)
        : "";
    message.options =
      object.options !== undefined && object.options !== null
        ? FieldOptions.fromJSON(object.options)
        : undefined;
    message.proto3Optional =
      object.proto3Optional !== undefined && object.proto3Optional !== null
        ? Boolean(object.proto3Optional)
        : false;
    return message;
  },

  toJSON(message: FieldDescriptorProto): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    message.number !== undefined && (obj.number = message.number);
    message.label !== undefined &&
      (obj.label = fieldDescriptorProto_LabelToJSON(message.label));
    message.type !== undefined &&
      (obj.type = fieldDescriptorProto_TypeToJSON(message.type));
    message.typeName !== undefined && (obj.typeName = message.typeName);
    message.extendee !== undefined && (obj.extendee = message.extendee);
    message.defaultValue !== undefined &&
      (obj.defaultValue = message.defaultValue);
    message.oneofIndex !== undefined && (obj.oneofIndex = message.oneofIndex);
    message.jsonName !== undefined && (obj.jsonName = message.jsonName);
    message.options !== undefined &&
      (obj.options = message.options
        ? FieldOptions.toJSON(message.options)
        : undefined);
    message.proto3Optional !== undefined &&
      (obj.proto3Optional = message.proto3Optional);
    return obj;
  },

  fromPartial(object: DeepPartial<FieldDescriptorProto>): FieldDescriptorProto {
    const message = { ...baseFieldDescriptorProto } as FieldDescriptorProto;
    message.name = object.name ?? "";
    message.number = object.number ?? 0;
    message.label = object.label ?? 1;
    message.type = object.type ?? 1;
    message.typeName = object.typeName ?? "";
    message.extendee = object.extendee ?? "";
    message.defaultValue = object.defaultValue ?? "";
    message.oneofIndex = object.oneofIndex ?? 0;
    message.jsonName = object.jsonName ?? "";
    message.options =
      object.options !== undefined && object.options !== null
        ? FieldOptions.fromPartial(object.options)
        : undefined;
    message.proto3Optional = object.proto3Optional ?? false;
    return message;
  },
};

const baseOneofDescriptorProto: object = { name: "" };

export const OneofDescriptorProto = {
  encode(
    message: OneofDescriptorProto,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.options !== undefined) {
      OneofOptions.encode(message.options, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): OneofDescriptorProto {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseOneofDescriptorProto } as OneofDescriptorProto;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 2:
          message.options = OneofOptions.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): OneofDescriptorProto {
    const message = { ...baseOneofDescriptorProto } as OneofDescriptorProto;
    message.name =
      object.name !== undefined && object.name !== null
        ? String(object.name)
        : "";
    message.options =
      object.options !== undefined && object.options !== null
        ? OneofOptions.fromJSON(object.options)
        : undefined;
    return message;
  },

  toJSON(message: OneofDescriptorProto): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    message.options !== undefined &&
      (obj.options = message.options
        ? OneofOptions.toJSON(message.options)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<OneofDescriptorProto>): OneofDescriptorProto {
    const message = { ...baseOneofDescriptorProto } as OneofDescriptorProto;
    message.name = object.name ?? "";
    message.options =
      object.options !== undefined && object.options !== null
        ? OneofOptions.fromPartial(object.options)
        : undefined;
    return message;
  },
};

const baseEnumDescriptorProto: object = { name: "", reservedName: "" };

export const EnumDescriptorProto = {
  encode(
    message: EnumDescriptorProto,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    for (const v of message.value) {
      EnumValueDescriptorProto.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.options !== undefined) {
      EnumOptions.encode(message.options, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.reservedRange) {
      EnumDescriptorProto_EnumReservedRange.encode(
        v!,
        writer.uint32(34).fork()
      ).ldelim();
    }
    for (const v of message.reservedName) {
      writer.uint32(42).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EnumDescriptorProto {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseEnumDescriptorProto } as EnumDescriptorProto;
    message.value = [];
    message.reservedRange = [];
    message.reservedName = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 2:
          message.value.push(
            EnumValueDescriptorProto.decode(reader, reader.uint32())
          );
          break;
        case 3:
          message.options = EnumOptions.decode(reader, reader.uint32());
          break;
        case 4:
          message.reservedRange.push(
            EnumDescriptorProto_EnumReservedRange.decode(
              reader,
              reader.uint32()
            )
          );
          break;
        case 5:
          message.reservedName.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): EnumDescriptorProto {
    const message = { ...baseEnumDescriptorProto } as EnumDescriptorProto;
    message.name =
      object.name !== undefined && object.name !== null
        ? String(object.name)
        : "";
    message.value = (object.value ?? []).map((e: any) =>
      EnumValueDescriptorProto.fromJSON(e)
    );
    message.options =
      object.options !== undefined && object.options !== null
        ? EnumOptions.fromJSON(object.options)
        : undefined;
    message.reservedRange = (object.reservedRange ?? []).map((e: any) =>
      EnumDescriptorProto_EnumReservedRange.fromJSON(e)
    );
    message.reservedName = (object.reservedName ?? []).map((e: any) =>
      String(e)
    );
    return message;
  },

  toJSON(message: EnumDescriptorProto): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    if (message.value) {
      obj.value = message.value.map((e) =>
        e ? EnumValueDescriptorProto.toJSON(e) : undefined
      );
    } else {
      obj.value = [];
    }
    message.options !== undefined &&
      (obj.options = message.options
        ? EnumOptions.toJSON(message.options)
        : undefined);
    if (message.reservedRange) {
      obj.reservedRange = message.reservedRange.map((e) =>
        e ? EnumDescriptorProto_EnumReservedRange.toJSON(e) : undefined
      );
    } else {
      obj.reservedRange = [];
    }
    if (message.reservedName) {
      obj.reservedName = message.reservedName.map((e) => e);
    } else {
      obj.reservedName = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<EnumDescriptorProto>): EnumDescriptorProto {
    const message = { ...baseEnumDescriptorProto } as EnumDescriptorProto;
    message.name = object.name ?? "";
    message.value = (object.value ?? []).map((e) =>
      EnumValueDescriptorProto.fromPartial(e)
    );
    message.options =
      object.options !== undefined && object.options !== null
        ? EnumOptions.fromPartial(object.options)
        : undefined;
    message.reservedRange = (object.reservedRange ?? []).map((e) =>
      EnumDescriptorProto_EnumReservedRange.fromPartial(e)
    );
    message.reservedName = (object.reservedName ?? []).map((e) => e);
    return message;
  },
};

const baseEnumDescriptorProto_EnumReservedRange: object = { start: 0, end: 0 };

export const EnumDescriptorProto_EnumReservedRange = {
  encode(
    message: EnumDescriptorProto_EnumReservedRange,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.start !== 0) {
      writer.uint32(8).int32(message.start);
    }
    if (message.end !== 0) {
      writer.uint32(16).int32(message.end);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): EnumDescriptorProto_EnumReservedRange {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseEnumDescriptorProto_EnumReservedRange,
    } as EnumDescriptorProto_EnumReservedRange;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.start = reader.int32();
          break;
        case 2:
          message.end = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): EnumDescriptorProto_EnumReservedRange {
    const message = {
      ...baseEnumDescriptorProto_EnumReservedRange,
    } as EnumDescriptorProto_EnumReservedRange;
    message.start =
      object.start !== undefined && object.start !== null
        ? Number(object.start)
        : 0;
    message.end =
      object.end !== undefined && object.end !== null ? Number(object.end) : 0;
    return message;
  },

  toJSON(message: EnumDescriptorProto_EnumReservedRange): unknown {
    const obj: any = {};
    message.start !== undefined && (obj.start = message.start);
    message.end !== undefined && (obj.end = message.end);
    return obj;
  },

  fromPartial(
    object: DeepPartial<EnumDescriptorProto_EnumReservedRange>
  ): EnumDescriptorProto_EnumReservedRange {
    const message = {
      ...baseEnumDescriptorProto_EnumReservedRange,
    } as EnumDescriptorProto_EnumReservedRange;
    message.start = object.start ?? 0;
    message.end = object.end ?? 0;
    return message;
  },
};

const baseEnumValueDescriptorProto: object = { name: "", number: 0 };

export const EnumValueDescriptorProto = {
  encode(
    message: EnumValueDescriptorProto,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.number !== 0) {
      writer.uint32(16).int32(message.number);
    }
    if (message.options !== undefined) {
      EnumValueOptions.encode(
        message.options,
        writer.uint32(26).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): EnumValueDescriptorProto {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseEnumValueDescriptorProto,
    } as EnumValueDescriptorProto;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 2:
          message.number = reader.int32();
          break;
        case 3:
          message.options = EnumValueOptions.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): EnumValueDescriptorProto {
    const message = {
      ...baseEnumValueDescriptorProto,
    } as EnumValueDescriptorProto;
    message.name =
      object.name !== undefined && object.name !== null
        ? String(object.name)
        : "";
    message.number =
      object.number !== undefined && object.number !== null
        ? Number(object.number)
        : 0;
    message.options =
      object.options !== undefined && object.options !== null
        ? EnumValueOptions.fromJSON(object.options)
        : undefined;
    return message;
  },

  toJSON(message: EnumValueDescriptorProto): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    message.number !== undefined && (obj.number = message.number);
    message.options !== undefined &&
      (obj.options = message.options
        ? EnumValueOptions.toJSON(message.options)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<EnumValueDescriptorProto>
  ): EnumValueDescriptorProto {
    const message = {
      ...baseEnumValueDescriptorProto,
    } as EnumValueDescriptorProto;
    message.name = object.name ?? "";
    message.number = object.number ?? 0;
    message.options =
      object.options !== undefined && object.options !== null
        ? EnumValueOptions.fromPartial(object.options)
        : undefined;
    return message;
  },
};

const baseServiceDescriptorProto: object = { name: "" };

export const ServiceDescriptorProto = {
  encode(
    message: ServiceDescriptorProto,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    for (const v of message.method) {
      MethodDescriptorProto.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.options !== undefined) {
      ServiceOptions.encode(message.options, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): ServiceDescriptorProto {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseServiceDescriptorProto } as ServiceDescriptorProto;
    message.method = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 2:
          message.method.push(
            MethodDescriptorProto.decode(reader, reader.uint32())
          );
          break;
        case 3:
          message.options = ServiceOptions.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ServiceDescriptorProto {
    const message = { ...baseServiceDescriptorProto } as ServiceDescriptorProto;
    message.name =
      object.name !== undefined && object.name !== null
        ? String(object.name)
        : "";
    message.method = (object.method ?? []).map((e: any) =>
      MethodDescriptorProto.fromJSON(e)
    );
    message.options =
      object.options !== undefined && object.options !== null
        ? ServiceOptions.fromJSON(object.options)
        : undefined;
    return message;
  },

  toJSON(message: ServiceDescriptorProto): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    if (message.method) {
      obj.method = message.method.map((e) =>
        e ? MethodDescriptorProto.toJSON(e) : undefined
      );
    } else {
      obj.method = [];
    }
    message.options !== undefined &&
      (obj.options = message.options
        ? ServiceOptions.toJSON(message.options)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<ServiceDescriptorProto>
  ): ServiceDescriptorProto {
    const message = { ...baseServiceDescriptorProto } as ServiceDescriptorProto;
    message.name = object.name ?? "";
    message.method = (object.method ?? []).map((e) =>
      MethodDescriptorProto.fromPartial(e)
    );
    message.options =
      object.options !== undefined && object.options !== null
        ? ServiceOptions.fromPartial(object.options)
        : undefined;
    return message;
  },
};

const baseMethodDescriptorProto: object = {
  name: "",
  inputType: "",
  outputType: "",
  clientStreaming: false,
  serverStreaming: false,
};

export const MethodDescriptorProto = {
  encode(
    message: MethodDescriptorProto,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.inputType !== "") {
      writer.uint32(18).string(message.inputType);
    }
    if (message.outputType !== "") {
      writer.uint32(26).string(message.outputType);
    }
    if (message.options !== undefined) {
      MethodOptions.encode(message.options, writer.uint32(34).fork()).ldelim();
    }
    if (message.clientStreaming === true) {
      writer.uint32(40).bool(message.clientStreaming);
    }
    if (message.serverStreaming === true) {
      writer.uint32(48).bool(message.serverStreaming);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MethodDescriptorProto {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMethodDescriptorProto } as MethodDescriptorProto;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 2:
          message.inputType = reader.string();
          break;
        case 3:
          message.outputType = reader.string();
          break;
        case 4:
          message.options = MethodOptions.decode(reader, reader.uint32());
          break;
        case 5:
          message.clientStreaming = reader.bool();
          break;
        case 6:
          message.serverStreaming = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MethodDescriptorProto {
    const message = { ...baseMethodDescriptorProto } as MethodDescriptorProto;
    message.name =
      object.name !== undefined && object.name !== null
        ? String(object.name)
        : "";
    message.inputType =
      object.inputType !== undefined && object.inputType !== null
        ? String(object.inputType)
        : "";
    message.outputType =
      object.outputType !== undefined && object.outputType !== null
        ? String(object.outputType)
        : "";
    message.options =
      object.options !== undefined && object.options !== null
        ? MethodOptions.fromJSON(object.options)
        : undefined;
    message.clientStreaming =
      object.clientStreaming !== undefined && object.clientStreaming !== null
        ? Boolean(object.clientStreaming)
        : false;
    message.serverStreaming =
      object.serverStreaming !== undefined && object.serverStreaming !== null
        ? Boolean(object.serverStreaming)
        : false;
    return message;
  },

  toJSON(message: MethodDescriptorProto): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    message.inputType !== undefined && (obj.inputType = message.inputType);
    message.outputType !== undefined && (obj.outputType = message.outputType);
    message.options !== undefined &&
      (obj.options = message.options
        ? MethodOptions.toJSON(message.options)
        : undefined);
    message.clientStreaming !== undefined &&
      (obj.clientStreaming = message.clientStreaming);
    message.serverStreaming !== undefined &&
      (obj.serverStreaming = message.serverStreaming);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MethodDescriptorProto>
  ): MethodDescriptorProto {
    const message = { ...baseMethodDescriptorProto } as MethodDescriptorProto;
    message.name = object.name ?? "";
    message.inputType = object.inputType ?? "";
    message.outputType = object.outputType ?? "";
    message.options =
      object.options !== undefined && object.options !== null
        ? MethodOptions.fromPartial(object.options)
        : undefined;
    message.clientStreaming = object.clientStreaming ?? false;
    message.serverStreaming = object.serverStreaming ?? false;
    return message;
  },
};

const baseFileOptions: object = {
  javaPackage: "",
  javaOuterClassname: "",
  javaMultipleFiles: false,
  javaGenerateEqualsAndHash: false,
  javaStringCheckUtf8: false,
  optimizeFor: 1,
  goPackage: "",
  ccGenericServices: false,
  javaGenericServices: false,
  pyGenericServices: false,
  deprecated: false,
  ccEnableArenas: false,
  objcClassPrefix: "",
  csharpNamespace: "",
  swiftPrefix: "",
  phpClassPrefix: "",
  phpNamespace: "",
  phpMetadataNamespace: "",
  rubyPackage: "",
};

export const FileOptions = {
  encode(
    message: FileOptions,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.javaPackage !== "") {
      writer.uint32(10).string(message.javaPackage);
    }
    if (message.javaOuterClassname !== "") {
      writer.uint32(66).string(message.javaOuterClassname);
    }
    if (message.javaMultipleFiles === true) {
      writer.uint32(80).bool(message.javaMultipleFiles);
    }
    if (message.javaGenerateEqualsAndHash === true) {
      writer.uint32(160).bool(message.javaGenerateEqualsAndHash);
    }
    if (message.javaStringCheckUtf8 === true) {
      writer.uint32(216).bool(message.javaStringCheckUtf8);
    }
    if (message.optimizeFor !== 1) {
      writer.uint32(72).int32(message.optimizeFor);
    }
    if (message.goPackage !== "") {
      writer.uint32(90).string(message.goPackage);
    }
    if (message.ccGenericServices === true) {
      writer.uint32(128).bool(message.ccGenericServices);
    }
    if (message.javaGenericServices === true) {
      writer.uint32(136).bool(message.javaGenericServices);
    }
    if (message.pyGenericServices === true) {
      writer.uint32(144).bool(message.pyGenericServices);
    }
    if (message.deprecated === true) {
      writer.uint32(184).bool(message.deprecated);
    }
    if (message.ccEnableArenas === true) {
      writer.uint32(248).bool(message.ccEnableArenas);
    }
    if (message.objcClassPrefix !== "") {
      writer.uint32(290).string(message.objcClassPrefix);
    }
    if (message.csharpNamespace !== "") {
      writer.uint32(298).string(message.csharpNamespace);
    }
    if (message.swiftPrefix !== "") {
      writer.uint32(314).string(message.swiftPrefix);
    }
    if (message.phpClassPrefix !== "") {
      writer.uint32(322).string(message.phpClassPrefix);
    }
    if (message.phpNamespace !== "") {
      writer.uint32(330).string(message.phpNamespace);
    }
    if (message.phpMetadataNamespace !== "") {
      writer.uint32(354).string(message.phpMetadataNamespace);
    }
    if (message.rubyPackage !== "") {
      writer.uint32(362).string(message.rubyPackage);
    }
    if (message.features !== undefined) {
      FeatureSet.encode(message.features, writer.uint32(402).fork()).ldelim();
    }
    for (const v of message.uninterpretedOption) {
      UninterpretedOption.encode(v!, writer.uint32(7994).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): FileOptions {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseFileOptions } as FileOptions;
    message.uninterpretedOption = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.javaPackage = reader.string();
          break;
        case 8:
          message.javaOuterClassname = reader.string();
          break;
        case 10:
          message.javaMultipleFiles = reader.bool();
          break;
        case 20:
          message.javaGenerateEqualsAndHash = reader.bool();
          break;
        case 27:
          message.javaStringCheckUtf8 = reader.bool();
          break;
        case 9:
          message.optimizeFor = reader.int32() as any;
          break;
        case 11:
          message.goPackage = reader.string();
          break;
        case 16:
          message.ccGenericServices = reader.bool();
          break;
        case 17:
          message.javaGenericServices = reader.bool();
          break;
        case 18:
          message.pyGenericServices = reader.bool();
          break;
        case 23:
          message.deprecated = reader.bool();
          break;
        case 31:
          message.ccEnableArenas = reader.bool();
          break;
        case 36:
          message.objcClassPrefix = reader.string();
          break;
        case 37:
          message.csharpNamespace = reader.string();
          break;
        case 39:
          message.swiftPrefix = reader.string();
          break;
        case 40:
          message.phpClassPrefix = reader.string();
          break;
        case 41:
          message.phpNamespace = reader.string();
          break;
        case 44:
          message.phpMetadataNamespace = reader.string();
          break;
        case 45:
          message.rubyPackage = reader.string();
          break;
        case 50:
          message.features = FeatureSet.decode(reader, reader.uint32());
          break;
        case 999:
          message.uninterpretedOption.push(
            UninterpretedOption.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): FileOptions {
    const message = { ...baseFileOptions } as FileOptions;
    message.javaPackage =
      object.javaPackage !== undefined && object.javaPackage !== null
        ? String(object.javaPackage)
        : "";
    message.javaOuterClassname =
      object.javaOuterClassname !== undefined &&
      object.javaOuterClassname !== null
        ? String(object.javaOuterClassname)
        : "";
    message.javaMultipleFiles =
      object.javaMultipleFiles !== undefined &&
      object.javaMultipleFiles !== null
        ? Boolean(object.javaMultipleFiles)
        : false;
    message.javaGenerateEqualsAndHash =
      object.javaGenerateEqualsAndHash !== undefined &&
      object.javaGenerateEqualsAndHash !== null
        ? Boolean(object.javaGenerateEqualsAndHash)
        : false;
    message.javaStringCheckUtf8 =
      object.javaStringCheckUtf8 !== undefined &&
      object.javaStringCheckUtf8 !== null
        ? Boolean(object.javaStringCheckUtf8)
        : false;
    message.optimizeFor =
      object.optimizeFor !== undefined && object.optimizeFor !== null
        ? fileOptions_OptimizeModeFromJSON(object.optimizeFor)
        : 1;
    message.goPackage =
      object.goPackage !== undefined && object.goPackage !== null
        ? String(object.goPackage)
        : "";
    message.ccGenericServices =
      object.ccGenericServices !== undefined &&
      object.ccGenericServices !== null
        ? Boolean(object.ccGenericServices)
        : false;
    message.javaGenericServices =
      object.javaGenericServices !== undefined &&
      object.javaGenericServices !== null
        ? Boolean(object.javaGenericServices)
        : false;
    message.pyGenericServices =
      object.pyGenericServices !== undefined &&
      object.pyGenericServices !== null
        ? Boolean(object.pyGenericServices)
        : false;
    message.deprecated =
      object.deprecated !== undefined && object.deprecated !== null
        ? Boolean(object.deprecated)
        : false;
    message.ccEnableArenas =
      object.ccEnableArenas !== undefined && object.ccEnableArenas !== null
        ? Boolean(object.ccEnableArenas)
        : false;
    message.objcClassPrefix =
      object.objcClassPrefix !== undefined && object.objcClassPrefix !== null
        ? String(object.objcClassPrefix)
        : "";
    message.csharpNamespace =
      object.csharpNamespace !== undefined && object.csharpNamespace !== null
        ? String(object.csharpNamespace)
        : "";
    message.swiftPrefix =
      object.swiftPrefix !== undefined && object.swiftPrefix !== null
        ? String(object.swiftPrefix)
        : "";
    message.phpClassPrefix =
      object.phpClassPrefix !== undefined && object.phpClassPrefix !== null
        ? String(object.phpClassPrefix)
        : "";
    message.phpNamespace =
      object.phpNamespace !== undefined && object.phpNamespace !== null
        ? String(object.phpNamespace)
        : "";
    message.phpMetadataNamespace =
      object.phpMetadataNamespace !== undefined &&
      object.phpMetadataNamespace !== null
        ? String(object.phpMetadataNamespace)
        : "";
    message.rubyPackage =
      object.rubyPackage !== undefined && object.rubyPackage !== null
        ? String(object.rubyPackage)
        : "";
    message.features =
      object.features !== undefined && object.features !== null
        ? FeatureSet.fromJSON(object.features)
        : undefined;
    message.uninterpretedOption = (object.uninterpretedOption ?? []).map(
      (e: any) => UninterpretedOption.fromJSON(e)
    );
    return message;
  },

  toJSON(message: FileOptions): unknown {
    const obj: any = {};
    message.javaPackage !== undefined &&
      (obj.javaPackage = message.javaPackage);
    message.javaOuterClassname !== undefined &&
      (obj.javaOuterClassname = message.javaOuterClassname);
    message.javaMultipleFiles !== undefined &&
      (obj.javaMultipleFiles = message.javaMultipleFiles);
    message.javaGenerateEqualsAndHash !== undefined &&
      (obj.javaGenerateEqualsAndHash = message.javaGenerateEqualsAndHash);
    message.javaStringCheckUtf8 !== undefined &&
      (obj.javaStringCheckUtf8 = message.javaStringCheckUtf8);
    message.optimizeFor !== undefined &&
      (obj.optimizeFor = fileOptions_OptimizeModeToJSON(message.optimizeFor));
    message.goPackage !== undefined && (obj.goPackage = message.goPackage);
    message.ccGenericServices !== undefined &&
      (obj.ccGenericServices = message.ccGenericServices);
    message.javaGenericServices !== undefined &&
      (obj.javaGenericServices = message.javaGenericServices);
    message.pyGenericServices !== undefined &&
      (obj.pyGenericServices = message.pyGenericServices);
    message.deprecated !== undefined && (obj.deprecated = message.deprecated);
    message.ccEnableArenas !== undefined &&
      (obj.ccEnableArenas = message.ccEnableArenas);
    message.objcClassPrefix !== undefined &&
      (obj.objcClassPrefix = message.objcClassPrefix);
    message.csharpNamespace !== undefined &&
      (obj.csharpNamespace = message.csharpNamespace);
    message.swiftPrefix !== undefined &&
      (obj.swiftPrefix = message.swiftPrefix);
    message.phpClassPrefix !== undefined &&
      (obj.phpClassPrefix = message.phpClassPrefix);
    message.phpNamespace !== undefined &&
      (obj.phpNamespace = message.phpNamespace);
    message.phpMetadataNamespace !== undefined &&
      (obj.phpMetadataNamespace = message.phpMetadataNamespace);
    message.rubyPackage !== undefined &&
      (obj.rubyPackage = message.rubyPackage);
    message.features !== undefined &&
      (obj.features = message.features
        ? FeatureSet.toJSON(message.features)
        : undefined);
    if (message.uninterpretedOption) {
      obj.uninterpretedOption = message.uninterpretedOption.map((e) =>
        e ? UninterpretedOption.toJSON(e) : undefined
      );
    } else {
      obj.uninterpretedOption = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<FileOptions>): FileOptions {
    const message = { ...baseFileOptions } as FileOptions;
    message.javaPackage = object.javaPackage ?? "";
    message.javaOuterClassname = object.javaOuterClassname ?? "";
    message.javaMultipleFiles = object.javaMultipleFiles ?? false;
    message.javaGenerateEqualsAndHash =
      object.javaGenerateEqualsAndHash ?? false;
    message.javaStringCheckUtf8 = object.javaStringCheckUtf8 ?? false;
    message.optimizeFor = object.optimizeFor ?? 1;
    message.goPackage = object.goPackage ?? "";
    message.ccGenericServices = object.ccGenericServices ?? false;
    message.javaGenericServices = object.javaGenericServices ?? false;
    message.pyGenericServices = object.pyGenericServices ?? false;
    message.deprecated = object.deprecated ?? false;
    message.ccEnableArenas = object.ccEnableArenas ?? false;
    message.objcClassPrefix = object.objcClassPrefix ?? "";
    message.csharpNamespace = object.csharpNamespace ?? "";
    message.swiftPrefix = object.swiftPrefix ?? "";
    message.phpClassPrefix = object.phpClassPrefix ?? "";
    message.phpNamespace = object.phpNamespace ?? "";
    message.phpMetadataNamespace = object.phpMetadataNamespace ?? "";
    message.rubyPackage = object.rubyPackage ?? "";
    message.features =
      object.features !== undefined && object.features !== null
        ? FeatureSet.fromPartial(object.features)
        : undefined;
    message.uninterpretedOption = (object.uninterpretedOption ?? []).map((e) =>
      UninterpretedOption.fromPartial(e)
    );
    return message;
  },
};

const baseMessageOptions: object = {
  messageSetWireFormat: false,
  noStandardDescriptorAccessor: false,
  deprecated: false,
  mapEntry: false,
  deprecatedLegacyJsonFieldConflicts: false,
};

export const MessageOptions = {
  encode(
    message: MessageOptions,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.messageSetWireFormat === true) {
      writer.uint32(8).bool(message.messageSetWireFormat);
    }
    if (message.noStandardDescriptorAccessor === true) {
      writer.uint32(16).bool(message.noStandardDescriptorAccessor);
    }
    if (message.deprecated === true) {
      writer.uint32(24).bool(message.deprecated);
    }
    if (message.mapEntry === true) {
      writer.uint32(56).bool(message.mapEntry);
    }
    if (message.deprecatedLegacyJsonFieldConflicts === true) {
      writer.uint32(88).bool(message.deprecatedLegacyJsonFieldConflicts);
    }
    if (message.features !== undefined) {
      FeatureSet.encode(message.features, writer.uint32(98).fork()).ldelim();
    }
    for (const v of message.uninterpretedOption) {
      UninterpretedOption.encode(v!, writer.uint32(7994).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MessageOptions {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMessageOptions } as MessageOptions;
    message.uninterpretedOption = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.messageSetWireFormat = reader.bool();
          break;
        case 2:
          message.noStandardDescriptorAccessor = reader.bool();
          break;
        case 3:
          message.deprecated = reader.bool();
          break;
        case 7:
          message.mapEntry = reader.bool();
          break;
        case 11:
          message.deprecatedLegacyJsonFieldConflicts = reader.bool();
          break;
        case 12:
          message.features = FeatureSet.decode(reader, reader.uint32());
          break;
        case 999:
          message.uninterpretedOption.push(
            UninterpretedOption.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MessageOptions {
    const message = { ...baseMessageOptions } as MessageOptions;
    message.messageSetWireFormat =
      object.messageSetWireFormat !== undefined &&
      object.messageSetWireFormat !== null
        ? Boolean(object.messageSetWireFormat)
        : false;
    message.noStandardDescriptorAccessor =
      object.noStandardDescriptorAccessor !== undefined &&
      object.noStandardDescriptorAccessor !== null
        ? Boolean(object.noStandardDescriptorAccessor)
        : false;
    message.deprecated =
      object.deprecated !== undefined && object.deprecated !== null
        ? Boolean(object.deprecated)
        : false;
    message.mapEntry =
      object.mapEntry !== undefined && object.mapEntry !== null
        ? Boolean(object.mapEntry)
        : false;
    message.deprecatedLegacyJsonFieldConflicts =
      object.deprecatedLegacyJsonFieldConflicts !== undefined &&
      object.deprecatedLegacyJsonFieldConflicts !== null
        ? Boolean(object.deprecatedLegacyJsonFieldConflicts)
        : false;
    message.features =
      object.features !== undefined && object.features !== null
        ? FeatureSet.fromJSON(object.features)
        : undefined;
    message.uninterpretedOption = (object.uninterpretedOption ?? []).map(
      (e: any) => UninterpretedOption.fromJSON(e)
    );
    return message;
  },

  toJSON(message: MessageOptions): unknown {
    const obj: any = {};
    message.messageSetWireFormat !== undefined &&
      (obj.messageSetWireFormat = message.messageSetWireFormat);
    message.noStandardDescriptorAccessor !== undefined &&
      (obj.noStandardDescriptorAccessor = message.noStandardDescriptorAccessor);
    message.deprecated !== undefined && (obj.deprecated = message.deprecated);
    message.mapEntry !== undefined && (obj.mapEntry = message.mapEntry);
    message.deprecatedLegacyJsonFieldConflicts !== undefined &&
      (obj.deprecatedLegacyJsonFieldConflicts =
        message.deprecatedLegacyJsonFieldConflicts);
    message.features !== undefined &&
      (obj.features = message.features
        ? FeatureSet.toJSON(message.features)
        : undefined);
    if (message.uninterpretedOption) {
      obj.uninterpretedOption = message.uninterpretedOption.map((e) =>
        e ? UninterpretedOption.toJSON(e) : undefined
      );
    } else {
      obj.uninterpretedOption = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<MessageOptions>): MessageOptions {
    const message = { ...baseMessageOptions } as MessageOptions;
    message.messageSetWireFormat = object.messageSetWireFormat ?? false;
    message.noStandardDescriptorAccessor =
      object.noStandardDescriptorAccessor ?? false;
    message.deprecated = object.deprecated ?? false;
    message.mapEntry = object.mapEntry ?? false;
    message.deprecatedLegacyJsonFieldConflicts =
      object.deprecatedLegacyJsonFieldConflicts ?? false;
    message.features =
      object.features !== undefined && object.features !== null
        ? FeatureSet.fromPartial(object.features)
        : undefined;
    message.uninterpretedOption = (object.uninterpretedOption ?? []).map((e) =>
      UninterpretedOption.fromPartial(e)
    );
    return message;
  },
};

const baseFieldOptions: object = {
  ctype: 0,
  packed: false,
  jstype: 0,
  lazy: false,
  unverifiedLazy: false,
  deprecated: false,
  weak: false,
  debugRedact: false,
  retention: 0,
  targets: 0,
};

export const FieldOptions = {
  encode(
    message: FieldOptions,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.ctype !== 0) {
      writer.uint32(8).int32(message.ctype);
    }
    if (message.packed === true) {
      writer.uint32(16).bool(message.packed);
    }
    if (message.jstype !== 0) {
      writer.uint32(48).int32(message.jstype);
    }
    if (message.lazy === true) {
      writer.uint32(40).bool(message.lazy);
    }
    if (message.unverifiedLazy === true) {
      writer.uint32(120).bool(message.unverifiedLazy);
    }
    if (message.deprecated === true) {
      writer.uint32(24).bool(message.deprecated);
    }
    if (message.weak === true) {
      writer.uint32(80).bool(message.weak);
    }
    if (message.debugRedact === true) {
      writer.uint32(128).bool(message.debugRedact);
    }
    if (message.retention !== 0) {
      writer.uint32(136).int32(message.retention);
    }
    writer.uint32(154).fork();
    for (const v of message.targets) {
      writer.int32(v);
    }
    writer.ldelim();
    for (const v of message.editionDefaults) {
      FieldOptions_EditionDefault.encode(
        v!,
        writer.uint32(162).fork()
      ).ldelim();
    }
    if (message.features !== undefined) {
      FeatureSet.encode(message.features, writer.uint32(170).fork()).ldelim();
    }
    if (message.featureSupport !== undefined) {
      FieldOptions_FeatureSupport.encode(
        message.featureSupport,
        writer.uint32(178).fork()
      ).ldelim();
    }
    for (const v of message.uninterpretedOption) {
      UninterpretedOption.encode(v!, writer.uint32(7994).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): FieldOptions {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseFieldOptions } as FieldOptions;
    message.targets = [];
    message.editionDefaults = [];
    message.uninterpretedOption = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.ctype = reader.int32() as any;
          break;
        case 2:
          message.packed = reader.bool();
          break;
        case 6:
          message.jstype = reader.int32() as any;
          break;
        case 5:
          message.lazy = reader.bool();
          break;
        case 15:
          message.unverifiedLazy = reader.bool();
          break;
        case 3:
          message.deprecated = reader.bool();
          break;
        case 10:
          message.weak = reader.bool();
          break;
        case 16:
          message.debugRedact = reader.bool();
          break;
        case 17:
          message.retention = reader.int32() as any;
          break;
        case 19:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.targets.push(reader.int32() as any);
            }
          } else {
            message.targets.push(reader.int32() as any);
          }
          break;
        case 20:
          message.editionDefaults.push(
            FieldOptions_EditionDefault.decode(reader, reader.uint32())
          );
          break;
        case 21:
          message.features = FeatureSet.decode(reader, reader.uint32());
          break;
        case 22:
          message.featureSupport = FieldOptions_FeatureSupport.decode(
            reader,
            reader.uint32()
          );
          break;
        case 999:
          message.uninterpretedOption.push(
            UninterpretedOption.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): FieldOptions {
    const message = { ...baseFieldOptions } as FieldOptions;
    message.ctype =
      object.ctype !== undefined && object.ctype !== null
        ? fieldOptions_CTypeFromJSON(object.ctype)
        : 0;
    message.packed =
      object.packed !== undefined && object.packed !== null
        ? Boolean(object.packed)
        : false;
    message.jstype =
      object.jstype !== undefined && object.jstype !== null
        ? fieldOptions_JSTypeFromJSON(object.jstype)
        : 0;
    message.lazy =
      object.lazy !== undefined && object.lazy !== null
        ? Boolean(object.lazy)
        : false;
    message.unverifiedLazy =
      object.unverifiedLazy !== undefined && object.unverifiedLazy !== null
        ? Boolean(object.unverifiedLazy)
        : false;
    message.deprecated =
      object.deprecated !== undefined && object.deprecated !== null
        ? Boolean(object.deprecated)
        : false;
    message.weak =
      object.weak !== undefined && object.weak !== null
        ? Boolean(object.weak)
        : false;
    message.debugRedact =
      object.debugRedact !== undefined && object.debugRedact !== null
        ? Boolean(object.debugRedact)
        : false;
    message.retention =
      object.retention !== undefined && object.retention !== null
        ? fieldOptions_OptionRetentionFromJSON(object.retention)
        : 0;
    message.targets = (object.targets ?? []).map((e: any) =>
      fieldOptions_OptionTargetTypeFromJSON(e)
    );
    message.editionDefaults = (object.editionDefaults ?? []).map((e: any) =>
      FieldOptions_EditionDefault.fromJSON(e)
    );
    message.features =
      object.features !== undefined && object.features !== null
        ? FeatureSet.fromJSON(object.features)
        : undefined;
    message.featureSupport =
      object.featureSupport !== undefined && object.featureSupport !== null
        ? FieldOptions_FeatureSupport.fromJSON(object.featureSupport)
        : undefined;
    message.uninterpretedOption = (object.uninterpretedOption ?? []).map(
      (e: any) => UninterpretedOption.fromJSON(e)
    );
    return message;
  },

  toJSON(message: FieldOptions): unknown {
    const obj: any = {};
    message.ctype !== undefined &&
      (obj.ctype = fieldOptions_CTypeToJSON(message.ctype));
    message.packed !== undefined && (obj.packed = message.packed);
    message.jstype !== undefined &&
      (obj.jstype = fieldOptions_JSTypeToJSON(message.jstype));
    message.lazy !== undefined && (obj.lazy = message.lazy);
    message.unverifiedLazy !== undefined &&
      (obj.unverifiedLazy = message.unverifiedLazy);
    message.deprecated !== undefined && (obj.deprecated = message.deprecated);
    message.weak !== undefined && (obj.weak = message.weak);
    message.debugRedact !== undefined &&
      (obj.debugRedact = message.debugRedact);
    message.retention !== undefined &&
      (obj.retention = fieldOptions_OptionRetentionToJSON(message.retention));
    if (message.targets) {
      obj.targets = message.targets.map((e) =>
        fieldOptions_OptionTargetTypeToJSON(e)
      );
    } else {
      obj.targets = [];
    }
    if (message.editionDefaults) {
      obj.editionDefaults = message.editionDefaults.map((e) =>
        e ? FieldOptions_EditionDefault.toJSON(e) : undefined
      );
    } else {
      obj.editionDefaults = [];
    }
    message.features !== undefined &&
      (obj.features = message.features
        ? FeatureSet.toJSON(message.features)
        : undefined);
    message.featureSupport !== undefined &&
      (obj.featureSupport = message.featureSupport
        ? FieldOptions_FeatureSupport.toJSON(message.featureSupport)
        : undefined);
    if (message.uninterpretedOption) {
      obj.uninterpretedOption = message.uninterpretedOption.map((e) =>
        e ? UninterpretedOption.toJSON(e) : undefined
      );
    } else {
      obj.uninterpretedOption = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<FieldOptions>): FieldOptions {
    const message = { ...baseFieldOptions } as FieldOptions;
    message.ctype = object.ctype ?? 0;
    message.packed = object.packed ?? false;
    message.jstype = object.jstype ?? 0;
    message.lazy = object.lazy ?? false;
    message.unverifiedLazy = object.unverifiedLazy ?? false;
    message.deprecated = object.deprecated ?? false;
    message.weak = object.weak ?? false;
    message.debugRedact = object.debugRedact ?? false;
    message.retention = object.retention ?? 0;
    message.targets = (object.targets ?? []).map((e) => e);
    message.editionDefaults = (object.editionDefaults ?? []).map((e) =>
      FieldOptions_EditionDefault.fromPartial(e)
    );
    message.features =
      object.features !== undefined && object.features !== null
        ? FeatureSet.fromPartial(object.features)
        : undefined;
    message.featureSupport =
      object.featureSupport !== undefined && object.featureSupport !== null
        ? FieldOptions_FeatureSupport.fromPartial(object.featureSupport)
        : undefined;
    message.uninterpretedOption = (object.uninterpretedOption ?? []).map((e) =>
      UninterpretedOption.fromPartial(e)
    );
    return message;
  },
};

const baseFieldOptions_EditionDefault: object = { edition: 0, value: "" };

export const FieldOptions_EditionDefault = {
  encode(
    message: FieldOptions_EditionDefault,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.edition !== 0) {
      writer.uint32(24).int32(message.edition);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): FieldOptions_EditionDefault {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseFieldOptions_EditionDefault,
    } as FieldOptions_EditionDefault;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 3:
          message.edition = reader.int32() as any;
          break;
        case 2:
          message.value = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): FieldOptions_EditionDefault {
    const message = {
      ...baseFieldOptions_EditionDefault,
    } as FieldOptions_EditionDefault;
    message.edition =
      object.edition !== undefined && object.edition !== null
        ? editionFromJSON(object.edition)
        : 0;
    message.value =
      object.value !== undefined && object.value !== null
        ? String(object.value)
        : "";
    return message;
  },

  toJSON(message: FieldOptions_EditionDefault): unknown {
    const obj: any = {};
    message.edition !== undefined &&
      (obj.edition = editionToJSON(message.edition));
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  fromPartial(
    object: DeepPartial<FieldOptions_EditionDefault>
  ): FieldOptions_EditionDefault {
    const message = {
      ...baseFieldOptions_EditionDefault,
    } as FieldOptions_EditionDefault;
    message.edition = object.edition ?? 0;
    message.value = object.value ?? "";
    return message;
  },
};

const baseFieldOptions_FeatureSupport: object = {
  editionIntroduced: 0,
  editionDeprecated: 0,
  deprecationWarning: "",
  editionRemoved: 0,
};

export const FieldOptions_FeatureSupport = {
  encode(
    message: FieldOptions_FeatureSupport,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.editionIntroduced !== 0) {
      writer.uint32(8).int32(message.editionIntroduced);
    }
    if (message.editionDeprecated !== 0) {
      writer.uint32(16).int32(message.editionDeprecated);
    }
    if (message.deprecationWarning !== "") {
      writer.uint32(26).string(message.deprecationWarning);
    }
    if (message.editionRemoved !== 0) {
      writer.uint32(32).int32(message.editionRemoved);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): FieldOptions_FeatureSupport {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseFieldOptions_FeatureSupport,
    } as FieldOptions_FeatureSupport;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.editionIntroduced = reader.int32() as any;
          break;
        case 2:
          message.editionDeprecated = reader.int32() as any;
          break;
        case 3:
          message.deprecationWarning = reader.string();
          break;
        case 4:
          message.editionRemoved = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): FieldOptions_FeatureSupport {
    const message = {
      ...baseFieldOptions_FeatureSupport,
    } as FieldOptions_FeatureSupport;
    message.editionIntroduced =
      object.editionIntroduced !== undefined &&
      object.editionIntroduced !== null
        ? editionFromJSON(object.editionIntroduced)
        : 0;
    message.editionDeprecated =
      object.editionDeprecated !== undefined &&
      object.editionDeprecated !== null
        ? editionFromJSON(object.editionDeprecated)
        : 0;
    message.deprecationWarning =
      object.deprecationWarning !== undefined &&
      object.deprecationWarning !== null
        ? String(object.deprecationWarning)
        : "";
    message.editionRemoved =
      object.editionRemoved !== undefined && object.editionRemoved !== null
        ? editionFromJSON(object.editionRemoved)
        : 0;
    return message;
  },

  toJSON(message: FieldOptions_FeatureSupport): unknown {
    const obj: any = {};
    message.editionIntroduced !== undefined &&
      (obj.editionIntroduced = editionToJSON(message.editionIntroduced));
    message.editionDeprecated !== undefined &&
      (obj.editionDeprecated = editionToJSON(message.editionDeprecated));
    message.deprecationWarning !== undefined &&
      (obj.deprecationWarning = message.deprecationWarning);
    message.editionRemoved !== undefined &&
      (obj.editionRemoved = editionToJSON(message.editionRemoved));
    return obj;
  },

  fromPartial(
    object: DeepPartial<FieldOptions_FeatureSupport>
  ): FieldOptions_FeatureSupport {
    const message = {
      ...baseFieldOptions_FeatureSupport,
    } as FieldOptions_FeatureSupport;
    message.editionIntroduced = object.editionIntroduced ?? 0;
    message.editionDeprecated = object.editionDeprecated ?? 0;
    message.deprecationWarning = object.deprecationWarning ?? "";
    message.editionRemoved = object.editionRemoved ?? 0;
    return message;
  },
};

const baseOneofOptions: object = {};

export const OneofOptions = {
  encode(
    message: OneofOptions,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.features !== undefined) {
      FeatureSet.encode(message.features, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.uninterpretedOption) {
      UninterpretedOption.encode(v!, writer.uint32(7994).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): OneofOptions {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseOneofOptions } as OneofOptions;
    message.uninterpretedOption = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.features = FeatureSet.decode(reader, reader.uint32());
          break;
        case 999:
          message.uninterpretedOption.push(
            UninterpretedOption.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): OneofOptions {
    const message = { ...baseOneofOptions } as OneofOptions;
    message.features =
      object.features !== undefined && object.features !== null
        ? FeatureSet.fromJSON(object.features)
        : undefined;
    message.uninterpretedOption = (object.uninterpretedOption ?? []).map(
      (e: any) => UninterpretedOption.fromJSON(e)
    );
    return message;
  },

  toJSON(message: OneofOptions): unknown {
    const obj: any = {};
    message.features !== undefined &&
      (obj.features = message.features
        ? FeatureSet.toJSON(message.features)
        : undefined);
    if (message.uninterpretedOption) {
      obj.uninterpretedOption = message.uninterpretedOption.map((e) =>
        e ? UninterpretedOption.toJSON(e) : undefined
      );
    } else {
      obj.uninterpretedOption = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<OneofOptions>): OneofOptions {
    const message = { ...baseOneofOptions } as OneofOptions;
    message.features =
      object.features !== undefined && object.features !== null
        ? FeatureSet.fromPartial(object.features)
        : undefined;
    message.uninterpretedOption = (object.uninterpretedOption ?? []).map((e) =>
      UninterpretedOption.fromPartial(e)
    );
    return message;
  },
};

const baseEnumOptions: object = {
  allowAlias: false,
  deprecated: false,
  deprecatedLegacyJsonFieldConflicts: false,
};

export const EnumOptions = {
  encode(
    message: EnumOptions,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.allowAlias === true) {
      writer.uint32(16).bool(message.allowAlias);
    }
    if (message.deprecated === true) {
      writer.uint32(24).bool(message.deprecated);
    }
    if (message.deprecatedLegacyJsonFieldConflicts === true) {
      writer.uint32(48).bool(message.deprecatedLegacyJsonFieldConflicts);
    }
    if (message.features !== undefined) {
      FeatureSet.encode(message.features, writer.uint32(58).fork()).ldelim();
    }
    for (const v of message.uninterpretedOption) {
      UninterpretedOption.encode(v!, writer.uint32(7994).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EnumOptions {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseEnumOptions } as EnumOptions;
    message.uninterpretedOption = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 2:
          message.allowAlias = reader.bool();
          break;
        case 3:
          message.deprecated = reader.bool();
          break;
        case 6:
          message.deprecatedLegacyJsonFieldConflicts = reader.bool();
          break;
        case 7:
          message.features = FeatureSet.decode(reader, reader.uint32());
          break;
        case 999:
          message.uninterpretedOption.push(
            UninterpretedOption.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): EnumOptions {
    const message = { ...baseEnumOptions } as EnumOptions;
    message.allowAlias =
      object.allowAlias !== undefined && object.allowAlias !== null
        ? Boolean(object.allowAlias)
        : false;
    message.deprecated =
      object.deprecated !== undefined && object.deprecated !== null
        ? Boolean(object.deprecated)
        : false;
    message.deprecatedLegacyJsonFieldConflicts =
      object.deprecatedLegacyJsonFieldConflicts !== undefined &&
      object.deprecatedLegacyJsonFieldConflicts !== null
        ? Boolean(object.deprecatedLegacyJsonFieldConflicts)
        : false;
    message.features =
      object.features !== undefined && object.features !== null
        ? FeatureSet.fromJSON(object.features)
        : undefined;
    message.uninterpretedOption = (object.uninterpretedOption ?? []).map(
      (e: any) => UninterpretedOption.fromJSON(e)
    );
    return message;
  },

  toJSON(message: EnumOptions): unknown {
    const obj: any = {};
    message.allowAlias !== undefined && (obj.allowAlias = message.allowAlias);
    message.deprecated !== undefined && (obj.deprecated = message.deprecated);
    message.deprecatedLegacyJsonFieldConflicts !== undefined &&
      (obj.deprecatedLegacyJsonFieldConflicts =
        message.deprecatedLegacyJsonFieldConflicts);
    message.features !== undefined &&
      (obj.features = message.features
        ? FeatureSet.toJSON(message.features)
        : undefined);
    if (message.uninterpretedOption) {
      obj.uninterpretedOption = message.uninterpretedOption.map((e) =>
        e ? UninterpretedOption.toJSON(e) : undefined
      );
    } else {
      obj.uninterpretedOption = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<EnumOptions>): EnumOptions {
    const message = { ...baseEnumOptions } as EnumOptions;
    message.allowAlias = object.allowAlias ?? false;
    message.deprecated = object.deprecated ?? false;
    message.deprecatedLegacyJsonFieldConflicts =
      object.deprecatedLegacyJsonFieldConflicts ?? false;
    message.features =
      object.features !== undefined && object.features !== null
        ? FeatureSet.fromPartial(object.features)
        : undefined;
    message.uninterpretedOption = (object.uninterpretedOption ?? []).map((e) =>
      UninterpretedOption.fromPartial(e)
    );
    return message;
  },
};

const baseEnumValueOptions: object = { deprecated: false, debugRedact: false };

export const EnumValueOptions = {
  encode(
    message: EnumValueOptions,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.deprecated === true) {
      writer.uint32(8).bool(message.deprecated);
    }
    if (message.features !== undefined) {
      FeatureSet.encode(message.features, writer.uint32(18).fork()).ldelim();
    }
    if (message.debugRedact === true) {
      writer.uint32(24).bool(message.debugRedact);
    }
    if (message.featureSupport !== undefined) {
      FieldOptions_FeatureSupport.encode(
        message.featureSupport,
        writer.uint32(34).fork()
      ).ldelim();
    }
    for (const v of message.uninterpretedOption) {
      UninterpretedOption.encode(v!, writer.uint32(7994).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EnumValueOptions {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseEnumValueOptions } as EnumValueOptions;
    message.uninterpretedOption = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.deprecated = reader.bool();
          break;
        case 2:
          message.features = FeatureSet.decode(reader, reader.uint32());
          break;
        case 3:
          message.debugRedact = reader.bool();
          break;
        case 4:
          message.featureSupport = FieldOptions_FeatureSupport.decode(
            reader,
            reader.uint32()
          );
          break;
        case 999:
          message.uninterpretedOption.push(
            UninterpretedOption.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): EnumValueOptions {
    const message = { ...baseEnumValueOptions } as EnumValueOptions;
    message.deprecated =
      object.deprecated !== undefined && object.deprecated !== null
        ? Boolean(object.deprecated)
        : false;
    message.features =
      object.features !== undefined && object.features !== null
        ? FeatureSet.fromJSON(object.features)
        : undefined;
    message.debugRedact =
      object.debugRedact !== undefined && object.debugRedact !== null
        ? Boolean(object.debugRedact)
        : false;
    message.featureSupport =
      object.featureSupport !== undefined && object.featureSupport !== null
        ? FieldOptions_FeatureSupport.fromJSON(object.featureSupport)
        : undefined;
    message.uninterpretedOption = (object.uninterpretedOption ?? []).map(
      (e: any) => UninterpretedOption.fromJSON(e)
    );
    return message;
  },

  toJSON(message: EnumValueOptions): unknown {
    const obj: any = {};
    message.deprecated !== undefined && (obj.deprecated = message.deprecated);
    message.features !== undefined &&
      (obj.features = message.features
        ? FeatureSet.toJSON(message.features)
        : undefined);
    message.debugRedact !== undefined &&
      (obj.debugRedact = message.debugRedact);
    message.featureSupport !== undefined &&
      (obj.featureSupport = message.featureSupport
        ? FieldOptions_FeatureSupport.toJSON(message.featureSupport)
        : undefined);
    if (message.uninterpretedOption) {
      obj.uninterpretedOption = message.uninterpretedOption.map((e) =>
        e ? UninterpretedOption.toJSON(e) : undefined
      );
    } else {
      obj.uninterpretedOption = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<EnumValueOptions>): EnumValueOptions {
    const message = { ...baseEnumValueOptions } as EnumValueOptions;
    message.deprecated = object.deprecated ?? false;
    message.features =
      object.features !== undefined && object.features !== null
        ? FeatureSet.fromPartial(object.features)
        : undefined;
    message.debugRedact = object.debugRedact ?? false;
    message.featureSupport =
      object.featureSupport !== undefined && object.featureSupport !== null
        ? FieldOptions_FeatureSupport.fromPartial(object.featureSupport)
        : undefined;
    message.uninterpretedOption = (object.uninterpretedOption ?? []).map((e) =>
      UninterpretedOption.fromPartial(e)
    );
    return message;
  },
};

const baseServiceOptions: object = { deprecated: false };

export const ServiceOptions = {
  encode(
    message: ServiceOptions,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.features !== undefined) {
      FeatureSet.encode(message.features, writer.uint32(274).fork()).ldelim();
    }
    if (message.deprecated === true) {
      writer.uint32(264).bool(message.deprecated);
    }
    for (const v of message.uninterpretedOption) {
      UninterpretedOption.encode(v!, writer.uint32(7994).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ServiceOptions {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseServiceOptions } as ServiceOptions;
    message.uninterpretedOption = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 34:
          message.features = FeatureSet.decode(reader, reader.uint32());
          break;
        case 33:
          message.deprecated = reader.bool();
          break;
        case 999:
          message.uninterpretedOption.push(
            UninterpretedOption.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ServiceOptions {
    const message = { ...baseServiceOptions } as ServiceOptions;
    message.features =
      object.features !== undefined && object.features !== null
        ? FeatureSet.fromJSON(object.features)
        : undefined;
    message.deprecated =
      object.deprecated !== undefined && object.deprecated !== null
        ? Boolean(object.deprecated)
        : false;
    message.uninterpretedOption = (object.uninterpretedOption ?? []).map(
      (e: any) => UninterpretedOption.fromJSON(e)
    );
    return message;
  },

  toJSON(message: ServiceOptions): unknown {
    const obj: any = {};
    message.features !== undefined &&
      (obj.features = message.features
        ? FeatureSet.toJSON(message.features)
        : undefined);
    message.deprecated !== undefined && (obj.deprecated = message.deprecated);
    if (message.uninterpretedOption) {
      obj.uninterpretedOption = message.uninterpretedOption.map((e) =>
        e ? UninterpretedOption.toJSON(e) : undefined
      );
    } else {
      obj.uninterpretedOption = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<ServiceOptions>): ServiceOptions {
    const message = { ...baseServiceOptions } as ServiceOptions;
    message.features =
      object.features !== undefined && object.features !== null
        ? FeatureSet.fromPartial(object.features)
        : undefined;
    message.deprecated = object.deprecated ?? false;
    message.uninterpretedOption = (object.uninterpretedOption ?? []).map((e) =>
      UninterpretedOption.fromPartial(e)
    );
    return message;
  },
};

const baseMethodOptions: object = { deprecated: false, idempotencyLevel: 0 };

export const MethodOptions = {
  encode(
    message: MethodOptions,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.deprecated === true) {
      writer.uint32(264).bool(message.deprecated);
    }
    if (message.idempotencyLevel !== 0) {
      writer.uint32(272).int32(message.idempotencyLevel);
    }
    if (message.features !== undefined) {
      FeatureSet.encode(message.features, writer.uint32(282).fork()).ldelim();
    }
    for (const v of message.uninterpretedOption) {
      UninterpretedOption.encode(v!, writer.uint32(7994).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MethodOptions {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMethodOptions } as MethodOptions;
    message.uninterpretedOption = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 33:
          message.deprecated = reader.bool();
          break;
        case 34:
          message.idempotencyLevel = reader.int32() as any;
          break;
        case 35:
          message.features = FeatureSet.decode(reader, reader.uint32());
          break;
        case 999:
          message.uninterpretedOption.push(
            UninterpretedOption.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MethodOptions {
    const message = { ...baseMethodOptions } as MethodOptions;
    message.deprecated =
      object.deprecated !== undefined && object.deprecated !== null
        ? Boolean(object.deprecated)
        : false;
    message.idempotencyLevel =
      object.idempotencyLevel !== undefined && object.idempotencyLevel !== null
        ? methodOptions_IdempotencyLevelFromJSON(object.idempotencyLevel)
        : 0;
    message.features =
      object.features !== undefined && object.features !== null
        ? FeatureSet.fromJSON(object.features)
        : undefined;
    message.uninterpretedOption = (object.uninterpretedOption ?? []).map(
      (e: any) => UninterpretedOption.fromJSON(e)
    );
    return message;
  },

  toJSON(message: MethodOptions): unknown {
    const obj: any = {};
    message.deprecated !== undefined && (obj.deprecated = message.deprecated);
    message.idempotencyLevel !== undefined &&
      (obj.idempotencyLevel = methodOptions_IdempotencyLevelToJSON(
        message.idempotencyLevel
      ));
    message.features !== undefined &&
      (obj.features = message.features
        ? FeatureSet.toJSON(message.features)
        : undefined);
    if (message.uninterpretedOption) {
      obj.uninterpretedOption = message.uninterpretedOption.map((e) =>
        e ? UninterpretedOption.toJSON(e) : undefined
      );
    } else {
      obj.uninterpretedOption = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<MethodOptions>): MethodOptions {
    const message = { ...baseMethodOptions } as MethodOptions;
    message.deprecated = object.deprecated ?? false;
    message.idempotencyLevel = object.idempotencyLevel ?? 0;
    message.features =
      object.features !== undefined && object.features !== null
        ? FeatureSet.fromPartial(object.features)
        : undefined;
    message.uninterpretedOption = (object.uninterpretedOption ?? []).map((e) =>
      UninterpretedOption.fromPartial(e)
    );
    return message;
  },
};

const baseUninterpretedOption: object = {
  identifierValue: "",
  positiveIntValue: Long.UZERO,
  negativeIntValue: Long.ZERO,
  doubleValue: 0,
  aggregateValue: "",
};

export const UninterpretedOption = {
  encode(
    message: UninterpretedOption,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.name) {
      UninterpretedOption_NamePart.encode(
        v!,
        writer.uint32(18).fork()
      ).ldelim();
    }
    if (message.identifierValue !== "") {
      writer.uint32(26).string(message.identifierValue);
    }
    if (!message.positiveIntValue.isZero()) {
      writer.uint32(32).uint64(message.positiveIntValue);
    }
    if (!message.negativeIntValue.isZero()) {
      writer.uint32(40).int64(message.negativeIntValue);
    }
    if (message.doubleValue !== 0) {
      writer.uint32(49).double(message.doubleValue);
    }
    if (message.stringValue.length !== 0) {
      writer.uint32(58).bytes(message.stringValue);
    }
    if (message.aggregateValue !== "") {
      writer.uint32(66).string(message.aggregateValue);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UninterpretedOption {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseUninterpretedOption } as UninterpretedOption;
    message.name = [];
    message.stringValue = new Uint8Array();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 2:
          message.name.push(
            UninterpretedOption_NamePart.decode(reader, reader.uint32())
          );
          break;
        case 3:
          message.identifierValue = reader.string();
          break;
        case 4:
          message.positiveIntValue = reader.uint64() as Long;
          break;
        case 5:
          message.negativeIntValue = reader.int64() as Long;
          break;
        case 6:
          message.doubleValue = reader.double();
          break;
        case 7:
          message.stringValue = reader.bytes();
          break;
        case 8:
          message.aggregateValue = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): UninterpretedOption {
    const message = { ...baseUninterpretedOption } as UninterpretedOption;
    message.name = (object.name ?? []).map((e: any) =>
      UninterpretedOption_NamePart.fromJSON(e)
    );
    message.identifierValue =
      object.identifierValue !== undefined && object.identifierValue !== null
        ? String(object.identifierValue)
        : "";
    message.positiveIntValue =
      object.positiveIntValue !== undefined && object.positiveIntValue !== null
        ? Long.fromString(object.positiveIntValue)
        : Long.UZERO;
    message.negativeIntValue =
      object.negativeIntValue !== undefined && object.negativeIntValue !== null
        ? Long.fromString(object.negativeIntValue)
        : Long.ZERO;
    message.doubleValue =
      object.doubleValue !== undefined && object.doubleValue !== null
        ? Number(object.doubleValue)
        : 0;
    message.stringValue =
      object.stringValue !== undefined && object.stringValue !== null
        ? bytesFromBase64(object.stringValue)
        : new Uint8Array();
    message.aggregateValue =
      object.aggregateValue !== undefined && object.aggregateValue !== null
        ? String(object.aggregateValue)
        : "";
    return message;
  },

  toJSON(message: UninterpretedOption): unknown {
    const obj: any = {};
    if (message.name) {
      obj.name = message.name.map((e) =>
        e ? UninterpretedOption_NamePart.toJSON(e) : undefined
      );
    } else {
      obj.name = [];
    }
    message.identifierValue !== undefined &&
      (obj.identifierValue = message.identifierValue);
    message.positiveIntValue !== undefined &&
      (obj.positiveIntValue = (
        message.positiveIntValue || Long.UZERO
      ).toString());
    message.negativeIntValue !== undefined &&
      (obj.negativeIntValue = (
        message.negativeIntValue || Long.ZERO
      ).toString());
    message.doubleValue !== undefined &&
      (obj.doubleValue = message.doubleValue);
    message.stringValue !== undefined &&
      (obj.stringValue = base64FromBytes(
        message.stringValue !== undefined
          ? message.stringValue
          : new Uint8Array()
      ));
    message.aggregateValue !== undefined &&
      (obj.aggregateValue = message.aggregateValue);
    return obj;
  },

  fromPartial(object: DeepPartial<UninterpretedOption>): UninterpretedOption {
    const message = { ...baseUninterpretedOption } as UninterpretedOption;
    message.name = (object.name ?? []).map((e) =>
      UninterpretedOption_NamePart.fromPartial(e)
    );
    message.identifierValue = object.identifierValue ?? "";
    message.positiveIntValue =
      object.positiveIntValue !== undefined && object.positiveIntValue !== null
        ? Long.fromValue(object.positiveIntValue)
        : Long.UZERO;
    message.negativeIntValue =
      object.negativeIntValue !== undefined && object.negativeIntValue !== null
        ? Long.fromValue(object.negativeIntValue)
        : Long.ZERO;
    message.doubleValue = object.doubleValue ?? 0;
    message.stringValue = object.stringValue ?? new Uint8Array();
    message.aggregateValue = object.aggregateValue ?? "";
    return message;
  },
};

const baseUninterpretedOption_NamePart: object = {
  namePart: "",
  isExtension: false,
};

export const UninterpretedOption_NamePart = {
  encode(
    message: UninterpretedOption_NamePart,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.namePart !== "") {
      writer.uint32(10).string(message.namePart);
    }
    if (message.isExtension === true) {
      writer.uint32(16).bool(message.isExtension);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): UninterpretedOption_NamePart {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseUninterpretedOption_NamePart,
    } as UninterpretedOption_NamePart;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.namePart = reader.string();
          break;
        case 2:
          message.isExtension = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): UninterpretedOption_NamePart {
    const message = {
      ...baseUninterpretedOption_NamePart,
    } as UninterpretedOption_NamePart;
    message.namePart =
      object.namePart !== undefined && object.namePart !== null
        ? String(object.namePart)
        : "";
    message.isExtension =
      object.isExtension !== undefined && object.isExtension !== null
        ? Boolean(object.isExtension)
        : false;
    return message;
  },

  toJSON(message: UninterpretedOption_NamePart): unknown {
    const obj: any = {};
    message.namePart !== undefined && (obj.namePart = message.namePart);
    message.isExtension !== undefined &&
      (obj.isExtension = message.isExtension);
    return obj;
  },

  fromPartial(
    object: DeepPartial<UninterpretedOption_NamePart>
  ): UninterpretedOption_NamePart {
    const message = {
      ...baseUninterpretedOption_NamePart,
    } as UninterpretedOption_NamePart;
    message.namePart = object.namePart ?? "";
    message.isExtension = object.isExtension ?? false;
    return message;
  },
};

const baseFeatureSet: object = {
  fieldPresence: 0,
  enumType: 0,
  repeatedFieldEncoding: 0,
  utf8Validation: 0,
  messageEncoding: 0,
  jsonFormat: 0,
};

export const FeatureSet = {
  encode(
    message: FeatureSet,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.fieldPresence !== 0) {
      writer.uint32(8).int32(message.fieldPresence);
    }
    if (message.enumType !== 0) {
      writer.uint32(16).int32(message.enumType);
    }
    if (message.repeatedFieldEncoding !== 0) {
      writer.uint32(24).int32(message.repeatedFieldEncoding);
    }
    if (message.utf8Validation !== 0) {
      writer.uint32(32).int32(message.utf8Validation);
    }
    if (message.messageEncoding !== 0) {
      writer.uint32(40).int32(message.messageEncoding);
    }
    if (message.jsonFormat !== 0) {
      writer.uint32(48).int32(message.jsonFormat);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): FeatureSet {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseFeatureSet } as FeatureSet;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.fieldPresence = reader.int32() as any;
          break;
        case 2:
          message.enumType = reader.int32() as any;
          break;
        case 3:
          message.repeatedFieldEncoding = reader.int32() as any;
          break;
        case 4:
          message.utf8Validation = reader.int32() as any;
          break;
        case 5:
          message.messageEncoding = reader.int32() as any;
          break;
        case 6:
          message.jsonFormat = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): FeatureSet {
    const message = { ...baseFeatureSet } as FeatureSet;
    message.fieldPresence =
      object.fieldPresence !== undefined && object.fieldPresence !== null
        ? featureSet_FieldPresenceFromJSON(object.fieldPresence)
        : 0;
    message.enumType =
      object.enumType !== undefined && object.enumType !== null
        ? featureSet_EnumTypeFromJSON(object.enumType)
        : 0;
    message.repeatedFieldEncoding =
      object.repeatedFieldEncoding !== undefined &&
      object.repeatedFieldEncoding !== null
        ? featureSet_RepeatedFieldEncodingFromJSON(object.repeatedFieldEncoding)
        : 0;
    message.utf8Validation =
      object.utf8Validation !== undefined && object.utf8Validation !== null
        ? featureSet_Utf8ValidationFromJSON(object.utf8Validation)
        : 0;
    message.messageEncoding =
      object.messageEncoding !== undefined && object.messageEncoding !== null
        ? featureSet_MessageEncodingFromJSON(object.messageEncoding)
        : 0;
    message.jsonFormat =
      object.jsonFormat !== undefined && object.jsonFormat !== null
        ? featureSet_JsonFormatFromJSON(object.jsonFormat)
        : 0;
    return message;
  },

  toJSON(message: FeatureSet): unknown {
    const obj: any = {};
    message.fieldPresence !== undefined &&
      (obj.fieldPresence = featureSet_FieldPresenceToJSON(
        message.fieldPresence
      ));
    message.enumType !== undefined &&
      (obj.enumType = featureSet_EnumTypeToJSON(message.enumType));
    message.repeatedFieldEncoding !== undefined &&
      (obj.repeatedFieldEncoding = featureSet_RepeatedFieldEncodingToJSON(
        message.repeatedFieldEncoding
      ));
    message.utf8Validation !== undefined &&
      (obj.utf8Validation = featureSet_Utf8ValidationToJSON(
        message.utf8Validation
      ));
    message.messageEncoding !== undefined &&
      (obj.messageEncoding = featureSet_MessageEncodingToJSON(
        message.messageEncoding
      ));
    message.jsonFormat !== undefined &&
      (obj.jsonFormat = featureSet_JsonFormatToJSON(message.jsonFormat));
    return obj;
  },

  fromPartial(object: DeepPartial<FeatureSet>): FeatureSet {
    const message = { ...baseFeatureSet } as FeatureSet;
    message.fieldPresence = object.fieldPresence ?? 0;
    message.enumType = object.enumType ?? 0;
    message.repeatedFieldEncoding = object.repeatedFieldEncoding ?? 0;
    message.utf8Validation = object.utf8Validation ?? 0;
    message.messageEncoding = object.messageEncoding ?? 0;
    message.jsonFormat = object.jsonFormat ?? 0;
    return message;
  },
};

const baseFeatureSetDefaults: object = { minimumEdition: 0, maximumEdition: 0 };

export const FeatureSetDefaults = {
  encode(
    message: FeatureSetDefaults,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.defaults) {
      FeatureSetDefaults_FeatureSetEditionDefault.encode(
        v!,
        writer.uint32(10).fork()
      ).ldelim();
    }
    if (message.minimumEdition !== 0) {
      writer.uint32(32).int32(message.minimumEdition);
    }
    if (message.maximumEdition !== 0) {
      writer.uint32(40).int32(message.maximumEdition);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): FeatureSetDefaults {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseFeatureSetDefaults } as FeatureSetDefaults;
    message.defaults = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.defaults.push(
            FeatureSetDefaults_FeatureSetEditionDefault.decode(
              reader,
              reader.uint32()
            )
          );
          break;
        case 4:
          message.minimumEdition = reader.int32() as any;
          break;
        case 5:
          message.maximumEdition = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): FeatureSetDefaults {
    const message = { ...baseFeatureSetDefaults } as FeatureSetDefaults;
    message.defaults = (object.defaults ?? []).map((e: any) =>
      FeatureSetDefaults_FeatureSetEditionDefault.fromJSON(e)
    );
    message.minimumEdition =
      object.minimumEdition !== undefined && object.minimumEdition !== null
        ? editionFromJSON(object.minimumEdition)
        : 0;
    message.maximumEdition =
      object.maximumEdition !== undefined && object.maximumEdition !== null
        ? editionFromJSON(object.maximumEdition)
        : 0;
    return message;
  },

  toJSON(message: FeatureSetDefaults): unknown {
    const obj: any = {};
    if (message.defaults) {
      obj.defaults = message.defaults.map((e) =>
        e ? FeatureSetDefaults_FeatureSetEditionDefault.toJSON(e) : undefined
      );
    } else {
      obj.defaults = [];
    }
    message.minimumEdition !== undefined &&
      (obj.minimumEdition = editionToJSON(message.minimumEdition));
    message.maximumEdition !== undefined &&
      (obj.maximumEdition = editionToJSON(message.maximumEdition));
    return obj;
  },

  fromPartial(object: DeepPartial<FeatureSetDefaults>): FeatureSetDefaults {
    const message = { ...baseFeatureSetDefaults } as FeatureSetDefaults;
    message.defaults = (object.defaults ?? []).map((e) =>
      FeatureSetDefaults_FeatureSetEditionDefault.fromPartial(e)
    );
    message.minimumEdition = object.minimumEdition ?? 0;
    message.maximumEdition = object.maximumEdition ?? 0;
    return message;
  },
};

const baseFeatureSetDefaults_FeatureSetEditionDefault: object = { edition: 0 };

export const FeatureSetDefaults_FeatureSetEditionDefault = {
  encode(
    message: FeatureSetDefaults_FeatureSetEditionDefault,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.edition !== 0) {
      writer.uint32(24).int32(message.edition);
    }
    if (message.overridableFeatures !== undefined) {
      FeatureSet.encode(
        message.overridableFeatures,
        writer.uint32(34).fork()
      ).ldelim();
    }
    if (message.fixedFeatures !== undefined) {
      FeatureSet.encode(
        message.fixedFeatures,
        writer.uint32(42).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): FeatureSetDefaults_FeatureSetEditionDefault {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseFeatureSetDefaults_FeatureSetEditionDefault,
    } as FeatureSetDefaults_FeatureSetEditionDefault;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 3:
          message.edition = reader.int32() as any;
          break;
        case 4:
          message.overridableFeatures = FeatureSet.decode(
            reader,
            reader.uint32()
          );
          break;
        case 5:
          message.fixedFeatures = FeatureSet.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): FeatureSetDefaults_FeatureSetEditionDefault {
    const message = {
      ...baseFeatureSetDefaults_FeatureSetEditionDefault,
    } as FeatureSetDefaults_FeatureSetEditionDefault;
    message.edition =
      object.edition !== undefined && object.edition !== null
        ? editionFromJSON(object.edition)
        : 0;
    message.overridableFeatures =
      object.overridableFeatures !== undefined &&
      object.overridableFeatures !== null
        ? FeatureSet.fromJSON(object.overridableFeatures)
        : undefined;
    message.fixedFeatures =
      object.fixedFeatures !== undefined && object.fixedFeatures !== null
        ? FeatureSet.fromJSON(object.fixedFeatures)
        : undefined;
    return message;
  },

  toJSON(message: FeatureSetDefaults_FeatureSetEditionDefault): unknown {
    const obj: any = {};
    message.edition !== undefined &&
      (obj.edition = editionToJSON(message.edition));
    message.overridableFeatures !== undefined &&
      (obj.overridableFeatures = message.overridableFeatures
        ? FeatureSet.toJSON(message.overridableFeatures)
        : undefined);
    message.fixedFeatures !== undefined &&
      (obj.fixedFeatures = message.fixedFeatures
        ? FeatureSet.toJSON(message.fixedFeatures)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<FeatureSetDefaults_FeatureSetEditionDefault>
  ): FeatureSetDefaults_FeatureSetEditionDefault {
    const message = {
      ...baseFeatureSetDefaults_FeatureSetEditionDefault,
    } as FeatureSetDefaults_FeatureSetEditionDefault;
    message.edition = object.edition ?? 0;
    message.overridableFeatures =
      object.overridableFeatures !== undefined &&
      object.overridableFeatures !== null
        ? FeatureSet.fromPartial(object.overridableFeatures)
        : undefined;
    message.fixedFeatures =
      object.fixedFeatures !== undefined && object.fixedFeatures !== null
        ? FeatureSet.fromPartial(object.fixedFeatures)
        : undefined;
    return message;
  },
};

const baseSourceCodeInfo: object = {};

export const SourceCodeInfo = {
  encode(
    message: SourceCodeInfo,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.location) {
      SourceCodeInfo_Location.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SourceCodeInfo {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseSourceCodeInfo } as SourceCodeInfo;
    message.location = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.location.push(
            SourceCodeInfo_Location.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): SourceCodeInfo {
    const message = { ...baseSourceCodeInfo } as SourceCodeInfo;
    message.location = (object.location ?? []).map((e: any) =>
      SourceCodeInfo_Location.fromJSON(e)
    );
    return message;
  },

  toJSON(message: SourceCodeInfo): unknown {
    const obj: any = {};
    if (message.location) {
      obj.location = message.location.map((e) =>
        e ? SourceCodeInfo_Location.toJSON(e) : undefined
      );
    } else {
      obj.location = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<SourceCodeInfo>): SourceCodeInfo {
    const message = { ...baseSourceCodeInfo } as SourceCodeInfo;
    message.location = (object.location ?? []).map((e) =>
      SourceCodeInfo_Location.fromPartial(e)
    );
    return message;
  },
};

const baseSourceCodeInfo_Location: object = {
  path: 0,
  span: 0,
  leadingComments: "",
  trailingComments: "",
  leadingDetachedComments: "",
};

export const SourceCodeInfo_Location = {
  encode(
    message: SourceCodeInfo_Location,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    writer.uint32(10).fork();
    for (const v of message.path) {
      writer.int32(v);
    }
    writer.ldelim();
    writer.uint32(18).fork();
    for (const v of message.span) {
      writer.int32(v);
    }
    writer.ldelim();
    if (message.leadingComments !== "") {
      writer.uint32(26).string(message.leadingComments);
    }
    if (message.trailingComments !== "") {
      writer.uint32(34).string(message.trailingComments);
    }
    for (const v of message.leadingDetachedComments) {
      writer.uint32(50).string(v!);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): SourceCodeInfo_Location {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseSourceCodeInfo_Location,
    } as SourceCodeInfo_Location;
    message.path = [];
    message.span = [];
    message.leadingDetachedComments = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.path.push(reader.int32());
            }
          } else {
            message.path.push(reader.int32());
          }
          break;
        case 2:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.span.push(reader.int32());
            }
          } else {
            message.span.push(reader.int32());
          }
          break;
        case 3:
          message.leadingComments = reader.string();
          break;
        case 4:
          message.trailingComments = reader.string();
          break;
        case 6:
          message.leadingDetachedComments.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): SourceCodeInfo_Location {
    const message = {
      ...baseSourceCodeInfo_Location,
    } as SourceCodeInfo_Location;
    message.path = (object.path ?? []).map((e: any) => Number(e));
    message.span = (object.span ?? []).map((e: any) => Number(e));
    message.leadingComments =
      object.leadingComments !== undefined && object.leadingComments !== null
        ? String(object.leadingComments)
        : "";
    message.trailingComments =
      object.trailingComments !== undefined && object.trailingComments !== null
        ? String(object.trailingComments)
        : "";
    message.leadingDetachedComments = (
      object.leadingDetachedComments ?? []
    ).map((e: any) => String(e));
    return message;
  },

  toJSON(message: SourceCodeInfo_Location): unknown {
    const obj: any = {};
    if (message.path) {
      obj.path = message.path.map((e) => e);
    } else {
      obj.path = [];
    }
    if (message.span) {
      obj.span = message.span.map((e) => e);
    } else {
      obj.span = [];
    }
    message.leadingComments !== undefined &&
      (obj.leadingComments = message.leadingComments);
    message.trailingComments !== undefined &&
      (obj.trailingComments = message.trailingComments);
    if (message.leadingDetachedComments) {
      obj.leadingDetachedComments = message.leadingDetachedComments.map(
        (e) => e
      );
    } else {
      obj.leadingDetachedComments = [];
    }
    return obj;
  },

  fromPartial(
    object: DeepPartial<SourceCodeInfo_Location>
  ): SourceCodeInfo_Location {
    const message = {
      ...baseSourceCodeInfo_Location,
    } as SourceCodeInfo_Location;
    message.path = (object.path ?? []).map((e) => e);
    message.span = (object.span ?? []).map((e) => e);
    message.leadingComments = object.leadingComments ?? "";
    message.trailingComments = object.trailingComments ?? "";
    message.leadingDetachedComments = (
      object.leadingDetachedComments ?? []
    ).map((e) => e);
    return message;
  },
};

const baseGeneratedCodeInfo: object = {};

export const GeneratedCodeInfo = {
  encode(
    message: GeneratedCodeInfo,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.annotation) {
      GeneratedCodeInfo_Annotation.encode(
        v!,
        writer.uint32(10).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GeneratedCodeInfo {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseGeneratedCodeInfo } as GeneratedCodeInfo;
    message.annotation = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.annotation.push(
            GeneratedCodeInfo_Annotation.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GeneratedCodeInfo {
    const message = { ...baseGeneratedCodeInfo } as GeneratedCodeInfo;
    message.annotation = (object.annotation ?? []).map((e: any) =>
      GeneratedCodeInfo_Annotation.fromJSON(e)
    );
    return message;
  },

  toJSON(message: GeneratedCodeInfo): unknown {
    const obj: any = {};
    if (message.annotation) {
      obj.annotation = message.annotation.map((e) =>
        e ? GeneratedCodeInfo_Annotation.toJSON(e) : undefined
      );
    } else {
      obj.annotation = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<GeneratedCodeInfo>): GeneratedCodeInfo {
    const message = { ...baseGeneratedCodeInfo } as GeneratedCodeInfo;
    message.annotation = (object.annotation ?? []).map((e) =>
      GeneratedCodeInfo_Annotation.fromPartial(e)
    );
    return message;
  },
};

const baseGeneratedCodeInfo_Annotation: object = {
  path: 0,
  sourceFile: "",
  begin: 0,
  end: 0,
  semantic: 0,
};

export const GeneratedCodeInfo_Annotation = {
  encode(
    message: GeneratedCodeInfo_Annotation,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    writer.uint32(10).fork();
    for (const v of message.path) {
      writer.int32(v);
    }
    writer.ldelim();
    if (message.sourceFile !== "") {
      writer.uint32(18).string(message.sourceFile);
    }
    if (message.begin !== 0) {
      writer.uint32(24).int32(message.begin);
    }
    if (message.end !== 0) {
      writer.uint32(32).int32(message.end);
    }
    if (message.semantic !== 0) {
      writer.uint32(40).int32(message.semantic);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): GeneratedCodeInfo_Annotation {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseGeneratedCodeInfo_Annotation,
    } as GeneratedCodeInfo_Annotation;
    message.path = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.path.push(reader.int32());
            }
          } else {
            message.path.push(reader.int32());
          }
          break;
        case 2:
          message.sourceFile = reader.string();
          break;
        case 3:
          message.begin = reader.int32();
          break;
        case 4:
          message.end = reader.int32();
          break;
        case 5:
          message.semantic = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GeneratedCodeInfo_Annotation {
    const message = {
      ...baseGeneratedCodeInfo_Annotation,
    } as GeneratedCodeInfo_Annotation;
    message.path = (object.path ?? []).map((e: any) => Number(e));
    message.sourceFile =
      object.sourceFile !== undefined && object.sourceFile !== null
        ? String(object.sourceFile)
        : "";
    message.begin =
      object.begin !== undefined && object.begin !== null
        ? Number(object.begin)
        : 0;
    message.end =
      object.end !== undefined && object.end !== null ? Number(object.end) : 0;
    message.semantic =
      object.semantic !== undefined && object.semantic !== null
        ? generatedCodeInfo_Annotation_SemanticFromJSON(object.semantic)
        : 0;
    return message;
  },

  toJSON(message: GeneratedCodeInfo_Annotation): unknown {
    const obj: any = {};
    if (message.path) {
      obj.path = message.path.map((e) => e);
    } else {
      obj.path = [];
    }
    message.sourceFile !== undefined && (obj.sourceFile = message.sourceFile);
    message.begin !== undefined && (obj.begin = message.begin);
    message.end !== undefined && (obj.end = message.end);
    message.semantic !== undefined &&
      (obj.semantic = generatedCodeInfo_Annotation_SemanticToJSON(
        message.semantic
      ));
    return obj;
  },

  fromPartial(
    object: DeepPartial<GeneratedCodeInfo_Annotation>
  ): GeneratedCodeInfo_Annotation {
    const message = {
      ...baseGeneratedCodeInfo_Annotation,
    } as GeneratedCodeInfo_Annotation;
    message.path = (object.path ?? []).map((e) => e);
    message.sourceFile = object.sourceFile ?? "";
    message.begin = object.begin ?? 0;
    message.end = object.end ?? 0;
    message.semantic = object.semantic ?? 0;
    return message;
  },
};

declare var self: any | undefined;
declare var window: any | undefined;
declare var global: any | undefined;
var globalThis: any = (() => {
  if (typeof globalThis !== "undefined") return globalThis;
  if (typeof self !== "undefined") return self;
  if (typeof window !== "undefined") return window;
  if (typeof global !== "undefined") return global;
  throw "Unable to locate global object";
})();

const atob: (b64: string) => string =
  globalThis.atob ||
  ((b64) => globalThis.Buffer.from(b64, "base64").toString("binary"));
function bytesFromBase64(b64: string): Uint8Array {
  const bin = atob(b64);
  const arr = new Uint8Array(bin.length);
  for (let i = 0; i < bin.length; ++i) {
    arr[i] = bin.charCodeAt(i);
  }
  return arr;
}

const btoa: (bin: string) => string =
  globalThis.btoa ||
  ((bin) => globalThis.Buffer.from(bin, "binary").toString("base64"));
function base64FromBytes(arr: Uint8Array): string {
  const bin: string[] = [];
  for (const byte of arr) {
    bin.push(String.fromCharCode(byte));
  }
  return btoa(bin.join(""));
}

type Builtin =
  | Date
  | Function
  | Uint8Array
  | string
  | number
  | boolean
  | undefined;
export type DeepPartial<T> = T extends Builtin
  ? T
  : T extends Long
  ? string | number | Long
  : T extends Array<infer U>
  ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U>
  ? ReadonlyArray<DeepPartial<U>>
  : T extends {}
  ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}
