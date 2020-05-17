/*
 * @Author: wanlixin
 * @Date: 2020-05-09 22:23:49
 * @LastEditors: wanlixin
 * @LastEditTime: 2020-05-17 08:49:49
 * @Description: 
 */
"use strict";
var __importDefault = (this && this.__importDefault) || function(mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const webpack_merge_1 = __importDefault(require("webpack-merge"));
const path_1 = require("path");
const webpack_base_1 = require("./webpack.base");
const common_1 = require("../common");
const constant_1 = require("../common/constant");
function getPackageConfig(isMinify) {
    const { name } = common_1.getVoraConfig();
    common_1.setBuildTarget('package');
    return webpack_merge_1.default(webpack_base_1.baseConfig, {
        mode: 'production',
        entry: {
            [name]: path_1.join(constant_1.ES_DIR, 'index.js'),
        },
        stats: 'none',
        output: {
            path: constant_1.LIB_DIR,
            library: name,
            libraryTarget: 'umd',
            filename: isMinify ? '[name].min.js' : '[name].js',
            umdNamedDefine: true,
            // https://github.com/webpack/webpack/issues/6522
            globalObject: "typeof self !== 'undefined' ? self : this",
        },
        externals: {
            vue: {
                root: 'Vue',
                commonjs: 'vue',
                commonjs2: 'vue',
                amd: 'vue',
            },
        },
        performance: false,
        optimization: {
            minimize: isMinify,
        },
    }, common_1.getWebpackConfig());
}
exports.getPackageConfig = getPackageConfig;
