import { Envelope } from "./proto/base.js";
export type clientType = "socket" | "pipe" | "ws" | "grpc" | "rest";
export type clientAgent = "node" | "browser" | "nodered" | "openrpa";
export declare class client {
    id: string;
    seq: number;
    remoteip: string;
    agent: clientAgent | undefined;
    protocol: clientType;
    version: string;
    doping: boolean;
    created: Date;
    lastheartbeat: Date;
    lastheartbeatstr: string;
    lastheartbeatsec: string;
    user: any;
    jwt: string;
    signedin: boolean;
    connected: boolean;
    connecting: boolean;
    queues: any[];
    exchanges: any[];
    watches: changestream[];
    url: string;
    ws: any;
    stream: any;
    grpc: any;
    call: any;
    SendStreamCall: any;
    ReceiveStreamCall: any;
    replies: any;
    streams: any;
    Initialize(ws: any, stream: any, call: any, req: any): Promise<boolean>;
    onConnected(client: client): void;
    onDisconnected(client: client, error: Error): void;
    onMessage(client: client, message: Envelope): Promise<any>;
    ping(span: any): void;
    queuecount(): number;
    SendWatch(watch: any, next: any, span: any): void;
    Close(): void;
}
export declare class changestream {
    stream: any;
    id: string;
    callback: any;
    aggregates: object[];
    collectionname: string;
}
export declare function remoteip(req: any): string;
