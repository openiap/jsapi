import { client } from "./client.js";
import { protowrap } from "./protowrap.js";
import { config } from "./config.js";
const { info, err, warn } = config;
import { Any } from "./proto/google/protobuf/any.js";
import { User, SigninResponse, SigninRequest, Envelope, GetElementRequest, GetElementResponse, DownloadResponse, UploadResponse, CustomCommandRequest, CustomCommandResponse, PingRequest, RefreshToken } from "./proto/base.js";
import { ListCollectionsRequest, CreateCollectionRequest, ListCollectionsResponse, DropCollectionRequest, QueryRequest, QueryResponse, GetDocumentVersionRequest, GetDocumentVersionResponse, CountRequest, CountResponse, AggregateRequest, AggregateResponse, InsertOneRequest, InsertOneResponse, InsertManyRequest, InsertManyResponse, UpdateOneRequest, UpdateOneResponse, UpdateResult, UpdateDocumentRequest, UpdateDocumentResponse, InsertOrUpdateOneRequest, InsertOrUpdateOneResponse, InsertOrUpdateManyRequest, InsertOrUpdateManyResponse, DeleteOneRequest, DeleteOneResponse, DeleteManyRequest, DeleteManyResponse, DistinctRequest, DistinctResponse } from "./proto/querys.js";
import { RegisterQueueRequest, RegisterQueueResponse, RegisterExchangeRequest, RegisterExchangeResponse, UnRegisterQueueRequest, QueueMessageRequest, QueueEvent, CreateWorkflowInstanceRequest, CreateWorkflowInstanceResponse } from "./proto/queues.js";
import { WatchRequest, WatchResponse, UnWatchRequest, WatchEvent } from "./proto/watch.js";
import { Workitem, PushWorkitemRequest, PushWorkitemResponse, PopWorkitemRequest, PopWorkitemResponse, UpdateWorkitemRequest, UpdateWorkitemResponse, DeleteWorkitemRequest, DeleteWorkitemResponse, PushWorkitemsRequest, PushWorkitemsResponse } from "./proto/workitems.js";

export class openiap {
    client: client;
    reconnectms: number = 100;
    public signedin: boolean = false;
    constructor(public url: string, public jwt: string) {
    }
    loginresolve: any;
    public flowconfig: any = {};
    get connected() {
        return this.client.connected;
    }
    async connect(first: boolean) {
        return new Promise<User>((resolve) => {
            this.client = protowrap.connect(this.url, this.cliOnConnected.bind(this), this.cliOnDisconnected.bind(this), this.cliOnMessage.bind(this));
            if(this.url == null || this.url == "") {
                if(this.loginresolve != null) {
                    this.loginresolve(null);
                    this.loginresolve = null;
                }
                return;
            }
            
            if (this.loginresolve == null) this.loginresolve = resolve;
        });
    }
    Close() {
        this.signedin = false;
        // if (this.client && this.client.destroy) this.client.destroy();
        // if (this.client && this.client.close) this.client.close();
        // if (this.client && this.client.terminate) this.client.terminate();
        if (this.client && this.client.Close) this.client.Close();
    }
    async onConnected(client: client) {
    }
    async onSignedIn(client: client) {
    }
    private async cliOnConnected(client: client) {
        var u = new URL(this.url);
        info("Connected to server " + u.hostname);
        this.reconnectms = 100;
        var _jwt = "";
        if (client.jwt != null && client.jwt != "") _jwt = client.jwt;
        if (this.jwt != null && this.jwt != "") _jwt = this.jwt;
        var _username = u.username;
        var _password = u.password;
        if (_jwt == null) _jwt = "";
        if (_username == null) _username = "";
        if (_password == null) _password = "";

        if (_username != "" && _password != "") {
            try {
                var user = await this.Signin({ username: _username, password: _password, ping: config.settings.DoPing })
                if (this.loginresolve != null) {
                    this.loginresolve(user);
                    this.loginresolve = null;
                }
            } catch (error) {
                err(error);
                this.Close();
                return;
            }
        } else if (_jwt != "") {
            try {
                var user = await this.Signin({ jwt: _jwt, ping: config.settings.DoPing })
                if (this.loginresolve != null) {
                    this.loginresolve(user);
                    this.loginresolve = null;
                }
            } catch (error) {
                err(error);
                this.Close();
                return;
            }
        }
        try {
            this.reconnectms = 100;
            await this.onConnected(client);
        } catch (error) {
            err(error)
        }
        if (this.loginresolve != null) {
            this.loginresolve(null);
            this.loginresolve = null;
        }
    }

