"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UnWatchResponse = exports.UnWatchRequest = exports.WatchEvent = exports.WatchResponse = exports.WatchRequest = exports.protobufPackage = void 0;
/* eslint-disable */
var _m0 = require("protobufjs/minimal");
exports.protobufPackage = "openiap";
function createBaseWatchRequest() {
    return { collectionname: "", paths: [] };
}
exports.WatchRequest = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.collectionname !== "") {
            writer.uint32(10).string(message.collectionname);
        }
        for (var _i = 0, _a = message.paths; _i < _a.length; _i++) {
            var v = _a[_i];
            writer.uint32(18).string(v);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseWatchRequest();
        while (reader.pos < end) {
            var tag = reader.uint32();
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
    fromJSON: function (object) {
        return {
            collectionname: isSet(object.collectionname) ? String(object.collectionname) : "",
            paths: Array.isArray(object === null || object === void 0 ? void 0 : object.paths) ? object.paths.map(function (e) { return String(e); }) : [],
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.collectionname !== undefined && (obj.collectionname = message.collectionname);
        if (message.paths) {
            obj.paths = message.paths.map(function (e) { return e; });
        }
        else {
            obj.paths = [];
        }
        return obj;
    },
    create: function (base) {
        return exports.WatchRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var _a, _b;
        var message = createBaseWatchRequest();
        message.collectionname = (_a = object.collectionname) !== null && _a !== void 0 ? _a : "";
        message.paths = ((_b = object.paths) === null || _b === void 0 ? void 0 : _b.map(function (e) { return e; })) || [];
        return message;
    },
};
function createBaseWatchResponse() {
    return { id: "" };
}
exports.WatchResponse = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.id !== "") {
            writer.uint32(10).string(message.id);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseWatchResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
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
    fromJSON: function (object) {
        return { id: isSet(object.id) ? String(object.id) : "" };
    },
    toJSON: function (message) {
        var obj = {};
        message.id !== undefined && (obj.id = message.id);
        return obj;
    },
    create: function (base) {
        return exports.WatchResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseWatchResponse();
        message.id = (_a = object.id) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
function createBaseWatchEvent() {
    return { id: "", operation: "", document: "" };
}
exports.WatchEvent = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
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
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseWatchEvent();
        while (reader.pos < end) {
            var tag = reader.uint32();
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
    fromJSON: function (object) {
        return {
            id: isSet(object.id) ? String(object.id) : "",
            operation: isSet(object.operation) ? String(object.operation) : "",
            document: isSet(object.document) ? String(object.document) : "",
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.id !== undefined && (obj.id = message.id);
        message.operation !== undefined && (obj.operation = message.operation);
        message.document !== undefined && (obj.document = message.document);
        return obj;
    },
    create: function (base) {
        return exports.WatchEvent.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var _a, _b, _c;
        var message = createBaseWatchEvent();
        message.id = (_a = object.id) !== null && _a !== void 0 ? _a : "";
        message.operation = (_b = object.operation) !== null && _b !== void 0 ? _b : "";
        message.document = (_c = object.document) !== null && _c !== void 0 ? _c : "";
        return message;
    },
};
function createBaseUnWatchRequest() {
    return { id: "" };
}
exports.UnWatchRequest = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.id !== "") {
            writer.uint32(10).string(message.id);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseUnWatchRequest();
        while (reader.pos < end) {
            var tag = reader.uint32();
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
    fromJSON: function (object) {
        return { id: isSet(object.id) ? String(object.id) : "" };
    },
    toJSON: function (message) {
        var obj = {};
        message.id !== undefined && (obj.id = message.id);
        return obj;
    },
    create: function (base) {
        return exports.UnWatchRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseUnWatchRequest();
        message.id = (_a = object.id) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
function createBaseUnWatchResponse() {
    return {};
}
exports.UnWatchResponse = {
    encode: function (_, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseUnWatchResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON: function (_) {
        return {};
    },
    toJSON: function (_) {
        var obj = {};
        return obj;
    },
    create: function (base) {
        return exports.UnWatchResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (_) {
        var message = createBaseUnWatchResponse();
        return message;
    },
};
function isSet(value) {
    return value !== null && value !== undefined;
}
//# sourceMappingURL=watch.js.map