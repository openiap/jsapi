var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
/* eslint-disable */
import * as _m0 from "protobufjs/minimal";
export var protobufPackage = "google.protobuf";
/**
 * `NullValue` is a singleton enumeration to represent the null value for the
 * `Value` type union.
 *
 *  The JSON representation for `NullValue` is JSON `null`.
 */
export var NullValue;
(function (NullValue) {
    /** NULL_VALUE - Null value. */
    NullValue[NullValue["NULL_VALUE"] = 0] = "NULL_VALUE";
    NullValue[NullValue["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(NullValue || (NullValue = {}));
export function nullValueFromJSON(object) {
    switch (object) {
        case 0:
        case "NULL_VALUE":
            return NullValue.NULL_VALUE;
        case -1:
        case "UNRECOGNIZED":
        default:
            return NullValue.UNRECOGNIZED;
    }
}
export function nullValueToJSON(object) {
    switch (object) {
        case NullValue.NULL_VALUE:
            return "NULL_VALUE";
        case NullValue.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
function createBaseStruct() {
    return { fields: {} };
}
export var Struct = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        Object.entries(message.fields).forEach(function (_a) {
            var key = _a[0], value = _a[1];
            if (value !== undefined) {
                Struct_FieldsEntry.encode({ key: key, value: value }, writer.uint32(10).fork()).ldelim();
            }
        });
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseStruct();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    var entry1 = Struct_FieldsEntry.decode(reader, reader.uint32());
                    if (entry1.value !== undefined) {
                        message.fields[entry1.key] = entry1.value;
                    }
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON: function (object) {
        return {
            fields: isObject(object.fields)
                ? Object.entries(object.fields).reduce(function (acc, _a) {
                    var key = _a[0], value = _a[1];
                    acc[key] = value;
                    return acc;
                }, {})
                : {},
        };
    },
    toJSON: function (message) {
        var obj = {};
        obj.fields = {};
        if (message.fields) {
            Object.entries(message.fields).forEach(function (_a) {
                var k = _a[0], v = _a[1];
                obj.fields[k] = v;
            });
        }
        return obj;
    },
    create: function (base) {
        return Struct.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseStruct();
        message.fields = Object.entries((_a = object.fields) !== null && _a !== void 0 ? _a : {}).reduce(function (acc, _a) {
            var key = _a[0], value = _a[1];
            if (value !== undefined) {
                acc[key] = value;
            }
            return acc;
        }, {});
        return message;
    },
    wrap: function (object) {
        var struct = createBaseStruct();
        if (object !== undefined) {
            Object.keys(object).forEach(function (key) {
                struct.fields[key] = object[key];
            });
        }
        return struct;
    },
    unwrap: function (message) {
        var object = {};
        Object.keys(message.fields).forEach(function (key) {
            object[key] = message.fields[key];
        });
        return object;
    },
};
function createBaseStruct_FieldsEntry() {
    return { key: "", value: undefined };
}
export var Struct_FieldsEntry = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.key !== "") {
            writer.uint32(10).string(message.key);
        }
        if (message.value !== undefined) {
            Value.encode(Value.wrap(message.value), writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseStruct_FieldsEntry();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.key = reader.string();
                    break;
                case 2:
                    message.value = Value.unwrap(Value.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON: function (object) {
        return { key: isSet(object.key) ? String(object.key) : "", value: isSet(object === null || object === void 0 ? void 0 : object.value) ? object.value : undefined };
    },
    toJSON: function (message) {
        var obj = {};
        message.key !== undefined && (obj.key = message.key);
        message.value !== undefined && (obj.value = message.value);
        return obj;
    },
    create: function (base) {
        return Struct_FieldsEntry.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var _a, _b;
        var message = createBaseStruct_FieldsEntry();
        message.key = (_a = object.key) !== null && _a !== void 0 ? _a : "";
        message.value = (_b = object.value) !== null && _b !== void 0 ? _b : undefined;
        return message;
    },
};
function createBaseValue() {
    return {
        null_value: undefined,
        number_value: undefined,
        string_value: undefined,
        bool_value: undefined,
        struct_value: undefined,
        list_value: undefined,
    };
}
export var Value = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.null_value !== undefined) {
            writer.uint32(8).int32(message.null_value);
        }
        if (message.number_value !== undefined) {
            writer.uint32(17).double(message.number_value);
        }
        if (message.string_value !== undefined) {
            writer.uint32(26).string(message.string_value);
        }
        if (message.bool_value !== undefined) {
            writer.uint32(32).bool(message.bool_value);
        }
        if (message.struct_value !== undefined) {
            Struct.encode(Struct.wrap(message.struct_value), writer.uint32(42).fork()).ldelim();
        }
        if (message.list_value !== undefined) {
            ListValue.encode(ListValue.wrap(message.list_value), writer.uint32(50).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseValue();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.null_value = reader.int32();
                    break;
                case 2:
                    message.number_value = reader.double();
                    break;
                case 3:
                    message.string_value = reader.string();
                    break;
                case 4:
                    message.bool_value = reader.bool();
                    break;
                case 5:
                    message.struct_value = Struct.unwrap(Struct.decode(reader, reader.uint32()));
                    break;
                case 6:
                    message.list_value = ListValue.unwrap(ListValue.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON: function (object) {
        return {
            null_value: isSet(object.null_value) ? nullValueFromJSON(object.null_value) : undefined,
            number_value: isSet(object.number_value) ? Number(object.number_value) : undefined,
            string_value: isSet(object.string_value) ? String(object.string_value) : undefined,
            bool_value: isSet(object.bool_value) ? Boolean(object.bool_value) : undefined,
            struct_value: isObject(object.struct_value) ? object.struct_value : undefined,
            list_value: Array.isArray(object.list_value) ? __spreadArray([], object.list_value, true) : undefined,
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.null_value !== undefined &&
            (obj.null_value = message.null_value !== undefined ? nullValueToJSON(message.null_value) : undefined);
        message.number_value !== undefined && (obj.number_value = message.number_value);
        message.string_value !== undefined && (obj.string_value = message.string_value);
        message.bool_value !== undefined && (obj.bool_value = message.bool_value);
        message.struct_value !== undefined && (obj.struct_value = message.struct_value);
        message.list_value !== undefined && (obj.list_value = message.list_value);
        return obj;
    },
    create: function (base) {
        return Value.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var _a, _b, _c, _d, _e, _f;
        var message = createBaseValue();
        message.null_value = (_a = object.null_value) !== null && _a !== void 0 ? _a : undefined;
        message.number_value = (_b = object.number_value) !== null && _b !== void 0 ? _b : undefined;
        message.string_value = (_c = object.string_value) !== null && _c !== void 0 ? _c : undefined;
        message.bool_value = (_d = object.bool_value) !== null && _d !== void 0 ? _d : undefined;
        message.struct_value = (_e = object.struct_value) !== null && _e !== void 0 ? _e : undefined;
        message.list_value = (_f = object.list_value) !== null && _f !== void 0 ? _f : undefined;
        return message;
    },
    wrap: function (value) {
        var result = createBaseValue();
        if (value === null) {
            result.null_value = NullValue.NULL_VALUE;
        }
        else if (typeof value === "boolean") {
            result.bool_value = value;
        }
        else if (typeof value === "number") {
            result.number_value = value;
        }
        else if (typeof value === "string") {
            result.string_value = value;
        }
        else if (Array.isArray(value)) {
            result.list_value = value;
        }
        else if (typeof value === "object") {
            result.struct_value = value;
        }
        else if (typeof value !== "undefined") {
            throw new Error("Unsupported any value type: " + typeof value);
        }
        return result;
    },
    unwrap: function (message) {
        if ((message === null || message === void 0 ? void 0 : message.string_value) !== undefined) {
            return message.string_value;
        }
        else if ((message === null || message === void 0 ? void 0 : message.number_value) !== undefined) {
            return message.number_value;
        }
        else if ((message === null || message === void 0 ? void 0 : message.bool_value) !== undefined) {
            return message.bool_value;
        }
        else if ((message === null || message === void 0 ? void 0 : message.struct_value) !== undefined) {
            return message.struct_value;
        }
        else if ((message === null || message === void 0 ? void 0 : message.list_value) !== undefined) {
            return message.list_value;
        }
        else if ((message === null || message === void 0 ? void 0 : message.null_value) !== undefined) {
            return null;
        }
        return undefined;
    },
};
function createBaseListValue() {
    return { values: [] };
}
export var ListValue = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        for (var _i = 0, _a = message.values; _i < _a.length; _i++) {
            var v = _a[_i];
            Value.encode(Value.wrap(v), writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseListValue();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.values.push(Value.unwrap(Value.decode(reader, reader.uint32())));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON: function (object) {
        return { values: Array.isArray(object === null || object === void 0 ? void 0 : object.values) ? __spreadArray([], object.values, true) : [] };
    },
    toJSON: function (message) {
        var obj = {};
        if (message.values) {
            obj.values = message.values.map(function (e) { return e; });
        }
        else {
            obj.values = [];
        }
        return obj;
    },
    create: function (base) {
        return ListValue.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseListValue();
        message.values = ((_a = object.values) === null || _a === void 0 ? void 0 : _a.map(function (e) { return e; })) || [];
        return message;
    },
    wrap: function (value) {
        var result = createBaseListValue();
        result.values = value !== null && value !== void 0 ? value : [];
        return result;
    },
    unwrap: function (message) {
        return message.values;
    },
};
function isObject(value) {
    return typeof value === "object" && value !== null;
}
function isSet(value) {
    return value !== null && value !== undefined;
}
//# sourceMappingURL=struct.js.map