// import * as net from "net";
// import * as  grpc from "@grpc/grpc-js";
// import * as  WebSocket from "ws";
import { protowrap } from "./protowrap"
import { config } from "./config";
const { info, err, warn }  = config;
import { Envelope } from "./proto/base";
export type clientType = "socket" | "pipe" | "ws" | "grpc" | "rest";
export type clientAgent = "node" | "browser" | "nodered" | "openrpa";

export class client {
  public id: string = "";
  public seq: number = 0;
  public remoteip: string = "unknown";
  public agent: clientAgent | undefined;
  public protocol: clientType = "ws";
  public version: string = "0.0.1";
  public doping: boolean = false;
  public created: Date = new Date();
  public lastheartbeat: Date = new Date();
  public lastheartbeatstr: string = new Date().toISOString();
  public lastheartbeatsec: string = "0";
  public user: any; // User
  public jwt: string = "";
  public signedin: boolean = false;
  public connected: boolean = false;
  public connecting: boolean = false;
  public queues: any[] = []; // amqpqueue[]
  public exchanges: any[] = []; // amqpexchange[]
  public watches: changestream[] = [];
  public url: string = "";
  public ws: any; // WebSocket;
  public stream: any; // net.Socket;
  public grpc: any;
  public call: any;
  public SendStreamCall: any; //  grpc.ClientDuplexStream<any, any>;
  public ReceiveStreamCall: any // grpc.ClientDuplexStream<any, any>;
  public replies: any;
  public streams: any;

  async Initialize(ws: any, stream: any, call: any, req: any): Promise<boolean> { // WebSocket // net.Socket; // express.Request 
    try {
      this.replies = {};
      this.streams = {};
      this.doping = config.settings.DoPing;
      if (ws != null) this.ws = ws;
      if (stream != null) this.stream = stream;
      if (call != null) this.call = call;
      if (req != null) this.remoteip = remoteip(req);
    } catch (error) {
      err(error);
    }
    return true;;
  }
  onConnected(client: client): void {
  }
  onDisconnected(client: client, error: Error): void {
    info("close " + this.id + " " + this.protocol + " " + this.remoteip + " " + this.agent);
  }
  async onMessage(client: client, message: Envelope): Promise<any> {
    const reply = { command: message.command, rid: message.id, data: {} };
    if (message.command == "ping") {
      reply.command = "pong";
    }
    return reply;
  }
  ping(span: any) {
    if (this.doping) {
      protowrap.sendMesssag(this, Envelope.create({ command: "ping" }), undefined, true);
    } else {
      this.lastheartbeat = new Date();
      this.lastheartbeatstr = this.lastheartbeat.toISOString();
      this.lastheartbeatsec = (this.lastheartbeat.getTime() / 1000).toString();
    }
  }
  queuecount() {
    return this.queues.length;
  }
  SendWatch(watch: any, next: any, span: any) {
  }
  Close() {
    if (this.ws != null) this.ws.close();
    if (this.stream != null) this.stream.destroy();
    if (this.call != null) this.call.cancel();
    if (this.SendStreamCall != null) this.SendStreamCall.cancel();
    if (this.ReceiveStreamCall != null) this.ReceiveStreamCall.cancel();
    info("close " + this.id + " " + this.protocol + " " + this.remoteip + " " + this.agent);
    this.connected = false;
    this.connecting = false;
    // this.onDisconnected(this, null);
  }
}
export class changestream {
  // public stream: ChangeStream;
  public stream: any;
  public id: string;
  public callback: any;
  aggregates: object[];
  collectionname: string;
}
export function remoteip(req: any) { // express.Request
  if (req == null) return "unknown";
  let remoteip: string = req.socket.remoteAddress;
  if (req.headers["X-Forwarded-For"] != null) remoteip = req.headers["X-Forwarded-For"] as string;
  if (req.headers["X-real-IP"] != null) remoteip = req.headers["X-real-IP"] as string;
  if (req.headers["x-forwarded-for"] != null) remoteip = req.headers["x-forwarded-for"] as string;
  if (req.headers["x-real-ip"] != null) remoteip = req.headers["x-real-ip"] as string;
  return remoteip;
}
