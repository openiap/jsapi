/* eslint-disable */
import * as _m0 from "protobufjs/minimal";
import { Ace } from "./ace";
import { Timestamp } from "./google/protobuf/timestamp";
export var protobufPackage = "openiap";
function createBaseWorkitem() {
    return {
        _id: "",
        name: "",
        payload: "",
        priority: 0,
        nextrun: undefined,
        lastrun: undefined,
        files: [],
        state: "",
        wiq: "",
        wiqid: "",
        retries: 0,
        username: "",
        success_wiqid: "",
        failed_wiqid: "",
        success_wiq: "",
        failed_wiq: "",
        errormessage: "",
        errorsource: "",
        errortype: "",
    };
}
export var Workitem = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message._id !== "") {
            writer.uint32(10).string(message._id);
        }
        if (message.name !== "") {
            writer.uint32(18).string(message.name);
        }
        if (message.payload !== "") {
            writer.uint32(26).string(message.payload);
        }
        if (message.priority !== 0) {
            writer.uint32(32).int32(message.priority);
        }
        if (message.nextrun !== undefined) {
            Timestamp.encode(toTimestamp(message.nextrun), writer.uint32(42).fork()).ldelim();
        }
        if (message.lastrun !== undefined) {
            Timestamp.encode(toTimestamp(message.lastrun), writer.uint32(50).fork()).ldelim();
        }
        for (var _i = 0, _a = message.files; _i < _a.length; _i++) {
            var v = _a[_i];
            WorkitemFile.encode(v, writer.uint32(58).fork()).ldelim();
        }
        if (message.state !== "") {
            writer.uint32(66).string(message.state);
        }
        if (message.wiq !== "") {
            writer.uint32(74).string(message.wiq);
        }
        if (message.wiqid !== "") {
            writer.uint32(82).string(message.wiqid);
        }
        if (message.retries !== 0) {
            writer.uint32(88).int32(message.retries);
        }
        if (message.username !== "") {
            writer.uint32(98).string(message.username);
        }
        if (message.success_wiqid !== "") {
            writer.uint32(106).string(message.success_wiqid);
        }
        if (message.failed_wiqid !== "") {
            writer.uint32(114).string(message.failed_wiqid);
        }
        if (message.success_wiq !== "") {
            writer.uint32(122).string(message.success_wiq);
        }
        if (message.failed_wiq !== "") {
            writer.uint32(130).string(message.failed_wiq);
        }
        if (message.errormessage !== "") {
            writer.uint32(138).string(message.errormessage);
        }
        if (message.errorsource !== "") {
            writer.uint32(146).string(message.errorsource);
        }
        if (message.errortype !== "") {
            writer.uint32(154).string(message.errortype);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseWorkitem();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message._id = reader.string();
                    break;
                case 2:
                    message.name = reader.string();
                    break;
                case 3:
                    message.payload = reader.string();
                    break;
                case 4:
                    message.priority = reader.int32();
                    break;
                case 5:
                    message.nextrun = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
                    break;
                case 6:
                    message.lastrun = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
                    break;
                case 7:
                    message.files.push(WorkitemFile.decode(reader, reader.uint32()));
                    break;
                case 8:
                    message.state = reader.string();
                    break;
                case 9:
                    message.wiq = reader.string();
                    break;
                case 10:
                    message.wiqid = reader.string();
                    break;
                case 11:
                    message.retries = reader.int32();
                    break;
                case 12:
                    message.username = reader.string();
                    break;
                case 13:
                    message.success_wiqid = reader.string();
                    break;
                case 14:
                    message.failed_wiqid = reader.string();
                    break;
                case 15:
                    message.success_wiq = reader.string();
                    break;
                case 16:
                    message.failed_wiq = reader.string();
                    break;
                case 17:
                    message.errormessage = reader.string();
                    break;
                case 18:
                    message.errorsource = reader.string();
                    break;
                case 19:
                    message.errortype = reader.string();
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
            _id: isSet(object._id) ? String(object._id) : "",
            name: isSet(object.name) ? String(object.name) : "",
            payload: isSet(object.payload) ? String(object.payload) : "",
            priority: isSet(object.priority) ? Number(object.priority) : 0,
            nextrun: isSet(object.nextrun) ? fromJsonTimestamp(object.nextrun) : undefined,
            lastrun: isSet(object.lastrun) ? fromJsonTimestamp(object.lastrun) : undefined,
            files: Array.isArray(object === null || object === void 0 ? void 0 : object.files) ? object.files.map(function (e) { return WorkitemFile.fromJSON(e); }) : [],
            state: isSet(object.state) ? String(object.state) : "",
            wiq: isSet(object.wiq) ? String(object.wiq) : "",
            wiqid: isSet(object.wiqid) ? String(object.wiqid) : "",
            retries: isSet(object.retries) ? Number(object.retries) : 0,
            username: isSet(object.username) ? String(object.username) : "",
            success_wiqid: isSet(object.success_wiqid) ? String(object.success_wiqid) : "",
            failed_wiqid: isSet(object.failed_wiqid) ? String(object.failed_wiqid) : "",
            success_wiq: isSet(object.success_wiq) ? String(object.success_wiq) : "",
            failed_wiq: isSet(object.failed_wiq) ? String(object.failed_wiq) : "",
            errormessage: isSet(object.errormessage) ? String(object.errormessage) : "",
            errorsource: isSet(object.errorsource) ? String(object.errorsource) : "",
            errortype: isSet(object.errortype) ? String(object.errortype) : "",
        };
    },
    toJSON: function (message) {
        var obj = {};
        message._id !== undefined && (obj._id = message._id);
        message.name !== undefined && (obj.name = message.name);
        message.payload !== undefined && (obj.payload = message.payload);
        message.priority !== undefined && (obj.priority = Math.round(message.priority));
        message.nextrun !== undefined && (obj.nextrun = message.nextrun.toISOString());
        message.lastrun !== undefined && (obj.lastrun = message.lastrun.toISOString());
        if (message.files) {
            obj.files = message.files.map(function (e) { return e ? WorkitemFile.toJSON(e) : undefined; });
        }
        else {
            obj.files = [];
        }
        message.state !== undefined && (obj.state = message.state);
        message.wiq !== undefined && (obj.wiq = message.wiq);
        message.wiqid !== undefined && (obj.wiqid = message.wiqid);
        message.retries !== undefined && (obj.retries = Math.round(message.retries));
        message.username !== undefined && (obj.username = message.username);
        message.success_wiqid !== undefined && (obj.success_wiqid = message.success_wiqid);
        message.failed_wiqid !== undefined && (obj.failed_wiqid = message.failed_wiqid);
        message.success_wiq !== undefined && (obj.success_wiq = message.success_wiq);
        message.failed_wiq !== undefined && (obj.failed_wiq = message.failed_wiq);
        message.errormessage !== undefined && (obj.errormessage = message.errormessage);
        message.errorsource !== undefined && (obj.errorsource = message.errorsource);
        message.errortype !== undefined && (obj.errortype = message.errortype);
        return obj;
    },
    create: function (base) {
        return Workitem.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u;
        var message = createBaseWorkitem();
        message._id = (_a = object._id) !== null && _a !== void 0 ? _a : "";
        message.name = (_b = object.name) !== null && _b !== void 0 ? _b : "";
        message.payload = (_c = object.payload) !== null && _c !== void 0 ? _c : "";
        message.priority = (_d = object.priority) !== null && _d !== void 0 ? _d : 0;
        message.nextrun = (_e = object.nextrun) !== null && _e !== void 0 ? _e : undefined;
        message.lastrun = (_f = object.lastrun) !== null && _f !== void 0 ? _f : undefined;
        message.files = ((_g = object.files) === null || _g === void 0 ? void 0 : _g.map(function (e) { return WorkitemFile.fromPartial(e); })) || [];
        message.state = (_h = object.state) !== null && _h !== void 0 ? _h : "";
        message.wiq = (_j = object.wiq) !== null && _j !== void 0 ? _j : "";
        message.wiqid = (_k = object.wiqid) !== null && _k !== void 0 ? _k : "";
        message.retries = (_l = object.retries) !== null && _l !== void 0 ? _l : 0;
        message.username = (_m = object.username) !== null && _m !== void 0 ? _m : "";
        message.success_wiqid = (_o = object.success_wiqid) !== null && _o !== void 0 ? _o : "";
        message.failed_wiqid = (_p = object.failed_wiqid) !== null && _p !== void 0 ? _p : "";
        message.success_wiq = (_q = object.success_wiq) !== null && _q !== void 0 ? _q : "";
        message.failed_wiq = (_r = object.failed_wiq) !== null && _r !== void 0 ? _r : "";
        message.errormessage = (_s = object.errormessage) !== null && _s !== void 0 ? _s : "";
        message.errorsource = (_t = object.errorsource) !== null && _t !== void 0 ? _t : "";
        message.errortype = (_u = object.errortype) !== null && _u !== void 0 ? _u : "";
        return message;
    },
};
function createBaseWorkitemFile() {
    return { filename: "", _id: "", compressed: false, file: new Uint8Array() };
}
export var WorkitemFile = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.filename !== "") {
            writer.uint32(10).string(message.filename);
        }
        if (message._id !== "") {
            writer.uint32(18).string(message._id);
        }
        if (message.compressed === true) {
            writer.uint32(24).bool(message.compressed);
        }
        if (message.file.length !== 0) {
            writer.uint32(34).bytes(message.file);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseWorkitemFile();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.filename = reader.string();
                    break;
                case 2:
                    message._id = reader.string();
                    break;
                case 3:
                    message.compressed = reader.bool();
                    break;
                case 4:
                    message.file = reader.bytes();
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
            filename: isSet(object.filename) ? String(object.filename) : "",
            _id: isSet(object._id) ? String(object._id) : "",
            compressed: isSet(object.compressed) ? Boolean(object.compressed) : false,
            file: isSet(object.file) ? bytesFromBase64(object.file) : new Uint8Array(),
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.filename !== undefined && (obj.filename = message.filename);
        message._id !== undefined && (obj._id = message._id);
        message.compressed !== undefined && (obj.compressed = message.compressed);
        message.file !== undefined &&
            (obj.file = base64FromBytes(message.file !== undefined ? message.file : new Uint8Array()));
        return obj;
    },
    create: function (base) {
        return WorkitemFile.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var _a, _b, _c, _d;
        var message = createBaseWorkitemFile();
        message.filename = (_a = object.filename) !== null && _a !== void 0 ? _a : "";
        message._id = (_b = object._id) !== null && _b !== void 0 ? _b : "";
        message.compressed = (_c = object.compressed) !== null && _c !== void 0 ? _c : false;
        message.file = (_d = object.file) !== null && _d !== void 0 ? _d : new Uint8Array();
        return message;
    },
};
function createBasePushWorkitemRequest() {
    return {
        wiq: "",
        wiqid: "",
        name: "",
        payload: "",
        nextrun: undefined,
        success_wiqid: "",
        failed_wiqid: "",
        success_wiq: "",
        failed_wiq: "",
        priority: 0,
        files: [],
    };
}
export var PushWorkitemRequest = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.wiq !== "") {
            writer.uint32(10).string(message.wiq);
        }
        if (message.wiqid !== "") {
            writer.uint32(18).string(message.wiqid);
        }
        if (message.name !== "") {
            writer.uint32(26).string(message.name);
        }
        if (message.payload !== "") {
            writer.uint32(34).string(message.payload);
        }
        if (message.nextrun !== undefined) {
            Timestamp.encode(toTimestamp(message.nextrun), writer.uint32(42).fork()).ldelim();
        }
        if (message.success_wiqid !== "") {
            writer.uint32(50).string(message.success_wiqid);
        }
        if (message.failed_wiqid !== "") {
            writer.uint32(58).string(message.failed_wiqid);
        }
        if (message.success_wiq !== "") {
            writer.uint32(66).string(message.success_wiq);
        }
        if (message.failed_wiq !== "") {
            writer.uint32(74).string(message.failed_wiq);
        }
        if (message.priority !== 0) {
            writer.uint32(80).int32(message.priority);
        }
        for (var _i = 0, _a = message.files; _i < _a.length; _i++) {
            var v = _a[_i];
            WorkitemFile.encode(v, writer.uint32(90).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBasePushWorkitemRequest();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.wiq = reader.string();
                    break;
                case 2:
                    message.wiqid = reader.string();
                    break;
                case 3:
                    message.name = reader.string();
                    break;
                case 4:
                    message.payload = reader.string();
                    break;
                case 5:
                    message.nextrun = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
                    break;
                case 6:
                    message.success_wiqid = reader.string();
                    break;
                case 7:
                    message.failed_wiqid = reader.string();
                    break;
                case 8:
                    message.success_wiq = reader.string();
                    break;
                case 9:
                    message.failed_wiq = reader.string();
                    break;
                case 10:
                    message.priority = reader.int32();
                    break;
                case 11:
                    message.files.push(WorkitemFile.decode(reader, reader.uint32()));
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
            wiq: isSet(object.wiq) ? String(object.wiq) : "",
            wiqid: isSet(object.wiqid) ? String(object.wiqid) : "",
            name: isSet(object.name) ? String(object.name) : "",
            payload: isSet(object.payload) ? String(object.payload) : "",
            nextrun: isSet(object.nextrun) ? fromJsonTimestamp(object.nextrun) : undefined,
            success_wiqid: isSet(object.success_wiqid) ? String(object.success_wiqid) : "",
            failed_wiqid: isSet(object.failed_wiqid) ? String(object.failed_wiqid) : "",
            success_wiq: isSet(object.success_wiq) ? String(object.success_wiq) : "",
            failed_wiq: isSet(object.failed_wiq) ? String(object.failed_wiq) : "",
            priority: isSet(object.priority) ? Number(object.priority) : 0,
            files: Array.isArray(object === null || object === void 0 ? void 0 : object.files) ? object.files.map(function (e) { return WorkitemFile.fromJSON(e); }) : [],
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.wiq !== undefined && (obj.wiq = message.wiq);
        message.wiqid !== undefined && (obj.wiqid = message.wiqid);
        message.name !== undefined && (obj.name = message.name);
        message.payload !== undefined && (obj.payload = message.payload);
        message.nextrun !== undefined && (obj.nextrun = message.nextrun.toISOString());
        message.success_wiqid !== undefined && (obj.success_wiqid = message.success_wiqid);
        message.failed_wiqid !== undefined && (obj.failed_wiqid = message.failed_wiqid);
        message.success_wiq !== undefined && (obj.success_wiq = message.success_wiq);
        message.failed_wiq !== undefined && (obj.failed_wiq = message.failed_wiq);
        message.priority !== undefined && (obj.priority = Math.round(message.priority));
        if (message.files) {
            obj.files = message.files.map(function (e) { return e ? WorkitemFile.toJSON(e) : undefined; });
        }
        else {
            obj.files = [];
        }
        return obj;
    },
    create: function (base) {
        return PushWorkitemRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l;
        var message = createBasePushWorkitemRequest();
        message.wiq = (_a = object.wiq) !== null && _a !== void 0 ? _a : "";
        message.wiqid = (_b = object.wiqid) !== null && _b !== void 0 ? _b : "";
        message.name = (_c = object.name) !== null && _c !== void 0 ? _c : "";
        message.payload = (_d = object.payload) !== null && _d !== void 0 ? _d : "";
        message.nextrun = (_e = object.nextrun) !== null && _e !== void 0 ? _e : undefined;
        message.success_wiqid = (_f = object.success_wiqid) !== null && _f !== void 0 ? _f : "";
        message.failed_wiqid = (_g = object.failed_wiqid) !== null && _g !== void 0 ? _g : "";
        message.success_wiq = (_h = object.success_wiq) !== null && _h !== void 0 ? _h : "";
        message.failed_wiq = (_j = object.failed_wiq) !== null && _j !== void 0 ? _j : "";
        message.priority = (_k = object.priority) !== null && _k !== void 0 ? _k : 0;
        message.files = ((_l = object.files) === null || _l === void 0 ? void 0 : _l.map(function (e) { return WorkitemFile.fromPartial(e); })) || [];
        return message;
    },
};
function createBasePushWorkitemResponse() {
    return { workitem: undefined };
}
export var PushWorkitemResponse = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.workitem !== undefined) {
            Workitem.encode(message.workitem, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBasePushWorkitemResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.workitem = Workitem.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON: function (object) {
        return { workitem: isSet(object.workitem) ? Workitem.fromJSON(object.workitem) : undefined };
    },
    toJSON: function (message) {
        var obj = {};
        message.workitem !== undefined && (obj.workitem = message.workitem ? Workitem.toJSON(message.workitem) : undefined);
        return obj;
    },
    create: function (base) {
        return PushWorkitemResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var message = createBasePushWorkitemResponse();
        message.workitem = (object.workitem !== undefined && object.workitem !== null)
            ? Workitem.fromPartial(object.workitem)
            : undefined;
        return message;
    },
};
function createBasePushWorkitemsRequest() {
    return {
        wiq: "",
        wiqid: "",
        nextrun: undefined,
        success_wiqid: "",
        failed_wiqid: "",
        success_wiq: "",
        failed_wiq: "",
        priority: 0,
        items: [],
    };
}
export var PushWorkitemsRequest = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.wiq !== "") {
            writer.uint32(10).string(message.wiq);
        }
        if (message.wiqid !== "") {
            writer.uint32(18).string(message.wiqid);
        }
        if (message.nextrun !== undefined) {
            Timestamp.encode(toTimestamp(message.nextrun), writer.uint32(26).fork()).ldelim();
        }
        if (message.success_wiqid !== "") {
            writer.uint32(34).string(message.success_wiqid);
        }
        if (message.failed_wiqid !== "") {
            writer.uint32(42).string(message.failed_wiqid);
        }
        if (message.success_wiq !== "") {
            writer.uint32(50).string(message.success_wiq);
        }
        if (message.failed_wiq !== "") {
            writer.uint32(58).string(message.failed_wiq);
        }
        if (message.priority !== 0) {
            writer.uint32(64).int32(message.priority);
        }
        for (var _i = 0, _a = message.items; _i < _a.length; _i++) {
            var v = _a[_i];
            Workitem.encode(v, writer.uint32(74).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBasePushWorkitemsRequest();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.wiq = reader.string();
                    break;
                case 2:
                    message.wiqid = reader.string();
                    break;
                case 3:
                    message.nextrun = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.success_wiqid = reader.string();
                    break;
                case 5:
                    message.failed_wiqid = reader.string();
                    break;
                case 6:
                    message.success_wiq = reader.string();
                    break;
                case 7:
                    message.failed_wiq = reader.string();
                    break;
                case 8:
                    message.priority = reader.int32();
                    break;
                case 9:
                    message.items.push(Workitem.decode(reader, reader.uint32()));
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
            wiq: isSet(object.wiq) ? String(object.wiq) : "",
            wiqid: isSet(object.wiqid) ? String(object.wiqid) : "",
            nextrun: isSet(object.nextrun) ? fromJsonTimestamp(object.nextrun) : undefined,
            success_wiqid: isSet(object.success_wiqid) ? String(object.success_wiqid) : "",
            failed_wiqid: isSet(object.failed_wiqid) ? String(object.failed_wiqid) : "",
            success_wiq: isSet(object.success_wiq) ? String(object.success_wiq) : "",
            failed_wiq: isSet(object.failed_wiq) ? String(object.failed_wiq) : "",
            priority: isSet(object.priority) ? Number(object.priority) : 0,
            items: Array.isArray(object === null || object === void 0 ? void 0 : object.items) ? object.items.map(function (e) { return Workitem.fromJSON(e); }) : [],
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.wiq !== undefined && (obj.wiq = message.wiq);
        message.wiqid !== undefined && (obj.wiqid = message.wiqid);
        message.nextrun !== undefined && (obj.nextrun = message.nextrun.toISOString());
        message.success_wiqid !== undefined && (obj.success_wiqid = message.success_wiqid);
        message.failed_wiqid !== undefined && (obj.failed_wiqid = message.failed_wiqid);
        message.success_wiq !== undefined && (obj.success_wiq = message.success_wiq);
        message.failed_wiq !== undefined && (obj.failed_wiq = message.failed_wiq);
        message.priority !== undefined && (obj.priority = Math.round(message.priority));
        if (message.items) {
            obj.items = message.items.map(function (e) { return e ? Workitem.toJSON(e) : undefined; });
        }
        else {
            obj.items = [];
        }
        return obj;
    },
    create: function (base) {
        return PushWorkitemsRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j;
        var message = createBasePushWorkitemsRequest();
        message.wiq = (_a = object.wiq) !== null && _a !== void 0 ? _a : "";
        message.wiqid = (_b = object.wiqid) !== null && _b !== void 0 ? _b : "";
        message.nextrun = (_c = object.nextrun) !== null && _c !== void 0 ? _c : undefined;
        message.success_wiqid = (_d = object.success_wiqid) !== null && _d !== void 0 ? _d : "";
        message.failed_wiqid = (_e = object.failed_wiqid) !== null && _e !== void 0 ? _e : "";
        message.success_wiq = (_f = object.success_wiq) !== null && _f !== void 0 ? _f : "";
        message.failed_wiq = (_g = object.failed_wiq) !== null && _g !== void 0 ? _g : "";
        message.priority = (_h = object.priority) !== null && _h !== void 0 ? _h : 0;
        message.items = ((_j = object.items) === null || _j === void 0 ? void 0 : _j.map(function (e) { return Workitem.fromPartial(e); })) || [];
        return message;
    },
};
function createBasePushWorkitemsResponse() {
    return { workitems: [] };
}
export var PushWorkitemsResponse = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        for (var _i = 0, _a = message.workitems; _i < _a.length; _i++) {
            var v = _a[_i];
            Workitem.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBasePushWorkitemsResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.workitems.push(Workitem.decode(reader, reader.uint32()));
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
            workitems: Array.isArray(object === null || object === void 0 ? void 0 : object.workitems) ? object.workitems.map(function (e) { return Workitem.fromJSON(e); }) : [],
        };
    },
    toJSON: function (message) {
        var obj = {};
        if (message.workitems) {
            obj.workitems = message.workitems.map(function (e) { return e ? Workitem.toJSON(e) : undefined; });
        }
        else {
            obj.workitems = [];
        }
        return obj;
    },
    create: function (base) {
        return PushWorkitemsResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var _a;
        var message = createBasePushWorkitemsResponse();
        message.workitems = ((_a = object.workitems) === null || _a === void 0 ? void 0 : _a.map(function (e) { return Workitem.fromPartial(e); })) || [];
        return message;
    },
};
function createBaseUpdateWorkitemRequest() {
    return { workitem: undefined, ignoremaxretries: false, files: [] };
}
export var UpdateWorkitemRequest = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.workitem !== undefined) {
            Workitem.encode(message.workitem, writer.uint32(10).fork()).ldelim();
        }
        if (message.ignoremaxretries === true) {
            writer.uint32(16).bool(message.ignoremaxretries);
        }
        for (var _i = 0, _a = message.files; _i < _a.length; _i++) {
            var v = _a[_i];
            WorkitemFile.encode(v, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseUpdateWorkitemRequest();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.workitem = Workitem.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.ignoremaxretries = reader.bool();
                    break;
                case 3:
                    message.files.push(WorkitemFile.decode(reader, reader.uint32()));
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
            workitem: isSet(object.workitem) ? Workitem.fromJSON(object.workitem) : undefined,
            ignoremaxretries: isSet(object.ignoremaxretries) ? Boolean(object.ignoremaxretries) : false,
            files: Array.isArray(object === null || object === void 0 ? void 0 : object.files) ? object.files.map(function (e) { return WorkitemFile.fromJSON(e); }) : [],
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.workitem !== undefined && (obj.workitem = message.workitem ? Workitem.toJSON(message.workitem) : undefined);
        message.ignoremaxretries !== undefined && (obj.ignoremaxretries = message.ignoremaxretries);
        if (message.files) {
            obj.files = message.files.map(function (e) { return e ? WorkitemFile.toJSON(e) : undefined; });
        }
        else {
            obj.files = [];
        }
        return obj;
    },
    create: function (base) {
        return UpdateWorkitemRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var _a, _b;
        var message = createBaseUpdateWorkitemRequest();
        message.workitem = (object.workitem !== undefined && object.workitem !== null)
            ? Workitem.fromPartial(object.workitem)
            : undefined;
        message.ignoremaxretries = (_a = object.ignoremaxretries) !== null && _a !== void 0 ? _a : false;
        message.files = ((_b = object.files) === null || _b === void 0 ? void 0 : _b.map(function (e) { return WorkitemFile.fromPartial(e); })) || [];
        return message;
    },
};
function createBaseUpdateWorkitemResponse() {
    return { workitem: undefined };
}
export var UpdateWorkitemResponse = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.workitem !== undefined) {
            Workitem.encode(message.workitem, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseUpdateWorkitemResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.workitem = Workitem.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON: function (object) {
        return { workitem: isSet(object.workitem) ? Workitem.fromJSON(object.workitem) : undefined };
    },
    toJSON: function (message) {
        var obj = {};
        message.workitem !== undefined && (obj.workitem = message.workitem ? Workitem.toJSON(message.workitem) : undefined);
        return obj;
    },
    create: function (base) {
        return UpdateWorkitemResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var message = createBaseUpdateWorkitemResponse();
        message.workitem = (object.workitem !== undefined && object.workitem !== null)
            ? Workitem.fromPartial(object.workitem)
            : undefined;
        return message;
    },
};
function createBasePopWorkitemRequest() {
    return { wiq: "", wiqid: "", includefiles: false, compressed: false };
}
export var PopWorkitemRequest = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.wiq !== "") {
            writer.uint32(10).string(message.wiq);
        }
        if (message.wiqid !== "") {
            writer.uint32(18).string(message.wiqid);
        }
        if (message.includefiles === true) {
            writer.uint32(24).bool(message.includefiles);
        }
        if (message.compressed === true) {
            writer.uint32(32).bool(message.compressed);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBasePopWorkitemRequest();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.wiq = reader.string();
                    break;
                case 2:
                    message.wiqid = reader.string();
                    break;
                case 3:
                    message.includefiles = reader.bool();
                    break;
                case 4:
                    message.compressed = reader.bool();
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
            wiq: isSet(object.wiq) ? String(object.wiq) : "",
            wiqid: isSet(object.wiqid) ? String(object.wiqid) : "",
            includefiles: isSet(object.includefiles) ? Boolean(object.includefiles) : false,
            compressed: isSet(object.compressed) ? Boolean(object.compressed) : false,
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.wiq !== undefined && (obj.wiq = message.wiq);
        message.wiqid !== undefined && (obj.wiqid = message.wiqid);
        message.includefiles !== undefined && (obj.includefiles = message.includefiles);
        message.compressed !== undefined && (obj.compressed = message.compressed);
        return obj;
    },
    create: function (base) {
        return PopWorkitemRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var _a, _b, _c, _d;
        var message = createBasePopWorkitemRequest();
        message.wiq = (_a = object.wiq) !== null && _a !== void 0 ? _a : "";
        message.wiqid = (_b = object.wiqid) !== null && _b !== void 0 ? _b : "";
        message.includefiles = (_c = object.includefiles) !== null && _c !== void 0 ? _c : false;
        message.compressed = (_d = object.compressed) !== null && _d !== void 0 ? _d : false;
        return message;
    },
};
function createBasePopWorkitemResponse() {
    return { workitem: undefined };
}
export var PopWorkitemResponse = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.workitem !== undefined) {
            Workitem.encode(message.workitem, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBasePopWorkitemResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.workitem = Workitem.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON: function (object) {
        return { workitem: isSet(object.workitem) ? Workitem.fromJSON(object.workitem) : undefined };
    },
    toJSON: function (message) {
        var obj = {};
        message.workitem !== undefined && (obj.workitem = message.workitem ? Workitem.toJSON(message.workitem) : undefined);
        return obj;
    },
    create: function (base) {
        return PopWorkitemResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var message = createBasePopWorkitemResponse();
        message.workitem = (object.workitem !== undefined && object.workitem !== null)
            ? Workitem.fromPartial(object.workitem)
            : undefined;
        return message;
    },
};
function createBaseDeleteWorkitemRequest() {
    return { _id: "" };
}
export var DeleteWorkitemRequest = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message._id !== "") {
            writer.uint32(10).string(message._id);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseDeleteWorkitemRequest();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message._id = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON: function (object) {
        return { _id: isSet(object._id) ? String(object._id) : "" };
    },
    toJSON: function (message) {
        var obj = {};
        message._id !== undefined && (obj._id = message._id);
        return obj;
    },
    create: function (base) {
        return DeleteWorkitemRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseDeleteWorkitemRequest();
        message._id = (_a = object._id) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
function createBaseDeleteWorkitemResponse() {
    return {};
}
export var DeleteWorkitemResponse = {
    encode: function (_, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseDeleteWorkitemResponse();
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
        return DeleteWorkitemResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (_) {
        var message = createBaseDeleteWorkitemResponse();
        return message;
    },
};
function createBaseWorkItemQueue() {
    return {
        workflowid: "",
        robotqueue: "",
        amqpqueue: "",
        projectid: "",
        usersrole: "",
        maxretries: 0,
        retrydelay: 0,
        initialdelay: 0,
        success_wiqid: "",
        failed_wiqid: "",
        success_wiq: "",
        failed_wiq: "",
        _id: "",
        _acl: [],
        name: "",
        _createdbyid: "",
        _createdby: "",
        _created: undefined,
        _modifiedbyid: "",
        _modifiedby: "",
        _modified: undefined,
        _version: 0,
    };
}
export var WorkItemQueue = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.workflowid !== "") {
            writer.uint32(10).string(message.workflowid);
        }
        if (message.robotqueue !== "") {
            writer.uint32(18).string(message.robotqueue);
        }
        if (message.amqpqueue !== "") {
            writer.uint32(26).string(message.amqpqueue);
        }
        if (message.projectid !== "") {
            writer.uint32(34).string(message.projectid);
        }
        if (message.usersrole !== "") {
            writer.uint32(42).string(message.usersrole);
        }
        if (message.maxretries !== 0) {
            writer.uint32(48).int32(message.maxretries);
        }
        if (message.retrydelay !== 0) {
            writer.uint32(56).int32(message.retrydelay);
        }
        if (message.initialdelay !== 0) {
            writer.uint32(64).int32(message.initialdelay);
        }
        if (message.success_wiqid !== "") {
            writer.uint32(74).string(message.success_wiqid);
        }
        if (message.failed_wiqid !== "") {
            writer.uint32(82).string(message.failed_wiqid);
        }
        if (message.success_wiq !== "") {
            writer.uint32(90).string(message.success_wiq);
        }
        if (message.failed_wiq !== "") {
            writer.uint32(98).string(message.failed_wiq);
        }
        if (message._id !== "") {
            writer.uint32(106).string(message._id);
        }
        for (var _i = 0, _a = message._acl; _i < _a.length; _i++) {
            var v = _a[_i];
            Ace.encode(v, writer.uint32(114).fork()).ldelim();
        }
        if (message.name !== "") {
            writer.uint32(122).string(message.name);
        }
        if (message._createdbyid !== "") {
            writer.uint32(130).string(message._createdbyid);
        }
        if (message._createdby !== "") {
            writer.uint32(138).string(message._createdby);
        }
        if (message._created !== undefined) {
            Timestamp.encode(toTimestamp(message._created), writer.uint32(146).fork()).ldelim();
        }
        if (message._modifiedbyid !== "") {
            writer.uint32(154).string(message._modifiedbyid);
        }
        if (message._modifiedby !== "") {
            writer.uint32(162).string(message._modifiedby);
        }
        if (message._modified !== undefined) {
            Timestamp.encode(toTimestamp(message._modified), writer.uint32(170).fork()).ldelim();
        }
        if (message._version !== 0) {
            writer.uint32(176).int32(message._version);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseWorkItemQueue();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.workflowid = reader.string();
                    break;
                case 2:
                    message.robotqueue = reader.string();
                    break;
                case 3:
                    message.amqpqueue = reader.string();
                    break;
                case 4:
                    message.projectid = reader.string();
                    break;
                case 5:
                    message.usersrole = reader.string();
                    break;
                case 6:
                    message.maxretries = reader.int32();
                    break;
                case 7:
                    message.retrydelay = reader.int32();
                    break;
                case 8:
                    message.initialdelay = reader.int32();
                    break;
                case 9:
                    message.success_wiqid = reader.string();
                    break;
                case 10:
                    message.failed_wiqid = reader.string();
                    break;
                case 11:
                    message.success_wiq = reader.string();
                    break;
                case 12:
                    message.failed_wiq = reader.string();
                    break;
                case 13:
                    message._id = reader.string();
                    break;
                case 14:
                    message._acl.push(Ace.decode(reader, reader.uint32()));
                    break;
                case 15:
                    message.name = reader.string();
                    break;
                case 16:
                    message._createdbyid = reader.string();
                    break;
                case 17:
                    message._createdby = reader.string();
                    break;
                case 18:
                    message._created = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
                    break;
                case 19:
                    message._modifiedbyid = reader.string();
                    break;
                case 20:
                    message._modifiedby = reader.string();
                    break;
                case 21:
                    message._modified = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
                    break;
                case 22:
                    message._version = reader.int32();
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
            workflowid: isSet(object.workflowid) ? String(object.workflowid) : "",
            robotqueue: isSet(object.robotqueue) ? String(object.robotqueue) : "",
            amqpqueue: isSet(object.amqpqueue) ? String(object.amqpqueue) : "",
            projectid: isSet(object.projectid) ? String(object.projectid) : "",
            usersrole: isSet(object.usersrole) ? String(object.usersrole) : "",
            maxretries: isSet(object.maxretries) ? Number(object.maxretries) : 0,
            retrydelay: isSet(object.retrydelay) ? Number(object.retrydelay) : 0,
            initialdelay: isSet(object.initialdelay) ? Number(object.initialdelay) : 0,
            success_wiqid: isSet(object.success_wiqid) ? String(object.success_wiqid) : "",
            failed_wiqid: isSet(object.failed_wiqid) ? String(object.failed_wiqid) : "",
            success_wiq: isSet(object.success_wiq) ? String(object.success_wiq) : "",
            failed_wiq: isSet(object.failed_wiq) ? String(object.failed_wiq) : "",
            _id: isSet(object._id) ? String(object._id) : "",
            _acl: Array.isArray(object === null || object === void 0 ? void 0 : object._acl) ? object._acl.map(function (e) { return Ace.fromJSON(e); }) : [],
            name: isSet(object.name) ? String(object.name) : "",
            _createdbyid: isSet(object._createdbyid) ? String(object._createdbyid) : "",
            _createdby: isSet(object._createdby) ? String(object._createdby) : "",
            _created: isSet(object._created) ? fromJsonTimestamp(object._created) : undefined,
            _modifiedbyid: isSet(object._modifiedbyid) ? String(object._modifiedbyid) : "",
            _modifiedby: isSet(object._modifiedby) ? String(object._modifiedby) : "",
            _modified: isSet(object._modified) ? fromJsonTimestamp(object._modified) : undefined,
            _version: isSet(object._version) ? Number(object._version) : 0,
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.workflowid !== undefined && (obj.workflowid = message.workflowid);
        message.robotqueue !== undefined && (obj.robotqueue = message.robotqueue);
        message.amqpqueue !== undefined && (obj.amqpqueue = message.amqpqueue);
        message.projectid !== undefined && (obj.projectid = message.projectid);
        message.usersrole !== undefined && (obj.usersrole = message.usersrole);
        message.maxretries !== undefined && (obj.maxretries = Math.round(message.maxretries));
        message.retrydelay !== undefined && (obj.retrydelay = Math.round(message.retrydelay));
        message.initialdelay !== undefined && (obj.initialdelay = Math.round(message.initialdelay));
        message.success_wiqid !== undefined && (obj.success_wiqid = message.success_wiqid);
        message.failed_wiqid !== undefined && (obj.failed_wiqid = message.failed_wiqid);
        message.success_wiq !== undefined && (obj.success_wiq = message.success_wiq);
        message.failed_wiq !== undefined && (obj.failed_wiq = message.failed_wiq);
        message._id !== undefined && (obj._id = message._id);
        if (message._acl) {
            obj._acl = message._acl.map(function (e) { return e ? Ace.toJSON(e) : undefined; });
        }
        else {
            obj._acl = [];
        }
        message.name !== undefined && (obj.name = message.name);
        message._createdbyid !== undefined && (obj._createdbyid = message._createdbyid);
        message._createdby !== undefined && (obj._createdby = message._createdby);
        message._created !== undefined && (obj._created = message._created.toISOString());
        message._modifiedbyid !== undefined && (obj._modifiedbyid = message._modifiedbyid);
        message._modifiedby !== undefined && (obj._modifiedby = message._modifiedby);
        message._modified !== undefined && (obj._modified = message._modified.toISOString());
        message._version !== undefined && (obj._version = Math.round(message._version));
        return obj;
    },
    create: function (base) {
        return WorkItemQueue.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x;
        var message = createBaseWorkItemQueue();
        message.workflowid = (_a = object.workflowid) !== null && _a !== void 0 ? _a : "";
        message.robotqueue = (_b = object.robotqueue) !== null && _b !== void 0 ? _b : "";
        message.amqpqueue = (_c = object.amqpqueue) !== null && _c !== void 0 ? _c : "";
        message.projectid = (_d = object.projectid) !== null && _d !== void 0 ? _d : "";
        message.usersrole = (_e = object.usersrole) !== null && _e !== void 0 ? _e : "";
        message.maxretries = (_f = object.maxretries) !== null && _f !== void 0 ? _f : 0;
        message.retrydelay = (_g = object.retrydelay) !== null && _g !== void 0 ? _g : 0;
        message.initialdelay = (_h = object.initialdelay) !== null && _h !== void 0 ? _h : 0;
        message.success_wiqid = (_j = object.success_wiqid) !== null && _j !== void 0 ? _j : "";
        message.failed_wiqid = (_k = object.failed_wiqid) !== null && _k !== void 0 ? _k : "";
        message.success_wiq = (_l = object.success_wiq) !== null && _l !== void 0 ? _l : "";
        message.failed_wiq = (_m = object.failed_wiq) !== null && _m !== void 0 ? _m : "";
        message._id = (_o = object._id) !== null && _o !== void 0 ? _o : "";
        message._acl = ((_p = object._acl) === null || _p === void 0 ? void 0 : _p.map(function (e) { return Ace.fromPartial(e); })) || [];
        message.name = (_q = object.name) !== null && _q !== void 0 ? _q : "";
        message._createdbyid = (_r = object._createdbyid) !== null && _r !== void 0 ? _r : "";
        message._createdby = (_s = object._createdby) !== null && _s !== void 0 ? _s : "";
        message._created = (_t = object._created) !== null && _t !== void 0 ? _t : undefined;
        message._modifiedbyid = (_u = object._modifiedbyid) !== null && _u !== void 0 ? _u : "";
        message._modifiedby = (_v = object._modifiedby) !== null && _v !== void 0 ? _v : "";
        message._modified = (_w = object._modified) !== null && _w !== void 0 ? _w : undefined;
        message._version = (_x = object._version) !== null && _x !== void 0 ? _x : 0;
        return message;
    },
};
function createBaseAddWorkItemQueueRequest() {
    return {
        name: "",
        robotqueue: "",
        amqpqueue: "",
        projectid: "",
        skiprole: false,
        maxretries: 0,
        initialdelay: 0,
        retrydelay: 0,
        success_wiqid: "",
        failed_wiqid: "",
        success_wiq: "",
        failed_wiq: "",
        _acl: [],
    };
}
export var AddWorkItemQueueRequest = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.name !== "") {
            writer.uint32(10).string(message.name);
        }
        if (message.robotqueue !== "") {
            writer.uint32(18).string(message.robotqueue);
        }
        if (message.amqpqueue !== "") {
            writer.uint32(26).string(message.amqpqueue);
        }
        if (message.projectid !== "") {
            writer.uint32(34).string(message.projectid);
        }
        if (message.skiprole === true) {
            writer.uint32(40).bool(message.skiprole);
        }
        if (message.maxretries !== 0) {
            writer.uint32(48).int32(message.maxretries);
        }
        if (message.initialdelay !== 0) {
            writer.uint32(56).int32(message.initialdelay);
        }
        if (message.retrydelay !== 0) {
            writer.uint32(64).int32(message.retrydelay);
        }
        if (message.success_wiqid !== "") {
            writer.uint32(74).string(message.success_wiqid);
        }
        if (message.failed_wiqid !== "") {
            writer.uint32(82).string(message.failed_wiqid);
        }
        if (message.success_wiq !== "") {
            writer.uint32(90).string(message.success_wiq);
        }
        if (message.failed_wiq !== "") {
            writer.uint32(98).string(message.failed_wiq);
        }
        for (var _i = 0, _a = message._acl; _i < _a.length; _i++) {
            var v = _a[_i];
            Ace.encode(v, writer.uint32(106).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseAddWorkItemQueueRequest();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.name = reader.string();
                    break;
                case 2:
                    message.robotqueue = reader.string();
                    break;
                case 3:
                    message.amqpqueue = reader.string();
                    break;
                case 4:
                    message.projectid = reader.string();
                    break;
                case 5:
                    message.skiprole = reader.bool();
                    break;
                case 6:
                    message.maxretries = reader.int32();
                    break;
                case 7:
                    message.initialdelay = reader.int32();
                    break;
                case 8:
                    message.retrydelay = reader.int32();
                    break;
                case 9:
                    message.success_wiqid = reader.string();
                    break;
                case 10:
                    message.failed_wiqid = reader.string();
                    break;
                case 11:
                    message.success_wiq = reader.string();
                    break;
                case 12:
                    message.failed_wiq = reader.string();
                    break;
                case 13:
                    message._acl.push(Ace.decode(reader, reader.uint32()));
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
            name: isSet(object.name) ? String(object.name) : "",
            robotqueue: isSet(object.robotqueue) ? String(object.robotqueue) : "",
            amqpqueue: isSet(object.amqpqueue) ? String(object.amqpqueue) : "",
            projectid: isSet(object.projectid) ? String(object.projectid) : "",
            skiprole: isSet(object.skiprole) ? Boolean(object.skiprole) : false,
            maxretries: isSet(object.maxretries) ? Number(object.maxretries) : 0,
            initialdelay: isSet(object.initialdelay) ? Number(object.initialdelay) : 0,
            retrydelay: isSet(object.retrydelay) ? Number(object.retrydelay) : 0,
            success_wiqid: isSet(object.success_wiqid) ? String(object.success_wiqid) : "",
            failed_wiqid: isSet(object.failed_wiqid) ? String(object.failed_wiqid) : "",
            success_wiq: isSet(object.success_wiq) ? String(object.success_wiq) : "",
            failed_wiq: isSet(object.failed_wiq) ? String(object.failed_wiq) : "",
            _acl: Array.isArray(object === null || object === void 0 ? void 0 : object._acl) ? object._acl.map(function (e) { return Ace.fromJSON(e); }) : [],
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.name !== undefined && (obj.name = message.name);
        message.robotqueue !== undefined && (obj.robotqueue = message.robotqueue);
        message.amqpqueue !== undefined && (obj.amqpqueue = message.amqpqueue);
        message.projectid !== undefined && (obj.projectid = message.projectid);
        message.skiprole !== undefined && (obj.skiprole = message.skiprole);
        message.maxretries !== undefined && (obj.maxretries = Math.round(message.maxretries));
        message.initialdelay !== undefined && (obj.initialdelay = Math.round(message.initialdelay));
        message.retrydelay !== undefined && (obj.retrydelay = Math.round(message.retrydelay));
        message.success_wiqid !== undefined && (obj.success_wiqid = message.success_wiqid);
        message.failed_wiqid !== undefined && (obj.failed_wiqid = message.failed_wiqid);
        message.success_wiq !== undefined && (obj.success_wiq = message.success_wiq);
        message.failed_wiq !== undefined && (obj.failed_wiq = message.failed_wiq);
        if (message._acl) {
            obj._acl = message._acl.map(function (e) { return e ? Ace.toJSON(e) : undefined; });
        }
        else {
            obj._acl = [];
        }
        return obj;
    },
    create: function (base) {
        return AddWorkItemQueueRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o;
        var message = createBaseAddWorkItemQueueRequest();
        message.name = (_a = object.name) !== null && _a !== void 0 ? _a : "";
        message.robotqueue = (_b = object.robotqueue) !== null && _b !== void 0 ? _b : "";
        message.amqpqueue = (_c = object.amqpqueue) !== null && _c !== void 0 ? _c : "";
        message.projectid = (_d = object.projectid) !== null && _d !== void 0 ? _d : "";
        message.skiprole = (_e = object.skiprole) !== null && _e !== void 0 ? _e : false;
        message.maxretries = (_f = object.maxretries) !== null && _f !== void 0 ? _f : 0;
        message.initialdelay = (_g = object.initialdelay) !== null && _g !== void 0 ? _g : 0;
        message.retrydelay = (_h = object.retrydelay) !== null && _h !== void 0 ? _h : 0;
        message.success_wiqid = (_j = object.success_wiqid) !== null && _j !== void 0 ? _j : "";
        message.failed_wiqid = (_k = object.failed_wiqid) !== null && _k !== void 0 ? _k : "";
        message.success_wiq = (_l = object.success_wiq) !== null && _l !== void 0 ? _l : "";
        message.failed_wiq = (_m = object.failed_wiq) !== null && _m !== void 0 ? _m : "";
        message._acl = ((_o = object._acl) === null || _o === void 0 ? void 0 : _o.map(function (e) { return Ace.fromPartial(e); })) || [];
        return message;
    },
};
function createBaseAddWorkItemQueueResponse() {
    return { workitemqueue: undefined };
}
export var AddWorkItemQueueResponse = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.workitemqueue !== undefined) {
            WorkItemQueue.encode(message.workitemqueue, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseAddWorkItemQueueResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.workitemqueue = WorkItemQueue.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON: function (object) {
        return { workitemqueue: isSet(object.workitemqueue) ? WorkItemQueue.fromJSON(object.workitemqueue) : undefined };
    },
    toJSON: function (message) {
        var obj = {};
        message.workitemqueue !== undefined &&
            (obj.workitemqueue = message.workitemqueue ? WorkItemQueue.toJSON(message.workitemqueue) : undefined);
        return obj;
    },
    create: function (base) {
        return AddWorkItemQueueResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var message = createBaseAddWorkItemQueueResponse();
        message.workitemqueue = (object.workitemqueue !== undefined && object.workitemqueue !== null)
            ? WorkItemQueue.fromPartial(object.workitemqueue)
            : undefined;
        return message;
    },
};
var tsProtoGlobalThis = (function () {
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
function bytesFromBase64(b64) {
    if (tsProtoGlobalThis.Buffer) {
        return Uint8Array.from(tsProtoGlobalThis.Buffer.from(b64, "base64"));
    }
    else {
        var bin = tsProtoGlobalThis.atob(b64);
        var arr = new Uint8Array(bin.length);
        for (var i = 0; i < bin.length; ++i) {
            arr[i] = bin.charCodeAt(i);
        }
        return arr;
    }
}
function base64FromBytes(arr) {
    if (tsProtoGlobalThis.Buffer) {
        return tsProtoGlobalThis.Buffer.from(arr).toString("base64");
    }
    else {
        var bin_1 = [];
        arr.forEach(function (byte) {
            bin_1.push(String.fromCharCode(byte));
        });
        return tsProtoGlobalThis.btoa(bin_1.join(""));
    }
}
function toTimestamp(date) {
    var seconds = date.getTime() / 1000;
    var nanos = (date.getTime() % 1000) * 1000000;
    return { seconds: seconds, nanos: nanos };
}
function fromTimestamp(t) {
    var millis = t.seconds * 1000;
    millis += t.nanos / 1000000;
    return new Date(millis);
}
function fromJsonTimestamp(o) {
    if (o instanceof Date) {
        return o;
    }
    else if (typeof o === "string") {
        return new Date(o);
    }
    else {
        return fromTimestamp(Timestamp.fromJSON(o));
    }
}
function isSet(value) {
    return value !== null && value !== undefined;
}
//# sourceMappingURL=workitems.js.map