    async onDisconnected(client: client, error: Error) {
    }
    cliOnDisconnected(client: client, error: Error) {
        this.reconnectms += 100;
        this.signedin = false;
        if (this.reconnectms > 30000) this.reconnectms = 30000;
        var msg: string = "";
        if (error) {
            var message: string = (error.message || error as any);
            if (message && !message.startsWith("Disconnected from server")) {
                err(new Error("Disconnected from server " + message));
            }
        } else {
            info("Disconnected from server");
        }
        try {
            this.onDisconnected(client, error);
        } catch (error) {
            err(error)
        }
        setTimeout(() => {
            this.connect(false);
        }, this.reconnectms);
        
    }
    onWatch(id: string, operation: string, document: any) {
        // info("watchevent " + operation + " " + document._id);
    }
    public static GetUniqueIdentifier(): string {
        return Math.random().toString(36).substring(2, 11);
    }
    // async onMessage(client: client, message: Envelope): Promise<any> {
    // }
    private async cliOnMessage(client: client, message: Envelope): Promise<any> {
        const [command, BLAHBLAH, reply] = protowrap.unpack(message);
        if (command == "ping") {
            reply.command = "pong";
            return reply;
        } else if (message.command == "refreshtoken") {
            let rt: RefreshToken = RefreshToken.decode(message.data.value);
            this.client.jwt = rt.jwt;
            this.client.user = rt.user;
            return null;
        } else if (message.command == "watchevent") {
            // let we: WatchEvent = BLAHBLAH;
            let we: WatchEvent = WatchEvent.decode(message.data.value);
            if (this.watchids[we.id]) {
                var doc = we.document;
                try {
                    if (typeof doc == "string") doc = JSON.parse(doc);
                } catch (error) {

                }
                this.onWatch(we.id, we.operation, doc);
                this.watchids[we.id](we.operation, doc);
            } else {
                warn("Got watchevent for unknown id " + we.id);
            }
        } else if (message.command == "queueevent") {
            let we: QueueEvent = BLAHBLAH;
            if (this.queuecallbacks[we.correlationId] && (we.replyto == "" || we.replyto == null)) {
                var data = JSON.parse(we.data)
                delete data.spanId;
                delete data.traceId;
                const user = data.__user;
                delete data.__jwt;
                delete data.__user;
                this.queuecallbacks[we.correlationId](data, user);
                delete this.queuecallbacks[we.correlationId];
            } else if (this.queues[we.queuename]) {
                try {
                    var data = JSON.parse(we.data)
                    if (typeof data == "string") { data = JSON.parse(data) }
                    var user = null;
                    var jwt = null;
                    if (data.__jwt != null) jwt = data.__jwt;
                    if (data.__user != null) user = data.__user;
                    delete data.__jwt;
                    delete data.__user;
                    var reply2 = await this.queues[we.queuename](we, data, user, jwt);
                    if (reply2 != null) {
                        await this.QueueMessage({ correlationId: we.correlationId, queuename: we.replyto, data: reply2, striptoken: true }, false);
                    }
                } catch (error) {
                    err(error);
                }
            } else {
                warn("Got queueevent for unknown queue " + we.queuename);
            }
        } else {
            info("Received unknown message from server: ");
            console.log("command", command, "BLAHBLAH", BLAHBLAH, "reply", reply);
        }
        return reply;
    }
    async Ping(): Promise<void> {
        let message = PingRequest.create();
        const data = Any.create<any>({ "typeUrl": "openiap.ping", "value": PingRequest.encode(message).finish() })
        const payload = Envelope.create({ command: "ping", data });
        const result = await protowrap.RPC(this.client, payload);
        const [_command, BLAHBLAH, _reply] = protowrap.unpack(result);
    }
    stringify(object: any) {
        return JSON.stringify(object, (key, value) => {
            if (value == null) return value;
            const t = typeof value;
            if (value instanceof RegExp) return '__REGEXP ' + value.toString();
            else if (t === 'object') {
                if (value.constructor != null && value.constructor.name === 'RegExp') {
                    return '__REGEXP ' + value.toString();
                }
                return value;
            } else return value;
        });
    }
    public isdoingsignin: boolean = false;
    async Signin(options: SigninOptions): Promise<SigninResponse> {
        this.isdoingsignin = true;
        try {
            const opt: SigninOptions = Object.assign(new SigninDefaults(), options)
            let message = SigninRequest.create({ username: opt.username, password: opt.password, ping: opt.ping, longtoken: opt.longtoken })
            if (opt.jwt != null && opt.jwt != "") {
                message = SigninRequest.create({ jwt: opt.jwt, ping: opt.ping })
            }
            const data = Any.create({ type_url: "type.googleapis.com/openiap.SigninRequest", value: SigninRequest.encode(message).finish() })
            const payload = Envelope.create({ command: "signin", data, jwt: opt.jwt });
            const result = SigninResponse.decode((await protowrap.RPC(this.client, payload)).data.value);
            if (options.validateonly) {
                info("Validated " + result.user.name);
                return result;
            }
            if (result.config != null && result.config != "") {
                try {
                    this.flowconfig = JSON.parse(result.config);
                } catch (error) {
                }
            }
            info("Signed in as " + result.user.name);
            this.signedin = true;
            this.client.jwt = result.jwt;
            this.client.user = result.user;
            try {
                this.onSignedIn(this.client);
            } catch (error) {
                
            }
            return result;
        } finally {
            this.isdoingsignin = false;
        }

    }
    async ListCollections(options: ListCollectionsOptions = {}): Promise<any[]> {
        const opt: ListCollectionsOptions = Object.assign(new ListCollectionsDefaults(), options)
        let message = ListCollectionsRequest.create(opt as any);
        const data = Any.create({ type_url: "type.googleapis.com/openiap.ListCollectionsRequest", "value": ListCollectionsRequest.encode(message).finish() })
        const payload = Envelope.create({ command: "listcollections", data, jwt: opt.jwt });
        const result = ListCollectionsResponse.decode((await protowrap.RPC(this.client, payload)).data.value);
        return JSON.parse(result.results);
    }
    /**
 * Create a collection removing all data from the collection. Only users with admin rights can Create collections.
 * @param options {@link CreateCollectionOptions}
 * @param priority Message priority, the higher the number the higher the priority. Default is 2, 3 or higher requeires updates to server configuration
 */
    async CreateCollection(options: CreateCollectionOptions, priority: number = 2): Promise<void> {
        // if (!this.connected) throw new Error("Not connected to server");
        if (!this.signedin) throw new Error("Not signed in to server");
        const opt: CreateCollectionOptions = Object.assign(new CreateCollectionDefaults(), options)
        let message = CreateCollectionRequest.create(opt as any);
        const data = Any.create({ type_url: "type.googleapis.com/openiap.CreateCollectionRequest", "value": CreateCollectionRequest.encode(message).finish() })
        const payload = Envelope.create({ command: "createcollection", data, jwt: opt.jwt });
        payload.priority = priority;
        const result = await protowrap.RPC(this.client, payload);
    }

