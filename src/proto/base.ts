/* eslint-disable */
import * as _m0 from "protobufjs/minimal";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { Any } from "./google/protobuf/any";
import { Timestamp } from "./google/protobuf/timestamp";
import {
  AggregateRequest,
  AggregateResponse,
  CountRequest,
  CountResponse,
  DeleteManyRequest,
  DeleteManyResponse,
  DeleteOneRequest,
  DeleteOneResponse,
  DropCollectionRequest,
  DropCollectionResponse,
  GetDocumentVersionRequest,
  GetDocumentVersionResponse,
  InsertManyRequest,
  InsertManyResponse,
  InsertOneRequest,
  InsertOneResponse,
  InsertOrUpdateManyRequest,
  InsertOrUpdateManyResponse,
  InsertOrUpdateOneRequest,
  InsertOrUpdateOneResponse,
  ListCollectionsRequest,
  ListCollectionsResponse,
  QueryRequest,
  QueryResponse,
  UpdateDocumentRequest,
  UpdateDocumentResponse,
  UpdateOneRequest,
  UpdateOneResponse,
} from "./querys";
import {
  QueueMessageRequest,
  QueueMessageResponse,
  RegisterExchangeRequest,
  RegisterExchangeResponse,
  RegisterQueueRequest,
  RegisterQueueResponse,
  UnRegisterQueueRequest,
  UnRegisterQueueResponse,
} from "./queues";
import { UnWatchRequest, UnWatchResponse, WatchRequest, WatchResponse } from "./watch";
import {
  AddWorkItemQueueRequest,
  AddWorkItemQueueResponse,
  DeleteWorkitemRequest,
  DeleteWorkitemResponse,
  PopWorkitemRequest,
  PopWorkitemResponse,
  PushWorkitemRequest,
  PushWorkitemResponse,
  PushWorkitemsRequest,
  PushWorkitemsResponse,
  UpdateWorkitemRequest,
  UpdateWorkitemResponse,
} from "./workitems";

export const protobufPackage = "openiap";

export interface Envelope {
  command: string;
  priority: number;
  seq: number;
  id: string;
  rid: string;
  data: Any | undefined;
  jwt: string;
  traceid: string;
  spanid: string;
}

export interface PingRequest {
}

export interface PingResponse {
}

export interface ErrorResponse {
  message: string;
  code: number;
  stack: string;
}

export interface GetElementRequest {
  xpath: string;
}

export interface GetElementResponse {
  xpath: string;
}

export interface DownloadRequest {
  id: string;
  filename: string;
}

export interface DownloadResponse {
  id: string;
  filename: string;
  mimetype: string;
}

export interface UploadRequest {
  filename: string;
  mimetype: string;
}

export interface UploadResponse {
  id: string;
  filename: string;
  bytes: number;
  chunks: number;
  mb: number;
  elapsedTime: number;
  mbps: number;
}

export interface BeginStream {
  checksum: string;
  stat: Stat | undefined;
}

export interface Stream {
  data: Uint8Array;
}

export interface EndStream {
}

export interface Stat {
  birthtimeMs: number;
  blksize: number;
  blocks: number;
  ctime: Date | undefined;
  ctimeMs: number;
  dev: number;
  gid: number;
  ino: number;
  mode: number;
  mtime: Date | undefined;
  mtimeMs: number;
  nlink: number;
  rdev: number;
  size: number;
  uid: number;
}

export interface CustomCommandRequest {
  command: string;
  id: string;
  name: string;
  data: string;
}

export interface CustomCommandResponse {
  result: string;
}

export interface SigninRequest {
  username: string;
  password: string;
  jwt: string;
  ping: boolean;
  validateonly: boolean;
  agent: string;
  version: string;
  longtoken: boolean;
}

export interface SigninResponse {
  jwt: string;
  user: User | undefined;
}

export interface RefreshToken {
  username: string;
  jwt: string;
  user: User | undefined;
}

export interface Role {
  _id: string;
  name: string;
}

export interface User {
  _id: string;
  name: string;
  username: string;
  email: string;
  roles: Role[];
}

function createBaseEnvelope(): Envelope {
  return { command: "", priority: 0, seq: 0, id: "", rid: "", data: undefined, jwt: "", traceid: "", spanid: "" };
}

