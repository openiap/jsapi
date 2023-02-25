/* eslint-disable */
import * as _m0 from "protobufjs/minimal";

export const protobufPackage = "openiap";

export interface WatchRequest {
  collectionname: string;
  paths: string[];
}

export interface WatchResponse {
  id: string;
}

export interface WatchEvent {
  id: string;
  operation: string;
  document: string;
}

export interface UnWatchRequest {
  id: string;
}

export interface UnWatchResponse {
}

function createBaseWatchRequest(): WatchRequest {
  return { collectionname: "", paths: [] };
}

export const WatchRequest = {
  encode(message: WatchRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.collectionname !== "") {
      writer.uint32(10).string(message.collectionname);
    }
    for (const v of message.paths) {
      writer.uint32(18).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): WatchRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseWatchRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
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

  fromJSON(object: any): WatchRequest {
    return {
      collectionname: isSet(object.collectionname) ? String(object.collectionname) : "",
      paths: Array.isArray(object?.paths) ? object.paths.map((e: any) => String(e)) : [],
    };
  },

  toJSON(message: WatchRequest): unknown {
    const obj: any = {};
    message.collectionname !== undefined && (obj.collectionname = message.collectionname);
    if (message.paths) {
      obj.paths = message.paths.map((e) => e);
    } else {
      obj.paths = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<WatchRequest>, I>>(base?: I): WatchRequest {
    return WatchRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<WatchRequest>, I>>(object: I): WatchRequest {
    const message = createBaseWatchRequest();
    message.collectionname = object.collectionname ?? "";
    message.paths = object.paths?.map((e) => e) || [];
    return message;
  },
};

function createBaseWatchResponse(): WatchResponse {
  return { id: "" };
}

export const WatchResponse = {
  encode(message: WatchResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): WatchResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseWatchResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
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

  fromJSON(object: any): WatchResponse {
    return { id: isSet(object.id) ? String(object.id) : "" };
  },

  toJSON(message: WatchResponse): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  create<I extends Exact<DeepPartial<WatchResponse>, I>>(base?: I): WatchResponse {
    return WatchResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<WatchResponse>, I>>(object: I): WatchResponse {
    const message = createBaseWatchResponse();
    message.id = object.id ?? "";
    return message;
  },
};

function createBaseWatchEvent(): WatchEvent {
  return { id: "", operation: "", document: "" };
}

export const WatchEvent = {
  encode(message: WatchEvent, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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

  decode(input: _m0.Reader | Uint8Array, length?: number): WatchEvent {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseWatchEvent();
    while (reader.pos < end) {
      const tag = reader.uint32();
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

  fromJSON(object: any): WatchEvent {
    return {
      id: isSet(object.id) ? String(object.id) : "",
      operation: isSet(object.operation) ? String(object.operation) : "",
      document: isSet(object.document) ? String(object.document) : "",
    };
  },

  toJSON(message: WatchEvent): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.operation !== undefined && (obj.operation = message.operation);
    message.document !== undefined && (obj.document = message.document);
    return obj;
  },

  create<I extends Exact<DeepPartial<WatchEvent>, I>>(base?: I): WatchEvent {
    return WatchEvent.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<WatchEvent>, I>>(object: I): WatchEvent {
    const message = createBaseWatchEvent();
    message.id = object.id ?? "";
    message.operation = object.operation ?? "";
    message.document = object.document ?? "";
    return message;
  },
};

function createBaseUnWatchRequest(): UnWatchRequest {
  return { id: "" };
}

export const UnWatchRequest = {
  encode(message: UnWatchRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UnWatchRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUnWatchRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
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

  fromJSON(object: any): UnWatchRequest {
    return { id: isSet(object.id) ? String(object.id) : "" };
  },

  toJSON(message: UnWatchRequest): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  create<I extends Exact<DeepPartial<UnWatchRequest>, I>>(base?: I): UnWatchRequest {
    return UnWatchRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<UnWatchRequest>, I>>(object: I): UnWatchRequest {
    const message = createBaseUnWatchRequest();
    message.id = object.id ?? "";
    return message;
  },
};

function createBaseUnWatchResponse(): UnWatchResponse {
  return {};
}

export const UnWatchResponse = {
  encode(_: UnWatchResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UnWatchResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUnWatchResponse();
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

  fromJSON(_: any): UnWatchResponse {
    return {};
  },

  toJSON(_: UnWatchResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<UnWatchResponse>, I>>(base?: I): UnWatchResponse {
    return UnWatchResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<UnWatchResponse>, I>>(_: I): UnWatchResponse {
    const message = createBaseUnWatchResponse();
    return message;
  },
};

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & { [K in Exclude<keyof I, KeysOfUnion<P>>]: never };

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
