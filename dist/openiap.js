"use strict";
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
exports.openiap = void 0;
var protowrap_1 = require("./protowrap");
var config_1 = require("./config");
var info = config_1.config.info, err = config_1.config.err, warn = config_1.config.warn;
var any_1 = require("./proto/google/protobuf/any");
var base_1 = require("./proto/base");
var querys_1 = require("./proto/querys");
var queues_1 = require("./proto/queues");
var watch_1 = require("./proto/watch");
var workitems_1 = require("./proto/workitems");
var openiap = /** @class */ (function () {
    function openiap(url, jwt) {
        this.url = url;
        this.jwt = jwt;
        this.reconnectms = 100;
        this.signedin = false;
        this.flowconfig = {};
        this.watchids = {};
        this.queues = {};
        this.defaltqueue = "";
        this.queuecallbacks = {};
    }
    openiap.prototype.connect = function (first) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve) {
                        _this.client = protowrap_1.protowrap.connect(_this.url);
                        if (_this.loginresolve == null)
                            _this.loginresolve = resolve;
                        setTimeout(function () {
                            try {
                                _this.client.onConnected = _this.cliOnConnected.bind(_this);
                                _this.client.onDisconnected = _this.cliOnDisconnected.bind(_this);
                                _this.client.onMessage = _this.cliOnMessage.bind(_this);
                            }
                            catch (error) {
                                _this.cliOnDisconnected(_this.client, error);
                            }
                        }, _this.reconnectms);
                    })];
            });
        });
    };
    openiap.prototype.Close = function () {
        this.signedin = false;
        // if (this.client && this.client.destroy) this.client.destroy();
        // if (this.client && this.client.close) this.client.close();
        // if (this.client && this.client.terminate) this.client.terminate();
        if (this.client && this.client.Close)
            this.client.Close();
    };
    openiap.prototype.onConnected = function (client) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/];
            });
        });
    };
    openiap.prototype.cliOnConnected = function (client) {
        return __awaiter(this, void 0, void 0, function () {
            var u, _jwt, _username, _password, user, user, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        u = new URL(this.url);
                        info("Connected to server " + u.hostname);
                        this.reconnectms = 100;
                        _jwt = "";
                        if (client.jwt != null && client.jwt != "")
                            _jwt = client.jwt;
                        if (this.jwt != null && this.jwt != "")
                            _jwt = this.jwt;
                        _username = u.username;
                        _password = u.password;
                        if (_jwt == null)
                            _jwt = "";
                        if (_username == null)
                            _username = "";
                        if (_password == null)
                            _password = "";
                        if (!(_username != "" && _password != "")) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.Signin({ username: _username, password: _password, ping: config_1.config.settings.DoPing })];
                    case 1:
                        user = _a.sent();
                        if (this.loginresolve != null) {
                            this.loginresolve(user);
                            this.loginresolve = null;
                        }
                        return [3 /*break*/, 4];
                    case 2:
                        if (!(_jwt != "")) return [3 /*break*/, 4];
                        return [4 /*yield*/, this.Signin({ jwt: _jwt, ping: config_1.config.settings.DoPing })];
                    case 3:
                        user = _a.sent();
                        if (this.loginresolve != null) {
                            this.loginresolve(user);
                            this.loginresolve = null;
                        }
                        _a.label = 4;
                    case 4:
                        _a.trys.push([4, 6, , 7]);
                        this.reconnectms = 100;
                        return [4 /*yield*/, this.onConnected(client)];
                    case 5:
                        _a.sent();
                        return [3 /*break*/, 7];
                    case 6:
                        error_1 = _a.sent();
                        err(error_1);
                        return [3 /*break*/, 7];
                    case 7:
                        if (this.loginresolve != null) {
                            this.loginresolve(null);
                            this.loginresolve = null;
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    openiap.prototype.onDisconnected = function (client, error) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/];
            });
        });
    };
    openiap.prototype.cliOnDisconnected = function (client, error) {
        this.reconnectms += 100;
        this.signedin = false;
        if (this.reconnectms > 30000)
            this.reconnectms = 30000;
        var msg = "";
        if (error) {
            var message = (error.message || error);
            if (message && !message.startsWith("Disconnected from server")) {
                err(new Error("Disconnected from server " + message));
            }
        }
        else {
            info("Disconnected from server");
        }
        try {
            this.onDisconnected(client, error);
        }
        catch (error) {
            err(error);
        }
        this.connect(false);
    };
    openiap.prototype.onWatch = function (id, operation, document) {
        // info("watchevent " + operation + " " + document._id);
    };
    openiap.GetUniqueIdentifier = function () {
        return Math.random().toString(36).substring(2, 11);
    };
    // async onMessage(client: client, message: Envelope): Promise<any> {
    // }
    openiap.prototype.cliOnMessage = function (client, message) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, command, BLAHBLAH, reply, rt, we, doc, we, data, user_1, data, user, jwt, reply2, error_2;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = protowrap_1.protowrap.unpack(message), command = _a[0], BLAHBLAH = _a[1], reply = _a[2];
                        if (!(message.command == "refreshtoken")) return [3 /*break*/, 1];
                        rt = base_1.RefreshToken.decode(message.data.value);
                        this.client.jwt = rt.jwt;
                        this.client.user = rt.user;
                        return [2 /*return*/, null];
                    case 1:
                        if (!(message.command == "watchevent")) return [3 /*break*/, 2];
                        we = watch_1.WatchEvent.decode(message.data.value);
                        if (this.watchids[we.id]) {
                            doc = we.document;
                            try {
                                if (typeof doc == "string")
                                    doc = JSON.parse(doc);
                            }
                            catch (error) {
                            }
                            this.onWatch(we.id, we.operation, doc);
                            this.watchids[we.id](we.operation, doc);
                        }
                        else {
                            warn("Got watchevent for unknown id " + we.id);
                        }
                        return [3 /*break*/, 13];
                    case 2:
                        if (!(message.command == "queueevent")) return [3 /*break*/, 12];
                        we = BLAHBLAH;
                        if (!(this.queuecallbacks[we.correlationId] && (we.replyto == "" || we.replyto == null))) return [3 /*break*/, 3];
                        data = JSON.parse(we.data);
                        delete data.spanId;
                        delete data.traceId;
                        user_1 = data.__user;
                        delete data.__jwt;
                        delete data.__user;
                        this.queuecallbacks[we.correlationId](data, user_1);
                        delete this.queuecallbacks[we.correlationId];
                        return [3 /*break*/, 11];
                    case 3:
                        if (!this.queues[we.queuename]) return [3 /*break*/, 10];
                        _b.label = 4;
                    case 4:
                        _b.trys.push([4, 8, , 9]);
                        data = JSON.parse(we.data);
                        if (typeof data == "string") {
                            data = JSON.parse(data);
                        }
                        user = null;
                        jwt = null;
                        if (data.__jwt != null)
                            jwt = data.__jwt;
                        if (data.__user != null)
                            user = data.__user;
                        delete data.__jwt;
                        delete data.__user;
                        return [4 /*yield*/, this.queues[we.queuename](we, data, user, jwt)];
                    case 5:
                        reply2 = _b.sent();
                        if (!(reply2 != null)) return [3 /*break*/, 7];
                        return [4 /*yield*/, this.QueueMessage({ correlationId: we.correlationId, queuename: we.replyto, data: reply2, striptoken: true }, false)];
                    case 6:
                        _b.sent();
                        _b.label = 7;
                    case 7: return [3 /*break*/, 9];
                    case 8:
                        error_2 = _b.sent();
                        err(error_2);
                        return [3 /*break*/, 9];
                    case 9: return [3 /*break*/, 11];
                    case 10:
                        warn("Got queueevent for unknown queue " + we.queuename);
                        _b.label = 11;
                    case 11: return [3 /*break*/, 13];
                    case 12:
                        info("Received message from server: ");
                        _b.label = 13;
                    case 13: return [2 /*return*/, reply];
                }
            });
        });
    };
    openiap.prototype.Ping = function () {
        return __awaiter(this, void 0, void 0, function () {
            var message, data, payload, result, _a, _command, BLAHBLAH, _reply;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        message = base_1.PingRequest.create();
                        data = any_1.Any.create({ "typeUrl": "openiap.ping", "value": base_1.PingRequest.encode(message).finish() });
                        payload = base_1.Envelope.create({ command: "ping", data: data });
                        return [4 /*yield*/, protowrap_1.protowrap.RPC(this.client, payload)];
                    case 1:
                        result = _b.sent();
                        _a = protowrap_1.protowrap.unpack(result), _command = _a[0], BLAHBLAH = _a[1], _reply = _a[2];
                        return [2 /*return*/];
                }
            });
        });
    };
    openiap.prototype.stringify = function (object) {
        return JSON.stringify(object, function (key, value) {
            if (value == null)
                return value;
            var t = typeof value;
            if (value instanceof RegExp)
                return '__REGEXP ' + value.toString();
            else if (t === 'object') {
                if (value.constructor != null && value.constructor.name === 'RegExp') {
                    return '__REGEXP ' + value.toString();
                }
                return value;
            }
            else
                return value;
        });
    };
    openiap.prototype.Signin = function (options) {
        return __awaiter(this, void 0, void 0, function () {
            var opt, message, data, payload, result, _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        opt = Object.assign(new SigninDefaults(), options);
                        message = base_1.SigninRequest.create({ username: opt.username, password: opt.password, ping: opt.ping, longtoken: opt.longtoken });
                        if (opt.jwt != null && opt.jwt != "") {
                            message = base_1.SigninRequest.create({ jwt: opt.jwt, ping: opt.ping });
                        }
                        data = any_1.Any.create({ type_url: "type.googleapis.com/openiap.SigninRequest", value: base_1.SigninRequest.encode(message).finish() });
                        payload = base_1.Envelope.create({ command: "signin", data: data, jwt: opt.jwt });
                        _b = (_a = base_1.SigninResponse).decode;
                        return [4 /*yield*/, protowrap_1.protowrap.RPC(this.client, payload)];
                    case 1:
                        result = _b.apply(_a, [(_c.sent()).data.value]);
                        if (options.validateonly) {
                            info("Validated " + result.user.name);
                            return [2 /*return*/, result];
                        }
                        if (result.config != null && result.config != "") {
                            try {
                                this.flowconfig = JSON.parse(result.config);
                            }
                            catch (error) {
                            }
                        }
                        info("Signed in as " + result.user.name);
                        this.signedin = true;
                        this.client.jwt = result.jwt;
                        this.client.user = result.user;
                        return [2 /*return*/, result];
                }
            });
        });
    };
    openiap.prototype.ListCollections = function (options) {
        if (options === void 0) { options = {}; }
        return __awaiter(this, void 0, void 0, function () {
            var opt, message, data, payload, result, _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        opt = Object.assign(new ListCollectionsDefaults(), options);
                        message = querys_1.ListCollectionsRequest.create(opt);
                        data = any_1.Any.create({ type_url: "type.googleapis.com/openiap.ListCollectionsRequest", "value": querys_1.ListCollectionsRequest.encode(message).finish() });
                        payload = base_1.Envelope.create({ command: "listcollections", data: data, jwt: opt.jwt });
                        _b = (_a = querys_1.ListCollectionsResponse).decode;
                        return [4 /*yield*/, protowrap_1.protowrap.RPC(this.client, payload)];
                    case 1:
                        result = _b.apply(_a, [(_c.sent()).data.value]);
                        return [2 /*return*/, JSON.parse(result.results)];
                }
            });
        });
    };
    /**
 * Create a collection removing all data from the collection. Only users with admin rights can Create collections.
 * @param options {@link CreateCollectionOptions}
 * @param priority Message priority, the higher the number the higher the priority. Default is 2, 3 or higher requeires updates to server configuration
 */
    openiap.prototype.CreateCollection = function (options, priority) {
        if (priority === void 0) { priority = 2; }
        return __awaiter(this, void 0, void 0, function () {
            var opt, message, data, payload, result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        // if (!this.connected) throw new Error("Not connected to server");
                        if (!this.signedin)
                            throw new Error("Not signed in to server");
                        opt = Object.assign(new CreateCollectionDefaults(), options);
                        message = querys_1.CreateCollectionRequest.create(opt);
                        data = any_1.Any.create({ type_url: "type.googleapis.com/openiap.CreateCollectionRequest", "value": querys_1.CreateCollectionRequest.encode(message).finish() });
                        payload = base_1.Envelope.create({ command: "createcollection", data: data, jwt: opt.jwt });
                        payload.priority = priority;
                        return [4 /*yield*/, protowrap_1.protowrap.RPC(this.client, payload)];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    openiap.prototype.DropCollection = function (options) {
        return __awaiter(this, void 0, void 0, function () {
            var opt, message, data, payload, result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        opt = Object.assign(new DropCollectionDefaults(), options);
                        message = querys_1.DropCollectionRequest.create(opt);
                        data = any_1.Any.create({ type_url: "type.googleapis.com/openiap.DropCollectionRequest", "value": querys_1.DropCollectionRequest.encode(message).finish() });
                        payload = base_1.Envelope.create({ command: "dropcollection", data: data, jwt: opt.jwt });
                        return [4 /*yield*/, protowrap_1.protowrap.RPC(this.client, payload)];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    openiap.prototype.Query = function (options) {
        return __awaiter(this, void 0, void 0, function () {
            var opt, message, data, payload, result, _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        opt = Object.assign(new QueryDefaults(), options);
                        message = querys_1.QueryRequest.create(opt);
                        if (typeof message.query == "object")
                            message.query = this.stringify(message.query);
                        if (typeof message.orderby == "object")
                            message.orderby = this.stringify(message.orderby);
                        if (typeof message.projection == "object")
                            message.projection = this.stringify(message.projection);
                        data = any_1.Any.create({ type_url: "type.googleapis.com/openiap.QueryRequest", "value": querys_1.QueryRequest.encode(message).finish() });
                        payload = base_1.Envelope.create({ command: "query", data: data });
                        _b = (_a = querys_1.QueryResponse).decode;
                        return [4 /*yield*/, protowrap_1.protowrap.RPC(this.client, payload)];
                    case 1:
                        result = _b.apply(_a, [(_c.sent()).data.value]);
                        return [2 /*return*/, JSON.parse(result.results)];
                }
            });
        });
    };
    openiap.prototype.GetDocumentVersion = function (options) {
        return __awaiter(this, void 0, void 0, function () {
            var opt, message, data, payload, result, _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        opt = Object.assign(new GetDocumentVersionDefaults(), options);
                        message = querys_1.GetDocumentVersionRequest.create(opt);
                        data = any_1.Any.create({ type_url: "type.googleapis.com/openiap.GetDocumentVersionRequest", "value": querys_1.GetDocumentVersionRequest.encode(message).finish() });
                        payload = base_1.Envelope.create({ command: "getdocumentversion", data: data });
                        _b = (_a = querys_1.GetDocumentVersionResponse).decode;
                        return [4 /*yield*/, protowrap_1.protowrap.RPC(this.client, payload)];
                    case 1:
                        result = _b.apply(_a, [(_c.sent()).data.value]);
                        return [2 /*return*/, JSON.parse(result.result)];
                }
            });
        });
    };
    openiap.prototype.Count = function (options) {
        return __awaiter(this, void 0, void 0, function () {
            var opt, message, data, payload, result, _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        opt = Object.assign(new CountDefaults(), options);
                        message = querys_1.CountRequest.create(opt);
                        if (typeof message.query == "object")
                            message.query = this.stringify(message.query);
                        data = any_1.Any.create({ type_url: "type.googleapis.com/openiap.CountRequest", "value": querys_1.CountRequest.encode(message).finish() });
                        payload = base_1.Envelope.create({ command: "count", data: data, jwt: opt.jwt });
                        _b = (_a = querys_1.CountResponse).decode;
                        return [4 /*yield*/, protowrap_1.protowrap.RPC(this.client, payload)];
                    case 1:
                        result = _b.apply(_a, [(_c.sent()).data.value]);
                        return [2 /*return*/, result.result];
                }
            });
        });
    };
    openiap.prototype.Distinct = function (options) {
        return __awaiter(this, void 0, void 0, function () {
            var opt, message, data, payload, result, _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        opt = Object.assign(new DistinctDefaults(), options);
                        message = querys_1.DistinctRequest.create(opt);
                        if (typeof message.query == "object")
                            message.query = this.stringify(message.query);
                        data = any_1.Any.create({ type_url: "type.googleapis.com/openiap.DistinctRequest", "value": querys_1.DistinctRequest.encode(message).finish() });
                        payload = base_1.Envelope.create({ command: "distinct", data: data, jwt: opt.jwt });
                        _b = (_a = querys_1.DistinctResponse).decode;
                        return [4 /*yield*/, protowrap_1.protowrap.RPC(this.client, payload)];
                    case 1:
                        result = _b.apply(_a, [(_c.sent()).data.value]);
                        return [2 /*return*/, result.results];
                }
            });
        });
    };
    openiap.prototype.Aggregate = function (options) {
        return __awaiter(this, void 0, void 0, function () {
            var opt, message, data, payload, result, _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        opt = Object.assign(new AggregateDefaults(), options);
                        message = querys_1.AggregateRequest.create(opt);
                        if (typeof message.aggregates == "object")
                            message.aggregates = this.stringify(message.aggregates);
                        data = any_1.Any.create({ type_url: "type.googleapis.com/openiap.AggregateRequest", "value": querys_1.AggregateRequest.encode(message).finish() });
                        payload = base_1.Envelope.create({ command: "aggregate", data: data, jwt: opt.jwt });
                        _b = (_a = querys_1.AggregateResponse).decode;
                        return [4 /*yield*/, protowrap_1.protowrap.RPC(this.client, payload)];
                    case 1:
                        result = _b.apply(_a, [(_c.sent()).data.value]);
                        return [2 /*return*/, JSON.parse(result.results)];
                }
            });
        });
    };
    openiap.prototype.InsertOne = function (options) {
        return __awaiter(this, void 0, void 0, function () {
            var opt, message, data, payload, result, _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        opt = Object.assign(new InsertOneDefaults(), options);
                        message = querys_1.InsertOneRequest.create(opt);
                        if (typeof message.item == "object")
                            message.item = JSON.stringify(message.item);
                        data = any_1.Any.create({ type_url: "type.googleapis.com/openiap.InsertOneRequest", "value": querys_1.InsertOneRequest.encode(message).finish() });
                        payload = base_1.Envelope.create({ command: "insertone", data: data });
                        _b = (_a = querys_1.InsertOneResponse).decode;
                        return [4 /*yield*/, protowrap_1.protowrap.RPC(this.client, payload)];
                    case 1:
                        result = _b.apply(_a, [(_c.sent()).data.value]);
                        return [2 /*return*/, JSON.parse(result.result)];
                }
            });
        });
    };
    openiap.prototype.InsertMany = function (options) {
        return __awaiter(this, void 0, void 0, function () {
            var opt, message, data, payload, result, _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        opt = Object.assign(new InsertManyDefaults(), options);
                        message = querys_1.InsertManyRequest.create(opt);
                        if (typeof message.items == "object")
                            message.items = JSON.stringify(message.items);
                        data = any_1.Any.create({ type_url: "type.googleapis.com/openiap.InsertManyRequest", "value": querys_1.InsertManyRequest.encode(message).finish() });
                        payload = base_1.Envelope.create({ command: "insertmany", data: data, jwt: opt.jwt });
                        _b = (_a = querys_1.InsertManyResponse).decode;
                        return [4 /*yield*/, protowrap_1.protowrap.RPC(this.client, payload)];
                    case 1:
                        result = _b.apply(_a, [(_c.sent()).data.value]);
                        return [2 /*return*/, JSON.parse(result.results)];
                }
            });
        });
    };
    openiap.prototype.UpdateOne = function (options) {
        return __awaiter(this, void 0, void 0, function () {
            var opt, message, data, payload, result, _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        opt = Object.assign(new UpdateOneDefaults(), options);
                        message = querys_1.UpdateOneRequest.create(opt);
                        if (typeof message.item == "object")
                            message.item = JSON.stringify(message.item);
                        data = any_1.Any.create({ type_url: "type.googleapis.com/openiap.UpdateOneRequest", "value": querys_1.UpdateOneRequest.encode(message).finish() });
                        payload = base_1.Envelope.create({ command: "updateone", data: data });
                        _b = (_a = querys_1.UpdateOneResponse).decode;
                        return [4 /*yield*/, protowrap_1.protowrap.RPC(this.client, payload)];
                    case 1:
                        result = _b.apply(_a, [(_c.sent()).data.value]);
                        return [2 /*return*/, JSON.parse(result.result)];
                }
            });
        });
    };
    openiap.prototype.UpdateDocument = function (options) {
        return __awaiter(this, void 0, void 0, function () {
            var opt, message, data, payload, result, _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        opt = Object.assign(new UpdateDocumentDefaults(), options);
                        message = querys_1.UpdateDocumentRequest.create(opt);
                        if (typeof message.document == "object")
                            message.document = this.stringify(message.document);
                        if (typeof message.query == "object")
                            message.query = this.stringify(message.query);
                        data = any_1.Any.create({ type_url: "type.googleapis.com/openiap.UpdateDocumentRequest", "value": querys_1.UpdateDocumentRequest.encode(message).finish() });
                        payload = base_1.Envelope.create({ command: "updatedocument", data: data, jwt: opt.jwt });
                        _b = (_a = querys_1.UpdateDocumentResponse).decode;
                        return [4 /*yield*/, protowrap_1.protowrap.RPC(this.client, payload)];
                    case 1:
                        result = _b.apply(_a, [(_c.sent()).data.value]);
                        return [2 /*return*/, result.opresult];
                }
            });
        });
    };
    openiap.prototype.InsertOrUpdateOne = function (options) {
        return __awaiter(this, void 0, void 0, function () {
            var opt, message, data, payload, result, _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        opt = Object.assign(new InsertOrUpdateOneDefaults(), options);
                        message = querys_1.InsertOrUpdateOneRequest.create(opt);
                        if (typeof message.item == "object")
                            message.item = JSON.stringify(message.item);
                        data = any_1.Any.create({ type_url: "type.googleapis.com/openiap.InsertOrUpdateOneRequest", "value": querys_1.InsertOrUpdateOneRequest.encode(message).finish() });
                        payload = base_1.Envelope.create({ command: "insertorupdateone", data: data, jwt: opt.jwt });
                        _b = (_a = querys_1.InsertOrUpdateOneResponse).decode;
                        return [4 /*yield*/, protowrap_1.protowrap.RPC(this.client, payload)];
                    case 1:
                        result = _b.apply(_a, [(_c.sent()).data.value]);
                        return [2 /*return*/, JSON.parse(result.result)];
                }
            });
        });
    };
    openiap.prototype.InsertOrUpdateMany = function (options) {
        return __awaiter(this, void 0, void 0, function () {
            var opt, message, data, payload, result, _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        opt = Object.assign(new InsertOrUpdateManyDefaults(), options);
                        message = querys_1.InsertOrUpdateManyRequest.create(opt);
                        if (typeof message.items == "object")
                            message.items = JSON.stringify(message.items);
                        data = any_1.Any.create({ type_url: "type.googleapis.com/openiap.InsertOrUpdateManyRequest", "value": querys_1.InsertOrUpdateManyRequest.encode(message).finish() });
                        payload = base_1.Envelope.create({ command: "insertorupdatemany", data: data, jwt: opt.jwt });
                        _b = (_a = querys_1.InsertOrUpdateManyResponse).decode;
                        return [4 /*yield*/, protowrap_1.protowrap.RPC(this.client, payload)];
                    case 1:
                        result = _b.apply(_a, [(_c.sent()).data.value]);
                        return [2 /*return*/, JSON.parse(result.results)];
                }
            });
        });
    };
    openiap.prototype.DeleteOne = function (options) {
        return __awaiter(this, void 0, void 0, function () {
            var opt, message, data, payload, result, _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        opt = Object.assign(new DeleteOneDefaults(), options);
                        message = querys_1.DeleteOneRequest.create(opt);
                        data = any_1.Any.create({ type_url: "type.googleapis.com/openiap.DeleteOneRequest", "value": querys_1.DeleteOneRequest.encode(message).finish() });
                        payload = base_1.Envelope.create({ command: "deleteone", data: data, jwt: opt.jwt });
                        _b = (_a = querys_1.DeleteOneResponse).decode;
                        return [4 /*yield*/, protowrap_1.protowrap.RPC(this.client, payload)];
                    case 1:
                        result = _b.apply(_a, [(_c.sent()).data.value]);
                        return [2 /*return*/, result.affectedrows];
                }
            });
        });
    };
    openiap.prototype.DeleteMany = function (options) {
        return __awaiter(this, void 0, void 0, function () {
            var opt, message, data, payload, result, _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        opt = Object.assign(new DeleteManyDefaults(), options);
                        message = querys_1.DeleteManyRequest.create(opt);
                        if (typeof message.query == "object")
                            message.query = this.stringify(message.query);
                        data = any_1.Any.create({ type_url: "type.googleapis.com/openiap.DeleteManyRequest", "value": querys_1.DeleteManyRequest.encode(message).finish() });
                        payload = base_1.Envelope.create({ command: "deletemany", data: data });
                        _b = (_a = querys_1.DeleteManyResponse).decode;
                        return [4 /*yield*/, protowrap_1.protowrap.RPC(this.client, payload)];
                    case 1:
                        result = _b.apply(_a, [(_c.sent()).data.value]);
                        return [2 /*return*/, result.affectedrows];
                }
            });
        });
    };
    openiap.prototype.Watch = function (options, callback) {
        return __awaiter(this, void 0, void 0, function () {
            var opt, i, element, message, data, payload, result, _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        if (!callback)
                            return [2 /*return*/, ""];
                        opt = Object.assign(new WatchDefaults(), options);
                        if (opt.paths) {
                            if (Array.isArray(opt.paths)) {
                                for (i = 0; i < opt.paths.length; i++) {
                                    element = opt.paths[i];
                                    if (element != null && typeof element !== "string")
                                        opt.paths[i] = JSON.stringify(element);
                                }
                            }
                        }
                        message = watch_1.WatchRequest.create(opt);
                        data = any_1.Any.create({ type_url: "type.googleapis.com/openiap.WatchRequest", "value": watch_1.WatchRequest.encode(message).finish() });
                        payload = base_1.Envelope.create({ command: "watch", data: data, jwt: opt.jwt });
                        _b = (_a = watch_1.WatchResponse).decode;
                        return [4 /*yield*/, protowrap_1.protowrap.RPC(this.client, payload)];
                    case 1:
                        result = _b.apply(_a, [(_c.sent()).data.value]);
                        if (result.id && result.id != "") {
                            this.watchids[result.id] = callback;
                        }
                        return [2 /*return*/, result.id];
                }
            });
        });
    };
    openiap.prototype.UnWatch = function (options) {
        return __awaiter(this, void 0, void 0, function () {
            var opt, message, data, payload, result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        opt = Object.assign(new UnWatchDefaults(), options);
                        delete this.watchids[opt.id];
                        message = watch_1.UnWatchRequest.create(opt);
                        data = any_1.Any.create({ type_url: "type.googleapis.com/openiap.UnWatchRequest", "value": watch_1.UnWatchRequest.encode(message).finish() });
                        payload = base_1.Envelope.create({ command: "unwatch", data: data });
                        return [4 /*yield*/, protowrap_1.protowrap.RPC(this.client, payload)];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    openiap.prototype.GetElement = function (xpath) {
        return __awaiter(this, void 0, void 0, function () {
            var message, data, payload, result, _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        message = base_1.GetElementRequest.create({ xpath: xpath });
                        data = any_1.Any.create({ type_url: "type.googleapis.com/openiap.GetElementRequest", "value": base_1.GetElementRequest.encode(message).finish() });
                        payload = base_1.Envelope.create({ command: "getelement", data: data });
                        _b = (_a = base_1.GetElementResponse).decode;
                        return [4 /*yield*/, protowrap_1.protowrap.RPC(this.client, payload)];
                    case 1:
                        result = _b.apply(_a, [(_c.sent()).data.value]);
                        return [2 /*return*/, result.xpath];
                }
            });
        });
    };
    openiap.prototype.DownloadFile = function (options) {
        return __awaiter(this, void 0, void 0, function () {
            var opt;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        opt = Object.assign(new DownloadFileDefaults(), options);
                        return [4 /*yield*/, protowrap_1.protowrap.DownloadFile(this.client, opt.id, opt.collectionname, opt.filename)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    openiap.prototype.UploadFile = function (filename, mimetype, content) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, protowrap_1.protowrap.UploadFile(this.client, filename, mimetype, content)];
            });
        });
    };
    openiap.prototype.RegisterQueue = function (options, callback) {
        return __awaiter(this, void 0, void 0, function () {
            var opt, message, data, payload, result, _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        if (!callback)
                            return [2 /*return*/, ""];
                        opt = Object.assign(new RegisterQueueDefaults(), options);
                        message = queues_1.RegisterQueueRequest.create(opt);
                        data = any_1.Any.create({ type_url: "type.googleapis.com/openiap.RegisterQueueRequest", "value": queues_1.RegisterQueueRequest.encode(message).finish() });
                        payload = base_1.Envelope.create({ command: "registerqueue", data: data, jwt: opt.jwt });
                        if (opt.queuename && opt.queuename != "")
                            this.queues[opt.queuename] = callback;
                        _b = (_a = queues_1.RegisterQueueResponse).decode;
                        return [4 /*yield*/, protowrap_1.protowrap.RPC(this.client, payload)];
                    case 1:
                        result = _b.apply(_a, [(_c.sent()).data.value]);
                        if (this.defaltqueue == "" && (opt.queuename == "" || opt.queuename == null))
                            this.defaltqueue = result.queuename;
                        if (result.queuename != null && result.queuename != "" && result.queuename != opt.queuename) {
                            this.queues[result.queuename] = callback;
                            delete this.queues[opt.queuename];
                        }
                        return [2 /*return*/, result.queuename];
                }
            });
        });
    };
    openiap.prototype.RegisterExchange = function (options, callback) {
        return __awaiter(this, void 0, void 0, function () {
            var opt, message, data, payload, result, _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        if (!callback)
                            return [2 /*return*/, ""];
                        opt = Object.assign(new RegisterExchangeDefaults(), options);
                        message = queues_1.RegisterExchangeRequest.create(opt);
                        data = any_1.Any.create({ type_url: "type.googleapis.com/openiap.RegisterExchangeRequest", "value": queues_1.RegisterExchangeRequest.encode(message).finish() });
                        payload = base_1.Envelope.create({ command: "registerexchange", data: data, jwt: opt.jwt });
                        _b = (_a = queues_1.RegisterExchangeResponse).decode;
                        return [4 /*yield*/, protowrap_1.protowrap.RPC(this.client, payload)];
                    case 1:
                        result = _b.apply(_a, [(_c.sent()).data.value]);
                        if (result.queuename && result.queuename != "" && opt.addqueue) {
                            this.queues[result.queuename] = callback;
                        }
                        return [2 /*return*/, result.queuename];
                }
            });
        });
    };
    openiap.prototype.UnRegisterQueue = function (options) {
        return __awaiter(this, void 0, void 0, function () {
            var opt, message, data, payload, result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        opt = Object.assign(new UnRegisterQueueDefaults(), options);
                        message = queues_1.UnRegisterQueueRequest.create(opt);
                        data = any_1.Any.create({ type_url: "type.googleapis.com/openiap.UnRegisterQueueRequest", "value": queues_1.UnRegisterQueueRequest.encode(message).finish() });
                        payload = base_1.Envelope.create({ command: "unregisterqueue", data: data, jwt: opt.jwt });
                        return [4 /*yield*/, protowrap_1.protowrap.RPC(this.client, payload)];
                    case 1:
                        result = _a.sent();
                        if (this.defaltqueue == opt.queuename)
                            this.defaltqueue = "";
                        delete this.queues[opt.queuename];
                        return [2 /*return*/];
                }
            });
        });
    };
    openiap.prototype.QueueMessage = function (options, rpc) {
        if (rpc === void 0) { rpc = false; }
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) { return __awaiter(_this, void 0, void 0, function () {
                        var opt, _a, message, data, payload, result, error_3;
                        return __generator(this, function (_b) {
                            switch (_b.label) {
                                case 0:
                                    _b.trys.push([0, 5, , 6]);
                                    opt = Object.assign(new QueueMessageDefaults(), options);
                                    if (typeof opt.data !== 'string')
                                        opt.data = JSON.stringify(opt.data);
                                    if (!rpc) return [3 /*break*/, 3];
                                    if (!(this.defaltqueue == "")) return [3 /*break*/, 2];
                                    _a = this;
                                    return [4 /*yield*/, this.RegisterQueue({ queuename: "" }, function (msg, user) {
                                            if (msg && msg.correlationId) {
                                                warn("temp queue received message for unknown receiver with correlationId " + msg.correlationId);
                                            }
                                            else {
                                                warn("temp queue received message for unknown receiver");
                                            }
                                        })];
                                case 1:
                                    _a.defaltqueue = _b.sent();
                                    info("Auto registered reply queue " + this.defaltqueue);
                                    _b.label = 2;
                                case 2:
                                    opt.correlationId = openiap.GetUniqueIdentifier();
                                    opt.replyto = this.defaltqueue;
                                    this.queuecallbacks[opt.correlationId] = function (message, user) {
                                        resolve(message);
                                    };
                                    _b.label = 3;
                                case 3:
                                    message = queues_1.QueueMessageRequest.create(opt);
                                    data = any_1.Any.create({ type_url: "type.googleapis.com/openiap.QueueMessageRequest", "value": queues_1.QueueMessageRequest.encode(message).finish() });
                                    payload = base_1.Envelope.create({ command: "queuemessage", data: data, jwt: opt.jwt });
                                    return [4 /*yield*/, protowrap_1.protowrap.RPC(this.client, payload)];
                                case 4:
                                    result = _b.sent();
                                    if (!rpc)
                                        resolve(null);
                                    return [3 /*break*/, 6];
                                case 5:
                                    error_3 = _b.sent();
                                    reject(error_3);
                                    return [3 /*break*/, 6];
                                case 6: return [2 /*return*/];
                            }
                        });
                    }); })];
            });
        });
    };
    openiap.prototype.PushWorkitem = function (options) {
        return __awaiter(this, void 0, void 0, function () {
            var opt, message, data, payload, result, _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        opt = Object.assign(new PushWorkitemDefaults(), options);
                        if (typeof opt.payload !== 'string')
                            opt.payload = JSON.stringify(opt.payload);
                        message = workitems_1.PushWorkitemRequest.create(opt);
                        data = any_1.Any.create({ type_url: "type.googleapis.com/openiap.PushWorkitemRequest", "value": workitems_1.PushWorkitemRequest.encode(message).finish() });
                        payload = base_1.Envelope.create({ command: "pushworkitem", data: data, jwt: opt.jwt });
                        _b = (_a = workitems_1.PushWorkitemResponse).decode;
                        return [4 /*yield*/, protowrap_1.protowrap.RPC(this.client, payload)];
                    case 1:
                        result = _b.apply(_a, [(_c.sent()).data.value]);
                        return [2 /*return*/, result.workitem];
                }
            });
        });
    };
    openiap.prototype.PushWorkitems = function (options) {
        return __awaiter(this, void 0, void 0, function () {
            var opt, message, data, payload, result, _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        opt = Object.assign(new PushWorkitemsDefaults(), options);
                        opt.items.forEach(function (wi) {
                            if (typeof wi.payload !== 'string')
                                wi.payload = JSON.stringify(wi.payload);
                        });
                        message = workitems_1.PushWorkitemsRequest.create(opt);
                        data = any_1.Any.create({ type_url: "type.googleapis.com/openiap.PushWorkitemsRequest", "value": workitems_1.PushWorkitemsRequest.encode(message).finish() });
                        payload = base_1.Envelope.create({ command: "pushworkitems", data: data, jwt: opt.jwt });
                        _b = (_a = workitems_1.PushWorkitemsResponse).decode;
                        return [4 /*yield*/, protowrap_1.protowrap.RPC(this.client, payload)];
                    case 1:
                        result = _b.apply(_a, [(_c.sent()).data.value]);
                        return [2 /*return*/, result.workitems];
                }
            });
        });
    };
    openiap.prototype.PopWorkitem = function (options) {
        return __awaiter(this, void 0, void 0, function () {
            var opt, message, data, payload, result, _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        opt = Object.assign(new PopWorkitemDefaults(), options);
                        message = workitems_1.PopWorkitemRequest.create(opt);
                        data = any_1.Any.create({ type_url: "type.googleapis.com/openiap.PopWorkitemRequest", "value": workitems_1.PopWorkitemRequest.encode(message).finish() });
                        payload = base_1.Envelope.create({ command: "popworkitem", data: data, jwt: opt.jwt });
                        _b = (_a = workitems_1.PopWorkitemResponse).decode;
                        return [4 /*yield*/, protowrap_1.protowrap.RPC(this.client, payload)];
                    case 1:
                        result = _b.apply(_a, [(_c.sent()).data.value]);
                        return [2 /*return*/, result.workitem];
                }
            });
        });
    };
    openiap.prototype.UpdateWorkitem = function (options) {
        return __awaiter(this, void 0, void 0, function () {
            var opt, message, data, payload, result, _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        opt = Object.assign(new UpdateWorkitemDefaults(), options);
                        if (typeof opt.workitem.payload !== 'string')
                            opt.workitem.payload = JSON.stringify(opt.workitem.payload);
                        message = workitems_1.UpdateWorkitemRequest.create(opt);
                        data = any_1.Any.create({ type_url: "type.googleapis.com/openiap.UpdateWorkitemRequest", "value": workitems_1.UpdateWorkitemRequest.encode(message).finish() });
                        payload = base_1.Envelope.create({ command: "updateworkitem", data: data, jwt: opt.jwt });
                        _b = (_a = workitems_1.UpdateWorkitemResponse).decode;
                        return [4 /*yield*/, protowrap_1.protowrap.RPC(this.client, payload)];
                    case 1:
                        result = _b.apply(_a, [(_c.sent()).data.value]);
                        return [2 /*return*/, result.workitem];
                }
            });
        });
    };
    openiap.prototype.DeleteWorkitem = function (options) {
        return __awaiter(this, void 0, void 0, function () {
            var opt, message, data, payload, result, _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        opt = Object.assign(new DeleteWorkitemDefaults(), options);
                        message = workitems_1.DeleteWorkitemRequest.create(opt);
                        data = any_1.Any.create({ type_url: "type.googleapis.com/openiap.DeleteWorkitemRequest", "value": workitems_1.DeleteWorkitemRequest.encode(message).finish() });
                        payload = base_1.Envelope.create({ command: "deleteworkitem", data: data, jwt: opt.jwt });
                        _b = (_a = workitems_1.DeleteWorkitemResponse).decode;
                        return [4 /*yield*/, protowrap_1.protowrap.RPC(this.client, payload)];
                    case 1:
                        result = _b.apply(_a, [(_c.sent()).data.value]);
                        return [2 /*return*/];
                }
            });
        });
    };
    openiap.prototype.CustomCommand = function (options) {
        return __awaiter(this, void 0, void 0, function () {
            var opt, message, data, payload, result, _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        opt = Object.assign(new CustomCommandDefaults(), options);
                        message = base_1.CustomCommandRequest.create(opt);
                        data = any_1.Any.create({ type_url: "type.googleapis.com/openiap.CustomCommand", "value": base_1.CustomCommandRequest.encode(message).finish() });
                        payload = base_1.Envelope.create({ command: "customcommand", data: data, jwt: opt.jwt });
                        _b = (_a = base_1.CustomCommandResponse).decode;
                        return [4 /*yield*/, protowrap_1.protowrap.RPC(this.client, payload)];
                    case 1:
                        result = _b.apply(_a, [(_c.sent()).data.value]);
                        return [2 /*return*/, result.result];
                }
            });
        });
    };
    openiap.prototype.CreateWorkflowInstance = function (options) {
        return __awaiter(this, void 0, void 0, function () {
            var opt, message, data, payload, result, _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        opt = Object.assign(new CreateWorkflowInstanceDefaults(), options);
                        if (opt.data != null && typeof opt.data !== "string")
                            opt.data = JSON.stringify(opt.data);
                        message = queues_1.CreateWorkflowInstanceRequest.create(opt);
                        data = any_1.Any.create({ type_url: "type.googleapis.com/openiap.CreateWorkflowInstance", "value": queues_1.CreateWorkflowInstanceRequest.encode(message).finish() });
                        payload = base_1.Envelope.create({ command: "createworkflowinstance", data: data, jwt: opt.jwt });
                        _b = (_a = queues_1.CreateWorkflowInstanceResponse).decode;
                        return [4 /*yield*/, protowrap_1.protowrap.RPC(this.client, payload)];
                    case 1:
                        result = _b.apply(_a, [(_c.sent()).data.value]);
                        return [2 /*return*/, result.instanceid];
                }
            });
        });
    };
    return openiap;
}());
exports.openiap = openiap;
var SigninDefaults = /** @class */ (function () {
    function SigninDefaults() {
        this.ping = true;
        this.validateonly = false;
        this.agent = "nodeagent";
        this.version = "0.0.1";
        this.longtoken = false;
    }
    return SigninDefaults;
}());
var ListCollectionsDefaults = /** @class */ (function () {
    function ListCollectionsDefaults() {
        this.includehist = false;
    }
    return ListCollectionsDefaults;
}());
var CreateCollectionDefaults = /** @class */ (function () {
    function CreateCollectionDefaults() {
    }
    return CreateCollectionDefaults;
}());
var DropCollectionDefaults = /** @class */ (function () {
    function DropCollectionDefaults() {
    }
    return DropCollectionDefaults;
}());
var QueryDefaults = /** @class */ (function () {
    function QueryDefaults() {
        this.collectionname = "entities";
        this.query = {};
        this.top = 100;
        this.skip = 0;
        this.explain = false;
    }
    return QueryDefaults;
}());
var GetDocumentVersionDefaults = /** @class */ (function () {
    function GetDocumentVersionDefaults() {
        this.collectionname = "entities";
        this.version = 0; // latest
        this.decrypt = true;
    }
    return GetDocumentVersionDefaults;
}());
var CountDefaults = /** @class */ (function () {
    function CountDefaults() {
        this.collectionname = "entities";
        this.query = {};
    }
    return CountDefaults;
}());
var DistinctDefaults = /** @class */ (function () {
    function DistinctDefaults() {
        this.collectionname = "entities";
        this.query = {};
    }
    return DistinctDefaults;
}());
var AggregateDefaults = /** @class */ (function () {
    function AggregateDefaults() {
        this.collectionname = "entities";
        this.aggregates = [];
        this.explain = false;
    }
    return AggregateDefaults;
}());
var InsertOneDefaults = /** @class */ (function () {
    function InsertOneDefaults() {
        this.collectionname = "entities";
    }
    return InsertOneDefaults;
}());
var InsertManyDefaults = /** @class */ (function () {
    function InsertManyDefaults() {
        this.collectionname = "entities";
    }
    return InsertManyDefaults;
}());
var UpdateOneDefaults = /** @class */ (function () {
    function UpdateOneDefaults() {
        this.collectionname = "entities";
    }
    return UpdateOneDefaults;
}());
var UpdateDocumentDefaults = /** @class */ (function () {
    function UpdateDocumentDefaults() {
        this.collectionname = "entities";
    }
    return UpdateDocumentDefaults;
}());
var InsertOrUpdateOneDefaults = /** @class */ (function () {
    function InsertOrUpdateOneDefaults() {
        this.collectionname = "entities";
    }
    return InsertOrUpdateOneDefaults;
}());
var InsertOrUpdateManyDefaults = /** @class */ (function () {
    function InsertOrUpdateManyDefaults() {
        this.collectionname = "entities";
        this.skipresults = true;
    }
    return InsertOrUpdateManyDefaults;
}());
var DeleteOneDefaults = /** @class */ (function () {
    function DeleteOneDefaults() {
        this.collectionname = "entities";
    }
    return DeleteOneDefaults;
}());
var DeleteManyDefaults = /** @class */ (function () {
    function DeleteManyDefaults() {
        this.collectionname = "entities";
    }
    return DeleteManyDefaults;
}());
var WatchDefaults = /** @class */ (function () {
    function WatchDefaults() {
        this.collectionname = "entities";
    }
    return WatchDefaults;
}());
var UnWatchDefaults = /** @class */ (function () {
    function UnWatchDefaults() {
    }
    return UnWatchDefaults;
}());
var DownloadFileDefaults = /** @class */ (function () {
    function DownloadFileDefaults() {
    }
    return DownloadFileDefaults;
}());
var UploadFileDefaults = /** @class */ (function () {
    function UploadFileDefaults() {
    }
    return UploadFileDefaults;
}());
var RegisterQueueDefaults = /** @class */ (function () {
    function RegisterQueueDefaults() {
    }
    return RegisterQueueDefaults;
}());
var RegisterExchangeDefaults = /** @class */ (function () {
    function RegisterExchangeDefaults() {
        this.algorithm = "fanout";
        this.routingkey = "";
        this.addqueue = true;
    }
    return RegisterExchangeDefaults;
}());
var UnRegisterQueueDefaults = /** @class */ (function () {
    function UnRegisterQueueDefaults() {
    }
    return UnRegisterQueueDefaults;
}());
var QueueMessageDefaults = /** @class */ (function () {
    function QueueMessageDefaults() {
        this.striptoken = false;
    }
    return QueueMessageDefaults;
}());
var PushWorkitemDefaults = /** @class */ (function () {
    function PushWorkitemDefaults() {
        this.priority = 2;
    }
    return PushWorkitemDefaults;
}());
var PushWorkitemsDefaults = /** @class */ (function () {
    function PushWorkitemsDefaults() {
        this.priority = 2;
    }
    return PushWorkitemsDefaults;
}());
var PopWorkitemDefaults = /** @class */ (function () {
    function PopWorkitemDefaults() {
        this.includefiles = true;
        this.compressed = true;
    }
    return PopWorkitemDefaults;
}());
var UpdateWorkitemDefaults = /** @class */ (function () {
    function UpdateWorkitemDefaults() {
        this.ignoremaxretries = false;
    }
    return UpdateWorkitemDefaults;
}());
var DeleteWorkitemDefaults = /** @class */ (function () {
    function DeleteWorkitemDefaults() {
    }
    return DeleteWorkitemDefaults;
}());
var CustomCommandDefaults = /** @class */ (function () {
    function CustomCommandDefaults() {
    }
    return CustomCommandDefaults;
}());
var CreateWorkflowInstanceDefaults = /** @class */ (function () {
    function CreateWorkflowInstanceDefaults() {
        this.initialrun = false;
    }
    return CreateWorkflowInstanceDefaults;
}());
//# sourceMappingURL=openiap.js.map