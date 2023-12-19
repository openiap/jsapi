import { config } from "./config";
var info = config.info, err = config.err, warn = config.warn;
import { Envelope } from "./proto/base";
var messageParser = /** @class */ (function () {
    function messageParser() {
        this.DecreaseTimeCheck = 60;
        this.basebufferSize = 5 * 1024 * 1024;
        this.bufferSize = this.basebufferSize;
        this.buffer = new Uint8Array(this.bufferSize);
        this.maxMessagesQueue = 100;
        // this.bufferIncrement = 1024 * 128;
        this.bufferIncrement = 10 * 1024 * 1024;
        this.seq = 0;
        this.readPointer = 0; // read pointer to keep track of data added
        this.writePointer = 0; // write pointer to keep track of data processed
        this.maxWritePointer = 0;
        this.lastDecreased = new Date();
        this.messages = [];
    }
    messageParser.prototype.ondata = function (message) {
    };
    messageParser.prototype.onend = function () { };
    messageParser.prototype.write = function (buffer) {
        if (buffer instanceof ArrayBuffer) {
            buffer = new Uint8Array(buffer);
        }
        var newsize = this.calculateMaxBufferSize();
        // let newsize = this.writePointer + buffer.length;
        if (this.writePointer + buffer.length > newsize) {
            newsize = newsize + this.bufferIncrement;
        }
        if (newsize != this.buffer.length) {
            var dir = "increased";
            if (newsize < this.buffer.length)
                dir = "decreased";
            this.bufferSize = newsize;
            var newbuff = new Uint8Array(this.bufferSize);
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
        if (this.writePointer > this.maxWritePointer) {
            this.maxWritePointer = this.writePointer;
        }
        do {
            var datalen = this.writePointer - this.readPointer;
            if (datalen < 4) {
                break;
            }
            var size = (this.buffer[this.readPointer + 3] << 24) + (this.buffer[this.readPointer + 2] << 16) + (this.buffer[this.readPointer + 1] << 8) + this.buffer[this.readPointer];
            if (datalen < size + 4) {
                break;
            }
            if (size == 0) {
                warn("Received empty message !!!! removing 4 from buffer");
                this.writePointer -= 4;
                if (this.writePointer < 0)
                    this.writePointer = 0;
                continue;
            }
            if (size < 0) {
                throw new Error("Invalid size " + size);
            }
            // Decode the message 
            var start = this.readPointer + 4;
            var end = start + size;
            var messagebuffer = new Uint8Array(size);
            messagebuffer.set(this.buffer.slice(start, end));
            var message = Envelope.decode(messagebuffer);
            // buffer = buffer.subarray(size + 4);
            this.readPointer += size + 4;
            if (this.readPointer == this.writePointer) {
                this.readPointer = 0;
                this.writePointer = 0;
            }
            // var s = (size + 4);
            // this.writePointer -= s;
            // this.buffer.copy(this.buffer, 0, size + 4);
            this.messages.push(message);
            // this.push(message);
        } while (true);
        this.messages.sort(function (a, b) { return a.seq - b.seq; });
        while (this.messages.length > 0 && this.messages[0].seq == this.seq) {
            var message = this.messages.shift();
            this.ondata(message);
            this.seq++;
        }
        if (this.messages.length > this.maxMessagesQueue) {
            throw new Error("Too many messages in queue " + this.messages.length);
        }
        return;
    };
    messageParser.prototype.calculateMaxBufferSize = function () {
        var now = new Date();
        // @ts-ignore
        var diff = now - this.lastDecreased;
        var result = this.buffer.length;
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
    };
    return messageParser;
}());
export { messageParser };
//# sourceMappingURL=message-parser.js.map