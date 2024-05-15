"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StripeCustomer = exports.StripeSubscription = exports.StripeSubscriptionItem = exports.StripePlan = exports.StripePrice = exports.StripeRecurring = exports.StripeTaxId = exports.StripeTaxVerification = exports.StripeCustomerAddress = exports.StripeCustomerDiscount = exports.StripeCoupon = exports.protobufPackage = void 0;
/* eslint-disable */
var _m0 = require("protobufjs/minimal");
exports.protobufPackage = "openiap";
function createBaseStripeCoupon() {
    return { duration: "", duration_in_months: 0, name: "" };
}
exports.StripeCoupon = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.duration !== "") {
            writer.uint32(10).string(message.duration);
        }
        if (message.duration_in_months !== 0) {
            writer.uint32(16).int32(message.duration_in_months);
        }
        if (message.name !== "") {
            writer.uint32(26).string(message.name);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseStripeCoupon();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.duration = reader.string();
                    break;
                case 2:
                    message.duration_in_months = reader.int32();
                    break;
                case 3:
                    message.name = reader.string();
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
            duration: isSet(object.duration) ? String(object.duration) : "",
            duration_in_months: isSet(object.duration_in_months) ? Number(object.duration_in_months) : 0,
            name: isSet(object.name) ? String(object.name) : "",
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.duration !== undefined && (obj.duration = message.duration);
        message.duration_in_months !== undefined && (obj.duration_in_months = Math.round(message.duration_in_months));
        message.name !== undefined && (obj.name = message.name);
        return obj;
    },
    create: function (base) {
        return exports.StripeCoupon.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var _a, _b, _c;
        var message = createBaseStripeCoupon();
        message.duration = (_a = object.duration) !== null && _a !== void 0 ? _a : "";
        message.duration_in_months = (_b = object.duration_in_months) !== null && _b !== void 0 ? _b : 0;
        message.name = (_c = object.name) !== null && _c !== void 0 ? _c : "";
        return message;
    },
};
function createBaseStripeCustomerDiscount() {
    return { subscription: "", start: 0, customer: "", coupon: undefined };
}
exports.StripeCustomerDiscount = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.subscription !== "") {
            writer.uint32(10).string(message.subscription);
        }
        if (message.start !== 0) {
            writer.uint32(16).int32(message.start);
        }
        if (message.customer !== "") {
            writer.uint32(26).string(message.customer);
        }
        if (message.coupon !== undefined) {
            exports.StripeCoupon.encode(message.coupon, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseStripeCustomerDiscount();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.subscription = reader.string();
                    break;
                case 2:
                    message.start = reader.int32();
                    break;
                case 3:
                    message.customer = reader.string();
                    break;
                case 4:
                    message.coupon = exports.StripeCoupon.decode(reader, reader.uint32());
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
            subscription: isSet(object.subscription) ? String(object.subscription) : "",
            start: isSet(object.start) ? Number(object.start) : 0,
            customer: isSet(object.customer) ? String(object.customer) : "",
            coupon: isSet(object.coupon) ? exports.StripeCoupon.fromJSON(object.coupon) : undefined,
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.subscription !== undefined && (obj.subscription = message.subscription);
        message.start !== undefined && (obj.start = Math.round(message.start));
        message.customer !== undefined && (obj.customer = message.customer);
        message.coupon !== undefined && (obj.coupon = message.coupon ? exports.StripeCoupon.toJSON(message.coupon) : undefined);
        return obj;
    },
    create: function (base) {
        return exports.StripeCustomerDiscount.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var _a, _b, _c;
        var message = createBaseStripeCustomerDiscount();
        message.subscription = (_a = object.subscription) !== null && _a !== void 0 ? _a : "";
        message.start = (_b = object.start) !== null && _b !== void 0 ? _b : 0;
        message.customer = (_c = object.customer) !== null && _c !== void 0 ? _c : "";
        message.coupon = (object.coupon !== undefined && object.coupon !== null)
            ? exports.StripeCoupon.fromPartial(object.coupon)
            : undefined;
        return message;
    },
};
function createBaseStripeCustomerAddress() {
    return { line1: "", line2: "", postal_code: "", city: "", state: "", country: "" };
}
exports.StripeCustomerAddress = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.line1 !== "") {
            writer.uint32(10).string(message.line1);
        }
        if (message.line2 !== "") {
            writer.uint32(18).string(message.line2);
        }
        if (message.postal_code !== "") {
            writer.uint32(26).string(message.postal_code);
        }
        if (message.city !== "") {
            writer.uint32(34).string(message.city);
        }
        if (message.state !== "") {
            writer.uint32(42).string(message.state);
        }
        if (message.country !== "") {
            writer.uint32(50).string(message.country);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseStripeCustomerAddress();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.line1 = reader.string();
                    break;
                case 2:
                    message.line2 = reader.string();
                    break;
                case 3:
                    message.postal_code = reader.string();
                    break;
                case 4:
                    message.city = reader.string();
                    break;
                case 5:
                    message.state = reader.string();
                    break;
                case 6:
                    message.country = reader.string();
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
            line1: isSet(object.line1) ? String(object.line1) : "",
            line2: isSet(object.line2) ? String(object.line2) : "",
            postal_code: isSet(object.postal_code) ? String(object.postal_code) : "",
            city: isSet(object.city) ? String(object.city) : "",
            state: isSet(object.state) ? String(object.state) : "",
            country: isSet(object.country) ? String(object.country) : "",
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.line1 !== undefined && (obj.line1 = message.line1);
        message.line2 !== undefined && (obj.line2 = message.line2);
        message.postal_code !== undefined && (obj.postal_code = message.postal_code);
        message.city !== undefined && (obj.city = message.city);
        message.state !== undefined && (obj.state = message.state);
        message.country !== undefined && (obj.country = message.country);
        return obj;
    },
    create: function (base) {
        return exports.StripeCustomerAddress.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var _a, _b, _c, _d, _e, _f;
        var message = createBaseStripeCustomerAddress();
        message.line1 = (_a = object.line1) !== null && _a !== void 0 ? _a : "";
        message.line2 = (_b = object.line2) !== null && _b !== void 0 ? _b : "";
        message.postal_code = (_c = object.postal_code) !== null && _c !== void 0 ? _c : "";
        message.city = (_d = object.city) !== null && _d !== void 0 ? _d : "";
        message.state = (_e = object.state) !== null && _e !== void 0 ? _e : "";
        message.country = (_f = object.country) !== null && _f !== void 0 ? _f : "";
        return message;
    },
};
function createBaseStripeTaxVerification() {
    return { status: "", verified_address: "", verified_name: "" };
}
exports.StripeTaxVerification = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.status !== "") {
            writer.uint32(10).string(message.status);
        }
        if (message.verified_address !== "") {
            writer.uint32(18).string(message.verified_address);
        }
        if (message.verified_name !== "") {
            writer.uint32(26).string(message.verified_name);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseStripeTaxVerification();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.status = reader.string();
                    break;
                case 2:
                    message.verified_address = reader.string();
                    break;
                case 3:
                    message.verified_name = reader.string();
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
            status: isSet(object.status) ? String(object.status) : "",
            verified_address: isSet(object.verified_address) ? String(object.verified_address) : "",
            verified_name: isSet(object.verified_name) ? String(object.verified_name) : "",
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.status !== undefined && (obj.status = message.status);
        message.verified_address !== undefined && (obj.verified_address = message.verified_address);
        message.verified_name !== undefined && (obj.verified_name = message.verified_name);
        return obj;
    },
    create: function (base) {
        return exports.StripeTaxVerification.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var _a, _b, _c;
        var message = createBaseStripeTaxVerification();
        message.status = (_a = object.status) !== null && _a !== void 0 ? _a : "";
        message.verified_address = (_b = object.verified_address) !== null && _b !== void 0 ? _b : "";
        message.verified_name = (_c = object.verified_name) !== null && _c !== void 0 ? _c : "";
        return message;
    },
};
function createBaseStripeTaxId() {
    return { country: "", customer: "", type: "", value: "", verification: undefined };
}
exports.StripeTaxId = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.country !== "") {
            writer.uint32(10).string(message.country);
        }
        if (message.customer !== "") {
            writer.uint32(18).string(message.customer);
        }
        if (message.type !== "") {
            writer.uint32(26).string(message.type);
        }
        if (message.value !== "") {
            writer.uint32(34).string(message.value);
        }
        if (message.verification !== undefined) {
            exports.StripeTaxVerification.encode(message.verification, writer.uint32(42).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseStripeTaxId();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.country = reader.string();
                    break;
                case 2:
                    message.customer = reader.string();
                    break;
                case 3:
                    message.type = reader.string();
                    break;
                case 4:
                    message.value = reader.string();
                    break;
                case 5:
                    message.verification = exports.StripeTaxVerification.decode(reader, reader.uint32());
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
            country: isSet(object.country) ? String(object.country) : "",
            customer: isSet(object.customer) ? String(object.customer) : "",
            type: isSet(object.type) ? String(object.type) : "",
            value: isSet(object.value) ? String(object.value) : "",
            verification: isSet(object.verification) ? exports.StripeTaxVerification.fromJSON(object.verification) : undefined,
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.country !== undefined && (obj.country = message.country);
        message.customer !== undefined && (obj.customer = message.customer);
        message.type !== undefined && (obj.type = message.type);
        message.value !== undefined && (obj.value = message.value);
        message.verification !== undefined &&
            (obj.verification = message.verification ? exports.StripeTaxVerification.toJSON(message.verification) : undefined);
        return obj;
    },
    create: function (base) {
        return exports.StripeTaxId.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var _a, _b, _c, _d;
        var message = createBaseStripeTaxId();
        message.country = (_a = object.country) !== null && _a !== void 0 ? _a : "";
        message.customer = (_b = object.customer) !== null && _b !== void 0 ? _b : "";
        message.type = (_c = object.type) !== null && _c !== void 0 ? _c : "";
        message.value = (_d = object.value) !== null && _d !== void 0 ? _d : "";
        message.verification = (object.verification !== undefined && object.verification !== null)
            ? exports.StripeTaxVerification.fromPartial(object.verification)
            : undefined;
        return message;
    },
};
function createBaseStripeRecurring() {
    return { interval: "", interval_count: 0, trial_period_days: 0, usage_type: "" };
}
exports.StripeRecurring = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.interval !== "") {
            writer.uint32(10).string(message.interval);
        }
        if (message.interval_count !== 0) {
            writer.uint32(16).int32(message.interval_count);
        }
        if (message.trial_period_days !== 0) {
            writer.uint32(24).int32(message.trial_period_days);
        }
        if (message.usage_type !== "") {
            writer.uint32(34).string(message.usage_type);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseStripeRecurring();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.interval = reader.string();
                    break;
                case 2:
                    message.interval_count = reader.int32();
                    break;
                case 3:
                    message.trial_period_days = reader.int32();
                    break;
                case 4:
                    message.usage_type = reader.string();
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
            interval: isSet(object.interval) ? String(object.interval) : "",
            interval_count: isSet(object.interval_count) ? Number(object.interval_count) : 0,
            trial_period_days: isSet(object.trial_period_days) ? Number(object.trial_period_days) : 0,
            usage_type: isSet(object.usage_type) ? String(object.usage_type) : "",
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.interval !== undefined && (obj.interval = message.interval);
        message.interval_count !== undefined && (obj.interval_count = Math.round(message.interval_count));
        message.trial_period_days !== undefined && (obj.trial_period_days = Math.round(message.trial_period_days));
        message.usage_type !== undefined && (obj.usage_type = message.usage_type);
        return obj;
    },
    create: function (base) {
        return exports.StripeRecurring.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var _a, _b, _c, _d;
        var message = createBaseStripeRecurring();
        message.interval = (_a = object.interval) !== null && _a !== void 0 ? _a : "";
        message.interval_count = (_b = object.interval_count) !== null && _b !== void 0 ? _b : 0;
        message.trial_period_days = (_c = object.trial_period_days) !== null && _c !== void 0 ? _c : 0;
        message.usage_type = (_d = object.usage_type) !== null && _d !== void 0 ? _d : "";
        return message;
    },
};
function createBaseStripePrice() {
    return { nickname: "", product: "", active: false, billing_scheme: "", currency: "", recurring: undefined };
}
exports.StripePrice = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.nickname !== "") {
            writer.uint32(10).string(message.nickname);
        }
        if (message.product !== "") {
            writer.uint32(18).string(message.product);
        }
        if (message.active === true) {
            writer.uint32(24).bool(message.active);
        }
        if (message.billing_scheme !== "") {
            writer.uint32(34).string(message.billing_scheme);
        }
        if (message.currency !== "") {
            writer.uint32(42).string(message.currency);
        }
        if (message.recurring !== undefined) {
            exports.StripeRecurring.encode(message.recurring, writer.uint32(50).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseStripePrice();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.nickname = reader.string();
                    break;
                case 2:
                    message.product = reader.string();
                    break;
                case 3:
                    message.active = reader.bool();
                    break;
                case 4:
                    message.billing_scheme = reader.string();
                    break;
                case 5:
                    message.currency = reader.string();
                    break;
                case 6:
                    message.recurring = exports.StripeRecurring.decode(reader, reader.uint32());
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
            nickname: isSet(object.nickname) ? String(object.nickname) : "",
            product: isSet(object.product) ? String(object.product) : "",
            active: isSet(object.active) ? Boolean(object.active) : false,
            billing_scheme: isSet(object.billing_scheme) ? String(object.billing_scheme) : "",
            currency: isSet(object.currency) ? String(object.currency) : "",
            recurring: isSet(object.recurring) ? exports.StripeRecurring.fromJSON(object.recurring) : undefined,
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.nickname !== undefined && (obj.nickname = message.nickname);
        message.product !== undefined && (obj.product = message.product);
        message.active !== undefined && (obj.active = message.active);
        message.billing_scheme !== undefined && (obj.billing_scheme = message.billing_scheme);
        message.currency !== undefined && (obj.currency = message.currency);
        message.recurring !== undefined &&
            (obj.recurring = message.recurring ? exports.StripeRecurring.toJSON(message.recurring) : undefined);
        return obj;
    },
    create: function (base) {
        return exports.StripePrice.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var _a, _b, _c, _d, _e;
        var message = createBaseStripePrice();
        message.nickname = (_a = object.nickname) !== null && _a !== void 0 ? _a : "";
        message.product = (_b = object.product) !== null && _b !== void 0 ? _b : "";
        message.active = (_c = object.active) !== null && _c !== void 0 ? _c : false;
        message.billing_scheme = (_d = object.billing_scheme) !== null && _d !== void 0 ? _d : "";
        message.currency = (_e = object.currency) !== null && _e !== void 0 ? _e : "";
        message.recurring = (object.recurring !== undefined && object.recurring !== null)
            ? exports.StripeRecurring.fromPartial(object.recurring)
            : undefined;
        return message;
    },
};
function createBaseStripePlan() {
    return { status: false, nickname: "", product: "", amount: 0, usage_type: "" };
}
exports.StripePlan = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.status === true) {
            writer.uint32(8).bool(message.status);
        }
        if (message.nickname !== "") {
            writer.uint32(18).string(message.nickname);
        }
        if (message.product !== "") {
            writer.uint32(26).string(message.product);
        }
        if (message.amount !== 0) {
            writer.uint32(32).int32(message.amount);
        }
        if (message.usage_type !== "") {
            writer.uint32(42).string(message.usage_type);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseStripePlan();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.status = reader.bool();
                    break;
                case 2:
                    message.nickname = reader.string();
                    break;
                case 3:
                    message.product = reader.string();
                    break;
                case 4:
                    message.amount = reader.int32();
                    break;
                case 5:
                    message.usage_type = reader.string();
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
            status: isSet(object.status) ? Boolean(object.status) : false,
            nickname: isSet(object.nickname) ? String(object.nickname) : "",
            product: isSet(object.product) ? String(object.product) : "",
            amount: isSet(object.amount) ? Number(object.amount) : 0,
            usage_type: isSet(object.usage_type) ? String(object.usage_type) : "",
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.status !== undefined && (obj.status = message.status);
        message.nickname !== undefined && (obj.nickname = message.nickname);
        message.product !== undefined && (obj.product = message.product);
        message.amount !== undefined && (obj.amount = Math.round(message.amount));
        message.usage_type !== undefined && (obj.usage_type = message.usage_type);
        return obj;
    },
    create: function (base) {
        return exports.StripePlan.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var _a, _b, _c, _d, _e;
        var message = createBaseStripePlan();
        message.status = (_a = object.status) !== null && _a !== void 0 ? _a : false;
        message.nickname = (_b = object.nickname) !== null && _b !== void 0 ? _b : "";
        message.product = (_c = object.product) !== null && _c !== void 0 ? _c : "";
        message.amount = (_d = object.amount) !== null && _d !== void 0 ? _d : 0;
        message.usage_type = (_e = object.usage_type) !== null && _e !== void 0 ? _e : "";
        return message;
    },
};
function createBaseStripeSubscriptionItem() {
    return { id: "", quantity: "", subscription: "", plan: undefined, price: undefined };
}
exports.StripeSubscriptionItem = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.id !== "") {
            writer.uint32(10).string(message.id);
        }
        if (message.quantity !== "") {
            writer.uint32(18).string(message.quantity);
        }
        if (message.subscription !== "") {
            writer.uint32(26).string(message.subscription);
        }
        if (message.plan !== undefined) {
            exports.StripePlan.encode(message.plan, writer.uint32(34).fork()).ldelim();
        }
        if (message.price !== undefined) {
            exports.StripePrice.encode(message.price, writer.uint32(42).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseStripeSubscriptionItem();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = reader.string();
                    break;
                case 2:
                    message.quantity = reader.string();
                    break;
                case 3:
                    message.subscription = reader.string();
                    break;
                case 4:
                    message.plan = exports.StripePlan.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.price = exports.StripePrice.decode(reader, reader.uint32());
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
            id: isSet(object.id) ? String(object.id) : "",
            quantity: isSet(object.quantity) ? String(object.quantity) : "",
            subscription: isSet(object.subscription) ? String(object.subscription) : "",
            plan: isSet(object.plan) ? exports.StripePlan.fromJSON(object.plan) : undefined,
            price: isSet(object.price) ? exports.StripePrice.fromJSON(object.price) : undefined,
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.id !== undefined && (obj.id = message.id);
        message.quantity !== undefined && (obj.quantity = message.quantity);
        message.subscription !== undefined && (obj.subscription = message.subscription);
        message.plan !== undefined && (obj.plan = message.plan ? exports.StripePlan.toJSON(message.plan) : undefined);
        message.price !== undefined && (obj.price = message.price ? exports.StripePrice.toJSON(message.price) : undefined);
        return obj;
    },
    create: function (base) {
        return exports.StripeSubscriptionItem.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var _a, _b, _c;
        var message = createBaseStripeSubscriptionItem();
        message.id = (_a = object.id) !== null && _a !== void 0 ? _a : "";
        message.quantity = (_b = object.quantity) !== null && _b !== void 0 ? _b : "";
        message.subscription = (_c = object.subscription) !== null && _c !== void 0 ? _c : "";
        message.plan = (object.plan !== undefined && object.plan !== null)
            ? exports.StripePlan.fromPartial(object.plan)
            : undefined;
        message.price = (object.price !== undefined && object.price !== null)
            ? exports.StripePrice.fromPartial(object.price)
            : undefined;
        return message;
    },
};
function createBaseStripeSubscription() {
    return { address: "", balance: 0, currency: "", subscriptions: [], tax_ids: [], items: [], default_tax_rates: [] };
}
exports.StripeSubscription = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.address !== "") {
            writer.uint32(10).string(message.address);
        }
        if (message.balance !== 0) {
            writer.uint32(16).int32(message.balance);
        }
        if (message.currency !== "") {
            writer.uint32(26).string(message.currency);
        }
        for (var _i = 0, _a = message.subscriptions; _i < _a.length; _i++) {
            var v = _a[_i];
            exports.StripeSubscription.encode(v, writer.uint32(34).fork()).ldelim();
        }
        for (var _b = 0, _c = message.tax_ids; _b < _c.length; _b++) {
            var v = _c[_b];
            exports.StripeTaxId.encode(v, writer.uint32(42).fork()).ldelim();
        }
        for (var _d = 0, _e = message.items; _d < _e.length; _d++) {
            var v = _e[_d];
            exports.StripeSubscriptionItem.encode(v, writer.uint32(50).fork()).ldelim();
        }
        for (var _f = 0, _g = message.default_tax_rates; _f < _g.length; _f++) {
            var v = _g[_f];
            writer.uint32(58).string(v);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseStripeSubscription();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.address = reader.string();
                    break;
                case 2:
                    message.balance = reader.int32();
                    break;
                case 3:
                    message.currency = reader.string();
                    break;
                case 4:
                    message.subscriptions.push(exports.StripeSubscription.decode(reader, reader.uint32()));
                    break;
                case 5:
                    message.tax_ids.push(exports.StripeTaxId.decode(reader, reader.uint32()));
                    break;
                case 6:
                    message.items.push(exports.StripeSubscriptionItem.decode(reader, reader.uint32()));
                    break;
                case 7:
                    message.default_tax_rates.push(reader.string());
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
            address: isSet(object.address) ? String(object.address) : "",
            balance: isSet(object.balance) ? Number(object.balance) : 0,
            currency: isSet(object.currency) ? String(object.currency) : "",
            subscriptions: Array.isArray(object === null || object === void 0 ? void 0 : object.subscriptions)
                ? object.subscriptions.map(function (e) { return exports.StripeSubscription.fromJSON(e); })
                : [],
            tax_ids: Array.isArray(object === null || object === void 0 ? void 0 : object.tax_ids) ? object.tax_ids.map(function (e) { return exports.StripeTaxId.fromJSON(e); }) : [],
            items: Array.isArray(object === null || object === void 0 ? void 0 : object.items) ? object.items.map(function (e) { return exports.StripeSubscriptionItem.fromJSON(e); }) : [],
            default_tax_rates: Array.isArray(object === null || object === void 0 ? void 0 : object.default_tax_rates)
                ? object.default_tax_rates.map(function (e) { return String(e); })
                : [],
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.address !== undefined && (obj.address = message.address);
        message.balance !== undefined && (obj.balance = Math.round(message.balance));
        message.currency !== undefined && (obj.currency = message.currency);
        if (message.subscriptions) {
            obj.subscriptions = message.subscriptions.map(function (e) { return e ? exports.StripeSubscription.toJSON(e) : undefined; });
        }
        else {
            obj.subscriptions = [];
        }
        if (message.tax_ids) {
            obj.tax_ids = message.tax_ids.map(function (e) { return e ? exports.StripeTaxId.toJSON(e) : undefined; });
        }
        else {
            obj.tax_ids = [];
        }
        if (message.items) {
            obj.items = message.items.map(function (e) { return e ? exports.StripeSubscriptionItem.toJSON(e) : undefined; });
        }
        else {
            obj.items = [];
        }
        if (message.default_tax_rates) {
            obj.default_tax_rates = message.default_tax_rates.map(function (e) { return e; });
        }
        else {
            obj.default_tax_rates = [];
        }
        return obj;
    },
    create: function (base) {
        return exports.StripeSubscription.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var _a, _b, _c, _d, _e, _f, _g;
        var message = createBaseStripeSubscription();
        message.address = (_a = object.address) !== null && _a !== void 0 ? _a : "";
        message.balance = (_b = object.balance) !== null && _b !== void 0 ? _b : 0;
        message.currency = (_c = object.currency) !== null && _c !== void 0 ? _c : "";
        message.subscriptions = ((_d = object.subscriptions) === null || _d === void 0 ? void 0 : _d.map(function (e) { return exports.StripeSubscription.fromPartial(e); })) || [];
        message.tax_ids = ((_e = object.tax_ids) === null || _e === void 0 ? void 0 : _e.map(function (e) { return exports.StripeTaxId.fromPartial(e); })) || [];
        message.items = ((_f = object.items) === null || _f === void 0 ? void 0 : _f.map(function (e) { return exports.StripeSubscriptionItem.fromPartial(e); })) || [];
        message.default_tax_rates = ((_g = object.default_tax_rates) === null || _g === void 0 ? void 0 : _g.map(function (e) { return e; })) || [];
        return message;
    },
};
function createBaseStripeCustomer() {
    return {
        address: undefined,
        description: "",
        name: "",
        email: "",
        tax_ids: [],
        subscriptions: [],
        discount: undefined,
    };
}
exports.StripeCustomer = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.address !== undefined) {
            exports.StripeCustomerAddress.encode(message.address, writer.uint32(10).fork()).ldelim();
        }
        if (message.description !== "") {
            writer.uint32(18).string(message.description);
        }
        if (message.name !== "") {
            writer.uint32(26).string(message.name);
        }
        if (message.email !== "") {
            writer.uint32(34).string(message.email);
        }
        for (var _i = 0, _a = message.tax_ids; _i < _a.length; _i++) {
            var v = _a[_i];
            exports.StripeTaxId.encode(v, writer.uint32(42).fork()).ldelim();
        }
        for (var _b = 0, _c = message.subscriptions; _b < _c.length; _b++) {
            var v = _c[_b];
            exports.StripeSubscription.encode(v, writer.uint32(50).fork()).ldelim();
        }
        if (message.discount !== undefined) {
            exports.StripeCustomerDiscount.encode(message.discount, writer.uint32(58).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseStripeCustomer();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.address = exports.StripeCustomerAddress.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.description = reader.string();
                    break;
                case 3:
                    message.name = reader.string();
                    break;
                case 4:
                    message.email = reader.string();
                    break;
                case 5:
                    message.tax_ids.push(exports.StripeTaxId.decode(reader, reader.uint32()));
                    break;
                case 6:
                    message.subscriptions.push(exports.StripeSubscription.decode(reader, reader.uint32()));
                    break;
                case 7:
                    message.discount = exports.StripeCustomerDiscount.decode(reader, reader.uint32());
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
            address: isSet(object.address) ? exports.StripeCustomerAddress.fromJSON(object.address) : undefined,
            description: isSet(object.description) ? String(object.description) : "",
            name: isSet(object.name) ? String(object.name) : "",
            email: isSet(object.email) ? String(object.email) : "",
            tax_ids: Array.isArray(object === null || object === void 0 ? void 0 : object.tax_ids) ? object.tax_ids.map(function (e) { return exports.StripeTaxId.fromJSON(e); }) : [],
            subscriptions: Array.isArray(object === null || object === void 0 ? void 0 : object.subscriptions)
                ? object.subscriptions.map(function (e) { return exports.StripeSubscription.fromJSON(e); })
                : [],
            discount: isSet(object.discount) ? exports.StripeCustomerDiscount.fromJSON(object.discount) : undefined,
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.address !== undefined &&
            (obj.address = message.address ? exports.StripeCustomerAddress.toJSON(message.address) : undefined);
        message.description !== undefined && (obj.description = message.description);
        message.name !== undefined && (obj.name = message.name);
        message.email !== undefined && (obj.email = message.email);
        if (message.tax_ids) {
            obj.tax_ids = message.tax_ids.map(function (e) { return e ? exports.StripeTaxId.toJSON(e) : undefined; });
        }
        else {
            obj.tax_ids = [];
        }
        if (message.subscriptions) {
            obj.subscriptions = message.subscriptions.map(function (e) { return e ? exports.StripeSubscription.toJSON(e) : undefined; });
        }
        else {
            obj.subscriptions = [];
        }
        message.discount !== undefined &&
            (obj.discount = message.discount ? exports.StripeCustomerDiscount.toJSON(message.discount) : undefined);
        return obj;
    },
    create: function (base) {
        return exports.StripeCustomer.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var _a, _b, _c, _d, _e;
        var message = createBaseStripeCustomer();
        message.address = (object.address !== undefined && object.address !== null)
            ? exports.StripeCustomerAddress.fromPartial(object.address)
            : undefined;
        message.description = (_a = object.description) !== null && _a !== void 0 ? _a : "";
        message.name = (_b = object.name) !== null && _b !== void 0 ? _b : "";
        message.email = (_c = object.email) !== null && _c !== void 0 ? _c : "";
        message.tax_ids = ((_d = object.tax_ids) === null || _d === void 0 ? void 0 : _d.map(function (e) { return exports.StripeTaxId.fromPartial(e); })) || [];
        message.subscriptions = ((_e = object.subscriptions) === null || _e === void 0 ? void 0 : _e.map(function (e) { return exports.StripeSubscription.fromPartial(e); })) || [];
        message.discount = (object.discount !== undefined && object.discount !== null)
            ? exports.StripeCustomerDiscount.fromPartial(object.discount)
            : undefined;
        return message;
    },
};
function isSet(value) {
    return value !== null && value !== undefined;
}
//# sourceMappingURL=stripe.js.map