/* eslint-disable */
import _m0 from "protobufjs/minimal.js";
import { map } from "rxjs/operators";
import { DeleteAgentPodRequest, DeleteAgentPodResponse, DeleteAgentRequest, DeleteAgentResponse, GetAgentLogRequest, GetAgentLogResponse, GetAgentPodsRequest, GetAgentPodsResponse, StartAgentRequest, StartAgentResponse, StopAgentRequest, StopAgentResponse, } from "./agent.js";
import { Any } from "./google/protobuf/any.js";
import { Timestamp } from "./google/protobuf/timestamp.js";
import { AggregateRequest, AggregateResponse, CountRequest, CountResponse, CreateCollectionRequest, CreateCollectionResponse, DeleteManyRequest, DeleteManyResponse, DeleteOneRequest, DeleteOneResponse, DropCollectionRequest, DropCollectionResponse, GetDocumentVersionRequest, GetDocumentVersionResponse, InsertManyRequest, InsertManyResponse, InsertOneRequest, InsertOneResponse, InsertOrUpdateManyRequest, InsertOrUpdateManyResponse, InsertOrUpdateOneRequest, InsertOrUpdateOneResponse, ListCollectionsRequest, ListCollectionsResponse, QueryRequest, QueryResponse, UpdateDocumentRequest, UpdateDocumentResponse, UpdateOneRequest, UpdateOneResponse, } from "./querys.js";
import { InvokeOpenRPARequest, InvokeOpenRPAResponse, QueueMessageRequest, QueueMessageResponse, RegisterExchangeRequest, RegisterExchangeResponse, RegisterQueueRequest, RegisterQueueResponse, UnRegisterQueueRequest, UnRegisterQueueResponse, } from "./queues.js";
import { StripeCustomer } from "./stripe.js";
import { UnWatchRequest, UnWatchResponse, WatchRequest, WatchResponse } from "./watch.js";
import { AddWorkItemQueueRequest, AddWorkItemQueueResponse, DeleteWorkItemQueueRequest, DeleteWorkItemQueueResponse, DeleteWorkitemRequest, DeleteWorkitemResponse, PopWorkitemRequest, PopWorkitemResponse, PushWorkitemRequest, PushWorkitemResponse, PushWorkitemsRequest, PushWorkitemsResponse, UpdateWorkItemQueueRequest, UpdateWorkItemQueueResponse, UpdateWorkitemRequest, UpdateWorkitemResponse, } from "./workitems.js";
export const protobufPackage = "openiap";
function createBaseEnvelope() {
    return { command: "", priority: 0, seq: 0, id: "", rid: "", data: undefined, jwt: "", traceid: "", spanid: "" };
}
export const Envelope = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.command !== "") {
            writer.uint32(10).string(message.command);
        }
        if (message.priority !== 0) {
            writer.uint32(16).int32(message.priority);
        }
        if (message.seq !== 0) {
            writer.uint32(24).int32(message.seq);
        }
        if (message.id !== "") {
            writer.uint32(34).string(message.id);
        }
        if (message.rid !== "") {
            writer.uint32(42).string(message.rid);
        }
        if (message.data !== undefined) {
            Any.encode(message.data, writer.uint32(50).fork()).ldelim();
        }
        if (message.jwt !== "") {
            writer.uint32(58).string(message.jwt);
        }
        if (message.traceid !== "") {
            writer.uint32(66).string(message.traceid);
        }
        if (message.spanid !== "") {
            writer.uint32(74).string(message.spanid);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEnvelope();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.command = reader.string();
                    break;
                case 2:
                    message.priority = reader.int32();
                    break;
                case 3:
                    message.seq = reader.int32();
                    break;
                case 4:
                    message.id = reader.string();
                    break;
                case 5:
                    message.rid = reader.string();
                    break;
                case 6:
                    message.data = Any.decode(reader, reader.uint32());
                    break;
                case 7:
                    message.jwt = reader.string();
                    break;
                case 8:
                    message.traceid = reader.string();
                    break;
                case 9:
                    message.spanid = reader.string();
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
            command: isSet(object.command) ? String(object.command) : "",
            priority: isSet(object.priority) ? Number(object.priority) : 0,
            seq: isSet(object.seq) ? Number(object.seq) : 0,
            id: isSet(object.id) ? String(object.id) : "",
            rid: isSet(object.rid) ? String(object.rid) : "",
            data: isSet(object.data) ? Any.fromJSON(object.data) : undefined,
            jwt: isSet(object.jwt) ? String(object.jwt) : "",
            traceid: isSet(object.traceid) ? String(object.traceid) : "",
            spanid: isSet(object.spanid) ? String(object.spanid) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.command !== undefined && (obj.command = message.command);
        message.priority !== undefined && (obj.priority = Math.round(message.priority));
        message.seq !== undefined && (obj.seq = Math.round(message.seq));
        message.id !== undefined && (obj.id = message.id);
        message.rid !== undefined && (obj.rid = message.rid);
        message.data !== undefined && (obj.data = message.data ? Any.toJSON(message.data) : undefined);
        message.jwt !== undefined && (obj.jwt = message.jwt);
        message.traceid !== undefined && (obj.traceid = message.traceid);
        message.spanid !== undefined && (obj.spanid = message.spanid);
        return obj;
    },
    create(base) {
        return Envelope.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseEnvelope();
        message.command = object.command ?? "";
        message.priority = object.priority ?? 0;
        message.seq = object.seq ?? 0;
        message.id = object.id ?? "";
        message.rid = object.rid ?? "";
        message.data = (object.data !== undefined && object.data !== null) ? Any.fromPartial(object.data) : undefined;
        message.jwt = object.jwt ?? "";
        message.traceid = object.traceid ?? "";
        message.spanid = object.spanid ?? "";
        return message;
    },
};
function createBasePingRequest() {
    return {};
}
export const PingRequest = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePingRequest();
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
        return PingRequest.fromPartial(base ?? {});
    },
    fromPartial(_) {
        const message = createBasePingRequest();
        return message;
    },
};
function createBasePingResponse() {
    return {};
}
export const PingResponse = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePingResponse();
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
        return PingResponse.fromPartial(base ?? {});
    },
    fromPartial(_) {
        const message = createBasePingResponse();
        return message;
    },
};
function createBaseNoop() {
    return {};
}
export const Noop = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseNoop();
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
        return Noop.fromPartial(base ?? {});
    },
    fromPartial(_) {
        const message = createBaseNoop();
        return message;
    },
};
function createBaseErrorResponse() {
    return { message: "", code: 0, stack: "" };
}
export const ErrorResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.message !== "") {
            writer.uint32(10).string(message.message);
        }
        if (message.code !== 0) {
            writer.uint32(16).int32(message.code);
        }
        if (message.stack !== "") {
            writer.uint32(26).string(message.stack);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseErrorResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.message = reader.string();
                    break;
                case 2:
                    message.code = reader.int32();
                    break;
                case 3:
                    message.stack = reader.string();
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
            message: isSet(object.message) ? String(object.message) : "",
            code: isSet(object.code) ? Number(object.code) : 0,
            stack: isSet(object.stack) ? String(object.stack) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.message !== undefined && (obj.message = message.message);
        message.code !== undefined && (obj.code = Math.round(message.code));
        message.stack !== undefined && (obj.stack = message.stack);
        return obj;
    },
    create(base) {
        return ErrorResponse.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseErrorResponse();
        message.message = object.message ?? "";
        message.code = object.code ?? 0;
        message.stack = object.stack ?? "";
        return message;
    },
};
function createBaseGetElementRequest() {
    return { xpath: "" };
}
export const GetElementRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.xpath !== "") {
            writer.uint32(10).string(message.xpath);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetElementRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.xpath = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return { xpath: isSet(object.xpath) ? String(object.xpath) : "" };
    },
    toJSON(message) {
        const obj = {};
        message.xpath !== undefined && (obj.xpath = message.xpath);
        return obj;
    },
    create(base) {
        return GetElementRequest.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseGetElementRequest();
        message.xpath = object.xpath ?? "";
        return message;
    },
};
function createBaseGetElementResponse() {
    return { xpath: "" };
}
export const GetElementResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.xpath !== "") {
            writer.uint32(10).string(message.xpath);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetElementResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.xpath = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return { xpath: isSet(object.xpath) ? String(object.xpath) : "" };
    },
    toJSON(message) {
        const obj = {};
        message.xpath !== undefined && (obj.xpath = message.xpath);
        return obj;
    },
    create(base) {
        return GetElementResponse.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseGetElementResponse();
        message.xpath = object.xpath ?? "";
        return message;
    },
};
function createBaseDownloadRequest() {
    return { id: "", filename: "", collectionname: "" };
}
export const DownloadRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.id !== "") {
            writer.uint32(10).string(message.id);
        }
        if (message.filename !== "") {
            writer.uint32(18).string(message.filename);
        }
        if (message.collectionname !== "") {
            writer.uint32(26).string(message.collectionname);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseDownloadRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = reader.string();
                    break;
                case 2:
                    message.filename = reader.string();
                    break;
                case 3:
                    message.collectionname = reader.string();
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
            filename: isSet(object.filename) ? String(object.filename) : "",
            collectionname: isSet(object.collectionname) ? String(object.collectionname) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.id !== undefined && (obj.id = message.id);
        message.filename !== undefined && (obj.filename = message.filename);
        message.collectionname !== undefined && (obj.collectionname = message.collectionname);
        return obj;
    },
    create(base) {
        return DownloadRequest.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseDownloadRequest();
        message.id = object.id ?? "";
        message.filename = object.filename ?? "";
        message.collectionname = object.collectionname ?? "";
        return message;
    },
};
function createBaseDownloadResponse() {
    return { id: "", filename: "", mimetype: "" };
}
export const DownloadResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.id !== "") {
            writer.uint32(10).string(message.id);
        }
        if (message.filename !== "") {
            writer.uint32(18).string(message.filename);
        }
        if (message.mimetype !== "") {
            writer.uint32(26).string(message.mimetype);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseDownloadResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = reader.string();
                    break;
                case 2:
                    message.filename = reader.string();
                    break;
                case 3:
                    message.mimetype = reader.string();
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
            filename: isSet(object.filename) ? String(object.filename) : "",
            mimetype: isSet(object.mimetype) ? String(object.mimetype) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.id !== undefined && (obj.id = message.id);
        message.filename !== undefined && (obj.filename = message.filename);
        message.mimetype !== undefined && (obj.mimetype = message.mimetype);
        return obj;
    },
    create(base) {
        return DownloadResponse.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseDownloadResponse();
        message.id = object.id ?? "";
        message.filename = object.filename ?? "";
        message.mimetype = object.mimetype ?? "";
        return message;
    },
};
function createBaseUploadRequest() {
    return { filename: "", mimetype: "", metadata: "" };
}
export const UploadRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.filename !== "") {
            writer.uint32(10).string(message.filename);
        }
        if (message.mimetype !== "") {
            writer.uint32(18).string(message.mimetype);
        }
        if (message.metadata !== "") {
            writer.uint32(26).string(message.metadata);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseUploadRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.filename = reader.string();
                    break;
                case 2:
                    message.mimetype = reader.string();
                    break;
                case 3:
                    message.metadata = reader.string();
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
            mimetype: isSet(object.mimetype) ? String(object.mimetype) : "",
            metadata: isSet(object.metadata) ? String(object.metadata) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.filename !== undefined && (obj.filename = message.filename);
        message.mimetype !== undefined && (obj.mimetype = message.mimetype);
        message.metadata !== undefined && (obj.metadata = message.metadata);
        return obj;
    },
    create(base) {
        return UploadRequest.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseUploadRequest();
        message.filename = object.filename ?? "";
        message.mimetype = object.mimetype ?? "";
        message.metadata = object.metadata ?? "";
        return message;
    },
};
function createBaseUploadResponse() {
    return { id: "", filename: "", bytes: 0, chunks: 0, mb: 0, elapsedTime: 0, mbps: 0 };
}
export const UploadResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.id !== "") {
            writer.uint32(10).string(message.id);
        }
        if (message.filename !== "") {
            writer.uint32(18).string(message.filename);
        }
        if (message.bytes !== 0) {
            writer.uint32(24).int32(message.bytes);
        }
        if (message.chunks !== 0) {
            writer.uint32(32).int32(message.chunks);
        }
        if (message.mb !== 0) {
            writer.uint32(45).float(message.mb);
        }
        if (message.elapsedTime !== 0) {
            writer.uint32(48).int32(message.elapsedTime);
        }
        if (message.mbps !== 0) {
            writer.uint32(61).float(message.mbps);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseUploadResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = reader.string();
                    break;
                case 2:
                    message.filename = reader.string();
                    break;
                case 3:
                    message.bytes = reader.int32();
                    break;
                case 4:
                    message.chunks = reader.int32();
                    break;
                case 5:
                    message.mb = reader.float();
                    break;
                case 6:
                    message.elapsedTime = reader.int32();
                    break;
                case 7:
                    message.mbps = reader.float();
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
            filename: isSet(object.filename) ? String(object.filename) : "",
            bytes: isSet(object.bytes) ? Number(object.bytes) : 0,
            chunks: isSet(object.chunks) ? Number(object.chunks) : 0,
            mb: isSet(object.mb) ? Number(object.mb) : 0,
            elapsedTime: isSet(object.elapsedTime) ? Number(object.elapsedTime) : 0,
            mbps: isSet(object.mbps) ? Number(object.mbps) : 0,
        };
    },
    toJSON(message) {
        const obj = {};
        message.id !== undefined && (obj.id = message.id);
        message.filename !== undefined && (obj.filename = message.filename);
        message.bytes !== undefined && (obj.bytes = Math.round(message.bytes));
        message.chunks !== undefined && (obj.chunks = Math.round(message.chunks));
        message.mb !== undefined && (obj.mb = message.mb);
        message.elapsedTime !== undefined && (obj.elapsedTime = Math.round(message.elapsedTime));
        message.mbps !== undefined && (obj.mbps = message.mbps);
        return obj;
    },
    create(base) {
        return UploadResponse.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseUploadResponse();
        message.id = object.id ?? "";
        message.filename = object.filename ?? "";
        message.bytes = object.bytes ?? 0;
        message.chunks = object.chunks ?? 0;
        message.mb = object.mb ?? 0;
        message.elapsedTime = object.elapsedTime ?? 0;
        message.mbps = object.mbps ?? 0;
        return message;
    },
};
function createBaseBeginStream() {
    return { checksum: "", stat: undefined };
}
export const BeginStream = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.checksum !== "") {
            writer.uint32(10).string(message.checksum);
        }
        if (message.stat !== undefined) {
            Stat.encode(message.stat, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseBeginStream();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.checksum = reader.string();
                    break;
                case 2:
                    message.stat = Stat.decode(reader, reader.uint32());
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
            checksum: isSet(object.checksum) ? String(object.checksum) : "",
            stat: isSet(object.stat) ? Stat.fromJSON(object.stat) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.checksum !== undefined && (obj.checksum = message.checksum);
        message.stat !== undefined && (obj.stat = message.stat ? Stat.toJSON(message.stat) : undefined);
        return obj;
    },
    create(base) {
        return BeginStream.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseBeginStream();
        message.checksum = object.checksum ?? "";
        message.stat = (object.stat !== undefined && object.stat !== null) ? Stat.fromPartial(object.stat) : undefined;
        return message;
    },
};
function createBaseStream() {
    return { data: new Uint8Array() };
}
export const Stream = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.data.length !== 0) {
            writer.uint32(10).bytes(message.data);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseStream();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.data = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return { data: isSet(object.data) ? bytesFromBase64(object.data) : new Uint8Array() };
    },
    toJSON(message) {
        const obj = {};
        message.data !== undefined &&
            (obj.data = base64FromBytes(message.data !== undefined ? message.data : new Uint8Array()));
        return obj;
    },
    create(base) {
        return Stream.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseStream();
        message.data = object.data ?? new Uint8Array();
        return message;
    },
};
function createBaseEndStream() {
    return {};
}
export const EndStream = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEndStream();
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
        return EndStream.fromPartial(base ?? {});
    },
    fromPartial(_) {
        const message = createBaseEndStream();
        return message;
    },
};
function createBaseStat() {
    return {
        birthtimeMs: 0,
        blksize: 0,
        blocks: 0,
        ctime: undefined,
        ctimeMs: 0,
        dev: 0,
        gid: 0,
        ino: 0,
        mode: 0,
        mtime: undefined,
        mtimeMs: 0,
        nlink: 0,
        rdev: 0,
        size: 0,
        uid: 0,
    };
}
export const Stat = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.birthtimeMs !== 0) {
            writer.uint32(13).float(message.birthtimeMs);
        }
        if (message.blksize !== 0) {
            writer.uint32(16).int32(message.blksize);
        }
        if (message.blocks !== 0) {
            writer.uint32(24).int32(message.blocks);
        }
        if (message.ctime !== undefined) {
            Timestamp.encode(toTimestamp(message.ctime), writer.uint32(34).fork()).ldelim();
        }
        if (message.ctimeMs !== 0) {
            writer.uint32(45).float(message.ctimeMs);
        }
        if (message.dev !== 0) {
            writer.uint32(48).int32(message.dev);
        }
        if (message.gid !== 0) {
            writer.uint32(56).int32(message.gid);
        }
        if (message.ino !== 0) {
            writer.uint32(64).int32(message.ino);
        }
        if (message.mode !== 0) {
            writer.uint32(72).int32(message.mode);
        }
        if (message.mtime !== undefined) {
            Timestamp.encode(toTimestamp(message.mtime), writer.uint32(82).fork()).ldelim();
        }
        if (message.mtimeMs !== 0) {
            writer.uint32(93).float(message.mtimeMs);
        }
        if (message.nlink !== 0) {
            writer.uint32(96).int32(message.nlink);
        }
        if (message.rdev !== 0) {
            writer.uint32(104).int32(message.rdev);
        }
        if (message.size !== 0) {
            writer.uint32(112).int32(message.size);
        }
        if (message.uid !== 0) {
            writer.uint32(120).int32(message.uid);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseStat();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.birthtimeMs = reader.float();
                    break;
                case 2:
                    message.blksize = reader.int32();
                    break;
                case 3:
                    message.blocks = reader.int32();
                    break;
                case 4:
                    message.ctime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
                    break;
                case 5:
                    message.ctimeMs = reader.float();
                    break;
                case 6:
                    message.dev = reader.int32();
                    break;
                case 7:
                    message.gid = reader.int32();
                    break;
                case 8:
                    message.ino = reader.int32();
                    break;
                case 9:
                    message.mode = reader.int32();
                    break;
                case 10:
                    message.mtime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
                    break;
                case 11:
                    message.mtimeMs = reader.float();
                    break;
                case 12:
                    message.nlink = reader.int32();
                    break;
                case 13:
                    message.rdev = reader.int32();
                    break;
                case 14:
                    message.size = reader.int32();
                    break;
                case 15:
                    message.uid = reader.int32();
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
            birthtimeMs: isSet(object.birthtimeMs) ? Number(object.birthtimeMs) : 0,
            blksize: isSet(object.blksize) ? Number(object.blksize) : 0,
            blocks: isSet(object.blocks) ? Number(object.blocks) : 0,
            ctime: isSet(object.ctime) ? fromJsonTimestamp(object.ctime) : undefined,
            ctimeMs: isSet(object.ctimeMs) ? Number(object.ctimeMs) : 0,
            dev: isSet(object.dev) ? Number(object.dev) : 0,
            gid: isSet(object.gid) ? Number(object.gid) : 0,
            ino: isSet(object.ino) ? Number(object.ino) : 0,
            mode: isSet(object.mode) ? Number(object.mode) : 0,
            mtime: isSet(object.mtime) ? fromJsonTimestamp(object.mtime) : undefined,
            mtimeMs: isSet(object.mtimeMs) ? Number(object.mtimeMs) : 0,
            nlink: isSet(object.nlink) ? Number(object.nlink) : 0,
            rdev: isSet(object.rdev) ? Number(object.rdev) : 0,
            size: isSet(object.size) ? Number(object.size) : 0,
            uid: isSet(object.uid) ? Number(object.uid) : 0,
        };
    },
    toJSON(message) {
        const obj = {};
        message.birthtimeMs !== undefined && (obj.birthtimeMs = message.birthtimeMs);
        message.blksize !== undefined && (obj.blksize = Math.round(message.blksize));
        message.blocks !== undefined && (obj.blocks = Math.round(message.blocks));
        message.ctime !== undefined && (obj.ctime = message.ctime.toISOString());
        message.ctimeMs !== undefined && (obj.ctimeMs = message.ctimeMs);
        message.dev !== undefined && (obj.dev = Math.round(message.dev));
        message.gid !== undefined && (obj.gid = Math.round(message.gid));
        message.ino !== undefined && (obj.ino = Math.round(message.ino));
        message.mode !== undefined && (obj.mode = Math.round(message.mode));
        message.mtime !== undefined && (obj.mtime = message.mtime.toISOString());
        message.mtimeMs !== undefined && (obj.mtimeMs = message.mtimeMs);
        message.nlink !== undefined && (obj.nlink = Math.round(message.nlink));
        message.rdev !== undefined && (obj.rdev = Math.round(message.rdev));
        message.size !== undefined && (obj.size = Math.round(message.size));
        message.uid !== undefined && (obj.uid = Math.round(message.uid));
        return obj;
    },
    create(base) {
        return Stat.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseStat();
        message.birthtimeMs = object.birthtimeMs ?? 0;
        message.blksize = object.blksize ?? 0;
        message.blocks = object.blocks ?? 0;
        message.ctime = object.ctime ?? undefined;
        message.ctimeMs = object.ctimeMs ?? 0;
        message.dev = object.dev ?? 0;
        message.gid = object.gid ?? 0;
        message.ino = object.ino ?? 0;
        message.mode = object.mode ?? 0;
        message.mtime = object.mtime ?? undefined;
        message.mtimeMs = object.mtimeMs ?? 0;
        message.nlink = object.nlink ?? 0;
        message.rdev = object.rdev ?? 0;
        message.size = object.size ?? 0;
        message.uid = object.uid ?? 0;
        return message;
    },
};
function createBaseCustomCommandRequest() {
    return { command: "", id: "", name: "", data: "" };
}
export const CustomCommandRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.command !== "") {
            writer.uint32(10).string(message.command);
        }
        if (message.id !== "") {
            writer.uint32(18).string(message.id);
        }
        if (message.name !== "") {
            writer.uint32(26).string(message.name);
        }
        if (message.data !== "") {
            writer.uint32(34).string(message.data);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCustomCommandRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.command = reader.string();
                    break;
                case 2:
                    message.id = reader.string();
                    break;
                case 3:
                    message.name = reader.string();
                    break;
                case 4:
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
            command: isSet(object.command) ? String(object.command) : "",
            id: isSet(object.id) ? String(object.id) : "",
            name: isSet(object.name) ? String(object.name) : "",
            data: isSet(object.data) ? String(object.data) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.command !== undefined && (obj.command = message.command);
        message.id !== undefined && (obj.id = message.id);
        message.name !== undefined && (obj.name = message.name);
        message.data !== undefined && (obj.data = message.data);
        return obj;
    },
    create(base) {
        return CustomCommandRequest.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseCustomCommandRequest();
        message.command = object.command ?? "";
        message.id = object.id ?? "";
        message.name = object.name ?? "";
        message.data = object.data ?? "";
        return message;
    },
};
function createBaseCustomCommandResponse() {
    return { result: "" };
}
export const CustomCommandResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.result !== "") {
            writer.uint32(10).string(message.result);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCustomCommandResponse();
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
        return CustomCommandResponse.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseCustomCommandResponse();
        message.result = object.result ?? "";
        return message;
    },
};
function createBaseSigninRequest() {
    return {
        username: "",
        password: "",
        jwt: "",
        ping: false,
        validateonly: false,
        agent: "",
        version: "",
        longtoken: false,
    };
}
export const SigninRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.username !== "") {
            writer.uint32(10).string(message.username);
        }
        if (message.password !== "") {
            writer.uint32(18).string(message.password);
        }
        if (message.jwt !== "") {
            writer.uint32(26).string(message.jwt);
        }
        if (message.ping === true) {
            writer.uint32(32).bool(message.ping);
        }
        if (message.validateonly === true) {
            writer.uint32(40).bool(message.validateonly);
        }
        if (message.agent !== "") {
            writer.uint32(50).string(message.agent);
        }
        if (message.version !== "") {
            writer.uint32(58).string(message.version);
        }
        if (message.longtoken === true) {
            writer.uint32(64).bool(message.longtoken);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSigninRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.username = reader.string();
                    break;
                case 2:
                    message.password = reader.string();
                    break;
                case 3:
                    message.jwt = reader.string();
                    break;
                case 4:
                    message.ping = reader.bool();
                    break;
                case 5:
                    message.validateonly = reader.bool();
                    break;
                case 6:
                    message.agent = reader.string();
                    break;
                case 7:
                    message.version = reader.string();
                    break;
                case 8:
                    message.longtoken = reader.bool();
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
            username: isSet(object.username) ? String(object.username) : "",
            password: isSet(object.password) ? String(object.password) : "",
            jwt: isSet(object.jwt) ? String(object.jwt) : "",
            ping: isSet(object.ping) ? Boolean(object.ping) : false,
            validateonly: isSet(object.validateonly) ? Boolean(object.validateonly) : false,
            agent: isSet(object.agent) ? String(object.agent) : "",
            version: isSet(object.version) ? String(object.version) : "",
            longtoken: isSet(object.longtoken) ? Boolean(object.longtoken) : false,
        };
    },
    toJSON(message) {
        const obj = {};
        message.username !== undefined && (obj.username = message.username);
        message.password !== undefined && (obj.password = message.password);
        message.jwt !== undefined && (obj.jwt = message.jwt);
        message.ping !== undefined && (obj.ping = message.ping);
        message.validateonly !== undefined && (obj.validateonly = message.validateonly);
        message.agent !== undefined && (obj.agent = message.agent);
        message.version !== undefined && (obj.version = message.version);
        message.longtoken !== undefined && (obj.longtoken = message.longtoken);
        return obj;
    },
    create(base) {
        return SigninRequest.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseSigninRequest();
        message.username = object.username ?? "";
        message.password = object.password ?? "";
        message.jwt = object.jwt ?? "";
        message.ping = object.ping ?? false;
        message.validateonly = object.validateonly ?? false;
        message.agent = object.agent ?? "";
        message.version = object.version ?? "";
        message.longtoken = object.longtoken ?? false;
        return message;
    },
};
function createBaseSigninResponse() {
    return { jwt: "", user: undefined, config: "" };
}
export const SigninResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.jwt !== "") {
            writer.uint32(10).string(message.jwt);
        }
        if (message.user !== undefined) {
            User.encode(message.user, writer.uint32(18).fork()).ldelim();
        }
        if (message.config !== "") {
            writer.uint32(26).string(message.config);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSigninResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.jwt = reader.string();
                    break;
                case 2:
                    message.user = User.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.config = reader.string();
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
            jwt: isSet(object.jwt) ? String(object.jwt) : "",
            user: isSet(object.user) ? User.fromJSON(object.user) : undefined,
            config: isSet(object.config) ? String(object.config) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.jwt !== undefined && (obj.jwt = message.jwt);
        message.user !== undefined && (obj.user = message.user ? User.toJSON(message.user) : undefined);
        message.config !== undefined && (obj.config = message.config);
        return obj;
    },
    create(base) {
        return SigninResponse.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseSigninResponse();
        message.jwt = object.jwt ?? "";
        message.user = (object.user !== undefined && object.user !== null) ? User.fromPartial(object.user) : undefined;
        message.config = object.config ?? "";
        return message;
    },
};
function createBaseRefreshToken() {
    return { username: "", jwt: "", user: undefined };
}
export const RefreshToken = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.username !== "") {
            writer.uint32(10).string(message.username);
        }
        if (message.jwt !== "") {
            writer.uint32(18).string(message.jwt);
        }
        if (message.user !== undefined) {
            User.encode(message.user, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseRefreshToken();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.username = reader.string();
                    break;
                case 2:
                    message.jwt = reader.string();
                    break;
                case 3:
                    message.user = User.decode(reader, reader.uint32());
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
            username: isSet(object.username) ? String(object.username) : "",
            jwt: isSet(object.jwt) ? String(object.jwt) : "",
            user: isSet(object.user) ? User.fromJSON(object.user) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.username !== undefined && (obj.username = message.username);
        message.jwt !== undefined && (obj.jwt = message.jwt);
        message.user !== undefined && (obj.user = message.user ? User.toJSON(message.user) : undefined);
        return obj;
    },
    create(base) {
        return RefreshToken.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseRefreshToken();
        message.username = object.username ?? "";
        message.jwt = object.jwt ?? "";
        message.user = (object.user !== undefined && object.user !== null) ? User.fromPartial(object.user) : undefined;
        return message;
    },
};
function createBaseRole() {
    return { _id: "", name: "" };
}
export const Role = {
    encode(message, writer = _m0.Writer.create()) {
        if (message._id !== "") {
            writer.uint32(10).string(message._id);
        }
        if (message.name !== "") {
            writer.uint32(18).string(message.name);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseRole();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message._id = reader.string();
                    break;
                case 2:
                    message.name = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return { _id: isSet(object._id) ? String(object._id) : "", name: isSet(object.name) ? String(object.name) : "" };
    },
    toJSON(message) {
        const obj = {};
        message._id !== undefined && (obj._id = message._id);
        message.name !== undefined && (obj.name = message.name);
        return obj;
    },
    create(base) {
        return Role.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseRole();
        message._id = object._id ?? "";
        message.name = object.name ?? "";
        return message;
    },
};
function createBaseUser() {
    return { _id: "", name: "", username: "", email: "", roles: [] };
}
export const User = {
    encode(message, writer = _m0.Writer.create()) {
        if (message._id !== "") {
            writer.uint32(10).string(message._id);
        }
        if (message.name !== "") {
            writer.uint32(18).string(message.name);
        }
        if (message.username !== "") {
            writer.uint32(26).string(message.username);
        }
        if (message.email !== "") {
            writer.uint32(34).string(message.email);
        }
        for (const v of message.roles) {
            Role.encode(v, writer.uint32(42).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseUser();
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
                    message.username = reader.string();
                    break;
                case 4:
                    message.email = reader.string();
                    break;
                case 5:
                    message.roles.push(Role.decode(reader, reader.uint32()));
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
            username: isSet(object.username) ? String(object.username) : "",
            email: isSet(object.email) ? String(object.email) : "",
            roles: Array.isArray(object?.roles) ? object.roles.map((e) => Role.fromJSON(e)) : [],
        };
    },
    toJSON(message) {
        const obj = {};
        message._id !== undefined && (obj._id = message._id);
        message.name !== undefined && (obj.name = message.name);
        message.username !== undefined && (obj.username = message.username);
        message.email !== undefined && (obj.email = message.email);
        if (message.roles) {
            obj.roles = message.roles.map((e) => e ? Role.toJSON(e) : undefined);
        }
        else {
            obj.roles = [];
        }
        return obj;
    },
    create(base) {
        return User.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseUser();
        message._id = object._id ?? "";
        message.name = object.name ?? "";
        message.username = object.username ?? "";
        message.email = object.email ?? "";
        message.roles = object.roles?.map((e) => Role.fromPartial(e)) || [];
        return message;
    },
};
function createBaseCustomer() {
    return {
        _id: "",
        _type: "",
        stripeid: "",
        userid: "",
        name: "",
        country: "",
        email: "",
        address: "",
        vattype: "",
        vatnumber: "",
        taxrate: "",
        tax: 0,
        coupon: "",
        hascard: false,
        memory: "",
        openflowuserplan: "",
        supportplan: "",
        supporthourplan: "",
        subscriptionid: "",
        admins: "",
        users: "",
        customattr1: "",
        customattr2: "",
        customattr3: "",
        customattr4: "",
        customattr5: "",
        domains: [],
        dbusage: 0,
        dblocked: false,
    };
}
export const Customer = {
    encode(message, writer = _m0.Writer.create()) {
        if (message._id !== "") {
            writer.uint32(10).string(message._id);
        }
        if (message._type !== "") {
            writer.uint32(18).string(message._type);
        }
        if (message.stripeid !== "") {
            writer.uint32(26).string(message.stripeid);
        }
        if (message.userid !== "") {
            writer.uint32(34).string(message.userid);
        }
        if (message.name !== "") {
            writer.uint32(42).string(message.name);
        }
        if (message.country !== "") {
            writer.uint32(50).string(message.country);
        }
        if (message.email !== "") {
            writer.uint32(58).string(message.email);
        }
        if (message.address !== "") {
            writer.uint32(66).string(message.address);
        }
        if (message.vattype !== "") {
            writer.uint32(74).string(message.vattype);
        }
        if (message.vatnumber !== "") {
            writer.uint32(82).string(message.vatnumber);
        }
        if (message.taxrate !== "") {
            writer.uint32(90).string(message.taxrate);
        }
        if (message.tax !== 0) {
            writer.uint32(96).int32(message.tax);
        }
        if (message.coupon !== "") {
            writer.uint32(106).string(message.coupon);
        }
        if (message.hascard === true) {
            writer.uint32(112).bool(message.hascard);
        }
        if (message.memory !== "") {
            writer.uint32(122).string(message.memory);
        }
        if (message.openflowuserplan !== "") {
            writer.uint32(130).string(message.openflowuserplan);
        }
        if (message.supportplan !== "") {
            writer.uint32(138).string(message.supportplan);
        }
        if (message.supporthourplan !== "") {
            writer.uint32(146).string(message.supporthourplan);
        }
        if (message.subscriptionid !== "") {
            writer.uint32(154).string(message.subscriptionid);
        }
        if (message.admins !== "") {
            writer.uint32(162).string(message.admins);
        }
        if (message.users !== "") {
            writer.uint32(170).string(message.users);
        }
        if (message.customattr1 !== "") {
            writer.uint32(178).string(message.customattr1);
        }
        if (message.customattr2 !== "") {
            writer.uint32(186).string(message.customattr2);
        }
        if (message.customattr3 !== "") {
            writer.uint32(194).string(message.customattr3);
        }
        if (message.customattr4 !== "") {
            writer.uint32(202).string(message.customattr4);
        }
        if (message.customattr5 !== "") {
            writer.uint32(210).string(message.customattr5);
        }
        for (const v of message.domains) {
            writer.uint32(218).string(v);
        }
        if (message.dbusage !== 0) {
            writer.uint32(224).int32(message.dbusage);
        }
        if (message.dblocked === true) {
            writer.uint32(232).bool(message.dblocked);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCustomer();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message._id = reader.string();
                    break;
                case 2:
                    message._type = reader.string();
                    break;
                case 3:
                    message.stripeid = reader.string();
                    break;
                case 4:
                    message.userid = reader.string();
                    break;
                case 5:
                    message.name = reader.string();
                    break;
                case 6:
                    message.country = reader.string();
                    break;
                case 7:
                    message.email = reader.string();
                    break;
                case 8:
                    message.address = reader.string();
                    break;
                case 9:
                    message.vattype = reader.string();
                    break;
                case 10:
                    message.vatnumber = reader.string();
                    break;
                case 11:
                    message.taxrate = reader.string();
                    break;
                case 12:
                    message.tax = reader.int32();
                    break;
                case 13:
                    message.coupon = reader.string();
                    break;
                case 14:
                    message.hascard = reader.bool();
                    break;
                case 15:
                    message.memory = reader.string();
                    break;
                case 16:
                    message.openflowuserplan = reader.string();
                    break;
                case 17:
                    message.supportplan = reader.string();
                    break;
                case 18:
                    message.supporthourplan = reader.string();
                    break;
                case 19:
                    message.subscriptionid = reader.string();
                    break;
                case 20:
                    message.admins = reader.string();
                    break;
                case 21:
                    message.users = reader.string();
                    break;
                case 22:
                    message.customattr1 = reader.string();
                    break;
                case 23:
                    message.customattr2 = reader.string();
                    break;
                case 24:
                    message.customattr3 = reader.string();
                    break;
                case 25:
                    message.customattr4 = reader.string();
                    break;
                case 26:
                    message.customattr5 = reader.string();
                    break;
                case 27:
                    message.domains.push(reader.string());
                    break;
                case 28:
                    message.dbusage = reader.int32();
                    break;
                case 29:
                    message.dblocked = reader.bool();
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
            _type: isSet(object._type) ? String(object._type) : "",
            stripeid: isSet(object.stripeid) ? String(object.stripeid) : "",
            userid: isSet(object.userid) ? String(object.userid) : "",
            name: isSet(object.name) ? String(object.name) : "",
            country: isSet(object.country) ? String(object.country) : "",
            email: isSet(object.email) ? String(object.email) : "",
            address: isSet(object.address) ? String(object.address) : "",
            vattype: isSet(object.vattype) ? String(object.vattype) : "",
            vatnumber: isSet(object.vatnumber) ? String(object.vatnumber) : "",
            taxrate: isSet(object.taxrate) ? String(object.taxrate) : "",
            tax: isSet(object.tax) ? Number(object.tax) : 0,
            coupon: isSet(object.coupon) ? String(object.coupon) : "",
            hascard: isSet(object.hascard) ? Boolean(object.hascard) : false,
            memory: isSet(object.memory) ? String(object.memory) : "",
            openflowuserplan: isSet(object.openflowuserplan) ? String(object.openflowuserplan) : "",
            supportplan: isSet(object.supportplan) ? String(object.supportplan) : "",
            supporthourplan: isSet(object.supporthourplan) ? String(object.supporthourplan) : "",
            subscriptionid: isSet(object.subscriptionid) ? String(object.subscriptionid) : "",
            admins: isSet(object.admins) ? String(object.admins) : "",
            users: isSet(object.users) ? String(object.users) : "",
            customattr1: isSet(object.customattr1) ? String(object.customattr1) : "",
            customattr2: isSet(object.customattr2) ? String(object.customattr2) : "",
            customattr3: isSet(object.customattr3) ? String(object.customattr3) : "",
            customattr4: isSet(object.customattr4) ? String(object.customattr4) : "",
            customattr5: isSet(object.customattr5) ? String(object.customattr5) : "",
            domains: Array.isArray(object?.domains) ? object.domains.map((e) => String(e)) : [],
            dbusage: isSet(object.dbusage) ? Number(object.dbusage) : 0,
            dblocked: isSet(object.dblocked) ? Boolean(object.dblocked) : false,
        };
    },
    toJSON(message) {
        const obj = {};
        message._id !== undefined && (obj._id = message._id);
        message._type !== undefined && (obj._type = message._type);
        message.stripeid !== undefined && (obj.stripeid = message.stripeid);
        message.userid !== undefined && (obj.userid = message.userid);
        message.name !== undefined && (obj.name = message.name);
        message.country !== undefined && (obj.country = message.country);
        message.email !== undefined && (obj.email = message.email);
        message.address !== undefined && (obj.address = message.address);
        message.vattype !== undefined && (obj.vattype = message.vattype);
        message.vatnumber !== undefined && (obj.vatnumber = message.vatnumber);
        message.taxrate !== undefined && (obj.taxrate = message.taxrate);
        message.tax !== undefined && (obj.tax = Math.round(message.tax));
        message.coupon !== undefined && (obj.coupon = message.coupon);
        message.hascard !== undefined && (obj.hascard = message.hascard);
        message.memory !== undefined && (obj.memory = message.memory);
        message.openflowuserplan !== undefined && (obj.openflowuserplan = message.openflowuserplan);
        message.supportplan !== undefined && (obj.supportplan = message.supportplan);
        message.supporthourplan !== undefined && (obj.supporthourplan = message.supporthourplan);
        message.subscriptionid !== undefined && (obj.subscriptionid = message.subscriptionid);
        message.admins !== undefined && (obj.admins = message.admins);
        message.users !== undefined && (obj.users = message.users);
        message.customattr1 !== undefined && (obj.customattr1 = message.customattr1);
        message.customattr2 !== undefined && (obj.customattr2 = message.customattr2);
        message.customattr3 !== undefined && (obj.customattr3 = message.customattr3);
        message.customattr4 !== undefined && (obj.customattr4 = message.customattr4);
        message.customattr5 !== undefined && (obj.customattr5 = message.customattr5);
        if (message.domains) {
            obj.domains = message.domains.map((e) => e);
        }
        else {
            obj.domains = [];
        }
        message.dbusage !== undefined && (obj.dbusage = Math.round(message.dbusage));
        message.dblocked !== undefined && (obj.dblocked = message.dblocked);
        return obj;
    },
    create(base) {
        return Customer.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseCustomer();
        message._id = object._id ?? "";
        message._type = object._type ?? "";
        message.stripeid = object.stripeid ?? "";
        message.userid = object.userid ?? "";
        message.name = object.name ?? "";
        message.country = object.country ?? "";
        message.email = object.email ?? "";
        message.address = object.address ?? "";
        message.vattype = object.vattype ?? "";
        message.vatnumber = object.vatnumber ?? "";
        message.taxrate = object.taxrate ?? "";
        message.tax = object.tax ?? 0;
        message.coupon = object.coupon ?? "";
        message.hascard = object.hascard ?? false;
        message.memory = object.memory ?? "";
        message.openflowuserplan = object.openflowuserplan ?? "";
        message.supportplan = object.supportplan ?? "";
        message.supporthourplan = object.supporthourplan ?? "";
        message.subscriptionid = object.subscriptionid ?? "";
        message.admins = object.admins ?? "";
        message.users = object.users ?? "";
        message.customattr1 = object.customattr1 ?? "";
        message.customattr2 = object.customattr2 ?? "";
        message.customattr3 = object.customattr3 ?? "";
        message.customattr4 = object.customattr4 ?? "";
        message.customattr5 = object.customattr5 ?? "";
        message.domains = object.domains?.map((e) => e) || [];
        message.dbusage = object.dbusage ?? 0;
        message.dblocked = object.dblocked ?? false;
        return message;
    },
};
function createBaseEnsureCustomerRequest() {
    return { customer: undefined, stripe: undefined, ensureas: "" };
}
export const EnsureCustomerRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.customer !== undefined) {
            Customer.encode(message.customer, writer.uint32(10).fork()).ldelim();
        }
        if (message.stripe !== undefined) {
            StripeCustomer.encode(message.stripe, writer.uint32(18).fork()).ldelim();
        }
        if (message.ensureas !== "") {
            writer.uint32(26).string(message.ensureas);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEnsureCustomerRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.customer = Customer.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.stripe = StripeCustomer.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.ensureas = reader.string();
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
            customer: isSet(object.customer) ? Customer.fromJSON(object.customer) : undefined,
            stripe: isSet(object.stripe) ? StripeCustomer.fromJSON(object.stripe) : undefined,
            ensureas: isSet(object.ensureas) ? String(object.ensureas) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.customer !== undefined && (obj.customer = message.customer ? Customer.toJSON(message.customer) : undefined);
        message.stripe !== undefined && (obj.stripe = message.stripe ? StripeCustomer.toJSON(message.stripe) : undefined);
        message.ensureas !== undefined && (obj.ensureas = message.ensureas);
        return obj;
    },
    create(base) {
        return EnsureCustomerRequest.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseEnsureCustomerRequest();
        message.customer = (object.customer !== undefined && object.customer !== null)
            ? Customer.fromPartial(object.customer)
            : undefined;
        message.stripe = (object.stripe !== undefined && object.stripe !== null)
            ? StripeCustomer.fromPartial(object.stripe)
            : undefined;
        message.ensureas = object.ensureas ?? "";
        return message;
    },
};
function createBaseEnsureCustomerResponse() {
    return { customer: undefined, stripe: undefined };
}
export const EnsureCustomerResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.customer !== undefined) {
            Customer.encode(message.customer, writer.uint32(10).fork()).ldelim();
        }
        if (message.stripe !== undefined) {
            StripeCustomer.encode(message.stripe, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEnsureCustomerResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.customer = Customer.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.stripe = StripeCustomer.decode(reader, reader.uint32());
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
            customer: isSet(object.customer) ? Customer.fromJSON(object.customer) : undefined,
            stripe: isSet(object.stripe) ? StripeCustomer.fromJSON(object.stripe) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.customer !== undefined && (obj.customer = message.customer ? Customer.toJSON(message.customer) : undefined);
        message.stripe !== undefined && (obj.stripe = message.stripe ? StripeCustomer.toJSON(message.stripe) : undefined);
        return obj;
    },
    create(base) {
        return EnsureCustomerResponse.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseEnsureCustomerResponse();
        message.customer = (object.customer !== undefined && object.customer !== null)
            ? Customer.fromPartial(object.customer)
            : undefined;
        message.stripe = (object.stripe !== undefined && object.stripe !== null)
            ? StripeCustomer.fromPartial(object.stripe)
            : undefined;
        return message;
    },
};
function createBaseCreateIndexRequest() {
    return { collectionname: "", index: "", options: "", name: "" };
}
export const CreateIndexRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.collectionname !== "") {
            writer.uint32(10).string(message.collectionname);
        }
        if (message.index !== "") {
            writer.uint32(18).string(message.index);
        }
        if (message.options !== "") {
            writer.uint32(26).string(message.options);
        }
        if (message.name !== "") {
            writer.uint32(34).string(message.name);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCreateIndexRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.collectionname = reader.string();
                    break;
                case 2:
                    message.index = reader.string();
                    break;
                case 3:
                    message.options = reader.string();
                    break;
                case 4:
                    message.name = reader.string();
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
            index: isSet(object.index) ? String(object.index) : "",
            options: isSet(object.options) ? String(object.options) : "",
            name: isSet(object.name) ? String(object.name) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.collectionname !== undefined && (obj.collectionname = message.collectionname);
        message.index !== undefined && (obj.index = message.index);
        message.options !== undefined && (obj.options = message.options);
        message.name !== undefined && (obj.name = message.name);
        return obj;
    },
    create(base) {
        return CreateIndexRequest.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseCreateIndexRequest();
        message.collectionname = object.collectionname ?? "";
        message.index = object.index ?? "";
        message.options = object.options ?? "";
        message.name = object.name ?? "";
        return message;
    },
};
function createBaseCreateIndexResponse() {
    return { result: "" };
}
export const CreateIndexResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.result !== "") {
            writer.uint32(10).string(message.result);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCreateIndexResponse();
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
        return CreateIndexResponse.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseCreateIndexResponse();
        message.result = object.result ?? "";
        return message;
    },
};
function createBaseGetIndexesRequest() {
    return { collectionname: "" };
}
export const GetIndexesRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.collectionname !== "") {
            writer.uint32(10).string(message.collectionname);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetIndexesRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.collectionname = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return { collectionname: isSet(object.collectionname) ? String(object.collectionname) : "" };
    },
    toJSON(message) {
        const obj = {};
        message.collectionname !== undefined && (obj.collectionname = message.collectionname);
        return obj;
    },
    create(base) {
        return GetIndexesRequest.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseGetIndexesRequest();
        message.collectionname = object.collectionname ?? "";
        return message;
    },
};
function createBaseGetIndexesResponse() {
    return { results: "" };
}
export const GetIndexesResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.results !== "") {
            writer.uint32(10).string(message.results);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetIndexesResponse();
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
        return GetIndexesResponse.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseGetIndexesResponse();
        message.results = object.results ?? "";
        return message;
    },
};
function createBaseDropIndexRequest() {
    return { collectionname: "", name: "" };
}
export const DropIndexRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.collectionname !== "") {
            writer.uint32(10).string(message.collectionname);
        }
        if (message.name !== "") {
            writer.uint32(18).string(message.name);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseDropIndexRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.collectionname = reader.string();
                    break;
                case 2:
                    message.name = reader.string();
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
            name: isSet(object.name) ? String(object.name) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.collectionname !== undefined && (obj.collectionname = message.collectionname);
        message.name !== undefined && (obj.name = message.name);
        return obj;
    },
    create(base) {
        return DropIndexRequest.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseDropIndexRequest();
        message.collectionname = object.collectionname ?? "";
        message.name = object.name ?? "";
        return message;
    },
};
function createBaseDropIndexResponse() {
    return {};
}
export const DropIndexResponse = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseDropIndexResponse();
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
        return DropIndexResponse.fromPartial(base ?? {});
    },
    fromPartial(_) {
        const message = createBaseDropIndexResponse();
        return message;
    },
};
function createBaseDeletePackageRequest() {
    return { packageid: "" };
}
export const DeletePackageRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.packageid !== "") {
            writer.uint32(10).string(message.packageid);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseDeletePackageRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
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
        return { packageid: isSet(object.packageid) ? String(object.packageid) : "" };
    },
    toJSON(message) {
        const obj = {};
        message.packageid !== undefined && (obj.packageid = message.packageid);
        return obj;
    },
    create(base) {
        return DeletePackageRequest.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseDeletePackageRequest();
        message.packageid = object.packageid ?? "";
        return message;
    },
};
function createBaseDeletePackageResponse() {
    return {};
}
export const DeletePackageResponse = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseDeletePackageResponse();
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
        return DeletePackageResponse.fromPartial(base ?? {});
    },
    fromPartial(_) {
        const message = createBaseDeletePackageResponse();
        return message;
    },
};
export class FlowServiceClientImpl {
    rpc;
    service;
    constructor(rpc, opts) {
        this.service = opts?.service || "openiap.FlowService";
        this.rpc = rpc;
        this.SetupStream = this.SetupStream.bind(this);
        this.Signin = this.Signin.bind(this);
        this.Download = this.Download.bind(this);
        this.Upload = this.Upload.bind(this);
        this.CustomCommand = this.CustomCommand.bind(this);
        this.ListCollections = this.ListCollections.bind(this);
        this.DropCollection = this.DropCollection.bind(this);
        this.CreateCollection = this.CreateCollection.bind(this);
        this.Query = this.Query.bind(this);
        this.GetDocumentVersion = this.GetDocumentVersion.bind(this);
        this.Aggregate = this.Aggregate.bind(this);
        this.Count = this.Count.bind(this);
        this.InsertOne = this.InsertOne.bind(this);
        this.InsertMany = this.InsertMany.bind(this);
        this.UpdateOne = this.UpdateOne.bind(this);
        this.UpdateDocument = this.UpdateDocument.bind(this);
        this.InsertOrUpdateOne = this.InsertOrUpdateOne.bind(this);
        this.InsertOrUpdateMany = this.InsertOrUpdateMany.bind(this);
        this.DeleteOne = this.DeleteOne.bind(this);
        this.DeleteMany = this.DeleteMany.bind(this);
        this.RegisterQueue = this.RegisterQueue.bind(this);
        this.RegisterExchange = this.RegisterExchange.bind(this);
        this.QueueMessage = this.QueueMessage.bind(this);
        this.UnRegisterQueue = this.UnRegisterQueue.bind(this);
        this.Watch = this.Watch.bind(this);
        this.UnWatch = this.UnWatch.bind(this);
        this.PushWorkitem = this.PushWorkitem.bind(this);
        this.PushWorkitems = this.PushWorkitems.bind(this);
        this.UpdateWorkitem = this.UpdateWorkitem.bind(this);
        this.PopWorkitem = this.PopWorkitem.bind(this);
        this.DeleteWorkitem = this.DeleteWorkitem.bind(this);
        this.AddWorkItemQueue = this.AddWorkItemQueue.bind(this);
        this.UpdateWorkItemQueue = this.UpdateWorkItemQueue.bind(this);
        this.DeleteWorkItemQueue = this.DeleteWorkItemQueue.bind(this);
        this.EnsureCustomer = this.EnsureCustomer.bind(this);
        this.InvokeOpenRPA = this.InvokeOpenRPA.bind(this);
        this.StartAgent = this.StartAgent.bind(this);
        this.StopAgent = this.StopAgent.bind(this);
        this.GetAgentLog = this.GetAgentLog.bind(this);
        this.GetAgentPods = this.GetAgentPods.bind(this);
        this.DeleteAgentPod = this.DeleteAgentPod.bind(this);
        this.DeleteAgent = this.DeleteAgent.bind(this);
        this.CreateIndex = this.CreateIndex.bind(this);
        this.GetIndexes = this.GetIndexes.bind(this);
        this.DropIndex = this.DropIndex.bind(this);
        this.DeletePackage = this.DeletePackage.bind(this);
    }
    SetupStream(request) {
        const data = request.pipe(map((request) => Envelope.encode(request).finish()));
        const result = this.rpc.bidirectionalStreamingRequest(this.service, "SetupStream", data);
        return result.pipe(map((data) => Envelope.decode(new _m0.Reader(data))));
    }
    Signin(request) {
        const data = SigninRequest.encode(request).finish();
        const promise = this.rpc.request(this.service, "Signin", data);
        return promise.then((data) => SigninResponse.decode(new _m0.Reader(data)));
    }
    Download(request) {
        const data = DownloadRequest.encode(request).finish();
        const promise = this.rpc.request(this.service, "Download", data);
        return promise.then((data) => DownloadResponse.decode(new _m0.Reader(data)));
    }
    Upload(request) {
        const data = UploadRequest.encode(request).finish();
        const promise = this.rpc.request(this.service, "Upload", data);
        return promise.then((data) => UploadResponse.decode(new _m0.Reader(data)));
    }
    CustomCommand(request) {
        const data = CustomCommandRequest.encode(request).finish();
        const promise = this.rpc.request(this.service, "CustomCommand", data);
        return promise.then((data) => CustomCommandResponse.decode(new _m0.Reader(data)));
    }
    ListCollections(request) {
        const data = ListCollectionsRequest.encode(request).finish();
        const promise = this.rpc.request(this.service, "ListCollections", data);
        return promise.then((data) => ListCollectionsResponse.decode(new _m0.Reader(data)));
    }
    DropCollection(request) {
        const data = DropCollectionRequest.encode(request).finish();
        const promise = this.rpc.request(this.service, "DropCollection", data);
        return promise.then((data) => DropCollectionResponse.decode(new _m0.Reader(data)));
    }
    CreateCollection(request) {
        const data = CreateCollectionRequest.encode(request).finish();
        const promise = this.rpc.request(this.service, "CreateCollection", data);
        return promise.then((data) => CreateCollectionResponse.decode(new _m0.Reader(data)));
    }
    Query(request) {
        const data = QueryRequest.encode(request).finish();
        const promise = this.rpc.request(this.service, "Query", data);
        return promise.then((data) => QueryResponse.decode(new _m0.Reader(data)));
    }
    GetDocumentVersion(request) {
        const data = GetDocumentVersionRequest.encode(request).finish();
        const promise = this.rpc.request(this.service, "GetDocumentVersion", data);
        return promise.then((data) => GetDocumentVersionResponse.decode(new _m0.Reader(data)));
    }
    Aggregate(request) {
        const data = AggregateRequest.encode(request).finish();
        const promise = this.rpc.request(this.service, "Aggregate", data);
        return promise.then((data) => AggregateResponse.decode(new _m0.Reader(data)));
    }
    Count(request) {
        const data = CountRequest.encode(request).finish();
        const promise = this.rpc.request(this.service, "Count", data);
        return promise.then((data) => CountResponse.decode(new _m0.Reader(data)));
    }
    InsertOne(request) {
        const data = InsertOneRequest.encode(request).finish();
        const promise = this.rpc.request(this.service, "InsertOne", data);
        return promise.then((data) => InsertOneResponse.decode(new _m0.Reader(data)));
    }
    InsertMany(request) {
        const data = InsertManyRequest.encode(request).finish();
        const promise = this.rpc.request(this.service, "InsertMany", data);
        return promise.then((data) => InsertManyResponse.decode(new _m0.Reader(data)));
    }
    UpdateOne(request) {
        const data = UpdateOneRequest.encode(request).finish();
        const promise = this.rpc.request(this.service, "UpdateOne", data);
        return promise.then((data) => UpdateOneResponse.decode(new _m0.Reader(data)));
    }
    UpdateDocument(request) {
        const data = UpdateDocumentRequest.encode(request).finish();
        const promise = this.rpc.request(this.service, "UpdateDocument", data);
        return promise.then((data) => UpdateDocumentResponse.decode(new _m0.Reader(data)));
    }
    InsertOrUpdateOne(request) {
        const data = InsertOrUpdateOneRequest.encode(request).finish();
        const promise = this.rpc.request(this.service, "InsertOrUpdateOne", data);
        return promise.then((data) => InsertOrUpdateOneResponse.decode(new _m0.Reader(data)));
    }
    InsertOrUpdateMany(request) {
        const data = InsertOrUpdateManyRequest.encode(request).finish();
        const promise = this.rpc.request(this.service, "InsertOrUpdateMany", data);
        return promise.then((data) => InsertOrUpdateManyResponse.decode(new _m0.Reader(data)));
    }
    DeleteOne(request) {
        const data = DeleteOneRequest.encode(request).finish();
        const promise = this.rpc.request(this.service, "DeleteOne", data);
        return promise.then((data) => DeleteOneResponse.decode(new _m0.Reader(data)));
    }
    DeleteMany(request) {
        const data = DeleteManyRequest.encode(request).finish();
        const promise = this.rpc.request(this.service, "DeleteMany", data);
        return promise.then((data) => DeleteManyResponse.decode(new _m0.Reader(data)));
    }
    RegisterQueue(request) {
        const data = RegisterQueueRequest.encode(request).finish();
        const promise = this.rpc.request(this.service, "RegisterQueue", data);
        return promise.then((data) => RegisterQueueResponse.decode(new _m0.Reader(data)));
    }
    RegisterExchange(request) {
        const data = RegisterExchangeRequest.encode(request).finish();
        const promise = this.rpc.request(this.service, "RegisterExchange", data);
        return promise.then((data) => RegisterExchangeResponse.decode(new _m0.Reader(data)));
    }
    QueueMessage(request) {
        const data = QueueMessageRequest.encode(request).finish();
        const promise = this.rpc.request(this.service, "QueueMessage", data);
        return promise.then((data) => QueueMessageResponse.decode(new _m0.Reader(data)));
    }
    UnRegisterQueue(request) {
        const data = UnRegisterQueueRequest.encode(request).finish();
        const promise = this.rpc.request(this.service, "UnRegisterQueue", data);
        return promise.then((data) => UnRegisterQueueResponse.decode(new _m0.Reader(data)));
    }
    Watch(request) {
        const data = WatchRequest.encode(request).finish();
        const promise = this.rpc.request(this.service, "Watch", data);
        return promise.then((data) => WatchResponse.decode(new _m0.Reader(data)));
    }
    UnWatch(request) {
        const data = UnWatchRequest.encode(request).finish();
        const promise = this.rpc.request(this.service, "UnWatch", data);
        return promise.then((data) => UnWatchResponse.decode(new _m0.Reader(data)));
    }
    PushWorkitem(request) {
        const data = PushWorkitemRequest.encode(request).finish();
        const promise = this.rpc.request(this.service, "PushWorkitem", data);
        return promise.then((data) => PushWorkitemResponse.decode(new _m0.Reader(data)));
    }
    PushWorkitems(request) {
        const data = PushWorkitemsRequest.encode(request).finish();
        const promise = this.rpc.request(this.service, "PushWorkitems", data);
        return promise.then((data) => PushWorkitemsResponse.decode(new _m0.Reader(data)));
    }
    UpdateWorkitem(request) {
        const data = UpdateWorkitemRequest.encode(request).finish();
        const promise = this.rpc.request(this.service, "UpdateWorkitem", data);
        return promise.then((data) => UpdateWorkitemResponse.decode(new _m0.Reader(data)));
    }
    PopWorkitem(request) {
        const data = PopWorkitemRequest.encode(request).finish();
        const promise = this.rpc.request(this.service, "PopWorkitem", data);
        return promise.then((data) => PopWorkitemResponse.decode(new _m0.Reader(data)));
    }
    DeleteWorkitem(request) {
        const data = DeleteWorkitemRequest.encode(request).finish();
        const promise = this.rpc.request(this.service, "DeleteWorkitem", data);
        return promise.then((data) => DeleteWorkitemResponse.decode(new _m0.Reader(data)));
    }
    AddWorkItemQueue(request) {
        const data = AddWorkItemQueueRequest.encode(request).finish();
        const promise = this.rpc.request(this.service, "AddWorkItemQueue", data);
        return promise.then((data) => AddWorkItemQueueResponse.decode(new _m0.Reader(data)));
    }
    UpdateWorkItemQueue(request) {
        const data = UpdateWorkItemQueueRequest.encode(request).finish();
        const promise = this.rpc.request(this.service, "UpdateWorkItemQueue", data);
        return promise.then((data) => UpdateWorkItemQueueResponse.decode(new _m0.Reader(data)));
    }
    DeleteWorkItemQueue(request) {
        const data = DeleteWorkItemQueueRequest.encode(request).finish();
        const promise = this.rpc.request(this.service, "DeleteWorkItemQueue", data);
        return promise.then((data) => DeleteWorkItemQueueResponse.decode(new _m0.Reader(data)));
    }
    EnsureCustomer(request) {
        const data = EnsureCustomerRequest.encode(request).finish();
        const promise = this.rpc.request(this.service, "EnsureCustomer", data);
        return promise.then((data) => EnsureCustomerResponse.decode(new _m0.Reader(data)));
    }
    InvokeOpenRPA(request) {
        const data = InvokeOpenRPARequest.encode(request).finish();
        const promise = this.rpc.request(this.service, "InvokeOpenRPA", data);
        return promise.then((data) => InvokeOpenRPAResponse.decode(new _m0.Reader(data)));
    }
    StartAgent(request) {
        const data = StartAgentRequest.encode(request).finish();
        const promise = this.rpc.request(this.service, "StartAgent", data);
        return promise.then((data) => StartAgentResponse.decode(new _m0.Reader(data)));
    }
    StopAgent(request) {
        const data = StopAgentRequest.encode(request).finish();
        const promise = this.rpc.request(this.service, "StopAgent", data);
        return promise.then((data) => StopAgentResponse.decode(new _m0.Reader(data)));
    }
    GetAgentLog(request) {
        const data = GetAgentLogRequest.encode(request).finish();
        const promise = this.rpc.request(this.service, "GetAgentLog", data);
        return promise.then((data) => GetAgentLogResponse.decode(new _m0.Reader(data)));
    }
    GetAgentPods(request) {
        const data = GetAgentPodsRequest.encode(request).finish();
        const promise = this.rpc.request(this.service, "GetAgentPods", data);
        return promise.then((data) => GetAgentPodsResponse.decode(new _m0.Reader(data)));
    }
    DeleteAgentPod(request) {
        const data = DeleteAgentPodRequest.encode(request).finish();
        const promise = this.rpc.request(this.service, "DeleteAgentPod", data);
        return promise.then((data) => DeleteAgentPodResponse.decode(new _m0.Reader(data)));
    }
    DeleteAgent(request) {
        const data = DeleteAgentRequest.encode(request).finish();
        const promise = this.rpc.request(this.service, "DeleteAgent", data);
        return promise.then((data) => DeleteAgentResponse.decode(new _m0.Reader(data)));
    }
    CreateIndex(request) {
        const data = CreateIndexRequest.encode(request).finish();
        const promise = this.rpc.request(this.service, "CreateIndex", data);
        return promise.then((data) => CreateIndexResponse.decode(new _m0.Reader(data)));
    }
    GetIndexes(request) {
        const data = GetIndexesRequest.encode(request).finish();
        const promise = this.rpc.request(this.service, "GetIndexes", data);
        return promise.then((data) => GetIndexesResponse.decode(new _m0.Reader(data)));
    }
    DropIndex(request) {
        const data = DropIndexRequest.encode(request).finish();
        const promise = this.rpc.request(this.service, "DropIndex", data);
        return promise.then((data) => DropIndexResponse.decode(new _m0.Reader(data)));
    }
    DeletePackage(request) {
        const data = DeletePackageRequest.encode(request).finish();
        const promise = this.rpc.request(this.service, "DeletePackage", data);
        return promise.then((data) => DeletePackageResponse.decode(new _m0.Reader(data)));
    }
}
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
//# sourceMappingURL=base.js.map