/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "cosmos.autocli.v1";

/** ModuleOptions describes the CLI options for a Cosmos SDK module. */
export interface ModuleOptions {
  /** tx describes the tx commands for the module. */
  tx?: ServiceCommandDescriptor;
  /** query describes the queries commands for the module. */
  query?: ServiceCommandDescriptor;
}

/** ServiceCommandDescriptor describes a CLI command based on a protobuf service. */
export interface ServiceCommandDescriptor {
  /**
   * service is the fully qualified name of the protobuf service to build
   * the command from. It can be left empty if sub_commands are used instead
   * which may be the case if a module provides multiple tx and/or query services.
   */
  service: string;
  /**
   * rpc_command_options are options for commands generated from rpc methods.
   * If no options are specified for a given rpc method on the service, a
   * command will be generated for that method with the default options.
   */
  rpcCommandOptions: RpcCommandOptions[];
  /**
   * sub_commands is a map of optional sub-commands for this command based on
   * different protobuf services. The map key is used as the name of the
   * sub-command.
   */
  subCommands: { [key: string]: ServiceCommandDescriptor };
}

export interface ServiceCommandDescriptor_SubCommandsEntry {
  key: string;
  value?: ServiceCommandDescriptor;
}

/**
 * RpcCommandOptions specifies options for commands generated from protobuf
 * rpc methods.
 */
export interface RpcCommandOptions {
  /**
   * rpc_method is short name of the protobuf rpc method that this command is
   * generated from.
   */
  rpcMethod: string;
  /**
   * use is the one-line usage method. It also allows specifying an alternate
   * name for the command as the first word of the usage text.
   *
   * By default the name of an rpc command is the kebab-case short name of the
   * rpc method.
   */
  use: string;
  /** long is the long message shown in the 'help <this-command>' output. */
  long: string;
  /** short is the short description shown in the 'help' output. */
  short: string;
  /** example is examples of how to use the command. */
  example: string;
  /** alias is an array of aliases that can be used instead of the first word in Use. */
  alias: string[];
  /**
   * suggest_for is an array of command names for which this command will be suggested -
   * similar to aliases but only suggests.
   */
  suggestFor: string[];
  /** deprecated defines, if this command is deprecated and should print this string when used. */
  deprecated: string;
  /**
   * version defines the version for this command. If this value is non-empty and the command does not
   * define a "version" flag, a "version" boolean flag will be added to the command and, if specified,
   * will print content of the "Version" variable. A shorthand "v" flag will also be added if the
   * command does not define one.
   */
  version: string;
  /**
   * flag_options are options for flags generated from rpc request fields.
   * By default all request fields are configured as flags. They can
   * also be configured as positional args instead using positional_args.
   */
  flagOptions: { [key: string]: FlagOptions };
  /** positional_args specifies positional arguments for the command. */
  positionalArgs: PositionalArgDescriptor[];
  /** skip specifies whether to skip this rpc method when generating commands. */
  skip: boolean;
}

export interface RpcCommandOptions_FlagOptionsEntry {
  key: string;
  value?: FlagOptions;
}

/**
 * FlagOptions are options for flags generated from rpc request fields.
 * By default, all request fields are configured as flags based on the
 * kebab-case name of the field. Fields can be turned into positional arguments
 * instead by using RpcCommandOptions.positional_args.
 */
export interface FlagOptions {
  /** name is an alternate name to use for the field flag. */
  name: string;
  /** shorthand is a one-letter abbreviated flag. */
  shorthand: string;
  /** usage is the help message. */
  usage: string;
  /** default_value is the default value as text. */
  defaultValue: string;
  /** deprecated is the usage text to show if this flag is deprecated. */
  deprecated: string;
  /** shorthand_deprecated is the usage text to show if the shorthand of this flag is deprecated. */
  shorthandDeprecated: string;
  /** hidden hides the flag from help/usage text */
  hidden: boolean;
}

