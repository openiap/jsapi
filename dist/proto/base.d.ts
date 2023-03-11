import * as _m0 from "protobufjs/minimal";
import { Observable } from "rxjs";
import { Any } from "./google/protobuf/any";
import { AggregateRequest, AggregateResponse, CountRequest, CountResponse, DeleteManyRequest, DeleteManyResponse, DeleteOneRequest, DeleteOneResponse, DropCollectionRequest, DropCollectionResponse, GetDocumentVersionRequest, GetDocumentVersionResponse, InsertManyRequest, InsertManyResponse, InsertOneRequest, InsertOneResponse, InsertOrUpdateManyRequest, InsertOrUpdateManyResponse, InsertOrUpdateOneRequest, InsertOrUpdateOneResponse, ListCollectionsRequest, ListCollectionsResponse, QueryRequest, QueryResponse, UpdateDocumentRequest, UpdateDocumentResponse, UpdateOneRequest, UpdateOneResponse } from "./querys";
import { QueueMessageRequest, QueueMessageResponse, RegisterExchangeRequest, RegisterExchangeResponse, RegisterQueueRequest, RegisterQueueResponse, UnRegisterQueueRequest, UnRegisterQueueResponse } from "./queues";
import { UnWatchRequest, UnWatchResponse, WatchRequest, WatchResponse } from "./watch";
import { AddWorkItemQueueRequest, AddWorkItemQueueResponse, DeleteWorkitemRequest, DeleteWorkitemResponse, PopWorkitemRequest, PopWorkitemResponse, PushWorkitemRequest, PushWorkitemResponse, PushWorkitemsRequest, PushWorkitemsResponse, UpdateWorkitemRequest, UpdateWorkitemResponse } from "./workitems";
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
}
export interface DownloadResponse {
    id: string;
    filename: string;
    mimetype: string;
}
export interface UploadRequest {
    filename: string;
    mimetype: string;
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
    } & {
        id?: string;
        filename?: string;
    } & { [K in Exclude<keyof I, keyof DownloadRequest>]: never; }>(base?: I): DownloadRequest;
    fromPartial<I_1 extends {
        id?: string;
        filename?: string;
    } & {
        id?: string;
        filename?: string;
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
    } & {
        filename?: string;
        mimetype?: string;
    } & { [K in Exclude<keyof I, keyof UploadRequest>]: never; }>(base?: I): UploadRequest;
    fromPartial<I_1 extends {
        filename?: string;
        mimetype?: string;
    } & {
        filename?: string;
        mimetype?: string;
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
export interface FlowService {
    SetupStream(request: Observable<Envelope>): Observable<Envelope>;
    Signin(request: SigninRequest): Promise<SigninResponse>;
    Download(request: DownloadRequest): Promise<DownloadResponse>;
    Upload(request: UploadRequest): Promise<UploadResponse>;
    CustomCommand(request: CustomCommandRequest): Promise<CustomCommandResponse>;
    ListCollections(request: ListCollectionsRequest): Promise<ListCollectionsResponse>;
    DropCollection(request: DropCollectionRequest): Promise<DropCollectionResponse>;
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
