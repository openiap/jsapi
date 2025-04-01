export const __esModule: true;
export function config(): void;
export namespace config {
    function info(message: any): void;
    function warn(message: any): void;
    function err(error: any): void;
    function dumpmessage(direction: any, message: any): void;
    function dumpdata(data: any): void;
    function hex(buffer: any, bytes_per_line: any, bytes_per_group: any, radix: any, littleEndian: any): string;
    function maxnumberlen(bytes: any, radix: any): number;
    function col(text: any, c: any): string;
    function colrole(): string;
    function ts(): string;
    function seq(sequence: any, id: any, rid: any): string;
    namespace settings {
        const ThrottlerMS: number;
        const EndstreamDelay: number;
        const BeginstreamDelay: number;
        const ChecksumCheckFiles: boolean;
        const ChecksumCheckPackages: boolean;
        const DoPing: boolean;
        const doDumpStack: boolean;
        const doDumpMesssages: boolean;
        const doDumpMesssagesSeq: boolean;
        const doDumpMesssagesIds: boolean;
        const doDumpTimestamp: boolean;
        const doDumpMesssageStreams: boolean;
        const doDumpMessageHexLines: number;
        const doDumpMessageHexBytesPerLine: number;
        const DoDumpToConsole: boolean;
        const doDumpToFile: boolean;
        const defaultsocketport: number;
        const defaultwebport: number;
        const defaultgrpcport: number;
        const SendFileHighWaterMark: number;
        const role: string;
    }
    namespace color {
        const Reset: string;
        const Bright: string;
        const Dim: string;
        const Underscore: string;
        const Blink: string;
        const Reverse: string;
        const Hidden: string;
        const FgBlack: string;
        const FgRed: string;
        const FgGreen: string;
        const FgYellow: string;
        const FgBlue: string;
        const FgMagenta: string;
        const FgCyan: string;
        const FgWhite: string;
        const BgBlack: string;
        const BgRed: string;
        const BgGreen: string;
        const BgYellow: string;
        const BgBlue: string;
        const BgMagenta: string;
        const BgCyan: string;
        const BgWhite: string;
    }
    const filecounter: number;
    const filedata: string;
}
