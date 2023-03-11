import { Envelope } from "./proto/base";
export declare class messageParser {
    seq: number;
    buffer: Uint8Array;
    readPointer: number;
    basebufferSize: number;
    bufferSize: number;
    bufferIncrement: number;
    writePointer: number;
    maxWritePointer: number;
    lastDecreased: Date;
    DecreaseTimeCheck: number;
    messages: any;
    maxMessagesQueue: number;
    constructor();
    ondata(message: Envelope): void;
    onend(): void;
    write(buffer: any): void;
    calculateMaxBufferSize(): number;
}
