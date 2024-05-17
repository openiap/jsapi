import { Envelope } from "./proto/base.js";
export declare class FakeStream {
    buffer: Uint8Array;
    readPointer: number;
    basebufferSize: number;
    bufferSize: number;
    bufferIncrement: number;
    writePointer: number;
    maxWritePointer: number;
    lastDecreased: Date;
    DecreaseTimeCheck: number;
    counter: number;
    constructor();
    ondata(message: Envelope): void;
    onend(buffer: any): void;
    end(): void;
    write(buffer: any): void;
    calculateMaxBufferSize(): number;
}