/** PositionalArgDescriptor describes a positional argument. */
export interface PositionalArgDescriptor {
  /**
   * proto_field specifies the proto field to use as the positional arg. Any
   * fields used as positional args will not have a flag generated.
   */
  protoField: string;
  /**
   * varargs makes a positional parameter a varargs parameter. This can only be
   * applied to last positional parameter and the proto_field must a repeated
   * field.
   */
  varargs: boolean;
}

const baseModuleOptions: object = {};

export const ModuleOptions = {
  encode(
    message: ModuleOptions,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.tx !== undefined) {
      ServiceCommandDescriptor.encode(
        message.tx,
        writer.uint32(10).fork()
      ).ldelim();
    }
    if (message.query !== undefined) {
      ServiceCommandDescriptor.encode(
        message.query,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ModuleOptions {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseModuleOptions } as ModuleOptions;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.tx = ServiceCommandDescriptor.decode(reader, reader.uint32());
          break;
        case 2:
          message.query = ServiceCommandDescriptor.decode(
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

  fromJSON(object: any): ModuleOptions {
    const message = { ...baseModuleOptions } as ModuleOptions;
    message.tx =
      object.tx !== undefined && object.tx !== null
        ? ServiceCommandDescriptor.fromJSON(object.tx)
        : undefined;
    message.query =
      object.query !== undefined && object.query !== null
        ? ServiceCommandDescriptor.fromJSON(object.query)
        : undefined;
    return message;
  },

  toJSON(message: ModuleOptions): unknown {
    const obj: any = {};
    message.tx !== undefined &&
      (obj.tx = message.tx
        ? ServiceCommandDescriptor.toJSON(message.tx)
        : undefined);
    message.query !== undefined &&
      (obj.query = message.query
        ? ServiceCommandDescriptor.toJSON(message.query)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<ModuleOptions>): ModuleOptions {
    const message = { ...baseModuleOptions } as ModuleOptions;
    message.tx =
      object.tx !== undefined && object.tx !== null
        ? ServiceCommandDescriptor.fromPartial(object.tx)
        : undefined;
    message.query =
      object.query !== undefined && object.query !== null
        ? ServiceCommandDescriptor.fromPartial(object.query)
        : undefined;
    return message;
  },
};

const baseServiceCommandDescriptor: object = { service: "" };

export const ServiceCommandDescriptor = {
  encode(
    message: ServiceCommandDescriptor,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.service !== "") {
      writer.uint32(10).string(message.service);
    }
    for (const v of message.rpcCommandOptions) {
      RpcCommandOptions.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    Object.entries(message.subCommands).forEach(([key, value]) => {
      ServiceCommandDescriptor_SubCommandsEntry.encode(
        { key: key as any, value },
        writer.uint32(26).fork()
      ).ldelim();
    });
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): ServiceCommandDescriptor {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseServiceCommandDescriptor,
    } as ServiceCommandDescriptor;
    message.rpcCommandOptions = [];
    message.subCommands = {};
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.service = reader.string();
          break;
        case 2:
          message.rpcCommandOptions.push(
            RpcCommandOptions.decode(reader, reader.uint32())
          );
          break;
        case 3:
          const entry3 = ServiceCommandDescriptor_SubCommandsEntry.decode(
            reader,
            reader.uint32()
          );
          if (entry3.value !== undefined) {
            message.subCommands[entry3.key] = entry3.value;
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ServiceCommandDescriptor {
    const message = {
      ...baseServiceCommandDescriptor,
    } as ServiceCommandDescriptor;
    message.service =
      object.service !== undefined && object.service !== null
        ? String(object.service)
        : "";
    message.rpcCommandOptions = (object.rpcCommandOptions ?? []).map((e: any) =>
      RpcCommandOptions.fromJSON(e)
    );
    message.subCommands = Object.entries(object.subCommands ?? {}).reduce<{
      [key: string]: ServiceCommandDescriptor;
    }>((acc, [key, value]) => {
      acc[key] = ServiceCommandDescriptor.fromJSON(value);
      return acc;
    }, {});
    return message;
  },

  toJSON(message: ServiceCommandDescriptor): unknown {
    const obj: any = {};
    message.service !== undefined && (obj.service = message.service);
    if (message.rpcCommandOptions) {
      obj.rpcCommandOptions = message.rpcCommandOptions.map((e) =>
        e ? RpcCommandOptions.toJSON(e) : undefined
      );
    } else {
      obj.rpcCommandOptions = [];
    }
    obj.subCommands = {};
    if (message.subCommands) {
      Object.entries(message.subCommands).forEach(([k, v]) => {
        obj.subCommands[k] = ServiceCommandDescriptor.toJSON(v);
      });
    }
    return obj;
  },

  fromPartial(
    object: DeepPartial<ServiceCommandDescriptor>
  ): ServiceCommandDescriptor {
    const message = {
      ...baseServiceCommandDescriptor,
    } as ServiceCommandDescriptor;
    message.service = object.service ?? "";
    message.rpcCommandOptions = (object.rpcCommandOptions ?? []).map((e) =>
      RpcCommandOptions.fromPartial(e)
    );
    message.subCommands = Object.entries(object.subCommands ?? {}).reduce<{
      [key: string]: ServiceCommandDescriptor;
    }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = ServiceCommandDescriptor.fromPartial(value);
      }
      return acc;
    }, {});
    return message;
  },
};

const baseServiceCommandDescriptor_SubCommandsEntry: object = { key: "" };

export const ServiceCommandDescriptor_SubCommandsEntry = {
  encode(
    message: ServiceCommandDescriptor_SubCommandsEntry,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== undefined) {
      ServiceCommandDescriptor.encode(
        message.value,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): ServiceCommandDescriptor_SubCommandsEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseServiceCommandDescriptor_SubCommandsEntry,
    } as ServiceCommandDescriptor_SubCommandsEntry;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.string();
          break;
        case 2:
          message.value = ServiceCommandDescriptor.decode(
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

  fromJSON(object: any): ServiceCommandDescriptor_SubCommandsEntry {
    const message = {
      ...baseServiceCommandDescriptor_SubCommandsEntry,
    } as ServiceCommandDescriptor_SubCommandsEntry;
    message.key =
      object.key !== undefined && object.key !== null ? String(object.key) : "";
    message.value =
      object.value !== undefined && object.value !== null
        ? ServiceCommandDescriptor.fromJSON(object.value)
        : undefined;
    return message;
  },

  toJSON(message: ServiceCommandDescriptor_SubCommandsEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined &&
      (obj.value = message.value
        ? ServiceCommandDescriptor.toJSON(message.value)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<ServiceCommandDescriptor_SubCommandsEntry>
  ): ServiceCommandDescriptor_SubCommandsEntry {
    const message = {
      ...baseServiceCommandDescriptor_SubCommandsEntry,
    } as ServiceCommandDescriptor_SubCommandsEntry;
    message.key = object.key ?? "";
    message.value =
      object.value !== undefined && object.value !== null
        ? ServiceCommandDescriptor.fromPartial(object.value)
        : undefined;
    return message;
  },
};

const baseRpcCommandOptions: object = {
  rpcMethod: "",
  use: "",
  long: "",
  short: "",
  example: "",
  alias: "",
  suggestFor: "",
  deprecated: "",
  version: "",
  skip: false,
};

export const RpcCommandOptions = {
  encode(
    message: RpcCommandOptions,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.rpcMethod !== "") {
      writer.uint32(10).string(message.rpcMethod);
    }
    if (message.use !== "") {
      writer.uint32(18).string(message.use);
    }
    if (message.long !== "") {
      writer.uint32(26).string(message.long);
    }
    if (message.short !== "") {
      writer.uint32(34).string(message.short);
    }
    if (message.example !== "") {
      writer.uint32(42).string(message.example);
    }
    for (const v of message.alias) {
      writer.uint32(50).string(v!);
    }
    for (const v of message.suggestFor) {
      writer.uint32(58).string(v!);
    }
    if (message.deprecated !== "") {
      writer.uint32(66).string(message.deprecated);
    }
    if (message.version !== "") {
      writer.uint32(74).string(message.version);
    }
    Object.entries(message.flagOptions).forEach(([key, value]) => {
      RpcCommandOptions_FlagOptionsEntry.encode(
        { key: key as any, value },
        writer.uint32(82).fork()
      ).ldelim();
    });
    for (const v of message.positionalArgs) {
      PositionalArgDescriptor.encode(v!, writer.uint32(90).fork()).ldelim();
    }
    if (message.skip === true) {
      writer.uint32(96).bool(message.skip);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RpcCommandOptions {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseRpcCommandOptions } as RpcCommandOptions;
    message.alias = [];
    message.suggestFor = [];
    message.flagOptions = {};
    message.positionalArgs = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.rpcMethod = reader.string();
          break;
        case 2:
          message.use = reader.string();
          break;
        case 3:
          message.long = reader.string();
          break;
        case 4:
          message.short = reader.string();
          break;
        case 5:
          message.example = reader.string();
          break;
        case 6:
          message.alias.push(reader.string());
          break;
        case 7:
          message.suggestFor.push(reader.string());
          break;
        case 8:
          message.deprecated = reader.string();
          break;
        case 9:
          message.version = reader.string();
          break;
        case 10:
          const entry10 = RpcCommandOptions_FlagOptionsEntry.decode(
            reader,
            reader.uint32()
          );
          if (entry10.value !== undefined) {
            message.flagOptions[entry10.key] = entry10.value;
          }
          break;
        case 11:
          message.positionalArgs.push(
            PositionalArgDescriptor.decode(reader, reader.uint32())
          );
          break;
        case 12:
          message.skip = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): RpcCommandOptions {
    const message = { ...baseRpcCommandOptions } as RpcCommandOptions;
    message.rpcMethod =
      object.rpcMethod !== undefined && object.rpcMethod !== null
        ? String(object.rpcMethod)
        : "";
    message.use =
      object.use !== undefined && object.use !== null ? String(object.use) : "";
    message.long =
      object.long !== undefined && object.long !== null
        ? String(object.long)
        : "";
    message.short =
      object.short !== undefined && object.short !== null
        ? String(object.short)
        : "";
    message.example =
      object.example !== undefined && object.example !== null
        ? String(object.example)
        : "";
    message.alias = (object.alias ?? []).map((e: any) => String(e));
    message.suggestFor = (object.suggestFor ?? []).map((e: any) => String(e));
    message.deprecated =
      object.deprecated !== undefined && object.deprecated !== null
        ? String(object.deprecated)
        : "";
    message.version =
      object.version !== undefined && object.version !== null
        ? String(object.version)
        : "";
    message.flagOptions = Object.entries(object.flagOptions ?? {}).reduce<{
      [key: string]: FlagOptions;
    }>((acc, [key, value]) => {
      acc[key] = FlagOptions.fromJSON(value);
      return acc;
    }, {});
    message.positionalArgs = (object.positionalArgs ?? []).map((e: any) =>
      PositionalArgDescriptor.fromJSON(e)
    );
    message.skip =
      object.skip !== undefined && object.skip !== null
        ? Boolean(object.skip)
        : false;
    return message;
  },

  toJSON(message: RpcCommandOptions): unknown {
    const obj: any = {};
    message.rpcMethod !== undefined && (obj.rpcMethod = message.rpcMethod);
    message.use !== undefined && (obj.use = message.use);
    message.long !== undefined && (obj.long = message.long);
    message.short !== undefined && (obj.short = message.short);
    message.example !== undefined && (obj.example = message.example);
    if (message.alias) {
      obj.alias = message.alias.map((e) => e);
    } else {
      obj.alias = [];
    }
    if (message.suggestFor) {
      obj.suggestFor = message.suggestFor.map((e) => e);
    } else {
      obj.suggestFor = [];
    }
    message.deprecated !== undefined && (obj.deprecated = message.deprecated);
    message.version !== undefined && (obj.version = message.version);
    obj.flagOptions = {};
    if (message.flagOptions) {
      Object.entries(message.flagOptions).forEach(([k, v]) => {
        obj.flagOptions[k] = FlagOptions.toJSON(v);
      });
    }
    if (message.positionalArgs) {
      obj.positionalArgs = message.positionalArgs.map((e) =>
        e ? PositionalArgDescriptor.toJSON(e) : undefined
      );
    } else {
      obj.positionalArgs = [];
    }
    message.skip !== undefined && (obj.skip = message.skip);
    return obj;
  },

  fromPartial(object: DeepPartial<RpcCommandOptions>): RpcCommandOptions {
    const message = { ...baseRpcCommandOptions } as RpcCommandOptions;
    message.rpcMethod = object.rpcMethod ?? "";
    message.use = object.use ?? "";
    message.long = object.long ?? "";
    message.short = object.short ?? "";
    message.example = object.example ?? "";
    message.alias = (object.alias ?? []).map((e) => e);
    message.suggestFor = (object.suggestFor ?? []).map((e) => e);
    message.deprecated = object.deprecated ?? "";
    message.version = object.version ?? "";
    message.flagOptions = Object.entries(object.flagOptions ?? {}).reduce<{
      [key: string]: FlagOptions;
    }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = FlagOptions.fromPartial(value);
      }
      return acc;
    }, {});
    message.positionalArgs = (object.positionalArgs ?? []).map((e) =>
      PositionalArgDescriptor.fromPartial(e)
    );
    message.skip = object.skip ?? false;
    return message;
  },
};

const baseRpcCommandOptions_FlagOptionsEntry: object = { key: "" };

export const RpcCommandOptions_FlagOptionsEntry = {
  encode(
    message: RpcCommandOptions_FlagOptionsEntry,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== undefined) {
      FlagOptions.encode(message.value, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): RpcCommandOptions_FlagOptionsEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseRpcCommandOptions_FlagOptionsEntry,
    } as RpcCommandOptions_FlagOptionsEntry;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.string();
          break;
        case 2:
          message.value = FlagOptions.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): RpcCommandOptions_FlagOptionsEntry {
    const message = {
      ...baseRpcCommandOptions_FlagOptionsEntry,
    } as RpcCommandOptions_FlagOptionsEntry;
    message.key =
      object.key !== undefined && object.key !== null ? String(object.key) : "";
    message.value =
      object.value !== undefined && object.value !== null
        ? FlagOptions.fromJSON(object.value)
        : undefined;
    return message;
  },

  toJSON(message: RpcCommandOptions_FlagOptionsEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined &&
      (obj.value = message.value
        ? FlagOptions.toJSON(message.value)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<RpcCommandOptions_FlagOptionsEntry>
  ): RpcCommandOptions_FlagOptionsEntry {
    const message = {
      ...baseRpcCommandOptions_FlagOptionsEntry,
    } as RpcCommandOptions_FlagOptionsEntry;
    message.key = object.key ?? "";
    message.value =
      object.value !== undefined && object.value !== null
        ? FlagOptions.fromPartial(object.value)
        : undefined;
    return message;
  },
};

const baseFlagOptions: object = {
  name: "",
  shorthand: "",
  usage: "",
  defaultValue: "",
  deprecated: "",
  shorthandDeprecated: "",
  hidden: false,
};

export const FlagOptions = {
  encode(
    message: FlagOptions,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.shorthand !== "") {
      writer.uint32(18).string(message.shorthand);
    }
    if (message.usage !== "") {
      writer.uint32(26).string(message.usage);
    }
    if (message.defaultValue !== "") {
      writer.uint32(34).string(message.defaultValue);
    }
    if (message.deprecated !== "") {
      writer.uint32(50).string(message.deprecated);
    }
    if (message.shorthandDeprecated !== "") {
      writer.uint32(58).string(message.shorthandDeprecated);
    }
    if (message.hidden === true) {
      writer.uint32(64).bool(message.hidden);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): FlagOptions {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseFlagOptions } as FlagOptions;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 2:
          message.shorthand = reader.string();
          break;
        case 3:
          message.usage = reader.string();
          break;
        case 4:
          message.defaultValue = reader.string();
          break;
        case 6:
          message.deprecated = reader.string();
          break;
        case 7:
          message.shorthandDeprecated = reader.string();
          break;
        case 8:
          message.hidden = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): FlagOptions {
    const message = { ...baseFlagOptions } as FlagOptions;
    message.name =
      object.name !== undefined && object.name !== null
        ? String(object.name)
        : "";
    message.shorthand =
      object.shorthand !== undefined && object.shorthand !== null
        ? String(object.shorthand)
        : "";
    message.usage =
      object.usage !== undefined && object.usage !== null
        ? String(object.usage)
        : "";
    message.defaultValue =
      object.defaultValue !== undefined && object.defaultValue !== null
        ? String(object.defaultValue)
        : "";
    message.deprecated =
      object.deprecated !== undefined && object.deprecated !== null
        ? String(object.deprecated)
        : "";
    message.shorthandDeprecated =
      object.shorthandDeprecated !== undefined &&
      object.shorthandDeprecated !== null
        ? String(object.shorthandDeprecated)
        : "";
    message.hidden =
      object.hidden !== undefined && object.hidden !== null
        ? Boolean(object.hidden)
        : false;
    return message;
  },

  toJSON(message: FlagOptions): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    message.shorthand !== undefined && (obj.shorthand = message.shorthand);
    message.usage !== undefined && (obj.usage = message.usage);
    message.defaultValue !== undefined &&
      (obj.defaultValue = message.defaultValue);
    message.deprecated !== undefined && (obj.deprecated = message.deprecated);
    message.shorthandDeprecated !== undefined &&
      (obj.shorthandDeprecated = message.shorthandDeprecated);
    message.hidden !== undefined && (obj.hidden = message.hidden);
    return obj;
  },

  fromPartial(object: DeepPartial<FlagOptions>): FlagOptions {
    const message = { ...baseFlagOptions } as FlagOptions;
    message.name = object.name ?? "";
    message.shorthand = object.shorthand ?? "";
    message.usage = object.usage ?? "";
    message.defaultValue = object.defaultValue ?? "";
    message.deprecated = object.deprecated ?? "";
    message.shorthandDeprecated = object.shorthandDeprecated ?? "";
    message.hidden = object.hidden ?? false;
    return message;
  },
};

