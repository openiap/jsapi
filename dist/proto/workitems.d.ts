import * as _m0 from "protobufjs/minimal";
import { Ace } from "./ace";
export declare const protobufPackage = "openiap";
export interface Workitem {
    _id: string;
    name: string;
    payload: string;
    priority: number;
    nextrun: Date | undefined;
    lastrun: Date | undefined;
    files: WorkitemFile[];
    state: string;
    wiq: string;
    wiqid: string;
    retries: number;
    username: string;
    success_wiqid: string;
    failed_wiqid: string;
    success_wiq: string;
    failed_wiq: string;
    errormessage: string;
    errorsource: string;
    errortype: string;
}
export interface WorkitemFile {
    filename: string;
    _id: string;
    compressed: boolean;
    file: Uint8Array;
}
export interface PushWorkitemRequest {
    wiq: string;
    wiqid: string;
    name: string;
    payload: string;
    nextrun: Date | undefined;
    success_wiqid: string;
    failed_wiqid: string;
    success_wiq: string;
    failed_wiq: string;
    priority: number;
    files: WorkitemFile[];
}
export interface PushWorkitemResponse {
    workitem: Workitem | undefined;
}
export interface PushWorkitemsRequest {
    wiq: string;
    wiqid: string;
    nextrun: Date | undefined;
    success_wiqid: string;
    failed_wiqid: string;
    success_wiq: string;
    failed_wiq: string;
    priority: number;
    items: Workitem[];
}
export interface PushWorkitemsResponse {
    workitems: Workitem[];
}
export interface UpdateWorkitemRequest {
    workitem: Workitem | undefined;
    ignoremaxretries: boolean;
    files: WorkitemFile[];
}
export interface UpdateWorkitemResponse {
    workitem: Workitem | undefined;
}
export interface PopWorkitemRequest {
    wiq: string;
    wiqid: string;
    includefiles: boolean;
    compressed: boolean;
}
export interface PopWorkitemResponse {
    workitem: Workitem | undefined;
}
export interface DeleteWorkitemRequest {
    _id: string;
}
export interface DeleteWorkitemResponse {
}
export interface WorkItemQueue {
    workflowid: string;
    robotqueue: string;
    amqpqueue: string;
    projectid: string;
    usersrole: string;
    maxretries: number;
    retrydelay: number;
    initialdelay: number;
    success_wiqid: string;
    failed_wiqid: string;
    success_wiq: string;
    failed_wiq: string;
    _id: string;
    _acl: Ace[];
    name: string;
    _createdbyid: string;
    _createdby: string;
    _created: Date | undefined;
    _modifiedbyid: string;
    _modifiedby: string;
    _modified: Date | undefined;
    _version: number;
}
export interface AddWorkItemQueueRequest {
    name: string;
    robotqueue: string;
    amqpqueue: string;
    projectid: string;
    skiprole: boolean;
    maxretries: number;
    initialdelay: number;
    retrydelay: number;
    success_wiqid: string;
    failed_wiqid: string;
    success_wiq: string;
    failed_wiq: string;
    _acl: Ace[];
}
export interface AddWorkItemQueueResponse {
    workitemqueue: WorkItemQueue | undefined;
}
export declare const Workitem: {
    encode(message: Workitem, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Workitem;
    fromJSON(object: any): Workitem;
    toJSON(message: Workitem): unknown;
    create<I extends {
        _id?: string;
        name?: string;
        payload?: string;
        priority?: number;
        nextrun?: Date | undefined;
        lastrun?: Date | undefined;
        files?: {
            filename?: string;
            _id?: string;
            compressed?: boolean;
            file?: Uint8Array;
        }[];
        state?: string;
        wiq?: string;
        wiqid?: string;
        retries?: number;
        username?: string;
        success_wiqid?: string;
        failed_wiqid?: string;
        success_wiq?: string;
        failed_wiq?: string;
        errormessage?: string;
        errorsource?: string;
        errortype?: string;
    } & {
        _id?: string;
        name?: string;
        payload?: string;
        priority?: number;
        nextrun?: Date | undefined;
        lastrun?: Date | undefined;
        files?: {
            filename?: string;
            _id?: string;
            compressed?: boolean;
            file?: Uint8Array;
        }[] & ({
            filename?: string;
            _id?: string;
            compressed?: boolean;
            file?: Uint8Array;
        } & {
            filename?: string;
            _id?: string;
            compressed?: boolean;
            file?: Uint8Array;
        } & { [K in Exclude<keyof I["files"][number], keyof WorkitemFile>]: never; })[] & { [K_1 in Exclude<keyof I["files"], keyof {
            filename?: string;
            _id?: string;
            compressed?: boolean;
            file?: Uint8Array;
        }[]>]: never; };
        state?: string;
        wiq?: string;
        wiqid?: string;
        retries?: number;
        username?: string;
        success_wiqid?: string;
        failed_wiqid?: string;
        success_wiq?: string;
        failed_wiq?: string;
        errormessage?: string;
        errorsource?: string;
        errortype?: string;
    } & { [K_2 in Exclude<keyof I, keyof Workitem>]: never; }>(base?: I): Workitem;
    fromPartial<I_1 extends {
        _id?: string;
        name?: string;
        payload?: string;
        priority?: number;
        nextrun?: Date | undefined;
        lastrun?: Date | undefined;
        files?: {
            filename?: string;
            _id?: string;
            compressed?: boolean;
            file?: Uint8Array;
        }[];
        state?: string;
        wiq?: string;
        wiqid?: string;
        retries?: number;
        username?: string;
        success_wiqid?: string;
        failed_wiqid?: string;
        success_wiq?: string;
        failed_wiq?: string;
        errormessage?: string;
        errorsource?: string;
        errortype?: string;
    } & {
        _id?: string;
        name?: string;
        payload?: string;
        priority?: number;
        nextrun?: Date | undefined;
        lastrun?: Date | undefined;
        files?: {
            filename?: string;
            _id?: string;
            compressed?: boolean;
            file?: Uint8Array;
        }[] & ({
            filename?: string;
            _id?: string;
            compressed?: boolean;
            file?: Uint8Array;
        } & {
            filename?: string;
            _id?: string;
            compressed?: boolean;
            file?: Uint8Array;
        } & { [K_3 in Exclude<keyof I_1["files"][number], keyof WorkitemFile>]: never; })[] & { [K_4 in Exclude<keyof I_1["files"], keyof {
            filename?: string;
            _id?: string;
            compressed?: boolean;
            file?: Uint8Array;
        }[]>]: never; };
        state?: string;
        wiq?: string;
        wiqid?: string;
        retries?: number;
        username?: string;
        success_wiqid?: string;
        failed_wiqid?: string;
        success_wiq?: string;
        failed_wiq?: string;
        errormessage?: string;
        errorsource?: string;
        errortype?: string;
    } & { [K_5 in Exclude<keyof I_1, keyof Workitem>]: never; }>(object: I_1): Workitem;
};
export declare const WorkitemFile: {
    encode(message: WorkitemFile, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): WorkitemFile;
    fromJSON(object: any): WorkitemFile;
    toJSON(message: WorkitemFile): unknown;
    create<I extends {
        filename?: string;
        _id?: string;
        compressed?: boolean;
        file?: Uint8Array;
    } & {
        filename?: string;
        _id?: string;
        compressed?: boolean;
        file?: Uint8Array;
    } & { [K in Exclude<keyof I, keyof WorkitemFile>]: never; }>(base?: I): WorkitemFile;
    fromPartial<I_1 extends {
        filename?: string;
        _id?: string;
        compressed?: boolean;
        file?: Uint8Array;
    } & {
        filename?: string;
        _id?: string;
        compressed?: boolean;
        file?: Uint8Array;
    } & { [K_1 in Exclude<keyof I_1, keyof WorkitemFile>]: never; }>(object: I_1): WorkitemFile;
};
export declare const PushWorkitemRequest: {
    encode(message: PushWorkitemRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): PushWorkitemRequest;
    fromJSON(object: any): PushWorkitemRequest;
    toJSON(message: PushWorkitemRequest): unknown;
    create<I extends {
        wiq?: string;
        wiqid?: string;
        name?: string;
        payload?: string;
        nextrun?: Date | undefined;
        success_wiqid?: string;
        failed_wiqid?: string;
        success_wiq?: string;
        failed_wiq?: string;
        priority?: number;
        files?: {
            filename?: string;
            _id?: string;
            compressed?: boolean;
            file?: Uint8Array;
        }[];
    } & {
        wiq?: string;
        wiqid?: string;
        name?: string;
        payload?: string;
        nextrun?: Date | undefined;
        success_wiqid?: string;
        failed_wiqid?: string;
        success_wiq?: string;
        failed_wiq?: string;
        priority?: number;
        files?: {
            filename?: string;
            _id?: string;
            compressed?: boolean;
            file?: Uint8Array;
        }[] & ({
            filename?: string;
            _id?: string;
            compressed?: boolean;
            file?: Uint8Array;
        } & {
            filename?: string;
            _id?: string;
            compressed?: boolean;
            file?: Uint8Array;
        } & { [K in Exclude<keyof I["files"][number], keyof WorkitemFile>]: never; })[] & { [K_1 in Exclude<keyof I["files"], keyof {
            filename?: string;
            _id?: string;
            compressed?: boolean;
            file?: Uint8Array;
        }[]>]: never; };
    } & { [K_2 in Exclude<keyof I, keyof PushWorkitemRequest>]: never; }>(base?: I): PushWorkitemRequest;
    fromPartial<I_1 extends {
        wiq?: string;
        wiqid?: string;
        name?: string;
        payload?: string;
        nextrun?: Date | undefined;
        success_wiqid?: string;
        failed_wiqid?: string;
        success_wiq?: string;
        failed_wiq?: string;
        priority?: number;
        files?: {
            filename?: string;
            _id?: string;
            compressed?: boolean;
            file?: Uint8Array;
        }[];
    } & {
        wiq?: string;
        wiqid?: string;
        name?: string;
        payload?: string;
        nextrun?: Date | undefined;
        success_wiqid?: string;
        failed_wiqid?: string;
        success_wiq?: string;
        failed_wiq?: string;
        priority?: number;
        files?: {
            filename?: string;
            _id?: string;
            compressed?: boolean;
            file?: Uint8Array;
        }[] & ({
            filename?: string;
            _id?: string;
            compressed?: boolean;
            file?: Uint8Array;
        } & {
            filename?: string;
            _id?: string;
            compressed?: boolean;
            file?: Uint8Array;
        } & { [K_3 in Exclude<keyof I_1["files"][number], keyof WorkitemFile>]: never; })[] & { [K_4 in Exclude<keyof I_1["files"], keyof {
            filename?: string;
            _id?: string;
            compressed?: boolean;
            file?: Uint8Array;
        }[]>]: never; };
    } & { [K_5 in Exclude<keyof I_1, keyof PushWorkitemRequest>]: never; }>(object: I_1): PushWorkitemRequest;
};
export declare const PushWorkitemResponse: {
    encode(message: PushWorkitemResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): PushWorkitemResponse;
    fromJSON(object: any): PushWorkitemResponse;
    toJSON(message: PushWorkitemResponse): unknown;
    create<I extends {
        workitem?: {
            _id?: string;
            name?: string;
            payload?: string;
            priority?: number;
            nextrun?: Date | undefined;
            lastrun?: Date | undefined;
            files?: {
                filename?: string;
                _id?: string;
                compressed?: boolean;
                file?: Uint8Array;
            }[];
            state?: string;
            wiq?: string;
            wiqid?: string;
            retries?: number;
            username?: string;
            success_wiqid?: string;
            failed_wiqid?: string;
            success_wiq?: string;
            failed_wiq?: string;
            errormessage?: string;
            errorsource?: string;
            errortype?: string;
        };
    } & {
        workitem?: {
            _id?: string;
            name?: string;
            payload?: string;
            priority?: number;
            nextrun?: Date | undefined;
            lastrun?: Date | undefined;
            files?: {
                filename?: string;
                _id?: string;
                compressed?: boolean;
                file?: Uint8Array;
            }[];
            state?: string;
            wiq?: string;
            wiqid?: string;
            retries?: number;
            username?: string;
            success_wiqid?: string;
            failed_wiqid?: string;
            success_wiq?: string;
            failed_wiq?: string;
            errormessage?: string;
            errorsource?: string;
            errortype?: string;
        } & {
            _id?: string;
            name?: string;
            payload?: string;
            priority?: number;
            nextrun?: Date | undefined;
            lastrun?: Date | undefined;
            files?: {
                filename?: string;
                _id?: string;
                compressed?: boolean;
                file?: Uint8Array;
            }[] & ({
                filename?: string;
                _id?: string;
                compressed?: boolean;
                file?: Uint8Array;
            } & {
                filename?: string;
                _id?: string;
                compressed?: boolean;
                file?: Uint8Array;
            } & { [K in Exclude<keyof I["workitem"]["files"][number], keyof WorkitemFile>]: never; })[] & { [K_1 in Exclude<keyof I["workitem"]["files"], keyof {
                filename?: string;
                _id?: string;
                compressed?: boolean;
                file?: Uint8Array;
            }[]>]: never; };
            state?: string;
            wiq?: string;
            wiqid?: string;
            retries?: number;
            username?: string;
            success_wiqid?: string;
            failed_wiqid?: string;
            success_wiq?: string;
            failed_wiq?: string;
            errormessage?: string;
            errorsource?: string;
            errortype?: string;
        } & { [K_2 in Exclude<keyof I["workitem"], keyof Workitem>]: never; };
    } & { [K_3 in Exclude<keyof I, "workitem">]: never; }>(base?: I): PushWorkitemResponse;
    fromPartial<I_1 extends {
        workitem?: {
            _id?: string;
            name?: string;
            payload?: string;
            priority?: number;
            nextrun?: Date | undefined;
            lastrun?: Date | undefined;
            files?: {
                filename?: string;
                _id?: string;
                compressed?: boolean;
                file?: Uint8Array;
            }[];
            state?: string;
            wiq?: string;
            wiqid?: string;
            retries?: number;
            username?: string;
            success_wiqid?: string;
            failed_wiqid?: string;
            success_wiq?: string;
            failed_wiq?: string;
            errormessage?: string;
            errorsource?: string;
            errortype?: string;
        };
    } & {
        workitem?: {
            _id?: string;
            name?: string;
            payload?: string;
            priority?: number;
            nextrun?: Date | undefined;
            lastrun?: Date | undefined;
            files?: {
                filename?: string;
                _id?: string;
                compressed?: boolean;
                file?: Uint8Array;
            }[];
            state?: string;
            wiq?: string;
            wiqid?: string;
            retries?: number;
            username?: string;
            success_wiqid?: string;
            failed_wiqid?: string;
            success_wiq?: string;
            failed_wiq?: string;
            errormessage?: string;
            errorsource?: string;
            errortype?: string;
        } & {
            _id?: string;
            name?: string;
            payload?: string;
            priority?: number;
            nextrun?: Date | undefined;
            lastrun?: Date | undefined;
            files?: {
                filename?: string;
                _id?: string;
                compressed?: boolean;
                file?: Uint8Array;
            }[] & ({
                filename?: string;
                _id?: string;
                compressed?: boolean;
                file?: Uint8Array;
            } & {
                filename?: string;
                _id?: string;
                compressed?: boolean;
                file?: Uint8Array;
            } & { [K_4 in Exclude<keyof I_1["workitem"]["files"][number], keyof WorkitemFile>]: never; })[] & { [K_5 in Exclude<keyof I_1["workitem"]["files"], keyof {
                filename?: string;
                _id?: string;
                compressed?: boolean;
                file?: Uint8Array;
            }[]>]: never; };
            state?: string;
            wiq?: string;
            wiqid?: string;
            retries?: number;
            username?: string;
            success_wiqid?: string;
            failed_wiqid?: string;
            success_wiq?: string;
            failed_wiq?: string;
            errormessage?: string;
            errorsource?: string;
            errortype?: string;
        } & { [K_6 in Exclude<keyof I_1["workitem"], keyof Workitem>]: never; };
    } & { [K_7 in Exclude<keyof I_1, "workitem">]: never; }>(object: I_1): PushWorkitemResponse;
};
export declare const PushWorkitemsRequest: {
    encode(message: PushWorkitemsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): PushWorkitemsRequest;
    fromJSON(object: any): PushWorkitemsRequest;
    toJSON(message: PushWorkitemsRequest): unknown;
    create<I extends {
        wiq?: string;
        wiqid?: string;
        nextrun?: Date | undefined;
        success_wiqid?: string;
        failed_wiqid?: string;
        success_wiq?: string;
        failed_wiq?: string;
        priority?: number;
        items?: {
            _id?: string;
            name?: string;
            payload?: string;
            priority?: number;
            nextrun?: Date | undefined;
            lastrun?: Date | undefined;
            files?: {
                filename?: string;
                _id?: string;
                compressed?: boolean;
                file?: Uint8Array;
            }[];
            state?: string;
            wiq?: string;
            wiqid?: string;
            retries?: number;
            username?: string;
            success_wiqid?: string;
            failed_wiqid?: string;
            success_wiq?: string;
            failed_wiq?: string;
            errormessage?: string;
            errorsource?: string;
            errortype?: string;
        }[];
    } & {
        wiq?: string;
        wiqid?: string;
        nextrun?: Date | undefined;
        success_wiqid?: string;
        failed_wiqid?: string;
        success_wiq?: string;
        failed_wiq?: string;
        priority?: number;
        items?: {
            _id?: string;
            name?: string;
            payload?: string;
            priority?: number;
            nextrun?: Date | undefined;
            lastrun?: Date | undefined;
            files?: {
                filename?: string;
                _id?: string;
                compressed?: boolean;
                file?: Uint8Array;
            }[];
            state?: string;
            wiq?: string;
            wiqid?: string;
            retries?: number;
            username?: string;
            success_wiqid?: string;
            failed_wiqid?: string;
            success_wiq?: string;
            failed_wiq?: string;
            errormessage?: string;
            errorsource?: string;
            errortype?: string;
        }[] & ({
            _id?: string;
            name?: string;
            payload?: string;
            priority?: number;
            nextrun?: Date | undefined;
            lastrun?: Date | undefined;
            files?: {
                filename?: string;
                _id?: string;
                compressed?: boolean;
                file?: Uint8Array;
            }[];
            state?: string;
            wiq?: string;
            wiqid?: string;
            retries?: number;
            username?: string;
            success_wiqid?: string;
            failed_wiqid?: string;
            success_wiq?: string;
            failed_wiq?: string;
            errormessage?: string;
            errorsource?: string;
            errortype?: string;
        } & {
            _id?: string;
            name?: string;
            payload?: string;
            priority?: number;
            nextrun?: Date | undefined;
            lastrun?: Date | undefined;
            files?: {
                filename?: string;
                _id?: string;
                compressed?: boolean;
                file?: Uint8Array;
            }[] & ({
                filename?: string;
                _id?: string;
                compressed?: boolean;
                file?: Uint8Array;
            } & {
                filename?: string;
                _id?: string;
                compressed?: boolean;
                file?: Uint8Array;
            } & { [K in Exclude<keyof I["items"][number]["files"][number], keyof WorkitemFile>]: never; })[] & { [K_1 in Exclude<keyof I["items"][number]["files"], keyof {
                filename?: string;
                _id?: string;
                compressed?: boolean;
                file?: Uint8Array;
            }[]>]: never; };
            state?: string;
            wiq?: string;
            wiqid?: string;
            retries?: number;
            username?: string;
            success_wiqid?: string;
            failed_wiqid?: string;
            success_wiq?: string;
            failed_wiq?: string;
            errormessage?: string;
            errorsource?: string;
            errortype?: string;
        } & { [K_2 in Exclude<keyof I["items"][number], keyof Workitem>]: never; })[] & { [K_3 in Exclude<keyof I["items"], keyof {
            _id?: string;
            name?: string;
            payload?: string;
            priority?: number;
            nextrun?: Date | undefined;
            lastrun?: Date | undefined;
            files?: {
                filename?: string;
                _id?: string;
                compressed?: boolean;
                file?: Uint8Array;
            }[];
            state?: string;
            wiq?: string;
            wiqid?: string;
            retries?: number;
            username?: string;
            success_wiqid?: string;
            failed_wiqid?: string;
            success_wiq?: string;
            failed_wiq?: string;
            errormessage?: string;
            errorsource?: string;
            errortype?: string;
        }[]>]: never; };
    } & { [K_4 in Exclude<keyof I, keyof PushWorkitemsRequest>]: never; }>(base?: I): PushWorkitemsRequest;
    fromPartial<I_1 extends {
        wiq?: string;
        wiqid?: string;
        nextrun?: Date | undefined;
        success_wiqid?: string;
        failed_wiqid?: string;
        success_wiq?: string;
        failed_wiq?: string;
        priority?: number;
        items?: {
            _id?: string;
            name?: string;
            payload?: string;
            priority?: number;
            nextrun?: Date | undefined;
            lastrun?: Date | undefined;
            files?: {
                filename?: string;
                _id?: string;
                compressed?: boolean;
                file?: Uint8Array;
            }[];
            state?: string;
            wiq?: string;
            wiqid?: string;
            retries?: number;
            username?: string;
            success_wiqid?: string;
            failed_wiqid?: string;
            success_wiq?: string;
            failed_wiq?: string;
            errormessage?: string;
            errorsource?: string;
            errortype?: string;
        }[];
    } & {
        wiq?: string;
        wiqid?: string;
        nextrun?: Date | undefined;
        success_wiqid?: string;
        failed_wiqid?: string;
        success_wiq?: string;
        failed_wiq?: string;
        priority?: number;
        items?: {
            _id?: string;
            name?: string;
            payload?: string;
            priority?: number;
            nextrun?: Date | undefined;
            lastrun?: Date | undefined;
            files?: {
                filename?: string;
                _id?: string;
                compressed?: boolean;
                file?: Uint8Array;
            }[];
            state?: string;
            wiq?: string;
            wiqid?: string;
            retries?: number;
            username?: string;
            success_wiqid?: string;
            failed_wiqid?: string;
            success_wiq?: string;
            failed_wiq?: string;
            errormessage?: string;
            errorsource?: string;
            errortype?: string;
        }[] & ({
            _id?: string;
            name?: string;
            payload?: string;
            priority?: number;
            nextrun?: Date | undefined;
            lastrun?: Date | undefined;
            files?: {
                filename?: string;
                _id?: string;
                compressed?: boolean;
                file?: Uint8Array;
            }[];
            state?: string;
            wiq?: string;
            wiqid?: string;
            retries?: number;
            username?: string;
            success_wiqid?: string;
            failed_wiqid?: string;
            success_wiq?: string;
            failed_wiq?: string;
            errormessage?: string;
            errorsource?: string;
            errortype?: string;
        } & {
            _id?: string;
            name?: string;
            payload?: string;
            priority?: number;
            nextrun?: Date | undefined;
            lastrun?: Date | undefined;
            files?: {
                filename?: string;
                _id?: string;
                compressed?: boolean;
                file?: Uint8Array;
            }[] & ({
                filename?: string;
                _id?: string;
                compressed?: boolean;
                file?: Uint8Array;
            } & {
                filename?: string;
                _id?: string;
                compressed?: boolean;
                file?: Uint8Array;
            } & { [K_5 in Exclude<keyof I_1["items"][number]["files"][number], keyof WorkitemFile>]: never; })[] & { [K_6 in Exclude<keyof I_1["items"][number]["files"], keyof {
                filename?: string;
                _id?: string;
                compressed?: boolean;
                file?: Uint8Array;
            }[]>]: never; };
            state?: string;
            wiq?: string;
            wiqid?: string;
            retries?: number;
            username?: string;
            success_wiqid?: string;
            failed_wiqid?: string;
            success_wiq?: string;
            failed_wiq?: string;
            errormessage?: string;
            errorsource?: string;
            errortype?: string;
        } & { [K_7 in Exclude<keyof I_1["items"][number], keyof Workitem>]: never; })[] & { [K_8 in Exclude<keyof I_1["items"], keyof {
            _id?: string;
            name?: string;
            payload?: string;
            priority?: number;
            nextrun?: Date | undefined;
            lastrun?: Date | undefined;
            files?: {
                filename?: string;
                _id?: string;
                compressed?: boolean;
                file?: Uint8Array;
            }[];
            state?: string;
            wiq?: string;
            wiqid?: string;
            retries?: number;
            username?: string;
            success_wiqid?: string;
            failed_wiqid?: string;
            success_wiq?: string;
            failed_wiq?: string;
            errormessage?: string;
            errorsource?: string;
            errortype?: string;
        }[]>]: never; };
    } & { [K_9 in Exclude<keyof I_1, keyof PushWorkitemsRequest>]: never; }>(object: I_1): PushWorkitemsRequest;
};
export declare const PushWorkitemsResponse: {
    encode(message: PushWorkitemsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): PushWorkitemsResponse;
    fromJSON(object: any): PushWorkitemsResponse;
    toJSON(message: PushWorkitemsResponse): unknown;
    create<I extends {
        workitems?: {
            _id?: string;
            name?: string;
            payload?: string;
            priority?: number;
            nextrun?: Date | undefined;
            lastrun?: Date | undefined;
            files?: {
                filename?: string;
                _id?: string;
                compressed?: boolean;
                file?: Uint8Array;
            }[];
            state?: string;
            wiq?: string;
            wiqid?: string;
            retries?: number;
            username?: string;
            success_wiqid?: string;
            failed_wiqid?: string;
            success_wiq?: string;
            failed_wiq?: string;
            errormessage?: string;
            errorsource?: string;
            errortype?: string;
        }[];
    } & {
        workitems?: {
            _id?: string;
            name?: string;
            payload?: string;
            priority?: number;
            nextrun?: Date | undefined;
            lastrun?: Date | undefined;
            files?: {
                filename?: string;
                _id?: string;
                compressed?: boolean;
                file?: Uint8Array;
            }[];
            state?: string;
            wiq?: string;
            wiqid?: string;
            retries?: number;
            username?: string;
            success_wiqid?: string;
            failed_wiqid?: string;
            success_wiq?: string;
            failed_wiq?: string;
            errormessage?: string;
            errorsource?: string;
            errortype?: string;
        }[] & ({
            _id?: string;
            name?: string;
            payload?: string;
            priority?: number;
            nextrun?: Date | undefined;
            lastrun?: Date | undefined;
            files?: {
                filename?: string;
                _id?: string;
                compressed?: boolean;
                file?: Uint8Array;
            }[];
            state?: string;
            wiq?: string;
            wiqid?: string;
            retries?: number;
            username?: string;
            success_wiqid?: string;
            failed_wiqid?: string;
            success_wiq?: string;
            failed_wiq?: string;
            errormessage?: string;
            errorsource?: string;
            errortype?: string;
        } & {
            _id?: string;
            name?: string;
            payload?: string;
            priority?: number;
            nextrun?: Date | undefined;
            lastrun?: Date | undefined;
            files?: {
                filename?: string;
                _id?: string;
                compressed?: boolean;
                file?: Uint8Array;
            }[] & ({
                filename?: string;
                _id?: string;
                compressed?: boolean;
                file?: Uint8Array;
            } & {
                filename?: string;
                _id?: string;
                compressed?: boolean;
                file?: Uint8Array;
            } & { [K in Exclude<keyof I["workitems"][number]["files"][number], keyof WorkitemFile>]: never; })[] & { [K_1 in Exclude<keyof I["workitems"][number]["files"], keyof {
                filename?: string;
                _id?: string;
                compressed?: boolean;
                file?: Uint8Array;
            }[]>]: never; };
            state?: string;
            wiq?: string;
            wiqid?: string;
            retries?: number;
            username?: string;
            success_wiqid?: string;
            failed_wiqid?: string;
            success_wiq?: string;
            failed_wiq?: string;
            errormessage?: string;
            errorsource?: string;
            errortype?: string;
        } & { [K_2 in Exclude<keyof I["workitems"][number], keyof Workitem>]: never; })[] & { [K_3 in Exclude<keyof I["workitems"], keyof {
            _id?: string;
            name?: string;
            payload?: string;
            priority?: number;
            nextrun?: Date | undefined;
            lastrun?: Date | undefined;
            files?: {
                filename?: string;
                _id?: string;
                compressed?: boolean;
                file?: Uint8Array;
            }[];
            state?: string;
            wiq?: string;
            wiqid?: string;
            retries?: number;
            username?: string;
            success_wiqid?: string;
            failed_wiqid?: string;
            success_wiq?: string;
            failed_wiq?: string;
            errormessage?: string;
            errorsource?: string;
            errortype?: string;
        }[]>]: never; };
    } & { [K_4 in Exclude<keyof I, "workitems">]: never; }>(base?: I): PushWorkitemsResponse;
    fromPartial<I_1 extends {
        workitems?: {
            _id?: string;
            name?: string;
            payload?: string;
            priority?: number;
            nextrun?: Date | undefined;
            lastrun?: Date | undefined;
            files?: {
                filename?: string;
                _id?: string;
                compressed?: boolean;
                file?: Uint8Array;
            }[];
            state?: string;
            wiq?: string;
            wiqid?: string;
            retries?: number;
            username?: string;
            success_wiqid?: string;
            failed_wiqid?: string;
            success_wiq?: string;
            failed_wiq?: string;
            errormessage?: string;
            errorsource?: string;
            errortype?: string;
        }[];
    } & {
        workitems?: {
            _id?: string;
            name?: string;
            payload?: string;
            priority?: number;
            nextrun?: Date | undefined;
            lastrun?: Date | undefined;
            files?: {
                filename?: string;
                _id?: string;
                compressed?: boolean;
                file?: Uint8Array;
            }[];
            state?: string;
            wiq?: string;
            wiqid?: string;
            retries?: number;
            username?: string;
            success_wiqid?: string;
            failed_wiqid?: string;
            success_wiq?: string;
            failed_wiq?: string;
            errormessage?: string;
            errorsource?: string;
            errortype?: string;
        }[] & ({
            _id?: string;
            name?: string;
            payload?: string;
            priority?: number;
            nextrun?: Date | undefined;
            lastrun?: Date | undefined;
            files?: {
                filename?: string;
                _id?: string;
                compressed?: boolean;
                file?: Uint8Array;
            }[];
            state?: string;
            wiq?: string;
            wiqid?: string;
            retries?: number;
            username?: string;
            success_wiqid?: string;
            failed_wiqid?: string;
            success_wiq?: string;
            failed_wiq?: string;
            errormessage?: string;
            errorsource?: string;
            errortype?: string;
        } & {
            _id?: string;
            name?: string;
            payload?: string;
            priority?: number;
            nextrun?: Date | undefined;
            lastrun?: Date | undefined;
            files?: {
                filename?: string;
                _id?: string;
                compressed?: boolean;
                file?: Uint8Array;
            }[] & ({
                filename?: string;
                _id?: string;
                compressed?: boolean;
                file?: Uint8Array;
            } & {
                filename?: string;
                _id?: string;
                compressed?: boolean;
                file?: Uint8Array;
            } & { [K_5 in Exclude<keyof I_1["workitems"][number]["files"][number], keyof WorkitemFile>]: never; })[] & { [K_6 in Exclude<keyof I_1["workitems"][number]["files"], keyof {
                filename?: string;
                _id?: string;
                compressed?: boolean;
                file?: Uint8Array;
            }[]>]: never; };
            state?: string;
            wiq?: string;
            wiqid?: string;
            retries?: number;
            username?: string;
            success_wiqid?: string;
            failed_wiqid?: string;
            success_wiq?: string;
            failed_wiq?: string;
            errormessage?: string;
            errorsource?: string;
            errortype?: string;
        } & { [K_7 in Exclude<keyof I_1["workitems"][number], keyof Workitem>]: never; })[] & { [K_8 in Exclude<keyof I_1["workitems"], keyof {
            _id?: string;
            name?: string;
            payload?: string;
            priority?: number;
            nextrun?: Date | undefined;
            lastrun?: Date | undefined;
            files?: {
                filename?: string;
                _id?: string;
                compressed?: boolean;
                file?: Uint8Array;
            }[];
            state?: string;
            wiq?: string;
            wiqid?: string;
            retries?: number;
            username?: string;
            success_wiqid?: string;
            failed_wiqid?: string;
            success_wiq?: string;
            failed_wiq?: string;
            errormessage?: string;
            errorsource?: string;
            errortype?: string;
        }[]>]: never; };
    } & { [K_9 in Exclude<keyof I_1, "workitems">]: never; }>(object: I_1): PushWorkitemsResponse;
};
export declare const UpdateWorkitemRequest: {
    encode(message: UpdateWorkitemRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): UpdateWorkitemRequest;
    fromJSON(object: any): UpdateWorkitemRequest;
    toJSON(message: UpdateWorkitemRequest): unknown;
    create<I extends {
        workitem?: {
            _id?: string;
            name?: string;
            payload?: string;
            priority?: number;
            nextrun?: Date | undefined;
            lastrun?: Date | undefined;
            files?: {
                filename?: string;
                _id?: string;
                compressed?: boolean;
                file?: Uint8Array;
            }[];
            state?: string;
            wiq?: string;
            wiqid?: string;
            retries?: number;
            username?: string;
            success_wiqid?: string;
            failed_wiqid?: string;
            success_wiq?: string;
            failed_wiq?: string;
            errormessage?: string;
            errorsource?: string;
            errortype?: string;
        };
        ignoremaxretries?: boolean;
        files?: {
            filename?: string;
            _id?: string;
            compressed?: boolean;
            file?: Uint8Array;
        }[];
    } & {
        workitem?: {
            _id?: string;
            name?: string;
            payload?: string;
            priority?: number;
            nextrun?: Date | undefined;
            lastrun?: Date | undefined;
            files?: {
                filename?: string;
                _id?: string;
                compressed?: boolean;
                file?: Uint8Array;
            }[];
            state?: string;
            wiq?: string;
            wiqid?: string;
            retries?: number;
            username?: string;
            success_wiqid?: string;
            failed_wiqid?: string;
            success_wiq?: string;
            failed_wiq?: string;
            errormessage?: string;
            errorsource?: string;
            errortype?: string;
        } & {
            _id?: string;
            name?: string;
            payload?: string;
            priority?: number;
            nextrun?: Date | undefined;
            lastrun?: Date | undefined;
            files?: {
                filename?: string;
                _id?: string;
                compressed?: boolean;
                file?: Uint8Array;
            }[] & ({
                filename?: string;
                _id?: string;
                compressed?: boolean;
                file?: Uint8Array;
            } & {
                filename?: string;
                _id?: string;
                compressed?: boolean;
                file?: Uint8Array;
            } & { [K in Exclude<keyof I["workitem"]["files"][number], keyof WorkitemFile>]: never; })[] & { [K_1 in Exclude<keyof I["workitem"]["files"], keyof {
                filename?: string;
                _id?: string;
                compressed?: boolean;
                file?: Uint8Array;
            }[]>]: never; };
            state?: string;
            wiq?: string;
            wiqid?: string;
            retries?: number;
            username?: string;
            success_wiqid?: string;
            failed_wiqid?: string;
            success_wiq?: string;
            failed_wiq?: string;
            errormessage?: string;
            errorsource?: string;
            errortype?: string;
        } & { [K_2 in Exclude<keyof I["workitem"], keyof Workitem>]: never; };
        ignoremaxretries?: boolean;
        files?: {
            filename?: string;
            _id?: string;
            compressed?: boolean;
            file?: Uint8Array;
        }[] & ({
            filename?: string;
            _id?: string;
            compressed?: boolean;
            file?: Uint8Array;
        } & {
            filename?: string;
            _id?: string;
            compressed?: boolean;
            file?: Uint8Array;
        } & { [K_3 in Exclude<keyof I["files"][number], keyof WorkitemFile>]: never; })[] & { [K_4 in Exclude<keyof I["files"], keyof {
            filename?: string;
            _id?: string;
            compressed?: boolean;
            file?: Uint8Array;
        }[]>]: never; };
    } & { [K_5 in Exclude<keyof I, keyof UpdateWorkitemRequest>]: never; }>(base?: I): UpdateWorkitemRequest;
    fromPartial<I_1 extends {
        workitem?: {
            _id?: string;
            name?: string;
            payload?: string;
            priority?: number;
            nextrun?: Date | undefined;
            lastrun?: Date | undefined;
            files?: {
                filename?: string;
                _id?: string;
                compressed?: boolean;
                file?: Uint8Array;
            }[];
            state?: string;
            wiq?: string;
            wiqid?: string;
            retries?: number;
            username?: string;
            success_wiqid?: string;
            failed_wiqid?: string;
            success_wiq?: string;
            failed_wiq?: string;
            errormessage?: string;
            errorsource?: string;
            errortype?: string;
        };
        ignoremaxretries?: boolean;
        files?: {
            filename?: string;
            _id?: string;
            compressed?: boolean;
            file?: Uint8Array;
        }[];
    } & {
        workitem?: {
            _id?: string;
            name?: string;
            payload?: string;
            priority?: number;
            nextrun?: Date | undefined;
            lastrun?: Date | undefined;
            files?: {
                filename?: string;
                _id?: string;
                compressed?: boolean;
                file?: Uint8Array;
            }[];
            state?: string;
            wiq?: string;
            wiqid?: string;
            retries?: number;
            username?: string;
            success_wiqid?: string;
            failed_wiqid?: string;
            success_wiq?: string;
            failed_wiq?: string;
            errormessage?: string;
            errorsource?: string;
            errortype?: string;
        } & {
            _id?: string;
            name?: string;
            payload?: string;
            priority?: number;
            nextrun?: Date | undefined;
            lastrun?: Date | undefined;
            files?: {
                filename?: string;
                _id?: string;
                compressed?: boolean;
                file?: Uint8Array;
            }[] & ({
                filename?: string;
                _id?: string;
                compressed?: boolean;
                file?: Uint8Array;
            } & {
                filename?: string;
                _id?: string;
                compressed?: boolean;
                file?: Uint8Array;
            } & { [K_6 in Exclude<keyof I_1["workitem"]["files"][number], keyof WorkitemFile>]: never; })[] & { [K_7 in Exclude<keyof I_1["workitem"]["files"], keyof {
                filename?: string;
                _id?: string;
                compressed?: boolean;
                file?: Uint8Array;
            }[]>]: never; };
            state?: string;
            wiq?: string;
            wiqid?: string;
            retries?: number;
            username?: string;
            success_wiqid?: string;
            failed_wiqid?: string;
            success_wiq?: string;
            failed_wiq?: string;
            errormessage?: string;
            errorsource?: string;
            errortype?: string;
        } & { [K_8 in Exclude<keyof I_1["workitem"], keyof Workitem>]: never; };
        ignoremaxretries?: boolean;
        files?: {
            filename?: string;
            _id?: string;
            compressed?: boolean;
            file?: Uint8Array;
        }[] & ({
            filename?: string;
            _id?: string;
            compressed?: boolean;
            file?: Uint8Array;
        } & {
            filename?: string;
            _id?: string;
            compressed?: boolean;
            file?: Uint8Array;
        } & { [K_9 in Exclude<keyof I_1["files"][number], keyof WorkitemFile>]: never; })[] & { [K_10 in Exclude<keyof I_1["files"], keyof {
            filename?: string;
            _id?: string;
            compressed?: boolean;
            file?: Uint8Array;
        }[]>]: never; };
    } & { [K_11 in Exclude<keyof I_1, keyof UpdateWorkitemRequest>]: never; }>(object: I_1): UpdateWorkitemRequest;
};
export declare const UpdateWorkitemResponse: {
    encode(message: UpdateWorkitemResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): UpdateWorkitemResponse;
    fromJSON(object: any): UpdateWorkitemResponse;
    toJSON(message: UpdateWorkitemResponse): unknown;
    create<I extends {
        workitem?: {
            _id?: string;
            name?: string;
            payload?: string;
            priority?: number;
            nextrun?: Date | undefined;
            lastrun?: Date | undefined;
            files?: {
                filename?: string;
                _id?: string;
                compressed?: boolean;
                file?: Uint8Array;
            }[];
            state?: string;
            wiq?: string;
            wiqid?: string;
            retries?: number;
            username?: string;
            success_wiqid?: string;
            failed_wiqid?: string;
            success_wiq?: string;
            failed_wiq?: string;
            errormessage?: string;
            errorsource?: string;
            errortype?: string;
        };
    } & {
        workitem?: {
            _id?: string;
            name?: string;
            payload?: string;
            priority?: number;
            nextrun?: Date | undefined;
            lastrun?: Date | undefined;
            files?: {
                filename?: string;
                _id?: string;
                compressed?: boolean;
                file?: Uint8Array;
            }[];
            state?: string;
            wiq?: string;
            wiqid?: string;
            retries?: number;
            username?: string;
            success_wiqid?: string;
            failed_wiqid?: string;
            success_wiq?: string;
            failed_wiq?: string;
            errormessage?: string;
            errorsource?: string;
            errortype?: string;
        } & {
            _id?: string;
            name?: string;
            payload?: string;
            priority?: number;
            nextrun?: Date | undefined;
            lastrun?: Date | undefined;
            files?: {
                filename?: string;
                _id?: string;
                compressed?: boolean;
                file?: Uint8Array;
            }[] & ({
                filename?: string;
                _id?: string;
                compressed?: boolean;
                file?: Uint8Array;
            } & {
                filename?: string;
                _id?: string;
                compressed?: boolean;
                file?: Uint8Array;
            } & { [K in Exclude<keyof I["workitem"]["files"][number], keyof WorkitemFile>]: never; })[] & { [K_1 in Exclude<keyof I["workitem"]["files"], keyof {
                filename?: string;
                _id?: string;
                compressed?: boolean;
                file?: Uint8Array;
            }[]>]: never; };
            state?: string;
            wiq?: string;
            wiqid?: string;
            retries?: number;
            username?: string;
            success_wiqid?: string;
            failed_wiqid?: string;
            success_wiq?: string;
            failed_wiq?: string;
            errormessage?: string;
            errorsource?: string;
            errortype?: string;
        } & { [K_2 in Exclude<keyof I["workitem"], keyof Workitem>]: never; };
    } & { [K_3 in Exclude<keyof I, "workitem">]: never; }>(base?: I): UpdateWorkitemResponse;
    fromPartial<I_1 extends {
        workitem?: {
            _id?: string;
            name?: string;
            payload?: string;
            priority?: number;
            nextrun?: Date | undefined;
            lastrun?: Date | undefined;
            files?: {
                filename?: string;
                _id?: string;
                compressed?: boolean;
                file?: Uint8Array;
            }[];
            state?: string;
            wiq?: string;
            wiqid?: string;
            retries?: number;
            username?: string;
            success_wiqid?: string;
            failed_wiqid?: string;
            success_wiq?: string;
            failed_wiq?: string;
            errormessage?: string;
            errorsource?: string;
            errortype?: string;
        };
    } & {
        workitem?: {
            _id?: string;
            name?: string;
            payload?: string;
            priority?: number;
            nextrun?: Date | undefined;
            lastrun?: Date | undefined;
            files?: {
                filename?: string;
                _id?: string;
                compressed?: boolean;
                file?: Uint8Array;
            }[];
            state?: string;
            wiq?: string;
            wiqid?: string;
            retries?: number;
            username?: string;
            success_wiqid?: string;
            failed_wiqid?: string;
            success_wiq?: string;
            failed_wiq?: string;
            errormessage?: string;
            errorsource?: string;
            errortype?: string;
        } & {
            _id?: string;
            name?: string;
            payload?: string;
            priority?: number;
            nextrun?: Date | undefined;
            lastrun?: Date | undefined;
            files?: {
                filename?: string;
                _id?: string;
                compressed?: boolean;
                file?: Uint8Array;
            }[] & ({
                filename?: string;
                _id?: string;
                compressed?: boolean;
                file?: Uint8Array;
            } & {
                filename?: string;
                _id?: string;
                compressed?: boolean;
                file?: Uint8Array;
            } & { [K_4 in Exclude<keyof I_1["workitem"]["files"][number], keyof WorkitemFile>]: never; })[] & { [K_5 in Exclude<keyof I_1["workitem"]["files"], keyof {
                filename?: string;
                _id?: string;
                compressed?: boolean;
                file?: Uint8Array;
            }[]>]: never; };
            state?: string;
            wiq?: string;
            wiqid?: string;
            retries?: number;
            username?: string;
            success_wiqid?: string;
            failed_wiqid?: string;
            success_wiq?: string;
            failed_wiq?: string;
            errormessage?: string;
            errorsource?: string;
            errortype?: string;
        } & { [K_6 in Exclude<keyof I_1["workitem"], keyof Workitem>]: never; };
    } & { [K_7 in Exclude<keyof I_1, "workitem">]: never; }>(object: I_1): UpdateWorkitemResponse;
};
export declare const PopWorkitemRequest: {
    encode(message: PopWorkitemRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): PopWorkitemRequest;
    fromJSON(object: any): PopWorkitemRequest;
    toJSON(message: PopWorkitemRequest): unknown;
    create<I extends {
        wiq?: string;
        wiqid?: string;
        includefiles?: boolean;
        compressed?: boolean;
    } & {
        wiq?: string;
        wiqid?: string;
        includefiles?: boolean;
        compressed?: boolean;
    } & { [K in Exclude<keyof I, keyof PopWorkitemRequest>]: never; }>(base?: I): PopWorkitemRequest;
    fromPartial<I_1 extends {
        wiq?: string;
        wiqid?: string;
        includefiles?: boolean;
        compressed?: boolean;
    } & {
        wiq?: string;
        wiqid?: string;
        includefiles?: boolean;
        compressed?: boolean;
    } & { [K_1 in Exclude<keyof I_1, keyof PopWorkitemRequest>]: never; }>(object: I_1): PopWorkitemRequest;
};
export declare const PopWorkitemResponse: {
    encode(message: PopWorkitemResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): PopWorkitemResponse;
    fromJSON(object: any): PopWorkitemResponse;
    toJSON(message: PopWorkitemResponse): unknown;
    create<I extends {
        workitem?: {
            _id?: string;
            name?: string;
            payload?: string;
            priority?: number;
            nextrun?: Date | undefined;
            lastrun?: Date | undefined;
            files?: {
                filename?: string;
                _id?: string;
                compressed?: boolean;
                file?: Uint8Array;
            }[];
            state?: string;
            wiq?: string;
            wiqid?: string;
            retries?: number;
            username?: string;
            success_wiqid?: string;
            failed_wiqid?: string;
            success_wiq?: string;
            failed_wiq?: string;
            errormessage?: string;
            errorsource?: string;
            errortype?: string;
        };
    } & {
        workitem?: {
            _id?: string;
            name?: string;
            payload?: string;
            priority?: number;
            nextrun?: Date | undefined;
            lastrun?: Date | undefined;
            files?: {
                filename?: string;
                _id?: string;
                compressed?: boolean;
                file?: Uint8Array;
            }[];
            state?: string;
            wiq?: string;
            wiqid?: string;
            retries?: number;
            username?: string;
            success_wiqid?: string;
            failed_wiqid?: string;
            success_wiq?: string;
            failed_wiq?: string;
            errormessage?: string;
            errorsource?: string;
            errortype?: string;
        } & {
            _id?: string;
            name?: string;
            payload?: string;
            priority?: number;
            nextrun?: Date | undefined;
            lastrun?: Date | undefined;
            files?: {
                filename?: string;
                _id?: string;
                compressed?: boolean;
                file?: Uint8Array;
            }[] & ({
                filename?: string;
                _id?: string;
                compressed?: boolean;
                file?: Uint8Array;
            } & {
                filename?: string;
                _id?: string;
                compressed?: boolean;
                file?: Uint8Array;
            } & { [K in Exclude<keyof I["workitem"]["files"][number], keyof WorkitemFile>]: never; })[] & { [K_1 in Exclude<keyof I["workitem"]["files"], keyof {
                filename?: string;
                _id?: string;
                compressed?: boolean;
                file?: Uint8Array;
            }[]>]: never; };
            state?: string;
            wiq?: string;
            wiqid?: string;
            retries?: number;
            username?: string;
            success_wiqid?: string;
            failed_wiqid?: string;
            success_wiq?: string;
            failed_wiq?: string;
            errormessage?: string;
            errorsource?: string;
            errortype?: string;
        } & { [K_2 in Exclude<keyof I["workitem"], keyof Workitem>]: never; };
    } & { [K_3 in Exclude<keyof I, "workitem">]: never; }>(base?: I): PopWorkitemResponse;
    fromPartial<I_1 extends {
        workitem?: {
            _id?: string;
            name?: string;
            payload?: string;
            priority?: number;
            nextrun?: Date | undefined;
            lastrun?: Date | undefined;
            files?: {
                filename?: string;
                _id?: string;
                compressed?: boolean;
                file?: Uint8Array;
            }[];
            state?: string;
            wiq?: string;
            wiqid?: string;
            retries?: number;
            username?: string;
            success_wiqid?: string;
            failed_wiqid?: string;
            success_wiq?: string;
            failed_wiq?: string;
            errormessage?: string;
            errorsource?: string;
            errortype?: string;
        };
    } & {
        workitem?: {
            _id?: string;
            name?: string;
            payload?: string;
            priority?: number;
            nextrun?: Date | undefined;
            lastrun?: Date | undefined;
            files?: {
                filename?: string;
                _id?: string;
                compressed?: boolean;
                file?: Uint8Array;
            }[];
            state?: string;
            wiq?: string;
            wiqid?: string;
            retries?: number;
            username?: string;
            success_wiqid?: string;
            failed_wiqid?: string;
            success_wiq?: string;
            failed_wiq?: string;
            errormessage?: string;
            errorsource?: string;
            errortype?: string;
        } & {
            _id?: string;
            name?: string;
            payload?: string;
            priority?: number;
            nextrun?: Date | undefined;
            lastrun?: Date | undefined;
            files?: {
                filename?: string;
                _id?: string;
                compressed?: boolean;
                file?: Uint8Array;
            }[] & ({
                filename?: string;
                _id?: string;
                compressed?: boolean;
                file?: Uint8Array;
            } & {
                filename?: string;
                _id?: string;
                compressed?: boolean;
                file?: Uint8Array;
            } & { [K_4 in Exclude<keyof I_1["workitem"]["files"][number], keyof WorkitemFile>]: never; })[] & { [K_5 in Exclude<keyof I_1["workitem"]["files"], keyof {
                filename?: string;
                _id?: string;
                compressed?: boolean;
                file?: Uint8Array;
            }[]>]: never; };
            state?: string;
            wiq?: string;
            wiqid?: string;
            retries?: number;
            username?: string;
            success_wiqid?: string;
            failed_wiqid?: string;
            success_wiq?: string;
            failed_wiq?: string;
            errormessage?: string;
            errorsource?: string;
            errortype?: string;
        } & { [K_6 in Exclude<keyof I_1["workitem"], keyof Workitem>]: never; };
    } & { [K_7 in Exclude<keyof I_1, "workitem">]: never; }>(object: I_1): PopWorkitemResponse;
};
export declare const DeleteWorkitemRequest: {
    encode(message: DeleteWorkitemRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): DeleteWorkitemRequest;
    fromJSON(object: any): DeleteWorkitemRequest;
    toJSON(message: DeleteWorkitemRequest): unknown;
    create<I extends {
        _id?: string;
    } & {
        _id?: string;
    } & { [K in Exclude<keyof I, "_id">]: never; }>(base?: I): DeleteWorkitemRequest;
    fromPartial<I_1 extends {
        _id?: string;
    } & {
        _id?: string;
    } & { [K_1 in Exclude<keyof I_1, "_id">]: never; }>(object: I_1): DeleteWorkitemRequest;
};
export declare const DeleteWorkitemResponse: {
    encode(_: DeleteWorkitemResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): DeleteWorkitemResponse;
    fromJSON(_: any): DeleteWorkitemResponse;
    toJSON(_: DeleteWorkitemResponse): unknown;
    create<I extends {} & {} & { [K in Exclude<keyof I, never>]: never; }>(base?: I): DeleteWorkitemResponse;
    fromPartial<I_1 extends {} & {} & { [K_1 in Exclude<keyof I_1, never>]: never; }>(_: I_1): DeleteWorkitemResponse;
};
export declare const WorkItemQueue: {
    encode(message: WorkItemQueue, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): WorkItemQueue;
    fromJSON(object: any): WorkItemQueue;
    toJSON(message: WorkItemQueue): unknown;
    create<I extends {
        workflowid?: string;
        robotqueue?: string;
        amqpqueue?: string;
        projectid?: string;
        usersrole?: string;
        maxretries?: number;
        retrydelay?: number;
        initialdelay?: number;
        success_wiqid?: string;
        failed_wiqid?: string;
        success_wiq?: string;
        failed_wiq?: string;
        _id?: string;
        _acl?: {
            _id?: string;
            deny?: boolean;
            rights?: number;
        }[];
        name?: string;
        _createdbyid?: string;
        _createdby?: string;
        _created?: Date | undefined;
        _modifiedbyid?: string;
        _modifiedby?: string;
        _modified?: Date | undefined;
        _version?: number;
    } & {
        workflowid?: string;
        robotqueue?: string;
        amqpqueue?: string;
        projectid?: string;
        usersrole?: string;
        maxretries?: number;
        retrydelay?: number;
        initialdelay?: number;
        success_wiqid?: string;
        failed_wiqid?: string;
        success_wiq?: string;
        failed_wiq?: string;
        _id?: string;
        _acl?: {
            _id?: string;
            deny?: boolean;
            rights?: number;
        }[] & ({
            _id?: string;
            deny?: boolean;
            rights?: number;
        } & {
            _id?: string;
            deny?: boolean;
            rights?: number;
        } & { [K in Exclude<keyof I["_acl"][number], keyof Ace>]: never; })[] & { [K_1 in Exclude<keyof I["_acl"], keyof {
            _id?: string;
            deny?: boolean;
            rights?: number;
        }[]>]: never; };
        name?: string;
        _createdbyid?: string;
        _createdby?: string;
        _created?: Date | undefined;
        _modifiedbyid?: string;
        _modifiedby?: string;
        _modified?: Date | undefined;
        _version?: number;
    } & { [K_2 in Exclude<keyof I, keyof WorkItemQueue>]: never; }>(base?: I): WorkItemQueue;
    fromPartial<I_1 extends {
        workflowid?: string;
        robotqueue?: string;
        amqpqueue?: string;
        projectid?: string;
        usersrole?: string;
        maxretries?: number;
        retrydelay?: number;
        initialdelay?: number;
        success_wiqid?: string;
        failed_wiqid?: string;
        success_wiq?: string;
        failed_wiq?: string;
        _id?: string;
        _acl?: {
            _id?: string;
            deny?: boolean;
            rights?: number;
        }[];
        name?: string;
        _createdbyid?: string;
        _createdby?: string;
        _created?: Date | undefined;
        _modifiedbyid?: string;
        _modifiedby?: string;
        _modified?: Date | undefined;
        _version?: number;
    } & {
        workflowid?: string;
        robotqueue?: string;
        amqpqueue?: string;
        projectid?: string;
        usersrole?: string;
        maxretries?: number;
        retrydelay?: number;
        initialdelay?: number;
        success_wiqid?: string;
        failed_wiqid?: string;
        success_wiq?: string;
        failed_wiq?: string;
        _id?: string;
        _acl?: {
            _id?: string;
            deny?: boolean;
            rights?: number;
        }[] & ({
            _id?: string;
            deny?: boolean;
            rights?: number;
        } & {
            _id?: string;
            deny?: boolean;
            rights?: number;
        } & { [K_3 in Exclude<keyof I_1["_acl"][number], keyof Ace>]: never; })[] & { [K_4 in Exclude<keyof I_1["_acl"], keyof {
            _id?: string;
            deny?: boolean;
            rights?: number;
        }[]>]: never; };
        name?: string;
        _createdbyid?: string;
        _createdby?: string;
        _created?: Date | undefined;
        _modifiedbyid?: string;
        _modifiedby?: string;
        _modified?: Date | undefined;
        _version?: number;
    } & { [K_5 in Exclude<keyof I_1, keyof WorkItemQueue>]: never; }>(object: I_1): WorkItemQueue;
};
export declare const AddWorkItemQueueRequest: {
    encode(message: AddWorkItemQueueRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AddWorkItemQueueRequest;
    fromJSON(object: any): AddWorkItemQueueRequest;
    toJSON(message: AddWorkItemQueueRequest): unknown;
    create<I extends {
        name?: string;
        robotqueue?: string;
        amqpqueue?: string;
        projectid?: string;
        skiprole?: boolean;
        maxretries?: number;
        initialdelay?: number;
        retrydelay?: number;
        success_wiqid?: string;
        failed_wiqid?: string;
        success_wiq?: string;
        failed_wiq?: string;
        _acl?: {
            _id?: string;
            deny?: boolean;
            rights?: number;
        }[];
    } & {
        name?: string;
        robotqueue?: string;
        amqpqueue?: string;
        projectid?: string;
        skiprole?: boolean;
        maxretries?: number;
        initialdelay?: number;
        retrydelay?: number;
        success_wiqid?: string;
        failed_wiqid?: string;
        success_wiq?: string;
        failed_wiq?: string;
        _acl?: {
            _id?: string;
            deny?: boolean;
            rights?: number;
        }[] & ({
            _id?: string;
            deny?: boolean;
            rights?: number;
        } & {
            _id?: string;
            deny?: boolean;
            rights?: number;
        } & { [K in Exclude<keyof I["_acl"][number], keyof Ace>]: never; })[] & { [K_1 in Exclude<keyof I["_acl"], keyof {
            _id?: string;
            deny?: boolean;
            rights?: number;
        }[]>]: never; };
    } & { [K_2 in Exclude<keyof I, keyof AddWorkItemQueueRequest>]: never; }>(base?: I): AddWorkItemQueueRequest;
    fromPartial<I_1 extends {
        name?: string;
        robotqueue?: string;
        amqpqueue?: string;
        projectid?: string;
        skiprole?: boolean;
        maxretries?: number;
        initialdelay?: number;
        retrydelay?: number;
        success_wiqid?: string;
        failed_wiqid?: string;
        success_wiq?: string;
        failed_wiq?: string;
        _acl?: {
            _id?: string;
            deny?: boolean;
            rights?: number;
        }[];
    } & {
        name?: string;
        robotqueue?: string;
        amqpqueue?: string;
        projectid?: string;
        skiprole?: boolean;
        maxretries?: number;
        initialdelay?: number;
        retrydelay?: number;
        success_wiqid?: string;
        failed_wiqid?: string;
        success_wiq?: string;
        failed_wiq?: string;
        _acl?: {
            _id?: string;
            deny?: boolean;
            rights?: number;
        }[] & ({
            _id?: string;
            deny?: boolean;
            rights?: number;
        } & {
            _id?: string;
            deny?: boolean;
            rights?: number;
        } & { [K_3 in Exclude<keyof I_1["_acl"][number], keyof Ace>]: never; })[] & { [K_4 in Exclude<keyof I_1["_acl"], keyof {
            _id?: string;
            deny?: boolean;
            rights?: number;
        }[]>]: never; };
    } & { [K_5 in Exclude<keyof I_1, keyof AddWorkItemQueueRequest>]: never; }>(object: I_1): AddWorkItemQueueRequest;
};
export declare const AddWorkItemQueueResponse: {
    encode(message: AddWorkItemQueueResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AddWorkItemQueueResponse;
    fromJSON(object: any): AddWorkItemQueueResponse;
    toJSON(message: AddWorkItemQueueResponse): unknown;
    create<I extends {
        workitemqueue?: {
            workflowid?: string;
            robotqueue?: string;
            amqpqueue?: string;
            projectid?: string;
            usersrole?: string;
            maxretries?: number;
            retrydelay?: number;
            initialdelay?: number;
            success_wiqid?: string;
            failed_wiqid?: string;
            success_wiq?: string;
            failed_wiq?: string;
            _id?: string;
            _acl?: {
                _id?: string;
                deny?: boolean;
                rights?: number;
            }[];
            name?: string;
            _createdbyid?: string;
            _createdby?: string;
            _created?: Date | undefined;
            _modifiedbyid?: string;
            _modifiedby?: string;
            _modified?: Date | undefined;
            _version?: number;
        };
    } & {
        workitemqueue?: {
            workflowid?: string;
            robotqueue?: string;
            amqpqueue?: string;
            projectid?: string;
            usersrole?: string;
            maxretries?: number;
            retrydelay?: number;
            initialdelay?: number;
            success_wiqid?: string;
            failed_wiqid?: string;
            success_wiq?: string;
            failed_wiq?: string;
            _id?: string;
            _acl?: {
                _id?: string;
                deny?: boolean;
                rights?: number;
            }[];
            name?: string;
            _createdbyid?: string;
            _createdby?: string;
            _created?: Date | undefined;
            _modifiedbyid?: string;
            _modifiedby?: string;
            _modified?: Date | undefined;
            _version?: number;
        } & {
            workflowid?: string;
            robotqueue?: string;
            amqpqueue?: string;
            projectid?: string;
            usersrole?: string;
            maxretries?: number;
            retrydelay?: number;
            initialdelay?: number;
            success_wiqid?: string;
            failed_wiqid?: string;
            success_wiq?: string;
            failed_wiq?: string;
            _id?: string;
            _acl?: {
                _id?: string;
                deny?: boolean;
                rights?: number;
            }[] & ({
                _id?: string;
                deny?: boolean;
                rights?: number;
            } & {
                _id?: string;
                deny?: boolean;
                rights?: number;
            } & { [K in Exclude<keyof I["workitemqueue"]["_acl"][number], keyof Ace>]: never; })[] & { [K_1 in Exclude<keyof I["workitemqueue"]["_acl"], keyof {
                _id?: string;
                deny?: boolean;
                rights?: number;
            }[]>]: never; };
            name?: string;
            _createdbyid?: string;
            _createdby?: string;
            _created?: Date | undefined;
            _modifiedbyid?: string;
            _modifiedby?: string;
            _modified?: Date | undefined;
            _version?: number;
        } & { [K_2 in Exclude<keyof I["workitemqueue"], keyof WorkItemQueue>]: never; };
    } & { [K_3 in Exclude<keyof I, "workitemqueue">]: never; }>(base?: I): AddWorkItemQueueResponse;
    fromPartial<I_1 extends {
        workitemqueue?: {
            workflowid?: string;
            robotqueue?: string;
            amqpqueue?: string;
            projectid?: string;
            usersrole?: string;
            maxretries?: number;
            retrydelay?: number;
            initialdelay?: number;
            success_wiqid?: string;
            failed_wiqid?: string;
            success_wiq?: string;
            failed_wiq?: string;
            _id?: string;
            _acl?: {
                _id?: string;
                deny?: boolean;
                rights?: number;
            }[];
            name?: string;
            _createdbyid?: string;
            _createdby?: string;
            _created?: Date | undefined;
            _modifiedbyid?: string;
            _modifiedby?: string;
            _modified?: Date | undefined;
            _version?: number;
        };
    } & {
        workitemqueue?: {
            workflowid?: string;
            robotqueue?: string;
            amqpqueue?: string;
            projectid?: string;
            usersrole?: string;
            maxretries?: number;
            retrydelay?: number;
            initialdelay?: number;
            success_wiqid?: string;
            failed_wiqid?: string;
            success_wiq?: string;
            failed_wiq?: string;
            _id?: string;
            _acl?: {
                _id?: string;
                deny?: boolean;
                rights?: number;
            }[];
            name?: string;
            _createdbyid?: string;
            _createdby?: string;
            _created?: Date | undefined;
            _modifiedbyid?: string;
            _modifiedby?: string;
            _modified?: Date | undefined;
            _version?: number;
        } & {
            workflowid?: string;
            robotqueue?: string;
            amqpqueue?: string;
            projectid?: string;
            usersrole?: string;
            maxretries?: number;
            retrydelay?: number;
            initialdelay?: number;
            success_wiqid?: string;
            failed_wiqid?: string;
            success_wiq?: string;
            failed_wiq?: string;
            _id?: string;
            _acl?: {
                _id?: string;
                deny?: boolean;
                rights?: number;
            }[] & ({
                _id?: string;
                deny?: boolean;
                rights?: number;
            } & {
                _id?: string;
                deny?: boolean;
                rights?: number;
            } & { [K_4 in Exclude<keyof I_1["workitemqueue"]["_acl"][number], keyof Ace>]: never; })[] & { [K_5 in Exclude<keyof I_1["workitemqueue"]["_acl"], keyof {
                _id?: string;
                deny?: boolean;
                rights?: number;
            }[]>]: never; };
            name?: string;
            _createdbyid?: string;
            _createdby?: string;
            _created?: Date | undefined;
            _modifiedbyid?: string;
            _modifiedby?: string;
            _modified?: Date | undefined;
            _version?: number;
        } & { [K_6 in Exclude<keyof I_1["workitemqueue"], keyof WorkItemQueue>]: never; };
    } & { [K_7 in Exclude<keyof I_1, "workitemqueue">]: never; }>(object: I_1): AddWorkItemQueueResponse;
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
