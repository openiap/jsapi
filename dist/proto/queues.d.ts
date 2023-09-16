import * as _m0 from "protobufjs/minimal";
export declare const protobufPackage = "openiap";
export interface RegisterQueueRequest {
    queuename: string;
}
export interface RegisterQueueResponse {
    queuename: string;
}
export interface RegisterExchangeRequest {
    exchangename: string;
    algorithm: string;
    routingkey: string;
    addqueue: boolean;
}
export interface RegisterExchangeResponse {
    queuename: string;
}
export interface QueueMessageRequest {
    queuename: string;
    correlationId: string;
    replyto: string;
    routingkey: string;
    exchangename: string;
    data: string;
    striptoken: boolean;
    expiration: number;
}
export interface QueueMessageResponse {
    queuename: string;
    correlationId: string;
    replyto: string;
    routingkey: string;
    exchangename: string;
    data: string;
}
export interface QueueEvent {
    queuename: string;
    correlationId: string;
    replyto: string;
    routingkey: string;
    exchangename: string;
    data: string;
}
export interface UnRegisterQueueRequest {
    queuename: string;
}
export interface UnRegisterQueueResponse {
}
export interface CreateWorkflowInstanceRequest {
    targetid: string;
    workflowid: string;
    name: string;
    resultqueue: string;
    data: string;
    initialrun: boolean;
}
export interface CreateWorkflowInstanceResponse {
    instanceid: string;
}
export declare const RegisterQueueRequest: {
    encode(message: RegisterQueueRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RegisterQueueRequest;
    fromJSON(object: any): RegisterQueueRequest;
    toJSON(message: RegisterQueueRequest): unknown;
    create<I extends {
        queuename?: string;
    } & {
        queuename?: string;
    } & { [K in Exclude<keyof I, "queuename">]: never; }>(base?: I): RegisterQueueRequest;
    fromPartial<I_1 extends {
        queuename?: string;
    } & {
        queuename?: string;
    } & { [K_1 in Exclude<keyof I_1, "queuename">]: never; }>(object: I_1): RegisterQueueRequest;
};
export declare const RegisterQueueResponse: {
    encode(message: RegisterQueueResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RegisterQueueResponse;
    fromJSON(object: any): RegisterQueueResponse;
    toJSON(message: RegisterQueueResponse): unknown;
    create<I extends {
        queuename?: string;
    } & {
        queuename?: string;
    } & { [K in Exclude<keyof I, "queuename">]: never; }>(base?: I): RegisterQueueResponse;
    fromPartial<I_1 extends {
        queuename?: string;
    } & {
        queuename?: string;
    } & { [K_1 in Exclude<keyof I_1, "queuename">]: never; }>(object: I_1): RegisterQueueResponse;
};
export declare const RegisterExchangeRequest: {
    encode(message: RegisterExchangeRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RegisterExchangeRequest;
    fromJSON(object: any): RegisterExchangeRequest;
    toJSON(message: RegisterExchangeRequest): unknown;
    create<I extends {
        exchangename?: string;
        algorithm?: string;
        routingkey?: string;
        addqueue?: boolean;
    } & {
        exchangename?: string;
        algorithm?: string;
        routingkey?: string;
        addqueue?: boolean;
    } & { [K in Exclude<keyof I, keyof RegisterExchangeRequest>]: never; }>(base?: I): RegisterExchangeRequest;
    fromPartial<I_1 extends {
        exchangename?: string;
        algorithm?: string;
        routingkey?: string;
        addqueue?: boolean;
    } & {
        exchangename?: string;
        algorithm?: string;
        routingkey?: string;
        addqueue?: boolean;
    } & { [K_1 in Exclude<keyof I_1, keyof RegisterExchangeRequest>]: never; }>(object: I_1): RegisterExchangeRequest;
};
export declare const RegisterExchangeResponse: {
    encode(message: RegisterExchangeResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RegisterExchangeResponse;
    fromJSON(object: any): RegisterExchangeResponse;
    toJSON(message: RegisterExchangeResponse): unknown;
    create<I extends {
        queuename?: string;
    } & {
        queuename?: string;
    } & { [K in Exclude<keyof I, "queuename">]: never; }>(base?: I): RegisterExchangeResponse;
    fromPartial<I_1 extends {
        queuename?: string;
    } & {
        queuename?: string;
    } & { [K_1 in Exclude<keyof I_1, "queuename">]: never; }>(object: I_1): RegisterExchangeResponse;
};
export declare const QueueMessageRequest: {
    encode(message: QueueMessageRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueueMessageRequest;
    fromJSON(object: any): QueueMessageRequest;
    toJSON(message: QueueMessageRequest): unknown;
    create<I extends {
        queuename?: string;
        correlationId?: string;
        replyto?: string;
        routingkey?: string;
        exchangename?: string;
        data?: string;
        striptoken?: boolean;
        expiration?: number;
    } & {
        queuename?: string;
        correlationId?: string;
        replyto?: string;
        routingkey?: string;
        exchangename?: string;
        data?: string;
        striptoken?: boolean;
        expiration?: number;
    } & { [K in Exclude<keyof I, keyof QueueMessageRequest>]: never; }>(base?: I): QueueMessageRequest;
    fromPartial<I_1 extends {
        queuename?: string;
        correlationId?: string;
        replyto?: string;
        routingkey?: string;
        exchangename?: string;
        data?: string;
        striptoken?: boolean;
        expiration?: number;
    } & {
        queuename?: string;
        correlationId?: string;
        replyto?: string;
        routingkey?: string;
        exchangename?: string;
        data?: string;
        striptoken?: boolean;
        expiration?: number;
    } & { [K_1 in Exclude<keyof I_1, keyof QueueMessageRequest>]: never; }>(object: I_1): QueueMessageRequest;
};
export declare const QueueMessageResponse: {
    encode(message: QueueMessageResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueueMessageResponse;
    fromJSON(object: any): QueueMessageResponse;
    toJSON(message: QueueMessageResponse): unknown;
    create<I extends {
        queuename?: string;
        correlationId?: string;
        replyto?: string;
        routingkey?: string;
        exchangename?: string;
        data?: string;
    } & {
        queuename?: string;
        correlationId?: string;
        replyto?: string;
        routingkey?: string;
        exchangename?: string;
        data?: string;
    } & { [K in Exclude<keyof I, keyof QueueMessageResponse>]: never; }>(base?: I): QueueMessageResponse;
    fromPartial<I_1 extends {
        queuename?: string;
        correlationId?: string;
        replyto?: string;
        routingkey?: string;
        exchangename?: string;
        data?: string;
    } & {
        queuename?: string;
        correlationId?: string;
        replyto?: string;
        routingkey?: string;
        exchangename?: string;
        data?: string;
    } & { [K_1 in Exclude<keyof I_1, keyof QueueMessageResponse>]: never; }>(object: I_1): QueueMessageResponse;
};
export declare const QueueEvent: {
    encode(message: QueueEvent, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueueEvent;
    fromJSON(object: any): QueueEvent;
    toJSON(message: QueueEvent): unknown;
    create<I extends {
        queuename?: string;
        correlationId?: string;
        replyto?: string;
        routingkey?: string;
        exchangename?: string;
        data?: string;
    } & {
        queuename?: string;
        correlationId?: string;
        replyto?: string;
        routingkey?: string;
        exchangename?: string;
        data?: string;
    } & { [K in Exclude<keyof I, keyof QueueEvent>]: never; }>(base?: I): QueueEvent;
    fromPartial<I_1 extends {
        queuename?: string;
        correlationId?: string;
        replyto?: string;
        routingkey?: string;
        exchangename?: string;
        data?: string;
    } & {
        queuename?: string;
        correlationId?: string;
        replyto?: string;
        routingkey?: string;
        exchangename?: string;
        data?: string;
    } & { [K_1 in Exclude<keyof I_1, keyof QueueEvent>]: never; }>(object: I_1): QueueEvent;
};
export declare const UnRegisterQueueRequest: {
    encode(message: UnRegisterQueueRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): UnRegisterQueueRequest;
    fromJSON(object: any): UnRegisterQueueRequest;
    toJSON(message: UnRegisterQueueRequest): unknown;
    create<I extends {
        queuename?: string;
    } & {
        queuename?: string;
    } & { [K in Exclude<keyof I, "queuename">]: never; }>(base?: I): UnRegisterQueueRequest;
    fromPartial<I_1 extends {
        queuename?: string;
    } & {
        queuename?: string;
    } & { [K_1 in Exclude<keyof I_1, "queuename">]: never; }>(object: I_1): UnRegisterQueueRequest;
};
export declare const UnRegisterQueueResponse: {
    encode(_: UnRegisterQueueResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): UnRegisterQueueResponse;
    fromJSON(_: any): UnRegisterQueueResponse;
    toJSON(_: UnRegisterQueueResponse): unknown;
    create<I extends {} & {} & { [K in Exclude<keyof I, never>]: never; }>(base?: I): UnRegisterQueueResponse;
    fromPartial<I_1 extends {} & {} & { [K_1 in Exclude<keyof I_1, never>]: never; }>(_: I_1): UnRegisterQueueResponse;
};
export declare const CreateWorkflowInstanceRequest: {
    encode(message: CreateWorkflowInstanceRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): CreateWorkflowInstanceRequest;
    fromJSON(object: any): CreateWorkflowInstanceRequest;
    toJSON(message: CreateWorkflowInstanceRequest): unknown;
    create<I extends {
        targetid?: string;
        workflowid?: string;
        name?: string;
        resultqueue?: string;
        data?: string;
        initialrun?: boolean;
    } & {
        targetid?: string;
        workflowid?: string;
        name?: string;
        resultqueue?: string;
        data?: string;
        initialrun?: boolean;
    } & { [K in Exclude<keyof I, keyof CreateWorkflowInstanceRequest>]: never; }>(base?: I): CreateWorkflowInstanceRequest;
    fromPartial<I_1 extends {
        targetid?: string;
        workflowid?: string;
        name?: string;
        resultqueue?: string;
        data?: string;
        initialrun?: boolean;
    } & {
        targetid?: string;
        workflowid?: string;
        name?: string;
        resultqueue?: string;
        data?: string;
        initialrun?: boolean;
    } & { [K_1 in Exclude<keyof I_1, keyof CreateWorkflowInstanceRequest>]: never; }>(object: I_1): CreateWorkflowInstanceRequest;
};
export declare const CreateWorkflowInstanceResponse: {
    encode(message: CreateWorkflowInstanceResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): CreateWorkflowInstanceResponse;
    fromJSON(object: any): CreateWorkflowInstanceResponse;
    toJSON(message: CreateWorkflowInstanceResponse): unknown;
    create<I extends {
        instanceid?: string;
    } & {
        instanceid?: string;
    } & { [K in Exclude<keyof I, "instanceid">]: never; }>(base?: I): CreateWorkflowInstanceResponse;
    fromPartial<I_1 extends {
        instanceid?: string;
    } & {
        instanceid?: string;
    } & { [K_1 in Exclude<keyof I_1, "instanceid">]: never; }>(object: I_1): CreateWorkflowInstanceResponse;
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
