import { client } from "./client";
import { User, SigninResponse, DownloadResponse } from "./proto/base";
import { UpdateResult } from "./proto/querys";
import { QueueEvent } from "./proto/queues";
import { Workitem } from "./proto/workitems";
export declare class openiap {
    url: string;
    jwt: string;
    client: client;
    reconnectms: number;
    signedin: boolean;
    constructor(url: string, jwt: string);
    loginresolve: any;
    flowconfig: any;
    connect(first: boolean): Promise<User>;
    Close(): void;
    onConnected(client: client): Promise<void>;
    private cliOnConnected;
    onDisconnected(client: client, error: Error): Promise<void>;
    cliOnDisconnected(client: client, error: Error): void;
    onWatch(id: string, operation: string, document: any): void;
    static GetUniqueIdentifier(): string;
    private cliOnMessage;
    Ping(): Promise<void>;
    stringify(object: any): string;
    Signin(options: SigninOptions): Promise<SigninResponse>;
    ListCollections(options?: ListCollectionsOptions): Promise<any[]>;
    DropCollection(options: DropCollectionOptions): Promise<void>;
    Query<T>(options: QueryOptions): Promise<T[]>;
    GetDocumentVersion<T>(options: GetDocumentVersionOptions): Promise<T[]>;
    Count(options: CountOptions): Promise<number>;
    Distinct(options: DistinctOptions): Promise<string[]>;
    Aggregate<T>(options: AggregateOptions): Promise<T[]>;
    InsertOne<T>(options: InsertOneOptions): Promise<T>;
    InsertMany<T>(options: InsertManyOptions): Promise<T[]>;
    UpdateOne<T>(options: UpdateOneOptions): Promise<T>;
    UpdateDocument(options: UpdateDocumentOptions): Promise<UpdateResult>;
    InsertOrUpdateOne<T>(options: InsertOrUpdateOneOptions): Promise<T>;
    InsertOrUpdateMany<T>(options: InsertOrUpdateManyOptions): Promise<T[]>;
    DeleteOne(options: DeleteOneOptions): Promise<number>;
    DeleteMany(options: DeleteManyOptions): Promise<number>;
    watchids: any;
    Watch(options: WatchOptions, callback: any): Promise<string>;
    UnWatch(options: UnWatchOptions): Promise<void>;
    GetElement(xpath: string): Promise<string>;
    DownloadFile(options: DownloadFileOptions): Promise<DownloadResponse>;
    UploadFile(filename: string, mimetype: string, content: Uint8Array): Promise<string>;
    queues: any;
    defaltqueue: string;
    RegisterQueue(options: RegisterQueueOptions, callback: (msg: QueueEvent, payload: any, user: any, jwt: string) => any): Promise<string>;
    RegisterExchange(options: RegisterExchangeOptions, callback: (msg: QueueEvent, payload: any, user: any, jwt: string) => any): Promise<string>;
    UnRegisterQueue(options: UnRegisterQueueOptions): Promise<void>;
    queuecallbacks: any;
    QueueMessage(options: QueueMessageOptions, rpc?: boolean): Promise<any>;
    PushWorkitem(options: PushWorkitemOptions): Promise<Workitem>;
    PushWorkitems(options: PushWorkitemsOptions): Promise<Workitem[]>;
    PopWorkitem(options: PopWorkitemOptions): Promise<Workitem | undefined>;
    UpdateWorkitem(options: UpdateWorkitemOptions): Promise<Workitem>;
    DeleteWorkitem(options: DeleteWorkitemOptions): Promise<void>;
    CustomCommand<T>(options: CustomCommandOptions): Promise<string>;
    CreateWorkflowInstance(options: CreateWorkflowInstanceOptions): Promise<string>;
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
};
export type ListCollectionsOptions = {
    includehist?: boolean;
    jwt?: string;
};
export type DropCollectionOptions = {
    collectionname: string;
    jwt?: string;
};
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
};
export type GetDocumentVersionOptions = {
    collectionname?: string;
    id: string;
    version?: number;
    decrypt?: boolean;
    jwt?: string;
};
export type CountOptions = {
    collectionname?: string;
    query?: object;
    projection?: Object;
    orderby?: Object | string;
    queryas?: string;
    jwt?: string;
};
export type DistinctOptions = {
    collectionname?: string;
    field: string;
    query?: object;
    queryas?: string;
    options?: object;
    jwt?: string;
};
export type AggregateOptions = {
    collectionname?: string;
    aggregates?: object[];
    queryas?: string;
    explain?: boolean;
    jwt?: string;
};
export type InsertOneOptions = {
    collectionname?: string;
    item: object;
    w?: number;
    j?: boolean;
    jwt?: string;
};
export type InsertManyOptions = {
    collectionname?: string;
    items: object[];
    w?: number;
    j?: boolean;
    skipresults?: boolean;
    jwt?: string;
};
export type UpdateOneOptions = {
    collectionname?: string;
    item: object;
    w?: number;
    j?: boolean;
    jwt?: string;
};
export type UpdateDocumentOptions = {
    collectionname?: string;
    query: object;
    document: object;
    w?: number;
    j?: boolean;
    jwt?: string;
};
export type InsertOrUpdateOneOptions = {
    collectionname?: string;
    item: object;
    uniqeness?: string;
    w?: number;
    j?: boolean;
    jwt?: string;
};
export type InsertOrUpdateManyOptions = {
    collectionname?: string;
    items: object[];
    uniqeness?: string;
    w?: number;
    j?: boolean;
    skipresults?: boolean;
    jwt?: string;
};
export type DeleteOneOptions = {
    collectionname?: string;
    id: string;
    recursive?: boolean;
    jwt?: string;
};
export type DeleteManyOptions = {
    collectionname?: string;
    query: object;
    recursive?: boolean;
    jwt?: string;
};
export type WatchOptions = {
    collectionname?: string;
    paths: string[];
    jwt?: string;
};
export type UnWatchOptions = {
    id: string;
};
export type DownloadFileOptions = {
    id?: string;
    collectionname?: string;
    filename?: string;
    jwt?: string;
};
export type UploadFileOptions = {
    filename: string;
    jwt?: string;
};
export type RegisterQueueOptions = {
    queuename: string;
    jwt?: string;
};
export type RegisterExchangeOptions = {
    exchangename: string;
    algorithm?: string;
    routingkey?: string;
    addqueue?: boolean;
    jwt?: string;
};
export type UnRegisterQueueOptions = {
    queuename: string;
    jwt?: string;
};
export type QueueMessageOptions = {
    queuename: string;
    correlationId?: string;
    replyto?: string;
    routingkey?: string;
    exchangename?: string;
    data: object;
    striptoken?: boolean;
    jwt?: string;
};
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
};
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
};
export type PopWorkitemOptions = {
    wiq?: string;
    wiqid?: string;
    includefiles: boolean;
    compressed: boolean;
    jwt?: string;
};
export type UpdateWorkitemOptions = {
    workitem: Workitem;
    ignoremaxretries?: boolean;
    jwt?: string;
};
export type DeleteWorkitemOptions = {
    _id: string;
    jwt?: string;
};
export type CustomCommandOptions = {
    command: string;
    id?: string;
    name?: string;
    data?: string;
    jwt?: string;
};
export type CreateWorkflowInstanceOptions = {
    targetid: string;
    workflowid: string;
    name: string;
    resultqueue: string;
    data: any;
    initialrun: boolean;
    jwt?: string;
};
