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
    } & {
        query?: string;
        collectionname?: string;
        projection?: string;
        top?: number;
        skip?: number;
        orderby?: string;
        queryas?: string;
    } & { [K in Exclude<keyof I, keyof QueryRequest>]: never; }>(base?: I): QueryRequest;
    fromPartial<I_1 extends {
        query?: string;
        collectionname?: string;
        projection?: string;
        top?: number;
        skip?: number;
        orderby?: string;
        queryas?: string;
    } & {
        query?: string;
        collectionname?: string;
        projection?: string;
        top?: number;
        skip?: number;
        orderby?: string;
        queryas?: string;
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
    } & {
        collectionname?: string;
        aggregates?: string;
        queryas?: string;
        hint?: string;
    } & { [K in Exclude<keyof I, keyof AggregateRequest>]: never; }>(base?: I): AggregateRequest;
    fromPartial<I_1 extends {
        collectionname?: string;
        aggregates?: string;
        queryas?: string;
        hint?: string;
    } & {
        collectionname?: string;
        aggregates?: string;
        queryas?: string;
        hint?: string;
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
    } & {
        collectionname?: string;
        query?: string;
        queryas?: string;
    } & { [K in Exclude<keyof I, keyof CountRequest>]: never; }>(base?: I): CountRequest;
    fromPartial<I_1 extends {
        collectionname?: string;
        query?: string;
        queryas?: string;
    } & {
        collectionname?: string;
        query?: string;
        queryas?: string;
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
