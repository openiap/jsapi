/* eslint-disable */
import * as _m0 from "protobufjs/minimal";
export const protobufPackage = "openiap";
function createBaseWatchRequest() {
    return { collectionname: "", paths: [] };
}
export const WatchRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.collectionname !== "") {
            writer.uint32(10).string(message.collectionname);
        }
        for (const v of message.paths) {
            writer.uint32(18).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseWatchRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.collectionname = reader.string();
                    break;
                case 2:
                    message.paths.push(reader.string());
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
            collectionname: isSet(object.collectionname) ? String(object.collectionname) : "",
            paths: Array.isArray(object?.paths) ? object.paths.map((e) => String(e)) : [],
        };
    },
    toJSON(message) {
        const obj = {};
        message.collectionname !== undefined && (obj.collectionname = message.collectionname);
        if (message.paths) {
            obj.paths = message.paths.map((e) => e);
        }
        else {
            obj.paths = [];
        }
        return obj;
    },
    create(base) {
        return WatchRequest.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseWatchRequest();
        message.collectionname = object.collectionname ?? "";
        message.paths = object.paths?.map((e) => e) || [];
        return message;
    },
};
function createBaseWatchResponse() {
    return { id: "" };
}
export const WatchResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.id !== "") {
            writer.uint32(10).string(message.id);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseWatchResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return { id: isSet(object.id) ? String(object.id) : "" };
    },
    toJSON(message) {
        const obj = {};
        message.id !== undefined && (obj.id = message.id);
        return obj;
    },
    create(base) {
        return WatchResponse.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseWatchResponse();
        message.id = object.id ?? "";
        return message;
    },
};
function createBaseWatchEvent() {
    return { id: "", operation: "", document: "" };
}
export const WatchEvent = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.id !== "") {
            writer.uint32(10).string(message.id);
        }
        if (message.operation !== "") {
            writer.uint32(18).string(message.operation);
        }
        if (message.document !== "") {
            writer.uint32(26).string(message.document);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseWatchEvent();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = reader.string();
                    break;
                case 2:
                    message.operation = reader.string();
                    break;
                case 3:
                    message.document = reader.string();
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
            id: isSet(object.id) ? String(object.id) : "",
            operation: isSet(object.operation) ? String(object.operation) : "",
            document: isSet(object.document) ? String(object.document) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.id !== undefined && (obj.id = message.id);
        message.operation !== undefined && (obj.operation = message.operation);
        message.document !== undefined && (obj.document = message.document);
        return obj;
    },
    create(base) {
        return WatchEvent.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseWatchEvent();
        message.id = object.id ?? "";
        message.operation = object.operation ?? "";
        message.document = object.document ?? "";
        return message;
    },
};
function createBaseUnWatchRequest() {
    return { id: "" };
}
export const UnWatchRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.id !== "") {
            writer.uint32(10).string(message.id);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseUnWatchRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return { id: isSet(object.id) ? String(object.id) : "" };
    },
    toJSON(message) {
        const obj = {};
        message.id !== undefined && (obj.id = message.id);
        return obj;
    },
    create(base) {
        return UnWatchRequest.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseUnWatchRequest();
        message.id = object.id ?? "";
        return message;
    },
};
function createBaseUnWatchResponse() {
    return {};
}
export const UnWatchResponse = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseUnWatchResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(_) {
        return {};
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    create(base) {
        return UnWatchResponse.fromPartial(base ?? {});
    },
    fromPartial(_) {
        const message = createBaseUnWatchResponse();
        return message;
    },
};
function isSet(value) {
    return value !== null && value !== undefined;
}
//# sourceMappingURL=watch.js.map