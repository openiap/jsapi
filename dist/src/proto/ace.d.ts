import * as _m0 from "protobufjs/minimal";
export declare const protobufPackage = "openiap";
export interface Ace {
    _id: string;
    deny: boolean;
    rights: number;
}
export declare const Ace: {
    encode(message: Ace, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Ace;
    fromJSON(object: any): Ace;
    toJSON(message: Ace): unknown;
    create<I extends {
        _id?: string;
        deny?: boolean;
        rights?: number;
    } & {
        _id?: string;
        deny?: boolean;
        rights?: number;
    } & { [K in Exclude<keyof I, keyof Ace>]: never; }>(base?: I): Ace;
    fromPartial<I_1 extends {
        _id?: string;
        deny?: boolean;
        rights?: number;
    } & {
        _id?: string;
        deny?: boolean;
        rights?: number;
    } & { [K_1 in Exclude<keyof I_1, keyof Ace>]: never; }>(object: I_1): Ace;
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