export const Envelope = {
  encode(message: Envelope, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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

  decode(input: _m0.Reader | Uint8Array, length?: number): Envelope {
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

  fromJSON(object: any): Envelope {
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

  toJSON(message: Envelope): unknown {
    const obj: any = {};
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

  create<I extends Exact<DeepPartial<Envelope>, I>>(base?: I): Envelope {
    return Envelope.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Envelope>, I>>(object: I): Envelope {
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

function createBasePingRequest(): PingRequest {
  return {};
}

export const PingRequest = {
  encode(_: PingRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PingRequest {
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

  fromJSON(_: any): PingRequest {
    return {};
  },

  toJSON(_: PingRequest): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<PingRequest>, I>>(base?: I): PingRequest {
    return PingRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<PingRequest>, I>>(_: I): PingRequest {
    const message = createBasePingRequest();
    return message;
  },
};

function createBasePingResponse(): PingResponse {
  return {};
}

export const PingResponse = {
  encode(_: PingResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PingResponse {
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

  fromJSON(_: any): PingResponse {
    return {};
  },

  toJSON(_: PingResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<PingResponse>, I>>(base?: I): PingResponse {
    return PingResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<PingResponse>, I>>(_: I): PingResponse {
    const message = createBasePingResponse();
    return message;
  },
};

function createBaseErrorResponse(): ErrorResponse {
  return { message: "", code: 0, stack: "" };
}

export const ErrorResponse = {
  encode(message: ErrorResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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

  decode(input: _m0.Reader | Uint8Array, length?: number): ErrorResponse {
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

  fromJSON(object: any): ErrorResponse {
    return {
      message: isSet(object.message) ? String(object.message) : "",
      code: isSet(object.code) ? Number(object.code) : 0,
      stack: isSet(object.stack) ? String(object.stack) : "",
    };
  },

  toJSON(message: ErrorResponse): unknown {
    const obj: any = {};
    message.message !== undefined && (obj.message = message.message);
    message.code !== undefined && (obj.code = Math.round(message.code));
    message.stack !== undefined && (obj.stack = message.stack);
    return obj;
  },

  create<I extends Exact<DeepPartial<ErrorResponse>, I>>(base?: I): ErrorResponse {
    return ErrorResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<ErrorResponse>, I>>(object: I): ErrorResponse {
    const message = createBaseErrorResponse();
    message.message = object.message ?? "";
    message.code = object.code ?? 0;
    message.stack = object.stack ?? "";
    return message;
  },
};

function createBaseGetElementRequest(): GetElementRequest {
  return { xpath: "" };
}

export const GetElementRequest = {
  encode(message: GetElementRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.xpath !== "") {
      writer.uint32(10).string(message.xpath);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetElementRequest {
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

  fromJSON(object: any): GetElementRequest {
    return { xpath: isSet(object.xpath) ? String(object.xpath) : "" };
  },

  toJSON(message: GetElementRequest): unknown {
    const obj: any = {};
    message.xpath !== undefined && (obj.xpath = message.xpath);
    return obj;
  },

  create<I extends Exact<DeepPartial<GetElementRequest>, I>>(base?: I): GetElementRequest {
    return GetElementRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<GetElementRequest>, I>>(object: I): GetElementRequest {
    const message = createBaseGetElementRequest();
    message.xpath = object.xpath ?? "";
    return message;
  },
};

function createBaseGetElementResponse(): GetElementResponse {
  return { xpath: "" };
}

export const GetElementResponse = {
  encode(message: GetElementResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.xpath !== "") {
      writer.uint32(10).string(message.xpath);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetElementResponse {
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

  fromJSON(object: any): GetElementResponse {
    return { xpath: isSet(object.xpath) ? String(object.xpath) : "" };
  },

  toJSON(message: GetElementResponse): unknown {
    const obj: any = {};
    message.xpath !== undefined && (obj.xpath = message.xpath);
    return obj;
  },

  create<I extends Exact<DeepPartial<GetElementResponse>, I>>(base?: I): GetElementResponse {
    return GetElementResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<GetElementResponse>, I>>(object: I): GetElementResponse {
    const message = createBaseGetElementResponse();
    message.xpath = object.xpath ?? "";
    return message;
  },
};

function createBaseDownloadRequest(): DownloadRequest {
  return { id: "", filename: "" };
}

export const DownloadRequest = {
  encode(message: DownloadRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.filename !== "") {
      writer.uint32(18).string(message.filename);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DownloadRequest {
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
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): DownloadRequest {
    return {
      id: isSet(object.id) ? String(object.id) : "",
      filename: isSet(object.filename) ? String(object.filename) : "",
    };
  },

  toJSON(message: DownloadRequest): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.filename !== undefined && (obj.filename = message.filename);
    return obj;
  },

  create<I extends Exact<DeepPartial<DownloadRequest>, I>>(base?: I): DownloadRequest {
    return DownloadRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<DownloadRequest>, I>>(object: I): DownloadRequest {
    const message = createBaseDownloadRequest();
    message.id = object.id ?? "";
    message.filename = object.filename ?? "";
    return message;
  },
};

function createBaseDownloadResponse(): DownloadResponse {
  return { id: "", filename: "", mimetype: "" };
}

export const DownloadResponse = {
  encode(message: DownloadResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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

  decode(input: _m0.Reader | Uint8Array, length?: number): DownloadResponse {
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

  fromJSON(object: any): DownloadResponse {
    return {
      id: isSet(object.id) ? String(object.id) : "",
      filename: isSet(object.filename) ? String(object.filename) : "",
      mimetype: isSet(object.mimetype) ? String(object.mimetype) : "",
    };
  },

  toJSON(message: DownloadResponse): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.filename !== undefined && (obj.filename = message.filename);
    message.mimetype !== undefined && (obj.mimetype = message.mimetype);
    return obj;
  },

  create<I extends Exact<DeepPartial<DownloadResponse>, I>>(base?: I): DownloadResponse {
    return DownloadResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<DownloadResponse>, I>>(object: I): DownloadResponse {
    const message = createBaseDownloadResponse();
    message.id = object.id ?? "";
    message.filename = object.filename ?? "";
    message.mimetype = object.mimetype ?? "";
    return message;
  },
};

function createBaseUploadRequest(): UploadRequest {
  return { filename: "", mimetype: "" };
}

export const UploadRequest = {
  encode(message: UploadRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.filename !== "") {
      writer.uint32(10).string(message.filename);
    }
    if (message.mimetype !== "") {
      writer.uint32(18).string(message.mimetype);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UploadRequest {
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
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): UploadRequest {
    return {
      filename: isSet(object.filename) ? String(object.filename) : "",
      mimetype: isSet(object.mimetype) ? String(object.mimetype) : "",
    };
  },

  toJSON(message: UploadRequest): unknown {
    const obj: any = {};
    message.filename !== undefined && (obj.filename = message.filename);
    message.mimetype !== undefined && (obj.mimetype = message.mimetype);
    return obj;
  },

  create<I extends Exact<DeepPartial<UploadRequest>, I>>(base?: I): UploadRequest {
    return UploadRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<UploadRequest>, I>>(object: I): UploadRequest {
    const message = createBaseUploadRequest();
    message.filename = object.filename ?? "";
    message.mimetype = object.mimetype ?? "";
    return message;
  },
};

function createBaseUploadResponse(): UploadResponse {
  return { id: "", filename: "", bytes: 0, chunks: 0, mb: 0, elapsedTime: 0, mbps: 0 };
}

export const UploadResponse = {
  encode(message: UploadResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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

  decode(input: _m0.Reader | Uint8Array, length?: number): UploadResponse {
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

  fromJSON(object: any): UploadResponse {
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

  toJSON(message: UploadResponse): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.filename !== undefined && (obj.filename = message.filename);
    message.bytes !== undefined && (obj.bytes = Math.round(message.bytes));
    message.chunks !== undefined && (obj.chunks = Math.round(message.chunks));
    message.mb !== undefined && (obj.mb = message.mb);
    message.elapsedTime !== undefined && (obj.elapsedTime = Math.round(message.elapsedTime));
    message.mbps !== undefined && (obj.mbps = message.mbps);
    return obj;
  },

  create<I extends Exact<DeepPartial<UploadResponse>, I>>(base?: I): UploadResponse {
    return UploadResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<UploadResponse>, I>>(object: I): UploadResponse {
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

function createBaseBeginStream(): BeginStream {
  return { checksum: "", stat: undefined };
}

export const BeginStream = {
  encode(message: BeginStream, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.checksum !== "") {
      writer.uint32(10).string(message.checksum);
    }
    if (message.stat !== undefined) {
      Stat.encode(message.stat, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): BeginStream {
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

  fromJSON(object: any): BeginStream {
    return {
      checksum: isSet(object.checksum) ? String(object.checksum) : "",
      stat: isSet(object.stat) ? Stat.fromJSON(object.stat) : undefined,
    };
  },

  toJSON(message: BeginStream): unknown {
    const obj: any = {};
    message.checksum !== undefined && (obj.checksum = message.checksum);
    message.stat !== undefined && (obj.stat = message.stat ? Stat.toJSON(message.stat) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<BeginStream>, I>>(base?: I): BeginStream {
    return BeginStream.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<BeginStream>, I>>(object: I): BeginStream {
    const message = createBaseBeginStream();
    message.checksum = object.checksum ?? "";
    message.stat = (object.stat !== undefined && object.stat !== null) ? Stat.fromPartial(object.stat) : undefined;
    return message;
  },
};

function createBaseStream(): Stream {
  return { data: new Uint8Array() };
}

export const Stream = {
  encode(message: Stream, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.data.length !== 0) {
      writer.uint32(10).bytes(message.data);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Stream {
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

  fromJSON(object: any): Stream {
    return { data: isSet(object.data) ? bytesFromBase64(object.data) : new Uint8Array() };
  },

  toJSON(message: Stream): unknown {
    const obj: any = {};
    message.data !== undefined &&
      (obj.data = base64FromBytes(message.data !== undefined ? message.data : new Uint8Array()));
    return obj;
  },

  create<I extends Exact<DeepPartial<Stream>, I>>(base?: I): Stream {
    return Stream.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Stream>, I>>(object: I): Stream {
    const message = createBaseStream();
    message.data = object.data ?? new Uint8Array();
    return message;
  },
};

function createBaseEndStream(): EndStream {
  return {};
}

export const EndStream = {
  encode(_: EndStream, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EndStream {
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

  fromJSON(_: any): EndStream {
    return {};
  },

  toJSON(_: EndStream): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<EndStream>, I>>(base?: I): EndStream {
    return EndStream.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<EndStream>, I>>(_: I): EndStream {
    const message = createBaseEndStream();
    return message;
  },
};

function createBaseStat(): Stat {
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
  encode(message: Stat, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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

  decode(input: _m0.Reader | Uint8Array, length?: number): Stat {
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

  fromJSON(object: any): Stat {
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

  toJSON(message: Stat): unknown {
    const obj: any = {};
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

  create<I extends Exact<DeepPartial<Stat>, I>>(base?: I): Stat {
    return Stat.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Stat>, I>>(object: I): Stat {
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

function createBaseCustomCommandRequest(): CustomCommandRequest {
  return { command: "", id: "", name: "", data: "" };
}

export const CustomCommandRequest = {
  encode(message: CustomCommandRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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

  decode(input: _m0.Reader | Uint8Array, length?: number): CustomCommandRequest {
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

  fromJSON(object: any): CustomCommandRequest {
    return {
      command: isSet(object.command) ? String(object.command) : "",
      id: isSet(object.id) ? String(object.id) : "",
      name: isSet(object.name) ? String(object.name) : "",
      data: isSet(object.data) ? String(object.data) : "",
    };
  },

  toJSON(message: CustomCommandRequest): unknown {
    const obj: any = {};
    message.command !== undefined && (obj.command = message.command);
    message.id !== undefined && (obj.id = message.id);
    message.name !== undefined && (obj.name = message.name);
    message.data !== undefined && (obj.data = message.data);
    return obj;
  },

  create<I extends Exact<DeepPartial<CustomCommandRequest>, I>>(base?: I): CustomCommandRequest {
    return CustomCommandRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CustomCommandRequest>, I>>(object: I): CustomCommandRequest {
    const message = createBaseCustomCommandRequest();
    message.command = object.command ?? "";
    message.id = object.id ?? "";
    message.name = object.name ?? "";
    message.data = object.data ?? "";
    return message;
  },
};

function createBaseCustomCommandResponse(): CustomCommandResponse {
  return { result: "" };
}

export const CustomCommandResponse = {
  encode(message: CustomCommandResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.result !== "") {
      writer.uint32(10).string(message.result);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CustomCommandResponse {
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

  fromJSON(object: any): CustomCommandResponse {
    return { result: isSet(object.result) ? String(object.result) : "" };
  },

  toJSON(message: CustomCommandResponse): unknown {
    const obj: any = {};
    message.result !== undefined && (obj.result = message.result);
    return obj;
  },

  create<I extends Exact<DeepPartial<CustomCommandResponse>, I>>(base?: I): CustomCommandResponse {
    return CustomCommandResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CustomCommandResponse>, I>>(object: I): CustomCommandResponse {
    const message = createBaseCustomCommandResponse();
    message.result = object.result ?? "";
    return message;
  },
};

function createBaseSigninRequest(): SigninRequest {
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
  encode(message: SigninRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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

  decode(input: _m0.Reader | Uint8Array, length?: number): SigninRequest {
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

  fromJSON(object: any): SigninRequest {
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

  toJSON(message: SigninRequest): unknown {
    const obj: any = {};
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

  create<I extends Exact<DeepPartial<SigninRequest>, I>>(base?: I): SigninRequest {
    return SigninRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<SigninRequest>, I>>(object: I): SigninRequest {
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

function createBaseSigninResponse(): SigninResponse {
  return { jwt: "", user: undefined };
}

export const SigninResponse = {
  encode(message: SigninResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.jwt !== "") {
      writer.uint32(10).string(message.jwt);
    }
    if (message.user !== undefined) {
      User.encode(message.user, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SigninResponse {
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
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): SigninResponse {
    return {
      jwt: isSet(object.jwt) ? String(object.jwt) : "",
      user: isSet(object.user) ? User.fromJSON(object.user) : undefined,
    };
  },

  toJSON(message: SigninResponse): unknown {
    const obj: any = {};
    message.jwt !== undefined && (obj.jwt = message.jwt);
    message.user !== undefined && (obj.user = message.user ? User.toJSON(message.user) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<SigninResponse>, I>>(base?: I): SigninResponse {
    return SigninResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<SigninResponse>, I>>(object: I): SigninResponse {
    const message = createBaseSigninResponse();
    message.jwt = object.jwt ?? "";
    message.user = (object.user !== undefined && object.user !== null) ? User.fromPartial(object.user) : undefined;
    return message;
  },
};

function createBaseRefreshToken(): RefreshToken {
  return { username: "", jwt: "", user: undefined };
}

export const RefreshToken = {
  encode(message: RefreshToken, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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

  decode(input: _m0.Reader | Uint8Array, length?: number): RefreshToken {
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

  fromJSON(object: any): RefreshToken {
    return {
      username: isSet(object.username) ? String(object.username) : "",
      jwt: isSet(object.jwt) ? String(object.jwt) : "",
      user: isSet(object.user) ? User.fromJSON(object.user) : undefined,
    };
  },

  toJSON(message: RefreshToken): unknown {
    const obj: any = {};
    message.username !== undefined && (obj.username = message.username);
    message.jwt !== undefined && (obj.jwt = message.jwt);
    message.user !== undefined && (obj.user = message.user ? User.toJSON(message.user) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<RefreshToken>, I>>(base?: I): RefreshToken {
    return RefreshToken.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<RefreshToken>, I>>(object: I): RefreshToken {
    const message = createBaseRefreshToken();
    message.username = object.username ?? "";
    message.jwt = object.jwt ?? "";
    message.user = (object.user !== undefined && object.user !== null) ? User.fromPartial(object.user) : undefined;
    return message;
  },
};

function createBaseRole(): Role {
  return { _id: "", name: "" };
}

export const Role = {
  encode(message: Role, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message._id !== "") {
      writer.uint32(10).string(message._id);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Role {
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

  fromJSON(object: any): Role {
    return { _id: isSet(object._id) ? String(object._id) : "", name: isSet(object.name) ? String(object.name) : "" };
  },

  toJSON(message: Role): unknown {
    const obj: any = {};
    message._id !== undefined && (obj._id = message._id);
    message.name !== undefined && (obj.name = message.name);
    return obj;
  },

  create<I extends Exact<DeepPartial<Role>, I>>(base?: I): Role {
    return Role.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Role>, I>>(object: I): Role {
    const message = createBaseRole();
    message._id = object._id ?? "";
    message.name = object.name ?? "";
    return message;
  },
};

function createBaseUser(): User {
  return { _id: "", name: "", username: "", email: "", roles: [] };
}

export const User = {
  encode(message: User, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
      Role.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): User {
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

  fromJSON(object: any): User {
    return {
      _id: isSet(object._id) ? String(object._id) : "",
      name: isSet(object.name) ? String(object.name) : "",
      username: isSet(object.username) ? String(object.username) : "",
      email: isSet(object.email) ? String(object.email) : "",
      roles: Array.isArray(object?.roles) ? object.roles.map((e: any) => Role.fromJSON(e)) : [],
    };
  },

  toJSON(message: User): unknown {
    const obj: any = {};
    message._id !== undefined && (obj._id = message._id);
    message.name !== undefined && (obj.name = message.name);
    message.username !== undefined && (obj.username = message.username);
    message.email !== undefined && (obj.email = message.email);
    if (message.roles) {
      obj.roles = message.roles.map((e) => e ? Role.toJSON(e) : undefined);
    } else {
      obj.roles = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<User>, I>>(base?: I): User {
    return User.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<User>, I>>(object: I): User {
    const message = createBaseUser();
    message._id = object._id ?? "";
    message.name = object.name ?? "";
    message.username = object.username ?? "";
    message.email = object.email ?? "";
    message.roles = object.roles?.map((e) => Role.fromPartial(e)) || [];
    return message;
  },
};

export interface FlowService {
  SetupStream(request: Observable<Envelope>): Observable<Envelope>;
  Signin(request: SigninRequest): Promise<SigninResponse>;
  Download(request: DownloadRequest): Promise<DownloadResponse>;
  Upload(request: UploadRequest): Promise<UploadResponse>;
  CustomCommand(request: CustomCommandRequest): Promise<CustomCommandResponse>;
  ListCollections(request: ListCollectionsRequest): Promise<ListCollectionsResponse>;
  DropCollection(request: DropCollectionRequest): Promise<DropCollectionResponse>;
  Query(request: QueryRequest): Promise<QueryResponse>;
  GetDocumentVersion(request: GetDocumentVersionRequest): Promise<GetDocumentVersionResponse>;
  Aggregate(request: AggregateRequest): Promise<AggregateResponse>;
  Count(request: CountRequest): Promise<CountResponse>;
  InsertOne(request: InsertOneRequest): Promise<InsertOneResponse>;
  InsertMany(request: InsertManyRequest): Promise<InsertManyResponse>;
  UpdateOne(request: UpdateOneRequest): Promise<UpdateOneResponse>;
  UpdateDocument(request: UpdateDocumentRequest): Promise<UpdateDocumentResponse>;
  InsertOrUpdateOne(request: InsertOrUpdateOneRequest): Promise<InsertOrUpdateOneResponse>;
  InsertOrUpdateMany(request: InsertOrUpdateManyRequest): Promise<InsertOrUpdateManyResponse>;
  DeleteOne(request: DeleteOneRequest): Promise<DeleteOneResponse>;
  DeleteMany(request: DeleteManyRequest): Promise<DeleteManyResponse>;
  RegisterQueue(request: RegisterQueueRequest): Promise<RegisterQueueResponse>;
  RegisterExchange(request: RegisterExchangeRequest): Promise<RegisterExchangeResponse>;
  QueueMessage(request: QueueMessageRequest): Promise<QueueMessageResponse>;
  UnRegisterQueue(request: UnRegisterQueueRequest): Promise<UnRegisterQueueResponse>;
  Watch(request: WatchRequest): Promise<WatchResponse>;
  UnWatch(request: UnWatchRequest): Promise<UnWatchResponse>;
  PushWorkitem(request: PushWorkitemRequest): Promise<PushWorkitemResponse>;
  PushWorkitems(request: PushWorkitemsRequest): Promise<PushWorkitemsResponse>;
  UpdateWorkitem(request: UpdateWorkitemRequest): Promise<UpdateWorkitemResponse>;
  PopWorkitem(request: PopWorkitemRequest): Promise<PopWorkitemResponse>;
  DeleteWorkitem(request: DeleteWorkitemRequest): Promise<DeleteWorkitemResponse>;
  AddWorkItemQueue(request: AddWorkItemQueueRequest): Promise<AddWorkItemQueueResponse>;
}

export class FlowServiceClientImpl implements FlowService {
  private readonly rpc: Rpc;
  private readonly service: string;
  constructor(rpc: Rpc, opts?: { service?: string }) {
    this.service = opts?.service || "openiap.FlowService";
    this.rpc = rpc;
    this.SetupStream = this.SetupStream.bind(this);
    this.Signin = this.Signin.bind(this);
    this.Download = this.Download.bind(this);
    this.Upload = this.Upload.bind(this);
    this.CustomCommand = this.CustomCommand.bind(this);
    this.ListCollections = this.ListCollections.bind(this);
    this.DropCollection = this.DropCollection.bind(this);
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
  }
  SetupStream(request: Observable<Envelope>): Observable<Envelope> {
    const data = request.pipe(map((request) => Envelope.encode(request).finish()));
    const result = this.rpc.bidirectionalStreamingRequest(this.service, "SetupStream", data);
    return result.pipe(map((data) => Envelope.decode(new _m0.Reader(data))));
  }

  Signin(request: SigninRequest): Promise<SigninResponse> {
    const data = SigninRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "Signin", data);
    return promise.then((data) => SigninResponse.decode(new _m0.Reader(data)));
  }

  Download(request: DownloadRequest): Promise<DownloadResponse> {
    const data = DownloadRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "Download", data);
    return promise.then((data) => DownloadResponse.decode(new _m0.Reader(data)));
  }

  Upload(request: UploadRequest): Promise<UploadResponse> {
    const data = UploadRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "Upload", data);
    return promise.then((data) => UploadResponse.decode(new _m0.Reader(data)));
  }

  CustomCommand(request: CustomCommandRequest): Promise<CustomCommandResponse> {
    const data = CustomCommandRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "CustomCommand", data);
    return promise.then((data) => CustomCommandResponse.decode(new _m0.Reader(data)));
  }

  ListCollections(request: ListCollectionsRequest): Promise<ListCollectionsResponse> {
    const data = ListCollectionsRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "ListCollections", data);
    return promise.then((data) => ListCollectionsResponse.decode(new _m0.Reader(data)));
  }

  DropCollection(request: DropCollectionRequest): Promise<DropCollectionResponse> {
    const data = DropCollectionRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "DropCollection", data);
    return promise.then((data) => DropCollectionResponse.decode(new _m0.Reader(data)));
  }

  Query(request: QueryRequest): Promise<QueryResponse> {
    const data = QueryRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "Query", data);
    return promise.then((data) => QueryResponse.decode(new _m0.Reader(data)));
  }

  GetDocumentVersion(request: GetDocumentVersionRequest): Promise<GetDocumentVersionResponse> {
    const data = GetDocumentVersionRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "GetDocumentVersion", data);
    return promise.then((data) => GetDocumentVersionResponse.decode(new _m0.Reader(data)));
  }

  Aggregate(request: AggregateRequest): Promise<AggregateResponse> {
    const data = AggregateRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "Aggregate", data);
    return promise.then((data) => AggregateResponse.decode(new _m0.Reader(data)));
  }

  Count(request: CountRequest): Promise<CountResponse> {
    const data = CountRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "Count", data);
    return promise.then((data) => CountResponse.decode(new _m0.Reader(data)));
  }

  InsertOne(request: InsertOneRequest): Promise<InsertOneResponse> {
    const data = InsertOneRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "InsertOne", data);
    return promise.then((data) => InsertOneResponse.decode(new _m0.Reader(data)));
  }

  InsertMany(request: InsertManyRequest): Promise<InsertManyResponse> {
    const data = InsertManyRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "InsertMany", data);
    return promise.then((data) => InsertManyResponse.decode(new _m0.Reader(data)));
  }

  UpdateOne(request: UpdateOneRequest): Promise<UpdateOneResponse> {
    const data = UpdateOneRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "UpdateOne", data);
    return promise.then((data) => UpdateOneResponse.decode(new _m0.Reader(data)));
  }

  UpdateDocument(request: UpdateDocumentRequest): Promise<UpdateDocumentResponse> {
    const data = UpdateDocumentRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "UpdateDocument", data);
    return promise.then((data) => UpdateDocumentResponse.decode(new _m0.Reader(data)));
  }

  InsertOrUpdateOne(request: InsertOrUpdateOneRequest): Promise<InsertOrUpdateOneResponse> {
    const data = InsertOrUpdateOneRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "InsertOrUpdateOne", data);
    return promise.then((data) => InsertOrUpdateOneResponse.decode(new _m0.Reader(data)));
  }

  InsertOrUpdateMany(request: InsertOrUpdateManyRequest): Promise<InsertOrUpdateManyResponse> {
    const data = InsertOrUpdateManyRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "InsertOrUpdateMany", data);
    return promise.then((data) => InsertOrUpdateManyResponse.decode(new _m0.Reader(data)));
  }

  DeleteOne(request: DeleteOneRequest): Promise<DeleteOneResponse> {
    const data = DeleteOneRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "DeleteOne", data);
    return promise.then((data) => DeleteOneResponse.decode(new _m0.Reader(data)));
  }

  DeleteMany(request: DeleteManyRequest): Promise<DeleteManyResponse> {
    const data = DeleteManyRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "DeleteMany", data);
    return promise.then((data) => DeleteManyResponse.decode(new _m0.Reader(data)));
  }

  RegisterQueue(request: RegisterQueueRequest): Promise<RegisterQueueResponse> {
    const data = RegisterQueueRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "RegisterQueue", data);
    return promise.then((data) => RegisterQueueResponse.decode(new _m0.Reader(data)));
  }

  RegisterExchange(request: RegisterExchangeRequest): Promise<RegisterExchangeResponse> {
    const data = RegisterExchangeRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "RegisterExchange", data);
    return promise.then((data) => RegisterExchangeResponse.decode(new _m0.Reader(data)));
  }

  QueueMessage(request: QueueMessageRequest): Promise<QueueMessageResponse> {
    const data = QueueMessageRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "QueueMessage", data);
    return promise.then((data) => QueueMessageResponse.decode(new _m0.Reader(data)));
  }

  UnRegisterQueue(request: UnRegisterQueueRequest): Promise<UnRegisterQueueResponse> {
    const data = UnRegisterQueueRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "UnRegisterQueue", data);
    return promise.then((data) => UnRegisterQueueResponse.decode(new _m0.Reader(data)));
  }

  Watch(request: WatchRequest): Promise<WatchResponse> {
    const data = WatchRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "Watch", data);
    return promise.then((data) => WatchResponse.decode(new _m0.Reader(data)));
  }

  UnWatch(request: UnWatchRequest): Promise<UnWatchResponse> {
    const data = UnWatchRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "UnWatch", data);
    return promise.then((data) => UnWatchResponse.decode(new _m0.Reader(data)));
  }

  PushWorkitem(request: PushWorkitemRequest): Promise<PushWorkitemResponse> {
    const data = PushWorkitemRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "PushWorkitem", data);
    return promise.then((data) => PushWorkitemResponse.decode(new _m0.Reader(data)));
  }

  PushWorkitems(request: PushWorkitemsRequest): Promise<PushWorkitemsResponse> {
    const data = PushWorkitemsRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "PushWorkitems", data);
    return promise.then((data) => PushWorkitemsResponse.decode(new _m0.Reader(data)));
  }

  UpdateWorkitem(request: UpdateWorkitemRequest): Promise<UpdateWorkitemResponse> {
    const data = UpdateWorkitemRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "UpdateWorkitem", data);
    return promise.then((data) => UpdateWorkitemResponse.decode(new _m0.Reader(data)));
  }

  PopWorkitem(request: PopWorkitemRequest): Promise<PopWorkitemResponse> {
    const data = PopWorkitemRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "PopWorkitem", data);
    return promise.then((data) => PopWorkitemResponse.decode(new _m0.Reader(data)));
  }

  DeleteWorkitem(request: DeleteWorkitemRequest): Promise<DeleteWorkitemResponse> {
    const data = DeleteWorkitemRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "DeleteWorkitem", data);
    return promise.then((data) => DeleteWorkitemResponse.decode(new _m0.Reader(data)));
  }

  AddWorkItemQueue(request: AddWorkItemQueueRequest): Promise<AddWorkItemQueueResponse> {
    const data = AddWorkItemQueueRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "AddWorkItemQueue", data);
    return promise.then((data) => AddWorkItemQueueResponse.decode(new _m0.Reader(data)));
  }
}

interface Rpc {
  request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
  clientStreamingRequest(service: string, method: string, data: Observable<Uint8Array>): Promise<Uint8Array>;
  serverStreamingRequest(service: string, method: string, data: Uint8Array): Observable<Uint8Array>;
  bidirectionalStreamingRequest(service: string, method: string, data: Observable<Uint8Array>): Observable<Uint8Array>;
}

declare var self: any | undefined;
declare var window: any | undefined;
declare var global: any | undefined;
var tsProtoGlobalThis: any = (() => {
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

function bytesFromBase64(b64: string): Uint8Array {
  if (tsProtoGlobalThis.Buffer) {
    return Uint8Array.from(tsProtoGlobalThis.Buffer.from(b64, "base64"));
  } else {
    const bin = tsProtoGlobalThis.atob(b64);
    const arr = new Uint8Array(bin.length);
    for (let i = 0; i < bin.length; ++i) {
      arr[i] = bin.charCodeAt(i);
    }
    return arr;
  }
}

function base64FromBytes(arr: Uint8Array): string {
  if (tsProtoGlobalThis.Buffer) {
    return tsProtoGlobalThis.Buffer.from(arr).toString("base64");
  } else {
    const bin: string[] = [];
    arr.forEach((byte) => {
      bin.push(String.fromCharCode(byte));
    });
    return tsProtoGlobalThis.btoa(bin.join(""));
  }
}

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & { [K in Exclude<keyof I, KeysOfUnion<P>>]: never };

function toTimestamp(date: Date): Timestamp {
  const seconds = date.getTime() / 1_000;
  const nanos = (date.getTime() % 1_000) * 1_000_000;
  return { seconds, nanos };
}

function fromTimestamp(t: Timestamp): Date {
  let millis = t.seconds * 1_000;
  millis += t.nanos / 1_000_000;
  return new Date(millis);
}

function fromJsonTimestamp(o: any): Date {
  if (o instanceof Date) {
    return o;
  } else if (typeof o === "string") {
    return new Date(o);
  } else {
    return fromTimestamp(Timestamp.fromJSON(o));
  }
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
