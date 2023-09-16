/* eslint-disable */
import * as _m0 from "protobufjs/minimal";

export const protobufPackage = "openiap";

export interface ListCollectionsRequest {
  includehist: boolean;
}

export interface ListCollectionsResponse {
  results: string;
}

export interface DropCollectionRequest {
  collectionname: string;
}

export interface DropCollectionResponse {
}

export interface col_timeseries {
  timeField: string;
  metaField: string;
  granularity: string;
}

export interface col_collation {
  locale: string;
  caseLevel: boolean;
  caseFirst: string;
  strength: number;
  numericOrdering: boolean;
  alternate: string;
  maxVariable: string;
  backwards: boolean;
}

export interface CreateCollectionRequest {
  collectionname: string;
  collation: col_collation | undefined;
  timeseries: col_timeseries | undefined;
  expireAfterSeconds: number;
  changeStreamPreAndPostImages: boolean;
  capped: boolean;
  max: number;
  size: number;
}

export interface CreateCollectionResponse {
}

export interface QueryRequest {
  query: string;
  collectionname: string;
  projection: string;
  top: number;
  skip: number;
  orderby: string;
  queryas: string;
}

export interface QueryResponse {
  results: string;
}

export interface GetDocumentVersionRequest {
  collectionname: string;
  id: string;
  version: number;
  decrypt: boolean;
}

export interface GetDocumentVersionResponse {
  result: string;
}

export interface AggregateRequest {
  collectionname: string;
  aggregates: string;
  queryas: string;
  hint: string;
}

export interface AggregateResponse {
  results: string;
}

export interface CountRequest {
  collectionname: string;
  query: string;
  queryas: string;
}

export interface CountResponse {
  result: number;
}

export interface DistinctRequest {
  collectionname: string;
  field: string;
  query: string;
  queryas: string;
  options: string;
}

export interface DistinctResponse {
  results: string[];
}

export interface InsertOneRequest {
  collectionname: string;
  item: string;
  w: number;
  j: boolean;
}

export interface InsertOneResponse {
  result: string;
}

export interface InsertManyRequest {
  collectionname: string;
  items: string;
  w: number;
  j: boolean;
  skipresults: boolean;
}

export interface InsertManyResponse {
  results: string;
}

export interface UpdateOneRequest {
  collectionname: string;
  item: string;
  w: number;
  j: boolean;
}

export interface UpdateOneResponse {
  result: string;
}

export interface UpdateDocumentRequest {
  collectionname: string;
  query: string;
  document: string;
  w: number;
  j: boolean;
}

export interface UpdateResult {
  acknowledged: boolean;
  matchedCount: number;
  modifiedCount: number;
  upsertedCount: number;
  upsertedId: string;
}

export interface UpdateDocumentResponse {
  opresult: UpdateResult | undefined;
}

export interface InsertOrUpdateOneRequest {
  collectionname: string;
  uniqeness: string;
  item: string;
  w: number;
  j: boolean;
}

export interface InsertOrUpdateOneResponse {
  result: string;
}

export interface InsertOrUpdateManyRequest {
  collectionname: string;
  uniqeness: string;
  items: string;
  w: number;
  j: boolean;
  skipresults: boolean;
}

export interface InsertOrUpdateManyResponse {
  results: string;
}

export interface DeleteOneRequest {
  collectionname: string;
  id: string;
  recursive: boolean;
}

export interface DeleteOneResponse {
  affectedrows: number;
}

export interface DeleteManyRequest {
  collectionname: string;
  query: string;
  recursive: boolean;
  ids: string[];
}

export interface DeleteManyResponse {
  affectedrows: number;
}

function createBaseListCollectionsRequest(): ListCollectionsRequest {
  return { includehist: false };
}

