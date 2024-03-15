/* eslint-disable */

export const protobufPackage = "google.protobuf";

export enum Edition {
  EDITION_UNKNOWN = 0,
  EDITION_PROTO2 = 998,
  EDITION_PROTO3 = 999,
  EDITION_2023 = 1000,
  EDITION_1_TEST_ONLY = 1,
  EDITION_2_TEST_ONLY = 2,
  EDITION_99997_TEST_ONLY = 99997,
  EDITION_99998_TEST_ONLY = 99998,
  EDITION_99999_TEST_ONLY = 99999,
}

export function editionFromJSON(object: any): Edition {
  switch (object) {
    case 0:
    case "EDITION_UNKNOWN":
      return Edition.EDITION_UNKNOWN;
    case 998:
    case "EDITION_PROTO2":
      return Edition.EDITION_PROTO2;
    case 999:
    case "EDITION_PROTO3":
      return Edition.EDITION_PROTO3;
    case 1000:
    case "EDITION_2023":
      return Edition.EDITION_2023;
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
    default:
      throw new globalThis.Error(
        "Unrecognized enum value " + object + " for enum Edition",
      );
  }
}

export interface FieldOptions {
  ctype?: FieldOptions_CType | undefined;
  packed?: boolean | undefined;
  jstype?: FieldOptions_JSType | undefined;
  lazy?: boolean | undefined;
  unverifiedLazy?: boolean | undefined;
  deprecated?: boolean | undefined;
  weak?: boolean | undefined;
  debugRedact?: boolean | undefined;
  retention?: FieldOptions_OptionRetention | undefined;
  targets: FieldOptions_OptionTargetType[];
  editionDefaults: FieldOptions_EditionDefault[];
  features?: FeatureSet | undefined;
  uninterpretedOption: UninterpretedOption[];
}

export enum FieldOptions_CType {
  STRING = 0,
  CORD = 1,
  STRING_PIECE = 2,
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
    default:
      throw new globalThis.Error(
        "Unrecognized enum value " + object + " for enum FieldOptions_CType",
      );
  }
}

export enum FieldOptions_JSType {
  JS_NORMAL = 0,
  JS_STRING = 1,
  JS_NUMBER = 2,
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
    default:
      throw new globalThis.Error(
        "Unrecognized enum value " + object + " for enum FieldOptions_JSType",
      );
  }
}

export enum FieldOptions_OptionRetention {
  RETENTION_UNKNOWN = 0,
  RETENTION_RUNTIME = 1,
  RETENTION_SOURCE = 2,
}

export function fieldOptions_OptionRetentionFromJSON(
  object: any,
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
    default:
      throw new globalThis.Error(
        "Unrecognized enum value " +
          object +
          " for enum FieldOptions_OptionRetention",
      );
  }
}

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
}

export function fieldOptions_OptionTargetTypeFromJSON(
  object: any,
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
    default:
      throw new globalThis.Error(
        "Unrecognized enum value " +
          object +
          " for enum FieldOptions_OptionTargetType",
      );
  }
}

export interface FieldOptions_EditionDefault {
  edition?: Edition | undefined;
  value?: string | undefined;
}

export interface OneofOptions {
  features?: FeatureSet | undefined;
  uninterpretedOption: UninterpretedOption[];
}

export interface UninterpretedOption {
  name: UninterpretedOption_NamePart[];
  identifierValue?: string | undefined;
  positiveIntValue?: string | undefined;
  negativeIntValue?: string | undefined;
  doubleValue?: number | undefined;
  stringValue?: Uint8Array | undefined;
  aggregateValue?: string | undefined;
}

export interface UninterpretedOption_NamePart {
  namePart: string;
  isExtension: boolean;
}

export interface FeatureSet {
  fieldPresence?: FeatureSet_FieldPresence | undefined;
  enumType?: FeatureSet_EnumType | undefined;
  repeatedFieldEncoding?: FeatureSet_RepeatedFieldEncoding | undefined;
  utf8Validation?: FeatureSet_Utf8Validation | undefined;
  messageEncoding?: FeatureSet_MessageEncoding | undefined;
  jsonFormat?: FeatureSet_JsonFormat | undefined;
}

