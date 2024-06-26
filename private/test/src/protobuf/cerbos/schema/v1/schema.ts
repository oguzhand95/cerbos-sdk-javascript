// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v1.174.0
//   protoc               unknown
// source: cerbos/schema/v1/schema.proto

/* eslint-disable */
import _m0 from "protobufjs/minimal";

export const protobufPackage = "cerbos.schema.v1";

export interface ValidationError {
  path: string;
  message: string;
  source: ValidationError_Source;
}

export enum ValidationError_Source {
  SOURCE_UNSPECIFIED = 0,
  SOURCE_PRINCIPAL = 1,
  SOURCE_RESOURCE = 2,
}

export function validationError_SourceFromJSON(
  object: any,
): ValidationError_Source {
  switch (object) {
    case 0:
    case "SOURCE_UNSPECIFIED":
      return ValidationError_Source.SOURCE_UNSPECIFIED;
    case 1:
    case "SOURCE_PRINCIPAL":
      return ValidationError_Source.SOURCE_PRINCIPAL;
    case 2:
    case "SOURCE_RESOURCE":
      return ValidationError_Source.SOURCE_RESOURCE;
    default:
      throw new globalThis.Error(
        "Unrecognized enum value " +
          object +
          " for enum ValidationError_Source",
      );
  }
}

function createBaseValidationError(): ValidationError {
  return { path: "", message: "", source: 0 };
}

export const ValidationError = {
  encode(
    message: ValidationError,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.path !== "") {
      writer.uint32(10).string(message.path);
    }
    if (message.message !== "") {
      writer.uint32(18).string(message.message);
    }
    if (message.source !== 0) {
      writer.uint32(24).int32(message.source);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ValidationError {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseValidationError();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.path = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.message = reader.string();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.source = reader.int32() as any;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ValidationError {
    return {
      path: isSet(object.path) ? globalThis.String(object.path) : "",
      message: isSet(object.message) ? globalThis.String(object.message) : "",
      source: isSet(object.source)
        ? validationError_SourceFromJSON(object.source)
        : 0,
    };
  },
};

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
