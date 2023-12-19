export const files: string[];
export declare const dist: string;
export declare function formatServicePath(path: any): any;
export declare const long: string;
export declare namespace customSchema {
    const openapi: string;
    namespace info {
        const version: string;
        const title: string;
        const description: string;
        namespace license {
            const name: string;
            const url: string;
        }
        const termsOfService: string;
        const privacyPolicy: string;
    }
    namespace components {
        namespace securitySchemes {
            namespace OAuth2 {
                const type: string;
            }
        }
    }
    const security: {
        OAuth2: any[];
    }[];
}
export declare function transform(type: any, result: any, args: any): any;