export enum FeatureSet_FieldPresence {
  FIELD_PRESENCE_UNKNOWN = 0,
  EXPLICIT = 1,
  IMPLICIT = 2,
  LEGACY_REQUIRED = 3,
}

export function featureSet_FieldPresenceFromJSON(
  object: any,
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
    default:
      throw new globalThis.Error(
        "Unrecognized enum value " +
          object +
          " for enum FeatureSet_FieldPresence",
      );
  }
}

export enum FeatureSet_EnumType {
  ENUM_TYPE_UNKNOWN = 0,
  OPEN = 1,
  CLOSED = 2,
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
    default:
      throw new globalThis.Error(
        "Unrecognized enum value " + object + " for enum FeatureSet_EnumType",
      );
  }
}

export enum FeatureSet_RepeatedFieldEncoding {
  REPEATED_FIELD_ENCODING_UNKNOWN = 0,
  PACKED = 1,
  EXPANDED = 2,
}

export function featureSet_RepeatedFieldEncodingFromJSON(
  object: any,
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
    default:
      throw new globalThis.Error(
        "Unrecognized enum value " +
          object +
          " for enum FeatureSet_RepeatedFieldEncoding",
      );
  }
}

export enum FeatureSet_Utf8Validation {
  UTF8_VALIDATION_UNKNOWN = 0,
  NONE = 1,
  VERIFY = 2,
}

export function featureSet_Utf8ValidationFromJSON(
  object: any,
): FeatureSet_Utf8Validation {
  switch (object) {
    case 0:
    case "UTF8_VALIDATION_UNKNOWN":
      return FeatureSet_Utf8Validation.UTF8_VALIDATION_UNKNOWN;
    case 1:
    case "NONE":
      return FeatureSet_Utf8Validation.NONE;
    case 2:
    case "VERIFY":
      return FeatureSet_Utf8Validation.VERIFY;
    default:
      throw new globalThis.Error(
        "Unrecognized enum value " +
          object +
          " for enum FeatureSet_Utf8Validation",
      );
  }
}

export enum FeatureSet_MessageEncoding {
  MESSAGE_ENCODING_UNKNOWN = 0,
  LENGTH_PREFIXED = 1,
  DELIMITED = 2,
}

export function featureSet_MessageEncodingFromJSON(
  object: any,
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
    default:
      throw new globalThis.Error(
        "Unrecognized enum value " +
          object +
          " for enum FeatureSet_MessageEncoding",
      );
  }
}

export enum FeatureSet_JsonFormat {
  JSON_FORMAT_UNKNOWN = 0,
  ALLOW = 1,
  LEGACY_BEST_EFFORT = 2,
}

export function featureSet_JsonFormatFromJSON(
  object: any,
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
    default:
      throw new globalThis.Error(
        "Unrecognized enum value " + object + " for enum FeatureSet_JsonFormat",
      );
  }
}

export const FieldOptions = {
  fromJSON(object: any): FieldOptions {
    return {
      ctype: isSet(object.ctype) ? fieldOptions_CTypeFromJSON(object.ctype) : 0,
      packed: isSet(object.packed) ? globalThis.Boolean(object.packed) : false,
      jstype: isSet(object.jstype)
        ? fieldOptions_JSTypeFromJSON(object.jstype)
        : 0,
      lazy: isSet(object.lazy) ? globalThis.Boolean(object.lazy) : false,
      unverifiedLazy: isSet(object.unverifiedLazy)
        ? globalThis.Boolean(object.unverifiedLazy)
        : false,
      deprecated: isSet(object.deprecated)
        ? globalThis.Boolean(object.deprecated)
        : false,
      weak: isSet(object.weak) ? globalThis.Boolean(object.weak) : false,
      debugRedact: isSet(object.debugRedact)
        ? globalThis.Boolean(object.debugRedact)
        : false,
      retention: isSet(object.retention)
        ? fieldOptions_OptionRetentionFromJSON(object.retention)
        : 0,
      targets: globalThis.Array.isArray(object?.targets)
        ? object.targets.map((e: any) =>
            fieldOptions_OptionTargetTypeFromJSON(e),
          )
        : [],
      editionDefaults: globalThis.Array.isArray(object?.editionDefaults)
        ? object.editionDefaults.map((e: any) =>
            FieldOptions_EditionDefault.fromJSON(e),
          )
        : [],
      features: isSet(object.features)
        ? FeatureSet.fromJSON(object.features)
        : undefined,
      uninterpretedOption: globalThis.Array.isArray(object?.uninterpretedOption)
        ? object.uninterpretedOption.map((e: any) =>
            UninterpretedOption.fromJSON(e),
          )
        : [],
    };
  },
};