export const ListCollectionsRequest = {
  encode(message: ListCollectionsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.includehist === true) {
      writer.uint32(8).bool(message.includehist);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListCollectionsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListCollectionsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.includehist = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ListCollectionsRequest {
    return { includehist: isSet(object.includehist) ? Boolean(object.includehist) : false };
  },

  toJSON(message: ListCollectionsRequest): unknown {
    const obj: any = {};
    message.includehist !== undefined && (obj.includehist = message.includehist);
    return obj;
  },

  create<I extends Exact<DeepPartial<ListCollectionsRequest>, I>>(base?: I): ListCollectionsRequest {
    return ListCollectionsRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<ListCollectionsRequest>, I>>(object: I): ListCollectionsRequest {
    const message = createBaseListCollectionsRequest();
    message.includehist = object.includehist ?? false;
    return message;
  },
};

function createBaseListCollectionsResponse(): ListCollectionsResponse {
  return { results: "" };
}

export const ListCollectionsResponse = {
  encode(message: ListCollectionsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.results !== "") {
      writer.uint32(10).string(message.results);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListCollectionsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListCollectionsResponse();
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

  fromJSON(object: any): ListCollectionsResponse {
    return { results: isSet(object.results) ? String(object.results) : "" };
  },

  toJSON(message: ListCollectionsResponse): unknown {
    const obj: any = {};
    message.results !== undefined && (obj.results = message.results);
    return obj;
  },

  create<I extends Exact<DeepPartial<ListCollectionsResponse>, I>>(base?: I): ListCollectionsResponse {
    return ListCollectionsResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<ListCollectionsResponse>, I>>(object: I): ListCollectionsResponse {
    const message = createBaseListCollectionsResponse();
    message.results = object.results ?? "";
    return message;
  },
};

function createBaseDropCollectionRequest(): DropCollectionRequest {
  return { collectionname: "" };
}

export const DropCollectionRequest = {
  encode(message: DropCollectionRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.collectionname !== "") {
      writer.uint32(10).string(message.collectionname);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DropCollectionRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDropCollectionRequest();
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

  fromJSON(object: any): DropCollectionRequest {
    return { collectionname: isSet(object.collectionname) ? String(object.collectionname) : "" };
  },

  toJSON(message: DropCollectionRequest): unknown {
    const obj: any = {};
    message.collectionname !== undefined && (obj.collectionname = message.collectionname);
    return obj;
  },

  create<I extends Exact<DeepPartial<DropCollectionRequest>, I>>(base?: I): DropCollectionRequest {
    return DropCollectionRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<DropCollectionRequest>, I>>(object: I): DropCollectionRequest {
    const message = createBaseDropCollectionRequest();
    message.collectionname = object.collectionname ?? "";
    return message;
  },
};

function createBaseDropCollectionResponse(): DropCollectionResponse {
  return {};
}

export const DropCollectionResponse = {
  encode(_: DropCollectionResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DropCollectionResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDropCollectionResponse();
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

  fromJSON(_: any): DropCollectionResponse {
    return {};
  },

  toJSON(_: DropCollectionResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<DropCollectionResponse>, I>>(base?: I): DropCollectionResponse {
    return DropCollectionResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<DropCollectionResponse>, I>>(_: I): DropCollectionResponse {
    const message = createBaseDropCollectionResponse();
    return message;
  },
};

function createBasecol_timeseries(): col_timeseries {
  return { timeField: "", metaField: "", granularity: "" };
}

export const col_timeseries = {
  encode(message: col_timeseries, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.timeField !== "") {
      writer.uint32(10).string(message.timeField);
    }
    if (message.metaField !== "") {
      writer.uint32(18).string(message.metaField);
    }
    if (message.granularity !== "") {
      writer.uint32(26).string(message.granularity);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): col_timeseries {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasecol_timeseries();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.timeField = reader.string();
          break;
        case 2:
          message.metaField = reader.string();
          break;
        case 3:
          message.granularity = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): col_timeseries {
    return {
      timeField: isSet(object.timeField) ? String(object.timeField) : "",
      metaField: isSet(object.metaField) ? String(object.metaField) : "",
      granularity: isSet(object.granularity) ? String(object.granularity) : "",
    };
  },

  toJSON(message: col_timeseries): unknown {
    const obj: any = {};
    message.timeField !== undefined && (obj.timeField = message.timeField);
    message.metaField !== undefined && (obj.metaField = message.metaField);
    message.granularity !== undefined && (obj.granularity = message.granularity);
    return obj;
  },

  create<I extends Exact<DeepPartial<col_timeseries>, I>>(base?: I): col_timeseries {
    return col_timeseries.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<col_timeseries>, I>>(object: I): col_timeseries {
    const message = createBasecol_timeseries();
    message.timeField = object.timeField ?? "";
    message.metaField = object.metaField ?? "";
    message.granularity = object.granularity ?? "";
    return message;
  },
};

function createBasecol_collation(): col_collation {
  return {
    locale: "",
    caseLevel: false,
    caseFirst: "",
    strength: 0,
    numericOrdering: false,
    alternate: "",
    maxVariable: "",
    backwards: false,
  };
}

export const col_collation = {
  encode(message: col_collation, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.locale !== "") {
      writer.uint32(10).string(message.locale);
    }
    if (message.caseLevel === true) {
      writer.uint32(16).bool(message.caseLevel);
    }
    if (message.caseFirst !== "") {
      writer.uint32(26).string(message.caseFirst);
    }
    if (message.strength !== 0) {
      writer.uint32(32).int32(message.strength);
    }
    if (message.numericOrdering === true) {
      writer.uint32(40).bool(message.numericOrdering);
    }
    if (message.alternate !== "") {
      writer.uint32(50).string(message.alternate);
    }
    if (message.maxVariable !== "") {
      writer.uint32(58).string(message.maxVariable);
    }
    if (message.backwards === true) {
      writer.uint32(64).bool(message.backwards);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): col_collation {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasecol_collation();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.locale = reader.string();
          break;
        case 2:
          message.caseLevel = reader.bool();
          break;
        case 3:
          message.caseFirst = reader.string();
          break;
        case 4:
          message.strength = reader.int32();
          break;
        case 5:
          message.numericOrdering = reader.bool();
          break;
        case 6:
          message.alternate = reader.string();
          break;
        case 7:
          message.maxVariable = reader.string();
          break;
        case 8:
          message.backwards = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): col_collation {
    return {
      locale: isSet(object.locale) ? String(object.locale) : "",
      caseLevel: isSet(object.caseLevel) ? Boolean(object.caseLevel) : false,
      caseFirst: isSet(object.caseFirst) ? String(object.caseFirst) : "",
      strength: isSet(object.strength) ? Number(object.strength) : 0,
      numericOrdering: isSet(object.numericOrdering) ? Boolean(object.numericOrdering) : false,
      alternate: isSet(object.alternate) ? String(object.alternate) : "",
      maxVariable: isSet(object.maxVariable) ? String(object.maxVariable) : "",
      backwards: isSet(object.backwards) ? Boolean(object.backwards) : false,
    };
  },

  toJSON(message: col_collation): unknown {
    const obj: any = {};
    message.locale !== undefined && (obj.locale = message.locale);
    message.caseLevel !== undefined && (obj.caseLevel = message.caseLevel);
    message.caseFirst !== undefined && (obj.caseFirst = message.caseFirst);
    message.strength !== undefined && (obj.strength = Math.round(message.strength));
    message.numericOrdering !== undefined && (obj.numericOrdering = message.numericOrdering);
    message.alternate !== undefined && (obj.alternate = message.alternate);
    message.maxVariable !== undefined && (obj.maxVariable = message.maxVariable);
    message.backwards !== undefined && (obj.backwards = message.backwards);
    return obj;
  },

  create<I extends Exact<DeepPartial<col_collation>, I>>(base?: I): col_collation {
    return col_collation.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<col_collation>, I>>(object: I): col_collation {
    const message = createBasecol_collation();
    message.locale = object.locale ?? "";
    message.caseLevel = object.caseLevel ?? false;
    message.caseFirst = object.caseFirst ?? "";
    message.strength = object.strength ?? 0;
    message.numericOrdering = object.numericOrdering ?? false;
    message.alternate = object.alternate ?? "";
    message.maxVariable = object.maxVariable ?? "";
    message.backwards = object.backwards ?? false;
    return message;
  },
};

function createBaseCreateCollectionRequest(): CreateCollectionRequest {
  return {
    collectionname: "",
    collation: undefined,
    timeseries: undefined,
    expireAfterSeconds: 0,
    changeStreamPreAndPostImages: false,
    capped: false,
    max: 0,
    size: 0,
  };
}

export const CreateCollectionRequest = {
  encode(message: CreateCollectionRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.collectionname !== "") {
      writer.uint32(10).string(message.collectionname);
    }
    if (message.collation !== undefined) {
      col_collation.encode(message.collation, writer.uint32(18).fork()).ldelim();
    }
    if (message.timeseries !== undefined) {
      col_timeseries.encode(message.timeseries, writer.uint32(26).fork()).ldelim();
    }
    if (message.expireAfterSeconds !== 0) {
      writer.uint32(32).int32(message.expireAfterSeconds);
    }
    if (message.changeStreamPreAndPostImages === true) {
      writer.uint32(40).bool(message.changeStreamPreAndPostImages);
    }
    if (message.capped === true) {
      writer.uint32(48).bool(message.capped);
    }
    if (message.max !== 0) {
      writer.uint32(56).int32(message.max);
    }
    if (message.size !== 0) {
      writer.uint32(64).int32(message.size);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateCollectionRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateCollectionRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.collectionname = reader.string();
          break;
        case 2:
          message.collation = col_collation.decode(reader, reader.uint32());
          break;
        case 3:
          message.timeseries = col_timeseries.decode(reader, reader.uint32());
          break;
        case 4:
          message.expireAfterSeconds = reader.int32();
          break;
        case 5:
          message.changeStreamPreAndPostImages = reader.bool();
          break;
        case 6:
          message.capped = reader.bool();
          break;
        case 7:
          message.max = reader.int32();
          break;
        case 8:
          message.size = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CreateCollectionRequest {
    return {
      collectionname: isSet(object.collectionname) ? String(object.collectionname) : "",
      collation: isSet(object.collation) ? col_collation.fromJSON(object.collation) : undefined,
      timeseries: isSet(object.timeseries) ? col_timeseries.fromJSON(object.timeseries) : undefined,
      expireAfterSeconds: isSet(object.expireAfterSeconds) ? Number(object.expireAfterSeconds) : 0,
      changeStreamPreAndPostImages: isSet(object.changeStreamPreAndPostImages)
        ? Boolean(object.changeStreamPreAndPostImages)
        : false,
      capped: isSet(object.capped) ? Boolean(object.capped) : false,
      max: isSet(object.max) ? Number(object.max) : 0,
      size: isSet(object.size) ? Number(object.size) : 0,
    };
  },

  toJSON(message: CreateCollectionRequest): unknown {
    const obj: any = {};
    message.collectionname !== undefined && (obj.collectionname = message.collectionname);
    message.collation !== undefined &&
      (obj.collation = message.collation ? col_collation.toJSON(message.collation) : undefined);
    message.timeseries !== undefined &&
      (obj.timeseries = message.timeseries ? col_timeseries.toJSON(message.timeseries) : undefined);
    message.expireAfterSeconds !== undefined && (obj.expireAfterSeconds = Math.round(message.expireAfterSeconds));
    message.changeStreamPreAndPostImages !== undefined &&
      (obj.changeStreamPreAndPostImages = message.changeStreamPreAndPostImages);
    message.capped !== undefined && (obj.capped = message.capped);
    message.max !== undefined && (obj.max = Math.round(message.max));
    message.size !== undefined && (obj.size = Math.round(message.size));
    return obj;
  },

  create<I extends Exact<DeepPartial<CreateCollectionRequest>, I>>(base?: I): CreateCollectionRequest {
    return CreateCollectionRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CreateCollectionRequest>, I>>(object: I): CreateCollectionRequest {
    const message = createBaseCreateCollectionRequest();
    message.collectionname = object.collectionname ?? "";
    message.collation = (object.collation !== undefined && object.collation !== null)
      ? col_collation.fromPartial(object.collation)
      : undefined;
    message.timeseries = (object.timeseries !== undefined && object.timeseries !== null)
      ? col_timeseries.fromPartial(object.timeseries)
      : undefined;
    message.expireAfterSeconds = object.expireAfterSeconds ?? 0;
    message.changeStreamPreAndPostImages = object.changeStreamPreAndPostImages ?? false;
    message.capped = object.capped ?? false;
    message.max = object.max ?? 0;
    message.size = object.size ?? 0;
    return message;
  },
};

function createBaseCreateCollectionResponse(): CreateCollectionResponse {
  return {};
}

export const CreateCollectionResponse = {
  encode(_: CreateCollectionResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateCollectionResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateCollectionResponse();
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

  fromJSON(_: any): CreateCollectionResponse {
    return {};
  },

  toJSON(_: CreateCollectionResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<CreateCollectionResponse>, I>>(base?: I): CreateCollectionResponse {
    return CreateCollectionResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CreateCollectionResponse>, I>>(_: I): CreateCollectionResponse {
    const message = createBaseCreateCollectionResponse();
    return message;
  },
};

function createBaseQueryRequest(): QueryRequest {
  return { query: "", collectionname: "", projection: "", top: 0, skip: 0, orderby: "", queryas: "" };
}

export const QueryRequest = {
  encode(message: QueryRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.query !== "") {
      writer.uint32(10).string(message.query);
    }
    if (message.collectionname !== "") {
      writer.uint32(18).string(message.collectionname);
    }
    if (message.projection !== "") {
      writer.uint32(26).string(message.projection);
    }
    if (message.top !== 0) {
      writer.uint32(32).int32(message.top);
    }
    if (message.skip !== 0) {
      writer.uint32(40).int32(message.skip);
    }
    if (message.orderby !== "") {
      writer.uint32(50).string(message.orderby);
    }
    if (message.queryas !== "") {
      writer.uint32(58).string(message.queryas);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.query = reader.string();
          break;
        case 2:
          message.collectionname = reader.string();
          break;
        case 3:
          message.projection = reader.string();
          break;
        case 4:
          message.top = reader.int32();
          break;
        case 5:
          message.skip = reader.int32();
          break;
        case 6:
          message.orderby = reader.string();
          break;
        case 7:
          message.queryas = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryRequest {
    return {
      query: isSet(object.query) ? String(object.query) : "",
      collectionname: isSet(object.collectionname) ? String(object.collectionname) : "",
      projection: isSet(object.projection) ? String(object.projection) : "",
      top: isSet(object.top) ? Number(object.top) : 0,
      skip: isSet(object.skip) ? Number(object.skip) : 0,
      orderby: isSet(object.orderby) ? String(object.orderby) : "",
      queryas: isSet(object.queryas) ? String(object.queryas) : "",
    };
  },

  toJSON(message: QueryRequest): unknown {
    const obj: any = {};
    message.query !== undefined && (obj.query = message.query);
    message.collectionname !== undefined && (obj.collectionname = message.collectionname);
    message.projection !== undefined && (obj.projection = message.projection);
    message.top !== undefined && (obj.top = Math.round(message.top));
    message.skip !== undefined && (obj.skip = Math.round(message.skip));
    message.orderby !== undefined && (obj.orderby = message.orderby);
    message.queryas !== undefined && (obj.queryas = message.queryas);
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryRequest>, I>>(base?: I): QueryRequest {
    return QueryRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<QueryRequest>, I>>(object: I): QueryRequest {
    const message = createBaseQueryRequest();
    message.query = object.query ?? "";
    message.collectionname = object.collectionname ?? "";
    message.projection = object.projection ?? "";
    message.top = object.top ?? 0;
    message.skip = object.skip ?? 0;
    message.orderby = object.orderby ?? "";
    message.queryas = object.queryas ?? "";
    return message;
  },
};

function createBaseQueryResponse(): QueryResponse {
  return { results: "" };
}

export const QueryResponse = {
  encode(message: QueryResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.results !== "") {
      writer.uint32(10).string(message.results);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryResponse();
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

  fromJSON(object: any): QueryResponse {
    return { results: isSet(object.results) ? String(object.results) : "" };
  },

  toJSON(message: QueryResponse): unknown {
    const obj: any = {};
    message.results !== undefined && (obj.results = message.results);
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryResponse>, I>>(base?: I): QueryResponse {
    return QueryResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<QueryResponse>, I>>(object: I): QueryResponse {
    const message = createBaseQueryResponse();
    message.results = object.results ?? "";
    return message;
  },
};

function createBaseGetDocumentVersionRequest(): GetDocumentVersionRequest {
  return { collectionname: "", id: "", version: 0, decrypt: false };
}

export const GetDocumentVersionRequest = {
  encode(message: GetDocumentVersionRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.collectionname !== "") {
      writer.uint32(10).string(message.collectionname);
    }
    if (message.id !== "") {
      writer.uint32(18).string(message.id);
    }
    if (message.version !== 0) {
      writer.uint32(24).int32(message.version);
    }
    if (message.decrypt === true) {
      writer.uint32(32).bool(message.decrypt);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetDocumentVersionRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetDocumentVersionRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.collectionname = reader.string();
          break;
        case 2:
          message.id = reader.string();
          break;
        case 3:
          message.version = reader.int32();
          break;
        case 4:
          message.decrypt = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetDocumentVersionRequest {
    return {
      collectionname: isSet(object.collectionname) ? String(object.collectionname) : "",
      id: isSet(object.id) ? String(object.id) : "",
      version: isSet(object.version) ? Number(object.version) : 0,
      decrypt: isSet(object.decrypt) ? Boolean(object.decrypt) : false,
    };
  },

  toJSON(message: GetDocumentVersionRequest): unknown {
    const obj: any = {};
    message.collectionname !== undefined && (obj.collectionname = message.collectionname);
    message.id !== undefined && (obj.id = message.id);
    message.version !== undefined && (obj.version = Math.round(message.version));
    message.decrypt !== undefined && (obj.decrypt = message.decrypt);
    return obj;
  },

  create<I extends Exact<DeepPartial<GetDocumentVersionRequest>, I>>(base?: I): GetDocumentVersionRequest {
    return GetDocumentVersionRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<GetDocumentVersionRequest>, I>>(object: I): GetDocumentVersionRequest {
    const message = createBaseGetDocumentVersionRequest();
    message.collectionname = object.collectionname ?? "";
    message.id = object.id ?? "";
    message.version = object.version ?? 0;
    message.decrypt = object.decrypt ?? false;
    return message;
  },
};

function createBaseGetDocumentVersionResponse(): GetDocumentVersionResponse {
  return { result: "" };
}

export const GetDocumentVersionResponse = {
  encode(message: GetDocumentVersionResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.result !== "") {
      writer.uint32(10).string(message.result);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetDocumentVersionResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetDocumentVersionResponse();
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

  fromJSON(object: any): GetDocumentVersionResponse {
    return { result: isSet(object.result) ? String(object.result) : "" };
  },

  toJSON(message: GetDocumentVersionResponse): unknown {
    const obj: any = {};
    message.result !== undefined && (obj.result = message.result);
    return obj;
  },

  create<I extends Exact<DeepPartial<GetDocumentVersionResponse>, I>>(base?: I): GetDocumentVersionResponse {
    return GetDocumentVersionResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<GetDocumentVersionResponse>, I>>(object: I): GetDocumentVersionResponse {
    const message = createBaseGetDocumentVersionResponse();
    message.result = object.result ?? "";
    return message;
  },
};

function createBaseAggregateRequest(): AggregateRequest {
  return { collectionname: "", aggregates: "", queryas: "", hint: "" };
}

export const AggregateRequest = {
  encode(message: AggregateRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.collectionname !== "") {
      writer.uint32(10).string(message.collectionname);
    }
    if (message.aggregates !== "") {
      writer.uint32(18).string(message.aggregates);
    }
    if (message.queryas !== "") {
      writer.uint32(26).string(message.queryas);
    }
    if (message.hint !== "") {
      writer.uint32(34).string(message.hint);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AggregateRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAggregateRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.collectionname = reader.string();
          break;
        case 2:
          message.aggregates = reader.string();
          break;
        case 3:
          message.queryas = reader.string();
          break;
        case 4:
          message.hint = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): AggregateRequest {
    return {
      collectionname: isSet(object.collectionname) ? String(object.collectionname) : "",
      aggregates: isSet(object.aggregates) ? String(object.aggregates) : "",
      queryas: isSet(object.queryas) ? String(object.queryas) : "",
      hint: isSet(object.hint) ? String(object.hint) : "",
    };
  },

  toJSON(message: AggregateRequest): unknown {
    const obj: any = {};
    message.collectionname !== undefined && (obj.collectionname = message.collectionname);
    message.aggregates !== undefined && (obj.aggregates = message.aggregates);
    message.queryas !== undefined && (obj.queryas = message.queryas);
    message.hint !== undefined && (obj.hint = message.hint);
    return obj;
  },

  create<I extends Exact<DeepPartial<AggregateRequest>, I>>(base?: I): AggregateRequest {
    return AggregateRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<AggregateRequest>, I>>(object: I): AggregateRequest {
    const message = createBaseAggregateRequest();
    message.collectionname = object.collectionname ?? "";
    message.aggregates = object.aggregates ?? "";
    message.queryas = object.queryas ?? "";
    message.hint = object.hint ?? "";
    return message;
  },
};

function createBaseAggregateResponse(): AggregateResponse {
  return { results: "" };
}

export const AggregateResponse = {
  encode(message: AggregateResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.results !== "") {
      writer.uint32(10).string(message.results);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AggregateResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAggregateResponse();
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

  fromJSON(object: any): AggregateResponse {
    return { results: isSet(object.results) ? String(object.results) : "" };
  },

  toJSON(message: AggregateResponse): unknown {
    const obj: any = {};
    message.results !== undefined && (obj.results = message.results);
    return obj;
  },

  create<I extends Exact<DeepPartial<AggregateResponse>, I>>(base?: I): AggregateResponse {
    return AggregateResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<AggregateResponse>, I>>(object: I): AggregateResponse {
    const message = createBaseAggregateResponse();
    message.results = object.results ?? "";
    return message;
  },
};

function createBaseCountRequest(): CountRequest {
  return { collectionname: "", query: "", queryas: "" };
}

export const CountRequest = {
  encode(message: CountRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.collectionname !== "") {
      writer.uint32(10).string(message.collectionname);
    }
    if (message.query !== "") {
      writer.uint32(18).string(message.query);
    }
    if (message.queryas !== "") {
      writer.uint32(26).string(message.queryas);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CountRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCountRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.collectionname = reader.string();
          break;
        case 2:
          message.query = reader.string();
          break;
        case 3:
          message.queryas = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CountRequest {
    return {
      collectionname: isSet(object.collectionname) ? String(object.collectionname) : "",
      query: isSet(object.query) ? String(object.query) : "",
      queryas: isSet(object.queryas) ? String(object.queryas) : "",
    };
  },

  toJSON(message: CountRequest): unknown {
    const obj: any = {};
    message.collectionname !== undefined && (obj.collectionname = message.collectionname);
    message.query !== undefined && (obj.query = message.query);
    message.queryas !== undefined && (obj.queryas = message.queryas);
    return obj;
  },

  create<I extends Exact<DeepPartial<CountRequest>, I>>(base?: I): CountRequest {
    return CountRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CountRequest>, I>>(object: I): CountRequest {
    const message = createBaseCountRequest();
    message.collectionname = object.collectionname ?? "";
    message.query = object.query ?? "";
    message.queryas = object.queryas ?? "";
    return message;
  },
};

function createBaseCountResponse(): CountResponse {
  return { result: 0 };
}

export const CountResponse = {
  encode(message: CountResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.result !== 0) {
      writer.uint32(8).int32(message.result);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CountResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCountResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.result = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CountResponse {
    return { result: isSet(object.result) ? Number(object.result) : 0 };
  },

  toJSON(message: CountResponse): unknown {
    const obj: any = {};
    message.result !== undefined && (obj.result = Math.round(message.result));
    return obj;
  },

  create<I extends Exact<DeepPartial<CountResponse>, I>>(base?: I): CountResponse {
    return CountResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CountResponse>, I>>(object: I): CountResponse {
    const message = createBaseCountResponse();
    message.result = object.result ?? 0;
    return message;
  },
};

function createBaseDistinctRequest(): DistinctRequest {
  return { collectionname: "", field: "", query: "", queryas: "", options: "" };
}

export const DistinctRequest = {
  encode(message: DistinctRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.collectionname !== "") {
      writer.uint32(10).string(message.collectionname);
    }
    if (message.field !== "") {
      writer.uint32(26).string(message.field);
    }
    if (message.query !== "") {
      writer.uint32(34).string(message.query);
    }
    if (message.queryas !== "") {
      writer.uint32(42).string(message.queryas);
    }
    if (message.options !== "") {
      writer.uint32(50).string(message.options);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DistinctRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDistinctRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.collectionname = reader.string();
          break;
        case 3:
          message.field = reader.string();
          break;
        case 4:
          message.query = reader.string();
          break;
        case 5:
          message.queryas = reader.string();
          break;
        case 6:
          message.options = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): DistinctRequest {
    return {
      collectionname: isSet(object.collectionname) ? String(object.collectionname) : "",
      field: isSet(object.field) ? String(object.field) : "",
      query: isSet(object.query) ? String(object.query) : "",
      queryas: isSet(object.queryas) ? String(object.queryas) : "",
      options: isSet(object.options) ? String(object.options) : "",
    };
  },

  toJSON(message: DistinctRequest): unknown {
    const obj: any = {};
    message.collectionname !== undefined && (obj.collectionname = message.collectionname);
    message.field !== undefined && (obj.field = message.field);
    message.query !== undefined && (obj.query = message.query);
    message.queryas !== undefined && (obj.queryas = message.queryas);
    message.options !== undefined && (obj.options = message.options);
    return obj;
  },

  create<I extends Exact<DeepPartial<DistinctRequest>, I>>(base?: I): DistinctRequest {
    return DistinctRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<DistinctRequest>, I>>(object: I): DistinctRequest {
    const message = createBaseDistinctRequest();
    message.collectionname = object.collectionname ?? "";
    message.field = object.field ?? "";
    message.query = object.query ?? "";
    message.queryas = object.queryas ?? "";
    message.options = object.options ?? "";
    return message;
  },
};

function createBaseDistinctResponse(): DistinctResponse {
  return { results: [] };
}

export const DistinctResponse = {
  encode(message: DistinctResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.results) {
      writer.uint32(10).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DistinctResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDistinctResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.results.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): DistinctResponse {
    return { results: Array.isArray(object?.results) ? object.results.map((e: any) => String(e)) : [] };
  },

  toJSON(message: DistinctResponse): unknown {
    const obj: any = {};
    if (message.results) {
      obj.results = message.results.map((e) => e);
    } else {
      obj.results = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<DistinctResponse>, I>>(base?: I): DistinctResponse {
    return DistinctResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<DistinctResponse>, I>>(object: I): DistinctResponse {
    const message = createBaseDistinctResponse();
    message.results = object.results?.map((e) => e) || [];
    return message;
  },
};

function createBaseInsertOneRequest(): InsertOneRequest {
  return { collectionname: "", item: "", w: 0, j: false };
}

export const InsertOneRequest = {
  encode(message: InsertOneRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.collectionname !== "") {
      writer.uint32(10).string(message.collectionname);
    }
    if (message.item !== "") {
      writer.uint32(18).string(message.item);
    }
    if (message.w !== 0) {
      writer.uint32(24).int32(message.w);
    }
    if (message.j === true) {
      writer.uint32(32).bool(message.j);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): InsertOneRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseInsertOneRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.collectionname = reader.string();
          break;
        case 2:
          message.item = reader.string();
          break;
        case 3:
          message.w = reader.int32();
          break;
        case 4:
          message.j = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): InsertOneRequest {
    return {
      collectionname: isSet(object.collectionname) ? String(object.collectionname) : "",
      item: isSet(object.item) ? String(object.item) : "",
      w: isSet(object.w) ? Number(object.w) : 0,
      j: isSet(object.j) ? Boolean(object.j) : false,
    };
  },

  toJSON(message: InsertOneRequest): unknown {
    const obj: any = {};
    message.collectionname !== undefined && (obj.collectionname = message.collectionname);
    message.item !== undefined && (obj.item = message.item);
    message.w !== undefined && (obj.w = Math.round(message.w));
    message.j !== undefined && (obj.j = message.j);
    return obj;
  },

  create<I extends Exact<DeepPartial<InsertOneRequest>, I>>(base?: I): InsertOneRequest {
    return InsertOneRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<InsertOneRequest>, I>>(object: I): InsertOneRequest {
    const message = createBaseInsertOneRequest();
    message.collectionname = object.collectionname ?? "";
    message.item = object.item ?? "";
    message.w = object.w ?? 0;
    message.j = object.j ?? false;
    return message;
  },
};

function createBaseInsertOneResponse(): InsertOneResponse {
  return { result: "" };
}

export const InsertOneResponse = {
  encode(message: InsertOneResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.result !== "") {
      writer.uint32(10).string(message.result);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): InsertOneResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseInsertOneResponse();
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

  fromJSON(object: any): InsertOneResponse {
    return { result: isSet(object.result) ? String(object.result) : "" };
  },

  toJSON(message: InsertOneResponse): unknown {
    const obj: any = {};
    message.result !== undefined && (obj.result = message.result);
    return obj;
  },

  create<I extends Exact<DeepPartial<InsertOneResponse>, I>>(base?: I): InsertOneResponse {
    return InsertOneResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<InsertOneResponse>, I>>(object: I): InsertOneResponse {
    const message = createBaseInsertOneResponse();
    message.result = object.result ?? "";
    return message;
  },
};

function createBaseInsertManyRequest(): InsertManyRequest {
  return { collectionname: "", items: "", w: 0, j: false, skipresults: false };
}

export const InsertManyRequest = {
  encode(message: InsertManyRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.collectionname !== "") {
      writer.uint32(10).string(message.collectionname);
    }
    if (message.items !== "") {
      writer.uint32(18).string(message.items);
    }
    if (message.w !== 0) {
      writer.uint32(24).int32(message.w);
    }
    if (message.j === true) {
      writer.uint32(32).bool(message.j);
    }
    if (message.skipresults === true) {
      writer.uint32(40).bool(message.skipresults);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): InsertManyRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseInsertManyRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.collectionname = reader.string();
          break;
        case 2:
          message.items = reader.string();
          break;
        case 3:
          message.w = reader.int32();
          break;
        case 4:
          message.j = reader.bool();
          break;
        case 5:
          message.skipresults = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): InsertManyRequest {
    return {
      collectionname: isSet(object.collectionname) ? String(object.collectionname) : "",
      items: isSet(object.items) ? String(object.items) : "",
      w: isSet(object.w) ? Number(object.w) : 0,
      j: isSet(object.j) ? Boolean(object.j) : false,
      skipresults: isSet(object.skipresults) ? Boolean(object.skipresults) : false,
    };
  },

  toJSON(message: InsertManyRequest): unknown {
    const obj: any = {};
    message.collectionname !== undefined && (obj.collectionname = message.collectionname);
    message.items !== undefined && (obj.items = message.items);
    message.w !== undefined && (obj.w = Math.round(message.w));
    message.j !== undefined && (obj.j = message.j);
    message.skipresults !== undefined && (obj.skipresults = message.skipresults);
    return obj;
  },

  create<I extends Exact<DeepPartial<InsertManyRequest>, I>>(base?: I): InsertManyRequest {
    return InsertManyRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<InsertManyRequest>, I>>(object: I): InsertManyRequest {
    const message = createBaseInsertManyRequest();
    message.collectionname = object.collectionname ?? "";
    message.items = object.items ?? "";
    message.w = object.w ?? 0;
    message.j = object.j ?? false;
    message.skipresults = object.skipresults ?? false;
    return message;
  },
};

function createBaseInsertManyResponse(): InsertManyResponse {
  return { results: "" };
}

export const InsertManyResponse = {
  encode(message: InsertManyResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.results !== "") {
      writer.uint32(10).string(message.results);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): InsertManyResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseInsertManyResponse();
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

  fromJSON(object: any): InsertManyResponse {
    return { results: isSet(object.results) ? String(object.results) : "" };
  },

  toJSON(message: InsertManyResponse): unknown {
    const obj: any = {};
    message.results !== undefined && (obj.results = message.results);
    return obj;
  },

  create<I extends Exact<DeepPartial<InsertManyResponse>, I>>(base?: I): InsertManyResponse {
    return InsertManyResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<InsertManyResponse>, I>>(object: I): InsertManyResponse {
    const message = createBaseInsertManyResponse();
    message.results = object.results ?? "";
    return message;
  },
};

function createBaseUpdateOneRequest(): UpdateOneRequest {
  return { collectionname: "", item: "", w: 0, j: false };
}

export const UpdateOneRequest = {
  encode(message: UpdateOneRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.collectionname !== "") {
      writer.uint32(10).string(message.collectionname);
    }
    if (message.item !== "") {
      writer.uint32(18).string(message.item);
    }
    if (message.w !== 0) {
      writer.uint32(24).int32(message.w);
    }
    if (message.j === true) {
      writer.uint32(32).bool(message.j);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UpdateOneRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateOneRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.collectionname = reader.string();
          break;
        case 2:
          message.item = reader.string();
          break;
        case 3:
          message.w = reader.int32();
          break;
        case 4:
          message.j = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): UpdateOneRequest {
    return {
      collectionname: isSet(object.collectionname) ? String(object.collectionname) : "",
      item: isSet(object.item) ? String(object.item) : "",
      w: isSet(object.w) ? Number(object.w) : 0,
      j: isSet(object.j) ? Boolean(object.j) : false,
    };
  },

  toJSON(message: UpdateOneRequest): unknown {
    const obj: any = {};
    message.collectionname !== undefined && (obj.collectionname = message.collectionname);
    message.item !== undefined && (obj.item = message.item);
    message.w !== undefined && (obj.w = Math.round(message.w));
    message.j !== undefined && (obj.j = message.j);
    return obj;
  },

  create<I extends Exact<DeepPartial<UpdateOneRequest>, I>>(base?: I): UpdateOneRequest {
    return UpdateOneRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<UpdateOneRequest>, I>>(object: I): UpdateOneRequest {
    const message = createBaseUpdateOneRequest();
    message.collectionname = object.collectionname ?? "";
    message.item = object.item ?? "";
    message.w = object.w ?? 0;
    message.j = object.j ?? false;
    return message;
  },
};

function createBaseUpdateOneResponse(): UpdateOneResponse {
  return { result: "" };
}

export const UpdateOneResponse = {
  encode(message: UpdateOneResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.result !== "") {
      writer.uint32(10).string(message.result);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UpdateOneResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateOneResponse();
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

  fromJSON(object: any): UpdateOneResponse {
    return { result: isSet(object.result) ? String(object.result) : "" };
  },

  toJSON(message: UpdateOneResponse): unknown {
    const obj: any = {};
    message.result !== undefined && (obj.result = message.result);
    return obj;
  },

  create<I extends Exact<DeepPartial<UpdateOneResponse>, I>>(base?: I): UpdateOneResponse {
    return UpdateOneResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<UpdateOneResponse>, I>>(object: I): UpdateOneResponse {
    const message = createBaseUpdateOneResponse();
    message.result = object.result ?? "";
    return message;
  },
};

function createBaseUpdateDocumentRequest(): UpdateDocumentRequest {
  return { collectionname: "", query: "", document: "", w: 0, j: false };
}

export const UpdateDocumentRequest = {
  encode(message: UpdateDocumentRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.collectionname !== "") {
      writer.uint32(10).string(message.collectionname);
    }
    if (message.query !== "") {
      writer.uint32(18).string(message.query);
    }
    if (message.document !== "") {
      writer.uint32(26).string(message.document);
    }
    if (message.w !== 0) {
      writer.uint32(32).int32(message.w);
    }
    if (message.j === true) {
      writer.uint32(40).bool(message.j);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UpdateDocumentRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateDocumentRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.collectionname = reader.string();
          break;
        case 2:
          message.query = reader.string();
          break;
        case 3:
          message.document = reader.string();
          break;
        case 4:
          message.w = reader.int32();
          break;
        case 5:
          message.j = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): UpdateDocumentRequest {
    return {
      collectionname: isSet(object.collectionname) ? String(object.collectionname) : "",
      query: isSet(object.query) ? String(object.query) : "",
      document: isSet(object.document) ? String(object.document) : "",
      w: isSet(object.w) ? Number(object.w) : 0,
      j: isSet(object.j) ? Boolean(object.j) : false,
    };
  },

  toJSON(message: UpdateDocumentRequest): unknown {
    const obj: any = {};
    message.collectionname !== undefined && (obj.collectionname = message.collectionname);
    message.query !== undefined && (obj.query = message.query);
    message.document !== undefined && (obj.document = message.document);
    message.w !== undefined && (obj.w = Math.round(message.w));
    message.j !== undefined && (obj.j = message.j);
    return obj;
  },

  create<I extends Exact<DeepPartial<UpdateDocumentRequest>, I>>(base?: I): UpdateDocumentRequest {
    return UpdateDocumentRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<UpdateDocumentRequest>, I>>(object: I): UpdateDocumentRequest {
    const message = createBaseUpdateDocumentRequest();
    message.collectionname = object.collectionname ?? "";
    message.query = object.query ?? "";
    message.document = object.document ?? "";
    message.w = object.w ?? 0;
    message.j = object.j ?? false;
    return message;
  },
};

function createBaseUpdateResult(): UpdateResult {
  return { acknowledged: false, matchedCount: 0, modifiedCount: 0, upsertedCount: 0, upsertedId: "" };
}

export const UpdateResult = {
  encode(message: UpdateResult, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.acknowledged === true) {
      writer.uint32(8).bool(message.acknowledged);
    }
    if (message.matchedCount !== 0) {
      writer.uint32(16).int32(message.matchedCount);
    }
    if (message.modifiedCount !== 0) {
      writer.uint32(24).int32(message.modifiedCount);
    }
    if (message.upsertedCount !== 0) {
      writer.uint32(32).int32(message.upsertedCount);
    }
    if (message.upsertedId !== "") {
      writer.uint32(42).string(message.upsertedId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UpdateResult {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateResult();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.acknowledged = reader.bool();
          break;
        case 2:
          message.matchedCount = reader.int32();
          break;
        case 3:
          message.modifiedCount = reader.int32();
          break;
        case 4:
          message.upsertedCount = reader.int32();
          break;
        case 5:
          message.upsertedId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): UpdateResult {
    return {
      acknowledged: isSet(object.acknowledged) ? Boolean(object.acknowledged) : false,
      matchedCount: isSet(object.matchedCount) ? Number(object.matchedCount) : 0,
      modifiedCount: isSet(object.modifiedCount) ? Number(object.modifiedCount) : 0,
      upsertedCount: isSet(object.upsertedCount) ? Number(object.upsertedCount) : 0,
      upsertedId: isSet(object.upsertedId) ? String(object.upsertedId) : "",
    };
  },

  toJSON(message: UpdateResult): unknown {
    const obj: any = {};
    message.acknowledged !== undefined && (obj.acknowledged = message.acknowledged);
    message.matchedCount !== undefined && (obj.matchedCount = Math.round(message.matchedCount));
    message.modifiedCount !== undefined && (obj.modifiedCount = Math.round(message.modifiedCount));
    message.upsertedCount !== undefined && (obj.upsertedCount = Math.round(message.upsertedCount));
    message.upsertedId !== undefined && (obj.upsertedId = message.upsertedId);
    return obj;
  },

  create<I extends Exact<DeepPartial<UpdateResult>, I>>(base?: I): UpdateResult {
    return UpdateResult.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<UpdateResult>, I>>(object: I): UpdateResult {
    const message = createBaseUpdateResult();
    message.acknowledged = object.acknowledged ?? false;
    message.matchedCount = object.matchedCount ?? 0;
    message.modifiedCount = object.modifiedCount ?? 0;
    message.upsertedCount = object.upsertedCount ?? 0;
    message.upsertedId = object.upsertedId ?? "";
    return message;
  },
};

function createBaseUpdateDocumentResponse(): UpdateDocumentResponse {
  return { opresult: undefined };
}

export const UpdateDocumentResponse = {
  encode(message: UpdateDocumentResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.opresult !== undefined) {
      UpdateResult.encode(message.opresult, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UpdateDocumentResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateDocumentResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.opresult = UpdateResult.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): UpdateDocumentResponse {
    return { opresult: isSet(object.opresult) ? UpdateResult.fromJSON(object.opresult) : undefined };
  },

  toJSON(message: UpdateDocumentResponse): unknown {
    const obj: any = {};
    message.opresult !== undefined &&
      (obj.opresult = message.opresult ? UpdateResult.toJSON(message.opresult) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<UpdateDocumentResponse>, I>>(base?: I): UpdateDocumentResponse {
    return UpdateDocumentResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<UpdateDocumentResponse>, I>>(object: I): UpdateDocumentResponse {
    const message = createBaseUpdateDocumentResponse();
    message.opresult = (object.opresult !== undefined && object.opresult !== null)
      ? UpdateResult.fromPartial(object.opresult)
      : undefined;
    return message;
  },
};

function createBaseInsertOrUpdateOneRequest(): InsertOrUpdateOneRequest {
  return { collectionname: "", uniqeness: "", item: "", w: 0, j: false };
}

export const InsertOrUpdateOneRequest = {
  encode(message: InsertOrUpdateOneRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.collectionname !== "") {
      writer.uint32(10).string(message.collectionname);
    }
    if (message.uniqeness !== "") {
      writer.uint32(18).string(message.uniqeness);
    }
    if (message.item !== "") {
      writer.uint32(26).string(message.item);
    }
    if (message.w !== 0) {
      writer.uint32(32).int32(message.w);
    }
    if (message.j === true) {
      writer.uint32(40).bool(message.j);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): InsertOrUpdateOneRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseInsertOrUpdateOneRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.collectionname = reader.string();
          break;
        case 2:
          message.uniqeness = reader.string();
          break;
        case 3:
          message.item = reader.string();
          break;
        case 4:
          message.w = reader.int32();
          break;
        case 5:
          message.j = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): InsertOrUpdateOneRequest {
    return {
      collectionname: isSet(object.collectionname) ? String(object.collectionname) : "",
      uniqeness: isSet(object.uniqeness) ? String(object.uniqeness) : "",
      item: isSet(object.item) ? String(object.item) : "",
      w: isSet(object.w) ? Number(object.w) : 0,
      j: isSet(object.j) ? Boolean(object.j) : false,
    };
  },

  toJSON(message: InsertOrUpdateOneRequest): unknown {
    const obj: any = {};
    message.collectionname !== undefined && (obj.collectionname = message.collectionname);
    message.uniqeness !== undefined && (obj.uniqeness = message.uniqeness);
    message.item !== undefined && (obj.item = message.item);
    message.w !== undefined && (obj.w = Math.round(message.w));
    message.j !== undefined && (obj.j = message.j);
    return obj;
  },

  create<I extends Exact<DeepPartial<InsertOrUpdateOneRequest>, I>>(base?: I): InsertOrUpdateOneRequest {
    return InsertOrUpdateOneRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<InsertOrUpdateOneRequest>, I>>(object: I): InsertOrUpdateOneRequest {
    const message = createBaseInsertOrUpdateOneRequest();
    message.collectionname = object.collectionname ?? "";
    message.uniqeness = object.uniqeness ?? "";
    message.item = object.item ?? "";
    message.w = object.w ?? 0;
    message.j = object.j ?? false;
    return message;
  },
};

function createBaseInsertOrUpdateOneResponse(): InsertOrUpdateOneResponse {
  return { result: "" };
}

export const InsertOrUpdateOneResponse = {
  encode(message: InsertOrUpdateOneResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.result !== "") {
      writer.uint32(10).string(message.result);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): InsertOrUpdateOneResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseInsertOrUpdateOneResponse();
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

  fromJSON(object: any): InsertOrUpdateOneResponse {
    return { result: isSet(object.result) ? String(object.result) : "" };
  },

  toJSON(message: InsertOrUpdateOneResponse): unknown {
    const obj: any = {};
    message.result !== undefined && (obj.result = message.result);
    return obj;
  },

  create<I extends Exact<DeepPartial<InsertOrUpdateOneResponse>, I>>(base?: I): InsertOrUpdateOneResponse {
    return InsertOrUpdateOneResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<InsertOrUpdateOneResponse>, I>>(object: I): InsertOrUpdateOneResponse {
    const message = createBaseInsertOrUpdateOneResponse();
    message.result = object.result ?? "";
    return message;
  },
};

function createBaseInsertOrUpdateManyRequest(): InsertOrUpdateManyRequest {
  return { collectionname: "", uniqeness: "", items: "", w: 0, j: false, skipresults: false };
}

export const InsertOrUpdateManyRequest = {
  encode(message: InsertOrUpdateManyRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.collectionname !== "") {
      writer.uint32(10).string(message.collectionname);
    }
    if (message.uniqeness !== "") {
      writer.uint32(18).string(message.uniqeness);
    }
    if (message.items !== "") {
      writer.uint32(26).string(message.items);
    }
    if (message.w !== 0) {
      writer.uint32(32).int32(message.w);
    }
    if (message.j === true) {
      writer.uint32(40).bool(message.j);
    }
    if (message.skipresults === true) {
      writer.uint32(48).bool(message.skipresults);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): InsertOrUpdateManyRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseInsertOrUpdateManyRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.collectionname = reader.string();
          break;
        case 2:
          message.uniqeness = reader.string();
          break;
        case 3:
          message.items = reader.string();
          break;
        case 4:
          message.w = reader.int32();
          break;
        case 5:
          message.j = reader.bool();
          break;
        case 6:
          message.skipresults = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): InsertOrUpdateManyRequest {
    return {
      collectionname: isSet(object.collectionname) ? String(object.collectionname) : "",
      uniqeness: isSet(object.uniqeness) ? String(object.uniqeness) : "",
      items: isSet(object.items) ? String(object.items) : "",
      w: isSet(object.w) ? Number(object.w) : 0,
      j: isSet(object.j) ? Boolean(object.j) : false,
      skipresults: isSet(object.skipresults) ? Boolean(object.skipresults) : false,
    };
  },

  toJSON(message: InsertOrUpdateManyRequest): unknown {
    const obj: any = {};
    message.collectionname !== undefined && (obj.collectionname = message.collectionname);
    message.uniqeness !== undefined && (obj.uniqeness = message.uniqeness);
    message.items !== undefined && (obj.items = message.items);
    message.w !== undefined && (obj.w = Math.round(message.w));
    message.j !== undefined && (obj.j = message.j);
    message.skipresults !== undefined && (obj.skipresults = message.skipresults);
    return obj;
  },

  create<I extends Exact<DeepPartial<InsertOrUpdateManyRequest>, I>>(base?: I): InsertOrUpdateManyRequest {
    return InsertOrUpdateManyRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<InsertOrUpdateManyRequest>, I>>(object: I): InsertOrUpdateManyRequest {
    const message = createBaseInsertOrUpdateManyRequest();
    message.collectionname = object.collectionname ?? "";
    message.uniqeness = object.uniqeness ?? "";
    message.items = object.items ?? "";
    message.w = object.w ?? 0;
    message.j = object.j ?? false;
    message.skipresults = object.skipresults ?? false;
    return message;
  },
};

function createBaseInsertOrUpdateManyResponse(): InsertOrUpdateManyResponse {
  return { results: "" };
}

export const InsertOrUpdateManyResponse = {
  encode(message: InsertOrUpdateManyResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.results !== "") {
      writer.uint32(10).string(message.results);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): InsertOrUpdateManyResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseInsertOrUpdateManyResponse();
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

  fromJSON(object: any): InsertOrUpdateManyResponse {
    return { results: isSet(object.results) ? String(object.results) : "" };
  },

  toJSON(message: InsertOrUpdateManyResponse): unknown {
    const obj: any = {};
    message.results !== undefined && (obj.results = message.results);
    return obj;
  },

  create<I extends Exact<DeepPartial<InsertOrUpdateManyResponse>, I>>(base?: I): InsertOrUpdateManyResponse {
    return InsertOrUpdateManyResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<InsertOrUpdateManyResponse>, I>>(object: I): InsertOrUpdateManyResponse {
    const message = createBaseInsertOrUpdateManyResponse();
    message.results = object.results ?? "";
    return message;
  },
};

function createBaseDeleteOneRequest(): DeleteOneRequest {
  return { collectionname: "", id: "", recursive: false };
}

export const DeleteOneRequest = {
  encode(message: DeleteOneRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.collectionname !== "") {
      writer.uint32(10).string(message.collectionname);
    }
    if (message.id !== "") {
      writer.uint32(18).string(message.id);
    }
    if (message.recursive === true) {
      writer.uint32(24).bool(message.recursive);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DeleteOneRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDeleteOneRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.collectionname = reader.string();
          break;
        case 2:
          message.id = reader.string();
          break;
        case 3:
          message.recursive = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): DeleteOneRequest {
    return {
      collectionname: isSet(object.collectionname) ? String(object.collectionname) : "",
      id: isSet(object.id) ? String(object.id) : "",
      recursive: isSet(object.recursive) ? Boolean(object.recursive) : false,
    };
  },

  toJSON(message: DeleteOneRequest): unknown {
    const obj: any = {};
    message.collectionname !== undefined && (obj.collectionname = message.collectionname);
    message.id !== undefined && (obj.id = message.id);
    message.recursive !== undefined && (obj.recursive = message.recursive);
    return obj;
  },

  create<I extends Exact<DeepPartial<DeleteOneRequest>, I>>(base?: I): DeleteOneRequest {
    return DeleteOneRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<DeleteOneRequest>, I>>(object: I): DeleteOneRequest {
    const message = createBaseDeleteOneRequest();
    message.collectionname = object.collectionname ?? "";
    message.id = object.id ?? "";
    message.recursive = object.recursive ?? false;
    return message;
  },
};

function createBaseDeleteOneResponse(): DeleteOneResponse {
  return { affectedrows: 0 };
}

export const DeleteOneResponse = {
  encode(message: DeleteOneResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.affectedrows !== 0) {
      writer.uint32(8).int32(message.affectedrows);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DeleteOneResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDeleteOneResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.affectedrows = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): DeleteOneResponse {
    return { affectedrows: isSet(object.affectedrows) ? Number(object.affectedrows) : 0 };
  },

  toJSON(message: DeleteOneResponse): unknown {
    const obj: any = {};
    message.affectedrows !== undefined && (obj.affectedrows = Math.round(message.affectedrows));
    return obj;
  },

  create<I extends Exact<DeepPartial<DeleteOneResponse>, I>>(base?: I): DeleteOneResponse {
    return DeleteOneResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<DeleteOneResponse>, I>>(object: I): DeleteOneResponse {
    const message = createBaseDeleteOneResponse();
    message.affectedrows = object.affectedrows ?? 0;
    return message;
  },
};

function createBaseDeleteManyRequest(): DeleteManyRequest {
  return { collectionname: "", query: "", recursive: false, ids: [] };
}

export const DeleteManyRequest = {
  encode(message: DeleteManyRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.collectionname !== "") {
      writer.uint32(10).string(message.collectionname);
    }
    if (message.query !== "") {
      writer.uint32(18).string(message.query);
    }
    if (message.recursive === true) {
      writer.uint32(24).bool(message.recursive);
    }
    for (const v of message.ids) {
      writer.uint32(34).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DeleteManyRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDeleteManyRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.collectionname = reader.string();
          break;
        case 2:
          message.query = reader.string();
          break;
        case 3:
          message.recursive = reader.bool();
          break;
        case 4:
          message.ids.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): DeleteManyRequest {
    return {
      collectionname: isSet(object.collectionname) ? String(object.collectionname) : "",
      query: isSet(object.query) ? String(object.query) : "",
      recursive: isSet(object.recursive) ? Boolean(object.recursive) : false,
      ids: Array.isArray(object?.ids) ? object.ids.map((e: any) => String(e)) : [],
    };
  },

  toJSON(message: DeleteManyRequest): unknown {
    const obj: any = {};
    message.collectionname !== undefined && (obj.collectionname = message.collectionname);
    message.query !== undefined && (obj.query = message.query);
    message.recursive !== undefined && (obj.recursive = message.recursive);
    if (message.ids) {
      obj.ids = message.ids.map((e) => e);
    } else {
      obj.ids = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<DeleteManyRequest>, I>>(base?: I): DeleteManyRequest {
    return DeleteManyRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<DeleteManyRequest>, I>>(object: I): DeleteManyRequest {
    const message = createBaseDeleteManyRequest();
    message.collectionname = object.collectionname ?? "";
    message.query = object.query ?? "";
    message.recursive = object.recursive ?? false;
    message.ids = object.ids?.map((e) => e) || [];
    return message;
  },
};

function createBaseDeleteManyResponse(): DeleteManyResponse {
  return { affectedrows: 0 };
}

export const DeleteManyResponse = {
  encode(message: DeleteManyResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.affectedrows !== 0) {
      writer.uint32(8).int32(message.affectedrows);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DeleteManyResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDeleteManyResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.affectedrows = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): DeleteManyResponse {
    return { affectedrows: isSet(object.affectedrows) ? Number(object.affectedrows) : 0 };
  },

  toJSON(message: DeleteManyResponse): unknown {
    const obj: any = {};
    message.affectedrows !== undefined && (obj.affectedrows = Math.round(message.affectedrows));
    return obj;
  },

  create<I extends Exact<DeepPartial<DeleteManyResponse>, I>>(base?: I): DeleteManyResponse {
    return DeleteManyResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<DeleteManyResponse>, I>>(object: I): DeleteManyResponse {
    const message = createBaseDeleteManyResponse();
    message.affectedrows = object.affectedrows ?? 0;
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
