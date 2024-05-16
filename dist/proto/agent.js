/* eslint-disable */
import _m0 from "protobufjs/minimal.js";
export const protobufPackage = "openiap";
function createBaseStartAgentRequest() {
    return { agentid: "" };
}
export const StartAgentRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.agentid !== "") {
            writer.uint32(10).string(message.agentid);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseStartAgentRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
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
    fromJSON(object) {
        return { agentid: isSet(object.agentid) ? String(object.agentid) : "" };
    },
    toJSON(message) {
        const obj = {};
        message.agentid !== undefined && (obj.agentid = message.agentid);
        return obj;
    },
    create(base) {
        return StartAgentRequest.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseStartAgentRequest();
        message.agentid = object.agentid ?? "";
        return message;
    },
};
function createBaseStartAgentResponse() {
    return {};
}
export const StartAgentResponse = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseStartAgentResponse();
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
        return StartAgentResponse.fromPartial(base ?? {});
    },
    fromPartial(_) {
        const message = createBaseStartAgentResponse();
        return message;
    },
};
function createBaseStopAgentRequest() {
    return { agentid: "" };
}
export const StopAgentRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.agentid !== "") {
            writer.uint32(10).string(message.agentid);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseStopAgentRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
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
    fromJSON(object) {
        return { agentid: isSet(object.agentid) ? String(object.agentid) : "" };
    },
    toJSON(message) {
        const obj = {};
        message.agentid !== undefined && (obj.agentid = message.agentid);
        return obj;
    },
    create(base) {
        return StopAgentRequest.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseStopAgentRequest();
        message.agentid = object.agentid ?? "";
        return message;
    },
};
function createBaseStopAgentResponse() {
    return {};
}
export const StopAgentResponse = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseStopAgentResponse();
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
        return StopAgentResponse.fromPartial(base ?? {});
    },
    fromPartial(_) {
        const message = createBaseStopAgentResponse();
        return message;
    },
};
function createBaseGetAgentLogRequest() {
    return { agentid: "", podname: "" };
}
export const GetAgentLogRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.agentid !== "") {
            writer.uint32(10).string(message.agentid);
        }
        if (message.podname !== "") {
            writer.uint32(18).string(message.podname);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetAgentLogRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
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
    fromJSON(object) {
        return {
            agentid: isSet(object.agentid) ? String(object.agentid) : "",
            podname: isSet(object.podname) ? String(object.podname) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.agentid !== undefined && (obj.agentid = message.agentid);
        message.podname !== undefined && (obj.podname = message.podname);
        return obj;
    },
    create(base) {
        return GetAgentLogRequest.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseGetAgentLogRequest();
        message.agentid = object.agentid ?? "";
        message.podname = object.podname ?? "";
        return message;
    },
};
function createBaseGetAgentLogResponse() {
    return { result: "" };
}
export const GetAgentLogResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.result !== "") {
            writer.uint32(10).string(message.result);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetAgentLogResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
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
    fromJSON(object) {
        return { result: isSet(object.result) ? String(object.result) : "" };
    },
    toJSON(message) {
        const obj = {};
        message.result !== undefined && (obj.result = message.result);
        return obj;
    },
    create(base) {
        return GetAgentLogResponse.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseGetAgentLogResponse();
        message.result = object.result ?? "";
        return message;
    },
};
function createBaseGetAgentPodsRequest() {
    return { agentid: "", stats: false };
}
export const GetAgentPodsRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.agentid !== "") {
            writer.uint32(10).string(message.agentid);
        }
        if (message.stats === true) {
            writer.uint32(16).bool(message.stats);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetAgentPodsRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
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
    fromJSON(object) {
        return {
            agentid: isSet(object.agentid) ? String(object.agentid) : "",
            stats: isSet(object.stats) ? Boolean(object.stats) : false,
        };
    },
    toJSON(message) {
        const obj = {};
        message.agentid !== undefined && (obj.agentid = message.agentid);
        message.stats !== undefined && (obj.stats = message.stats);
        return obj;
    },
    create(base) {
        return GetAgentPodsRequest.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseGetAgentPodsRequest();
        message.agentid = object.agentid ?? "";
        message.stats = object.stats ?? false;
        return message;
    },
};
function createBaseGetAgentPodsResponse() {
    return { results: "" };
}
export const GetAgentPodsResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.results !== "") {
            writer.uint32(10).string(message.results);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetAgentPodsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
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
    fromJSON(object) {
        return { results: isSet(object.results) ? String(object.results) : "" };
    },
    toJSON(message) {
        const obj = {};
        message.results !== undefined && (obj.results = message.results);
        return obj;
    },
    create(base) {
        return GetAgentPodsResponse.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseGetAgentPodsResponse();
        message.results = object.results ?? "";
        return message;
    },
};
function createBaseDeleteAgentPodRequest() {
    return { agentid: "", podname: "" };
}
export const DeleteAgentPodRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.agentid !== "") {
            writer.uint32(10).string(message.agentid);
        }
        if (message.podname !== "") {
            writer.uint32(18).string(message.podname);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseDeleteAgentPodRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
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
    fromJSON(object) {
        return {
            agentid: isSet(object.agentid) ? String(object.agentid) : "",
            podname: isSet(object.podname) ? String(object.podname) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.agentid !== undefined && (obj.agentid = message.agentid);
        message.podname !== undefined && (obj.podname = message.podname);
        return obj;
    },
    create(base) {
        return DeleteAgentPodRequest.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseDeleteAgentPodRequest();
        message.agentid = object.agentid ?? "";
        message.podname = object.podname ?? "";
        return message;
    },
};
function createBaseDeleteAgentPodResponse() {
    return {};
}
export const DeleteAgentPodResponse = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseDeleteAgentPodResponse();
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
        return DeleteAgentPodResponse.fromPartial(base ?? {});
    },
    fromPartial(_) {
        const message = createBaseDeleteAgentPodResponse();
        return message;
    },
};
function createBaseDeleteAgentRequest() {
    return { agentid: "" };
}
export const DeleteAgentRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.agentid !== "") {
            writer.uint32(10).string(message.agentid);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseDeleteAgentRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
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
    fromJSON(object) {
        return { agentid: isSet(object.agentid) ? String(object.agentid) : "" };
    },
    toJSON(message) {
        const obj = {};
        message.agentid !== undefined && (obj.agentid = message.agentid);
        return obj;
    },
    create(base) {
        return DeleteAgentRequest.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseDeleteAgentRequest();
        message.agentid = object.agentid ?? "";
        return message;
    },
};
function createBaseDeleteAgentResponse() {
    return {};
}
export const DeleteAgentResponse = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseDeleteAgentResponse();
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
        return DeleteAgentResponse.fromPartial(base ?? {});
    },
    fromPartial(_) {
        const message = createBaseDeleteAgentResponse();
        return message;
    },
};
function isSet(value) {
    return value !== null && value !== undefined;
}
//# sourceMappingURL=agent.js.map