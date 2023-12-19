import * as _m0 from "protobufjs/minimal";
export declare const protobufPackage = "openiap";
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
export declare const StartAgentRequest: {
    encode(message: StartAgentRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): StartAgentRequest;
    fromJSON(object: any): StartAgentRequest;
    toJSON(message: StartAgentRequest): unknown;
    create<I extends {
        agentid?: string;
    } & {
        agentid?: string;
    } & { [K in Exclude<keyof I, "agentid">]: never; }>(base?: I): StartAgentRequest;
    fromPartial<I_1 extends {
        agentid?: string;
    } & {
        agentid?: string;
    } & { [K_1 in Exclude<keyof I_1, "agentid">]: never; }>(object: I_1): StartAgentRequest;
};
export declare const StartAgentResponse: {
    encode(_: StartAgentResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): StartAgentResponse;
    fromJSON(_: any): StartAgentResponse;
    toJSON(_: StartAgentResponse): unknown;
    create<I extends {} & {} & { [K in Exclude<keyof I, never>]: never; }>(base?: I): StartAgentResponse;
    fromPartial<I_1 extends {} & {} & { [K_1 in Exclude<keyof I_1, never>]: never; }>(_: I_1): StartAgentResponse;
};
export declare const StopAgentRequest: {
    encode(message: StopAgentRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): StopAgentRequest;
    fromJSON(object: any): StopAgentRequest;
    toJSON(message: StopAgentRequest): unknown;
    create<I extends {
        agentid?: string;
    } & {
        agentid?: string;
    } & { [K in Exclude<keyof I, "agentid">]: never; }>(base?: I): StopAgentRequest;
    fromPartial<I_1 extends {
        agentid?: string;
    } & {
        agentid?: string;
    } & { [K_1 in Exclude<keyof I_1, "agentid">]: never; }>(object: I_1): StopAgentRequest;
};
export declare const StopAgentResponse: {
    encode(_: StopAgentResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): StopAgentResponse;
    fromJSON(_: any): StopAgentResponse;
    toJSON(_: StopAgentResponse): unknown;
    create<I extends {} & {} & { [K in Exclude<keyof I, never>]: never; }>(base?: I): StopAgentResponse;
    fromPartial<I_1 extends {} & {} & { [K_1 in Exclude<keyof I_1, never>]: never; }>(_: I_1): StopAgentResponse;
};
export declare const GetAgentLogRequest: {
    encode(message: GetAgentLogRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetAgentLogRequest;
    fromJSON(object: any): GetAgentLogRequest;
    toJSON(message: GetAgentLogRequest): unknown;
    create<I extends {
        agentid?: string;
        podname?: string;
    } & {
        agentid?: string;
        podname?: string;
    } & { [K in Exclude<keyof I, keyof GetAgentLogRequest>]: never; }>(base?: I): GetAgentLogRequest;
    fromPartial<I_1 extends {
        agentid?: string;
        podname?: string;
    } & {
        agentid?: string;
        podname?: string;
    } & { [K_1 in Exclude<keyof I_1, keyof GetAgentLogRequest>]: never; }>(object: I_1): GetAgentLogRequest;
};
export declare const GetAgentLogResponse: {
    encode(message: GetAgentLogResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetAgentLogResponse;
    fromJSON(object: any): GetAgentLogResponse;
    toJSON(message: GetAgentLogResponse): unknown;
    create<I extends {
        result?: string;
    } & {
        result?: string;
    } & { [K in Exclude<keyof I, "result">]: never; }>(base?: I): GetAgentLogResponse;
    fromPartial<I_1 extends {
        result?: string;
    } & {
        result?: string;
    } & { [K_1 in Exclude<keyof I_1, "result">]: never; }>(object: I_1): GetAgentLogResponse;
};
export declare const GetAgentPodsRequest: {
    encode(message: GetAgentPodsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetAgentPodsRequest;
    fromJSON(object: any): GetAgentPodsRequest;
    toJSON(message: GetAgentPodsRequest): unknown;
    create<I extends {
        agentid?: string;
        stats?: boolean;
    } & {
        agentid?: string;
        stats?: boolean;
    } & { [K in Exclude<keyof I, keyof GetAgentPodsRequest>]: never; }>(base?: I): GetAgentPodsRequest;
    fromPartial<I_1 extends {
        agentid?: string;
        stats?: boolean;
    } & {
        agentid?: string;
        stats?: boolean;
    } & { [K_1 in Exclude<keyof I_1, keyof GetAgentPodsRequest>]: never; }>(object: I_1): GetAgentPodsRequest;
};
export declare const GetAgentPodsResponse: {
    encode(message: GetAgentPodsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetAgentPodsResponse;
    fromJSON(object: any): GetAgentPodsResponse;
    toJSON(message: GetAgentPodsResponse): unknown;
    create<I extends {
        results?: string;
    } & {
        results?: string;
    } & { [K in Exclude<keyof I, "results">]: never; }>(base?: I): GetAgentPodsResponse;
    fromPartial<I_1 extends {
        results?: string;
    } & {
        results?: string;
    } & { [K_1 in Exclude<keyof I_1, "results">]: never; }>(object: I_1): GetAgentPodsResponse;
};
export declare const DeleteAgentPodRequest: {
    encode(message: DeleteAgentPodRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): DeleteAgentPodRequest;
    fromJSON(object: any): DeleteAgentPodRequest;
    toJSON(message: DeleteAgentPodRequest): unknown;
    create<I extends {
        agentid?: string;
        podname?: string;
    } & {
        agentid?: string;
        podname?: string;
    } & { [K in Exclude<keyof I, keyof DeleteAgentPodRequest>]: never; }>(base?: I): DeleteAgentPodRequest;
    fromPartial<I_1 extends {
        agentid?: string;
        podname?: string;
    } & {
        agentid?: string;
        podname?: string;
    } & { [K_1 in Exclude<keyof I_1, keyof DeleteAgentPodRequest>]: never; }>(object: I_1): DeleteAgentPodRequest;
};
export declare const DeleteAgentPodResponse: {
    encode(_: DeleteAgentPodResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): DeleteAgentPodResponse;
    fromJSON(_: any): DeleteAgentPodResponse;
    toJSON(_: DeleteAgentPodResponse): unknown;
    create<I extends {} & {} & { [K in Exclude<keyof I, never>]: never; }>(base?: I): DeleteAgentPodResponse;
    fromPartial<I_1 extends {} & {} & { [K_1 in Exclude<keyof I_1, never>]: never; }>(_: I_1): DeleteAgentPodResponse;
};
export declare const DeleteAgentRequest: {
    encode(message: DeleteAgentRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): DeleteAgentRequest;
    fromJSON(object: any): DeleteAgentRequest;
    toJSON(message: DeleteAgentRequest): unknown;
    create<I extends {
        agentid?: string;
    } & {
        agentid?: string;
    } & { [K in Exclude<keyof I, "agentid">]: never; }>(base?: I): DeleteAgentRequest;
    fromPartial<I_1 extends {
        agentid?: string;
    } & {
        agentid?: string;
    } & { [K_1 in Exclude<keyof I_1, "agentid">]: never; }>(object: I_1): DeleteAgentRequest;
};
export declare const DeleteAgentResponse: {
    encode(_: DeleteAgentResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): DeleteAgentResponse;
    fromJSON(_: any): DeleteAgentResponse;
    toJSON(_: DeleteAgentResponse): unknown;
    create<I extends {} & {} & { [K in Exclude<keyof I, never>]: never; }>(base?: I): DeleteAgentResponse;
    fromPartial<I_1 extends {} & {} & { [K_1 in Exclude<keyof I_1, never>]: never; }>(_: I_1): DeleteAgentResponse;
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
