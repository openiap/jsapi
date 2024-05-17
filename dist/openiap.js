import { protowrap } from "./protowrap.js";
import { config } from "./config.js";
const { info, err, warn } = config;
import { Any } from "./proto/google/protobuf/any.js";
import { SigninResponse, SigninRequest, Envelope, GetElementRequest, GetElementResponse, CustomCommandRequest, CustomCommandResponse, PingRequest, RefreshToken } from "./proto/base.js";
import { ListCollectionsRequest, CreateCollectionRequest, ListCollectionsResponse, DropCollectionRequest, QueryRequest, QueryResponse, GetDocumentVersionRequest, GetDocumentVersionResponse, CountRequest, CountResponse, AggregateRequest, AggregateResponse, InsertOneRequest, InsertOneResponse, InsertManyRequest, InsertManyResponse, UpdateOneRequest, UpdateOneResponse, UpdateDocumentRequest, UpdateDocumentResponse, InsertOrUpdateOneRequest, InsertOrUpdateOneResponse, InsertOrUpdateManyRequest, InsertOrUpdateManyResponse, DeleteOneRequest, DeleteOneResponse, DeleteManyRequest, DeleteManyResponse, DistinctRequest, DistinctResponse } from "./proto/querys.js";
import { RegisterQueueRequest, RegisterQueueResponse, RegisterExchangeRequest, RegisterExchangeResponse, UnRegisterQueueRequest, QueueMessageRequest, CreateWorkflowInstanceRequest, CreateWorkflowInstanceResponse } from "./proto/queues.js";
import { WatchRequest, WatchResponse, UnWatchRequest, WatchEvent } from "./proto/watch.js";
import { PushWorkitemRequest, PushWorkitemResponse, PopWorkitemRequest, PopWorkitemResponse, UpdateWorkitemRequest, UpdateWorkitemResponse, DeleteWorkitemRequest, DeleteWorkitemResponse, PushWorkitemsRequest, PushWorkitemsResponse } from "./proto/workitems.js";
export class openiap {
    url;
    jwt;
    client;
    reconnectms = 100;
    signedin = false;
    constructor(url, jwt) {
        this.url = url;
        this.jwt = jwt;
    }
    loginresolve;
    flowconfig = {};
    get connected() {
        return this.client.connected;
    }
    async connect(first) {
        return new Promise((resolve) => {
            this.client = protowrap.connect(this.url, this.cliOnConnected.bind(this), this.cliOnDisconnected.bind(this), this.cliOnMessage.bind(this));
            if (this.url == null || this.url == "") {
                if (this.loginresolve != null) {
                    this.loginresolve(null);
                    this.loginresolve = null;
                }
                return;
            }
            if (this.loginresolve == null)
                this.loginresolve = resolve;
            setTimeout(() => {
                try {
                    // this.client.onConnected = this.cliOnConnected.bind(this);
                    // this.client.onDisconnected = this.cliOnDisconnected.bind(this);
                    // this.client.onMessage = this.cliOnMessage.bind(this);
                }
                catch (error) {
                    this.cliOnDisconnected(this.client, error);
                }
            }, this.reconnectms);
        });
    }
    Close() {
        this.signedin = false;
        // if (this.client && this.client.destroy) this.client.destroy();
        // if (this.client && this.client.close) this.client.close();
        // if (this.client && this.client.terminate) this.client.terminate();
        if (this.client && this.client.Close)
            this.client.Close();
    }
    async onConnected(client) {
    }
    async onSignedIn(client) {
    }
    async cliOnConnected(client) {
        var u = new URL(this.url);
        info("Connected to server " + u.hostname);
        this.reconnectms = 100;
        var _jwt = "";
        if (client.jwt != null && client.jwt != "")
            _jwt = client.jwt;
        if (this.jwt != null && this.jwt != "")
            _jwt = this.jwt;
        var _username = u.username;
        var _password = u.password;
        if (_jwt == null)
            _jwt = "";
        if (_username == null)
            _username = "";
        if (_password == null)
            _password = "";
        if (_username != "" && _password != "") {
            var user = await this.Signin({ username: _username, password: _password, ping: config.settings.DoPing });
            if (this.loginresolve != null) {
                this.loginresolve(user);
                this.loginresolve = null;
            }
        }
        else if (_jwt != "") {
            var user = await this.Signin({ jwt: _jwt, ping: config.settings.DoPing });
            if (this.loginresolve != null) {
                this.loginresolve(user);
                this.loginresolve = null;
            }
        }
        try {
            this.reconnectms = 100;
            await this.onConnected(client);
        }
        catch (error) {
            err(error);
        }
        if (this.loginresolve != null) {
            this.loginresolve(null);
            this.loginresolve = null;
        }
    }
    async onDisconnected(client, error) {
    }
    cliOnDisconnected(client, error) {
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
    }
    onWatch(id, operation, document) {
        // info("watchevent " + operation + " " + document._id);
    }
    static GetUniqueIdentifier() {
        return Math.random().toString(36).substring(2, 11);
    }
    // async onMessage(client: client, message: Envelope): Promise<any> {
    // }
    async cliOnMessage(client, message) {
        const [command, BLAHBLAH, reply] = protowrap.unpack(message);
        if (command == "ping") {
            reply.command = "pong";
            return reply;
        }
        else if (message.command == "refreshtoken") {
            let rt = RefreshToken.decode(message.data.value);
            this.client.jwt = rt.jwt;
            this.client.user = rt.user;
            return null;
        }
        else if (message.command == "watchevent") {
            // let we: WatchEvent = BLAHBLAH;
            let we = WatchEvent.decode(message.data.value);
            if (this.watchids[we.id]) {
                var doc = we.document;
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
        }
        else if (message.command == "queueevent") {
            let we = BLAHBLAH;
            if (this.queuecallbacks[we.correlationId] && (we.replyto == "" || we.replyto == null)) {
                var data = JSON.parse(we.data);
                delete data.spanId;
                delete data.traceId;
                const user = data.__user;
                delete data.__jwt;
                delete data.__user;
                this.queuecallbacks[we.correlationId](data, user);
                delete this.queuecallbacks[we.correlationId];
            }
            else if (this.queues[we.queuename]) {
                try {
                    var data = JSON.parse(we.data);
                    if (typeof data == "string") {
                        data = JSON.parse(data);
                    }
                    var user = null;
                    var jwt = null;
                    if (data.__jwt != null)
                        jwt = data.__jwt;
                    if (data.__user != null)
                        user = data.__user;
                    delete data.__jwt;
                    delete data.__user;
                    var reply2 = await this.queues[we.queuename](we, data, user, jwt);
                    if (reply2 != null) {
                        await this.QueueMessage({ correlationId: we.correlationId, queuename: we.replyto, data: reply2, striptoken: true }, false);
                    }
                }
                catch (error) {
                    err(error);
                }
            }
            else {
                warn("Got queueevent for unknown queue " + we.queuename);
            }
        }
        else {
            info("Received unknown message from server: ");
            console.log("command", command, "BLAHBLAH", BLAHBLAH, "reply", reply);
        }
        return reply;
    }
    async Ping() {
        let message = PingRequest.create();
        const data = Any.create({ "typeUrl": "openiap.ping", "value": PingRequest.encode(message).finish() });
        const payload = Envelope.create({ command: "ping", data });
        const result = await protowrap.RPC(this.client, payload);
        const [_command, BLAHBLAH, _reply] = protowrap.unpack(result);
    }
    stringify(object) {
        return JSON.stringify(object, (key, value) => {
            if (value == null)
                return value;
            const t = typeof value;
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
    }
    isdoingsignin = false;
    async Signin(options) {
        this.isdoingsignin = true;
        try {
            const opt = Object.assign(new SigninDefaults(), options);
            let message = SigninRequest.create({ username: opt.username, password: opt.password, ping: opt.ping, longtoken: opt.longtoken });
            if (opt.jwt != null && opt.jwt != "") {
                message = SigninRequest.create({ jwt: opt.jwt, ping: opt.ping });
            }
            const data = Any.create({ type_url: "type.googleapis.com/openiap.SigninRequest", value: SigninRequest.encode(message).finish() });
            const payload = Envelope.create({ command: "signin", data, jwt: opt.jwt });
            const result = SigninResponse.decode((await protowrap.RPC(this.client, payload)).data.value);
            if (options.validateonly) {
                info("Validated " + result.user.name);
                return result;
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
            try {
                this.onSignedIn(this.client);
            }
            catch (error) {
            }
            return result;
        }
        finally {
            this.isdoingsignin = false;
        }
    }
    async ListCollections(options = {}) {
        const opt = Object.assign(new ListCollectionsDefaults(), options);
        let message = ListCollectionsRequest.create(opt);
        const data = Any.create({ type_url: "type.googleapis.com/openiap.ListCollectionsRequest", "value": ListCollectionsRequest.encode(message).finish() });
        const payload = Envelope.create({ command: "listcollections", data, jwt: opt.jwt });
        const result = ListCollectionsResponse.decode((await protowrap.RPC(this.client, payload)).data.value);
        return JSON.parse(result.results);
    }
    /**
 * Create a collection removing all data from the collection. Only users with admin rights can Create collections.
 * @param options {@link CreateCollectionOptions}
 * @param priority Message priority, the higher the number the higher the priority. Default is 2, 3 or higher requeires updates to server configuration
 */
    async CreateCollection(options, priority = 2) {
        // if (!this.connected) throw new Error("Not connected to server");
        if (!this.signedin)
            throw new Error("Not signed in to server");
        const opt = Object.assign(new CreateCollectionDefaults(), options);
        let message = CreateCollectionRequest.create(opt);
        const data = Any.create({ type_url: "type.googleapis.com/openiap.CreateCollectionRequest", "value": CreateCollectionRequest.encode(message).finish() });
        const payload = Envelope.create({ command: "createcollection", data, jwt: opt.jwt });
        payload.priority = priority;
        const result = await protowrap.RPC(this.client, payload);
    }
    async DropCollection(options) {
        const opt = Object.assign(new DropCollectionDefaults(), options);
        let message = DropCollectionRequest.create(opt);
        const data = Any.create({ type_url: "type.googleapis.com/openiap.DropCollectionRequest", "value": DropCollectionRequest.encode(message).finish() });
        const payload = Envelope.create({ command: "dropcollection", data, jwt: opt.jwt });
        const result = await protowrap.RPC(this.client, payload);
    }
    async Query(options) {
        const opt = Object.assign(new QueryDefaults(), options);
        let message = QueryRequest.create(opt);
        if (typeof message.query == "object")
            message.query = this.stringify(message.query);
        if (typeof message.orderby == "object")
            message.orderby = this.stringify(message.orderby);
        if (typeof message.projection == "object")
            message.projection = this.stringify(message.projection);
        const data = Any.create({ type_url: "type.googleapis.com/openiap.QueryRequest", "value": QueryRequest.encode(message).finish() });
        const payload = Envelope.create({ command: "query", data });
        const result = QueryResponse.decode((await protowrap.RPC(this.client, payload)).data.value);
        return JSON.parse(result.results);
    }
    async GetDocumentVersion(options) {
        const opt = Object.assign(new GetDocumentVersionDefaults(), options);
        let message = GetDocumentVersionRequest.create(opt);
        const data = Any.create({ type_url: "type.googleapis.com/openiap.GetDocumentVersionRequest", "value": GetDocumentVersionRequest.encode(message).finish() });
        const payload = Envelope.create({ command: "getdocumentversion", data });
        const result = GetDocumentVersionResponse.decode((await protowrap.RPC(this.client, payload)).data.value);
        return JSON.parse(result.result);
    }
    async Count(options) {
        const opt = Object.assign(new CountDefaults(), options);
        let message = CountRequest.create(opt);
        if (typeof message.query == "object")
            message.query = this.stringify(message.query);
        const data = Any.create({ type_url: "type.googleapis.com/openiap.CountRequest", "value": CountRequest.encode(message).finish() });
        const payload = Envelope.create({ command: "count", data, jwt: opt.jwt });
        const result = CountResponse.decode((await protowrap.RPC(this.client, payload)).data.value);
        return result.result;
    }
    async Distinct(options) {
        const opt = Object.assign(new DistinctDefaults(), options);
        let message = DistinctRequest.create(opt);
        if (typeof message.query == "object")
            message.query = this.stringify(message.query);
        const data = Any.create({ type_url: "type.googleapis.com/openiap.DistinctRequest", "value": DistinctRequest.encode(message).finish() });
        const payload = Envelope.create({ command: "distinct", data, jwt: opt.jwt });
        // payload.priority = priority;
        const result = DistinctResponse.decode((await protowrap.RPC(this.client, payload)).data.value);
        return result.results;
    }
    async Aggregate(options) {
        const opt = Object.assign(new AggregateDefaults(), options);
        let message = AggregateRequest.create(opt);
        if (typeof message.aggregates == "object")
            message.aggregates = this.stringify(message.aggregates);
        const data = Any.create({ type_url: "type.googleapis.com/openiap.AggregateRequest", "value": AggregateRequest.encode(message).finish() });
        const payload = Envelope.create({ command: "aggregate", data, jwt: opt.jwt });
        const result = AggregateResponse.decode((await protowrap.RPC(this.client, payload)).data.value);
        return JSON.parse(result.results);
    }
    async InsertOne(options) {
        const opt = Object.assign(new InsertOneDefaults(), options);
        let message = InsertOneRequest.create(opt);
        if (typeof message.item == "object")
            message.item = JSON.stringify(message.item);
        const data = Any.create({ type_url: "type.googleapis.com/openiap.InsertOneRequest", "value": InsertOneRequest.encode(message).finish() });
        const payload = Envelope.create({ command: "insertone", data });
        const result = InsertOneResponse.decode((await protowrap.RPC(this.client, payload)).data.value);
        return JSON.parse(result.result);
    }
    async InsertMany(options) {
        const opt = Object.assign(new InsertManyDefaults(), options);
        let message = InsertManyRequest.create(opt);
        if (typeof message.items == "object")
            message.items = JSON.stringify(message.items);
        const data = Any.create({ type_url: "type.googleapis.com/openiap.InsertManyRequest", "value": InsertManyRequest.encode(message).finish() });
        const payload = Envelope.create({ command: "insertmany", data, jwt: opt.jwt });
        const result = InsertManyResponse.decode((await protowrap.RPC(this.client, payload)).data.value);
        return JSON.parse(result.results);
    }
    async UpdateOne(options) {
        const opt = Object.assign(new UpdateOneDefaults(), options);
        let message = UpdateOneRequest.create(opt);
        if (typeof message.item == "object")
            message.item = JSON.stringify(message.item);
        const data = Any.create({ type_url: "type.googleapis.com/openiap.UpdateOneRequest", "value": UpdateOneRequest.encode(message).finish() });
        const payload = Envelope.create({ command: "updateone", data });
        const result = UpdateOneResponse.decode((await protowrap.RPC(this.client, payload)).data.value);
        return JSON.parse(result.result);
    }
    async UpdateDocument(options) {
        const opt = Object.assign(new UpdateDocumentDefaults(), options);
        let message = UpdateDocumentRequest.create(opt);
        if (typeof message.document == "object")
            message.document = this.stringify(message.document);
        if (typeof message.query == "object")
            message.query = this.stringify(message.query);
        const data = Any.create({ type_url: "type.googleapis.com/openiap.UpdateDocumentRequest", "value": UpdateDocumentRequest.encode(message).finish() });
        const payload = Envelope.create({ command: "updatedocument", data, jwt: opt.jwt });
        const result = UpdateDocumentResponse.decode((await protowrap.RPC(this.client, payload)).data.value);
        return result.opresult;
    }
    async InsertOrUpdateOne(options) {
        const opt = Object.assign(new InsertOrUpdateOneDefaults(), options);
        let message = InsertOrUpdateOneRequest.create(opt);
        if (typeof message.item == "object")
            message.item = JSON.stringify(message.item);
        const data = Any.create({ type_url: "type.googleapis.com/openiap.InsertOrUpdateOneRequest", "value": InsertOrUpdateOneRequest.encode(message).finish() });
        const payload = Envelope.create({ command: "insertorupdateone", data, jwt: opt.jwt });
        const result = InsertOrUpdateOneResponse.decode((await protowrap.RPC(this.client, payload)).data.value);
        return JSON.parse(result.result);
    }
    async InsertOrUpdateMany(options) {
        const opt = Object.assign(new InsertOrUpdateManyDefaults(), options);
        let message = InsertOrUpdateManyRequest.create(opt);
        if (typeof message.items == "object")
            message.items = JSON.stringify(message.items);
        const data = Any.create({ type_url: "type.googleapis.com/openiap.InsertOrUpdateManyRequest", "value": InsertOrUpdateManyRequest.encode(message).finish() });
        const payload = Envelope.create({ command: "insertorupdatemany", data, jwt: opt.jwt });
        const result = InsertOrUpdateManyResponse.decode((await protowrap.RPC(this.client, payload)).data.value);
        return JSON.parse(result.results);
    }
    async DeleteOne(options) {
        const opt = Object.assign(new DeleteOneDefaults(), options);
        let message = DeleteOneRequest.create(opt);
        const data = Any.create({ type_url: "type.googleapis.com/openiap.DeleteOneRequest", "value": DeleteOneRequest.encode(message).finish() });
        const payload = Envelope.create({ command: "deleteone", data, jwt: opt.jwt });
        const result = DeleteOneResponse.decode((await protowrap.RPC(this.client, payload)).data.value);
        return result.affectedrows;
    }
    async DeleteMany(options) {
        const opt = Object.assign(new DeleteManyDefaults(), options);
        let message = DeleteManyRequest.create(opt);
        if (typeof message.query == "object")
            message.query = this.stringify(message.query);
        const data = Any.create({ type_url: "type.googleapis.com/openiap.DeleteManyRequest", "value": DeleteManyRequest.encode(message).finish() });
        const payload = Envelope.create({ command: "deletemany", data });
        const result = DeleteManyResponse.decode((await protowrap.RPC(this.client, payload)).data.value);
        return result.affectedrows;
    }
    watchids = {};
    async Watch(options, callback) {
        if (!callback)
            return "";
        const opt = Object.assign(new WatchDefaults(), options);
        if (opt.paths) {
            if (Array.isArray(opt.paths)) {
                for (let i = 0; i < opt.paths.length; i++) {
                    const element = opt.paths[i];
                    if (element != null && typeof element !== "string")
                        opt.paths[i] = JSON.stringify(element);
                }
            }
        }
        let message = WatchRequest.create(opt);
        const data = Any.create({ type_url: "type.googleapis.com/openiap.WatchRequest", "value": WatchRequest.encode(message).finish() });
        const payload = Envelope.create({ command: "watch", data, jwt: opt.jwt });
        const result = WatchResponse.decode((await protowrap.RPC(this.client, payload)).data.value);
        if (result.id && result.id != "") {
            this.watchids[result.id] = callback;
        }
        return result.id;
    }
    async UnWatch(options) {
        const opt = Object.assign(new UnWatchDefaults(), options);
        delete this.watchids[opt.id];
        let message = UnWatchRequest.create(opt);
        const data = Any.create({ type_url: "type.googleapis.com/openiap.UnWatchRequest", "value": UnWatchRequest.encode(message).finish() });
        const payload = Envelope.create({ command: "unwatch", data });
        const result = await protowrap.RPC(this.client, payload);
    }
    async GetElement(xpath) {
        var message = GetElementRequest.create({ xpath });
        const data = Any.create({ type_url: "type.googleapis.com/openiap.GetElementRequest", "value": GetElementRequest.encode(message).finish() });
        var payload = Envelope.create({ command: "getelement", data });
        const result = GetElementResponse.decode((await protowrap.RPC(this.client, payload)).data.value);
        return result.xpath;
    }
    async DownloadFile(options) {
        const opt = Object.assign(new DownloadFileDefaults(), options);
        return await protowrap.DownloadFile(this.client, opt.id, opt.collectionname, opt.filename);
    }
    async UploadFile(filename, mimetype, content) {
        return protowrap.UploadFile(this.client, filename, mimetype, content);
    }
    queues = {};
    defaltqueue = "";
    async RegisterQueue(options, callback) {
        if (!callback)
            return "";
        const opt = Object.assign(new RegisterQueueDefaults(), options);
        let message = RegisterQueueRequest.create(opt);
        const data = Any.create({ type_url: "type.googleapis.com/openiap.RegisterQueueRequest", "value": RegisterQueueRequest.encode(message).finish() });
        const payload = Envelope.create({ command: "registerqueue", data, jwt: opt.jwt });
        if (opt.queuename && opt.queuename != "")
            this.queues[opt.queuename] = callback;
        const result = RegisterQueueResponse.decode((await protowrap.RPC(this.client, payload)).data.value);
        if (this.defaltqueue == "" && (opt.queuename == "" || opt.queuename == null))
            this.defaltqueue = result.queuename;
        if (result.queuename != null && result.queuename != "" && result.queuename != opt.queuename) {
            this.queues[result.queuename] = callback;
            delete this.queues[opt.queuename];
        }
        return result.queuename;
    }
    async RegisterExchange(options, callback) {
        if (!callback)
            return "";
        const opt = Object.assign(new RegisterExchangeDefaults(), options);
        let message = RegisterExchangeRequest.create(opt);
        const data = Any.create({ type_url: "type.googleapis.com/openiap.RegisterExchangeRequest", "value": RegisterExchangeRequest.encode(message).finish() });
        const payload = Envelope.create({ command: "registerexchange", data, jwt: opt.jwt });
        const result = RegisterExchangeResponse.decode((await protowrap.RPC(this.client, payload)).data.value);
        if (result.queuename && result.queuename != "" && opt.addqueue) {
            this.queues[result.queuename] = callback;
        }
        return result.queuename;
    }
    async UnRegisterQueue(options) {
        const opt = Object.assign(new UnRegisterQueueDefaults(), options);
        let message = UnRegisterQueueRequest.create(opt);
        const data = Any.create({ type_url: "type.googleapis.com/openiap.UnRegisterQueueRequest", "value": UnRegisterQueueRequest.encode(message).finish() });
        const payload = Envelope.create({ command: "unregisterqueue", data, jwt: opt.jwt });
        const result = await protowrap.RPC(this.client, payload);
        if (this.defaltqueue == opt.queuename)
            this.defaltqueue = "";
        delete this.queues[opt.queuename];
    }
    queuecallbacks = {};
    async QueueMessage(options, rpc = false) {
        return new Promise(async (resolve, reject) => {
            try {
                const opt = Object.assign(new QueueMessageDefaults(), options);
                if (typeof opt.data !== 'string')
                    opt.data = JSON.stringify(opt.data);
                if (rpc) {
                    if (this.defaltqueue == "") {
                        this.defaltqueue = await this.RegisterQueue({ queuename: "" }, (msg, user) => {
                            if (msg && msg.correlationId) {
                                warn("temp queue received message for unknown receiver with correlationId " + msg.correlationId);
                            }
                            else {
                                warn("temp queue received message for unknown receiver");
                            }
                        });
                        info("Auto registered reply queue " + this.defaltqueue);
                    }
                    opt.correlationId = openiap.GetUniqueIdentifier();
                    opt.replyto = this.defaltqueue;
                    this.queuecallbacks[opt.correlationId] = (message, user) => {
                        resolve(message);
                    };
                    // info(`Send message with correlationId ${opt.correlationId} to ${opt.queuename}`)
                }
                let message = QueueMessageRequest.create(opt);
                const data = Any.create({ type_url: "type.googleapis.com/openiap.QueueMessageRequest", "value": QueueMessageRequest.encode(message).finish() });
                const payload = Envelope.create({ command: "queuemessage", data, jwt: opt.jwt });
                const result = await protowrap.RPC(this.client, payload);
                if (!rpc)
                    resolve(null);
            }
            catch (error) {
                reject(error);
            }
        });
    }
    async PushWorkitem(options) {
        const opt = Object.assign(new PushWorkitemDefaults(), options);
        if (typeof opt.payload !== 'string')
            opt.payload = JSON.stringify(opt.payload);
        let message = PushWorkitemRequest.create(opt);
        const data = Any.create({ type_url: "type.googleapis.com/openiap.PushWorkitemRequest", "value": PushWorkitemRequest.encode(message).finish() });
        const payload = Envelope.create({ command: "pushworkitem", data, jwt: opt.jwt });
        const result = PushWorkitemResponse.decode((await protowrap.RPC(this.client, payload)).data.value);
        return result.workitem;
    }
    async PushWorkitems(options) {
        const opt = Object.assign(new PushWorkitemsDefaults(), options);
        opt.items.forEach(wi => {
            if (typeof wi.payload !== 'string')
                wi.payload = JSON.stringify(wi.payload);
        });
        let message = PushWorkitemsRequest.create(opt);
        const data = Any.create({ type_url: "type.googleapis.com/openiap.PushWorkitemsRequest", "value": PushWorkitemsRequest.encode(message).finish() });
        const payload = Envelope.create({ command: "pushworkitems", data, jwt: opt.jwt });
        const result = PushWorkitemsResponse.decode((await protowrap.RPC(this.client, payload)).data.value);
        return result.workitems;
    }
    async PopWorkitem(options) {
        const opt = Object.assign(new PopWorkitemDefaults(), options);
        let message = PopWorkitemRequest.create(opt);
        const data = Any.create({ type_url: "type.googleapis.com/openiap.PopWorkitemRequest", "value": PopWorkitemRequest.encode(message).finish() });
        const payload = Envelope.create({ command: "popworkitem", data, jwt: opt.jwt });
        const result = PopWorkitemResponse.decode((await protowrap.RPC(this.client, payload)).data.value);
        return result.workitem;
    }
    async UpdateWorkitem(options) {
        const opt = Object.assign(new UpdateWorkitemDefaults(), options);
        if (typeof opt.workitem.payload !== 'string')
            opt.workitem.payload = JSON.stringify(opt.workitem.payload);
        let message = UpdateWorkitemRequest.create(opt);
        const data = Any.create({ type_url: "type.googleapis.com/openiap.UpdateWorkitemRequest", "value": UpdateWorkitemRequest.encode(message).finish() });
        const payload = Envelope.create({ command: "updateworkitem", data, jwt: opt.jwt });
        const result = UpdateWorkitemResponse.decode((await protowrap.RPC(this.client, payload)).data.value);
        return result.workitem;
    }
    async DeleteWorkitem(options) {
        const opt = Object.assign(new DeleteWorkitemDefaults(), options);
        let message = DeleteWorkitemRequest.create(opt);
        const data = Any.create({ type_url: "type.googleapis.com/openiap.DeleteWorkitemRequest", "value": DeleteWorkitemRequest.encode(message).finish() });
        const payload = Envelope.create({ command: "deleteworkitem", data, jwt: opt.jwt });
        const result = DeleteWorkitemResponse.decode((await protowrap.RPC(this.client, payload)).data.value);
    }
    async CustomCommand(options) {
        const opt = Object.assign(new CustomCommandDefaults(), options);
        let message = CustomCommandRequest.create(opt);
        const data = Any.create({ type_url: "type.googleapis.com/openiap.CustomCommand", "value": CustomCommandRequest.encode(message).finish() });
        const payload = Envelope.create({ command: "customcommand", data, jwt: opt.jwt });
        const result = CustomCommandResponse.decode((await protowrap.RPC(this.client, payload)).data.value);
        return result.result;
    }
    async CreateWorkflowInstance(options) {
        const opt = Object.assign(new CreateWorkflowInstanceDefaults(), options);
        if (opt.data != null && typeof opt.data !== "string")
            opt.data = JSON.stringify(opt.data);
        let message = CreateWorkflowInstanceRequest.create(opt);
        const data = Any.create({ type_url: "type.googleapis.com/openiap.CreateWorkflowInstance", "value": CreateWorkflowInstanceRequest.encode(message).finish() });
        const payload = Envelope.create({ command: "createworkflowinstance", data, jwt: opt.jwt });
        const result = CreateWorkflowInstanceResponse.decode((await protowrap.RPC(this.client, payload)).data.value);
        return result.instanceid;
    }
}
class SigninDefaults {
    ping = true;
    validateonly = false;
    agent = "nodeagent";
    version = "0.0.1";
    longtoken = false;
}
class ListCollectionsDefaults {
    includehist = false;
}
class CreateCollectionDefaults {
}
class DropCollectionDefaults {
}
class QueryDefaults {
    collectionname = "entities";
    query = {};
    top = 100;
    skip = 0;
    explain = false;
}
class GetDocumentVersionDefaults {
    collectionname = "entities";
    version = 0; // latest
    decrypt = true;
}
class CountDefaults {
    collectionname = "entities";
    query = {};
}
class DistinctDefaults {
    collectionname = "entities";
    query = {};
}
class AggregateDefaults {
    collectionname = "entities";
    aggregates = [];
    explain = false;
}
class InsertOneDefaults {
    collectionname = "entities";
}
class InsertManyDefaults {
    collectionname = "entities";
}
class UpdateOneDefaults {
    collectionname = "entities";
}
class UpdateDocumentDefaults {
    collectionname = "entities";
}
class InsertOrUpdateOneDefaults {
    collectionname = "entities";
}
class InsertOrUpdateManyDefaults {
    collectionname = "entities";
    skipresults = true;
}
class DeleteOneDefaults {
    collectionname = "entities";
}
class DeleteManyDefaults {
    collectionname = "entities";
}
class WatchDefaults {
    collectionname = "entities";
}
class UnWatchDefaults {
}
class DownloadFileDefaults {
}
class UploadFileDefaults {
}
class RegisterQueueDefaults {
}
class RegisterExchangeDefaults {
    algorithm = "fanout";
    routingkey = "";
    addqueue = true;
}
class UnRegisterQueueDefaults {
}
class QueueMessageDefaults {
    striptoken = false;
}
class PushWorkitemDefaults {
    priority = 2;
}
class PushWorkitemsDefaults {
    priority = 2;
}
class PopWorkitemDefaults {
    includefiles = true;
    compressed = true;
}
class UpdateWorkitemDefaults {
    ignoremaxretries = false;
}
class DeleteWorkitemDefaults {
}
class CustomCommandDefaults {
}
class CreateWorkflowInstanceDefaults {
    initialrun = false;
}
//# sourceMappingURL=openiap.js.map