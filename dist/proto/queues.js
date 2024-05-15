/* eslint-disable */
import * as _m0 from "protobufjs/minimal";
export const protobufPackage = "openiap";
function createBaseRegisterQueueRequest() {
    return { queuename: "" };
}
export const RegisterQueueRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.queuename !== "") {
            writer.uint32(10).string(message.queuename);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseRegisterQueueRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.queuename = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return { queuename: isSet(object.queuename) ? String(object.queuename) : "" };
    },
    toJSON(message) {
        const obj = {};
        message.queuename !== undefined && (obj.queuename = message.queuename);
        return obj;
    },
    create(base) {
        return RegisterQueueRequest.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseRegisterQueueRequest();
        message.queuename = object.queuename ?? "";
        return message;
    },
};
function createBaseRegisterQueueResponse() {
    return { queuename: "" };
}
export const RegisterQueueResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.queuename !== "") {
            writer.uint32(10).string(message.queuename);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseRegisterQueueResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.queuename = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return { queuename: isSet(object.queuename) ? String(object.queuename) : "" };
    },
    toJSON(message) {
        const obj = {};
        message.queuename !== undefined && (obj.queuename = message.queuename);
        return obj;
    },
    create(base) {
        return RegisterQueueResponse.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseRegisterQueueResponse();
        message.queuename = object.queuename ?? "";
        return message;
    },
};
function createBaseRegisterExchangeRequest() {
    return { exchangename: "", algorithm: "", routingkey: "", addqueue: false };
}
export const RegisterExchangeRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.exchangename !== "") {
            writer.uint32(10).string(message.exchangename);
        }
        if (message.algorithm !== "") {
            writer.uint32(18).string(message.algorithm);
        }
        if (message.routingkey !== "") {
            writer.uint32(26).string(message.routingkey);
        }
        if (message.addqueue === true) {
            writer.uint32(32).bool(message.addqueue);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseRegisterExchangeRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.exchangename = reader.string();
                    break;
                case 2:
                    message.algorithm = reader.string();
                    break;
                case 3:
                    message.routingkey = reader.string();
                    break;
                case 4:
                    message.addqueue = reader.bool();
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
            exchangename: isSet(object.exchangename) ? String(object.exchangename) : "",
            algorithm: isSet(object.algorithm) ? String(object.algorithm) : "",
            routingkey: isSet(object.routingkey) ? String(object.routingkey) : "",
            addqueue: isSet(object.addqueue) ? Boolean(object.addqueue) : false,
        };
    },
    toJSON(message) {
        const obj = {};
        message.exchangename !== undefined && (obj.exchangename = message.exchangename);
        message.algorithm !== undefined && (obj.algorithm = message.algorithm);
        message.routingkey !== undefined && (obj.routingkey = message.routingkey);
        message.addqueue !== undefined && (obj.addqueue = message.addqueue);
        return obj;
    },
    create(base) {
        return RegisterExchangeRequest.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseRegisterExchangeRequest();
        message.exchangename = object.exchangename ?? "";
        message.algorithm = object.algorithm ?? "";
        message.routingkey = object.routingkey ?? "";
        message.addqueue = object.addqueue ?? false;
        return message;
    },
};
function createBaseRegisterExchangeResponse() {
    return { queuename: "" };
}
export const RegisterExchangeResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.queuename !== "") {
            writer.uint32(10).string(message.queuename);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseRegisterExchangeResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.queuename = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return { queuename: isSet(object.queuename) ? String(object.queuename) : "" };
    },
    toJSON(message) {
        const obj = {};
        message.queuename !== undefined && (obj.queuename = message.queuename);
        return obj;
    },
    create(base) {
        return RegisterExchangeResponse.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseRegisterExchangeResponse();
        message.queuename = object.queuename ?? "";
        return message;
    },
};
function createBaseQueueMessageRequest() {
    return {
        queuename: "",
        correlationId: "",
        replyto: "",
        routingkey: "",
        exchangename: "",
        data: "",
        striptoken: false,
        expiration: 0,
    };
}
export const QueueMessageRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.queuename !== "") {
            writer.uint32(10).string(message.queuename);
        }
        if (message.correlationId !== "") {
            writer.uint32(18).string(message.correlationId);
        }
        if (message.replyto !== "") {
            writer.uint32(26).string(message.replyto);
        }
        if (message.routingkey !== "") {
            writer.uint32(34).string(message.routingkey);
        }
        if (message.exchangename !== "") {
            writer.uint32(42).string(message.exchangename);
        }
        if (message.data !== "") {
            writer.uint32(50).string(message.data);
        }
        if (message.striptoken === true) {
            writer.uint32(56).bool(message.striptoken);
        }
        if (message.expiration !== 0) {
            writer.uint32(64).int32(message.expiration);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueueMessageRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.queuename = reader.string();
                    break;
                case 2:
                    message.correlationId = reader.string();
                    break;
                case 3:
                    message.replyto = reader.string();
                    break;
                case 4:
                    message.routingkey = reader.string();
                    break;
                case 5:
                    message.exchangename = reader.string();
                    break;
                case 6:
                    message.data = reader.string();
                    break;
                case 7:
                    message.striptoken = reader.bool();
                    break;
                case 8:
                    message.expiration = reader.int32();
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
            queuename: isSet(object.queuename) ? String(object.queuename) : "",
            correlationId: isSet(object.correlationId) ? String(object.correlationId) : "",
            replyto: isSet(object.replyto) ? String(object.replyto) : "",
            routingkey: isSet(object.routingkey) ? String(object.routingkey) : "",
            exchangename: isSet(object.exchangename) ? String(object.exchangename) : "",
            data: isSet(object.data) ? String(object.data) : "",
            striptoken: isSet(object.striptoken) ? Boolean(object.striptoken) : false,
            expiration: isSet(object.expiration) ? Number(object.expiration) : 0,
        };
    },
    toJSON(message) {
        const obj = {};
        message.queuename !== undefined && (obj.queuename = message.queuename);
        message.correlationId !== undefined && (obj.correlationId = message.correlationId);
        message.replyto !== undefined && (obj.replyto = message.replyto);
        message.routingkey !== undefined && (obj.routingkey = message.routingkey);
        message.exchangename !== undefined && (obj.exchangename = message.exchangename);
        message.data !== undefined && (obj.data = message.data);
        message.striptoken !== undefined && (obj.striptoken = message.striptoken);
        message.expiration !== undefined && (obj.expiration = Math.round(message.expiration));
        return obj;
    },
    create(base) {
        return QueueMessageRequest.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseQueueMessageRequest();
        message.queuename = object.queuename ?? "";
        message.correlationId = object.correlationId ?? "";
        message.replyto = object.replyto ?? "";
        message.routingkey = object.routingkey ?? "";
        message.exchangename = object.exchangename ?? "";
        message.data = object.data ?? "";
        message.striptoken = object.striptoken ?? false;
        message.expiration = object.expiration ?? 0;
        return message;
    },
};
function createBaseQueueMessageResponse() {
    return { queuename: "", correlationId: "", replyto: "", routingkey: "", exchangename: "", data: "" };
}
export const QueueMessageResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.queuename !== "") {
            writer.uint32(10).string(message.queuename);
        }
        if (message.correlationId !== "") {
            writer.uint32(18).string(message.correlationId);
        }
        if (message.replyto !== "") {
            writer.uint32(26).string(message.replyto);
        }
        if (message.routingkey !== "") {
            writer.uint32(34).string(message.routingkey);
        }
        if (message.exchangename !== "") {
            writer.uint32(42).string(message.exchangename);
        }
        if (message.data !== "") {
            writer.uint32(50).string(message.data);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueueMessageResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.queuename = reader.string();
                    break;
                case 2:
                    message.correlationId = reader.string();
                    break;
                case 3:
                    message.replyto = reader.string();
                    break;
                case 4:
                    message.routingkey = reader.string();
                    break;
                case 5:
                    message.exchangename = reader.string();
                    break;
                case 6:
                    message.data = reader.string();
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
            queuename: isSet(object.queuename) ? String(object.queuename) : "",
            correlationId: isSet(object.correlationId) ? String(object.correlationId) : "",
            replyto: isSet(object.replyto) ? String(object.replyto) : "",
            routingkey: isSet(object.routingkey) ? String(object.routingkey) : "",
            exchangename: isSet(object.exchangename) ? String(object.exchangename) : "",
            data: isSet(object.data) ? String(object.data) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.queuename !== undefined && (obj.queuename = message.queuename);
        message.correlationId !== undefined && (obj.correlationId = message.correlationId);
        message.replyto !== undefined && (obj.replyto = message.replyto);
        message.routingkey !== undefined && (obj.routingkey = message.routingkey);
        message.exchangename !== undefined && (obj.exchangename = message.exchangename);
        message.data !== undefined && (obj.data = message.data);
        return obj;
    },
    create(base) {
        return QueueMessageResponse.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseQueueMessageResponse();
        message.queuename = object.queuename ?? "";
        message.correlationId = object.correlationId ?? "";
        message.replyto = object.replyto ?? "";
        message.routingkey = object.routingkey ?? "";
        message.exchangename = object.exchangename ?? "";
        message.data = object.data ?? "";
        return message;
    },
};
function createBaseQueueEvent() {
    return { queuename: "", correlationId: "", replyto: "", routingkey: "", exchangename: "", data: "" };
}
export const QueueEvent = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.queuename !== "") {
            writer.uint32(10).string(message.queuename);
        }
        if (message.correlationId !== "") {
            writer.uint32(18).string(message.correlationId);
        }
        if (message.replyto !== "") {
            writer.uint32(26).string(message.replyto);
        }
        if (message.routingkey !== "") {
            writer.uint32(34).string(message.routingkey);
        }
        if (message.exchangename !== "") {
            writer.uint32(42).string(message.exchangename);
        }
        if (message.data !== "") {
            writer.uint32(50).string(message.data);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueueEvent();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.queuename = reader.string();
                    break;
                case 2:
                    message.correlationId = reader.string();
                    break;
                case 3:
                    message.replyto = reader.string();
                    break;
                case 4:
                    message.routingkey = reader.string();
                    break;
                case 5:
                    message.exchangename = reader.string();
                    break;
                case 6:
                    message.data = reader.string();
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
            queuename: isSet(object.queuename) ? String(object.queuename) : "",
            correlationId: isSet(object.correlationId) ? String(object.correlationId) : "",
            replyto: isSet(object.replyto) ? String(object.replyto) : "",
            routingkey: isSet(object.routingkey) ? String(object.routingkey) : "",
            exchangename: isSet(object.exchangename) ? String(object.exchangename) : "",
            data: isSet(object.data) ? String(object.data) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.queuename !== undefined && (obj.queuename = message.queuename);
        message.correlationId !== undefined && (obj.correlationId = message.correlationId);
        message.replyto !== undefined && (obj.replyto = message.replyto);
        message.routingkey !== undefined && (obj.routingkey = message.routingkey);
        message.exchangename !== undefined && (obj.exchangename = message.exchangename);
        message.data !== undefined && (obj.data = message.data);
        return obj;
    },
    create(base) {
        return QueueEvent.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseQueueEvent();
        message.queuename = object.queuename ?? "";
        message.correlationId = object.correlationId ?? "";
        message.replyto = object.replyto ?? "";
        message.routingkey = object.routingkey ?? "";
        message.exchangename = object.exchangename ?? "";
        message.data = object.data ?? "";
        return message;
    },
};
function createBaseUnRegisterQueueRequest() {
    return { queuename: "" };
}
export const UnRegisterQueueRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.queuename !== "") {
            writer.uint32(10).string(message.queuename);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseUnRegisterQueueRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.queuename = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return { queuename: isSet(object.queuename) ? String(object.queuename) : "" };
    },
    toJSON(message) {
        const obj = {};
        message.queuename !== undefined && (obj.queuename = message.queuename);
        return obj;
    },
    create(base) {
        return UnRegisterQueueRequest.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseUnRegisterQueueRequest();
        message.queuename = object.queuename ?? "";
        return message;
    },
};
function createBaseUnRegisterQueueResponse() {
    return {};
}
export const UnRegisterQueueResponse = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseUnRegisterQueueResponse();
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
        return UnRegisterQueueResponse.fromPartial(base ?? {});
    },
    fromPartial(_) {
        const message = createBaseUnRegisterQueueResponse();
        return message;
    },
};
function createBaseCreateWorkflowInstanceRequest() {
    return { targetid: "", workflowid: "", name: "", resultqueue: "", data: "", initialrun: false };
}
export const CreateWorkflowInstanceRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.targetid !== "") {
            writer.uint32(10).string(message.targetid);
        }
        if (message.workflowid !== "") {
            writer.uint32(18).string(message.workflowid);
        }
        if (message.name !== "") {
            writer.uint32(26).string(message.name);
        }
        if (message.resultqueue !== "") {
            writer.uint32(34).string(message.resultqueue);
        }
        if (message.data !== "") {
            writer.uint32(42).string(message.data);
        }
        if (message.initialrun === true) {
            writer.uint32(48).bool(message.initialrun);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCreateWorkflowInstanceRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.targetid = reader.string();
                    break;
                case 2:
                    message.workflowid = reader.string();
                    break;
                case 3:
                    message.name = reader.string();
                    break;
                case 4:
                    message.resultqueue = reader.string();
                    break;
                case 5:
                    message.data = reader.string();
                    break;
                case 6:
                    message.initialrun = reader.bool();
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
            targetid: isSet(object.targetid) ? String(object.targetid) : "",
            workflowid: isSet(object.workflowid) ? String(object.workflowid) : "",
            name: isSet(object.name) ? String(object.name) : "",
            resultqueue: isSet(object.resultqueue) ? String(object.resultqueue) : "",
            data: isSet(object.data) ? String(object.data) : "",
            initialrun: isSet(object.initialrun) ? Boolean(object.initialrun) : false,
        };
    },
    toJSON(message) {
        const obj = {};
        message.targetid !== undefined && (obj.targetid = message.targetid);
        message.workflowid !== undefined && (obj.workflowid = message.workflowid);
        message.name !== undefined && (obj.name = message.name);
        message.resultqueue !== undefined && (obj.resultqueue = message.resultqueue);
        message.data !== undefined && (obj.data = message.data);
        message.initialrun !== undefined && (obj.initialrun = message.initialrun);
        return obj;
    },
    create(base) {
        return CreateWorkflowInstanceRequest.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseCreateWorkflowInstanceRequest();
        message.targetid = object.targetid ?? "";
        message.workflowid = object.workflowid ?? "";
        message.name = object.name ?? "";
        message.resultqueue = object.resultqueue ?? "";
        message.data = object.data ?? "";
        message.initialrun = object.initialrun ?? false;
        return message;
    },
};
function createBaseCreateWorkflowInstanceResponse() {
    return { instanceid: "" };
}
export const CreateWorkflowInstanceResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.instanceid !== "") {
            writer.uint32(10).string(message.instanceid);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCreateWorkflowInstanceResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.instanceid = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return { instanceid: isSet(object.instanceid) ? String(object.instanceid) : "" };
    },
    toJSON(message) {
        const obj = {};
        message.instanceid !== undefined && (obj.instanceid = message.instanceid);
        return obj;
    },
    create(base) {
        return CreateWorkflowInstanceResponse.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseCreateWorkflowInstanceResponse();
        message.instanceid = object.instanceid ?? "";
        return message;
    },
};
function createBaseInvokeOpenRPARequest() {
    return { robotid: "", workflowid: "", rpc: false, payload: "" };
}
export const InvokeOpenRPARequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.robotid !== "") {
            writer.uint32(10).string(message.robotid);
        }
        if (message.workflowid !== "") {
            writer.uint32(18).string(message.workflowid);
        }
        if (message.rpc === true) {
            writer.uint32(24).bool(message.rpc);
        }
        if (message.payload !== "") {
            writer.uint32(34).string(message.payload);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseInvokeOpenRPARequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.robotid = reader.string();
                    break;
                case 2:
                    message.workflowid = reader.string();
                    break;
                case 3:
                    message.rpc = reader.bool();
                    break;
                case 4:
                    message.payload = reader.string();
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
            robotid: isSet(object.robotid) ? String(object.robotid) : "",
            workflowid: isSet(object.workflowid) ? String(object.workflowid) : "",
            rpc: isSet(object.rpc) ? Boolean(object.rpc) : false,
            payload: isSet(object.payload) ? String(object.payload) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.robotid !== undefined && (obj.robotid = message.robotid);
        message.workflowid !== undefined && (obj.workflowid = message.workflowid);
        message.rpc !== undefined && (obj.rpc = message.rpc);
        message.payload !== undefined && (obj.payload = message.payload);
        return obj;
    },
    create(base) {
        return InvokeOpenRPARequest.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseInvokeOpenRPARequest();
        message.robotid = object.robotid ?? "";
        message.workflowid = object.workflowid ?? "";
        message.rpc = object.rpc ?? false;
        message.payload = object.payload ?? "";
        return message;
    },
};
function createBaseInvokeOpenRPAResponse() {
    return { payload: "" };
}
export const InvokeOpenRPAResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.payload !== "") {
            writer.uint32(10).string(message.payload);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseInvokeOpenRPAResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.payload = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return { payload: isSet(object.payload) ? String(object.payload) : "" };
    },
    toJSON(message) {
        const obj = {};
        message.payload !== undefined && (obj.payload = message.payload);
        return obj;
    },
    create(base) {
        return InvokeOpenRPAResponse.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseInvokeOpenRPAResponse();
        message.payload = object.payload ?? "";
        return message;
    },
};
function isSet(value) {
    return value !== null && value !== undefined;
}
//# sourceMappingURL=queues.js.map