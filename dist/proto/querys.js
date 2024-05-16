/* eslint-disable */
import _m0 from "protobufjs/minimal.js";
export const protobufPackage = "openiap";
function createBaseListCollectionsRequest() {
    return { includehist: false };
}
export const ListCollectionsRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.includehist === true) {
            writer.uint32(8).bool(message.includehist);
        }
        return writer;
    },
    decode(input, length) {
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
    fromJSON(object) {
        return { includehist: isSet(object.includehist) ? Boolean(object.includehist) : false };
    },
    toJSON(message) {
        const obj = {};
        message.includehist !== undefined && (obj.includehist = message.includehist);
        return obj;
    },
    create(base) {
        return ListCollectionsRequest.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseListCollectionsRequest();
        message.includehist = object.includehist ?? false;
        return message;
    },
};
function createBaseListCollectionsResponse() {
    return { results: "" };
}
export const ListCollectionsResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.results !== "") {
            writer.uint32(10).string(message.results);
        }
        return writer;
    },
    decode(input, length) {
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
    fromJSON(object) {
        return { results: isSet(object.results) ? String(object.results) : "" };
    },
    toJSON(message) {
        const obj = {};
        message.results !== undefined && (obj.results = message.results);
        return obj;
    },
    create(base) {
        return ListCollectionsResponse.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseListCollectionsResponse();
        message.results = object.results ?? "";
        return message;
    },
};
function createBaseDropCollectionRequest() {
    return { collectionname: "" };
}
export const DropCollectionRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.collectionname !== "") {
            writer.uint32(10).string(message.collectionname);
        }
        return writer;
    },
    decode(input, length) {
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
    fromJSON(object) {
        return { collectionname: isSet(object.collectionname) ? String(object.collectionname) : "" };
    },
    toJSON(message) {
        const obj = {};
        message.collectionname !== undefined && (obj.collectionname = message.collectionname);
        return obj;
    },
    create(base) {
        return DropCollectionRequest.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseDropCollectionRequest();
        message.collectionname = object.collectionname ?? "";
        return message;
    },
};
function createBaseDropCollectionResponse() {
    return {};
}
export const DropCollectionResponse = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
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
    fromJSON(_) {
        return {};
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    create(base) {
        return DropCollectionResponse.fromPartial(base ?? {});
    },
    fromPartial(_) {
        const message = createBaseDropCollectionResponse();
        return message;
    },
};
function createBasecol_timeseries() {
    return { timeField: "", metaField: "", granularity: "" };
}
export const col_timeseries = {
    encode(message, writer = _m0.Writer.create()) {
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
    decode(input, length) {
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
    fromJSON(object) {
        return {
            timeField: isSet(object.timeField) ? String(object.timeField) : "",
            metaField: isSet(object.metaField) ? String(object.metaField) : "",
            granularity: isSet(object.granularity) ? String(object.granularity) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.timeField !== undefined && (obj.timeField = message.timeField);
        message.metaField !== undefined && (obj.metaField = message.metaField);
        message.granularity !== undefined && (obj.granularity = message.granularity);
        return obj;
    },
    create(base) {
        return col_timeseries.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBasecol_timeseries();
        message.timeField = object.timeField ?? "";
        message.metaField = object.metaField ?? "";
        message.granularity = object.granularity ?? "";
        return message;
    },
};
function createBasecol_collation() {
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
    encode(message, writer = _m0.Writer.create()) {
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
    decode(input, length) {
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
    fromJSON(object) {
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
    toJSON(message) {
        const obj = {};
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
    create(base) {
        return col_collation.fromPartial(base ?? {});
    },
    fromPartial(object) {
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
function createBaseCreateCollectionRequest() {
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
    encode(message, writer = _m0.Writer.create()) {
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
    decode(input, length) {
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
    fromJSON(object) {
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
    toJSON(message) {
        const obj = {};
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
    create(base) {
        return CreateCollectionRequest.fromPartial(base ?? {});
    },
    fromPartial(object) {
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
function createBaseCreateCollectionResponse() {
    return {};
}
export const CreateCollectionResponse = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
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
    fromJSON(_) {
        return {};
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    create(base) {
        return CreateCollectionResponse.fromPartial(base ?? {});
    },
    fromPartial(_) {
        const message = createBaseCreateCollectionResponse();
        return message;
    },
};
function createBaseQueryRequest() {
    return { query: "", collectionname: "", projection: "", top: 0, skip: 0, orderby: "", queryas: "", explain: false };
}
export const QueryRequest = {
    encode(message, writer = _m0.Writer.create()) {
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
        if (message.explain === true) {
            writer.uint32(64).bool(message.explain);
        }
        return writer;
    },
    decode(input, length) {
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
                case 8:
                    message.explain = reader.bool();
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
            query: isSet(object.query) ? String(object.query) : "",
            collectionname: isSet(object.collectionname) ? String(object.collectionname) : "",
            projection: isSet(object.projection) ? String(object.projection) : "",
            top: isSet(object.top) ? Number(object.top) : 0,
            skip: isSet(object.skip) ? Number(object.skip) : 0,
            orderby: isSet(object.orderby) ? String(object.orderby) : "",
            queryas: isSet(object.queryas) ? String(object.queryas) : "",
            explain: isSet(object.explain) ? Boolean(object.explain) : false,
        };
    },
    toJSON(message) {
        const obj = {};
        message.query !== undefined && (obj.query = message.query);
        message.collectionname !== undefined && (obj.collectionname = message.collectionname);
        message.projection !== undefined && (obj.projection = message.projection);
        message.top !== undefined && (obj.top = Math.round(message.top));
        message.skip !== undefined && (obj.skip = Math.round(message.skip));
        message.orderby !== undefined && (obj.orderby = message.orderby);
        message.queryas !== undefined && (obj.queryas = message.queryas);
        message.explain !== undefined && (obj.explain = message.explain);
        return obj;
    },
    create(base) {
        return QueryRequest.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseQueryRequest();
        message.query = object.query ?? "";
        message.collectionname = object.collectionname ?? "";
        message.projection = object.projection ?? "";
        message.top = object.top ?? 0;
        message.skip = object.skip ?? 0;
        message.orderby = object.orderby ?? "";
        message.queryas = object.queryas ?? "";
        message.explain = object.explain ?? false;
        return message;
    },
};
function createBaseQueryResponse() {
    return { results: "" };
}
export const QueryResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.results !== "") {
            writer.uint32(10).string(message.results);
        }
        return writer;
    },
    decode(input, length) {
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
    fromJSON(object) {
        return { results: isSet(object.results) ? String(object.results) : "" };
    },
    toJSON(message) {
        const obj = {};
        message.results !== undefined && (obj.results = message.results);
        return obj;
    },
    create(base) {
        return QueryResponse.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseQueryResponse();
        message.results = object.results ?? "";
        return message;
    },
};
function createBaseGetDocumentVersionRequest() {
    return { collectionname: "", id: "", version: 0, decrypt: false };
}
export const GetDocumentVersionRequest = {
    encode(message, writer = _m0.Writer.create()) {
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
    decode(input, length) {
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
    fromJSON(object) {
        return {
            collectionname: isSet(object.collectionname) ? String(object.collectionname) : "",
            id: isSet(object.id) ? String(object.id) : "",
            version: isSet(object.version) ? Number(object.version) : 0,
            decrypt: isSet(object.decrypt) ? Boolean(object.decrypt) : false,
        };
    },
    toJSON(message) {
        const obj = {};
        message.collectionname !== undefined && (obj.collectionname = message.collectionname);
        message.id !== undefined && (obj.id = message.id);
        message.version !== undefined && (obj.version = Math.round(message.version));
        message.decrypt !== undefined && (obj.decrypt = message.decrypt);
        return obj;
    },
    create(base) {
        return GetDocumentVersionRequest.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseGetDocumentVersionRequest();
        message.collectionname = object.collectionname ?? "";
        message.id = object.id ?? "";
        message.version = object.version ?? 0;
        message.decrypt = object.decrypt ?? false;
        return message;
    },
};
function createBaseGetDocumentVersionResponse() {
    return { result: "" };
}
export const GetDocumentVersionResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.result !== "") {
            writer.uint32(10).string(message.result);
        }
        return writer;
    },
    decode(input, length) {
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
    fromJSON(object) {
        return { result: isSet(object.result) ? String(object.result) : "" };
    },
    toJSON(message) {
        const obj = {};
        message.result !== undefined && (obj.result = message.result);
        return obj;
    },
    create(base) {
        return GetDocumentVersionResponse.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseGetDocumentVersionResponse();
        message.result = object.result ?? "";
        return message;
    },
};
function createBaseAggregateRequest() {
    return { collectionname: "", aggregates: "", queryas: "", hint: "", explain: false };
}
export const AggregateRequest = {
    encode(message, writer = _m0.Writer.create()) {
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
        if (message.explain === true) {
            writer.uint32(40).bool(message.explain);
        }
        return writer;
    },
    decode(input, length) {
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
                case 5:
                    message.explain = reader.bool();
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
            aggregates: isSet(object.aggregates) ? String(object.aggregates) : "",
            queryas: isSet(object.queryas) ? String(object.queryas) : "",
            hint: isSet(object.hint) ? String(object.hint) : "",
            explain: isSet(object.explain) ? Boolean(object.explain) : false,
        };
    },
    toJSON(message) {
        const obj = {};
        message.collectionname !== undefined && (obj.collectionname = message.collectionname);
        message.aggregates !== undefined && (obj.aggregates = message.aggregates);
        message.queryas !== undefined && (obj.queryas = message.queryas);
        message.hint !== undefined && (obj.hint = message.hint);
        message.explain !== undefined && (obj.explain = message.explain);
        return obj;
    },
    create(base) {
        return AggregateRequest.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseAggregateRequest();
        message.collectionname = object.collectionname ?? "";
        message.aggregates = object.aggregates ?? "";
        message.queryas = object.queryas ?? "";
        message.hint = object.hint ?? "";
        message.explain = object.explain ?? false;
        return message;
    },
};
function createBaseAggregateResponse() {
    return { results: "" };
}
export const AggregateResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.results !== "") {
            writer.uint32(10).string(message.results);
        }
        return writer;
    },
    decode(input, length) {
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
    fromJSON(object) {
        return { results: isSet(object.results) ? String(object.results) : "" };
    },
    toJSON(message) {
        const obj = {};
        message.results !== undefined && (obj.results = message.results);
        return obj;
    },
    create(base) {
        return AggregateResponse.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseAggregateResponse();
        message.results = object.results ?? "";
        return message;
    },
};
function createBaseCountRequest() {
    return { collectionname: "", query: "", queryas: "", explain: false };
}
export const CountRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.collectionname !== "") {
            writer.uint32(10).string(message.collectionname);
        }
        if (message.query !== "") {
            writer.uint32(18).string(message.query);
        }
        if (message.queryas !== "") {
            writer.uint32(26).string(message.queryas);
        }
        if (message.explain === true) {
            writer.uint32(32).bool(message.explain);
        }
        return writer;
    },
    decode(input, length) {
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
                case 4:
                    message.explain = reader.bool();
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
            query: isSet(object.query) ? String(object.query) : "",
            queryas: isSet(object.queryas) ? String(object.queryas) : "",
            explain: isSet(object.explain) ? Boolean(object.explain) : false,
        };
    },
    toJSON(message) {
        const obj = {};
        message.collectionname !== undefined && (obj.collectionname = message.collectionname);
        message.query !== undefined && (obj.query = message.query);
        message.queryas !== undefined && (obj.queryas = message.queryas);
        message.explain !== undefined && (obj.explain = message.explain);
        return obj;
    },
    create(base) {
        return CountRequest.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseCountRequest();
        message.collectionname = object.collectionname ?? "";
        message.query = object.query ?? "";
        message.queryas = object.queryas ?? "";
        message.explain = object.explain ?? false;
        return message;
    },
};
function createBaseCountResponse() {
    return { result: 0 };
}
export const CountResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.result !== 0) {
            writer.uint32(8).int32(message.result);
        }
        return writer;
    },
    decode(input, length) {
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
    fromJSON(object) {
        return { result: isSet(object.result) ? Number(object.result) : 0 };
    },
    toJSON(message) {
        const obj = {};
        message.result !== undefined && (obj.result = Math.round(message.result));
        return obj;
    },
    create(base) {
        return CountResponse.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseCountResponse();
        message.result = object.result ?? 0;
        return message;
    },
};
function createBaseDistinctRequest() {
    return { collectionname: "", field: "", query: "", queryas: "", options: "", explain: false };
}
export const DistinctRequest = {
    encode(message, writer = _m0.Writer.create()) {
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
        if (message.explain === true) {
            writer.uint32(56).bool(message.explain);
        }
        return writer;
    },
    decode(input, length) {
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
                case 7:
                    message.explain = reader.bool();
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
            field: isSet(object.field) ? String(object.field) : "",
            query: isSet(object.query) ? String(object.query) : "",
            queryas: isSet(object.queryas) ? String(object.queryas) : "",
            options: isSet(object.options) ? String(object.options) : "",
            explain: isSet(object.explain) ? Boolean(object.explain) : false,
        };
    },
    toJSON(message) {
        const obj = {};
        message.collectionname !== undefined && (obj.collectionname = message.collectionname);
        message.field !== undefined && (obj.field = message.field);
        message.query !== undefined && (obj.query = message.query);
        message.queryas !== undefined && (obj.queryas = message.queryas);
        message.options !== undefined && (obj.options = message.options);
        message.explain !== undefined && (obj.explain = message.explain);
        return obj;
    },
    create(base) {
        return DistinctRequest.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseDistinctRequest();
        message.collectionname = object.collectionname ?? "";
        message.field = object.field ?? "";
        message.query = object.query ?? "";
        message.queryas = object.queryas ?? "";
        message.options = object.options ?? "";
        message.explain = object.explain ?? false;
        return message;
    },
};
function createBaseDistinctResponse() {
    return { results: [] };
}
export const DistinctResponse = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.results) {
            writer.uint32(10).string(v);
        }
        return writer;
    },
    decode(input, length) {
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
    fromJSON(object) {
        return { results: Array.isArray(object?.results) ? object.results.map((e) => String(e)) : [] };
    },
    toJSON(message) {
        const obj = {};
        if (message.results) {
            obj.results = message.results.map((e) => e);
        }
        else {
            obj.results = [];
        }
        return obj;
    },
    create(base) {
        return DistinctResponse.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseDistinctResponse();
        message.results = object.results?.map((e) => e) || [];
        return message;
    },
};
function createBaseInsertOneRequest() {
    return { collectionname: "", item: "", w: 0, j: false };
}
export const InsertOneRequest = {
    encode(message, writer = _m0.Writer.create()) {
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
    decode(input, length) {
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
    fromJSON(object) {
        return {
            collectionname: isSet(object.collectionname) ? String(object.collectionname) : "",
            item: isSet(object.item) ? String(object.item) : "",
            w: isSet(object.w) ? Number(object.w) : 0,
            j: isSet(object.j) ? Boolean(object.j) : false,
        };
    },
    toJSON(message) {
        const obj = {};
        message.collectionname !== undefined && (obj.collectionname = message.collectionname);
        message.item !== undefined && (obj.item = message.item);
        message.w !== undefined && (obj.w = Math.round(message.w));
        message.j !== undefined && (obj.j = message.j);
        return obj;
    },
    create(base) {
        return InsertOneRequest.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseInsertOneRequest();
        message.collectionname = object.collectionname ?? "";
        message.item = object.item ?? "";
        message.w = object.w ?? 0;
        message.j = object.j ?? false;
        return message;
    },
};
function createBaseInsertOneResponse() {
    return { result: "" };
}
export const InsertOneResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.result !== "") {
            writer.uint32(10).string(message.result);
        }
        return writer;
    },
    decode(input, length) {
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
    fromJSON(object) {
        return { result: isSet(object.result) ? String(object.result) : "" };
    },
    toJSON(message) {
        const obj = {};
        message.result !== undefined && (obj.result = message.result);
        return obj;
    },
    create(base) {
        return InsertOneResponse.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseInsertOneResponse();
        message.result = object.result ?? "";
        return message;
    },
};
function createBaseInsertManyRequest() {
    return { collectionname: "", items: "", w: 0, j: false, skipresults: false };
}
export const InsertManyRequest = {
    encode(message, writer = _m0.Writer.create()) {
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
    decode(input, length) {
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
    fromJSON(object) {
        return {
            collectionname: isSet(object.collectionname) ? String(object.collectionname) : "",
            items: isSet(object.items) ? String(object.items) : "",
            w: isSet(object.w) ? Number(object.w) : 0,
            j: isSet(object.j) ? Boolean(object.j) : false,
            skipresults: isSet(object.skipresults) ? Boolean(object.skipresults) : false,
        };
    },
    toJSON(message) {
        const obj = {};
        message.collectionname !== undefined && (obj.collectionname = message.collectionname);
        message.items !== undefined && (obj.items = message.items);
        message.w !== undefined && (obj.w = Math.round(message.w));
        message.j !== undefined && (obj.j = message.j);
        message.skipresults !== undefined && (obj.skipresults = message.skipresults);
        return obj;
    },
    create(base) {
        return InsertManyRequest.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseInsertManyRequest();
        message.collectionname = object.collectionname ?? "";
        message.items = object.items ?? "";
        message.w = object.w ?? 0;
        message.j = object.j ?? false;
        message.skipresults = object.skipresults ?? false;
        return message;
    },
};
function createBaseInsertManyResponse() {
    return { results: "" };
}
export const InsertManyResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.results !== "") {
            writer.uint32(10).string(message.results);
        }
        return writer;
    },
    decode(input, length) {
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
    fromJSON(object) {
        return { results: isSet(object.results) ? String(object.results) : "" };
    },
    toJSON(message) {
        const obj = {};
        message.results !== undefined && (obj.results = message.results);
        return obj;
    },
    create(base) {
        return InsertManyResponse.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseInsertManyResponse();
        message.results = object.results ?? "";
        return message;
    },
};
function createBaseUpdateOneRequest() {
    return { collectionname: "", item: "", w: 0, j: false };
}
export const UpdateOneRequest = {
    encode(message, writer = _m0.Writer.create()) {
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
    decode(input, length) {
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
    fromJSON(object) {
        return {
            collectionname: isSet(object.collectionname) ? String(object.collectionname) : "",
            item: isSet(object.item) ? String(object.item) : "",
            w: isSet(object.w) ? Number(object.w) : 0,
            j: isSet(object.j) ? Boolean(object.j) : false,
        };
    },
    toJSON(message) {
        const obj = {};
        message.collectionname !== undefined && (obj.collectionname = message.collectionname);
        message.item !== undefined && (obj.item = message.item);
        message.w !== undefined && (obj.w = Math.round(message.w));
        message.j !== undefined && (obj.j = message.j);
        return obj;
    },
    create(base) {
        return UpdateOneRequest.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseUpdateOneRequest();
        message.collectionname = object.collectionname ?? "";
        message.item = object.item ?? "";
        message.w = object.w ?? 0;
        message.j = object.j ?? false;
        return message;
    },
};
function createBaseUpdateOneResponse() {
    return { result: "" };
}
export const UpdateOneResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.result !== "") {
            writer.uint32(10).string(message.result);
        }
        return writer;
    },
    decode(input, length) {
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
    fromJSON(object) {
        return { result: isSet(object.result) ? String(object.result) : "" };
    },
    toJSON(message) {
        const obj = {};
        message.result !== undefined && (obj.result = message.result);
        return obj;
    },
    create(base) {
        return UpdateOneResponse.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseUpdateOneResponse();
        message.result = object.result ?? "";
        return message;
    },
};
function createBaseUpdateDocumentRequest() {
    return { collectionname: "", query: "", document: "", w: 0, j: false };
}
export const UpdateDocumentRequest = {
    encode(message, writer = _m0.Writer.create()) {
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
    decode(input, length) {
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
    fromJSON(object) {
        return {
            collectionname: isSet(object.collectionname) ? String(object.collectionname) : "",
            query: isSet(object.query) ? String(object.query) : "",
            document: isSet(object.document) ? String(object.document) : "",
            w: isSet(object.w) ? Number(object.w) : 0,
            j: isSet(object.j) ? Boolean(object.j) : false,
        };
    },
    toJSON(message) {
        const obj = {};
        message.collectionname !== undefined && (obj.collectionname = message.collectionname);
        message.query !== undefined && (obj.query = message.query);
        message.document !== undefined && (obj.document = message.document);
        message.w !== undefined && (obj.w = Math.round(message.w));
        message.j !== undefined && (obj.j = message.j);
        return obj;
    },
    create(base) {
        return UpdateDocumentRequest.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseUpdateDocumentRequest();
        message.collectionname = object.collectionname ?? "";
        message.query = object.query ?? "";
        message.document = object.document ?? "";
        message.w = object.w ?? 0;
        message.j = object.j ?? false;
        return message;
    },
};
function createBaseUpdateResult() {
    return { acknowledged: false, matchedCount: 0, modifiedCount: 0, upsertedCount: 0, upsertedId: "" };
}
export const UpdateResult = {
    encode(message, writer = _m0.Writer.create()) {
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
    decode(input, length) {
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
    fromJSON(object) {
        return {
            acknowledged: isSet(object.acknowledged) ? Boolean(object.acknowledged) : false,
            matchedCount: isSet(object.matchedCount) ? Number(object.matchedCount) : 0,
            modifiedCount: isSet(object.modifiedCount) ? Number(object.modifiedCount) : 0,
            upsertedCount: isSet(object.upsertedCount) ? Number(object.upsertedCount) : 0,
            upsertedId: isSet(object.upsertedId) ? String(object.upsertedId) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.acknowledged !== undefined && (obj.acknowledged = message.acknowledged);
        message.matchedCount !== undefined && (obj.matchedCount = Math.round(message.matchedCount));
        message.modifiedCount !== undefined && (obj.modifiedCount = Math.round(message.modifiedCount));
        message.upsertedCount !== undefined && (obj.upsertedCount = Math.round(message.upsertedCount));
        message.upsertedId !== undefined && (obj.upsertedId = message.upsertedId);
        return obj;
    },
    create(base) {
        return UpdateResult.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseUpdateResult();
        message.acknowledged = object.acknowledged ?? false;
        message.matchedCount = object.matchedCount ?? 0;
        message.modifiedCount = object.modifiedCount ?? 0;
        message.upsertedCount = object.upsertedCount ?? 0;
        message.upsertedId = object.upsertedId ?? "";
        return message;
    },
};
function createBaseUpdateDocumentResponse() {
    return { opresult: undefined };
}
export const UpdateDocumentResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.opresult !== undefined) {
            UpdateResult.encode(message.opresult, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
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
    fromJSON(object) {
        return { opresult: isSet(object.opresult) ? UpdateResult.fromJSON(object.opresult) : undefined };
    },
    toJSON(message) {
        const obj = {};
        message.opresult !== undefined &&
            (obj.opresult = message.opresult ? UpdateResult.toJSON(message.opresult) : undefined);
        return obj;
    },
    create(base) {
        return UpdateDocumentResponse.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseUpdateDocumentResponse();
        message.opresult = (object.opresult !== undefined && object.opresult !== null)
            ? UpdateResult.fromPartial(object.opresult)
            : undefined;
        return message;
    },
};
function createBaseInsertOrUpdateOneRequest() {
    return { collectionname: "", uniqeness: "", item: "", w: 0, j: false };
}
export const InsertOrUpdateOneRequest = {
    encode(message, writer = _m0.Writer.create()) {
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
    decode(input, length) {
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
    fromJSON(object) {
        return {
            collectionname: isSet(object.collectionname) ? String(object.collectionname) : "",
            uniqeness: isSet(object.uniqeness) ? String(object.uniqeness) : "",
            item: isSet(object.item) ? String(object.item) : "",
            w: isSet(object.w) ? Number(object.w) : 0,
            j: isSet(object.j) ? Boolean(object.j) : false,
        };
    },
    toJSON(message) {
        const obj = {};
        message.collectionname !== undefined && (obj.collectionname = message.collectionname);
        message.uniqeness !== undefined && (obj.uniqeness = message.uniqeness);
        message.item !== undefined && (obj.item = message.item);
        message.w !== undefined && (obj.w = Math.round(message.w));
        message.j !== undefined && (obj.j = message.j);
        return obj;
    },
    create(base) {
        return InsertOrUpdateOneRequest.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseInsertOrUpdateOneRequest();
        message.collectionname = object.collectionname ?? "";
        message.uniqeness = object.uniqeness ?? "";
        message.item = object.item ?? "";
        message.w = object.w ?? 0;
        message.j = object.j ?? false;
        return message;
    },
};
function createBaseInsertOrUpdateOneResponse() {
    return { result: "" };
}
export const InsertOrUpdateOneResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.result !== "") {
            writer.uint32(10).string(message.result);
        }
        return writer;
    },
    decode(input, length) {
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
    fromJSON(object) {
        return { result: isSet(object.result) ? String(object.result) : "" };
    },
    toJSON(message) {
        const obj = {};
        message.result !== undefined && (obj.result = message.result);
        return obj;
    },
    create(base) {
        return InsertOrUpdateOneResponse.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseInsertOrUpdateOneResponse();
        message.result = object.result ?? "";
        return message;
    },
};
function createBaseInsertOrUpdateManyRequest() {
    return { collectionname: "", uniqeness: "", items: "", w: 0, j: false, skipresults: false };
}
export const InsertOrUpdateManyRequest = {
    encode(message, writer = _m0.Writer.create()) {
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
    decode(input, length) {
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
    fromJSON(object) {
        return {
            collectionname: isSet(object.collectionname) ? String(object.collectionname) : "",
            uniqeness: isSet(object.uniqeness) ? String(object.uniqeness) : "",
            items: isSet(object.items) ? String(object.items) : "",
            w: isSet(object.w) ? Number(object.w) : 0,
            j: isSet(object.j) ? Boolean(object.j) : false,
            skipresults: isSet(object.skipresults) ? Boolean(object.skipresults) : false,
        };
    },
    toJSON(message) {
        const obj = {};
        message.collectionname !== undefined && (obj.collectionname = message.collectionname);
        message.uniqeness !== undefined && (obj.uniqeness = message.uniqeness);
        message.items !== undefined && (obj.items = message.items);
        message.w !== undefined && (obj.w = Math.round(message.w));
        message.j !== undefined && (obj.j = message.j);
        message.skipresults !== undefined && (obj.skipresults = message.skipresults);
        return obj;
    },
    create(base) {
        return InsertOrUpdateManyRequest.fromPartial(base ?? {});
    },
    fromPartial(object) {
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
function createBaseInsertOrUpdateManyResponse() {
    return { results: "" };
}
export const InsertOrUpdateManyResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.results !== "") {
            writer.uint32(10).string(message.results);
        }
        return writer;
    },
    decode(input, length) {
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
    fromJSON(object) {
        return { results: isSet(object.results) ? String(object.results) : "" };
    },
    toJSON(message) {
        const obj = {};
        message.results !== undefined && (obj.results = message.results);
        return obj;
    },
    create(base) {
        return InsertOrUpdateManyResponse.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseInsertOrUpdateManyResponse();
        message.results = object.results ?? "";
        return message;
    },
};
function createBaseDeleteOneRequest() {
    return { collectionname: "", id: "", recursive: false };
}
export const DeleteOneRequest = {
    encode(message, writer = _m0.Writer.create()) {
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
    decode(input, length) {
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
    fromJSON(object) {
        return {
            collectionname: isSet(object.collectionname) ? String(object.collectionname) : "",
            id: isSet(object.id) ? String(object.id) : "",
            recursive: isSet(object.recursive) ? Boolean(object.recursive) : false,
        };
    },
    toJSON(message) {
        const obj = {};
        message.collectionname !== undefined && (obj.collectionname = message.collectionname);
        message.id !== undefined && (obj.id = message.id);
        message.recursive !== undefined && (obj.recursive = message.recursive);
        return obj;
    },
    create(base) {
        return DeleteOneRequest.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseDeleteOneRequest();
        message.collectionname = object.collectionname ?? "";
        message.id = object.id ?? "";
        message.recursive = object.recursive ?? false;
        return message;
    },
};
function createBaseDeleteOneResponse() {
    return { affectedrows: 0 };
}
export const DeleteOneResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.affectedrows !== 0) {
            writer.uint32(8).int32(message.affectedrows);
        }
        return writer;
    },
    decode(input, length) {
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
    fromJSON(object) {
        return { affectedrows: isSet(object.affectedrows) ? Number(object.affectedrows) : 0 };
    },
    toJSON(message) {
        const obj = {};
        message.affectedrows !== undefined && (obj.affectedrows = Math.round(message.affectedrows));
        return obj;
    },
    create(base) {
        return DeleteOneResponse.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseDeleteOneResponse();
        message.affectedrows = object.affectedrows ?? 0;
        return message;
    },
};
function createBaseDeleteManyRequest() {
    return { collectionname: "", query: "", recursive: false, ids: [] };
}
export const DeleteManyRequest = {
    encode(message, writer = _m0.Writer.create()) {
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
            writer.uint32(34).string(v);
        }
        return writer;
    },
    decode(input, length) {
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
    fromJSON(object) {
        return {
            collectionname: isSet(object.collectionname) ? String(object.collectionname) : "",
            query: isSet(object.query) ? String(object.query) : "",
            recursive: isSet(object.recursive) ? Boolean(object.recursive) : false,
            ids: Array.isArray(object?.ids) ? object.ids.map((e) => String(e)) : [],
        };
    },
    toJSON(message) {
        const obj = {};
        message.collectionname !== undefined && (obj.collectionname = message.collectionname);
        message.query !== undefined && (obj.query = message.query);
        message.recursive !== undefined && (obj.recursive = message.recursive);
        if (message.ids) {
            obj.ids = message.ids.map((e) => e);
        }
        else {
            obj.ids = [];
        }
        return obj;
    },
    create(base) {
        return DeleteManyRequest.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseDeleteManyRequest();
        message.collectionname = object.collectionname ?? "";
        message.query = object.query ?? "";
        message.recursive = object.recursive ?? false;
        message.ids = object.ids?.map((e) => e) || [];
        return message;
    },
};
function createBaseDeleteManyResponse() {
    return { affectedrows: 0 };
}
export const DeleteManyResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.affectedrows !== 0) {
            writer.uint32(8).int32(message.affectedrows);
        }
        return writer;
    },
    decode(input, length) {
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
    fromJSON(object) {
        return { affectedrows: isSet(object.affectedrows) ? Number(object.affectedrows) : 0 };
    },
    toJSON(message) {
        const obj = {};
        message.affectedrows !== undefined && (obj.affectedrows = Math.round(message.affectedrows));
        return obj;
    },
    create(base) {
        return DeleteManyResponse.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseDeleteManyResponse();
        message.affectedrows = object.affectedrows ?? 0;
        return message;
    },
};
function isSet(value) {
    return value !== null && value !== undefined;
}
//# sourceMappingURL=querys.js.map