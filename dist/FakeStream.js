import { config } from "./config";
const { info, err, warn } = config;
export class FakeStream {
    buffer;
    readPointer;
    basebufferSize;
    bufferSize;
    bufferIncrement;
    writePointer;
    maxWritePointer;
    lastDecreased;
    DecreaseTimeCheck;
    counter;
    constructor() {
        this.DecreaseTimeCheck = 60;
        this.basebufferSize = 5 * 1024 * 1024;
        this.bufferSize = this.basebufferSize;
        this.buffer = new Uint8Array(this.bufferSize);
        this.bufferIncrement = 10 * 1024 * 1024;
        this.readPointer = 0; // read pointer to keep track of data added
        this.writePointer = 0; // write pointer to keep track of data processed
        this.maxWritePointer = 0;
        this.lastDecreased = new Date();
        this.counter = 0;
    }
    ondata(message) {
    }
    onend(buffer) { }
    end() {
        const start = this.readPointer;
        const end = this.writePointer;
        const result = new Uint8Array(end - start);
        result.set(this.buffer.slice(start, end));
        this.onend(result);
    }
    write(buffer) {
        if (buffer instanceof ArrayBuffer) {
            buffer = new Uint8Array(buffer);
        }
        let newsize = this.calculateMaxBufferSize();
        if (this.writePointer + buffer.length > newsize) {
            newsize = newsize + this.bufferIncrement;
        }
        if (newsize != this.buffer.length) {
            let dir = "increased";
            if (newsize < this.buffer.length)
                dir = "decreased";
            this.bufferSize = newsize;
            const newbuff = new Uint8Array(this.bufferSize);
            newbuff.set(this.buffer);
            this.buffer = newbuff;
            // show warning as either byte, kilobyte or megabyte
            if (this.bufferSize > 1024 * 1024)
                warn("Buffer size " + dir + " to " + (this.bufferSize / 1024 / 1024).toFixed(2) + " MB");
            else if (this.bufferSize > 1024)
                warn("Buffer size " + dir + " to " + (this.bufferSize / 1024).toFixed(2) + " KB");
            else
                warn("Buffer size " + dir + " to " + this.bufferSize + " bytes");
        }
        // this.buffer.copy(buffer, this.bufferIndex);
        this.buffer.set(buffer, this.writePointer);
        this.writePointer += buffer.length;
        this.counter++;
        if (this.counter > 100)
            return;
        if (this.writePointer > this.maxWritePointer) {
            this.maxWritePointer = this.writePointer;
        }
        return;
    }
    calculateMaxBufferSize() {
        const now = new Date();
        // @ts-ignore
        const diff = now - this.lastDecreased;
        let result = this.buffer.length;
        if (diff > (this.DecreaseTimeCheck * 1000)) {
            this.lastDecreased = now;
            if (this.maxWritePointer > 0) {
                result = this.maxWritePointer;
                result -= this.bufferIncrement;
                if (result < this.basebufferSize)
                    result = this.basebufferSize;
                this.maxWritePointer = 0;
            }
        }
        return result;
    }
}
//# sourceMappingURL=FakeStream.js.map