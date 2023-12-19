/* eslint-disable */
import * as _m0 from "protobufjs/minimal";
export var protobufPackage = "openiap";
function createBaseRegisterQueueRequest() {
    return { queuename: "" };
}
export var RegisterQueueRequest = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.queuename !== "") {
            writer.uint32(10).string(message.queuename);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseRegisterQueueRequest();
        while (reader.pos < end) {
            var tag = reader.uint32();
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
    fromJSON: function (object) {
        return { queuename: isSet(object.queuename) ? String(object.queuename) : "" };
    },
    toJSON: function (message) {
        var obj = {};
        message.queuename !== undefined && (obj.queuename = message.queuename);
        return obj;
    },
    create: function (base) {
        return RegisterQueueRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseRegisterQueueRequest();
        message.queuename = (_a = object.queuename) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
function createBaseRegisterQueueResponse() {
    return { queuename: "" };
}
export var RegisterQueueResponse = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.queuename !== "") {
            writer.uint32(10).string(message.queuename);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseRegisterQueueResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
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
    fromJSON: function (object) {
        return { queuename: isSet(object.queuename) ? String(object.queuename) : "" };
    },
    toJSON: function (message) {
        var obj = {};
        message.queuename !== undefined && (obj.queuename = message.queuename);
        return obj;
    },
    create: function (base) {
        return RegisterQueueResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseRegisterQueueResponse();
        message.queuename = (_a = object.queuename) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
function createBaseRegisterExchangeRequest() {
    return { exchangename: "", algorithm: "", routingkey: "", addqueue: false };
}
export var RegisterExchangeRequest = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
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
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseRegisterExchangeRequest();
        while (reader.pos < end) {
            var tag = reader.uint32();
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
    fromJSON: function (object) {
        return {
            exchangename: isSet(object.exchangename) ? String(object.exchangename) : "",
            algorithm: isSet(object.algorithm) ? String(object.algorithm) : "",
            routingkey: isSet(object.routingkey) ? String(object.routingkey) : "",
            addqueue: isSet(object.addqueue) ? Boolean(object.addqueue) : false,
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.exchangename !== undefined && (obj.exchangename = message.exchangename);
        message.algorithm !== undefined && (obj.algorithm = message.algorithm);
        message.routingkey !== undefined && (obj.routingkey = message.routingkey);
        message.addqueue !== undefined && (obj.addqueue = message.addqueue);
        return obj;
    },
    create: function (base) {
        return RegisterExchangeRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var _a, _b, _c, _d;
        var message = createBaseRegisterExchangeRequest();
        message.exchangename = (_a = object.exchangename) !== null && _a !== void 0 ? _a : "";
        message.algorithm = (_b = object.algorithm) !== null && _b !== void 0 ? _b : "";
        message.routingkey = (_c = object.routingkey) !== null && _c !== void 0 ? _c : "";
        message.addqueue = (_d = object.addqueue) !== null && _d !== void 0 ? _d : false;
        return message;
    },
};
function createBaseRegisterExchangeResponse() {
    return { queuename: "" };
}
export var RegisterExchangeResponse = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.queuename !== "") {
            writer.uint32(10).string(message.queuename);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseRegisterExchangeResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
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
    fromJSON: function (object) {
        return { queuename: isSet(object.queuename) ? String(object.queuename) : "" };
    },
    toJSON: function (message) {
        var obj = {};
        message.queuename !== undefined && (obj.queuename = message.queuename);
        return obj;
    },
    create: function (base) {
        return RegisterExchangeResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseRegisterExchangeResponse();
        message.queuename = (_a = object.queuename) !== null && _a !== void 0 ? _a : "";
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
export var QueueMessageRequest = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
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
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseQueueMessageRequest();
        while (reader.pos < end) {
            var tag = reader.uint32();
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
    fromJSON: function (object) {
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
    toJSON: function (message) {
        var obj = {};
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
    create: function (base) {
        return QueueMessageRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var _a, _b, _c, _d, _e, _f, _g, _h;
        var message = createBaseQueueMessageRequest();
        message.queuename = (_a = object.queuename) !== null && _a !== void 0 ? _a : "";
        message.correlationId = (_b = object.correlationId) !== null && _b !== void 0 ? _b : "";
        message.replyto = (_c = object.replyto) !== null && _c !== void 0 ? _c : "";
        message.routingkey = (_d = object.routingkey) !== null && _d !== void 0 ? _d : "";
        message.exchangename = (_e = object.exchangename) !== null && _e !== void 0 ? _e : "";
        message.data = (_f = object.data) !== null && _f !== void 0 ? _f : "";
        message.striptoken = (_g = object.striptoken) !== null && _g !== void 0 ? _g : false;
        message.expiration = (_h = object.expiration) !== null && _h !== void 0 ? _h : 0;
        return message;
    },
};
function createBaseQueueMessageResponse() {
    return { queuename: "", correlationId: "", replyto: "", routingkey: "", exchangename: "", data: "" };
}
export var QueueMessageResponse = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
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
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseQueueMessageResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
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
    fromJSON: function (object) {
        return {
            queuename: isSet(object.queuename) ? String(object.queuename) : "",
            correlationId: isSet(object.correlationId) ? String(object.correlationId) : "",
            replyto: isSet(object.replyto) ? String(object.replyto) : "",
            routingkey: isSet(object.routingkey) ? String(object.routingkey) : "",
            exchangename: isSet(object.exchangename) ? String(object.exchangename) : "",
            data: isSet(object.data) ? String(object.data) : "",
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.queuename !== undefined && (obj.queuename = message.queuename);
        message.correlationId !== undefined && (obj.correlationId = message.correlationId);
        message.replyto !== undefined && (obj.replyto = message.replyto);
        message.routingkey !== undefined && (obj.routingkey = message.routingkey);
        message.exchangename !== undefined && (obj.exchangename = message.exchangename);
        message.data !== undefined && (obj.data = message.data);
        return obj;
    },
    create: function (base) {
        return QueueMessageResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var _a, _b, _c, _d, _e, _f;
        var message = createBaseQueueMessageResponse();
        message.queuename = (_a = object.queuename) !== null && _a !== void 0 ? _a : "";
        message.correlationId = (_b = object.correlationId) !== null && _b !== void 0 ? _b : "";
        message.replyto = (_c = object.replyto) !== null && _c !== void 0 ? _c : "";
        message.routingkey = (_d = object.routingkey) !== null && _d !== void 0 ? _d : "";
        message.exchangename = (_e = object.exchangename) !== null && _e !== void 0 ? _e : "";
        message.data = (_f = object.data) !== null && _f !== void 0 ? _f : "";
        return message;
    },
};
function createBaseQueueEvent() {
    return { queuename: "", correlationId: "", replyto: "", routingkey: "", exchangename: "", data: "" };
}
export var QueueEvent = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
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
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseQueueEvent();
        while (reader.pos < end) {
            var tag = reader.uint32();
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
    fromJSON: function (object) {
        return {
            queuename: isSet(object.queuename) ? String(object.queuename) : "",
            correlationId: isSet(object.correlationId) ? String(object.correlationId) : "",
            replyto: isSet(object.replyto) ? String(object.replyto) : "",
            routingkey: isSet(object.routingkey) ? String(object.routingkey) : "",
            exchangename: isSet(object.exchangename) ? String(object.exchangename) : "",
            data: isSet(object.data) ? String(object.data) : "",
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.queuename !== undefined && (obj.queuename = message.queuename);
        message.correlationId !== undefined && (obj.correlationId = message.correlationId);
        message.replyto !== undefined && (obj.replyto = message.replyto);
        message.routingkey !== undefined && (obj.routingkey = message.routingkey);
        message.exchangename !== undefined && (obj.exchangename = message.exchangename);
        message.data !== undefined && (obj.data = message.data);
        return obj;
    },
    create: function (base) {
        return QueueEvent.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var _a, _b, _c, _d, _e, _f;
        var message = createBaseQueueEvent();
        message.queuename = (_a = object.queuename) !== null && _a !== void 0 ? _a : "";
        message.correlationId = (_b = object.correlationId) !== null && _b !== void 0 ? _b : "";
        message.replyto = (_c = object.replyto) !== null && _c !== void 0 ? _c : "";
        message.routingkey = (_d = object.routingkey) !== null && _d !== void 0 ? _d : "";
        message.exchangename = (_e = object.exchangename) !== null && _e !== void 0 ? _e : "";
        message.data = (_f = object.data) !== null && _f !== void 0 ? _f : "";
        return message;
    },
};
function createBaseUnRegisterQueueRequest() {
    return { queuename: "" };
}
export var UnRegisterQueueRequest = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.queuename !== "") {
            writer.uint32(10).string(message.queuename);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseUnRegisterQueueRequest();
        while (reader.pos < end) {
            var tag = reader.uint32();
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
    fromJSON: function (object) {
        return { queuename: isSet(object.queuename) ? String(object.queuename) : "" };
    },
    toJSON: function (message) {
        var obj = {};
        message.queuename !== undefined && (obj.queuename = message.queuename);
        return obj;
    },
    create: function (base) {
        return UnRegisterQueueRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseUnRegisterQueueRequest();
        message.queuename = (_a = object.queuename) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
function createBaseUnRegisterQueueResponse() {
    return {};
}
export var UnRegisterQueueResponse = {
    encode: function (_, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseUnRegisterQueueResponse();
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
        return UnRegisterQueueResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (_) {
        var message = createBaseUnRegisterQueueResponse();
        return message;
    },
};
function createBaseCreateWorkflowInstanceRequest() {
    return { targetid: "", workflowid: "", name: "", resultqueue: "", data: "", initialrun: false };
}
export var CreateWorkflowInstanceRequest = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
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
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseCreateWorkflowInstanceRequest();
        while (reader.pos < end) {
            var tag = reader.uint32();
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
    fromJSON: function (object) {
        return {
            targetid: isSet(object.targetid) ? String(object.targetid) : "",
            workflowid: isSet(object.workflowid) ? String(object.workflowid) : "",
            name: isSet(object.name) ? String(object.name) : "",
            resultqueue: isSet(object.resultqueue) ? String(object.resultqueue) : "",
            data: isSet(object.data) ? String(object.data) : "",
            initialrun: isSet(object.initialrun) ? Boolean(object.initialrun) : false,
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.targetid !== undefined && (obj.targetid = message.targetid);
        message.workflowid !== undefined && (obj.workflowid = message.workflowid);
        message.name !== undefined && (obj.name = message.name);
        message.resultqueue !== undefined && (obj.resultqueue = message.resultqueue);
        message.data !== undefined && (obj.data = message.data);
        message.initialrun !== undefined && (obj.initialrun = message.initialrun);
        return obj;
    },
    create: function (base) {
        return CreateWorkflowInstanceRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var _a, _b, _c, _d, _e, _f;
        var message = createBaseCreateWorkflowInstanceRequest();
        message.targetid = (_a = object.targetid) !== null && _a !== void 0 ? _a : "";
        message.workflowid = (_b = object.workflowid) !== null && _b !== void 0 ? _b : "";
        message.name = (_c = object.name) !== null && _c !== void 0 ? _c : "";
        message.resultqueue = (_d = object.resultqueue) !== null && _d !== void 0 ? _d : "";
        message.data = (_e = object.data) !== null && _e !== void 0 ? _e : "";
        message.initialrun = (_f = object.initialrun) !== null && _f !== void 0 ? _f : false;
        return message;
    },
};
function createBaseCreateWorkflowInstanceResponse() {
    return { instanceid: "" };
}
export var CreateWorkflowInstanceResponse = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.instanceid !== "") {
            writer.uint32(10).string(message.instanceid);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseCreateWorkflowInstanceResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
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
    fromJSON: function (object) {
        return { instanceid: isSet(object.instanceid) ? String(object.instanceid) : "" };
    },
    toJSON: function (message) {
        var obj = {};
        message.instanceid !== undefined && (obj.instanceid = message.instanceid);
        return obj;
    },
    create: function (base) {
        return CreateWorkflowInstanceResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseCreateWorkflowInstanceResponse();
        message.instanceid = (_a = object.instanceid) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
function createBaseInvokeOpenRPARequest() {
    return { robotid: "", workflowid: "", rpc: false, payload: "" };
}
export var InvokeOpenRPARequest = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
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
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseInvokeOpenRPARequest();
        while (reader.pos < end) {
            var tag = reader.uint32();
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
    fromJSON: function (object) {
        return {
            robotid: isSet(object.robotid) ? String(object.robotid) : "",
            workflowid: isSet(object.workflowid) ? String(object.workflowid) : "",
            rpc: isSet(object.rpc) ? Boolean(object.rpc) : false,
            payload: isSet(object.payload) ? String(object.payload) : "",
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.robotid !== undefined && (obj.robotid = message.robotid);
        message.workflowid !== undefined && (obj.workflowid = message.workflowid);
        message.rpc !== undefined && (obj.rpc = message.rpc);
        message.payload !== undefined && (obj.payload = message.payload);
        return obj;
    },
    create: function (base) {
        return InvokeOpenRPARequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var _a, _b, _c, _d;
        var message = createBaseInvokeOpenRPARequest();
        message.robotid = (_a = object.robotid) !== null && _a !== void 0 ? _a : "";
        message.workflowid = (_b = object.workflowid) !== null && _b !== void 0 ? _b : "";
        message.rpc = (_c = object.rpc) !== null && _c !== void 0 ? _c : false;
        message.payload = (_d = object.payload) !== null && _d !== void 0 ? _d : "";
        return message;
    },
};
function createBaseInvokeOpenRPAResponse() {
    return { payload: "" };
}
export var InvokeOpenRPAResponse = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.payload !== "") {
            writer.uint32(10).string(message.payload);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseInvokeOpenRPAResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
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
    fromJSON: function (object) {
        return { payload: isSet(object.payload) ? String(object.payload) : "" };
    },
    toJSON: function (message) {
        var obj = {};
        message.payload !== undefined && (obj.payload = message.payload);
        return obj;
    },
    create: function (base) {
        return InvokeOpenRPAResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseInvokeOpenRPAResponse();
        message.payload = (_a = object.payload) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
function isSet(value) {
    return value !== null && value !== undefined;
}
//# sourceMappingURL=queues.js.map