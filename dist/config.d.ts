export declare class config {
    static settings: {
        ThrottlerMS: number;
        EndstreamDelay: number;
        BeginstreamDelay: number;
        ChecksumCheckFiles: boolean;
        ChecksumCheckPackages: boolean;
        DoPing: boolean;
        doDumpStack: boolean;
        doDumpMesssages: boolean;
        doDumpMesssagesSeq: boolean;
        doDumpMesssagesIds: boolean;
        doDumpTimestamp: boolean;
        doDumpMesssageStreams: boolean;
        doDumpMessageHexLines: number;
        doDumpMessageHexBytesPerLine: number;
        DoDumpToConsole: boolean;
        doDumpToFile: boolean;
        defaultsocketport: number;
        defaultwebport: number;
        defaultgrpcport: number;
        SendFileHighWaterMark: number;
        role: string;
    };
    static color: {
        Reset: string;
        Bright: string;
        Dim: string;
        Underscore: string;
        Blink: string;
        Reverse: string;
        Hidden: string;
        FgBlack: string;
        FgRed: string;
        FgGreen: string;
        FgYellow: string;
        FgBlue: string;
        FgMagenta: string;
        FgCyan: string;
        FgWhite: string;
        BgBlack: string;
        BgRed: string;
        BgGreen: string;
        BgYellow: string;
        BgBlue: string;
        BgMagenta: string;
        BgCyan: string;
        BgWhite: string;
    };
    static info(message: string): void;
    static warn(message: string): void;
    static err(error: any): void;
    static dumpmessage(direction: string, message: any): void;
    static filecounter: number;
    static filedata: string;
    static dumpdata(data: any): void;
    static hex(buffer: any, bytes_per_line: number, bytes_per_group: number, radix: number, littleEndian: boolean): string;
    static maxnumberlen(bytes: number, radix: number): number;
    static col(text: string, c: string): string;
    static colrole(): string;
    static ts(): string;
    static seq(sequence: number, id: string, rid: string): string;
}
