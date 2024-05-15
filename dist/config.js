"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
var config = /** @class */ (function () {
    function config() {
    }
    config.info = function (message) {
        console.log("[".concat(config.colrole(), "][").concat(config.col("INF", config.color.FgCyan), "] ").concat(message));
    };
    config.warn = function (message) {
        console.log("[".concat(config.colrole(), "][").concat(config.col("WAR", config.color.FgYellow + config.color.Bright), "] ").concat(message));
    };
    config.err = function (error) {
        if (!error)
            return;
        if (error && error.stack && config.settings.doDumpStack) {
            console.log("[".concat(config.colrole(), "][").concat(config.col("ERR", config.color.FgRed), "] ").concat(error.stack));
            return;
        }
        console.log("[".concat(config.colrole(), "][").concat(config.col("ERR", config.color.FgRed), "] ").concat(error.message ? error.message : error));
    };
    config.dumpmessage = function (direction, message) {
        if (!config.settings.doDumpMesssages)
            return;
        var id = message.id, rid = message.rid, command = message.command;
        var sequence = message.seq;
        if (command == "beginstream" || command == "stream" || command == "endstream") {
            if (!config.settings.doDumpMesssageStreams)
                return;
        }
        if (!rid)
            rid = "";
        rid = rid.padEnd(4, " ");
        if (!id)
            id = "";
        id = id.padEnd(4, " ");
        var data = message.data;
        if (command == "stream")
            data = "... " + data.length + " bytes";
        if (data) {
            if (data.value) {
                data = data.value.toString();
            }
            else {
                data = data.toString();
            }
            // data = data.replace(/[^\x00-\x7F]/g, "");
            data = data.replace(/[^A-Za-z 0-9 \.,\?""!@#\$%\^&\*\(\)-_=\+;:<>\/\\\|\}\{\[\]`~]*/g, '');
        }
        else {
            data = "";
        }
        var columns = 90;
        var sub = 3;
        sub = "".concat(config.ts(), "[").concat(config.settings.role, "][").concat(direction, "]").concat(config.seq(sequence, id, rid), "[").concat(command, "] ").length;
        if (data && data.length > columns)
            data = data.substr(0, columns - sub - 3) + "...";
        if (direction == "SND")
            direction = config.col(direction, config.color.Dim + config.color.FgGreen);
        if (direction == "RCV")
            direction = config.col(direction, config.color.FgCyan);
        command = config.col(command, config.color.FgGreen);
        id = config.col(id, config.color.FgBlue);
        rid = config.col(rid, config.color.FgBlue);
        console.log("".concat(config.ts(), "[").concat(config.colrole(), "][").concat(direction, "]").concat(config.seq(sequence, id, rid), "[").concat(command, "] ").concat(data));
        if (data) {
            if (message.command == "stream" && message.data.length > 6) {
                config.dumpdata(message.data);
                if (!config.settings.doDumpMesssageStreams)
                    return;
            }
        }
    };
    config.dumpdata = function (data) {
        var radix = 16;
        var littleEndian = true;
        var content = "";
        var ALL_EXCEPT_PRINTABLE_LATIN = /[^\x20-\x7f]/g;
        var CONTROL_CHARACTERS_ONLY = /[\x00-\x1f]/g;
        if (config.settings.DoDumpToConsole) {
            for (var start = 0; start < data.length && start < (config.settings.doDumpMessageHexLines * config.settings.doDumpMessageHexBytesPerLine); start += config.settings.doDumpMessageHexBytesPerLine) {
                var end = Math.min(start + config.settings.doDumpMessageHexBytesPerLine, data.length);
                var slice = data.slice(start, end);
                content += config.hex(slice, config.settings.doDumpMessageHexBytesPerLine, 2, radix, littleEndian) + " " + slice.toString('ascii').replace(CONTROL_CHARACTERS_ONLY, ".") + "\n";
            }
            console.log(content.substring(0, content.length - 1));
        }
        if (config.settings.doDumpToFile) {
            for (var start = 0; start < data.length; start += config.settings.doDumpMessageHexBytesPerLine) {
                var end = Math.min(start + config.settings.doDumpMessageHexBytesPerLine, data.length);
                var slice = data.slice(start, end);
                content += config.hex(slice, config.settings.doDumpMessageHexBytesPerLine, 2, radix, littleEndian) + " " + slice.toString('ascii').replace(CONTROL_CHARACTERS_ONLY, ".") + "\n";
            }
        }
    };
    config.hex = function (buffer, bytes_per_line, bytes_per_group, radix, littleEndian) {
        var str = "";
        var delimiter = bytes_per_group == 0 ? "" : " ";
        var group_len = config.maxnumberlen(bytes_per_group, radix);
        var padlen = (bytes_per_line - buffer.length) * (bytes_per_group == 0 ? group_len : (group_len + 1) / bytes_per_group);
        if (bytes_per_group == 0) {
            bytes_per_group = 1;
        }
        var start = littleEndian ? bytes_per_group - 1 : 0;
        var end = littleEndian ? -1 : bytes_per_group;
        var step = littleEndian ? -1 : 1;
        for (var group = 0; group < buffer.length / bytes_per_group; ++group) {
            var val = bytes_per_group < 4 ? 0 : BigInt(0);
            for (var ii = start; ii != end; ii += step) {
                var i = group * bytes_per_group + ii;
                if (i >= buffer.length) { // not rendering dangling bytes.  TODO: render them as smaller grouping
                    break;
                }
                if (bytes_per_group < 4) {
                    // @ts-ignore
                    val = val * 256 + ((buffer.constructor == String ? buffer.codePointAt(i) : buffer[i]) & 0xff);
                }
                else {
                    // @ts-ignore
                    val = BigInt(val) * 256n + BigInt(((buffer.constructor == String ? buffer.codePointAt(i) : buffer[i]) & 0xff));
                }
            }
            var text = val.toString(radix);
            for (var c = 0; c < group_len - text.length; c++) {
                str += "0";
            }
            str += text;
            str += delimiter;
        }
        if (buffer.length < bytes_per_line) {
            str += " ".repeat(padlen);
        }
        // str = rpad(str, self.hex_line_length)
        return str;
    };
    config.maxnumberlen = function (bytes, radix) {
        var result = 2;
        if (bytes == 0) {
            bytes = 1;
        }
        switch (radix) {
            case 2: // BIN: 8, 16, 32, 64
                result = bytes * 8;
                break;
            case 8: // OCT: 3, 6, 11, 22
                switch (bytes) {
                    case 1:
                        result = 3;
                        break;
                    case 2:
                        result = 6;
                        break;
                    case 4:
                        result = 11;
                        break;
                    case 8:
                        result = 22;
                        break;
                }
                break;
            case 10: // DEC: 3, 6, 10, 20
                switch (bytes) {
                    case 1:
                        result = 3;
                        break;
                    case 2:
                        result = 6;
                        break;
                    case 4:
                        result = 10;
                        break;
                    case 8:
                        result = 20;
                        break;
                }
                break;
            case 16: // HEX: 2, 4, 8, 16
                result = 2 * bytes;
                break;
        }
        return result;
    };
    config.col = function (text, c) {
        return c + text + config.color.Reset;
    };
    config.colrole = function () {
        if (config.settings.role == "client") {
            return config.col(config.settings.role, config.color.Dim + config.color.FgBlue);
        }
        return config.col(config.settings.role, config.color.Dim + config.color.FgGreen);
    };
    config.ts = function () {
        if (!config.settings.doDumpTimestamp)
            return "";
        var dt = new Date();
        return "[" + dt.getHours().toString().padStart(2, '0') + ":" + dt.getMinutes().toString().padStart(2, '0') + ":" +
            dt.getSeconds().toString().padStart(2, '0') + "." + dt.getMilliseconds().toString().padStart(3, '0') + "]";
    };
    config.seq = function (sequence, id, rid) {
        var result = "";
        if (config.settings.doDumpMesssagesSeq) {
            result += "[".concat(sequence, "]");
        }
        if (config.settings.doDumpMesssagesIds) {
            result += "[".concat(id, "][").concat(rid, "]");
        }
        return result;
    };
    config.settings = {
        ThrottlerMS: 0,
        EndstreamDelay: 0,
        BeginstreamDelay: 0,
        ChecksumCheckFiles: true,
        ChecksumCheckPackages: false,
        DoPing: false,
        doDumpStack: false,
        doDumpMesssages: false,
        doDumpMesssagesSeq: true,
        doDumpMesssagesIds: true,
        doDumpTimestamp: false,
        doDumpMesssageStreams: false,
        doDumpMessageHexLines: 50,
        doDumpMessageHexBytesPerLine: 16 * 2,
        DoDumpToConsole: false,
        doDumpToFile: false,
        defaultsocketport: 8080,
        defaultwebport: 8080,
        defaultgrpcport: 50051,
        SendFileHighWaterMark: 1024 * 256,
        role: "client"
    };
    config.color = {
        Reset: "\x1b[0m",
        Bright: "\x1b[1m",
        Dim: "\x1b[2m",
        Underscore: "\x1b[4m",
        Blink: "\x1b[5m",
        Reverse: "\x1b[7m",
        Hidden: "\x1b[8m",
        FgBlack: "\x1b[30m",
        FgRed: "\x1b[31m",
        FgGreen: "\x1b[32m",
        // FgYellow: "\x1b[33m",
        FgYellow: "\x1b[93m",
        FgBlue: "\x1b[34m",
        FgMagenta: "\x1b[35m",
        FgCyan: "\x1b[36m",
        FgWhite: "\x1b[37m",
        BgBlack: "\x1b[40m",
        BgRed: "\x1b[41m",
        BgGreen: "\x1b[42m",
        BgYellow: "\x1b[43m",
        BgBlue: "\x1b[44m",
        BgMagenta: "\x1b[45m",
        BgCyan: "\x1b[46m",
        BgWhite: "\x1b[47m",
    };
    config.filecounter = 0;
    config.filedata = "";
    return config;
}());
exports.config = config;
//# sourceMappingURL=config.js.map