const basePositionalArgDescriptor: object = { protoField: "", varargs: false };

export const PositionalArgDescriptor = {
  encode(
    message: PositionalArgDescriptor,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.protoField !== "") {
      writer.uint32(10).string(message.protoField);
    }
    if (message.varargs === true) {
      writer.uint32(16).bool(message.varargs);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): PositionalArgDescriptor {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...basePositionalArgDescriptor,
    } as PositionalArgDescriptor;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.protoField = reader.string();
          break;
        case 2:
          message.varargs = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): PositionalArgDescriptor {
    const message = {
      ...basePositionalArgDescriptor,
    } as PositionalArgDescriptor;
    message.protoField =
      object.protoField !== undefined && object.protoField !== null
        ? String(object.protoField)
        : "";
    message.varargs =
      object.varargs !== undefined && object.varargs !== null
        ? Boolean(object.varargs)
        : false;
    return message;
  },

  toJSON(message: PositionalArgDescriptor): unknown {
    const obj: any = {};
    message.protoField !== undefined && (obj.protoField = message.protoField);
    message.varargs !== undefined && (obj.varargs = message.varargs);
    return obj;
  },

  fromPartial(
    object: DeepPartial<PositionalArgDescriptor>
  ): PositionalArgDescriptor {
    const message = {
      ...basePositionalArgDescriptor,
    } as PositionalArgDescriptor;
    message.protoField = object.protoField ?? "";
    message.varargs = object.varargs ?? false;
    return message;
  },
};

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
