/* eslint-disable */
import * as _m0 from "protobufjs/minimal";
export var protobufPackage = "openiap";
function createBaseListCollectionsRequest() {
    return { includehist: false };
}
export var ListCollectionsRequest = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.includehist === true) {
            writer.uint32(8).bool(message.includehist);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseListCollectionsRequest();
        while (reader.pos < end) {
            var tag = reader.uint32();
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
    fromJSON: function (object) {
        return { includehist: isSet(object.includehist) ? Boolean(object.includehist) : false };
    },
    toJSON: function (message) {
        var obj = {};
        message.includehist !== undefined && (obj.includehist = message.includehist);
        return obj;
    },
    create: function (base) {
        return ListCollectionsRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseListCollectionsRequest();
        message.includehist = (_a = object.includehist) !== null && _a !== void 0 ? _a : false;
        return message;
    },
};
function createBaseListCollectionsResponse() {
    return { results: "" };
}
export var ListCollectionsResponse = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.results !== "") {
            writer.uint32(10).string(message.results);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseListCollectionsResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
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
    fromJSON: function (object) {
        return { results: isSet(object.results) ? String(object.results) : "" };
    },
    toJSON: function (message) {
        var obj = {};
        message.results !== undefined && (obj.results = message.results);
        return obj;
    },
    create: function (base) {
        return ListCollectionsResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseListCollectionsResponse();
        message.results = (_a = object.results) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
function createBaseDropCollectionRequest() {
    return { collectionname: "" };
}
export var DropCollectionRequest = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.collectionname !== "") {
            writer.uint32(10).string(message.collectionname);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseDropCollectionRequest();
        while (reader.pos < end) {
            var tag = reader.uint32();
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
    fromJSON: function (object) {
        return { collectionname: isSet(object.collectionname) ? String(object.collectionname) : "" };
    },
    toJSON: function (message) {
        var obj = {};
        message.collectionname !== undefined && (obj.collectionname = message.collectionname);
        return obj;
    },
    create: function (base) {
        return DropCollectionRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseDropCollectionRequest();
        message.collectionname = (_a = object.collectionname) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
function createBaseDropCollectionResponse() {
    return {};
}
export var DropCollectionResponse = {
    encode: function (_, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseDropCollectionResponse();
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
        return DropCollectionResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (_) {
        var message = createBaseDropCollectionResponse();
        return message;
    },
};
function createBasecol_timeseries() {
    return { timeField: "", metaField: "", granularity: "" };
}
export var col_timeseries = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
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
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBasecol_timeseries();
        while (reader.pos < end) {
            var tag = reader.uint32();
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
    fromJSON: function (object) {
        return {
            timeField: isSet(object.timeField) ? String(object.timeField) : "",
            metaField: isSet(object.metaField) ? String(object.metaField) : "",
            granularity: isSet(object.granularity) ? String(object.granularity) : "",
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.timeField !== undefined && (obj.timeField = message.timeField);
        message.metaField !== undefined && (obj.metaField = message.metaField);
        message.granularity !== undefined && (obj.granularity = message.granularity);
        return obj;
    },
    create: function (base) {
        return col_timeseries.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var _a, _b, _c;
        var message = createBasecol_timeseries();
        message.timeField = (_a = object.timeField) !== null && _a !== void 0 ? _a : "";
        message.metaField = (_b = object.metaField) !== null && _b !== void 0 ? _b : "";
        message.granularity = (_c = object.granularity) !== null && _c !== void 0 ? _c : "";
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
export var col_collation = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
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
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBasecol_collation();
        while (reader.pos < end) {
            var tag = reader.uint32();
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
    fromJSON: function (object) {
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
    toJSON: function (message) {
        var obj = {};
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
    create: function (base) {
        return col_collation.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var _a, _b, _c, _d, _e, _f, _g, _h;
        var message = createBasecol_collation();
        message.locale = (_a = object.locale) !== null && _a !== void 0 ? _a : "";
        message.caseLevel = (_b = object.caseLevel) !== null && _b !== void 0 ? _b : false;
        message.caseFirst = (_c = object.caseFirst) !== null && _c !== void 0 ? _c : "";
        message.strength = (_d = object.strength) !== null && _d !== void 0 ? _d : 0;
        message.numericOrdering = (_e = object.numericOrdering) !== null && _e !== void 0 ? _e : false;
        message.alternate = (_f = object.alternate) !== null && _f !== void 0 ? _f : "";
        message.maxVariable = (_g = object.maxVariable) !== null && _g !== void 0 ? _g : "";
        message.backwards = (_h = object.backwards) !== null && _h !== void 0 ? _h : false;
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
export var CreateCollectionRequest = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
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
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseCreateCollectionRequest();
        while (reader.pos < end) {
            var tag = reader.uint32();
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
    fromJSON: function (object) {
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
    toJSON: function (message) {
        var obj = {};
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
    create: function (base) {
        return CreateCollectionRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var _a, _b, _c, _d, _e, _f;
        var message = createBaseCreateCollectionRequest();
        message.collectionname = (_a = object.collectionname) !== null && _a !== void 0 ? _a : "";
        message.collation = (object.collation !== undefined && object.collation !== null)
            ? col_collation.fromPartial(object.collation)
            : undefined;
        message.timeseries = (object.timeseries !== undefined && object.timeseries !== null)
            ? col_timeseries.fromPartial(object.timeseries)
            : undefined;
        message.expireAfterSeconds = (_b = object.expireAfterSeconds) !== null && _b !== void 0 ? _b : 0;
        message.changeStreamPreAndPostImages = (_c = object.changeStreamPreAndPostImages) !== null && _c !== void 0 ? _c : false;
        message.capped = (_d = object.capped) !== null && _d !== void 0 ? _d : false;
        message.max = (_e = object.max) !== null && _e !== void 0 ? _e : 0;
        message.size = (_f = object.size) !== null && _f !== void 0 ? _f : 0;
        return message;
    },
};
function createBaseCreateCollectionResponse() {
    return {};
}
export var CreateCollectionResponse = {
    encode: function (_, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseCreateCollectionResponse();
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
        return CreateCollectionResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (_) {
        var message = createBaseCreateCollectionResponse();
        return message;
    },
};
function createBaseQueryRequest() {
    return { query: "", collectionname: "", projection: "", top: 0, skip: 0, orderby: "", queryas: "", explain: false };
}
export var QueryRequest = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
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
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseQueryRequest();
        while (reader.pos < end) {
            var tag = reader.uint32();
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
    fromJSON: function (object) {
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
    toJSON: function (message) {
        var obj = {};
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
    create: function (base) {
        return QueryRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var _a, _b, _c, _d, _e, _f, _g, _h;
        var message = createBaseQueryRequest();
        message.query = (_a = object.query) !== null && _a !== void 0 ? _a : "";
        message.collectionname = (_b = object.collectionname) !== null && _b !== void 0 ? _b : "";
        message.projection = (_c = object.projection) !== null && _c !== void 0 ? _c : "";
        message.top = (_d = object.top) !== null && _d !== void 0 ? _d : 0;
        message.skip = (_e = object.skip) !== null && _e !== void 0 ? _e : 0;
        message.orderby = (_f = object.orderby) !== null && _f !== void 0 ? _f : "";
        message.queryas = (_g = object.queryas) !== null && _g !== void 0 ? _g : "";
        message.explain = (_h = object.explain) !== null && _h !== void 0 ? _h : false;
        return message;
    },
};
function createBaseQueryResponse() {
    return { results: "" };
}
export var QueryResponse = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.results !== "") {
            writer.uint32(10).string(message.results);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseQueryResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
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
    fromJSON: function (object) {
        return { results: isSet(object.results) ? String(object.results) : "" };
    },
    toJSON: function (message) {
        var obj = {};
        message.results !== undefined && (obj.results = message.results);
        return obj;
    },
    create: function (base) {
        return QueryResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseQueryResponse();
        message.results = (_a = object.results) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
function createBaseGetDocumentVersionRequest() {
    return { collectionname: "", id: "", version: 0, decrypt: false };
}
export var GetDocumentVersionRequest = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
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
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseGetDocumentVersionRequest();
        while (reader.pos < end) {
            var tag = reader.uint32();
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
    fromJSON: function (object) {
        return {
            collectionname: isSet(object.collectionname) ? String(object.collectionname) : "",
            id: isSet(object.id) ? String(object.id) : "",
            version: isSet(object.version) ? Number(object.version) : 0,
            decrypt: isSet(object.decrypt) ? Boolean(object.decrypt) : false,
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.collectionname !== undefined && (obj.collectionname = message.collectionname);
        message.id !== undefined && (obj.id = message.id);
        message.version !== undefined && (obj.version = Math.round(message.version));
        message.decrypt !== undefined && (obj.decrypt = message.decrypt);
        return obj;
    },
    create: function (base) {
        return GetDocumentVersionRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var _a, _b, _c, _d;
        var message = createBaseGetDocumentVersionRequest();
        message.collectionname = (_a = object.collectionname) !== null && _a !== void 0 ? _a : "";
        message.id = (_b = object.id) !== null && _b !== void 0 ? _b : "";
        message.version = (_c = object.version) !== null && _c !== void 0 ? _c : 0;
        message.decrypt = (_d = object.decrypt) !== null && _d !== void 0 ? _d : false;
        return message;
    },
};
function createBaseGetDocumentVersionResponse() {
    return { result: "" };
}
export var GetDocumentVersionResponse = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.result !== "") {
            writer.uint32(10).string(message.result);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseGetDocumentVersionResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
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
    fromJSON: function (object) {
        return { result: isSet(object.result) ? String(object.result) : "" };
    },
    toJSON: function (message) {
        var obj = {};
        message.result !== undefined && (obj.result = message.result);
        return obj;
    },
    create: function (base) {
        return GetDocumentVersionResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseGetDocumentVersionResponse();
        message.result = (_a = object.result) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
function createBaseAggregateRequest() {
    return { collectionname: "", aggregates: "", queryas: "", hint: "", explain: false };
}
export var AggregateRequest = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
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
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseAggregateRequest();
        while (reader.pos < end) {
            var tag = reader.uint32();
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
    fromJSON: function (object) {
        return {
            collectionname: isSet(object.collectionname) ? String(object.collectionname) : "",
            aggregates: isSet(object.aggregates) ? String(object.aggregates) : "",
            queryas: isSet(object.queryas) ? String(object.queryas) : "",
            hint: isSet(object.hint) ? String(object.hint) : "",
            explain: isSet(object.explain) ? Boolean(object.explain) : false,
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.collectionname !== undefined && (obj.collectionname = message.collectionname);
        message.aggregates !== undefined && (obj.aggregates = message.aggregates);
        message.queryas !== undefined && (obj.queryas = message.queryas);
        message.hint !== undefined && (obj.hint = message.hint);
        message.explain !== undefined && (obj.explain = message.explain);
        return obj;
    },
    create: function (base) {
        return AggregateRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var _a, _b, _c, _d, _e;
        var message = createBaseAggregateRequest();
        message.collectionname = (_a = object.collectionname) !== null && _a !== void 0 ? _a : "";
        message.aggregates = (_b = object.aggregates) !== null && _b !== void 0 ? _b : "";
        message.queryas = (_c = object.queryas) !== null && _c !== void 0 ? _c : "";
        message.hint = (_d = object.hint) !== null && _d !== void 0 ? _d : "";
        message.explain = (_e = object.explain) !== null && _e !== void 0 ? _e : false;
        return message;
    },
};
function createBaseAggregateResponse() {
    return { results: "" };
}
export var AggregateResponse = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.results !== "") {
            writer.uint32(10).string(message.results);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseAggregateResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
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
    fromJSON: function (object) {
        return { results: isSet(object.results) ? String(object.results) : "" };
    },
    toJSON: function (message) {
        var obj = {};
        message.results !== undefined && (obj.results = message.results);
        return obj;
    },
    create: function (base) {
        return AggregateResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseAggregateResponse();
        message.results = (_a = object.results) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
function createBaseCountRequest() {
    return { collectionname: "", query: "", queryas: "", explain: false };
}
export var CountRequest = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
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
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseCountRequest();
        while (reader.pos < end) {
            var tag = reader.uint32();
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
    fromJSON: function (object) {
        return {
            collectionname: isSet(object.collectionname) ? String(object.collectionname) : "",
            query: isSet(object.query) ? String(object.query) : "",
            queryas: isSet(object.queryas) ? String(object.queryas) : "",
            explain: isSet(object.explain) ? Boolean(object.explain) : false,
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.collectionname !== undefined && (obj.collectionname = message.collectionname);
        message.query !== undefined && (obj.query = message.query);
        message.queryas !== undefined && (obj.queryas = message.queryas);
        message.explain !== undefined && (obj.explain = message.explain);
        return obj;
    },
    create: function (base) {
        return CountRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var _a, _b, _c, _d;
        var message = createBaseCountRequest();
        message.collectionname = (_a = object.collectionname) !== null && _a !== void 0 ? _a : "";
        message.query = (_b = object.query) !== null && _b !== void 0 ? _b : "";
        message.queryas = (_c = object.queryas) !== null && _c !== void 0 ? _c : "";
        message.explain = (_d = object.explain) !== null && _d !== void 0 ? _d : false;
        return message;
    },
};
function createBaseCountResponse() {
    return { result: 0 };
}
export var CountResponse = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.result !== 0) {
            writer.uint32(8).int32(message.result);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseCountResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
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
    fromJSON: function (object) {
        return { result: isSet(object.result) ? Number(object.result) : 0 };
    },
    toJSON: function (message) {
        var obj = {};
        message.result !== undefined && (obj.result = Math.round(message.result));
        return obj;
    },
    create: function (base) {
        return CountResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseCountResponse();
        message.result = (_a = object.result) !== null && _a !== void 0 ? _a : 0;
        return message;
    },
};
function createBaseDistinctRequest() {
    return { collectionname: "", field: "", query: "", queryas: "", options: "", explain: false };
}
export var DistinctRequest = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
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
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseDistinctRequest();
        while (reader.pos < end) {
            var tag = reader.uint32();
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
    fromJSON: function (object) {
        return {
            collectionname: isSet(object.collectionname) ? String(object.collectionname) : "",
            field: isSet(object.field) ? String(object.field) : "",
            query: isSet(object.query) ? String(object.query) : "",
            queryas: isSet(object.queryas) ? String(object.queryas) : "",
            options: isSet(object.options) ? String(object.options) : "",
            explain: isSet(object.explain) ? Boolean(object.explain) : false,
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.collectionname !== undefined && (obj.collectionname = message.collectionname);
        message.field !== undefined && (obj.field = message.field);
        message.query !== undefined && (obj.query = message.query);
        message.queryas !== undefined && (obj.queryas = message.queryas);
        message.options !== undefined && (obj.options = message.options);
        message.explain !== undefined && (obj.explain = message.explain);
        return obj;
    },
    create: function (base) {
        return DistinctRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var _a, _b, _c, _d, _e, _f;
        var message = createBaseDistinctRequest();
        message.collectionname = (_a = object.collectionname) !== null && _a !== void 0 ? _a : "";
        message.field = (_b = object.field) !== null && _b !== void 0 ? _b : "";
        message.query = (_c = object.query) !== null && _c !== void 0 ? _c : "";
        message.queryas = (_d = object.queryas) !== null && _d !== void 0 ? _d : "";
        message.options = (_e = object.options) !== null && _e !== void 0 ? _e : "";
        message.explain = (_f = object.explain) !== null && _f !== void 0 ? _f : false;
        return message;
    },
};
function createBaseDistinctResponse() {
    return { results: [] };
}
export var DistinctResponse = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        for (var _i = 0, _a = message.results; _i < _a.length; _i++) {
            var v = _a[_i];
            writer.uint32(10).string(v);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseDistinctResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
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
    fromJSON: function (object) {
        return { results: Array.isArray(object === null || object === void 0 ? void 0 : object.results) ? object.results.map(function (e) { return String(e); }) : [] };
    },
    toJSON: function (message) {
        var obj = {};
        if (message.results) {
            obj.results = message.results.map(function (e) { return e; });
        }
        else {
            obj.results = [];
        }
        return obj;
    },
    create: function (base) {
        return DistinctResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseDistinctResponse();
        message.results = ((_a = object.results) === null || _a === void 0 ? void 0 : _a.map(function (e) { return e; })) || [];
        return message;
    },
};
function createBaseInsertOneRequest() {
    return { collectionname: "", item: "", w: 0, j: false };
}
export var InsertOneRequest = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
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
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseInsertOneRequest();
        while (reader.pos < end) {
            var tag = reader.uint32();
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
    fromJSON: function (object) {
        return {
            collectionname: isSet(object.collectionname) ? String(object.collectionname) : "",
            item: isSet(object.item) ? String(object.item) : "",
            w: isSet(object.w) ? Number(object.w) : 0,
            j: isSet(object.j) ? Boolean(object.j) : false,
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.collectionname !== undefined && (obj.collectionname = message.collectionname);
        message.item !== undefined && (obj.item = message.item);
        message.w !== undefined && (obj.w = Math.round(message.w));
        message.j !== undefined && (obj.j = message.j);
        return obj;
    },
    create: function (base) {
        return InsertOneRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var _a, _b, _c, _d;
        var message = createBaseInsertOneRequest();
        message.collectionname = (_a = object.collectionname) !== null && _a !== void 0 ? _a : "";
        message.item = (_b = object.item) !== null && _b !== void 0 ? _b : "";
        message.w = (_c = object.w) !== null && _c !== void 0 ? _c : 0;
        message.j = (_d = object.j) !== null && _d !== void 0 ? _d : false;
        return message;
    },
};
function createBaseInsertOneResponse() {
    return { result: "" };
}
export var InsertOneResponse = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.result !== "") {
            writer.uint32(10).string(message.result);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseInsertOneResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
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
    fromJSON: function (object) {
        return { result: isSet(object.result) ? String(object.result) : "" };
    },
    toJSON: function (message) {
        var obj = {};
        message.result !== undefined && (obj.result = message.result);
        return obj;
    },
    create: function (base) {
        return InsertOneResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseInsertOneResponse();
        message.result = (_a = object.result) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
function createBaseInsertManyRequest() {
    return { collectionname: "", items: "", w: 0, j: false, skipresults: false };
}
export var InsertManyRequest = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
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
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseInsertManyRequest();
        while (reader.pos < end) {
            var tag = reader.uint32();
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
    fromJSON: function (object) {
        return {
            collectionname: isSet(object.collectionname) ? String(object.collectionname) : "",
            items: isSet(object.items) ? String(object.items) : "",
            w: isSet(object.w) ? Number(object.w) : 0,
            j: isSet(object.j) ? Boolean(object.j) : false,
            skipresults: isSet(object.skipresults) ? Boolean(object.skipresults) : false,
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.collectionname !== undefined && (obj.collectionname = message.collectionname);
        message.items !== undefined && (obj.items = message.items);
        message.w !== undefined && (obj.w = Math.round(message.w));
        message.j !== undefined && (obj.j = message.j);
        message.skipresults !== undefined && (obj.skipresults = message.skipresults);
        return obj;
    },
    create: function (base) {
        return InsertManyRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var _a, _b, _c, _d, _e;
        var message = createBaseInsertManyRequest();
        message.collectionname = (_a = object.collectionname) !== null && _a !== void 0 ? _a : "";
        message.items = (_b = object.items) !== null && _b !== void 0 ? _b : "";
        message.w = (_c = object.w) !== null && _c !== void 0 ? _c : 0;
        message.j = (_d = object.j) !== null && _d !== void 0 ? _d : false;
        message.skipresults = (_e = object.skipresults) !== null && _e !== void 0 ? _e : false;
        return message;
    },
};
function createBaseInsertManyResponse() {
    return { results: "" };
}
export var InsertManyResponse = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.results !== "") {
            writer.uint32(10).string(message.results);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseInsertManyResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
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
    fromJSON: function (object) {
        return { results: isSet(object.results) ? String(object.results) : "" };
    },
    toJSON: function (message) {
        var obj = {};
        message.results !== undefined && (obj.results = message.results);
        return obj;
    },
    create: function (base) {
        return InsertManyResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseInsertManyResponse();
        message.results = (_a = object.results) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
function createBaseUpdateOneRequest() {
    return { collectionname: "", item: "", w: 0, j: false };
}
export var UpdateOneRequest = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
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
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseUpdateOneRequest();
        while (reader.pos < end) {
            var tag = reader.uint32();
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
    fromJSON: function (object) {
        return {
            collectionname: isSet(object.collectionname) ? String(object.collectionname) : "",
            item: isSet(object.item) ? String(object.item) : "",
            w: isSet(object.w) ? Number(object.w) : 0,
            j: isSet(object.j) ? Boolean(object.j) : false,
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.collectionname !== undefined && (obj.collectionname = message.collectionname);
        message.item !== undefined && (obj.item = message.item);
        message.w !== undefined && (obj.w = Math.round(message.w));
        message.j !== undefined && (obj.j = message.j);
        return obj;
    },
    create: function (base) {
        return UpdateOneRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var _a, _b, _c, _d;
        var message = createBaseUpdateOneRequest();
        message.collectionname = (_a = object.collectionname) !== null && _a !== void 0 ? _a : "";
        message.item = (_b = object.item) !== null && _b !== void 0 ? _b : "";
        message.w = (_c = object.w) !== null && _c !== void 0 ? _c : 0;
        message.j = (_d = object.j) !== null && _d !== void 0 ? _d : false;
        return message;
    },
};
function createBaseUpdateOneResponse() {
    return { result: "" };
}
export var UpdateOneResponse = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.result !== "") {
            writer.uint32(10).string(message.result);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseUpdateOneResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
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
    fromJSON: function (object) {
        return { result: isSet(object.result) ? String(object.result) : "" };
    },
    toJSON: function (message) {
        var obj = {};
        message.result !== undefined && (obj.result = message.result);
        return obj;
    },
    create: function (base) {
        return UpdateOneResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseUpdateOneResponse();
        message.result = (_a = object.result) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
function createBaseUpdateDocumentRequest() {
    return { collectionname: "", query: "", document: "", w: 0, j: false };
}
export var UpdateDocumentRequest = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
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
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseUpdateDocumentRequest();
        while (reader.pos < end) {
            var tag = reader.uint32();
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
    fromJSON: function (object) {
        return {
            collectionname: isSet(object.collectionname) ? String(object.collectionname) : "",
            query: isSet(object.query) ? String(object.query) : "",
            document: isSet(object.document) ? String(object.document) : "",
            w: isSet(object.w) ? Number(object.w) : 0,
            j: isSet(object.j) ? Boolean(object.j) : false,
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.collectionname !== undefined && (obj.collectionname = message.collectionname);
        message.query !== undefined && (obj.query = message.query);
        message.document !== undefined && (obj.document = message.document);
        message.w !== undefined && (obj.w = Math.round(message.w));
        message.j !== undefined && (obj.j = message.j);
        return obj;
    },
    create: function (base) {
        return UpdateDocumentRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var _a, _b, _c, _d, _e;
        var message = createBaseUpdateDocumentRequest();
        message.collectionname = (_a = object.collectionname) !== null && _a !== void 0 ? _a : "";
        message.query = (_b = object.query) !== null && _b !== void 0 ? _b : "";
        message.document = (_c = object.document) !== null && _c !== void 0 ? _c : "";
        message.w = (_d = object.w) !== null && _d !== void 0 ? _d : 0;
        message.j = (_e = object.j) !== null && _e !== void 0 ? _e : false;
        return message;
    },
};
function createBaseUpdateResult() {
    return { acknowledged: false, matchedCount: 0, modifiedCount: 0, upsertedCount: 0, upsertedId: "" };
}
export var UpdateResult = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
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
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseUpdateResult();
        while (reader.pos < end) {
            var tag = reader.uint32();
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
    fromJSON: function (object) {
        return {
            acknowledged: isSet(object.acknowledged) ? Boolean(object.acknowledged) : false,
            matchedCount: isSet(object.matchedCount) ? Number(object.matchedCount) : 0,
            modifiedCount: isSet(object.modifiedCount) ? Number(object.modifiedCount) : 0,
            upsertedCount: isSet(object.upsertedCount) ? Number(object.upsertedCount) : 0,
            upsertedId: isSet(object.upsertedId) ? String(object.upsertedId) : "",
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.acknowledged !== undefined && (obj.acknowledged = message.acknowledged);
        message.matchedCount !== undefined && (obj.matchedCount = Math.round(message.matchedCount));
        message.modifiedCount !== undefined && (obj.modifiedCount = Math.round(message.modifiedCount));
        message.upsertedCount !== undefined && (obj.upsertedCount = Math.round(message.upsertedCount));
        message.upsertedId !== undefined && (obj.upsertedId = message.upsertedId);
        return obj;
    },
    create: function (base) {
        return UpdateResult.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var _a, _b, _c, _d, _e;
        var message = createBaseUpdateResult();
        message.acknowledged = (_a = object.acknowledged) !== null && _a !== void 0 ? _a : false;
        message.matchedCount = (_b = object.matchedCount) !== null && _b !== void 0 ? _b : 0;
        message.modifiedCount = (_c = object.modifiedCount) !== null && _c !== void 0 ? _c : 0;
        message.upsertedCount = (_d = object.upsertedCount) !== null && _d !== void 0 ? _d : 0;
        message.upsertedId = (_e = object.upsertedId) !== null && _e !== void 0 ? _e : "";
        return message;
    },
};
function createBaseUpdateDocumentResponse() {
    return { opresult: undefined };
}
export var UpdateDocumentResponse = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.opresult !== undefined) {
            UpdateResult.encode(message.opresult, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseUpdateDocumentResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
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
    fromJSON: function (object) {
        return { opresult: isSet(object.opresult) ? UpdateResult.fromJSON(object.opresult) : undefined };
    },
    toJSON: function (message) {
        var obj = {};
        message.opresult !== undefined &&
            (obj.opresult = message.opresult ? UpdateResult.toJSON(message.opresult) : undefined);
        return obj;
    },
    create: function (base) {
        return UpdateDocumentResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var message = createBaseUpdateDocumentResponse();
        message.opresult = (object.opresult !== undefined && object.opresult !== null)
            ? UpdateResult.fromPartial(object.opresult)
            : undefined;
        return message;
    },
};
function createBaseInsertOrUpdateOneRequest() {
    return { collectionname: "", uniqeness: "", item: "", w: 0, j: false };
}
export var InsertOrUpdateOneRequest = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
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
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseInsertOrUpdateOneRequest();
        while (reader.pos < end) {
            var tag = reader.uint32();
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
    fromJSON: function (object) {
        return {
            collectionname: isSet(object.collectionname) ? String(object.collectionname) : "",
            uniqeness: isSet(object.uniqeness) ? String(object.uniqeness) : "",
            item: isSet(object.item) ? String(object.item) : "",
            w: isSet(object.w) ? Number(object.w) : 0,
            j: isSet(object.j) ? Boolean(object.j) : false,
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.collectionname !== undefined && (obj.collectionname = message.collectionname);
        message.uniqeness !== undefined && (obj.uniqeness = message.uniqeness);
        message.item !== undefined && (obj.item = message.item);
        message.w !== undefined && (obj.w = Math.round(message.w));
        message.j !== undefined && (obj.j = message.j);
        return obj;
    },
    create: function (base) {
        return InsertOrUpdateOneRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var _a, _b, _c, _d, _e;
        var message = createBaseInsertOrUpdateOneRequest();
        message.collectionname = (_a = object.collectionname) !== null && _a !== void 0 ? _a : "";
        message.uniqeness = (_b = object.uniqeness) !== null && _b !== void 0 ? _b : "";
        message.item = (_c = object.item) !== null && _c !== void 0 ? _c : "";
        message.w = (_d = object.w) !== null && _d !== void 0 ? _d : 0;
        message.j = (_e = object.j) !== null && _e !== void 0 ? _e : false;
        return message;
    },
};
function createBaseInsertOrUpdateOneResponse() {
    return { result: "" };
}
export var InsertOrUpdateOneResponse = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.result !== "") {
            writer.uint32(10).string(message.result);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseInsertOrUpdateOneResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
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
    fromJSON: function (object) {
        return { result: isSet(object.result) ? String(object.result) : "" };
    },
    toJSON: function (message) {
        var obj = {};
        message.result !== undefined && (obj.result = message.result);
        return obj;
    },
    create: function (base) {
        return InsertOrUpdateOneResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseInsertOrUpdateOneResponse();
        message.result = (_a = object.result) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
function createBaseInsertOrUpdateManyRequest() {
    return { collectionname: "", uniqeness: "", items: "", w: 0, j: false, skipresults: false };
}
export var InsertOrUpdateManyRequest = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
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
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseInsertOrUpdateManyRequest();
        while (reader.pos < end) {
            var tag = reader.uint32();
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
    fromJSON: function (object) {
        return {
            collectionname: isSet(object.collectionname) ? String(object.collectionname) : "",
            uniqeness: isSet(object.uniqeness) ? String(object.uniqeness) : "",
            items: isSet(object.items) ? String(object.items) : "",
            w: isSet(object.w) ? Number(object.w) : 0,
            j: isSet(object.j) ? Boolean(object.j) : false,
            skipresults: isSet(object.skipresults) ? Boolean(object.skipresults) : false,
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.collectionname !== undefined && (obj.collectionname = message.collectionname);
        message.uniqeness !== undefined && (obj.uniqeness = message.uniqeness);
        message.items !== undefined && (obj.items = message.items);
        message.w !== undefined && (obj.w = Math.round(message.w));
        message.j !== undefined && (obj.j = message.j);
        message.skipresults !== undefined && (obj.skipresults = message.skipresults);
        return obj;
    },
    create: function (base) {
        return InsertOrUpdateManyRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var _a, _b, _c, _d, _e, _f;
        var message = createBaseInsertOrUpdateManyRequest();
        message.collectionname = (_a = object.collectionname) !== null && _a !== void 0 ? _a : "";
        message.uniqeness = (_b = object.uniqeness) !== null && _b !== void 0 ? _b : "";
        message.items = (_c = object.items) !== null && _c !== void 0 ? _c : "";
        message.w = (_d = object.w) !== null && _d !== void 0 ? _d : 0;
        message.j = (_e = object.j) !== null && _e !== void 0 ? _e : false;
        message.skipresults = (_f = object.skipresults) !== null && _f !== void 0 ? _f : false;
        return message;
    },
};
function createBaseInsertOrUpdateManyResponse() {
    return { results: "" };
}
export var InsertOrUpdateManyResponse = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.results !== "") {
            writer.uint32(10).string(message.results);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseInsertOrUpdateManyResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
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
    fromJSON: function (object) {
        return { results: isSet(object.results) ? String(object.results) : "" };
    },
    toJSON: function (message) {
        var obj = {};
        message.results !== undefined && (obj.results = message.results);
        return obj;
    },
    create: function (base) {
        return InsertOrUpdateManyResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseInsertOrUpdateManyResponse();
        message.results = (_a = object.results) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
function createBaseDeleteOneRequest() {
    return { collectionname: "", id: "", recursive: false };
}
export var DeleteOneRequest = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
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
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseDeleteOneRequest();
        while (reader.pos < end) {
            var tag = reader.uint32();
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
    fromJSON: function (object) {
        return {
            collectionname: isSet(object.collectionname) ? String(object.collectionname) : "",
            id: isSet(object.id) ? String(object.id) : "",
            recursive: isSet(object.recursive) ? Boolean(object.recursive) : false,
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.collectionname !== undefined && (obj.collectionname = message.collectionname);
        message.id !== undefined && (obj.id = message.id);
        message.recursive !== undefined && (obj.recursive = message.recursive);
        return obj;
    },
    create: function (base) {
        return DeleteOneRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var _a, _b, _c;
        var message = createBaseDeleteOneRequest();
        message.collectionname = (_a = object.collectionname) !== null && _a !== void 0 ? _a : "";
        message.id = (_b = object.id) !== null && _b !== void 0 ? _b : "";
        message.recursive = (_c = object.recursive) !== null && _c !== void 0 ? _c : false;
        return message;
    },
};
function createBaseDeleteOneResponse() {
    return { affectedrows: 0 };
}
export var DeleteOneResponse = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.affectedrows !== 0) {
            writer.uint32(8).int32(message.affectedrows);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseDeleteOneResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
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
    fromJSON: function (object) {
        return { affectedrows: isSet(object.affectedrows) ? Number(object.affectedrows) : 0 };
    },
    toJSON: function (message) {
        var obj = {};
        message.affectedrows !== undefined && (obj.affectedrows = Math.round(message.affectedrows));
        return obj;
    },
    create: function (base) {
        return DeleteOneResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseDeleteOneResponse();
        message.affectedrows = (_a = object.affectedrows) !== null && _a !== void 0 ? _a : 0;
        return message;
    },
};
function createBaseDeleteManyRequest() {
    return { collectionname: "", query: "", recursive: false, ids: [] };
}
export var DeleteManyRequest = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.collectionname !== "") {
            writer.uint32(10).string(message.collectionname);
        }
        if (message.query !== "") {
            writer.uint32(18).string(message.query);
        }
        if (message.recursive === true) {
            writer.uint32(24).bool(message.recursive);
        }
        for (var _i = 0, _a = message.ids; _i < _a.length; _i++) {
            var v = _a[_i];
            writer.uint32(34).string(v);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseDeleteManyRequest();
        while (reader.pos < end) {
            var tag = reader.uint32();
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
    fromJSON: function (object) {
        return {
            collectionname: isSet(object.collectionname) ? String(object.collectionname) : "",
            query: isSet(object.query) ? String(object.query) : "",
            recursive: isSet(object.recursive) ? Boolean(object.recursive) : false,
            ids: Array.isArray(object === null || object === void 0 ? void 0 : object.ids) ? object.ids.map(function (e) { return String(e); }) : [],
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.collectionname !== undefined && (obj.collectionname = message.collectionname);
        message.query !== undefined && (obj.query = message.query);
        message.recursive !== undefined && (obj.recursive = message.recursive);
        if (message.ids) {
            obj.ids = message.ids.map(function (e) { return e; });
        }
        else {
            obj.ids = [];
        }
        return obj;
    },
    create: function (base) {
        return DeleteManyRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var _a, _b, _c, _d;
        var message = createBaseDeleteManyRequest();
        message.collectionname = (_a = object.collectionname) !== null && _a !== void 0 ? _a : "";
        message.query = (_b = object.query) !== null && _b !== void 0 ? _b : "";
        message.recursive = (_c = object.recursive) !== null && _c !== void 0 ? _c : false;
        message.ids = ((_d = object.ids) === null || _d === void 0 ? void 0 : _d.map(function (e) { return e; })) || [];
        return message;
    },
};
function createBaseDeleteManyResponse() {
    return { affectedrows: 0 };
}
export var DeleteManyResponse = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.affectedrows !== 0) {
            writer.uint32(8).int32(message.affectedrows);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseDeleteManyResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
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
    fromJSON: function (object) {
        return { affectedrows: isSet(object.affectedrows) ? Number(object.affectedrows) : 0 };
    },
    toJSON: function (message) {
        var obj = {};
        message.affectedrows !== undefined && (obj.affectedrows = Math.round(message.affectedrows));
        return obj;
    },
    create: function (base) {
        return DeleteManyResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseDeleteManyResponse();
        message.affectedrows = (_a = object.affectedrows) !== null && _a !== void 0 ? _a : 0;
        return message;
    },
};
function isSet(value) {
    return value !== null && value !== undefined;
}
//# sourceMappingURL=querys.js.map