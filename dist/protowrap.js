import { client } from "./client";
import { config } from "./config";
const { info, err, warn } = config;
import { messageParser } from "./message-parser";
import { FakeStream } from "./FakeStream";
import { Any } from "./proto/google/protobuf/any";
import { BeginStream, DownloadRequest, DownloadResponse, EndStream, Envelope, ErrorResponse, GetElementResponse, RefreshToken, SigninRequest, SigninResponse, Stream, UploadRequest, UploadResponse } from "./proto/base";
import { AggregateResponse, CountResponse, DeleteManyResponse, DeleteOneResponse, DropCollectionResponse, GetDocumentVersionResponse, InsertManyResponse, InsertOneResponse, InsertOrUpdateOneResponse, ListCollectionsResponse, CreateCollectionResponse, QueryResponse, UpdateDocumentResponse, UpdateOneResponse } from "./proto/querys";
import { UnWatchResponse, WatchEvent, WatchResponse } from "./proto/watch";
import { QueueEvent, QueueMessageResponse, RegisterExchangeResponse, RegisterQueueResponse, UnRegisterQueueResponse } from "./proto/queues";
import { DeleteWorkitemResponse, PopWorkitemResponse, PushWorkitemResponse, UpdateWorkitemResponse } from "./proto/workitems";
export class protowrap {
    static connect(apiurl) {
        const result = new client();
        result.connecting = true;
        var u = new URL(apiurl);
        u.username = "";
        u.password = "";
        var ws = new WebSocket(u.toString());
        ws.binaryType = "arraybuffer";
        var parser = new messageParser();
        result.Initialize(ws, null, null, null);
        ws.onmessage = (e) => {
            parser.write(e.data);
        };
        ws.onopen = () => {
            result.connecting = false;
            result.connected = true;
            result.onConnected(result);
        };
        parser.ondata = async (message) => {
            try {
                if (message != null) {
                    if (!this.IsPendingReply(result, message)) {
                        var _payload = await result.onMessage(result, message);
                        if (_payload && _payload.command != "noop")
                            this.sendMesssag(result, _payload, undefined, true);
                    }
                }
            }
            catch (error) {
                err(error);
            }
        };
        ws.onclose = (e) => {
            protowrap.ClientCleanup(result, result.onDisconnected, new Error("Disconnected from server"));
        };
        ws.onerror = (e) => {
            try {
                protowrap.ClientCleanup(result, result.onDisconnected, new Error("Disconnected from server"));
                result.ws.close();
            }
            catch (error) {
                console.error(error);
            }
        };
        result.ws = ws;
        return result;
    }
    static unpack(message) {
        let { command, data } = message;
        const rid = message.id;
        let msg = data;
        if (typeof data == "string") {
            msg = JSON.parse(data);
        }
        else if (command != null && data != null) {
            if (data.value)
                data = data.value;
            switch (command) {
                case "beginstream":
                    msg = BeginStream.decode(data);
                    break;
                case "stream":
                    msg = Stream.decode(data);
                    break;
                case "endstream":
                    msg = EndStream.decode(data);
                    break;
                case "getelement":
                    msg = GetElementResponse.decode(data);
                    break;
                case "signin":
                    msg = SigninRequest.decode(data);
                    break;
                case "signinreply":
                    msg = SigninResponse.decode(data);
                    break;
                case "refreshtoken":
                    msg = RefreshToken.decode(data);
                    break;
                case "listcollectionsreply":
                    msg = ListCollectionsResponse.decode(data);
                    break;
                case "createcollectionreply":
                    msg = CreateCollectionResponse.decode(data);
                    break;
                case "dropcollectionreply":
                    msg = DropCollectionResponse.decode(data);
                    break;
                case "queryreply":
                    msg = QueryResponse.decode(data);
                    break;
                case "getdocumentversionreply":
                    msg = GetDocumentVersionResponse.decode(data);
                    break;
                case "aggregatereply":
                    msg = AggregateResponse.decode(data);
                    break;
                case "countreply":
                    msg = CountResponse.decode(data);
                    break;
                case "insertonereply":
                    msg = InsertOneResponse.decode(data);
                    break;
                case "insertmanyreply":
                    msg = InsertManyResponse.decode(data);
                    break;
                case "updateonereply":
                    msg = UpdateOneResponse.decode(data);
                    break;
                case "updatedocumentreply":
                    msg = UpdateDocumentResponse.decode(data);
                    break;
                case "insertorupdateonereply":
                    msg = InsertOrUpdateOneResponse.decode(data);
                    break;
                case "deleteonereply":
                    msg = DeleteOneResponse.decode(data);
                    break;
                case "deletemanyreply":
                    msg = DeleteManyResponse.decode(data);
                    break;
                case "watchevent":
                    msg = WatchEvent.decode(data);
                    break;
                case "watchreply":
                    msg = WatchResponse.decode(data);
                    break;
                case "unwatchreply":
                    msg = UnWatchResponse.decode(data);
                    break;
                case "registerqueuereply":
                    msg = RegisterQueueResponse.decode(data);
                    break;
                case "registerexchangereply":
                    msg = RegisterExchangeResponse.decode(data);
                    break;
                case "unregisterqueuereply":
                    msg = UnRegisterQueueResponse.decode(data);
                    break;
                case "queueevent":
                    msg = QueueEvent.decode(data);
                    break;
                case "queuemessagereply":
                    msg = QueueMessageResponse.decode(data);
                    break;
                case "downloadreply":
                    msg = DownloadResponse.decode(data);
                    break;
                case "download":
                    msg = DownloadRequest.decode(data);
                    break;
                case "upload":
                    msg = UploadRequest.decode(data);
                    break;
                case "uploadreply":
                    msg = UploadResponse.decode(data);
                    break;
                case "pushworkitemreply":
                    msg = PushWorkitemResponse.decode(data);
                    break;
                case "popworkitemreply":
                    msg = PopWorkitemResponse.decode(data);
                    break;
                case "updateworkitemreply":
                    msg = UpdateWorkitemResponse.decode(data);
                    break;
                case "deleteworkitemreply":
                    msg = DeleteWorkitemResponse.decode(data);
                    break;
                case "error":
                    msg = ErrorResponse.decode(data);
                    break;
                default:
                    console.error("Unknown reply type " + command);
                    break;
            }
        }
        const reply = { command, rid, data: {} };
        return [command, msg, reply];
    }
    static IsPendingReply(client, payload) {
        try {
            const [command, msg, reply] = this.unpack(payload);
            const rid = payload.rid;
            config.dumpmessage("RCV", payload);
            if (rid == null || rid == "")
                return false;
            if (client.replies[rid] && command != "beginstream" && command != "stream" && command != "endstream") {
                const { resolve, reject, dt } = client.replies[rid];
                if (resolve) {
                    try {
                        if (command == "error") {
                            var _er = JSON.parse(JSON.stringify(msg));
                            var error = new Error(_er.message);
                            // @ts-ignore
                            error.serverstack = _er.stack;
                            // @ts-ignore
                            error.code = _er.code;
                            reject(error);
                        }
                        else {
                            resolve(payload);
                        }
                    }
                    catch (error) {
                        err(error);
                        return reject(error);
                    }
                }
                delete client.replies[rid];
            }
            else if (client.streams[rid]) {
                const { command } = payload;
                if (command == "error") {
                    const s = client.streams[rid].stream;
                    s.emit("error", new Error(payload.data.toString()));
                }
                else if (command == "stream") {
                    const s = client.streams[rid].stream;
                    if (s.push) {
                        s.push(msg.data);
                    }
                    else if (s.write) {
                        s.write(msg.data);
                    }
                    else {
                        throw new Error("Unknown stream type");
                    }
                    client.streams[rid].chunks++;
                    s.bytes += payload.data.length;
                }
                else if (command == "beginstream") {
                    client.streams[rid].stat = {};
                    if (msg.stat)
                        client.streams[rid].stat = msg.stat;
                    if (msg.checksum)
                        client.streams[rid].checksum = msg.checksum;
                }
                else if (command == "endstream") {
                    const s = client.streams[rid].stream;
                    if (s.push) {
                        // client.streams[rid].stream.push(null);
                        client.streams[rid].stream.end();
                    }
                    else {
                        client.streams[rid].stream.end();
                    }
                    delete client.streams[rid];
                }
            }
            else {
                return false;
            }
            return true;
        }
        catch (error) {
            err(error);
            return false;
        }
    }
    static sendMesssag(client, payload, id, dumpmsg) {
        payload.seq = client.seq;
        if (id != null && id != "") {
            payload.id = id;
        }
        else {
            if (client.seq != null) {
                // payload.id = client.seq.toString();
                payload.id = Math.random().toString(36).substring(2, 11);
            }
            else {
                payload.id = Math.random().toString(36).substring(2, 11);
            }
        }
        if (client.seq != null) {
            client.seq++;
        }
        if (dumpmsg) {
            config.dumpmessage("SND", payload);
        }
        var message = Envelope.create(payload);
        var buffer = Envelope.encode(message).finish();
        const lengthbuffer = new ArrayBuffer(4);
        const dataView = new DataView(lengthbuffer);
        dataView.setUint32(0, buffer.length, true);
        client.ws.send(lengthbuffer);
        client.ws.send(buffer);
        return payload.seq;
    }
    static ClientCleanup(client, onClientDisconnected, error) {
        // @ts-ignore
        if (client.cleanup == true)
            return;
        // @ts-ignore
        client.cleanup = true;
        try {
            var keys = Object.keys(client.replies);
            for (let i = 0; i < keys.length; i++) {
                var key = keys[i];
                var reply = client.replies[key];
                reply.reject(new Error("Client " + client.id + "disconnected"));
            }
            var keys = Object.keys(client.streams);
            if (client.connected == true || client.connecting == true) {
                client.connected = false;
                client.connecting = false;
                onClientDisconnected(client, error);
            }
        }
        catch (e) {
            err(e);
        }
        finally {
        }
    }
    static RPC(client, payload) {
        const [id, promise] = this._RPC(client, payload);
        return promise;
    }
    static _RPC(client, payload) {
        const id = Math.random().toString(36).substring(2, 11);
        // const id = client.seq.toString();
        const promise = new Promise((resolve, reject) => {
            const dt = new Date();
            const command = payload.command;
            var _payload = { ...payload };
            // @ts-ignore
            delete _payload.id;
            client.replies[id] = { resolve, reject, dt, command };
            // @ts-ignore
            this.sendMesssag(client, { id, ..._payload }, id, true);
        });
        return [id, promise];
    }
    static SetStream(client, stream, rid) {
        client.streams[rid] = { stream, chunks: 0, bytes: 0 };
        return client.streams[rid];
    }
    static DownloadFile(client, id, collectionname, filename) {
        return new Promise(async (resolve, reject) => {
            try {
                var msg = { id, filename, collectionname };
                if (msg.id == null)
                    msg.id = "";
                if (msg.filename == null)
                    msg.filename = "";
                if (msg.collectionname == null)
                    msg.collectionname = "";
                const data = Any.create({ "typeUrl": "type.googleapis.com/openiap.DownloadRequest", "value": DownloadRequest.encode(msg).finish() });
                const payload = Envelope.create({ command: "download", data });
                const [rid, promise] = this._RPC(client, payload);
                promise.catch((error) => {
                    console.error(error);
                    reject(error);
                });
                var ws = new FakeStream();
                const s = this.SetStream(client, ws, rid);
                ws.onend = async (result) => {
                    resolve(result);
                };
            }
            catch (error) {
                reject(error);
            }
        });
    }
    static UploadFile(client, filename, mimetype, content) {
        return new Promise(async (resolve, reject) => {
            const uploaddata = Any.create({ "typeUrl": "type.googleapis.com/openiap.UploadRequest",
                "value": UploadRequest.encode(UploadRequest.create({ filename, mimetype })).finish() });
            const payload = Envelope.create({ command: "upload", data: uploaddata });
            const [rid, promise] = this._RPC(client, payload);
            const chunksize = 5 * 1024 * 1024;
            const chunks = Math.ceil(content.length / chunksize);
            var counter = 0;
            const beginstreamdata = Any.create({ "typeUrl": "openiap.beginstream", "value": BeginStream.encode(BeginStream.create()).finish() });
            this.sendMesssag(client, Envelope.create({ rid,
                command: "beginstream", data: beginstreamdata }), undefined, true);
            for (let start = 0; start < content.length; start = start + chunksize) {
                counter++;
                info("send chunk " + counter + " of " + chunks);
                const end = ((start + chunksize) > content.length ? content.length : start + chunksize);
                const data = new Uint8Array(end - start);
                data.set(content.slice(start, end));
                const chunkdata = Any.create({ "typeUrl": "openiap.stream", "value": Stream.encode(Stream.create({ data })).finish() });
                this.sendMesssag(client, Envelope.create({ rid,
                    command: "stream", data: chunkdata }), undefined, true);
            }
            const endstreamdata = Any.create({ "typeUrl": "openiap.endstream", "value": EndStream.encode(EndStream.create()).finish() });
            this.sendMesssag(client, Envelope.create({ rid,
                command: "endstream", data: endstreamdata }), undefined, true);
            var result = await promise;
            const [_command, BLAHBLAH, _reply] = protowrap.unpack(result);
            resolve(BLAHBLAH.id);
        });
    }
}
export class ServerError extends Error {
    constructor(message, stack) {
        super(message);
        this.message = message;
        this.name = "ServerError";
        this.stack = stack;
    }
}
//# sourceMappingURL=protowrap.js.map