/* eslint-disable */
import * as Long from "long";
import * as _m0 from "protobufjs/minimal";
export const protobufPackage = "google.protobuf";
function createBaseTimestamp() {
    return { seconds: 0, nanos: 0 };
}
export const Timestamp = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.seconds !== 0) {
            writer.uint32(8).int64(message.seconds);
        }
        if (message.nanos !== 0) {
            writer.uint32(16).int32(message.nanos);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseTimestamp();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.seconds = longToNumber(reader.int64());
                    break;
                case 2:
                    message.nanos = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            seconds: isSet(object.seconds) ? Number(object.seconds) : 0,
            nanos: isSet(object.nanos) ? Number(object.nanos) : 0,
        };
    },
    toJSON(message) {
        const obj = {};
        message.seconds !== undefined && (obj.seconds = Math.round(message.seconds));
        message.nanos !== undefined && (obj.nanos = Math.round(message.nanos));
        return obj;
    },
    create(base) {
        return Timestamp.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseTimestamp();
        message.seconds = object.seconds ?? 0;
        message.nanos = object.nanos ?? 0;
        return message;
    },
};
var tsProtoGlobalThis = (() => {
    if (typeof globalThis !== "undefined") {
        return globalThis;
    }
    if (typeof self !== "undefined") {
        return self;
    }
    if (typeof window !== "undefined") {
        return window;
    }
    if (typeof global !== "undefined") {
        return global;
    }
    throw "Unable to locate global object";
})();
function longToNumber(long) {
    if (long.gt(Number.MAX_SAFE_INTEGER)) {
        throw new tsProtoGlobalThis.Error("Value is larger than Number.MAX_SAFE_INTEGER");
    }
    return long.toNumber();
}
// If you get a compile-error about 'Constructor<Long> and ... have no overlap',
// add '--ts_proto_opt=esModuleInterop=true' as a flag when calling 'protoc'.
if (_m0.util.Long !== Long) {
    _m0.util.Long = Long;
    _m0.configure();
}
function isSet(value) {
    return value !== null && value !== undefined;
}
//# sourceMappingURL=timestamp.js.map