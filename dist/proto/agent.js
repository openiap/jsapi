/* eslint-disable */
import * as _m0 from "protobufjs/minimal";
export var protobufPackage = "openiap";
function createBaseStartAgentRequest() {
    return { agentid: "" };
}
export var StartAgentRequest = {
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
        return StartAgentRequest.fromPartial(base !== null && base !== void 0 ? base : {});
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
export var StartAgentResponse = {
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
        return StartAgentResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (_) {
        var message = createBaseStartAgentResponse();
        return message;
    },
};
function createBaseStopAgentRequest() {
    return { agentid: "" };
}
export var StopAgentRequest = {
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
        return StopAgentRequest.fromPartial(base !== null && base !== void 0 ? base : {});
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
export var StopAgentResponse = {
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
        return StopAgentResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (_) {
        var message = createBaseStopAgentResponse();
        return message;
    },
};
function createBaseGetAgentLogRequest() {
    return { agentid: "", podname: "" };
}
export var GetAgentLogRequest = {
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
        return GetAgentLogRequest.fromPartial(base !== null && base !== void 0 ? base : {});
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
export var GetAgentLogResponse = {
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
        return GetAgentLogResponse.fromPartial(base !== null && base !== void 0 ? base : {});
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
export var GetAgentPodsRequest = {
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
        return GetAgentPodsRequest.fromPartial(base !== null && base !== void 0 ? base : {});
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
export var GetAgentPodsResponse = {
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
        return GetAgentPodsResponse.fromPartial(base !== null && base !== void 0 ? base : {});
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
export var DeleteAgentPodRequest = {
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
        return DeleteAgentPodRequest.fromPartial(base !== null && base !== void 0 ? base : {});
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
export var DeleteAgentPodResponse = {
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
        return DeleteAgentPodResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (_) {
        var message = createBaseDeleteAgentPodResponse();
        return message;
    },
};
function createBaseDeleteAgentRequest() {
    return { agentid: "" };
}
export var DeleteAgentRequest = {
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
        return DeleteAgentRequest.fromPartial(base !== null && base !== void 0 ? base : {});
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
export var DeleteAgentResponse = {
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
        return DeleteAgentResponse.fromPartial(base !== null && base !== void 0 ? base : {});
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