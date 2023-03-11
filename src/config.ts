export class config {
  public static instance: config;
  public static ThrottlerMS:number = 0;
  public static EndstreamDelay:number = 0;
  public static BeginstreamDelay:number = 0;
  public static ChecksumCheckFiles:boolean = true;
  public static ChecksumCheckPackages:boolean = false;
  public static DoPing:boolean = true;
  public static doDumpStack:boolean = false;
  public static doDumpMesssages:boolean = false;
  public static doDumpMesssagesSeq:boolean = true;
  public static doDumpMesssagesIds:boolean = true;
  public static doDumpTimestamp:boolean = false;
  public static doDumpMesssageStreams:boolean = true;
  public static doDumpMessageHexLines:number = 50
  public static doDumpMessageHexBytesPerLine:number = 16 * 2;
  public static DoDumpToConsole:boolean = false;
  public static doDumpToFile:boolean = false;
  public static defaultsocketport:number = 8080;
  public static defaultwebport:number = 8080;
  public static defaultgrpcport:number = 50051; // 50051;
  public static SendFileHighWaterMark:number = 1024 * 256;
  public static role:string = "client";

  public static color = {
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
    FgYellow: "\x1b[93m", // bright yellow 
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
  }
  public static info(message:string) {
    console.log(`[${config.colrole()}][${config.col("INF", config.color.FgCyan)}] ${message}`);
  }
  public static warn(message:string) {
    console.log(`[${config.colrole()}][${config.col("WAR", config.color.FgYellow + config.color.Bright)}] ${message}`);
  }
  public static err(error:any) {
    if(!error) return;
    if (error && error.stack && config.doDumpStack) {
      console.log(`[${config.colrole()}][${config.col("ERR", config.color.FgRed)}] ${error.stack}`);
      return
    }
    console.log(`[${config.colrole()}][${config.col("ERR", config.color.FgRed)}] ${error.message ? error.message : error}`);
  }
  public static dumpmessage(direction:string, message:any) {
    if (!config.doDumpMesssages) return;
    let { id, rid, command } = message;
    let sequence = message.seq;
    if (command == "beginstream" || command == "stream" || command == "endstream") {
      if (!config.doDumpMesssageStreams)
        return;
    }
    if (!rid) rid = "";
    rid = rid.padEnd(4, " ");
    if (!id) id = "";
    id = id.padEnd(4, " ");
    var data = message.data;
    if (command == "stream") data = "... " + data.length + " bytes";
    if (data) {
      if(data.value) {
        data = data.value.toString();
      } else {
        data = data.toString();
      }
      // data = data.replace(/[^\x00-\x7F]/g, "");
      data = data.replace(/[^A-Za-z 0-9 \.,\?""!@#\$%\^&\*\(\)-_=\+;:<>\/\\\|\}\{\[\]`~]*/g, '')
    } else {
      data = "";
    }
    var columns = 90;
    var sub = 3;
    sub = `${config.ts()}[${config.role}][${direction}]${config.seq(sequence, id, rid)}[${command}] `.length;
    if (data && data.length > columns) data = data.substr(0, columns - sub -3 ) + "...";
    if (direction == "SND") direction = config.col(direction, config.color.Dim + config.color.FgGreen);
    if (direction == "RCV") direction = config.col(direction, config.color.FgCyan);
    command = config.col(command, config.color.FgGreen);
    id = config.col(id, config.color.FgBlue);
    rid = config.col(rid, config.color.FgBlue);
    console.log(`${config.ts()}[${config.colrole()}][${direction}]${config.seq(sequence, id, rid)}[${command}] ${data}`);
    if (data) {
      if (message.command == "stream" && message.data.length > 6) {
        config.dumpdata(message.data);
        if (!config.doDumpMesssageStreams)
          return;
      }
    }
  }
  public static filecounter = 0;
  public static filedata = "";
  public static dumpdata(data: any) {
    var radix = 16;
    var littleEndian = true;
    var content = "";
    const ALL_EXCEPT_PRINTABLE_LATIN = /[^\x20-\x7f]/g
    const CONTROL_CHARACTERS_ONLY = /[\x00-\x1f]/g
    if(config.DoDumpToConsole) {
      for (var start = 0; start < data.length && start < (config.doDumpMessageHexLines*config.doDumpMessageHexBytesPerLine); start += config.doDumpMessageHexBytesPerLine) {
        const end = Math.min(start + config.doDumpMessageHexBytesPerLine, data.length)
        const slice = data.slice(start, end)
        content += config.hex(slice, config.doDumpMessageHexBytesPerLine, 2, radix, littleEndian) + " " + slice.toString('ascii').replace(CONTROL_CHARACTERS_ONLY, ".") + "\n";
      }
      console.log(content.substring(0, content.length - 1));
    }
  
    if(config.doDumpToFile) {
      for (var start = 0; start < data.length; start += config.doDumpMessageHexBytesPerLine) {
        const end = Math.min(start + config.doDumpMessageHexBytesPerLine, data.length)
        const slice = data.slice(start, end)
        content += config.hex(slice, config.doDumpMessageHexBytesPerLine, 2, radix, littleEndian) + " " + slice.toString('ascii').replace(CONTROL_CHARACTERS_ONLY, ".") + "\n";
      }
      
    }
  }
  static hex(buffer: any, bytes_per_line: number, bytes_per_group: number, radix: number, littleEndian: boolean) {
    var str = ""
    const delimiter = bytes_per_group == 0 ? "" : " "
    const group_len = config.maxnumberlen(bytes_per_group, radix)
    const padlen = (bytes_per_line - buffer.length) * (bytes_per_group == 0 ? group_len: (group_len + 1) / bytes_per_group)
    if (bytes_per_group == 0) {
      bytes_per_group = 1
    }
    const start = littleEndian ? bytes_per_group - 1 : 0
    const end   = littleEndian ? -1 : bytes_per_group
    const step  = littleEndian ? -1 : 1
    for (var group = 0; group < buffer.length / bytes_per_group; ++group) {
      var val = bytes_per_group < 4 ? 0 : BigInt(0)
      for (var ii = start; ii != end; ii += step) {
        const i = group * bytes_per_group + ii
        if (i >= buffer.length) { // not rendering dangling bytes.  TODO: render them as smaller grouping
          break
        }
        if (bytes_per_group < 4) {
          // @ts-ignore
          val = val * 256 + ((buffer.constructor == String ? buffer.codePointAt(i) : buffer[i]) & 0xff)
        } else {
          // @ts-ignore
          val = BigInt(val) * 256n + BigInt(((buffer.constructor == String ? buffer.codePointAt(i) : buffer[i]) & 0xff))
        }
      }
      const text = val.toString(radix)
      for (var c = 0; c < group_len - text.length; c++) {
        str += "0"
      }
      str += text
      str += delimiter
    }
    if (buffer.length < bytes_per_line) {
      str += " ".repeat(padlen)
    }
    // str = rpad(str, self.hex_line_length)
    return str
  }
  static maxnumberlen(bytes: number, radix: number) {
    var result = 2
    if (bytes == 0) {
      bytes = 1
    }
    switch (radix) {
      case 2:       // BIN: 8, 16, 32, 64
        result = bytes * 8
        break
      case 8:       // OCT: 3, 6, 11, 22
        switch (bytes) {
          case 1:
            result = 3
            break
          case 2:
            result = 6
            break
          case 4:
            result = 11
            break
          case 8:
            result = 22
            break
        }
        break
      case 10:      // DEC: 3, 6, 10, 20
        switch (bytes) {
          case 1:
            result = 3
            break
          case 2:
            result = 6
            break
          case 4:
            result = 10
            break
          case 8:
            result = 20
            break
        }
        break
      case 16:      // HEX: 2, 4, 8, 16
        result = 2 * bytes
        break
    }
    return result
  }
  public static col(text:string, c:string) {
    return c + text + config.color.Reset;
  }
  static colrole() {
    if (config.role == "client") {
      return config.col(config.role, config.color.Dim + config.color.FgBlue);
    }
    return config.col(config.role, config.color.Dim + config.color.FgGreen);
  }
  static ts() {
    if(!config.doDumpTimestamp) return "";
    var dt = new Date();
    return "[" + dt.getHours().toString().padStart(2, '0') + ":" + dt.getMinutes().toString().padStart(2, '0') + ":" + 
    dt.getSeconds().toString().padStart(2, '0') + "." + dt.getMilliseconds().toString().padStart(3, '0') + "]";
  }
  static seq(sequence: number, id:string, rid:string) {
    var result = "";
    if(config.doDumpMesssagesSeq) {
      result += `[${sequence}]`;
    }
    if(config.doDumpMesssagesIds) {
      result += `[${id}][${rid}]`;
    }
    return result;
  }
}
