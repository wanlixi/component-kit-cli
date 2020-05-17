/*
 * @Author: wanlixin
 * @Date: 2020-05-09 22:23:49
 * @LastEditors: wanlixin
 * @LastEditTime: 2020-05-17 10:47:31
 * @Description: 
 */
"use strict";
var __importDefault = (this && this.__importDefault) || function(mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sass_1 = __importDefault(require("sass"));
const friendly_errors_webpack_plugin_1 = __importDefault(require("@nuxt/friendly-errors-webpack-plugin"));
const vue_loader_1 = require("vue-loader");
const constant_1 = require("../common/constant");
const CACHE_LOADER = {
    loader: 'cache-loader',
    options: {
        cacheDirectory: constant_1.CACHE_DIR,
    },
};
const CSS_LOADERS = [
    'style-loader',
    'css-loader',
    {
        loader: 'postcss-loader',
        options: {
            config: {
                path: constant_1.POSTCSS_CONFIG_FILE,
            },
        },
    },
];
exports.baseConfig = {
    mode: 'development',
    resolve: {
        extensions: [...constant_1.SCRIPT_EXTS, ...constant_1.STYLE_EXTS],
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                use: [
                    CACHE_LOADER,
                    {
                        loader: 'vue-loader',
                        options: {
                            compilerOptions: {
                                preserveWhitespace: false,
                            },
                        },
                    },
                ],
            },
            {
                test: /\.(js|ts|jsx|tsx)$/,
                exclude: /node_modules\/(?!(vora-server))/,
                use: [CACHE_LOADER, 'babel-loader'],
            },
            {
                test: /\.css$/,
                sideEffects: true,
                use: CSS_LOADERS,
            },
            {
                test: /\.less$/,
                sideEffects: true,
                use: [...CSS_LOADERS, 'less-loader'],
            },
            {
                test: /\.scss$/,
                sideEffects: true,
                use: [
                    ...CSS_LOADERS,
                    {
                        loader: 'sass-loader',
                        options: {
                            implementation: sass_1.default,
                        },
                    },
                ],
            },
            {
                test: /\.styl$/,
                sideEffects: true,
                // loader: 'style-loader!css-loader!stylus-loader'
                use: [
                    ...CSS_LOADERS,
                    'stylus-loader'
                ],
            },
            {
                test: /\.md$/,
                use: [CACHE_LOADER, 'vue-loader', 'vora-markdown-loader'],
            },
        ],
    },
    plugins: [
        new vue_loader_1.VueLoaderPlugin(),
        new friendly_errors_webpack_plugin_1.default({
            clearConsole: false,
            logLevel: 'WARNING',
        }),
    ],
};