    async DropCollection(options: DropCollectionOptions): Promise<void> {
        const opt: DropCollectionOptions = Object.assign(new DropCollectionDefaults(), options)
        let message = DropCollectionRequest.create(opt as any);
        const data = Any.create({ type_url: "type.googleapis.com/openiap.DropCollectionRequest", "value": DropCollectionRequest.encode(message).finish() })
        const payload = Envelope.create({ command: "dropcollection", data, jwt: opt.jwt });
        const result = await protowrap.RPC(this.client, payload);
    }
    async Query<T>(options: QueryOptions): Promise<T[]> {
        const opt: QueryOptions = Object.assign(new QueryDefaults(), options)
        let message = QueryRequest.create(opt as any);
        if (typeof message.query == "object") message.query = this.stringify(message.query);
        if (typeof message.orderby == "object") message.orderby = this.stringify(message.orderby);
        if (typeof message.projection == "object") message.projection = this.stringify(message.projection);
        const data = Any.create({ type_url: "type.googleapis.com/openiap.QueryRequest", "value": QueryRequest.encode(message).finish() })
        const payload = Envelope.create({ command: "query", data });
        const result = QueryResponse.decode((await protowrap.RPC(this.client, payload)).data.value);
        return JSON.parse(result.results);
    }
    async GetDocumentVersion<T>(options: GetDocumentVersionOptions): Promise<T[]> {
        const opt: GetDocumentVersionOptions = Object.assign(new GetDocumentVersionDefaults(), options)
        let message = GetDocumentVersionRequest.create(opt as any);
        const data = Any.create({ type_url: "type.googleapis.com/openiap.GetDocumentVersionRequest", "value": GetDocumentVersionRequest.encode(message).finish() })
        const payload = Envelope.create({ command: "getdocumentversion", data });
        const result = GetDocumentVersionResponse.decode((await protowrap.RPC(this.client, payload)).data.value);
        return JSON.parse(result.result);
    }
    async Count(options: CountOptions): Promise<number> {
        const opt: CountOptions = Object.assign(new CountDefaults(), options)
        let message = CountRequest.create(opt as any);
        if (typeof message.query == "object") message.query = this.stringify(message.query);
        const data = Any.create({ type_url: "type.googleapis.com/openiap.CountRequest", "value": CountRequest.encode(message).finish() })
        const payload = Envelope.create({ command: "count", data, jwt: opt.jwt });
        const result = CountResponse.decode((await protowrap.RPC(this.client, payload)).data.value);
        return result.result;
    }
    async Distinct(options: DistinctOptions): Promise<string[]> {
        const opt: DistinctOptions = Object.assign(new DistinctDefaults(), options)
        let message = DistinctRequest.create(opt as any);
        if (typeof message.query == "object") message.query = this.stringify(message.query);
        const data = Any.create({ type_url: "type.googleapis.com/openiap.DistinctRequest", "value": DistinctRequest.encode(message).finish() })
        const payload = Envelope.create({ command: "distinct", data, jwt: opt.jwt });
        // payload.priority = priority;
        const result = DistinctResponse.decode((await protowrap.RPC(this.client, payload)).data.value);
        return result.results;
    }
    async Aggregate<T>(options: AggregateOptions): Promise<T[]> {
        const opt: AggregateOptions = Object.assign(new AggregateDefaults(), options)
        let message = AggregateRequest.create(opt as any);
        if (typeof message.aggregates == "object") message.aggregates = this.stringify(message.aggregates);
        const data = Any.create({ type_url: "type.googleapis.com/openiap.AggregateRequest", "value": AggregateRequest.encode(message).finish() })
        const payload = Envelope.create({ command: "aggregate", data, jwt: opt.jwt });
        const result = AggregateResponse.decode((await protowrap.RPC(this.client, payload)).data.value);
        return JSON.parse(result.results);
    }
    async InsertOne<T>(options: InsertOneOptions): Promise<T> {
        const opt: InsertOneOptions = Object.assign(new InsertOneDefaults(), options)
        let message = InsertOneRequest.create(opt as any);
        if (typeof message.item == "object") message.item = JSON.stringify(message.item);
        const data = Any.create({ type_url: "type.googleapis.com/openiap.InsertOneRequest", "value": InsertOneRequest.encode(message).finish() })
        const payload = Envelope.create({ command: "insertone", data });
        const result = InsertOneResponse.decode((await protowrap.RPC(this.client, payload)).data.value);
        return JSON.parse(result.result);
    }
    async InsertMany<T>(options: InsertManyOptions): Promise<T[]> {
        const opt: InsertManyOptions = Object.assign(new InsertManyDefaults(), options)
        let message = InsertManyRequest.create(opt as any);
        if (typeof message.items == "object") message.items = JSON.stringify(message.items);
        const data = Any.create({ type_url: "type.googleapis.com/openiap.InsertManyRequest", "value": InsertManyRequest.encode(message).finish() })
        const payload = Envelope.create({ command: "insertmany", data, jwt: opt.jwt });
        const result = InsertManyResponse.decode((await protowrap.RPC(this.client, payload)).data.value);
        return JSON.parse(result.results);
    }
    async UpdateOne<T>(options: UpdateOneOptions): Promise<T> {
        const opt: UpdateOneOptions = Object.assign(new UpdateOneDefaults(), options)
        let message = UpdateOneRequest.create(opt as any);
        if (typeof message.item == "object") message.item = JSON.stringify(message.item);
        const data = Any.create({ type_url: "type.googleapis.com/openiap.UpdateOneRequest", "value": UpdateOneRequest.encode(message).finish() })
        const payload = Envelope.create({ command: "updateone", data });
        const result = UpdateOneResponse.decode((await protowrap.RPC(this.client, payload)).data.value);
        return JSON.parse(result.result);
    }
    async UpdateDocument(options: UpdateDocumentOptions): Promise<UpdateResult> {
        const opt: UpdateDocumentOptions = Object.assign(new UpdateDocumentDefaults(), options)
        let message = UpdateDocumentRequest.create(opt as any);
        if (typeof message.document == "object") message.document = this.stringify(message.document);
        if (typeof message.query == "object") message.query = this.stringify(message.query);
        const data = Any.create({ type_url: "type.googleapis.com/openiap.UpdateDocumentRequest", "value": UpdateDocumentRequest.encode(message).finish() })
        const payload = Envelope.create({ command: "updatedocument", data, jwt: opt.jwt });
        const result = UpdateDocumentResponse.decode((await protowrap.RPC(this.client, payload)).data.value);
        return result.opresult;
    }
    async InsertOrUpdateOne<T>(options: InsertOrUpdateOneOptions): Promise<T> {
        const opt: InsertOrUpdateOneOptions = Object.assign(new InsertOrUpdateOneDefaults(), options)
        let message = InsertOrUpdateOneRequest.create(opt as any);
        if (typeof message.item == "object") message.item = JSON.stringify(message.item);
        const data = Any.create({ type_url: "type.googleapis.com/openiap.InsertOrUpdateOneRequest", "value": InsertOrUpdateOneRequest.encode(message).finish() })
        const payload = Envelope.create({ command: "insertorupdateone", data, jwt: opt.jwt });
        const result = InsertOrUpdateOneResponse.decode((await protowrap.RPC(this.client, payload)).data.value);
        return JSON.parse(result.result);
    }
    async InsertOrUpdateMany<T>(options: InsertOrUpdateManyOptions): Promise<T[]> {
        const opt: InsertOrUpdateManyOptions = Object.assign(new InsertOrUpdateManyDefaults(), options)
        let message = InsertOrUpdateManyRequest.create(opt as any);
        if (typeof message.items == "object") message.items = JSON.stringify(message.items);
        const data = Any.create({ type_url: "type.googleapis.com/openiap.InsertOrUpdateManyRequest", "value": InsertOrUpdateManyRequest.encode(message).finish() })
        const payload = Envelope.create({ command: "insertorupdatemany", data, jwt: opt.jwt });
        const result = InsertOrUpdateManyResponse.decode((await protowrap.RPC(this.client, payload)).data.value);
        return JSON.parse(result.results);
    }
    async DeleteOne(options: DeleteOneOptions): Promise<number> {
        const opt: DeleteOneOptions = Object.assign(new DeleteOneDefaults(), options)
        let message = DeleteOneRequest.create(opt as any);
        const data = Any.create({ type_url: "type.googleapis.com/openiap.DeleteOneRequest", "value": DeleteOneRequest.encode(message).finish() })
        const payload = Envelope.create({ command: "deleteone", data, jwt: opt.jwt });
        const result = DeleteOneResponse.decode((await protowrap.RPC(this.client, payload)).data.value);
        return result.affectedrows;
    }
    async DeleteMany(options: DeleteManyOptions): Promise<number> {
        const opt: DeleteManyOptions = Object.assign(new DeleteManyDefaults(), options)
        let message = DeleteManyRequest.create(opt as any);
        if (typeof message.query == "object") message.query = this.stringify(message.query);
        const data = Any.create({ type_url: "type.googleapis.com/openiap.DeleteManyRequest", "value": DeleteManyRequest.encode(message).finish() })
        const payload = Envelope.create({ command: "deletemany", data });
        const result = DeleteManyResponse.decode((await protowrap.RPC(this.client, payload)).data.value);
        return result.affectedrows;
    }
    watchids: any = {};
    async Watch(options: WatchOptions, callback: any): Promise<string> {
        if (!callback) return "";
        const opt: WatchOptions = Object.assign(new WatchDefaults(), options)
        if (opt.paths) {
            if (Array.isArray(opt.paths)) {
                for (let i = 0; i < opt.paths.length; i++) {
                    const element = opt.paths[i];
                    if (element != null && typeof element !== "string") opt.paths[i] = JSON.stringify(element);
                }
            }
        }
        let message = WatchRequest.create(opt as any);
        const data = Any.create({ type_url: "type.googleapis.com/openiap.WatchRequest", "value": WatchRequest.encode(message).finish() })
        const payload = Envelope.create({ command: "watch", data, jwt: opt.jwt });
        const result = WatchResponse.decode((await protowrap.RPC(this.client, payload)).data.value);
        if (result.id && result.id != "") {
            this.watchids[result.id] = callback;
        }
        return result.id;
    }
    async UnWatch(options: UnWatchOptions): Promise<void> {
        const opt: UnWatchOptions = Object.assign(new UnWatchDefaults(), options)
        delete this.watchids[opt.id];
        let message = UnWatchRequest.create(opt as any);
        const data = Any.create({ type_url: "type.googleapis.com/openiap.UnWatchRequest", "value": UnWatchRequest.encode(message).finish() })
        const payload = Envelope.create({ command: "unwatch", data });
        const result = await protowrap.RPC(this.client, payload);
    }
    async GetElement(xpath: string) {
        var message = GetElementRequest.create({ xpath })
        const data = Any.create({ type_url: "type.googleapis.com/openiap.GetElementRequest", "value": GetElementRequest.encode(message).finish() })
        var payload = Envelope.create({ command: "getelement", data });
        const result = GetElementResponse.decode((await protowrap.RPC(this.client, payload)).data.value);
        return result.xpath;
    }
    async DownloadFile(options: DownloadFileOptions): Promise<DownloadResponse> {
        const opt: DownloadFileOptions = Object.assign(new DownloadFileDefaults(), options)
        return await protowrap.DownloadFile(this.client, opt.id, opt.collectionname, opt.filename);
    }
    async UploadFile(filename: string, mimetype: string, content: Uint8Array): Promise<string> {
        return protowrap.UploadFile(this.client, filename, mimetype, content);
    }
    queues: any = {};
    defaltqueue: string = "";
    async RegisterQueue(options: RegisterQueueOptions, callback: (msg: QueueEvent, payload: any, user: any, jwt: string) => any): Promise<string> {
        if (!callback) return "";
        const opt: RegisterQueueOptions = Object.assign(new RegisterQueueDefaults(), options)
        let message = RegisterQueueRequest.create(opt as any);
        const data = Any.create({ type_url: "type.googleapis.com/openiap.RegisterQueueRequest", "value": RegisterQueueRequest.encode(message).finish() })
        const payload = Envelope.create({ command: "registerqueue", data, jwt: opt.jwt });
        if (opt.queuename && opt.queuename != "") this.queues[opt.queuename] = callback;
        const result = RegisterQueueResponse.decode((await protowrap.RPC(this.client, payload)).data.value);
        if (this.defaltqueue == "" && (opt.queuename == "" || opt.queuename == null)) this.defaltqueue = result.queuename;
        if (result.queuename != null && result.queuename != "" && result.queuename != opt.queuename) {
            this.queues[result.queuename] = callback;
            delete this.queues[opt.queuename];
        }
        return result.queuename;
    }
    async RegisterExchange(options: RegisterExchangeOptions, callback: (msg: QueueEvent, payload: any, user: any, jwt: string) => any): Promise<string> {
        if (!callback) return "";
        const opt: RegisterExchangeOptions = Object.assign(new RegisterExchangeDefaults(), options)
        let message = RegisterExchangeRequest.create(opt as any);
        const data = Any.create({ type_url: "type.googleapis.com/openiap.RegisterExchangeRequest", "value": RegisterExchangeRequest.encode(message).finish() })
        const payload = Envelope.create({ command: "registerexchange", data, jwt: opt.jwt });
        const result = RegisterExchangeResponse.decode((await protowrap.RPC(this.client, payload)).data.value);
        if (result.queuename && result.queuename != "" && opt.addqueue) {
            this.queues[result.queuename] = callback;
        }
        return result.queuename;
    }
    async UnRegisterQueue(options: UnRegisterQueueOptions): Promise<void> {
        const opt: UnRegisterQueueOptions = Object.assign(new UnRegisterQueueDefaults(), options)
        let message = UnRegisterQueueRequest.create(opt as any);
        const data = Any.create({ type_url: "type.googleapis.com/openiap.UnRegisterQueueRequest", "value": UnRegisterQueueRequest.encode(message).finish() })
        const payload = Envelope.create({ command: "unregisterqueue", data, jwt: opt.jwt });
        const result = await protowrap.RPC(this.client, payload);
        if (this.defaltqueue == opt.queuename) this.defaltqueue = "";
        delete this.queues[opt.queuename];
    }
    queuecallbacks: any = {};
    async QueueMessage(options: QueueMessageOptions, rpc: boolean = false) {
        return new Promise<any>(async (resolve, reject) => {
            try {
                const opt: QueueMessageOptions = Object.assign(new QueueMessageDefaults(), options)
                if (typeof opt.data !== 'string') opt.data = JSON.stringify(opt.data) as any;
                if (rpc) {
                    if (this.defaltqueue == "") {
                        this.defaltqueue = await this.RegisterQueue({ queuename: "" }, (msg, user) => {
                            if (msg && msg.correlationId) {
                                warn("temp queue received message for unknown receiver with correlationId " + msg.correlationId)
                            } else {
                                warn("temp queue received message for unknown receiver")
                            }
                        });
                        info("Auto registered reply queue " + this.defaltqueue)
                    }
                    opt.correlationId = openiap.GetUniqueIdentifier();
                    opt.replyto = this.defaltqueue;
                    this.queuecallbacks[opt.correlationId] = (message: any, user: any) => {
                        resolve(message);
                    };
                    // info(`Send message with correlationId ${opt.correlationId} to ${opt.queuename}`)
                }
                let message = QueueMessageRequest.create(opt as any);
                const data = Any.create({ type_url: "type.googleapis.com/openiap.QueueMessageRequest", "value": QueueMessageRequest.encode(message).finish() })
                const payload = Envelope.create({ command: "queuemessage", data, jwt: opt.jwt });
                const result = await protowrap.RPC(this.client, payload);
                if (!rpc) resolve(null);
            } catch (error) {
                reject(error);
            }
        });

    }
    async PushWorkitem(options: PushWorkitemOptions): Promise<Workitem> {
        const opt: PushWorkitemOptions = Object.assign(new PushWorkitemDefaults(), options)
        if (typeof opt.payload !== 'string') opt.payload = JSON.stringify(opt.payload);
        let message = PushWorkitemRequest.create(opt as any);
        const data = Any.create({ type_url: "type.googleapis.com/openiap.PushWorkitemRequest", "value": PushWorkitemRequest.encode(message).finish() })
        const payload = Envelope.create({ command: "pushworkitem", data, jwt: opt.jwt });
        const result = PushWorkitemResponse.decode((await protowrap.RPC(this.client, payload)).data.value);
        return result.workitem
    }
    async PushWorkitems(options: PushWorkitemsOptions): Promise<Workitem[]> {
        const opt: PushWorkitemsOptions = Object.assign(new PushWorkitemsDefaults(), options)
        opt.items.forEach(wi => {
            if (typeof wi.payload !== 'string') wi.payload = JSON.stringify(wi.payload);
        });
        let message = PushWorkitemsRequest.create(opt as any);
        const data = Any.create({ type_url: "type.googleapis.com/openiap.PushWorkitemsRequest", "value": PushWorkitemsRequest.encode(message).finish() })
        const payload = Envelope.create({ command: "pushworkitems", data, jwt: opt.jwt });
        const result = PushWorkitemsResponse.decode((await protowrap.RPC(this.client, payload)).data.value);
        return result.workitems
    }
    async PopWorkitem(options: PopWorkitemOptions): Promise<Workitem | undefined> {
        const opt: PopWorkitemOptions = Object.assign(new PopWorkitemDefaults(), options)
        let message = PopWorkitemRequest.create(opt as any);
        const data = Any.create({ type_url: "type.googleapis.com/openiap.PopWorkitemRequest", "value": PopWorkitemRequest.encode(message).finish() })
        const payload = Envelope.create({ command: "popworkitem", data, jwt: opt.jwt });
        const result = PopWorkitemResponse.decode((await protowrap.RPC(this.client, payload)).data.value);
        return result.workitem
    }
    async UpdateWorkitem(options: UpdateWorkitemOptions): Promise<Workitem> {
        const opt: UpdateWorkitemOptions = Object.assign(new UpdateWorkitemDefaults(), options)
        if (typeof opt.workitem.payload !== 'string') opt.workitem.payload = JSON.stringify(opt.workitem.payload);
        let message = UpdateWorkitemRequest.create(opt as any);
        const data = Any.create({ type_url: "type.googleapis.com/openiap.UpdateWorkitemRequest", "value": UpdateWorkitemRequest.encode(message).finish() })
        const payload = Envelope.create({ command: "updateworkitem", data, jwt: opt.jwt });
        const result = UpdateWorkitemResponse.decode((await protowrap.RPC(this.client, payload)).data.value);
        return result.workitem
    }
    async DeleteWorkitem(options: DeleteWorkitemOptions): Promise<void> {
        const opt: DeleteWorkitemOptions = Object.assign(new DeleteWorkitemDefaults(), options)
        let message = DeleteWorkitemRequest.create(opt as any);
        const data = Any.create({ type_url: "type.googleapis.com/openiap.DeleteWorkitemRequest", "value": DeleteWorkitemRequest.encode(message).finish() })
        const payload = Envelope.create({ command: "deleteworkitem", data, jwt: opt.jwt });
        const result = DeleteWorkitemResponse.decode((await protowrap.RPC(this.client, payload)).data.value);
    }
    async CustomCommand<T>(options: CustomCommandOptions): Promise<string> {
        const opt: CustomCommandOptions = Object.assign(new CustomCommandDefaults(), options)
        let message = CustomCommandRequest.create(opt as any);
        const data = Any.create({ type_url: "type.googleapis.com/openiap.CustomCommand", "value": CustomCommandRequest.encode(message).finish() })
        const payload = Envelope.create({ command: "customcommand", data, jwt: opt.jwt });
        const result = CustomCommandResponse.decode((await protowrap.RPC(this.client, payload)).data.value);
        return result.result
    }
    async CreateWorkflowInstance(options: CreateWorkflowInstanceOptions): Promise<string> {
        const opt: CreateWorkflowInstanceOptions = Object.assign(new CreateWorkflowInstanceDefaults(), options)
        if (opt.data != null && typeof opt.data !== "string") opt.data = JSON.stringify(opt.data)
        let message = CreateWorkflowInstanceRequest.create(opt as any);
        const data = Any.create({ type_url: "type.googleapis.com/openiap.CreateWorkflowInstance", "value": CreateWorkflowInstanceRequest.encode(message).finish() })
        const payload = Envelope.create({ command: "createworkflowinstance", data, jwt: opt.jwt });
        const result = CreateWorkflowInstanceResponse.decode((await protowrap.RPC(this.client, payload)).data.value);
        return result.instanceid;
    }
}
export type SigninOptions = {
    username?: string;
    password?: string;
    jwt?: string;
    ping?: boolean;
    validateonly?: boolean;
    agent?: string;
    version?: string;
    longtoken?: boolean;
}
class SigninDefaults {
    ping: boolean = true;
    validateonly: boolean = false;
    agent: string = "nodeagent"
    version: string = "0.0.1"
    longtoken: boolean = false;
}
export type ListCollectionsOptions = {
    includehist?: boolean;
    jwt?: string;
}
class ListCollectionsDefaults {
    includehist: boolean = false;
}
export type col_timeseries_granularity = "seconds" | "minutes" | "hours"; //  | "days" | "weeks" | "months" | "years";
export type col_validationLevel = "off" | "strict" | "moderate";
export type col_validationAction = "error" | "warn";
export type col_collation = {
    locale?: string,
    caseLevel?: boolean,
    caseFirst?: string,
    strength?: number,
    numericOrdering?: boolean,
    alternate?: string,
    maxVariable?: string,
    backwards?: boolean
};
export type col_timeseries = {
    timeField: string,
    metaField?: string,
    granularity?: col_timeseries_granularity,
};
export type CreateCollectionOptions = {
    jwt?: string;
    collectionname: string,
    timeseries?: col_timeseries;

    expireAfterSeconds?: number,
    changeStreamPreAndPostImages?: boolean,
    size?: number, // Optional. Specify a maximum size in bytes for a capped collection.
    max?: number, // Optional. The maximum number of documents allowed in the capped collection. 
    validator?: object, // Optional. Specify validation rules for documents in a collection.
    validationLevel?: col_validationLevel, // Optional. Specify how strictly MongoDB applies the validation rules to existing documents during an update.
    validationAction?: col_validationAction, // Optional. Specify whether to error on invalid documents or just warn about the violations but allow invalid documents to be inserted.
    collation?: col_collation,
    capped?: boolean,
}
class CreateCollectionDefaults {
}
export type DropCollectionOptions = {
    collectionname: string;
    jwt?: string;
}
class DropCollectionDefaults {
}
export type QueryOptions = {
    collectionname?: string;
    query?: object;
    projection?: Object;
    top?: number;
    skip?: number;
    orderby?: Object | string;
    queryas?: string;
    explain?: boolean;
    jwt?: string;
}
class QueryDefaults {
    collectionname: string = "entities";
    query: object = {};
    top: number = 100;
    skip: number = 0;
    explain: boolean = false;
}
export type GetDocumentVersionOptions = {
    collectionname?: string;
    id: string;
    version?: number;
    decrypt?: boolean;
    jwt?: string;
}
class GetDocumentVersionDefaults {
    collectionname: string = "entities";
    version: number = 0; // latest
    decrypt: boolean = true;
}
export type CountOptions = {
    collectionname?: string;
    query?: object;
    projection?: Object;
    orderby?: Object | string;
    queryas?: string;
    jwt?: string;
}
class CountDefaults {
    collectionname: string = "entities";
    query: object = {};
}
export type DistinctOptions = {
    collectionname?: string;
    field: string;
    query?: object;
    queryas?: string;
    options?: object;
    jwt?: string;
}
class DistinctDefaults {
    collectionname: string = "entities";
    query: object = {};
}
export type AggregateOptions = {
    collectionname?: string;
    aggregates?: object[];
    queryas?: string;
    explain?: boolean;
    jwt?: string;
}
class AggregateDefaults {
    collectionname: string = "entities";
    aggregates: object[] = [];
    explain: boolean = false;
}
export type InsertOneOptions = {
    collectionname?: string;
    item: object;
    w?: number;
    j?: boolean;
    jwt?: string;
}
class InsertOneDefaults {
    collectionname: string = "entities";
}
export type InsertManyOptions = {
    collectionname?: string;
    items: object[];
    w?: number;
    j?: boolean;
    skipresults?: boolean;
    jwt?: string;
}
class InsertManyDefaults {
    collectionname: string = "entities";
}
export type UpdateOneOptions = {
    collectionname?: string;
    item: object;
    w?: number;
    j?: boolean;
    jwt?: string;
}
class UpdateOneDefaults {
    collectionname: string = "entities";
}
export type UpdateDocumentOptions = {
    collectionname?: string;
    query: object;
    document: object;
    w?: number;
    j?: boolean;
    jwt?: string;
}
class UpdateDocumentDefaults {
    collectionname: string = "entities";
}
export type InsertOrUpdateOneOptions = {
    collectionname?: string;
    item: object;
    uniqeness?: string;
    w?: number;
    j?: boolean;
    jwt?: string;
}
class InsertOrUpdateOneDefaults {
    collectionname: string = "entities";
}
export type InsertOrUpdateManyOptions = {
    collectionname?: string;
    items: object[];
    uniqeness?: string;
    w?: number;
    j?: boolean;
    skipresults?: boolean;
    jwt?: string;
}
class InsertOrUpdateManyDefaults {
    collectionname: string = "entities";
    skipresults: boolean = true;
}
export type DeleteOneOptions = {
    collectionname?: string;
    id: string;
    recursive?: boolean;
    jwt?: string;
}
class DeleteOneDefaults {
    collectionname: string = "entities";
}
export type DeleteManyOptions = {
    collectionname?: string;
    query: object;
    recursive?: boolean;
    jwt?: string;
}
class DeleteManyDefaults {
    collectionname: string = "entities";
}
export type WatchOptions = {
    collectionname?: string;
    paths: string[];
    jwt?: string;
}
class WatchDefaults {
    collectionname: string = "entities";
}
export type UnWatchOptions = {
    id: string;
}
class UnWatchDefaults {
}
export type DownloadFileOptions = {
    id?: string;
    collectionname?: string;
    filename?: string;
    jwt?: string;
}
class DownloadFileDefaults {
}
export type UploadFileOptions = {
    filename: string;
    jwt?: string;
}
class UploadFileDefaults {
}

