/* eslint-disable */
import * as _m0 from "protobufjs/minimal";
export const protobufPackage = "openiap";
function createBaseAce() {
    return { _id: "", deny: false, rights: 0 };
}
export const Ace = {
    encode(message, writer = _m0.Writer.create()) {
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
    decode(input, length) {
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
    fromJSON(object) {
        return {
            _id: isSet(object._id) ? String(object._id) : "",
            deny: isSet(object.deny) ? Boolean(object.deny) : false,
            rights: isSet(object.rights) ? Number(object.rights) : 0,
        };
    },
    toJSON(message) {
        const obj = {};
        message._id !== undefined && (obj._id = message._id);
        message.deny !== undefined && (obj.deny = message.deny);
        message.rights !== undefined && (obj.rights = Math.round(message.rights));
        return obj;
    },
    create(base) {
        return Ace.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseAce();
        message._id = object._id ?? "";
        message.deny = object.deny ?? false;
        message.rights = object.rights ?? 0;
        return message;
    },
};
function isSet(value) {
    return value !== null && value !== undefined;
}
//# sourceMappingURL=ace.js.map