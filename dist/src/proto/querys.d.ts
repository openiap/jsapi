import * as _m0 from "protobufjs/minimal";
export declare const protobufPackage = "openiap";
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
/** MongoDB Query Request. */
export interface QueryRequest {
    /** MongoDB Query to execute. This field is required. */
    query: string;
    /** MongoDB Collection to query. This field is required. */
    collectionname: string;
    /** MongoDB Query projection. This field is optional. */
    projection: string;
    /** MongoDB Maximum number of documents to return. This field is optional with a default of 100. */
    top: number;
    /** MongoDB Number of documents to skip, used for paging on the same query. This field is optional with a default of 0. */
    skip: number;
    /**
     * MongoDB order by. This field is optional with a default of {"_id": 1}.
     * You can specify "timestamp" as a string or an object like {"timestamp": -1}.
     */
    orderby: string;
    /** Query as if you were this _id. (_id can be a user, role, or customer from the users collection) */
    queryas: string;
    /** Enabling explain will provides information on the execution of the query */
    explain: boolean;
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
    /** Enabling explain will provides information on the execution of the pipelines */
    explain: boolean;
}
export interface AggregateResponse {
    results: string;
}
export interface CountRequest {
    collectionname: string;
    query: string;
    queryas: string;
    /** Enabling explain will provides information on the execution of the count */
    explain: boolean;
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
    /** Enabling explain will provides information on the execution of the distinct */
    explain: boolean;
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
export declare const ListCollectionsRequest: {
    encode(message: ListCollectionsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ListCollectionsRequest;
    fromJSON(object: any): ListCollectionsRequest;
    toJSON(message: ListCollectionsRequest): unknown;
    create<I extends {
        includehist?: boolean;
    } & {
        includehist?: boolean;
    } & { [K in Exclude<keyof I, "includehist">]: never; }>(base?: I): ListCollectionsRequest;
    fromPartial<I_1 extends {
        includehist?: boolean;
    } & {
        includehist?: boolean;
    } & { [K_1 in Exclude<keyof I_1, "includehist">]: never; }>(object: I_1): ListCollectionsRequest;
};
export declare const ListCollectionsResponse: {
    encode(message: ListCollectionsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ListCollectionsResponse;
    fromJSON(object: any): ListCollectionsResponse;
    toJSON(message: ListCollectionsResponse): unknown;
    create<I extends {
        results?: string;
    } & {
        results?: string;
    } & { [K in Exclude<keyof I, "results">]: never; }>(base?: I): ListCollectionsResponse;
    fromPartial<I_1 extends {
        results?: string;
    } & {
        results?: string;
    } & { [K_1 in Exclude<keyof I_1, "results">]: never; }>(object: I_1): ListCollectionsResponse;
};
export declare const DropCollectionRequest: {
    encode(message: DropCollectionRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): DropCollectionRequest;
    fromJSON(object: any): DropCollectionRequest;
    toJSON(message: DropCollectionRequest): unknown;
    create<I extends {
        collectionname?: string;
    } & {
        collectionname?: string;
    } & { [K in Exclude<keyof I, "collectionname">]: never; }>(base?: I): DropCollectionRequest;
    fromPartial<I_1 extends {
        collectionname?: string;
    } & {
        collectionname?: string;
    } & { [K_1 in Exclude<keyof I_1, "collectionname">]: never; }>(object: I_1): DropCollectionRequest;
};
export declare const DropCollectionResponse: {
    encode(_: DropCollectionResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): DropCollectionResponse;
    fromJSON(_: any): DropCollectionResponse;
    toJSON(_: DropCollectionResponse): unknown;
    create<I extends {} & {} & { [K in Exclude<keyof I, never>]: never; }>(base?: I): DropCollectionResponse;
    fromPartial<I_1 extends {} & {} & { [K_1 in Exclude<keyof I_1, never>]: never; }>(_: I_1): DropCollectionResponse;
};
export declare const col_timeseries: {
    encode(message: col_timeseries, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): col_timeseries;
    fromJSON(object: any): col_timeseries;
    toJSON(message: col_timeseries): unknown;
    create<I extends {
        timeField?: string;
        metaField?: string;
        granularity?: string;
    } & {
        timeField?: string;
        metaField?: string;
        granularity?: string;
    } & { [K in Exclude<keyof I, keyof col_timeseries>]: never; }>(base?: I): col_timeseries;
    fromPartial<I_1 extends {
        timeField?: string;
        metaField?: string;
        granularity?: string;
    } & {
        timeField?: string;
        metaField?: string;
        granularity?: string;
    } & { [K_1 in Exclude<keyof I_1, keyof col_timeseries>]: never; }>(object: I_1): col_timeseries;
};
export declare const col_collation: {
    encode(message: col_collation, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): col_collation;
    fromJSON(object: any): col_collation;
    toJSON(message: col_collation): unknown;
    create<I extends {
        locale?: string;
        caseLevel?: boolean;
        caseFirst?: string;
        strength?: number;
        numericOrdering?: boolean;
        alternate?: string;
        maxVariable?: string;
        backwards?: boolean;
    } & {
        locale?: string;
        caseLevel?: boolean;
        caseFirst?: string;
        strength?: number;
        numericOrdering?: boolean;
        alternate?: string;
        maxVariable?: string;
        backwards?: boolean;
    } & { [K in Exclude<keyof I, keyof col_collation>]: never; }>(base?: I): col_collation;
    fromPartial<I_1 extends {
        locale?: string;
        caseLevel?: boolean;
        caseFirst?: string;
        strength?: number;
        numericOrdering?: boolean;
        alternate?: string;
        maxVariable?: string;
        backwards?: boolean;
    } & {
        locale?: string;
        caseLevel?: boolean;
        caseFirst?: string;
        strength?: number;
        numericOrdering?: boolean;
        alternate?: string;
        maxVariable?: string;
        backwards?: boolean;
    } & { [K_1 in Exclude<keyof I_1, keyof col_collation>]: never; }>(object: I_1): col_collation;
};
export declare const CreateCollectionRequest: {
    encode(message: CreateCollectionRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): CreateCollectionRequest;
    fromJSON(object: any): CreateCollectionRequest;
    toJSON(message: CreateCollectionRequest): unknown;
    create<I extends {
        collectionname?: string;
        collation?: {
            locale?: string;
            caseLevel?: boolean;
            caseFirst?: string;
            strength?: number;
            numericOrdering?: boolean;
            alternate?: string;
            maxVariable?: string;
            backwards?: boolean;
        };
        timeseries?: {
            timeField?: string;
            metaField?: string;
            granularity?: string;
        };
        expireAfterSeconds?: number;
        changeStreamPreAndPostImages?: boolean;
        capped?: boolean;
        max?: number;
        size?: number;
    } & {
        collectionname?: string;
        collation?: {
            locale?: string;
            caseLevel?: boolean;
            caseFirst?: string;
            strength?: number;
            numericOrdering?: boolean;
            alternate?: string;
            maxVariable?: string;
            backwards?: boolean;
        } & {
            locale?: string;
            caseLevel?: boolean;
            caseFirst?: string;
            strength?: number;
            numericOrdering?: boolean;
            alternate?: string;
            maxVariable?: string;
            backwards?: boolean;
        } & { [K in Exclude<keyof I["collation"], keyof col_collation>]: never; };
        timeseries?: {
            timeField?: string;
            metaField?: string;
            granularity?: string;
        } & {
            timeField?: string;
            metaField?: string;
            granularity?: string;
        } & { [K_1 in Exclude<keyof I["timeseries"], keyof col_timeseries>]: never; };
        expireAfterSeconds?: number;
        changeStreamPreAndPostImages?: boolean;
        capped?: boolean;
        max?: number;
        size?: number;
    } & { [K_2 in Exclude<keyof I, keyof CreateCollectionRequest>]: never; }>(base?: I): CreateCollectionRequest;
    fromPartial<I_1 extends {
        collectionname?: string;
        collation?: {
            locale?: string;
            caseLevel?: boolean;
            caseFirst?: string;
            strength?: number;
            numericOrdering?: boolean;
            alternate?: string;
            maxVariable?: string;
            backwards?: boolean;
        };
        timeseries?: {
            timeField?: string;
            metaField?: string;
            granularity?: string;
        };
        expireAfterSeconds?: number;
        changeStreamPreAndPostImages?: boolean;
        capped?: boolean;
        max?: number;
        size?: number;
    } & {
        collectionname?: string;
        collation?: {
            locale?: string;
            caseLevel?: boolean;
            caseFirst?: string;
            strength?: number;
            numericOrdering?: boolean;
            alternate?: string;
            maxVariable?: string;
            backwards?: boolean;
        } & {
            locale?: string;
            caseLevel?: boolean;
            caseFirst?: string;
            strength?: number;
            numericOrdering?: boolean;
            alternate?: string;
            maxVariable?: string;
            backwards?: boolean;
        } & { [K_3 in Exclude<keyof I_1["collation"], keyof col_collation>]: never; };
        timeseries?: {
            timeField?: string;
            metaField?: string;
            granularity?: string;
        } & {
            timeField?: string;
            metaField?: string;
            granularity?: string;
        } & { [K_4 in Exclude<keyof I_1["timeseries"], keyof col_timeseries>]: never; };
        expireAfterSeconds?: number;
        changeStreamPreAndPostImages?: boolean;
        capped?: boolean;
        max?: number;
        size?: number;
    } & { [K_5 in Exclude<keyof I_1, keyof CreateCollectionRequest>]: never; }>(object: I_1): CreateCollectionRequest;
};
export declare const CreateCollectionResponse: {
    encode(_: CreateCollectionResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): CreateCollectionResponse;
    fromJSON(_: any): CreateCollectionResponse;
    toJSON(_: CreateCollectionResponse): unknown;
    create<I extends {} & {} & { [K in Exclude<keyof I, never>]: never; }>(base?: I): CreateCollectionResponse;
    fromPartial<I_1 extends {} & {} & { [K_1 in Exclude<keyof I_1, never>]: never; }>(_: I_1): CreateCollectionResponse;
};
export declare const QueryRequest: {
    encode(message: QueryRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryRequest;
    fromJSON(object: any): QueryRequest;
    toJSON(message: QueryRequest): unknown;
    create<I extends {
        query?: string;
        collectionname?: string;
        projection?: string;
        top?: number;
        skip?: number;
        orderby?: string;
        queryas?: string;
        explain?: boolean;
    } & {
        query?: string;
        collectionname?: string;
        projection?: string;
        top?: number;
        skip?: number;
        orderby?: string;
        queryas?: string;
        explain?: boolean;
    } & { [K in Exclude<keyof I, keyof QueryRequest>]: never; }>(base?: I): QueryRequest;
    fromPartial<I_1 extends {
        query?: string;
        collectionname?: string;
        projection?: string;
        top?: number;
        skip?: number;
        orderby?: string;
        queryas?: string;
        explain?: boolean;
    } & {
        query?: string;
        collectionname?: string;
        projection?: string;
        top?: number;
        skip?: number;
        orderby?: string;
        queryas?: string;
        explain?: boolean;
    } & { [K_1 in Exclude<keyof I_1, keyof QueryRequest>]: never; }>(object: I_1): QueryRequest;
};
export declare const QueryResponse: {
    encode(message: QueryResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryResponse;
    fromJSON(object: any): QueryResponse;
    toJSON(message: QueryResponse): unknown;
    create<I extends {
        results?: string;
    } & {
        results?: string;
    } & { [K in Exclude<keyof I, "results">]: never; }>(base?: I): QueryResponse;
    fromPartial<I_1 extends {
        results?: string;
    } & {
        results?: string;
    } & { [K_1 in Exclude<keyof I_1, "results">]: never; }>(object: I_1): QueryResponse;
};
export declare const GetDocumentVersionRequest: {
    encode(message: GetDocumentVersionRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetDocumentVersionRequest;
    fromJSON(object: any): GetDocumentVersionRequest;
    toJSON(message: GetDocumentVersionRequest): unknown;
    create<I extends {
        collectionname?: string;
        id?: string;
        version?: number;
        decrypt?: boolean;
    } & {
        collectionname?: string;
        id?: string;
        version?: number;
        decrypt?: boolean;
    } & { [K in Exclude<keyof I, keyof GetDocumentVersionRequest>]: never; }>(base?: I): GetDocumentVersionRequest;
    fromPartial<I_1 extends {
        collectionname?: string;
        id?: string;
        version?: number;
        decrypt?: boolean;
    } & {
        collectionname?: string;
        id?: string;
        version?: number;
        decrypt?: boolean;
    } & { [K_1 in Exclude<keyof I_1, keyof GetDocumentVersionRequest>]: never; }>(object: I_1): GetDocumentVersionRequest;
};
export declare const GetDocumentVersionResponse: {
    encode(message: GetDocumentVersionResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetDocumentVersionResponse;
    fromJSON(object: any): GetDocumentVersionResponse;
    toJSON(message: GetDocumentVersionResponse): unknown;
    create<I extends {
        result?: string;
    } & {
        result?: string;
    } & { [K in Exclude<keyof I, "result">]: never; }>(base?: I): GetDocumentVersionResponse;
    fromPartial<I_1 extends {
        result?: string;
    } & {
        result?: string;
    } & { [K_1 in Exclude<keyof I_1, "result">]: never; }>(object: I_1): GetDocumentVersionResponse;
};
export declare const AggregateRequest: {
    encode(message: AggregateRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AggregateRequest;
    fromJSON(object: any): AggregateRequest;
    toJSON(message: AggregateRequest): unknown;
    create<I extends {
        collectionname?: string;
        aggregates?: string;
        queryas?: string;
        hint?: string;
        explain?: boolean;
    } & {
        collectionname?: string;
        aggregates?: string;
        queryas?: string;
        hint?: string;
        explain?: boolean;
    } & { [K in Exclude<keyof I, keyof AggregateRequest>]: never; }>(base?: I): AggregateRequest;
    fromPartial<I_1 extends {
        collectionname?: string;
        aggregates?: string;
        queryas?: string;
        hint?: string;
        explain?: boolean;
    } & {
        collectionname?: string;
        aggregates?: string;
        queryas?: string;
        hint?: string;
        explain?: boolean;
    } & { [K_1 in Exclude<keyof I_1, keyof AggregateRequest>]: never; }>(object: I_1): AggregateRequest;
};
export declare const AggregateResponse: {
    encode(message: AggregateResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AggregateResponse;
    fromJSON(object: any): AggregateResponse;
    toJSON(message: AggregateResponse): unknown;
    create<I extends {
        results?: string;
    } & {
        results?: string;
    } & { [K in Exclude<keyof I, "results">]: never; }>(base?: I): AggregateResponse;
    fromPartial<I_1 extends {
        results?: string;
    } & {
        results?: string;
    } & { [K_1 in Exclude<keyof I_1, "results">]: never; }>(object: I_1): AggregateResponse;
};
export declare const CountRequest: {
    encode(message: CountRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): CountRequest;
    fromJSON(object: any): CountRequest;
    toJSON(message: CountRequest): unknown;
    create<I extends {
        collectionname?: string;
        query?: string;
        queryas?: string;
        explain?: boolean;
    } & {
        collectionname?: string;
        query?: string;
        queryas?: string;
        explain?: boolean;
    } & { [K in Exclude<keyof I, keyof CountRequest>]: never; }>(base?: I): CountRequest;
    fromPartial<I_1 extends {
        collectionname?: string;
        query?: string;
        queryas?: string;
        explain?: boolean;
    } & {
        collectionname?: string;
        query?: string;
        queryas?: string;
        explain?: boolean;
    } & { [K_1 in Exclude<keyof I_1, keyof CountRequest>]: never; }>(object: I_1): CountRequest;
};
export declare const CountResponse: {
    encode(message: CountResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): CountResponse;
    fromJSON(object: any): CountResponse;
    toJSON(message: CountResponse): unknown;
    create<I extends {
        result?: number;
    } & {
        result?: number;
    } & { [K in Exclude<keyof I, "result">]: never; }>(base?: I): CountResponse;
    fromPartial<I_1 extends {
        result?: number;
    } & {
        result?: number;
    } & { [K_1 in Exclude<keyof I_1, "result">]: never; }>(object: I_1): CountResponse;
};
export declare const DistinctRequest: {
    encode(message: DistinctRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): DistinctRequest;
    fromJSON(object: any): DistinctRequest;
    toJSON(message: DistinctRequest): unknown;
    create<I extends {
        collectionname?: string;
        field?: string;
        query?: string;
        queryas?: string;
        options?: string;
        explain?: boolean;
    } & {
        collectionname?: string;
        field?: string;
        query?: string;
        queryas?: string;
        options?: string;
        explain?: boolean;
    } & { [K in Exclude<keyof I, keyof DistinctRequest>]: never; }>(base?: I): DistinctRequest;
    fromPartial<I_1 extends {
        collectionname?: string;
        field?: string;
        query?: string;
        queryas?: string;
        options?: string;
        explain?: boolean;
    } & {
        collectionname?: string;
        field?: string;
        query?: string;
        queryas?: string;
        options?: string;
        explain?: boolean;
    } & { [K_1 in Exclude<keyof I_1, keyof DistinctRequest>]: never; }>(object: I_1): DistinctRequest;
};
export declare const DistinctResponse: {
    encode(message: DistinctResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): DistinctResponse;
    fromJSON(object: any): DistinctResponse;
    toJSON(message: DistinctResponse): unknown;
    create<I extends {
        results?: string[];
    } & {
        results?: string[] & string[] & { [K in Exclude<keyof I["results"], keyof string[]>]: never; };
    } & { [K_1 in Exclude<keyof I, "results">]: never; }>(base?: I): DistinctResponse;
    fromPartial<I_1 extends {
        results?: string[];
    } & {
        results?: string[] & string[] & { [K_2 in Exclude<keyof I_1["results"], keyof string[]>]: never; };
    } & { [K_3 in Exclude<keyof I_1, "results">]: never; }>(object: I_1): DistinctResponse;
};
export declare const InsertOneRequest: {
    encode(message: InsertOneRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): InsertOneRequest;
    fromJSON(object: any): InsertOneRequest;
    toJSON(message: InsertOneRequest): unknown;
    create<I extends {
        collectionname?: string;
        item?: string;
        w?: number;
        j?: boolean;
    } & {
        collectionname?: string;
        item?: string;
        w?: number;
        j?: boolean;
    } & { [K in Exclude<keyof I, keyof InsertOneRequest>]: never; }>(base?: I): InsertOneRequest;
    fromPartial<I_1 extends {
        collectionname?: string;
        item?: string;
        w?: number;
        j?: boolean;
    } & {
        collectionname?: string;
        item?: string;
        w?: number;
        j?: boolean;
    } & { [K_1 in Exclude<keyof I_1, keyof InsertOneRequest>]: never; }>(object: I_1): InsertOneRequest;
};
export declare const InsertOneResponse: {
    encode(message: InsertOneResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): InsertOneResponse;
    fromJSON(object: any): InsertOneResponse;
    toJSON(message: InsertOneResponse): unknown;
    create<I extends {
        result?: string;
    } & {
        result?: string;
    } & { [K in Exclude<keyof I, "result">]: never; }>(base?: I): InsertOneResponse;
    fromPartial<I_1 extends {
        result?: string;
    } & {
        result?: string;
    } & { [K_1 in Exclude<keyof I_1, "result">]: never; }>(object: I_1): InsertOneResponse;
};
export declare const InsertManyRequest: {
    encode(message: InsertManyRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): InsertManyRequest;
    fromJSON(object: any): InsertManyRequest;
    toJSON(message: InsertManyRequest): unknown;
    create<I extends {
        collectionname?: string;
        items?: string;
        w?: number;
        j?: boolean;
        skipresults?: boolean;
    } & {
        collectionname?: string;
        items?: string;
        w?: number;
        j?: boolean;
        skipresults?: boolean;
    } & { [K in Exclude<keyof I, keyof InsertManyRequest>]: never; }>(base?: I): InsertManyRequest;
    fromPartial<I_1 extends {
        collectionname?: string;
        items?: string;
        w?: number;
        j?: boolean;
        skipresults?: boolean;
    } & {
        collectionname?: string;
        items?: string;
        w?: number;
        j?: boolean;
        skipresults?: boolean;
    } & { [K_1 in Exclude<keyof I_1, keyof InsertManyRequest>]: never; }>(object: I_1): InsertManyRequest;
};
export declare const InsertManyResponse: {
    encode(message: InsertManyResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): InsertManyResponse;
    fromJSON(object: any): InsertManyResponse;
    toJSON(message: InsertManyResponse): unknown;
    create<I extends {
        results?: string;
    } & {
        results?: string;
    } & { [K in Exclude<keyof I, "results">]: never; }>(base?: I): InsertManyResponse;
    fromPartial<I_1 extends {
        results?: string;
    } & {
        results?: string;
    } & { [K_1 in Exclude<keyof I_1, "results">]: never; }>(object: I_1): InsertManyResponse;
};
export declare const UpdateOneRequest: {
    encode(message: UpdateOneRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): UpdateOneRequest;
    fromJSON(object: any): UpdateOneRequest;
    toJSON(message: UpdateOneRequest): unknown;
    create<I extends {
        collectionname?: string;
        item?: string;
        w?: number;
        j?: boolean;
    } & {
        collectionname?: string;
        item?: string;
        w?: number;
        j?: boolean;
    } & { [K in Exclude<keyof I, keyof UpdateOneRequest>]: never; }>(base?: I): UpdateOneRequest;
    fromPartial<I_1 extends {
        collectionname?: string;
        item?: string;
        w?: number;
        j?: boolean;
    } & {
        collectionname?: string;
        item?: string;
        w?: number;
        j?: boolean;
    } & { [K_1 in Exclude<keyof I_1, keyof UpdateOneRequest>]: never; }>(object: I_1): UpdateOneRequest;
};
export declare const UpdateOneResponse: {
    encode(message: UpdateOneResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): UpdateOneResponse;
    fromJSON(object: any): UpdateOneResponse;
    toJSON(message: UpdateOneResponse): unknown;
    create<I extends {
        result?: string;
    } & {
        result?: string;
    } & { [K in Exclude<keyof I, "result">]: never; }>(base?: I): UpdateOneResponse;
    fromPartial<I_1 extends {
        result?: string;
    } & {
        result?: string;
    } & { [K_1 in Exclude<keyof I_1, "result">]: never; }>(object: I_1): UpdateOneResponse;
};
export declare const UpdateDocumentRequest: {
    encode(message: UpdateDocumentRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): UpdateDocumentRequest;
    fromJSON(object: any): UpdateDocumentRequest;
    toJSON(message: UpdateDocumentRequest): unknown;
    create<I extends {
        collectionname?: string;
        query?: string;
        document?: string;
        w?: number;
        j?: boolean;
    } & {
        collectionname?: string;
        query?: string;
        document?: string;
        w?: number;
        j?: boolean;
    } & { [K in Exclude<keyof I, keyof UpdateDocumentRequest>]: never; }>(base?: I): UpdateDocumentRequest;
    fromPartial<I_1 extends {
        collectionname?: string;
        query?: string;
        document?: string;
        w?: number;
        j?: boolean;
    } & {
        collectionname?: string;
        query?: string;
        document?: string;
        w?: number;
        j?: boolean;
    } & { [K_1 in Exclude<keyof I_1, keyof UpdateDocumentRequest>]: never; }>(object: I_1): UpdateDocumentRequest;
};
export declare const UpdateResult: {
    encode(message: UpdateResult, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): UpdateResult;
    fromJSON(object: any): UpdateResult;
    toJSON(message: UpdateResult): unknown;
    create<I extends {
        acknowledged?: boolean;
        matchedCount?: number;
        modifiedCount?: number;
        upsertedCount?: number;
        upsertedId?: string;
    } & {
        acknowledged?: boolean;
        matchedCount?: number;
        modifiedCount?: number;
        upsertedCount?: number;
        upsertedId?: string;
    } & { [K in Exclude<keyof I, keyof UpdateResult>]: never; }>(base?: I): UpdateResult;
    fromPartial<I_1 extends {
        acknowledged?: boolean;
        matchedCount?: number;
        modifiedCount?: number;
        upsertedCount?: number;
        upsertedId?: string;
    } & {
        acknowledged?: boolean;
        matchedCount?: number;
        modifiedCount?: number;
        upsertedCount?: number;
        upsertedId?: string;
    } & { [K_1 in Exclude<keyof I_1, keyof UpdateResult>]: never; }>(object: I_1): UpdateResult;
};
export declare const UpdateDocumentResponse: {
    encode(message: UpdateDocumentResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): UpdateDocumentResponse;
    fromJSON(object: any): UpdateDocumentResponse;
    toJSON(message: UpdateDocumentResponse): unknown;
    create<I extends {
        opresult?: {
            acknowledged?: boolean;
            matchedCount?: number;
            modifiedCount?: number;
            upsertedCount?: number;
            upsertedId?: string;
        };
    } & {
        opresult?: {
            acknowledged?: boolean;
            matchedCount?: number;
            modifiedCount?: number;
            upsertedCount?: number;
            upsertedId?: string;
        } & {
            acknowledged?: boolean;
            matchedCount?: number;
            modifiedCount?: number;
            upsertedCount?: number;
            upsertedId?: string;
        } & { [K in Exclude<keyof I["opresult"], keyof UpdateResult>]: never; };
    } & { [K_1 in Exclude<keyof I, "opresult">]: never; }>(base?: I): UpdateDocumentResponse;
    fromPartial<I_1 extends {
        opresult?: {
            acknowledged?: boolean;
            matchedCount?: number;
            modifiedCount?: number;
            upsertedCount?: number;
            upsertedId?: string;
        };
    } & {
        opresult?: {
            acknowledged?: boolean;
            matchedCount?: number;
            modifiedCount?: number;
            upsertedCount?: number;
            upsertedId?: string;
        } & {
            acknowledged?: boolean;
            matchedCount?: number;
            modifiedCount?: number;
            upsertedCount?: number;
            upsertedId?: string;
        } & { [K_2 in Exclude<keyof I_1["opresult"], keyof UpdateResult>]: never; };
    } & { [K_3 in Exclude<keyof I_1, "opresult">]: never; }>(object: I_1): UpdateDocumentResponse;
};
export declare const InsertOrUpdateOneRequest: {
    encode(message: InsertOrUpdateOneRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): InsertOrUpdateOneRequest;
    fromJSON(object: any): InsertOrUpdateOneRequest;
    toJSON(message: InsertOrUpdateOneRequest): unknown;
    create<I extends {
        collectionname?: string;
        uniqeness?: string;
        item?: string;
        w?: number;
        j?: boolean;
    } & {
        collectionname?: string;
        uniqeness?: string;
        item?: string;
        w?: number;
        j?: boolean;
    } & { [K in Exclude<keyof I, keyof InsertOrUpdateOneRequest>]: never; }>(base?: I): InsertOrUpdateOneRequest;
    fromPartial<I_1 extends {
        collectionname?: string;
        uniqeness?: string;
        item?: string;
        w?: number;
        j?: boolean;
    } & {
        collectionname?: string;
        uniqeness?: string;
        item?: string;
        w?: number;
        j?: boolean;
    } & { [K_1 in Exclude<keyof I_1, keyof InsertOrUpdateOneRequest>]: never; }>(object: I_1): InsertOrUpdateOneRequest;
};
export declare const InsertOrUpdateOneResponse: {
    encode(message: InsertOrUpdateOneResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): InsertOrUpdateOneResponse;
    fromJSON(object: any): InsertOrUpdateOneResponse;
    toJSON(message: InsertOrUpdateOneResponse): unknown;
    create<I extends {
        result?: string;
    } & {
        result?: string;
    } & { [K in Exclude<keyof I, "result">]: never; }>(base?: I): InsertOrUpdateOneResponse;
    fromPartial<I_1 extends {
        result?: string;
    } & {
        result?: string;
    } & { [K_1 in Exclude<keyof I_1, "result">]: never; }>(object: I_1): InsertOrUpdateOneResponse;
};
export declare const InsertOrUpdateManyRequest: {
    encode(message: InsertOrUpdateManyRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): InsertOrUpdateManyRequest;
    fromJSON(object: any): InsertOrUpdateManyRequest;
    toJSON(message: InsertOrUpdateManyRequest): unknown;
    create<I extends {
        collectionname?: string;
        uniqeness?: string;
        items?: string;
        w?: number;
        j?: boolean;
        skipresults?: boolean;
    } & {
        collectionname?: string;
        uniqeness?: string;
        items?: string;
        w?: number;
        j?: boolean;
        skipresults?: boolean;
    } & { [K in Exclude<keyof I, keyof InsertOrUpdateManyRequest>]: never; }>(base?: I): InsertOrUpdateManyRequest;
    fromPartial<I_1 extends {
        collectionname?: string;
        uniqeness?: string;
        items?: string;
        w?: number;
        j?: boolean;
        skipresults?: boolean;
    } & {
        collectionname?: string;
        uniqeness?: string;
        items?: string;
        w?: number;
        j?: boolean;
        skipresults?: boolean;
    } & { [K_1 in Exclude<keyof I_1, keyof InsertOrUpdateManyRequest>]: never; }>(object: I_1): InsertOrUpdateManyRequest;
};
export declare const InsertOrUpdateManyResponse: {
    encode(message: InsertOrUpdateManyResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): InsertOrUpdateManyResponse;
    fromJSON(object: any): InsertOrUpdateManyResponse;
    toJSON(message: InsertOrUpdateManyResponse): unknown;
    create<I extends {
        results?: string;
    } & {
        results?: string;
    } & { [K in Exclude<keyof I, "results">]: never; }>(base?: I): InsertOrUpdateManyResponse;
    fromPartial<I_1 extends {
        results?: string;
    } & {
        results?: string;
    } & { [K_1 in Exclude<keyof I_1, "results">]: never; }>(object: I_1): InsertOrUpdateManyResponse;
};
export declare const DeleteOneRequest: {
    encode(message: DeleteOneRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): DeleteOneRequest;
    fromJSON(object: any): DeleteOneRequest;
    toJSON(message: DeleteOneRequest): unknown;
    create<I extends {
        collectionname?: string;
        id?: string;
        recursive?: boolean;
    } & {
        collectionname?: string;
        id?: string;
        recursive?: boolean;
    } & { [K in Exclude<keyof I, keyof DeleteOneRequest>]: never; }>(base?: I): DeleteOneRequest;
    fromPartial<I_1 extends {
        collectionname?: string;
        id?: string;
        recursive?: boolean;
    } & {
        collectionname?: string;
        id?: string;
        recursive?: boolean;
    } & { [K_1 in Exclude<keyof I_1, keyof DeleteOneRequest>]: never; }>(object: I_1): DeleteOneRequest;
};
export declare const DeleteOneResponse: {
    encode(message: DeleteOneResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): DeleteOneResponse;
    fromJSON(object: any): DeleteOneResponse;
    toJSON(message: DeleteOneResponse): unknown;
    create<I extends {
        affectedrows?: number;
    } & {
        affectedrows?: number;
    } & { [K in Exclude<keyof I, "affectedrows">]: never; }>(base?: I): DeleteOneResponse;
    fromPartial<I_1 extends {
        affectedrows?: number;
    } & {
        affectedrows?: number;
    } & { [K_1 in Exclude<keyof I_1, "affectedrows">]: never; }>(object: I_1): DeleteOneResponse;
};
export declare const DeleteManyRequest: {
    encode(message: DeleteManyRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): DeleteManyRequest;
    fromJSON(object: any): DeleteManyRequest;
    toJSON(message: DeleteManyRequest): unknown;
    create<I extends {
        collectionname?: string;
        query?: string;
        recursive?: boolean;
        ids?: string[];
    } & {
        collectionname?: string;
        query?: string;
        recursive?: boolean;
        ids?: string[] & string[] & { [K in Exclude<keyof I["ids"], keyof string[]>]: never; };
    } & { [K_1 in Exclude<keyof I, keyof DeleteManyRequest>]: never; }>(base?: I): DeleteManyRequest;
    fromPartial<I_1 extends {
        collectionname?: string;
        query?: string;
        recursive?: boolean;
        ids?: string[];
    } & {
        collectionname?: string;
        query?: string;
        recursive?: boolean;
        ids?: string[] & string[] & { [K_2 in Exclude<keyof I_1["ids"], keyof string[]>]: never; };
    } & { [K_3 in Exclude<keyof I_1, keyof DeleteManyRequest>]: never; }>(object: I_1): DeleteManyRequest;
};
export declare const DeleteManyResponse: {
    encode(message: DeleteManyResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): DeleteManyResponse;
    fromJSON(object: any): DeleteManyResponse;
    toJSON(message: DeleteManyResponse): unknown;
    create<I extends {
        affectedrows?: number;
    } & {
        affectedrows?: number;
    } & { [K in Exclude<keyof I, "affectedrows">]: never; }>(base?: I): DeleteManyResponse;
    fromPartial<I_1 extends {
        affectedrows?: number;
    } & {
        affectedrows?: number;
    } & { [K_1 in Exclude<keyof I_1, "affectedrows">]: never; }>(object: I_1): DeleteManyResponse;
};
type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
export type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P : P & {
    [K in keyof P]: Exact<P[K], I[K]>;
} & {
    [K in Exclude<keyof I, KeysOfUnion<P>>]: never;
};
export {};
