/* eslint-disable */
import * as _m0 from "protobufjs/minimal";

export const protobufPackage = "openiap";

export interface StartAgentRequest {
  /** _id of an agent from the agents collection */
  agentid: string;
}

export interface StartAgentResponse {
}

export interface StopAgentRequest {
  /** _id of an agent from the agents collection */
  agentid: string;
}

export interface StopAgentResponse {
}

export interface GetAgentLogRequest {
  /** _id of an agent from the agents collection */
  agentid: string;
  /** Pod name, found with GetAgentPods */
  podname: string;
}

export interface GetAgentLogResponse {
  result: string;
}

export interface GetAgentPodsRequest {
  /** _id of an agent from the agents collection */
  agentid: string;
  /** get memory and cpu usage per pod, this is resource intensive and should be used sparringly */
  stats: boolean;
}

export interface GetAgentPodsResponse {
  /** JSON array of pods */
  results: string;
}

export interface DeleteAgentPodRequest {
  /** _id of an agent from the agents collection */
  agentid: string;
  /** Pod name, found with GetAgentPods */
  podname: string;
}

export interface DeleteAgentPodResponse {
}

export interface DeleteAgentRequest {
  /** _id of an agent from the agents collection */
  agentid: string;
}

export interface DeleteAgentResponse {
}

function createBaseStartAgentRequest(): StartAgentRequest {
  return { agentid: "" };
}

