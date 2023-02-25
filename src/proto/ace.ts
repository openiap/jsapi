/* eslint-disable */
import * as _m0 from "protobufjs/minimal";

export const protobufPackage = "openiap";

export interface Ace {
  _id: string;
  deny: boolean;
  rights: number;
}

function createBaseAce(): Ace {
  return { _id: "", deny: false, rights: 0 };
}

export const Ace = {
  encode(message: Ace, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message._id !== "") {
      writer.uint32(10).string(message._id);
    }
    if (message.deny === true) {
      writer.uint32(16).bool(message.deny);
    }
    if (message.rights !== 0) {
      writer.uint32(24).int32(message.rights);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Ace {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAce();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message._id = reader.string();
          break;
        case 2:
          message.deny = reader.bool();
          break;
        case 3:
          message.rights = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Ace {
    return {
      _id: isSet(object._id) ? String(object._id) : "",
      deny: isSet(object.deny) ? Boolean(object.deny) : false,
      rights: isSet(object.rights) ? Number(object.rights) : 0,
    };
  },

  toJSON(message: Ace): unknown {
    const obj: any = {};
    message._id !== undefined && (obj._id = message._id);
    message.deny !== undefined && (obj.deny = message.deny);
    message.rights !== undefined && (obj.rights = Math.round(message.rights));
    return obj;
  },

  create<I extends Exact<DeepPartial<Ace>, I>>(base?: I): Ace {
    return Ace.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Ace>, I>>(object: I): Ace {
    const message = createBaseAce();
    message._id = object._id ?? "";
    message.deny = object.deny ?? false;
    message.rights = object.rights ?? 0;
    return message;
  },
};

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & { [K in Exclude<keyof I, KeysOfUnion<P>>]: never };

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
