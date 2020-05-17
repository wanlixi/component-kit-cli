export declare const baseConfig: {
    mode: string;
    resolve: {
        extensions: string[];
    };
    module: {
        rules: ({
            test: RegExp;
            use: ({
                loader: string;
                options: {
                    cacheDirectory: string;
                };
            } | {
                loader: string;
                options: {
                    compilerOptions: {
                        preserveWhitespace: boolean;
                    };
                };
            })[];
            exclude?: undefined;
            sideEffects?: undefined;
        } | {
            test: RegExp;
            exclude: RegExp;
            use: (string | {
                loader: string;
                options: {
                    cacheDirectory: string;
                };
            })[];
            sideEffects?: undefined;
        } | {
            test: RegExp;
            sideEffects: boolean;
            use: (string | {
                loader: string;
                options: {
                    config: {
                        path: string;
                    };
                };
            } | {
                loader: string;
                options: {
                    implementation: any;
                };
            })[];
            exclude?: undefined;
        } | {
            test: RegExp;
            use: (string | {
                loader: string;
                options: {
                    cacheDirectory: string;
                };
            })[];
            exclude?: undefined;
            sideEffects?: undefined;
        })[];
    };
    plugins: any[];
};