export const StartAgentRequest = {
  encode(message: StartAgentRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.agentid !== "") {
      writer.uint32(10).string(message.agentid);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): StartAgentRequest {
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

  fromJSON(object: any): StartAgentRequest {
    return { agentid: isSet(object.agentid) ? String(object.agentid) : "" };
  },

  toJSON(message: StartAgentRequest): unknown {
    const obj: any = {};
    message.agentid !== undefined && (obj.agentid = message.agentid);
    return obj;
  },

  create<I extends Exact<DeepPartial<StartAgentRequest>, I>>(base?: I): StartAgentRequest {
    return StartAgentRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<StartAgentRequest>, I>>(object: I): StartAgentRequest {
    const message = createBaseStartAgentRequest();
    message.agentid = object.agentid ?? "";
    return message;
  },
};

function createBaseStartAgentResponse(): StartAgentResponse {
  return {};
}

export const StartAgentResponse = {
  encode(_: StartAgentResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): StartAgentResponse {
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

  fromJSON(_: any): StartAgentResponse {
    return {};
  },

  toJSON(_: StartAgentResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<StartAgentResponse>, I>>(base?: I): StartAgentResponse {
    return StartAgentResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<StartAgentResponse>, I>>(_: I): StartAgentResponse {
    const message = createBaseStartAgentResponse();
    return message;
  },
};

function createBaseStopAgentRequest(): StopAgentRequest {
  return { agentid: "" };
}

export const StopAgentRequest = {
  encode(message: StopAgentRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.agentid !== "") {
      writer.uint32(10).string(message.agentid);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): StopAgentRequest {
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

  fromJSON(object: any): StopAgentRequest {
    return { agentid: isSet(object.agentid) ? String(object.agentid) : "" };
  },

  toJSON(message: StopAgentRequest): unknown {
    const obj: any = {};
    message.agentid !== undefined && (obj.agentid = message.agentid);
    return obj;
  },

  create<I extends Exact<DeepPartial<StopAgentRequest>, I>>(base?: I): StopAgentRequest {
    return StopAgentRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<StopAgentRequest>, I>>(object: I): StopAgentRequest {
    const message = createBaseStopAgentRequest();
    message.agentid = object.agentid ?? "";
    return message;
  },
};

function createBaseStopAgentResponse(): StopAgentResponse {
  return {};
}

export const StopAgentResponse = {
  encode(_: StopAgentResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): StopAgentResponse {
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

  fromJSON(_: any): StopAgentResponse {
    return {};
  },

  toJSON(_: StopAgentResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<StopAgentResponse>, I>>(base?: I): StopAgentResponse {
    return StopAgentResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<StopAgentResponse>, I>>(_: I): StopAgentResponse {
    const message = createBaseStopAgentResponse();
    return message;
  },
};

function createBaseGetAgentLogRequest(): GetAgentLogRequest {
  return { agentid: "", podname: "" };
}

export const GetAgentLogRequest = {
  encode(message: GetAgentLogRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.agentid !== "") {
      writer.uint32(10).string(message.agentid);
    }
    if (message.podname !== "") {
      writer.uint32(18).string(message.podname);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetAgentLogRequest {
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

  fromJSON(object: any): GetAgentLogRequest {
    return {
      agentid: isSet(object.agentid) ? String(object.agentid) : "",
      podname: isSet(object.podname) ? String(object.podname) : "",
    };
  },

  toJSON(message: GetAgentLogRequest): unknown {
    const obj: any = {};
    message.agentid !== undefined && (obj.agentid = message.agentid);
    message.podname !== undefined && (obj.podname = message.podname);
    return obj;
  },

  create<I extends Exact<DeepPartial<GetAgentLogRequest>, I>>(base?: I): GetAgentLogRequest {
    return GetAgentLogRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<GetAgentLogRequest>, I>>(object: I): GetAgentLogRequest {
    const message = createBaseGetAgentLogRequest();
    message.agentid = object.agentid ?? "";
    message.podname = object.podname ?? "";
    return message;
  },
};

function createBaseGetAgentLogResponse(): GetAgentLogResponse {
  return { result: "" };
}

export const GetAgentLogResponse = {
  encode(message: GetAgentLogResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.result !== "") {
      writer.uint32(10).string(message.result);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetAgentLogResponse {
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

  fromJSON(object: any): GetAgentLogResponse {
    return { result: isSet(object.result) ? String(object.result) : "" };
  },

  toJSON(message: GetAgentLogResponse): unknown {
    const obj: any = {};
    message.result !== undefined && (obj.result = message.result);
    return obj;
  },

  create<I extends Exact<DeepPartial<GetAgentLogResponse>, I>>(base?: I): GetAgentLogResponse {
    return GetAgentLogResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<GetAgentLogResponse>, I>>(object: I): GetAgentLogResponse {
    const message = createBaseGetAgentLogResponse();
    message.result = object.result ?? "";
    return message;
  },
};

function createBaseGetAgentPodsRequest(): GetAgentPodsRequest {
  return { agentid: "", stats: false };
}

export const GetAgentPodsRequest = {
  encode(message: GetAgentPodsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.agentid !== "") {
      writer.uint32(10).string(message.agentid);
    }
    if (message.stats === true) {
      writer.uint32(16).bool(message.stats);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetAgentPodsRequest {
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

  fromJSON(object: any): GetAgentPodsRequest {
    return {
      agentid: isSet(object.agentid) ? String(object.agentid) : "",
      stats: isSet(object.stats) ? Boolean(object.stats) : false,
    };
  },

  toJSON(message: GetAgentPodsRequest): unknown {
    const obj: any = {};
    message.agentid !== undefined && (obj.agentid = message.agentid);
    message.stats !== undefined && (obj.stats = message.stats);
    return obj;
  },

  create<I extends Exact<DeepPartial<GetAgentPodsRequest>, I>>(base?: I): GetAgentPodsRequest {
    return GetAgentPodsRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<GetAgentPodsRequest>, I>>(object: I): GetAgentPodsRequest {
    const message = createBaseGetAgentPodsRequest();
    message.agentid = object.agentid ?? "";
    message.stats = object.stats ?? false;
    return message;
  },
};

function createBaseGetAgentPodsResponse(): GetAgentPodsResponse {
  return { results: "" };
}

export const GetAgentPodsResponse = {
  encode(message: GetAgentPodsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.results !== "") {
      writer.uint32(10).string(message.results);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetAgentPodsResponse {
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

  fromJSON(object: any): GetAgentPodsResponse {
    return { results: isSet(object.results) ? String(object.results) : "" };
  },

  toJSON(message: GetAgentPodsResponse): unknown {
    const obj: any = {};
    message.results !== undefined && (obj.results = message.results);
    return obj;
  },

  create<I extends Exact<DeepPartial<GetAgentPodsResponse>, I>>(base?: I): GetAgentPodsResponse {
    return GetAgentPodsResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<GetAgentPodsResponse>, I>>(object: I): GetAgentPodsResponse {
    const message = createBaseGetAgentPodsResponse();
    message.results = object.results ?? "";
    return message;
  },
};

function createBaseDeleteAgentPodRequest(): DeleteAgentPodRequest {
  return { agentid: "", podname: "" };
}

export const DeleteAgentPodRequest = {
  encode(message: DeleteAgentPodRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.agentid !== "") {
      writer.uint32(10).string(message.agentid);
    }
    if (message.podname !== "") {
      writer.uint32(18).string(message.podname);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DeleteAgentPodRequest {
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

  fromJSON(object: any): DeleteAgentPodRequest {
    return {
      agentid: isSet(object.agentid) ? String(object.agentid) : "",
      podname: isSet(object.podname) ? String(object.podname) : "",
    };
  },

  toJSON(message: DeleteAgentPodRequest): unknown {
    const obj: any = {};
    message.agentid !== undefined && (obj.agentid = message.agentid);
    message.podname !== undefined && (obj.podname = message.podname);
    return obj;
  },

  create<I extends Exact<DeepPartial<DeleteAgentPodRequest>, I>>(base?: I): DeleteAgentPodRequest {
    return DeleteAgentPodRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<DeleteAgentPodRequest>, I>>(object: I): DeleteAgentPodRequest {
    const message = createBaseDeleteAgentPodRequest();
    message.agentid = object.agentid ?? "";
    message.podname = object.podname ?? "";
    return message;
  },
};

function createBaseDeleteAgentPodResponse(): DeleteAgentPodResponse {
  return {};
}

export const DeleteAgentPodResponse = {
  encode(_: DeleteAgentPodResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DeleteAgentPodResponse {
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

  fromJSON(_: any): DeleteAgentPodResponse {
    return {};
  },

  toJSON(_: DeleteAgentPodResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<DeleteAgentPodResponse>, I>>(base?: I): DeleteAgentPodResponse {
    return DeleteAgentPodResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<DeleteAgentPodResponse>, I>>(_: I): DeleteAgentPodResponse {
    const message = createBaseDeleteAgentPodResponse();
    return message;
  },
};

function createBaseDeleteAgentRequest(): DeleteAgentRequest {
  return { agentid: "" };
}

export const DeleteAgentRequest = {
  encode(message: DeleteAgentRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.agentid !== "") {
      writer.uint32(10).string(message.agentid);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DeleteAgentRequest {
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

  fromJSON(object: any): DeleteAgentRequest {
    return { agentid: isSet(object.agentid) ? String(object.agentid) : "" };
  },

  toJSON(message: DeleteAgentRequest): unknown {
    const obj: any = {};
    message.agentid !== undefined && (obj.agentid = message.agentid);
    return obj;
  },

  create<I extends Exact<DeepPartial<DeleteAgentRequest>, I>>(base?: I): DeleteAgentRequest {
    return DeleteAgentRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<DeleteAgentRequest>, I>>(object: I): DeleteAgentRequest {
    const message = createBaseDeleteAgentRequest();
    message.agentid = object.agentid ?? "";
    return message;
  },
};

function createBaseDeleteAgentResponse(): DeleteAgentResponse {
  return {};
}

export const DeleteAgentResponse = {
  encode(_: DeleteAgentResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DeleteAgentResponse {
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

  fromJSON(_: any): DeleteAgentResponse {
    return {};
  },

  toJSON(_: DeleteAgentResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<DeleteAgentResponse>, I>>(base?: I): DeleteAgentResponse {
    return DeleteAgentResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<DeleteAgentResponse>, I>>(_: I): DeleteAgentResponse {
    const message = createBaseDeleteAgentResponse();
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
