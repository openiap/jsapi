/* eslint-disable */
import _m0 from "protobufjs/minimal.js";
import { Ace } from "./ace.js";
import { Timestamp } from "./google/protobuf/timestamp.js";
export const protobufPackage = "openiap";
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
export const Workitem = {
    encode(message, writer = _m0.Writer.create()) {
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
        for (const v of message.files) {
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
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseWorkitem();
        while (reader.pos < end) {
            const tag = reader.uint32();
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
    fromJSON(object) {
        return {
            _id: isSet(object._id) ? String(object._id) : "",
            name: isSet(object.name) ? String(object.name) : "",
            payload: isSet(object.payload) ? String(object.payload) : "",
            priority: isSet(object.priority) ? Number(object.priority) : 0,
            nextrun: isSet(object.nextrun) ? fromJsonTimestamp(object.nextrun) : undefined,
            lastrun: isSet(object.lastrun) ? fromJsonTimestamp(object.lastrun) : undefined,
            files: Array.isArray(object?.files) ? object.files.map((e) => WorkitemFile.fromJSON(e)) : [],
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
    toJSON(message) {
        const obj = {};
        message._id !== undefined && (obj._id = message._id);
        message.name !== undefined && (obj.name = message.name);
        message.payload !== undefined && (obj.payload = message.payload);
        message.priority !== undefined && (obj.priority = Math.round(message.priority));
        message.nextrun !== undefined && (obj.nextrun = message.nextrun.toISOString());
        message.lastrun !== undefined && (obj.lastrun = message.lastrun.toISOString());
        if (message.files) {
            obj.files = message.files.map((e) => e ? WorkitemFile.toJSON(e) : undefined);
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
    create(base) {
        return Workitem.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseWorkitem();
        message._id = object._id ?? "";
        message.name = object.name ?? "";
        message.payload = object.payload ?? "";
        message.priority = object.priority ?? 0;
        message.nextrun = object.nextrun ?? undefined;
        message.lastrun = object.lastrun ?? undefined;
        message.files = object.files?.map((e) => WorkitemFile.fromPartial(e)) || [];
        message.state = object.state ?? "";
        message.wiq = object.wiq ?? "";
        message.wiqid = object.wiqid ?? "";
        message.retries = object.retries ?? 0;
        message.username = object.username ?? "";
        message.success_wiqid = object.success_wiqid ?? "";
        message.failed_wiqid = object.failed_wiqid ?? "";
        message.success_wiq = object.success_wiq ?? "";
        message.failed_wiq = object.failed_wiq ?? "";
        message.errormessage = object.errormessage ?? "";
        message.errorsource = object.errorsource ?? "";
        message.errortype = object.errortype ?? "";
        return message;
    },
};
function createBaseWorkitemFile() {
    return { filename: "", _id: "", compressed: false, file: new Uint8Array() };
}
export const WorkitemFile = {
    encode(message, writer = _m0.Writer.create()) {
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
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseWorkitemFile();
        while (reader.pos < end) {
            const tag = reader.uint32();
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
    fromJSON(object) {
        return {
            filename: isSet(object.filename) ? String(object.filename) : "",
            _id: isSet(object._id) ? String(object._id) : "",
            compressed: isSet(object.compressed) ? Boolean(object.compressed) : false,
            file: isSet(object.file) ? bytesFromBase64(object.file) : new Uint8Array(),
        };
    },
    toJSON(message) {
        const obj = {};
        message.filename !== undefined && (obj.filename = message.filename);
        message._id !== undefined && (obj._id = message._id);
        message.compressed !== undefined && (obj.compressed = message.compressed);
        message.file !== undefined &&
            (obj.file = base64FromBytes(message.file !== undefined ? message.file : new Uint8Array()));
        return obj;
    },
    create(base) {
        return WorkitemFile.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseWorkitemFile();
        message.filename = object.filename ?? "";
        message._id = object._id ?? "";
        message.compressed = object.compressed ?? false;
        message.file = object.file ?? new Uint8Array();
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
export const PushWorkitemRequest = {
    encode(message, writer = _m0.Writer.create()) {
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
        for (const v of message.files) {
            WorkitemFile.encode(v, writer.uint32(90).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePushWorkitemRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
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
    fromJSON(object) {
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
            files: Array.isArray(object?.files) ? object.files.map((e) => WorkitemFile.fromJSON(e)) : [],
        };
    },
    toJSON(message) {
        const obj = {};
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
            obj.files = message.files.map((e) => e ? WorkitemFile.toJSON(e) : undefined);
        }
        else {
            obj.files = [];
        }
        return obj;
    },
    create(base) {
        return PushWorkitemRequest.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBasePushWorkitemRequest();
        message.wiq = object.wiq ?? "";
        message.wiqid = object.wiqid ?? "";
        message.name = object.name ?? "";
        message.payload = object.payload ?? "";
        message.nextrun = object.nextrun ?? undefined;
        message.success_wiqid = object.success_wiqid ?? "";
        message.failed_wiqid = object.failed_wiqid ?? "";
        message.success_wiq = object.success_wiq ?? "";
        message.failed_wiq = object.failed_wiq ?? "";
        message.priority = object.priority ?? 0;
        message.files = object.files?.map((e) => WorkitemFile.fromPartial(e)) || [];
        return message;
    },
};
function createBasePushWorkitemResponse() {
    return { workitem: undefined };
}
export const PushWorkitemResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.workitem !== undefined) {
            Workitem.encode(message.workitem, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePushWorkitemResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
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
    fromJSON(object) {
        return { workitem: isSet(object.workitem) ? Workitem.fromJSON(object.workitem) : undefined };
    },
    toJSON(message) {
        const obj = {};
        message.workitem !== undefined && (obj.workitem = message.workitem ? Workitem.toJSON(message.workitem) : undefined);
        return obj;
    },
    create(base) {
        return PushWorkitemResponse.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBasePushWorkitemResponse();
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
export const PushWorkitemsRequest = {
    encode(message, writer = _m0.Writer.create()) {
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
        for (const v of message.items) {
            Workitem.encode(v, writer.uint32(74).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePushWorkitemsRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
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
    fromJSON(object) {
        return {
            wiq: isSet(object.wiq) ? String(object.wiq) : "",
            wiqid: isSet(object.wiqid) ? String(object.wiqid) : "",
            nextrun: isSet(object.nextrun) ? fromJsonTimestamp(object.nextrun) : undefined,
            success_wiqid: isSet(object.success_wiqid) ? String(object.success_wiqid) : "",
            failed_wiqid: isSet(object.failed_wiqid) ? String(object.failed_wiqid) : "",
            success_wiq: isSet(object.success_wiq) ? String(object.success_wiq) : "",
            failed_wiq: isSet(object.failed_wiq) ? String(object.failed_wiq) : "",
            priority: isSet(object.priority) ? Number(object.priority) : 0,
            items: Array.isArray(object?.items) ? object.items.map((e) => Workitem.fromJSON(e)) : [],
        };
    },
    toJSON(message) {
        const obj = {};
        message.wiq !== undefined && (obj.wiq = message.wiq);
        message.wiqid !== undefined && (obj.wiqid = message.wiqid);
        message.nextrun !== undefined && (obj.nextrun = message.nextrun.toISOString());
        message.success_wiqid !== undefined && (obj.success_wiqid = message.success_wiqid);
        message.failed_wiqid !== undefined && (obj.failed_wiqid = message.failed_wiqid);
        message.success_wiq !== undefined && (obj.success_wiq = message.success_wiq);
        message.failed_wiq !== undefined && (obj.failed_wiq = message.failed_wiq);
        message.priority !== undefined && (obj.priority = Math.round(message.priority));
        if (message.items) {
            obj.items = message.items.map((e) => e ? Workitem.toJSON(e) : undefined);
        }
        else {
            obj.items = [];
        }
        return obj;
    },
    create(base) {
        return PushWorkitemsRequest.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBasePushWorkitemsRequest();
        message.wiq = object.wiq ?? "";
        message.wiqid = object.wiqid ?? "";
        message.nextrun = object.nextrun ?? undefined;
        message.success_wiqid = object.success_wiqid ?? "";
        message.failed_wiqid = object.failed_wiqid ?? "";
        message.success_wiq = object.success_wiq ?? "";
        message.failed_wiq = object.failed_wiq ?? "";
        message.priority = object.priority ?? 0;
        message.items = object.items?.map((e) => Workitem.fromPartial(e)) || [];
        return message;
    },
};
function createBasePushWorkitemsResponse() {
    return { workitems: [] };
}
export const PushWorkitemsResponse = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.workitems) {
            Workitem.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePushWorkitemsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
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
    fromJSON(object) {
        return {
            workitems: Array.isArray(object?.workitems) ? object.workitems.map((e) => Workitem.fromJSON(e)) : [],
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.workitems) {
            obj.workitems = message.workitems.map((e) => e ? Workitem.toJSON(e) : undefined);
        }
        else {
            obj.workitems = [];
        }
        return obj;
    },
    create(base) {
        return PushWorkitemsResponse.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBasePushWorkitemsResponse();
        message.workitems = object.workitems?.map((e) => Workitem.fromPartial(e)) || [];
        return message;
    },
};
function createBaseUpdateWorkitemRequest() {
    return { workitem: undefined, ignoremaxretries: false, files: [] };
}
export const UpdateWorkitemRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.workitem !== undefined) {
            Workitem.encode(message.workitem, writer.uint32(10).fork()).ldelim();
        }
        if (message.ignoremaxretries === true) {
            writer.uint32(16).bool(message.ignoremaxretries);
        }
        for (const v of message.files) {
            WorkitemFile.encode(v, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseUpdateWorkitemRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
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
    fromJSON(object) {
        return {
            workitem: isSet(object.workitem) ? Workitem.fromJSON(object.workitem) : undefined,
            ignoremaxretries: isSet(object.ignoremaxretries) ? Boolean(object.ignoremaxretries) : false,
            files: Array.isArray(object?.files) ? object.files.map((e) => WorkitemFile.fromJSON(e)) : [],
        };
    },
    toJSON(message) {
        const obj = {};
        message.workitem !== undefined && (obj.workitem = message.workitem ? Workitem.toJSON(message.workitem) : undefined);
        message.ignoremaxretries !== undefined && (obj.ignoremaxretries = message.ignoremaxretries);
        if (message.files) {
            obj.files = message.files.map((e) => e ? WorkitemFile.toJSON(e) : undefined);
        }
        else {
            obj.files = [];
        }
        return obj;
    },
    create(base) {
        return UpdateWorkitemRequest.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseUpdateWorkitemRequest();
        message.workitem = (object.workitem !== undefined && object.workitem !== null)
            ? Workitem.fromPartial(object.workitem)
            : undefined;
        message.ignoremaxretries = object.ignoremaxretries ?? false;
        message.files = object.files?.map((e) => WorkitemFile.fromPartial(e)) || [];
        return message;
    },
};
function createBaseUpdateWorkitemResponse() {
    return { workitem: undefined };
}
export const UpdateWorkitemResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.workitem !== undefined) {
            Workitem.encode(message.workitem, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseUpdateWorkitemResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
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
    fromJSON(object) {
        return { workitem: isSet(object.workitem) ? Workitem.fromJSON(object.workitem) : undefined };
    },
    toJSON(message) {
        const obj = {};
        message.workitem !== undefined && (obj.workitem = message.workitem ? Workitem.toJSON(message.workitem) : undefined);
        return obj;
    },
    create(base) {
        return UpdateWorkitemResponse.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseUpdateWorkitemResponse();
        message.workitem = (object.workitem !== undefined && object.workitem !== null)
            ? Workitem.fromPartial(object.workitem)
            : undefined;
        return message;
    },
};
function createBasePopWorkitemRequest() {
    return { wiq: "", wiqid: "", includefiles: false, compressed: false };
}
export const PopWorkitemRequest = {
    encode(message, writer = _m0.Writer.create()) {
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
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePopWorkitemRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
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
    fromJSON(object) {
        return {
            wiq: isSet(object.wiq) ? String(object.wiq) : "",
            wiqid: isSet(object.wiqid) ? String(object.wiqid) : "",
            includefiles: isSet(object.includefiles) ? Boolean(object.includefiles) : false,
            compressed: isSet(object.compressed) ? Boolean(object.compressed) : false,
        };
    },
    toJSON(message) {
        const obj = {};
        message.wiq !== undefined && (obj.wiq = message.wiq);
        message.wiqid !== undefined && (obj.wiqid = message.wiqid);
        message.includefiles !== undefined && (obj.includefiles = message.includefiles);
        message.compressed !== undefined && (obj.compressed = message.compressed);
        return obj;
    },
    create(base) {
        return PopWorkitemRequest.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBasePopWorkitemRequest();
        message.wiq = object.wiq ?? "";
        message.wiqid = object.wiqid ?? "";
        message.includefiles = object.includefiles ?? false;
        message.compressed = object.compressed ?? false;
        return message;
    },
};
function createBasePopWorkitemResponse() {
    return { workitem: undefined };
}
export const PopWorkitemResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.workitem !== undefined) {
            Workitem.encode(message.workitem, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePopWorkitemResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
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
    fromJSON(object) {
        return { workitem: isSet(object.workitem) ? Workitem.fromJSON(object.workitem) : undefined };
    },
    toJSON(message) {
        const obj = {};
        message.workitem !== undefined && (obj.workitem = message.workitem ? Workitem.toJSON(message.workitem) : undefined);
        return obj;
    },
    create(base) {
        return PopWorkitemResponse.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBasePopWorkitemResponse();
        message.workitem = (object.workitem !== undefined && object.workitem !== null)
            ? Workitem.fromPartial(object.workitem)
            : undefined;
        return message;
    },
};
function createBaseDeleteWorkitemRequest() {
    return { _id: "" };
}
export const DeleteWorkitemRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message._id !== "") {
            writer.uint32(10).string(message._id);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseDeleteWorkitemRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
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
    fromJSON(object) {
        return { _id: isSet(object._id) ? String(object._id) : "" };
    },
    toJSON(message) {
        const obj = {};
        message._id !== undefined && (obj._id = message._id);
        return obj;
    },
    create(base) {
        return DeleteWorkitemRequest.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseDeleteWorkitemRequest();
        message._id = object._id ?? "";
        return message;
    },
};
function createBaseDeleteWorkitemResponse() {
    return {};
}
export const DeleteWorkitemResponse = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseDeleteWorkitemResponse();
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
        return DeleteWorkitemResponse.fromPartial(base ?? {});
    },
    fromPartial(_) {
        const message = createBaseDeleteWorkitemResponse();
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
        packageid: "",
    };
}
export const WorkItemQueue = {
    encode(message, writer = _m0.Writer.create()) {
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
        for (const v of message._acl) {
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
        if (message.packageid !== "") {
            writer.uint32(186).string(message.packageid);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseWorkItemQueue();
        while (reader.pos < end) {
            const tag = reader.uint32();
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
                case 23:
                    message.packageid = reader.string();
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
            _acl: Array.isArray(object?._acl) ? object._acl.map((e) => Ace.fromJSON(e)) : [],
            name: isSet(object.name) ? String(object.name) : "",
            _createdbyid: isSet(object._createdbyid) ? String(object._createdbyid) : "",
            _createdby: isSet(object._createdby) ? String(object._createdby) : "",
            _created: isSet(object._created) ? fromJsonTimestamp(object._created) : undefined,
            _modifiedbyid: isSet(object._modifiedbyid) ? String(object._modifiedbyid) : "",
            _modifiedby: isSet(object._modifiedby) ? String(object._modifiedby) : "",
            _modified: isSet(object._modified) ? fromJsonTimestamp(object._modified) : undefined,
            _version: isSet(object._version) ? Number(object._version) : 0,
            packageid: isSet(object.packageid) ? String(object.packageid) : "",
        };
    },
    toJSON(message) {
        const obj = {};
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
            obj._acl = message._acl.map((e) => e ? Ace.toJSON(e) : undefined);
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
        message.packageid !== undefined && (obj.packageid = message.packageid);
        return obj;
    },
    create(base) {
        return WorkItemQueue.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseWorkItemQueue();
        message.workflowid = object.workflowid ?? "";
        message.robotqueue = object.robotqueue ?? "";
        message.amqpqueue = object.amqpqueue ?? "";
        message.projectid = object.projectid ?? "";
        message.usersrole = object.usersrole ?? "";
        message.maxretries = object.maxretries ?? 0;
        message.retrydelay = object.retrydelay ?? 0;
        message.initialdelay = object.initialdelay ?? 0;
        message.success_wiqid = object.success_wiqid ?? "";
        message.failed_wiqid = object.failed_wiqid ?? "";
        message.success_wiq = object.success_wiq ?? "";
        message.failed_wiq = object.failed_wiq ?? "";
        message._id = object._id ?? "";
        message._acl = object._acl?.map((e) => Ace.fromPartial(e)) || [];
        message.name = object.name ?? "";
        message._createdbyid = object._createdbyid ?? "";
        message._createdby = object._createdby ?? "";
        message._created = object._created ?? undefined;
        message._modifiedbyid = object._modifiedbyid ?? "";
        message._modifiedby = object._modifiedby ?? "";
        message._modified = object._modified ?? undefined;
        message._version = object._version ?? 0;
        message.packageid = object.packageid ?? "";
        return message;
    },
};
function createBaseAddWorkItemQueueRequest() {
    return { workitemqueue: undefined, skiprole: false };
}
export const AddWorkItemQueueRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.workitemqueue !== undefined) {
            WorkItemQueue.encode(message.workitemqueue, writer.uint32(10).fork()).ldelim();
        }
        if (message.skiprole === true) {
            writer.uint32(16).bool(message.skiprole);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseAddWorkItemQueueRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.workitemqueue = WorkItemQueue.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.skiprole = reader.bool();
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
            workitemqueue: isSet(object.workitemqueue) ? WorkItemQueue.fromJSON(object.workitemqueue) : undefined,
            skiprole: isSet(object.skiprole) ? Boolean(object.skiprole) : false,
        };
    },
    toJSON(message) {
        const obj = {};
        message.workitemqueue !== undefined &&
            (obj.workitemqueue = message.workitemqueue ? WorkItemQueue.toJSON(message.workitemqueue) : undefined);
        message.skiprole !== undefined && (obj.skiprole = message.skiprole);
        return obj;
    },
    create(base) {
        return AddWorkItemQueueRequest.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseAddWorkItemQueueRequest();
        message.workitemqueue = (object.workitemqueue !== undefined && object.workitemqueue !== null)
            ? WorkItemQueue.fromPartial(object.workitemqueue)
            : undefined;
        message.skiprole = object.skiprole ?? false;
        return message;
    },
};
function createBaseAddWorkItemQueueResponse() {
    return { workitemqueue: undefined };
}
export const AddWorkItemQueueResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.workitemqueue !== undefined) {
            WorkItemQueue.encode(message.workitemqueue, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseAddWorkItemQueueResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
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
    fromJSON(object) {
        return { workitemqueue: isSet(object.workitemqueue) ? WorkItemQueue.fromJSON(object.workitemqueue) : undefined };
    },
    toJSON(message) {
        const obj = {};
        message.workitemqueue !== undefined &&
            (obj.workitemqueue = message.workitemqueue ? WorkItemQueue.toJSON(message.workitemqueue) : undefined);
        return obj;
    },
    create(base) {
        return AddWorkItemQueueResponse.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseAddWorkItemQueueResponse();
        message.workitemqueue = (object.workitemqueue !== undefined && object.workitemqueue !== null)
            ? WorkItemQueue.fromPartial(object.workitemqueue)
            : undefined;
        return message;
    },
};
function createBaseUpdateWorkItemQueueRequest() {
    return { workitemqueue: undefined, skiprole: false, purge: false };
}
export const UpdateWorkItemQueueRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.workitemqueue !== undefined) {
            WorkItemQueue.encode(message.workitemqueue, writer.uint32(10).fork()).ldelim();
        }
        if (message.skiprole === true) {
            writer.uint32(16).bool(message.skiprole);
        }
        if (message.purge === true) {
            writer.uint32(24).bool(message.purge);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseUpdateWorkItemQueueRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.workitemqueue = WorkItemQueue.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.skiprole = reader.bool();
                    break;
                case 3:
                    message.purge = reader.bool();
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
            workitemqueue: isSet(object.workitemqueue) ? WorkItemQueue.fromJSON(object.workitemqueue) : undefined,
            skiprole: isSet(object.skiprole) ? Boolean(object.skiprole) : false,
            purge: isSet(object.purge) ? Boolean(object.purge) : false,
        };
    },
    toJSON(message) {
        const obj = {};
        message.workitemqueue !== undefined &&
            (obj.workitemqueue = message.workitemqueue ? WorkItemQueue.toJSON(message.workitemqueue) : undefined);
        message.skiprole !== undefined && (obj.skiprole = message.skiprole);
        message.purge !== undefined && (obj.purge = message.purge);
        return obj;
    },
    create(base) {
        return UpdateWorkItemQueueRequest.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseUpdateWorkItemQueueRequest();
        message.workitemqueue = (object.workitemqueue !== undefined && object.workitemqueue !== null)
            ? WorkItemQueue.fromPartial(object.workitemqueue)
            : undefined;
        message.skiprole = object.skiprole ?? false;
        message.purge = object.purge ?? false;
        return message;
    },
};
function createBaseUpdateWorkItemQueueResponse() {
    return { workitemqueue: undefined };
}
export const UpdateWorkItemQueueResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.workitemqueue !== undefined) {
            WorkItemQueue.encode(message.workitemqueue, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseUpdateWorkItemQueueResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
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
    fromJSON(object) {
        return { workitemqueue: isSet(object.workitemqueue) ? WorkItemQueue.fromJSON(object.workitemqueue) : undefined };
    },
    toJSON(message) {
        const obj = {};
        message.workitemqueue !== undefined &&
            (obj.workitemqueue = message.workitemqueue ? WorkItemQueue.toJSON(message.workitemqueue) : undefined);
        return obj;
    },
    create(base) {
        return UpdateWorkItemQueueResponse.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseUpdateWorkItemQueueResponse();
        message.workitemqueue = (object.workitemqueue !== undefined && object.workitemqueue !== null)
            ? WorkItemQueue.fromPartial(object.workitemqueue)
            : undefined;
        return message;
    },
};
function createBaseDeleteWorkItemQueueRequest() {
    return { wiq: "", wiqid: "", purge: false };
}
export const DeleteWorkItemQueueRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.wiq !== "") {
            writer.uint32(10).string(message.wiq);
        }
        if (message.wiqid !== "") {
            writer.uint32(18).string(message.wiqid);
        }
        if (message.purge === true) {
            writer.uint32(24).bool(message.purge);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseDeleteWorkItemQueueRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.wiq = reader.string();
                    break;
                case 2:
                    message.wiqid = reader.string();
                    break;
                case 3:
                    message.purge = reader.bool();
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
            wiq: isSet(object.wiq) ? String(object.wiq) : "",
            wiqid: isSet(object.wiqid) ? String(object.wiqid) : "",
            purge: isSet(object.purge) ? Boolean(object.purge) : false,
        };
    },
    toJSON(message) {
        const obj = {};
        message.wiq !== undefined && (obj.wiq = message.wiq);
        message.wiqid !== undefined && (obj.wiqid = message.wiqid);
        message.purge !== undefined && (obj.purge = message.purge);
        return obj;
    },
    create(base) {
        return DeleteWorkItemQueueRequest.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseDeleteWorkItemQueueRequest();
        message.wiq = object.wiq ?? "";
        message.wiqid = object.wiqid ?? "";
        message.purge = object.purge ?? false;
        return message;
    },
};
function createBaseDeleteWorkItemQueueResponse() {
    return {};
}
export const DeleteWorkItemQueueResponse = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseDeleteWorkItemQueueResponse();
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
        return DeleteWorkItemQueueResponse.fromPartial(base ?? {});
    },
    fromPartial(_) {
        const message = createBaseDeleteWorkItemQueueResponse();
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
function bytesFromBase64(b64) {
    if (tsProtoGlobalThis.Buffer) {
        return Uint8Array.from(tsProtoGlobalThis.Buffer.from(b64, "base64"));
    }
    else {
        const bin = tsProtoGlobalThis.atob(b64);
        const arr = new Uint8Array(bin.length);
        for (let i = 0; i < bin.length; ++i) {
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
        const bin = [];
        arr.forEach((byte) => {
            bin.push(String.fromCharCode(byte));
        });
        return tsProtoGlobalThis.btoa(bin.join(""));
    }
}
function toTimestamp(date) {
    const seconds = date.getTime() / 1_000;
    const nanos = (date.getTime() % 1_000) * 1_000_000;
    return { seconds, nanos };
}
function fromTimestamp(t) {
    let millis = t.seconds * 1_000;
    millis += t.nanos / 1_000_000;
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