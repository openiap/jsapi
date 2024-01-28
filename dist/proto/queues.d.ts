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
export interface InvokeOpenRPARequest {
    /** _id from either a {"_type": "role", "rparole": true} role or {"_type": "user"} from the users colletion. */
    robotid: string;
    /** _id from a {"_type": "workflow"} from the openrpa collection. The Parameters property will show what arguments the workflow takes and returns. (in/inout/out) */
    workflowid: string;
    /** if true will not return a result until the robot has completed the run, if false will simply query the reqesut */
    rpc: boolean;
    /** a JSON string with each of the arguments to send to the workflow ( each value must corrospond with a `in` or `inout` Parameter found on the workflow ) */
    payload: string;
}
export interface InvokeOpenRPAResponse {
    payload: string;
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
export declare const InvokeOpenRPARequest: {
    encode(message: InvokeOpenRPARequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): InvokeOpenRPARequest;
    fromJSON(object: any): InvokeOpenRPARequest;
    toJSON(message: InvokeOpenRPARequest): unknown;
    create<I extends {
        robotid?: string;
        workflowid?: string;
        rpc?: boolean;
        payload?: string;
    } & {
        robotid?: string;
        workflowid?: string;
        rpc?: boolean;
        payload?: string;
    } & { [K in Exclude<keyof I, keyof InvokeOpenRPARequest>]: never; }>(base?: I): InvokeOpenRPARequest;
    fromPartial<I_1 extends {
        robotid?: string;
        workflowid?: string;
        rpc?: boolean;
        payload?: string;
    } & {
        robotid?: string;
        workflowid?: string;
        rpc?: boolean;
        payload?: string;
    } & { [K_1 in Exclude<keyof I_1, keyof InvokeOpenRPARequest>]: never; }>(object: I_1): InvokeOpenRPARequest;
};
export declare const InvokeOpenRPAResponse: {
    encode(message: InvokeOpenRPAResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): InvokeOpenRPAResponse;
    fromJSON(object: any): InvokeOpenRPAResponse;
    toJSON(message: InvokeOpenRPAResponse): unknown;
    create<I extends {
        payload?: string;
    } & {
        payload?: string;
    } & { [K in Exclude<keyof I, "payload">]: never; }>(base?: I): InvokeOpenRPAResponse;
    fromPartial<I_1 extends {
        payload?: string;
    } & {
        payload?: string;
    } & { [K_1 in Exclude<keyof I_1, "payload">]: never; }>(object: I_1): InvokeOpenRPAResponse;
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