export type RegisterQueueOptions = {
    queuename: string;
    jwt?: string;
}
class RegisterQueueDefaults {
}
export type RegisterExchangeOptions = {
    exchangename: string;
    algorithm?: string;
    routingkey?: string;
    addqueue?: boolean;
    jwt?: string;
}
class RegisterExchangeDefaults {
    algorithm: string = "fanout"
    routingkey: string = "";
    addqueue: boolean = true;
}
export type UnRegisterQueueOptions = {
    queuename: string;
    jwt?: string;
}
class UnRegisterQueueDefaults {
}
export type QueueMessageOptions = {
    queuename: string;
    correlationId?: string;
    replyto?: string;
    routingkey?: string;
    exchangename?: string;
    data: object;
    striptoken?: boolean;
    jwt?: string;
}
class QueueMessageDefaults {
    striptoken: boolean = false;
}
export type PushWorkitemOptions = {
    wiq?: string;
    wiqid?: string;
    name?: string;
    payload: any;
    nextrun?: Date;
    success_wiqid?: string;
    failed_wiqid?: string;
    success_wiq?: string;
    failed_wiq?: string;
    priority?: number;
    files?: any[];
    jwt?: string;
}
class PushWorkitemDefaults {
    priority: number = 2;
}
export type PushWorkitemsOptions = {
    wiq?: string;
    wiqid?: string;
    nextrun?: Date;
    success_wiqid?: string;
    failed_wiqid?: string;
    success_wiq?: string;
    failed_wiq?: string;
    priority?: number;
    items: Workitem[];
    jwt?: string;
}
class PushWorkitemsDefaults {
    priority: number = 2;
}
export type PopWorkitemOptions = {
    wiq?: string;
    wiqid?: string;
    includefiles: boolean;
    compressed: boolean;
    jwt?: string;
}
class PopWorkitemDefaults {
    includefiles: boolean = true;
    compressed: boolean = true;
}
export type UpdateWorkitemOptions = {
    workitem: Workitem;
    ignoremaxretries?: boolean;
    jwt?: string;
}
class UpdateWorkitemDefaults {
    ignoremaxretries: boolean = false;
}
export type DeleteWorkitemOptions = {
    _id: string;
    jwt?: string;
}
class DeleteWorkitemDefaults {
}
export type CustomCommandOptions = {
    command: string;
    id?: string;
    name?: string;
    data?: string;
    jwt?: string;
}
class CustomCommandDefaults {
}
export type CreateWorkflowInstanceOptions = {
    targetid: string;
    workflowid: string;
    name: string;
    resultqueue: string;
    data: any;
    initialrun: boolean;
    jwt?: string;
}
class CreateWorkflowInstanceDefaults {
    initialrun: boolean = false;
}
