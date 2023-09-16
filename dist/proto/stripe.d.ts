import * as _m0 from "protobufjs/minimal";
export declare const protobufPackage = "openiap";
export interface StripeCoupon {
    duration: string;
    duration_in_months: number;
    name: string;
}
export interface StripeCustomerDiscount {
    subscription: string;
    start: number;
    customer: string;
    coupon: StripeCoupon | undefined;
}
export interface StripeCustomerAddress {
    line1: string;
    line2: string;
    postal_code: string;
    city: string;
    state: string;
    country: string;
}
export interface StripeTaxVerification {
    status: string;
    verified_address: string;
    verified_name: string;
}
export interface StripeTaxId {
    country: string;
    customer: string;
    type: string;
    value: string;
    verification: StripeTaxVerification | undefined;
}
export interface StripeRecurring {
    interval: string;
    interval_count: number;
    trial_period_days: number;
    /** string aggregate_usage = 5; */
    usage_type: string;
}
export interface StripePrice {
    nickname: string;
    product: string;
    active: boolean;
    billing_scheme: string;
    currency: string;
    /**
     * string lookup_key = 7;
     * string tiers_mode = 8;
     */
    recurring: StripeRecurring | undefined;
}
export interface StripePlan {
    status: boolean;
    nickname: string;
    product: string;
    amount: number;
    usage_type: string;
}
export interface StripeSubscriptionItem {
    id: string;
    quantity: string;
    subscription: string;
    plan: StripePlan | undefined;
    price: StripePrice | undefined;
}
export interface StripeSubscription {
    address: string;
    balance: number;
    currency: string;
    subscriptions: StripeSubscription[];
    tax_ids: StripeTaxId[];
    items: StripeSubscriptionItem[];
    default_tax_rates: string[];
}
export interface StripeCustomer {
    address: StripeCustomerAddress | undefined;
    description: string;
    name: string;
    email: string;
    tax_ids: StripeTaxId[];
    subscriptions: StripeSubscription[];
    discount: StripeCustomerDiscount | undefined;
}
export declare const StripeCoupon: {
    encode(message: StripeCoupon, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): StripeCoupon;
    fromJSON(object: any): StripeCoupon;
    toJSON(message: StripeCoupon): unknown;
    create<I extends {
        duration?: string;
        duration_in_months?: number;
        name?: string;
    } & {
        duration?: string;
        duration_in_months?: number;
        name?: string;
    } & { [K in Exclude<keyof I, keyof StripeCoupon>]: never; }>(base?: I): StripeCoupon;
    fromPartial<I_1 extends {
        duration?: string;
        duration_in_months?: number;
        name?: string;
    } & {
        duration?: string;
        duration_in_months?: number;
        name?: string;
    } & { [K_1 in Exclude<keyof I_1, keyof StripeCoupon>]: never; }>(object: I_1): StripeCoupon;
};
export declare const StripeCustomerDiscount: {
    encode(message: StripeCustomerDiscount, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): StripeCustomerDiscount;
    fromJSON(object: any): StripeCustomerDiscount;
    toJSON(message: StripeCustomerDiscount): unknown;
    create<I extends {
        subscription?: string;
        start?: number;
        customer?: string;
        coupon?: {
            duration?: string;
            duration_in_months?: number;
            name?: string;
        };
    } & {
        subscription?: string;
        start?: number;
        customer?: string;
        coupon?: {
            duration?: string;
            duration_in_months?: number;
            name?: string;
        } & {
            duration?: string;
            duration_in_months?: number;
            name?: string;
        } & { [K in Exclude<keyof I["coupon"], keyof StripeCoupon>]: never; };
    } & { [K_1 in Exclude<keyof I, keyof StripeCustomerDiscount>]: never; }>(base?: I): StripeCustomerDiscount;
    fromPartial<I_1 extends {
        subscription?: string;
        start?: number;
        customer?: string;
        coupon?: {
            duration?: string;
            duration_in_months?: number;
            name?: string;
        };
    } & {
        subscription?: string;
        start?: number;
        customer?: string;
        coupon?: {
            duration?: string;
            duration_in_months?: number;
            name?: string;
        } & {
            duration?: string;
            duration_in_months?: number;
            name?: string;
        } & { [K_2 in Exclude<keyof I_1["coupon"], keyof StripeCoupon>]: never; };
    } & { [K_3 in Exclude<keyof I_1, keyof StripeCustomerDiscount>]: never; }>(object: I_1): StripeCustomerDiscount;
};
export declare const StripeCustomerAddress: {
    encode(message: StripeCustomerAddress, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): StripeCustomerAddress;
    fromJSON(object: any): StripeCustomerAddress;
    toJSON(message: StripeCustomerAddress): unknown;
    create<I extends {
        line1?: string;
        line2?: string;
        postal_code?: string;
        city?: string;
        state?: string;
        country?: string;
    } & {
        line1?: string;
        line2?: string;
        postal_code?: string;
        city?: string;
        state?: string;
        country?: string;
    } & { [K in Exclude<keyof I, keyof StripeCustomerAddress>]: never; }>(base?: I): StripeCustomerAddress;
    fromPartial<I_1 extends {
        line1?: string;
        line2?: string;
        postal_code?: string;
        city?: string;
        state?: string;
        country?: string;
    } & {
        line1?: string;
        line2?: string;
        postal_code?: string;
        city?: string;
        state?: string;
        country?: string;
    } & { [K_1 in Exclude<keyof I_1, keyof StripeCustomerAddress>]: never; }>(object: I_1): StripeCustomerAddress;
};
export declare const StripeTaxVerification: {
    encode(message: StripeTaxVerification, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): StripeTaxVerification;
    fromJSON(object: any): StripeTaxVerification;
    toJSON(message: StripeTaxVerification): unknown;
    create<I extends {
        status?: string;
        verified_address?: string;
        verified_name?: string;
    } & {
        status?: string;
        verified_address?: string;
        verified_name?: string;
    } & { [K in Exclude<keyof I, keyof StripeTaxVerification>]: never; }>(base?: I): StripeTaxVerification;
    fromPartial<I_1 extends {
        status?: string;
        verified_address?: string;
        verified_name?: string;
    } & {
        status?: string;
        verified_address?: string;
        verified_name?: string;
    } & { [K_1 in Exclude<keyof I_1, keyof StripeTaxVerification>]: never; }>(object: I_1): StripeTaxVerification;
};
export declare const StripeTaxId: {
    encode(message: StripeTaxId, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): StripeTaxId;
    fromJSON(object: any): StripeTaxId;
    toJSON(message: StripeTaxId): unknown;
    create<I extends {
        country?: string;
        customer?: string;
        type?: string;
        value?: string;
        verification?: {
            status?: string;
            verified_address?: string;
            verified_name?: string;
        };
    } & {
        country?: string;
        customer?: string;
        type?: string;
        value?: string;
        verification?: {
            status?: string;
            verified_address?: string;
            verified_name?: string;
        } & {
            status?: string;
            verified_address?: string;
            verified_name?: string;
        } & { [K in Exclude<keyof I["verification"], keyof StripeTaxVerification>]: never; };
    } & { [K_1 in Exclude<keyof I, keyof StripeTaxId>]: never; }>(base?: I): StripeTaxId;
    fromPartial<I_1 extends {
        country?: string;
        customer?: string;
        type?: string;
        value?: string;
        verification?: {
            status?: string;
            verified_address?: string;
            verified_name?: string;
        };
    } & {
        country?: string;
        customer?: string;
        type?: string;
        value?: string;
        verification?: {
            status?: string;
            verified_address?: string;
            verified_name?: string;
        } & {
            status?: string;
            verified_address?: string;
            verified_name?: string;
        } & { [K_2 in Exclude<keyof I_1["verification"], keyof StripeTaxVerification>]: never; };
    } & { [K_3 in Exclude<keyof I_1, keyof StripeTaxId>]: never; }>(object: I_1): StripeTaxId;
};
export declare const StripeRecurring: {
    encode(message: StripeRecurring, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): StripeRecurring;
    fromJSON(object: any): StripeRecurring;
    toJSON(message: StripeRecurring): unknown;
    create<I extends {
        interval?: string;
        interval_count?: number;
        trial_period_days?: number;
        usage_type?: string;
    } & {
        interval?: string;
        interval_count?: number;
        trial_period_days?: number;
        usage_type?: string;
    } & { [K in Exclude<keyof I, keyof StripeRecurring>]: never; }>(base?: I): StripeRecurring;
    fromPartial<I_1 extends {
        interval?: string;
        interval_count?: number;
        trial_period_days?: number;
        usage_type?: string;
    } & {
        interval?: string;
        interval_count?: number;
        trial_period_days?: number;
        usage_type?: string;
    } & { [K_1 in Exclude<keyof I_1, keyof StripeRecurring>]: never; }>(object: I_1): StripeRecurring;
};
export declare const StripePrice: {
    encode(message: StripePrice, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): StripePrice;
    fromJSON(object: any): StripePrice;
    toJSON(message: StripePrice): unknown;
    create<I extends {
        nickname?: string;
        product?: string;
        active?: boolean;
        billing_scheme?: string;
        currency?: string;
        recurring?: {
            interval?: string;
            interval_count?: number;
            trial_period_days?: number;
            usage_type?: string;
        };
    } & {
        nickname?: string;
        product?: string;
        active?: boolean;
        billing_scheme?: string;
        currency?: string;
        recurring?: {
            interval?: string;
            interval_count?: number;
            trial_period_days?: number;
            usage_type?: string;
        } & {
            interval?: string;
            interval_count?: number;
            trial_period_days?: number;
            usage_type?: string;
        } & { [K in Exclude<keyof I["recurring"], keyof StripeRecurring>]: never; };
    } & { [K_1 in Exclude<keyof I, keyof StripePrice>]: never; }>(base?: I): StripePrice;
    fromPartial<I_1 extends {
        nickname?: string;
        product?: string;
        active?: boolean;
        billing_scheme?: string;
        currency?: string;
        recurring?: {
            interval?: string;
            interval_count?: number;
            trial_period_days?: number;
            usage_type?: string;
        };
    } & {
        nickname?: string;
        product?: string;
        active?: boolean;
        billing_scheme?: string;
        currency?: string;
        recurring?: {
            interval?: string;
            interval_count?: number;
            trial_period_days?: number;
            usage_type?: string;
        } & {
            interval?: string;
            interval_count?: number;
            trial_period_days?: number;
            usage_type?: string;
        } & { [K_2 in Exclude<keyof I_1["recurring"], keyof StripeRecurring>]: never; };
    } & { [K_3 in Exclude<keyof I_1, keyof StripePrice>]: never; }>(object: I_1): StripePrice;
};
export declare const StripePlan: {
    encode(message: StripePlan, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): StripePlan;
    fromJSON(object: any): StripePlan;
    toJSON(message: StripePlan): unknown;
    create<I extends {
        status?: boolean;
        nickname?: string;
        product?: string;
        amount?: number;
        usage_type?: string;
    } & {
        status?: boolean;
        nickname?: string;
        product?: string;
        amount?: number;
        usage_type?: string;
    } & { [K in Exclude<keyof I, keyof StripePlan>]: never; }>(base?: I): StripePlan;
    fromPartial<I_1 extends {
        status?: boolean;
        nickname?: string;
        product?: string;
        amount?: number;
        usage_type?: string;
    } & {
        status?: boolean;
        nickname?: string;
        product?: string;
        amount?: number;
        usage_type?: string;
    } & { [K_1 in Exclude<keyof I_1, keyof StripePlan>]: never; }>(object: I_1): StripePlan;
};
export declare const StripeSubscriptionItem: {
    encode(message: StripeSubscriptionItem, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): StripeSubscriptionItem;
    fromJSON(object: any): StripeSubscriptionItem;
    toJSON(message: StripeSubscriptionItem): unknown;
    create<I extends {
        id?: string;
        quantity?: string;
        subscription?: string;
        plan?: {
            status?: boolean;
            nickname?: string;
            product?: string;
            amount?: number;
            usage_type?: string;
        };
        price?: {
            nickname?: string;
            product?: string;
            active?: boolean;
            billing_scheme?: string;
            currency?: string;
            recurring?: {
                interval?: string;
                interval_count?: number;
                trial_period_days?: number;
                usage_type?: string;
            };
        };
    } & {
        id?: string;
        quantity?: string;
        subscription?: string;
        plan?: {
            status?: boolean;
            nickname?: string;
            product?: string;
            amount?: number;
            usage_type?: string;
        } & {
            status?: boolean;
            nickname?: string;
            product?: string;
            amount?: number;
            usage_type?: string;
        } & { [K in Exclude<keyof I["plan"], keyof StripePlan>]: never; };
        price?: {
            nickname?: string;
            product?: string;
            active?: boolean;
            billing_scheme?: string;
            currency?: string;
            recurring?: {
                interval?: string;
                interval_count?: number;
                trial_period_days?: number;
                usage_type?: string;
            };
        } & {
            nickname?: string;
            product?: string;
            active?: boolean;
            billing_scheme?: string;
            currency?: string;
            recurring?: {
                interval?: string;
                interval_count?: number;
                trial_period_days?: number;
                usage_type?: string;
            } & {
                interval?: string;
                interval_count?: number;
                trial_period_days?: number;
                usage_type?: string;
            } & { [K_1 in Exclude<keyof I["price"]["recurring"], keyof StripeRecurring>]: never; };
        } & { [K_2 in Exclude<keyof I["price"], keyof StripePrice>]: never; };
    } & { [K_3 in Exclude<keyof I, keyof StripeSubscriptionItem>]: never; }>(base?: I): StripeSubscriptionItem;
    fromPartial<I_1 extends {
        id?: string;
        quantity?: string;
        subscription?: string;
        plan?: {
            status?: boolean;
            nickname?: string;
            product?: string;
            amount?: number;
            usage_type?: string;
        };
        price?: {
            nickname?: string;
            product?: string;
            active?: boolean;
            billing_scheme?: string;
            currency?: string;
            recurring?: {
                interval?: string;
                interval_count?: number;
                trial_period_days?: number;
                usage_type?: string;
            };
        };
    } & {
        id?: string;
        quantity?: string;
        subscription?: string;
        plan?: {
            status?: boolean;
            nickname?: string;
            product?: string;
            amount?: number;
            usage_type?: string;
        } & {
            status?: boolean;
            nickname?: string;
            product?: string;
            amount?: number;
            usage_type?: string;
        } & { [K_4 in Exclude<keyof I_1["plan"], keyof StripePlan>]: never; };
        price?: {
            nickname?: string;
            product?: string;
            active?: boolean;
            billing_scheme?: string;
            currency?: string;
            recurring?: {
                interval?: string;
                interval_count?: number;
                trial_period_days?: number;
                usage_type?: string;
            };
        } & {
            nickname?: string;
            product?: string;
            active?: boolean;
            billing_scheme?: string;
            currency?: string;
            recurring?: {
                interval?: string;
                interval_count?: number;
                trial_period_days?: number;
                usage_type?: string;
            } & {
                interval?: string;
                interval_count?: number;
                trial_period_days?: number;
                usage_type?: string;
            } & { [K_5 in Exclude<keyof I_1["price"]["recurring"], keyof StripeRecurring>]: never; };
        } & { [K_6 in Exclude<keyof I_1["price"], keyof StripePrice>]: never; };
    } & { [K_7 in Exclude<keyof I_1, keyof StripeSubscriptionItem>]: never; }>(object: I_1): StripeSubscriptionItem;
};
export declare const StripeSubscription: {
    encode(message: StripeSubscription, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): StripeSubscription;
    fromJSON(object: any): StripeSubscription;
    toJSON(message: StripeSubscription): unknown;
    create<I extends {
        address?: string;
        balance?: number;
        currency?: string;
        subscriptions?: any[];
        tax_ids?: {
            country?: string;
            customer?: string;
            type?: string;
            value?: string;
            verification?: {
                status?: string;
                verified_address?: string;
                verified_name?: string;
            };
        }[];
        items?: {
            id?: string;
            quantity?: string;
            subscription?: string;
            plan?: {
                status?: boolean;
                nickname?: string;
                product?: string;
                amount?: number;
                usage_type?: string;
            };
            price?: {
                nickname?: string;
                product?: string;
                active?: boolean;
                billing_scheme?: string;
                currency?: string;
                recurring?: {
                    interval?: string;
                    interval_count?: number;
                    trial_period_days?: number;
                    usage_type?: string;
                };
            };
        }[];
        default_tax_rates?: string[];
    } & {
        address?: string;
        balance?: number;
        currency?: string;
        subscriptions?: any[] & ({
            address?: string;
            balance?: number;
            currency?: string;
            subscriptions?: any[];
            tax_ids?: {
                country?: string;
                customer?: string;
                type?: string;
                value?: string;
                verification?: {
                    status?: string;
                    verified_address?: string;
                    verified_name?: string;
                };
            }[];
            items?: {
                id?: string;
                quantity?: string;
                subscription?: string;
                plan?: {
                    status?: boolean;
                    nickname?: string;
                    product?: string;
                    amount?: number;
                    usage_type?: string;
                };
                price?: {
                    nickname?: string;
                    product?: string;
                    active?: boolean;
                    billing_scheme?: string;
                    currency?: string;
                    recurring?: {
                        interval?: string;
                        interval_count?: number;
                        trial_period_days?: number;
                        usage_type?: string;
                    };
                };
            }[];
            default_tax_rates?: string[];
        } & {
            address?: string;
            balance?: number;
            currency?: string;
            subscriptions?: any[] & ({
                address?: string;
                balance?: number;
                currency?: string;
                subscriptions?: any[];
                tax_ids?: {
                    country?: string;
                    customer?: string;
                    type?: string;
                    value?: string;
                    verification?: {
                        status?: string;
                        verified_address?: string;
                        verified_name?: string;
                    };
                }[];
                items?: {
                    id?: string;
                    quantity?: string;
                    subscription?: string;
                    plan?: {
                        status?: boolean;
                        nickname?: string;
                        product?: string;
                        amount?: number;
                        usage_type?: string;
                    };
                    price?: {
                        nickname?: string;
                        product?: string;
                        active?: boolean;
                        billing_scheme?: string;
                        currency?: string;
                        recurring?: {
                            interval?: string;
                            interval_count?: number;
                            trial_period_days?: number;
                            usage_type?: string;
                        };
                    };
                }[];
                default_tax_rates?: string[];
            } & {
                address?: string;
                balance?: number;
                currency?: string;
                subscriptions?: any[] & ({
                    address?: string;
                    balance?: number;
                    currency?: string;
                    subscriptions?: any[];
                    tax_ids?: {
                        country?: string;
                        customer?: string;
                        type?: string;
                        value?: string;
                        verification?: {
                            status?: string;
                            verified_address?: string;
                            verified_name?: string;
                        };
                    }[];
                    items?: {
                        id?: string;
                        quantity?: string;
                        subscription?: string;
                        plan?: {
                            status?: boolean;
                            nickname?: string;
                            product?: string;
                            amount?: number;
                            usage_type?: string;
                        };
                        price?: {
                            nickname?: string;
                            product?: string;
                            active?: boolean;
                            billing_scheme?: string;
                            currency?: string;
                            recurring?: {
                                interval?: string;
                                interval_count?: number;
                                trial_period_days?: number;
                                usage_type?: string;
                            };
                        };
                    }[];
                    default_tax_rates?: string[];
                } & {
                    address?: string;
                    balance?: number;
                    currency?: string;
                    subscriptions?: any[] & ({
                        address?: string;
                        balance?: number;
                        currency?: string;
                        subscriptions?: any[];
                        tax_ids?: {
                            country?: string;
                            customer?: string;
                            type?: string;
                            value?: string;
                            verification?: {
                                status?: string;
                                verified_address?: string;
                                verified_name?: string;
                            };
                        }[];
                        items?: {
                            id?: string;
                            quantity?: string;
                            subscription?: string;
                            plan?: {
                                status?: boolean;
                                nickname?: string;
                                product?: string;
                                amount?: number;
                                usage_type?: string;
                            };
                            price?: {
                                nickname?: string;
                                product?: string;
                                active?: boolean;
                                billing_scheme?: string;
                                currency?: string;
                                recurring?: {
                                    interval?: string;
                                    interval_count?: number;
                                    trial_period_days?: number;
                                    usage_type?: string;
                                };
                            };
                        }[];
                        default_tax_rates?: string[];
                    } & {
                        address?: string;
                        balance?: number;
                        currency?: string;
                        subscriptions?: any[] & ({
                            address?: string;
                            balance?: number;
                            currency?: string;
                            subscriptions?: any[];
                            tax_ids?: {
                                country?: string;
                                customer?: string;
                                type?: string;
                                value?: string;
                                verification?: {
                                    status?: string;
                                    verified_address?: string;
                                    verified_name?: string;
                                };
                            }[];
                            items?: {
                                id?: string;
                                quantity?: string;
                                subscription?: string;
                                plan?: {
                                    status?: boolean;
                                    nickname?: string;
                                    product?: string;
                                    amount?: number;
                                    usage_type?: string;
                                };
                                price?: {
                                    nickname?: string;
                                    product?: string;
                                    active?: boolean;
                                    billing_scheme?: string;
                                    currency?: string;
                                    recurring?: {
                                        interval?: string;
                                        interval_count?: number;
                                        trial_period_days?: number;
                                        usage_type?: string;
                                    };
                                };
                            }[];
                            default_tax_rates?: string[];
                        } & {
                            address?: string;
                            balance?: number;
                            currency?: string;
                            subscriptions?: any[] & ({
                                address?: string;
                                balance?: number;
                                currency?: string;
                                subscriptions?: any[];
                                tax_ids?: {
                                    country?: string;
                                    customer?: string;
                                    type?: string;
                                    value?: string;
                                    verification?: {
                                        status?: string;
                                        verified_address?: string;
                                        verified_name?: string;
                                    };
                                }[];
                                items?: {
                                    id?: string;
                                    quantity?: string;
                                    subscription?: string;
                                    plan?: {
                                        status?: boolean;
                                        nickname?: string;
                                        product?: string;
                                        amount?: number;
                                        usage_type?: string;
                                    };
                                    price?: {
                                        nickname?: string;
                                        product?: string;
                                        active?: boolean;
                                        billing_scheme?: string;
                                        currency?: string;
                                        recurring?: {
                                            interval?: string;
                                            interval_count?: number;
                                            trial_period_days?: number;
                                            usage_type?: string;
                                        };
                                    };
                                }[];
                                default_tax_rates?: string[];
                            } & {
                                address?: string;
                                balance?: number;
                                currency?: string;
                                subscriptions?: any[] & ({
                                    address?: string;
                                    balance?: number;
                                    currency?: string;
                                    subscriptions?: any[];
                                    tax_ids?: {
                                        country?: string;
                                        customer?: string;
                                        type?: string;
                                        value?: string;
                                        verification?: {
                                            status?: string;
                                            verified_address?: string;
                                            verified_name?: string;
                                        };
                                    }[];
                                    items?: {
                                        id?: string;
                                        quantity?: string;
                                        subscription?: string;
                                        plan?: {
                                            status?: boolean;
                                            nickname?: string;
                                            product?: string;
                                            amount?: number;
                                            usage_type?: string;
                                        };
                                        price?: {
                                            nickname?: string;
                                            product?: string;
                                            active?: boolean;
                                            billing_scheme?: string;
                                            currency?: string;
                                            recurring?: {
                                                interval?: string;
                                                interval_count?: number;
                                                trial_period_days?: number;
                                                usage_type?: string;
                                            };
                                        };
                                    }[];
                                    default_tax_rates?: string[];
                                } & {
                                    address?: string;
                                    balance?: number;
                                    currency?: string;
                                    subscriptions?: any[] & ({
                                        address?: string;
                                        balance?: number;
                                        currency?: string;
                                        subscriptions?: any[];
                                        tax_ids?: {
                                            country?: string;
                                            customer?: string;
                                            type?: string;
                                            value?: string;
                                            verification?: {
                                                status?: string;
                                                verified_address?: string;
                                                verified_name?: string;
                                            };
                                        }[];
                                        items?: {
                                            id?: string;
                                            quantity?: string;
                                            subscription?: string;
                                            plan?: {
                                                status?: boolean;
                                                nickname?: string;
                                                product?: string;
                                                amount?: number;
                                                usage_type?: string;
                                            };
                                            price?: {
                                                nickname?: string;
                                                product?: string;
                                                active?: boolean;
                                                billing_scheme?: string;
                                                currency?: string;
                                                recurring?: {
                                                    interval?: string;
                                                    interval_count?: number;
                                                    trial_period_days?: number;
                                                    usage_type?: string;
                                                };
                                            };
                                        }[];
                                        default_tax_rates?: string[];
                                    } & {
                                        address?: string;
                                        balance?: number;
                                        currency?: string;
                                        subscriptions?: any[] & ({
                                            address?: string;
                                            balance?: number;
                                            currency?: string;
                                            subscriptions?: any[];
                                            tax_ids?: {
                                                country?: string;
                                                customer?: string;
                                                type?: string;
                                                value?: string;
                                                verification?: {
                                                    status?: string;
                                                    verified_address?: string;
                                                    verified_name?: string;
                                                };
                                            }[];
                                            items?: {
                                                id?: string;
                                                quantity?: string;
                                                subscription?: string;
                                                plan?: {
                                                    status?: boolean;
                                                    nickname?: string;
                                                    product?: string;
                                                    amount?: number;
                                                    usage_type?: string;
                                                };
                                                price?: {
                                                    nickname?: string;
                                                    product?: string;
                                                    active?: boolean;
                                                    billing_scheme?: string;
                                                    currency?: string;
                                                    recurring?: {
                                                        interval?: string;
                                                        interval_count?: number;
                                                        trial_period_days?: number;
                                                        usage_type?: string;
                                                    };
                                                };
                                            }[];
                                            default_tax_rates?: string[];
                                        } & {
                                            address?: string;
                                            balance?: number;
                                            currency?: string;
                                            subscriptions?: any[] & ({
                                                address?: string;
                                                balance?: number;
                                                currency?: string;
                                                subscriptions?: any[];
                                                tax_ids?: {
                                                    country?: string;
                                                    customer?: string;
                                                    type?: string;
                                                    value?: string;
                                                    verification?: {
                                                        status?: string;
                                                        verified_address?: string;
                                                        verified_name?: string;
                                                    };
                                                }[];
                                                items?: {
                                                    id?: string;
                                                    quantity?: string;
                                                    subscription?: string;
                                                    plan?: {
                                                        status?: boolean;
                                                        nickname?: string;
                                                        product?: string;
                                                        amount?: number;
                                                        usage_type?: string;
                                                    };
                                                    price?: {
                                                        nickname?: string;
                                                        product?: string;
                                                        active?: boolean;
                                                        billing_scheme?: string;
                                                        currency?: string;
                                                        recurring?: {
                                                            interval?: string;
                                                            interval_count?: number;
                                                            trial_period_days?: number;
                                                            usage_type?: string;
                                                        };
                                                    };
                                                }[];
                                                default_tax_rates?: string[];
                                            } & {
                                                address?: string;
                                                balance?: number;
                                                currency?: string;
                                                subscriptions?: any[] & ({
                                                    address?: string;
                                                    balance?: number;
                                                    currency?: string;
                                                    subscriptions?: any[];
                                                    tax_ids?: {
                                                        country?: string;
                                                        customer?: string;
                                                        type?: string;
                                                        value?: string;
                                                        verification?: {
                                                            status?: string;
                                                            verified_address?: string;
                                                            verified_name?: string;
                                                        };
                                                    }[];
                                                    items?: {
                                                        id?: string;
                                                        quantity?: string;
                                                        subscription?: string;
                                                        plan?: {
                                                            status?: boolean;
                                                            nickname?: string;
                                                            product?: string;
                                                            amount?: number;
                                                            usage_type?: string;
                                                        };
                                                        price?: {
                                                            nickname?: string;
                                                            product?: string;
                                                            active?: boolean;
                                                            billing_scheme?: string;
                                                            currency?: string;
                                                            recurring?: {
                                                                interval?: string;
                                                                interval_count?: number;
                                                                trial_period_days?: number;
                                                                usage_type?: string;
                                                            };
                                                        };
                                                    }[];
                                                    default_tax_rates?: string[];
                                                } & any & { [K in Exclude<keyof I["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number], keyof StripeSubscription>]: never; })[] & { [K_1 in Exclude<keyof I["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"], keyof any[]>]: never; };
                                                tax_ids?: {
                                                    country?: string;
                                                    customer?: string;
                                                    type?: string;
                                                    value?: string;
                                                    verification?: {
                                                        status?: string;
                                                        verified_address?: string;
                                                        verified_name?: string;
                                                    };
                                                }[] & ({
                                                    country?: string;
                                                    customer?: string;
                                                    type?: string;
                                                    value?: string;
                                                    verification?: {
                                                        status?: string;
                                                        verified_address?: string;
                                                        verified_name?: string;
                                                    };
                                                } & any & { [K_2 in Exclude<keyof I["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["tax_ids"][number], keyof StripeTaxId>]: never; })[] & { [K_3 in Exclude<keyof I["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["tax_ids"], keyof {
                                                    country?: string;
                                                    customer?: string;
                                                    type?: string;
                                                    value?: string;
                                                    verification?: {
                                                        status?: string;
                                                        verified_address?: string;
                                                        verified_name?: string;
                                                    };
                                                }[]>]: never; };
                                                items?: {
                                                    id?: string;
                                                    quantity?: string;
                                                    subscription?: string;
                                                    plan?: {
                                                        status?: boolean;
                                                        nickname?: string;
                                                        product?: string;
                                                        amount?: number;
                                                        usage_type?: string;
                                                    };
                                                    price?: {
                                                        nickname?: string;
                                                        product?: string;
                                                        active?: boolean;
                                                        billing_scheme?: string;
                                                        currency?: string;
                                                        recurring?: {
                                                            interval?: string;
                                                            interval_count?: number;
                                                            trial_period_days?: number;
                                                            usage_type?: string;
                                                        };
                                                    };
                                                }[] & ({
                                                    id?: string;
                                                    quantity?: string;
                                                    subscription?: string;
                                                    plan?: {
                                                        status?: boolean;
                                                        nickname?: string;
                                                        product?: string;
                                                        amount?: number;
                                                        usage_type?: string;
                                                    };
                                                    price?: {
                                                        nickname?: string;
                                                        product?: string;
                                                        active?: boolean;
                                                        billing_scheme?: string;
                                                        currency?: string;
                                                        recurring?: {
                                                            interval?: string;
                                                            interval_count?: number;
                                                            trial_period_days?: number;
                                                            usage_type?: string;
                                                        };
                                                    };
                                                } & any & { [K_4 in Exclude<keyof I["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["items"][number], keyof StripeSubscriptionItem>]: never; })[] & { [K_5 in Exclude<keyof I["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["items"], keyof {
                                                    id?: string;
                                                    quantity?: string;
                                                    subscription?: string;
                                                    plan?: {
                                                        status?: boolean;
                                                        nickname?: string;
                                                        product?: string;
                                                        amount?: number;
                                                        usage_type?: string;
                                                    };
                                                    price?: {
                                                        nickname?: string;
                                                        product?: string;
                                                        active?: boolean;
                                                        billing_scheme?: string;
                                                        currency?: string;
                                                        recurring?: {
                                                            interval?: string;
                                                            interval_count?: number;
                                                            trial_period_days?: number;
                                                            usage_type?: string;
                                                        };
                                                    };
                                                }[]>]: never; };
                                                default_tax_rates?: string[] & string[] & { [K_6 in Exclude<keyof I["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["default_tax_rates"], keyof string[]>]: never; };
                                            } & { [K_7 in Exclude<keyof I["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number], keyof StripeSubscription>]: never; })[] & { [K_8 in Exclude<keyof I["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"], keyof any[]>]: never; };
                                            tax_ids?: {
                                                country?: string;
                                                customer?: string;
                                                type?: string;
                                                value?: string;
                                                verification?: {
                                                    status?: string;
                                                    verified_address?: string;
                                                    verified_name?: string;
                                                };
                                            }[] & ({
                                                country?: string;
                                                customer?: string;
                                                type?: string;
                                                value?: string;
                                                verification?: {
                                                    status?: string;
                                                    verified_address?: string;
                                                    verified_name?: string;
                                                };
                                            } & {
                                                country?: string;
                                                customer?: string;
                                                type?: string;
                                                value?: string;
                                                verification?: {
                                                    status?: string;
                                                    verified_address?: string;
                                                    verified_name?: string;
                                                } & any & { [K_9 in Exclude<keyof I["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["tax_ids"][number]["verification"], keyof StripeTaxVerification>]: never; };
                                            } & { [K_10 in Exclude<keyof I["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["tax_ids"][number], keyof StripeTaxId>]: never; })[] & { [K_11 in Exclude<keyof I["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["tax_ids"], keyof {
                                                country?: string;
                                                customer?: string;
                                                type?: string;
                                                value?: string;
                                                verification?: {
                                                    status?: string;
                                                    verified_address?: string;
                                                    verified_name?: string;
                                                };
                                            }[]>]: never; };
                                            items?: {
                                                id?: string;
                                                quantity?: string;
                                                subscription?: string;
                                                plan?: {
                                                    status?: boolean;
                                                    nickname?: string;
                                                    product?: string;
                                                    amount?: number;
                                                    usage_type?: string;
                                                };
                                                price?: {
                                                    nickname?: string;
                                                    product?: string;
                                                    active?: boolean;
                                                    billing_scheme?: string;
                                                    currency?: string;
                                                    recurring?: {
                                                        interval?: string;
                                                        interval_count?: number;
                                                        trial_period_days?: number;
                                                        usage_type?: string;
                                                    };
                                                };
                                            }[] & ({
                                                id?: string;
                                                quantity?: string;
                                                subscription?: string;
                                                plan?: {
                                                    status?: boolean;
                                                    nickname?: string;
                                                    product?: string;
                                                    amount?: number;
                                                    usage_type?: string;
                                                };
                                                price?: {
                                                    nickname?: string;
                                                    product?: string;
                                                    active?: boolean;
                                                    billing_scheme?: string;
                                                    currency?: string;
                                                    recurring?: {
                                                        interval?: string;
                                                        interval_count?: number;
                                                        trial_period_days?: number;
                                                        usage_type?: string;
                                                    };
                                                };
                                            } & {
                                                id?: string;
                                                quantity?: string;
                                                subscription?: string;
                                                plan?: {
                                                    status?: boolean;
                                                    nickname?: string;
                                                    product?: string;
                                                    amount?: number;
                                                    usage_type?: string;
                                                } & any & { [K_12 in Exclude<keyof I["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["items"][number]["plan"], keyof StripePlan>]: never; };
                                                price?: {
                                                    nickname?: string;
                                                    product?: string;
                                                    active?: boolean;
                                                    billing_scheme?: string;
                                                    currency?: string;
                                                    recurring?: {
                                                        interval?: string;
                                                        interval_count?: number;
                                                        trial_period_days?: number;
                                                        usage_type?: string;
                                                    };
                                                } & any & { [K_13 in Exclude<keyof I["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["items"][number]["price"], keyof StripePrice>]: never; };
                                            } & { [K_14 in Exclude<keyof I["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["items"][number], keyof StripeSubscriptionItem>]: never; })[] & { [K_15 in Exclude<keyof I["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["items"], keyof {
                                                id?: string;
                                                quantity?: string;
                                                subscription?: string;
                                                plan?: {
                                                    status?: boolean;
                                                    nickname?: string;
                                                    product?: string;
                                                    amount?: number;
                                                    usage_type?: string;
                                                };
                                                price?: {
                                                    nickname?: string;
                                                    product?: string;
                                                    active?: boolean;
                                                    billing_scheme?: string;
                                                    currency?: string;
                                                    recurring?: {
                                                        interval?: string;
                                                        interval_count?: number;
                                                        trial_period_days?: number;
                                                        usage_type?: string;
                                                    };
                                                };
                                            }[]>]: never; };
                                            default_tax_rates?: string[] & string[] & { [K_16 in Exclude<keyof I["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["default_tax_rates"], keyof string[]>]: never; };
                                        } & { [K_17 in Exclude<keyof I["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number], keyof StripeSubscription>]: never; })[] & { [K_18 in Exclude<keyof I["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"], keyof any[]>]: never; };
                                        tax_ids?: {
                                            country?: string;
                                            customer?: string;
                                            type?: string;
                                            value?: string;
                                            verification?: {
                                                status?: string;
                                                verified_address?: string;
                                                verified_name?: string;
                                            };
                                        }[] & ({
                                            country?: string;
                                            customer?: string;
                                            type?: string;
                                            value?: string;
                                            verification?: {
                                                status?: string;
                                                verified_address?: string;
                                                verified_name?: string;
                                            };
                                        } & {
                                            country?: string;
                                            customer?: string;
                                            type?: string;
                                            value?: string;
                                            verification?: {
                                                status?: string;
                                                verified_address?: string;
                                                verified_name?: string;
                                            } & {
                                                status?: string;
                                                verified_address?: string;
                                                verified_name?: string;
                                            } & { [K_19 in Exclude<keyof I["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["tax_ids"][number]["verification"], keyof StripeTaxVerification>]: never; };
                                        } & { [K_20 in Exclude<keyof I["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["tax_ids"][number], keyof StripeTaxId>]: never; })[] & { [K_21 in Exclude<keyof I["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["tax_ids"], keyof {
                                            country?: string;
                                            customer?: string;
                                            type?: string;
                                            value?: string;
                                            verification?: {
                                                status?: string;
                                                verified_address?: string;
                                                verified_name?: string;
                                            };
                                        }[]>]: never; };
                                        items?: {
                                            id?: string;
                                            quantity?: string;
                                            subscription?: string;
                                            plan?: {
                                                status?: boolean;
                                                nickname?: string;
                                                product?: string;
                                                amount?: number;
                                                usage_type?: string;
                                            };
                                            price?: {
                                                nickname?: string;
                                                product?: string;
                                                active?: boolean;
                                                billing_scheme?: string;
                                                currency?: string;
                                                recurring?: {
                                                    interval?: string;
                                                    interval_count?: number;
                                                    trial_period_days?: number;
                                                    usage_type?: string;
                                                };
                                            };
                                        }[] & ({
                                            id?: string;
                                            quantity?: string;
                                            subscription?: string;
                                            plan?: {
                                                status?: boolean;
                                                nickname?: string;
                                                product?: string;
                                                amount?: number;
                                                usage_type?: string;
                                            };
                                            price?: {
                                                nickname?: string;
                                                product?: string;
                                                active?: boolean;
                                                billing_scheme?: string;
                                                currency?: string;
                                                recurring?: {
                                                    interval?: string;
                                                    interval_count?: number;
                                                    trial_period_days?: number;
                                                    usage_type?: string;
                                                };
                                            };
                                        } & {
                                            id?: string;
                                            quantity?: string;
                                            subscription?: string;
                                            plan?: {
                                                status?: boolean;
                                                nickname?: string;
                                                product?: string;
                                                amount?: number;
                                                usage_type?: string;
                                            } & {
                                                status?: boolean;
                                                nickname?: string;
                                                product?: string;
                                                amount?: number;
                                                usage_type?: string;
                                            } & { [K_22 in Exclude<keyof I["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["items"][number]["plan"], keyof StripePlan>]: never; };
                                            price?: {
                                                nickname?: string;
                                                product?: string;
                                                active?: boolean;
                                                billing_scheme?: string;
                                                currency?: string;
                                                recurring?: {
                                                    interval?: string;
                                                    interval_count?: number;
                                                    trial_period_days?: number;
                                                    usage_type?: string;
                                                };
                                            } & {
                                                nickname?: string;
                                                product?: string;
                                                active?: boolean;
                                                billing_scheme?: string;
                                                currency?: string;
                                                recurring?: {
                                                    interval?: string;
                                                    interval_count?: number;
                                                    trial_period_days?: number;
                                                    usage_type?: string;
                                                } & any & { [K_23 in Exclude<keyof I["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["items"][number]["price"]["recurring"], keyof StripeRecurring>]: never; };
                                            } & { [K_24 in Exclude<keyof I["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["items"][number]["price"], keyof StripePrice>]: never; };
                                        } & { [K_25 in Exclude<keyof I["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["items"][number], keyof StripeSubscriptionItem>]: never; })[] & { [K_26 in Exclude<keyof I["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["items"], keyof {
                                            id?: string;
                                            quantity?: string;
                                            subscription?: string;
                                            plan?: {
                                                status?: boolean;
                                                nickname?: string;
                                                product?: string;
                                                amount?: number;
                                                usage_type?: string;
                                            };
                                            price?: {
                                                nickname?: string;
                                                product?: string;
                                                active?: boolean;
                                                billing_scheme?: string;
                                                currency?: string;
                                                recurring?: {
                                                    interval?: string;
                                                    interval_count?: number;
                                                    trial_period_days?: number;
                                                    usage_type?: string;
                                                };
                                            };
                                        }[]>]: never; };
                                        default_tax_rates?: string[] & string[] & { [K_27 in Exclude<keyof I["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["default_tax_rates"], keyof string[]>]: never; };
                                    } & { [K_28 in Exclude<keyof I["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number], keyof StripeSubscription>]: never; })[] & { [K_29 in Exclude<keyof I["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"], keyof any[]>]: never; };
                                    tax_ids?: {
                                        country?: string;
                                        customer?: string;
                                        type?: string;
                                        value?: string;
                                        verification?: {
                                            status?: string;
                                            verified_address?: string;
                                            verified_name?: string;
                                        };
                                    }[] & ({
                                        country?: string;
                                        customer?: string;
                                        type?: string;
                                        value?: string;
                                        verification?: {
                                            status?: string;
                                            verified_address?: string;
                                            verified_name?: string;
                                        };
                                    } & {
                                        country?: string;
                                        customer?: string;
                                        type?: string;
                                        value?: string;
                                        verification?: {
                                            status?: string;
                                            verified_address?: string;
                                            verified_name?: string;
                                        } & {
                                            status?: string;
                                            verified_address?: string;
                                            verified_name?: string;
                                        } & { [K_30 in Exclude<keyof I["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["tax_ids"][number]["verification"], keyof StripeTaxVerification>]: never; };
                                    } & { [K_31 in Exclude<keyof I["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["tax_ids"][number], keyof StripeTaxId>]: never; })[] & { [K_32 in Exclude<keyof I["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["tax_ids"], keyof {
                                        country?: string;
                                        customer?: string;
                                        type?: string;
                                        value?: string;
                                        verification?: {
                                            status?: string;
                                            verified_address?: string;
                                            verified_name?: string;
                                        };
                                    }[]>]: never; };
                                    items?: {
                                        id?: string;
                                        quantity?: string;
                                        subscription?: string;
                                        plan?: {
                                            status?: boolean;
                                            nickname?: string;
                                            product?: string;
                                            amount?: number;
                                            usage_type?: string;
                                        };
                                        price?: {
                                            nickname?: string;
                                            product?: string;
                                            active?: boolean;
                                            billing_scheme?: string;
                                            currency?: string;
                                            recurring?: {
                                                interval?: string;
                                                interval_count?: number;
                                                trial_period_days?: number;
                                                usage_type?: string;
                                            };
                                        };
                                    }[] & ({
                                        id?: string;
                                        quantity?: string;
                                        subscription?: string;
                                        plan?: {
                                            status?: boolean;
                                            nickname?: string;
                                            product?: string;
                                            amount?: number;
                                            usage_type?: string;
                                        };
                                        price?: {
                                            nickname?: string;
                                            product?: string;
                                            active?: boolean;
                                            billing_scheme?: string;
                                            currency?: string;
                                            recurring?: {
                                                interval?: string;
                                                interval_count?: number;
                                                trial_period_days?: number;
                                                usage_type?: string;
                                            };
                                        };
                                    } & {
                                        id?: string;
                                        quantity?: string;
                                        subscription?: string;
                                        plan?: {
                                            status?: boolean;
                                            nickname?: string;
                                            product?: string;
                                            amount?: number;
                                            usage_type?: string;
                                        } & {
                                            status?: boolean;
                                            nickname?: string;
                                            product?: string;
                                            amount?: number;
                                            usage_type?: string;
                                        } & { [K_33 in Exclude<keyof I["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["items"][number]["plan"], keyof StripePlan>]: never; };
                                        price?: {
                                            nickname?: string;
                                            product?: string;
                                            active?: boolean;
                                            billing_scheme?: string;
                                            currency?: string;
                                            recurring?: {
                                                interval?: string;
                                                interval_count?: number;
                                                trial_period_days?: number;
                                                usage_type?: string;
                                            };
                                        } & {
                                            nickname?: string;
                                            product?: string;
                                            active?: boolean;
                                            billing_scheme?: string;
                                            currency?: string;
                                            recurring?: {
                                                interval?: string;
                                                interval_count?: number;
                                                trial_period_days?: number;
                                                usage_type?: string;
                                            } & {
                                                interval?: string;
                                                interval_count?: number;
                                                trial_period_days?: number;
                                                usage_type?: string;
                                            } & { [K_34 in Exclude<keyof I["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["items"][number]["price"]["recurring"], keyof StripeRecurring>]: never; };
                                        } & { [K_35 in Exclude<keyof I["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["items"][number]["price"], keyof StripePrice>]: never; };
                                    } & { [K_36 in Exclude<keyof I["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["items"][number], keyof StripeSubscriptionItem>]: never; })[] & { [K_37 in Exclude<keyof I["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["items"], keyof {
                                        id?: string;
                                        quantity?: string;
                                        subscription?: string;
                                        plan?: {
                                            status?: boolean;
                                            nickname?: string;
                                            product?: string;
                                            amount?: number;
                                            usage_type?: string;
                                        };
                                        price?: {
                                            nickname?: string;
                                            product?: string;
                                            active?: boolean;
                                            billing_scheme?: string;
                                            currency?: string;
                                            recurring?: {
                                                interval?: string;
                                                interval_count?: number;
                                                trial_period_days?: number;
                                                usage_type?: string;
                                            };
                                        };
                                    }[]>]: never; };
                                    default_tax_rates?: string[] & string[] & { [K_38 in Exclude<keyof I["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["default_tax_rates"], keyof string[]>]: never; };
                                } & { [K_39 in Exclude<keyof I["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number], keyof StripeSubscription>]: never; })[] & { [K_40 in Exclude<keyof I["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"], keyof any[]>]: never; };
                                tax_ids?: {
                                    country?: string;
                                    customer?: string;
                                    type?: string;
                                    value?: string;
                                    verification?: {
                                        status?: string;
                                        verified_address?: string;
                                        verified_name?: string;
                                    };
                                }[] & ({
                                    country?: string;
                                    customer?: string;
                                    type?: string;
                                    value?: string;
                                    verification?: {
                                        status?: string;
                                        verified_address?: string;
                                        verified_name?: string;
                                    };
                                } & {
                                    country?: string;
                                    customer?: string;
                                    type?: string;
                                    value?: string;
                                    verification?: {
                                        status?: string;
                                        verified_address?: string;
                                        verified_name?: string;
                                    } & {
                                        status?: string;
                                        verified_address?: string;
                                        verified_name?: string;
                                    } & { [K_41 in Exclude<keyof I["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["tax_ids"][number]["verification"], keyof StripeTaxVerification>]: never; };
                                } & { [K_42 in Exclude<keyof I["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["tax_ids"][number], keyof StripeTaxId>]: never; })[] & { [K_43 in Exclude<keyof I["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["tax_ids"], keyof {
                                    country?: string;
                                    customer?: string;
                                    type?: string;
                                    value?: string;
                                    verification?: {
                                        status?: string;
                                        verified_address?: string;
                                        verified_name?: string;
                                    };
                                }[]>]: never; };
                                items?: {
                                    id?: string;
                                    quantity?: string;
                                    subscription?: string;
                                    plan?: {
                                        status?: boolean;
                                        nickname?: string;
                                        product?: string;
                                        amount?: number;
                                        usage_type?: string;
                                    };
                                    price?: {
                                        nickname?: string;
                                        product?: string;
                                        active?: boolean;
                                        billing_scheme?: string;
                                        currency?: string;
                                        recurring?: {
                                            interval?: string;
                                            interval_count?: number;
                                            trial_period_days?: number;
                                            usage_type?: string;
                                        };
                                    };
                                }[] & ({
                                    id?: string;
                                    quantity?: string;
                                    subscription?: string;
                                    plan?: {
                                        status?: boolean;
                                        nickname?: string;
                                        product?: string;
                                        amount?: number;
                                        usage_type?: string;
                                    };
                                    price?: {
                                        nickname?: string;
                                        product?: string;
                                        active?: boolean;
                                        billing_scheme?: string;
                                        currency?: string;
                                        recurring?: {
                                            interval?: string;
                                            interval_count?: number;
                                            trial_period_days?: number;
                                            usage_type?: string;
                                        };
                                    };
                                } & {
                                    id?: string;
                                    quantity?: string;
                                    subscription?: string;
                                    plan?: {
                                        status?: boolean;
                                        nickname?: string;
                                        product?: string;
                                        amount?: number;
                                        usage_type?: string;
                                    } & {
                                        status?: boolean;
                                        nickname?: string;
                                        product?: string;
                                        amount?: number;
                                        usage_type?: string;
                                    } & { [K_44 in Exclude<keyof I["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["items"][number]["plan"], keyof StripePlan>]: never; };
                                    price?: {
                                        nickname?: string;
                                        product?: string;
                                        active?: boolean;
                                        billing_scheme?: string;
                                        currency?: string;
                                        recurring?: {
                                            interval?: string;
                                            interval_count?: number;
                                            trial_period_days?: number;
                                            usage_type?: string;
                                        };
                                    } & {
                                        nickname?: string;
                                        product?: string;
                                        active?: boolean;
                                        billing_scheme?: string;
                                        currency?: string;
                                        recurring?: {
                                            interval?: string;
                                            interval_count?: number;
                                            trial_period_days?: number;
                                            usage_type?: string;
                                        } & {
                                            interval?: string;
                                            interval_count?: number;
                                            trial_period_days?: number;
                                            usage_type?: string;
                                        } & { [K_45 in Exclude<keyof I["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["items"][number]["price"]["recurring"], keyof StripeRecurring>]: never; };
                                    } & { [K_46 in Exclude<keyof I["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["items"][number]["price"], keyof StripePrice>]: never; };
                                } & { [K_47 in Exclude<keyof I["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["items"][number], keyof StripeSubscriptionItem>]: never; })[] & { [K_48 in Exclude<keyof I["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["items"], keyof {
                                    id?: string;
                                    quantity?: string;
                                    subscription?: string;
                                    plan?: {
                                        status?: boolean;
                                        nickname?: string;
                                        product?: string;
                                        amount?: number;
                                        usage_type?: string;
                                    };
                                    price?: {
                                        nickname?: string;
                                        product?: string;
                                        active?: boolean;
                                        billing_scheme?: string;
                                        currency?: string;
                                        recurring?: {
                                            interval?: string;
                                            interval_count?: number;
                                            trial_period_days?: number;
                                            usage_type?: string;
                                        };
                                    };
                                }[]>]: never; };
                                default_tax_rates?: string[] & string[] & { [K_49 in Exclude<keyof I["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["default_tax_rates"], keyof string[]>]: never; };
                            } & { [K_50 in Exclude<keyof I["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number], keyof StripeSubscription>]: never; })[] & { [K_51 in Exclude<keyof I["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"], keyof any[]>]: never; };
                            tax_ids?: {
                                country?: string;
                                customer?: string;
                                type?: string;
                                value?: string;
                                verification?: {
                                    status?: string;
                                    verified_address?: string;
                                    verified_name?: string;
                                };
                            }[] & ({
                                country?: string;
                                customer?: string;
                                type?: string;
                                value?: string;
                                verification?: {
                                    status?: string;
                                    verified_address?: string;
                                    verified_name?: string;
                                };
                            } & {
                                country?: string;
                                customer?: string;
                                type?: string;
                                value?: string;
                                verification?: {
                                    status?: string;
                                    verified_address?: string;
                                    verified_name?: string;
                                } & {
                                    status?: string;
                                    verified_address?: string;
                                    verified_name?: string;
                                } & { [K_52 in Exclude<keyof I["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["tax_ids"][number]["verification"], keyof StripeTaxVerification>]: never; };
                            } & { [K_53 in Exclude<keyof I["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["tax_ids"][number], keyof StripeTaxId>]: never; })[] & { [K_54 in Exclude<keyof I["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["tax_ids"], keyof {
                                country?: string;
                                customer?: string;
                                type?: string;
                                value?: string;
                                verification?: {
                                    status?: string;
                                    verified_address?: string;
                                    verified_name?: string;
                                };
                            }[]>]: never; };
                            items?: {
                                id?: string;
                                quantity?: string;
                                subscription?: string;
                                plan?: {
                                    status?: boolean;
                                    nickname?: string;
                                    product?: string;
                                    amount?: number;
                                    usage_type?: string;
                                };
                                price?: {
                                    nickname?: string;
                                    product?: string;
                                    active?: boolean;
                                    billing_scheme?: string;
                                    currency?: string;
                                    recurring?: {
                                        interval?: string;
                                        interval_count?: number;
                                        trial_period_days?: number;
                                        usage_type?: string;
                                    };
                                };
                            }[] & ({
                                id?: string;
                                quantity?: string;
                                subscription?: string;
                                plan?: {
                                    status?: boolean;
                                    nickname?: string;
                                    product?: string;
                                    amount?: number;
                                    usage_type?: string;
                                };
                                price?: {
                                    nickname?: string;
                                    product?: string;
                                    active?: boolean;
                                    billing_scheme?: string;
                                    currency?: string;
                                    recurring?: {
                                        interval?: string;
                                        interval_count?: number;
                                        trial_period_days?: number;
                                        usage_type?: string;
                                    };
                                };
                            } & {
                                id?: string;
                                quantity?: string;
                                subscription?: string;
                                plan?: {
                                    status?: boolean;
                                    nickname?: string;
                                    product?: string;
                                    amount?: number;
                                    usage_type?: string;
                                } & {
                                    status?: boolean;
                                    nickname?: string;
                                    product?: string;
                                    amount?: number;
                                    usage_type?: string;
                                } & { [K_55 in Exclude<keyof I["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["items"][number]["plan"], keyof StripePlan>]: never; };
                                price?: {
                                    nickname?: string;
                                    product?: string;
                                    active?: boolean;
                                    billing_scheme?: string;
                                    currency?: string;
                                    recurring?: {
                                        interval?: string;
                                        interval_count?: number;
                                        trial_period_days?: number;
                                        usage_type?: string;
                                    };
                                } & {
                                    nickname?: string;
                                    product?: string;
                                    active?: boolean;
                                    billing_scheme?: string;
                                    currency?: string;
                                    recurring?: {
                                        interval?: string;
                                        interval_count?: number;
                                        trial_period_days?: number;
                                        usage_type?: string;
                                    } & {
                                        interval?: string;
                                        interval_count?: number;
                                        trial_period_days?: number;
                                        usage_type?: string;
                                    } & { [K_56 in Exclude<keyof I["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["items"][number]["price"]["recurring"], keyof StripeRecurring>]: never; };
                                } & { [K_57 in Exclude<keyof I["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["items"][number]["price"], keyof StripePrice>]: never; };
                            } & { [K_58 in Exclude<keyof I["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["items"][number], keyof StripeSubscriptionItem>]: never; })[] & { [K_59 in Exclude<keyof I["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["items"], keyof {
                                id?: string;
                                quantity?: string;
                                subscription?: string;
                                plan?: {
                                    status?: boolean;
                                    nickname?: string;
                                    product?: string;
                                    amount?: number;
                                    usage_type?: string;
                                };
                                price?: {
                                    nickname?: string;
                                    product?: string;
                                    active?: boolean;
                                    billing_scheme?: string;
                                    currency?: string;
                                    recurring?: {
                                        interval?: string;
                                        interval_count?: number;
                                        trial_period_days?: number;
                                        usage_type?: string;
                                    };
                                };
                            }[]>]: never; };
                            default_tax_rates?: string[] & string[] & { [K_60 in Exclude<keyof I["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["default_tax_rates"], keyof string[]>]: never; };
                        } & { [K_61 in Exclude<keyof I["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number], keyof StripeSubscription>]: never; })[] & { [K_62 in Exclude<keyof I["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"], keyof any[]>]: never; };
                        tax_ids?: {
                            country?: string;
                            customer?: string;
                            type?: string;
                            value?: string;
                            verification?: {
                                status?: string;
                                verified_address?: string;
                                verified_name?: string;
                            };
                        }[] & ({
                            country?: string;
                            customer?: string;
                            type?: string;
                            value?: string;
                            verification?: {
                                status?: string;
                                verified_address?: string;
                                verified_name?: string;
                            };
                        } & {
                            country?: string;
                            customer?: string;
                            type?: string;
                            value?: string;
                            verification?: {
                                status?: string;
                                verified_address?: string;
                                verified_name?: string;
                            } & {
                                status?: string;
                                verified_address?: string;
                                verified_name?: string;
                            } & { [K_63 in Exclude<keyof I["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["tax_ids"][number]["verification"], keyof StripeTaxVerification>]: never; };
                        } & { [K_64 in Exclude<keyof I["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["tax_ids"][number], keyof StripeTaxId>]: never; })[] & { [K_65 in Exclude<keyof I["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["tax_ids"], keyof {
                            country?: string;
                            customer?: string;
                            type?: string;
                            value?: string;
                            verification?: {
                                status?: string;
                                verified_address?: string;
                                verified_name?: string;
                            };
                        }[]>]: never; };
                        items?: {
                            id?: string;
                            quantity?: string;
                            subscription?: string;
                            plan?: {
                                status?: boolean;
                                nickname?: string;
                                product?: string;
                                amount?: number;
                                usage_type?: string;
                            };
                            price?: {
                                nickname?: string;
                                product?: string;
                                active?: boolean;
                                billing_scheme?: string;
                                currency?: string;
                                recurring?: {
                                    interval?: string;
                                    interval_count?: number;
                                    trial_period_days?: number;
                                    usage_type?: string;
                                };
                            };
                        }[] & ({
                            id?: string;
                            quantity?: string;
                            subscription?: string;
                            plan?: {
                                status?: boolean;
                                nickname?: string;
                                product?: string;
                                amount?: number;
                                usage_type?: string;
                            };
                            price?: {
                                nickname?: string;
                                product?: string;
                                active?: boolean;
                                billing_scheme?: string;
                                currency?: string;
                                recurring?: {
                                    interval?: string;
                                    interval_count?: number;
                                    trial_period_days?: number;
                                    usage_type?: string;
                                };
                            };
                        } & {
                            id?: string;
                            quantity?: string;
                            subscription?: string;
                            plan?: {
                                status?: boolean;
                                nickname?: string;
                                product?: string;
                                amount?: number;
                                usage_type?: string;
                            } & {
                                status?: boolean;
                                nickname?: string;
                                product?: string;
                                amount?: number;
                                usage_type?: string;
                            } & { [K_66 in Exclude<keyof I["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["items"][number]["plan"], keyof StripePlan>]: never; };
                            price?: {
                                nickname?: string;
                                product?: string;
                                active?: boolean;
                                billing_scheme?: string;
                                currency?: string;
                                recurring?: {
                                    interval?: string;
                                    interval_count?: number;
                                    trial_period_days?: number;
                                    usage_type?: string;
                                };
                            } & {
                                nickname?: string;
                                product?: string;
                                active?: boolean;
                                billing_scheme?: string;
                                currency?: string;
                                recurring?: {
                                    interval?: string;
                                    interval_count?: number;
                                    trial_period_days?: number;
                                    usage_type?: string;
                                } & {
                                    interval?: string;
                                    interval_count?: number;
                                    trial_period_days?: number;
                                    usage_type?: string;
                                } & { [K_67 in Exclude<keyof I["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["items"][number]["price"]["recurring"], keyof StripeRecurring>]: never; };
                            } & { [K_68 in Exclude<keyof I["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["items"][number]["price"], keyof StripePrice>]: never; };
                        } & { [K_69 in Exclude<keyof I["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["items"][number], keyof StripeSubscriptionItem>]: never; })[] & { [K_70 in Exclude<keyof I["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["items"], keyof {
                            id?: string;
                            quantity?: string;
                            subscription?: string;
                            plan?: {
                                status?: boolean;
                                nickname?: string;
                                product?: string;
                                amount?: number;
                                usage_type?: string;
                            };
                            price?: {
                                nickname?: string;
                                product?: string;
                                active?: boolean;
                                billing_scheme?: string;
                                currency?: string;
                                recurring?: {
                                    interval?: string;
                                    interval_count?: number;
                                    trial_period_days?: number;
                                    usage_type?: string;
                                };
                            };
                        }[]>]: never; };
                        default_tax_rates?: string[] & string[] & { [K_71 in Exclude<keyof I["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["default_tax_rates"], keyof string[]>]: never; };
                    } & { [K_72 in Exclude<keyof I["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number], keyof StripeSubscription>]: never; })[] & { [K_73 in Exclude<keyof I["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"], keyof any[]>]: never; };
                    tax_ids?: {
                        country?: string;
                        customer?: string;
                        type?: string;
                        value?: string;
                        verification?: {
                            status?: string;
                            verified_address?: string;
                            verified_name?: string;
                        };
                    }[] & ({
                        country?: string;
                        customer?: string;
                        type?: string;
                        value?: string;
                        verification?: {
                            status?: string;
                            verified_address?: string;
                            verified_name?: string;
                        };
                    } & {
                        country?: string;
                        customer?: string;
                        type?: string;
                        value?: string;
                        verification?: {
                            status?: string;
                            verified_address?: string;
                            verified_name?: string;
                        } & {
                            status?: string;
                            verified_address?: string;
                            verified_name?: string;
                        } & { [K_74 in Exclude<keyof I["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["tax_ids"][number]["verification"], keyof StripeTaxVerification>]: never; };
                    } & { [K_75 in Exclude<keyof I["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["tax_ids"][number], keyof StripeTaxId>]: never; })[] & { [K_76 in Exclude<keyof I["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["tax_ids"], keyof {
                        country?: string;
                        customer?: string;
                        type?: string;
                        value?: string;
                        verification?: {
                            status?: string;
                            verified_address?: string;
                            verified_name?: string;
                        };
                    }[]>]: never; };
                    items?: {
                        id?: string;
                        quantity?: string;
                        subscription?: string;
                        plan?: {
                            status?: boolean;
                            nickname?: string;
                            product?: string;
                            amount?: number;
                            usage_type?: string;
                        };
                        price?: {
                            nickname?: string;
                            product?: string;
                            active?: boolean;
                            billing_scheme?: string;
                            currency?: string;
                            recurring?: {
                                interval?: string;
                                interval_count?: number;
                                trial_period_days?: number;
                                usage_type?: string;
                            };
                        };
                    }[] & ({
                        id?: string;
                        quantity?: string;
                        subscription?: string;
                        plan?: {
                            status?: boolean;
                            nickname?: string;
                            product?: string;
                            amount?: number;
                            usage_type?: string;
                        };
                        price?: {
                            nickname?: string;
                            product?: string;
                            active?: boolean;
                            billing_scheme?: string;
                            currency?: string;
                            recurring?: {
                                interval?: string;
                                interval_count?: number;
                                trial_period_days?: number;
                                usage_type?: string;
                            };
                        };
                    } & {
                        id?: string;
                        quantity?: string;
                        subscription?: string;
                        plan?: {
                            status?: boolean;
                            nickname?: string;
                            product?: string;
                            amount?: number;
                            usage_type?: string;
                        } & {
                            status?: boolean;
                            nickname?: string;
                            product?: string;
                            amount?: number;
                            usage_type?: string;
                        } & { [K_77 in Exclude<keyof I["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["items"][number]["plan"], keyof StripePlan>]: never; };
                        price?: {
                            nickname?: string;
                            product?: string;
                            active?: boolean;
                            billing_scheme?: string;
                            currency?: string;
                            recurring?: {
                                interval?: string;
                                interval_count?: number;
                                trial_period_days?: number;
                                usage_type?: string;
                            };
                        } & {
                            nickname?: string;
                            product?: string;
                            active?: boolean;
                            billing_scheme?: string;
                            currency?: string;
                            recurring?: {
                                interval?: string;
                                interval_count?: number;
                                trial_period_days?: number;
                                usage_type?: string;
                            } & {
                                interval?: string;
                                interval_count?: number;
                                trial_period_days?: number;
                                usage_type?: string;
                            } & { [K_78 in Exclude<keyof I["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["items"][number]["price"]["recurring"], keyof StripeRecurring>]: never; };
                        } & { [K_79 in Exclude<keyof I["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["items"][number]["price"], keyof StripePrice>]: never; };
                    } & { [K_80 in Exclude<keyof I["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["items"][number], keyof StripeSubscriptionItem>]: never; })[] & { [K_81 in Exclude<keyof I["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["items"], keyof {
                        id?: string;
                        quantity?: string;
                        subscription?: string;
                        plan?: {
                            status?: boolean;
                            nickname?: string;
                            product?: string;
                            amount?: number;
                            usage_type?: string;
                        };
                        price?: {
                            nickname?: string;
                            product?: string;
                            active?: boolean;
                            billing_scheme?: string;
                            currency?: string;
                            recurring?: {
                                interval?: string;
                                interval_count?: number;
                                trial_period_days?: number;
                                usage_type?: string;
                            };
                        };
                    }[]>]: never; };
                    default_tax_rates?: string[] & string[] & { [K_82 in Exclude<keyof I["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["default_tax_rates"], keyof string[]>]: never; };
                } & { [K_83 in Exclude<keyof I["subscriptions"][number]["subscriptions"][number]["subscriptions"][number], keyof StripeSubscription>]: never; })[] & { [K_84 in Exclude<keyof I["subscriptions"][number]["subscriptions"][number]["subscriptions"], keyof any[]>]: never; };
                tax_ids?: {
                    country?: string;
                    customer?: string;
                    type?: string;
                    value?: string;
                    verification?: {
                        status?: string;
                        verified_address?: string;
                        verified_name?: string;
                    };
                }[] & ({
                    country?: string;
                    customer?: string;
                    type?: string;
                    value?: string;
                    verification?: {
                        status?: string;
                        verified_address?: string;
                        verified_name?: string;
                    };
                } & {
                    country?: string;
                    customer?: string;
                    type?: string;
                    value?: string;
                    verification?: {
                        status?: string;
                        verified_address?: string;
                        verified_name?: string;
                    } & {
                        status?: string;
                        verified_address?: string;
                        verified_name?: string;
                    } & { [K_85 in Exclude<keyof I["subscriptions"][number]["subscriptions"][number]["tax_ids"][number]["verification"], keyof StripeTaxVerification>]: never; };
                } & { [K_86 in Exclude<keyof I["subscriptions"][number]["subscriptions"][number]["tax_ids"][number], keyof StripeTaxId>]: never; })[] & { [K_87 in Exclude<keyof I["subscriptions"][number]["subscriptions"][number]["tax_ids"], keyof {
                    country?: string;
                    customer?: string;
                    type?: string;
                    value?: string;
                    verification?: {
                        status?: string;
                        verified_address?: string;
                        verified_name?: string;
                    };
                }[]>]: never; };
                items?: {
                    id?: string;
                    quantity?: string;
                    subscription?: string;
                    plan?: {
                        status?: boolean;
                        nickname?: string;
                        product?: string;
                        amount?: number;
                        usage_type?: string;
                    };
                    price?: {
                        nickname?: string;
                        product?: string;
                        active?: boolean;
                        billing_scheme?: string;
                        currency?: string;
                        recurring?: {
                            interval?: string;
                            interval_count?: number;
                            trial_period_days?: number;
                            usage_type?: string;
                        };
                    };
                }[] & ({
                    id?: string;
                    quantity?: string;
                    subscription?: string;
                    plan?: {
                        status?: boolean;
                        nickname?: string;
                        product?: string;
                        amount?: number;
                        usage_type?: string;
                    };
                    price?: {
                        nickname?: string;
                        product?: string;
                        active?: boolean;
                        billing_scheme?: string;
                        currency?: string;
                        recurring?: {
                            interval?: string;
                            interval_count?: number;
                            trial_period_days?: number;
                            usage_type?: string;
                        };
                    };
                } & {
                    id?: string;
                    quantity?: string;
                    subscription?: string;
                    plan?: {
                        status?: boolean;
                        nickname?: string;
                        product?: string;
                        amount?: number;
                        usage_type?: string;
                    } & {
                        status?: boolean;
                        nickname?: string;
                        product?: string;
                        amount?: number;
                        usage_type?: string;
                    } & { [K_88 in Exclude<keyof I["subscriptions"][number]["subscriptions"][number]["items"][number]["plan"], keyof StripePlan>]: never; };
                    price?: {
                        nickname?: string;
                        product?: string;
                        active?: boolean;
                        billing_scheme?: string;
                        currency?: string;
                        recurring?: {
                            interval?: string;
                            interval_count?: number;
                            trial_period_days?: number;
                            usage_type?: string;
                        };
                    } & {
                        nickname?: string;
                        product?: string;
                        active?: boolean;
                        billing_scheme?: string;
                        currency?: string;
                        recurring?: {
                            interval?: string;
                            interval_count?: number;
                            trial_period_days?: number;
                            usage_type?: string;
                        } & {
                            interval?: string;
                            interval_count?: number;
                            trial_period_days?: number;
                            usage_type?: string;
                        } & { [K_89 in Exclude<keyof I["subscriptions"][number]["subscriptions"][number]["items"][number]["price"]["recurring"], keyof StripeRecurring>]: never; };
                    } & { [K_90 in Exclude<keyof I["subscriptions"][number]["subscriptions"][number]["items"][number]["price"], keyof StripePrice>]: never; };
                } & { [K_91 in Exclude<keyof I["subscriptions"][number]["subscriptions"][number]["items"][number], keyof StripeSubscriptionItem>]: never; })[] & { [K_92 in Exclude<keyof I["subscriptions"][number]["subscriptions"][number]["items"], keyof {
                    id?: string;
                    quantity?: string;
                    subscription?: string;
                    plan?: {
                        status?: boolean;
                        nickname?: string;
                        product?: string;
                        amount?: number;
                        usage_type?: string;
                    };
                    price?: {
                        nickname?: string;
                        product?: string;
                        active?: boolean;
                        billing_scheme?: string;
                        currency?: string;
                        recurring?: {
                            interval?: string;
                            interval_count?: number;
                            trial_period_days?: number;
                            usage_type?: string;
                        };
                    };
                }[]>]: never; };
                default_tax_rates?: string[] & string[] & { [K_93 in Exclude<keyof I["subscriptions"][number]["subscriptions"][number]["default_tax_rates"], keyof string[]>]: never; };
            } & { [K_94 in Exclude<keyof I["subscriptions"][number]["subscriptions"][number], keyof StripeSubscription>]: never; })[] & { [K_95 in Exclude<keyof I["subscriptions"][number]["subscriptions"], keyof any[]>]: never; };
            tax_ids?: {
                country?: string;
                customer?: string;
                type?: string;
                value?: string;
                verification?: {
                    status?: string;
                    verified_address?: string;
                    verified_name?: string;
                };
            }[] & ({
                country?: string;
                customer?: string;
                type?: string;
                value?: string;
                verification?: {
                    status?: string;
                    verified_address?: string;
                    verified_name?: string;
                };
            } & {
                country?: string;
                customer?: string;
                type?: string;
                value?: string;
                verification?: {
                    status?: string;
                    verified_address?: string;
                    verified_name?: string;
                } & {
                    status?: string;
                    verified_address?: string;
                    verified_name?: string;
                } & { [K_96 in Exclude<keyof I["subscriptions"][number]["tax_ids"][number]["verification"], keyof StripeTaxVerification>]: never; };
            } & { [K_97 in Exclude<keyof I["subscriptions"][number]["tax_ids"][number], keyof StripeTaxId>]: never; })[] & { [K_98 in Exclude<keyof I["subscriptions"][number]["tax_ids"], keyof {
                country?: string;
                customer?: string;
                type?: string;
                value?: string;
                verification?: {
                    status?: string;
                    verified_address?: string;
                    verified_name?: string;
                };
            }[]>]: never; };
            items?: {
                id?: string;
                quantity?: string;
                subscription?: string;
                plan?: {
                    status?: boolean;
                    nickname?: string;
                    product?: string;
                    amount?: number;
                    usage_type?: string;
                };
                price?: {
                    nickname?: string;
                    product?: string;
                    active?: boolean;
                    billing_scheme?: string;
                    currency?: string;
                    recurring?: {
                        interval?: string;
                        interval_count?: number;
                        trial_period_days?: number;
                        usage_type?: string;
                    };
                };
            }[] & ({
                id?: string;
                quantity?: string;
                subscription?: string;
                plan?: {
                    status?: boolean;
                    nickname?: string;
                    product?: string;
                    amount?: number;
                    usage_type?: string;
                };
                price?: {
                    nickname?: string;
                    product?: string;
                    active?: boolean;
                    billing_scheme?: string;
                    currency?: string;
                    recurring?: {
                        interval?: string;
                        interval_count?: number;
                        trial_period_days?: number;
                        usage_type?: string;
                    };
                };
            } & {
                id?: string;
                quantity?: string;
                subscription?: string;
                plan?: {
                    status?: boolean;
                    nickname?: string;
                    product?: string;
                    amount?: number;
                    usage_type?: string;
                } & {
                    status?: boolean;
                    nickname?: string;
                    product?: string;
                    amount?: number;
                    usage_type?: string;
                } & { [K_99 in Exclude<keyof I["subscriptions"][number]["items"][number]["plan"], keyof StripePlan>]: never; };
                price?: {
                    nickname?: string;
                    product?: string;
                    active?: boolean;
                    billing_scheme?: string;
                    currency?: string;
                    recurring?: {
                        interval?: string;
                        interval_count?: number;
                        trial_period_days?: number;
                        usage_type?: string;
                    };
                } & {
                    nickname?: string;
                    product?: string;
                    active?: boolean;
                    billing_scheme?: string;
                    currency?: string;
                    recurring?: {
                        interval?: string;
                        interval_count?: number;
                        trial_period_days?: number;
                        usage_type?: string;
                    } & {
                        interval?: string;
                        interval_count?: number;
                        trial_period_days?: number;
                        usage_type?: string;
                    } & { [K_100 in Exclude<keyof I["subscriptions"][number]["items"][number]["price"]["recurring"], keyof StripeRecurring>]: never; };
                } & { [K_101 in Exclude<keyof I["subscriptions"][number]["items"][number]["price"], keyof StripePrice>]: never; };
            } & { [K_102 in Exclude<keyof I["subscriptions"][number]["items"][number], keyof StripeSubscriptionItem>]: never; })[] & { [K_103 in Exclude<keyof I["subscriptions"][number]["items"], keyof {
                id?: string;
                quantity?: string;
                subscription?: string;
                plan?: {
                    status?: boolean;
                    nickname?: string;
                    product?: string;
                    amount?: number;
                    usage_type?: string;
                };
                price?: {
                    nickname?: string;
                    product?: string;
                    active?: boolean;
                    billing_scheme?: string;
                    currency?: string;
                    recurring?: {
                        interval?: string;
                        interval_count?: number;
                        trial_period_days?: number;
                        usage_type?: string;
                    };
                };
            }[]>]: never; };
            default_tax_rates?: string[] & string[] & { [K_104 in Exclude<keyof I["subscriptions"][number]["default_tax_rates"], keyof string[]>]: never; };
        } & { [K_105 in Exclude<keyof I["subscriptions"][number], keyof StripeSubscription>]: never; })[] & { [K_106 in Exclude<keyof I["subscriptions"], keyof any[]>]: never; };
        tax_ids?: {
            country?: string;
            customer?: string;
            type?: string;
            value?: string;
            verification?: {
                status?: string;
                verified_address?: string;
                verified_name?: string;
            };
        }[] & ({
            country?: string;
            customer?: string;
            type?: string;
            value?: string;
            verification?: {
                status?: string;
                verified_address?: string;
                verified_name?: string;
            };
        } & {
            country?: string;
            customer?: string;
            type?: string;
            value?: string;
            verification?: {
                status?: string;
                verified_address?: string;
                verified_name?: string;
            } & {
                status?: string;
                verified_address?: string;
                verified_name?: string;
            } & { [K_107 in Exclude<keyof I["tax_ids"][number]["verification"], keyof StripeTaxVerification>]: never; };
        } & { [K_108 in Exclude<keyof I["tax_ids"][number], keyof StripeTaxId>]: never; })[] & { [K_109 in Exclude<keyof I["tax_ids"], keyof {
            country?: string;
            customer?: string;
            type?: string;
            value?: string;
            verification?: {
                status?: string;
                verified_address?: string;
                verified_name?: string;
            };
        }[]>]: never; };
        items?: {
            id?: string;
            quantity?: string;
            subscription?: string;
            plan?: {
                status?: boolean;
                nickname?: string;
                product?: string;
                amount?: number;
                usage_type?: string;
            };
            price?: {
                nickname?: string;
                product?: string;
                active?: boolean;
                billing_scheme?: string;
                currency?: string;
                recurring?: {
                    interval?: string;
                    interval_count?: number;
                    trial_period_days?: number;
                    usage_type?: string;
                };
            };
        }[] & ({
            id?: string;
            quantity?: string;
            subscription?: string;
            plan?: {
                status?: boolean;
                nickname?: string;
                product?: string;
                amount?: number;
                usage_type?: string;
            };
            price?: {
                nickname?: string;
                product?: string;
                active?: boolean;
                billing_scheme?: string;
                currency?: string;
                recurring?: {
                    interval?: string;
                    interval_count?: number;
                    trial_period_days?: number;
                    usage_type?: string;
                };
            };
        } & {
            id?: string;
            quantity?: string;
            subscription?: string;
            plan?: {
                status?: boolean;
                nickname?: string;
                product?: string;
                amount?: number;
                usage_type?: string;
            } & {
                status?: boolean;
                nickname?: string;
                product?: string;
                amount?: number;
                usage_type?: string;
            } & { [K_110 in Exclude<keyof I["items"][number]["plan"], keyof StripePlan>]: never; };
            price?: {
                nickname?: string;
                product?: string;
                active?: boolean;
                billing_scheme?: string;
                currency?: string;
                recurring?: {
                    interval?: string;
                    interval_count?: number;
                    trial_period_days?: number;
                    usage_type?: string;
                };
            } & {
                nickname?: string;
                product?: string;
                active?: boolean;
                billing_scheme?: string;
                currency?: string;
                recurring?: {
                    interval?: string;
                    interval_count?: number;
                    trial_period_days?: number;
                    usage_type?: string;
                } & {
                    interval?: string;
                    interval_count?: number;
                    trial_period_days?: number;
                    usage_type?: string;
                } & { [K_111 in Exclude<keyof I["items"][number]["price"]["recurring"], keyof StripeRecurring>]: never; };
            } & { [K_112 in Exclude<keyof I["items"][number]["price"], keyof StripePrice>]: never; };
        } & { [K_113 in Exclude<keyof I["items"][number], keyof StripeSubscriptionItem>]: never; })[] & { [K_114 in Exclude<keyof I["items"], keyof {
            id?: string;
            quantity?: string;
            subscription?: string;
            plan?: {
                status?: boolean;
                nickname?: string;
                product?: string;
                amount?: number;
                usage_type?: string;
            };
            price?: {
                nickname?: string;
                product?: string;
                active?: boolean;
                billing_scheme?: string;
                currency?: string;
                recurring?: {
                    interval?: string;
                    interval_count?: number;
                    trial_period_days?: number;
                    usage_type?: string;
                };
            };
        }[]>]: never; };
        default_tax_rates?: string[] & string[] & { [K_115 in Exclude<keyof I["default_tax_rates"], keyof string[]>]: never; };
    } & { [K_116 in Exclude<keyof I, keyof StripeSubscription>]: never; }>(base?: I): StripeSubscription;
    fromPartial<I_1 extends {
        address?: string;
        balance?: number;
        currency?: string;
        subscriptions?: any[];
        tax_ids?: {
            country?: string;
            customer?: string;
            type?: string;
            value?: string;
            verification?: {
                status?: string;
                verified_address?: string;
                verified_name?: string;
            };
        }[];
        items?: {
            id?: string;
            quantity?: string;
            subscription?: string;
            plan?: {
                status?: boolean;
                nickname?: string;
                product?: string;
                amount?: number;
                usage_type?: string;
            };
            price?: {
                nickname?: string;
                product?: string;
                active?: boolean;
                billing_scheme?: string;
                currency?: string;
                recurring?: {
                    interval?: string;
                    interval_count?: number;
                    trial_period_days?: number;
                    usage_type?: string;
                };
            };
        }[];
        default_tax_rates?: string[];
    } & {
        address?: string;
        balance?: number;
        currency?: string;
        subscriptions?: any[] & ({
            address?: string;
            balance?: number;
            currency?: string;
            subscriptions?: any[];
            tax_ids?: {
                country?: string;
                customer?: string;
                type?: string;
                value?: string;
                verification?: {
                    status?: string;
                    verified_address?: string;
                    verified_name?: string;
                };
            }[];
            items?: {
                id?: string;
                quantity?: string;
                subscription?: string;
                plan?: {
                    status?: boolean;
                    nickname?: string;
                    product?: string;
                    amount?: number;
                    usage_type?: string;
                };
                price?: {
                    nickname?: string;
                    product?: string;
                    active?: boolean;
                    billing_scheme?: string;
                    currency?: string;
                    recurring?: {
                        interval?: string;
                        interval_count?: number;
                        trial_period_days?: number;
                        usage_type?: string;
                    };
                };
            }[];
            default_tax_rates?: string[];
        } & {
            address?: string;
            balance?: number;
            currency?: string;
            subscriptions?: any[] & ({
                address?: string;
                balance?: number;
                currency?: string;
                subscriptions?: any[];
                tax_ids?: {
                    country?: string;
                    customer?: string;
                    type?: string;
                    value?: string;
                    verification?: {
                        status?: string;
                        verified_address?: string;
                        verified_name?: string;
                    };
                }[];
                items?: {
                    id?: string;
                    quantity?: string;
                    subscription?: string;
                    plan?: {
                        status?: boolean;
                        nickname?: string;
                        product?: string;
                        amount?: number;
                        usage_type?: string;
                    };
                    price?: {
                        nickname?: string;
                        product?: string;
                        active?: boolean;
                        billing_scheme?: string;
                        currency?: string;
                        recurring?: {
                            interval?: string;
                            interval_count?: number;
                            trial_period_days?: number;
                            usage_type?: string;
                        };
                    };
                }[];
                default_tax_rates?: string[];
            } & {
                address?: string;
                balance?: number;
                currency?: string;
                subscriptions?: any[] & ({
                    address?: string;
                    balance?: number;
                    currency?: string;
                    subscriptions?: any[];
                    tax_ids?: {
                        country?: string;
                        customer?: string;
                        type?: string;
                        value?: string;
                        verification?: {
                            status?: string;
                            verified_address?: string;
                            verified_name?: string;
                        };
                    }[];
                    items?: {
                        id?: string;
                        quantity?: string;
                        subscription?: string;
                        plan?: {
                            status?: boolean;
                            nickname?: string;
                            product?: string;
                            amount?: number;
                            usage_type?: string;
                        };
                        price?: {
                            nickname?: string;
                            product?: string;
                            active?: boolean;
                            billing_scheme?: string;
                            currency?: string;
                            recurring?: {
                                interval?: string;
                                interval_count?: number;
                                trial_period_days?: number;
                                usage_type?: string;
                            };
                        };
                    }[];
                    default_tax_rates?: string[];
                } & {
                    address?: string;
                    balance?: number;
                    currency?: string;
                    subscriptions?: any[] & ({
                        address?: string;
                        balance?: number;
                        currency?: string;
                        subscriptions?: any[];
                        tax_ids?: {
                            country?: string;
                            customer?: string;
                            type?: string;
                            value?: string;
                            verification?: {
                                status?: string;
                                verified_address?: string;
                                verified_name?: string;
                            };
                        }[];
                        items?: {
                            id?: string;
                            quantity?: string;
                            subscription?: string;
                            plan?: {
                                status?: boolean;
                                nickname?: string;
                                product?: string;
                                amount?: number;
                                usage_type?: string;
                            };
                            price?: {
                                nickname?: string;
                                product?: string;
                                active?: boolean;
                                billing_scheme?: string;
                                currency?: string;
                                recurring?: {
                                    interval?: string;
                                    interval_count?: number;
                                    trial_period_days?: number;
                                    usage_type?: string;
                                };
                            };
                        }[];
                        default_tax_rates?: string[];
                    } & {
                        address?: string;
                        balance?: number;
                        currency?: string;
                        subscriptions?: any[] & ({
                            address?: string;
                            balance?: number;
                            currency?: string;
                            subscriptions?: any[];
                            tax_ids?: {
                                country?: string;
                                customer?: string;
                                type?: string;
                                value?: string;
                                verification?: {
                                    status?: string;
                                    verified_address?: string;
                                    verified_name?: string;
                                };
                            }[];
                            items?: {
                                id?: string;
                                quantity?: string;
                                subscription?: string;
                                plan?: {
                                    status?: boolean;
                                    nickname?: string;
                                    product?: string;
                                    amount?: number;
                                    usage_type?: string;
                                };
                                price?: {
                                    nickname?: string;
                                    product?: string;
                                    active?: boolean;
                                    billing_scheme?: string;
                                    currency?: string;
                                    recurring?: {
                                        interval?: string;
                                        interval_count?: number;
                                        trial_period_days?: number;
                                        usage_type?: string;
                                    };
                                };
                            }[];
                            default_tax_rates?: string[];
                        } & {
                            address?: string;
                            balance?: number;
                            currency?: string;
                            subscriptions?: any[] & ({
                                address?: string;
                                balance?: number;
                                currency?: string;
                                subscriptions?: any[];
                                tax_ids?: {
                                    country?: string;
                                    customer?: string;
                                    type?: string;
                                    value?: string;
                                    verification?: {
                                        status?: string;
                                        verified_address?: string;
                                        verified_name?: string;
                                    };
                                }[];
                                items?: {
                                    id?: string;
                                    quantity?: string;
                                    subscription?: string;
                                    plan?: {
                                        status?: boolean;
                                        nickname?: string;
                                        product?: string;
                                        amount?: number;
                                        usage_type?: string;
                                    };
                                    price?: {
                                        nickname?: string;
                                        product?: string;
                                        active?: boolean;
                                        billing_scheme?: string;
                                        currency?: string;
                                        recurring?: {
                                            interval?: string;
                                            interval_count?: number;
                                            trial_period_days?: number;
                                            usage_type?: string;
                                        };
                                    };
                                }[];
                                default_tax_rates?: string[];
                            } & {
                                address?: string;
                                balance?: number;
                                currency?: string;
                                subscriptions?: any[] & ({
                                    address?: string;
                                    balance?: number;
                                    currency?: string;
                                    subscriptions?: any[];
                                    tax_ids?: {
                                        country?: string;
                                        customer?: string;
                                        type?: string;
                                        value?: string;
                                        verification?: {
                                            status?: string;
                                            verified_address?: string;
                                            verified_name?: string;
                                        };
                                    }[];
                                    items?: {
                                        id?: string;
                                        quantity?: string;
                                        subscription?: string;
                                        plan?: {
                                            status?: boolean;
                                            nickname?: string;
                                            product?: string;
                                            amount?: number;
                                            usage_type?: string;
                                        };
                                        price?: {
                                            nickname?: string;
                                            product?: string;
                                            active?: boolean;
                                            billing_scheme?: string;
                                            currency?: string;
                                            recurring?: {
                                                interval?: string;
                                                interval_count?: number;
                                                trial_period_days?: number;
                                                usage_type?: string;
                                            };
                                        };
                                    }[];
                                    default_tax_rates?: string[];
                                } & {
                                    address?: string;
                                    balance?: number;
                                    currency?: string;
                                    subscriptions?: any[] & ({
                                        address?: string;
                                        balance?: number;
                                        currency?: string;
                                        subscriptions?: any[];
                                        tax_ids?: {
                                            country?: string;
                                            customer?: string;
                                            type?: string;
                                            value?: string;
                                            verification?: {
                                                status?: string;
                                                verified_address?: string;
                                                verified_name?: string;
                                            };
                                        }[];
                                        items?: {
                                            id?: string;
                                            quantity?: string;
                                            subscription?: string;
                                            plan?: {
                                                status?: boolean;
                                                nickname?: string;
                                                product?: string;
                                                amount?: number;
                                                usage_type?: string;
                                            };
                                            price?: {
                                                nickname?: string;
                                                product?: string;
                                                active?: boolean;
                                                billing_scheme?: string;
                                                currency?: string;
                                                recurring?: {
                                                    interval?: string;
                                                    interval_count?: number;
                                                    trial_period_days?: number;
                                                    usage_type?: string;
                                                };
                                            };
                                        }[];
                                        default_tax_rates?: string[];
                                    } & {
                                        address?: string;
                                        balance?: number;
                                        currency?: string;
                                        subscriptions?: any[] & ({
                                            address?: string;
                                            balance?: number;
                                            currency?: string;
                                            subscriptions?: any[];
                                            tax_ids?: {
                                                country?: string;
                                                customer?: string;
                                                type?: string;
                                                value?: string;
                                                verification?: {
                                                    status?: string;
                                                    verified_address?: string;
                                                    verified_name?: string;
                                                };
                                            }[];
                                            items?: {
                                                id?: string;
                                                quantity?: string;
                                                subscription?: string;
                                                plan?: {
                                                    status?: boolean;
                                                    nickname?: string;
                                                    product?: string;
                                                    amount?: number;
                                                    usage_type?: string;
                                                };
                                                price?: {
                                                    nickname?: string;
                                                    product?: string;
                                                    active?: boolean;
                                                    billing_scheme?: string;
                                                    currency?: string;
                                                    recurring?: {
                                                        interval?: string;
                                                        interval_count?: number;
                                                        trial_period_days?: number;
                                                        usage_type?: string;
                                                    };
                                                };
                                            }[];
                                            default_tax_rates?: string[];
                                        } & {
                                            address?: string;
                                            balance?: number;
                                            currency?: string;
                                            subscriptions?: any[] & ({
                                                address?: string;
                                                balance?: number;
                                                currency?: string;
                                                subscriptions?: any[];
                                                tax_ids?: {
                                                    country?: string;
                                                    customer?: string;
                                                    type?: string;
                                                    value?: string;
                                                    verification?: {
                                                        status?: string;
                                                        verified_address?: string;
                                                        verified_name?: string;
                                                    };
                                                }[];
                                                items?: {
                                                    id?: string;
                                                    quantity?: string;
                                                    subscription?: string;
                                                    plan?: {
                                                        status?: boolean;
                                                        nickname?: string;
                                                        product?: string;
                                                        amount?: number;
                                                        usage_type?: string;
                                                    };
                                                    price?: {
                                                        nickname?: string;
                                                        product?: string;
                                                        active?: boolean;
                                                        billing_scheme?: string;
                                                        currency?: string;
                                                        recurring?: {
                                                            interval?: string;
                                                            interval_count?: number;
                                                            trial_period_days?: number;
                                                            usage_type?: string;
                                                        };
                                                    };
                                                }[];
                                                default_tax_rates?: string[];
                                            } & {
                                                address?: string;
                                                balance?: number;
                                                currency?: string;
                                                subscriptions?: any[] & ({
                                                    address?: string;
                                                    balance?: number;
                                                    currency?: string;
                                                    subscriptions?: any[];
                                                    tax_ids?: {
                                                        country?: string;
                                                        customer?: string;
                                                        type?: string;
                                                        value?: string;
                                                        verification?: {
                                                            status?: string;
                                                            verified_address?: string;
                                                            verified_name?: string;
                                                        };
                                                    }[];
                                                    items?: {
                                                        id?: string;
                                                        quantity?: string;
                                                        subscription?: string;
                                                        plan?: {
                                                            status?: boolean;
                                                            nickname?: string;
                                                            product?: string;
                                                            amount?: number;
                                                            usage_type?: string;
                                                        };
                                                        price?: {
                                                            nickname?: string;
                                                            product?: string;
                                                            active?: boolean;
                                                            billing_scheme?: string;
                                                            currency?: string;
                                                            recurring?: {
                                                                interval?: string;
                                                                interval_count?: number;
                                                                trial_period_days?: number;
                                                                usage_type?: string;
                                                            };
                                                        };
                                                    }[];
                                                    default_tax_rates?: string[];
                                                } & any & { [K_117 in Exclude<keyof I_1["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number], keyof StripeSubscription>]: never; })[] & { [K_118 in Exclude<keyof I_1["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"], keyof any[]>]: never; };
                                                tax_ids?: {
                                                    country?: string;
                                                    customer?: string;
                                                    type?: string;
                                                    value?: string;
                                                    verification?: {
                                                        status?: string;
                                                        verified_address?: string;
                                                        verified_name?: string;
                                                    };
                                                }[] & ({
                                                    country?: string;
                                                    customer?: string;
                                                    type?: string;
                                                    value?: string;
                                                    verification?: {
                                                        status?: string;
                                                        verified_address?: string;
                                                        verified_name?: string;
                                                    };
                                                } & any & { [K_119 in Exclude<keyof I_1["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["tax_ids"][number], keyof StripeTaxId>]: never; })[] & { [K_120 in Exclude<keyof I_1["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["tax_ids"], keyof {
                                                    country?: string;
                                                    customer?: string;
                                                    type?: string;
                                                    value?: string;
                                                    verification?: {
                                                        status?: string;
                                                        verified_address?: string;
                                                        verified_name?: string;
                                                    };
                                                }[]>]: never; };
                                                items?: {
                                                    id?: string;
                                                    quantity?: string;
                                                    subscription?: string;
                                                    plan?: {
                                                        status?: boolean;
                                                        nickname?: string;
                                                        product?: string;
                                                        amount?: number;
                                                        usage_type?: string;
                                                    };
                                                    price?: {
                                                        nickname?: string;
                                                        product?: string;
                                                        active?: boolean;
                                                        billing_scheme?: string;
                                                        currency?: string;
                                                        recurring?: {
                                                            interval?: string;
                                                            interval_count?: number;
                                                            trial_period_days?: number;
                                                            usage_type?: string;
                                                        };
                                                    };
                                                }[] & ({
                                                    id?: string;
                                                    quantity?: string;
                                                    subscription?: string;
                                                    plan?: {
                                                        status?: boolean;
                                                        nickname?: string;
                                                        product?: string;
                                                        amount?: number;
                                                        usage_type?: string;
                                                    };
                                                    price?: {
                                                        nickname?: string;
                                                        product?: string;
                                                        active?: boolean;
                                                        billing_scheme?: string;
                                                        currency?: string;
                                                        recurring?: {
                                                            interval?: string;
                                                            interval_count?: number;
                                                            trial_period_days?: number;
                                                            usage_type?: string;
                                                        };
                                                    };
                                                } & any & { [K_121 in Exclude<keyof I_1["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["items"][number], keyof StripeSubscriptionItem>]: never; })[] & { [K_122 in Exclude<keyof I_1["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["items"], keyof {
                                                    id?: string;
                                                    quantity?: string;
                                                    subscription?: string;
                                                    plan?: {
                                                        status?: boolean;
                                                        nickname?: string;
                                                        product?: string;
                                                        amount?: number;
                                                        usage_type?: string;
                                                    };
                                                    price?: {
                                                        nickname?: string;
                                                        product?: string;
                                                        active?: boolean;
                                                        billing_scheme?: string;
                                                        currency?: string;
                                                        recurring?: {
                                                            interval?: string;
                                                            interval_count?: number;
                                                            trial_period_days?: number;
                                                            usage_type?: string;
                                                        };
                                                    };
                                                }[]>]: never; };
                                                default_tax_rates?: string[] & string[] & { [K_123 in Exclude<keyof I_1["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["default_tax_rates"], keyof string[]>]: never; };
                                            } & { [K_124 in Exclude<keyof I_1["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number], keyof StripeSubscription>]: never; })[] & { [K_125 in Exclude<keyof I_1["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"], keyof any[]>]: never; };
                                            tax_ids?: {
                                                country?: string;
                                                customer?: string;
                                                type?: string;
                                                value?: string;
                                                verification?: {
                                                    status?: string;
                                                    verified_address?: string;
                                                    verified_name?: string;
                                                };
                                            }[] & ({
                                                country?: string;
                                                customer?: string;
                                                type?: string;
                                                value?: string;
                                                verification?: {
                                                    status?: string;
                                                    verified_address?: string;
                                                    verified_name?: string;
                                                };
                                            } & {
                                                country?: string;
                                                customer?: string;
                                                type?: string;
                                                value?: string;
                                                verification?: {
                                                    status?: string;
                                                    verified_address?: string;
                                                    verified_name?: string;
                                                } & any & { [K_126 in Exclude<keyof I_1["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["tax_ids"][number]["verification"], keyof StripeTaxVerification>]: never; };
                                            } & { [K_127 in Exclude<keyof I_1["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["tax_ids"][number], keyof StripeTaxId>]: never; })[] & { [K_128 in Exclude<keyof I_1["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["tax_ids"], keyof {
                                                country?: string;
                                                customer?: string;
                                                type?: string;
                                                value?: string;
                                                verification?: {
                                                    status?: string;
                                                    verified_address?: string;
                                                    verified_name?: string;
                                                };
                                            }[]>]: never; };
                                            items?: {
                                                id?: string;
                                                quantity?: string;
                                                subscription?: string;
                                                plan?: {
                                                    status?: boolean;
                                                    nickname?: string;
                                                    product?: string;
                                                    amount?: number;
                                                    usage_type?: string;
                                                };
                                                price?: {
                                                    nickname?: string;
                                                    product?: string;
                                                    active?: boolean;
                                                    billing_scheme?: string;
                                                    currency?: string;
                                                    recurring?: {
                                                        interval?: string;
                                                        interval_count?: number;
                                                        trial_period_days?: number;
                                                        usage_type?: string;
                                                    };
                                                };
                                            }[] & ({
                                                id?: string;
                                                quantity?: string;
                                                subscription?: string;
                                                plan?: {
                                                    status?: boolean;
                                                    nickname?: string;
                                                    product?: string;
                                                    amount?: number;
                                                    usage_type?: string;
                                                };
                                                price?: {
                                                    nickname?: string;
                                                    product?: string;
                                                    active?: boolean;
                                                    billing_scheme?: string;
                                                    currency?: string;
                                                    recurring?: {
                                                        interval?: string;
                                                        interval_count?: number;
                                                        trial_period_days?: number;
                                                        usage_type?: string;
                                                    };
                                                };
                                            } & {
                                                id?: string;
                                                quantity?: string;
                                                subscription?: string;
                                                plan?: {
                                                    status?: boolean;
                                                    nickname?: string;
                                                    product?: string;
                                                    amount?: number;
                                                    usage_type?: string;
                                                } & any & { [K_129 in Exclude<keyof I_1["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["items"][number]["plan"], keyof StripePlan>]: never; };
                                                price?: {
                                                    nickname?: string;
                                                    product?: string;
                                                    active?: boolean;
                                                    billing_scheme?: string;
                                                    currency?: string;
                                                    recurring?: {
                                                        interval?: string;
                                                        interval_count?: number;
                                                        trial_period_days?: number;
                                                        usage_type?: string;
                                                    };
                                                } & any & { [K_130 in Exclude<keyof I_1["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["items"][number]["price"], keyof StripePrice>]: never; };
                                            } & { [K_131 in Exclude<keyof I_1["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["items"][number], keyof StripeSubscriptionItem>]: never; })[] & { [K_132 in Exclude<keyof I_1["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["items"], keyof {
                                                id?: string;
                                                quantity?: string;
                                                subscription?: string;
                                                plan?: {
                                                    status?: boolean;
                                                    nickname?: string;
                                                    product?: string;
                                                    amount?: number;
                                                    usage_type?: string;
                                                };
                                                price?: {
                                                    nickname?: string;
                                                    product?: string;
                                                    active?: boolean;
                                                    billing_scheme?: string;
                                                    currency?: string;
                                                    recurring?: {
                                                        interval?: string;
                                                        interval_count?: number;
                                                        trial_period_days?: number;
                                                        usage_type?: string;
                                                    };
                                                };
                                            }[]>]: never; };
                                            default_tax_rates?: string[] & string[] & { [K_133 in Exclude<keyof I_1["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["default_tax_rates"], keyof string[]>]: never; };
                                        } & { [K_134 in Exclude<keyof I_1["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number], keyof StripeSubscription>]: never; })[] & { [K_135 in Exclude<keyof I_1["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"], keyof any[]>]: never; };
                                        tax_ids?: {
                                            country?: string;
                                            customer?: string;
                                            type?: string;
                                            value?: string;
                                            verification?: {
                                                status?: string;
                                                verified_address?: string;
                                                verified_name?: string;
                                            };
                                        }[] & ({
                                            country?: string;
                                            customer?: string;
                                            type?: string;
                                            value?: string;
                                            verification?: {
                                                status?: string;
                                                verified_address?: string;
                                                verified_name?: string;
                                            };
                                        } & {
                                            country?: string;
                                            customer?: string;
                                            type?: string;
                                            value?: string;
                                            verification?: {
                                                status?: string;
                                                verified_address?: string;
                                                verified_name?: string;
                                            } & {
                                                status?: string;
                                                verified_address?: string;
                                                verified_name?: string;
                                            } & { [K_136 in Exclude<keyof I_1["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["tax_ids"][number]["verification"], keyof StripeTaxVerification>]: never; };
                                        } & { [K_137 in Exclude<keyof I_1["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["tax_ids"][number], keyof StripeTaxId>]: never; })[] & { [K_138 in Exclude<keyof I_1["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["tax_ids"], keyof {
                                            country?: string;
                                            customer?: string;
                                            type?: string;
                                            value?: string;
                                            verification?: {
                                                status?: string;
                                                verified_address?: string;
                                                verified_name?: string;
                                            };
                                        }[]>]: never; };
                                        items?: {
                                            id?: string;
                                            quantity?: string;
                                            subscription?: string;
                                            plan?: {
                                                status?: boolean;
                                                nickname?: string;
                                                product?: string;
                                                amount?: number;
                                                usage_type?: string;
                                            };
                                            price?: {
                                                nickname?: string;
                                                product?: string;
                                                active?: boolean;
                                                billing_scheme?: string;
                                                currency?: string;
                                                recurring?: {
                                                    interval?: string;
                                                    interval_count?: number;
                                                    trial_period_days?: number;
                                                    usage_type?: string;
                                                };
                                            };
                                        }[] & ({
                                            id?: string;
                                            quantity?: string;
                                            subscription?: string;
                                            plan?: {
                                                status?: boolean;
                                                nickname?: string;
                                                product?: string;
                                                amount?: number;
                                                usage_type?: string;
                                            };
                                            price?: {
                                                nickname?: string;
                                                product?: string;
                                                active?: boolean;
                                                billing_scheme?: string;
                                                currency?: string;
                                                recurring?: {
                                                    interval?: string;
                                                    interval_count?: number;
                                                    trial_period_days?: number;
                                                    usage_type?: string;
                                                };
                                            };
                                        } & {
                                            id?: string;
                                            quantity?: string;
                                            subscription?: string;
                                            plan?: {
                                                status?: boolean;
                                                nickname?: string;
                                                product?: string;
                                                amount?: number;
                                                usage_type?: string;
                                            } & {
                                                status?: boolean;
                                                nickname?: string;
                                                product?: string;
                                                amount?: number;
                                                usage_type?: string;
                                            } & { [K_139 in Exclude<keyof I_1["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["items"][number]["plan"], keyof StripePlan>]: never; };
                                            price?: {
                                                nickname?: string;
                                                product?: string;
                                                active?: boolean;
                                                billing_scheme?: string;
                                                currency?: string;
                                                recurring?: {
                                                    interval?: string;
                                                    interval_count?: number;
                                                    trial_period_days?: number;
                                                    usage_type?: string;
                                                };
                                            } & {
                                                nickname?: string;
                                                product?: string;
                                                active?: boolean;
                                                billing_scheme?: string;
                                                currency?: string;
                                                recurring?: {
                                                    interval?: string;
                                                    interval_count?: number;
                                                    trial_period_days?: number;
                                                    usage_type?: string;
                                                } & any & { [K_140 in Exclude<keyof I_1["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["items"][number]["price"]["recurring"], keyof StripeRecurring>]: never; };
                                            } & { [K_141 in Exclude<keyof I_1["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["items"][number]["price"], keyof StripePrice>]: never; };
                                        } & { [K_142 in Exclude<keyof I_1["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["items"][number], keyof StripeSubscriptionItem>]: never; })[] & { [K_143 in Exclude<keyof I_1["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["items"], keyof {
                                            id?: string;
                                            quantity?: string;
                                            subscription?: string;
                                            plan?: {
                                                status?: boolean;
                                                nickname?: string;
                                                product?: string;
                                                amount?: number;
                                                usage_type?: string;
                                            };
                                            price?: {
                                                nickname?: string;
                                                product?: string;
                                                active?: boolean;
                                                billing_scheme?: string;
                                                currency?: string;
                                                recurring?: {
                                                    interval?: string;
                                                    interval_count?: number;
                                                    trial_period_days?: number;
                                                    usage_type?: string;
                                                };
                                            };
                                        }[]>]: never; };
                                        default_tax_rates?: string[] & string[] & { [K_144 in Exclude<keyof I_1["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["default_tax_rates"], keyof string[]>]: never; };
                                    } & { [K_145 in Exclude<keyof I_1["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number], keyof StripeSubscription>]: never; })[] & { [K_146 in Exclude<keyof I_1["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"], keyof any[]>]: never; };
                                    tax_ids?: {
                                        country?: string;
                                        customer?: string;
                                        type?: string;
                                        value?: string;
                                        verification?: {
                                            status?: string;
                                            verified_address?: string;
                                            verified_name?: string;
                                        };
                                    }[] & ({
                                        country?: string;
                                        customer?: string;
                                        type?: string;
                                        value?: string;
                                        verification?: {
                                            status?: string;
                                            verified_address?: string;
                                            verified_name?: string;
                                        };
                                    } & {
                                        country?: string;
                                        customer?: string;
                                        type?: string;
                                        value?: string;
                                        verification?: {
                                            status?: string;
                                            verified_address?: string;
                                            verified_name?: string;
                                        } & {
                                            status?: string;
                                            verified_address?: string;
                                            verified_name?: string;
                                        } & { [K_147 in Exclude<keyof I_1["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["tax_ids"][number]["verification"], keyof StripeTaxVerification>]: never; };
                                    } & { [K_148 in Exclude<keyof I_1["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["tax_ids"][number], keyof StripeTaxId>]: never; })[] & { [K_149 in Exclude<keyof I_1["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["tax_ids"], keyof {
                                        country?: string;
                                        customer?: string;
                                        type?: string;
                                        value?: string;
                                        verification?: {
                                            status?: string;
                                            verified_address?: string;
                                            verified_name?: string;
                                        };
                                    }[]>]: never; };
                                    items?: {
                                        id?: string;
                                        quantity?: string;
                                        subscription?: string;
                                        plan?: {
                                            status?: boolean;
                                            nickname?: string;
                                            product?: string;
                                            amount?: number;
                                            usage_type?: string;
                                        };
                                        price?: {
                                            nickname?: string;
                                            product?: string;
                                            active?: boolean;
                                            billing_scheme?: string;
                                            currency?: string;
                                            recurring?: {
                                                interval?: string;
                                                interval_count?: number;
                                                trial_period_days?: number;
                                                usage_type?: string;
                                            };
                                        };
                                    }[] & ({
                                        id?: string;
                                        quantity?: string;
                                        subscription?: string;
                                        plan?: {
                                            status?: boolean;
                                            nickname?: string;
                                            product?: string;
                                            amount?: number;
                                            usage_type?: string;
                                        };
                                        price?: {
                                            nickname?: string;
                                            product?: string;
                                            active?: boolean;
                                            billing_scheme?: string;
                                            currency?: string;
                                            recurring?: {
                                                interval?: string;
                                                interval_count?: number;
                                                trial_period_days?: number;
                                                usage_type?: string;
                                            };
                                        };
                                    } & {
                                        id?: string;
                                        quantity?: string;
                                        subscription?: string;
                                        plan?: {
                                            status?: boolean;
                                            nickname?: string;
                                            product?: string;
                                            amount?: number;
                                            usage_type?: string;
                                        } & {
                                            status?: boolean;
                                            nickname?: string;
                                            product?: string;
                                            amount?: number;
                                            usage_type?: string;
                                        } & { [K_150 in Exclude<keyof I_1["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["items"][number]["plan"], keyof StripePlan>]: never; };
                                        price?: {
                                            nickname?: string;
                                            product?: string;
                                            active?: boolean;
                                            billing_scheme?: string;
                                            currency?: string;
                                            recurring?: {
                                                interval?: string;
                                                interval_count?: number;
                                                trial_period_days?: number;
                                                usage_type?: string;
                                            };
                                        } & {
                                            nickname?: string;
                                            product?: string;
                                            active?: boolean;
                                            billing_scheme?: string;
                                            currency?: string;
                                            recurring?: {
                                                interval?: string;
                                                interval_count?: number;
                                                trial_period_days?: number;
                                                usage_type?: string;
                                            } & {
                                                interval?: string;
                                                interval_count?: number;
                                                trial_period_days?: number;
                                                usage_type?: string;
                                            } & { [K_151 in Exclude<keyof I_1["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["items"][number]["price"]["recurring"], keyof StripeRecurring>]: never; };
                                        } & { [K_152 in Exclude<keyof I_1["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["items"][number]["price"], keyof StripePrice>]: never; };
                                    } & { [K_153 in Exclude<keyof I_1["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["items"][number], keyof StripeSubscriptionItem>]: never; })[] & { [K_154 in Exclude<keyof I_1["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["items"], keyof {
                                        id?: string;
                                        quantity?: string;
                                        subscription?: string;
                                        plan?: {
                                            status?: boolean;
                                            nickname?: string;
                                            product?: string;
                                            amount?: number;
                                            usage_type?: string;
                                        };
                                        price?: {
                                            nickname?: string;
                                            product?: string;
                                            active?: boolean;
                                            billing_scheme?: string;
                                            currency?: string;
                                            recurring?: {
                                                interval?: string;
                                                interval_count?: number;
                                                trial_period_days?: number;
                                                usage_type?: string;
                                            };
                                        };
                                    }[]>]: never; };
                                    default_tax_rates?: string[] & string[] & { [K_155 in Exclude<keyof I_1["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["default_tax_rates"], keyof string[]>]: never; };
                                } & { [K_156 in Exclude<keyof I_1["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number], keyof StripeSubscription>]: never; })[] & { [K_157 in Exclude<keyof I_1["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"], keyof any[]>]: never; };
                                tax_ids?: {
                                    country?: string;
                                    customer?: string;
                                    type?: string;
                                    value?: string;
                                    verification?: {
                                        status?: string;
                                        verified_address?: string;
                                        verified_name?: string;
                                    };
                                }[] & ({
                                    country?: string;
                                    customer?: string;
                                    type?: string;
                                    value?: string;
                                    verification?: {
                                        status?: string;
                                        verified_address?: string;
                                        verified_name?: string;
                                    };
                                } & {
                                    country?: string;
                                    customer?: string;
                                    type?: string;
                                    value?: string;
                                    verification?: {
                                        status?: string;
                                        verified_address?: string;
                                        verified_name?: string;
                                    } & {
                                        status?: string;
                                        verified_address?: string;
                                        verified_name?: string;
                                    } & { [K_158 in Exclude<keyof I_1["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["tax_ids"][number]["verification"], keyof StripeTaxVerification>]: never; };
                                } & { [K_159 in Exclude<keyof I_1["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["tax_ids"][number], keyof StripeTaxId>]: never; })[] & { [K_160 in Exclude<keyof I_1["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["tax_ids"], keyof {
                                    country?: string;
                                    customer?: string;
                                    type?: string;
                                    value?: string;
                                    verification?: {
                                        status?: string;
                                        verified_address?: string;
                                        verified_name?: string;
                                    };
                                }[]>]: never; };
                                items?: {
                                    id?: string;
                                    quantity?: string;
                                    subscription?: string;
                                    plan?: {
                                        status?: boolean;
                                        nickname?: string;
                                        product?: string;
                                        amount?: number;
                                        usage_type?: string;
                                    };
                                    price?: {
                                        nickname?: string;
                                        product?: string;
                                        active?: boolean;
                                        billing_scheme?: string;
                                        currency?: string;
                                        recurring?: {
                                            interval?: string;
                                            interval_count?: number;
                                            trial_period_days?: number;
                                            usage_type?: string;
                                        };
                                    };
                                }[] & ({
                                    id?: string;
                                    quantity?: string;
                                    subscription?: string;
                                    plan?: {
                                        status?: boolean;
                                        nickname?: string;
                                        product?: string;
                                        amount?: number;
                                        usage_type?: string;
                                    };
                                    price?: {
                                        nickname?: string;
                                        product?: string;
                                        active?: boolean;
                                        billing_scheme?: string;
                                        currency?: string;
                                        recurring?: {
                                            interval?: string;
                                            interval_count?: number;
                                            trial_period_days?: number;
                                            usage_type?: string;
                                        };
                                    };
                                } & {
                                    id?: string;
                                    quantity?: string;
                                    subscription?: string;
                                    plan?: {
                                        status?: boolean;
                                        nickname?: string;
                                        product?: string;
                                        amount?: number;
                                        usage_type?: string;
                                    } & {
                                        status?: boolean;
                                        nickname?: string;
                                        product?: string;
                                        amount?: number;
                                        usage_type?: string;
                                    } & { [K_161 in Exclude<keyof I_1["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["items"][number]["plan"], keyof StripePlan>]: never; };
                                    price?: {
                                        nickname?: string;
                                        product?: string;
                                        active?: boolean;
                                        billing_scheme?: string;
                                        currency?: string;
                                        recurring?: {
                                            interval?: string;
                                            interval_count?: number;
                                            trial_period_days?: number;
                                            usage_type?: string;
                                        };
                                    } & {
                                        nickname?: string;
                                        product?: string;
                                        active?: boolean;
                                        billing_scheme?: string;
                                        currency?: string;
                                        recurring?: {
                                            interval?: string;
                                            interval_count?: number;
                                            trial_period_days?: number;
                                            usage_type?: string;
                                        } & {
                                            interval?: string;
                                            interval_count?: number;
                                            trial_period_days?: number;
                                            usage_type?: string;
                                        } & { [K_162 in Exclude<keyof I_1["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["items"][number]["price"]["recurring"], keyof StripeRecurring>]: never; };
                                    } & { [K_163 in Exclude<keyof I_1["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["items"][number]["price"], keyof StripePrice>]: never; };
                                } & { [K_164 in Exclude<keyof I_1["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["items"][number], keyof StripeSubscriptionItem>]: never; })[] & { [K_165 in Exclude<keyof I_1["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["items"], keyof {
                                    id?: string;
                                    quantity?: string;
                                    subscription?: string;
                                    plan?: {
                                        status?: boolean;
                                        nickname?: string;
                                        product?: string;
                                        amount?: number;
                                        usage_type?: string;
                                    };
                                    price?: {
                                        nickname?: string;
                                        product?: string;
                                        active?: boolean;
                                        billing_scheme?: string;
                                        currency?: string;
                                        recurring?: {
                                            interval?: string;
                                            interval_count?: number;
                                            trial_period_days?: number;
                                            usage_type?: string;
                                        };
                                    };
                                }[]>]: never; };
                                default_tax_rates?: string[] & string[] & { [K_166 in Exclude<keyof I_1["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["default_tax_rates"], keyof string[]>]: never; };
                            } & { [K_167 in Exclude<keyof I_1["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number], keyof StripeSubscription>]: never; })[] & { [K_168 in Exclude<keyof I_1["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"], keyof any[]>]: never; };
                            tax_ids?: {
                                country?: string;
                                customer?: string;
                                type?: string;
                                value?: string;
                                verification?: {
                                    status?: string;
                                    verified_address?: string;
                                    verified_name?: string;
                                };
                            }[] & ({
                                country?: string;
                                customer?: string;
                                type?: string;
                                value?: string;
                                verification?: {
                                    status?: string;
                                    verified_address?: string;
                                    verified_name?: string;
                                };
                            } & {
                                country?: string;
                                customer?: string;
                                type?: string;
                                value?: string;
                                verification?: {
                                    status?: string;
                                    verified_address?: string;
                                    verified_name?: string;
                                } & {
                                    status?: string;
                                    verified_address?: string;
                                    verified_name?: string;
                                } & { [K_169 in Exclude<keyof I_1["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["tax_ids"][number]["verification"], keyof StripeTaxVerification>]: never; };
                            } & { [K_170 in Exclude<keyof I_1["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["tax_ids"][number], keyof StripeTaxId>]: never; })[] & { [K_171 in Exclude<keyof I_1["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["tax_ids"], keyof {
                                country?: string;
                                customer?: string;
                                type?: string;
                                value?: string;
                                verification?: {
                                    status?: string;
                                    verified_address?: string;
                                    verified_name?: string;
                                };
                            }[]>]: never; };
                            items?: {
                                id?: string;
                                quantity?: string;
                                subscription?: string;
                                plan?: {
                                    status?: boolean;
                                    nickname?: string;
                                    product?: string;
                                    amount?: number;
                                    usage_type?: string;
                                };
                                price?: {
                                    nickname?: string;
                                    product?: string;
                                    active?: boolean;
                                    billing_scheme?: string;
                                    currency?: string;
                                    recurring?: {
                                        interval?: string;
                                        interval_count?: number;
                                        trial_period_days?: number;
                                        usage_type?: string;
                                    };
                                };
                            }[] & ({
                                id?: string;
                                quantity?: string;
                                subscription?: string;
                                plan?: {
                                    status?: boolean;
                                    nickname?: string;
                                    product?: string;
                                    amount?: number;
                                    usage_type?: string;
                                };
                                price?: {
                                    nickname?: string;
                                    product?: string;
                                    active?: boolean;
                                    billing_scheme?: string;
                                    currency?: string;
                                    recurring?: {
                                        interval?: string;
                                        interval_count?: number;
                                        trial_period_days?: number;
                                        usage_type?: string;
                                    };
                                };
                            } & {
                                id?: string;
                                quantity?: string;
                                subscription?: string;
                                plan?: {
                                    status?: boolean;
                                    nickname?: string;
                                    product?: string;
                                    amount?: number;
                                    usage_type?: string;
                                } & {
                                    status?: boolean;
                                    nickname?: string;
                                    product?: string;
                                    amount?: number;
                                    usage_type?: string;
                                } & { [K_172 in Exclude<keyof I_1["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["items"][number]["plan"], keyof StripePlan>]: never; };
                                price?: {
                                    nickname?: string;
                                    product?: string;
                                    active?: boolean;
                                    billing_scheme?: string;
                                    currency?: string;
                                    recurring?: {
                                        interval?: string;
                                        interval_count?: number;
                                        trial_period_days?: number;
                                        usage_type?: string;
                                    };
                                } & {
                                    nickname?: string;
                                    product?: string;
                                    active?: boolean;
                                    billing_scheme?: string;
                                    currency?: string;
                                    recurring?: {
                                        interval?: string;
                                        interval_count?: number;
                                        trial_period_days?: number;
                                        usage_type?: string;
                                    } & {
                                        interval?: string;
                                        interval_count?: number;
                                        trial_period_days?: number;
                                        usage_type?: string;
                                    } & { [K_173 in Exclude<keyof I_1["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["items"][number]["price"]["recurring"], keyof StripeRecurring>]: never; };
                                } & { [K_174 in Exclude<keyof I_1["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["items"][number]["price"], keyof StripePrice>]: never; };
                            } & { [K_175 in Exclude<keyof I_1["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["items"][number], keyof StripeSubscriptionItem>]: never; })[] & { [K_176 in Exclude<keyof I_1["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["items"], keyof {
                                id?: string;
                                quantity?: string;
                                subscription?: string;
                                plan?: {
                                    status?: boolean;
                                    nickname?: string;
                                    product?: string;
                                    amount?: number;
                                    usage_type?: string;
                                };
                                price?: {
                                    nickname?: string;
                                    product?: string;
                                    active?: boolean;
                                    billing_scheme?: string;
                                    currency?: string;
                                    recurring?: {
                                        interval?: string;
                                        interval_count?: number;
                                        trial_period_days?: number;
                                        usage_type?: string;
                                    };
                                };
                            }[]>]: never; };
                            default_tax_rates?: string[] & string[] & { [K_177 in Exclude<keyof I_1["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["default_tax_rates"], keyof string[]>]: never; };
                        } & { [K_178 in Exclude<keyof I_1["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number], keyof StripeSubscription>]: never; })[] & { [K_179 in Exclude<keyof I_1["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"], keyof any[]>]: never; };
                        tax_ids?: {
                            country?: string;
                            customer?: string;
                            type?: string;
                            value?: string;
                            verification?: {
                                status?: string;
                                verified_address?: string;
                                verified_name?: string;
                            };
                        }[] & ({
                            country?: string;
                            customer?: string;
                            type?: string;
                            value?: string;
                            verification?: {
                                status?: string;
                                verified_address?: string;
                                verified_name?: string;
                            };
                        } & {
                            country?: string;
                            customer?: string;
                            type?: string;
                            value?: string;
                            verification?: {
                                status?: string;
                                verified_address?: string;
                                verified_name?: string;
                            } & {
                                status?: string;
                                verified_address?: string;
                                verified_name?: string;
                            } & { [K_180 in Exclude<keyof I_1["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["tax_ids"][number]["verification"], keyof StripeTaxVerification>]: never; };
                        } & { [K_181 in Exclude<keyof I_1["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["tax_ids"][number], keyof StripeTaxId>]: never; })[] & { [K_182 in Exclude<keyof I_1["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["tax_ids"], keyof {
                            country?: string;
                            customer?: string;
                            type?: string;
                            value?: string;
                            verification?: {
                                status?: string;
                                verified_address?: string;
                                verified_name?: string;
                            };
                        }[]>]: never; };
                        items?: {
                            id?: string;
                            quantity?: string;
                            subscription?: string;
                            plan?: {
                                status?: boolean;
                                nickname?: string;
                                product?: string;
                                amount?: number;
                                usage_type?: string;
                            };
                            price?: {
                                nickname?: string;
                                product?: string;
                                active?: boolean;
                                billing_scheme?: string;
                                currency?: string;
                                recurring?: {
                                    interval?: string;
                                    interval_count?: number;
                                    trial_period_days?: number;
                                    usage_type?: string;
                                };
                            };
                        }[] & ({
                            id?: string;
                            quantity?: string;
                            subscription?: string;
                            plan?: {
                                status?: boolean;
                                nickname?: string;
                                product?: string;
                                amount?: number;
                                usage_type?: string;
                            };
                            price?: {
                                nickname?: string;
                                product?: string;
                                active?: boolean;
                                billing_scheme?: string;
                                currency?: string;
                                recurring?: {
                                    interval?: string;
                                    interval_count?: number;
                                    trial_period_days?: number;
                                    usage_type?: string;
                                };
                            };
                        } & {
                            id?: string;
                            quantity?: string;
                            subscription?: string;
                            plan?: {
                                status?: boolean;
                                nickname?: string;
                                product?: string;
                                amount?: number;
                                usage_type?: string;
                            } & {
                                status?: boolean;
                                nickname?: string;
                                product?: string;
                                amount?: number;
                                usage_type?: string;
                            } & { [K_183 in Exclude<keyof I_1["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["items"][number]["plan"], keyof StripePlan>]: never; };
                            price?: {
                                nickname?: string;
                                product?: string;
                                active?: boolean;
                                billing_scheme?: string;
                                currency?: string;
                                recurring?: {
                                    interval?: string;
                                    interval_count?: number;
                                    trial_period_days?: number;
                                    usage_type?: string;
                                };
                            } & {
                                nickname?: string;
                                product?: string;
                                active?: boolean;
                                billing_scheme?: string;
                                currency?: string;
                                recurring?: {
                                    interval?: string;
                                    interval_count?: number;
                                    trial_period_days?: number;
                                    usage_type?: string;
                                } & {
                                    interval?: string;
                                    interval_count?: number;
                                    trial_period_days?: number;
                                    usage_type?: string;
                                } & { [K_184 in Exclude<keyof I_1["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["items"][number]["price"]["recurring"], keyof StripeRecurring>]: never; };
                            } & { [K_185 in Exclude<keyof I_1["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["items"][number]["price"], keyof StripePrice>]: never; };
                        } & { [K_186 in Exclude<keyof I_1["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["items"][number], keyof StripeSubscriptionItem>]: never; })[] & { [K_187 in Exclude<keyof I_1["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["items"], keyof {
                            id?: string;
                            quantity?: string;
                            subscription?: string;
                            plan?: {
                                status?: boolean;
                                nickname?: string;
                                product?: string;
                                amount?: number;
                                usage_type?: string;
                            };
                            price?: {
                                nickname?: string;
                                product?: string;
                                active?: boolean;
                                billing_scheme?: string;
                                currency?: string;
                                recurring?: {
                                    interval?: string;
                                    interval_count?: number;
                                    trial_period_days?: number;
                                    usage_type?: string;
                                };
                            };
                        }[]>]: never; };
                        default_tax_rates?: string[] & string[] & { [K_188 in Exclude<keyof I_1["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["default_tax_rates"], keyof string[]>]: never; };
                    } & { [K_189 in Exclude<keyof I_1["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number], keyof StripeSubscription>]: never; })[] & { [K_190 in Exclude<keyof I_1["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"], keyof any[]>]: never; };
                    tax_ids?: {
                        country?: string;
                        customer?: string;
                        type?: string;
                        value?: string;
                        verification?: {
                            status?: string;
                            verified_address?: string;
                            verified_name?: string;
                        };
                    }[] & ({
                        country?: string;
                        customer?: string;
                        type?: string;
                        value?: string;
                        verification?: {
                            status?: string;
                            verified_address?: string;
                            verified_name?: string;
                        };
                    } & {
                        country?: string;
                        customer?: string;
                        type?: string;
                        value?: string;
                        verification?: {
                            status?: string;
                            verified_address?: string;
                            verified_name?: string;
                        } & {
                            status?: string;
                            verified_address?: string;
                            verified_name?: string;
                        } & { [K_191 in Exclude<keyof I_1["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["tax_ids"][number]["verification"], keyof StripeTaxVerification>]: never; };
                    } & { [K_192 in Exclude<keyof I_1["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["tax_ids"][number], keyof StripeTaxId>]: never; })[] & { [K_193 in Exclude<keyof I_1["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["tax_ids"], keyof {
                        country?: string;
                        customer?: string;
                        type?: string;
                        value?: string;
                        verification?: {
                            status?: string;
                            verified_address?: string;
                            verified_name?: string;
                        };
                    }[]>]: never; };
                    items?: {
                        id?: string;
                        quantity?: string;
                        subscription?: string;
                        plan?: {
                            status?: boolean;
                            nickname?: string;
                            product?: string;
                            amount?: number;
                            usage_type?: string;
                        };
                        price?: {
                            nickname?: string;
                            product?: string;
                            active?: boolean;
                            billing_scheme?: string;
                            currency?: string;
                            recurring?: {
                                interval?: string;
                                interval_count?: number;
                                trial_period_days?: number;
                                usage_type?: string;
                            };
                        };
                    }[] & ({
                        id?: string;
                        quantity?: string;
                        subscription?: string;
                        plan?: {
                            status?: boolean;
                            nickname?: string;
                            product?: string;
                            amount?: number;
                            usage_type?: string;
                        };
                        price?: {
                            nickname?: string;
                            product?: string;
                            active?: boolean;
                            billing_scheme?: string;
                            currency?: string;
                            recurring?: {
                                interval?: string;
                                interval_count?: number;
                                trial_period_days?: number;
                                usage_type?: string;
                            };
                        };
                    } & {
                        id?: string;
                        quantity?: string;
                        subscription?: string;
                        plan?: {
                            status?: boolean;
                            nickname?: string;
                            product?: string;
                            amount?: number;
                            usage_type?: string;
                        } & {
                            status?: boolean;
                            nickname?: string;
                            product?: string;
                            amount?: number;
                            usage_type?: string;
                        } & { [K_194 in Exclude<keyof I_1["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["items"][number]["plan"], keyof StripePlan>]: never; };
                        price?: {
                            nickname?: string;
                            product?: string;
                            active?: boolean;
                            billing_scheme?: string;
                            currency?: string;
                            recurring?: {
                                interval?: string;
                                interval_count?: number;
                                trial_period_days?: number;
                                usage_type?: string;
                            };
                        } & {
                            nickname?: string;
                            product?: string;
                            active?: boolean;
                            billing_scheme?: string;
                            currency?: string;
                            recurring?: {
                                interval?: string;
                                interval_count?: number;
                                trial_period_days?: number;
                                usage_type?: string;
                            } & {
                                interval?: string;
                                interval_count?: number;
                                trial_period_days?: number;
                                usage_type?: string;
                            } & { [K_195 in Exclude<keyof I_1["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["items"][number]["price"]["recurring"], keyof StripeRecurring>]: never; };
                        } & { [K_196 in Exclude<keyof I_1["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["items"][number]["price"], keyof StripePrice>]: never; };
                    } & { [K_197 in Exclude<keyof I_1["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["items"][number], keyof StripeSubscriptionItem>]: never; })[] & { [K_198 in Exclude<keyof I_1["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["items"], keyof {
                        id?: string;
                        quantity?: string;
                        subscription?: string;
                        plan?: {
                            status?: boolean;
                            nickname?: string;
                            product?: string;
                            amount?: number;
                            usage_type?: string;
                        };
                        price?: {
                            nickname?: string;
                            product?: string;
                            active?: boolean;
                            billing_scheme?: string;
                            currency?: string;
                            recurring?: {
                                interval?: string;
                                interval_count?: number;
                                trial_period_days?: number;
                                usage_type?: string;
                            };
                        };
                    }[]>]: never; };
                    default_tax_rates?: string[] & string[] & { [K_199 in Exclude<keyof I_1["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["default_tax_rates"], keyof string[]>]: never; };
                } & { [K_200 in Exclude<keyof I_1["subscriptions"][number]["subscriptions"][number]["subscriptions"][number], keyof StripeSubscription>]: never; })[] & { [K_201 in Exclude<keyof I_1["subscriptions"][number]["subscriptions"][number]["subscriptions"], keyof any[]>]: never; };
                tax_ids?: {
                    country?: string;
                    customer?: string;
                    type?: string;
                    value?: string;
                    verification?: {
                        status?: string;
                        verified_address?: string;
                        verified_name?: string;
                    };
                }[] & ({
                    country?: string;
                    customer?: string;
                    type?: string;
                    value?: string;
                    verification?: {
                        status?: string;
                        verified_address?: string;
                        verified_name?: string;
                    };
                } & {
                    country?: string;
                    customer?: string;
                    type?: string;
                    value?: string;
                    verification?: {
                        status?: string;
                        verified_address?: string;
                        verified_name?: string;
                    } & {
                        status?: string;
                        verified_address?: string;
                        verified_name?: string;
                    } & { [K_202 in Exclude<keyof I_1["subscriptions"][number]["subscriptions"][number]["tax_ids"][number]["verification"], keyof StripeTaxVerification>]: never; };
                } & { [K_203 in Exclude<keyof I_1["subscriptions"][number]["subscriptions"][number]["tax_ids"][number], keyof StripeTaxId>]: never; })[] & { [K_204 in Exclude<keyof I_1["subscriptions"][number]["subscriptions"][number]["tax_ids"], keyof {
                    country?: string;
                    customer?: string;
                    type?: string;
                    value?: string;
                    verification?: {
                        status?: string;
                        verified_address?: string;
                        verified_name?: string;
                    };
                }[]>]: never; };
                items?: {
                    id?: string;
                    quantity?: string;
                    subscription?: string;
                    plan?: {
                        status?: boolean;
                        nickname?: string;
                        product?: string;
                        amount?: number;
                        usage_type?: string;
                    };
                    price?: {
                        nickname?: string;
                        product?: string;
                        active?: boolean;
                        billing_scheme?: string;
                        currency?: string;
                        recurring?: {
                            interval?: string;
                            interval_count?: number;
                            trial_period_days?: number;
                            usage_type?: string;
                        };
                    };
                }[] & ({
                    id?: string;
                    quantity?: string;
                    subscription?: string;
                    plan?: {
                        status?: boolean;
                        nickname?: string;
                        product?: string;
                        amount?: number;
                        usage_type?: string;
                    };
                    price?: {
                        nickname?: string;
                        product?: string;
                        active?: boolean;
                        billing_scheme?: string;
                        currency?: string;
                        recurring?: {
                            interval?: string;
                            interval_count?: number;
                            trial_period_days?: number;
                            usage_type?: string;
                        };
                    };
                } & {
                    id?: string;
                    quantity?: string;
                    subscription?: string;
                    plan?: {
                        status?: boolean;
                        nickname?: string;
                        product?: string;
                        amount?: number;
                        usage_type?: string;
                    } & {
                        status?: boolean;
                        nickname?: string;
                        product?: string;
                        amount?: number;
                        usage_type?: string;
                    } & { [K_205 in Exclude<keyof I_1["subscriptions"][number]["subscriptions"][number]["items"][number]["plan"], keyof StripePlan>]: never; };
                    price?: {
                        nickname?: string;
                        product?: string;
                        active?: boolean;
                        billing_scheme?: string;
                        currency?: string;
                        recurring?: {
                            interval?: string;
                            interval_count?: number;
                            trial_period_days?: number;
                            usage_type?: string;
                        };
                    } & {
                        nickname?: string;
                        product?: string;
                        active?: boolean;
                        billing_scheme?: string;
                        currency?: string;
                        recurring?: {
                            interval?: string;
                            interval_count?: number;
                            trial_period_days?: number;
                            usage_type?: string;
                        } & {
                            interval?: string;
                            interval_count?: number;
                            trial_period_days?: number;
                            usage_type?: string;
                        } & { [K_206 in Exclude<keyof I_1["subscriptions"][number]["subscriptions"][number]["items"][number]["price"]["recurring"], keyof StripeRecurring>]: never; };
                    } & { [K_207 in Exclude<keyof I_1["subscriptions"][number]["subscriptions"][number]["items"][number]["price"], keyof StripePrice>]: never; };
                } & { [K_208 in Exclude<keyof I_1["subscriptions"][number]["subscriptions"][number]["items"][number], keyof StripeSubscriptionItem>]: never; })[] & { [K_209 in Exclude<keyof I_1["subscriptions"][number]["subscriptions"][number]["items"], keyof {
                    id?: string;
                    quantity?: string;
                    subscription?: string;
                    plan?: {
                        status?: boolean;
                        nickname?: string;
                        product?: string;
                        amount?: number;
                        usage_type?: string;
                    };
                    price?: {
                        nickname?: string;
                        product?: string;
                        active?: boolean;
                        billing_scheme?: string;
                        currency?: string;
                        recurring?: {
                            interval?: string;
                            interval_count?: number;
                            trial_period_days?: number;
                            usage_type?: string;
                        };
                    };
                }[]>]: never; };
                default_tax_rates?: string[] & string[] & { [K_210 in Exclude<keyof I_1["subscriptions"][number]["subscriptions"][number]["default_tax_rates"], keyof string[]>]: never; };
            } & { [K_211 in Exclude<keyof I_1["subscriptions"][number]["subscriptions"][number], keyof StripeSubscription>]: never; })[] & { [K_212 in Exclude<keyof I_1["subscriptions"][number]["subscriptions"], keyof any[]>]: never; };
            tax_ids?: {
                country?: string;
                customer?: string;
                type?: string;
                value?: string;
                verification?: {
                    status?: string;
                    verified_address?: string;
                    verified_name?: string;
                };
            }[] & ({
                country?: string;
                customer?: string;
                type?: string;
                value?: string;
                verification?: {
                    status?: string;
                    verified_address?: string;
                    verified_name?: string;
                };
            } & {
                country?: string;
                customer?: string;
                type?: string;
                value?: string;
                verification?: {
                    status?: string;
                    verified_address?: string;
                    verified_name?: string;
                } & {
                    status?: string;
                    verified_address?: string;
                    verified_name?: string;
                } & { [K_213 in Exclude<keyof I_1["subscriptions"][number]["tax_ids"][number]["verification"], keyof StripeTaxVerification>]: never; };
            } & { [K_214 in Exclude<keyof I_1["subscriptions"][number]["tax_ids"][number], keyof StripeTaxId>]: never; })[] & { [K_215 in Exclude<keyof I_1["subscriptions"][number]["tax_ids"], keyof {
                country?: string;
                customer?: string;
                type?: string;
                value?: string;
                verification?: {
                    status?: string;
                    verified_address?: string;
                    verified_name?: string;
                };
            }[]>]: never; };
            items?: {
                id?: string;
                quantity?: string;
                subscription?: string;
                plan?: {
                    status?: boolean;
                    nickname?: string;
                    product?: string;
                    amount?: number;
                    usage_type?: string;
                };
                price?: {
                    nickname?: string;
                    product?: string;
                    active?: boolean;
                    billing_scheme?: string;
                    currency?: string;
                    recurring?: {
                        interval?: string;
                        interval_count?: number;
                        trial_period_days?: number;
                        usage_type?: string;
                    };
                };
            }[] & ({
                id?: string;
                quantity?: string;
                subscription?: string;
                plan?: {
                    status?: boolean;
                    nickname?: string;
                    product?: string;
                    amount?: number;
                    usage_type?: string;
                };
                price?: {
                    nickname?: string;
                    product?: string;
                    active?: boolean;
                    billing_scheme?: string;
                    currency?: string;
                    recurring?: {
                        interval?: string;
                        interval_count?: number;
                        trial_period_days?: number;
                        usage_type?: string;
                    };
                };
            } & {
                id?: string;
                quantity?: string;
                subscription?: string;
                plan?: {
                    status?: boolean;
                    nickname?: string;
                    product?: string;
                    amount?: number;
                    usage_type?: string;
                } & {
                    status?: boolean;
                    nickname?: string;
                    product?: string;
                    amount?: number;
                    usage_type?: string;
                } & { [K_216 in Exclude<keyof I_1["subscriptions"][number]["items"][number]["plan"], keyof StripePlan>]: never; };
                price?: {
                    nickname?: string;
                    product?: string;
                    active?: boolean;
                    billing_scheme?: string;
                    currency?: string;
                    recurring?: {
                        interval?: string;
                        interval_count?: number;
                        trial_period_days?: number;
                        usage_type?: string;
                    };
                } & {
                    nickname?: string;
                    product?: string;
                    active?: boolean;
                    billing_scheme?: string;
                    currency?: string;
                    recurring?: {
                        interval?: string;
                        interval_count?: number;
                        trial_period_days?: number;
                        usage_type?: string;
                    } & {
                        interval?: string;
                        interval_count?: number;
                        trial_period_days?: number;
                        usage_type?: string;
                    } & { [K_217 in Exclude<keyof I_1["subscriptions"][number]["items"][number]["price"]["recurring"], keyof StripeRecurring>]: never; };
                } & { [K_218 in Exclude<keyof I_1["subscriptions"][number]["items"][number]["price"], keyof StripePrice>]: never; };
            } & { [K_219 in Exclude<keyof I_1["subscriptions"][number]["items"][number], keyof StripeSubscriptionItem>]: never; })[] & { [K_220 in Exclude<keyof I_1["subscriptions"][number]["items"], keyof {
                id?: string;
                quantity?: string;
                subscription?: string;
                plan?: {
                    status?: boolean;
                    nickname?: string;
                    product?: string;
                    amount?: number;
                    usage_type?: string;
                };
                price?: {
                    nickname?: string;
                    product?: string;
                    active?: boolean;
                    billing_scheme?: string;
                    currency?: string;
                    recurring?: {
                        interval?: string;
                        interval_count?: number;
                        trial_period_days?: number;
                        usage_type?: string;
                    };
                };
            }[]>]: never; };
            default_tax_rates?: string[] & string[] & { [K_221 in Exclude<keyof I_1["subscriptions"][number]["default_tax_rates"], keyof string[]>]: never; };
        } & { [K_222 in Exclude<keyof I_1["subscriptions"][number], keyof StripeSubscription>]: never; })[] & { [K_223 in Exclude<keyof I_1["subscriptions"], keyof any[]>]: never; };
        tax_ids?: {
            country?: string;
            customer?: string;
            type?: string;
            value?: string;
            verification?: {
                status?: string;
                verified_address?: string;
                verified_name?: string;
            };
        }[] & ({
            country?: string;
            customer?: string;
            type?: string;
            value?: string;
            verification?: {
                status?: string;
                verified_address?: string;
                verified_name?: string;
            };
        } & {
            country?: string;
            customer?: string;
            type?: string;
            value?: string;
            verification?: {
                status?: string;
                verified_address?: string;
                verified_name?: string;
            } & {
                status?: string;
                verified_address?: string;
                verified_name?: string;
            } & { [K_224 in Exclude<keyof I_1["tax_ids"][number]["verification"], keyof StripeTaxVerification>]: never; };
        } & { [K_225 in Exclude<keyof I_1["tax_ids"][number], keyof StripeTaxId>]: never; })[] & { [K_226 in Exclude<keyof I_1["tax_ids"], keyof {
            country?: string;
            customer?: string;
            type?: string;
            value?: string;
            verification?: {
                status?: string;
                verified_address?: string;
                verified_name?: string;
            };
        }[]>]: never; };
        items?: {
            id?: string;
            quantity?: string;
            subscription?: string;
            plan?: {
                status?: boolean;
                nickname?: string;
                product?: string;
                amount?: number;
                usage_type?: string;
            };
            price?: {
                nickname?: string;
                product?: string;
                active?: boolean;
                billing_scheme?: string;
                currency?: string;
                recurring?: {
                    interval?: string;
                    interval_count?: number;
                    trial_period_days?: number;
                    usage_type?: string;
                };
            };
        }[] & ({
            id?: string;
            quantity?: string;
            subscription?: string;
            plan?: {
                status?: boolean;
                nickname?: string;
                product?: string;
                amount?: number;
                usage_type?: string;
            };
            price?: {
                nickname?: string;
                product?: string;
                active?: boolean;
                billing_scheme?: string;
                currency?: string;
                recurring?: {
                    interval?: string;
                    interval_count?: number;
                    trial_period_days?: number;
                    usage_type?: string;
                };
            };
        } & {
            id?: string;
            quantity?: string;
            subscription?: string;
            plan?: {
                status?: boolean;
                nickname?: string;
                product?: string;
                amount?: number;
                usage_type?: string;
            } & {
                status?: boolean;
                nickname?: string;
                product?: string;
                amount?: number;
                usage_type?: string;
            } & { [K_227 in Exclude<keyof I_1["items"][number]["plan"], keyof StripePlan>]: never; };
            price?: {
                nickname?: string;
                product?: string;
                active?: boolean;
                billing_scheme?: string;
                currency?: string;
                recurring?: {
                    interval?: string;
                    interval_count?: number;
                    trial_period_days?: number;
                    usage_type?: string;
                };
            } & {
                nickname?: string;
                product?: string;
                active?: boolean;
                billing_scheme?: string;
                currency?: string;
                recurring?: {
                    interval?: string;
                    interval_count?: number;
                    trial_period_days?: number;
                    usage_type?: string;
                } & {
                    interval?: string;
                    interval_count?: number;
                    trial_period_days?: number;
                    usage_type?: string;
                } & { [K_228 in Exclude<keyof I_1["items"][number]["price"]["recurring"], keyof StripeRecurring>]: never; };
            } & { [K_229 in Exclude<keyof I_1["items"][number]["price"], keyof StripePrice>]: never; };
        } & { [K_230 in Exclude<keyof I_1["items"][number], keyof StripeSubscriptionItem>]: never; })[] & { [K_231 in Exclude<keyof I_1["items"], keyof {
            id?: string;
            quantity?: string;
            subscription?: string;
            plan?: {
                status?: boolean;
                nickname?: string;
                product?: string;
                amount?: number;
                usage_type?: string;
            };
            price?: {
                nickname?: string;
                product?: string;
                active?: boolean;
                billing_scheme?: string;
                currency?: string;
                recurring?: {
                    interval?: string;
                    interval_count?: number;
                    trial_period_days?: number;
                    usage_type?: string;
                };
            };
        }[]>]: never; };
        default_tax_rates?: string[] & string[] & { [K_232 in Exclude<keyof I_1["default_tax_rates"], keyof string[]>]: never; };
    } & { [K_233 in Exclude<keyof I_1, keyof StripeSubscription>]: never; }>(object: I_1): StripeSubscription;
};
export declare const StripeCustomer: {
    encode(message: StripeCustomer, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): StripeCustomer;
    fromJSON(object: any): StripeCustomer;
    toJSON(message: StripeCustomer): unknown;
    create<I extends {
        address?: {
            line1?: string;
            line2?: string;
            postal_code?: string;
            city?: string;
            state?: string;
            country?: string;
        };
        description?: string;
        name?: string;
        email?: string;
        tax_ids?: {
            country?: string;
            customer?: string;
            type?: string;
            value?: string;
            verification?: {
                status?: string;
                verified_address?: string;
                verified_name?: string;
            };
        }[];
        subscriptions?: any[];
        discount?: {
            subscription?: string;
            start?: number;
            customer?: string;
            coupon?: {
                duration?: string;
                duration_in_months?: number;
                name?: string;
            };
        };
    } & {
        address?: {
            line1?: string;
            line2?: string;
            postal_code?: string;
            city?: string;
            state?: string;
            country?: string;
        } & {
            line1?: string;
            line2?: string;
            postal_code?: string;
            city?: string;
            state?: string;
            country?: string;
        } & { [K in Exclude<keyof I["address"], keyof StripeCustomerAddress>]: never; };
        description?: string;
        name?: string;
        email?: string;
        tax_ids?: {
            country?: string;
            customer?: string;
            type?: string;
            value?: string;
            verification?: {
                status?: string;
                verified_address?: string;
                verified_name?: string;
            };
        }[] & ({
            country?: string;
            customer?: string;
            type?: string;
            value?: string;
            verification?: {
                status?: string;
                verified_address?: string;
                verified_name?: string;
            };
        } & {
            country?: string;
            customer?: string;
            type?: string;
            value?: string;
            verification?: {
                status?: string;
                verified_address?: string;
                verified_name?: string;
            } & {
                status?: string;
                verified_address?: string;
                verified_name?: string;
            } & { [K_1 in Exclude<keyof I["tax_ids"][number]["verification"], keyof StripeTaxVerification>]: never; };
        } & { [K_2 in Exclude<keyof I["tax_ids"][number], keyof StripeTaxId>]: never; })[] & { [K_3 in Exclude<keyof I["tax_ids"], keyof {
            country?: string;
            customer?: string;
            type?: string;
            value?: string;
            verification?: {
                status?: string;
                verified_address?: string;
                verified_name?: string;
            };
        }[]>]: never; };
        subscriptions?: any[] & ({
            address?: string;
            balance?: number;
            currency?: string;
            subscriptions?: any[];
            tax_ids?: {
                country?: string;
                customer?: string;
                type?: string;
                value?: string;
                verification?: {
                    status?: string;
                    verified_address?: string;
                    verified_name?: string;
                };
            }[];
            items?: {
                id?: string;
                quantity?: string;
                subscription?: string;
                plan?: {
                    status?: boolean;
                    nickname?: string;
                    product?: string;
                    amount?: number;
                    usage_type?: string;
                };
                price?: {
                    nickname?: string;
                    product?: string;
                    active?: boolean;
                    billing_scheme?: string;
                    currency?: string;
                    recurring?: {
                        interval?: string;
                        interval_count?: number;
                        trial_period_days?: number;
                        usage_type?: string;
                    };
                };
            }[];
            default_tax_rates?: string[];
        } & {
            address?: string;
            balance?: number;
            currency?: string;
            subscriptions?: any[] & ({
                address?: string;
                balance?: number;
                currency?: string;
                subscriptions?: any[];
                tax_ids?: {
                    country?: string;
                    customer?: string;
                    type?: string;
                    value?: string;
                    verification?: {
                        status?: string;
                        verified_address?: string;
                        verified_name?: string;
                    };
                }[];
                items?: {
                    id?: string;
                    quantity?: string;
                    subscription?: string;
                    plan?: {
                        status?: boolean;
                        nickname?: string;
                        product?: string;
                        amount?: number;
                        usage_type?: string;
                    };
                    price?: {
                        nickname?: string;
                        product?: string;
                        active?: boolean;
                        billing_scheme?: string;
                        currency?: string;
                        recurring?: {
                            interval?: string;
                            interval_count?: number;
                            trial_period_days?: number;
                            usage_type?: string;
                        };
                    };
                }[];
                default_tax_rates?: string[];
            } & {
                address?: string;
                balance?: number;
                currency?: string;
                subscriptions?: any[] & ({
                    address?: string;
                    balance?: number;
                    currency?: string;
                    subscriptions?: any[];
                    tax_ids?: {
                        country?: string;
                        customer?: string;
                        type?: string;
                        value?: string;
                        verification?: {
                            status?: string;
                            verified_address?: string;
                            verified_name?: string;
                        };
                    }[];
                    items?: {
                        id?: string;
                        quantity?: string;
                        subscription?: string;
                        plan?: {
                            status?: boolean;
                            nickname?: string;
                            product?: string;
                            amount?: number;
                            usage_type?: string;
                        };
                        price?: {
                            nickname?: string;
                            product?: string;
                            active?: boolean;
                            billing_scheme?: string;
                            currency?: string;
                            recurring?: {
                                interval?: string;
                                interval_count?: number;
                                trial_period_days?: number;
                                usage_type?: string;
                            };
                        };
                    }[];
                    default_tax_rates?: string[];
                } & {
                    address?: string;
                    balance?: number;
                    currency?: string;
                    subscriptions?: any[] & ({
                        address?: string;
                        balance?: number;
                        currency?: string;
                        subscriptions?: any[];
                        tax_ids?: {
                            country?: string;
                            customer?: string;
                            type?: string;
                            value?: string;
                            verification?: {
                                status?: string;
                                verified_address?: string;
                                verified_name?: string;
                            };
                        }[];
                        items?: {
                            id?: string;
                            quantity?: string;
                            subscription?: string;
                            plan?: {
                                status?: boolean;
                                nickname?: string;
                                product?: string;
                                amount?: number;
                                usage_type?: string;
                            };
                            price?: {
                                nickname?: string;
                                product?: string;
                                active?: boolean;
                                billing_scheme?: string;
                                currency?: string;
                                recurring?: {
                                    interval?: string;
                                    interval_count?: number;
                                    trial_period_days?: number;
                                    usage_type?: string;
                                };
                            };
                        }[];
                        default_tax_rates?: string[];
                    } & {
                        address?: string;
                        balance?: number;
                        currency?: string;
                        subscriptions?: any[] & ({
                            address?: string;
                            balance?: number;
                            currency?: string;
                            subscriptions?: any[];
                            tax_ids?: {
                                country?: string;
                                customer?: string;
                                type?: string;
                                value?: string;
                                verification?: {
                                    status?: string;
                                    verified_address?: string;
                                    verified_name?: string;
                                };
                            }[];
                            items?: {
                                id?: string;
                                quantity?: string;
                                subscription?: string;
                                plan?: {
                                    status?: boolean;
                                    nickname?: string;
                                    product?: string;
                                    amount?: number;
                                    usage_type?: string;
                                };
                                price?: {
                                    nickname?: string;
                                    product?: string;
                                    active?: boolean;
                                    billing_scheme?: string;
                                    currency?: string;
                                    recurring?: {
                                        interval?: string;
                                        interval_count?: number;
                                        trial_period_days?: number;
                                        usage_type?: string;
                                    };
                                };
                            }[];
                            default_tax_rates?: string[];
                        } & {
                            address?: string;
                            balance?: number;
                            currency?: string;
                            subscriptions?: any[] & ({
                                address?: string;
                                balance?: number;
                                currency?: string;
                                subscriptions?: any[];
                                tax_ids?: {
                                    country?: string;
                                    customer?: string;
                                    type?: string;
                                    value?: string;
                                    verification?: {
                                        status?: string;
                                        verified_address?: string;
                                        verified_name?: string;
                                    };
                                }[];
                                items?: {
                                    id?: string;
                                    quantity?: string;
                                    subscription?: string;
                                    plan?: {
                                        status?: boolean;
                                        nickname?: string;
                                        product?: string;
                                        amount?: number;
                                        usage_type?: string;
                                    };
                                    price?: {
                                        nickname?: string;
                                        product?: string;
                                        active?: boolean;
                                        billing_scheme?: string;
                                        currency?: string;
                                        recurring?: {
                                            interval?: string;
                                            interval_count?: number;
                                            trial_period_days?: number;
                                            usage_type?: string;
                                        };
                                    };
                                }[];
                                default_tax_rates?: string[];
                            } & {
                                address?: string;
                                balance?: number;
                                currency?: string;
                                subscriptions?: any[] & ({
                                    address?: string;
                                    balance?: number;
                                    currency?: string;
                                    subscriptions?: any[];
                                    tax_ids?: {
                                        country?: string;
                                        customer?: string;
                                        type?: string;
                                        value?: string;
                                        verification?: {
                                            status?: string;
                                            verified_address?: string;
                                            verified_name?: string;
                                        };
                                    }[];
                                    items?: {
                                        id?: string;
                                        quantity?: string;
                                        subscription?: string;
                                        plan?: {
                                            status?: boolean;
                                            nickname?: string;
                                            product?: string;
                                            amount?: number;
                                            usage_type?: string;
                                        };
                                        price?: {
                                            nickname?: string;
                                            product?: string;
                                            active?: boolean;
                                            billing_scheme?: string;
                                            currency?: string;
                                            recurring?: {
                                                interval?: string;
                                                interval_count?: number;
                                                trial_period_days?: number;
                                                usage_type?: string;
                                            };
                                        };
                                    }[];
                                    default_tax_rates?: string[];
                                } & {
                                    address?: string;
                                    balance?: number;
                                    currency?: string;
                                    subscriptions?: any[] & ({
                                        address?: string;
                                        balance?: number;
                                        currency?: string;
                                        subscriptions?: any[];
                                        tax_ids?: {
                                            country?: string;
                                            customer?: string;
                                            type?: string;
                                            value?: string;
                                            verification?: {
                                                status?: string;
                                                verified_address?: string;
                                                verified_name?: string;
                                            };
                                        }[];
                                        items?: {
                                            id?: string;
                                            quantity?: string;
                                            subscription?: string;
                                            plan?: {
                                                status?: boolean;
                                                nickname?: string;
                                                product?: string;
                                                amount?: number;
                                                usage_type?: string;
                                            };
                                            price?: {
                                                nickname?: string;
                                                product?: string;
                                                active?: boolean;
                                                billing_scheme?: string;
                                                currency?: string;
                                                recurring?: {
                                                    interval?: string;
                                                    interval_count?: number;
                                                    trial_period_days?: number;
                                                    usage_type?: string;
                                                };
                                            };
                                        }[];
                                        default_tax_rates?: string[];
                                    } & {
                                        address?: string;
                                        balance?: number;
                                        currency?: string;
                                        subscriptions?: any[] & ({
                                            address?: string;
                                            balance?: number;
                                            currency?: string;
                                            subscriptions?: any[];
                                            tax_ids?: {
                                                country?: string;
                                                customer?: string;
                                                type?: string;
                                                value?: string;
                                                verification?: {
                                                    status?: string;
                                                    verified_address?: string;
                                                    verified_name?: string;
                                                };
                                            }[];
                                            items?: {
                                                id?: string;
                                                quantity?: string;
                                                subscription?: string;
                                                plan?: {
                                                    status?: boolean;
                                                    nickname?: string;
                                                    product?: string;
                                                    amount?: number;
                                                    usage_type?: string;
                                                };
                                                price?: {
                                                    nickname?: string;
                                                    product?: string;
                                                    active?: boolean;
                                                    billing_scheme?: string;
                                                    currency?: string;
                                                    recurring?: {
                                                        interval?: string;
                                                        interval_count?: number;
                                                        trial_period_days?: number;
                                                        usage_type?: string;
                                                    };
                                                };
                                            }[];
                                            default_tax_rates?: string[];
                                        } & {
                                            address?: string;
                                            balance?: number;
                                            currency?: string;
                                            subscriptions?: any[] & ({
                                                address?: string;
                                                balance?: number;
                                                currency?: string;
                                                subscriptions?: any[];
                                                tax_ids?: {
                                                    country?: string;
                                                    customer?: string;
                                                    type?: string;
                                                    value?: string;
                                                    verification?: {
                                                        status?: string;
                                                        verified_address?: string;
                                                        verified_name?: string;
                                                    };
                                                }[];
                                                items?: {
                                                    id?: string;
                                                    quantity?: string;
                                                    subscription?: string;
                                                    plan?: {
                                                        status?: boolean;
                                                        nickname?: string;
                                                        product?: string;
                                                        amount?: number;
                                                        usage_type?: string;
                                                    };
                                                    price?: {
                                                        nickname?: string;
                                                        product?: string;
                                                        active?: boolean;
                                                        billing_scheme?: string;
                                                        currency?: string;
                                                        recurring?: {
                                                            interval?: string;
                                                            interval_count?: number;
                                                            trial_period_days?: number;
                                                            usage_type?: string;
                                                        };
                                                    };
                                                }[];
                                                default_tax_rates?: string[];
                                            } & {
                                                address?: string;
                                                balance?: number;
                                                currency?: string;
                                                subscriptions?: any[] & ({
                                                    address?: string;
                                                    balance?: number;
                                                    currency?: string;
                                                    subscriptions?: any[];
                                                    tax_ids?: {
                                                        country?: string;
                                                        customer?: string;
                                                        type?: string;
                                                        value?: string;
                                                        verification?: {
                                                            status?: string;
                                                            verified_address?: string;
                                                            verified_name?: string;
                                                        };
                                                    }[];
                                                    items?: {
                                                        id?: string;
                                                        quantity?: string;
                                                        subscription?: string;
                                                        plan?: {
                                                            status?: boolean;
                                                            nickname?: string;
                                                            product?: string;
                                                            amount?: number;
                                                            usage_type?: string;
                                                        };
                                                        price?: {
                                                            nickname?: string;
                                                            product?: string;
                                                            active?: boolean;
                                                            billing_scheme?: string;
                                                            currency?: string;
                                                            recurring?: {
                                                                interval?: string;
                                                                interval_count?: number;
                                                                trial_period_days?: number;
                                                                usage_type?: string;
                                                            };
                                                        };
                                                    }[];
                                                    default_tax_rates?: string[];
                                                } & any & { [K_4 in Exclude<keyof I["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number], keyof StripeSubscription>]: never; })[] & { [K_5 in Exclude<keyof I["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"], keyof any[]>]: never; };
                                                tax_ids?: {
                                                    country?: string;
                                                    customer?: string;
                                                    type?: string;
                                                    value?: string;
                                                    verification?: {
                                                        status?: string;
                                                        verified_address?: string;
                                                        verified_name?: string;
                                                    };
                                                }[] & ({
                                                    country?: string;
                                                    customer?: string;
                                                    type?: string;
                                                    value?: string;
                                                    verification?: {
                                                        status?: string;
                                                        verified_address?: string;
                                                        verified_name?: string;
                                                    };
                                                } & any & { [K_6 in Exclude<keyof I["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["tax_ids"][number], keyof StripeTaxId>]: never; })[] & { [K_7 in Exclude<keyof I["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["tax_ids"], keyof {
                                                    country?: string;
                                                    customer?: string;
                                                    type?: string;
                                                    value?: string;
                                                    verification?: {
                                                        status?: string;
                                                        verified_address?: string;
                                                        verified_name?: string;
                                                    };
                                                }[]>]: never; };
                                                items?: {
                                                    id?: string;
                                                    quantity?: string;
                                                    subscription?: string;
                                                    plan?: {
                                                        status?: boolean;
                                                        nickname?: string;
                                                        product?: string;
                                                        amount?: number;
                                                        usage_type?: string;
                                                    };
                                                    price?: {
                                                        nickname?: string;
                                                        product?: string;
                                                        active?: boolean;
                                                        billing_scheme?: string;
                                                        currency?: string;
                                                        recurring?: {
                                                            interval?: string;
                                                            interval_count?: number;
                                                            trial_period_days?: number;
                                                            usage_type?: string;
                                                        };
                                                    };
                                                }[] & ({
                                                    id?: string;
                                                    quantity?: string;
                                                    subscription?: string;
                                                    plan?: {
                                                        status?: boolean;
                                                        nickname?: string;
                                                        product?: string;
                                                        amount?: number;
                                                        usage_type?: string;
                                                    };
                                                    price?: {
                                                        nickname?: string;
                                                        product?: string;
                                                        active?: boolean;
                                                        billing_scheme?: string;
                                                        currency?: string;
                                                        recurring?: {
                                                            interval?: string;
                                                            interval_count?: number;
                                                            trial_period_days?: number;
                                                            usage_type?: string;
                                                        };
                                                    };
                                                } & any & { [K_8 in Exclude<keyof I["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["items"][number], keyof StripeSubscriptionItem>]: never; })[] & { [K_9 in Exclude<keyof I["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["items"], keyof {
                                                    id?: string;
                                                    quantity?: string;
                                                    subscription?: string;
                                                    plan?: {
                                                        status?: boolean;
                                                        nickname?: string;
                                                        product?: string;
                                                        amount?: number;
                                                        usage_type?: string;
                                                    };
                                                    price?: {
                                                        nickname?: string;
                                                        product?: string;
                                                        active?: boolean;
                                                        billing_scheme?: string;
                                                        currency?: string;
                                                        recurring?: {
                                                            interval?: string;
                                                            interval_count?: number;
                                                            trial_period_days?: number;
                                                            usage_type?: string;
                                                        };
                                                    };
                                                }[]>]: never; };
                                                default_tax_rates?: string[] & string[] & { [K_10 in Exclude<keyof I["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["default_tax_rates"], keyof string[]>]: never; };
                                            } & { [K_11 in Exclude<keyof I["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number], keyof StripeSubscription>]: never; })[] & { [K_12 in Exclude<keyof I["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"], keyof any[]>]: never; };
                                            tax_ids?: {
                                                country?: string;
                                                customer?: string;
                                                type?: string;
                                                value?: string;
                                                verification?: {
                                                    status?: string;
                                                    verified_address?: string;
                                                    verified_name?: string;
                                                };
                                            }[] & ({
                                                country?: string;
                                                customer?: string;
                                                type?: string;
                                                value?: string;
                                                verification?: {
                                                    status?: string;
                                                    verified_address?: string;
                                                    verified_name?: string;
                                                };
                                            } & {
                                                country?: string;
                                                customer?: string;
                                                type?: string;
                                                value?: string;
                                                verification?: {
                                                    status?: string;
                                                    verified_address?: string;
                                                    verified_name?: string;
                                                } & any & { [K_13 in Exclude<keyof I["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["tax_ids"][number]["verification"], keyof StripeTaxVerification>]: never; };
                                            } & { [K_14 in Exclude<keyof I["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["tax_ids"][number], keyof StripeTaxId>]: never; })[] & { [K_15 in Exclude<keyof I["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["tax_ids"], keyof {
                                                country?: string;
                                                customer?: string;
                                                type?: string;
                                                value?: string;
                                                verification?: {
                                                    status?: string;
                                                    verified_address?: string;
                                                    verified_name?: string;
                                                };
                                            }[]>]: never; };
                                            items?: {
                                                id?: string;
                                                quantity?: string;
                                                subscription?: string;
                                                plan?: {
                                                    status?: boolean;
                                                    nickname?: string;
                                                    product?: string;
                                                    amount?: number;
                                                    usage_type?: string;
                                                };
                                                price?: {
                                                    nickname?: string;
                                                    product?: string;
                                                    active?: boolean;
                                                    billing_scheme?: string;
                                                    currency?: string;
                                                    recurring?: {
                                                        interval?: string;
                                                        interval_count?: number;
                                                        trial_period_days?: number;
                                                        usage_type?: string;
                                                    };
                                                };
                                            }[] & ({
                                                id?: string;
                                                quantity?: string;
                                                subscription?: string;
                                                plan?: {
                                                    status?: boolean;
                                                    nickname?: string;
                                                    product?: string;
                                                    amount?: number;
                                                    usage_type?: string;
                                                };
                                                price?: {
                                                    nickname?: string;
                                                    product?: string;
                                                    active?: boolean;
                                                    billing_scheme?: string;
                                                    currency?: string;
                                                    recurring?: {
                                                        interval?: string;
                                                        interval_count?: number;
                                                        trial_period_days?: number;
                                                        usage_type?: string;
                                                    };
                                                };
                                            } & {
                                                id?: string;
                                                quantity?: string;
                                                subscription?: string;
                                                plan?: {
                                                    status?: boolean;
                                                    nickname?: string;
                                                    product?: string;
                                                    amount?: number;
                                                    usage_type?: string;
                                                } & any & { [K_16 in Exclude<keyof I["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["items"][number]["plan"], keyof StripePlan>]: never; };
                                                price?: {
                                                    nickname?: string;
                                                    product?: string;
                                                    active?: boolean;
                                                    billing_scheme?: string;
                                                    currency?: string;
                                                    recurring?: {
                                                        interval?: string;
                                                        interval_count?: number;
                                                        trial_period_days?: number;
                                                        usage_type?: string;
                                                    };
                                                } & any & { [K_17 in Exclude<keyof I["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["items"][number]["price"], keyof StripePrice>]: never; };
                                            } & { [K_18 in Exclude<keyof I["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["items"][number], keyof StripeSubscriptionItem>]: never; })[] & { [K_19 in Exclude<keyof I["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["items"], keyof {
                                                id?: string;
                                                quantity?: string;
                                                subscription?: string;
                                                plan?: {
                                                    status?: boolean;
                                                    nickname?: string;
                                                    product?: string;
                                                    amount?: number;
                                                    usage_type?: string;
                                                };
                                                price?: {
                                                    nickname?: string;
                                                    product?: string;
                                                    active?: boolean;
                                                    billing_scheme?: string;
                                                    currency?: string;
                                                    recurring?: {
                                                        interval?: string;
                                                        interval_count?: number;
                                                        trial_period_days?: number;
                                                        usage_type?: string;
                                                    };
                                                };
                                            }[]>]: never; };
                                            default_tax_rates?: string[] & string[] & { [K_20 in Exclude<keyof I["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["default_tax_rates"], keyof string[]>]: never; };
                                        } & { [K_21 in Exclude<keyof I["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number], keyof StripeSubscription>]: never; })[] & { [K_22 in Exclude<keyof I["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"], keyof any[]>]: never; };
                                        tax_ids?: {
                                            country?: string;
                                            customer?: string;
                                            type?: string;
                                            value?: string;
                                            verification?: {
                                                status?: string;
                                                verified_address?: string;
                                                verified_name?: string;
                                            };
                                        }[] & ({
                                            country?: string;
                                            customer?: string;
                                            type?: string;
                                            value?: string;
                                            verification?: {
                                                status?: string;
                                                verified_address?: string;
                                                verified_name?: string;
                                            };
                                        } & {
                                            country?: string;
                                            customer?: string;
                                            type?: string;
                                            value?: string;
                                            verification?: {
                                                status?: string;
                                                verified_address?: string;
                                                verified_name?: string;
                                            } & {
                                                status?: string;
                                                verified_address?: string;
                                                verified_name?: string;
                                            } & { [K_23 in Exclude<keyof I["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["tax_ids"][number]["verification"], keyof StripeTaxVerification>]: never; };
                                        } & { [K_24 in Exclude<keyof I["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["tax_ids"][number], keyof StripeTaxId>]: never; })[] & { [K_25 in Exclude<keyof I["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["tax_ids"], keyof {
                                            country?: string;
                                            customer?: string;
                                            type?: string;
                                            value?: string;
                                            verification?: {
                                                status?: string;
                                                verified_address?: string;
                                                verified_name?: string;
                                            };
                                        }[]>]: never; };
                                        items?: {
                                            id?: string;
                                            quantity?: string;
                                            subscription?: string;
                                            plan?: {
                                                status?: boolean;
                                                nickname?: string;
                                                product?: string;
                                                amount?: number;
                                                usage_type?: string;
                                            };
                                            price?: {
                                                nickname?: string;
                                                product?: string;
                                                active?: boolean;
                                                billing_scheme?: string;
                                                currency?: string;
                                                recurring?: {
                                                    interval?: string;
                                                    interval_count?: number;
                                                    trial_period_days?: number;
                                                    usage_type?: string;
                                                };
                                            };
                                        }[] & ({
                                            id?: string;
                                            quantity?: string;
                                            subscription?: string;
                                            plan?: {
                                                status?: boolean;
                                                nickname?: string;
                                                product?: string;
                                                amount?: number;
                                                usage_type?: string;
                                            };
                                            price?: {
                                                nickname?: string;
                                                product?: string;
                                                active?: boolean;
                                                billing_scheme?: string;
                                                currency?: string;
                                                recurring?: {
                                                    interval?: string;
                                                    interval_count?: number;
                                                    trial_period_days?: number;
                                                    usage_type?: string;
                                                };
                                            };
                                        } & {
                                            id?: string;
                                            quantity?: string;
                                            subscription?: string;
                                            plan?: {
                                                status?: boolean;
                                                nickname?: string;
                                                product?: string;
                                                amount?: number;
                                                usage_type?: string;
                                            } & {
                                                status?: boolean;
                                                nickname?: string;
                                                product?: string;
                                                amount?: number;
                                                usage_type?: string;
                                            } & { [K_26 in Exclude<keyof I["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["items"][number]["plan"], keyof StripePlan>]: never; };
                                            price?: {
                                                nickname?: string;
                                                product?: string;
                                                active?: boolean;
                                                billing_scheme?: string;
                                                currency?: string;
                                                recurring?: {
                                                    interval?: string;
                                                    interval_count?: number;
                                                    trial_period_days?: number;
                                                    usage_type?: string;
                                                };
                                            } & {
                                                nickname?: string;
                                                product?: string;
                                                active?: boolean;
                                                billing_scheme?: string;
                                                currency?: string;
                                                recurring?: {
                                                    interval?: string;
                                                    interval_count?: number;
                                                    trial_period_days?: number;
                                                    usage_type?: string;
                                                } & any & { [K_27 in Exclude<keyof I["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["items"][number]["price"]["recurring"], keyof StripeRecurring>]: never; };
                                            } & { [K_28 in Exclude<keyof I["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["items"][number]["price"], keyof StripePrice>]: never; };
                                        } & { [K_29 in Exclude<keyof I["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["items"][number], keyof StripeSubscriptionItem>]: never; })[] & { [K_30 in Exclude<keyof I["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["items"], keyof {
                                            id?: string;
                                            quantity?: string;
                                            subscription?: string;
                                            plan?: {
                                                status?: boolean;
                                                nickname?: string;
                                                product?: string;
                                                amount?: number;
                                                usage_type?: string;
                                            };
                                            price?: {
                                                nickname?: string;
                                                product?: string;
                                                active?: boolean;
                                                billing_scheme?: string;
                                                currency?: string;
                                                recurring?: {
                                                    interval?: string;
                                                    interval_count?: number;
                                                    trial_period_days?: number;
                                                    usage_type?: string;
                                                };
                                            };
                                        }[]>]: never; };
                                        default_tax_rates?: string[] & string[] & { [K_31 in Exclude<keyof I["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["default_tax_rates"], keyof string[]>]: never; };
                                    } & { [K_32 in Exclude<keyof I["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number], keyof StripeSubscription>]: never; })[] & { [K_33 in Exclude<keyof I["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"], keyof any[]>]: never; };
                                    tax_ids?: {
                                        country?: string;
                                        customer?: string;
                                        type?: string;
                                        value?: string;
                                        verification?: {
                                            status?: string;
                                            verified_address?: string;
                                            verified_name?: string;
                                        };
                                    }[] & ({
                                        country?: string;
                                        customer?: string;
                                        type?: string;
                                        value?: string;
                                        verification?: {
                                            status?: string;
                                            verified_address?: string;
                                            verified_name?: string;
                                        };
                                    } & {
                                        country?: string;
                                        customer?: string;
                                        type?: string;
                                        value?: string;
                                        verification?: {
                                            status?: string;
                                            verified_address?: string;
                                            verified_name?: string;
                                        } & {
                                            status?: string;
                                            verified_address?: string;
                                            verified_name?: string;
                                        } & { [K_34 in Exclude<keyof I["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["tax_ids"][number]["verification"], keyof StripeTaxVerification>]: never; };
                                    } & { [K_35 in Exclude<keyof I["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["tax_ids"][number], keyof StripeTaxId>]: never; })[] & { [K_36 in Exclude<keyof I["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["tax_ids"], keyof {
                                        country?: string;
                                        customer?: string;
                                        type?: string;
                                        value?: string;
                                        verification?: {
                                            status?: string;
                                            verified_address?: string;
                                            verified_name?: string;
                                        };
                                    }[]>]: never; };
                                    items?: {
                                        id?: string;
                                        quantity?: string;
                                        subscription?: string;
                                        plan?: {
                                            status?: boolean;
                                            nickname?: string;
                                            product?: string;
                                            amount?: number;
                                            usage_type?: string;
                                        };
                                        price?: {
                                            nickname?: string;
                                            product?: string;
                                            active?: boolean;
                                            billing_scheme?: string;
                                            currency?: string;
                                            recurring?: {
                                                interval?: string;
                                                interval_count?: number;
                                                trial_period_days?: number;
                                                usage_type?: string;
                                            };
                                        };
                                    }[] & ({
                                        id?: string;
                                        quantity?: string;
                                        subscription?: string;
                                        plan?: {
                                            status?: boolean;
                                            nickname?: string;
                                            product?: string;
                                            amount?: number;
                                            usage_type?: string;
                                        };
                                        price?: {
                                            nickname?: string;
                                            product?: string;
                                            active?: boolean;
                                            billing_scheme?: string;
                                            currency?: string;
                                            recurring?: {
                                                interval?: string;
                                                interval_count?: number;
                                                trial_period_days?: number;
                                                usage_type?: string;
                                            };
                                        };
                                    } & {
                                        id?: string;
                                        quantity?: string;
                                        subscription?: string;
                                        plan?: {
                                            status?: boolean;
                                            nickname?: string;
                                            product?: string;
                                            amount?: number;
                                            usage_type?: string;
                                        } & {
                                            status?: boolean;
                                            nickname?: string;
                                            product?: string;
                                            amount?: number;
                                            usage_type?: string;
                                        } & { [K_37 in Exclude<keyof I["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["items"][number]["plan"], keyof StripePlan>]: never; };
                                        price?: {
                                            nickname?: string;
                                            product?: string;
                                            active?: boolean;
                                            billing_scheme?: string;
                                            currency?: string;
                                            recurring?: {
                                                interval?: string;
                                                interval_count?: number;
                                                trial_period_days?: number;
                                                usage_type?: string;
                                            };
                                        } & {
                                            nickname?: string;
                                            product?: string;
                                            active?: boolean;
                                            billing_scheme?: string;
                                            currency?: string;
                                            recurring?: {
                                                interval?: string;
                                                interval_count?: number;
                                                trial_period_days?: number;
                                                usage_type?: string;
                                            } & {
                                                interval?: string;
                                                interval_count?: number;
                                                trial_period_days?: number;
                                                usage_type?: string;
                                            } & { [K_38 in Exclude<keyof I["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["items"][number]["price"]["recurring"], keyof StripeRecurring>]: never; };
                                        } & { [K_39 in Exclude<keyof I["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["items"][number]["price"], keyof StripePrice>]: never; };
                                    } & { [K_40 in Exclude<keyof I["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["items"][number], keyof StripeSubscriptionItem>]: never; })[] & { [K_41 in Exclude<keyof I["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["items"], keyof {
                                        id?: string;
                                        quantity?: string;
                                        subscription?: string;
                                        plan?: {
                                            status?: boolean;
                                            nickname?: string;
                                            product?: string;
                                            amount?: number;
                                            usage_type?: string;
                                        };
                                        price?: {
                                            nickname?: string;
                                            product?: string;
                                            active?: boolean;
                                            billing_scheme?: string;
                                            currency?: string;
                                            recurring?: {
                                                interval?: string;
                                                interval_count?: number;
                                                trial_period_days?: number;
                                                usage_type?: string;
                                            };
                                        };
                                    }[]>]: never; };
                                    default_tax_rates?: string[] & string[] & { [K_42 in Exclude<keyof I["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["default_tax_rates"], keyof string[]>]: never; };
                                } & { [K_43 in Exclude<keyof I["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number], keyof StripeSubscription>]: never; })[] & { [K_44 in Exclude<keyof I["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"], keyof any[]>]: never; };
                                tax_ids?: {
                                    country?: string;
                                    customer?: string;
                                    type?: string;
                                    value?: string;
                                    verification?: {
                                        status?: string;
                                        verified_address?: string;
                                        verified_name?: string;
                                    };
                                }[] & ({
                                    country?: string;
                                    customer?: string;
                                    type?: string;
                                    value?: string;
                                    verification?: {
                                        status?: string;
                                        verified_address?: string;
                                        verified_name?: string;
                                    };
                                } & {
                                    country?: string;
                                    customer?: string;
                                    type?: string;
                                    value?: string;
                                    verification?: {
                                        status?: string;
                                        verified_address?: string;
                                        verified_name?: string;
                                    } & {
                                        status?: string;
                                        verified_address?: string;
                                        verified_name?: string;
                                    } & { [K_45 in Exclude<keyof I["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["tax_ids"][number]["verification"], keyof StripeTaxVerification>]: never; };
                                } & { [K_46 in Exclude<keyof I["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["tax_ids"][number], keyof StripeTaxId>]: never; })[] & { [K_47 in Exclude<keyof I["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["tax_ids"], keyof {
                                    country?: string;
                                    customer?: string;
                                    type?: string;
                                    value?: string;
                                    verification?: {
                                        status?: string;
                                        verified_address?: string;
                                        verified_name?: string;
                                    };
                                }[]>]: never; };
                                items?: {
                                    id?: string;
                                    quantity?: string;
                                    subscription?: string;
                                    plan?: {
                                        status?: boolean;
                                        nickname?: string;
                                        product?: string;
                                        amount?: number;
                                        usage_type?: string;
                                    };
                                    price?: {
                                        nickname?: string;
                                        product?: string;
                                        active?: boolean;
                                        billing_scheme?: string;
                                        currency?: string;
                                        recurring?: {
                                            interval?: string;
                                            interval_count?: number;
                                            trial_period_days?: number;
                                            usage_type?: string;
                                        };
                                    };
                                }[] & ({
                                    id?: string;
                                    quantity?: string;
                                    subscription?: string;
                                    plan?: {
                                        status?: boolean;
                                        nickname?: string;
                                        product?: string;
                                        amount?: number;
                                        usage_type?: string;
                                    };
                                    price?: {
                                        nickname?: string;
                                        product?: string;
                                        active?: boolean;
                                        billing_scheme?: string;
                                        currency?: string;
                                        recurring?: {
                                            interval?: string;
                                            interval_count?: number;
                                            trial_period_days?: number;
                                            usage_type?: string;
                                        };
                                    };
                                } & {
                                    id?: string;
                                    quantity?: string;
                                    subscription?: string;
                                    plan?: {
                                        status?: boolean;
                                        nickname?: string;
                                        product?: string;
                                        amount?: number;
                                        usage_type?: string;
                                    } & {
                                        status?: boolean;
                                        nickname?: string;
                                        product?: string;
                                        amount?: number;
                                        usage_type?: string;
                                    } & { [K_48 in Exclude<keyof I["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["items"][number]["plan"], keyof StripePlan>]: never; };
                                    price?: {
                                        nickname?: string;
                                        product?: string;
                                        active?: boolean;
                                        billing_scheme?: string;
                                        currency?: string;
                                        recurring?: {
                                            interval?: string;
                                            interval_count?: number;
                                            trial_period_days?: number;
                                            usage_type?: string;
                                        };
                                    } & {
                                        nickname?: string;
                                        product?: string;
                                        active?: boolean;
                                        billing_scheme?: string;
                                        currency?: string;
                                        recurring?: {
                                            interval?: string;
                                            interval_count?: number;
                                            trial_period_days?: number;
                                            usage_type?: string;
                                        } & {
                                            interval?: string;
                                            interval_count?: number;
                                            trial_period_days?: number;
                                            usage_type?: string;
                                        } & { [K_49 in Exclude<keyof I["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["items"][number]["price"]["recurring"], keyof StripeRecurring>]: never; };
                                    } & { [K_50 in Exclude<keyof I["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["items"][number]["price"], keyof StripePrice>]: never; };
                                } & { [K_51 in Exclude<keyof I["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["items"][number], keyof StripeSubscriptionItem>]: never; })[] & { [K_52 in Exclude<keyof I["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["items"], keyof {
                                    id?: string;
                                    quantity?: string;
                                    subscription?: string;
                                    plan?: {
                                        status?: boolean;
                                        nickname?: string;
                                        product?: string;
                                        amount?: number;
                                        usage_type?: string;
                                    };
                                    price?: {
                                        nickname?: string;
                                        product?: string;
                                        active?: boolean;
                                        billing_scheme?: string;
                                        currency?: string;
                                        recurring?: {
                                            interval?: string;
                                            interval_count?: number;
                                            trial_period_days?: number;
                                            usage_type?: string;
                                        };
                                    };
                                }[]>]: never; };
                                default_tax_rates?: string[] & string[] & { [K_53 in Exclude<keyof I["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["default_tax_rates"], keyof string[]>]: never; };
                            } & { [K_54 in Exclude<keyof I["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number], keyof StripeSubscription>]: never; })[] & { [K_55 in Exclude<keyof I["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"], keyof any[]>]: never; };
                            tax_ids?: {
                                country?: string;
                                customer?: string;
                                type?: string;
                                value?: string;
                                verification?: {
                                    status?: string;
                                    verified_address?: string;
                                    verified_name?: string;
                                };
                            }[] & ({
                                country?: string;
                                customer?: string;
                                type?: string;
                                value?: string;
                                verification?: {
                                    status?: string;
                                    verified_address?: string;
                                    verified_name?: string;
                                };
                            } & {
                                country?: string;
                                customer?: string;
                                type?: string;
                                value?: string;
                                verification?: {
                                    status?: string;
                                    verified_address?: string;
                                    verified_name?: string;
                                } & {
                                    status?: string;
                                    verified_address?: string;
                                    verified_name?: string;
                                } & { [K_56 in Exclude<keyof I["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["tax_ids"][number]["verification"], keyof StripeTaxVerification>]: never; };
                            } & { [K_57 in Exclude<keyof I["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["tax_ids"][number], keyof StripeTaxId>]: never; })[] & { [K_58 in Exclude<keyof I["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["tax_ids"], keyof {
                                country?: string;
                                customer?: string;
                                type?: string;
                                value?: string;
                                verification?: {
                                    status?: string;
                                    verified_address?: string;
                                    verified_name?: string;
                                };
                            }[]>]: never; };
                            items?: {
                                id?: string;
                                quantity?: string;
                                subscription?: string;
                                plan?: {
                                    status?: boolean;
                                    nickname?: string;
                                    product?: string;
                                    amount?: number;
                                    usage_type?: string;
                                };
                                price?: {
                                    nickname?: string;
                                    product?: string;
                                    active?: boolean;
                                    billing_scheme?: string;
                                    currency?: string;
                                    recurring?: {
                                        interval?: string;
                                        interval_count?: number;
                                        trial_period_days?: number;
                                        usage_type?: string;
                                    };
                                };
                            }[] & ({
                                id?: string;
                                quantity?: string;
                                subscription?: string;
                                plan?: {
                                    status?: boolean;
                                    nickname?: string;
                                    product?: string;
                                    amount?: number;
                                    usage_type?: string;
                                };
                                price?: {
                                    nickname?: string;
                                    product?: string;
                                    active?: boolean;
                                    billing_scheme?: string;
                                    currency?: string;
                                    recurring?: {
                                        interval?: string;
                                        interval_count?: number;
                                        trial_period_days?: number;
                                        usage_type?: string;
                                    };
                                };
                            } & {
                                id?: string;
                                quantity?: string;
                                subscription?: string;
                                plan?: {
                                    status?: boolean;
                                    nickname?: string;
                                    product?: string;
                                    amount?: number;
                                    usage_type?: string;
                                } & {
                                    status?: boolean;
                                    nickname?: string;
                                    product?: string;
                                    amount?: number;
                                    usage_type?: string;
                                } & { [K_59 in Exclude<keyof I["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["items"][number]["plan"], keyof StripePlan>]: never; };
                                price?: {
                                    nickname?: string;
                                    product?: string;
                                    active?: boolean;
                                    billing_scheme?: string;
                                    currency?: string;
                                    recurring?: {
                                        interval?: string;
                                        interval_count?: number;
                                        trial_period_days?: number;
                                        usage_type?: string;
                                    };
                                } & {
                                    nickname?: string;
                                    product?: string;
                                    active?: boolean;
                                    billing_scheme?: string;
                                    currency?: string;
                                    recurring?: {
                                        interval?: string;
                                        interval_count?: number;
                                        trial_period_days?: number;
                                        usage_type?: string;
                                    } & {
                                        interval?: string;
                                        interval_count?: number;
                                        trial_period_days?: number;
                                        usage_type?: string;
                                    } & { [K_60 in Exclude<keyof I["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["items"][number]["price"]["recurring"], keyof StripeRecurring>]: never; };
                                } & { [K_61 in Exclude<keyof I["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["items"][number]["price"], keyof StripePrice>]: never; };
                            } & { [K_62 in Exclude<keyof I["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["items"][number], keyof StripeSubscriptionItem>]: never; })[] & { [K_63 in Exclude<keyof I["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["items"], keyof {
                                id?: string;
                                quantity?: string;
                                subscription?: string;
                                plan?: {
                                    status?: boolean;
                                    nickname?: string;
                                    product?: string;
                                    amount?: number;
                                    usage_type?: string;
                                };
                                price?: {
                                    nickname?: string;
                                    product?: string;
                                    active?: boolean;
                                    billing_scheme?: string;
                                    currency?: string;
                                    recurring?: {
                                        interval?: string;
                                        interval_count?: number;
                                        trial_period_days?: number;
                                        usage_type?: string;
                                    };
                                };
                            }[]>]: never; };
                            default_tax_rates?: string[] & string[] & { [K_64 in Exclude<keyof I["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["default_tax_rates"], keyof string[]>]: never; };
                        } & { [K_65 in Exclude<keyof I["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number], keyof StripeSubscription>]: never; })[] & { [K_66 in Exclude<keyof I["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"], keyof any[]>]: never; };
                        tax_ids?: {
                            country?: string;
                            customer?: string;
                            type?: string;
                            value?: string;
                            verification?: {
                                status?: string;
                                verified_address?: string;
                                verified_name?: string;
                            };
                        }[] & ({
                            country?: string;
                            customer?: string;
                            type?: string;
                            value?: string;
                            verification?: {
                                status?: string;
                                verified_address?: string;
                                verified_name?: string;
                            };
                        } & {
                            country?: string;
                            customer?: string;
                            type?: string;
                            value?: string;
                            verification?: {
                                status?: string;
                                verified_address?: string;
                                verified_name?: string;
                            } & {
                                status?: string;
                                verified_address?: string;
                                verified_name?: string;
                            } & { [K_67 in Exclude<keyof I["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["tax_ids"][number]["verification"], keyof StripeTaxVerification>]: never; };
                        } & { [K_68 in Exclude<keyof I["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["tax_ids"][number], keyof StripeTaxId>]: never; })[] & { [K_69 in Exclude<keyof I["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["tax_ids"], keyof {
                            country?: string;
                            customer?: string;
                            type?: string;
                            value?: string;
                            verification?: {
                                status?: string;
                                verified_address?: string;
                                verified_name?: string;
                            };
                        }[]>]: never; };
                        items?: {
                            id?: string;
                            quantity?: string;
                            subscription?: string;
                            plan?: {
                                status?: boolean;
                                nickname?: string;
                                product?: string;
                                amount?: number;
                                usage_type?: string;
                            };
                            price?: {
                                nickname?: string;
                                product?: string;
                                active?: boolean;
                                billing_scheme?: string;
                                currency?: string;
                                recurring?: {
                                    interval?: string;
                                    interval_count?: number;
                                    trial_period_days?: number;
                                    usage_type?: string;
                                };
                            };
                        }[] & ({
                            id?: string;
                            quantity?: string;
                            subscription?: string;
                            plan?: {
                                status?: boolean;
                                nickname?: string;
                                product?: string;
                                amount?: number;
                                usage_type?: string;
                            };
                            price?: {
                                nickname?: string;
                                product?: string;
                                active?: boolean;
                                billing_scheme?: string;
                                currency?: string;
                                recurring?: {
                                    interval?: string;
                                    interval_count?: number;
                                    trial_period_days?: number;
                                    usage_type?: string;
                                };
                            };
                        } & {
                            id?: string;
                            quantity?: string;
                            subscription?: string;
                            plan?: {
                                status?: boolean;
                                nickname?: string;
                                product?: string;
                                amount?: number;
                                usage_type?: string;
                            } & {
                                status?: boolean;
                                nickname?: string;
                                product?: string;
                                amount?: number;
                                usage_type?: string;
                            } & { [K_70 in Exclude<keyof I["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["items"][number]["plan"], keyof StripePlan>]: never; };
                            price?: {
                                nickname?: string;
                                product?: string;
                                active?: boolean;
                                billing_scheme?: string;
                                currency?: string;
                                recurring?: {
                                    interval?: string;
                                    interval_count?: number;
                                    trial_period_days?: number;
                                    usage_type?: string;
                                };
                            } & {
                                nickname?: string;
                                product?: string;
                                active?: boolean;
                                billing_scheme?: string;
                                currency?: string;
                                recurring?: {
                                    interval?: string;
                                    interval_count?: number;
                                    trial_period_days?: number;
                                    usage_type?: string;
                                } & {
                                    interval?: string;
                                    interval_count?: number;
                                    trial_period_days?: number;
                                    usage_type?: string;
                                } & { [K_71 in Exclude<keyof I["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["items"][number]["price"]["recurring"], keyof StripeRecurring>]: never; };
                            } & { [K_72 in Exclude<keyof I["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["items"][number]["price"], keyof StripePrice>]: never; };
                        } & { [K_73 in Exclude<keyof I["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["items"][number], keyof StripeSubscriptionItem>]: never; })[] & { [K_74 in Exclude<keyof I["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["items"], keyof {
                            id?: string;
                            quantity?: string;
                            subscription?: string;
                            plan?: {
                                status?: boolean;
                                nickname?: string;
                                product?: string;
                                amount?: number;
                                usage_type?: string;
                            };
                            price?: {
                                nickname?: string;
                                product?: string;
                                active?: boolean;
                                billing_scheme?: string;
                                currency?: string;
                                recurring?: {
                                    interval?: string;
                                    interval_count?: number;
                                    trial_period_days?: number;
                                    usage_type?: string;
                                };
                            };
                        }[]>]: never; };
                        default_tax_rates?: string[] & string[] & { [K_75 in Exclude<keyof I["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["default_tax_rates"], keyof string[]>]: never; };
                    } & { [K_76 in Exclude<keyof I["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number], keyof StripeSubscription>]: never; })[] & { [K_77 in Exclude<keyof I["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"], keyof any[]>]: never; };
                    tax_ids?: {
                        country?: string;
                        customer?: string;
                        type?: string;
                        value?: string;
                        verification?: {
                            status?: string;
                            verified_address?: string;
                            verified_name?: string;
                        };
                    }[] & ({
                        country?: string;
                        customer?: string;
                        type?: string;
                        value?: string;
                        verification?: {
                            status?: string;
                            verified_address?: string;
                            verified_name?: string;
                        };
                    } & {
                        country?: string;
                        customer?: string;
                        type?: string;
                        value?: string;
                        verification?: {
                            status?: string;
                            verified_address?: string;
                            verified_name?: string;
                        } & {
                            status?: string;
                            verified_address?: string;
                            verified_name?: string;
                        } & { [K_78 in Exclude<keyof I["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["tax_ids"][number]["verification"], keyof StripeTaxVerification>]: never; };
                    } & { [K_79 in Exclude<keyof I["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["tax_ids"][number], keyof StripeTaxId>]: never; })[] & { [K_80 in Exclude<keyof I["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["tax_ids"], keyof {
                        country?: string;
                        customer?: string;
                        type?: string;
                        value?: string;
                        verification?: {
                            status?: string;
                            verified_address?: string;
                            verified_name?: string;
                        };
                    }[]>]: never; };
                    items?: {
                        id?: string;
                        quantity?: string;
                        subscription?: string;
                        plan?: {
                            status?: boolean;
                            nickname?: string;
                            product?: string;
                            amount?: number;
                            usage_type?: string;
                        };
                        price?: {
                            nickname?: string;
                            product?: string;
                            active?: boolean;
                            billing_scheme?: string;
                            currency?: string;
                            recurring?: {
                                interval?: string;
                                interval_count?: number;
                                trial_period_days?: number;
                                usage_type?: string;
                            };
                        };
                    }[] & ({
                        id?: string;
                        quantity?: string;
                        subscription?: string;
                        plan?: {
                            status?: boolean;
                            nickname?: string;
                            product?: string;
                            amount?: number;
                            usage_type?: string;
                        };
                        price?: {
                            nickname?: string;
                            product?: string;
                            active?: boolean;
                            billing_scheme?: string;
                            currency?: string;
                            recurring?: {
                                interval?: string;
                                interval_count?: number;
                                trial_period_days?: number;
                                usage_type?: string;
                            };
                        };
                    } & {
                        id?: string;
                        quantity?: string;
                        subscription?: string;
                        plan?: {
                            status?: boolean;
                            nickname?: string;
                            product?: string;
                            amount?: number;
                            usage_type?: string;
                        } & {
                            status?: boolean;
                            nickname?: string;
                            product?: string;
                            amount?: number;
                            usage_type?: string;
                        } & { [K_81 in Exclude<keyof I["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["items"][number]["plan"], keyof StripePlan>]: never; };
                        price?: {
                            nickname?: string;
                            product?: string;
                            active?: boolean;
                            billing_scheme?: string;
                            currency?: string;
                            recurring?: {
                                interval?: string;
                                interval_count?: number;
                                trial_period_days?: number;
                                usage_type?: string;
                            };
                        } & {
                            nickname?: string;
                            product?: string;
                            active?: boolean;
                            billing_scheme?: string;
                            currency?: string;
                            recurring?: {
                                interval?: string;
                                interval_count?: number;
                                trial_period_days?: number;
                                usage_type?: string;
                            } & {
                                interval?: string;
                                interval_count?: number;
                                trial_period_days?: number;
                                usage_type?: string;
                            } & { [K_82 in Exclude<keyof I["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["items"][number]["price"]["recurring"], keyof StripeRecurring>]: never; };
                        } & { [K_83 in Exclude<keyof I["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["items"][number]["price"], keyof StripePrice>]: never; };
                    } & { [K_84 in Exclude<keyof I["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["items"][number], keyof StripeSubscriptionItem>]: never; })[] & { [K_85 in Exclude<keyof I["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["items"], keyof {
                        id?: string;
                        quantity?: string;
                        subscription?: string;
                        plan?: {
                            status?: boolean;
                            nickname?: string;
                            product?: string;
                            amount?: number;
                            usage_type?: string;
                        };
                        price?: {
                            nickname?: string;
                            product?: string;
                            active?: boolean;
                            billing_scheme?: string;
                            currency?: string;
                            recurring?: {
                                interval?: string;
                                interval_count?: number;
                                trial_period_days?: number;
                                usage_type?: string;
                            };
                        };
                    }[]>]: never; };
                    default_tax_rates?: string[] & string[] & { [K_86 in Exclude<keyof I["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["default_tax_rates"], keyof string[]>]: never; };
                } & { [K_87 in Exclude<keyof I["subscriptions"][number]["subscriptions"][number]["subscriptions"][number], keyof StripeSubscription>]: never; })[] & { [K_88 in Exclude<keyof I["subscriptions"][number]["subscriptions"][number]["subscriptions"], keyof any[]>]: never; };
                tax_ids?: {
                    country?: string;
                    customer?: string;
                    type?: string;
                    value?: string;
                    verification?: {
                        status?: string;
                        verified_address?: string;
                        verified_name?: string;
                    };
                }[] & ({
                    country?: string;
                    customer?: string;
                    type?: string;
                    value?: string;
                    verification?: {
                        status?: string;
                        verified_address?: string;
                        verified_name?: string;
                    };
                } & {
                    country?: string;
                    customer?: string;
                    type?: string;
                    value?: string;
                    verification?: {
                        status?: string;
                        verified_address?: string;
                        verified_name?: string;
                    } & {
                        status?: string;
                        verified_address?: string;
                        verified_name?: string;
                    } & { [K_89 in Exclude<keyof I["subscriptions"][number]["subscriptions"][number]["tax_ids"][number]["verification"], keyof StripeTaxVerification>]: never; };
                } & { [K_90 in Exclude<keyof I["subscriptions"][number]["subscriptions"][number]["tax_ids"][number], keyof StripeTaxId>]: never; })[] & { [K_91 in Exclude<keyof I["subscriptions"][number]["subscriptions"][number]["tax_ids"], keyof {
                    country?: string;
                    customer?: string;
                    type?: string;
                    value?: string;
                    verification?: {
                        status?: string;
                        verified_address?: string;
                        verified_name?: string;
                    };
                }[]>]: never; };
                items?: {
                    id?: string;
                    quantity?: string;
                    subscription?: string;
                    plan?: {
                        status?: boolean;
                        nickname?: string;
                        product?: string;
                        amount?: number;
                        usage_type?: string;
                    };
                    price?: {
                        nickname?: string;
                        product?: string;
                        active?: boolean;
                        billing_scheme?: string;
                        currency?: string;
                        recurring?: {
                            interval?: string;
                            interval_count?: number;
                            trial_period_days?: number;
                            usage_type?: string;
                        };
                    };
                }[] & ({
                    id?: string;
                    quantity?: string;
                    subscription?: string;
                    plan?: {
                        status?: boolean;
                        nickname?: string;
                        product?: string;
                        amount?: number;
                        usage_type?: string;
                    };
                    price?: {
                        nickname?: string;
                        product?: string;
                        active?: boolean;
                        billing_scheme?: string;
                        currency?: string;
                        recurring?: {
                            interval?: string;
                            interval_count?: number;
                            trial_period_days?: number;
                            usage_type?: string;
                        };
                    };
                } & {
                    id?: string;
                    quantity?: string;
                    subscription?: string;
                    plan?: {
                        status?: boolean;
                        nickname?: string;
                        product?: string;
                        amount?: number;
                        usage_type?: string;
                    } & {
                        status?: boolean;
                        nickname?: string;
                        product?: string;
                        amount?: number;
                        usage_type?: string;
                    } & { [K_92 in Exclude<keyof I["subscriptions"][number]["subscriptions"][number]["items"][number]["plan"], keyof StripePlan>]: never; };
                    price?: {
                        nickname?: string;
                        product?: string;
                        active?: boolean;
                        billing_scheme?: string;
                        currency?: string;
                        recurring?: {
                            interval?: string;
                            interval_count?: number;
                            trial_period_days?: number;
                            usage_type?: string;
                        };
                    } & {
                        nickname?: string;
                        product?: string;
                        active?: boolean;
                        billing_scheme?: string;
                        currency?: string;
                        recurring?: {
                            interval?: string;
                            interval_count?: number;
                            trial_period_days?: number;
                            usage_type?: string;
                        } & {
                            interval?: string;
                            interval_count?: number;
                            trial_period_days?: number;
                            usage_type?: string;
                        } & { [K_93 in Exclude<keyof I["subscriptions"][number]["subscriptions"][number]["items"][number]["price"]["recurring"], keyof StripeRecurring>]: never; };
                    } & { [K_94 in Exclude<keyof I["subscriptions"][number]["subscriptions"][number]["items"][number]["price"], keyof StripePrice>]: never; };
                } & { [K_95 in Exclude<keyof I["subscriptions"][number]["subscriptions"][number]["items"][number], keyof StripeSubscriptionItem>]: never; })[] & { [K_96 in Exclude<keyof I["subscriptions"][number]["subscriptions"][number]["items"], keyof {
                    id?: string;
                    quantity?: string;
                    subscription?: string;
                    plan?: {
                        status?: boolean;
                        nickname?: string;
                        product?: string;
                        amount?: number;
                        usage_type?: string;
                    };
                    price?: {
                        nickname?: string;
                        product?: string;
                        active?: boolean;
                        billing_scheme?: string;
                        currency?: string;
                        recurring?: {
                            interval?: string;
                            interval_count?: number;
                            trial_period_days?: number;
                            usage_type?: string;
                        };
                    };
                }[]>]: never; };
                default_tax_rates?: string[] & string[] & { [K_97 in Exclude<keyof I["subscriptions"][number]["subscriptions"][number]["default_tax_rates"], keyof string[]>]: never; };
            } & { [K_98 in Exclude<keyof I["subscriptions"][number]["subscriptions"][number], keyof StripeSubscription>]: never; })[] & { [K_99 in Exclude<keyof I["subscriptions"][number]["subscriptions"], keyof any[]>]: never; };
            tax_ids?: {
                country?: string;
                customer?: string;
                type?: string;
                value?: string;
                verification?: {
                    status?: string;
                    verified_address?: string;
                    verified_name?: string;
                };
            }[] & ({
                country?: string;
                customer?: string;
                type?: string;
                value?: string;
                verification?: {
                    status?: string;
                    verified_address?: string;
                    verified_name?: string;
                };
            } & {
                country?: string;
                customer?: string;
                type?: string;
                value?: string;
                verification?: {
                    status?: string;
                    verified_address?: string;
                    verified_name?: string;
                } & {
                    status?: string;
                    verified_address?: string;
                    verified_name?: string;
                } & { [K_100 in Exclude<keyof I["subscriptions"][number]["tax_ids"][number]["verification"], keyof StripeTaxVerification>]: never; };
            } & { [K_101 in Exclude<keyof I["subscriptions"][number]["tax_ids"][number], keyof StripeTaxId>]: never; })[] & { [K_102 in Exclude<keyof I["subscriptions"][number]["tax_ids"], keyof {
                country?: string;
                customer?: string;
                type?: string;
                value?: string;
                verification?: {
                    status?: string;
                    verified_address?: string;
                    verified_name?: string;
                };
            }[]>]: never; };
            items?: {
                id?: string;
                quantity?: string;
                subscription?: string;
                plan?: {
                    status?: boolean;
                    nickname?: string;
                    product?: string;
                    amount?: number;
                    usage_type?: string;
                };
                price?: {
                    nickname?: string;
                    product?: string;
                    active?: boolean;
                    billing_scheme?: string;
                    currency?: string;
                    recurring?: {
                        interval?: string;
                        interval_count?: number;
                        trial_period_days?: number;
                        usage_type?: string;
                    };
                };
            }[] & ({
                id?: string;
                quantity?: string;
                subscription?: string;
                plan?: {
                    status?: boolean;
                    nickname?: string;
                    product?: string;
                    amount?: number;
                    usage_type?: string;
                };
                price?: {
                    nickname?: string;
                    product?: string;
                    active?: boolean;
                    billing_scheme?: string;
                    currency?: string;
                    recurring?: {
                        interval?: string;
                        interval_count?: number;
                        trial_period_days?: number;
                        usage_type?: string;
                    };
                };
            } & {
                id?: string;
                quantity?: string;
                subscription?: string;
                plan?: {
                    status?: boolean;
                    nickname?: string;
                    product?: string;
                    amount?: number;
                    usage_type?: string;
                } & {
                    status?: boolean;
                    nickname?: string;
                    product?: string;
                    amount?: number;
                    usage_type?: string;
                } & { [K_103 in Exclude<keyof I["subscriptions"][number]["items"][number]["plan"], keyof StripePlan>]: never; };
                price?: {
                    nickname?: string;
                    product?: string;
                    active?: boolean;
                    billing_scheme?: string;
                    currency?: string;
                    recurring?: {
                        interval?: string;
                        interval_count?: number;
                        trial_period_days?: number;
                        usage_type?: string;
                    };
                } & {
                    nickname?: string;
                    product?: string;
                    active?: boolean;
                    billing_scheme?: string;
                    currency?: string;
                    recurring?: {
                        interval?: string;
                        interval_count?: number;
                        trial_period_days?: number;
                        usage_type?: string;
                    } & {
                        interval?: string;
                        interval_count?: number;
                        trial_period_days?: number;
                        usage_type?: string;
                    } & { [K_104 in Exclude<keyof I["subscriptions"][number]["items"][number]["price"]["recurring"], keyof StripeRecurring>]: never; };
                } & { [K_105 in Exclude<keyof I["subscriptions"][number]["items"][number]["price"], keyof StripePrice>]: never; };
            } & { [K_106 in Exclude<keyof I["subscriptions"][number]["items"][number], keyof StripeSubscriptionItem>]: never; })[] & { [K_107 in Exclude<keyof I["subscriptions"][number]["items"], keyof {
                id?: string;
                quantity?: string;
                subscription?: string;
                plan?: {
                    status?: boolean;
                    nickname?: string;
                    product?: string;
                    amount?: number;
                    usage_type?: string;
                };
                price?: {
                    nickname?: string;
                    product?: string;
                    active?: boolean;
                    billing_scheme?: string;
                    currency?: string;
                    recurring?: {
                        interval?: string;
                        interval_count?: number;
                        trial_period_days?: number;
                        usage_type?: string;
                    };
                };
            }[]>]: never; };
            default_tax_rates?: string[] & string[] & { [K_108 in Exclude<keyof I["subscriptions"][number]["default_tax_rates"], keyof string[]>]: never; };
        } & { [K_109 in Exclude<keyof I["subscriptions"][number], keyof StripeSubscription>]: never; })[] & { [K_110 in Exclude<keyof I["subscriptions"], keyof any[]>]: never; };
        discount?: {
            subscription?: string;
            start?: number;
            customer?: string;
            coupon?: {
                duration?: string;
                duration_in_months?: number;
                name?: string;
            };
        } & {
            subscription?: string;
            start?: number;
            customer?: string;
            coupon?: {
                duration?: string;
                duration_in_months?: number;
                name?: string;
            } & {
                duration?: string;
                duration_in_months?: number;
                name?: string;
            } & { [K_111 in Exclude<keyof I["discount"]["coupon"], keyof StripeCoupon>]: never; };
        } & { [K_112 in Exclude<keyof I["discount"], keyof StripeCustomerDiscount>]: never; };
    } & { [K_113 in Exclude<keyof I, keyof StripeCustomer>]: never; }>(base?: I): StripeCustomer;
    fromPartial<I_1 extends {
        address?: {
            line1?: string;
            line2?: string;
            postal_code?: string;
            city?: string;
            state?: string;
            country?: string;
        };
        description?: string;
        name?: string;
        email?: string;
        tax_ids?: {
            country?: string;
            customer?: string;
            type?: string;
            value?: string;
            verification?: {
                status?: string;
                verified_address?: string;
                verified_name?: string;
            };
        }[];
        subscriptions?: any[];
        discount?: {
            subscription?: string;
            start?: number;
            customer?: string;
            coupon?: {
                duration?: string;
                duration_in_months?: number;
                name?: string;
            };
        };
    } & {
        address?: {
            line1?: string;
            line2?: string;
            postal_code?: string;
            city?: string;
            state?: string;
            country?: string;
        } & {
            line1?: string;
            line2?: string;
            postal_code?: string;
            city?: string;
            state?: string;
            country?: string;
        } & { [K_114 in Exclude<keyof I_1["address"], keyof StripeCustomerAddress>]: never; };
        description?: string;
        name?: string;
        email?: string;
        tax_ids?: {
            country?: string;
            customer?: string;
            type?: string;
            value?: string;
            verification?: {
                status?: string;
                verified_address?: string;
                verified_name?: string;
            };
        }[] & ({
            country?: string;
            customer?: string;
            type?: string;
            value?: string;
            verification?: {
                status?: string;
                verified_address?: string;
                verified_name?: string;
            };
        } & {
            country?: string;
            customer?: string;
            type?: string;
            value?: string;
            verification?: {
                status?: string;
                verified_address?: string;
                verified_name?: string;
            } & {
                status?: string;
                verified_address?: string;
                verified_name?: string;
            } & { [K_115 in Exclude<keyof I_1["tax_ids"][number]["verification"], keyof StripeTaxVerification>]: never; };
        } & { [K_116 in Exclude<keyof I_1["tax_ids"][number], keyof StripeTaxId>]: never; })[] & { [K_117 in Exclude<keyof I_1["tax_ids"], keyof {
            country?: string;
            customer?: string;
            type?: string;
            value?: string;
            verification?: {
                status?: string;
                verified_address?: string;
                verified_name?: string;
            };
        }[]>]: never; };
        subscriptions?: any[] & ({
            address?: string;
            balance?: number;
            currency?: string;
            subscriptions?: any[];
            tax_ids?: {
                country?: string;
                customer?: string;
                type?: string;
                value?: string;
                verification?: {
                    status?: string;
                    verified_address?: string;
                    verified_name?: string;
                };
            }[];
            items?: {
                id?: string;
                quantity?: string;
                subscription?: string;
                plan?: {
                    status?: boolean;
                    nickname?: string;
                    product?: string;
                    amount?: number;
                    usage_type?: string;
                };
                price?: {
                    nickname?: string;
                    product?: string;
                    active?: boolean;
                    billing_scheme?: string;
                    currency?: string;
                    recurring?: {
                        interval?: string;
                        interval_count?: number;
                        trial_period_days?: number;
                        usage_type?: string;
                    };
                };
            }[];
            default_tax_rates?: string[];
        } & {
            address?: string;
            balance?: number;
            currency?: string;
            subscriptions?: any[] & ({
                address?: string;
                balance?: number;
                currency?: string;
                subscriptions?: any[];
                tax_ids?: {
                    country?: string;
                    customer?: string;
                    type?: string;
                    value?: string;
                    verification?: {
                        status?: string;
                        verified_address?: string;
                        verified_name?: string;
                    };
                }[];
                items?: {
                    id?: string;
                    quantity?: string;
                    subscription?: string;
                    plan?: {
                        status?: boolean;
                        nickname?: string;
                        product?: string;
                        amount?: number;
                        usage_type?: string;
                    };
                    price?: {
                        nickname?: string;
                        product?: string;
                        active?: boolean;
                        billing_scheme?: string;
                        currency?: string;
                        recurring?: {
                            interval?: string;
                            interval_count?: number;
                            trial_period_days?: number;
                            usage_type?: string;
                        };
                    };
                }[];
                default_tax_rates?: string[];
            } & {
                address?: string;
                balance?: number;
                currency?: string;
                subscriptions?: any[] & ({
                    address?: string;
                    balance?: number;
                    currency?: string;
                    subscriptions?: any[];
                    tax_ids?: {
                        country?: string;
                        customer?: string;
                        type?: string;
                        value?: string;
                        verification?: {
                            status?: string;
                            verified_address?: string;
                            verified_name?: string;
                        };
                    }[];
                    items?: {
                        id?: string;
                        quantity?: string;
                        subscription?: string;
                        plan?: {
                            status?: boolean;
                            nickname?: string;
                            product?: string;
                            amount?: number;
                            usage_type?: string;
                        };
                        price?: {
                            nickname?: string;
                            product?: string;
                            active?: boolean;
                            billing_scheme?: string;
                            currency?: string;
                            recurring?: {
                                interval?: string;
                                interval_count?: number;
                                trial_period_days?: number;
                                usage_type?: string;
                            };
                        };
                    }[];
                    default_tax_rates?: string[];
                } & {
                    address?: string;
                    balance?: number;
                    currency?: string;
                    subscriptions?: any[] & ({
                        address?: string;
                        balance?: number;
                        currency?: string;
                        subscriptions?: any[];
                        tax_ids?: {
                            country?: string;
                            customer?: string;
                            type?: string;
                            value?: string;
                            verification?: {
                                status?: string;
                                verified_address?: string;
                                verified_name?: string;
                            };
                        }[];
                        items?: {
                            id?: string;
                            quantity?: string;
                            subscription?: string;
                            plan?: {
                                status?: boolean;
                                nickname?: string;
                                product?: string;
                                amount?: number;
                                usage_type?: string;
                            };
                            price?: {
                                nickname?: string;
                                product?: string;
                                active?: boolean;
                                billing_scheme?: string;
                                currency?: string;
                                recurring?: {
                                    interval?: string;
                                    interval_count?: number;
                                    trial_period_days?: number;
                                    usage_type?: string;
                                };
                            };
                        }[];
                        default_tax_rates?: string[];
                    } & {
                        address?: string;
                        balance?: number;
                        currency?: string;
                        subscriptions?: any[] & ({
                            address?: string;
                            balance?: number;
                            currency?: string;
                            subscriptions?: any[];
                            tax_ids?: {
                                country?: string;
                                customer?: string;
                                type?: string;
                                value?: string;
                                verification?: {
                                    status?: string;
                                    verified_address?: string;
                                    verified_name?: string;
                                };
                            }[];
                            items?: {
                                id?: string;
                                quantity?: string;
                                subscription?: string;
                                plan?: {
                                    status?: boolean;
                                    nickname?: string;
                                    product?: string;
                                    amount?: number;
                                    usage_type?: string;
                                };
                                price?: {
                                    nickname?: string;
                                    product?: string;
                                    active?: boolean;
                                    billing_scheme?: string;
                                    currency?: string;
                                    recurring?: {
                                        interval?: string;
                                        interval_count?: number;
                                        trial_period_days?: number;
                                        usage_type?: string;
                                    };
                                };
                            }[];
                            default_tax_rates?: string[];
                        } & {
                            address?: string;
                            balance?: number;
                            currency?: string;
                            subscriptions?: any[] & ({
                                address?: string;
                                balance?: number;
                                currency?: string;
                                subscriptions?: any[];
                                tax_ids?: {
                                    country?: string;
                                    customer?: string;
                                    type?: string;
                                    value?: string;
                                    verification?: {
                                        status?: string;
                                        verified_address?: string;
                                        verified_name?: string;
                                    };
                                }[];
                                items?: {
                                    id?: string;
                                    quantity?: string;
                                    subscription?: string;
                                    plan?: {
                                        status?: boolean;
                                        nickname?: string;
                                        product?: string;
                                        amount?: number;
                                        usage_type?: string;
                                    };
                                    price?: {
                                        nickname?: string;
                                        product?: string;
                                        active?: boolean;
                                        billing_scheme?: string;
                                        currency?: string;
                                        recurring?: {
                                            interval?: string;
                                            interval_count?: number;
                                            trial_period_days?: number;
                                            usage_type?: string;
                                        };
                                    };
                                }[];
                                default_tax_rates?: string[];
                            } & {
                                address?: string;
                                balance?: number;
                                currency?: string;
                                subscriptions?: any[] & ({
                                    address?: string;
                                    balance?: number;
                                    currency?: string;
                                    subscriptions?: any[];
                                    tax_ids?: {
                                        country?: string;
                                        customer?: string;
                                        type?: string;
                                        value?: string;
                                        verification?: {
                                            status?: string;
                                            verified_address?: string;
                                            verified_name?: string;
                                        };
                                    }[];
                                    items?: {
                                        id?: string;
                                        quantity?: string;
                                        subscription?: string;
                                        plan?: {
                                            status?: boolean;
                                            nickname?: string;
                                            product?: string;
                                            amount?: number;
                                            usage_type?: string;
                                        };
                                        price?: {
                                            nickname?: string;
                                            product?: string;
                                            active?: boolean;
                                            billing_scheme?: string;
                                            currency?: string;
                                            recurring?: {
                                                interval?: string;
                                                interval_count?: number;
                                                trial_period_days?: number;
                                                usage_type?: string;
                                            };
                                        };
                                    }[];
                                    default_tax_rates?: string[];
                                } & {
                                    address?: string;
                                    balance?: number;
                                    currency?: string;
                                    subscriptions?: any[] & ({
                                        address?: string;
                                        balance?: number;
                                        currency?: string;
                                        subscriptions?: any[];
                                        tax_ids?: {
                                            country?: string;
                                            customer?: string;
                                            type?: string;
                                            value?: string;
                                            verification?: {
                                                status?: string;
                                                verified_address?: string;
                                                verified_name?: string;
                                            };
                                        }[];
                                        items?: {
                                            id?: string;
                                            quantity?: string;
                                            subscription?: string;
                                            plan?: {
                                                status?: boolean;
                                                nickname?: string;
                                                product?: string;
                                                amount?: number;
                                                usage_type?: string;
                                            };
                                            price?: {
                                                nickname?: string;
                                                product?: string;
                                                active?: boolean;
                                                billing_scheme?: string;
                                                currency?: string;
                                                recurring?: {
                                                    interval?: string;
                                                    interval_count?: number;
                                                    trial_period_days?: number;
                                                    usage_type?: string;
                                                };
                                            };
                                        }[];
                                        default_tax_rates?: string[];
                                    } & {
                                        address?: string;
                                        balance?: number;
                                        currency?: string;
                                        subscriptions?: any[] & ({
                                            address?: string;
                                            balance?: number;
                                            currency?: string;
                                            subscriptions?: any[];
                                            tax_ids?: {
                                                country?: string;
                                                customer?: string;
                                                type?: string;
                                                value?: string;
                                                verification?: {
                                                    status?: string;
                                                    verified_address?: string;
                                                    verified_name?: string;
                                                };
                                            }[];
                                            items?: {
                                                id?: string;
                                                quantity?: string;
                                                subscription?: string;
                                                plan?: {
                                                    status?: boolean;
                                                    nickname?: string;
                                                    product?: string;
                                                    amount?: number;
                                                    usage_type?: string;
                                                };
                                                price?: {
                                                    nickname?: string;
                                                    product?: string;
                                                    active?: boolean;
                                                    billing_scheme?: string;
                                                    currency?: string;
                                                    recurring?: {
                                                        interval?: string;
                                                        interval_count?: number;
                                                        trial_period_days?: number;
                                                        usage_type?: string;
                                                    };
                                                };
                                            }[];
                                            default_tax_rates?: string[];
                                        } & {
                                            address?: string;
                                            balance?: number;
                                            currency?: string;
                                            subscriptions?: any[] & ({
                                                address?: string;
                                                balance?: number;
                                                currency?: string;
                                                subscriptions?: any[];
                                                tax_ids?: {
                                                    country?: string;
                                                    customer?: string;
                                                    type?: string;
                                                    value?: string;
                                                    verification?: {
                                                        status?: string;
                                                        verified_address?: string;
                                                        verified_name?: string;
                                                    };
                                                }[];
                                                items?: {
                                                    id?: string;
                                                    quantity?: string;
                                                    subscription?: string;
                                                    plan?: {
                                                        status?: boolean;
                                                        nickname?: string;
                                                        product?: string;
                                                        amount?: number;
                                                        usage_type?: string;
                                                    };
                                                    price?: {
                                                        nickname?: string;
                                                        product?: string;
                                                        active?: boolean;
                                                        billing_scheme?: string;
                                                        currency?: string;
                                                        recurring?: {
                                                            interval?: string;
                                                            interval_count?: number;
                                                            trial_period_days?: number;
                                                            usage_type?: string;
                                                        };
                                                    };
                                                }[];
                                                default_tax_rates?: string[];
                                            } & {
                                                address?: string;
                                                balance?: number;
                                                currency?: string;
                                                subscriptions?: any[] & ({
                                                    address?: string;
                                                    balance?: number;
                                                    currency?: string;
                                                    subscriptions?: any[];
                                                    tax_ids?: {
                                                        country?: string;
                                                        customer?: string;
                                                        type?: string;
                                                        value?: string;
                                                        verification?: {
                                                            status?: string;
                                                            verified_address?: string;
                                                            verified_name?: string;
                                                        };
                                                    }[];
                                                    items?: {
                                                        id?: string;
                                                        quantity?: string;
                                                        subscription?: string;
                                                        plan?: {
                                                            status?: boolean;
                                                            nickname?: string;
                                                            product?: string;
                                                            amount?: number;
                                                            usage_type?: string;
                                                        };
                                                        price?: {
                                                            nickname?: string;
                                                            product?: string;
                                                            active?: boolean;
                                                            billing_scheme?: string;
                                                            currency?: string;
                                                            recurring?: {
                                                                interval?: string;
                                                                interval_count?: number;
                                                                trial_period_days?: number;
                                                                usage_type?: string;
                                                            };
                                                        };
                                                    }[];
                                                    default_tax_rates?: string[];
                                                } & any & { [K_118 in Exclude<keyof I_1["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number], keyof StripeSubscription>]: never; })[] & { [K_119 in Exclude<keyof I_1["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"], keyof any[]>]: never; };
                                                tax_ids?: {
                                                    country?: string;
                                                    customer?: string;
                                                    type?: string;
                                                    value?: string;
                                                    verification?: {
                                                        status?: string;
                                                        verified_address?: string;
                                                        verified_name?: string;
                                                    };
                                                }[] & ({
                                                    country?: string;
                                                    customer?: string;
                                                    type?: string;
                                                    value?: string;
                                                    verification?: {
                                                        status?: string;
                                                        verified_address?: string;
                                                        verified_name?: string;
                                                    };
                                                } & any & { [K_120 in Exclude<keyof I_1["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["tax_ids"][number], keyof StripeTaxId>]: never; })[] & { [K_121 in Exclude<keyof I_1["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["tax_ids"], keyof {
                                                    country?: string;
                                                    customer?: string;
                                                    type?: string;
                                                    value?: string;
                                                    verification?: {
                                                        status?: string;
                                                        verified_address?: string;
                                                        verified_name?: string;
                                                    };
                                                }[]>]: never; };
                                                items?: {
                                                    id?: string;
                                                    quantity?: string;
                                                    subscription?: string;
                                                    plan?: {
                                                        status?: boolean;
                                                        nickname?: string;
                                                        product?: string;
                                                        amount?: number;
                                                        usage_type?: string;
                                                    };
                                                    price?: {
                                                        nickname?: string;
                                                        product?: string;
                                                        active?: boolean;
                                                        billing_scheme?: string;
                                                        currency?: string;
                                                        recurring?: {
                                                            interval?: string;
                                                            interval_count?: number;
                                                            trial_period_days?: number;
                                                            usage_type?: string;
                                                        };
                                                    };
                                                }[] & ({
                                                    id?: string;
                                                    quantity?: string;
                                                    subscription?: string;
                                                    plan?: {
                                                        status?: boolean;
                                                        nickname?: string;
                                                        product?: string;
                                                        amount?: number;
                                                        usage_type?: string;
                                                    };
                                                    price?: {
                                                        nickname?: string;
                                                        product?: string;
                                                        active?: boolean;
                                                        billing_scheme?: string;
                                                        currency?: string;
                                                        recurring?: {
                                                            interval?: string;
                                                            interval_count?: number;
                                                            trial_period_days?: number;
                                                            usage_type?: string;
                                                        };
                                                    };
                                                } & any & { [K_122 in Exclude<keyof I_1["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["items"][number], keyof StripeSubscriptionItem>]: never; })[] & { [K_123 in Exclude<keyof I_1["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["items"], keyof {
                                                    id?: string;
                                                    quantity?: string;
                                                    subscription?: string;
                                                    plan?: {
                                                        status?: boolean;
                                                        nickname?: string;
                                                        product?: string;
                                                        amount?: number;
                                                        usage_type?: string;
                                                    };
                                                    price?: {
                                                        nickname?: string;
                                                        product?: string;
                                                        active?: boolean;
                                                        billing_scheme?: string;
                                                        currency?: string;
                                                        recurring?: {
                                                            interval?: string;
                                                            interval_count?: number;
                                                            trial_period_days?: number;
                                                            usage_type?: string;
                                                        };
                                                    };
                                                }[]>]: never; };
                                                default_tax_rates?: string[] & string[] & { [K_124 in Exclude<keyof I_1["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["default_tax_rates"], keyof string[]>]: never; };
                                            } & { [K_125 in Exclude<keyof I_1["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number], keyof StripeSubscription>]: never; })[] & { [K_126 in Exclude<keyof I_1["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"], keyof any[]>]: never; };
                                            tax_ids?: {
                                                country?: string;
                                                customer?: string;
                                                type?: string;
                                                value?: string;
                                                verification?: {
                                                    status?: string;
                                                    verified_address?: string;
                                                    verified_name?: string;
                                                };
                                            }[] & ({
                                                country?: string;
                                                customer?: string;
                                                type?: string;
                                                value?: string;
                                                verification?: {
                                                    status?: string;
                                                    verified_address?: string;
                                                    verified_name?: string;
                                                };
                                            } & {
                                                country?: string;
                                                customer?: string;
                                                type?: string;
                                                value?: string;
                                                verification?: {
                                                    status?: string;
                                                    verified_address?: string;
                                                    verified_name?: string;
                                                } & any & { [K_127 in Exclude<keyof I_1["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["tax_ids"][number]["verification"], keyof StripeTaxVerification>]: never; };
                                            } & { [K_128 in Exclude<keyof I_1["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["tax_ids"][number], keyof StripeTaxId>]: never; })[] & { [K_129 in Exclude<keyof I_1["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["tax_ids"], keyof {
                                                country?: string;
                                                customer?: string;
                                                type?: string;
                                                value?: string;
                                                verification?: {
                                                    status?: string;
                                                    verified_address?: string;
                                                    verified_name?: string;
                                                };
                                            }[]>]: never; };
                                            items?: {
                                                id?: string;
                                                quantity?: string;
                                                subscription?: string;
                                                plan?: {
                                                    status?: boolean;
                                                    nickname?: string;
                                                    product?: string;
                                                    amount?: number;
                                                    usage_type?: string;
                                                };
                                                price?: {
                                                    nickname?: string;
                                                    product?: string;
                                                    active?: boolean;
                                                    billing_scheme?: string;
                                                    currency?: string;
                                                    recurring?: {
                                                        interval?: string;
                                                        interval_count?: number;
                                                        trial_period_days?: number;
                                                        usage_type?: string;
                                                    };
                                                };
                                            }[] & ({
                                                id?: string;
                                                quantity?: string;
                                                subscription?: string;
                                                plan?: {
                                                    status?: boolean;
                                                    nickname?: string;
                                                    product?: string;
                                                    amount?: number;
                                                    usage_type?: string;
                                                };
                                                price?: {
                                                    nickname?: string;
                                                    product?: string;
                                                    active?: boolean;
                                                    billing_scheme?: string;
                                                    currency?: string;
                                                    recurring?: {
                                                        interval?: string;
                                                        interval_count?: number;
                                                        trial_period_days?: number;
                                                        usage_type?: string;
                                                    };
                                                };
                                            } & {
                                                id?: string;
                                                quantity?: string;
                                                subscription?: string;
                                                plan?: {
                                                    status?: boolean;
                                                    nickname?: string;
                                                    product?: string;
                                                    amount?: number;
                                                    usage_type?: string;
                                                } & any & { [K_130 in Exclude<keyof I_1["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["items"][number]["plan"], keyof StripePlan>]: never; };
                                                price?: {
                                                    nickname?: string;
                                                    product?: string;
                                                    active?: boolean;
                                                    billing_scheme?: string;
                                                    currency?: string;
                                                    recurring?: {
                                                        interval?: string;
                                                        interval_count?: number;
                                                        trial_period_days?: number;
                                                        usage_type?: string;
                                                    };
                                                } & any & { [K_131 in Exclude<keyof I_1["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["items"][number]["price"], keyof StripePrice>]: never; };
                                            } & { [K_132 in Exclude<keyof I_1["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["items"][number], keyof StripeSubscriptionItem>]: never; })[] & { [K_133 in Exclude<keyof I_1["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["items"], keyof {
                                                id?: string;
                                                quantity?: string;
                                                subscription?: string;
                                                plan?: {
                                                    status?: boolean;
                                                    nickname?: string;
                                                    product?: string;
                                                    amount?: number;
                                                    usage_type?: string;
                                                };
                                                price?: {
                                                    nickname?: string;
                                                    product?: string;
                                                    active?: boolean;
                                                    billing_scheme?: string;
                                                    currency?: string;
                                                    recurring?: {
                                                        interval?: string;
                                                        interval_count?: number;
                                                        trial_period_days?: number;
                                                        usage_type?: string;
                                                    };
                                                };
                                            }[]>]: never; };
                                            default_tax_rates?: string[] & string[] & { [K_134 in Exclude<keyof I_1["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["default_tax_rates"], keyof string[]>]: never; };
                                        } & { [K_135 in Exclude<keyof I_1["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number], keyof StripeSubscription>]: never; })[] & { [K_136 in Exclude<keyof I_1["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"], keyof any[]>]: never; };
                                        tax_ids?: {
                                            country?: string;
                                            customer?: string;
                                            type?: string;
                                            value?: string;
                                            verification?: {
                                                status?: string;
                                                verified_address?: string;
                                                verified_name?: string;
                                            };
                                        }[] & ({
                                            country?: string;
                                            customer?: string;
                                            type?: string;
                                            value?: string;
                                            verification?: {
                                                status?: string;
                                                verified_address?: string;
                                                verified_name?: string;
                                            };
                                        } & {
                                            country?: string;
                                            customer?: string;
                                            type?: string;
                                            value?: string;
                                            verification?: {
                                                status?: string;
                                                verified_address?: string;
                                                verified_name?: string;
                                            } & {
                                                status?: string;
                                                verified_address?: string;
                                                verified_name?: string;
                                            } & { [K_137 in Exclude<keyof I_1["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["tax_ids"][number]["verification"], keyof StripeTaxVerification>]: never; };
                                        } & { [K_138 in Exclude<keyof I_1["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["tax_ids"][number], keyof StripeTaxId>]: never; })[] & { [K_139 in Exclude<keyof I_1["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["tax_ids"], keyof {
                                            country?: string;
                                            customer?: string;
                                            type?: string;
                                            value?: string;
                                            verification?: {
                                                status?: string;
                                                verified_address?: string;
                                                verified_name?: string;
                                            };
                                        }[]>]: never; };
                                        items?: {
                                            id?: string;
                                            quantity?: string;
                                            subscription?: string;
                                            plan?: {
                                                status?: boolean;
                                                nickname?: string;
                                                product?: string;
                                                amount?: number;
                                                usage_type?: string;
                                            };
                                            price?: {
                                                nickname?: string;
                                                product?: string;
                                                active?: boolean;
                                                billing_scheme?: string;
                                                currency?: string;
                                                recurring?: {
                                                    interval?: string;
                                                    interval_count?: number;
                                                    trial_period_days?: number;
                                                    usage_type?: string;
                                                };
                                            };
                                        }[] & ({
                                            id?: string;
                                            quantity?: string;
                                            subscription?: string;
                                            plan?: {
                                                status?: boolean;
                                                nickname?: string;
                                                product?: string;
                                                amount?: number;
                                                usage_type?: string;
                                            };
                                            price?: {
                                                nickname?: string;
                                                product?: string;
                                                active?: boolean;
                                                billing_scheme?: string;
                                                currency?: string;
                                                recurring?: {
                                                    interval?: string;
                                                    interval_count?: number;
                                                    trial_period_days?: number;
                                                    usage_type?: string;
                                                };
                                            };
                                        } & {
                                            id?: string;
                                            quantity?: string;
                                            subscription?: string;
                                            plan?: {
                                                status?: boolean;
                                                nickname?: string;
                                                product?: string;
                                                amount?: number;
                                                usage_type?: string;
                                            } & {
                                                status?: boolean;
                                                nickname?: string;
                                                product?: string;
                                                amount?: number;
                                                usage_type?: string;
                                            } & { [K_140 in Exclude<keyof I_1["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["items"][number]["plan"], keyof StripePlan>]: never; };
                                            price?: {
                                                nickname?: string;
                                                product?: string;
                                                active?: boolean;
                                                billing_scheme?: string;
                                                currency?: string;
                                                recurring?: {
                                                    interval?: string;
                                                    interval_count?: number;
                                                    trial_period_days?: number;
                                                    usage_type?: string;
                                                };
                                            } & {
                                                nickname?: string;
                                                product?: string;
                                                active?: boolean;
                                                billing_scheme?: string;
                                                currency?: string;
                                                recurring?: {
                                                    interval?: string;
                                                    interval_count?: number;
                                                    trial_period_days?: number;
                                                    usage_type?: string;
                                                } & any & { [K_141 in Exclude<keyof I_1["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["items"][number]["price"]["recurring"], keyof StripeRecurring>]: never; };
                                            } & { [K_142 in Exclude<keyof I_1["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["items"][number]["price"], keyof StripePrice>]: never; };
                                        } & { [K_143 in Exclude<keyof I_1["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["items"][number], keyof StripeSubscriptionItem>]: never; })[] & { [K_144 in Exclude<keyof I_1["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["items"], keyof {
                                            id?: string;
                                            quantity?: string;
                                            subscription?: string;
                                            plan?: {
                                                status?: boolean;
                                                nickname?: string;
                                                product?: string;
                                                amount?: number;
                                                usage_type?: string;
                                            };
                                            price?: {
                                                nickname?: string;
                                                product?: string;
                                                active?: boolean;
                                                billing_scheme?: string;
                                                currency?: string;
                                                recurring?: {
                                                    interval?: string;
                                                    interval_count?: number;
                                                    trial_period_days?: number;
                                                    usage_type?: string;
                                                };
                                            };
                                        }[]>]: never; };
                                        default_tax_rates?: string[] & string[] & { [K_145 in Exclude<keyof I_1["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["default_tax_rates"], keyof string[]>]: never; };
                                    } & { [K_146 in Exclude<keyof I_1["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number], keyof StripeSubscription>]: never; })[] & { [K_147 in Exclude<keyof I_1["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"], keyof any[]>]: never; };
                                    tax_ids?: {
                                        country?: string;
                                        customer?: string;
                                        type?: string;
                                        value?: string;
                                        verification?: {
                                            status?: string;
                                            verified_address?: string;
                                            verified_name?: string;
                                        };
                                    }[] & ({
                                        country?: string;
                                        customer?: string;
                                        type?: string;
                                        value?: string;
                                        verification?: {
                                            status?: string;
                                            verified_address?: string;
                                            verified_name?: string;
                                        };
                                    } & {
                                        country?: string;
                                        customer?: string;
                                        type?: string;
                                        value?: string;
                                        verification?: {
                                            status?: string;
                                            verified_address?: string;
                                            verified_name?: string;
                                        } & {
                                            status?: string;
                                            verified_address?: string;
                                            verified_name?: string;
                                        } & { [K_148 in Exclude<keyof I_1["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["tax_ids"][number]["verification"], keyof StripeTaxVerification>]: never; };
                                    } & { [K_149 in Exclude<keyof I_1["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["tax_ids"][number], keyof StripeTaxId>]: never; })[] & { [K_150 in Exclude<keyof I_1["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["tax_ids"], keyof {
                                        country?: string;
                                        customer?: string;
                                        type?: string;
                                        value?: string;
                                        verification?: {
                                            status?: string;
                                            verified_address?: string;
                                            verified_name?: string;
                                        };
                                    }[]>]: never; };
                                    items?: {
                                        id?: string;
                                        quantity?: string;
                                        subscription?: string;
                                        plan?: {
                                            status?: boolean;
                                            nickname?: string;
                                            product?: string;
                                            amount?: number;
                                            usage_type?: string;
                                        };
                                        price?: {
                                            nickname?: string;
                                            product?: string;
                                            active?: boolean;
                                            billing_scheme?: string;
                                            currency?: string;
                                            recurring?: {
                                                interval?: string;
                                                interval_count?: number;
                                                trial_period_days?: number;
                                                usage_type?: string;
                                            };
                                        };
                                    }[] & ({
                                        id?: string;
                                        quantity?: string;
                                        subscription?: string;
                                        plan?: {
                                            status?: boolean;
                                            nickname?: string;
                                            product?: string;
                                            amount?: number;
                                            usage_type?: string;
                                        };
                                        price?: {
                                            nickname?: string;
                                            product?: string;
                                            active?: boolean;
                                            billing_scheme?: string;
                                            currency?: string;
                                            recurring?: {
                                                interval?: string;
                                                interval_count?: number;
                                                trial_period_days?: number;
                                                usage_type?: string;
                                            };
                                        };
                                    } & {
                                        id?: string;
                                        quantity?: string;
                                        subscription?: string;
                                        plan?: {
                                            status?: boolean;
                                            nickname?: string;
                                            product?: string;
                                            amount?: number;
                                            usage_type?: string;
                                        } & {
                                            status?: boolean;
                                            nickname?: string;
                                            product?: string;
                                            amount?: number;
                                            usage_type?: string;
                                        } & { [K_151 in Exclude<keyof I_1["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["items"][number]["plan"], keyof StripePlan>]: never; };
                                        price?: {
                                            nickname?: string;
                                            product?: string;
                                            active?: boolean;
                                            billing_scheme?: string;
                                            currency?: string;
                                            recurring?: {
                                                interval?: string;
                                                interval_count?: number;
                                                trial_period_days?: number;
                                                usage_type?: string;
                                            };
                                        } & {
                                            nickname?: string;
                                            product?: string;
                                            active?: boolean;
                                            billing_scheme?: string;
                                            currency?: string;
                                            recurring?: {
                                                interval?: string;
                                                interval_count?: number;
                                                trial_period_days?: number;
                                                usage_type?: string;
                                            } & {
                                                interval?: string;
                                                interval_count?: number;
                                                trial_period_days?: number;
                                                usage_type?: string;
                                            } & { [K_152 in Exclude<keyof I_1["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["items"][number]["price"]["recurring"], keyof StripeRecurring>]: never; };
                                        } & { [K_153 in Exclude<keyof I_1["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["items"][number]["price"], keyof StripePrice>]: never; };
                                    } & { [K_154 in Exclude<keyof I_1["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["items"][number], keyof StripeSubscriptionItem>]: never; })[] & { [K_155 in Exclude<keyof I_1["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["items"], keyof {
                                        id?: string;
                                        quantity?: string;
                                        subscription?: string;
                                        plan?: {
                                            status?: boolean;
                                            nickname?: string;
                                            product?: string;
                                            amount?: number;
                                            usage_type?: string;
                                        };
                                        price?: {
                                            nickname?: string;
                                            product?: string;
                                            active?: boolean;
                                            billing_scheme?: string;
                                            currency?: string;
                                            recurring?: {
                                                interval?: string;
                                                interval_count?: number;
                                                trial_period_days?: number;
                                                usage_type?: string;
                                            };
                                        };
                                    }[]>]: never; };
                                    default_tax_rates?: string[] & string[] & { [K_156 in Exclude<keyof I_1["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["default_tax_rates"], keyof string[]>]: never; };
                                } & { [K_157 in Exclude<keyof I_1["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number], keyof StripeSubscription>]: never; })[] & { [K_158 in Exclude<keyof I_1["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"], keyof any[]>]: never; };
                                tax_ids?: {
                                    country?: string;
                                    customer?: string;
                                    type?: string;
                                    value?: string;
                                    verification?: {
                                        status?: string;
                                        verified_address?: string;
                                        verified_name?: string;
                                    };
                                }[] & ({
                                    country?: string;
                                    customer?: string;
                                    type?: string;
                                    value?: string;
                                    verification?: {
                                        status?: string;
                                        verified_address?: string;
                                        verified_name?: string;
                                    };
                                } & {
                                    country?: string;
                                    customer?: string;
                                    type?: string;
                                    value?: string;
                                    verification?: {
                                        status?: string;
                                        verified_address?: string;
                                        verified_name?: string;
                                    } & {
                                        status?: string;
                                        verified_address?: string;
                                        verified_name?: string;
                                    } & { [K_159 in Exclude<keyof I_1["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["tax_ids"][number]["verification"], keyof StripeTaxVerification>]: never; };
                                } & { [K_160 in Exclude<keyof I_1["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["tax_ids"][number], keyof StripeTaxId>]: never; })[] & { [K_161 in Exclude<keyof I_1["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["tax_ids"], keyof {
                                    country?: string;
                                    customer?: string;
                                    type?: string;
                                    value?: string;
                                    verification?: {
                                        status?: string;
                                        verified_address?: string;
                                        verified_name?: string;
                                    };
                                }[]>]: never; };
                                items?: {
                                    id?: string;
                                    quantity?: string;
                                    subscription?: string;
                                    plan?: {
                                        status?: boolean;
                                        nickname?: string;
                                        product?: string;
                                        amount?: number;
                                        usage_type?: string;
                                    };
                                    price?: {
                                        nickname?: string;
                                        product?: string;
                                        active?: boolean;
                                        billing_scheme?: string;
                                        currency?: string;
                                        recurring?: {
                                            interval?: string;
                                            interval_count?: number;
                                            trial_period_days?: number;
                                            usage_type?: string;
                                        };
                                    };
                                }[] & ({
                                    id?: string;
                                    quantity?: string;
                                    subscription?: string;
                                    plan?: {
                                        status?: boolean;
                                        nickname?: string;
                                        product?: string;
                                        amount?: number;
                                        usage_type?: string;
                                    };
                                    price?: {
                                        nickname?: string;
                                        product?: string;
                                        active?: boolean;
                                        billing_scheme?: string;
                                        currency?: string;
                                        recurring?: {
                                            interval?: string;
                                            interval_count?: number;
                                            trial_period_days?: number;
                                            usage_type?: string;
                                        };
                                    };
                                } & {
                                    id?: string;
                                    quantity?: string;
                                    subscription?: string;
                                    plan?: {
                                        status?: boolean;
                                        nickname?: string;
                                        product?: string;
                                        amount?: number;
                                        usage_type?: string;
                                    } & {
                                        status?: boolean;
                                        nickname?: string;
                                        product?: string;
                                        amount?: number;
                                        usage_type?: string;
                                    } & { [K_162 in Exclude<keyof I_1["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["items"][number]["plan"], keyof StripePlan>]: never; };
                                    price?: {
                                        nickname?: string;
                                        product?: string;
                                        active?: boolean;
                                        billing_scheme?: string;
                                        currency?: string;
                                        recurring?: {
                                            interval?: string;
                                            interval_count?: number;
                                            trial_period_days?: number;
                                            usage_type?: string;
                                        };
                                    } & {
                                        nickname?: string;
                                        product?: string;
                                        active?: boolean;
                                        billing_scheme?: string;
                                        currency?: string;
                                        recurring?: {
                                            interval?: string;
                                            interval_count?: number;
                                            trial_period_days?: number;
                                            usage_type?: string;
                                        } & {
                                            interval?: string;
                                            interval_count?: number;
                                            trial_period_days?: number;
                                            usage_type?: string;
                                        } & { [K_163 in Exclude<keyof I_1["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["items"][number]["price"]["recurring"], keyof StripeRecurring>]: never; };
                                    } & { [K_164 in Exclude<keyof I_1["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["items"][number]["price"], keyof StripePrice>]: never; };
                                } & { [K_165 in Exclude<keyof I_1["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["items"][number], keyof StripeSubscriptionItem>]: never; })[] & { [K_166 in Exclude<keyof I_1["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["items"], keyof {
                                    id?: string;
                                    quantity?: string;
                                    subscription?: string;
                                    plan?: {
                                        status?: boolean;
                                        nickname?: string;
                                        product?: string;
                                        amount?: number;
                                        usage_type?: string;
                                    };
                                    price?: {
                                        nickname?: string;
                                        product?: string;
                                        active?: boolean;
                                        billing_scheme?: string;
                                        currency?: string;
                                        recurring?: {
                                            interval?: string;
                                            interval_count?: number;
                                            trial_period_days?: number;
                                            usage_type?: string;
                                        };
                                    };
                                }[]>]: never; };
                                default_tax_rates?: string[] & string[] & { [K_167 in Exclude<keyof I_1["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["default_tax_rates"], keyof string[]>]: never; };
                            } & { [K_168 in Exclude<keyof I_1["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number], keyof StripeSubscription>]: never; })[] & { [K_169 in Exclude<keyof I_1["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"], keyof any[]>]: never; };
                            tax_ids?: {
                                country?: string;
                                customer?: string;
                                type?: string;
                                value?: string;
                                verification?: {
                                    status?: string;
                                    verified_address?: string;
                                    verified_name?: string;
                                };
                            }[] & ({
                                country?: string;
                                customer?: string;
                                type?: string;
                                value?: string;
                                verification?: {
                                    status?: string;
                                    verified_address?: string;
                                    verified_name?: string;
                                };
                            } & {
                                country?: string;
                                customer?: string;
                                type?: string;
                                value?: string;
                                verification?: {
                                    status?: string;
                                    verified_address?: string;
                                    verified_name?: string;
                                } & {
                                    status?: string;
                                    verified_address?: string;
                                    verified_name?: string;
                                } & { [K_170 in Exclude<keyof I_1["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["tax_ids"][number]["verification"], keyof StripeTaxVerification>]: never; };
                            } & { [K_171 in Exclude<keyof I_1["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["tax_ids"][number], keyof StripeTaxId>]: never; })[] & { [K_172 in Exclude<keyof I_1["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["tax_ids"], keyof {
                                country?: string;
                                customer?: string;
                                type?: string;
                                value?: string;
                                verification?: {
                                    status?: string;
                                    verified_address?: string;
                                    verified_name?: string;
                                };
                            }[]>]: never; };
                            items?: {
                                id?: string;
                                quantity?: string;
                                subscription?: string;
                                plan?: {
                                    status?: boolean;
                                    nickname?: string;
                                    product?: string;
                                    amount?: number;
                                    usage_type?: string;
                                };
                                price?: {
                                    nickname?: string;
                                    product?: string;
                                    active?: boolean;
                                    billing_scheme?: string;
                                    currency?: string;
                                    recurring?: {
                                        interval?: string;
                                        interval_count?: number;
                                        trial_period_days?: number;
                                        usage_type?: string;
                                    };
                                };
                            }[] & ({
                                id?: string;
                                quantity?: string;
                                subscription?: string;
                                plan?: {
                                    status?: boolean;
                                    nickname?: string;
                                    product?: string;
                                    amount?: number;
                                    usage_type?: string;
                                };
                                price?: {
                                    nickname?: string;
                                    product?: string;
                                    active?: boolean;
                                    billing_scheme?: string;
                                    currency?: string;
                                    recurring?: {
                                        interval?: string;
                                        interval_count?: number;
                                        trial_period_days?: number;
                                        usage_type?: string;
                                    };
                                };
                            } & {
                                id?: string;
                                quantity?: string;
                                subscription?: string;
                                plan?: {
                                    status?: boolean;
                                    nickname?: string;
                                    product?: string;
                                    amount?: number;
                                    usage_type?: string;
                                } & {
                                    status?: boolean;
                                    nickname?: string;
                                    product?: string;
                                    amount?: number;
                                    usage_type?: string;
                                } & { [K_173 in Exclude<keyof I_1["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["items"][number]["plan"], keyof StripePlan>]: never; };
                                price?: {
                                    nickname?: string;
                                    product?: string;
                                    active?: boolean;
                                    billing_scheme?: string;
                                    currency?: string;
                                    recurring?: {
                                        interval?: string;
                                        interval_count?: number;
                                        trial_period_days?: number;
                                        usage_type?: string;
                                    };
                                } & {
                                    nickname?: string;
                                    product?: string;
                                    active?: boolean;
                                    billing_scheme?: string;
                                    currency?: string;
                                    recurring?: {
                                        interval?: string;
                                        interval_count?: number;
                                        trial_period_days?: number;
                                        usage_type?: string;
                                    } & {
                                        interval?: string;
                                        interval_count?: number;
                                        trial_period_days?: number;
                                        usage_type?: string;
                                    } & { [K_174 in Exclude<keyof I_1["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["items"][number]["price"]["recurring"], keyof StripeRecurring>]: never; };
                                } & { [K_175 in Exclude<keyof I_1["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["items"][number]["price"], keyof StripePrice>]: never; };
                            } & { [K_176 in Exclude<keyof I_1["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["items"][number], keyof StripeSubscriptionItem>]: never; })[] & { [K_177 in Exclude<keyof I_1["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["items"], keyof {
                                id?: string;
                                quantity?: string;
                                subscription?: string;
                                plan?: {
                                    status?: boolean;
                                    nickname?: string;
                                    product?: string;
                                    amount?: number;
                                    usage_type?: string;
                                };
                                price?: {
                                    nickname?: string;
                                    product?: string;
                                    active?: boolean;
                                    billing_scheme?: string;
                                    currency?: string;
                                    recurring?: {
                                        interval?: string;
                                        interval_count?: number;
                                        trial_period_days?: number;
                                        usage_type?: string;
                                    };
                                };
                            }[]>]: never; };
                            default_tax_rates?: string[] & string[] & { [K_178 in Exclude<keyof I_1["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["default_tax_rates"], keyof string[]>]: never; };
                        } & { [K_179 in Exclude<keyof I_1["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number], keyof StripeSubscription>]: never; })[] & { [K_180 in Exclude<keyof I_1["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"], keyof any[]>]: never; };
                        tax_ids?: {
                            country?: string;
                            customer?: string;
                            type?: string;
                            value?: string;
                            verification?: {
                                status?: string;
                                verified_address?: string;
                                verified_name?: string;
                            };
                        }[] & ({
                            country?: string;
                            customer?: string;
                            type?: string;
                            value?: string;
                            verification?: {
                                status?: string;
                                verified_address?: string;
                                verified_name?: string;
                            };
                        } & {
                            country?: string;
                            customer?: string;
                            type?: string;
                            value?: string;
                            verification?: {
                                status?: string;
                                verified_address?: string;
                                verified_name?: string;
                            } & {
                                status?: string;
                                verified_address?: string;
                                verified_name?: string;
                            } & { [K_181 in Exclude<keyof I_1["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["tax_ids"][number]["verification"], keyof StripeTaxVerification>]: never; };
                        } & { [K_182 in Exclude<keyof I_1["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["tax_ids"][number], keyof StripeTaxId>]: never; })[] & { [K_183 in Exclude<keyof I_1["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["tax_ids"], keyof {
                            country?: string;
                            customer?: string;
                            type?: string;
                            value?: string;
                            verification?: {
                                status?: string;
                                verified_address?: string;
                                verified_name?: string;
                            };
                        }[]>]: never; };
                        items?: {
                            id?: string;
                            quantity?: string;
                            subscription?: string;
                            plan?: {
                                status?: boolean;
                                nickname?: string;
                                product?: string;
                                amount?: number;
                                usage_type?: string;
                            };
                            price?: {
                                nickname?: string;
                                product?: string;
                                active?: boolean;
                                billing_scheme?: string;
                                currency?: string;
                                recurring?: {
                                    interval?: string;
                                    interval_count?: number;
                                    trial_period_days?: number;
                                    usage_type?: string;
                                };
                            };
                        }[] & ({
                            id?: string;
                            quantity?: string;
                            subscription?: string;
                            plan?: {
                                status?: boolean;
                                nickname?: string;
                                product?: string;
                                amount?: number;
                                usage_type?: string;
                            };
                            price?: {
                                nickname?: string;
                                product?: string;
                                active?: boolean;
                                billing_scheme?: string;
                                currency?: string;
                                recurring?: {
                                    interval?: string;
                                    interval_count?: number;
                                    trial_period_days?: number;
                                    usage_type?: string;
                                };
                            };
                        } & {
                            id?: string;
                            quantity?: string;
                            subscription?: string;
                            plan?: {
                                status?: boolean;
                                nickname?: string;
                                product?: string;
                                amount?: number;
                                usage_type?: string;
                            } & {
                                status?: boolean;
                                nickname?: string;
                                product?: string;
                                amount?: number;
                                usage_type?: string;
                            } & { [K_184 in Exclude<keyof I_1["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["items"][number]["plan"], keyof StripePlan>]: never; };
                            price?: {
                                nickname?: string;
                                product?: string;
                                active?: boolean;
                                billing_scheme?: string;
                                currency?: string;
                                recurring?: {
                                    interval?: string;
                                    interval_count?: number;
                                    trial_period_days?: number;
                                    usage_type?: string;
                                };
                            } & {
                                nickname?: string;
                                product?: string;
                                active?: boolean;
                                billing_scheme?: string;
                                currency?: string;
                                recurring?: {
                                    interval?: string;
                                    interval_count?: number;
                                    trial_period_days?: number;
                                    usage_type?: string;
                                } & {
                                    interval?: string;
                                    interval_count?: number;
                                    trial_period_days?: number;
                                    usage_type?: string;
                                } & { [K_185 in Exclude<keyof I_1["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["items"][number]["price"]["recurring"], keyof StripeRecurring>]: never; };
                            } & { [K_186 in Exclude<keyof I_1["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["items"][number]["price"], keyof StripePrice>]: never; };
                        } & { [K_187 in Exclude<keyof I_1["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["items"][number], keyof StripeSubscriptionItem>]: never; })[] & { [K_188 in Exclude<keyof I_1["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["items"], keyof {
                            id?: string;
                            quantity?: string;
                            subscription?: string;
                            plan?: {
                                status?: boolean;
                                nickname?: string;
                                product?: string;
                                amount?: number;
                                usage_type?: string;
                            };
                            price?: {
                                nickname?: string;
                                product?: string;
                                active?: boolean;
                                billing_scheme?: string;
                                currency?: string;
                                recurring?: {
                                    interval?: string;
                                    interval_count?: number;
                                    trial_period_days?: number;
                                    usage_type?: string;
                                };
                            };
                        }[]>]: never; };
                        default_tax_rates?: string[] & string[] & { [K_189 in Exclude<keyof I_1["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["default_tax_rates"], keyof string[]>]: never; };
                    } & { [K_190 in Exclude<keyof I_1["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"][number], keyof StripeSubscription>]: never; })[] & { [K_191 in Exclude<keyof I_1["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["subscriptions"], keyof any[]>]: never; };
                    tax_ids?: {
                        country?: string;
                        customer?: string;
                        type?: string;
                        value?: string;
                        verification?: {
                            status?: string;
                            verified_address?: string;
                            verified_name?: string;
                        };
                    }[] & ({
                        country?: string;
                        customer?: string;
                        type?: string;
                        value?: string;
                        verification?: {
                            status?: string;
                            verified_address?: string;
                            verified_name?: string;
                        };
                    } & {
                        country?: string;
                        customer?: string;
                        type?: string;
                        value?: string;
                        verification?: {
                            status?: string;
                            verified_address?: string;
                            verified_name?: string;
                        } & {
                            status?: string;
                            verified_address?: string;
                            verified_name?: string;
                        } & { [K_192 in Exclude<keyof I_1["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["tax_ids"][number]["verification"], keyof StripeTaxVerification>]: never; };
                    } & { [K_193 in Exclude<keyof I_1["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["tax_ids"][number], keyof StripeTaxId>]: never; })[] & { [K_194 in Exclude<keyof I_1["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["tax_ids"], keyof {
                        country?: string;
                        customer?: string;
                        type?: string;
                        value?: string;
                        verification?: {
                            status?: string;
                            verified_address?: string;
                            verified_name?: string;
                        };
                    }[]>]: never; };
                    items?: {
                        id?: string;
                        quantity?: string;
                        subscription?: string;
                        plan?: {
                            status?: boolean;
                            nickname?: string;
                            product?: string;
                            amount?: number;
                            usage_type?: string;
                        };
                        price?: {
                            nickname?: string;
                            product?: string;
                            active?: boolean;
                            billing_scheme?: string;
                            currency?: string;
                            recurring?: {
                                interval?: string;
                                interval_count?: number;
                                trial_period_days?: number;
                                usage_type?: string;
                            };
                        };
                    }[] & ({
                        id?: string;
                        quantity?: string;
                        subscription?: string;
                        plan?: {
                            status?: boolean;
                            nickname?: string;
                            product?: string;
                            amount?: number;
                            usage_type?: string;
                        };
                        price?: {
                            nickname?: string;
                            product?: string;
                            active?: boolean;
                            billing_scheme?: string;
                            currency?: string;
                            recurring?: {
                                interval?: string;
                                interval_count?: number;
                                trial_period_days?: number;
                                usage_type?: string;
                            };
                        };
                    } & {
                        id?: string;
                        quantity?: string;
                        subscription?: string;
                        plan?: {
                            status?: boolean;
                            nickname?: string;
                            product?: string;
                            amount?: number;
                            usage_type?: string;
                        } & {
                            status?: boolean;
                            nickname?: string;
                            product?: string;
                            amount?: number;
                            usage_type?: string;
                        } & { [K_195 in Exclude<keyof I_1["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["items"][number]["plan"], keyof StripePlan>]: never; };
                        price?: {
                            nickname?: string;
                            product?: string;
                            active?: boolean;
                            billing_scheme?: string;
                            currency?: string;
                            recurring?: {
                                interval?: string;
                                interval_count?: number;
                                trial_period_days?: number;
                                usage_type?: string;
                            };
                        } & {
                            nickname?: string;
                            product?: string;
                            active?: boolean;
                            billing_scheme?: string;
                            currency?: string;
                            recurring?: {
                                interval?: string;
                                interval_count?: number;
                                trial_period_days?: number;
                                usage_type?: string;
                            } & {
                                interval?: string;
                                interval_count?: number;
                                trial_period_days?: number;
                                usage_type?: string;
                            } & { [K_196 in Exclude<keyof I_1["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["items"][number]["price"]["recurring"], keyof StripeRecurring>]: never; };
                        } & { [K_197 in Exclude<keyof I_1["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["items"][number]["price"], keyof StripePrice>]: never; };
                    } & { [K_198 in Exclude<keyof I_1["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["items"][number], keyof StripeSubscriptionItem>]: never; })[] & { [K_199 in Exclude<keyof I_1["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["items"], keyof {
                        id?: string;
                        quantity?: string;
                        subscription?: string;
                        plan?: {
                            status?: boolean;
                            nickname?: string;
                            product?: string;
                            amount?: number;
                            usage_type?: string;
                        };
                        price?: {
                            nickname?: string;
                            product?: string;
                            active?: boolean;
                            billing_scheme?: string;
                            currency?: string;
                            recurring?: {
                                interval?: string;
                                interval_count?: number;
                                trial_period_days?: number;
                                usage_type?: string;
                            };
                        };
                    }[]>]: never; };
                    default_tax_rates?: string[] & string[] & { [K_200 in Exclude<keyof I_1["subscriptions"][number]["subscriptions"][number]["subscriptions"][number]["default_tax_rates"], keyof string[]>]: never; };
                } & { [K_201 in Exclude<keyof I_1["subscriptions"][number]["subscriptions"][number]["subscriptions"][number], keyof StripeSubscription>]: never; })[] & { [K_202 in Exclude<keyof I_1["subscriptions"][number]["subscriptions"][number]["subscriptions"], keyof any[]>]: never; };
                tax_ids?: {
                    country?: string;
                    customer?: string;
                    type?: string;
                    value?: string;
                    verification?: {
                        status?: string;
                        verified_address?: string;
                        verified_name?: string;
                    };
                }[] & ({
                    country?: string;
                    customer?: string;
                    type?: string;
                    value?: string;
                    verification?: {
                        status?: string;
                        verified_address?: string;
                        verified_name?: string;
                    };
                } & {
                    country?: string;
                    customer?: string;
                    type?: string;
                    value?: string;
                    verification?: {
                        status?: string;
                        verified_address?: string;
                        verified_name?: string;
                    } & {
                        status?: string;
                        verified_address?: string;
                        verified_name?: string;
                    } & { [K_203 in Exclude<keyof I_1["subscriptions"][number]["subscriptions"][number]["tax_ids"][number]["verification"], keyof StripeTaxVerification>]: never; };
                } & { [K_204 in Exclude<keyof I_1["subscriptions"][number]["subscriptions"][number]["tax_ids"][number], keyof StripeTaxId>]: never; })[] & { [K_205 in Exclude<keyof I_1["subscriptions"][number]["subscriptions"][number]["tax_ids"], keyof {
                    country?: string;
                    customer?: string;
                    type?: string;
                    value?: string;
                    verification?: {
                        status?: string;
                        verified_address?: string;
                        verified_name?: string;
                    };
                }[]>]: never; };
                items?: {
                    id?: string;
                    quantity?: string;
                    subscription?: string;
                    plan?: {
                        status?: boolean;
                        nickname?: string;
                        product?: string;
                        amount?: number;
                        usage_type?: string;
                    };
                    price?: {
                        nickname?: string;
                        product?: string;
                        active?: boolean;
                        billing_scheme?: string;
                        currency?: string;
                        recurring?: {
                            interval?: string;
                            interval_count?: number;
                            trial_period_days?: number;
                            usage_type?: string;
                        };
                    };
                }[] & ({
                    id?: string;
                    quantity?: string;
                    subscription?: string;
                    plan?: {
                        status?: boolean;
                        nickname?: string;
                        product?: string;
                        amount?: number;
                        usage_type?: string;
                    };
                    price?: {
                        nickname?: string;
                        product?: string;
                        active?: boolean;
                        billing_scheme?: string;
                        currency?: string;
                        recurring?: {
                            interval?: string;
                            interval_count?: number;
                            trial_period_days?: number;
                            usage_type?: string;
                        };
                    };
                } & {
                    id?: string;
                    quantity?: string;
                    subscription?: string;
                    plan?: {
                        status?: boolean;
                        nickname?: string;
                        product?: string;
                        amount?: number;
                        usage_type?: string;
                    } & {
                        status?: boolean;
                        nickname?: string;
                        product?: string;
                        amount?: number;
                        usage_type?: string;
                    } & { [K_206 in Exclude<keyof I_1["subscriptions"][number]["subscriptions"][number]["items"][number]["plan"], keyof StripePlan>]: never; };
                    price?: {
                        nickname?: string;
                        product?: string;
                        active?: boolean;
                        billing_scheme?: string;
                        currency?: string;
                        recurring?: {
                            interval?: string;
                            interval_count?: number;
                            trial_period_days?: number;
                            usage_type?: string;
                        };
                    } & {
                        nickname?: string;
                        product?: string;
                        active?: boolean;
                        billing_scheme?: string;
                        currency?: string;
                        recurring?: {
                            interval?: string;
                            interval_count?: number;
                            trial_period_days?: number;
                            usage_type?: string;
                        } & {
                            interval?: string;
                            interval_count?: number;
                            trial_period_days?: number;
                            usage_type?: string;
                        } & { [K_207 in Exclude<keyof I_1["subscriptions"][number]["subscriptions"][number]["items"][number]["price"]["recurring"], keyof StripeRecurring>]: never; };
                    } & { [K_208 in Exclude<keyof I_1["subscriptions"][number]["subscriptions"][number]["items"][number]["price"], keyof StripePrice>]: never; };
                } & { [K_209 in Exclude<keyof I_1["subscriptions"][number]["subscriptions"][number]["items"][number], keyof StripeSubscriptionItem>]: never; })[] & { [K_210 in Exclude<keyof I_1["subscriptions"][number]["subscriptions"][number]["items"], keyof {
                    id?: string;
                    quantity?: string;
                    subscription?: string;
                    plan?: {
                        status?: boolean;
                        nickname?: string;
                        product?: string;
                        amount?: number;
                        usage_type?: string;
                    };
                    price?: {
                        nickname?: string;
                        product?: string;
                        active?: boolean;
                        billing_scheme?: string;
                        currency?: string;
                        recurring?: {
                            interval?: string;
                            interval_count?: number;
                            trial_period_days?: number;
                            usage_type?: string;
                        };
                    };
                }[]>]: never; };
                default_tax_rates?: string[] & string[] & { [K_211 in Exclude<keyof I_1["subscriptions"][number]["subscriptions"][number]["default_tax_rates"], keyof string[]>]: never; };
            } & { [K_212 in Exclude<keyof I_1["subscriptions"][number]["subscriptions"][number], keyof StripeSubscription>]: never; })[] & { [K_213 in Exclude<keyof I_1["subscriptions"][number]["subscriptions"], keyof any[]>]: never; };
            tax_ids?: {
                country?: string;
                customer?: string;
                type?: string;
                value?: string;
                verification?: {
                    status?: string;
                    verified_address?: string;
                    verified_name?: string;
                };
            }[] & ({
                country?: string;
                customer?: string;
                type?: string;
                value?: string;
                verification?: {
                    status?: string;
                    verified_address?: string;
                    verified_name?: string;
                };
            } & {
                country?: string;
                customer?: string;
                type?: string;
                value?: string;
                verification?: {
                    status?: string;
                    verified_address?: string;
                    verified_name?: string;
                } & {
                    status?: string;
                    verified_address?: string;
                    verified_name?: string;
                } & { [K_214 in Exclude<keyof I_1["subscriptions"][number]["tax_ids"][number]["verification"], keyof StripeTaxVerification>]: never; };
            } & { [K_215 in Exclude<keyof I_1["subscriptions"][number]["tax_ids"][number], keyof StripeTaxId>]: never; })[] & { [K_216 in Exclude<keyof I_1["subscriptions"][number]["tax_ids"], keyof {
                country?: string;
                customer?: string;
                type?: string;
                value?: string;
                verification?: {
                    status?: string;
                    verified_address?: string;
                    verified_name?: string;
                };
            }[]>]: never; };
            items?: {
                id?: string;
                quantity?: string;
                subscription?: string;
                plan?: {
                    status?: boolean;
                    nickname?: string;
                    product?: string;
                    amount?: number;
                    usage_type?: string;
                };
                price?: {
                    nickname?: string;
                    product?: string;
                    active?: boolean;
                    billing_scheme?: string;
                    currency?: string;
                    recurring?: {
                        interval?: string;
                        interval_count?: number;
                        trial_period_days?: number;
                        usage_type?: string;
                    };
                };
            }[] & ({
                id?: string;
                quantity?: string;
                subscription?: string;
                plan?: {
                    status?: boolean;
                    nickname?: string;
                    product?: string;
                    amount?: number;
                    usage_type?: string;
                };
                price?: {
                    nickname?: string;
                    product?: string;
                    active?: boolean;
                    billing_scheme?: string;
                    currency?: string;
                    recurring?: {
                        interval?: string;
                        interval_count?: number;
                        trial_period_days?: number;
                        usage_type?: string;
                    };
                };
            } & {
                id?: string;
                quantity?: string;
                subscription?: string;
                plan?: {
                    status?: boolean;
                    nickname?: string;
                    product?: string;
                    amount?: number;
                    usage_type?: string;
                } & {
                    status?: boolean;
                    nickname?: string;
                    product?: string;
                    amount?: number;
                    usage_type?: string;
                } & { [K_217 in Exclude<keyof I_1["subscriptions"][number]["items"][number]["plan"], keyof StripePlan>]: never; };
                price?: {
                    nickname?: string;
                    product?: string;
                    active?: boolean;
                    billing_scheme?: string;
                    currency?: string;
                    recurring?: {
                        interval?: string;
                        interval_count?: number;
                        trial_period_days?: number;
                        usage_type?: string;
                    };
                } & {
                    nickname?: string;
                    product?: string;
                    active?: boolean;
                    billing_scheme?: string;
                    currency?: string;
                    recurring?: {
                        interval?: string;
                        interval_count?: number;
                        trial_period_days?: number;
                        usage_type?: string;
                    } & {
                        interval?: string;
                        interval_count?: number;
                        trial_period_days?: number;
                        usage_type?: string;
                    } & { [K_218 in Exclude<keyof I_1["subscriptions"][number]["items"][number]["price"]["recurring"], keyof StripeRecurring>]: never; };
                } & { [K_219 in Exclude<keyof I_1["subscriptions"][number]["items"][number]["price"], keyof StripePrice>]: never; };
            } & { [K_220 in Exclude<keyof I_1["subscriptions"][number]["items"][number], keyof StripeSubscriptionItem>]: never; })[] & { [K_221 in Exclude<keyof I_1["subscriptions"][number]["items"], keyof {
                id?: string;
                quantity?: string;
                subscription?: string;
                plan?: {
                    status?: boolean;
                    nickname?: string;
                    product?: string;
                    amount?: number;
                    usage_type?: string;
                };
                price?: {
                    nickname?: string;
                    product?: string;
                    active?: boolean;
                    billing_scheme?: string;
                    currency?: string;
                    recurring?: {
                        interval?: string;
                        interval_count?: number;
                        trial_period_days?: number;
                        usage_type?: string;
                    };
                };
            }[]>]: never; };
            default_tax_rates?: string[] & string[] & { [K_222 in Exclude<keyof I_1["subscriptions"][number]["default_tax_rates"], keyof string[]>]: never; };
        } & { [K_223 in Exclude<keyof I_1["subscriptions"][number], keyof StripeSubscription>]: never; })[] & { [K_224 in Exclude<keyof I_1["subscriptions"], keyof any[]>]: never; };
        discount?: {
            subscription?: string;
            start?: number;
            customer?: string;
            coupon?: {
                duration?: string;
                duration_in_months?: number;
                name?: string;
            };
        } & {
            subscription?: string;
            start?: number;
            customer?: string;
            coupon?: {
                duration?: string;
                duration_in_months?: number;
                name?: string;
            } & {
                duration?: string;
                duration_in_months?: number;
                name?: string;
            } & { [K_225 in Exclude<keyof I_1["discount"]["coupon"], keyof StripeCoupon>]: never; };
        } & { [K_226 in Exclude<keyof I_1["discount"], keyof StripeCustomerDiscount>]: never; };
    } & { [K_227 in Exclude<keyof I_1, keyof StripeCustomer>]: never; }>(object: I_1): StripeCustomer;
};
type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
export type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P : P & {
    [K in keyof P]: Exact<P[K], I[K]>;
} & {
    [K in Exclude<keyof I, KeysOfUnion<P>>]: never;
};
export {};
