"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteAgentResponse = exports.DeleteAgentRequest = exports.DeleteAgentPodResponse = exports.DeleteAgentPodRequest = exports.GetAgentPodsResponse = exports.GetAgentPodsRequest = exports.GetAgentLogResponse = exports.GetAgentLogRequest = exports.StopAgentResponse = exports.StopAgentRequest = exports.StartAgentResponse = exports.StartAgentRequest = exports.protobufPackage = void 0;
/* eslint-disable */
var _m0 = require("protobufjs/minimal");
exports.protobufPackage = "openiap";
function createBaseStartAgentRequest() {
    return { agentid: "" };
}
exports.StartAgentRequest = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.agentid !== "") {
            writer.uint32(10).string(message.agentid);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseStartAgentRequest();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.agentid = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON: function (object) {
        return { agentid: isSet(object.agentid) ? String(object.agentid) : "" };
    },
    toJSON: function (message) {
        var obj = {};
        message.agentid !== undefined && (obj.agentid = message.agentid);
        return obj;
    },
    create: function (base) {
        return exports.StartAgentRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseStartAgentRequest();
        message.agentid = (_a = object.agentid) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
function createBaseStartAgentResponse() {
    return {};
}
exports.StartAgentResponse = {
    encode: function (_, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseStartAgentResponse();
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
        return exports.StartAgentResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (_) {
        var message = createBaseStartAgentResponse();
        return message;
    },
};
function createBaseStopAgentRequest() {
    return { agentid: "" };
}
exports.StopAgentRequest = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.agentid !== "") {
            writer.uint32(10).string(message.agentid);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseStopAgentRequest();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.agentid = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON: function (object) {
        return { agentid: isSet(object.agentid) ? String(object.agentid) : "" };
    },
    toJSON: function (message) {
        var obj = {};
        message.agentid !== undefined && (obj.agentid = message.agentid);
        return obj;
    },
    create: function (base) {
        return exports.StopAgentRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseStopAgentRequest();
        message.agentid = (_a = object.agentid) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
function createBaseStopAgentResponse() {
    return {};
}
exports.StopAgentResponse = {
    encode: function (_, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseStopAgentResponse();
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
        return exports.StopAgentResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (_) {
        var message = createBaseStopAgentResponse();
        return message;
    },
};
function createBaseGetAgentLogRequest() {
    return { agentid: "", podname: "" };
}
exports.GetAgentLogRequest = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.agentid !== "") {
            writer.uint32(10).string(message.agentid);
        }
        if (message.podname !== "") {
            writer.uint32(18).string(message.podname);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseGetAgentLogRequest();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.agentid = reader.string();
                    break;
                case 2:
                    message.podname = reader.string();
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
            agentid: isSet(object.agentid) ? String(object.agentid) : "",
            podname: isSet(object.podname) ? String(object.podname) : "",
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.agentid !== undefined && (obj.agentid = message.agentid);
        message.podname !== undefined && (obj.podname = message.podname);
        return obj;
    },
    create: function (base) {
        return exports.GetAgentLogRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var _a, _b;
        var message = createBaseGetAgentLogRequest();
        message.agentid = (_a = object.agentid) !== null && _a !== void 0 ? _a : "";
        message.podname = (_b = object.podname) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
function createBaseGetAgentLogResponse() {
    return { result: "" };
}
exports.GetAgentLogResponse = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.result !== "") {
            writer.uint32(10).string(message.result);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseGetAgentLogResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.result = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON: function (object) {
        return { result: isSet(object.result) ? String(object.result) : "" };
    },
    toJSON: function (message) {
        var obj = {};
        message.result !== undefined && (obj.result = message.result);
        return obj;
    },
    create: function (base) {
        return exports.GetAgentLogResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseGetAgentLogResponse();
        message.result = (_a = object.result) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
function createBaseGetAgentPodsRequest() {
    return { agentid: "", stats: false };
}
exports.GetAgentPodsRequest = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.agentid !== "") {
            writer.uint32(10).string(message.agentid);
        }
        if (message.stats === true) {
            writer.uint32(16).bool(message.stats);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseGetAgentPodsRequest();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.agentid = reader.string();
                    break;
                case 2:
                    message.stats = reader.bool();
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
            agentid: isSet(object.agentid) ? String(object.agentid) : "",
            stats: isSet(object.stats) ? Boolean(object.stats) : false,
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.agentid !== undefined && (obj.agentid = message.agentid);
        message.stats !== undefined && (obj.stats = message.stats);
        return obj;
    },
    create: function (base) {
        return exports.GetAgentPodsRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var _a, _b;
        var message = createBaseGetAgentPodsRequest();
        message.agentid = (_a = object.agentid) !== null && _a !== void 0 ? _a : "";
        message.stats = (_b = object.stats) !== null && _b !== void 0 ? _b : false;
        return message;
    },
};
function createBaseGetAgentPodsResponse() {
    return { results: "" };
}
exports.GetAgentPodsResponse = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.results !== "") {
            writer.uint32(10).string(message.results);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseGetAgentPodsResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.results = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON: function (object) {
        return { results: isSet(object.results) ? String(object.results) : "" };
    },
    toJSON: function (message) {
        var obj = {};
        message.results !== undefined && (obj.results = message.results);
        return obj;
    },
    create: function (base) {
        return exports.GetAgentPodsResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseGetAgentPodsResponse();
        message.results = (_a = object.results) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
function createBaseDeleteAgentPodRequest() {
    return { agentid: "", podname: "" };
}
exports.DeleteAgentPodRequest = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.agentid !== "") {
            writer.uint32(10).string(message.agentid);
        }
        if (message.podname !== "") {
            writer.uint32(18).string(message.podname);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseDeleteAgentPodRequest();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.agentid = reader.string();
                    break;
                case 2:
                    message.podname = reader.string();
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
            agentid: isSet(object.agentid) ? String(object.agentid) : "",
            podname: isSet(object.podname) ? String(object.podname) : "",
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.agentid !== undefined && (obj.agentid = message.agentid);
        message.podname !== undefined && (obj.podname = message.podname);
        return obj;
    },
    create: function (base) {
        return exports.DeleteAgentPodRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var _a, _b;
        var message = createBaseDeleteAgentPodRequest();
        message.agentid = (_a = object.agentid) !== null && _a !== void 0 ? _a : "";
        message.podname = (_b = object.podname) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
function createBaseDeleteAgentPodResponse() {
    return {};
}
exports.DeleteAgentPodResponse = {
    encode: function (_, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseDeleteAgentPodResponse();
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
        return exports.DeleteAgentPodResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (_) {
        var message = createBaseDeleteAgentPodResponse();
        return message;
    },
};
function createBaseDeleteAgentRequest() {
    return { agentid: "" };
}
exports.DeleteAgentRequest = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.agentid !== "") {
            writer.uint32(10).string(message.agentid);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseDeleteAgentRequest();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.agentid = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON: function (object) {
        return { agentid: isSet(object.agentid) ? String(object.agentid) : "" };
    },
    toJSON: function (message) {
        var obj = {};
        message.agentid !== undefined && (obj.agentid = message.agentid);
        return obj;
    },
    create: function (base) {
        return exports.DeleteAgentRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseDeleteAgentRequest();
        message.agentid = (_a = object.agentid) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
function createBaseDeleteAgentResponse() {
    return {};
}
exports.DeleteAgentResponse = {
    encode: function (_, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseDeleteAgentResponse();
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
        return exports.DeleteAgentResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (_) {
        var message = createBaseDeleteAgentResponse();
        return message;
    },
};
function isSet(value) {
    return value !== null && value !== undefined;
}
//# sourceMappingURL=agent.js.map