export const FieldOptions_EditionDefault = {
  fromJSON(object: any): FieldOptions_EditionDefault {
    return {
      edition: isSet(object.edition) ? editionFromJSON(object.edition) : 0,
      value: isSet(object.value) ? globalThis.String(object.value) : "",
    };
  },
};

export const OneofOptions = {
  fromJSON(object: any): OneofOptions {
    return {
      features: isSet(object.features)
        ? FeatureSet.fromJSON(object.features)
        : undefined,
      uninterpretedOption: globalThis.Array.isArray(object?.uninterpretedOption)
        ? object.uninterpretedOption.map((e: any) =>
            UninterpretedOption.fromJSON(e),
          )
        : [],
    };
  },
};

export const UninterpretedOption = {
  fromJSON(object: any): UninterpretedOption {
    return {
      name: globalThis.Array.isArray(object?.name)
        ? object.name.map((e: any) => UninterpretedOption_NamePart.fromJSON(e))
        : [],
      identifierValue: isSet(object.identifierValue)
        ? globalThis.String(object.identifierValue)
        : "",
      positiveIntValue: isSet(object.positiveIntValue)
        ? globalThis.String(object.positiveIntValue)
        : "0",
      negativeIntValue: isSet(object.negativeIntValue)
        ? globalThis.String(object.negativeIntValue)
        : "0",
      doubleValue: isSet(object.doubleValue)
        ? globalThis.Number(object.doubleValue)
        : 0,
      stringValue: isSet(object.stringValue)
        ? bytesFromBase64(object.stringValue)
        : new Uint8Array(0),
      aggregateValue: isSet(object.aggregateValue)
        ? globalThis.String(object.aggregateValue)
        : "",
    };
  },
};

export const UninterpretedOption_NamePart = {
  fromJSON(object: any): UninterpretedOption_NamePart {
    return {
      namePart: isSet(object.namePart)
        ? globalThis.String(object.namePart)
        : "",
      isExtension: isSet(object.isExtension)
        ? globalThis.Boolean(object.isExtension)
        : false,
    };
  },
};

export const FeatureSet = {
  fromJSON(object: any): FeatureSet {
    return {
      fieldPresence: isSet(object.fieldPresence)
        ? featureSet_FieldPresenceFromJSON(object.fieldPresence)
        : 0,
      enumType: isSet(object.enumType)
        ? featureSet_EnumTypeFromJSON(object.enumType)
        : 0,
      repeatedFieldEncoding: isSet(object.repeatedFieldEncoding)
        ? featureSet_RepeatedFieldEncodingFromJSON(object.repeatedFieldEncoding)
        : 0,
      utf8Validation: isSet(object.utf8Validation)
        ? featureSet_Utf8ValidationFromJSON(object.utf8Validation)
        : 0,
      messageEncoding: isSet(object.messageEncoding)
        ? featureSet_MessageEncodingFromJSON(object.messageEncoding)
        : 0,
      jsonFormat: isSet(object.jsonFormat)
        ? featureSet_JsonFormatFromJSON(object.jsonFormat)
        : 0,
    };
  },
};

function bytesFromBase64(b64: string): Uint8Array {
  if ((globalThis as any).Buffer) {
    return Uint8Array.from(globalThis.Buffer.from(b64, "base64"));
  } else {
    const bin = globalThis.atob(b64);
    const arr = new Uint8Array(bin.length);
    for (let i = 0; i < bin.length; ++i) {
      arr[i] = bin.charCodeAt(i);
    }
    return arr;
  }
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
