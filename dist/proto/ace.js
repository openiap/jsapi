"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Ace = exports.protobufPackage = void 0;
/* eslint-disable */
var _m0 = require("protobufjs/minimal");
exports.protobufPackage = "openiap";
function createBaseAce() {
    return { _id: "", deny: false, rights: 0 };
}
exports.Ace = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
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
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseAce();
        while (reader.pos < end) {
            var tag = reader.uint32();
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
    fromJSON: function (object) {
        return {
            _id: isSet(object._id) ? String(object._id) : "",
            deny: isSet(object.deny) ? Boolean(object.deny) : false,
            rights: isSet(object.rights) ? Number(object.rights) : 0,
        };
    },
    toJSON: function (message) {
        var obj = {};
        message._id !== undefined && (obj._id = message._id);
        message.deny !== undefined && (obj.deny = message.deny);
        message.rights !== undefined && (obj.rights = Math.round(message.rights));
        return obj;
    },
    create: function (base) {
        return exports.Ace.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var _a, _b, _c;
        var message = createBaseAce();
        message._id = (_a = object._id) !== null && _a !== void 0 ? _a : "";
        message.deny = (_b = object.deny) !== null && _b !== void 0 ? _b : false;
        message.rights = (_c = object.rights) !== null && _c !== void 0 ? _c : 0;
        return message;
    },
};
function isSet(value) {
    return value !== null && value !== undefined;
}
//# sourceMappingURL=ace.js.map