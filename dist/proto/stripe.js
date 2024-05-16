/* eslint-disable */
import _m0 from "protobufjs/minimal.js";
export const protobufPackage = "openiap";
function createBaseStripeCoupon() {
    return { duration: "", duration_in_months: 0, name: "" };
}
export const StripeCoupon = {
    encode(message, writer = _m0.Writer.create()) {
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
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseStripeCoupon();
        while (reader.pos < end) {
            const tag = reader.uint32();
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
    fromJSON(object) {
        return {
            duration: isSet(object.duration) ? String(object.duration) : "",
            duration_in_months: isSet(object.duration_in_months) ? Number(object.duration_in_months) : 0,
            name: isSet(object.name) ? String(object.name) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.duration !== undefined && (obj.duration = message.duration);
        message.duration_in_months !== undefined && (obj.duration_in_months = Math.round(message.duration_in_months));
        message.name !== undefined && (obj.name = message.name);
        return obj;
    },
    create(base) {
        return StripeCoupon.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseStripeCoupon();
        message.duration = object.duration ?? "";
        message.duration_in_months = object.duration_in_months ?? 0;
        message.name = object.name ?? "";
        return message;
    },
};
function createBaseStripeCustomerDiscount() {
    return { subscription: "", start: 0, customer: "", coupon: undefined };
}
export const StripeCustomerDiscount = {
    encode(message, writer = _m0.Writer.create()) {
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
            StripeCoupon.encode(message.coupon, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseStripeCustomerDiscount();
        while (reader.pos < end) {
            const tag = reader.uint32();
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
                    message.coupon = StripeCoupon.decode(reader, reader.uint32());
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
            subscription: isSet(object.subscription) ? String(object.subscription) : "",
            start: isSet(object.start) ? Number(object.start) : 0,
            customer: isSet(object.customer) ? String(object.customer) : "",
            coupon: isSet(object.coupon) ? StripeCoupon.fromJSON(object.coupon) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.subscription !== undefined && (obj.subscription = message.subscription);
        message.start !== undefined && (obj.start = Math.round(message.start));
        message.customer !== undefined && (obj.customer = message.customer);
        message.coupon !== undefined && (obj.coupon = message.coupon ? StripeCoupon.toJSON(message.coupon) : undefined);
        return obj;
    },
    create(base) {
        return StripeCustomerDiscount.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseStripeCustomerDiscount();
        message.subscription = object.subscription ?? "";
        message.start = object.start ?? 0;
        message.customer = object.customer ?? "";
        message.coupon = (object.coupon !== undefined && object.coupon !== null)
            ? StripeCoupon.fromPartial(object.coupon)
            : undefined;
        return message;
    },
};
function createBaseStripeCustomerAddress() {
    return { line1: "", line2: "", postal_code: "", city: "", state: "", country: "" };
}
export const StripeCustomerAddress = {
    encode(message, writer = _m0.Writer.create()) {
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
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseStripeCustomerAddress();
        while (reader.pos < end) {
            const tag = reader.uint32();
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
    fromJSON(object) {
        return {
            line1: isSet(object.line1) ? String(object.line1) : "",
            line2: isSet(object.line2) ? String(object.line2) : "",
            postal_code: isSet(object.postal_code) ? String(object.postal_code) : "",
            city: isSet(object.city) ? String(object.city) : "",
            state: isSet(object.state) ? String(object.state) : "",
            country: isSet(object.country) ? String(object.country) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.line1 !== undefined && (obj.line1 = message.line1);
        message.line2 !== undefined && (obj.line2 = message.line2);
        message.postal_code !== undefined && (obj.postal_code = message.postal_code);
        message.city !== undefined && (obj.city = message.city);
        message.state !== undefined && (obj.state = message.state);
        message.country !== undefined && (obj.country = message.country);
        return obj;
    },
    create(base) {
        return StripeCustomerAddress.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseStripeCustomerAddress();
        message.line1 = object.line1 ?? "";
        message.line2 = object.line2 ?? "";
        message.postal_code = object.postal_code ?? "";
        message.city = object.city ?? "";
        message.state = object.state ?? "";
        message.country = object.country ?? "";
        return message;
    },
};
function createBaseStripeTaxVerification() {
    return { status: "", verified_address: "", verified_name: "" };
}
export const StripeTaxVerification = {
    encode(message, writer = _m0.Writer.create()) {
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
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseStripeTaxVerification();
        while (reader.pos < end) {
            const tag = reader.uint32();
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
    fromJSON(object) {
        return {
            status: isSet(object.status) ? String(object.status) : "",
            verified_address: isSet(object.verified_address) ? String(object.verified_address) : "",
            verified_name: isSet(object.verified_name) ? String(object.verified_name) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.status !== undefined && (obj.status = message.status);
        message.verified_address !== undefined && (obj.verified_address = message.verified_address);
        message.verified_name !== undefined && (obj.verified_name = message.verified_name);
        return obj;
    },
    create(base) {
        return StripeTaxVerification.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseStripeTaxVerification();
        message.status = object.status ?? "";
        message.verified_address = object.verified_address ?? "";
        message.verified_name = object.verified_name ?? "";
        return message;
    },
};
function createBaseStripeTaxId() {
    return { country: "", customer: "", type: "", value: "", verification: undefined };
}
export const StripeTaxId = {
    encode(message, writer = _m0.Writer.create()) {
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
            StripeTaxVerification.encode(message.verification, writer.uint32(42).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseStripeTaxId();
        while (reader.pos < end) {
            const tag = reader.uint32();
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
                    message.verification = StripeTaxVerification.decode(reader, reader.uint32());
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
            country: isSet(object.country) ? String(object.country) : "",
            customer: isSet(object.customer) ? String(object.customer) : "",
            type: isSet(object.type) ? String(object.type) : "",
            value: isSet(object.value) ? String(object.value) : "",
            verification: isSet(object.verification) ? StripeTaxVerification.fromJSON(object.verification) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.country !== undefined && (obj.country = message.country);
        message.customer !== undefined && (obj.customer = message.customer);
        message.type !== undefined && (obj.type = message.type);
        message.value !== undefined && (obj.value = message.value);
        message.verification !== undefined &&
            (obj.verification = message.verification ? StripeTaxVerification.toJSON(message.verification) : undefined);
        return obj;
    },
    create(base) {
        return StripeTaxId.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseStripeTaxId();
        message.country = object.country ?? "";
        message.customer = object.customer ?? "";
        message.type = object.type ?? "";
        message.value = object.value ?? "";
        message.verification = (object.verification !== undefined && object.verification !== null)
            ? StripeTaxVerification.fromPartial(object.verification)
            : undefined;
        return message;
    },
};
function createBaseStripeRecurring() {
    return { interval: "", interval_count: 0, trial_period_days: 0, usage_type: "" };
}
export const StripeRecurring = {
    encode(message, writer = _m0.Writer.create()) {
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
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseStripeRecurring();
        while (reader.pos < end) {
            const tag = reader.uint32();
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
    fromJSON(object) {
        return {
            interval: isSet(object.interval) ? String(object.interval) : "",
            interval_count: isSet(object.interval_count) ? Number(object.interval_count) : 0,
            trial_period_days: isSet(object.trial_period_days) ? Number(object.trial_period_days) : 0,
            usage_type: isSet(object.usage_type) ? String(object.usage_type) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.interval !== undefined && (obj.interval = message.interval);
        message.interval_count !== undefined && (obj.interval_count = Math.round(message.interval_count));
        message.trial_period_days !== undefined && (obj.trial_period_days = Math.round(message.trial_period_days));
        message.usage_type !== undefined && (obj.usage_type = message.usage_type);
        return obj;
    },
    create(base) {
        return StripeRecurring.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseStripeRecurring();
        message.interval = object.interval ?? "";
        message.interval_count = object.interval_count ?? 0;
        message.trial_period_days = object.trial_period_days ?? 0;
        message.usage_type = object.usage_type ?? "";
        return message;
    },
};
function createBaseStripePrice() {
    return { nickname: "", product: "", active: false, billing_scheme: "", currency: "", recurring: undefined };
}
export const StripePrice = {
    encode(message, writer = _m0.Writer.create()) {
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
            StripeRecurring.encode(message.recurring, writer.uint32(50).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseStripePrice();
        while (reader.pos < end) {
            const tag = reader.uint32();
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
                    message.recurring = StripeRecurring.decode(reader, reader.uint32());
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
            nickname: isSet(object.nickname) ? String(object.nickname) : "",
            product: isSet(object.product) ? String(object.product) : "",
            active: isSet(object.active) ? Boolean(object.active) : false,
            billing_scheme: isSet(object.billing_scheme) ? String(object.billing_scheme) : "",
            currency: isSet(object.currency) ? String(object.currency) : "",
            recurring: isSet(object.recurring) ? StripeRecurring.fromJSON(object.recurring) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.nickname !== undefined && (obj.nickname = message.nickname);
        message.product !== undefined && (obj.product = message.product);
        message.active !== undefined && (obj.active = message.active);
        message.billing_scheme !== undefined && (obj.billing_scheme = message.billing_scheme);
        message.currency !== undefined && (obj.currency = message.currency);
        message.recurring !== undefined &&
            (obj.recurring = message.recurring ? StripeRecurring.toJSON(message.recurring) : undefined);
        return obj;
    },
    create(base) {
        return StripePrice.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseStripePrice();
        message.nickname = object.nickname ?? "";
        message.product = object.product ?? "";
        message.active = object.active ?? false;
        message.billing_scheme = object.billing_scheme ?? "";
        message.currency = object.currency ?? "";
        message.recurring = (object.recurring !== undefined && object.recurring !== null)
            ? StripeRecurring.fromPartial(object.recurring)
            : undefined;
        return message;
    },
};
function createBaseStripePlan() {
    return { status: false, nickname: "", product: "", amount: 0, usage_type: "" };
}
export const StripePlan = {
    encode(message, writer = _m0.Writer.create()) {
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
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseStripePlan();
        while (reader.pos < end) {
            const tag = reader.uint32();
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
    fromJSON(object) {
        return {
            status: isSet(object.status) ? Boolean(object.status) : false,
            nickname: isSet(object.nickname) ? String(object.nickname) : "",
            product: isSet(object.product) ? String(object.product) : "",
            amount: isSet(object.amount) ? Number(object.amount) : 0,
            usage_type: isSet(object.usage_type) ? String(object.usage_type) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.status !== undefined && (obj.status = message.status);
        message.nickname !== undefined && (obj.nickname = message.nickname);
        message.product !== undefined && (obj.product = message.product);
        message.amount !== undefined && (obj.amount = Math.round(message.amount));
        message.usage_type !== undefined && (obj.usage_type = message.usage_type);
        return obj;
    },
    create(base) {
        return StripePlan.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseStripePlan();
        message.status = object.status ?? false;
        message.nickname = object.nickname ?? "";
        message.product = object.product ?? "";
        message.amount = object.amount ?? 0;
        message.usage_type = object.usage_type ?? "";
        return message;
    },
};
function createBaseStripeSubscriptionItem() {
    return { id: "", quantity: "", subscription: "", plan: undefined, price: undefined };
}
export const StripeSubscriptionItem = {
    encode(message, writer = _m0.Writer.create()) {
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
            StripePlan.encode(message.plan, writer.uint32(34).fork()).ldelim();
        }
        if (message.price !== undefined) {
            StripePrice.encode(message.price, writer.uint32(42).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseStripeSubscriptionItem();
        while (reader.pos < end) {
            const tag = reader.uint32();
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
                    message.plan = StripePlan.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.price = StripePrice.decode(reader, reader.uint32());
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
            id: isSet(object.id) ? String(object.id) : "",
            quantity: isSet(object.quantity) ? String(object.quantity) : "",
            subscription: isSet(object.subscription) ? String(object.subscription) : "",
            plan: isSet(object.plan) ? StripePlan.fromJSON(object.plan) : undefined,
            price: isSet(object.price) ? StripePrice.fromJSON(object.price) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.id !== undefined && (obj.id = message.id);
        message.quantity !== undefined && (obj.quantity = message.quantity);
        message.subscription !== undefined && (obj.subscription = message.subscription);
        message.plan !== undefined && (obj.plan = message.plan ? StripePlan.toJSON(message.plan) : undefined);
        message.price !== undefined && (obj.price = message.price ? StripePrice.toJSON(message.price) : undefined);
        return obj;
    },
    create(base) {
        return StripeSubscriptionItem.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseStripeSubscriptionItem();
        message.id = object.id ?? "";
        message.quantity = object.quantity ?? "";
        message.subscription = object.subscription ?? "";
        message.plan = (object.plan !== undefined && object.plan !== null)
            ? StripePlan.fromPartial(object.plan)
            : undefined;
        message.price = (object.price !== undefined && object.price !== null)
            ? StripePrice.fromPartial(object.price)
            : undefined;
        return message;
    },
};
function createBaseStripeSubscription() {
    return { address: "", balance: 0, currency: "", subscriptions: [], tax_ids: [], items: [], default_tax_rates: [] };
}
export const StripeSubscription = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.address !== "") {
            writer.uint32(10).string(message.address);
        }
        if (message.balance !== 0) {
            writer.uint32(16).int32(message.balance);
        }
        if (message.currency !== "") {
            writer.uint32(26).string(message.currency);
        }
        for (const v of message.subscriptions) {
            StripeSubscription.encode(v, writer.uint32(34).fork()).ldelim();
        }
        for (const v of message.tax_ids) {
            StripeTaxId.encode(v, writer.uint32(42).fork()).ldelim();
        }
        for (const v of message.items) {
            StripeSubscriptionItem.encode(v, writer.uint32(50).fork()).ldelim();
        }
        for (const v of message.default_tax_rates) {
            writer.uint32(58).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseStripeSubscription();
        while (reader.pos < end) {
            const tag = reader.uint32();
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
                    message.subscriptions.push(StripeSubscription.decode(reader, reader.uint32()));
                    break;
                case 5:
                    message.tax_ids.push(StripeTaxId.decode(reader, reader.uint32()));
                    break;
                case 6:
                    message.items.push(StripeSubscriptionItem.decode(reader, reader.uint32()));
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
    fromJSON(object) {
        return {
            address: isSet(object.address) ? String(object.address) : "",
            balance: isSet(object.balance) ? Number(object.balance) : 0,
            currency: isSet(object.currency) ? String(object.currency) : "",
            subscriptions: Array.isArray(object?.subscriptions)
                ? object.subscriptions.map((e) => StripeSubscription.fromJSON(e))
                : [],
            tax_ids: Array.isArray(object?.tax_ids) ? object.tax_ids.map((e) => StripeTaxId.fromJSON(e)) : [],
            items: Array.isArray(object?.items) ? object.items.map((e) => StripeSubscriptionItem.fromJSON(e)) : [],
            default_tax_rates: Array.isArray(object?.default_tax_rates)
                ? object.default_tax_rates.map((e) => String(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        message.address !== undefined && (obj.address = message.address);
        message.balance !== undefined && (obj.balance = Math.round(message.balance));
        message.currency !== undefined && (obj.currency = message.currency);
        if (message.subscriptions) {
            obj.subscriptions = message.subscriptions.map((e) => e ? StripeSubscription.toJSON(e) : undefined);
        }
        else {
            obj.subscriptions = [];
        }
        if (message.tax_ids) {
            obj.tax_ids = message.tax_ids.map((e) => e ? StripeTaxId.toJSON(e) : undefined);
        }
        else {
            obj.tax_ids = [];
        }
        if (message.items) {
            obj.items = message.items.map((e) => e ? StripeSubscriptionItem.toJSON(e) : undefined);
        }
        else {
            obj.items = [];
        }
        if (message.default_tax_rates) {
            obj.default_tax_rates = message.default_tax_rates.map((e) => e);
        }
        else {
            obj.default_tax_rates = [];
        }
        return obj;
    },
    create(base) {
        return StripeSubscription.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseStripeSubscription();
        message.address = object.address ?? "";
        message.balance = object.balance ?? 0;
        message.currency = object.currency ?? "";
        message.subscriptions = object.subscriptions?.map((e) => StripeSubscription.fromPartial(e)) || [];
        message.tax_ids = object.tax_ids?.map((e) => StripeTaxId.fromPartial(e)) || [];
        message.items = object.items?.map((e) => StripeSubscriptionItem.fromPartial(e)) || [];
        message.default_tax_rates = object.default_tax_rates?.map((e) => e) || [];
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
export const StripeCustomer = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.address !== undefined) {
            StripeCustomerAddress.encode(message.address, writer.uint32(10).fork()).ldelim();
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
        for (const v of message.tax_ids) {
            StripeTaxId.encode(v, writer.uint32(42).fork()).ldelim();
        }
        for (const v of message.subscriptions) {
            StripeSubscription.encode(v, writer.uint32(50).fork()).ldelim();
        }
        if (message.discount !== undefined) {
            StripeCustomerDiscount.encode(message.discount, writer.uint32(58).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseStripeCustomer();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.address = StripeCustomerAddress.decode(reader, reader.uint32());
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
                    message.tax_ids.push(StripeTaxId.decode(reader, reader.uint32()));
                    break;
                case 6:
                    message.subscriptions.push(StripeSubscription.decode(reader, reader.uint32()));
                    break;
                case 7:
                    message.discount = StripeCustomerDiscount.decode(reader, reader.uint32());
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
            address: isSet(object.address) ? StripeCustomerAddress.fromJSON(object.address) : undefined,
            description: isSet(object.description) ? String(object.description) : "",
            name: isSet(object.name) ? String(object.name) : "",
            email: isSet(object.email) ? String(object.email) : "",
            tax_ids: Array.isArray(object?.tax_ids) ? object.tax_ids.map((e) => StripeTaxId.fromJSON(e)) : [],
            subscriptions: Array.isArray(object?.subscriptions)
                ? object.subscriptions.map((e) => StripeSubscription.fromJSON(e))
                : [],
            discount: isSet(object.discount) ? StripeCustomerDiscount.fromJSON(object.discount) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.address !== undefined &&
            (obj.address = message.address ? StripeCustomerAddress.toJSON(message.address) : undefined);
        message.description !== undefined && (obj.description = message.description);
        message.name !== undefined && (obj.name = message.name);
        message.email !== undefined && (obj.email = message.email);
        if (message.tax_ids) {
            obj.tax_ids = message.tax_ids.map((e) => e ? StripeTaxId.toJSON(e) : undefined);
        }
        else {
            obj.tax_ids = [];
        }
        if (message.subscriptions) {
            obj.subscriptions = message.subscriptions.map((e) => e ? StripeSubscription.toJSON(e) : undefined);
        }
        else {
            obj.subscriptions = [];
        }
        message.discount !== undefined &&
            (obj.discount = message.discount ? StripeCustomerDiscount.toJSON(message.discount) : undefined);
        return obj;
    },
    create(base) {
        return StripeCustomer.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseStripeCustomer();
        message.address = (object.address !== undefined && object.address !== null)
            ? StripeCustomerAddress.fromPartial(object.address)
            : undefined;
        message.description = object.description ?? "";
        message.name = object.name ?? "";
        message.email = object.email ?? "";
        message.tax_ids = object.tax_ids?.map((e) => StripeTaxId.fromPartial(e)) || [];
        message.subscriptions = object.subscriptions?.map((e) => StripeSubscription.fromPartial(e)) || [];
        message.discount = (object.discount !== undefined && object.discount !== null)
            ? StripeCustomerDiscount.fromPartial(object.discount)
            : undefined;
        return message;
    },
};
function isSet(value) {
    return value !== null && value !== undefined;
}
//# sourceMappingURL=stripe.js.map