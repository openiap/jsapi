import * as _m0 from "protobufjs/minimal";
export declare const protobufPackage = "openiap";
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
export declare const WatchRequest: {
    encode(message: WatchRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): WatchRequest;
    fromJSON(object: any): WatchRequest;
    toJSON(message: WatchRequest): unknown;
    create<I extends {
        collectionname?: string;
        paths?: string[];
    } & {
        collectionname?: string;
        paths?: string[] & string[] & { [K in Exclude<keyof I["paths"], keyof string[]>]: never; };
    } & { [K_1 in Exclude<keyof I, keyof WatchRequest>]: never; }>(base?: I): WatchRequest;
    fromPartial<I_1 extends {
        collectionname?: string;
        paths?: string[];
    } & {
        collectionname?: string;
        paths?: string[] & string[] & { [K_2 in Exclude<keyof I_1["paths"], keyof string[]>]: never; };
    } & { [K_3 in Exclude<keyof I_1, keyof WatchRequest>]: never; }>(object: I_1): WatchRequest;
};
export declare const WatchResponse: {
    encode(message: WatchResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): WatchResponse;
    fromJSON(object: any): WatchResponse;
    toJSON(message: WatchResponse): unknown;
    create<I extends {
        id?: string;
    } & {
        id?: string;
    } & { [K in Exclude<keyof I, "id">]: never; }>(base?: I): WatchResponse;
    fromPartial<I_1 extends {
        id?: string;
    } & {
        id?: string;
    } & { [K_1 in Exclude<keyof I_1, "id">]: never; }>(object: I_1): WatchResponse;
};
export declare const WatchEvent: {
    encode(message: WatchEvent, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): WatchEvent;
    fromJSON(object: any): WatchEvent;
    toJSON(message: WatchEvent): unknown;
    create<I extends {
        id?: string;
        operation?: string;
        document?: string;
    } & {
        id?: string;
        operation?: string;
        document?: string;
    } & { [K in Exclude<keyof I, keyof WatchEvent>]: never; }>(base?: I): WatchEvent;
    fromPartial<I_1 extends {
        id?: string;
        operation?: string;
        document?: string;
    } & {
        id?: string;
        operation?: string;
        document?: string;
    } & { [K_1 in Exclude<keyof I_1, keyof WatchEvent>]: never; }>(object: I_1): WatchEvent;
};
export declare const UnWatchRequest: {
    encode(message: UnWatchRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): UnWatchRequest;
    fromJSON(object: any): UnWatchRequest;
    toJSON(message: UnWatchRequest): unknown;
    create<I extends {
        id?: string;
    } & {
        id?: string;
    } & { [K in Exclude<keyof I, "id">]: never; }>(base?: I): UnWatchRequest;
    fromPartial<I_1 extends {
        id?: string;
    } & {
        id?: string;
    } & { [K_1 in Exclude<keyof I_1, "id">]: never; }>(object: I_1): UnWatchRequest;
};
export declare const UnWatchResponse: {
    encode(_: UnWatchResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): UnWatchResponse;
    fromJSON(_: any): UnWatchResponse;
    toJSON(_: UnWatchResponse): unknown;
    create<I extends {} & {} & { [K in Exclude<keyof I, never>]: never; }>(base?: I): UnWatchResponse;
    fromPartial<I_1 extends {} & {} & { [K_1 in Exclude<keyof I_1, never>]: never; }>(_: I_1): UnWatchResponse;
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
