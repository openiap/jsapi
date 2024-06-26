import * as _m0 from "protobufjs/minimal";
import { Observable } from "rxjs";
import { DeleteAgentPodRequest, DeleteAgentPodResponse, DeleteAgentRequest, DeleteAgentResponse, GetAgentLogRequest, GetAgentLogResponse, GetAgentPodsRequest, GetAgentPodsResponse, StartAgentRequest, StartAgentResponse, StopAgentRequest, StopAgentResponse } from "./agent";
import { Any } from "./google/protobuf/any";
import { AggregateRequest, AggregateResponse, CountRequest, CountResponse, CreateCollectionRequest, CreateCollectionResponse, DeleteManyRequest, DeleteManyResponse, DeleteOneRequest, DeleteOneResponse, DropCollectionRequest, DropCollectionResponse, GetDocumentVersionRequest, GetDocumentVersionResponse, InsertManyRequest, InsertManyResponse, InsertOneRequest, InsertOneResponse, InsertOrUpdateManyRequest, InsertOrUpdateManyResponse, InsertOrUpdateOneRequest, InsertOrUpdateOneResponse, ListCollectionsRequest, ListCollectionsResponse, QueryRequest, QueryResponse, UpdateDocumentRequest, UpdateDocumentResponse, UpdateOneRequest, UpdateOneResponse } from "./querys";
import { InvokeOpenRPARequest, InvokeOpenRPAResponse, QueueMessageRequest, QueueMessageResponse, RegisterExchangeRequest, RegisterExchangeResponse, RegisterQueueRequest, RegisterQueueResponse, UnRegisterQueueRequest, UnRegisterQueueResponse } from "./queues";
import { StripeCustomer } from "./stripe";
import { UnWatchRequest, UnWatchResponse, WatchRequest, WatchResponse } from "./watch";
import { AddWorkItemQueueRequest, AddWorkItemQueueResponse, DeleteWorkItemQueueRequest, DeleteWorkItemQueueResponse, DeleteWorkitemRequest, DeleteWorkitemResponse, PopWorkitemRequest, PopWorkitemResponse, PushWorkitemRequest, PushWorkitemResponse, PushWorkitemsRequest, PushWorkitemsResponse, UpdateWorkItemQueueRequest, UpdateWorkItemQueueResponse, UpdateWorkitemRequest, UpdateWorkitemResponse } from "./workitems";
export declare const protobufPackage = "openiap";
export interface Envelope {
    command: string;
    priority: number;
    seq: number;
    id: string;
    rid: string;
    data: Any | undefined;
    jwt: string;
    traceid: string;
    spanid: string;
}
export interface PingRequest {
}
export interface PingResponse {
}
export interface Noop {
}
export interface ErrorResponse {
    message: string;
    code: number;
    stack: string;
}
export interface GetElementRequest {
    xpath: string;
}
export interface GetElementResponse {
    xpath: string;
}
export interface DownloadRequest {
    id: string;
    filename: string;
    collectionname: string;
}
export interface DownloadResponse {
    id: string;
    filename: string;
    mimetype: string;
}
export interface UploadRequest {
    filename: string;
    mimetype: string;
    metadata: string;
}
export interface UploadResponse {
    id: string;
    filename: string;
    bytes: number;
    chunks: number;
    mb: number;
    elapsedTime: number;
    mbps: number;
}
export interface BeginStream {
    checksum: string;
    stat: Stat | undefined;
}
export interface Stream {
    data: Uint8Array;
}
export interface EndStream {
}
export interface Stat {
    birthtimeMs: number;
    blksize: number;
    blocks: number;
    ctime: Date | undefined;
    ctimeMs: number;
    dev: number;
    gid: number;
    ino: number;
    mode: number;
    mtime: Date | undefined;
    mtimeMs: number;
    nlink: number;
    rdev: number;
    size: number;
    uid: number;
}
export interface CustomCommandRequest {
    command: string;
    id: string;
    name: string;
    data: string;
}
export interface CustomCommandResponse {
    result: string;
}
export interface SigninRequest {
    username: string;
    password: string;
    jwt: string;
    ping: boolean;
    validateonly: boolean;
    agent: string;
    version: string;
    longtoken: boolean;
}
export interface SigninResponse {
    jwt: string;
    user: User | undefined;
    config: string;
}
export interface RefreshToken {
    username: string;
    jwt: string;
    user: User | undefined;
}
export interface Role {
    _id: string;
    name: string;
}
export interface User {
    _id: string;
    name: string;
    username: string;
    email: string;
    roles: Role[];
}
export interface Customer {
    _id: string;
    _type: string;
    stripeid: string;
    userid: string;
    name: string;
    country: string;
    email: string;
    address: string;
    vattype: string;
    vatnumber: string;
    taxrate: string;
    tax: number;
    coupon: string;
    hascard: boolean;
    memory: string;
    openflowuserplan: string;
    supportplan: string;
    supporthourplan: string;
    subscriptionid: string;
    admins: string;
    users: string;
    customattr1: string;
    customattr2: string;
    customattr3: string;
    customattr4: string;
    customattr5: string;
    domains: string[];
    dbusage: number;
    dblocked: boolean;
}
export interface EnsureCustomerRequest {
    customer: Customer | undefined;
    stripe: StripeCustomer | undefined;
    ensureas: string;
}
export interface EnsureCustomerResponse {
    customer: Customer | undefined;
    stripe: StripeCustomer | undefined;
}
export interface CreateIndexRequest {
    /** Collection to create index on */
    collectionname: string;
    /** JSON string with indexes to create, for instance {"age": 1, "name": "text"} */
    index: string;
    /** optional JSON string with index option, for instance { unique: true } */
    options: string;
    /** Index name. Leave blank to let mongodb auto generate it */
    name: string;
}
export interface CreateIndexResponse {
    /** Index name */
    result: string;
}
export interface GetIndexesRequest {
    /** Collection to create index on */
    collectionname: string;
}
export interface GetIndexesResponse {
    /** List of indexes for collection */
    results: string;
}
export interface DropIndexRequest {
    /** Collection to create index on */
    collectionname: string;
    /** Index name */
    name: string;
}
export interface DropIndexResponse {
}
export interface DeletePackageRequest {
    /** id of package to delete,found in `agents` collection with {"_type": "package"} */
    packageid: string;
}
export interface DeletePackageResponse {
}
export declare const Envelope: {
    encode(message: Envelope, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Envelope;
    fromJSON(object: any): Envelope;
    toJSON(message: Envelope): unknown;
    create<I extends {
        command?: string;
        priority?: number;
        seq?: number;
        id?: string;
        rid?: string;
        data?: {
            type_url?: string;
            value?: Uint8Array;
        };
        jwt?: string;
        traceid?: string;
        spanid?: string;
    } & {
        command?: string;
        priority?: number;
        seq?: number;
        id?: string;
        rid?: string;
        data?: {
            type_url?: string;
            value?: Uint8Array;
        } & {
            type_url?: string;
            value?: Uint8Array;
        } & { [K in Exclude<keyof I["data"], keyof Any>]: never; };
        jwt?: string;
        traceid?: string;
        spanid?: string;
    } & { [K_1 in Exclude<keyof I, keyof Envelope>]: never; }>(base?: I): Envelope;
    fromPartial<I_1 extends {
        command?: string;
        priority?: number;
        seq?: number;
        id?: string;
        rid?: string;
        data?: {
            type_url?: string;
            value?: Uint8Array;
        };
        jwt?: string;
        traceid?: string;
        spanid?: string;
    } & {
        command?: string;
        priority?: number;
        seq?: number;
        id?: string;
        rid?: string;
        data?: {
            type_url?: string;
            value?: Uint8Array;
        } & {
            type_url?: string;
            value?: Uint8Array;
        } & { [K_2 in Exclude<keyof I_1["data"], keyof Any>]: never; };
        jwt?: string;
        traceid?: string;
        spanid?: string;
    } & { [K_3 in Exclude<keyof I_1, keyof Envelope>]: never; }>(object: I_1): Envelope;
};
export declare const PingRequest: {
    encode(_: PingRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): PingRequest;
    fromJSON(_: any): PingRequest;
    toJSON(_: PingRequest): unknown;
    create<I extends {} & {} & { [K in Exclude<keyof I, never>]: never; }>(base?: I): PingRequest;
    fromPartial<I_1 extends {} & {} & { [K_1 in Exclude<keyof I_1, never>]: never; }>(_: I_1): PingRequest;
};
export declare const PingResponse: {
    encode(_: PingResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): PingResponse;
    fromJSON(_: any): PingResponse;
    toJSON(_: PingResponse): unknown;
    create<I extends {} & {} & { [K in Exclude<keyof I, never>]: never; }>(base?: I): PingResponse;
    fromPartial<I_1 extends {} & {} & { [K_1 in Exclude<keyof I_1, never>]: never; }>(_: I_1): PingResponse;
};
export declare const Noop: {
    encode(_: Noop, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Noop;
    fromJSON(_: any): Noop;
    toJSON(_: Noop): unknown;
    create<I extends {} & {} & { [K in Exclude<keyof I, never>]: never; }>(base?: I): Noop;
    fromPartial<I_1 extends {} & {} & { [K_1 in Exclude<keyof I_1, never>]: never; }>(_: I_1): Noop;
};
export declare const ErrorResponse: {
    encode(message: ErrorResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ErrorResponse;
    fromJSON(object: any): ErrorResponse;
    toJSON(message: ErrorResponse): unknown;
    create<I extends {
        message?: string;
        code?: number;
        stack?: string;
    } & {
        message?: string;
        code?: number;
        stack?: string;
    } & { [K in Exclude<keyof I, keyof ErrorResponse>]: never; }>(base?: I): ErrorResponse;
    fromPartial<I_1 extends {
        message?: string;
        code?: number;
        stack?: string;
    } & {
        message?: string;
        code?: number;
        stack?: string;
    } & { [K_1 in Exclude<keyof I_1, keyof ErrorResponse>]: never; }>(object: I_1): ErrorResponse;
};
export declare const GetElementRequest: {
    encode(message: GetElementRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetElementRequest;
    fromJSON(object: any): GetElementRequest;
    toJSON(message: GetElementRequest): unknown;
    create<I extends {
        xpath?: string;
    } & {
        xpath?: string;
    } & { [K in Exclude<keyof I, "xpath">]: never; }>(base?: I): GetElementRequest;
    fromPartial<I_1 extends {
        xpath?: string;
    } & {
        xpath?: string;
    } & { [K_1 in Exclude<keyof I_1, "xpath">]: never; }>(object: I_1): GetElementRequest;
};
export declare const GetElementResponse: {
    encode(message: GetElementResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetElementResponse;
    fromJSON(object: any): GetElementResponse;
    toJSON(message: GetElementResponse): unknown;
    create<I extends {
        xpath?: string;
    } & {
        xpath?: string;
    } & { [K in Exclude<keyof I, "xpath">]: never; }>(base?: I): GetElementResponse;
    fromPartial<I_1 extends {
        xpath?: string;
    } & {
        xpath?: string;
    } & { [K_1 in Exclude<keyof I_1, "xpath">]: never; }>(object: I_1): GetElementResponse;
};
export declare const DownloadRequest: {
    encode(message: DownloadRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): DownloadRequest;
    fromJSON(object: any): DownloadRequest;
    toJSON(message: DownloadRequest): unknown;
    create<I extends {
        id?: string;
        filename?: string;
        collectionname?: string;
    } & {
        id?: string;
        filename?: string;
        collectionname?: string;
    } & { [K in Exclude<keyof I, keyof DownloadRequest>]: never; }>(base?: I): DownloadRequest;
    fromPartial<I_1 extends {
        id?: string;
        filename?: string;
        collectionname?: string;
    } & {
        id?: string;
        filename?: string;
        collectionname?: string;
    } & { [K_1 in Exclude<keyof I_1, keyof DownloadRequest>]: never; }>(object: I_1): DownloadRequest;
};
export declare const DownloadResponse: {
    encode(message: DownloadResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): DownloadResponse;
    fromJSON(object: any): DownloadResponse;
    toJSON(message: DownloadResponse): unknown;
    create<I extends {
        id?: string;
        filename?: string;
        mimetype?: string;
    } & {
        id?: string;
        filename?: string;
        mimetype?: string;
    } & { [K in Exclude<keyof I, keyof DownloadResponse>]: never; }>(base?: I): DownloadResponse;
    fromPartial<I_1 extends {
        id?: string;
        filename?: string;
        mimetype?: string;
    } & {
        id?: string;
        filename?: string;
        mimetype?: string;
    } & { [K_1 in Exclude<keyof I_1, keyof DownloadResponse>]: never; }>(object: I_1): DownloadResponse;
};
export declare const UploadRequest: {
    encode(message: UploadRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): UploadRequest;
    fromJSON(object: any): UploadRequest;
    toJSON(message: UploadRequest): unknown;
    create<I extends {
        filename?: string;
        mimetype?: string;
        metadata?: string;
    } & {
        filename?: string;
        mimetype?: string;
        metadata?: string;
    } & { [K in Exclude<keyof I, keyof UploadRequest>]: never; }>(base?: I): UploadRequest;
    fromPartial<I_1 extends {
        filename?: string;
        mimetype?: string;
        metadata?: string;
    } & {
        filename?: string;
        mimetype?: string;
        metadata?: string;
    } & { [K_1 in Exclude<keyof I_1, keyof UploadRequest>]: never; }>(object: I_1): UploadRequest;
};
export declare const UploadResponse: {
    encode(message: UploadResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): UploadResponse;
    fromJSON(object: any): UploadResponse;
    toJSON(message: UploadResponse): unknown;
    create<I extends {
        id?: string;
        filename?: string;
        bytes?: number;
        chunks?: number;
        mb?: number;
        elapsedTime?: number;
        mbps?: number;
    } & {
        id?: string;
        filename?: string;
        bytes?: number;
        chunks?: number;
        mb?: number;
        elapsedTime?: number;
        mbps?: number;
    } & { [K in Exclude<keyof I, keyof UploadResponse>]: never; }>(base?: I): UploadResponse;
    fromPartial<I_1 extends {
        id?: string;
        filename?: string;
        bytes?: number;
        chunks?: number;
        mb?: number;
        elapsedTime?: number;
        mbps?: number;
    } & {
        id?: string;
        filename?: string;
        bytes?: number;
        chunks?: number;
        mb?: number;
        elapsedTime?: number;
        mbps?: number;
    } & { [K_1 in Exclude<keyof I_1, keyof UploadResponse>]: never; }>(object: I_1): UploadResponse;
};
export declare const BeginStream: {
    encode(message: BeginStream, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): BeginStream;
    fromJSON(object: any): BeginStream;
    toJSON(message: BeginStream): unknown;
    create<I extends {
        checksum?: string;
        stat?: {
            birthtimeMs?: number;
            blksize?: number;
            blocks?: number;
            ctime?: Date | undefined;
            ctimeMs?: number;
            dev?: number;
            gid?: number;
            ino?: number;
            mode?: number;
            mtime?: Date | undefined;
            mtimeMs?: number;
            nlink?: number;
            rdev?: number;
            size?: number;
            uid?: number;
        };
    } & {
        checksum?: string;
        stat?: {
            birthtimeMs?: number;
            blksize?: number;
            blocks?: number;
            ctime?: Date | undefined;
            ctimeMs?: number;
            dev?: number;
            gid?: number;
            ino?: number;
            mode?: number;
            mtime?: Date | undefined;
            mtimeMs?: number;
            nlink?: number;
            rdev?: number;
            size?: number;
            uid?: number;
        } & {
            birthtimeMs?: number;
            blksize?: number;
            blocks?: number;
            ctime?: Date | undefined;
            ctimeMs?: number;
            dev?: number;
            gid?: number;
            ino?: number;
            mode?: number;
            mtime?: Date | undefined;
            mtimeMs?: number;
            nlink?: number;
            rdev?: number;
            size?: number;
            uid?: number;
        } & { [K in Exclude<keyof I["stat"], keyof Stat>]: never; };
    } & { [K_1 in Exclude<keyof I, keyof BeginStream>]: never; }>(base?: I): BeginStream;
    fromPartial<I_1 extends {
        checksum?: string;
        stat?: {
            birthtimeMs?: number;
            blksize?: number;
            blocks?: number;
            ctime?: Date | undefined;
            ctimeMs?: number;
            dev?: number;
            gid?: number;
            ino?: number;
            mode?: number;
            mtime?: Date | undefined;
            mtimeMs?: number;
            nlink?: number;
            rdev?: number;
            size?: number;
            uid?: number;
        };
    } & {
        checksum?: string;
        stat?: {
            birthtimeMs?: number;
            blksize?: number;
            blocks?: number;
            ctime?: Date | undefined;
            ctimeMs?: number;
            dev?: number;
            gid?: number;
            ino?: number;
            mode?: number;
            mtime?: Date | undefined;
            mtimeMs?: number;
            nlink?: number;
            rdev?: number;
            size?: number;
            uid?: number;
        } & {
            birthtimeMs?: number;
            blksize?: number;
            blocks?: number;
            ctime?: Date | undefined;
            ctimeMs?: number;
            dev?: number;
            gid?: number;
            ino?: number;
            mode?: number;
            mtime?: Date | undefined;
            mtimeMs?: number;
            nlink?: number;
            rdev?: number;
            size?: number;
            uid?: number;
        } & { [K_2 in Exclude<keyof I_1["stat"], keyof Stat>]: never; };
    } & { [K_3 in Exclude<keyof I_1, keyof BeginStream>]: never; }>(object: I_1): BeginStream;
};
export declare const Stream: {
    encode(message: Stream, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Stream;
    fromJSON(object: any): Stream;
    toJSON(message: Stream): unknown;
    create<I extends {
        data?: Uint8Array;
    } & {
        data?: Uint8Array;
    } & { [K in Exclude<keyof I, "data">]: never; }>(base?: I): Stream;
    fromPartial<I_1 extends {
        data?: Uint8Array;
    } & {
        data?: Uint8Array;
    } & { [K_1 in Exclude<keyof I_1, "data">]: never; }>(object: I_1): Stream;
};
export declare const EndStream: {
    encode(_: EndStream, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EndStream;
    fromJSON(_: any): EndStream;
    toJSON(_: EndStream): unknown;
    create<I extends {} & {} & { [K in Exclude<keyof I, never>]: never; }>(base?: I): EndStream;
    fromPartial<I_1 extends {} & {} & { [K_1 in Exclude<keyof I_1, never>]: never; }>(_: I_1): EndStream;
};
export declare const Stat: {
    encode(message: Stat, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Stat;
    fromJSON(object: any): Stat;
    toJSON(message: Stat): unknown;
    create<I extends {
        birthtimeMs?: number;
        blksize?: number;
        blocks?: number;
        ctime?: Date | undefined;
        ctimeMs?: number;
        dev?: number;
        gid?: number;
        ino?: number;
        mode?: number;
        mtime?: Date | undefined;
        mtimeMs?: number;
        nlink?: number;
        rdev?: number;
        size?: number;
        uid?: number;
    } & {
        birthtimeMs?: number;
        blksize?: number;
        blocks?: number;
        ctime?: Date | undefined;
        ctimeMs?: number;
        dev?: number;
        gid?: number;
        ino?: number;
        mode?: number;
        mtime?: Date | undefined;
        mtimeMs?: number;
        nlink?: number;
        rdev?: number;
        size?: number;
        uid?: number;
    } & { [K in Exclude<keyof I, keyof Stat>]: never; }>(base?: I): Stat;
    fromPartial<I_1 extends {
        birthtimeMs?: number;
        blksize?: number;
        blocks?: number;
        ctime?: Date | undefined;
        ctimeMs?: number;
        dev?: number;
        gid?: number;
        ino?: number;
        mode?: number;
        mtime?: Date | undefined;
        mtimeMs?: number;
        nlink?: number;
        rdev?: number;
        size?: number;
        uid?: number;
    } & {
        birthtimeMs?: number;
        blksize?: number;
        blocks?: number;
        ctime?: Date | undefined;
        ctimeMs?: number;
        dev?: number;
        gid?: number;
        ino?: number;
        mode?: number;
        mtime?: Date | undefined;
        mtimeMs?: number;
        nlink?: number;
        rdev?: number;
        size?: number;
        uid?: number;
    } & { [K_1 in Exclude<keyof I_1, keyof Stat>]: never; }>(object: I_1): Stat;
};
export declare const CustomCommandRequest: {
    encode(message: CustomCommandRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): CustomCommandRequest;
    fromJSON(object: any): CustomCommandRequest;
    toJSON(message: CustomCommandRequest): unknown;
    create<I extends {
        command?: string;
        id?: string;
        name?: string;
        data?: string;
    } & {
        command?: string;
        id?: string;
        name?: string;
        data?: string;
    } & { [K in Exclude<keyof I, keyof CustomCommandRequest>]: never; }>(base?: I): CustomCommandRequest;
    fromPartial<I_1 extends {
        command?: string;
        id?: string;
        name?: string;
        data?: string;
    } & {
        command?: string;
        id?: string;
        name?: string;
        data?: string;
    } & { [K_1 in Exclude<keyof I_1, keyof CustomCommandRequest>]: never; }>(object: I_1): CustomCommandRequest;
};
export declare const CustomCommandResponse: {
    encode(message: CustomCommandResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): CustomCommandResponse;
    fromJSON(object: any): CustomCommandResponse;
    toJSON(message: CustomCommandResponse): unknown;
    create<I extends {
        result?: string;
    } & {
        result?: string;
    } & { [K in Exclude<keyof I, "result">]: never; }>(base?: I): CustomCommandResponse;
    fromPartial<I_1 extends {
        result?: string;
    } & {
        result?: string;
    } & { [K_1 in Exclude<keyof I_1, "result">]: never; }>(object: I_1): CustomCommandResponse;
};
export declare const SigninRequest: {
    encode(message: SigninRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SigninRequest;
    fromJSON(object: any): SigninRequest;
    toJSON(message: SigninRequest): unknown;
    create<I extends {
        username?: string;
        password?: string;
        jwt?: string;
        ping?: boolean;
        validateonly?: boolean;
        agent?: string;
        version?: string;
        longtoken?: boolean;
    } & {
        username?: string;
        password?: string;
        jwt?: string;
        ping?: boolean;
        validateonly?: boolean;
        agent?: string;
        version?: string;
        longtoken?: boolean;
    } & { [K in Exclude<keyof I, keyof SigninRequest>]: never; }>(base?: I): SigninRequest;
    fromPartial<I_1 extends {
        username?: string;
        password?: string;
        jwt?: string;
        ping?: boolean;
        validateonly?: boolean;
        agent?: string;
        version?: string;
        longtoken?: boolean;
    } & {
        username?: string;
        password?: string;
        jwt?: string;
        ping?: boolean;
        validateonly?: boolean;
        agent?: string;
        version?: string;
        longtoken?: boolean;
    } & { [K_1 in Exclude<keyof I_1, keyof SigninRequest>]: never; }>(object: I_1): SigninRequest;
};
export declare const SigninResponse: {
    encode(message: SigninResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SigninResponse;
    fromJSON(object: any): SigninResponse;
    toJSON(message: SigninResponse): unknown;
    create<I extends {
        jwt?: string;
        user?: {
            _id?: string;
            name?: string;
            username?: string;
            email?: string;
            roles?: {
                _id?: string;
                name?: string;
            }[];
        };
        config?: string;
    } & {
        jwt?: string;
        user?: {
            _id?: string;
            name?: string;
            username?: string;
            email?: string;
            roles?: {
                _id?: string;
                name?: string;
            }[];
        } & {
            _id?: string;
            name?: string;
            username?: string;
            email?: string;
            roles?: {
                _id?: string;
                name?: string;
            }[] & ({
                _id?: string;
                name?: string;
            } & {
                _id?: string;
                name?: string;
            } & { [K in Exclude<keyof I["user"]["roles"][number], keyof Role>]: never; })[] & { [K_1 in Exclude<keyof I["user"]["roles"], keyof {
                _id?: string;
                name?: string;
            }[]>]: never; };
        } & { [K_2 in Exclude<keyof I["user"], keyof User>]: never; };
        config?: string;
    } & { [K_3 in Exclude<keyof I, keyof SigninResponse>]: never; }>(base?: I): SigninResponse;
    fromPartial<I_1 extends {
        jwt?: string;
        user?: {
            _id?: string;
            name?: string;
            username?: string;
            email?: string;
            roles?: {
                _id?: string;
                name?: string;
            }[];
        };
        config?: string;
    } & {
        jwt?: string;
        user?: {
            _id?: string;
            name?: string;
            username?: string;
            email?: string;
            roles?: {
                _id?: string;
                name?: string;
            }[];
        } & {
            _id?: string;
            name?: string;
            username?: string;
            email?: string;
            roles?: {
                _id?: string;
                name?: string;
            }[] & ({
                _id?: string;
                name?: string;
            } & {
                _id?: string;
                name?: string;
            } & { [K_4 in Exclude<keyof I_1["user"]["roles"][number], keyof Role>]: never; })[] & { [K_5 in Exclude<keyof I_1["user"]["roles"], keyof {
                _id?: string;
                name?: string;
            }[]>]: never; };
        } & { [K_6 in Exclude<keyof I_1["user"], keyof User>]: never; };
        config?: string;
    } & { [K_7 in Exclude<keyof I_1, keyof SigninResponse>]: never; }>(object: I_1): SigninResponse;
};
export declare const RefreshToken: {
    encode(message: RefreshToken, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RefreshToken;
    fromJSON(object: any): RefreshToken;
    toJSON(message: RefreshToken): unknown;
    create<I extends {
        username?: string;
        jwt?: string;
        user?: {
            _id?: string;
            name?: string;
            username?: string;
            email?: string;
            roles?: {
                _id?: string;
                name?: string;
            }[];
        };
    } & {
        username?: string;
        jwt?: string;
        user?: {
            _id?: string;
            name?: string;
            username?: string;
            email?: string;
            roles?: {
                _id?: string;
                name?: string;
            }[];
        } & {
            _id?: string;
            name?: string;
            username?: string;
            email?: string;
            roles?: {
                _id?: string;
                name?: string;
            }[] & ({
                _id?: string;
                name?: string;
            } & {
                _id?: string;
                name?: string;
            } & { [K in Exclude<keyof I["user"]["roles"][number], keyof Role>]: never; })[] & { [K_1 in Exclude<keyof I["user"]["roles"], keyof {
                _id?: string;
                name?: string;
            }[]>]: never; };
        } & { [K_2 in Exclude<keyof I["user"], keyof User>]: never; };
    } & { [K_3 in Exclude<keyof I, keyof RefreshToken>]: never; }>(base?: I): RefreshToken;
    fromPartial<I_1 extends {
        username?: string;
        jwt?: string;
        user?: {
            _id?: string;
            name?: string;
            username?: string;
            email?: string;
            roles?: {
                _id?: string;
                name?: string;
            }[];
        };
    } & {
        username?: string;
        jwt?: string;
        user?: {
            _id?: string;
            name?: string;
            username?: string;
            email?: string;
            roles?: {
                _id?: string;
                name?: string;
            }[];
        } & {
            _id?: string;
            name?: string;
            username?: string;
            email?: string;
            roles?: {
                _id?: string;
                name?: string;
            }[] & ({
                _id?: string;
                name?: string;
            } & {
                _id?: string;
                name?: string;
            } & { [K_4 in Exclude<keyof I_1["user"]["roles"][number], keyof Role>]: never; })[] & { [K_5 in Exclude<keyof I_1["user"]["roles"], keyof {
                _id?: string;
                name?: string;
            }[]>]: never; };
        } & { [K_6 in Exclude<keyof I_1["user"], keyof User>]: never; };
    } & { [K_7 in Exclude<keyof I_1, keyof RefreshToken>]: never; }>(object: I_1): RefreshToken;
};
export declare const Role: {
    encode(message: Role, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Role;
    fromJSON(object: any): Role;
    toJSON(message: Role): unknown;
    create<I extends {
        _id?: string;
        name?: string;
    } & {
        _id?: string;
        name?: string;
    } & { [K in Exclude<keyof I, keyof Role>]: never; }>(base?: I): Role;
    fromPartial<I_1 extends {
        _id?: string;
        name?: string;
    } & {
        _id?: string;
        name?: string;
    } & { [K_1 in Exclude<keyof I_1, keyof Role>]: never; }>(object: I_1): Role;
};
export declare const User: {
    encode(message: User, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): User;
    fromJSON(object: any): User;
    toJSON(message: User): unknown;
    create<I extends {
        _id?: string;
        name?: string;
        username?: string;
        email?: string;
        roles?: {
            _id?: string;
            name?: string;
        }[];
    } & {
        _id?: string;
        name?: string;
        username?: string;
        email?: string;
        roles?: {
            _id?: string;
            name?: string;
        }[] & ({
            _id?: string;
            name?: string;
        } & {
            _id?: string;
            name?: string;
        } & { [K in Exclude<keyof I["roles"][number], keyof Role>]: never; })[] & { [K_1 in Exclude<keyof I["roles"], keyof {
            _id?: string;
            name?: string;
        }[]>]: never; };
    } & { [K_2 in Exclude<keyof I, keyof User>]: never; }>(base?: I): User;
    fromPartial<I_1 extends {
        _id?: string;
        name?: string;
        username?: string;
        email?: string;
        roles?: {
            _id?: string;
            name?: string;
        }[];
    } & {
        _id?: string;
        name?: string;
        username?: string;
        email?: string;
        roles?: {
            _id?: string;
            name?: string;
        }[] & ({
            _id?: string;
            name?: string;
        } & {
            _id?: string;
            name?: string;
        } & { [K_3 in Exclude<keyof I_1["roles"][number], keyof Role>]: never; })[] & { [K_4 in Exclude<keyof I_1["roles"], keyof {
            _id?: string;
            name?: string;
        }[]>]: never; };
    } & { [K_5 in Exclude<keyof I_1, keyof User>]: never; }>(object: I_1): User;
};
export declare const Customer: {
    encode(message: Customer, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Customer;
    fromJSON(object: any): Customer;
    toJSON(message: Customer): unknown;
    create<I extends {
        _id?: string;
        _type?: string;
        stripeid?: string;
        userid?: string;
        name?: string;
        country?: string;
        email?: string;
        address?: string;
        vattype?: string;
        vatnumber?: string;
        taxrate?: string;
        tax?: number;
        coupon?: string;
        hascard?: boolean;
        memory?: string;
        openflowuserplan?: string;
        supportplan?: string;
        supporthourplan?: string;
        subscriptionid?: string;
        admins?: string;
        users?: string;
        customattr1?: string;
        customattr2?: string;
        customattr3?: string;
        customattr4?: string;
        customattr5?: string;
        domains?: string[];
        dbusage?: number;
        dblocked?: boolean;
    } & {
        _id?: string;
        _type?: string;
        stripeid?: string;
        userid?: string;
        name?: string;
        country?: string;
        email?: string;
        address?: string;
        vattype?: string;
        vatnumber?: string;
        taxrate?: string;
        tax?: number;
        coupon?: string;
        hascard?: boolean;
        memory?: string;
        openflowuserplan?: string;
        supportplan?: string;
        supporthourplan?: string;
        subscriptionid?: string;
        admins?: string;
        users?: string;
        customattr1?: string;
        customattr2?: string;
        customattr3?: string;
        customattr4?: string;
        customattr5?: string;
        domains?: string[] & string[] & { [K in Exclude<keyof I["domains"], keyof string[]>]: never; };
        dbusage?: number;
        dblocked?: boolean;
    } & { [K_1 in Exclude<keyof I, keyof Customer>]: never; }>(base?: I): Customer;
    fromPartial<I_1 extends {
        _id?: string;
        _type?: string;
        stripeid?: string;
        userid?: string;
        name?: string;
        country?: string;
        email?: string;
        address?: string;
        vattype?: string;
        vatnumber?: string;
        taxrate?: string;
        tax?: number;
        coupon?: string;
        hascard?: boolean;
        memory?: string;
        openflowuserplan?: string;
        supportplan?: string;
        supporthourplan?: string;
        subscriptionid?: string;
        admins?: string;
        users?: string;
        customattr1?: string;
        customattr2?: string;
        customattr3?: string;
        customattr4?: string;
        customattr5?: string;
        domains?: string[];
        dbusage?: number;
        dblocked?: boolean;
    } & {
        _id?: string;
        _type?: string;
        stripeid?: string;
        userid?: string;
        name?: string;
        country?: string;
        email?: string;
        address?: string;
        vattype?: string;
        vatnumber?: string;
        taxrate?: string;
        tax?: number;
        coupon?: string;
        hascard?: boolean;
        memory?: string;
        openflowuserplan?: string;
        supportplan?: string;
        supporthourplan?: string;
        subscriptionid?: string;
        admins?: string;
        users?: string;
        customattr1?: string;
        customattr2?: string;
        customattr3?: string;
        customattr4?: string;
        customattr5?: string;
        domains?: string[] & string[] & { [K_2 in Exclude<keyof I_1["domains"], keyof string[]>]: never; };
        dbusage?: number;
        dblocked?: boolean;
    } & { [K_3 in Exclude<keyof I_1, keyof Customer>]: never; }>(object: I_1): Customer;
};
export declare const EnsureCustomerRequest: {
    encode(message: EnsureCustomerRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EnsureCustomerRequest;
    fromJSON(object: any): EnsureCustomerRequest;
    toJSON(message: EnsureCustomerRequest): unknown;
    create<I extends {
        customer?: {
            _id?: string;
            _type?: string;
            stripeid?: string;
            userid?: string;
            name?: string;
            country?: string;
            email?: string;
            address?: string;
            vattype?: string;
            vatnumber?: string;
            taxrate?: string;
            tax?: number;
            coupon?: string;
            hascard?: boolean;
            memory?: string;
            openflowuserplan?: string;
            supportplan?: string;
            supporthourplan?: string;
            subscriptionid?: string;
            admins?: string;
            users?: string;
            customattr1?: string;
            customattr2?: string;
            customattr3?: string;
            customattr4?: string;
            customattr5?: string;
            domains?: string[];
            dbusage?: number;
            dblocked?: boolean;
        };
        stripe?: {
            address?: {
                line1?: string;
                line2?: string;
                postal_code?: string;
                city?: string;
                state?: string;
                country?: string;
            };
            description?: string;
            name?: string;
            email?: string;
            tax_ids?: {
                country?: string;
                customer?: string;
                type?: string;
                value?: string;
                verification?: {
                    status?: string;
                    verified_address?: string;
                    verified_name?: string;
                };
            }[];
            subscriptions?: {
                address?: string;
                balance?: number;
                currency?: string;
                subscriptions?: any[];
                tax_ids?: {
                    country?: string;
                    customer?: string;
                    type?: string;
                    value?: string;
                    verification?: {
                        status?: string;
                        verified_address?: string;
                        verified_name?: string;
                    };
                }[];
                items?: {
                    id?: string;
                    quantity?: string;
                    subscription?: string;
                    plan?: {
                        status?: boolean;
                        nickname?: string;
                        product?: string;
                        amount?: number;
                        usage_type?: string;
                    };
                    price?: {
                        nickname?: string;
                        product?: string;
                        active?: boolean;
                        billing_scheme?: string;
                        currency?: string;
                        recurring?: {
                            interval?: string;
                            interval_count?: number;
                            trial_period_days?: number;
                            usage_type?: string;
                        };
                    };
                }[];
                default_tax_rates?: string[];
            }[];
            discount?: {
                subscription?: string;
                start?: number;
                customer?: string;
                coupon?: {
                    duration?: string;
                    duration_in_months?: number;
                    name?: string;
                };
            };
        };
        ensureas?: string;
    } & {
        customer?: {
            _id?: string;
            _type?: string;
            stripeid?: string;
            userid?: string;
            name?: string;
            country?: string;
            email?: string;
            address?: string;
            vattype?: string;
            vatnumber?: string;
            taxrate?: string;
            tax?: number;
            coupon?: string;
            hascard?: boolean;
            memory?: string;
            openflowuserplan?: string;
            supportplan?: string;
            supporthourplan?: string;
            subscriptionid?: string;
            admins?: string;
            users?: string;
            customattr1?: string;
            customattr2?: string;
            customattr3?: string;
            customattr4?: string;
            customattr5?: string;
            domains?: string[];
            dbusage?: number;
            dblocked?: boolean;
        } & {
            _id?: string;
            _type?: string;
            stripeid?: string;
            userid?: string;
            name?: string;
            country?: string;
            email?: string;
            address?: string;
            vattype?: string;
            vatnumber?: string;
            taxrate?: string;
            tax?: number;
            coupon?: string;
            hascard?: boolean;
            memory?: string;
            openflowuserplan?: string;
            supportplan?: string;
            supporthourplan?: string;
            subscriptionid?: string;
            admins?: string;
            users?: string;
            customattr1?: string;
            customattr2?: string;
            customattr3?: string;
            customattr4?: string;
            customattr5?: string;
            domains?: string[] & string[] & { [K in Exclude<keyof I["customer"]["domains"], keyof string[]>]: never; };
            dbusage?: number;
            dblocked?: boolean;
        } & { [K_1 in Exclude<keyof I["customer"], keyof Customer>]: never; };
        stripe?: {
            address?: {
                line1?: string;
                line2?: string;
                postal_code?: string;
                city?: string;
                state?: string;
                country?: string;
            };
            description?: string;
            name?: string;
            email?: string;
            tax_ids?: {
                country?: string;
                customer?: string;
                type?: string;
                value?: string;
                verification?: {
                    status?: string;
                    verified_address?: string;
                    verified_name?: string;
                };
            }[];
            subscriptions?: {
                address?: string;
                balance?: number;
                currency?: string;
                subscriptions?: any[];
                tax_ids?: {
                    country?: string;
                    customer?: string;
                    type?: string;
                    value?: string;
                    verification?: {
                        status?: string;
                        verified_address?: string;
                        verified_name?: string;
                    };
                }[];
                items?: {
                    id?: string;
                    quantity?: string;
                    subscription?: string;
                    plan?: {
                        status?: boolean;
                        nickname?: string;
                        product?: string;
                        amount?: number;
                        usage_type?: string;
                    };
                    price?: {
                        nickname?: string;
                        product?: string;
                        active?: boolean;
                        billing_scheme?: string;
                        currency?: string;
                        recurring?: {
                            interval?: string;
                            interval_count?: number;
                            trial_period_days?: number;
                            usage_type?: string;
                        };
                    };
                }[];
                default_tax_rates?: string[];
            }[];
            discount?: {
                subscription?: string;
                start?: number;
                customer?: string;
                coupon?: {
                    duration?: string;
                    duration_in_months?: number;
                    name?: string;
                };
            };
        } & {
            address?: {
                line1?: string;
                line2?: string;
                postal_code?: string;
                city?: string;
                state?: string;
                country?: string;
            } & {
                line1?: string;
                line2?: string;
                postal_code?: string;
                city?: string;
                state?: string;
                country?: string;
            } & { [K_2 in Exclude<keyof I["stripe"]["address"], keyof import("./stripe").StripeCustomerAddress>]: never; };
            description?: string;
            name?: string;
            email?: string;
            tax_ids?: {
                country?: string;
                customer?: string;
                type?: string;
                value?: string;
                verification?: {
                    status?: string;
                    verified_address?: string;
                    verified_name?: string;
                };
            }[] & ({
                country?: string;
                customer?: string;
                type?: string;
                value?: string;
                verification?: {
                    status?: string;
                    verified_address?: string;
                    verified_name?: string;
                };
            } & {
                country?: string;
                customer?: string;
                type?: string;
                value?: string;
                verification?: {
                    status?: string;
                    verified_address?: string;
                    verified_name?: string;
                } & {
                    status?: string;
                    verified_address?: string;
                    verified_name?: string;
                } & { [K_3 in Exclude<keyof I["stripe"]["tax_ids"][number]["verification"], keyof import("./stripe").StripeTaxVerification>]: never; };
            } & { [K_4 in Exclude<keyof I["stripe"]["tax_ids"][number], keyof import("./stripe").StripeTaxId>]: never; })[] & { [K_5 in Exclude<keyof I["stripe"]["tax_ids"], keyof {
                country?: string;
                customer?: string;
                type?: string;
                value?: string;
                verification?: {
                    status?: string;
                    verified_address?: string;
                    verified_name?: string;
                };
            }[]>]: never; };
            subscriptions?: {
                address?: string;
                balance?: number;
                currency?: string;
                subscriptions?: any[];
                tax_ids?: {
                    country?: string;
                    customer?: string;
                    type?: string;
                    value?: string;
                    verification?: {
                        status?: string;
                        verified_address?: string;
                        verified_name?: string;
                    };
                }[];
                items?: {
                    id?: string;
                    quantity?: string;
                    subscription?: string;
                    plan?: {
                        status?: boolean;
                        nickname?: string;
                        product?: string;
                        amount?: number;
                        usage_type?: string;
                    };
                    price?: {
                        nickname?: string;
                        product?: string;
                        active?: boolean;
                        billing_scheme?: string;
                        currency?: string;
                        recurring?: {
                            interval?: string;
                            interval_count?: number;
                            trial_period_days?: number;
                            usage_type?: string;
                        };
                    };
                }[];
                default_tax_rates?: string[];
            }[] & ({
                address?: string;
                balance?: number;
                currency?: string;
                subscriptions?: any[];
                tax_ids?: {
                    country?: string;
                    customer?: string;
                    type?: string;
                    value?: string;
                    verification?: {
                        status?: string;
                        verified_address?: string;
                        verified_name?: string;
                    };
                }[];
                items?: {
                    id?: string;
                    quantity?: string;
                    subscription?: string;
                    plan?: {
                        status?: boolean;
                        nickname?: string;
                        product?: string;
                        amount?: number;
                        usage_type?: string;
                    };
                    price?: {
                        nickname?: string;
                        product?: string;
                        active?: boolean;
                        billing_scheme?: string;
                        currency?: string;
                        recurring?: {
                            interval?: string;
                            interval_count?: number;
                            trial_period_days?: number;
                            usage_type?: string;
                        };
                    };
                }[];
                default_tax_rates?: string[];
            } & {
                address?: string;
                balance?: number;
                currency?: string;
                subscriptions?: {
                    address?: string;
                    balance?: number;
                    currency?: string;
                    subscriptions?: any[];
                    tax_ids?: {
                        country?: string;
                        customer?: string;
                        type?: string;
                        value?: string;
                        verification?: {
                            status?: string;
                            verified_address?: string;
                            verified_name?: string;
                        };
                    }[];
                    items?: {
                        id?: string;
                        quantity?: string;
                        subscription?: string;
                        plan?: {
                            status?: boolean;
                            nickname?: string;
                            product?: string;
                            amount?: number;
                            usage_type?: string;
                        };
                        price?: {
                            nickname?: string;
                            product?: string;
                            active?: boolean;
                            billing_scheme?: string;
                            currency?: string;
                            recurring?: {
                                interval?: string;
                                interval_count?: number;
                                trial_period_days?: number;
                                usage_type?: string;
                            };
                        };
                    }[];
                    default_tax_rates?: string[];
                }[] & ({
                    address?: string;
                    balance?: number;
                    currency?: string;
                    subscriptions?: any[];
                    tax_ids?: {
                        country?: string;
                        customer?: string;
                        type?: string;
                        value?: string;
                        verification?: {
                            status?: string;
                            verified_address?: string;
                            verified_name?: string;
                        };
                    }[];
                    items?: {
                        id?: string;
                        quantity?: string;
                        subscription?: string;
                        plan?: {
                            status?: boolean;
                            nickname?: string;
                            product?: string;
                            amount?: number;
                            usage_type?: string;
                        };
                        price?: {
                            nickname?: string;
                            product?: string;
                            active?: boolean;
                            billing_scheme?: string;
                            currency?: string;
                            recurring?: {
                                interval?: string;
                                interval_count?: number;
                                trial_period_days?: number;
                                usage_type?: string;
                            };
                        };
                    }[];
                    default_tax_rates?: string[];
                } & {
                    address?: string;
                    balance?: number;
                    currency?: string;
                    subscriptions?: {
                        address?: string;
                        balance?: number;
                        currency?: string;
                        subscriptions?: any[];
                        tax_ids?: {
                            country?: string;
                            customer?: string;
                            type?: string;
                            value?: string;
                            verification?: {
                                status?: string;
                                verified_address?: string;
                                verified_name?: string;
                            };
                        }[];
                        items?: {
                            id?: string;
                            quantity?: string;
                            subscription?: string;
                            plan?: {
                                status?: boolean;
                                nickname?: string;
                                product?: string;
                                amount?: number;
                                usage_type?: string;
                            };
                            price?: {
                                nickname?: string;
                                product?: string;
                                active?: boolean;
                                billing_scheme?: string;
                                currency?: string;
                                recurring?: {
                                    interval?: string;
                                    interval_count?: number;
                                    trial_period_days?: number;
                                    usage_type?: string;
                                };
                            };
                        }[];
                        default_tax_rates?: string[];
                    }[] & ({
                        address?: string;
                        balance?: number;
                        currency?: string;
                        subscriptions?: any[];
                        tax_ids?: {
                            country?: string;
                            customer?: string;
                            type?: string;
                            value?: string;
                            verification?: {
                                status?: string;
                                verified_address?: string;
                                verified_name?: string;
                            };
                        }[];
                        items?: {
                            id?: string;
                            quantity?: string;
                            subscription?: string;
                            plan?: {
                                status?: boolean;
                                nickname?: string;
                                product?: string;
                                amount?: number;
                                usage_type?: string;
                            };
                            price?: {
                                nickname?: string;
                                product?: string;
                                active?: boolean;
                                billing_scheme?: string;
                                currency?: string;
                                recurring?: {
                                    interval?: string;
                                    interval_count?: number;
                                    trial_period_days?: number;
                                    usage_type?: string;
                                };
                            };
                        }[];
                        default_tax_rates?: string[];
                    } & {
                        address?: string;
                        balance?: number;
                        currency?: string;
                        subscriptions?: {
                            address?: string;
                            balance?: number;
                            currency?: string;
                            subscriptions?: any[];
                            tax_ids?: {
                                country?: string;
                                customer?: string;
                                type?: string;
                                value?: string;
                                verification?: {
                                    status?: string;
                                    verified_address?: string;
                                    verified_name?: string;
                                };
                            }[];
                            items?: {
                                id?: string;
                                quantity?: string;
                                subscription?: string;
                                plan?: {
                                    status?: boolean;
                                    nickname?: string;
                                    product?: string;
                                    amount?: number;
                                    usage_type?: string;
                                };
                                price?: {
                                    nickname?: string;
                                    product?: string;
                                    active?: boolean;
                                    billing_scheme?: string;
                                    currency?: string;
                                    recurring?: {
                                        interval?: string;
                                        interval_count?: number;
                                        trial_period_days?: number;
                                        usage_type?: string;
                                    };
                                };
                            }[];
                            default_tax_rates?: string[];
                        }[] & ({
                            address?: string;
                            balance?: number;
                            currency?: string;
                            subscriptions?: any[];
                            tax_ids?: {
                                country?: string;
                                customer?: string;
                                type?: string;
                                value?: string;
                                verification?: {
                                    status?: string;
                                    verified_address?: string;
                                    verified_name?: string;
                                };
                            }[];
                            items?: {
                                id?: string;
                                quantity?: string;
                                subscription?: string;
                                plan?: {
                                    status?: boolean;
                                    nickname?: string;
                                    product?: string;
                                    amount?: number;
                                    usage_type?: string;
                                };
                                price?: {
                                    nickname?: string;
                                    product?: string;
                                    active?: boolean;
                                    billing_scheme?: string;
                                    currency?: string;
                                    recurring?: {
                                        interval?: string;
                                        interval_count?: number;
                                        trial_period_days?: number;
                                        usage_type?: string;
                                    };
                                };
                            }[];
                            default_tax_rates?: string[];
                        } & {
                            address?: string;
                            balance?: number;
                            currency?: string;
                            subscriptions?: {
                                address?: string;
                                balance?: number;
                                currency?: string;
                                subscriptions?: any[];
                                tax_ids?: {
                                    country?: string;
                                    customer?: string;
                                    type?: string;
                                    value?: string;
                                    verification?: {
                                        status?: string;
                                        verified_address?: string;
                                        verified_name?: string;
                                    };
                                }[];
                                items?: {
                                    id?: string;
                                    quantity?: string;
                                    subscription?: string;
                                    plan?: {
                                        status?: boolean;
                                        nickname?: string;
                                        product?: string;
                                        amount?: number;
                                        usage_type?: string;
                                    };
                                    price?: {
                                        nickname?: string;
                                        product?: string;
                                        active?: boolean;
                                        billing_scheme?: string;
                                        currency?: string;
                                        recurring?: {
                                            interval?: string;
                                            interval_count?: number;
                                            trial_period_days?: number;
                                            usage_type?: string;
                                        };
                                    };
                                }[];
                                default_tax_rates?: string[];
                            }[] & ({
                                address?: string;
                                balance?: number;
                                currency?: string;
                                subscriptions?: any[];
                                tax_ids?: {
                                    country?: string;
                                    customer?: string;
                                    type?: string;
                                    value?: string;
                                    verification?: {
                                        status?: string;
                                        verified_address?: string;
                                        verified_name?: string;
                                    };
                                }[];
                                items?: {
                                    id?: string;
                                    quantity?: string;
                                    subscription?: string;
                                    plan?: {
                                        status?: boolean;
                                        nickname?: string;
                                        product?: string;
                                        amount?: number;
                                        usage_type?: string;
                                    };
                                    price?: {
                                        nickname?: string;
                                        product?: string;
                                        active?: boolean;
                                        billing_scheme?: string;
                                        currency?: string;
                                        recurring?: {
                                            interval?: string;
                                            interval_count?: number;
                                            trial_period_days?: number;
                                            usage_type?: string;
                                        };
                                    };
                                }[];
                                default_tax_rates?: string[];
                            } & {
                                address?: string;
                                balance?: number;
                                currency?: string;
                                subscriptions?: {
                                    address?: string;
                                    balance?: number;
                                    currency?: string;
                                    subscriptions?: any[];
                                    tax_ids?: {
                                        country?: string;
                                        customer?: string;
                                        type?: string;
                                        value?: string;
                                        verification?: {
                                            status?: string;
                                            verified_address?: string;
                                            verified_name?: string;
                                        };
                                    }[];
                                    items?: {
                                        id?: string;
                                        quantity?: string;
                                        subscription?: string;
                                        plan?: {
                                            status?: boolean;
                                            nickname?: string;
                                            product?: string;
                                            amount?: number;
                                            usage_type?: string;
                                        };
                                        price?: {
                                            nickname?: string;
                                            product?: string;
                                            active?: boolean;
                                            billing_scheme?: string;
                                            currency?: string;
                                            recurring?: {
                                                interval?: string;
                                                interval_count?: number;
                                                trial_period_days?: number;
                                                usage_type?: string;
                                            };
                                        };
                                    }[];
                                    default_tax_rates?: string[];
                                }[] & ({
                                    address?: string;
                                    balance?: number;
                                    currency?: string;
                                    subscriptions?: any[];
                                    tax_ids?: {
                                        country?: string;
                                        customer?: string;
                                        type?: string;
                                        value?: string;
                                        verification?: {
                                            status?: string;
                                            verified_address?: string;
                                            verified_name?: string;
                                        };
                                    }[];
                                    items?: {
                                        id?: string;
                                        quantity?: string;
                                        subscription?: string;
                                        plan?: {
                                            status?: boolean;
                                            nickname?: string;
                                            product?: string;
                                            amount?: number;
                                            usage_type?: string;
                                        };
                                        price?: {
                                            nickname?: string;
                                            product?: string;
                                            active?: boolean;
                                            billing_scheme?: string;
                                            currency?: string;
                                            recurring?: {
                                                interval?: string;
                                                interval_count?: number;
                                                trial_period_days?: number;
                                                usage_type?: string;
                                            };
                                        };
                                    }[];
                                    default_tax_rates?: string[];
                                } & {
                                    address?: string;
                                    balance?: number;
                                    currency?: string;
                                    subscriptions?: {
                                        address?: string;
                                        balance?: number;
                                        currency?: string;
                                        subscriptions?: any[];
                                        tax_ids?: {
                                            country?: string;
                                            customer?: string;
                                            type?: string;
                                            value?: string;
                                            verification?: {
                                                status?: string;
                                                verified_address?: string;
                                                verified_name?: string;
                                            };
                                        }[];
                                        items?: {
                                            id?: string;
                                            quantity?: string;
                                            subscription?: string;
                                            plan?: {
                                                status?: boolean;
                                                nickname?: string;
                                                product?: string;
                                                amount?: number;
                                                usage_type?: string;
                                            };
                                            price?: {
                                                nickname?: string;
                                                product?: string;
                                                active?: boolean;
                                                billing_scheme?: string;
                                                currency?: string;
                                                recurring?: {
                                                    interval?: string;
                                                    interval_count?: number;
                                                    trial_period_days?: number;
                                                    usage_type?: string;
                                                };
                                            };
                                        }[];
                                        default_tax_rates?: string[];
                                    }[] & ({
                                        address?: string;
                                        balance?: number;
                                        currency?: string;
                                        subscriptions?: any[];
                                        tax_ids?: {
                                            country?: string;
                                            customer?: string;
                                            type?: string;
                                            value?: string;
                                            verification?: {
                                                status?: string;
                                                verified_address?: string;
                                                verified_name?: string;
                                            };
                                        }[];
                                        items?: {
                                            id?: string;
                                            quantity?: string;
                                            subscription?: string;
                                            plan?: {
                                                status?: boolean;
                                                nickname?: string;
                                                product?: string;
                                                amount?: number;
                                                usage_type?: string;
                                            };
                                            price?: {
                                                nickname?: string;
                                                product?: string;
                                                active?: boolean;
                                                billing_scheme?: string;
                                                currency?: string;
                                                recurring?: {
                                                    interval?: string;
                                                    interval_count?: number;
                                                    trial_period_days?: number;
                                                    usage_type?: string;
                                                };
                                            };
                                        }[];
                                        default_tax_rates?: string[];
                                    } & {
                                        address?: string;
                                        balance?: number;
                                        currency?: string;
                                        subscriptions?: {
                                            address?: string;
                                            balance?: number;
                                            currency?: string;
                                            subscriptions?: any[];
                                            tax_ids?: {
                                                country?: string;
                                                customer?: string;
                                                type?: string;
                                                value?: string;
                                                verification?: {
                                                    status?: string;
                                                    verified_address?: string;
                                                    verified_name?: string;
                                                };
                                            }[];
                                            items?: {
                                                id?: string;
                                                quantity?: string;
                                                subscription?: string;
                                                plan?: {
                                                    status?: boolean;
                                                    nickname?: string;
                                                    product?: string;
                                                    amount?: number;
                                                    usage_type?: string;
                                                };
                                                price?: {
                                                    nickname?: string;
                                                    product?: string;
                                                    active?: boolean;
                                                    billing_scheme?: string;
                                                    currency?: string;
                                                    recurring?: {
                                                        interval?: string;
                                                        interval_count?: number;
                                                        trial_period_days?: number;
                                                        usage_type?: string;
                                                    };
                                                };
                                            }[];
                                            default_tax_rates?: string[];
                                        }[] & ({
                                            address?: string;
                                            balance?: number;
                                            currency?: string;
                                            subscriptions?: any[];
                                            tax_ids?: {
                                                country?: string;
                                                customer?: string;
                                                type?: string;
                                                value?: string;
                                                verification?: {
                                                    status?: string;
                                                    verified_address?: string;
                                                    verified_name?: string;
                                                };
                                            }[];
                                            items?: {
                                                id?: string;
                                                quantity?: string;
                                                subscription?: string;
                                                plan?: {
                                                    status?: boolean;
                                                    nickname?: string;
                                                    product?: string;
                                                    amount?: number;
                                                    usage_type?: string;
                                                };
                                                price?: {
                                                    nickname?: string;
                                                    product?: string;
                                                    active?: boolean;
                                                    billing_scheme?: string;
                                                    currency?: string;
                                                    recurring?: {
                                                        interval?: string;
                                                        interval_count?: number;
                                                        trial_period_days?: number;
                                                        usage_type?: string;
                                                    };
                                                };
                                            }[];
                                            default_tax_rates?: string[];
                                        } & {
                                            address?: string;
                                            balance?: number;
                                            currency?: string;
                                            subscriptions?: {
                                                address?: string;
                                                balance?: number;
                                                currency?: string;
                                                subscriptions?: any[];
                                                tax_ids?: {
                                                    country?: string;
                                                    customer?: string;
                                                    type?: string;
                                                    value?: string;
                                                    verification?: {
                                                        status?: string;
                                                        verified_address?: string;
                                                        verified_name?: string;
                                                    };
                                                }[];
                                                items?: {
                                                    id?: string;
                                                    quantity?: string;
                                                    subscription?: string;
                                                    plan?: {
                                                        status?: boolean;
                                                        nickname?: string;
                                                        product?: string;
                                                        amount?: number;
                                                        usage_type?: string;
                                                    };
                                                    price?: {
                                                        nickname?: string;
                                                        product?: string;
                                                        active?: boolean;
                                                        billing_scheme?: string;
                                                        currency?: string;
                                                        recurring?: {
                                                            interval?: string;
                                                            interval_count?: number;
                                                            trial_period_days?: number;
                                                            usage_type?: string;
                                                        };
                                                    };
                                                }[];
                                                default_tax_rates?: string[];
                                            }[] & ({
                                                address?: string;
                                                balance?: number;
                                                currency?: string;
                                                subscriptions?: any[];
                                                tax_ids?: {
                                                    country?: string;
                                                    customer?: string;
                                                    type?: string;
                                                    value?: string;
                                                    verification?: {
                                                        status?: string;
                                                        verified_address?: string;
                                                        verified_name?: string;
                                                    };
                                                }[];
                                                items?: {
                                                    id?: string;
                                                    quantity?: string;
                                                    subscription?: string;
                                                    plan?: {
                                                        status?: boolean;
                                                        nickname?: string;
                                                        product?: string;
                                                        amount?: number;
                                                        usage_type?: string;
                                                    };
                                                    price?: {
                                                        nickname?: string;
                                                        product?: string;
                                                        active?: boolean;
                                                        billing_scheme?: string;
                                                        currency?: string;
                                                        recurring?: {
                                                            interval?: string;
                                                            interval_count?: number;
                                                            trial_period_days?: number;
                                                            usage_type?: string;
                                                        };
                                                    };
                                                }[];
                                                default_tax_rates?: string[];
                                            } & {
                                                address?: string;
                                                balance?: number;
                                                currency?: string;
                                                subscriptions?: {
                                                    address?: string;
                                                    balance?: number;
                                                    currency?: string;
                                                    subscriptions?: any[];
                                                    tax_ids?: {
                                                        country?: string;
                                                        customer?: string;
                                                        type?: string;
                                                        value?: string;
                                                        verification?: {
                                                            status?: string;
                                                            verified_address?: string;
                                                            verified_name?: string;
                                                        };
                                                    }[];
                                                    items?: {
                                                        id?: string;
                                                        quantity?: string;
                                                        subscription?: string;
                                                        plan?: {
                                                            status?: boolean;
                                                            nickname?: string;
                                                            product?: string;
                                                            amount?: number;
                                                            usage_type?: string;
                                                        };
                                                        price?: {
                                                            nickname?: string;
                                                            product?: string;
                                                            active?: boolean;
                                                            billing_scheme?: string;
                                                            currency?: string;
                                                            recurring?: {
                                                                interval?: string;
                                                                interval_count?: number;
                                                                trial_period_days?: number;
                                                                usage_type?: string;
                                                            };
                                                        };
                                                    }[];
                                                    default_tax_rates?: string[];
                                                }[] & ({
                                                    address?: string;
                                                    balance?: number;
                                                    currency?: string;
                                                    subscriptions?: any[];
                                                    tax_ids?: {
                                                        country?: string;
                                                        customer?: string;
                                                        type?: string;
                                                        value?: string;
                                                        verification?: {
                                                            status?: string;
                                                            verified_address?: string;
                                                            verified_name?: string;
                                                        };
                                                    }[];
                                                    items?: {
                                                        id?: string;
                                                        quantity?: string;
                                                        subscription?: string;
                                                        plan?: {
                                                            status?: boolean;
                                                            nickname?: string;
                                                            product?: string;
                                                            amount?: number;
                                                            usage_type?: string;
                                                        };
                                                        price?: {
                                                            nickname?: string;
                                                            product?: string;
                                                            active?: boolean;
                                                            billing_scheme?: string;
                                                            currency?: string;
                                                            recurring?: {
                                                                interval?: string;
                                                                interval_count?: number;
                                                                trial_period_days?: number;
                                                                usage_type?: string;
                                                            };
                                                        };
                                                    }[];
                                                    default_tax_rates?: string[];
                                                } & any & { [K_6 in Exclude<keyof I["stripe"]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number], keyof import("./stripe").StripeSubscription>]: never; })[] & { [K_7 in Exclude<keyof I["stripe"]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"], keyof {
                                                    address?: string;
                                                    balance?: number;
                                                    currency?: string;
                                                    subscriptions?: any[];
                                                    tax_ids?: {
                                                        country?: string;
                                                        customer?: string;
                                                        type?: string;
                                                        value?: string;
                                                        verification?: {
                                                            status?: string;
                                                            verified_address?: string;
                                                            verified_name?: string;
                                                        };
                                                    }[];
                                                    items?: {
                                                        id?: string;
                                                        quantity?: string;
                                                        subscription?: string;
                                                        plan?: {
                                                            status?: boolean;
                                                            nickname?: string;
                                                            product?: string;
                                                            amount?: number;
                                                            usage_type?: string;
                                                        };
                                                        price?: {
                                                            nickname?: string;
                                                            product?: string;
                                                            active?: boolean;
                                                            billing_scheme?: string;
                                                            currency?: string;
                                                            recurring?: {
                                                                interval?: string;
                                                                interval_count?: number;
                                                                trial_period_days?: number;
                                                                usage_type?: string;
                                                            };
                                                        };
                                                    }[];
                                                    default_tax_rates?: string[];
                                                }[]>]: never; };
                                                tax_ids?: {
                                                    country?: string;
                                                    customer?: string;
                                                    type?: string;
                                                    value?: string;
                                                    verification?: {
                                                        status?: string;
                                                        verified_address?: string;
                                                        verified_name?: string;
                                                    };
                                                }[] & ({
                                                    country?: string;
                                                    customer?: string;
                                                    type?: string;
                                                    value?: string;
                                                    verification?: {
                                                        status?: string;
                                                        verified_address?: string;
                                                        verified_name?: string;
                                                    };
                                                } & any & { [K_8 in Exclude<keyof I["stripe"]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["tax_ids"][number], keyof import("./stripe").StripeTaxId>]: never; })[] & { [K_9 in Exclude<keyof I["stripe"]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["tax_ids"], keyof {
                                                    country?: string;
                                                    customer?: string;
                                                    type?: string;
                                                    value?: string;
                                                    verification?: {
                                                        status?: string;
                                                        verified_address?: string;
                                                        verified_name?: string;
                                                    };
                                                }[]>]: never; };
                                                items?: {
                                                    id?: string;
                                                    quantity?: string;
                                                    subscription?: string;
                                                    plan?: {
                                                        status?: boolean;
                                                        nickname?: string;
                                                        product?: string;
                                                        amount?: number;
                                                        usage_type?: string;
                                                    };
                                                    price?: {
                                                        nickname?: string;
                                                        product?: string;
                                                        active?: boolean;
                                                        billing_scheme?: string;
                                                        currency?: string;
                                                        recurring?: {
                                                            interval?: string;
                                                            interval_count?: number;
                                                            trial_period_days?: number;
                                                            usage_type?: string;
                                                        };
                                                    };
                                                }[] & ({
                                                    id?: string;
                                                    quantity?: string;
                                                    subscription?: string;
                                                    plan?: {
                                                        status?: boolean;
                                                        nickname?: string;
                                                        product?: string;
                                                        amount?: number;
                                                        usage_type?: string;
                                                    };
                                                    price?: {
                                                        nickname?: string;
                                                        product?: string;
                                                        active?: boolean;
                                                        billing_scheme?: string;
                                                        currency?: string;
                                                        recurring?: {
                                                            interval?: string;
                                                            interval_count?: number;
                                                            trial_period_days?: number;
                                                            usage_type?: string;
                                                        };
                                                    };
                                                } & any & { [K_10 in Exclude<keyof I["stripe"]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["items"][number], keyof import("./stripe").StripeSubscriptionItem>]: never; })[] & { [K_11 in Exclude<keyof I["stripe"]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["items"], keyof {
                                                    id?: string;
                                                    quantity?: string;
                                                    subscription?: string;
                                                    plan?: {
                                                        status?: boolean;
                                                        nickname?: string;
                                                        product?: string;
                                                        amount?: number;
                                                        usage_type?: string;
                                                    };
                                                    price?: {
                                                        nickname?: string;
                                                        product?: string;
                                                        active?: boolean;
                                                        billing_scheme?: string;
                                                        currency?: string;
                                                        recurring?: {
                                                            interval?: string;
                                                            interval_count?: number;
                                                            trial_period_days?: number;
                                                            usage_type?: string;
                                                        };
                                                    };
                                                }[]>]: never; };
                                                default_tax_rates?: string[] & string[] & { [K_12 in Exclude<keyof I["stripe"]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["default_tax_rates"], keyof string[]>]: never; };
                                            } & { [K_13 in Exclude<keyof I["stripe"]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number], keyof import("./stripe").StripeSubscription>]: never; })[] & { [K_14 in Exclude<keyof I["stripe"]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"], keyof {
                                                address?: string;
                                                balance?: number;
                                                currency?: string;
                                                subscriptions?: any[];
                                                tax_ids?: {
                                                    country?: string;
                                                    customer?: string;
                                                    type?: string;
                                                    value?: string;
                                                    verification?: {
                                                        status?: string;
                                                        verified_address?: string;
                                                        verified_name?: string;
                                                    };
                                                }[];
                                                items?: {
                                                    id?: string;
                                                    quantity?: string;
                                                    subscription?: string;
                                                    plan?: {
                                                        status?: boolean;
                                                        nickname?: string;
                                                        product?: string;
                                                        amount?: number;
                                                        usage_type?: string;
                                                    };
                                                    price?: {
                                                        nickname?: string;
                                                        product?: string;
                                                        active?: boolean;
                                                        billing_scheme?: string;
                                                        currency?: string;
                                                        recurring?: {
                                                            interval?: string;
                                                            interval_count?: number;
                                                            trial_period_days?: number;
                                                            usage_type?: string;
                                                        };
                                                    };
                                                }[];
                                                default_tax_rates?: string[];
                                            }[]>]: never; };
                                            tax_ids?: {
                                                country?: string;
                                                customer?: string;
                                                type?: string;
                                                value?: string;
                                                verification?: {
                                                    status?: string;
                                                    verified_address?: string;
                                                    verified_name?: string;
                                                };
                                            }[] & ({
                                                country?: string;
                                                customer?: string;
                                                type?: string;
                                                value?: string;
                                                verification?: {
                                                    status?: string;
                                                    verified_address?: string;
                                                    verified_name?: string;
                                                };
                                            } & {
                                                country?: string;
                                                customer?: string;
                                                type?: string;
                                                value?: string;
                                                verification?: {
                                                    status?: string;
                                                    verified_address?: string;
                                                    verified_name?: string;
                                                } & any & { [K_15 in Exclude<keyof I["stripe"]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["tax_ids"][number]["verification"], keyof import("./stripe").StripeTaxVerification>]: never; };
                                            } & { [K_16 in Exclude<keyof I["stripe"]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["tax_ids"][number], keyof import("./stripe").StripeTaxId>]: never; })[] & { [K_17 in Exclude<keyof I["stripe"]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["tax_ids"], keyof {
                                                country?: string;
                                                customer?: string;
                                                type?: string;
                                                value?: string;
                                                verification?: {
                                                    status?: string;
                                                    verified_address?: string;
                                                    verified_name?: string;
                                                };
                                            }[]>]: never; };
                                            items?: {
                                                id?: string;
                                                quantity?: string;
                                                subscription?: string;
                                                plan?: {
                                                    status?: boolean;
                                                    nickname?: string;
                                                    product?: string;
                                                    amount?: number;
                                                    usage_type?: string;
                                                };
                                                price?: {
                                                    nickname?: string;
                                                    product?: string;
                                                    active?: boolean;
                                                    billing_scheme?: string;
                                                    currency?: string;
                                                    recurring?: {
                                                        interval?: string;
                                                        interval_count?: number;
                                                        trial_period_days?: number;
                                                        usage_type?: string;
                                                    };
                                                };
                                            }[] & ({
                                                id?: string;
                                                quantity?: string;
                                                subscription?: string;
                                                plan?: {
                                                    status?: boolean;
                                                    nickname?: string;
                                                    product?: string;
                                                    amount?: number;
                                                    usage_type?: string;
                                                };
                                                price?: {
                                                    nickname?: string;
                                                    product?: string;
                                                    active?: boolean;
                                                    billing_scheme?: string;
                                                    currency?: string;
                                                    recurring?: {
                                                        interval?: string;
                                                        interval_count?: number;
                                                        trial_period_days?: number;
                                                        usage_type?: string;
                                                    };
                                                };
                                            } & {
                                                id?: string;
                                                quantity?: string;
                                                subscription?: string;
                                                plan?: {
                                                    status?: boolean;
                                                    nickname?: string;
                                                    product?: string;
                                                    amount?: number;
                                                    usage_type?: string;
                                                } & any & { [K_18 in Exclude<keyof I["stripe"]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["items"][number]["plan"], keyof import("./stripe").StripePlan>]: never; };
                                                price?: {
                                                    nickname?: string;
                                                    product?: string;
                                                    active?: boolean;
                                                    billing_scheme?: string;
                                                    currency?: string;
                                                    recurring?: {
                                                        interval?: string;
                                                        interval_count?: number;
                                                        trial_period_days?: number;
                                                        usage_type?: string;
                                                    };
                                                } & any & { [K_19 in Exclude<keyof I["stripe"]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["items"][number]["price"], keyof import("./stripe").StripePrice>]: never; };
                                            } & { [K_20 in Exclude<keyof I["stripe"]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["items"][number], keyof import("./stripe").StripeSubscriptionItem>]: never; })[] & { [K_21 in Exclude<keyof I["stripe"]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["items"], keyof {
                                                id?: string;
                                                quantity?: string;
                                                subscription?: string;
                                                plan?: {
                                                    status?: boolean;
                                                    nickname?: string;
                                                    product?: string;
                                                    amount?: number;
                                                    usage_type?: string;
                                                };
                                                price?: {
                                                    nickname?: string;
                                                    product?: string;
                                                    active?: boolean;
                                                    billing_scheme?: string;
                                                    currency?: string;
                                                    recurring?: {
                                                        interval?: string;
                                                        interval_count?: number;
                                                        trial_period_days?: number;
                                                        usage_type?: string;
                                                    };
                                                };
                                            }[]>]: never; };
                                            default_tax_rates?: string[] & string[] & { [K_22 in Exclude<keyof I["stripe"]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["default_tax_rates"], keyof string[]>]: never; };
                                        } & { [K_23 in Exclude<keyof I["stripe"]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number], keyof import("./stripe").StripeSubscription>]: never; })[] & { [K_24 in Exclude<keyof I["stripe"]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"], keyof {
                                            address?: string;
                                            balance?: number;
                                            currency?: string;
                                            subscriptions?: any[];
                                            tax_ids?: {
                                                country?: string;
                                                customer?: string;
                                                type?: string;
                                                value?: string;
                                                verification?: {
                                                    status?: string;
                                                    verified_address?: string;
                                                    verified_name?: string;
                                                };
                                            }[];
                                            items?: {
                                                id?: string;
                                                quantity?: string;
                                                subscription?: string;
                                                plan?: {
                                                    status?: boolean;
                                                    nickname?: string;
                                                    product?: string;
                                                    amount?: number;
                                                    usage_type?: string;
                                                };
                                                price?: {
                                                    nickname?: string;
                                                    product?: string;
                                                    active?: boolean;
                                                    billing_scheme?: string;
                                                    currency?: string;
                                                    recurring?: {
                                                        interval?: string;
                                                        interval_count?: number;
                                                        trial_period_days?: number;
                                                        usage_type?: string;
                                                    };
                                                };
                                            }[];
                                            default_tax_rates?: string[];
                                        }[]>]: never; };
                                        tax_ids?: {
                                            country?: string;
                                            customer?: string;
                                            type?: string;
                                            value?: string;
                                            verification?: {
                                                status?: string;
                                                verified_address?: string;
                                                verified_name?: string;
                                            };
                                        }[] & ({
                                            country?: string;
                                            customer?: string;
                                            type?: string;
                                            value?: string;
                                            verification?: {
                                                status?: string;
                                                verified_address?: string;
                                                verified_name?: string;
                                            };
                                        } & {
                                            country?: string;
                                            customer?: string;
                                            type?: string;
                                            value?: string;
                                            verification?: {
                                                status?: string;
                                                verified_address?: string;
                                                verified_name?: string;
                                            } & {
                                                status?: string;
                                                verified_address?: string;
                                                verified_name?: string;
                                            } & { [K_25 in Exclude<keyof I["stripe"]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["tax_ids"][number]["verification"], keyof import("./stripe").StripeTaxVerification>]: never; };
                                        } & { [K_26 in Exclude<keyof I["stripe"]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["tax_ids"][number], keyof import("./stripe").StripeTaxId>]: never; })[] & { [K_27 in Exclude<keyof I["stripe"]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["tax_ids"], keyof {
                                            country?: string;
                                            customer?: string;
                                            type?: string;
                                            value?: string;
                                            verification?: {
                                                status?: string;
                                                verified_address?: string;
                                                verified_name?: string;
                                            };
                                        }[]>]: never; };
                                        items?: {
                                            id?: string;
                                            quantity?: string;
                                            subscription?: string;
                                            plan?: {
                                                status?: boolean;
                                                nickname?: string;
                                                product?: string;
                                                amount?: number;
                                                usage_type?: string;
                                            };
                                            price?: {
                                                nickname?: string;
                                                product?: string;
                                                active?: boolean;
                                                billing_scheme?: string;
                                                currency?: string;
                                                recurring?: {
                                                    interval?: string;
                                                    interval_count?: number;
                                                    trial_period_days?: number;
                                                    usage_type?: string;
                                                };
                                            };
                                        }[] & ({
                                            id?: string;
                                            quantity?: string;
                                            subscription?: string;
                                            plan?: {
                                                status?: boolean;
                                                nickname?: string;
                                                product?: string;
                                                amount?: number;
                                                usage_type?: string;
                                            };
                                            price?: {
                                                nickname?: string;
                                                product?: string;
                                                active?: boolean;
                                                billing_scheme?: string;
                                                currency?: string;
                                                recurring?: {
                                                    interval?: string;
                                                    interval_count?: number;
                                                    trial_period_days?: number;
                                                    usage_type?: string;
                                                };
                                            };
                                        } & {
                                            id?: string;
                                            quantity?: string;
                                            subscription?: string;
                                            plan?: {
                                                status?: boolean;
                                                nickname?: string;
                                                product?: string;
                                                amount?: number;
                                                usage_type?: string;
                                            } & {
                                                status?: boolean;
                                                nickname?: string;
                                                product?: string;
                                                amount?: number;
                                                usage_type?: string;
                                            } & { [K_28 in Exclude<keyof I["stripe"]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["items"][number]["plan"], keyof import("./stripe").StripePlan>]: never; };
                                            price?: {
                                                nickname?: string;
                                                product?: string;
                                                active?: boolean;
                                                billing_scheme?: string;
                                                currency?: string;
                                                recurring?: {
                                                    interval?: string;
                                                    interval_count?: number;
                                                    trial_period_days?: number;
                                                    usage_type?: string;
                                                };
                                            } & {
                                                nickname?: string;
                                                product?: string;
                                                active?: boolean;
                                                billing_scheme?: string;
                                                currency?: string;
                                                recurring?: {
                                                    interval?: string;
                                                    interval_count?: number;
                                                    trial_period_days?: number;
                                                    usage_type?: string;
                                                } & any & { [K_29 in Exclude<keyof I["stripe"]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["items"][number]["price"]["recurring"], keyof import("./stripe").StripeRecurring>]: never; };
                                            } & { [K_30 in Exclude<keyof I["stripe"]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["items"][number]["price"], keyof import("./stripe").StripePrice>]: never; };
                                        } & { [K_31 in Exclude<keyof I["stripe"]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["items"][number], keyof import("./stripe").StripeSubscriptionItem>]: never; })[] & { [K_32 in Exclude<keyof I["stripe"]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["items"], keyof {
                                            id?: string;
                                            quantity?: string;
                                            subscription?: string;
                                            plan?: {
                                                status?: boolean;
                                                nickname?: string;
                                                product?: string;
                                                amount?: number;
                                                usage_type?: string;
                                            };
                                            price?: {
                                                nickname?: string;
                                                product?: string;
                                                active?: boolean;
                                                billing_scheme?: string;
                                                currency?: string;
                                                recurring?: {
                                                    interval?: string;
                                                    interval_count?: number;
                                                    trial_period_days?: number;
                                                    usage_type?: string;
                                                };
                                            };
                                        }[]>]: never; };
                                        default_tax_rates?: string[] & string[] & { [K_33 in Exclude<keyof I["stripe"]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["default_tax_rates"], keyof string[]>]: never; };
                                    } & { [K_34 in Exclude<keyof I["stripe"]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number], keyof import("./stripe").StripeSubscription>]: never; })[] & { [K_35 in Exclude<keyof I["stripe"]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"], keyof {
                                        address?: string;
                                        balance?: number;
                                        currency?: string;
                                        subscriptions?: any[];
                                        tax_ids?: {
                                            country?: string;
                                            customer?: string;
                                            type?: string;
                                            value?: string;
                                            verification?: {
                                                status?: string;
                                                verified_address?: string;
                                                verified_name?: string;
                                            };
                                        }[];
                                        items?: {
                                            id?: string;
                                            quantity?: string;
                                            subscription?: string;
                                            plan?: {
                                                status?: boolean;
                                                nickname?: string;
                                                product?: string;
                                                amount?: number;
                                                usage_type?: string;
                                            };
                                            price?: {
                                                nickname?: string;
                                                product?: string;
                                                active?: boolean;
                                                billing_scheme?: string;
                                                currency?: string;
                                                recurring?: {
                                                    interval?: string;
                                                    interval_count?: number;
                                                    trial_period_days?: number;
                                                    usage_type?: string;
                                                };
                                            };
                                        }[];
                                        default_tax_rates?: string[];
                                    }[]>]: never; };
                                    tax_ids?: {
                                        country?: string;
                                        customer?: string;
                                        type?: string;
                                        value?: string;
                                        verification?: {
                                            status?: string;
                                            verified_address?: string;
                                            verified_name?: string;
                                        };
                                    }[] & ({
                                        country?: string;
                                        customer?: string;
                                        type?: string;
                                        value?: string;
                                        verification?: {
                                            status?: string;
                                            verified_address?: string;
                                            verified_name?: string;
                                        };
                                    } & {
                                        country?: string;
                                        customer?: string;
                                        type?: string;
                                        value?: string;
                                        verification?: {
                                            status?: string;
                                            verified_address?: string;
                                            verified_name?: string;
                                        } & {
                                            status?: string;
                                            verified_address?: string;
                                            verified_name?: string;
                                        } & { [K_36 in Exclude<keyof I["stripe"]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["tax_ids"][number]["verification"], keyof import("./stripe").StripeTaxVerification>]: never; };
                                    } & { [K_37 in Exclude<keyof I["stripe"]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["tax_ids"][number], keyof import("./stripe").StripeTaxId>]: never; })[] & { [K_38 in Exclude<keyof I["stripe"]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["tax_ids"], keyof {
                                        country?: string;
                                        customer?: string;
                                        type?: string;
                                        value?: string;
                                        verification?: {
                                            status?: string;
                                            verified_address?: string;
                                            verified_name?: string;
                                        };
                                    }[]>]: never; };
                                    items?: {
                                        id?: string;
                                        quantity?: string;
                                        subscription?: string;
                                        plan?: {
                                            status?: boolean;
                                            nickname?: string;
                                            product?: string;
                                            amount?: number;
                                            usage_type?: string;
                                        };
                                        price?: {
                                            nickname?: string;
                                            product?: string;
                                            active?: boolean;
                                            billing_scheme?: string;
                                            currency?: string;
                                            recurring?: {
                                                interval?: string;
                                                interval_count?: number;
                                                trial_period_days?: number;
                                                usage_type?: string;
                                            };
                                        };
                                    }[] & ({
                                        id?: string;
                                        quantity?: string;
                                        subscription?: string;
                                        plan?: {
                                            status?: boolean;
                                            nickname?: string;
                                            product?: string;
                                            amount?: number;
                                            usage_type?: string;
                                        };
                                        price?: {
                                            nickname?: string;
                                            product?: string;
                                            active?: boolean;
                                            billing_scheme?: string;
                                            currency?: string;
                                            recurring?: {
                                                interval?: string;
                                                interval_count?: number;
                                                trial_period_days?: number;
                                                usage_type?: string;
                                            };
                                        };
                                    } & {
                                        id?: string;
                                        quantity?: string;
                                        subscription?: string;
                                        plan?: {
                                            status?: boolean;
                                            nickname?: string;
                                            product?: string;
                                            amount?: number;
                                            usage_type?: string;
                                        } & {
                                            status?: boolean;
                                            nickname?: string;
                                            product?: string;
                                            amount?: number;
                                            usage_type?: string;
                                        } & { [K_39 in Exclude<keyof I["stripe"]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["items"][number]["plan"], keyof import("./stripe").StripePlan>]: never; };
                                        price?: {
                                            nickname?: string;
                                            product?: string;
                                            active?: boolean;
                                            billing_scheme?: string;
                                            currency?: string;
                                            recurring?: {
                                                interval?: string;
                                                interval_count?: number;
                                                trial_period_days?: number;
                                                usage_type?: string;
                                            };
                                        } & {
                                            nickname?: string;
                                            product?: string;
                                            active?: boolean;
                                            billing_scheme?: string;
                                            currency?: string;
                                            recurring?: {
                                                interval?: string;
                                                interval_count?: number;
                                                trial_period_days?: number;
                                                usage_type?: string;
                                            } & {
                                                interval?: string;
                                                interval_count?: number;
                                                trial_period_days?: number;
                                                usage_type?: string;
                                            } & { [K_40 in Exclude<keyof I["stripe"]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["items"][number]["price"]["recurring"], keyof import("./stripe").StripeRecurring>]: never; };
                                        } & { [K_41 in Exclude<keyof I["stripe"]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["items"][number]["price"], keyof import("./stripe").StripePrice>]: never; };
                                    } & { [K_42 in Exclude<keyof I["stripe"]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["items"][number], keyof import("./stripe").StripeSubscriptionItem>]: never; })[] & { [K_43 in Exclude<keyof I["stripe"]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["items"], keyof {
                                        id?: string;
                                        quantity?: string;
                                        subscription?: string;
                                        plan?: {
                                            status?: boolean;
                                            nickname?: string;
                                            product?: string;
                                            amount?: number;
                                            usage_type?: string;
                                        };
                                        price?: {
                                            nickname?: string;
                                            product?: string;
                                            active?: boolean;
                                            billing_scheme?: string;
                                            currency?: string;
                                            recurring?: {
                                                interval?: string;
                                                interval_count?: number;
                                                trial_period_days?: number;
                                                usage_type?: string;
                                            };
                                        };
                                    }[]>]: never; };
                                    default_tax_rates?: string[] & string[] & { [K_44 in Exclude<keyof I["stripe"]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["default_tax_rates"], keyof string[]>]: never; };
                                } & { [K_45 in Exclude<keyof I["stripe"]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number], keyof import("./stripe").StripeSubscription>]: never; })[] & { [K_46 in Exclude<keyof I["stripe"]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"], keyof {
                                    address?: string;
                                    balance?: number;
                                    currency?: string;
                                    subscriptions?: any[];
                                    tax_ids?: {
                                        country?: string;
                                        customer?: string;
                                        type?: string;
                                        value?: string;
                                        verification?: {
                                            status?: string;
                                            verified_address?: string;
                                            verified_name?: string;
                                        };
                                    }[];
                                    items?: {
                                        id?: string;
                                        quantity?: string;
                                        subscription?: string;
                                        plan?: {
                                            status?: boolean;
                                            nickname?: string;
                                            product?: string;
                                            amount?: number;
                                            usage_type?: string;
                                        };
                                        price?: {
                                            nickname?: string;
                                            product?: string;
                                            active?: boolean;
                                            billing_scheme?: string;
                                            currency?: string;
                                            recurring?: {
                                                interval?: string;
                                                interval_count?: number;
                                                trial_period_days?: number;
                                                usage_type?: string;
                                            };
                                        };
                                    }[];
                                    default_tax_rates?: string[];
                                }[]>]: never; };
                                tax_ids?: {
                                    country?: string;
                                    customer?: string;
                                    type?: string;
                                    value?: string;
                                    verification?: {
                                        status?: string;
                                        verified_address?: string;
                                        verified_name?: string;
                                    };
                                }[] & ({
                                    country?: string;
                                    customer?: string;
                                    type?: string;
                                    value?: string;
                                    verification?: {
                                        status?: string;
                                        verified_address?: string;
                                        verified_name?: string;
                                    };
                                } & {
                                    country?: string;
                                    customer?: string;
                                    type?: string;
                                    value?: string;
                                    verification?: {
                                        status?: string;
                                        verified_address?: string;
                                        verified_name?: string;
                                    } & {
                                        status?: string;
                                        verified_address?: string;
                                        verified_name?: string;
                                    } & { [K_47 in Exclude<keyof I["stripe"]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["tax_ids"][number]["verification"], keyof import("./stripe").StripeTaxVerification>]: never; };
                                } & { [K_48 in Exclude<keyof I["stripe"]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["tax_ids"][number], keyof import("./stripe").StripeTaxId>]: never; })[] & { [K_49 in Exclude<keyof I["stripe"]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["tax_ids"], keyof {
                                    country?: string;
                                    customer?: string;
                                    type?: string;
                                    value?: string;
                                    verification?: {
                                        status?: string;
                                        verified_address?: string;
                                        verified_name?: string;
                                    };
                                }[]>]: never; };
                                items?: {
                                    id?: string;
                                    quantity?: string;
                                    subscription?: string;
                                    plan?: {
                                        status?: boolean;
                                        nickname?: string;
                                        product?: string;
                                        amount?: number;
                                        usage_type?: string;
                                    };
                                    price?: {
                                        nickname?: string;
                                        product?: string;
                                        active?: boolean;
                                        billing_scheme?: string;
                                        currency?: string;
                                        recurring?: {
                                            interval?: string;
                                            interval_count?: number;
                                            trial_period_days?: number;
                                            usage_type?: string;
                                        };
                                    };
                                }[] & ({
                                    id?: string;
                                    quantity?: string;
                                    subscription?: string;
                                    plan?: {
                                        status?: boolean;
                                        nickname?: string;
                                        product?: string;
                                        amount?: number;
                                        usage_type?: string;
                                    };
                                    price?: {
                                        nickname?: string;
                                        product?: string;
                                        active?: boolean;
                                        billing_scheme?: string;
                                        currency?: string;
                                        recurring?: {
                                            interval?: string;
                                            interval_count?: number;
                                            trial_period_days?: number;
                                            usage_type?: string;
                                        };
                                    };
                                } & {
                                    id?: string;
                                    quantity?: string;
                                    subscription?: string;
                                    plan?: {
                                        status?: boolean;
                                        nickname?: string;
                                        product?: string;
                                        amount?: number;
                                        usage_type?: string;
                                    } & {
                                        status?: boolean;
                                        nickname?: string;
                                        product?: string;
                                        amount?: number;
                                        usage_type?: string;
                                    } & { [K_50 in Exclude<keyof I["stripe"]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["items"][number]["plan"], keyof import("./stripe").StripePlan>]: never; };
                                    price?: {
                                        nickname?: string;
                                        product?: string;
                                        active?: boolean;
                                        billing_scheme?: string;
                                        currency?: string;
                                        recurring?: {
                                            interval?: string;
                                            interval_count?: number;
                                            trial_period_days?: number;
                                            usage_type?: string;
                                        };
                                    } & {
                                        nickname?: string;
                                        product?: string;
                                        active?: boolean;
                                        billing_scheme?: string;
                                        currency?: string;
                                        recurring?: {
                                            interval?: string;
                                            interval_count?: number;
                                            trial_period_days?: number;
                                            usage_type?: string;
                                        } & {
                                            interval?: string;
                                            interval_count?: number;
                                            trial_period_days?: number;
                                            usage_type?: string;
                                        } & { [K_51 in Exclude<keyof I["stripe"]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["items"][number]["price"]["recurring"], keyof import("./stripe").StripeRecurring>]: never; };
                                    } & { [K_52 in Exclude<keyof I["stripe"]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["items"][number]["price"], keyof import("./stripe").StripePrice>]: never; };
                                } & { [K_53 in Exclude<keyof I["stripe"]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["items"][number], keyof import("./stripe").StripeSubscriptionItem>]: never; })[] & { [K_54 in Exclude<keyof I["stripe"]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["items"], keyof {
                                    id?: string;
                                    quantity?: string;
                                    subscription?: string;
                                    plan?: {
                                        status?: boolean;
                                        nickname?: string;
                                        product?: string;
                                        amount?: number;
                                        usage_type?: string;
                                    };
                                    price?: {
                                        nickname?: string;
                                        product?: string;
                                        active?: boolean;
                                        billing_scheme?: string;
                                        currency?: string;
                                        recurring?: {
                                            interval?: string;
                                            interval_count?: number;
                                            trial_period_days?: number;
                                            usage_type?: string;
                                        };
                                    };
                                }[]>]: never; };
                                default_tax_rates?: string[] & string[] & { [K_55 in Exclude<keyof I["stripe"]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["default_tax_rates"], keyof string[]>]: never; };
                            } & { [K_56 in Exclude<keyof I["stripe"]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number], keyof import("./stripe").StripeSubscription>]: never; })[] & { [K_57 in Exclude<keyof I["stripe"]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"], keyof {
                                address?: string;
                                balance?: number;
                                currency?: string;
                                subscriptions?: any[];
                                tax_ids?: {
                                    country?: string;
                                    customer?: string;
                                    type?: string;
                                    value?: string;
                                    verification?: {
                                        status?: string;
                                        verified_address?: string;
                                        verified_name?: string;
                                    };
                                }[];
                                items?: {
                                    id?: string;
                                    quantity?: string;
                                    subscription?: string;
                                    plan?: {
                                        status?: boolean;
                                        nickname?: string;
                                        product?: string;
                                        amount?: number;
                                        usage_type?: string;
                                    };
                                    price?: {
                                        nickname?: string;
                                        product?: string;
                                        active?: boolean;
                                        billing_scheme?: string;
                                        currency?: string;
                                        recurring?: {
                                            interval?: string;
                                            interval_count?: number;
                                            trial_period_days?: number;
                                            usage_type?: string;
                                        };
                                    };
                                }[];
                                default_tax_rates?: string[];
                            }[]>]: never; };
                            tax_ids?: {
                                country?: string;
                                customer?: string;
                                type?: string;
                                value?: string;
                                verification?: {
                                    status?: string;
                                    verified_address?: string;
                                    verified_name?: string;
                                };
                            }[] & ({
                                country?: string;
                                customer?: string;
                                type?: string;
                                value?: string;
                                verification?: {
                                    status?: string;
                                    verified_address?: string;
                                    verified_name?: string;
                                };
                            } & {
                                country?: string;
                                customer?: string;
                                type?: string;
                                value?: string;
                                verification?: {
                                    status?: string;
                                    verified_address?: string;
                                    verified_name?: string;
                                } & {
                                    status?: string;
                                    verified_address?: string;
                                    verified_name?: string;
                                } & { [K_58 in Exclude<keyof I["stripe"]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["tax_ids"][number]["verification"], keyof import("./stripe").StripeTaxVerification>]: never; };
                            } & { [K_59 in Exclude<keyof I["stripe"]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["tax_ids"][number], keyof import("./stripe").StripeTaxId>]: never; })[] & { [K_60 in Exclude<keyof I["stripe"]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["tax_ids"], keyof {
                                country?: string;
                                customer?: string;
                                type?: string;
                                value?: string;
                                verification?: {
                                    status?: string;
                                    verified_address?: string;
                                    verified_name?: string;
                                };
                            }[]>]: never; };
                            items?: {
                                id?: string;
                                quantity?: string;
                                subscription?: string;
                                plan?: {
                                    status?: boolean;
                                    nickname?: string;
                                    product?: string;
                                    amount?: number;
                                    usage_type?: string;
                                };
                                price?: {
                                    nickname?: string;
                                    product?: string;
                                    active?: boolean;
                                    billing_scheme?: string;
                                    currency?: string;
                                    recurring?: {
                                        interval?: string;
                                        interval_count?: number;
                                        trial_period_days?: number;
                                        usage_type?: string;
                                    };
                                };
                            }[] & ({
                                id?: string;
                                quantity?: string;
                                subscription?: string;
                                plan?: {
                                    status?: boolean;
                                    nickname?: string;
                                    product?: string;
                                    amount?: number;
                                    usage_type?: string;
                                };
                                price?: {
                                    nickname?: string;
                                    product?: string;
                                    active?: boolean;
                                    billing_scheme?: string;
                                    currency?: string;
                                    recurring?: {
                                        interval?: string;
                                        interval_count?: number;
                                        trial_period_days?: number;
                                        usage_type?: string;
                                    };
                                };
                            } & {
                                id?: string;
                                quantity?: string;
                                subscription?: string;
                                plan?: {
                                    status?: boolean;
                                    nickname?: string;
                                    product?: string;
                                    amount?: number;
                                    usage_type?: string;
                                } & {
                                    status?: boolean;
                                    nickname?: string;
                                    product?: string;
                                    amount?: number;
                                    usage_type?: string;
                                } & { [K_61 in Exclude<keyof I["stripe"]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["items"][number]["plan"], keyof import("./stripe").StripePlan>]: never; };
                                price?: {
                                    nickname?: string;
                                    product?: string;
                                    active?: boolean;
                                    billing_scheme?: string;
                                    currency?: string;
                                    recurring?: {
                                        interval?: string;
                                        interval_count?: number;
                                        trial_period_days?: number;
                                        usage_type?: string;
                                    };
                                } & {
                                    nickname?: string;
                                    product?: string;
                                    active?: boolean;
                                    billing_scheme?: string;
                                    currency?: string;
                                    recurring?: {
                                        interval?: string;
                                        interval_count?: number;
                                        trial_period_days?: number;
                                        usage_type?: string;
                                    } & {
                                        interval?: string;
                                        interval_count?: number;
                                        trial_period_days?: number;
                                        usage_type?: string;
                                    } & { [K_62 in Exclude<keyof I["stripe"]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["items"][number]["price"]["recurring"], keyof import("./stripe").StripeRecurring>]: never; };
                                } & { [K_63 in Exclude<keyof I["stripe"]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["items"][number]["price"], keyof import("./stripe").StripePrice>]: never; };
                            } & { [K_64 in Exclude<keyof I["stripe"]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["items"][number], keyof import("./stripe").StripeSubscriptionItem>]: never; })[] & { [K_65 in Exclude<keyof I["stripe"]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["items"], keyof {
                                id?: string;
                                quantity?: string;
                                subscription?: string;
                                plan?: {
                                    status?: boolean;
                                    nickname?: string;
                                    product?: string;
                                    amount?: number;
                                    usage_type?: string;
                                };
                                price?: {
                                    nickname?: string;
                                    product?: string;
                                    active?: boolean;
                                    billing_scheme?: string;
                                    currency?: string;
                                    recurring?: {
                                        interval?: string;
                                        interval_count?: number;
                                        trial_period_days?: number;
                                        usage_type?: string;
                                    };
                                };
                            }[]>]: never; };
                            default_tax_rates?: string[] & string[] & { [K_66 in Exclude<keyof I["stripe"]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["default_tax_rates"], keyof string[]>]: never; };
                        } & { [K_67 in Exclude<keyof I["stripe"]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number], keyof import("./stripe").StripeSubscription>]: never; })[] & { [K_68 in Exclude<keyof I["stripe"]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"], keyof {
                            address?: string;
                            balance?: number;
                            currency?: string;
                            subscriptions?: any[];
                            tax_ids?: {
                                country?: string;
                                customer?: string;
                                type?: string;
                                value?: string;
                                verification?: {
                                    status?: string;
                                    verified_address?: string;
                                    verified_name?: string;
                                };
                            }[];
                            items?: {
                                id?: string;
                                quantity?: string;
                                subscription?: string;
                                plan?: {
                                    status?: boolean;
                                    nickname?: string;
                                    product?: string;
                                    amount?: number;
                                    usage_type?: string;
                                };
                                price?: {
                                    nickname?: string;
                                    product?: string;
                                    active?: boolean;
                                    billing_scheme?: string;
                                    currency?: string;
                                    recurring?: {
                                        interval?: string;
                                        interval_count?: number;
                                        trial_period_days?: number;
                                        usage_type?: string;
                                    };
                                };
                            }[];
                            default_tax_rates?: string[];
                        }[]>]: never; };
                        tax_ids?: {
                            country?: string;
                            customer?: string;
                            type?: string;
                            value?: string;
                            verification?: {
                                status?: string;
                                verified_address?: string;
                                verified_name?: string;
                            };
                        }[] & ({
                            country?: string;
                            customer?: string;
                            type?: string;
                            value?: string;
                            verification?: {
                                status?: string;
                                verified_address?: string;
                                verified_name?: string;
                            };
                        } & {
                            country?: string;
                            customer?: string;
                            type?: string;
                            value?: string;
                            verification?: {
                                status?: string;
                                verified_address?: string;
                                verified_name?: string;
                            } & {
                                status?: string;
                                verified_address?: string;
                                verified_name?: string;
                            } & { [K_69 in Exclude<keyof I["stripe"]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["tax_ids"][number]["verification"], keyof import("./stripe").StripeTaxVerification>]: never; };
                        } & { [K_70 in Exclude<keyof I["stripe"]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["tax_ids"][number], keyof import("./stripe").StripeTaxId>]: never; })[] & { [K_71 in Exclude<keyof I["stripe"]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["tax_ids"], keyof {
                            country?: string;
                            customer?: string;
                            type?: string;
                            value?: string;
                            verification?: {
                                status?: string;
                                verified_address?: string;
                                verified_name?: string;
                            };
                        }[]>]: never; };
                        items?: {
                            id?: string;
                            quantity?: string;
                            subscription?: string;
                            plan?: {
                                status?: boolean;
                                nickname?: string;
                                product?: string;
                                amount?: number;
                                usage_type?: string;
                            };
                            price?: {
                                nickname?: string;
                                product?: string;
                                active?: boolean;
                                billing_scheme?: string;
                                currency?: string;
                                recurring?: {
                                    interval?: string;
                                    interval_count?: number;
                                    trial_period_days?: number;
                                    usage_type?: string;
                                };
                            };
                        }[] & ({
                            id?: string;
                            quantity?: string;
                            subscription?: string;
                            plan?: {
                                status?: boolean;
                                nickname?: string;
                                product?: string;
                                amount?: number;
                                usage_type?: string;
                            };
                            price?: {
                                nickname?: string;
                                product?: string;
                                active?: boolean;
                                billing_scheme?: string;
                                currency?: string;
                                recurring?: {
                                    interval?: string;
                                    interval_count?: number;
                                    trial_period_days?: number;
                                    usage_type?: string;
                                };
                            };
                        } & {
                            id?: string;
                            quantity?: string;
                            subscription?: string;
                            plan?: {
                                status?: boolean;
                                nickname?: string;
                                product?: string;
                                amount?: number;
                                usage_type?: string;
                            } & {
                                status?: boolean;
                                nickname?: string;
                                product?: string;
                                amount?: number;
                                usage_type?: string;
                            } & { [K_72 in Exclude<keyof I["stripe"]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["items"][number]["plan"], keyof import("./stripe").StripePlan>]: never; };
                            price?: {
                                nickname?: string;
                                product?: string;
                                active?: boolean;
                                billing_scheme?: string;
                                currency?: string;
                                recurring?: {
                                    interval?: string;
                                    interval_count?: number;
                                    trial_period_days?: number;
                                    usage_type?: string;
                                };
                            } & {
                                nickname?: string;
                                product?: string;
                                active?: boolean;
                                billing_scheme?: string;
                                currency?: string;
                                recurring?: {
                                    interval?: string;
                                    interval_count?: number;
                                    trial_period_days?: number;
                                    usage_type?: string;
                                } & {
                                    interval?: string;
                                    interval_count?: number;
                                    trial_period_days?: number;
                                    usage_type?: string;
                                } & { [K_73 in Exclude<keyof I["stripe"]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["items"][number]["price"]["recurring"], keyof import("./stripe").StripeRecurring>]: never; };
                            } & { [K_74 in Exclude<keyof I["stripe"]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["items"][number]["price"], keyof import("./stripe").StripePrice>]: never; };
                        } & { [K_75 in Exclude<keyof I["stripe"]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["items"][number], keyof import("./stripe").StripeSubscriptionItem>]: never; })[] & { [K_76 in Exclude<keyof I["stripe"]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["items"], keyof {
                            id?: string;
                            quantity?: string;
                            subscription?: string;
                            plan?: {
                                status?: boolean;
                                nickname?: string;
                                product?: string;
                                amount?: number;
                                usage_type?: string;
                            };
                            price?: {
                                nickname?: string;
                                product?: string;
                                active?: boolean;
                                billing_scheme?: string;
                                currency?: string;
                                recurring?: {
                                    interval?: string;
                                    interval_count?: number;
                                    trial_period_days?: number;
                                    usage_type?: string;
                                };
                            };
                        }[]>]: never; };
                        default_tax_rates?: string[] & string[] & { [K_77 in Exclude<keyof I["stripe"]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["default_tax_rates"], keyof string[]>]: never; };
                    } & { [K_78 in Exclude<keyof I["stripe"]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number], keyof import("./stripe").StripeSubscription>]: never; })[] & { [K_79 in Exclude<keyof I["stripe"]["subscriptions"][number]["subscriptions"][number]["subscriptions"], keyof {
                        address?: string;
                        balance?: number;
                        currency?: string;
                        subscriptions?: any[];
                        tax_ids?: {
                            country?: string;
                            customer?: string;
                            type?: string;
                            value?: string;
                            verification?: {
                                status?: string;
                                verified_address?: string;
                                verified_name?: string;
                            };
                        }[];
                        items?: {
                            id?: string;
                            quantity?: string;
                            subscription?: string;
                            plan?: {
                                status?: boolean;
                                nickname?: string;
                                product?: string;
                                amount?: number;
                                usage_type?: string;
                            };
                            price?: {
                                nickname?: string;
                                product?: string;
                                active?: boolean;
                                billing_scheme?: string;
                                currency?: string;
                                recurring?: {
                                    interval?: string;
                                    interval_count?: number;
                                    trial_period_days?: number;
                                    usage_type?: string;
                                };
                            };
                        }[];
                        default_tax_rates?: string[];
                    }[]>]: never; };
                    tax_ids?: {
                        country?: string;
                        customer?: string;
                        type?: string;
                        value?: string;
                        verification?: {
                            status?: string;
                            verified_address?: string;
                            verified_name?: string;
                        };
                    }[] & ({
                        country?: string;
                        customer?: string;
                        type?: string;
                        value?: string;
                        verification?: {
                            status?: string;
                            verified_address?: string;
                            verified_name?: string;
                        };
                    } & {
                        country?: string;
                        customer?: string;
                        type?: string;
                        value?: string;
                        verification?: {
                            status?: string;
                            verified_address?: string;
                            verified_name?: string;
                        } & {
                            status?: string;
                            verified_address?: string;
                            verified_name?: string;
                        } & { [K_80 in Exclude<keyof I["stripe"]["subscriptions"][number]["subscriptions"][number]["tax_ids"][number]["verification"], keyof import("./stripe").StripeTaxVerification>]: never; };
                    } & { [K_81 in Exclude<keyof I["stripe"]["subscriptions"][number]["subscriptions"][number]["tax_ids"][number], keyof import("./stripe").StripeTaxId>]: never; })[] & { [K_82 in Exclude<keyof I["stripe"]["subscriptions"][number]["subscriptions"][number]["tax_ids"], keyof {
                        country?: string;
                        customer?: string;
                        type?: string;
                        value?: string;
                        verification?: {
                            status?: string;
                            verified_address?: string;
                            verified_name?: string;
                        };
                    }[]>]: never; };
                    items?: {
                        id?: string;
                        quantity?: string;
                        subscription?: string;
                        plan?: {
                            status?: boolean;
                            nickname?: string;
                            product?: string;
                            amount?: number;
                            usage_type?: string;
                        };
                        price?: {
                            nickname?: string;
                            product?: string;
                            active?: boolean;
                            billing_scheme?: string;
                            currency?: string;
                            recurring?: {
                                interval?: string;
                                interval_count?: number;
                                trial_period_days?: number;
                                usage_type?: string;
                            };
                        };
                    }[] & ({
                        id?: string;
                        quantity?: string;
                        subscription?: string;
                        plan?: {
                            status?: boolean;
                            nickname?: string;
                            product?: string;
                            amount?: number;
                            usage_type?: string;
                        };
                        price?: {
                            nickname?: string;
                            product?: string;
                            active?: boolean;
                            billing_scheme?: string;
                            currency?: string;
                            recurring?: {
                                interval?: string;
                                interval_count?: number;
                                trial_period_days?: number;
                                usage_type?: string;
                            };
                        };
                    } & {
                        id?: string;
                        quantity?: string;
                        subscription?: string;
                        plan?: {
                            status?: boolean;
                            nickname?: string;
                            product?: string;
                            amount?: number;
                            usage_type?: string;
                        } & {
                            status?: boolean;
                            nickname?: string;
                            product?: string;
                            amount?: number;
                            usage_type?: string;
                        } & { [K_83 in Exclude<keyof I["stripe"]["subscriptions"][number]["subscriptions"][number]["items"][number]["plan"], keyof import("./stripe").StripePlan>]: never; };
                        price?: {
                            nickname?: string;
                            product?: string;
                            active?: boolean;
                            billing_scheme?: string;
                            currency?: string;
                            recurring?: {
                                interval?: string;
                                interval_count?: number;
                                trial_period_days?: number;
                                usage_type?: string;
                            };
                        } & {
                            nickname?: string;
                            product?: string;
                            active?: boolean;
                            billing_scheme?: string;
                            currency?: string;
                            recurring?: {
                                interval?: string;
                                interval_count?: number;
                                trial_period_days?: number;
                                usage_type?: string;
                            } & {
                                interval?: string;
                                interval_count?: number;
                                trial_period_days?: number;
                                usage_type?: string;
                            } & { [K_84 in Exclude<keyof I["stripe"]["subscriptions"][number]["subscriptions"][number]["items"][number]["price"]["recurring"], keyof import("./stripe").StripeRecurring>]: never; };
                        } & { [K_85 in Exclude<keyof I["stripe"]["subscriptions"][number]["subscriptions"][number]["items"][number]["price"], keyof import("./stripe").StripePrice>]: never; };
                    } & { [K_86 in Exclude<keyof I["stripe"]["subscriptions"][number]["subscriptions"][number]["items"][number], keyof import("./stripe").StripeSubscriptionItem>]: never; })[] & { [K_87 in Exclude<keyof I["stripe"]["subscriptions"][number]["subscriptions"][number]["items"], keyof {
                        id?: string;
                        quantity?: string;
                        subscription?: string;
                        plan?: {
                            status?: boolean;
                            nickname?: string;
                            product?: string;
                            amount?: number;
                            usage_type?: string;
                        };
                        price?: {
                            nickname?: string;
                            product?: string;
                            active?: boolean;
                            billing_scheme?: string;
                            currency?: string;
                            recurring?: {
                                interval?: string;
                                interval_count?: number;
                                trial_period_days?: number;
                                usage_type?: string;
                            };
                        };
                    }[]>]: never; };
                    default_tax_rates?: string[] & string[] & { [K_88 in Exclude<keyof I["stripe"]["subscriptions"][number]["subscriptions"][number]["default_tax_rates"], keyof string[]>]: never; };
                } & { [K_89 in Exclude<keyof I["stripe"]["subscriptions"][number]["subscriptions"][number], keyof import("./stripe").StripeSubscription>]: never; })[] & { [K_90 in Exclude<keyof I["stripe"]["subscriptions"][number]["subscriptions"], keyof {
                    address?: string;
                    balance?: number;
                    currency?: string;
                    subscriptions?: any[];
                    tax_ids?: {
                        country?: string;
                        customer?: string;
                        type?: string;
                        value?: string;
                        verification?: {
                            status?: string;
                            verified_address?: string;
                            verified_name?: string;
                        };
                    }[];
                    items?: {
                        id?: string;
                        quantity?: string;
                        subscription?: string;
                        plan?: {
                            status?: boolean;
                            nickname?: string;
                            product?: string;
                            amount?: number;
                            usage_type?: string;
                        };
                        price?: {
                            nickname?: string;
                            product?: string;
                            active?: boolean;
                            billing_scheme?: string;
                            currency?: string;
                            recurring?: {
                                interval?: string;
                                interval_count?: number;
                                trial_period_days?: number;
                                usage_type?: string;
                            };
                        };
                    }[];
                    default_tax_rates?: string[];
                }[]>]: never; };
                tax_ids?: {
                    country?: string;
                    customer?: string;
                    type?: string;
                    value?: string;
                    verification?: {
                        status?: string;
                        verified_address?: string;
                        verified_name?: string;
                    };
                }[] & ({
                    country?: string;
                    customer?: string;
                    type?: string;
                    value?: string;
                    verification?: {
                        status?: string;
                        verified_address?: string;
                        verified_name?: string;
                    };
                } & {
                    country?: string;
                    customer?: string;
                    type?: string;
                    value?: string;
                    verification?: {
                        status?: string;
                        verified_address?: string;
                        verified_name?: string;
                    } & {
                        status?: string;
                        verified_address?: string;
                        verified_name?: string;
                    } & { [K_91 in Exclude<keyof I["stripe"]["subscriptions"][number]["tax_ids"][number]["verification"], keyof import("./stripe").StripeTaxVerification>]: never; };
                } & { [K_92 in Exclude<keyof I["stripe"]["subscriptions"][number]["tax_ids"][number], keyof import("./stripe").StripeTaxId>]: never; })[] & { [K_93 in Exclude<keyof I["stripe"]["subscriptions"][number]["tax_ids"], keyof {
                    country?: string;
                    customer?: string;
                    type?: string;
                    value?: string;
                    verification?: {
                        status?: string;
                        verified_address?: string;
                        verified_name?: string;
                    };
                }[]>]: never; };
                items?: {
                    id?: string;
                    quantity?: string;
                    subscription?: string;
                    plan?: {
                        status?: boolean;
                        nickname?: string;
                        product?: string;
                        amount?: number;
                        usage_type?: string;
                    };
                    price?: {
                        nickname?: string;
                        product?: string;
                        active?: boolean;
                        billing_scheme?: string;
                        currency?: string;
                        recurring?: {
                            interval?: string;
                            interval_count?: number;
                            trial_period_days?: number;
                            usage_type?: string;
                        };
                    };
                }[] & ({
                    id?: string;
                    quantity?: string;
                    subscription?: string;
                    plan?: {
                        status?: boolean;
                        nickname?: string;
                        product?: string;
                        amount?: number;
                        usage_type?: string;
                    };
                    price?: {
                        nickname?: string;
                        product?: string;
                        active?: boolean;
                        billing_scheme?: string;
                        currency?: string;
                        recurring?: {
                            interval?: string;
                            interval_count?: number;
                            trial_period_days?: number;
                            usage_type?: string;
                        };
                    };
                } & {
                    id?: string;
                    quantity?: string;
                    subscription?: string;
                    plan?: {
                        status?: boolean;
                        nickname?: string;
                        product?: string;
                        amount?: number;
                        usage_type?: string;
                    } & {
                        status?: boolean;
                        nickname?: string;
                        product?: string;
                        amount?: number;
                        usage_type?: string;
                    } & { [K_94 in Exclude<keyof I["stripe"]["subscriptions"][number]["items"][number]["plan"], keyof import("./stripe").StripePlan>]: never; };
                    price?: {
                        nickname?: string;
                        product?: string;
                        active?: boolean;
                        billing_scheme?: string;
                        currency?: string;
                        recurring?: {
                            interval?: string;
                            interval_count?: number;
                            trial_period_days?: number;
                            usage_type?: string;
                        };
                    } & {
                        nickname?: string;
                        product?: string;
                        active?: boolean;
                        billing_scheme?: string;
                        currency?: string;
                        recurring?: {
                            interval?: string;
                            interval_count?: number;
                            trial_period_days?: number;
                            usage_type?: string;
                        } & {
                            interval?: string;
                            interval_count?: number;
                            trial_period_days?: number;
                            usage_type?: string;
                        } & { [K_95 in Exclude<keyof I["stripe"]["subscriptions"][number]["items"][number]["price"]["recurring"], keyof import("./stripe").StripeRecurring>]: never; };
                    } & { [K_96 in Exclude<keyof I["stripe"]["subscriptions"][number]["items"][number]["price"], keyof import("./stripe").StripePrice>]: never; };
                } & { [K_97 in Exclude<keyof I["stripe"]["subscriptions"][number]["items"][number], keyof import("./stripe").StripeSubscriptionItem>]: never; })[] & { [K_98 in Exclude<keyof I["stripe"]["subscriptions"][number]["items"], keyof {
                    id?: string;
                    quantity?: string;
                    subscription?: string;
                    plan?: {
                        status?: boolean;
                        nickname?: string;
                        product?: string;
                        amount?: number;
                        usage_type?: string;
                    };
                    price?: {
                        nickname?: string;
                        product?: string;
                        active?: boolean;
                        billing_scheme?: string;
                        currency?: string;
                        recurring?: {
                            interval?: string;
                            interval_count?: number;
                            trial_period_days?: number;
                            usage_type?: string;
                        };
                    };
                }[]>]: never; };
                default_tax_rates?: string[] & string[] & { [K_99 in Exclude<keyof I["stripe"]["subscriptions"][number]["default_tax_rates"], keyof string[]>]: never; };
            } & { [K_100 in Exclude<keyof I["stripe"]["subscriptions"][number], keyof import("./stripe").StripeSubscription>]: never; })[] & { [K_101 in Exclude<keyof I["stripe"]["subscriptions"], keyof {
                address?: string;
                balance?: number;
                currency?: string;
                subscriptions?: any[];
                tax_ids?: {
                    country?: string;
                    customer?: string;
                    type?: string;
                    value?: string;
                    verification?: {
                        status?: string;
                        verified_address?: string;
                        verified_name?: string;
                    };
                }[];
                items?: {
                    id?: string;
                    quantity?: string;
                    subscription?: string;
                    plan?: {
                        status?: boolean;
                        nickname?: string;
                        product?: string;
                        amount?: number;
                        usage_type?: string;
                    };
                    price?: {
                        nickname?: string;
                        product?: string;
                        active?: boolean;
                        billing_scheme?: string;
                        currency?: string;
                        recurring?: {
                            interval?: string;
                            interval_count?: number;
                            trial_period_days?: number;
                            usage_type?: string;
                        };
                    };
                }[];
                default_tax_rates?: string[];
            }[]>]: never; };
            discount?: {
                subscription?: string;
                start?: number;
                customer?: string;
                coupon?: {
                    duration?: string;
                    duration_in_months?: number;
                    name?: string;
                };
            } & {
                subscription?: string;
                start?: number;
                customer?: string;
                coupon?: {
                    duration?: string;
                    duration_in_months?: number;
                    name?: string;
                } & {
                    duration?: string;
                    duration_in_months?: number;
                    name?: string;
                } & { [K_102 in Exclude<keyof I["stripe"]["discount"]["coupon"], keyof import("./stripe").StripeCoupon>]: never; };
            } & { [K_103 in Exclude<keyof I["stripe"]["discount"], keyof import("./stripe").StripeCustomerDiscount>]: never; };
        } & { [K_104 in Exclude<keyof I["stripe"], keyof StripeCustomer>]: never; };
        ensureas?: string;
    } & { [K_105 in Exclude<keyof I, keyof EnsureCustomerRequest>]: never; }>(base?: I): EnsureCustomerRequest;
    fromPartial<I_1 extends {
        customer?: {
            _id?: string;
            _type?: string;
            stripeid?: string;
            userid?: string;
            name?: string;
            country?: string;
            email?: string;
            address?: string;
            vattype?: string;
            vatnumber?: string;
            taxrate?: string;
            tax?: number;
            coupon?: string;
            hascard?: boolean;
            memory?: string;
            openflowuserplan?: string;
            supportplan?: string;
            supporthourplan?: string;
            subscriptionid?: string;
            admins?: string;
            users?: string;
            customattr1?: string;
            customattr2?: string;
            customattr3?: string;
            customattr4?: string;
            customattr5?: string;
            domains?: string[];
            dbusage?: number;
            dblocked?: boolean;
        };
        stripe?: {
            address?: {
                line1?: string;
                line2?: string;
                postal_code?: string;
                city?: string;
                state?: string;
                country?: string;
            };
            description?: string;
            name?: string;
            email?: string;
            tax_ids?: {
                country?: string;
                customer?: string;
                type?: string;
                value?: string;
                verification?: {
                    status?: string;
                    verified_address?: string;
                    verified_name?: string;
                };
            }[];
            subscriptions?: {
                address?: string;
                balance?: number;
                currency?: string;
                subscriptions?: any[];
                tax_ids?: {
                    country?: string;
                    customer?: string;
                    type?: string;
                    value?: string;
                    verification?: {
                        status?: string;
                        verified_address?: string;
                        verified_name?: string;
                    };
                }[];
                items?: {
                    id?: string;
                    quantity?: string;
                    subscription?: string;
                    plan?: {
                        status?: boolean;
                        nickname?: string;
                        product?: string;
                        amount?: number;
                        usage_type?: string;
                    };
                    price?: {
                        nickname?: string;
                        product?: string;
                        active?: boolean;
                        billing_scheme?: string;
                        currency?: string;
                        recurring?: {
                            interval?: string;
                            interval_count?: number;
                            trial_period_days?: number;
                            usage_type?: string;
                        };
                    };
                }[];
                default_tax_rates?: string[];
            }[];
            discount?: {
                subscription?: string;
                start?: number;
                customer?: string;
                coupon?: {
                    duration?: string;
                    duration_in_months?: number;
                    name?: string;
                };
            };
        };
        ensureas?: string;
    } & {
        customer?: {
            _id?: string;
            _type?: string;
            stripeid?: string;
            userid?: string;
            name?: string;
            country?: string;
            email?: string;
            address?: string;
            vattype?: string;
            vatnumber?: string;
            taxrate?: string;
            tax?: number;
            coupon?: string;
            hascard?: boolean;
            memory?: string;
            openflowuserplan?: string;
            supportplan?: string;
            supporthourplan?: string;
            subscriptionid?: string;
            admins?: string;
            users?: string;
            customattr1?: string;
            customattr2?: string;
            customattr3?: string;
            customattr4?: string;
            customattr5?: string;
            domains?: string[];
            dbusage?: number;
            dblocked?: boolean;
        } & {
            _id?: string;
            _type?: string;
            stripeid?: string;
            userid?: string;
            name?: string;
            country?: string;
            email?: string;
            address?: string;
            vattype?: string;
            vatnumber?: string;
            taxrate?: string;
            tax?: number;
            coupon?: string;
            hascard?: boolean;
            memory?: string;
            openflowuserplan?: string;
            supportplan?: string;
            supporthourplan?: string;
            subscriptionid?: string;
            admins?: string;
            users?: string;
            customattr1?: string;
            customattr2?: string;
            customattr3?: string;
            customattr4?: string;
            customattr5?: string;
            domains?: string[] & string[] & { [K_106 in Exclude<keyof I_1["customer"]["domains"], keyof string[]>]: never; };
            dbusage?: number;
            dblocked?: boolean;
        } & { [K_107 in Exclude<keyof I_1["customer"], keyof Customer>]: never; };
        stripe?: {
            address?: {
                line1?: string;
                line2?: string;
                postal_code?: string;
                city?: string;
                state?: string;
                country?: string;
            };
            description?: string;
            name?: string;
            email?: string;
            tax_ids?: {
                country?: string;
                customer?: string;
                type?: string;
                value?: string;
                verification?: {
                    status?: string;
                    verified_address?: string;
                    verified_name?: string;
                };
            }[];
            subscriptions?: {
                address?: string;
                balance?: number;
                currency?: string;
                subscriptions?: any[];
                tax_ids?: {
                    country?: string;
                    customer?: string;
                    type?: string;
                    value?: string;
                    verification?: {
                        status?: string;
                        verified_address?: string;
                        verified_name?: string;
                    };
                }[];
                items?: {
                    id?: string;
                    quantity?: string;
                    subscription?: string;
                    plan?: {
                        status?: boolean;
                        nickname?: string;
                        product?: string;
                        amount?: number;
                        usage_type?: string;
                    };
                    price?: {
                        nickname?: string;
                        product?: string;
                        active?: boolean;
                        billing_scheme?: string;
                        currency?: string;
                        recurring?: {
                            interval?: string;
                            interval_count?: number;
                            trial_period_days?: number;
                            usage_type?: string;
                        };
                    };
                }[];
                default_tax_rates?: string[];
            }[];
            discount?: {
                subscription?: string;
                start?: number;
                customer?: string;
                coupon?: {
                    duration?: string;
                    duration_in_months?: number;
                    name?: string;
                };
            };
        } & {
            address?: {
                line1?: string;
                line2?: string;
                postal_code?: string;
                city?: string;
                state?: string;
                country?: string;
            } & {
                line1?: string;
                line2?: string;
                postal_code?: string;
                city?: string;
                state?: string;
                country?: string;
            } & { [K_108 in Exclude<keyof I_1["stripe"]["address"], keyof import("./stripe").StripeCustomerAddress>]: never; };
            description?: string;
            name?: string;
            email?: string;
            tax_ids?: {
                country?: string;
                customer?: string;
                type?: string;
                value?: string;
                verification?: {
                    status?: string;
                    verified_address?: string;
                    verified_name?: string;
                };
            }[] & ({
                country?: string;
                customer?: string;
                type?: string;
                value?: string;
                verification?: {
                    status?: string;
                    verified_address?: string;
                    verified_name?: string;
                };
            } & {
                country?: string;
                customer?: string;
                type?: string;
                value?: string;
                verification?: {
                    status?: string;
                    verified_address?: string;
                    verified_name?: string;
                } & {
                    status?: string;
                    verified_address?: string;
                    verified_name?: string;
                } & { [K_109 in Exclude<keyof I_1["stripe"]["tax_ids"][number]["verification"], keyof import("./stripe").StripeTaxVerification>]: never; };
            } & { [K_110 in Exclude<keyof I_1["stripe"]["tax_ids"][number], keyof import("./stripe").StripeTaxId>]: never; })[] & { [K_111 in Exclude<keyof I_1["stripe"]["tax_ids"], keyof {
                country?: string;
                customer?: string;
                type?: string;
                value?: string;
                verification?: {
                    status?: string;
                    verified_address?: string;
                    verified_name?: string;
                };
            }[]>]: never; };
            subscriptions?: {
                address?: string;
                balance?: number;
                currency?: string;
                subscriptions?: any[];
                tax_ids?: {
                    country?: string;
                    customer?: string;
                    type?: string;
                    value?: string;
                    verification?: {
                        status?: string;
                        verified_address?: string;
                        verified_name?: string;
                    };
                }[];
                items?: {
                    id?: string;
                    quantity?: string;
                    subscription?: string;
                    plan?: {
                        status?: boolean;
                        nickname?: string;
                        product?: string;
                        amount?: number;
                        usage_type?: string;
                    };
                    price?: {
                        nickname?: string;
                        product?: string;
                        active?: boolean;
                        billing_scheme?: string;
                        currency?: string;
                        recurring?: {
                            interval?: string;
                            interval_count?: number;
                            trial_period_days?: number;
                            usage_type?: string;
                        };
                    };
                }[];
                default_tax_rates?: string[];
            }[] & ({
                address?: string;
                balance?: number;
                currency?: string;
                subscriptions?: any[];
                tax_ids?: {
                    country?: string;
                    customer?: string;
                    type?: string;
                    value?: string;
                    verification?: {
                        status?: string;
                        verified_address?: string;
                        verified_name?: string;
                    };
                }[];
                items?: {
                    id?: string;
                    quantity?: string;
                    subscription?: string;
                    plan?: {
                        status?: boolean;
                        nickname?: string;
                        product?: string;
                        amount?: number;
                        usage_type?: string;
                    };
                    price?: {
                        nickname?: string;
                        product?: string;
                        active?: boolean;
                        billing_scheme?: string;
                        currency?: string;
                        recurring?: {
                            interval?: string;
                            interval_count?: number;
                            trial_period_days?: number;
                            usage_type?: string;
                        };
                    };
                }[];
                default_tax_rates?: string[];
            } & {
                address?: string;
                balance?: number;
                currency?: string;
                subscriptions?: {
                    address?: string;
                    balance?: number;
                    currency?: string;
                    subscriptions?: any[];
                    tax_ids?: {
                        country?: string;
                        customer?: string;
                        type?: string;
                        value?: string;
                        verification?: {
                            status?: string;
                            verified_address?: string;
                            verified_name?: string;
                        };
                    }[];
                    items?: {
                        id?: string;
                        quantity?: string;
                        subscription?: string;
                        plan?: {
                            status?: boolean;
                            nickname?: string;
                            product?: string;
                            amount?: number;
                            usage_type?: string;
                        };
                        price?: {
                            nickname?: string;
                            product?: string;
                            active?: boolean;
                            billing_scheme?: string;
                            currency?: string;
                            recurring?: {
                                interval?: string;
                                interval_count?: number;
                                trial_period_days?: number;
                                usage_type?: string;
                            };
                        };
                    }[];
                    default_tax_rates?: string[];
                }[] & ({
                    address?: string;
                    balance?: number;
                    currency?: string;
                    subscriptions?: any[];
                    tax_ids?: {
                        country?: string;
                        customer?: string;
                        type?: string;
                        value?: string;
                        verification?: {
                            status?: string;
                            verified_address?: string;
                            verified_name?: string;
                        };
                    }[];
                    items?: {
                        id?: string;
                        quantity?: string;
                        subscription?: string;
                        plan?: {
                            status?: boolean;
                            nickname?: string;
                            product?: string;
                            amount?: number;
                            usage_type?: string;
                        };
                        price?: {
                            nickname?: string;
                            product?: string;
                            active?: boolean;
                            billing_scheme?: string;
                            currency?: string;
                            recurring?: {
                                interval?: string;
                                interval_count?: number;
                                trial_period_days?: number;
                                usage_type?: string;
                            };
                        };
                    }[];
                    default_tax_rates?: string[];
                } & {
                    address?: string;
                    balance?: number;
                    currency?: string;
                    subscriptions?: {
                        address?: string;
                        balance?: number;
                        currency?: string;
                        subscriptions?: any[];
                        tax_ids?: {
                            country?: string;
                            customer?: string;
                            type?: string;
                            value?: string;
                            verification?: {
                                status?: string;
                                verified_address?: string;
                                verified_name?: string;
                            };
                        }[];
                        items?: {
                            id?: string;
                            quantity?: string;
                            subscription?: string;
                            plan?: {
                                status?: boolean;
                                nickname?: string;
                                product?: string;
                                amount?: number;
                                usage_type?: string;
                            };
                            price?: {
                                nickname?: string;
                                product?: string;
                                active?: boolean;
                                billing_scheme?: string;
                                currency?: string;
                                recurring?: {
                                    interval?: string;
                                    interval_count?: number;
                                    trial_period_days?: number;
                                    usage_type?: string;
                                };
                            };
                        }[];
                        default_tax_rates?: string[];
                    }[] & ({
                        address?: string;
                        balance?: number;
                        currency?: string;
                        subscriptions?: any[];
                        tax_ids?: {
                            country?: string;
                            customer?: string;
                            type?: string;
                            value?: string;
                            verification?: {
                                status?: string;
                                verified_address?: string;
                                verified_name?: string;
                            };
                        }[];
                        items?: {
                            id?: string;
                            quantity?: string;
                            subscription?: string;
                            plan?: {
                                status?: boolean;
                                nickname?: string;
                                product?: string;
                                amount?: number;
                                usage_type?: string;
                            };
                            price?: {
                                nickname?: string;
                                product?: string;
                                active?: boolean;
                                billing_scheme?: string;
                                currency?: string;
                                recurring?: {
                                    interval?: string;
                                    interval_count?: number;
                                    trial_period_days?: number;
                                    usage_type?: string;
                                };
                            };
                        }[];
                        default_tax_rates?: string[];
                    } & {
                        address?: string;
                        balance?: number;
                        currency?: string;
                        subscriptions?: {
                            address?: string;
                            balance?: number;
                            currency?: string;
                            subscriptions?: any[];
                            tax_ids?: {
                                country?: string;
                                customer?: string;
                                type?: string;
                                value?: string;
                                verification?: {
                                    status?: string;
                                    verified_address?: string;
                                    verified_name?: string;
                                };
                            }[];
                            items?: {
                                id?: string;
                                quantity?: string;
                                subscription?: string;
                                plan?: {
                                    status?: boolean;
                                    nickname?: string;
                                    product?: string;
                                    amount?: number;
                                    usage_type?: string;
                                };
                                price?: {
                                    nickname?: string;
                                    product?: string;
                                    active?: boolean;
                                    billing_scheme?: string;
                                    currency?: string;
                                    recurring?: {
                                        interval?: string;
                                        interval_count?: number;
                                        trial_period_days?: number;
                                        usage_type?: string;
                                    };
                                };
                            }[];
                            default_tax_rates?: string[];
                        }[] & ({
                            address?: string;
                            balance?: number;
                            currency?: string;
                            subscriptions?: any[];
                            tax_ids?: {
                                country?: string;
                                customer?: string;
                                type?: string;
                                value?: string;
                                verification?: {
                                    status?: string;
                                    verified_address?: string;
                                    verified_name?: string;
                                };
                            }[];
                            items?: {
                                id?: string;
                                quantity?: string;
                                subscription?: string;
                                plan?: {
                                    status?: boolean;
                                    nickname?: string;
                                    product?: string;
                                    amount?: number;
                                    usage_type?: string;
                                };
                                price?: {
                                    nickname?: string;
                                    product?: string;
                                    active?: boolean;
                                    billing_scheme?: string;
                                    currency?: string;
                                    recurring?: {
                                        interval?: string;
                                        interval_count?: number;
                                        trial_period_days?: number;
                                        usage_type?: string;
                                    };
                                };
                            }[];
                            default_tax_rates?: string[];
                        } & {
                            address?: string;
                            balance?: number;
                            currency?: string;
                            subscriptions?: {
                                address?: string;
                                balance?: number;
                                currency?: string;
                                subscriptions?: any[];
                                tax_ids?: {
                                    country?: string;
                                    customer?: string;
                                    type?: string;
                                    value?: string;
                                    verification?: {
                                        status?: string;
                                        verified_address?: string;
                                        verified_name?: string;
                                    };
                                }[];
                                items?: {
                                    id?: string;
                                    quantity?: string;
                                    subscription?: string;
                                    plan?: {
                                        status?: boolean;
                                        nickname?: string;
                                        product?: string;
                                        amount?: number;
                                        usage_type?: string;
                                    };
                                    price?: {
                                        nickname?: string;
                                        product?: string;
                                        active?: boolean;
                                        billing_scheme?: string;
                                        currency?: string;
                                        recurring?: {
                                            interval?: string;
                                            interval_count?: number;
                                            trial_period_days?: number;
                                            usage_type?: string;
                                        };
                                    };
                                }[];
                                default_tax_rates?: string[];
                            }[] & ({
                                address?: string;
                                balance?: number;
                                currency?: string;
                                subscriptions?: any[];
                                tax_ids?: {
                                    country?: string;
                                    customer?: string;
                                    type?: string;
                                    value?: string;
                                    verification?: {
                                        status?: string;
                                        verified_address?: string;
                                        verified_name?: string;
                                    };
                                }[];
                                items?: {
                                    id?: string;
                                    quantity?: string;
                                    subscription?: string;
                                    plan?: {
                                        status?: boolean;
                                        nickname?: string;
                                        product?: string;
                                        amount?: number;
                                        usage_type?: string;
                                    };
                                    price?: {
                                        nickname?: string;
                                        product?: string;
                                        active?: boolean;
                                        billing_scheme?: string;
                                        currency?: string;
                                        recurring?: {
                                            interval?: string;
                                            interval_count?: number;
                                            trial_period_days?: number;
                                            usage_type?: string;
                                        };
                                    };
                                }[];
                                default_tax_rates?: string[];
                            } & {
                                address?: string;
                                balance?: number;
                                currency?: string;
                                subscriptions?: {
                                    address?: string;
                                    balance?: number;
                                    currency?: string;
                                    subscriptions?: any[];
                                    tax_ids?: {
                                        country?: string;
                                        customer?: string;
                                        type?: string;
                                        value?: string;
                                        verification?: {
                                            status?: string;
                                            verified_address?: string;
                                            verified_name?: string;
                                        };
                                    }[];
                                    items?: {
                                        id?: string;
                                        quantity?: string;
                                        subscription?: string;
                                        plan?: {
                                            status?: boolean;
                                            nickname?: string;
                                            product?: string;
                                            amount?: number;
                                            usage_type?: string;
                                        };
                                        price?: {
                                            nickname?: string;
                                            product?: string;
                                            active?: boolean;
                                            billing_scheme?: string;
                                            currency?: string;
                                            recurring?: {
                                                interval?: string;
                                                interval_count?: number;
                                                trial_period_days?: number;
                                                usage_type?: string;
                                            };
                                        };
                                    }[];
                                    default_tax_rates?: string[];
                                }[] & ({
                                    address?: string;
                                    balance?: number;
                                    currency?: string;
                                    subscriptions?: any[];
                                    tax_ids?: {
                                        country?: string;
                                        customer?: string;
                                        type?: string;
                                        value?: string;
                                        verification?: {
                                            status?: string;
                                            verified_address?: string;
                                            verified_name?: string;
                                        };
                                    }[];
                                    items?: {
                                        id?: string;
                                        quantity?: string;
                                        subscription?: string;
                                        plan?: {
                                            status?: boolean;
                                            nickname?: string;
                                            product?: string;
                                            amount?: number;
                                            usage_type?: string;
                                        };
                                        price?: {
                                            nickname?: string;
                                            product?: string;
                                            active?: boolean;
                                            billing_scheme?: string;
                                            currency?: string;
                                            recurring?: {
                                                interval?: string;
                                                interval_count?: number;
                                                trial_period_days?: number;
                                                usage_type?: string;
                                            };
                                        };
                                    }[];
                                    default_tax_rates?: string[];
                                } & {
                                    address?: string;
                                    balance?: number;
                                    currency?: string;
                                    subscriptions?: {
                                        address?: string;
                                        balance?: number;
                                        currency?: string;
                                        subscriptions?: any[];
                                        tax_ids?: {
                                            country?: string;
                                            customer?: string;
                                            type?: string;
                                            value?: string;
                                            verification?: {
                                                status?: string;
                                                verified_address?: string;
                                                verified_name?: string;
                                            };
                                        }[];
                                        items?: {
                                            id?: string;
                                            quantity?: string;
                                            subscription?: string;
                                            plan?: {
                                                status?: boolean;
                                                nickname?: string;
                                                product?: string;
                                                amount?: number;
                                                usage_type?: string;
                                            };
                                            price?: {
                                                nickname?: string;
                                                product?: string;
                                                active?: boolean;
                                                billing_scheme?: string;
                                                currency?: string;
                                                recurring?: {
                                                    interval?: string;
                                                    interval_count?: number;
                                                    trial_period_days?: number;
                                                    usage_type?: string;
                                                };
                                            };
                                        }[];
                                        default_tax_rates?: string[];
                                    }[] & ({
                                        address?: string;
                                        balance?: number;
                                        currency?: string;
                                        subscriptions?: any[];
                                        tax_ids?: {
                                            country?: string;
                                            customer?: string;
                                            type?: string;
                                            value?: string;
                                            verification?: {
                                                status?: string;
                                                verified_address?: string;
                                                verified_name?: string;
                                            };
                                        }[];
                                        items?: {
                                            id?: string;
                                            quantity?: string;
                                            subscription?: string;
                                            plan?: {
                                                status?: boolean;
                                                nickname?: string;
                                                product?: string;
                                                amount?: number;
                                                usage_type?: string;
                                            };
                                            price?: {
                                                nickname?: string;
                                                product?: string;
                                                active?: boolean;
                                                billing_scheme?: string;
                                                currency?: string;
                                                recurring?: {
                                                    interval?: string;
                                                    interval_count?: number;
                                                    trial_period_days?: number;
                                                    usage_type?: string;
                                                };
                                            };
                                        }[];
                                        default_tax_rates?: string[];
                                    } & {
                                        address?: string;
                                        balance?: number;
                                        currency?: string;
                                        subscriptions?: {
                                            address?: string;
                                            balance?: number;
                                            currency?: string;
                                            subscriptions?: any[];
                                            tax_ids?: {
                                                country?: string;
                                                customer?: string;
                                                type?: string;
                                                value?: string;
                                                verification?: {
                                                    status?: string;
                                                    verified_address?: string;
                                                    verified_name?: string;
                                                };
                                            }[];
                                            items?: {
                                                id?: string;
                                                quantity?: string;
                                                subscription?: string;
                                                plan?: {
                                                    status?: boolean;
                                                    nickname?: string;
                                                    product?: string;
                                                    amount?: number;
                                                    usage_type?: string;
                                                };
                                                price?: {
                                                    nickname?: string;
                                                    product?: string;
                                                    active?: boolean;
                                                    billing_scheme?: string;
                                                    currency?: string;
                                                    recurring?: {
                                                        interval?: string;
                                                        interval_count?: number;
                                                        trial_period_days?: number;
                                                        usage_type?: string;
                                                    };
                                                };
                                            }[];
                                            default_tax_rates?: string[];
                                        }[] & ({
                                            address?: string;
                                            balance?: number;
                                            currency?: string;
                                            subscriptions?: any[];
                                            tax_ids?: {
                                                country?: string;
                                                customer?: string;
                                                type?: string;
                                                value?: string;
                                                verification?: {
                                                    status?: string;
                                                    verified_address?: string;
                                                    verified_name?: string;
                                                };
                                            }[];
                                            items?: {
                                                id?: string;
                                                quantity?: string;
                                                subscription?: string;
                                                plan?: {
                                                    status?: boolean;
                                                    nickname?: string;
                                                    product?: string;
                                                    amount?: number;
                                                    usage_type?: string;
                                                };
                                                price?: {
                                                    nickname?: string;
                                                    product?: string;
                                                    active?: boolean;
                                                    billing_scheme?: string;
                                                    currency?: string;
                                                    recurring?: {
                                                        interval?: string;
                                                        interval_count?: number;
                                                        trial_period_days?: number;
                                                        usage_type?: string;
                                                    };
                                                };
                                            }[];
                                            default_tax_rates?: string[];
                                        } & {
                                            address?: string;
                                            balance?: number;
                                            currency?: string;
                                            subscriptions?: {
                                                address?: string;
                                                balance?: number;
                                                currency?: string;
                                                subscriptions?: any[];
                                                tax_ids?: {
                                                    country?: string;
                                                    customer?: string;
                                                    type?: string;
                                                    value?: string;
                                                    verification?: {
                                                        status?: string;
                                                        verified_address?: string;
                                                        verified_name?: string;
                                                    };
                                                }[];
                                                items?: {
                                                    id?: string;
                                                    quantity?: string;
                                                    subscription?: string;
                                                    plan?: {
                                                        status?: boolean;
                                                        nickname?: string;
                                                        product?: string;
                                                        amount?: number;
                                                        usage_type?: string;
                                                    };
                                                    price?: {
                                                        nickname?: string;
                                                        product?: string;
                                                        active?: boolean;
                                                        billing_scheme?: string;
                                                        currency?: string;
                                                        recurring?: {
                                                            interval?: string;
                                                            interval_count?: number;
                                                            trial_period_days?: number;
                                                            usage_type?: string;
                                                        };
                                                    };
                                                }[];
                                                default_tax_rates?: string[];
                                            }[] & ({
                                                address?: string;
                                                balance?: number;
                                                currency?: string;
                                                subscriptions?: any[];
                                                tax_ids?: {
                                                    country?: string;
                                                    customer?: string;
                                                    type?: string;
                                                    value?: string;
                                                    verification?: {
                                                        status?: string;
                                                        verified_address?: string;
                                                        verified_name?: string;
                                                    };
                                                }[];
                                                items?: {
                                                    id?: string;
                                                    quantity?: string;
                                                    subscription?: string;
                                                    plan?: {
                                                        status?: boolean;
                                                        nickname?: string;
                                                        product?: string;
                                                        amount?: number;
                                                        usage_type?: string;
                                                    };
                                                    price?: {
                                                        nickname?: string;
                                                        product?: string;
                                                        active?: boolean;
                                                        billing_scheme?: string;
                                                        currency?: string;
                                                        recurring?: {
                                                            interval?: string;
                                                            interval_count?: number;
                                                            trial_period_days?: number;
                                                            usage_type?: string;
                                                        };
                                                    };
                                                }[];
                                                default_tax_rates?: string[];
                                            } & {
                                                address?: string;
                                                balance?: number;
                                                currency?: string;
                                                subscriptions?: {
                                                    address?: string;
                                                    balance?: number;
                                                    currency?: string;
                                                    subscriptions?: any[];
                                                    tax_ids?: {
                                                        country?: string;
                                                        customer?: string;
                                                        type?: string;
                                                        value?: string;
                                                        verification?: {
                                                            status?: string;
                                                            verified_address?: string;
                                                            verified_name?: string;
                                                        };
                                                    }[];
                                                    items?: {
                                                        id?: string;
                                                        quantity?: string;
                                                        subscription?: string;
                                                        plan?: {
                                                            status?: boolean;
                                                            nickname?: string;
                                                            product?: string;
                                                            amount?: number;
                                                            usage_type?: string;
                                                        };
                                                        price?: {
                                                            nickname?: string;
                                                            product?: string;
                                                            active?: boolean;
                                                            billing_scheme?: string;
                                                            currency?: string;
                                                            recurring?: {
                                                                interval?: string;
                                                                interval_count?: number;
                                                                trial_period_days?: number;
                                                                usage_type?: string;
                                                            };
                                                        };
                                                    }[];
                                                    default_tax_rates?: string[];
                                                }[] & ({
                                                    address?: string;
                                                    balance?: number;
                                                    currency?: string;
                                                    subscriptions?: any[];
                                                    tax_ids?: {
                                                        country?: string;
                                                        customer?: string;
                                                        type?: string;
                                                        value?: string;
                                                        verification?: {
                                                            status?: string;
                                                            verified_address?: string;
                                                            verified_name?: string;
                                                        };
                                                    }[];
                                                    items?: {
                                                        id?: string;
                                                        quantity?: string;
                                                        subscription?: string;
                                                        plan?: {
                                                            status?: boolean;
                                                            nickname?: string;
                                                            product?: string;
                                                            amount?: number;
                                                            usage_type?: string;
                                                        };
                                                        price?: {
                                                            nickname?: string;
                                                            product?: string;
                                                            active?: boolean;
                                                            billing_scheme?: string;
                                                            currency?: string;
                                                            recurring?: {
                                                                interval?: string;
                                                                interval_count?: number;
                                                                trial_period_days?: number;
                                                                usage_type?: string;
                                                            };
                                                        };
                                                    }[];
                                                    default_tax_rates?: string[];
                                                } & any & { [K_112 in Exclude<keyof I_1["stripe"]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number], keyof import("./stripe").StripeSubscription>]: never; })[] & { [K_113 in Exclude<keyof I_1["stripe"]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"], keyof {
                                                    address?: string;
                                                    balance?: number;
                                                    currency?: string;
                                                    subscriptions?: any[];
                                                    tax_ids?: {
                                                        country?: string;
                                                        customer?: string;
                                                        type?: string;
                                                        value?: string;
                                                        verification?: {
                                                            status?: string;
                                                            verified_address?: string;
                                                            verified_name?: string;
                                                        };
                                                    }[];
                                                    items?: {
                                                        id?: string;
                                                        quantity?: string;
                                                        subscription?: string;
                                                        plan?: {
                                                            status?: boolean;
                                                            nickname?: string;
                                                            product?: string;
                                                            amount?: number;
                                                            usage_type?: string;
                                                        };
                                                        price?: {
                                                            nickname?: string;
                                                            product?: string;
                                                            active?: boolean;
                                                            billing_scheme?: string;
                                                            currency?: string;
                                                            recurring?: {
                                                                interval?: string;
                                                                interval_count?: number;
                                                                trial_period_days?: number;
                                                                usage_type?: string;
                                                            };
                                                        };
                                                    }[];
                                                    default_tax_rates?: string[];
                                                }[]>]: never; };
                                                tax_ids?: {
                                                    country?: string;
                                                    customer?: string;
                                                    type?: string;
                                                    value?: string;
                                                    verification?: {
                                                        status?: string;
                                                        verified_address?: string;
                                                        verified_name?: string;
                                                    };
                                                }[] & ({
                                                    country?: string;
                                                    customer?: string;
                                                    type?: string;
                                                    value?: string;
                                                    verification?: {
                                                        status?: string;
                                                        verified_address?: string;
                                                        verified_name?: string;
                                                    };
                                                } & any & { [K_114 in Exclude<keyof I_1["stripe"]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["tax_ids"][number], keyof import("./stripe").StripeTaxId>]: never; })[] & { [K_115 in Exclude<keyof I_1["stripe"]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["tax_ids"], keyof {
                                                    country?: string;
                                                    customer?: string;
                                                    type?: string;
                                                    value?: string;
                                                    verification?: {
                                                        status?: string;
                                                        verified_address?: string;
                                                        verified_name?: string;
                                                    };
                                                }[]>]: never; };
                                                items?: {
                                                    id?: string;
                                                    quantity?: string;
                                                    subscription?: string;
                                                    plan?: {
                                                        status?: boolean;
                                                        nickname?: string;
                                                        product?: string;
                                                        amount?: number;
                                                        usage_type?: string;
                                                    };
                                                    price?: {
                                                        nickname?: string;
                                                        product?: string;
                                                        active?: boolean;
                                                        billing_scheme?: string;
                                                        currency?: string;
                                                        recurring?: {
                                                            interval?: string;
                                                            interval_count?: number;
                                                            trial_period_days?: number;
                                                            usage_type?: string;
                                                        };
                                                    };
                                                }[] & ({
                                                    id?: string;
                                                    quantity?: string;
                                                    subscription?: string;
                                                    plan?: {
                                                        status?: boolean;
                                                        nickname?: string;
                                                        product?: string;
                                                        amount?: number;
                                                        usage_type?: string;
                                                    };
                                                    price?: {
                                                        nickname?: string;
                                                        product?: string;
                                                        active?: boolean;
                                                        billing_scheme?: string;
                                                        currency?: string;
                                                        recurring?: {
                                                            interval?: string;
                                                            interval_count?: number;
                                                            trial_period_days?: number;
                                                            usage_type?: string;
                                                        };
                                                    };
                                                } & any & { [K_116 in Exclude<keyof I_1["stripe"]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["items"][number], keyof import("./stripe").StripeSubscriptionItem>]: never; })[] & { [K_117 in Exclude<keyof I_1["stripe"]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["items"], keyof {
                                                    id?: string;
                                                    quantity?: string;
                                                    subscription?: string;
                                                    plan?: {
                                                        status?: boolean;
                                                        nickname?: string;
                                                        product?: string;
                                                        amount?: number;
                                                        usage_type?: string;
                                                    };
                                                    price?: {
                                                        nickname?: string;
                                                        product?: string;
                                                        active?: boolean;
                                                        billing_scheme?: string;
                                                        currency?: string;
                                                        recurring?: {
                                                            interval?: string;
                                                            interval_count?: number;
                                                            trial_period_days?: number;
                                                            usage_type?: string;
                                                        };
                                                    };
                                                }[]>]: never; };
                                                default_tax_rates?: string[] & string[] & { [K_118 in Exclude<keyof I_1["stripe"]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["default_tax_rates"], keyof string[]>]: never; };
                                            } & { [K_119 in Exclude<keyof I_1["stripe"]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number], keyof import("./stripe").StripeSubscription>]: never; })[] & { [K_120 in Exclude<keyof I_1["stripe"]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"], keyof {
                                                address?: string;
                                                balance?: number;
                                                currency?: string;
                                                subscriptions?: any[];
                                                tax_ids?: {
                                                    country?: string;
                                                    customer?: string;
                                                    type?: string;
                                                    value?: string;
                                                    verification?: {
                                                        status?: string;
                                                        verified_address?: string;
                                                        verified_name?: string;
                                                    };
                                                }[];
                                                items?: {
                                                    id?: string;
                                                    quantity?: string;
                                                    subscription?: string;
                                                    plan?: {
                                                        status?: boolean;
                                                        nickname?: string;
                                                        product?: string;
                                                        amount?: number;
                                                        usage_type?: string;
                                                    };
                                                    price?: {
                                                        nickname?: string;
                                                        product?: string;
                                                        active?: boolean;
                                                        billing_scheme?: string;
                                                        currency?: string;
                                                        recurring?: {
                                                            interval?: string;
                                                            interval_count?: number;
                                                            trial_period_days?: number;
                                                            usage_type?: string;
                                                        };
                                                    };
                                                }[];
                                                default_tax_rates?: string[];
                                            }[]>]: never; };
                                            tax_ids?: {
                                                country?: string;
                                                customer?: string;
                                                type?: string;
                                                value?: string;
                                                verification?: {
                                                    status?: string;
                                                    verified_address?: string;
                                                    verified_name?: string;
                                                };
                                            }[] & ({
                                                country?: string;
                                                customer?: string;
                                                type?: string;
                                                value?: string;
                                                verification?: {
                                                    status?: string;
                                                    verified_address?: string;
                                                    verified_name?: string;
                                                };
                                            } & {
                                                country?: string;
                                                customer?: string;
                                                type?: string;
                                                value?: string;
                                                verification?: {
                                                    status?: string;
                                                    verified_address?: string;
                                                    verified_name?: string;
                                                } & any & { [K_121 in Exclude<keyof I_1["stripe"]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["tax_ids"][number]["verification"], keyof import("./stripe").StripeTaxVerification>]: never; };
                                            } & { [K_122 in Exclude<keyof I_1["stripe"]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["tax_ids"][number], keyof import("./stripe").StripeTaxId>]: never; })[] & { [K_123 in Exclude<keyof I_1["stripe"]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["tax_ids"], keyof {
                                                country?: string;
                                                customer?: string;
                                                type?: string;
                                                value?: string;
                                                verification?: {
                                                    status?: string;
                                                    verified_address?: string;
                                                    verified_name?: string;
                                                };
                                            }[]>]: never; };
                                            items?: {
                                                id?: string;
                                                quantity?: string;
                                                subscription?: string;
                                                plan?: {
                                                    status?: boolean;
                                                    nickname?: string;
                                                    product?: string;
                                                    amount?: number;
                                                    usage_type?: string;
                                                };
                                                price?: {
                                                    nickname?: string;
                                                    product?: string;
                                                    active?: boolean;
                                                    billing_scheme?: string;
                                                    currency?: string;
                                                    recurring?: {
                                                        interval?: string;
                                                        interval_count?: number;
                                                        trial_period_days?: number;
                                                        usage_type?: string;
                                                    };
                                                };
                                            }[] & ({
                                                id?: string;
                                                quantity?: string;
                                                subscription?: string;
                                                plan?: {
                                                    status?: boolean;
                                                    nickname?: string;
                                                    product?: string;
                                                    amount?: number;
                                                    usage_type?: string;
                                                };
                                                price?: {
                                                    nickname?: string;
                                                    product?: string;
                                                    active?: boolean;
                                                    billing_scheme?: string;
                                                    currency?: string;
                                                    recurring?: {
                                                        interval?: string;
                                                        interval_count?: number;
                                                        trial_period_days?: number;
                                                        usage_type?: string;
                                                    };
                                                };
                                            } & {
                                                id?: string;
                                                quantity?: string;
                                                subscription?: string;
                                                plan?: {
                                                    status?: boolean;
                                                    nickname?: string;
                                                    product?: string;
                                                    amount?: number;
                                                    usage_type?: string;
                                                } & any & { [K_124 in Exclude<keyof I_1["stripe"]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["items"][number]["plan"], keyof import("./stripe").StripePlan>]: never; };
                                                price?: {
                                                    nickname?: string;
                                                    product?: string;
                                                    active?: boolean;
                                                    billing_scheme?: string;
                                                    currency?: string;
                                                    recurring?: {
                                                        interval?: string;
                                                        interval_count?: number;
                                                        trial_period_days?: number;
                                                        usage_type?: string;
                                                    };
                                                } & any & { [K_125 in Exclude<keyof I_1["stripe"]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["items"][number]["price"], keyof import("./stripe").StripePrice>]: never; };
                                            } & { [K_126 in Exclude<keyof I_1["stripe"]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["items"][number], keyof import("./stripe").StripeSubscriptionItem>]: never; })[] & { [K_127 in Exclude<keyof I_1["stripe"]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["items"], keyof {
                                                id?: string;
                                                quantity?: string;
                                                subscription?: string;
                                                plan?: {
                                                    status?: boolean;
                                                    nickname?: string;
                                                    product?: string;
                                                    amount?: number;
                                                    usage_type?: string;
                                                };
                                                price?: {
                                                    nickname?: string;
                                                    product?: string;
                                                    active?: boolean;
                                                    billing_scheme?: string;
                                                    currency?: string;
                                                    recurring?: {
                                                        interval?: string;
                                                        interval_count?: number;
                                                        trial_period_days?: number;
                                                        usage_type?: string;
                                                    };
                                                };
                                            }[]>]: never; };
                                            default_tax_rates?: string[] & string[] & { [K_128 in Exclude<keyof I_1["stripe"]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["default_tax_rates"], keyof string[]>]: never; };
                                        } & { [K_129 in Exclude<keyof I_1["stripe"]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number], keyof import("./stripe").StripeSubscription>]: never; })[] & { [K_130 in Exclude<keyof I_1["stripe"]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"], keyof {
                                            address?: string;
                                            balance?: number;
                                            currency?: string;
                                            subscriptions?: any[];
                                            tax_ids?: {
                                                country?: string;
                                                customer?: string;
                                                type?: string;
                                                value?: string;
                                                verification?: {
                                                    status?: string;
                                                    verified_address?: string;
                                                    verified_name?: string;
                                                };
                                            }[];
                                            items?: {
                                                id?: string;
                                                quantity?: string;
                                                subscription?: string;
                                                plan?: {
                                                    status?: boolean;
                                                    nickname?: string;
                                                    product?: string;
                                                    amount?: number;
                                                    usage_type?: string;
                                                };
                                                price?: {
                                                    nickname?: string;
                                                    product?: string;
                                                    active?: boolean;
                                                    billing_scheme?: string;
                                                    currency?: string;
                                                    recurring?: {
                                                        interval?: string;
                                                        interval_count?: number;
                                                        trial_period_days?: number;
                                                        usage_type?: string;
                                                    };
                                                };
                                            }[];
                                            default_tax_rates?: string[];
                                        }[]>]: never; };
                                        tax_ids?: {
                                            country?: string;
                                            customer?: string;
                                            type?: string;
                                            value?: string;
                                            verification?: {
                                                status?: string;
                                                verified_address?: string;
                                                verified_name?: string;
                                            };
                                        }[] & ({
                                            country?: string;
                                            customer?: string;
                                            type?: string;
                                            value?: string;
                                            verification?: {
                                                status?: string;
                                                verified_address?: string;
                                                verified_name?: string;
                                            };
                                        } & {
                                            country?: string;
                                            customer?: string;
                                            type?: string;
                                            value?: string;
                                            verification?: {
                                                status?: string;
                                                verified_address?: string;
                                                verified_name?: string;
                                            } & {
                                                status?: string;
                                                verified_address?: string;
                                                verified_name?: string;
                                            } & { [K_131 in Exclude<keyof I_1["stripe"]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["tax_ids"][number]["verification"], keyof import("./stripe").StripeTaxVerification>]: never; };
                                        } & { [K_132 in Exclude<keyof I_1["stripe"]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["tax_ids"][number], keyof import("./stripe").StripeTaxId>]: never; })[] & { [K_133 in Exclude<keyof I_1["stripe"]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["tax_ids"], keyof {
                                            country?: string;
                                            customer?: string;
                                            type?: string;
                                            value?: string;
                                            verification?: {
                                                status?: string;
                                                verified_address?: string;
                                                verified_name?: string;
                                            };
                                        }[]>]: never; };
                                        items?: {
                                            id?: string;
                                            quantity?: string;
                                            subscription?: string;
                                            plan?: {
                                                status?: boolean;
                                                nickname?: string;
                                                product?: string;
                                                amount?: number;
                                                usage_type?: string;
                                            };
                                            price?: {
                                                nickname?: string;
                                                product?: string;
                                                active?: boolean;
                                                billing_scheme?: string;
                                                currency?: string;
                                                recurring?: {
                                                    interval?: string;
                                                    interval_count?: number;
                                                    trial_period_days?: number;
                                                    usage_type?: string;
                                                };
                                            };
                                        }[] & ({
                                            id?: string;
                                            quantity?: string;
                                            subscription?: string;
                                            plan?: {
                                                status?: boolean;
                                                nickname?: string;
                                                product?: string;
                                                amount?: number;
                                                usage_type?: string;
                                            };
                                            price?: {
                                                nickname?: string;
                                                product?: string;
                                                active?: boolean;
                                                billing_scheme?: string;
                                                currency?: string;
                                                recurring?: {
                                                    interval?: string;
                                                    interval_count?: number;
                                                    trial_period_days?: number;
                                                    usage_type?: string;
                                                };
                                            };
                                        } & {
                                            id?: string;
                                            quantity?: string;
                                            subscription?: string;
                                            plan?: {
                                                status?: boolean;
                                                nickname?: string;
                                                product?: string;
                                                amount?: number;
                                                usage_type?: string;
                                            } & {
                                                status?: boolean;
                                                nickname?: string;
                                                product?: string;
                                                amount?: number;
                                                usage_type?: string;
                                            } & { [K_134 in Exclude<keyof I_1["stripe"]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["items"][number]["plan"], keyof import("./stripe").StripePlan>]: never; };
                                            price?: {
                                                nickname?: string;
                                                product?: string;
                                                active?: boolean;
                                                billing_scheme?: string;
                                                currency?: string;
                                                recurring?: {
                                                    interval?: string;
                                                    interval_count?: number;
                                                    trial_period_days?: number;
                                                    usage_type?: string;
                                                };
                                            } & {
                                                nickname?: string;
                                                product?: string;
                                                active?: boolean;
                                                billing_scheme?: string;
                                                currency?: string;
                                                recurring?: {
                                                    interval?: string;
                                                    interval_count?: number;
                                                    trial_period_days?: number;
                                                    usage_type?: string;
                                                } & any & { [K_135 in Exclude<keyof I_1["stripe"]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["items"][number]["price"]["recurring"], keyof import("./stripe").StripeRecurring>]: never; };
                                            } & { [K_136 in Exclude<keyof I_1["stripe"]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["items"][number]["price"], keyof import("./stripe").StripePrice>]: never; };
                                        } & { [K_137 in Exclude<keyof I_1["stripe"]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["items"][number], keyof import("./stripe").StripeSubscriptionItem>]: never; })[] & { [K_138 in Exclude<keyof I_1["stripe"]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["items"], keyof {
                                            id?: string;
                                            quantity?: string;
                                            subscription?: string;
                                            plan?: {
                                                status?: boolean;
                                                nickname?: string;
                                                product?: string;
                                                amount?: number;
                                                usage_type?: string;
                                            };
                                            price?: {
                                                nickname?: string;
                                                product?: string;
                                                active?: boolean;
                                                billing_scheme?: string;
                                                currency?: string;
                                                recurring?: {
                                                    interval?: string;
                                                    interval_count?: number;
                                                    trial_period_days?: number;
                                                    usage_type?: string;
                                                };
                                            };
                                        }[]>]: never; };
                                        default_tax_rates?: string[] & string[] & { [K_139 in Exclude<keyof I_1["stripe"]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["default_tax_rates"], keyof string[]>]: never; };
                                    } & { [K_140 in Exclude<keyof I_1["stripe"]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number], keyof import("./stripe").StripeSubscription>]: never; })[] & { [K_141 in Exclude<keyof I_1["stripe"]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"], keyof {
                                        address?: string;
                                        balance?: number;
                                        currency?: string;
                                        subscriptions?: any[];
                                        tax_ids?: {
                                            country?: string;
                                            customer?: string;
                                            type?: string;
                                            value?: string;
                                            verification?: {
                                                status?: string;
                                                verified_address?: string;
                                                verified_name?: string;
                                            };
                                        }[];
                                        items?: {
                                            id?: string;
                                            quantity?: string;
                                            subscription?: string;
                                            plan?: {
                                                status?: boolean;
                                                nickname?: string;
                                                product?: string;
                                                amount?: number;
                                                usage_type?: string;
                                            };
                                            price?: {
                                                nickname?: string;
                                                product?: string;
                                                active?: boolean;
                                                billing_scheme?: string;
                                                currency?: string;
                                                recurring?: {
                                                    interval?: string;
                                                    interval_count?: number;
                                                    trial_period_days?: number;
                                                    usage_type?: string;
                                                };
                                            };
                                        }[];
                                        default_tax_rates?: string[];
                                    }[]>]: never; };
                                    tax_ids?: {
                                        country?: string;
                                        customer?: string;
                                        type?: string;
                                        value?: string;
                                        verification?: {
                                            status?: string;
                                            verified_address?: string;
                                            verified_name?: string;
                                        };
                                    }[] & ({
                                        country?: string;
                                        customer?: string;
                                        type?: string;
                                        value?: string;
                                        verification?: {
                                            status?: string;
                                            verified_address?: string;
                                            verified_name?: string;
                                        };
                                    } & {
                                        country?: string;
                                        customer?: string;
                                        type?: string;
                                        value?: string;
                                        verification?: {
                                            status?: string;
                                            verified_address?: string;
                                            verified_name?: string;
                                        } & {
                                            status?: string;
                                            verified_address?: string;
                                            verified_name?: string;
                                        } & { [K_142 in Exclude<keyof I_1["stripe"]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["tax_ids"][number]["verification"], keyof import("./stripe").StripeTaxVerification>]: never; };
                                    } & { [K_143 in Exclude<keyof I_1["stripe"]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["tax_ids"][number], keyof import("./stripe").StripeTaxId>]: never; })[] & { [K_144 in Exclude<keyof I_1["stripe"]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["tax_ids"], keyof {
                                        country?: string;
                                        customer?: string;
                                        type?: string;
                                        value?: string;
                                        verification?: {
                                            status?: string;
                                            verified_address?: string;
                                            verified_name?: string;
                                        };
                                    }[]>]: never; };
                                    items?: {
                                        id?: string;
                                        quantity?: string;
                                        subscription?: string;
                                        plan?: {
                                            status?: boolean;
                                            nickname?: string;
                                            product?: string;
                                            amount?: number;
                                            usage_type?: string;
                                        };
                                        price?: {
                                            nickname?: string;
                                            product?: string;
                                            active?: boolean;
                                            billing_scheme?: string;
                                            currency?: string;
                                            recurring?: {
                                                interval?: string;
                                                interval_count?: number;
                                                trial_period_days?: number;
                                                usage_type?: string;
                                            };
                                        };
                                    }[] & ({
                                        id?: string;
                                        quantity?: string;
                                        subscription?: string;
                                        plan?: {
                                            status?: boolean;
                                            nickname?: string;
                                            product?: string;
                                            amount?: number;
                                            usage_type?: string;
                                        };
                                        price?: {
                                            nickname?: string;
                                            product?: string;
                                            active?: boolean;
                                            billing_scheme?: string;
                                            currency?: string;
                                            recurring?: {
                                                interval?: string;
                                                interval_count?: number;
                                                trial_period_days?: number;
                                                usage_type?: string;
                                            };
                                        };
                                    } & {
                                        id?: string;
                                        quantity?: string;
                                        subscription?: string;
                                        plan?: {
                                            status?: boolean;
                                            nickname?: string;
                                            product?: string;
                                            amount?: number;
                                            usage_type?: string;
                                        } & {
                                            status?: boolean;
                                            nickname?: string;
                                            product?: string;
                                            amount?: number;
                                            usage_type?: string;
                                        } & { [K_145 in Exclude<keyof I_1["stripe"]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["items"][number]["plan"], keyof import("./stripe").StripePlan>]: never; };
                                        price?: {
                                            nickname?: string;
                                            product?: string;
                                            active?: boolean;
                                            billing_scheme?: string;
                                            currency?: string;
                                            recurring?: {
                                                interval?: string;
                                                interval_count?: number;
                                                trial_period_days?: number;
                                                usage_type?: string;
                                            };
                                        } & {
                                            nickname?: string;
                                            product?: string;
                                            active?: boolean;
                                            billing_scheme?: string;
                                            currency?: string;
                                            recurring?: {
                                                interval?: string;
                                                interval_count?: number;
                                                trial_period_days?: number;
                                                usage_type?: string;
                                            } & {
                                                interval?: string;
                                                interval_count?: number;
                                                trial_period_days?: number;
                                                usage_type?: string;
                                            } & { [K_146 in Exclude<keyof I_1["stripe"]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["items"][number]["price"]["recurring"], keyof import("./stripe").StripeRecurring>]: never; };
                                        } & { [K_147 in Exclude<keyof I_1["stripe"]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["items"][number]["price"], keyof import("./stripe").StripePrice>]: never; };
                                    } & { [K_148 in Exclude<keyof I_1["stripe"]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["items"][number], keyof import("./stripe").StripeSubscriptionItem>]: never; })[] & { [K_149 in Exclude<keyof I_1["stripe"]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["items"], keyof {
                                        id?: string;
                                        quantity?: string;
                                        subscription?: string;
                                        plan?: {
                                            status?: boolean;
                                            nickname?: string;
                                            product?: string;
                                            amount?: number;
                                            usage_type?: string;
                                        };
                                        price?: {
                                            nickname?: string;
                                            product?: string;
                                            active?: boolean;
                                            billing_scheme?: string;
                                            currency?: string;
                                            recurring?: {
                                                interval?: string;
                                                interval_count?: number;
                                                trial_period_days?: number;
                                                usage_type?: string;
                                            };
                                        };
                                    }[]>]: never; };
                                    default_tax_rates?: string[] & string[] & { [K_150 in Exclude<keyof I_1["stripe"]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["default_tax_rates"], keyof string[]>]: never; };
                                } & { [K_151 in Exclude<keyof I_1["stripe"]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number], keyof import("./stripe").StripeSubscription>]: never; })[] & { [K_152 in Exclude<keyof I_1["stripe"]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"], keyof {
                                    address?: string;
                                    balance?: number;
                                    currency?: string;
                                    subscriptions?: any[];
                                    tax_ids?: {
                                        country?: string;
                                        customer?: string;
                                        type?: string;
                                        value?: string;
                                        verification?: {
                                            status?: string;
                                            verified_address?: string;
                                            verified_name?: string;
                                        };
                                    }[];
                                    items?: {
                                        id?: string;
                                        quantity?: string;
                                        subscription?: string;
                                        plan?: {
                                            status?: boolean;
                                            nickname?: string;
                                            product?: string;
                                            amount?: number;
                                            usage_type?: string;
                                        };
                                        price?: {
                                            nickname?: string;
                                            product?: string;
                                            active?: boolean;
                                            billing_scheme?: string;
                                            currency?: string;
                                            recurring?: {
                                                interval?: string;
                                                interval_count?: number;
                                                trial_period_days?: number;
                                                usage_type?: string;
                                            };
                                        };
                                    }[];
                                    default_tax_rates?: string[];
                                }[]>]: never; };
                                tax_ids?: {
                                    country?: string;
                                    customer?: string;
                                    type?: string;
                                    value?: string;
                                    verification?: {
                                        status?: string;
                                        verified_address?: string;
                                        verified_name?: string;
                                    };
                                }[] & ({
                                    country?: string;
                                    customer?: string;
                                    type?: string;
                                    value?: string;
                                    verification?: {
                                        status?: string;
                                        verified_address?: string;
                                        verified_name?: string;
                                    };
                                } & {
                                    country?: string;
                                    customer?: string;
                                    type?: string;
                                    value?: string;
                                    verification?: {
                                        status?: string;
                                        verified_address?: string;
                                        verified_name?: string;
                                    } & {
                                        status?: string;
                                        verified_address?: string;
                                        verified_name?: string;
                                    } & { [K_153 in Exclude<keyof I_1["stripe"]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["tax_ids"][number]["verification"], keyof import("./stripe").StripeTaxVerification>]: never; };
                                } & { [K_154 in Exclude<keyof I_1["stripe"]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["tax_ids"][number], keyof import("./stripe").StripeTaxId>]: never; })[] & { [K_155 in Exclude<keyof I_1["stripe"]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["tax_ids"], keyof {
                                    country?: string;
                                    customer?: string;
                                    type?: string;
                                    value?: string;
                                    verification?: {
                                        status?: string;
                                        verified_address?: string;
                                        verified_name?: string;
                                    };
                                }[]>]: never; };
                                items?: {
                                    id?: string;
                                    quantity?: string;
                                    subscription?: string;
                                    plan?: {
                                        status?: boolean;
                                        nickname?: string;
                                        product?: string;
                                        amount?: number;
                                        usage_type?: string;
                                    };
                                    price?: {
                                        nickname?: string;
                                        product?: string;
                                        active?: boolean;
                                        billing_scheme?: string;
                                        currency?: string;
                                        recurring?: {
                                            interval?: string;
                                            interval_count?: number;
                                            trial_period_days?: number;
                                            usage_type?: string;
                                        };
                                    };
                                }[] & ({
                                    id?: string;
                                    quantity?: string;
                                    subscription?: string;
                                    plan?: {
                                        status?: boolean;
                                        nickname?: string;
                                        product?: string;
                                        amount?: number;
                                        usage_type?: string;
                                    };
                                    price?: {
                                        nickname?: string;
                                        product?: string;
                                        active?: boolean;
                                        billing_scheme?: string;
                                        currency?: string;
                                        recurring?: {
                                            interval?: string;
                                            interval_count?: number;
                                            trial_period_days?: number;
                                            usage_type?: string;
                                        };
                                    };
                                } & {
                                    id?: string;
                                    quantity?: string;
                                    subscription?: string;
                                    plan?: {
                                        status?: boolean;
                                        nickname?: string;
                                        product?: string;
                                        amount?: number;
                                        usage_type?: string;
                                    } & {
                                        status?: boolean;
                                        nickname?: string;
                                        product?: string;
                                        amount?: number;
                                        usage_type?: string;
                                    } & { [K_156 in Exclude<keyof I_1["stripe"]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["items"][number]["plan"], keyof import("./stripe").StripePlan>]: never; };
                                    price?: {
                                        nickname?: string;
                                        product?: string;
                                        active?: boolean;
                                        billing_scheme?: string;
                                        currency?: string;
                                        recurring?: {
                                            interval?: string;
                                            interval_count?: number;
                                            trial_period_days?: number;
                                            usage_type?: string;
                                        };
                                    } & {
                                        nickname?: string;
                                        product?: string;
                                        active?: boolean;
                                        billing_scheme?: string;
                                        currency?: string;
                                        recurring?: {
                                            interval?: string;
                                            interval_count?: number;
                                            trial_period_days?: number;
                                            usage_type?: string;
                                        } & {
                                            interval?: string;
                                            interval_count?: number;
                                            trial_period_days?: number;
                                            usage_type?: string;
                                        } & { [K_157 in Exclude<keyof I_1["stripe"]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["items"][number]["price"]["recurring"], keyof import("./stripe").StripeRecurring>]: never; };
                                    } & { [K_158 in Exclude<keyof I_1["stripe"]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["items"][number]["price"], keyof import("./stripe").StripePrice>]: never; };
                                } & { [K_159 in Exclude<keyof I_1["stripe"]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["items"][number], keyof import("./stripe").StripeSubscriptionItem>]: never; })[] & { [K_160 in Exclude<keyof I_1["stripe"]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["items"], keyof {
                                    id?: string;
                                    quantity?: string;
                                    subscription?: string;
                                    plan?: {
                                        status?: boolean;
                                        nickname?: string;
                                        product?: string;
                                        amount?: number;
                                        usage_type?: string;
                                    };
                                    price?: {
                                        nickname?: string;
                                        product?: string;
                                        active?: boolean;
                                        billing_scheme?: string;
                                        currency?: string;
                                        recurring?: {
                                            interval?: string;
                                            interval_count?: number;
                                            trial_period_days?: number;
                                            usage_type?: string;
                                        };
                                    };
                                }[]>]: never; };
                                default_tax_rates?: string[] & string[] & { [K_161 in Exclude<keyof I_1["stripe"]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["default_tax_rates"], keyof string[]>]: never; };
                            } & { [K_162 in Exclude<keyof I_1["stripe"]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number], keyof import("./stripe").StripeSubscription>]: never; })[] & { [K_163 in Exclude<keyof I_1["stripe"]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"], keyof {
                                address?: string;
                                balance?: number;
                                currency?: string;
                                subscriptions?: any[];
                                tax_ids?: {
                                    country?: string;
                                    customer?: string;
                                    type?: string;
                                    value?: string;
                                    verification?: {
                                        status?: string;
                                        verified_address?: string;
                                        verified_name?: string;
                                    };
                                }[];
                                items?: {
                                    id?: string;
                                    quantity?: string;
                                    subscription?: string;
                                    plan?: {
                                        status?: boolean;
                                        nickname?: string;
                                        product?: string;
                                        amount?: number;
                                        usage_type?: string;
                                    };
                                    price?: {
                                        nickname?: string;
                                        product?: string;
                                        active?: boolean;
                                        billing_scheme?: string;
                                        currency?: string;
                                        recurring?: {
                                            interval?: string;
                                            interval_count?: number;
                                            trial_period_days?: number;
                                            usage_type?: string;
                                        };
                                    };
                                }[];
                                default_tax_rates?: string[];
                            }[]>]: never; };
                            tax_ids?: {
                                country?: string;
                                customer?: string;
                                type?: string;
                                value?: string;
                                verification?: {
                                    status?: string;
                                    verified_address?: string;
                                    verified_name?: string;
                                };
                            }[] & ({
                                country?: string;
                                customer?: string;
                                type?: string;
                                value?: string;
                                verification?: {
                                    status?: string;
                                    verified_address?: string;
                                    verified_name?: string;
                                };
                            } & {
                                country?: string;
                                customer?: string;
                                type?: string;
                                value?: string;
                                verification?: {
                                    status?: string;
                                    verified_address?: string;
                                    verified_name?: string;
                                } & {
                                    status?: string;
                                    verified_address?: string;
                                    verified_name?: string;
                                } & { [K_164 in Exclude<keyof I_1["stripe"]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["tax_ids"][number]["verification"], keyof import("./stripe").StripeTaxVerification>]: never; };
                            } & { [K_165 in Exclude<keyof I_1["stripe"]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["tax_ids"][number], keyof import("./stripe").StripeTaxId>]: never; })[] & { [K_166 in Exclude<keyof I_1["stripe"]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["tax_ids"], keyof {
                                country?: string;
                                customer?: string;
                                type?: string;
                                value?: string;
                                verification?: {
                                    status?: string;
                                    verified_address?: string;
                                    verified_name?: string;
                                };
                            }[]>]: never; };
                            items?: {
                                id?: string;
                                quantity?: string;
                                subscription?: string;
                                plan?: {
                                    status?: boolean;
                                    nickname?: string;
                                    product?: string;
                                    amount?: number;
                                    usage_type?: string;
                                };
                                price?: {
                                    nickname?: string;
                                    product?: string;
                                    active?: boolean;
                                    billing_scheme?: string;
                                    currency?: string;
                                    recurring?: {
                                        interval?: string;
                                        interval_count?: number;
                                        trial_period_days?: number;
                                        usage_type?: string;
                                    };
                                };
                            }[] & ({
                                id?: string;
                                quantity?: string;
                                subscription?: string;
                                plan?: {
                                    status?: boolean;
                                    nickname?: string;
                                    product?: string;
                                    amount?: number;
                                    usage_type?: string;
                                };
                                price?: {
                                    nickname?: string;
                                    product?: string;
                                    active?: boolean;
                                    billing_scheme?: string;
                                    currency?: string;
                                    recurring?: {
                                        interval?: string;
                                        interval_count?: number;
                                        trial_period_days?: number;
                                        usage_type?: string;
                                    };
                                };
                            } & {
                                id?: string;
                                quantity?: string;
                                subscription?: string;
                                plan?: {
                                    status?: boolean;
                                    nickname?: string;
                                    product?: string;
                                    amount?: number;
                                    usage_type?: string;
                                } & {
                                    status?: boolean;
                                    nickname?: string;
                                    product?: string;
                                    amount?: number;
                                    usage_type?: string;
                                } & { [K_167 in Exclude<keyof I_1["stripe"]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["items"][number]["plan"], keyof import("./stripe").StripePlan>]: never; };
                                price?: {
                                    nickname?: string;
                                    product?: string;
                                    active?: boolean;
                                    billing_scheme?: string;
                                    currency?: string;
                                    recurring?: {
                                        interval?: string;
                                        interval_count?: number;
                                        trial_period_days?: number;
                                        usage_type?: string;
                                    };
                                } & {
                                    nickname?: string;
                                    product?: string;
                                    active?: boolean;
                                    billing_scheme?: string;
                                    currency?: string;
                                    recurring?: {
                                        interval?: string;
                                        interval_count?: number;
                                        trial_period_days?: number;
                                        usage_type?: string;
                                    } & {
                                        interval?: string;
                                        interval_count?: number;
                                        trial_period_days?: number;
                                        usage_type?: string;
                                    } & { [K_168 in Exclude<keyof I_1["stripe"]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["items"][number]["price"]["recurring"], keyof import("./stripe").StripeRecurring>]: never; };
                                } & { [K_169 in Exclude<keyof I_1["stripe"]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["items"][number]["price"], keyof import("./stripe").StripePrice>]: never; };
                            } & { [K_170 in Exclude<keyof I_1["stripe"]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["items"][number], keyof import("./stripe").StripeSubscriptionItem>]: never; })[] & { [K_171 in Exclude<keyof I_1["stripe"]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["items"], keyof {
                                id?: string;
                                quantity?: string;
                                subscription?: string;
                                plan?: {
                                    status?: boolean;
                                    nickname?: string;
                                    product?: string;
                                    amount?: number;
                                    usage_type?: string;
                                };
                                price?: {
                                    nickname?: string;
                                    product?: string;
                                    active?: boolean;
                                    billing_scheme?: string;
                                    currency?: string;
                                    recurring?: {
                                        interval?: string;
                                        interval_count?: number;
                                        trial_period_days?: number;
                                        usage_type?: string;
                                    };
                                };
                            }[]>]: never; };
                            default_tax_rates?: string[] & string[] & { [K_172 in Exclude<keyof I_1["stripe"]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["default_tax_rates"], keyof string[]>]: never; };
                        } & { [K_173 in Exclude<keyof I_1["stripe"]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number], keyof import("./stripe").StripeSubscription>]: never; })[] & { [K_174 in Exclude<keyof I_1["stripe"]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"], keyof {
                            address?: string;
                            balance?: number;
                            currency?: string;
                            subscriptions?: any[];
                            tax_ids?: {
                                country?: string;
                                customer?: string;
                                type?: string;
                                value?: string;
                                verification?: {
                                    status?: string;
                                    verified_address?: string;
                                    verified_name?: string;
                                };
                            }[];
                            items?: {
                                id?: string;
                                quantity?: string;
                                subscription?: string;
                                plan?: {
                                    status?: boolean;
                                    nickname?: string;
                                    product?: string;
                                    amount?: number;
                                    usage_type?: string;
                                };
                                price?: {
                                    nickname?: string;
                                    product?: string;
                                    active?: boolean;
                                    billing_scheme?: string;
                                    currency?: string;
                                    recurring?: {
                                        interval?: string;
                                        interval_count?: number;
                                        trial_period_days?: number;
                                        usage_type?: string;
                                    };
                                };
                            }[];
                            default_tax_rates?: string[];
                        }[]>]: never; };
                        tax_ids?: {
                            country?: string;
                            customer?: string;
                            type?: string;
                            value?: string;
                            verification?: {
                                status?: string;
                                verified_address?: string;
                                verified_name?: string;
                            };
                        }[] & ({
                            country?: string;
                            customer?: string;
                            type?: string;
                            value?: string;
                            verification?: {
                                status?: string;
                                verified_address?: string;
                                verified_name?: string;
                            };
                        } & {
                            country?: string;
                            customer?: string;
                            type?: string;
                            value?: string;
                            verification?: {
                                status?: string;
                                verified_address?: string;
                                verified_name?: string;
                            } & {
                                status?: string;
                                verified_address?: string;
                                verified_name?: string;
                            } & { [K_175 in Exclude<keyof I_1["stripe"]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["tax_ids"][number]["verification"], keyof import("./stripe").StripeTaxVerification>]: never; };
                        } & { [K_176 in Exclude<keyof I_1["stripe"]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["tax_ids"][number], keyof import("./stripe").StripeTaxId>]: never; })[] & { [K_177 in Exclude<keyof I_1["stripe"]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["tax_ids"], keyof {
                            country?: string;
                            customer?: string;
                            type?: string;
                            value?: string;
                            verification?: {
                                status?: string;
                                verified_address?: string;
                                verified_name?: string;
                            };
                        }[]>]: never; };
                        items?: {
                            id?: string;
                            quantity?: string;
                            subscription?: string;
                            plan?: {
                                status?: boolean;
                                nickname?: string;
                                product?: string;
                                amount?: number;
                                usage_type?: string;
                            };
                            price?: {
                                nickname?: string;
                                product?: string;
                                active?: boolean;
                                billing_scheme?: string;
                                currency?: string;
                                recurring?: {
                                    interval?: string;
                                    interval_count?: number;
                                    trial_period_days?: number;
                                    usage_type?: string;
                                };
                            };
                        }[] & ({
                            id?: string;
                            quantity?: string;
                            subscription?: string;
                            plan?: {
                                status?: boolean;
                                nickname?: string;
                                product?: string;
                                amount?: number;
                                usage_type?: string;
                            };
                            price?: {
                                nickname?: string;
                                product?: string;
                                active?: boolean;
                                billing_scheme?: string;
                                currency?: string;
                                recurring?: {
                                    interval?: string;
                                    interval_count?: number;
                                    trial_period_days?: number;
                                    usage_type?: string;
                                };
                            };
                        } & {
                            id?: string;
                            quantity?: string;
                            subscription?: string;
                            plan?: {
                                status?: boolean;
                                nickname?: string;
                                product?: string;
                                amount?: number;
                                usage_type?: string;
                            } & {
                                status?: boolean;
                                nickname?: string;
                                product?: string;
                                amount?: number;
                                usage_type?: string;
                            } & { [K_178 in Exclude<keyof I_1["stripe"]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["items"][number]["plan"], keyof import("./stripe").StripePlan>]: never; };
                            price?: {
                                nickname?: string;
                                product?: string;
                                active?: boolean;
                                billing_scheme?: string;
                                currency?: string;
                                recurring?: {
                                    interval?: string;
                                    interval_count?: number;
                                    trial_period_days?: number;
                                    usage_type?: string;
                                };
                            } & {
                                nickname?: string;
                                product?: string;
                                active?: boolean;
                                billing_scheme?: string;
                                currency?: string;
                                recurring?: {
                                    interval?: string;
                                    interval_count?: number;
                                    trial_period_days?: number;
                                    usage_type?: string;
                                } & {
                                    interval?: string;
                                    interval_count?: number;
                                    trial_period_days?: number;
                                    usage_type?: string;
                                } & { [K_179 in Exclude<keyof I_1["stripe"]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["items"][number]["price"]["recurring"], keyof import("./stripe").StripeRecurring>]: never; };
                            } & { [K_180 in Exclude<keyof I_1["stripe"]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["items"][number]["price"], keyof import("./stripe").StripePrice>]: never; };
                        } & { [K_181 in Exclude<keyof I_1["stripe"]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["items"][number], keyof import("./stripe").StripeSubscriptionItem>]: never; })[] & { [K_182 in Exclude<keyof I_1["stripe"]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["items"], keyof {
                            id?: string;
                            quantity?: string;
                            subscription?: string;
                            plan?: {
                                status?: boolean;
                                nickname?: string;
                                product?: string;
                                amount?: number;
                                usage_type?: string;
                            };
                            price?: {
                                nickname?: string;
                                product?: string;
                                active?: boolean;
                                billing_scheme?: string;
                                currency?: string;
                                recurring?: {
                                    interval?: string;
                                    interval_count?: number;
                                    trial_period_days?: number;
                                    usage_type?: string;
                                };
                            };
                        }[]>]: never; };
                        default_tax_rates?: string[] & string[] & { [K_183 in Exclude<keyof I_1["stripe"]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["default_tax_rates"], keyof string[]>]: never; };
                    } & { [K_184 in Exclude<keyof I_1["stripe"]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number], keyof import("./stripe").StripeSubscription>]: never; })[] & { [K_185 in Exclude<keyof I_1["stripe"]["subscriptions"][number]["subscriptions"][number]["subscriptions"], keyof {
                        address?: string;
                        balance?: number;
                        currency?: string;
                        subscriptions?: any[];
                        tax_ids?: {
                            country?: string;
                            customer?: string;
                            type?: string;
                            value?: string;
                            verification?: {
                                status?: string;
                                verified_address?: string;
                                verified_name?: string;
                            };
                        }[];
                        items?: {
                            id?: string;
                            quantity?: string;
                            subscription?: string;
                            plan?: {
                                status?: boolean;
                                nickname?: string;
                                product?: string;
                                amount?: number;
                                usage_type?: string;
                            };
                            price?: {
                                nickname?: string;
                                product?: string;
                                active?: boolean;
                                billing_scheme?: string;
                                currency?: string;
                                recurring?: {
                                    interval?: string;
                                    interval_count?: number;
                                    trial_period_days?: number;
                                    usage_type?: string;
                                };
                            };
                        }[];
                        default_tax_rates?: string[];
                    }[]>]: never; };
                    tax_ids?: {
                        country?: string;
                        customer?: string;
                        type?: string;
                        value?: string;
                        verification?: {
                            status?: string;
                            verified_address?: string;
                            verified_name?: string;
                        };
                    }[] & ({
                        country?: string;
                        customer?: string;
                        type?: string;
                        value?: string;
                        verification?: {
                            status?: string;
                            verified_address?: string;
                            verified_name?: string;
                        };
                    } & {
                        country?: string;
                        customer?: string;
                        type?: string;
                        value?: string;
                        verification?: {
                            status?: string;
                            verified_address?: string;
                            verified_name?: string;
                        } & {
                            status?: string;
                            verified_address?: string;
                            verified_name?: string;
                        } & { [K_186 in Exclude<keyof I_1["stripe"]["subscriptions"][number]["subscriptions"][number]["tax_ids"][number]["verification"], keyof import("./stripe").StripeTaxVerification>]: never; };
                    } & { [K_187 in Exclude<keyof I_1["stripe"]["subscriptions"][number]["subscriptions"][number]["tax_ids"][number], keyof import("./stripe").StripeTaxId>]: never; })[] & { [K_188 in Exclude<keyof I_1["stripe"]["subscriptions"][number]["subscriptions"][number]["tax_ids"], keyof {
                        country?: string;
                        customer?: string;
                        type?: string;
                        value?: string;
                        verification?: {
                            status?: string;
                            verified_address?: string;
                            verified_name?: string;
                        };
                    }[]>]: never; };
                    items?: {
                        id?: string;
                        quantity?: string;
                        subscription?: string;
                        plan?: {
                            status?: boolean;
                            nickname?: string;
                            product?: string;
                            amount?: number;
                            usage_type?: string;
                        };
                        price?: {
                            nickname?: string;
                            product?: string;
                            active?: boolean;
                            billing_scheme?: string;
                            currency?: string;
                            recurring?: {
                                interval?: string;
                                interval_count?: number;
                                trial_period_days?: number;
                                usage_type?: string;
                            };
                        };
                    }[] & ({
                        id?: string;
                        quantity?: string;
                        subscription?: string;
                        plan?: {
                            status?: boolean;
                            nickname?: string;
                            product?: string;
                            amount?: number;
                            usage_type?: string;
                        };
                        price?: {
                            nickname?: string;
                            product?: string;
                            active?: boolean;
                            billing_scheme?: string;
                            currency?: string;
                            recurring?: {
                                interval?: string;
                                interval_count?: number;
                                trial_period_days?: number;
                                usage_type?: string;
                            };
                        };
                    } & {
                        id?: string;
                        quantity?: string;
                        subscription?: string;
                        plan?: {
                            status?: boolean;
                            nickname?: string;
                            product?: string;
                            amount?: number;
                            usage_type?: string;
                        } & {
                            status?: boolean;
                            nickname?: string;
                            product?: string;
                            amount?: number;
                            usage_type?: string;
                        } & { [K_189 in Exclude<keyof I_1["stripe"]["subscriptions"][number]["subscriptions"][number]["items"][number]["plan"], keyof import("./stripe").StripePlan>]: never; };
                        price?: {
                            nickname?: string;
                            product?: string;
                            active?: boolean;
                            billing_scheme?: string;
                            currency?: string;
                            recurring?: {
                                interval?: string;
                                interval_count?: number;
                                trial_period_days?: number;
                                usage_type?: string;
                            };
                        } & {
                            nickname?: string;
                            product?: string;
                            active?: boolean;
                            billing_scheme?: string;
                            currency?: string;
                            recurring?: {
                                interval?: string;
                                interval_count?: number;
                                trial_period_days?: number;
                                usage_type?: string;
                            } & {
                                interval?: string;
                                interval_count?: number;
                                trial_period_days?: number;
                                usage_type?: string;
                            } & { [K_190 in Exclude<keyof I_1["stripe"]["subscriptions"][number]["subscriptions"][number]["items"][number]["price"]["recurring"], keyof import("./stripe").StripeRecurring>]: never; };
                        } & { [K_191 in Exclude<keyof I_1["stripe"]["subscriptions"][number]["subscriptions"][number]["items"][number]["price"], keyof import("./stripe").StripePrice>]: never; };
                    } & { [K_192 in Exclude<keyof I_1["stripe"]["subscriptions"][number]["subscriptions"][number]["items"][number], keyof import("./stripe").StripeSubscriptionItem>]: never; })[] & { [K_193 in Exclude<keyof I_1["stripe"]["subscriptions"][number]["subscriptions"][number]["items"], keyof {
                        id?: string;
                        quantity?: string;
                        subscription?: string;
                        plan?: {
                            status?: boolean;
                            nickname?: string;
                            product?: string;
                            amount?: number;
                            usage_type?: string;
                        };
                        price?: {
                            nickname?: string;
                            product?: string;
                            active?: boolean;
                            billing_scheme?: string;
                            currency?: string;
                            recurring?: {
                                interval?: string;
                                interval_count?: number;
                                trial_period_days?: number;
                                usage_type?: string;
                            };
                        };
                    }[]>]: never; };
                    default_tax_rates?: string[] & string[] & { [K_194 in Exclude<keyof I_1["stripe"]["subscriptions"][number]["subscriptions"][number]["default_tax_rates"], keyof string[]>]: never; };
                } & { [K_195 in Exclude<keyof I_1["stripe"]["subscriptions"][number]["subscriptions"][number], keyof import("./stripe").StripeSubscription>]: never; })[] & { [K_196 in Exclude<keyof I_1["stripe"]["subscriptions"][number]["subscriptions"], keyof {
                    address?: string;
                    balance?: number;
                    currency?: string;
                    subscriptions?: any[];
                    tax_ids?: {
                        country?: string;
                        customer?: string;
                        type?: string;
                        value?: string;
                        verification?: {
                            status?: string;
                            verified_address?: string;
                            verified_name?: string;
                        };
                    }[];
                    items?: {
                        id?: string;
                        quantity?: string;
                        subscription?: string;
                        plan?: {
                            status?: boolean;
                            nickname?: string;
                            product?: string;
                            amount?: number;
                            usage_type?: string;
                        };
                        price?: {
                            nickname?: string;
                            product?: string;
                            active?: boolean;
                            billing_scheme?: string;
                            currency?: string;
                            recurring?: {
                                interval?: string;
                                interval_count?: number;
                                trial_period_days?: number;
                                usage_type?: string;
                            };
                        };
                    }[];
                    default_tax_rates?: string[];
                }[]>]: never; };
                tax_ids?: {
                    country?: string;
                    customer?: string;
                    type?: string;
                    value?: string;
                    verification?: {
                        status?: string;
                        verified_address?: string;
                        verified_name?: string;
                    };
                }[] & ({
                    country?: string;
                    customer?: string;
                    type?: string;
                    value?: string;
                    verification?: {
                        status?: string;
                        verified_address?: string;
                        verified_name?: string;
                    };
                } & {
                    country?: string;
                    customer?: string;
                    type?: string;
                    value?: string;
                    verification?: {
                        status?: string;
                        verified_address?: string;
                        verified_name?: string;
                    } & {
                        status?: string;
                        verified_address?: string;
                        verified_name?: string;
                    } & { [K_197 in Exclude<keyof I_1["stripe"]["subscriptions"][number]["tax_ids"][number]["verification"], keyof import("./stripe").StripeTaxVerification>]: never; };
                } & { [K_198 in Exclude<keyof I_1["stripe"]["subscriptions"][number]["tax_ids"][number], keyof import("./stripe").StripeTaxId>]: never; })[] & { [K_199 in Exclude<keyof I_1["stripe"]["subscriptions"][number]["tax_ids"], keyof {
                    country?: string;
                    customer?: string;
                    type?: string;
                    value?: string;
                    verification?: {
                        status?: string;
                        verified_address?: string;
                        verified_name?: string;
                    };
                }[]>]: never; };
                items?: {
                    id?: string;
                    quantity?: string;
                    subscription?: string;
                    plan?: {
                        status?: boolean;
                        nickname?: string;
                        product?: string;
                        amount?: number;
                        usage_type?: string;
                    };
                    price?: {
                        nickname?: string;
                        product?: string;
                        active?: boolean;
                        billing_scheme?: string;
                        currency?: string;
                        recurring?: {
                            interval?: string;
                            interval_count?: number;
                            trial_period_days?: number;
                            usage_type?: string;
                        };
                    };
                }[] & ({
                    id?: string;
                    quantity?: string;
                    subscription?: string;
                    plan?: {
                        status?: boolean;
                        nickname?: string;
                        product?: string;
                        amount?: number;
                        usage_type?: string;
                    };
                    price?: {
                        nickname?: string;
                        product?: string;
                        active?: boolean;
                        billing_scheme?: string;
                        currency?: string;
                        recurring?: {
                            interval?: string;
                            interval_count?: number;
                            trial_period_days?: number;
                            usage_type?: string;
                        };
                    };
                } & {
                    id?: string;
                    quantity?: string;
                    subscription?: string;
                    plan?: {
                        status?: boolean;
                        nickname?: string;
                        product?: string;
                        amount?: number;
                        usage_type?: string;
                    } & {
                        status?: boolean;
                        nickname?: string;
                        product?: string;
                        amount?: number;
                        usage_type?: string;
                    } & { [K_200 in Exclude<keyof I_1["stripe"]["subscriptions"][number]["items"][number]["plan"], keyof import("./stripe").StripePlan>]: never; };
                    price?: {
                        nickname?: string;
                        product?: string;
                        active?: boolean;
                        billing_scheme?: string;
                        currency?: string;
                        recurring?: {
                            interval?: string;
                            interval_count?: number;
                            trial_period_days?: number;
                            usage_type?: string;
                        };
                    } & {
                        nickname?: string;
                        product?: string;
                        active?: boolean;
                        billing_scheme?: string;
                        currency?: string;
                        recurring?: {
                            interval?: string;
                            interval_count?: number;
                            trial_period_days?: number;
                            usage_type?: string;
                        } & {
                            interval?: string;
                            interval_count?: number;
                            trial_period_days?: number;
                            usage_type?: string;
                        } & { [K_201 in Exclude<keyof I_1["stripe"]["subscriptions"][number]["items"][number]["price"]["recurring"], keyof import("./stripe").StripeRecurring>]: never; };
                    } & { [K_202 in Exclude<keyof I_1["stripe"]["subscriptions"][number]["items"][number]["price"], keyof import("./stripe").StripePrice>]: never; };
                } & { [K_203 in Exclude<keyof I_1["stripe"]["subscriptions"][number]["items"][number], keyof import("./stripe").StripeSubscriptionItem>]: never; })[] & { [K_204 in Exclude<keyof I_1["stripe"]["subscriptions"][number]["items"], keyof {
                    id?: string;
                    quantity?: string;
                    subscription?: string;
                    plan?: {
                        status?: boolean;
                        nickname?: string;
                        product?: string;
                        amount?: number;
                        usage_type?: string;
                    };
                    price?: {
                        nickname?: string;
                        product?: string;
                        active?: boolean;
                        billing_scheme?: string;
                        currency?: string;
                        recurring?: {
                            interval?: string;
                            interval_count?: number;
                            trial_period_days?: number;
                            usage_type?: string;
                        };
                    };
                }[]>]: never; };
                default_tax_rates?: string[] & string[] & { [K_205 in Exclude<keyof I_1["stripe"]["subscriptions"][number]["default_tax_rates"], keyof string[]>]: never; };
            } & { [K_206 in Exclude<keyof I_1["stripe"]["subscriptions"][number], keyof import("./stripe").StripeSubscription>]: never; })[] & { [K_207 in Exclude<keyof I_1["stripe"]["subscriptions"], keyof {
                address?: string;
                balance?: number;
                currency?: string;
                subscriptions?: any[];
                tax_ids?: {
                    country?: string;
                    customer?: string;
                    type?: string;
                    value?: string;
                    verification?: {
                        status?: string;
                        verified_address?: string;
                        verified_name?: string;
                    };
                }[];
                items?: {
                    id?: string;
                    quantity?: string;
                    subscription?: string;
                    plan?: {
                        status?: boolean;
                        nickname?: string;
                        product?: string;
                        amount?: number;
                        usage_type?: string;
                    };
                    price?: {
                        nickname?: string;
                        product?: string;
                        active?: boolean;
                        billing_scheme?: string;
                        currency?: string;
                        recurring?: {
                            interval?: string;
                            interval_count?: number;
                            trial_period_days?: number;
                            usage_type?: string;
                        };
                    };
                }[];
                default_tax_rates?: string[];
            }[]>]: never; };
            discount?: {
                subscription?: string;
                start?: number;
                customer?: string;
                coupon?: {
                    duration?: string;
                    duration_in_months?: number;
                    name?: string;
                };
            } & {
                subscription?: string;
                start?: number;
                customer?: string;
                coupon?: {
                    duration?: string;
                    duration_in_months?: number;
                    name?: string;
                } & {
                    duration?: string;
                    duration_in_months?: number;
                    name?: string;
                } & { [K_208 in Exclude<keyof I_1["stripe"]["discount"]["coupon"], keyof import("./stripe").StripeCoupon>]: never; };
            } & { [K_209 in Exclude<keyof I_1["stripe"]["discount"], keyof import("./stripe").StripeCustomerDiscount>]: never; };
        } & { [K_210 in Exclude<keyof I_1["stripe"], keyof StripeCustomer>]: never; };
        ensureas?: string;
    } & { [K_211 in Exclude<keyof I_1, keyof EnsureCustomerRequest>]: never; }>(object: I_1): EnsureCustomerRequest;
};
export declare const EnsureCustomerResponse: {
    encode(message: EnsureCustomerResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EnsureCustomerResponse;
    fromJSON(object: any): EnsureCustomerResponse;
    toJSON(message: EnsureCustomerResponse): unknown;
    create<I extends {
        customer?: {
            _id?: string;
            _type?: string;
            stripeid?: string;
            userid?: string;
            name?: string;
            country?: string;
            email?: string;
            address?: string;
            vattype?: string;
            vatnumber?: string;
            taxrate?: string;
            tax?: number;
            coupon?: string;
            hascard?: boolean;
            memory?: string;
            openflowuserplan?: string;
            supportplan?: string;
            supporthourplan?: string;
            subscriptionid?: string;
            admins?: string;
            users?: string;
            customattr1?: string;
            customattr2?: string;
            customattr3?: string;
            customattr4?: string;
            customattr5?: string;
            domains?: string[];
            dbusage?: number;
            dblocked?: boolean;
        };
        stripe?: {
            address?: {
                line1?: string;
                line2?: string;
                postal_code?: string;
                city?: string;
                state?: string;
                country?: string;
            };
            description?: string;
            name?: string;
            email?: string;
            tax_ids?: {
                country?: string;
                customer?: string;
                type?: string;
                value?: string;
                verification?: {
                    status?: string;
                    verified_address?: string;
                    verified_name?: string;
                };
            }[];
            subscriptions?: {
                address?: string;
                balance?: number;
                currency?: string;
                subscriptions?: any[];
                tax_ids?: {
                    country?: string;
                    customer?: string;
                    type?: string;
                    value?: string;
                    verification?: {
                        status?: string;
                        verified_address?: string;
                        verified_name?: string;
                    };
                }[];
                items?: {
                    id?: string;
                    quantity?: string;
                    subscription?: string;
                    plan?: {
                        status?: boolean;
                        nickname?: string;
                        product?: string;
                        amount?: number;
                        usage_type?: string;
                    };
                    price?: {
                        nickname?: string;
                        product?: string;
                        active?: boolean;
                        billing_scheme?: string;
                        currency?: string;
                        recurring?: {
                            interval?: string;
                            interval_count?: number;
                            trial_period_days?: number;
                            usage_type?: string;
                        };
                    };
                }[];
                default_tax_rates?: string[];
            }[];
            discount?: {
                subscription?: string;
                start?: number;
                customer?: string;
                coupon?: {
                    duration?: string;
                    duration_in_months?: number;
                    name?: string;
                };
            };
        };
    } & {
        customer?: {
            _id?: string;
            _type?: string;
            stripeid?: string;
            userid?: string;
            name?: string;
            country?: string;
            email?: string;
            address?: string;
            vattype?: string;
            vatnumber?: string;
            taxrate?: string;
            tax?: number;
            coupon?: string;
            hascard?: boolean;
            memory?: string;
            openflowuserplan?: string;
            supportplan?: string;
            supporthourplan?: string;
            subscriptionid?: string;
            admins?: string;
            users?: string;
            customattr1?: string;
            customattr2?: string;
            customattr3?: string;
            customattr4?: string;
            customattr5?: string;
            domains?: string[];
            dbusage?: number;
            dblocked?: boolean;
        } & {
            _id?: string;
            _type?: string;
            stripeid?: string;
            userid?: string;
            name?: string;
            country?: string;
            email?: string;
            address?: string;
            vattype?: string;
            vatnumber?: string;
            taxrate?: string;
            tax?: number;
            coupon?: string;
            hascard?: boolean;
            memory?: string;
            openflowuserplan?: string;
            supportplan?: string;
            supporthourplan?: string;
            subscriptionid?: string;
            admins?: string;
            users?: string;
            customattr1?: string;
            customattr2?: string;
            customattr3?: string;
            customattr4?: string;
            customattr5?: string;
            domains?: string[] & string[] & { [K in Exclude<keyof I["customer"]["domains"], keyof string[]>]: never; };
            dbusage?: number;
            dblocked?: boolean;
        } & { [K_1 in Exclude<keyof I["customer"], keyof Customer>]: never; };
        stripe?: {
            address?: {
                line1?: string;
                line2?: string;
                postal_code?: string;
                city?: string;
                state?: string;
                country?: string;
            };
            description?: string;
            name?: string;
            email?: string;
            tax_ids?: {
                country?: string;
                customer?: string;
                type?: string;
                value?: string;
                verification?: {
                    status?: string;
                    verified_address?: string;
                    verified_name?: string;
                };
            }[];
            subscriptions?: {
                address?: string;
                balance?: number;
                currency?: string;
                subscriptions?: any[];
                tax_ids?: {
                    country?: string;
                    customer?: string;
                    type?: string;
                    value?: string;
                    verification?: {
                        status?: string;
                        verified_address?: string;
                        verified_name?: string;
                    };
                }[];
                items?: {
                    id?: string;
                    quantity?: string;
                    subscription?: string;
                    plan?: {
                        status?: boolean;
                        nickname?: string;
                        product?: string;
                        amount?: number;
                        usage_type?: string;
                    };
                    price?: {
                        nickname?: string;
                        product?: string;
                        active?: boolean;
                        billing_scheme?: string;
                        currency?: string;
                        recurring?: {
                            interval?: string;
                            interval_count?: number;
                            trial_period_days?: number;
                            usage_type?: string;
                        };
                    };
                }[];
                default_tax_rates?: string[];
            }[];
            discount?: {
                subscription?: string;
                start?: number;
                customer?: string;
                coupon?: {
                    duration?: string;
                    duration_in_months?: number;
                    name?: string;
                };
            };
        } & {
            address?: {
                line1?: string;
                line2?: string;
                postal_code?: string;
                city?: string;
                state?: string;
                country?: string;
            } & {
                line1?: string;
                line2?: string;
                postal_code?: string;
                city?: string;
                state?: string;
                country?: string;
            } & { [K_2 in Exclude<keyof I["stripe"]["address"], keyof import("./stripe").StripeCustomerAddress>]: never; };
            description?: string;
            name?: string;
            email?: string;
            tax_ids?: {
                country?: string;
                customer?: string;
                type?: string;
                value?: string;
                verification?: {
                    status?: string;
                    verified_address?: string;
                    verified_name?: string;
                };
            }[] & ({
                country?: string;
                customer?: string;
                type?: string;
                value?: string;
                verification?: {
                    status?: string;
                    verified_address?: string;
                    verified_name?: string;
                };
            } & {
                country?: string;
                customer?: string;
                type?: string;
                value?: string;
                verification?: {
                    status?: string;
                    verified_address?: string;
                    verified_name?: string;
                } & {
                    status?: string;
                    verified_address?: string;
                    verified_name?: string;
                } & { [K_3 in Exclude<keyof I["stripe"]["tax_ids"][number]["verification"], keyof import("./stripe").StripeTaxVerification>]: never; };
            } & { [K_4 in Exclude<keyof I["stripe"]["tax_ids"][number], keyof import("./stripe").StripeTaxId>]: never; })[] & { [K_5 in Exclude<keyof I["stripe"]["tax_ids"], keyof {
                country?: string;
                customer?: string;
                type?: string;
                value?: string;
                verification?: {
                    status?: string;
                    verified_address?: string;
                    verified_name?: string;
                };
            }[]>]: never; };
            subscriptions?: {
                address?: string;
                balance?: number;
                currency?: string;
                subscriptions?: any[];
                tax_ids?: {
                    country?: string;
                    customer?: string;
                    type?: string;
                    value?: string;
                    verification?: {
                        status?: string;
                        verified_address?: string;
                        verified_name?: string;
                    };
                }[];
                items?: {
                    id?: string;
                    quantity?: string;
                    subscription?: string;
                    plan?: {
                        status?: boolean;
                        nickname?: string;
                        product?: string;
                        amount?: number;
                        usage_type?: string;
                    };
                    price?: {
                        nickname?: string;
                        product?: string;
                        active?: boolean;
                        billing_scheme?: string;
                        currency?: string;
                        recurring?: {
                            interval?: string;
                            interval_count?: number;
                            trial_period_days?: number;
                            usage_type?: string;
                        };
                    };
                }[];
                default_tax_rates?: string[];
            }[] & ({
                address?: string;
                balance?: number;
                currency?: string;
                subscriptions?: any[];
                tax_ids?: {
                    country?: string;
                    customer?: string;
                    type?: string;
                    value?: string;
                    verification?: {
                        status?: string;
                        verified_address?: string;
                        verified_name?: string;
                    };
                }[];
                items?: {
                    id?: string;
                    quantity?: string;
                    subscription?: string;
                    plan?: {
                        status?: boolean;
                        nickname?: string;
                        product?: string;
                        amount?: number;
                        usage_type?: string;
                    };
                    price?: {
                        nickname?: string;
                        product?: string;
                        active?: boolean;
                        billing_scheme?: string;
                        currency?: string;
                        recurring?: {
                            interval?: string;
                            interval_count?: number;
                            trial_period_days?: number;
                            usage_type?: string;
                        };
                    };
                }[];
                default_tax_rates?: string[];
            } & {
                address?: string;
                balance?: number;
                currency?: string;
                subscriptions?: {
                    address?: string;
                    balance?: number;
                    currency?: string;
                    subscriptions?: any[];
                    tax_ids?: {
                        country?: string;
                        customer?: string;
                        type?: string;
                        value?: string;
                        verification?: {
                            status?: string;
                            verified_address?: string;
                            verified_name?: string;
                        };
                    }[];
                    items?: {
                        id?: string;
                        quantity?: string;
                        subscription?: string;
                        plan?: {
                            status?: boolean;
                            nickname?: string;
                            product?: string;
                            amount?: number;
                            usage_type?: string;
                        };
                        price?: {
                            nickname?: string;
                            product?: string;
                            active?: boolean;
                            billing_scheme?: string;
                            currency?: string;
                            recurring?: {
                                interval?: string;
                                interval_count?: number;
                                trial_period_days?: number;
                                usage_type?: string;
                            };
                        };
                    }[];
                    default_tax_rates?: string[];
                }[] & ({
                    address?: string;
                    balance?: number;
                    currency?: string;
                    subscriptions?: any[];
                    tax_ids?: {
                        country?: string;
                        customer?: string;
                        type?: string;
                        value?: string;
                        verification?: {
                            status?: string;
                            verified_address?: string;
                            verified_name?: string;
                        };
                    }[];
                    items?: {
                        id?: string;
                        quantity?: string;
                        subscription?: string;
                        plan?: {
                            status?: boolean;
                            nickname?: string;
                            product?: string;
                            amount?: number;
                            usage_type?: string;
                        };
                        price?: {
                            nickname?: string;
                            product?: string;
                            active?: boolean;
                            billing_scheme?: string;
                            currency?: string;
                            recurring?: {
                                interval?: string;
                                interval_count?: number;
                                trial_period_days?: number;
                                usage_type?: string;
                            };
                        };
                    }[];
                    default_tax_rates?: string[];
                } & {
                    address?: string;
                    balance?: number;
                    currency?: string;
                    subscriptions?: {
                        address?: string;
                        balance?: number;
                        currency?: string;
                        subscriptions?: any[];
                        tax_ids?: {
                            country?: string;
                            customer?: string;
                            type?: string;
                            value?: string;
                            verification?: {
                                status?: string;
                                verified_address?: string;
                                verified_name?: string;
                            };
                        }[];
                        items?: {
                            id?: string;
                            quantity?: string;
                            subscription?: string;
                            plan?: {
                                status?: boolean;
                                nickname?: string;
                                product?: string;
                                amount?: number;
                                usage_type?: string;
                            };
                            price?: {
                                nickname?: string;
                                product?: string;
                                active?: boolean;
                                billing_scheme?: string;
                                currency?: string;
                                recurring?: {
                                    interval?: string;
                                    interval_count?: number;
                                    trial_period_days?: number;
                                    usage_type?: string;
                                };
                            };
                        }[];
                        default_tax_rates?: string[];
                    }[] & ({
                        address?: string;
                        balance?: number;
                        currency?: string;
                        subscriptions?: any[];
                        tax_ids?: {
                            country?: string;
                            customer?: string;
                            type?: string;
                            value?: string;
                            verification?: {
                                status?: string;
                                verified_address?: string;
                                verified_name?: string;
                            };
                        }[];
                        items?: {
                            id?: string;
                            quantity?: string;
                            subscription?: string;
                            plan?: {
                                status?: boolean;
                                nickname?: string;
                                product?: string;
                                amount?: number;
                                usage_type?: string;
                            };
                            price?: {
                                nickname?: string;
                                product?: string;
                                active?: boolean;
                                billing_scheme?: string;
                                currency?: string;
                                recurring?: {
                                    interval?: string;
                                    interval_count?: number;
                                    trial_period_days?: number;
                                    usage_type?: string;
                                };
                            };
                        }[];
                        default_tax_rates?: string[];
                    } & {
                        address?: string;
                        balance?: number;
                        currency?: string;
                        subscriptions?: {
                            address?: string;
                            balance?: number;
                            currency?: string;
                            subscriptions?: any[];
                            tax_ids?: {
                                country?: string;
                                customer?: string;
                                type?: string;
                                value?: string;
                                verification?: {
                                    status?: string;
                                    verified_address?: string;
                                    verified_name?: string;
                                };
                            }[];
                            items?: {
                                id?: string;
                                quantity?: string;
                                subscription?: string;
                                plan?: {
                                    status?: boolean;
                                    nickname?: string;
                                    product?: string;
                                    amount?: number;
                                    usage_type?: string;
                                };
                                price?: {
                                    nickname?: string;
                                    product?: string;
                                    active?: boolean;
                                    billing_scheme?: string;
                                    currency?: string;
                                    recurring?: {
                                        interval?: string;
                                        interval_count?: number;
                                        trial_period_days?: number;
                                        usage_type?: string;
                                    };
                                };
                            }[];
                            default_tax_rates?: string[];
                        }[] & ({
                            address?: string;
                            balance?: number;
                            currency?: string;
                            subscriptions?: any[];
                            tax_ids?: {
                                country?: string;
                                customer?: string;
                                type?: string;
                                value?: string;
                                verification?: {
                                    status?: string;
                                    verified_address?: string;
                                    verified_name?: string;
                                };
                            }[];
                            items?: {
                                id?: string;
                                quantity?: string;
                                subscription?: string;
                                plan?: {
                                    status?: boolean;
                                    nickname?: string;
                                    product?: string;
                                    amount?: number;
                                    usage_type?: string;
                                };
                                price?: {
                                    nickname?: string;
                                    product?: string;
                                    active?: boolean;
                                    billing_scheme?: string;
                                    currency?: string;
                                    recurring?: {
                                        interval?: string;
                                        interval_count?: number;
                                        trial_period_days?: number;
                                        usage_type?: string;
                                    };
                                };
                            }[];
                            default_tax_rates?: string[];
                        } & {
                            address?: string;
                            balance?: number;
                            currency?: string;
                            subscriptions?: {
                                address?: string;
                                balance?: number;
                                currency?: string;
                                subscriptions?: any[];
                                tax_ids?: {
                                    country?: string;
                                    customer?: string;
                                    type?: string;
                                    value?: string;
                                    verification?: {
                                        status?: string;
                                        verified_address?: string;
                                        verified_name?: string;
                                    };
                                }[];
                                items?: {
                                    id?: string;
                                    quantity?: string;
                                    subscription?: string;
                                    plan?: {
                                        status?: boolean;
                                        nickname?: string;
                                        product?: string;
                                        amount?: number;
                                        usage_type?: string;
                                    };
                                    price?: {
                                        nickname?: string;
                                        product?: string;
                                        active?: boolean;
                                        billing_scheme?: string;
                                        currency?: string;
                                        recurring?: {
                                            interval?: string;
                                            interval_count?: number;
                                            trial_period_days?: number;
                                            usage_type?: string;
                                        };
                                    };
                                }[];
                                default_tax_rates?: string[];
                            }[] & ({
                                address?: string;
                                balance?: number;
                                currency?: string;
                                subscriptions?: any[];
                                tax_ids?: {
                                    country?: string;
                                    customer?: string;
                                    type?: string;
                                    value?: string;
                                    verification?: {
                                        status?: string;
                                        verified_address?: string;
                                        verified_name?: string;
                                    };
                                }[];
                                items?: {
                                    id?: string;
                                    quantity?: string;
                                    subscription?: string;
                                    plan?: {
                                        status?: boolean;
                                        nickname?: string;
                                        product?: string;
                                        amount?: number;
                                        usage_type?: string;
                                    };
                                    price?: {
                                        nickname?: string;
                                        product?: string;
                                        active?: boolean;
                                        billing_scheme?: string;
                                        currency?: string;
                                        recurring?: {
                                            interval?: string;
                                            interval_count?: number;
                                            trial_period_days?: number;
                                            usage_type?: string;
                                        };
                                    };
                                }[];
                                default_tax_rates?: string[];
                            } & {
                                address?: string;
                                balance?: number;
                                currency?: string;
                                subscriptions?: {
                                    address?: string;
                                    balance?: number;
                                    currency?: string;
                                    subscriptions?: any[];
                                    tax_ids?: {
                                        country?: string;
                                        customer?: string;
                                        type?: string;
                                        value?: string;
                                        verification?: {
                                            status?: string;
                                            verified_address?: string;
                                            verified_name?: string;
                                        };
                                    }[];
                                    items?: {
                                        id?: string;
                                        quantity?: string;
                                        subscription?: string;
                                        plan?: {
                                            status?: boolean;
                                            nickname?: string;
                                            product?: string;
                                            amount?: number;
                                            usage_type?: string;
                                        };
                                        price?: {
                                            nickname?: string;
                                            product?: string;
                                            active?: boolean;
                                            billing_scheme?: string;
                                            currency?: string;
                                            recurring?: {
                                                interval?: string;
                                                interval_count?: number;
                                                trial_period_days?: number;
                                                usage_type?: string;
                                            };
                                        };
                                    }[];
                                    default_tax_rates?: string[];
                                }[] & ({
                                    address?: string;
                                    balance?: number;
                                    currency?: string;
                                    subscriptions?: any[];
                                    tax_ids?: {
                                        country?: string;
                                        customer?: string;
                                        type?: string;
                                        value?: string;
                                        verification?: {
                                            status?: string;
                                            verified_address?: string;
                                            verified_name?: string;
                                        };
                                    }[];
                                    items?: {
                                        id?: string;
                                        quantity?: string;
                                        subscription?: string;
                                        plan?: {
                                            status?: boolean;
                                            nickname?: string;
                                            product?: string;
                                            amount?: number;
                                            usage_type?: string;
                                        };
                                        price?: {
                                            nickname?: string;
                                            product?: string;
                                            active?: boolean;
                                            billing_scheme?: string;
                                            currency?: string;
                                            recurring?: {
                                                interval?: string;
                                                interval_count?: number;
                                                trial_period_days?: number;
                                                usage_type?: string;
                                            };
                                        };
                                    }[];
                                    default_tax_rates?: string[];
                                } & {
                                    address?: string;
                                    balance?: number;
                                    currency?: string;
                                    subscriptions?: {
                                        address?: string;
                                        balance?: number;
                                        currency?: string;
                                        subscriptions?: any[];
                                        tax_ids?: {
                                            country?: string;
                                            customer?: string;
                                            type?: string;
                                            value?: string;
                                            verification?: {
                                                status?: string;
                                                verified_address?: string;
                                                verified_name?: string;
                                            };
                                        }[];
                                        items?: {
                                            id?: string;
                                            quantity?: string;
                                            subscription?: string;
                                            plan?: {
                                                status?: boolean;
                                                nickname?: string;
                                                product?: string;
                                                amount?: number;
                                                usage_type?: string;
                                            };
                                            price?: {
                                                nickname?: string;
                                                product?: string;
                                                active?: boolean;
                                                billing_scheme?: string;
                                                currency?: string;
                                                recurring?: {
                                                    interval?: string;
                                                    interval_count?: number;
                                                    trial_period_days?: number;
                                                    usage_type?: string;
                                                };
                                            };
                                        }[];
                                        default_tax_rates?: string[];
                                    }[] & ({
                                        address?: string;
                                        balance?: number;
                                        currency?: string;
                                        subscriptions?: any[];
                                        tax_ids?: {
                                            country?: string;
                                            customer?: string;
                                            type?: string;
                                            value?: string;
                                            verification?: {
                                                status?: string;
                                                verified_address?: string;
                                                verified_name?: string;
                                            };
                                        }[];
                                        items?: {
                                            id?: string;
                                            quantity?: string;
                                            subscription?: string;
                                            plan?: {
                                                status?: boolean;
                                                nickname?: string;
                                                product?: string;
                                                amount?: number;
                                                usage_type?: string;
                                            };
                                            price?: {
                                                nickname?: string;
                                                product?: string;
                                                active?: boolean;
                                                billing_scheme?: string;
                                                currency?: string;
                                                recurring?: {
                                                    interval?: string;
                                                    interval_count?: number;
                                                    trial_period_days?: number;
                                                    usage_type?: string;
                                                };
                                            };
                                        }[];
                                        default_tax_rates?: string[];
                                    } & {
                                        address?: string;
                                        balance?: number;
                                        currency?: string;
                                        subscriptions?: {
                                            address?: string;
                                            balance?: number;
                                            currency?: string;
                                            subscriptions?: any[];
                                            tax_ids?: {
                                                country?: string;
                                                customer?: string;
                                                type?: string;
                                                value?: string;
                                                verification?: {
                                                    status?: string;
                                                    verified_address?: string;
                                                    verified_name?: string;
                                                };
                                            }[];
                                            items?: {
                                                id?: string;
                                                quantity?: string;
                                                subscription?: string;
                                                plan?: {
                                                    status?: boolean;
                                                    nickname?: string;
                                                    product?: string;
                                                    amount?: number;
                                                    usage_type?: string;
                                                };
                                                price?: {
                                                    nickname?: string;
                                                    product?: string;
                                                    active?: boolean;
                                                    billing_scheme?: string;
                                                    currency?: string;
                                                    recurring?: {
                                                        interval?: string;
                                                        interval_count?: number;
                                                        trial_period_days?: number;
                                                        usage_type?: string;
                                                    };
                                                };
                                            }[];
                                            default_tax_rates?: string[];
                                        }[] & ({
                                            address?: string;
                                            balance?: number;
                                            currency?: string;
                                            subscriptions?: any[];
                                            tax_ids?: {
                                                country?: string;
                                                customer?: string;
                                                type?: string;
                                                value?: string;
                                                verification?: {
                                                    status?: string;
                                                    verified_address?: string;
                                                    verified_name?: string;
                                                };
                                            }[];
                                            items?: {
                                                id?: string;
                                                quantity?: string;
                                                subscription?: string;
                                                plan?: {
                                                    status?: boolean;
                                                    nickname?: string;
                                                    product?: string;
                                                    amount?: number;
                                                    usage_type?: string;
                                                };
                                                price?: {
                                                    nickname?: string;
                                                    product?: string;
                                                    active?: boolean;
                                                    billing_scheme?: string;
                                                    currency?: string;
                                                    recurring?: {
                                                        interval?: string;
                                                        interval_count?: number;
                                                        trial_period_days?: number;
                                                        usage_type?: string;
                                                    };
                                                };
                                            }[];
                                            default_tax_rates?: string[];
                                        } & {
                                            address?: string;
                                            balance?: number;
                                            currency?: string;
                                            subscriptions?: {
                                                address?: string;
                                                balance?: number;
                                                currency?: string;
                                                subscriptions?: any[];
                                                tax_ids?: {
                                                    country?: string;
                                                    customer?: string;
                                                    type?: string;
                                                    value?: string;
                                                    verification?: {
                                                        status?: string;
                                                        verified_address?: string;
                                                        verified_name?: string;
                                                    };
                                                }[];
                                                items?: {
                                                    id?: string;
                                                    quantity?: string;
                                                    subscription?: string;
                                                    plan?: {
                                                        status?: boolean;
                                                        nickname?: string;
                                                        product?: string;
                                                        amount?: number;
                                                        usage_type?: string;
                                                    };
                                                    price?: {
                                                        nickname?: string;
                                                        product?: string;
                                                        active?: boolean;
                                                        billing_scheme?: string;
                                                        currency?: string;
                                                        recurring?: {
                                                            interval?: string;
                                                            interval_count?: number;
                                                            trial_period_days?: number;
                                                            usage_type?: string;
                                                        };
                                                    };
                                                }[];
                                                default_tax_rates?: string[];
                                            }[] & ({
                                                address?: string;
                                                balance?: number;
                                                currency?: string;
                                                subscriptions?: any[];
                                                tax_ids?: {
                                                    country?: string;
                                                    customer?: string;
                                                    type?: string;
                                                    value?: string;
                                                    verification?: {
                                                        status?: string;
                                                        verified_address?: string;
                                                        verified_name?: string;
                                                    };
                                                }[];
                                                items?: {
                                                    id?: string;
                                                    quantity?: string;
                                                    subscription?: string;
                                                    plan?: {
                                                        status?: boolean;
                                                        nickname?: string;
                                                        product?: string;
                                                        amount?: number;
                                                        usage_type?: string;
                                                    };
                                                    price?: {
                                                        nickname?: string;
                                                        product?: string;
                                                        active?: boolean;
                                                        billing_scheme?: string;
                                                        currency?: string;
                                                        recurring?: {
                                                            interval?: string;
                                                            interval_count?: number;
                                                            trial_period_days?: number;
                                                            usage_type?: string;
                                                        };
                                                    };
                                                }[];
                                                default_tax_rates?: string[];
                                            } & {
                                                address?: string;
                                                balance?: number;
                                                currency?: string;
                                                subscriptions?: {
                                                    address?: string;
                                                    balance?: number;
                                                    currency?: string;
                                                    subscriptions?: any[];
                                                    tax_ids?: {
                                                        country?: string;
                                                        customer?: string;
                                                        type?: string;
                                                        value?: string;
                                                        verification?: {
                                                            status?: string;
                                                            verified_address?: string;
                                                            verified_name?: string;
                                                        };
                                                    }[];
                                                    items?: {
                                                        id?: string;
                                                        quantity?: string;
                                                        subscription?: string;
                                                        plan?: {
                                                            status?: boolean;
                                                            nickname?: string;
                                                            product?: string;
                                                            amount?: number;
                                                            usage_type?: string;
                                                        };
                                                        price?: {
                                                            nickname?: string;
                                                            product?: string;
                                                            active?: boolean;
                                                            billing_scheme?: string;
                                                            currency?: string;
                                                            recurring?: {
                                                                interval?: string;
                                                                interval_count?: number;
                                                                trial_period_days?: number;
                                                                usage_type?: string;
                                                            };
                                                        };
                                                    }[];
                                                    default_tax_rates?: string[];
                                                }[] & ({
                                                    address?: string;
                                                    balance?: number;
                                                    currency?: string;
                                                    subscriptions?: any[];
                                                    tax_ids?: {
                                                        country?: string;
                                                        customer?: string;
                                                        type?: string;
                                                        value?: string;
                                                        verification?: {
                                                            status?: string;
                                                            verified_address?: string;
                                                            verified_name?: string;
                                                        };
                                                    }[];
                                                    items?: {
                                                        id?: string;
                                                        quantity?: string;
                                                        subscription?: string;
                                                        plan?: {
                                                            status?: boolean;
                                                            nickname?: string;
                                                            product?: string;
                                                            amount?: number;
                                                            usage_type?: string;
                                                        };
                                                        price?: {
                                                            nickname?: string;
                                                            product?: string;
                                                            active?: boolean;
                                                            billing_scheme?: string;
                                                            currency?: string;
                                                            recurring?: {
                                                                interval?: string;
                                                                interval_count?: number;
                                                                trial_period_days?: number;
                                                                usage_type?: string;
                                                            };
                                                        };
                                                    }[];
                                                    default_tax_rates?: string[];
                                                } & any & { [K_6 in Exclude<keyof I["stripe"]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number], keyof import("./stripe").StripeSubscription>]: never; })[] & { [K_7 in Exclude<keyof I["stripe"]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"], keyof {
                                                    address?: string;
                                                    balance?: number;
                                                    currency?: string;
                                                    subscriptions?: any[];
                                                    tax_ids?: {
                                                        country?: string;
                                                        customer?: string;
                                                        type?: string;
                                                        value?: string;
                                                        verification?: {
                                                            status?: string;
                                                            verified_address?: string;
                                                            verified_name?: string;
                                                        };
                                                    }[];
                                                    items?: {
                                                        id?: string;
                                                        quantity?: string;
                                                        subscription?: string;
                                                        plan?: {
                                                            status?: boolean;
                                                            nickname?: string;
                                                            product?: string;
                                                            amount?: number;
                                                            usage_type?: string;
                                                        };
                                                        price?: {
                                                            nickname?: string;
                                                            product?: string;
                                                            active?: boolean;
                                                            billing_scheme?: string;
                                                            currency?: string;
                                                            recurring?: {
                                                                interval?: string;
                                                                interval_count?: number;
                                                                trial_period_days?: number;
                                                                usage_type?: string;
                                                            };
                                                        };
                                                    }[];
                                                    default_tax_rates?: string[];
                                                }[]>]: never; };
                                                tax_ids?: {
                                                    country?: string;
                                                    customer?: string;
                                                    type?: string;
                                                    value?: string;
                                                    verification?: {
                                                        status?: string;
                                                        verified_address?: string;
                                                        verified_name?: string;
                                                    };
                                                }[] & ({
                                                    country?: string;
                                                    customer?: string;
                                                    type?: string;
                                                    value?: string;
                                                    verification?: {
                                                        status?: string;
                                                        verified_address?: string;
                                                        verified_name?: string;
                                                    };
                                                } & any & { [K_8 in Exclude<keyof I["stripe"]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["tax_ids"][number], keyof import("./stripe").StripeTaxId>]: never; })[] & { [K_9 in Exclude<keyof I["stripe"]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["tax_ids"], keyof {
                                                    country?: string;
                                                    customer?: string;
                                                    type?: string;
                                                    value?: string;
                                                    verification?: {
                                                        status?: string;
                                                        verified_address?: string;
                                                        verified_name?: string;
                                                    };
                                                }[]>]: never; };
                                                items?: {
                                                    id?: string;
                                                    quantity?: string;
                                                    subscription?: string;
                                                    plan?: {
                                                        status?: boolean;
                                                        nickname?: string;
                                                        product?: string;
                                                        amount?: number;
                                                        usage_type?: string;
                                                    };
                                                    price?: {
                                                        nickname?: string;
                                                        product?: string;
                                                        active?: boolean;
                                                        billing_scheme?: string;
                                                        currency?: string;
                                                        recurring?: {
                                                            interval?: string;
                                                            interval_count?: number;
                                                            trial_period_days?: number;
                                                            usage_type?: string;
                                                        };
                                                    };
                                                }[] & ({
                                                    id?: string;
                                                    quantity?: string;
                                                    subscription?: string;
                                                    plan?: {
                                                        status?: boolean;
                                                        nickname?: string;
                                                        product?: string;
                                                        amount?: number;
                                                        usage_type?: string;
                                                    };
                                                    price?: {
                                                        nickname?: string;
                                                        product?: string;
                                                        active?: boolean;
                                                        billing_scheme?: string;
                                                        currency?: string;
                                                        recurring?: {
                                                            interval?: string;
                                                            interval_count?: number;
                                                            trial_period_days?: number;
                                                            usage_type?: string;
                                                        };
                                                    };
                                                } & any & { [K_10 in Exclude<keyof I["stripe"]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["items"][number], keyof import("./stripe").StripeSubscriptionItem>]: never; })[] & { [K_11 in Exclude<keyof I["stripe"]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["items"], keyof {
                                                    id?: string;
                                                    quantity?: string;
                                                    subscription?: string;
                                                    plan?: {
                                                        status?: boolean;
                                                        nickname?: string;
                                                        product?: string;
                                                        amount?: number;
                                                        usage_type?: string;
                                                    };
                                                    price?: {
                                                        nickname?: string;
                                                        product?: string;
                                                        active?: boolean;
                                                        billing_scheme?: string;
                                                        currency?: string;
                                                        recurring?: {
                                                            interval?: string;
                                                            interval_count?: number;
                                                            trial_period_days?: number;
                                                            usage_type?: string;
                                                        };
                                                    };
                                                }[]>]: never; };
                                                default_tax_rates?: string[] & string[] & { [K_12 in Exclude<keyof I["stripe"]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["default_tax_rates"], keyof string[]>]: never; };
                                            } & { [K_13 in Exclude<keyof I["stripe"]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number], keyof import("./stripe").StripeSubscription>]: never; })[] & { [K_14 in Exclude<keyof I["stripe"]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"], keyof {
                                                address?: string;
                                                balance?: number;
                                                currency?: string;
                                                subscriptions?: any[];
                                                tax_ids?: {
                                                    country?: string;
                                                    customer?: string;
                                                    type?: string;
                                                    value?: string;
                                                    verification?: {
                                                        status?: string;
                                                        verified_address?: string;
                                                        verified_name?: string;
                                                    };
                                                }[];
                                                items?: {
                                                    id?: string;
                                                    quantity?: string;
                                                    subscription?: string;
                                                    plan?: {
                                                        status?: boolean;
                                                        nickname?: string;
                                                        product?: string;
                                                        amount?: number;
                                                        usage_type?: string;
                                                    };
                                                    price?: {
                                                        nickname?: string;
                                                        product?: string;
                                                        active?: boolean;
                                                        billing_scheme?: string;
                                                        currency?: string;
                                                        recurring?: {
                                                            interval?: string;
                                                            interval_count?: number;
                                                            trial_period_days?: number;
                                                            usage_type?: string;
                                                        };
                                                    };
                                                }[];
                                                default_tax_rates?: string[];
                                            }[]>]: never; };
                                            tax_ids?: {
                                                country?: string;
                                                customer?: string;
                                                type?: string;
                                                value?: string;
                                                verification?: {
                                                    status?: string;
                                                    verified_address?: string;
                                                    verified_name?: string;
                                                };
                                            }[] & ({
                                                country?: string;
                                                customer?: string;
                                                type?: string;
                                                value?: string;
                                                verification?: {
                                                    status?: string;
                                                    verified_address?: string;
                                                    verified_name?: string;
                                                };
                                            } & {
                                                country?: string;
                                                customer?: string;
                                                type?: string;
                                                value?: string;
                                                verification?: {
                                                    status?: string;
                                                    verified_address?: string;
                                                    verified_name?: string;
                                                } & any & { [K_15 in Exclude<keyof I["stripe"]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["tax_ids"][number]["verification"], keyof import("./stripe").StripeTaxVerification>]: never; };
                                            } & { [K_16 in Exclude<keyof I["stripe"]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["tax_ids"][number], keyof import("./stripe").StripeTaxId>]: never; })[] & { [K_17 in Exclude<keyof I["stripe"]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["tax_ids"], keyof {
                                                country?: string;
                                                customer?: string;
                                                type?: string;
                                                value?: string;
                                                verification?: {
                                                    status?: string;
                                                    verified_address?: string;
                                                    verified_name?: string;
                                                };
                                            }[]>]: never; };
                                            items?: {
                                                id?: string;
                                                quantity?: string;
                                                subscription?: string;
                                                plan?: {
                                                    status?: boolean;
                                                    nickname?: string;
                                                    product?: string;
                                                    amount?: number;
                                                    usage_type?: string;
                                                };
                                                price?: {
                                                    nickname?: string;
                                                    product?: string;
                                                    active?: boolean;
                                                    billing_scheme?: string;
                                                    currency?: string;
                                                    recurring?: {
                                                        interval?: string;
                                                        interval_count?: number;
                                                        trial_period_days?: number;
                                                        usage_type?: string;
                                                    };
                                                };
                                            }[] & ({
                                                id?: string;
                                                quantity?: string;
                                                subscription?: string;
                                                plan?: {
                                                    status?: boolean;
                                                    nickname?: string;
                                                    product?: string;
                                                    amount?: number;
                                                    usage_type?: string;
                                                };
                                                price?: {
                                                    nickname?: string;
                                                    product?: string;
                                                    active?: boolean;
                                                    billing_scheme?: string;
                                                    currency?: string;
                                                    recurring?: {
                                                        interval?: string;
                                                        interval_count?: number;
                                                        trial_period_days?: number;
                                                        usage_type?: string;
                                                    };
                                                };
                                            } & {
                                                id?: string;
                                                quantity?: string;
                                                subscription?: string;
                                                plan?: {
                                                    status?: boolean;
                                                    nickname?: string;
                                                    product?: string;
                                                    amount?: number;
                                                    usage_type?: string;
                                                } & any & { [K_18 in Exclude<keyof I["stripe"]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["items"][number]["plan"], keyof import("./stripe").StripePlan>]: never; };
                                                price?: {
                                                    nickname?: string;
                                                    product?: string;
                                                    active?: boolean;
                                                    billing_scheme?: string;
                                                    currency?: string;
                                                    recurring?: {
                                                        interval?: string;
                                                        interval_count?: number;
                                                        trial_period_days?: number;
                                                        usage_type?: string;
                                                    };
                                                } & any & { [K_19 in Exclude<keyof I["stripe"]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["items"][number]["price"], keyof import("./stripe").StripePrice>]: never; };
                                            } & { [K_20 in Exclude<keyof I["stripe"]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["items"][number], keyof import("./stripe").StripeSubscriptionItem>]: never; })[] & { [K_21 in Exclude<keyof I["stripe"]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["items"], keyof {
                                                id?: string;
                                                quantity?: string;
                                                subscription?: string;
                                                plan?: {
                                                    status?: boolean;
                                                    nickname?: string;
                                                    product?: string;
                                                    amount?: number;
                                                    usage_type?: string;
                                                };
                                                price?: {
                                                    nickname?: string;
                                                    product?: string;
                                                    active?: boolean;
                                                    billing_scheme?: string;
                                                    currency?: string;
                                                    recurring?: {
                                                        interval?: string;
                                                        interval_count?: number;
                                                        trial_period_days?: number;
                                                        usage_type?: string;
                                                    };
                                                };
                                            }[]>]: never; };
                                            default_tax_rates?: string[] & string[] & { [K_22 in Exclude<keyof I["stripe"]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["default_tax_rates"], keyof string[]>]: never; };
                                        } & { [K_23 in Exclude<keyof I["stripe"]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number], keyof import("./stripe").StripeSubscription>]: never; })[] & { [K_24 in Exclude<keyof I["stripe"]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"], keyof {
                                            address?: string;
                                            balance?: number;
                                            currency?: string;
                                            subscriptions?: any[];
                                            tax_ids?: {
                                                country?: string;
                                                customer?: string;
                                                type?: string;
                                                value?: string;
                                                verification?: {
                                                    status?: string;
                                                    verified_address?: string;
                                                    verified_name?: string;
                                                };
                                            }[];
                                            items?: {
                                                id?: string;
                                                quantity?: string;
                                                subscription?: string;
                                                plan?: {
                                                    status?: boolean;
                                                    nickname?: string;
                                                    product?: string;
                                                    amount?: number;
                                                    usage_type?: string;
                                                };
                                                price?: {
                                                    nickname?: string;
                                                    product?: string;
                                                    active?: boolean;
                                                    billing_scheme?: string;
                                                    currency?: string;
                                                    recurring?: {
                                                        interval?: string;
                                                        interval_count?: number;
                                                        trial_period_days?: number;
                                                        usage_type?: string;
                                                    };
                                                };
                                            }[];
                                            default_tax_rates?: string[];
                                        }[]>]: never; };
                                        tax_ids?: {
                                            country?: string;
                                            customer?: string;
                                            type?: string;
                                            value?: string;
                                            verification?: {
                                                status?: string;
                                                verified_address?: string;
                                                verified_name?: string;
                                            };
                                        }[] & ({
                                            country?: string;
                                            customer?: string;
                                            type?: string;
                                            value?: string;
                                            verification?: {
                                                status?: string;
                                                verified_address?: string;
                                                verified_name?: string;
                                            };
                                        } & {
                                            country?: string;
                                            customer?: string;
                                            type?: string;
                                            value?: string;
                                            verification?: {
                                                status?: string;
                                                verified_address?: string;
                                                verified_name?: string;
                                            } & {
                                                status?: string;
                                                verified_address?: string;
                                                verified_name?: string;
                                            } & { [K_25 in Exclude<keyof I["stripe"]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["tax_ids"][number]["verification"], keyof import("./stripe").StripeTaxVerification>]: never; };
                                        } & { [K_26 in Exclude<keyof I["stripe"]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["tax_ids"][number], keyof import("./stripe").StripeTaxId>]: never; })[] & { [K_27 in Exclude<keyof I["stripe"]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["tax_ids"], keyof {
                                            country?: string;
                                            customer?: string;
                                            type?: string;
                                            value?: string;
                                            verification?: {
                                                status?: string;
                                                verified_address?: string;
                                                verified_name?: string;
                                            };
                                        }[]>]: never; };
                                        items?: {
                                            id?: string;
                                            quantity?: string;
                                            subscription?: string;
                                            plan?: {
                                                status?: boolean;
                                                nickname?: string;
                                                product?: string;
                                                amount?: number;
                                                usage_type?: string;
                                            };
                                            price?: {
                                                nickname?: string;
                                                product?: string;
                                                active?: boolean;
                                                billing_scheme?: string;
                                                currency?: string;
                                                recurring?: {
                                                    interval?: string;
                                                    interval_count?: number;
                                                    trial_period_days?: number;
                                                    usage_type?: string;
                                                };
                                            };
                                        }[] & ({
                                            id?: string;
                                            quantity?: string;
                                            subscription?: string;
                                            plan?: {
                                                status?: boolean;
                                                nickname?: string;
                                                product?: string;
                                                amount?: number;
                                                usage_type?: string;
                                            };
                                            price?: {
                                                nickname?: string;
                                                product?: string;
                                                active?: boolean;
                                                billing_scheme?: string;
                                                currency?: string;
                                                recurring?: {
                                                    interval?: string;
                                                    interval_count?: number;
                                                    trial_period_days?: number;
                                                    usage_type?: string;
                                                };
                                            };
                                        } & {
                                            id?: string;
                                            quantity?: string;
                                            subscription?: string;
                                            plan?: {
                                                status?: boolean;
                                                nickname?: string;
                                                product?: string;
                                                amount?: number;
                                                usage_type?: string;
                                            } & {
                                                status?: boolean;
                                                nickname?: string;
                                                product?: string;
                                                amount?: number;
                                                usage_type?: string;
                                            } & { [K_28 in Exclude<keyof I["stripe"]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["items"][number]["plan"], keyof import("./stripe").StripePlan>]: never; };
                                            price?: {
                                                nickname?: string;
                                                product?: string;
                                                active?: boolean;
                                                billing_scheme?: string;
                                                currency?: string;
                                                recurring?: {
                                                    interval?: string;
                                                    interval_count?: number;
                                                    trial_period_days?: number;
                                                    usage_type?: string;
                                                };
                                            } & {
                                                nickname?: string;
                                                product?: string;
                                                active?: boolean;
                                                billing_scheme?: string;
                                                currency?: string;
                                                recurring?: {
                                                    interval?: string;
                                                    interval_count?: number;
                                                    trial_period_days?: number;
                                                    usage_type?: string;
                                                } & any & { [K_29 in Exclude<keyof I["stripe"]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["items"][number]["price"]["recurring"], keyof import("./stripe").StripeRecurring>]: never; };
                                            } & { [K_30 in Exclude<keyof I["stripe"]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["items"][number]["price"], keyof import("./stripe").StripePrice>]: never; };
                                        } & { [K_31 in Exclude<keyof I["stripe"]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["items"][number], keyof import("./stripe").StripeSubscriptionItem>]: never; })[] & { [K_32 in Exclude<keyof I["stripe"]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["items"], keyof {
                                            id?: string;
                                            quantity?: string;
                                            subscription?: string;
                                            plan?: {
                                                status?: boolean;
                                                nickname?: string;
                                                product?: string;
                                                amount?: number;
                                                usage_type?: string;
                                            };
                                            price?: {
                                                nickname?: string;
                                                product?: string;
                                                active?: boolean;
                                                billing_scheme?: string;
                                                currency?: string;
                                                recurring?: {
                                                    interval?: string;
                                                    interval_count?: number;
                                                    trial_period_days?: number;
                                                    usage_type?: string;
                                                };
                                            };
                                        }[]>]: never; };
                                        default_tax_rates?: string[] & string[] & { [K_33 in Exclude<keyof I["stripe"]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["default_tax_rates"], keyof string[]>]: never; };
                                    } & { [K_34 in Exclude<keyof I["stripe"]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number], keyof import("./stripe").StripeSubscription>]: never; })[] & { [K_35 in Exclude<keyof I["stripe"]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"], keyof {
                                        address?: string;
                                        balance?: number;
                                        currency?: string;
                                        subscriptions?: any[];
                                        tax_ids?: {
                                            country?: string;
                                            customer?: string;
                                            type?: string;
                                            value?: string;
                                            verification?: {
                                                status?: string;
                                                verified_address?: string;
                                                verified_name?: string;
                                            };
                                        }[];
                                        items?: {
                                            id?: string;
                                            quantity?: string;
                                            subscription?: string;
                                            plan?: {
                                                status?: boolean;
                                                nickname?: string;
                                                product?: string;
                                                amount?: number;
                                                usage_type?: string;
                                            };
                                            price?: {
                                                nickname?: string;
                                                product?: string;
                                                active?: boolean;
                                                billing_scheme?: string;
                                                currency?: string;
                                                recurring?: {
                                                    interval?: string;
                                                    interval_count?: number;
                                                    trial_period_days?: number;
                                                    usage_type?: string;
                                                };
                                            };
                                        }[];
                                        default_tax_rates?: string[];
                                    }[]>]: never; };
                                    tax_ids?: {
                                        country?: string;
                                        customer?: string;
                                        type?: string;
                                        value?: string;
                                        verification?: {
                                            status?: string;
                                            verified_address?: string;
                                            verified_name?: string;
                                        };
                                    }[] & ({
                                        country?: string;
                                        customer?: string;
                                        type?: string;
                                        value?: string;
                                        verification?: {
                                            status?: string;
                                            verified_address?: string;
                                            verified_name?: string;
                                        };
                                    } & {
                                        country?: string;
                                        customer?: string;
                                        type?: string;
                                        value?: string;
                                        verification?: {
                                            status?: string;
                                            verified_address?: string;
                                            verified_name?: string;
                                        } & {
                                            status?: string;
                                            verified_address?: string;
                                            verified_name?: string;
                                        } & { [K_36 in Exclude<keyof I["stripe"]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["tax_ids"][number]["verification"], keyof import("./stripe").StripeTaxVerification>]: never; };
                                    } & { [K_37 in Exclude<keyof I["stripe"]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["tax_ids"][number], keyof import("./stripe").StripeTaxId>]: never; })[] & { [K_38 in Exclude<keyof I["stripe"]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["tax_ids"], keyof {
                                        country?: string;
                                        customer?: string;
                                        type?: string;
                                        value?: string;
                                        verification?: {
                                            status?: string;
                                            verified_address?: string;
                                            verified_name?: string;
                                        };
                                    }[]>]: never; };
                                    items?: {
                                        id?: string;
                                        quantity?: string;
                                        subscription?: string;
                                        plan?: {
                                            status?: boolean;
                                            nickname?: string;
                                            product?: string;
                                            amount?: number;
                                            usage_type?: string;
                                        };
                                        price?: {
                                            nickname?: string;
                                            product?: string;
                                            active?: boolean;
                                            billing_scheme?: string;
                                            currency?: string;
                                            recurring?: {
                                                interval?: string;
                                                interval_count?: number;
                                                trial_period_days?: number;
                                                usage_type?: string;
                                            };
                                        };
                                    }[] & ({
                                        id?: string;
                                        quantity?: string;
                                        subscription?: string;
                                        plan?: {
                                            status?: boolean;
                                            nickname?: string;
                                            product?: string;
                                            amount?: number;
                                            usage_type?: string;
                                        };
                                        price?: {
                                            nickname?: string;
                                            product?: string;
                                            active?: boolean;
                                            billing_scheme?: string;
                                            currency?: string;
                                            recurring?: {
                                                interval?: string;
                                                interval_count?: number;
                                                trial_period_days?: number;
                                                usage_type?: string;
                                            };
                                        };
                                    } & {
                                        id?: string;
                                        quantity?: string;
                                        subscription?: string;
                                        plan?: {
                                            status?: boolean;
                                            nickname?: string;
                                            product?: string;
                                            amount?: number;
                                            usage_type?: string;
                                        } & {
                                            status?: boolean;
                                            nickname?: string;
                                            product?: string;
                                            amount?: number;
                                            usage_type?: string;
                                        } & { [K_39 in Exclude<keyof I["stripe"]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["items"][number]["plan"], keyof import("./stripe").StripePlan>]: never; };
                                        price?: {
                                            nickname?: string;
                                            product?: string;
                                            active?: boolean;
                                            billing_scheme?: string;
                                            currency?: string;
                                            recurring?: {
                                                interval?: string;
                                                interval_count?: number;
                                                trial_period_days?: number;
                                                usage_type?: string;
                                            };
                                        } & {
                                            nickname?: string;
                                            product?: string;
                                            active?: boolean;
                                            billing_scheme?: string;
                                            currency?: string;
                                            recurring?: {
                                                interval?: string;
                                                interval_count?: number;
                                                trial_period_days?: number;
                                                usage_type?: string;
                                            } & {
                                                interval?: string;
                                                interval_count?: number;
                                                trial_period_days?: number;
                                                usage_type?: string;
                                            } & { [K_40 in Exclude<keyof I["stripe"]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["items"][number]["price"]["recurring"], keyof import("./stripe").StripeRecurring>]: never; };
                                        } & { [K_41 in Exclude<keyof I["stripe"]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["items"][number]["price"], keyof import("./stripe").StripePrice>]: never; };
                                    } & { [K_42 in Exclude<keyof I["stripe"]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["items"][number], keyof import("./stripe").StripeSubscriptionItem>]: never; })[] & { [K_43 in Exclude<keyof I["stripe"]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["items"], keyof {
                                        id?: string;
                                        quantity?: string;
                                        subscription?: string;
                                        plan?: {
                                            status?: boolean;
                                            nickname?: string;
                                            product?: string;
                                            amount?: number;
                                            usage_type?: string;
                                        };
                                        price?: {
                                            nickname?: string;
                                            product?: string;
                                            active?: boolean;
                                            billing_scheme?: string;
                                            currency?: string;
                                            recurring?: {
                                                interval?: string;
                                                interval_count?: number;
                                                trial_period_days?: number;
                                                usage_type?: string;
                                            };
                                        };
                                    }[]>]: never; };
                                    default_tax_rates?: string[] & string[] & { [K_44 in Exclude<keyof I["stripe"]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["default_tax_rates"], keyof string[]>]: never; };
                                } & { [K_45 in Exclude<keyof I["stripe"]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number], keyof import("./stripe").StripeSubscription>]: never; })[] & { [K_46 in Exclude<keyof I["stripe"]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"], keyof {
                                    address?: string;
                                    balance?: number;
                                    currency?: string;
                                    subscriptions?: any[];
                                    tax_ids?: {
                                        country?: string;
                                        customer?: string;
                                        type?: string;
                                        value?: string;
                                        verification?: {
                                            status?: string;
                                            verified_address?: string;
                                            verified_name?: string;
                                        };
                                    }[];
                                    items?: {
                                        id?: string;
                                        quantity?: string;
                                        subscription?: string;
                                        plan?: {
                                            status?: boolean;
                                            nickname?: string;
                                            product?: string;
                                            amount?: number;
                                            usage_type?: string;
                                        };
                                        price?: {
                                            nickname?: string;
                                            product?: string;
                                            active?: boolean;
                                            billing_scheme?: string;
                                            currency?: string;
                                            recurring?: {
                                                interval?: string;
                                                interval_count?: number;
                                                trial_period_days?: number;
                                                usage_type?: string;
                                            };
                                        };
                                    }[];
                                    default_tax_rates?: string[];
                                }[]>]: never; };
                                tax_ids?: {
                                    country?: string;
                                    customer?: string;
                                    type?: string;
                                    value?: string;
                                    verification?: {
                                        status?: string;
                                        verified_address?: string;
                                        verified_name?: string;
                                    };
                                }[] & ({
                                    country?: string;
                                    customer?: string;
                                    type?: string;
                                    value?: string;
                                    verification?: {
                                        status?: string;
                                        verified_address?: string;
                                        verified_name?: string;
                                    };
                                } & {
                                    country?: string;
                                    customer?: string;
                                    type?: string;
                                    value?: string;
                                    verification?: {
                                        status?: string;
                                        verified_address?: string;
                                        verified_name?: string;
                                    } & {
                                        status?: string;
                                        verified_address?: string;
                                        verified_name?: string;
                                    } & { [K_47 in Exclude<keyof I["stripe"]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["tax_ids"][number]["verification"], keyof import("./stripe").StripeTaxVerification>]: never; };
                                } & { [K_48 in Exclude<keyof I["stripe"]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["tax_ids"][number], keyof import("./stripe").StripeTaxId>]: never; })[] & { [K_49 in Exclude<keyof I["stripe"]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["tax_ids"], keyof {
                                    country?: string;
                                    customer?: string;
                                    type?: string;
                                    value?: string;
                                    verification?: {
                                        status?: string;
                                        verified_address?: string;
                                        verified_name?: string;
                                    };
                                }[]>]: never; };
                                items?: {
                                    id?: string;
                                    quantity?: string;
                                    subscription?: string;
                                    plan?: {
                                        status?: boolean;
                                        nickname?: string;
                                        product?: string;
                                        amount?: number;
                                        usage_type?: string;
                                    };
                                    price?: {
                                        nickname?: string;
                                        product?: string;
                                        active?: boolean;
                                        billing_scheme?: string;
                                        currency?: string;
                                        recurring?: {
                                            interval?: string;
                                            interval_count?: number;
                                            trial_period_days?: number;
                                            usage_type?: string;
                                        };
                                    };
                                }[] & ({
                                    id?: string;
                                    quantity?: string;
                                    subscription?: string;
                                    plan?: {
                                        status?: boolean;
                                        nickname?: string;
                                        product?: string;
                                        amount?: number;
                                        usage_type?: string;
                                    };
                                    price?: {
                                        nickname?: string;
                                        product?: string;
                                        active?: boolean;
                                        billing_scheme?: string;
                                        currency?: string;
                                        recurring?: {
                                            interval?: string;
                                            interval_count?: number;
                                            trial_period_days?: number;
                                            usage_type?: string;
                                        };
                                    };
                                } & {
                                    id?: string;
                                    quantity?: string;
                                    subscription?: string;
                                    plan?: {
                                        status?: boolean;
                                        nickname?: string;
                                        product?: string;
                                        amount?: number;
                                        usage_type?: string;
                                    } & {
                                        status?: boolean;
                                        nickname?: string;
                                        product?: string;
                                        amount?: number;
                                        usage_type?: string;
                                    } & { [K_50 in Exclude<keyof I["stripe"]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["items"][number]["plan"], keyof import("./stripe").StripePlan>]: never; };
                                    price?: {
                                        nickname?: string;
                                        product?: string;
                                        active?: boolean;
                                        billing_scheme?: string;
                                        currency?: string;
                                        recurring?: {
                                            interval?: string;
                                            interval_count?: number;
                                            trial_period_days?: number;
                                            usage_type?: string;
                                        };
                                    } & {
                                        nickname?: string;
                                        product?: string;
                                        active?: boolean;
                                        billing_scheme?: string;
                                        currency?: string;
                                        recurring?: {
                                            interval?: string;
                                            interval_count?: number;
                                            trial_period_days?: number;
                                            usage_type?: string;
                                        } & {
                                            interval?: string;
                                            interval_count?: number;
                                            trial_period_days?: number;
                                            usage_type?: string;
                                        } & { [K_51 in Exclude<keyof I["stripe"]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["items"][number]["price"]["recurring"], keyof import("./stripe").StripeRecurring>]: never; };
                                    } & { [K_52 in Exclude<keyof I["stripe"]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["items"][number]["price"], keyof import("./stripe").StripePrice>]: never; };
                                } & { [K_53 in Exclude<keyof I["stripe"]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["items"][number], keyof import("./stripe").StripeSubscriptionItem>]: never; })[] & { [K_54 in Exclude<keyof I["stripe"]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["items"], keyof {
                                    id?: string;
                                    quantity?: string;
                                    subscription?: string;
                                    plan?: {
                                        status?: boolean;
                                        nickname?: string;
                                        product?: string;
                                        amount?: number;
                                        usage_type?: string;
                                    };
                                    price?: {
                                        nickname?: string;
                                        product?: string;
                                        active?: boolean;
                                        billing_scheme?: string;
                                        currency?: string;
                                        recurring?: {
                                            interval?: string;
                                            interval_count?: number;
                                            trial_period_days?: number;
                                            usage_type?: string;
                                        };
                                    };
                                }[]>]: never; };
                                default_tax_rates?: string[] & string[] & { [K_55 in Exclude<keyof I["stripe"]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["default_tax_rates"], keyof string[]>]: never; };
                            } & { [K_56 in Exclude<keyof I["stripe"]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number], keyof import("./stripe").StripeSubscription>]: never; })[] & { [K_57 in Exclude<keyof I["stripe"]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"], keyof {
                                address?: string;
                                balance?: number;
                                currency?: string;
                                subscriptions?: any[];
                                tax_ids?: {
                                    country?: string;
                                    customer?: string;
                                    type?: string;
                                    value?: string;
                                    verification?: {
                                        status?: string;
                                        verified_address?: string;
                                        verified_name?: string;
                                    };
                                }[];
                                items?: {
                                    id?: string;
                                    quantity?: string;
                                    subscription?: string;
                                    plan?: {
                                        status?: boolean;
                                        nickname?: string;
                                        product?: string;
                                        amount?: number;
                                        usage_type?: string;
                                    };
                                    price?: {
                                        nickname?: string;
                                        product?: string;
                                        active?: boolean;
                                        billing_scheme?: string;
                                        currency?: string;
                                        recurring?: {
                                            interval?: string;
                                            interval_count?: number;
                                            trial_period_days?: number;
                                            usage_type?: string;
                                        };
                                    };
                                }[];
                                default_tax_rates?: string[];
                            }[]>]: never; };
                            tax_ids?: {
                                country?: string;
                                customer?: string;
                                type?: string;
                                value?: string;
                                verification?: {
                                    status?: string;
                                    verified_address?: string;
                                    verified_name?: string;
                                };
                            }[] & ({
                                country?: string;
                                customer?: string;
                                type?: string;
                                value?: string;
                                verification?: {
                                    status?: string;
                                    verified_address?: string;
                                    verified_name?: string;
                                };
                            } & {
                                country?: string;
                                customer?: string;
                                type?: string;
                                value?: string;
                                verification?: {
                                    status?: string;
                                    verified_address?: string;
                                    verified_name?: string;
                                } & {
                                    status?: string;
                                    verified_address?: string;
                                    verified_name?: string;
                                } & { [K_58 in Exclude<keyof I["stripe"]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["tax_ids"][number]["verification"], keyof import("./stripe").StripeTaxVerification>]: never; };
                            } & { [K_59 in Exclude<keyof I["stripe"]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["tax_ids"][number], keyof import("./stripe").StripeTaxId>]: never; })[] & { [K_60 in Exclude<keyof I["stripe"]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["tax_ids"], keyof {
                                country?: string;
                                customer?: string;
                                type?: string;
                                value?: string;
                                verification?: {
                                    status?: string;
                                    verified_address?: string;
                                    verified_name?: string;
                                };
                            }[]>]: never; };
                            items?: {
                                id?: string;
                                quantity?: string;
                                subscription?: string;
                                plan?: {
                                    status?: boolean;
                                    nickname?: string;
                                    product?: string;
                                    amount?: number;
                                    usage_type?: string;
                                };
                                price?: {
                                    nickname?: string;
                                    product?: string;
                                    active?: boolean;
                                    billing_scheme?: string;
                                    currency?: string;
                                    recurring?: {
                                        interval?: string;
                                        interval_count?: number;
                                        trial_period_days?: number;
                                        usage_type?: string;
                                    };
                                };
                            }[] & ({
                                id?: string;
                                quantity?: string;
                                subscription?: string;
                                plan?: {
                                    status?: boolean;
                                    nickname?: string;
                                    product?: string;
                                    amount?: number;
                                    usage_type?: string;
                                };
                                price?: {
                                    nickname?: string;
                                    product?: string;
                                    active?: boolean;
                                    billing_scheme?: string;
                                    currency?: string;
                                    recurring?: {
                                        interval?: string;
                                        interval_count?: number;
                                        trial_period_days?: number;
                                        usage_type?: string;
                                    };
                                };
                            } & {
                                id?: string;
                                quantity?: string;
                                subscription?: string;
                                plan?: {
                                    status?: boolean;
                                    nickname?: string;
                                    product?: string;
                                    amount?: number;
                                    usage_type?: string;
                                } & {
                                    status?: boolean;
                                    nickname?: string;
                                    product?: string;
                                    amount?: number;
                                    usage_type?: string;
                                } & { [K_61 in Exclude<keyof I["stripe"]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["items"][number]["plan"], keyof import("./stripe").StripePlan>]: never; };
                                price?: {
                                    nickname?: string;
                                    product?: string;
                                    active?: boolean;
                                    billing_scheme?: string;
                                    currency?: string;
                                    recurring?: {
                                        interval?: string;
                                        interval_count?: number;
                                        trial_period_days?: number;
                                        usage_type?: string;
                                    };
                                } & {
                                    nickname?: string;
                                    product?: string;
                                    active?: boolean;
                                    billing_scheme?: string;
                                    currency?: string;
                                    recurring?: {
                                        interval?: string;
                                        interval_count?: number;
                                        trial_period_days?: number;
                                        usage_type?: string;
                                    } & {
                                        interval?: string;
                                        interval_count?: number;
                                        trial_period_days?: number;
                                        usage_type?: string;
                                    } & { [K_62 in Exclude<keyof I["stripe"]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["items"][number]["price"]["recurring"], keyof import("./stripe").StripeRecurring>]: never; };
                                } & { [K_63 in Exclude<keyof I["stripe"]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["items"][number]["price"], keyof import("./stripe").StripePrice>]: never; };
                            } & { [K_64 in Exclude<keyof I["stripe"]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["items"][number], keyof import("./stripe").StripeSubscriptionItem>]: never; })[] & { [K_65 in Exclude<keyof I["stripe"]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["items"], keyof {
                                id?: string;
                                quantity?: string;
                                subscription?: string;
                                plan?: {
                                    status?: boolean;
                                    nickname?: string;
                                    product?: string;
                                    amount?: number;
                                    usage_type?: string;
                                };
                                price?: {
                                    nickname?: string;
                                    product?: string;
                                    active?: boolean;
                                    billing_scheme?: string;
                                    currency?: string;
                                    recurring?: {
                                        interval?: string;
                                        interval_count?: number;
                                        trial_period_days?: number;
                                        usage_type?: string;
                                    };
                                };
                            }[]>]: never; };
                            default_tax_rates?: string[] & string[] & { [K_66 in Exclude<keyof I["stripe"]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["default_tax_rates"], keyof string[]>]: never; };
                        } & { [K_67 in Exclude<keyof I["stripe"]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number], keyof import("./stripe").StripeSubscription>]: never; })[] & { [K_68 in Exclude<keyof I["stripe"]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"], keyof {
                            address?: string;
                            balance?: number;
                            currency?: string;
                            subscriptions?: any[];
                            tax_ids?: {
                                country?: string;
                                customer?: string;
                                type?: string;
                                value?: string;
                                verification?: {
                                    status?: string;
                                    verified_address?: string;
                                    verified_name?: string;
                                };
                            }[];
                            items?: {
                                id?: string;
                                quantity?: string;
                                subscription?: string;
                                plan?: {
                                    status?: boolean;
                                    nickname?: string;
                                    product?: string;
                                    amount?: number;
                                    usage_type?: string;
                                };
                                price?: {
                                    nickname?: string;
                                    product?: string;
                                    active?: boolean;
                                    billing_scheme?: string;
                                    currency?: string;
                                    recurring?: {
                                        interval?: string;
                                        interval_count?: number;
                                        trial_period_days?: number;
                                        usage_type?: string;
                                    };
                                };
                            }[];
                            default_tax_rates?: string[];
                        }[]>]: never; };
                        tax_ids?: {
                            country?: string;
                            customer?: string;
                            type?: string;
                            value?: string;
                            verification?: {
                                status?: string;
                                verified_address?: string;
                                verified_name?: string;
                            };
                        }[] & ({
                            country?: string;
                            customer?: string;
                            type?: string;
                            value?: string;
                            verification?: {
                                status?: string;
                                verified_address?: string;
                                verified_name?: string;
                            };
                        } & {
                            country?: string;
                            customer?: string;
                            type?: string;
                            value?: string;
                            verification?: {
                                status?: string;
                                verified_address?: string;
                                verified_name?: string;
                            } & {
                                status?: string;
                                verified_address?: string;
                                verified_name?: string;
                            } & { [K_69 in Exclude<keyof I["stripe"]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["tax_ids"][number]["verification"], keyof import("./stripe").StripeTaxVerification>]: never; };
                        } & { [K_70 in Exclude<keyof I["stripe"]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["tax_ids"][number], keyof import("./stripe").StripeTaxId>]: never; })[] & { [K_71 in Exclude<keyof I["stripe"]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["tax_ids"], keyof {
                            country?: string;
                            customer?: string;
                            type?: string;
                            value?: string;
                            verification?: {
                                status?: string;
                                verified_address?: string;
                                verified_name?: string;
                            };
                        }[]>]: never; };
                        items?: {
                            id?: string;
                            quantity?: string;
                            subscription?: string;
                            plan?: {
                                status?: boolean;
                                nickname?: string;
                                product?: string;
                                amount?: number;
                                usage_type?: string;
                            };
                            price?: {
                                nickname?: string;
                                product?: string;
                                active?: boolean;
                                billing_scheme?: string;
                                currency?: string;
                                recurring?: {
                                    interval?: string;
                                    interval_count?: number;
                                    trial_period_days?: number;
                                    usage_type?: string;
                                };
                            };
                        }[] & ({
                            id?: string;
                            quantity?: string;
                            subscription?: string;
                            plan?: {
                                status?: boolean;
                                nickname?: string;
                                product?: string;
                                amount?: number;
                                usage_type?: string;
                            };
                            price?: {
                                nickname?: string;
                                product?: string;
                                active?: boolean;
                                billing_scheme?: string;
                                currency?: string;
                                recurring?: {
                                    interval?: string;
                                    interval_count?: number;
                                    trial_period_days?: number;
                                    usage_type?: string;
                                };
                            };
                        } & {
                            id?: string;
                            quantity?: string;
                            subscription?: string;
                            plan?: {
                                status?: boolean;
                                nickname?: string;
                                product?: string;
                                amount?: number;
                                usage_type?: string;
                            } & {
                                status?: boolean;
                                nickname?: string;
                                product?: string;
                                amount?: number;
                                usage_type?: string;
                            } & { [K_72 in Exclude<keyof I["stripe"]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["items"][number]["plan"], keyof import("./stripe").StripePlan>]: never; };
                            price?: {
                                nickname?: string;
                                product?: string;
                                active?: boolean;
                                billing_scheme?: string;
                                currency?: string;
                                recurring?: {
                                    interval?: string;
                                    interval_count?: number;
                                    trial_period_days?: number;
                                    usage_type?: string;
                                };
                            } & {
                                nickname?: string;
                                product?: string;
                                active?: boolean;
                                billing_scheme?: string;
                                currency?: string;
                                recurring?: {
                                    interval?: string;
                                    interval_count?: number;
                                    trial_period_days?: number;
                                    usage_type?: string;
                                } & {
                                    interval?: string;
                                    interval_count?: number;
                                    trial_period_days?: number;
                                    usage_type?: string;
                                } & { [K_73 in Exclude<keyof I["stripe"]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["items"][number]["price"]["recurring"], keyof import("./stripe").StripeRecurring>]: never; };
                            } & { [K_74 in Exclude<keyof I["stripe"]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["items"][number]["price"], keyof import("./stripe").StripePrice>]: never; };
                        } & { [K_75 in Exclude<keyof I["stripe"]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["items"][number], keyof import("./stripe").StripeSubscriptionItem>]: never; })[] & { [K_76 in Exclude<keyof I["stripe"]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["items"], keyof {
                            id?: string;
                            quantity?: string;
                            subscription?: string;
                            plan?: {
                                status?: boolean;
                                nickname?: string;
                                product?: string;
                                amount?: number;
                                usage_type?: string;
                            };
                            price?: {
                                nickname?: string;
                                product?: string;
                                active?: boolean;
                                billing_scheme?: string;
                                currency?: string;
                                recurring?: {
                                    interval?: string;
                                    interval_count?: number;
                                    trial_period_days?: number;
                                    usage_type?: string;
                                };
                            };
                        }[]>]: never; };
                        default_tax_rates?: string[] & string[] & { [K_77 in Exclude<keyof I["stripe"]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["default_tax_rates"], keyof string[]>]: never; };
                    } & { [K_78 in Exclude<keyof I["stripe"]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number], keyof import("./stripe").StripeSubscription>]: never; })[] & { [K_79 in Exclude<keyof I["stripe"]["subscriptions"][number]["subscriptions"][number]["subscriptions"], keyof {
                        address?: string;
                        balance?: number;
                        currency?: string;
                        subscriptions?: any[];
                        tax_ids?: {
                            country?: string;
                            customer?: string;
                            type?: string;
                            value?: string;
                            verification?: {
                                status?: string;
                                verified_address?: string;
                                verified_name?: string;
                            };
                        }[];
                        items?: {
                            id?: string;
                            quantity?: string;
                            subscription?: string;
                            plan?: {
                                status?: boolean;
                                nickname?: string;
                                product?: string;
                                amount?: number;
                                usage_type?: string;
                            };
                            price?: {
                                nickname?: string;
                                product?: string;
                                active?: boolean;
                                billing_scheme?: string;
                                currency?: string;
                                recurring?: {
                                    interval?: string;
                                    interval_count?: number;
                                    trial_period_days?: number;
                                    usage_type?: string;
                                };
                            };
                        }[];
                        default_tax_rates?: string[];
                    }[]>]: never; };
                    tax_ids?: {
                        country?: string;
                        customer?: string;
                        type?: string;
                        value?: string;
                        verification?: {
                            status?: string;
                            verified_address?: string;
                            verified_name?: string;
                        };
                    }[] & ({
                        country?: string;
                        customer?: string;
                        type?: string;
                        value?: string;
                        verification?: {
                            status?: string;
                            verified_address?: string;
                            verified_name?: string;
                        };
                    } & {
                        country?: string;
                        customer?: string;
                        type?: string;
                        value?: string;
                        verification?: {
                            status?: string;
                            verified_address?: string;
                            verified_name?: string;
                        } & {
                            status?: string;
                            verified_address?: string;
                            verified_name?: string;
                        } & { [K_80 in Exclude<keyof I["stripe"]["subscriptions"][number]["subscriptions"][number]["tax_ids"][number]["verification"], keyof import("./stripe").StripeTaxVerification>]: never; };
                    } & { [K_81 in Exclude<keyof I["stripe"]["subscriptions"][number]["subscriptions"][number]["tax_ids"][number], keyof import("./stripe").StripeTaxId>]: never; })[] & { [K_82 in Exclude<keyof I["stripe"]["subscriptions"][number]["subscriptions"][number]["tax_ids"], keyof {
                        country?: string;
                        customer?: string;
                        type?: string;
                        value?: string;
                        verification?: {
                            status?: string;
                            verified_address?: string;
                            verified_name?: string;
                        };
                    }[]>]: never; };
                    items?: {
                        id?: string;
                        quantity?: string;
                        subscription?: string;
                        plan?: {
                            status?: boolean;
                            nickname?: string;
                            product?: string;
                            amount?: number;
                            usage_type?: string;
                        };
                        price?: {
                            nickname?: string;
                            product?: string;
                            active?: boolean;
                            billing_scheme?: string;
                            currency?: string;
                            recurring?: {
                                interval?: string;
                                interval_count?: number;
                                trial_period_days?: number;
                                usage_type?: string;
                            };
                        };
                    }[] & ({
                        id?: string;
                        quantity?: string;
                        subscription?: string;
                        plan?: {
                            status?: boolean;
                            nickname?: string;
                            product?: string;
                            amount?: number;
                            usage_type?: string;
                        };
                        price?: {
                            nickname?: string;
                            product?: string;
                            active?: boolean;
                            billing_scheme?: string;
                            currency?: string;
                            recurring?: {
                                interval?: string;
                                interval_count?: number;
                                trial_period_days?: number;
                                usage_type?: string;
                            };
                        };
                    } & {
                        id?: string;
                        quantity?: string;
                        subscription?: string;
                        plan?: {
                            status?: boolean;
                            nickname?: string;
                            product?: string;
                            amount?: number;
                            usage_type?: string;
                        } & {
                            status?: boolean;
                            nickname?: string;
                            product?: string;
                            amount?: number;
                            usage_type?: string;
                        } & { [K_83 in Exclude<keyof I["stripe"]["subscriptions"][number]["subscriptions"][number]["items"][number]["plan"], keyof import("./stripe").StripePlan>]: never; };
                        price?: {
                            nickname?: string;
                            product?: string;
                            active?: boolean;
                            billing_scheme?: string;
                            currency?: string;
                            recurring?: {
                                interval?: string;
                                interval_count?: number;
                                trial_period_days?: number;
                                usage_type?: string;
                            };
                        } & {
                            nickname?: string;
                            product?: string;
                            active?: boolean;
                            billing_scheme?: string;
                            currency?: string;
                            recurring?: {
                                interval?: string;
                                interval_count?: number;
                                trial_period_days?: number;
                                usage_type?: string;
                            } & {
                                interval?: string;
                                interval_count?: number;
                                trial_period_days?: number;
                                usage_type?: string;
                            } & { [K_84 in Exclude<keyof I["stripe"]["subscriptions"][number]["subscriptions"][number]["items"][number]["price"]["recurring"], keyof import("./stripe").StripeRecurring>]: never; };
                        } & { [K_85 in Exclude<keyof I["stripe"]["subscriptions"][number]["subscriptions"][number]["items"][number]["price"], keyof import("./stripe").StripePrice>]: never; };
                    } & { [K_86 in Exclude<keyof I["stripe"]["subscriptions"][number]["subscriptions"][number]["items"][number], keyof import("./stripe").StripeSubscriptionItem>]: never; })[] & { [K_87 in Exclude<keyof I["stripe"]["subscriptions"][number]["subscriptions"][number]["items"], keyof {
                        id?: string;
                        quantity?: string;
                        subscription?: string;
                        plan?: {
                            status?: boolean;
                            nickname?: string;
                            product?: string;
                            amount?: number;
                            usage_type?: string;
                        };
                        price?: {
                            nickname?: string;
                            product?: string;
                            active?: boolean;
                            billing_scheme?: string;
                            currency?: string;
                            recurring?: {
                                interval?: string;
                                interval_count?: number;
                                trial_period_days?: number;
                                usage_type?: string;
                            };
                        };
                    }[]>]: never; };
                    default_tax_rates?: string[] & string[] & { [K_88 in Exclude<keyof I["stripe"]["subscriptions"][number]["subscriptions"][number]["default_tax_rates"], keyof string[]>]: never; };
                } & { [K_89 in Exclude<keyof I["stripe"]["subscriptions"][number]["subscriptions"][number], keyof import("./stripe").StripeSubscription>]: never; })[] & { [K_90 in Exclude<keyof I["stripe"]["subscriptions"][number]["subscriptions"], keyof {
                    address?: string;
                    balance?: number;
                    currency?: string;
                    subscriptions?: any[];
                    tax_ids?: {
                        country?: string;
                        customer?: string;
                        type?: string;
                        value?: string;
                        verification?: {
                            status?: string;
                            verified_address?: string;
                            verified_name?: string;
                        };
                    }[];
                    items?: {
                        id?: string;
                        quantity?: string;
                        subscription?: string;
                        plan?: {
                            status?: boolean;
                            nickname?: string;
                            product?: string;
                            amount?: number;
                            usage_type?: string;
                        };
                        price?: {
                            nickname?: string;
                            product?: string;
                            active?: boolean;
                            billing_scheme?: string;
                            currency?: string;
                            recurring?: {
                                interval?: string;
                                interval_count?: number;
                                trial_period_days?: number;
                                usage_type?: string;
                            };
                        };
                    }[];
                    default_tax_rates?: string[];
                }[]>]: never; };
                tax_ids?: {
                    country?: string;
                    customer?: string;
                    type?: string;
                    value?: string;
                    verification?: {
                        status?: string;
                        verified_address?: string;
                        verified_name?: string;
                    };
                }[] & ({
                    country?: string;
                    customer?: string;
                    type?: string;
                    value?: string;
                    verification?: {
                        status?: string;
                        verified_address?: string;
                        verified_name?: string;
                    };
                } & {
                    country?: string;
                    customer?: string;
                    type?: string;
                    value?: string;
                    verification?: {
                        status?: string;
                        verified_address?: string;
                        verified_name?: string;
                    } & {
                        status?: string;
                        verified_address?: string;
                        verified_name?: string;
                    } & { [K_91 in Exclude<keyof I["stripe"]["subscriptions"][number]["tax_ids"][number]["verification"], keyof import("./stripe").StripeTaxVerification>]: never; };
                } & { [K_92 in Exclude<keyof I["stripe"]["subscriptions"][number]["tax_ids"][number], keyof import("./stripe").StripeTaxId>]: never; })[] & { [K_93 in Exclude<keyof I["stripe"]["subscriptions"][number]["tax_ids"], keyof {
                    country?: string;
                    customer?: string;
                    type?: string;
                    value?: string;
                    verification?: {
                        status?: string;
                        verified_address?: string;
                        verified_name?: string;
                    };
                }[]>]: never; };
                items?: {
                    id?: string;
                    quantity?: string;
                    subscription?: string;
                    plan?: {
                        status?: boolean;
                        nickname?: string;
                        product?: string;
                        amount?: number;
                        usage_type?: string;
                    };
                    price?: {
                        nickname?: string;
                        product?: string;
                        active?: boolean;
                        billing_scheme?: string;
                        currency?: string;
                        recurring?: {
                            interval?: string;
                            interval_count?: number;
                            trial_period_days?: number;
                            usage_type?: string;
                        };
                    };
                }[] & ({
                    id?: string;
                    quantity?: string;
                    subscription?: string;
                    plan?: {
                        status?: boolean;
                        nickname?: string;
                        product?: string;
                        amount?: number;
                        usage_type?: string;
                    };
                    price?: {
                        nickname?: string;
                        product?: string;
                        active?: boolean;
                        billing_scheme?: string;
                        currency?: string;
                        recurring?: {
                            interval?: string;
                            interval_count?: number;
                            trial_period_days?: number;
                            usage_type?: string;
                        };
                    };
                } & {
                    id?: string;
                    quantity?: string;
                    subscription?: string;
                    plan?: {
                        status?: boolean;
                        nickname?: string;
                        product?: string;
                        amount?: number;
                        usage_type?: string;
                    } & {
                        status?: boolean;
                        nickname?: string;
                        product?: string;
                        amount?: number;
                        usage_type?: string;
                    } & { [K_94 in Exclude<keyof I["stripe"]["subscriptions"][number]["items"][number]["plan"], keyof import("./stripe").StripePlan>]: never; };
                    price?: {
                        nickname?: string;
                        product?: string;
                        active?: boolean;
                        billing_scheme?: string;
                        currency?: string;
                        recurring?: {
                            interval?: string;
                            interval_count?: number;
                            trial_period_days?: number;
                            usage_type?: string;
                        };
                    } & {
                        nickname?: string;
                        product?: string;
                        active?: boolean;
                        billing_scheme?: string;
                        currency?: string;
                        recurring?: {
                            interval?: string;
                            interval_count?: number;
                            trial_period_days?: number;
                            usage_type?: string;
                        } & {
                            interval?: string;
                            interval_count?: number;
                            trial_period_days?: number;
                            usage_type?: string;
                        } & { [K_95 in Exclude<keyof I["stripe"]["subscriptions"][number]["items"][number]["price"]["recurring"], keyof import("./stripe").StripeRecurring>]: never; };
                    } & { [K_96 in Exclude<keyof I["stripe"]["subscriptions"][number]["items"][number]["price"], keyof import("./stripe").StripePrice>]: never; };
                } & { [K_97 in Exclude<keyof I["stripe"]["subscriptions"][number]["items"][number], keyof import("./stripe").StripeSubscriptionItem>]: never; })[] & { [K_98 in Exclude<keyof I["stripe"]["subscriptions"][number]["items"], keyof {
                    id?: string;
                    quantity?: string;
                    subscription?: string;
                    plan?: {
                        status?: boolean;
                        nickname?: string;
                        product?: string;
                        amount?: number;
                        usage_type?: string;
                    };
                    price?: {
                        nickname?: string;
                        product?: string;
                        active?: boolean;
                        billing_scheme?: string;
                        currency?: string;
                        recurring?: {
                            interval?: string;
                            interval_count?: number;
                            trial_period_days?: number;
                            usage_type?: string;
                        };
                    };
                }[]>]: never; };
                default_tax_rates?: string[] & string[] & { [K_99 in Exclude<keyof I["stripe"]["subscriptions"][number]["default_tax_rates"], keyof string[]>]: never; };
            } & { [K_100 in Exclude<keyof I["stripe"]["subscriptions"][number], keyof import("./stripe").StripeSubscription>]: never; })[] & { [K_101 in Exclude<keyof I["stripe"]["subscriptions"], keyof {
                address?: string;
                balance?: number;
                currency?: string;
                subscriptions?: any[];
                tax_ids?: {
                    country?: string;
                    customer?: string;
                    type?: string;
                    value?: string;
                    verification?: {
                        status?: string;
                        verified_address?: string;
                        verified_name?: string;
                    };
                }[];
                items?: {
                    id?: string;
                    quantity?: string;
                    subscription?: string;
                    plan?: {
                        status?: boolean;
                        nickname?: string;
                        product?: string;
                        amount?: number;
                        usage_type?: string;
                    };
                    price?: {
                        nickname?: string;
                        product?: string;
                        active?: boolean;
                        billing_scheme?: string;
                        currency?: string;
                        recurring?: {
                            interval?: string;
                            interval_count?: number;
                            trial_period_days?: number;
                            usage_type?: string;
                        };
                    };
                }[];
                default_tax_rates?: string[];
            }[]>]: never; };
            discount?: {
                subscription?: string;
                start?: number;
                customer?: string;
                coupon?: {
                    duration?: string;
                    duration_in_months?: number;
                    name?: string;
                };
            } & {
                subscription?: string;
                start?: number;
                customer?: string;
                coupon?: {
                    duration?: string;
                    duration_in_months?: number;
                    name?: string;
                } & {
                    duration?: string;
                    duration_in_months?: number;
                    name?: string;
                } & { [K_102 in Exclude<keyof I["stripe"]["discount"]["coupon"], keyof import("./stripe").StripeCoupon>]: never; };
            } & { [K_103 in Exclude<keyof I["stripe"]["discount"], keyof import("./stripe").StripeCustomerDiscount>]: never; };
        } & { [K_104 in Exclude<keyof I["stripe"], keyof StripeCustomer>]: never; };
    } & { [K_105 in Exclude<keyof I, keyof EnsureCustomerResponse>]: never; }>(base?: I): EnsureCustomerResponse;
    fromPartial<I_1 extends {
        customer?: {
            _id?: string;
            _type?: string;
            stripeid?: string;
            userid?: string;
            name?: string;
            country?: string;
            email?: string;
            address?: string;
            vattype?: string;
            vatnumber?: string;
            taxrate?: string;
            tax?: number;
            coupon?: string;
            hascard?: boolean;
            memory?: string;
            openflowuserplan?: string;
            supportplan?: string;
            supporthourplan?: string;
            subscriptionid?: string;
            admins?: string;
            users?: string;
            customattr1?: string;
            customattr2?: string;
            customattr3?: string;
            customattr4?: string;
            customattr5?: string;
            domains?: string[];
            dbusage?: number;
            dblocked?: boolean;
        };
        stripe?: {
            address?: {
                line1?: string;
                line2?: string;
                postal_code?: string;
                city?: string;
                state?: string;
                country?: string;
            };
            description?: string;
            name?: string;
            email?: string;
            tax_ids?: {
                country?: string;
                customer?: string;
                type?: string;
                value?: string;
                verification?: {
                    status?: string;
                    verified_address?: string;
                    verified_name?: string;
                };
            }[];
            subscriptions?: {
                address?: string;
                balance?: number;
                currency?: string;
                subscriptions?: any[];
                tax_ids?: {
                    country?: string;
                    customer?: string;
                    type?: string;
                    value?: string;
                    verification?: {
                        status?: string;
                        verified_address?: string;
                        verified_name?: string;
                    };
                }[];
                items?: {
                    id?: string;
                    quantity?: string;
                    subscription?: string;
                    plan?: {
                        status?: boolean;
                        nickname?: string;
                        product?: string;
                        amount?: number;
                        usage_type?: string;
                    };
                    price?: {
                        nickname?: string;
                        product?: string;
                        active?: boolean;
                        billing_scheme?: string;
                        currency?: string;
                        recurring?: {
                            interval?: string;
                            interval_count?: number;
                            trial_period_days?: number;
                            usage_type?: string;
                        };
                    };
                }[];
                default_tax_rates?: string[];
            }[];
            discount?: {
                subscription?: string;
                start?: number;
                customer?: string;
                coupon?: {
                    duration?: string;
                    duration_in_months?: number;
                    name?: string;
                };
            };
        };
    } & {
        customer?: {
            _id?: string;
            _type?: string;
            stripeid?: string;
            userid?: string;
            name?: string;
            country?: string;
            email?: string;
            address?: string;
            vattype?: string;
            vatnumber?: string;
            taxrate?: string;
            tax?: number;
            coupon?: string;
            hascard?: boolean;
            memory?: string;
            openflowuserplan?: string;
            supportplan?: string;
            supporthourplan?: string;
            subscriptionid?: string;
            admins?: string;
            users?: string;
            customattr1?: string;
            customattr2?: string;
            customattr3?: string;
            customattr4?: string;
            customattr5?: string;
            domains?: string[];
            dbusage?: number;
            dblocked?: boolean;
        } & {
            _id?: string;
            _type?: string;
            stripeid?: string;
            userid?: string;
            name?: string;
            country?: string;
            email?: string;
            address?: string;
            vattype?: string;
            vatnumber?: string;
            taxrate?: string;
            tax?: number;
            coupon?: string;
            hascard?: boolean;
            memory?: string;
            openflowuserplan?: string;
            supportplan?: string;
            supporthourplan?: string;
            subscriptionid?: string;
            admins?: string;
            users?: string;
            customattr1?: string;
            customattr2?: string;
            customattr3?: string;
            customattr4?: string;
            customattr5?: string;
            domains?: string[] & string[] & { [K_106 in Exclude<keyof I_1["customer"]["domains"], keyof string[]>]: never; };
            dbusage?: number;
            dblocked?: boolean;
        } & { [K_107 in Exclude<keyof I_1["customer"], keyof Customer>]: never; };
        stripe?: {
            address?: {
                line1?: string;
                line2?: string;
                postal_code?: string;
                city?: string;
                state?: string;
                country?: string;
            };
            description?: string;
            name?: string;
            email?: string;
            tax_ids?: {
                country?: string;
                customer?: string;
                type?: string;
                value?: string;
                verification?: {
                    status?: string;
                    verified_address?: string;
                    verified_name?: string;
                };
            }[];
            subscriptions?: {
                address?: string;
                balance?: number;
                currency?: string;
                subscriptions?: any[];
                tax_ids?: {
                    country?: string;
                    customer?: string;
                    type?: string;
                    value?: string;
                    verification?: {
                        status?: string;
                        verified_address?: string;
                        verified_name?: string;
                    };
                }[];
                items?: {
                    id?: string;
                    quantity?: string;
                    subscription?: string;
                    plan?: {
                        status?: boolean;
                        nickname?: string;
                        product?: string;
                        amount?: number;
                        usage_type?: string;
                    };
                    price?: {
                        nickname?: string;
                        product?: string;
                        active?: boolean;
                        billing_scheme?: string;
                        currency?: string;
                        recurring?: {
                            interval?: string;
                            interval_count?: number;
                            trial_period_days?: number;
                            usage_type?: string;
                        };
                    };
                }[];
                default_tax_rates?: string[];
            }[];
            discount?: {
                subscription?: string;
                start?: number;
                customer?: string;
                coupon?: {
                    duration?: string;
                    duration_in_months?: number;
                    name?: string;
                };
            };
        } & {
            address?: {
                line1?: string;
                line2?: string;
                postal_code?: string;
                city?: string;
                state?: string;
                country?: string;
            } & {
                line1?: string;
                line2?: string;
                postal_code?: string;
                city?: string;
                state?: string;
                country?: string;
            } & { [K_108 in Exclude<keyof I_1["stripe"]["address"], keyof import("./stripe").StripeCustomerAddress>]: never; };
            description?: string;
            name?: string;
            email?: string;
            tax_ids?: {
                country?: string;
                customer?: string;
                type?: string;
                value?: string;
                verification?: {
                    status?: string;
                    verified_address?: string;
                    verified_name?: string;
                };
            }[] & ({
                country?: string;
                customer?: string;
                type?: string;
                value?: string;
                verification?: {
                    status?: string;
                    verified_address?: string;
                    verified_name?: string;
                };
            } & {
                country?: string;
                customer?: string;
                type?: string;
                value?: string;
                verification?: {
                    status?: string;
                    verified_address?: string;
                    verified_name?: string;
                } & {
                    status?: string;
                    verified_address?: string;
                    verified_name?: string;
                } & { [K_109 in Exclude<keyof I_1["stripe"]["tax_ids"][number]["verification"], keyof import("./stripe").StripeTaxVerification>]: never; };
            } & { [K_110 in Exclude<keyof I_1["stripe"]["tax_ids"][number], keyof import("./stripe").StripeTaxId>]: never; })[] & { [K_111 in Exclude<keyof I_1["stripe"]["tax_ids"], keyof {
                country?: string;
                customer?: string;
                type?: string;
                value?: string;
                verification?: {
                    status?: string;
                    verified_address?: string;
                    verified_name?: string;
                };
            }[]>]: never; };
            subscriptions?: {
                address?: string;
                balance?: number;
                currency?: string;
                subscriptions?: any[];
                tax_ids?: {
                    country?: string;
                    customer?: string;
                    type?: string;
                    value?: string;
                    verification?: {
                        status?: string;
                        verified_address?: string;
                        verified_name?: string;
                    };
                }[];
                items?: {
                    id?: string;
                    quantity?: string;
                    subscription?: string;
                    plan?: {
                        status?: boolean;
                        nickname?: string;
                        product?: string;
                        amount?: number;
                        usage_type?: string;
                    };
                    price?: {
                        nickname?: string;
                        product?: string;
                        active?: boolean;
                        billing_scheme?: string;
                        currency?: string;
                        recurring?: {
                            interval?: string;
                            interval_count?: number;
                            trial_period_days?: number;
                            usage_type?: string;
                        };
                    };
                }[];
                default_tax_rates?: string[];
            }[] & ({
                address?: string;
                balance?: number;
                currency?: string;
                subscriptions?: any[];
                tax_ids?: {
                    country?: string;
                    customer?: string;
                    type?: string;
                    value?: string;
                    verification?: {
                        status?: string;
                        verified_address?: string;
                        verified_name?: string;
                    };
                }[];
                items?: {
                    id?: string;
                    quantity?: string;
                    subscription?: string;
                    plan?: {
                        status?: boolean;
                        nickname?: string;
                        product?: string;
                        amount?: number;
                        usage_type?: string;
                    };
                    price?: {
                        nickname?: string;
                        product?: string;
                        active?: boolean;
                        billing_scheme?: string;
                        currency?: string;
                        recurring?: {
                            interval?: string;
                            interval_count?: number;
                            trial_period_days?: number;
                            usage_type?: string;
                        };
                    };
                }[];
                default_tax_rates?: string[];
            } & {
                address?: string;
                balance?: number;
                currency?: string;
                subscriptions?: {
                    address?: string;
                    balance?: number;
                    currency?: string;
                    subscriptions?: any[];
                    tax_ids?: {
                        country?: string;
                        customer?: string;
                        type?: string;
                        value?: string;
                        verification?: {
                            status?: string;
                            verified_address?: string;
                            verified_name?: string;
                        };
                    }[];
                    items?: {
                        id?: string;
                        quantity?: string;
                        subscription?: string;
                        plan?: {
                            status?: boolean;
                            nickname?: string;
                            product?: string;
                            amount?: number;
                            usage_type?: string;
                        };
                        price?: {
                            nickname?: string;
                            product?: string;
                            active?: boolean;
                            billing_scheme?: string;
                            currency?: string;
                            recurring?: {
                                interval?: string;
                                interval_count?: number;
                                trial_period_days?: number;
                                usage_type?: string;
                            };
                        };
                    }[];
                    default_tax_rates?: string[];
                }[] & ({
                    address?: string;
                    balance?: number;
                    currency?: string;
                    subscriptions?: any[];
                    tax_ids?: {
                        country?: string;
                        customer?: string;
                        type?: string;
                        value?: string;
                        verification?: {
                            status?: string;
                            verified_address?: string;
                            verified_name?: string;
                        };
                    }[];
                    items?: {
                        id?: string;
                        quantity?: string;
                        subscription?: string;
                        plan?: {
                            status?: boolean;
                            nickname?: string;
                            product?: string;
                            amount?: number;
                            usage_type?: string;
                        };
                        price?: {
                            nickname?: string;
                            product?: string;
                            active?: boolean;
                            billing_scheme?: string;
                            currency?: string;
                            recurring?: {
                                interval?: string;
                                interval_count?: number;
                                trial_period_days?: number;
                                usage_type?: string;
                            };
                        };
                    }[];
                    default_tax_rates?: string[];
                } & {
                    address?: string;
                    balance?: number;
                    currency?: string;
                    subscriptions?: {
                        address?: string;
                        balance?: number;
                        currency?: string;
                        subscriptions?: any[];
                        tax_ids?: {
                            country?: string;
                            customer?: string;
                            type?: string;
                            value?: string;
                            verification?: {
                                status?: string;
                                verified_address?: string;
                                verified_name?: string;
                            };
                        }[];
                        items?: {
                            id?: string;
                            quantity?: string;
                            subscription?: string;
                            plan?: {
                                status?: boolean;
                                nickname?: string;
                                product?: string;
                                amount?: number;
                                usage_type?: string;
                            };
                            price?: {
                                nickname?: string;
                                product?: string;
                                active?: boolean;
                                billing_scheme?: string;
                                currency?: string;
                                recurring?: {
                                    interval?: string;
                                    interval_count?: number;
                                    trial_period_days?: number;
                                    usage_type?: string;
                                };
                            };
                        }[];
                        default_tax_rates?: string[];
                    }[] & ({
                        address?: string;
                        balance?: number;
                        currency?: string;
                        subscriptions?: any[];
                        tax_ids?: {
                            country?: string;
                            customer?: string;
                            type?: string;
                            value?: string;
                            verification?: {
                                status?: string;
                                verified_address?: string;
                                verified_name?: string;
                            };
                        }[];
                        items?: {
                            id?: string;
                            quantity?: string;
                            subscription?: string;
                            plan?: {
                                status?: boolean;
                                nickname?: string;
                                product?: string;
                                amount?: number;
                                usage_type?: string;
                            };
                            price?: {
                                nickname?: string;
                                product?: string;
                                active?: boolean;
                                billing_scheme?: string;
                                currency?: string;
                                recurring?: {
                                    interval?: string;
                                    interval_count?: number;
                                    trial_period_days?: number;
                                    usage_type?: string;
                                };
                            };
                        }[];
                        default_tax_rates?: string[];
                    } & {
                        address?: string;
                        balance?: number;
                        currency?: string;
                        subscriptions?: {
                            address?: string;
                            balance?: number;
                            currency?: string;
                            subscriptions?: any[];
                            tax_ids?: {
                                country?: string;
                                customer?: string;
                                type?: string;
                                value?: string;
                                verification?: {
                                    status?: string;
                                    verified_address?: string;
                                    verified_name?: string;
                                };
                            }[];
                            items?: {
                                id?: string;
                                quantity?: string;
                                subscription?: string;
                                plan?: {
                                    status?: boolean;
                                    nickname?: string;
                                    product?: string;
                                    amount?: number;
                                    usage_type?: string;
                                };
                                price?: {
                                    nickname?: string;
                                    product?: string;
                                    active?: boolean;
                                    billing_scheme?: string;
                                    currency?: string;
                                    recurring?: {
                                        interval?: string;
                                        interval_count?: number;
                                        trial_period_days?: number;
                                        usage_type?: string;
                                    };
                                };
                            }[];
                            default_tax_rates?: string[];
                        }[] & ({
                            address?: string;
                            balance?: number;
                            currency?: string;
                            subscriptions?: any[];
                            tax_ids?: {
                                country?: string;
                                customer?: string;
                                type?: string;
                                value?: string;
                                verification?: {
                                    status?: string;
                                    verified_address?: string;
                                    verified_name?: string;
                                };
                            }[];
                            items?: {
                                id?: string;
                                quantity?: string;
                                subscription?: string;
                                plan?: {
                                    status?: boolean;
                                    nickname?: string;
                                    product?: string;
                                    amount?: number;
                                    usage_type?: string;
                                };
                                price?: {
                                    nickname?: string;
                                    product?: string;
                                    active?: boolean;
                                    billing_scheme?: string;
                                    currency?: string;
                                    recurring?: {
                                        interval?: string;
                                        interval_count?: number;
                                        trial_period_days?: number;
                                        usage_type?: string;
                                    };
                                };
                            }[];
                            default_tax_rates?: string[];
                        } & {
                            address?: string;
                            balance?: number;
                            currency?: string;
                            subscriptions?: {
                                address?: string;
                                balance?: number;
                                currency?: string;
                                subscriptions?: any[];
                                tax_ids?: {
                                    country?: string;
                                    customer?: string;
                                    type?: string;
                                    value?: string;
                                    verification?: {
                                        status?: string;
                                        verified_address?: string;
                                        verified_name?: string;
                                    };
                                }[];
                                items?: {
                                    id?: string;
                                    quantity?: string;
                                    subscription?: string;
                                    plan?: {
                                        status?: boolean;
                                        nickname?: string;
                                        product?: string;
                                        amount?: number;
                                        usage_type?: string;
                                    };
                                    price?: {
                                        nickname?: string;
                                        product?: string;
                                        active?: boolean;
                                        billing_scheme?: string;
                                        currency?: string;
                                        recurring?: {
                                            interval?: string;
                                            interval_count?: number;
                                            trial_period_days?: number;
                                            usage_type?: string;
                                        };
                                    };
                                }[];
                                default_tax_rates?: string[];
                            }[] & ({
                                address?: string;
                                balance?: number;
                                currency?: string;
                                subscriptions?: any[];
                                tax_ids?: {
                                    country?: string;
                                    customer?: string;
                                    type?: string;
                                    value?: string;
                                    verification?: {
                                        status?: string;
                                        verified_address?: string;
                                        verified_name?: string;
                                    };
                                }[];
                                items?: {
                                    id?: string;
                                    quantity?: string;
                                    subscription?: string;
                                    plan?: {
                                        status?: boolean;
                                        nickname?: string;
                                        product?: string;
                                        amount?: number;
                                        usage_type?: string;
                                    };
                                    price?: {
                                        nickname?: string;
                                        product?: string;
                                        active?: boolean;
                                        billing_scheme?: string;
                                        currency?: string;
                                        recurring?: {
                                            interval?: string;
                                            interval_count?: number;
                                            trial_period_days?: number;
                                            usage_type?: string;
                                        };
                                    };
                                }[];
                                default_tax_rates?: string[];
                            } & {
                                address?: string;
                                balance?: number;
                                currency?: string;
                                subscriptions?: {
                                    address?: string;
                                    balance?: number;
                                    currency?: string;
                                    subscriptions?: any[];
                                    tax_ids?: {
                                        country?: string;
                                        customer?: string;
                                        type?: string;
                                        value?: string;
                                        verification?: {
                                            status?: string;
                                            verified_address?: string;
                                            verified_name?: string;
                                        };
                                    }[];
                                    items?: {
                                        id?: string;
                                        quantity?: string;
                                        subscription?: string;
                                        plan?: {
                                            status?: boolean;
                                            nickname?: string;
                                            product?: string;
                                            amount?: number;
                                            usage_type?: string;
                                        };
                                        price?: {
                                            nickname?: string;
                                            product?: string;
                                            active?: boolean;
                                            billing_scheme?: string;
                                            currency?: string;
                                            recurring?: {
                                                interval?: string;
                                                interval_count?: number;
                                                trial_period_days?: number;
                                                usage_type?: string;
                                            };
                                        };
                                    }[];
                                    default_tax_rates?: string[];
                                }[] & ({
                                    address?: string;
                                    balance?: number;
                                    currency?: string;
                                    subscriptions?: any[];
                                    tax_ids?: {
                                        country?: string;
                                        customer?: string;
                                        type?: string;
                                        value?: string;
                                        verification?: {
                                            status?: string;
                                            verified_address?: string;
                                            verified_name?: string;
                                        };
                                    }[];
                                    items?: {
                                        id?: string;
                                        quantity?: string;
                                        subscription?: string;
                                        plan?: {
                                            status?: boolean;
                                            nickname?: string;
                                            product?: string;
                                            amount?: number;
                                            usage_type?: string;
                                        };
                                        price?: {
                                            nickname?: string;
                                            product?: string;
                                            active?: boolean;
                                            billing_scheme?: string;
                                            currency?: string;
                                            recurring?: {
                                                interval?: string;
                                                interval_count?: number;
                                                trial_period_days?: number;
                                                usage_type?: string;
                                            };
                                        };
                                    }[];
                                    default_tax_rates?: string[];
                                } & {
                                    address?: string;
                                    balance?: number;
                                    currency?: string;
                                    subscriptions?: {
                                        address?: string;
                                        balance?: number;
                                        currency?: string;
                                        subscriptions?: any[];
                                        tax_ids?: {
                                            country?: string;
                                            customer?: string;
                                            type?: string;
                                            value?: string;
                                            verification?: {
                                                status?: string;
                                                verified_address?: string;
                                                verified_name?: string;
                                            };
                                        }[];
                                        items?: {
                                            id?: string;
                                            quantity?: string;
                                            subscription?: string;
                                            plan?: {
                                                status?: boolean;
                                                nickname?: string;
                                                product?: string;
                                                amount?: number;
                                                usage_type?: string;
                                            };
                                            price?: {
                                                nickname?: string;
                                                product?: string;
                                                active?: boolean;
                                                billing_scheme?: string;
                                                currency?: string;
                                                recurring?: {
                                                    interval?: string;
                                                    interval_count?: number;
                                                    trial_period_days?: number;
                                                    usage_type?: string;
                                                };
                                            };
                                        }[];
                                        default_tax_rates?: string[];
                                    }[] & ({
                                        address?: string;
                                        balance?: number;
                                        currency?: string;
                                        subscriptions?: any[];
                                        tax_ids?: {
                                            country?: string;
                                            customer?: string;
                                            type?: string;
                                            value?: string;
                                            verification?: {
                                                status?: string;
                                                verified_address?: string;
                                                verified_name?: string;
                                            };
                                        }[];
                                        items?: {
                                            id?: string;
                                            quantity?: string;
                                            subscription?: string;
                                            plan?: {
                                                status?: boolean;
                                                nickname?: string;
                                                product?: string;
                                                amount?: number;
                                                usage_type?: string;
                                            };
                                            price?: {
                                                nickname?: string;
                                                product?: string;
                                                active?: boolean;
                                                billing_scheme?: string;
                                                currency?: string;
                                                recurring?: {
                                                    interval?: string;
                                                    interval_count?: number;
                                                    trial_period_days?: number;
                                                    usage_type?: string;
                                                };
                                            };
                                        }[];
                                        default_tax_rates?: string[];
                                    } & {
                                        address?: string;
                                        balance?: number;
                                        currency?: string;
                                        subscriptions?: {
                                            address?: string;
                                            balance?: number;
                                            currency?: string;
                                            subscriptions?: any[];
                                            tax_ids?: {
                                                country?: string;
                                                customer?: string;
                                                type?: string;
                                                value?: string;
                                                verification?: {
                                                    status?: string;
                                                    verified_address?: string;
                                                    verified_name?: string;
                                                };
                                            }[];
                                            items?: {
                                                id?: string;
                                                quantity?: string;
                                                subscription?: string;
                                                plan?: {
                                                    status?: boolean;
                                                    nickname?: string;
                                                    product?: string;
                                                    amount?: number;
                                                    usage_type?: string;
                                                };
                                                price?: {
                                                    nickname?: string;
                                                    product?: string;
                                                    active?: boolean;
                                                    billing_scheme?: string;
                                                    currency?: string;
                                                    recurring?: {
                                                        interval?: string;
                                                        interval_count?: number;
                                                        trial_period_days?: number;
                                                        usage_type?: string;
                                                    };
                                                };
                                            }[];
                                            default_tax_rates?: string[];
                                        }[] & ({
                                            address?: string;
                                            balance?: number;
                                            currency?: string;
                                            subscriptions?: any[];
                                            tax_ids?: {
                                                country?: string;
                                                customer?: string;
                                                type?: string;
                                                value?: string;
                                                verification?: {
                                                    status?: string;
                                                    verified_address?: string;
                                                    verified_name?: string;
                                                };
                                            }[];
                                            items?: {
                                                id?: string;
                                                quantity?: string;
                                                subscription?: string;
                                                plan?: {
                                                    status?: boolean;
                                                    nickname?: string;
                                                    product?: string;
                                                    amount?: number;
                                                    usage_type?: string;
                                                };
                                                price?: {
                                                    nickname?: string;
                                                    product?: string;
                                                    active?: boolean;
                                                    billing_scheme?: string;
                                                    currency?: string;
                                                    recurring?: {
                                                        interval?: string;
                                                        interval_count?: number;
                                                        trial_period_days?: number;
                                                        usage_type?: string;
                                                    };
                                                };
                                            }[];
                                            default_tax_rates?: string[];
                                        } & {
                                            address?: string;
                                            balance?: number;
                                            currency?: string;
                                            subscriptions?: {
                                                address?: string;
                                                balance?: number;
                                                currency?: string;
                                                subscriptions?: any[];
                                                tax_ids?: {
                                                    country?: string;
                                                    customer?: string;
                                                    type?: string;
                                                    value?: string;
                                                    verification?: {
                                                        status?: string;
                                                        verified_address?: string;
                                                        verified_name?: string;
                                                    };
                                                }[];
                                                items?: {
                                                    id?: string;
                                                    quantity?: string;
                                                    subscription?: string;
                                                    plan?: {
                                                        status?: boolean;
                                                        nickname?: string;
                                                        product?: string;
                                                        amount?: number;
                                                        usage_type?: string;
                                                    };
                                                    price?: {
                                                        nickname?: string;
                                                        product?: string;
                                                        active?: boolean;
                                                        billing_scheme?: string;
                                                        currency?: string;
                                                        recurring?: {
                                                            interval?: string;
                                                            interval_count?: number;
                                                            trial_period_days?: number;
                                                            usage_type?: string;
                                                        };
                                                    };
                                                }[];
                                                default_tax_rates?: string[];
                                            }[] & ({
                                                address?: string;
                                                balance?: number;
                                                currency?: string;
                                                subscriptions?: any[];
                                                tax_ids?: {
                                                    country?: string;
                                                    customer?: string;
                                                    type?: string;
                                                    value?: string;
                                                    verification?: {
                                                        status?: string;
                                                        verified_address?: string;
                                                        verified_name?: string;
                                                    };
                                                }[];
                                                items?: {
                                                    id?: string;
                                                    quantity?: string;
                                                    subscription?: string;
                                                    plan?: {
                                                        status?: boolean;
                                                        nickname?: string;
                                                        product?: string;
                                                        amount?: number;
                                                        usage_type?: string;
                                                    };
                                                    price?: {
                                                        nickname?: string;
                                                        product?: string;
                                                        active?: boolean;
                                                        billing_scheme?: string;
                                                        currency?: string;
                                                        recurring?: {
                                                            interval?: string;
                                                            interval_count?: number;
                                                            trial_period_days?: number;
                                                            usage_type?: string;
                                                        };
                                                    };
                                                }[];
                                                default_tax_rates?: string[];
                                            } & {
                                                address?: string;
                                                balance?: number;
                                                currency?: string;
                                                subscriptions?: {
                                                    address?: string;
                                                    balance?: number;
                                                    currency?: string;
                                                    subscriptions?: any[];
                                                    tax_ids?: {
                                                        country?: string;
                                                        customer?: string;
                                                        type?: string;
                                                        value?: string;
                                                        verification?: {
                                                            status?: string;
                                                            verified_address?: string;
                                                            verified_name?: string;
                                                        };
                                                    }[];
                                                    items?: {
                                                        id?: string;
                                                        quantity?: string;
                                                        subscription?: string;
                                                        plan?: {
                                                            status?: boolean;
                                                            nickname?: string;
                                                            product?: string;
                                                            amount?: number;
                                                            usage_type?: string;
                                                        };
                                                        price?: {
                                                            nickname?: string;
                                                            product?: string;
                                                            active?: boolean;
                                                            billing_scheme?: string;
                                                            currency?: string;
                                                            recurring?: {
                                                                interval?: string;
                                                                interval_count?: number;
                                                                trial_period_days?: number;
                                                                usage_type?: string;
                                                            };
                                                        };
                                                    }[];
                                                    default_tax_rates?: string[];
                                                }[] & ({
                                                    address?: string;
                                                    balance?: number;
                                                    currency?: string;
                                                    subscriptions?: any[];
                                                    tax_ids?: {
                                                        country?: string;
                                                        customer?: string;
                                                        type?: string;
                                                        value?: string;
                                                        verification?: {
                                                            status?: string;
                                                            verified_address?: string;
                                                            verified_name?: string;
                                                        };
                                                    }[];
                                                    items?: {
                                                        id?: string;
                                                        quantity?: string;
                                                        subscription?: string;
                                                        plan?: {
                                                            status?: boolean;
                                                            nickname?: string;
                                                            product?: string;
                                                            amount?: number;
                                                            usage_type?: string;
                                                        };
                                                        price?: {
                                                            nickname?: string;
                                                            product?: string;
                                                            active?: boolean;
                                                            billing_scheme?: string;
                                                            currency?: string;
                                                            recurring?: {
                                                                interval?: string;
                                                                interval_count?: number;
                                                                trial_period_days?: number;
                                                                usage_type?: string;
                                                            };
                                                        };
                                                    }[];
                                                    default_tax_rates?: string[];
                                                } & any & { [K_112 in Exclude<keyof I_1["stripe"]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number], keyof import("./stripe").StripeSubscription>]: never; })[] & { [K_113 in Exclude<keyof I_1["stripe"]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"], keyof {
                                                    address?: string;
                                                    balance?: number;
                                                    currency?: string;
                                                    subscriptions?: any[];
                                                    tax_ids?: {
                                                        country?: string;
                                                        customer?: string;
                                                        type?: string;
                                                        value?: string;
                                                        verification?: {
                                                            status?: string;
                                                            verified_address?: string;
                                                            verified_name?: string;
                                                        };
                                                    }[];
                                                    items?: {
                                                        id?: string;
                                                        quantity?: string;
                                                        subscription?: string;
                                                        plan?: {
                                                            status?: boolean;
                                                            nickname?: string;
                                                            product?: string;
                                                            amount?: number;
                                                            usage_type?: string;
                                                        };
                                                        price?: {
                                                            nickname?: string;
                                                            product?: string;
                                                            active?: boolean;
                                                            billing_scheme?: string;
                                                            currency?: string;
                                                            recurring?: {
                                                                interval?: string;
                                                                interval_count?: number;
                                                                trial_period_days?: number;
                                                                usage_type?: string;
                                                            };
                                                        };
                                                    }[];
                                                    default_tax_rates?: string[];
                                                }[]>]: never; };
                                                tax_ids?: {
                                                    country?: string;
                                                    customer?: string;
                                                    type?: string;
                                                    value?: string;
                                                    verification?: {
                                                        status?: string;
                                                        verified_address?: string;
                                                        verified_name?: string;
                                                    };
                                                }[] & ({
                                                    country?: string;
                                                    customer?: string;
                                                    type?: string;
                                                    value?: string;
                                                    verification?: {
                                                        status?: string;
                                                        verified_address?: string;
                                                        verified_name?: string;
                                                    };
                                                } & any & { [K_114 in Exclude<keyof I_1["stripe"]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["tax_ids"][number], keyof import("./stripe").StripeTaxId>]: never; })[] & { [K_115 in Exclude<keyof I_1["stripe"]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["tax_ids"], keyof {
                                                    country?: string;
                                                    customer?: string;
                                                    type?: string;
                                                    value?: string;
                                                    verification?: {
                                                        status?: string;
                                                        verified_address?: string;
                                                        verified_name?: string;
                                                    };
                                                }[]>]: never; };
                                                items?: {
                                                    id?: string;
                                                    quantity?: string;
                                                    subscription?: string;
                                                    plan?: {
                                                        status?: boolean;
                                                        nickname?: string;
                                                        product?: string;
                                                        amount?: number;
                                                        usage_type?: string;
                                                    };
                                                    price?: {
                                                        nickname?: string;
                                                        product?: string;
                                                        active?: boolean;
                                                        billing_scheme?: string;
                                                        currency?: string;
                                                        recurring?: {
                                                            interval?: string;
                                                            interval_count?: number;
                                                            trial_period_days?: number;
                                                            usage_type?: string;
                                                        };
                                                    };
                                                }[] & ({
                                                    id?: string;
                                                    quantity?: string;
                                                    subscription?: string;
                                                    plan?: {
                                                        status?: boolean;
                                                        nickname?: string;
                                                        product?: string;
                                                        amount?: number;
                                                        usage_type?: string;
                                                    };
                                                    price?: {
                                                        nickname?: string;
                                                        product?: string;
                                                        active?: boolean;
                                                        billing_scheme?: string;
                                                        currency?: string;
                                                        recurring?: {
                                                            interval?: string;
                                                            interval_count?: number;
                                                            trial_period_days?: number;
                                                            usage_type?: string;
                                                        };
                                                    };
                                                } & any & { [K_116 in Exclude<keyof I_1["stripe"]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["items"][number], keyof import("./stripe").StripeSubscriptionItem>]: never; })[] & { [K_117 in Exclude<keyof I_1["stripe"]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["items"], keyof {
                                                    id?: string;
                                                    quantity?: string;
                                                    subscription?: string;
                                                    plan?: {
                                                        status?: boolean;
                                                        nickname?: string;
                                                        product?: string;
                                                        amount?: number;
                                                        usage_type?: string;
                                                    };
                                                    price?: {
                                                        nickname?: string;
                                                        product?: string;
                                                        active?: boolean;
                                                        billing_scheme?: string;
                                                        currency?: string;
                                                        recurring?: {
                                                            interval?: string;
                                                            interval_count?: number;
                                                            trial_period_days?: number;
                                                            usage_type?: string;
                                                        };
                                                    };
                                                }[]>]: never; };
                                                default_tax_rates?: string[] & string[] & { [K_118 in Exclude<keyof I_1["stripe"]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["default_tax_rates"], keyof string[]>]: never; };
                                            } & { [K_119 in Exclude<keyof I_1["stripe"]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number], keyof import("./stripe").StripeSubscription>]: never; })[] & { [K_120 in Exclude<keyof I_1["stripe"]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"], keyof {
                                                address?: string;
                                                balance?: number;
                                                currency?: string;
                                                subscriptions?: any[];
                                                tax_ids?: {
                                                    country?: string;
                                                    customer?: string;
                                                    type?: string;
                                                    value?: string;
                                                    verification?: {
                                                        status?: string;
                                                        verified_address?: string;
                                                        verified_name?: string;
                                                    };
                                                }[];
                                                items?: {
                                                    id?: string;
                                                    quantity?: string;
                                                    subscription?: string;
                                                    plan?: {
                                                        status?: boolean;
                                                        nickname?: string;
                                                        product?: string;
                                                        amount?: number;
                                                        usage_type?: string;
                                                    };
                                                    price?: {
                                                        nickname?: string;
                                                        product?: string;
                                                        active?: boolean;
                                                        billing_scheme?: string;
                                                        currency?: string;
                                                        recurring?: {
                                                            interval?: string;
                                                            interval_count?: number;
                                                            trial_period_days?: number;
                                                            usage_type?: string;
                                                        };
                                                    };
                                                }[];
                                                default_tax_rates?: string[];
                                            }[]>]: never; };
                                            tax_ids?: {
                                                country?: string;
                                                customer?: string;
                                                type?: string;
                                                value?: string;
                                                verification?: {
                                                    status?: string;
                                                    verified_address?: string;
                                                    verified_name?: string;
                                                };
                                            }[] & ({
                                                country?: string;
                                                customer?: string;
                                                type?: string;
                                                value?: string;
                                                verification?: {
                                                    status?: string;
                                                    verified_address?: string;
                                                    verified_name?: string;
                                                };
                                            } & {
                                                country?: string;
                                                customer?: string;
                                                type?: string;
                                                value?: string;
                                                verification?: {
                                                    status?: string;
                                                    verified_address?: string;
                                                    verified_name?: string;
                                                } & any & { [K_121 in Exclude<keyof I_1["stripe"]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["tax_ids"][number]["verification"], keyof import("./stripe").StripeTaxVerification>]: never; };
                                            } & { [K_122 in Exclude<keyof I_1["stripe"]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["tax_ids"][number], keyof import("./stripe").StripeTaxId>]: never; })[] & { [K_123 in Exclude<keyof I_1["stripe"]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["tax_ids"], keyof {
                                                country?: string;
                                                customer?: string;
                                                type?: string;
                                                value?: string;
                                                verification?: {
                                                    status?: string;
                                                    verified_address?: string;
                                                    verified_name?: string;
                                                };
                                            }[]>]: never; };
                                            items?: {
                                                id?: string;
                                                quantity?: string;
                                                subscription?: string;
                                                plan?: {
                                                    status?: boolean;
                                                    nickname?: string;
                                                    product?: string;
                                                    amount?: number;
                                                    usage_type?: string;
                                                };
                                                price?: {
                                                    nickname?: string;
                                                    product?: string;
                                                    active?: boolean;
                                                    billing_scheme?: string;
                                                    currency?: string;
                                                    recurring?: {
                                                        interval?: string;
                                                        interval_count?: number;
                                                        trial_period_days?: number;
                                                        usage_type?: string;
                                                    };
                                                };
                                            }[] & ({
                                                id?: string;
                                                quantity?: string;
                                                subscription?: string;
                                                plan?: {
                                                    status?: boolean;
                                                    nickname?: string;
                                                    product?: string;
                                                    amount?: number;
                                                    usage_type?: string;
                                                };
                                                price?: {
                                                    nickname?: string;
                                                    product?: string;
                                                    active?: boolean;
                                                    billing_scheme?: string;
                                                    currency?: string;
                                                    recurring?: {
                                                        interval?: string;
                                                        interval_count?: number;
                                                        trial_period_days?: number;
                                                        usage_type?: string;
                                                    };
                                                };
                                            } & {
                                                id?: string;
                                                quantity?: string;
                                                subscription?: string;
                                                plan?: {
                                                    status?: boolean;
                                                    nickname?: string;
                                                    product?: string;
                                                    amount?: number;
                                                    usage_type?: string;
                                                } & any & { [K_124 in Exclude<keyof I_1["stripe"]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["items"][number]["plan"], keyof import("./stripe").StripePlan>]: never; };
                                                price?: {
                                                    nickname?: string;
                                                    product?: string;
                                                    active?: boolean;
                                                    billing_scheme?: string;
                                                    currency?: string;
                                                    recurring?: {
                                                        interval?: string;
                                                        interval_count?: number;
                                                        trial_period_days?: number;
                                                        usage_type?: string;
                                                    };
                                                } & any & { [K_125 in Exclude<keyof I_1["stripe"]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["items"][number]["price"], keyof import("./stripe").StripePrice>]: never; };
                                            } & { [K_126 in Exclude<keyof I_1["stripe"]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["items"][number], keyof import("./stripe").StripeSubscriptionItem>]: never; })[] & { [K_127 in Exclude<keyof I_1["stripe"]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["items"], keyof {
                                                id?: string;
                                                quantity?: string;
                                                subscription?: string;
                                                plan?: {
                                                    status?: boolean;
                                                    nickname?: string;
                                                    product?: string;
                                                    amount?: number;
                                                    usage_type?: string;
                                                };
                                                price?: {
                                                    nickname?: string;
                                                    product?: string;
                                                    active?: boolean;
                                                    billing_scheme?: string;
                                                    currency?: string;
                                                    recurring?: {
                                                        interval?: string;
                                                        interval_count?: number;
                                                        trial_period_days?: number;
                                                        usage_type?: string;
                                                    };
                                                };
                                            }[]>]: never; };
                                            default_tax_rates?: string[] & string[] & { [K_128 in Exclude<keyof I_1["stripe"]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["default_tax_rates"], keyof string[]>]: never; };
                                        } & { [K_129 in Exclude<keyof I_1["stripe"]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number], keyof import("./stripe").StripeSubscription>]: never; })[] & { [K_130 in Exclude<keyof I_1["stripe"]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"], keyof {
                                            address?: string;
                                            balance?: number;
                                            currency?: string;
                                            subscriptions?: any[];
                                            tax_ids?: {
                                                country?: string;
                                                customer?: string;
                                                type?: string;
                                                value?: string;
                                                verification?: {
                                                    status?: string;
                                                    verified_address?: string;
                                                    verified_name?: string;
                                                };
                                            }[];
                                            items?: {
                                                id?: string;
                                                quantity?: string;
                                                subscription?: string;
                                                plan?: {
                                                    status?: boolean;
                                                    nickname?: string;
                                                    product?: string;
                                                    amount?: number;
                                                    usage_type?: string;
                                                };
                                                price?: {
                                                    nickname?: string;
                                                    product?: string;
                                                    active?: boolean;
                                                    billing_scheme?: string;
                                                    currency?: string;
                                                    recurring?: {
                                                        interval?: string;
                                                        interval_count?: number;
                                                        trial_period_days?: number;
                                                        usage_type?: string;
                                                    };
                                                };
                                            }[];
                                            default_tax_rates?: string[];
                                        }[]>]: never; };
                                        tax_ids?: {
                                            country?: string;
                                            customer?: string;
                                            type?: string;
                                            value?: string;
                                            verification?: {
                                                status?: string;
                                                verified_address?: string;
                                                verified_name?: string;
                                            };
                                        }[] & ({
                                            country?: string;
                                            customer?: string;
                                            type?: string;
                                            value?: string;
                                            verification?: {
                                                status?: string;
                                                verified_address?: string;
                                                verified_name?: string;
                                            };
                                        } & {
                                            country?: string;
                                            customer?: string;
                                            type?: string;
                                            value?: string;
                                            verification?: {
                                                status?: string;
                                                verified_address?: string;
                                                verified_name?: string;
                                            } & {
                                                status?: string;
                                                verified_address?: string;
                                                verified_name?: string;
                                            } & { [K_131 in Exclude<keyof I_1["stripe"]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["tax_ids"][number]["verification"], keyof import("./stripe").StripeTaxVerification>]: never; };
                                        } & { [K_132 in Exclude<keyof I_1["stripe"]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["tax_ids"][number], keyof import("./stripe").StripeTaxId>]: never; })[] & { [K_133 in Exclude<keyof I_1["stripe"]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["tax_ids"], keyof {
                                            country?: string;
                                            customer?: string;
                                            type?: string;
                                            value?: string;
                                            verification?: {
                                                status?: string;
                                                verified_address?: string;
                                                verified_name?: string;
                                            };
                                        }[]>]: never; };
                                        items?: {
                                            id?: string;
                                            quantity?: string;
                                            subscription?: string;
                                            plan?: {
                                                status?: boolean;
                                                nickname?: string;
                                                product?: string;
                                                amount?: number;
                                                usage_type?: string;
                                            };
                                            price?: {
                                                nickname?: string;
                                                product?: string;
                                                active?: boolean;
                                                billing_scheme?: string;
                                                currency?: string;
                                                recurring?: {
                                                    interval?: string;
                                                    interval_count?: number;
                                                    trial_period_days?: number;
                                                    usage_type?: string;
                                                };
                                            };
                                        }[] & ({
                                            id?: string;
                                            quantity?: string;
                                            subscription?: string;
                                            plan?: {
                                                status?: boolean;
                                                nickname?: string;
                                                product?: string;
                                                amount?: number;
                                                usage_type?: string;
                                            };
                                            price?: {
                                                nickname?: string;
                                                product?: string;
                                                active?: boolean;
                                                billing_scheme?: string;
                                                currency?: string;
                                                recurring?: {
                                                    interval?: string;
                                                    interval_count?: number;
                                                    trial_period_days?: number;
                                                    usage_type?: string;
                                                };
                                            };
                                        } & {
                                            id?: string;
                                            quantity?: string;
                                            subscription?: string;
                                            plan?: {
                                                status?: boolean;
                                                nickname?: string;
                                                product?: string;
                                                amount?: number;
                                                usage_type?: string;
                                            } & {
                                                status?: boolean;
                                                nickname?: string;
                                                product?: string;
                                                amount?: number;
                                                usage_type?: string;
                                            } & { [K_134 in Exclude<keyof I_1["stripe"]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["items"][number]["plan"], keyof import("./stripe").StripePlan>]: never; };
                                            price?: {
                                                nickname?: string;
                                                product?: string;
                                                active?: boolean;
                                                billing_scheme?: string;
                                                currency?: string;
                                                recurring?: {
                                                    interval?: string;
                                                    interval_count?: number;
                                                    trial_period_days?: number;
                                                    usage_type?: string;
                                                };
                                            } & {
                                                nickname?: string;
                                                product?: string;
                                                active?: boolean;
                                                billing_scheme?: string;
                                                currency?: string;
                                                recurring?: {
                                                    interval?: string;
                                                    interval_count?: number;
                                                    trial_period_days?: number;
                                                    usage_type?: string;
                                                } & any & { [K_135 in Exclude<keyof I_1["stripe"]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["items"][number]["price"]["recurring"], keyof import("./stripe").StripeRecurring>]: never; };
                                            } & { [K_136 in Exclude<keyof I_1["stripe"]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["items"][number]["price"], keyof import("./stripe").StripePrice>]: never; };
                                        } & { [K_137 in Exclude<keyof I_1["stripe"]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["items"][number], keyof import("./stripe").StripeSubscriptionItem>]: never; })[] & { [K_138 in Exclude<keyof I_1["stripe"]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["items"], keyof {
                                            id?: string;
                                            quantity?: string;
                                            subscription?: string;
                                            plan?: {
                                                status?: boolean;
                                                nickname?: string;
                                                product?: string;
                                                amount?: number;
                                                usage_type?: string;
                                            };
                                            price?: {
                                                nickname?: string;
                                                product?: string;
                                                active?: boolean;
                                                billing_scheme?: string;
                                                currency?: string;
                                                recurring?: {
                                                    interval?: string;
                                                    interval_count?: number;
                                                    trial_period_days?: number;
                                                    usage_type?: string;
                                                };
                                            };
                                        }[]>]: never; };
                                        default_tax_rates?: string[] & string[] & { [K_139 in Exclude<keyof I_1["stripe"]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["default_tax_rates"], keyof string[]>]: never; };
                                    } & { [K_140 in Exclude<keyof I_1["stripe"]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number], keyof import("./stripe").StripeSubscription>]: never; })[] & { [K_141 in Exclude<keyof I_1["stripe"]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"], keyof {
                                        address?: string;
                                        balance?: number;
                                        currency?: string;
                                        subscriptions?: any[];
                                        tax_ids?: {
                                            country?: string;
                                            customer?: string;
                                            type?: string;
                                            value?: string;
                                            verification?: {
                                                status?: string;
                                                verified_address?: string;
                                                verified_name?: string;
                                            };
                                        }[];
                                        items?: {
                                            id?: string;
                                            quantity?: string;
                                            subscription?: string;
                                            plan?: {
                                                status?: boolean;
                                                nickname?: string;
                                                product?: string;
                                                amount?: number;
                                                usage_type?: string;
                                            };
                                            price?: {
                                                nickname?: string;
                                                product?: string;
                                                active?: boolean;
                                                billing_scheme?: string;
                                                currency?: string;
                                                recurring?: {
                                                    interval?: string;
                                                    interval_count?: number;
                                                    trial_period_days?: number;
                                                    usage_type?: string;
                                                };
                                            };
                                        }[];
                                        default_tax_rates?: string[];
                                    }[]>]: never; };
                                    tax_ids?: {
                                        country?: string;
                                        customer?: string;
                                        type?: string;
                                        value?: string;
                                        verification?: {
                                            status?: string;
                                            verified_address?: string;
                                            verified_name?: string;
                                        };
                                    }[] & ({
                                        country?: string;
                                        customer?: string;
                                        type?: string;
                                        value?: string;
                                        verification?: {
                                            status?: string;
                                            verified_address?: string;
                                            verified_name?: string;
                                        };
                                    } & {
                                        country?: string;
                                        customer?: string;
                                        type?: string;
                                        value?: string;
                                        verification?: {
                                            status?: string;
                                            verified_address?: string;
                                            verified_name?: string;
                                        } & {
                                            status?: string;
                                            verified_address?: string;
                                            verified_name?: string;
                                        } & { [K_142 in Exclude<keyof I_1["stripe"]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["tax_ids"][number]["verification"], keyof import("./stripe").StripeTaxVerification>]: never; };
                                    } & { [K_143 in Exclude<keyof I_1["stripe"]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["tax_ids"][number], keyof import("./stripe").StripeTaxId>]: never; })[] & { [K_144 in Exclude<keyof I_1["stripe"]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["tax_ids"], keyof {
                                        country?: string;
                                        customer?: string;
                                        type?: string;
                                        value?: string;
                                        verification?: {
                                            status?: string;
                                            verified_address?: string;
                                            verified_name?: string;
                                        };
                                    }[]>]: never; };
                                    items?: {
                                        id?: string;
                                        quantity?: string;
                                        subscription?: string;
                                        plan?: {
                                            status?: boolean;
                                            nickname?: string;
                                            product?: string;
                                            amount?: number;
                                            usage_type?: string;
                                        };
                                        price?: {
                                            nickname?: string;
                                            product?: string;
                                            active?: boolean;
                                            billing_scheme?: string;
                                            currency?: string;
                                            recurring?: {
                                                interval?: string;
                                                interval_count?: number;
                                                trial_period_days?: number;
                                                usage_type?: string;
                                            };
                                        };
                                    }[] & ({
                                        id?: string;
                                        quantity?: string;
                                        subscription?: string;
                                        plan?: {
                                            status?: boolean;
                                            nickname?: string;
                                            product?: string;
                                            amount?: number;
                                            usage_type?: string;
                                        };
                                        price?: {
                                            nickname?: string;
                                            product?: string;
                                            active?: boolean;
                                            billing_scheme?: string;
                                            currency?: string;
                                            recurring?: {
                                                interval?: string;
                                                interval_count?: number;
                                                trial_period_days?: number;
                                                usage_type?: string;
                                            };
                                        };
                                    } & {
                                        id?: string;
                                        quantity?: string;
                                        subscription?: string;
                                        plan?: {
                                            status?: boolean;
                                            nickname?: string;
                                            product?: string;
                                            amount?: number;
                                            usage_type?: string;
                                        } & {
                                            status?: boolean;
                                            nickname?: string;
                                            product?: string;
                                            amount?: number;
                                            usage_type?: string;
                                        } & { [K_145 in Exclude<keyof I_1["stripe"]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["items"][number]["plan"], keyof import("./stripe").StripePlan>]: never; };
                                        price?: {
                                            nickname?: string;
                                            product?: string;
                                            active?: boolean;
                                            billing_scheme?: string;
                                            currency?: string;
                                            recurring?: {
                                                interval?: string;
                                                interval_count?: number;
                                                trial_period_days?: number;
                                                usage_type?: string;
                                            };
                                        } & {
                                            nickname?: string;
                                            product?: string;
                                            active?: boolean;
                                            billing_scheme?: string;
                                            currency?: string;
                                            recurring?: {
                                                interval?: string;
                                                interval_count?: number;
                                                trial_period_days?: number;
                                                usage_type?: string;
                                            } & {
                                                interval?: string;
                                                interval_count?: number;
                                                trial_period_days?: number;
                                                usage_type?: string;
                                            } & { [K_146 in Exclude<keyof I_1["stripe"]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["items"][number]["price"]["recurring"], keyof import("./stripe").StripeRecurring>]: never; };
                                        } & { [K_147 in Exclude<keyof I_1["stripe"]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["items"][number]["price"], keyof import("./stripe").StripePrice>]: never; };
                                    } & { [K_148 in Exclude<keyof I_1["stripe"]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["items"][number], keyof import("./stripe").StripeSubscriptionItem>]: never; })[] & { [K_149 in Exclude<keyof I_1["stripe"]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["items"], keyof {
                                        id?: string;
                                        quantity?: string;
                                        subscription?: string;
                                        plan?: {
                                            status?: boolean;
                                            nickname?: string;
                                            product?: string;
                                            amount?: number;
                                            usage_type?: string;
                                        };
                                        price?: {
                                            nickname?: string;
                                            product?: string;
                                            active?: boolean;
                                            billing_scheme?: string;
                                            currency?: string;
                                            recurring?: {
                                                interval?: string;
                                                interval_count?: number;
                                                trial_period_days?: number;
                                                usage_type?: string;
                                            };
                                        };
                                    }[]>]: never; };
                                    default_tax_rates?: string[] & string[] & { [K_150 in Exclude<keyof I_1["stripe"]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["default_tax_rates"], keyof string[]>]: never; };
                                } & { [K_151 in Exclude<keyof I_1["stripe"]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number], keyof import("./stripe").StripeSubscription>]: never; })[] & { [K_152 in Exclude<keyof I_1["stripe"]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"], keyof {
                                    address?: string;
                                    balance?: number;
                                    currency?: string;
                                    subscriptions?: any[];
                                    tax_ids?: {
                                        country?: string;
                                        customer?: string;
                                        type?: string;
                                        value?: string;
                                        verification?: {
                                            status?: string;
                                            verified_address?: string;
                                            verified_name?: string;
                                        };
                                    }[];
                                    items?: {
                                        id?: string;
                                        quantity?: string;
                                        subscription?: string;
                                        plan?: {
                                            status?: boolean;
                                            nickname?: string;
                                            product?: string;
                                            amount?: number;
                                            usage_type?: string;
                                        };
                                        price?: {
                                            nickname?: string;
                                            product?: string;
                                            active?: boolean;
                                            billing_scheme?: string;
                                            currency?: string;
                                            recurring?: {
                                                interval?: string;
                                                interval_count?: number;
                                                trial_period_days?: number;
                                                usage_type?: string;
                                            };
                                        };
                                    }[];
                                    default_tax_rates?: string[];
                                }[]>]: never; };
                                tax_ids?: {
                                    country?: string;
                                    customer?: string;
                                    type?: string;
                                    value?: string;
                                    verification?: {
                                        status?: string;
                                        verified_address?: string;
                                        verified_name?: string;
                                    };
                                }[] & ({
                                    country?: string;
                                    customer?: string;
                                    type?: string;
                                    value?: string;
                                    verification?: {
                                        status?: string;
                                        verified_address?: string;
                                        verified_name?: string;
                                    };
                                } & {
                                    country?: string;
                                    customer?: string;
                                    type?: string;
                                    value?: string;
                                    verification?: {
                                        status?: string;
                                        verified_address?: string;
                                        verified_name?: string;
                                    } & {
                                        status?: string;
                                        verified_address?: string;
                                        verified_name?: string;
                                    } & { [K_153 in Exclude<keyof I_1["stripe"]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["tax_ids"][number]["verification"], keyof import("./stripe").StripeTaxVerification>]: never; };
                                } & { [K_154 in Exclude<keyof I_1["stripe"]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["tax_ids"][number], keyof import("./stripe").StripeTaxId>]: never; })[] & { [K_155 in Exclude<keyof I_1["stripe"]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["tax_ids"], keyof {
                                    country?: string;
                                    customer?: string;
                                    type?: string;
                                    value?: string;
                                    verification?: {
                                        status?: string;
                                        verified_address?: string;
                                        verified_name?: string;
                                    };
                                }[]>]: never; };
                                items?: {
                                    id?: string;
                                    quantity?: string;
                                    subscription?: string;
                                    plan?: {
                                        status?: boolean;
                                        nickname?: string;
                                        product?: string;
                                        amount?: number;
                                        usage_type?: string;
                                    };
                                    price?: {
                                        nickname?: string;
                                        product?: string;
                                        active?: boolean;
                                        billing_scheme?: string;
                                        currency?: string;
                                        recurring?: {
                                            interval?: string;
                                            interval_count?: number;
                                            trial_period_days?: number;
                                            usage_type?: string;
                                        };
                                    };
                                }[] & ({
                                    id?: string;
                                    quantity?: string;
                                    subscription?: string;
                                    plan?: {
                                        status?: boolean;
                                        nickname?: string;
                                        product?: string;
                                        amount?: number;
                                        usage_type?: string;
                                    };
                                    price?: {
                                        nickname?: string;
                                        product?: string;
                                        active?: boolean;
                                        billing_scheme?: string;
                                        currency?: string;
                                        recurring?: {
                                            interval?: string;
                                            interval_count?: number;
                                            trial_period_days?: number;
                                            usage_type?: string;
                                        };
                                    };
                                } & {
                                    id?: string;
                                    quantity?: string;
                                    subscription?: string;
                                    plan?: {
                                        status?: boolean;
                                        nickname?: string;
                                        product?: string;
                                        amount?: number;
                                        usage_type?: string;
                                    } & {
                                        status?: boolean;
                                        nickname?: string;
                                        product?: string;
                                        amount?: number;
                                        usage_type?: string;
                                    } & { [K_156 in Exclude<keyof I_1["stripe"]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["items"][number]["plan"], keyof import("./stripe").StripePlan>]: never; };
                                    price?: {
                                        nickname?: string;
                                        product?: string;
                                        active?: boolean;
                                        billing_scheme?: string;
                                        currency?: string;
                                        recurring?: {
                                            interval?: string;
                                            interval_count?: number;
                                            trial_period_days?: number;
                                            usage_type?: string;
                                        };
                                    } & {
                                        nickname?: string;
                                        product?: string;
                                        active?: boolean;
                                        billing_scheme?: string;
                                        currency?: string;
                                        recurring?: {
                                            interval?: string;
                                            interval_count?: number;
                                            trial_period_days?: number;
                                            usage_type?: string;
                                        } & {
                                            interval?: string;
                                            interval_count?: number;
                                            trial_period_days?: number;
                                            usage_type?: string;
                                        } & { [K_157 in Exclude<keyof I_1["stripe"]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["items"][number]["price"]["recurring"], keyof import("./stripe").StripeRecurring>]: never; };
                                    } & { [K_158 in Exclude<keyof I_1["stripe"]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["items"][number]["price"], keyof import("./stripe").StripePrice>]: never; };
                                } & { [K_159 in Exclude<keyof I_1["stripe"]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["items"][number], keyof import("./stripe").StripeSubscriptionItem>]: never; })[] & { [K_160 in Exclude<keyof I_1["stripe"]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["items"], keyof {
                                    id?: string;
                                    quantity?: string;
                                    subscription?: string;
                                    plan?: {
                                        status?: boolean;
                                        nickname?: string;
                                        product?: string;
                                        amount?: number;
                                        usage_type?: string;
                                    };
                                    price?: {
                                        nickname?: string;
                                        product?: string;
                                        active?: boolean;
                                        billing_scheme?: string;
                                        currency?: string;
                                        recurring?: {
                                            interval?: string;
                                            interval_count?: number;
                                            trial_period_days?: number;
                                            usage_type?: string;
                                        };
                                    };
                                }[]>]: never; };
                                default_tax_rates?: string[] & string[] & { [K_161 in Exclude<keyof I_1["stripe"]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["default_tax_rates"], keyof string[]>]: never; };
                            } & { [K_162 in Exclude<keyof I_1["stripe"]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number], keyof import("./stripe").StripeSubscription>]: never; })[] & { [K_163 in Exclude<keyof I_1["stripe"]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"], keyof {
                                address?: string;
                                balance?: number;
                                currency?: string;
                                subscriptions?: any[];
                                tax_ids?: {
                                    country?: string;
                                    customer?: string;
                                    type?: string;
                                    value?: string;
                                    verification?: {
                                        status?: string;
                                        verified_address?: string;
                                        verified_name?: string;
                                    };
                                }[];
                                items?: {
                                    id?: string;
                                    quantity?: string;
                                    subscription?: string;
                                    plan?: {
                                        status?: boolean;
                                        nickname?: string;
                                        product?: string;
                                        amount?: number;
                                        usage_type?: string;
                                    };
                                    price?: {
                                        nickname?: string;
                                        product?: string;
                                        active?: boolean;
                                        billing_scheme?: string;
                                        currency?: string;
                                        recurring?: {
                                            interval?: string;
                                            interval_count?: number;
                                            trial_period_days?: number;
                                            usage_type?: string;
                                        };
                                    };
                                }[];
                                default_tax_rates?: string[];
                            }[]>]: never; };
                            tax_ids?: {
                                country?: string;
                                customer?: string;
                                type?: string;
                                value?: string;
                                verification?: {
                                    status?: string;
                                    verified_address?: string;
                                    verified_name?: string;
                                };
                            }[] & ({
                                country?: string;
                                customer?: string;
                                type?: string;
                                value?: string;
                                verification?: {
                                    status?: string;
                                    verified_address?: string;
                                    verified_name?: string;
                                };
                            } & {
                                country?: string;
                                customer?: string;
                                type?: string;
                                value?: string;
                                verification?: {
                                    status?: string;
                                    verified_address?: string;
                                    verified_name?: string;
                                } & {
                                    status?: string;
                                    verified_address?: string;
                                    verified_name?: string;
                                } & { [K_164 in Exclude<keyof I_1["stripe"]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["tax_ids"][number]["verification"], keyof import("./stripe").StripeTaxVerification>]: never; };
                            } & { [K_165 in Exclude<keyof I_1["stripe"]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["tax_ids"][number], keyof import("./stripe").StripeTaxId>]: never; })[] & { [K_166 in Exclude<keyof I_1["stripe"]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["tax_ids"], keyof {
                                country?: string;
                                customer?: string;
                                type?: string;
                                value?: string;
                                verification?: {
                                    status?: string;
                                    verified_address?: string;
                                    verified_name?: string;
                                };
                            }[]>]: never; };
                            items?: {
                                id?: string;
                                quantity?: string;
                                subscription?: string;
                                plan?: {
                                    status?: boolean;
                                    nickname?: string;
                                    product?: string;
                                    amount?: number;
                                    usage_type?: string;
                                };
                                price?: {
                                    nickname?: string;
                                    product?: string;
                                    active?: boolean;
                                    billing_scheme?: string;
                                    currency?: string;
                                    recurring?: {
                                        interval?: string;
                                        interval_count?: number;
                                        trial_period_days?: number;
                                        usage_type?: string;
                                    };
                                };
                            }[] & ({
                                id?: string;
                                quantity?: string;
                                subscription?: string;
                                plan?: {
                                    status?: boolean;
                                    nickname?: string;
                                    product?: string;
                                    amount?: number;
                                    usage_type?: string;
                                };
                                price?: {
                                    nickname?: string;
                                    product?: string;
                                    active?: boolean;
                                    billing_scheme?: string;
                                    currency?: string;
                                    recurring?: {
                                        interval?: string;
                                        interval_count?: number;
                                        trial_period_days?: number;
                                        usage_type?: string;
                                    };
                                };
                            } & {
                                id?: string;
                                quantity?: string;
                                subscription?: string;
                                plan?: {
                                    status?: boolean;
                                    nickname?: string;
                                    product?: string;
                                    amount?: number;
                                    usage_type?: string;
                                } & {
                                    status?: boolean;
                                    nickname?: string;
                                    product?: string;
                                    amount?: number;
                                    usage_type?: string;
                                } & { [K_167 in Exclude<keyof I_1["stripe"]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["items"][number]["plan"], keyof import("./stripe").StripePlan>]: never; };
                                price?: {
                                    nickname?: string;
                                    product?: string;
                                    active?: boolean;
                                    billing_scheme?: string;
                                    currency?: string;
                                    recurring?: {
                                        interval?: string;
                                        interval_count?: number;
                                        trial_period_days?: number;
                                        usage_type?: string;
                                    };
                                } & {
                                    nickname?: string;
                                    product?: string;
                                    active?: boolean;
                                    billing_scheme?: string;
                                    currency?: string;
                                    recurring?: {
                                        interval?: string;
                                        interval_count?: number;
                                        trial_period_days?: number;
                                        usage_type?: string;
                                    } & {
                                        interval?: string;
                                        interval_count?: number;
                                        trial_period_days?: number;
                                        usage_type?: string;
                                    } & { [K_168 in Exclude<keyof I_1["stripe"]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["items"][number]["price"]["recurring"], keyof import("./stripe").StripeRecurring>]: never; };
                                } & { [K_169 in Exclude<keyof I_1["stripe"]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["items"][number]["price"], keyof import("./stripe").StripePrice>]: never; };
                            } & { [K_170 in Exclude<keyof I_1["stripe"]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["items"][number], keyof import("./stripe").StripeSubscriptionItem>]: never; })[] & { [K_171 in Exclude<keyof I_1["stripe"]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["items"], keyof {
                                id?: string;
                                quantity?: string;
                                subscription?: string;
                                plan?: {
                                    status?: boolean;
                                    nickname?: string;
                                    product?: string;
                                    amount?: number;
                                    usage_type?: string;
                                };
                                price?: {
                                    nickname?: string;
                                    product?: string;
                                    active?: boolean;
                                    billing_scheme?: string;
                                    currency?: string;
                                    recurring?: {
                                        interval?: string;
                                        interval_count?: number;
                                        trial_period_days?: number;
                                        usage_type?: string;
                                    };
                                };
                            }[]>]: never; };
                            default_tax_rates?: string[] & string[] & { [K_172 in Exclude<keyof I_1["stripe"]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["default_tax_rates"], keyof string[]>]: never; };
                        } & { [K_173 in Exclude<keyof I_1["stripe"]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number], keyof import("./stripe").StripeSubscription>]: never; })[] & { [K_174 in Exclude<keyof I_1["stripe"]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"], keyof {
                            address?: string;
                            balance?: number;
                            currency?: string;
                            subscriptions?: any[];
                            tax_ids?: {
                                country?: string;
                                customer?: string;
                                type?: string;
                                value?: string;
                                verification?: {
                                    status?: string;
                                    verified_address?: string;
                                    verified_name?: string;
                                };
                            }[];
                            items?: {
                                id?: string;
                                quantity?: string;
                                subscription?: string;
                                plan?: {
                                    status?: boolean;
                                    nickname?: string;
                                    product?: string;
                                    amount?: number;
                                    usage_type?: string;
                                };
                                price?: {
                                    nickname?: string;
                                    product?: string;
                                    active?: boolean;
                                    billing_scheme?: string;
                                    currency?: string;
                                    recurring?: {
                                        interval?: string;
                                        interval_count?: number;
                                        trial_period_days?: number;
                                        usage_type?: string;
                                    };
                                };
                            }[];
                            default_tax_rates?: string[];
                        }[]>]: never; };
                        tax_ids?: {
                            country?: string;
                            customer?: string;
                            type?: string;
                            value?: string;
                            verification?: {
                                status?: string;
                                verified_address?: string;
                                verified_name?: string;
                            };
                        }[] & ({
                            country?: string;
                            customer?: string;
                            type?: string;
                            value?: string;
                            verification?: {
                                status?: string;
                                verified_address?: string;
                                verified_name?: string;
                            };
                        } & {
                            country?: string;
                            customer?: string;
                            type?: string;
                            value?: string;
                            verification?: {
                                status?: string;
                                verified_address?: string;
                                verified_name?: string;
                            } & {
                                status?: string;
                                verified_address?: string;
                                verified_name?: string;
                            } & { [K_175 in Exclude<keyof I_1["stripe"]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["tax_ids"][number]["verification"], keyof import("./stripe").StripeTaxVerification>]: never; };
                        } & { [K_176 in Exclude<keyof I_1["stripe"]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["tax_ids"][number], keyof import("./stripe").StripeTaxId>]: never; })[] & { [K_177 in Exclude<keyof I_1["stripe"]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["tax_ids"], keyof {
                            country?: string;
                            customer?: string;
                            type?: string;
                            value?: string;
                            verification?: {
                                status?: string;
                                verified_address?: string;
                                verified_name?: string;
                            };
                        }[]>]: never; };
                        items?: {
                            id?: string;
                            quantity?: string;
                            subscription?: string;
                            plan?: {
                                status?: boolean;
                                nickname?: string;
                                product?: string;
                                amount?: number;
                                usage_type?: string;
                            };
                            price?: {
                                nickname?: string;
                                product?: string;
                                active?: boolean;
                                billing_scheme?: string;
                                currency?: string;
                                recurring?: {
                                    interval?: string;
                                    interval_count?: number;
                                    trial_period_days?: number;
                                    usage_type?: string;
                                };
                            };
                        }[] & ({
                            id?: string;
                            quantity?: string;
                            subscription?: string;
                            plan?: {
                                status?: boolean;
                                nickname?: string;
                                product?: string;
                                amount?: number;
                                usage_type?: string;
                            };
                            price?: {
                                nickname?: string;
                                product?: string;
                                active?: boolean;
                                billing_scheme?: string;
                                currency?: string;
                                recurring?: {
                                    interval?: string;
                                    interval_count?: number;
                                    trial_period_days?: number;
                                    usage_type?: string;
                                };
                            };
                        } & {
                            id?: string;
                            quantity?: string;
                            subscription?: string;
                            plan?: {
                                status?: boolean;
                                nickname?: string;
                                product?: string;
                                amount?: number;
                                usage_type?: string;
                            } & {
                                status?: boolean;
                                nickname?: string;
                                product?: string;
                                amount?: number;
                                usage_type?: string;
                            } & { [K_178 in Exclude<keyof I_1["stripe"]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["items"][number]["plan"], keyof import("./stripe").StripePlan>]: never; };
                            price?: {
                                nickname?: string;
                                product?: string;
                                active?: boolean;
                                billing_scheme?: string;
                                currency?: string;
                                recurring?: {
                                    interval?: string;
                                    interval_count?: number;
                                    trial_period_days?: number;
                                    usage_type?: string;
                                };
                            } & {
                                nickname?: string;
                                product?: string;
                                active?: boolean;
                                billing_scheme?: string;
                                currency?: string;
                                recurring?: {
                                    interval?: string;
                                    interval_count?: number;
                                    trial_period_days?: number;
                                    usage_type?: string;
                                } & {
                                    interval?: string;
                                    interval_count?: number;
                                    trial_period_days?: number;
                                    usage_type?: string;
                                } & { [K_179 in Exclude<keyof I_1["stripe"]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["items"][number]["price"]["recurring"], keyof import("./stripe").StripeRecurring>]: never; };
                            } & { [K_180 in Exclude<keyof I_1["stripe"]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["items"][number]["price"], keyof import("./stripe").StripePrice>]: never; };
                        } & { [K_181 in Exclude<keyof I_1["stripe"]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["items"][number], keyof import("./stripe").StripeSubscriptionItem>]: never; })[] & { [K_182 in Exclude<keyof I_1["stripe"]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["items"], keyof {
                            id?: string;
                            quantity?: string;
                            subscription?: string;
                            plan?: {
                                status?: boolean;
                                nickname?: string;
                                product?: string;
                                amount?: number;
                                usage_type?: string;
                            };
                            price?: {
                                nickname?: string;
                                product?: string;
                                active?: boolean;
                                billing_scheme?: string;
                                currency?: string;
                                recurring?: {
                                    interval?: string;
                                    interval_count?: number;
                                    trial_period_days?: number;
                                    usage_type?: string;
                                };
                            };
                        }[]>]: never; };
                        default_tax_rates?: string[] & string[] & { [K_183 in Exclude<keyof I_1["stripe"]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["default_tax_rates"], keyof string[]>]: never; };
                    } & { [K_184 in Exclude<keyof I_1["stripe"]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number], keyof import("./stripe").StripeSubscription>]: never; })[] & { [K_185 in Exclude<keyof I_1["stripe"]["subscriptions"][number]["subscriptions"][number]["subscriptions"], keyof {
                        address?: string;
                        balance?: number;
                        currency?: string;
                        subscriptions?: any[];
                        tax_ids?: {
                            country?: string;
                            customer?: string;
                            type?: string;
                            value?: string;
                            verification?: {
                                status?: string;
                                verified_address?: string;
                                verified_name?: string;
                            };
                        }[];
                        items?: {
                            id?: string;
                            quantity?: string;
                            subscription?: string;
                            plan?: {
                                status?: boolean;
                                nickname?: string;
                                product?: string;
                                amount?: number;
                                usage_type?: string;
                            };
                            price?: {
                                nickname?: string;
                                product?: string;
                                active?: boolean;
                                billing_scheme?: string;
                                currency?: string;
                                recurring?: {
                                    interval?: string;
                                    interval_count?: number;
                                    trial_period_days?: number;
                                    usage_type?: string;
                                };
                            };
                        }[];
                        default_tax_rates?: string[];
                    }[]>]: never; };
                    tax_ids?: {
                        country?: string;
                        customer?: string;
                        type?: string;
                        value?: string;
                        verification?: {
                            status?: string;
                            verified_address?: string;
                            verified_name?: string;
                        };
                    }[] & ({
                        country?: string;
                        customer?: string;
                        type?: string;
                        value?: string;
                        verification?: {
                            status?: string;
                            verified_address?: string;
                            verified_name?: string;
                        };
                    } & {
                        country?: string;
                        customer?: string;
                        type?: string;
                        value?: string;
                        verification?: {
                            status?: string;
                            verified_address?: string;
                            verified_name?: string;
                        } & {
                            status?: string;
                            verified_address?: string;
                            verified_name?: string;
                        } & { [K_186 in Exclude<keyof I_1["stripe"]["subscriptions"][number]["subscriptions"][number]["tax_ids"][number]["verification"], keyof import("./stripe").StripeTaxVerification>]: never; };
                    } & { [K_187 in Exclude<keyof I_1["stripe"]["subscriptions"][number]["subscriptions"][number]["tax_ids"][number], keyof import("./stripe").StripeTaxId>]: never; })[] & { [K_188 in Exclude<keyof I_1["stripe"]["subscriptions"][number]["subscriptions"][number]["tax_ids"], keyof {
                        country?: string;
                        customer?: string;
                        type?: string;
                        value?: string;
                        verification?: {
                            status?: string;
                            verified_address?: string;
                            verified_name?: string;
                        };
                    }[]>]: never; };
                    items?: {
                        id?: string;
                        quantity?: string;
                        subscription?: string;
                        plan?: {
                            status?: boolean;
                            nickname?: string;
                            product?: string;
                            amount?: number;
                            usage_type?: string;
                        };
                        price?: {
                            nickname?: string;
                            product?: string;
                            active?: boolean;
                            billing_scheme?: string;
                            currency?: string;
                            recurring?: {
                                interval?: string;
                                interval_count?: number;
                                trial_period_days?: number;
                                usage_type?: string;
                            };
                        };
                    }[] & ({
                        id?: string;
                        quantity?: string;
                        subscription?: string;
                        plan?: {
                            status?: boolean;
                            nickname?: string;
                            product?: string;
                            amount?: number;
                            usage_type?: string;
                        };
                        price?: {
                            nickname?: string;
                            product?: string;
                            active?: boolean;
                            billing_scheme?: string;
                            currency?: string;
                            recurring?: {
                                interval?: string;
                                interval_count?: number;
                                trial_period_days?: number;
                                usage_type?: string;
                            };
                        };
                    } & {
                        id?: string;
                        quantity?: string;
                        subscription?: string;
                        plan?: {
                            status?: boolean;
                            nickname?: string;
                            product?: string;
                            amount?: number;
                            usage_type?: string;
                        } & {
                            status?: boolean;
                            nickname?: string;
                            product?: string;
                            amount?: number;
                            usage_type?: string;
                        } & { [K_189 in Exclude<keyof I_1["stripe"]["subscriptions"][number]["subscriptions"][number]["items"][number]["plan"], keyof import("./stripe").StripePlan>]: never; };
                        price?: {
                            nickname?: string;
                            product?: string;
                            active?: boolean;
                            billing_scheme?: string;
                            currency?: string;
                            recurring?: {
                                interval?: string;
                                interval_count?: number;
                                trial_period_days?: number;
                                usage_type?: string;
                            };
                        } & {
                            nickname?: string;
                            product?: string;
                            active?: boolean;
                            billing_scheme?: string;
                            currency?: string;
                            recurring?: {
                                interval?: string;
                                interval_count?: number;
                                trial_period_days?: number;
                                usage_type?: string;
                            } & {
                                interval?: string;
                                interval_count?: number;
                                trial_period_days?: number;
                                usage_type?: string;
                            } & { [K_190 in Exclude<keyof I_1["stripe"]["subscriptions"][number]["subscriptions"][number]["items"][number]["price"]["recurring"], keyof import("./stripe").StripeRecurring>]: never; };
                        } & { [K_191 in Exclude<keyof I_1["stripe"]["subscriptions"][number]["subscriptions"][number]["items"][number]["price"], keyof import("./stripe").StripePrice>]: never; };
                    } & { [K_192 in Exclude<keyof I_1["stripe"]["subscriptions"][number]["subscriptions"][number]["items"][number], keyof import("./stripe").StripeSubscriptionItem>]: never; })[] & { [K_193 in Exclude<keyof I_1["stripe"]["subscriptions"][number]["subscriptions"][number]["items"], keyof {
                        id?: string;
                        quantity?: string;
                        subscription?: string;
                        plan?: {
                            status?: boolean;
                            nickname?: string;
                            product?: string;
                            amount?: number;
                            usage_type?: string;
                        };
                        price?: {
                            nickname?: string;
                            product?: string;
                            active?: boolean;
                            billing_scheme?: string;
                            currency?: string;
                            recurring?: {
                                interval?: string;
                                interval_count?: number;
                                trial_period_days?: number;
                                usage_type?: string;
                            };
                        };
                    }[]>]: never; };
                    default_tax_rates?: string[] & string[] & { [K_194 in Exclude<keyof I_1["stripe"]["subscriptions"][number]["subscriptions"][number]["default_tax_rates"], keyof string[]>]: never; };
                } & { [K_195 in Exclude<keyof I_1["stripe"]["subscriptions"][number]["subscriptions"][number], keyof import("./stripe").StripeSubscription>]: never; })[] & { [K_196 in Exclude<keyof I_1["stripe"]["subscriptions"][number]["subscriptions"], keyof {
                    address?: string;
                    balance?: number;
                    currency?: string;
                    subscriptions?: any[];
                    tax_ids?: {
                        country?: string;
                        customer?: string;
                        type?: string;
                        value?: string;
                        verification?: {
                            status?: string;
                            verified_address?: string;
                            verified_name?: string;
                        };
                    }[];
                    items?: {
                        id?: string;
                        quantity?: string;
                        subscription?: string;
                        plan?: {
                            status?: boolean;
                            nickname?: string;
                            product?: string;
                            amount?: number;
                            usage_type?: string;
                        };
                        price?: {
                            nickname?: string;
                            product?: string;
                            active?: boolean;
                            billing_scheme?: string;
                            currency?: string;
                            recurring?: {
                                interval?: string;
                                interval_count?: number;
                                trial_period_days?: number;
                                usage_type?: string;
                            };
                        };
                    }[];
                    default_tax_rates?: string[];
                }[]>]: never; };
                tax_ids?: {
                    country?: string;
                    customer?: string;
                    type?: string;
                    value?: string;
                    verification?: {
                        status?: string;
                        verified_address?: string;
                        verified_name?: string;
                    };
                }[] & ({
                    country?: string;
                    customer?: string;
                    type?: string;
                    value?: string;
                    verification?: {
                        status?: string;
                        verified_address?: string;
                        verified_name?: string;
                    };
                } & {
                    country?: string;
                    customer?: string;
                    type?: string;
                    value?: string;
                    verification?: {
                        status?: string;
                        verified_address?: string;
                        verified_name?: string;
                    } & {
                        status?: string;
                        verified_address?: string;
                        verified_name?: string;
                    } & { [K_197 in Exclude<keyof I_1["stripe"]["subscriptions"][number]["tax_ids"][number]["verification"], keyof import("./stripe").StripeTaxVerification>]: never; };
                } & { [K_198 in Exclude<keyof I_1["stripe"]["subscriptions"][number]["tax_ids"][number], keyof import("./stripe").StripeTaxId>]: never; })[] & { [K_199 in Exclude<keyof I_1["stripe"]["subscriptions"][number]["tax_ids"], keyof {
                    country?: string;
                    customer?: string;
                    type?: string;
                    value?: string;
                    verification?: {
                        status?: string;
                        verified_address?: string;
                        verified_name?: string;
                    };
                }[]>]: never; };
                items?: {
                    id?: string;
                    quantity?: string;
                    subscription?: string;
                    plan?: {
                        status?: boolean;
                        nickname?: string;
                        product?: string;
                        amount?: number;
                        usage_type?: string;
                    };
                    price?: {
                        nickname?: string;
                        product?: string;
                        active?: boolean;
                        billing_scheme?: string;
                        currency?: string;
                        recurring?: {
                            interval?: string;
                            interval_count?: number;
                            trial_period_days?: number;
                            usage_type?: string;
                        };
                    };
                }[] & ({
                    id?: string;
                    quantity?: string;
                    subscription?: string;
                    plan?: {
                        status?: boolean;
                        nickname?: string;
                        product?: string;
                        amount?: number;
                        usage_type?: string;
                    };
                    price?: {
                        nickname?: string;
                        product?: string;
                        active?: boolean;
                        billing_scheme?: string;
                        currency?: string;
                        recurring?: {
                            interval?: string;
                            interval_count?: number;
                            trial_period_days?: number;
                            usage_type?: string;
                        };
                    };
                } & {
                    id?: string;
                    quantity?: string;
                    subscription?: string;
                    plan?: {
                        status?: boolean;
                        nickname?: string;
                        product?: string;
                        amount?: number;
                        usage_type?: string;
                    } & {
                        status?: boolean;
                        nickname?: string;
                        product?: string;
                        amount?: number;
                        usage_type?: string;
                    } & { [K_200 in Exclude<keyof I_1["stripe"]["subscriptions"][number]["items"][number]["plan"], keyof import("./stripe").StripePlan>]: never; };
                    price?: {
                        nickname?: string;
                        product?: string;
                        active?: boolean;
                        billing_scheme?: string;
                        currency?: string;
                        recurring?: {
                            interval?: string;
                            interval_count?: number;
                            trial_period_days?: number;
                            usage_type?: string;
                        };
                    } & {
                        nickname?: string;
                        product?: string;
                        active?: boolean;
                        billing_scheme?: string;
                        currency?: string;
                        recurring?: {
                            interval?: string;
                            interval_count?: number;
                            trial_period_days?: number;
                            usage_type?: string;
                        } & {
                            interval?: string;
                            interval_count?: number;
                            trial_period_days?: number;
                            usage_type?: string;
                        } & { [K_201 in Exclude<keyof I_1["stripe"]["subscriptions"][number]["items"][number]["price"]["recurring"], keyof import("./stripe").StripeRecurring>]: never; };
                    } & { [K_202 in Exclude<keyof I_1["stripe"]["subscriptions"][number]["items"][number]["price"], keyof import("./stripe").StripePrice>]: never; };
                } & { [K_203 in Exclude<keyof I_1["stripe"]["subscriptions"][number]["items"][number], keyof import("./stripe").StripeSubscriptionItem>]: never; })[] & { [K_204 in Exclude<keyof I_1["stripe"]["subscriptions"][number]["items"], keyof {
                    id?: string;
                    quantity?: string;
                    subscription?: string;
                    plan?: {
                        status?: boolean;
                        nickname?: string;
                        product?: string;
                        amount?: number;
                        usage_type?: string;
                    };
                    price?: {
                        nickname?: string;
                        product?: string;
                        active?: boolean;
                        billing_scheme?: string;
                        currency?: string;
                        recurring?: {
                            interval?: string;
                            interval_count?: number;
                            trial_period_days?: number;
                            usage_type?: string;
                        };
                    };
                }[]>]: never; };
                default_tax_rates?: string[] & string[] & { [K_205 in Exclude<keyof I_1["stripe"]["subscriptions"][number]["default_tax_rates"], keyof string[]>]: never; };
            } & { [K_206 in Exclude<keyof I_1["stripe"]["subscriptions"][number], keyof import("./stripe").StripeSubscription>]: never; })[] & { [K_207 in Exclude<keyof I_1["stripe"]["subscriptions"], keyof {
                address?: string;
                balance?: number;
                currency?: string;
                subscriptions?: any[];
                tax_ids?: {
                    country?: string;
                    customer?: string;
                    type?: string;
                    value?: string;
                    verification?: {
                        status?: string;
                        verified_address?: string;
                        verified_name?: string;
                    };
                }[];
                items?: {
                    id?: string;
                    quantity?: string;
                    subscription?: string;
                    plan?: {
                        status?: boolean;
                        nickname?: string;
                        product?: string;
                        amount?: number;
                        usage_type?: string;
                    };
                    price?: {
                        nickname?: string;
                        product?: string;
                        active?: boolean;
                        billing_scheme?: string;
                        currency?: string;
                        recurring?: {
                            interval?: string;
                            interval_count?: number;
                            trial_period_days?: number;
                            usage_type?: string;
                        };
                    };
                }[];
                default_tax_rates?: string[];
            }[]>]: never; };
            discount?: {
                subscription?: string;
                start?: number;
                customer?: string;
                coupon?: {
                    duration?: string;
                    duration_in_months?: number;
                    name?: string;
                };
            } & {
                subscription?: string;
                start?: number;
                customer?: string;
                coupon?: {
                    duration?: string;
                    duration_in_months?: number;
                    name?: string;
                } & {
                    duration?: string;
                    duration_in_months?: number;
                    name?: string;
                } & { [K_208 in Exclude<keyof I_1["stripe"]["discount"]["coupon"], keyof import("./stripe").StripeCoupon>]: never; };
            } & { [K_209 in Exclude<keyof I_1["stripe"]["discount"], keyof import("./stripe").StripeCustomerDiscount>]: never; };
        } & { [K_210 in Exclude<keyof I_1["stripe"], keyof StripeCustomer>]: never; };
    } & { [K_211 in Exclude<keyof I_1, keyof EnsureCustomerResponse>]: never; }>(object: I_1): EnsureCustomerResponse;
};
export declare const CreateIndexRequest: {
    encode(message: CreateIndexRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): CreateIndexRequest;
    fromJSON(object: any): CreateIndexRequest;
    toJSON(message: CreateIndexRequest): unknown;
    create<I extends {
        collectionname?: string;
        index?: string;
        options?: string;
        name?: string;
    } & {
        collectionname?: string;
        index?: string;
        options?: string;
        name?: string;
    } & { [K in Exclude<keyof I, keyof CreateIndexRequest>]: never; }>(base?: I): CreateIndexRequest;
    fromPartial<I_1 extends {
        collectionname?: string;
        index?: string;
        options?: string;
        name?: string;
    } & {
        collectionname?: string;
        index?: string;
        options?: string;
        name?: string;
    } & { [K_1 in Exclude<keyof I_1, keyof CreateIndexRequest>]: never; }>(object: I_1): CreateIndexRequest;
};
export declare const CreateIndexResponse: {
    encode(message: CreateIndexResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): CreateIndexResponse;
    fromJSON(object: any): CreateIndexResponse;
    toJSON(message: CreateIndexResponse): unknown;
    create<I extends {
        result?: string;
    } & {
        result?: string;
    } & { [K in Exclude<keyof I, "result">]: never; }>(base?: I): CreateIndexResponse;
    fromPartial<I_1 extends {
        result?: string;
    } & {
        result?: string;
    } & { [K_1 in Exclude<keyof I_1, "result">]: never; }>(object: I_1): CreateIndexResponse;
};
export declare const GetIndexesRequest: {
    encode(message: GetIndexesRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetIndexesRequest;
    fromJSON(object: any): GetIndexesRequest;
    toJSON(message: GetIndexesRequest): unknown;
    create<I extends {
        collectionname?: string;
    } & {
        collectionname?: string;
    } & { [K in Exclude<keyof I, "collectionname">]: never; }>(base?: I): GetIndexesRequest;
    fromPartial<I_1 extends {
        collectionname?: string;
    } & {
        collectionname?: string;
    } & { [K_1 in Exclude<keyof I_1, "collectionname">]: never; }>(object: I_1): GetIndexesRequest;
};
export declare const GetIndexesResponse: {
    encode(message: GetIndexesResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetIndexesResponse;
    fromJSON(object: any): GetIndexesResponse;
    toJSON(message: GetIndexesResponse): unknown;
    create<I extends {
        results?: string;
    } & {
        results?: string;
    } & { [K in Exclude<keyof I, "results">]: never; }>(base?: I): GetIndexesResponse;
    fromPartial<I_1 extends {
        results?: string;
    } & {
        results?: string;
    } & { [K_1 in Exclude<keyof I_1, "results">]: never; }>(object: I_1): GetIndexesResponse;
};
export declare const DropIndexRequest: {
    encode(message: DropIndexRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): DropIndexRequest;
    fromJSON(object: any): DropIndexRequest;
    toJSON(message: DropIndexRequest): unknown;
    create<I extends {
        collectionname?: string;
        name?: string;
    } & {
        collectionname?: string;
        name?: string;
    } & { [K in Exclude<keyof I, keyof DropIndexRequest>]: never; }>(base?: I): DropIndexRequest;
    fromPartial<I_1 extends {
        collectionname?: string;
        name?: string;
    } & {
        collectionname?: string;
        name?: string;
    } & { [K_1 in Exclude<keyof I_1, keyof DropIndexRequest>]: never; }>(object: I_1): DropIndexRequest;
};
export declare const DropIndexResponse: {
    encode(_: DropIndexResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): DropIndexResponse;
    fromJSON(_: any): DropIndexResponse;
    toJSON(_: DropIndexResponse): unknown;
    create<I extends {} & {} & { [K in Exclude<keyof I, never>]: never; }>(base?: I): DropIndexResponse;
    fromPartial<I_1 extends {} & {} & { [K_1 in Exclude<keyof I_1, never>]: never; }>(_: I_1): DropIndexResponse;
};
export declare const DeletePackageRequest: {
    encode(message: DeletePackageRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): DeletePackageRequest;
    fromJSON(object: any): DeletePackageRequest;
    toJSON(message: DeletePackageRequest): unknown;
    create<I extends {
        packageid?: string;
    } & {
        packageid?: string;
    } & { [K in Exclude<keyof I, "packageid">]: never; }>(base?: I): DeletePackageRequest;
    fromPartial<I_1 extends {
        packageid?: string;
    } & {
        packageid?: string;
    } & { [K_1 in Exclude<keyof I_1, "packageid">]: never; }>(object: I_1): DeletePackageRequest;
};
export declare const DeletePackageResponse: {
    encode(_: DeletePackageResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): DeletePackageResponse;
    fromJSON(_: any): DeletePackageResponse;
    toJSON(_: DeletePackageResponse): unknown;
    create<I extends {} & {} & { [K in Exclude<keyof I, never>]: never; }>(base?: I): DeletePackageResponse;
    fromPartial<I_1 extends {} & {} & { [K_1 in Exclude<keyof I_1, never>]: never; }>(_: I_1): DeletePackageResponse;
};
/** Service for managing OpenIAP Flow (OpenFlow) */
export interface FlowService {
    /**
     * Establishes a bidirectional streaming connection for sending and receiving Envelopes.
     * This method is used to set up a real-time data stream for communication.
     * Returns a bidirectional stream of Envelopes.
     */
    SetupStream(request: Observable<Envelope>): Observable<Envelope>;
    /**
     * Signs in a user with the provided SigninRequest and returns a SigninResponse.
     * This method authenticates a user and provides access to the OpenFlow system.
     * Returns a SigninResponse containing authentication details.
     */
    Signin(request: SigninRequest): Promise<SigninResponse>;
    /**
     * Downloads a file from OpenFlow
     * This method retrieves files from the OpenFlow system based on the specified criteria.
     * This will initiaize a DownLoad stream, and once completed send send a DownloadResponse
     */
    Download(request: DownloadRequest): Promise<DownloadResponse>;
    /**
     * Uploads data based on the provided UploadRequest and returns an UploadResponse.
     * This method allows users to upload data to the OpenFlow system.
     * Returns an UploadResponse confirming the successful upload.
     */
    Upload(request: UploadRequest): Promise<UploadResponse>;
    /**
     * Executes a custom command in OpenIAP Flow.
     * This method enables the execution of custom commands within the OpenFlow system.
     * Returns a CustomCommandResponse with the result of the command execution.
     */
    CustomCommand(request: CustomCommandRequest): Promise<CustomCommandResponse>;
    /**
     * Lists all MongoDB collections the user has access to.
     * This method provides a list of collections that the user can interact with in the MongoDB database.
     * Returns a ListCollectionsResponse containing collection names.
     */
    ListCollections(request: ListCollectionsRequest): Promise<ListCollectionsResponse>;
    /**
     * Drops a MongoDB Collection, requires user is a member of admins role.
     * This method allows administrators to delete a MongoDB collection.
     * Returns a DropCollectionResponse confirming the deletion.
     */
    DropCollection(request: DropCollectionRequest): Promise<DropCollectionResponse>;
    /**
     * Creates a new MongoDB collection, useful if you need to create with parameters like creating a TimeSeries Collection.
     * This method creates a new MongoDB collection with optional parameters.
     * Returns a CreateCollectionResponse indicating the success of collection creation.
     */
    CreateCollection(request: CreateCollectionRequest): Promise<CreateCollectionResponse>;
    /**
     * Performs a query using QueryRequest and returns a QueryResponse.
     * This method executes a query operation in the MongoDB database.
     * Returns a QueryResponse with query results.
     */
    Query(request: QueryRequest): Promise<QueryResponse>;
    /**
     * Retrieves a document's version using GetDocumentVersionRequest and returns a GetDocumentVersionResponse.
     * This method retrieves a specific version of a document.
     * Returns a GetDocumentVersionResponse with the requested document version.
     */
    GetDocumentVersion(request: GetDocumentVersionRequest): Promise<GetDocumentVersionResponse>;
    /**
     * Aggregates data based on AggregateRequest and returns an AggregateResponse.
     * This method performs data aggregation operations on the MongoDB database.
     * Returns an AggregateResponse with the aggregated data.
     */
    Aggregate(request: AggregateRequest): Promise<AggregateResponse>;
    /**
     * Counts documents based on CountRequest and returns a CountResponse.
     * This method counts documents in the MongoDB database based on specified criteria.
     * Returns a CountResponse with the count result.
     */
    Count(request: CountRequest): Promise<CountResponse>;
    /**
     * Inserts a single document using InsertOneRequest and returns an InsertOneResponse.
     * This method inserts a single document into the MongoDB database.
     * Returns an InsertOneResponse confirming the insertion.
     */
    InsertOne(request: InsertOneRequest): Promise<InsertOneResponse>;
    /**
     * Inserts multiple documents using InsertManyRequest and returns an InsertManyResponse.
     * This method inserts multiple documents into the MongoDB database.
     * Returns an InsertManyResponse confirming the insertions.
     */
    InsertMany(request: InsertManyRequest): Promise<InsertManyResponse>;
    /**
     * Updates a single document using UpdateOneRequest and returns an UpdateOneResponse.
     * This method updates a single document in the MongoDB database.
     * Returns an UpdateOneResponse confirming the update.
     */
    UpdateOne(request: UpdateOneRequest): Promise<UpdateOneResponse>;
    /**
     * Updates documents using UpdateDocumentRequest and returns an UpdateDocumentResponse.
     * This method updates multiple documents in the MongoDB database.
     * Returns an UpdateDocumentResponse confirming the updates.
     */
    UpdateDocument(request: UpdateDocumentRequest): Promise<UpdateDocumentResponse>;
    /**
     * Inserts or updates a single document using InsertOrUpdateOneRequest and returns an InsertOrUpdateOneResponse.
     * This method either inserts or updates a single document in the MongoDB database.
     * Returns an InsertOrUpdateOneResponse confirming the operation.
     */
    InsertOrUpdateOne(request: InsertOrUpdateOneRequest): Promise<InsertOrUpdateOneResponse>;
    /**
     * Inserts or updates multiple documents using InsertOrUpdateManyRequest and returns an InsertOrUpdateManyResponse.
     * This method either inserts or updates multiple documents in the MongoDB database.
     * Returns an InsertOrUpdateManyResponse confirming the operation.
     */
    InsertOrUpdateMany(request: InsertOrUpdateManyRequest): Promise<InsertOrUpdateManyResponse>;
    /**
     * Deletes a single document using DeleteOneRequest and returns a DeleteOneResponse.
     * This method deletes a single document from the MongoDB database.
     * Returns a DeleteOneResponse confirming the deletion.
     */
    DeleteOne(request: DeleteOneRequest): Promise<DeleteOneResponse>;
    /**
     * Deletes multiple documents using DeleteManyRequest and returns a DeleteManyResponse.
     * This method deletes multiple documents from the MongoDB database.
     * Returns a DeleteManyResponse confirming the deletions.
     */
    DeleteMany(request: DeleteManyRequest): Promise<DeleteManyResponse>;
    /**
     * Registers a queue using RegisterQueueRequest and returns a RegisterQueueResponse.
     * This method registers and starts consuming a queue for message routing using AMQP
     * Returns a RegisterQueueResponse confirming the registration.
     */
    RegisterQueue(request: RegisterQueueRequest): Promise<RegisterQueueResponse>;
    /**
     * Registers an exchange using RegisterExchangeRequest and returns a RegisterExchangeResponse.
     * This method registers an exchange and start consuming if for message routing using AMQP
     * Returns a RegisterExchangeResponse confirming the registration.
     */
    RegisterExchange(request: RegisterExchangeRequest): Promise<RegisterExchangeResponse>;
    /**
     * Sends a message to a queue using QueueMessageRequest and returns a QueueMessageResponse.
     * This method sends a message to a registered queue for processing.
     * Returns a QueueMessageResponse confirming the message transmission.
     */
    QueueMessage(request: QueueMessageRequest): Promise<QueueMessageResponse>;
    /**
     * Unregisters a queue using UnRegisterQueueRequest and returns an UnRegisterQueueResponse.
     * This method unregisters a previously registered queue or Exchange.
     * Returns an UnRegisterQueueResponse confirming the unregistration.
     */
    UnRegisterQueue(request: UnRegisterQueueRequest): Promise<UnRegisterQueueResponse>;
    /**
     * Watches for changes using WatchRequest and returns a WatchResponse.
     * This method enables clients to watch for changes in a MongoDB collections, use paths (JSONQuerys) to limit what documents to wath.
     * Returns a WatchResponse with relevant notifications.
     */
    Watch(request: WatchRequest): Promise<WatchResponse>;
    /**
     * Stops watching for changes using UnWatchRequest and returns an UnWatchResponse.
     * This method stops the client from watching for changes formerly registered using Watch
     * Returns an UnWatchResponse confirming the cessation of watching.
     */
    UnWatch(request: UnWatchRequest): Promise<UnWatchResponse>;
    /**
     * This method pushes (adds) a `Workitem` to a 'WorkItemQueue'
     * Returns a PushWorkitemResponse confirming the operation.
     */
    PushWorkitem(request: PushWorkitemRequest): Promise<PushWorkitemResponse>;
    /**
     * Pushes multiple `Workitem`s using PushWorkitemsRequest and returns a PushWorkitemsResponse.
     * This method pushes multiple `Workitem`s to a 'WorkItemQueue'.
     * Returns a PushWorkitemsResponse confirming the operation.
     */
    PushWorkitems(request: PushWorkitemsRequest): Promise<PushWorkitemsResponse>;
    /**
     * Updates a `Workitem` using UpdateWorkitemRequest and returns an UpdateWorkitemResponse.
     * This method updates a `Workitem` in the 'WorkItemQueue'.
     * Returns an UpdateWorkitemResponse confirming the update.
     */
    UpdateWorkitem(request: UpdateWorkitemRequest): Promise<UpdateWorkitemResponse>;
    /**
     * Pops a `Workitem` using PopWorkitemRequest and returns a PopWorkitemResponse.
     * This method pops a `Workitem` from the 'WorkItemQueue' for execution.
     * Returns a PopWorkitemResponse with the popped `Workitem`.
     */
    PopWorkitem(request: PopWorkitemRequest): Promise<PopWorkitemResponse>;
    /**
     * Deletes a `Workitem` using DeleteWorkitemRequest and returns a DeleteWorkitemResponse.
     * This method deletes a `Workitem` from the 'WorkItemQueue'.
     * Returns a DeleteWorkitemResponse confirming the deletion.
     */
    DeleteWorkitem(request: DeleteWorkitemRequest): Promise<DeleteWorkitemResponse>;
    /**
     * This Created a new `WorkitemQueue'. These Queues can store `Workitem`s
     * Returns an AddWorkItemQueueResponse confirming the addition.
     */
    AddWorkItemQueue(request: AddWorkItemQueueRequest): Promise<AddWorkItemQueueResponse>;
    /**
     * Updates an existing `WorkitemQueue'
     * This method updates the configuration of a `WorkitemQueue'.
     * Will also deleted all associated `Workitem`s if purge is enabled.
     * Returns an UpdateWorkItemQueueResponse confirming the update.
     */
    UpdateWorkItemQueue(request: UpdateWorkItemQueueRequest): Promise<UpdateWorkItemQueueResponse>;
    /**
     * Deletes a `WorkitemQueue'
     * This method deletes a `WorkitemQueue' queue. Will also deleted all associated `Workitem`s if purge is enabled.
     * Returns a DeleteWorkItemQueueResponse confirming the deletion.
     */
    DeleteWorkItemQueue(request: DeleteWorkItemQueueRequest): Promise<DeleteWorkItemQueueResponse>;
    /**
     * Ensures the existence of a customer using EnsureCustomerRequest and returns an EnsureCustomerResponse.
     * This method ensures that a customer exists in the system and performs necessary actions.
     * Returns an EnsureCustomerResponse confirming the operation.
     */
    EnsureCustomer(request: EnsureCustomerRequest): Promise<EnsureCustomerResponse>;
    /** Execute a workflow on a OpenRPA robot. If rpc is true, will wait for reply and return reply ( this can take a long time !) */
    InvokeOpenRPA(request: InvokeOpenRPARequest): Promise<InvokeOpenRPAResponse>;
    /**
     * Start an agent inside Docker or Kubernetes
     * agentid is the _id of an agent from the agents collection
     * Requires invoke permission on agent
     */
    StartAgent(request: StartAgentRequest): Promise<StartAgentResponse>;
    /**
     * Stop an agent running inside Docker or Kubernetes
     * agentid is the _id of an agent from the agents collection
     * Requires invoke permission on agent
     */
    StopAgent(request: StopAgentRequest): Promise<StopAgentResponse>;
    /**
     * Return the console output of an running agent, can be in docker, kubernetes or running remote.
     * agentid is the _id of an agent from the agents collection
     * Requires invoke permission on agent
     */
    GetAgentLog(request: GetAgentLogRequest): Promise<GetAgentLogResponse>;
    /**
     * Return a list of pods for an running agent. Docker and Kubernetes only.
     * agentid is the _id of an agent from the agents collection
     * Requires invoke permission on agent
     */
    GetAgentPods(request: GetAgentPodsRequest): Promise<GetAgentPodsResponse>;
    /**
     * Remove an agent pod, found with GetAgentPods. Docker and Kubernetes only.
     * On kubernetes this will restart it, on Docker this will kill it
     * agentid is the _id of an agent from the agents collection
     * Requires invoke permission on agent
     */
    DeleteAgentPod(request: DeleteAgentPodRequest): Promise<DeleteAgentPodResponse>;
    /**
     * Remove an agent if running. Docker and Kubernetes only.
     * Removes instance on docker, remove deployment, ingress and other resources on Kubernetes
     * agentid is the _id of an agent from the agents collection
     * Requires delete permission on agent
     */
    DeleteAgent(request: DeleteAgentRequest): Promise<DeleteAgentResponse>;
    /**
     * Create an Index on a MongoDB Collection
     * Will not fail if exists, but will fail if spec is different from existing.
     * Require admins rights
     */
    CreateIndex(request: CreateIndexRequest): Promise<CreateIndexResponse>;
    /**
     * Create an Index on a MongoDB Collection
     * Will not fail if exists, but will fail if spec is different from existing.
     * Require admins rights
     */
    GetIndexes(request: GetIndexesRequest): Promise<GetIndexesResponse>;
    /**
     * Delete an Index from a MongoDB Collection
     * Require admins rights
     */
    DropIndex(request: DropIndexRequest): Promise<DropIndexResponse>;
    /**
     * Delete an agent Package.
     * Removes the associated file and then delete te package from the agents collection.
     * Requires delete permission on the Package
     */
    DeletePackage(request: DeletePackageRequest): Promise<DeletePackageResponse>;
}
export declare class FlowServiceClientImpl implements FlowService {
    private readonly rpc;
    private readonly service;
    constructor(rpc: Rpc, opts?: {
        service?: string;
    });
    SetupStream(request: Observable<Envelope>): Observable<Envelope>;
    Signin(request: SigninRequest): Promise<SigninResponse>;
    Download(request: DownloadRequest): Promise<DownloadResponse>;
    Upload(request: UploadRequest): Promise<UploadResponse>;
    CustomCommand(request: CustomCommandRequest): Promise<CustomCommandResponse>;
    ListCollections(request: ListCollectionsRequest): Promise<ListCollectionsResponse>;
    DropCollection(request: DropCollectionRequest): Promise<DropCollectionResponse>;
    CreateCollection(request: CreateCollectionRequest): Promise<CreateCollectionResponse>;
    Query(request: QueryRequest): Promise<QueryResponse>;
    GetDocumentVersion(request: GetDocumentVersionRequest): Promise<GetDocumentVersionResponse>;
    Aggregate(request: AggregateRequest): Promise<AggregateResponse>;
    Count(request: CountRequest): Promise<CountResponse>;
    InsertOne(request: InsertOneRequest): Promise<InsertOneResponse>;
    InsertMany(request: InsertManyRequest): Promise<InsertManyResponse>;
    UpdateOne(request: UpdateOneRequest): Promise<UpdateOneResponse>;
    UpdateDocument(request: UpdateDocumentRequest): Promise<UpdateDocumentResponse>;
    InsertOrUpdateOne(request: InsertOrUpdateOneRequest): Promise<InsertOrUpdateOneResponse>;
    InsertOrUpdateMany(request: InsertOrUpdateManyRequest): Promise<InsertOrUpdateManyResponse>;
    DeleteOne(request: DeleteOneRequest): Promise<DeleteOneResponse>;
    DeleteMany(request: DeleteManyRequest): Promise<DeleteManyResponse>;
    RegisterQueue(request: RegisterQueueRequest): Promise<RegisterQueueResponse>;
    RegisterExchange(request: RegisterExchangeRequest): Promise<RegisterExchangeResponse>;
    QueueMessage(request: QueueMessageRequest): Promise<QueueMessageResponse>;
    UnRegisterQueue(request: UnRegisterQueueRequest): Promise<UnRegisterQueueResponse>;
    Watch(request: WatchRequest): Promise<WatchResponse>;
    UnWatch(request: UnWatchRequest): Promise<UnWatchResponse>;
    PushWorkitem(request: PushWorkitemRequest): Promise<PushWorkitemResponse>;
    PushWorkitems(request: PushWorkitemsRequest): Promise<PushWorkitemsResponse>;
    UpdateWorkitem(request: UpdateWorkitemRequest): Promise<UpdateWorkitemResponse>;
    PopWorkitem(request: PopWorkitemRequest): Promise<PopWorkitemResponse>;
    DeleteWorkitem(request: DeleteWorkitemRequest): Promise<DeleteWorkitemResponse>;
    AddWorkItemQueue(request: AddWorkItemQueueRequest): Promise<AddWorkItemQueueResponse>;
    UpdateWorkItemQueue(request: UpdateWorkItemQueueRequest): Promise<UpdateWorkItemQueueResponse>;
    DeleteWorkItemQueue(request: DeleteWorkItemQueueRequest): Promise<DeleteWorkItemQueueResponse>;
    EnsureCustomer(request: EnsureCustomerRequest): Promise<EnsureCustomerResponse>;
    InvokeOpenRPA(request: InvokeOpenRPARequest): Promise<InvokeOpenRPAResponse>;
    StartAgent(request: StartAgentRequest): Promise<StartAgentResponse>;
    StopAgent(request: StopAgentRequest): Promise<StopAgentResponse>;
    GetAgentLog(request: GetAgentLogRequest): Promise<GetAgentLogResponse>;
    GetAgentPods(request: GetAgentPodsRequest): Promise<GetAgentPodsResponse>;
    DeleteAgentPod(request: DeleteAgentPodRequest): Promise<DeleteAgentPodResponse>;
    DeleteAgent(request: DeleteAgentRequest): Promise<DeleteAgentResponse>;
    CreateIndex(request: CreateIndexRequest): Promise<CreateIndexResponse>;
    GetIndexes(request: GetIndexesRequest): Promise<GetIndexesResponse>;
    DropIndex(request: DropIndexRequest): Promise<DropIndexResponse>;
    DeletePackage(request: DeletePackageRequest): Promise<DeletePackageResponse>;
}
interface Rpc {
    request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
    clientStreamingRequest(service: string, method: string, data: Observable<Uint8Array>): Promise<Uint8Array>;
    serverStreamingRequest(service: string, method: string, data: Uint8Array): Observable<Uint8Array>;
    bidirectionalStreamingRequest(service: string, method: string, data: Observable<Uint8Array>): Observable<Uint8Array>;
}
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
