"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServerError = exports.protowrap = void 0;
var client_1 = require("./client");
var config_1 = require("./config");
var info = config_1.config.info, err = config_1.config.err, warn = config_1.config.warn;
var message_parser_1 = require("./message-parser");
var FakeStream_1 = require("./FakeStream");
var any_1 = require("./proto/google/protobuf/any");
var base_1 = require("./proto/base");
var querys_1 = require("./proto/querys");
var watch_1 = require("./proto/watch");
var queues_1 = require("./proto/queues");
var workitems_1 = require("./proto/workitems");
var protowrap = /** @class */ (function () {
    function protowrap() {
    }
    protowrap.connect = function (apiurl) {
        var _this = this;
        var result = new client_1.client();
        result.connecting = true;
        var u = new URL(apiurl);
        u.username = "";
        u.password = "";
        var ws = new WebSocket(u.toString());
        ws.binaryType = "arraybuffer";
        var parser = new message_parser_1.messageParser();
        result.Initialize(ws, null, null, null);
        ws.onmessage = function (e) {
            parser.write(e.data);
        };
        ws.onopen = function () {
            result.connecting = false;
            result.connected = true;
            result.onConnected(result);
        };
        parser.ondata = function (message) { return __awaiter(_this, void 0, void 0, function () {
            var _payload, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        if (!(message != null)) return [3 /*break*/, 2];
                        if (!!this.IsPendingReply(result, message)) return [3 /*break*/, 2];
                        return [4 /*yield*/, result.onMessage(result, message)];
                    case 1:
                        _payload = _a.sent();
                        if (_payload && _payload.command != "noop")
                            this.sendMesssag(result, _payload, undefined, true);
                        _a.label = 2;
                    case 2: return [3 /*break*/, 4];
                    case 3:
                        error_1 = _a.sent();
                        err(error_1);
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        }); };
        ws.onclose = function (e) {
            protowrap.ClientCleanup(result, result.onDisconnected, new Error("Disconnected from server"));
        };
        ws.onerror = function (e) {
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
    };
    protowrap.unpack = function (message) {
        var command = message.command, data = message.data;
        var rid = message.id;
        var msg = data;
        if (typeof data == "string") {
            msg = JSON.parse(data);
        }
        else if (command != null && data != null) {
            if (data.value)
                data = data.value;
            switch (command) {
                case "beginstream":
                    msg = base_1.BeginStream.decode(data);
                    break;
                case "stream":
                    msg = base_1.Stream.decode(data);
                    break;
                case "endstream":
                    msg = base_1.EndStream.decode(data);
                    break;
                case "getelement":
                    msg = base_1.GetElementResponse.decode(data);
                    break;
                case "signin":
                    msg = base_1.SigninRequest.decode(data);
                    break;
                case "signinreply":
                    msg = base_1.SigninResponse.decode(data);
                    break;
                case "refreshtoken":
                    msg = base_1.RefreshToken.decode(data);
                    break;
                case "listcollectionsreply":
                    msg = querys_1.ListCollectionsResponse.decode(data);
                    break;
                case "createcollectionreply":
                    msg = querys_1.CreateCollectionResponse.decode(data);
                    break;
                case "dropcollectionreply":
                    msg = querys_1.DropCollectionResponse.decode(data);
                    break;
                case "queryreply":
                    msg = querys_1.QueryResponse.decode(data);
                    break;
                case "getdocumentversionreply":
                    msg = querys_1.GetDocumentVersionResponse.decode(data);
                    break;
                case "aggregatereply":
                    msg = querys_1.AggregateResponse.decode(data);
                    break;
                case "countreply":
                    msg = querys_1.CountResponse.decode(data);
                    break;
                case "insertonereply":
                    msg = querys_1.InsertOneResponse.decode(data);
                    break;
                case "insertmanyreply":
                    msg = querys_1.InsertManyResponse.decode(data);
                    break;
                case "updateonereply":
                    msg = querys_1.UpdateOneResponse.decode(data);
                    break;
                case "updatedocumentreply":
                    msg = querys_1.UpdateDocumentResponse.decode(data);
                    break;
                case "insertorupdateonereply":
                    msg = querys_1.InsertOrUpdateOneResponse.decode(data);
                    break;
                case "deleteonereply":
                    msg = querys_1.DeleteOneResponse.decode(data);
                    break;
                case "deletemanyreply":
                    msg = querys_1.DeleteManyResponse.decode(data);
                    break;
                case "watchevent":
                    msg = watch_1.WatchEvent.decode(data);
                    break;
                case "watchreply":
                    msg = watch_1.WatchResponse.decode(data);
                    break;
                case "unwatchreply":
                    msg = watch_1.UnWatchResponse.decode(data);
                    break;
                case "registerqueuereply":
                    msg = queues_1.RegisterQueueResponse.decode(data);
                    break;
                case "registerexchangereply":
                    msg = queues_1.RegisterExchangeResponse.decode(data);
                    break;
                case "unregisterqueuereply":
                    msg = queues_1.UnRegisterQueueResponse.decode(data);
                    break;
                case "queueevent":
                    msg = queues_1.QueueEvent.decode(data);
                    break;
                case "queuemessagereply":
                    msg = queues_1.QueueMessageResponse.decode(data);
                    break;
                case "downloadreply":
                    msg = base_1.DownloadResponse.decode(data);
                    break;
                case "download":
                    msg = base_1.DownloadRequest.decode(data);
                    break;
                case "upload":
                    msg = base_1.UploadRequest.decode(data);
                    break;
                case "uploadreply":
                    msg = base_1.UploadResponse.decode(data);
                    break;
                case "pushworkitemreply":
                    msg = workitems_1.PushWorkitemResponse.decode(data);
                    break;
                case "popworkitemreply":
                    msg = workitems_1.PopWorkitemResponse.decode(data);
                    break;
                case "updateworkitemreply":
                    msg = workitems_1.UpdateWorkitemResponse.decode(data);
                    break;
                case "deleteworkitemreply":
                    msg = workitems_1.DeleteWorkitemResponse.decode(data);
                    break;
                case "error":
                    msg = base_1.ErrorResponse.decode(data);
                    break;
                default:
                    console.error("Unknown reply type " + command);
                    break;
            }
        }
        var reply = { command: command, rid: rid, data: {} };
        return [command, msg, reply];
    };
    protowrap.IsPendingReply = function (client, payload) {
        try {
            var _a = this.unpack(payload), command = _a[0], msg = _a[1], reply = _a[2];
            var rid = payload.rid;
            config_1.config.dumpmessage("RCV", payload);
            if (rid == null || rid == "")
                return false;
            if (client.replies[rid] && command != "beginstream" && command != "stream" && command != "endstream") {
                var _b = client.replies[rid], resolve = _b.resolve, reject = _b.reject, dt = _b.dt;
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
                var command_1 = payload.command;
                if (command_1 == "error") {
                    var s = client.streams[rid].stream;
                    s.emit("error", new Error(payload.data.toString()));
                }
                else if (command_1 == "stream") {
                    var s = client.streams[rid].stream;
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
                else if (command_1 == "beginstream") {
                    client.streams[rid].stat = {};
                    if (msg.stat)
                        client.streams[rid].stat = msg.stat;
                    if (msg.checksum)
                        client.streams[rid].checksum = msg.checksum;
                }
                else if (command_1 == "endstream") {
                    var s = client.streams[rid].stream;
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
    };
    protowrap.sendMesssag = function (client, payload, id, dumpmsg) {
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
            config_1.config.dumpmessage("SND", payload);
        }
        var message = base_1.Envelope.create(payload);
        var buffer = base_1.Envelope.encode(message).finish();
        var lengthbuffer = new ArrayBuffer(4);
        var dataView = new DataView(lengthbuffer);
        dataView.setUint32(0, buffer.length, true);
        client.ws.send(lengthbuffer);
        client.ws.send(buffer);
        return payload.seq;
    };
    protowrap.ClientCleanup = function (client, onClientDisconnected, error) {
        // @ts-ignore
        if (client.cleanup == true)
            return;
        // @ts-ignore
        client.cleanup = true;
        try {
            var keys = Object.keys(client.replies);
            for (var i = 0; i < keys.length; i++) {
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
    };
    protowrap.RPC = function (client, payload) {
        var _a = this._RPC(client, payload), id = _a[0], promise = _a[1];
        return promise;
    };
    protowrap._RPC = function (client, payload) {
        var _this = this;
        var id = Math.random().toString(36).substring(2, 11);
        // const id = client.seq.toString();
        var promise = new Promise(function (resolve, reject) {
            var dt = new Date();
            var command = payload.command;
            var _payload = __assign({}, payload);
            // @ts-ignore
            delete _payload.id;
            client.replies[id] = { resolve: resolve, reject: reject, dt: dt, command: command };
            // @ts-ignore
            _this.sendMesssag(client, __assign({ id: id }, _payload), id, true);
        });
        return [id, promise];
    };
    protowrap.SetStream = function (client, stream, rid) {
        client.streams[rid] = { stream: stream, chunks: 0, bytes: 0 };
        return client.streams[rid];
    };
    protowrap.DownloadFile = function (client, id, collectionname, filename) {
        var _this = this;
        return new Promise(function (resolve, reject) { return __awaiter(_this, void 0, void 0, function () {
            var msg, data, payload, _a, rid, promise, ws, s;
            var _this = this;
            return __generator(this, function (_b) {
                try {
                    msg = { id: id, filename: filename, collectionname: collectionname };
                    if (msg.id == null)
                        msg.id = "";
                    if (msg.filename == null)
                        msg.filename = "";
                    if (msg.collectionname == null)
                        msg.collectionname = "";
                    data = any_1.Any.create({ "typeUrl": "type.googleapis.com/openiap.DownloadRequest", "value": base_1.DownloadRequest.encode(msg).finish() });
                    payload = base_1.Envelope.create({ command: "download", data: data });
                    _a = this._RPC(client, payload), rid = _a[0], promise = _a[1];
                    promise.catch(function (error) {
                        console.error(error);
                        reject(error);
                    });
                    ws = new FakeStream_1.FakeStream();
                    s = this.SetStream(client, ws, rid);
                    ws.onend = function (result) { return __awaiter(_this, void 0, void 0, function () {
                        return __generator(this, function (_a) {
                            resolve(result);
                            return [2 /*return*/];
                        });
                    }); };
                }
                catch (error) {
                    reject(error);
                }
                return [2 /*return*/];
            });
        }); });
    };
    protowrap.UploadFile = function (client, filename, mimetype, content) {
        var _this = this;
        return new Promise(function (resolve, reject) { return __awaiter(_this, void 0, void 0, function () {
            var uploaddata, payload, _a, rid, promise, chunksize, chunks, counter, beginstreamdata, start, end, data, chunkdata, endstreamdata, result, _b, _command, BLAHBLAH, _reply;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        uploaddata = any_1.Any.create({ "typeUrl": "type.googleapis.com/openiap.UploadRequest",
                            "value": base_1.UploadRequest.encode(base_1.UploadRequest.create({ filename: filename, mimetype: mimetype })).finish() });
                        payload = base_1.Envelope.create({ command: "upload", data: uploaddata });
                        _a = this._RPC(client, payload), rid = _a[0], promise = _a[1];
                        chunksize = 5 * 1024 * 1024;
                        chunks = Math.ceil(content.length / chunksize);
                        counter = 0;
                        beginstreamdata = any_1.Any.create({ "typeUrl": "openiap.beginstream", "value": base_1.BeginStream.encode(base_1.BeginStream.create()).finish() });
                        this.sendMesssag(client, base_1.Envelope.create({ rid: rid, command: "beginstream", data: beginstreamdata }), undefined, true);
                        for (start = 0; start < content.length; start = start + chunksize) {
                            counter++;
                            info("send chunk " + counter + " of " + chunks);
                            end = ((start + chunksize) > content.length ? content.length : start + chunksize);
                            data = new Uint8Array(end - start);
                            data.set(content.slice(start, end));
                            chunkdata = any_1.Any.create({ "typeUrl": "openiap.stream", "value": base_1.Stream.encode(base_1.Stream.create({ data: data })).finish() });
                            this.sendMesssag(client, base_1.Envelope.create({ rid: rid, command: "stream", data: chunkdata }), undefined, true);
                        }
                        endstreamdata = any_1.Any.create({ "typeUrl": "openiap.endstream", "value": base_1.EndStream.encode(base_1.EndStream.create()).finish() });
                        this.sendMesssag(client, base_1.Envelope.create({ rid: rid, command: "endstream", data: endstreamdata }), undefined, true);
                        return [4 /*yield*/, promise];
                    case 1:
                        result = _c.sent();
                        _b = protowrap.unpack(result), _command = _b[0], BLAHBLAH = _b[1], _reply = _b[2];
                        resolve(BLAHBLAH.id);
                        return [2 /*return*/];
                }
            });
        }); });
    };
    return protowrap;
}());
exports.protowrap = protowrap;
var ServerError = /** @class */ (function (_super) {
    __extends(ServerError, _super);
    function ServerError(message, stack) {
        var _this = _super.call(this, message) || this;
        _this.message = message;
        _this.name = "ServerError";
        _this.stack = stack;
        return _this;
    }
    return ServerError;
}(Error));
exports.ServerError = ServerError;
//# sourceMappingURL=protowrap.js.map