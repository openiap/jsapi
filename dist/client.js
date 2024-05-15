// import * as net from "net";
// import * as  grpc from "@grpc/grpc-js";
// import * as  WebSocket from "ws";
import { protowrap } from "./protowrap";
import { config } from "./config";
const { info, err, warn } = config;
import { Envelope } from "./proto/base";
export class client {
    id = "";
    seq = 0;
    remoteip = "unknown";
    agent;
    protocol = "ws";
    version = "0.0.1";
    doping = false;
    created = new Date();
    lastheartbeat = new Date();
    lastheartbeatstr = new Date().toISOString();
    lastheartbeatsec = "0";
    user; // User
    jwt = "";
    signedin = false;
    connected = false;
    connecting = false;
    queues = []; // amqpqueue[]
    exchanges = []; // amqpexchange[]
    watches = [];
    url = "";
    ws; // WebSocket;
    stream; // net.Socket;
    grpc;
    call;
    SendStreamCall; //  grpc.ClientDuplexStream<any, any>;
    ReceiveStreamCall; // grpc.ClientDuplexStream<any, any>;
    replies;
    streams;
    async Initialize(ws, stream, call, req) {
        try {
            this.replies = {};
            this.streams = {};
            this.doping = config.settings.DoPing;
            if (ws != null)
                this.ws = ws;
            if (stream != null)
                this.stream = stream;
            if (call != null)
                this.call = call;
            if (req != null)
                this.remoteip = remoteip(req);
        }
        catch (error) {
            err(error);
        }
        return true;
        ;
    }
    onConnected(client) {
    }
    onDisconnected(client, error) {
        info("close " + this.id + " " + this.protocol + " " + this.remoteip + " " + this.agent);
    }
    async onMessage(client, message) {
        const reply = { command: message.command, rid: message.id, data: {} };
        if (message.command == "ping") {
            reply.command = "pong";
        }
        return reply;
    }
    ping(span) {
        if (this.doping) {
            protowrap.sendMesssag(this, Envelope.create({ command: "ping" }), undefined, true);
        }
        else {
            this.lastheartbeat = new Date();
            this.lastheartbeatstr = this.lastheartbeat.toISOString();
            this.lastheartbeatsec = (this.lastheartbeat.getTime() / 1000).toString();
        }
    }
    queuecount() {
        return this.queues.length;
    }
    SendWatch(watch, next, span) {
    }
    Close() {
        if (this.ws != null)
            this.ws.close();
        if (this.stream != null)
            this.stream.destroy();
        if (this.call != null)
            this.call.cancel();
        if (this.SendStreamCall != null)
            this.SendStreamCall.cancel();
        if (this.ReceiveStreamCall != null)
            this.ReceiveStreamCall.cancel();
        info("close " + this.id + " " + this.protocol + " " + this.remoteip + " " + this.agent);
        this.connected = false;
        this.connecting = false;
        // this.onDisconnected(this, null);
    }
}
export class changestream {
    // public stream: ChangeStream;
    stream;
    id;
    callback;
    aggregates;
    collectionname;
}
export function remoteip(req) {
    if (req == null)
        return "unknown";
    let remoteip = req.socket.remoteAddress;
    if (req.headers["X-Forwarded-For"] != null)
        remoteip = req.headers["X-Forwarded-For"];
    if (req.headers["X-real-IP"] != null)
        remoteip = req.headers["X-real-IP"];
    if (req.headers["x-forwarded-for"] != null)
        remoteip = req.headers["x-forwarded-for"];
    if (req.headers["x-real-ip"] != null)
        remoteip = req.headers["x-real-ip"];
    return remoteip;
}
//# sourceMappingURL=client.js.map