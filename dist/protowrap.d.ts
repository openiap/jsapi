import { client } from "./client.js";
import { Envelope } from "./proto/base.js";
export declare class protowrap {
    static connect(apiurl: string, onConnected: any, onDisconnected: any, onMessage: any): client;
    static unpack(message: any): any[];
    static IsPendingReply(client: client, payload: any): any;
    static sendMesssag(client: client, payload: Envelope, id: string | undefined, dumpmsg: boolean): number;
    static ClientCleanup(client: client, onClientDisconnected: any, error: Error | string): void;
    static RPC(client: client, payload: Envelope): Promise<any>;
    static _RPC(client: client, payload: Envelope): [string, Promise<any>];
    static SetStream(client: client, stream: any, rid: string): any;
    static DownloadFile(client: client, id: string, collectionname: string, filename: string): Promise<any>;
    static UploadFile(client: client, filename: string, mimetype: string, content: Uint8Array): Promise<string>;
}
export declare class ServerError extends Error {
    constructor(message: string, stack: string);
}
