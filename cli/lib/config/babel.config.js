/*
 * @Author: wanlixin
 * @Date: 2020-05-09 22:23:49
 * @LastEditors: wanlixin
 * @LastEditTime: 2020-05-17 08:49:20
 * @Description: 
 */
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
module.exports = function(api) {
    if (api) {
        api.cache.never();
    }
    const { BABEL_MODULE, NODE_ENV } = process.env;
    const isTest = NODE_ENV === 'test';
    const useESModules = BABEL_MODULE !== 'commonjs' && !isTest;
    return {
        presets: [
            [
                '@babel/preset-env',
                {
                    loose: true,
                    modules: useESModules ? false : 'commonjs',
                },
            ],
            [
                '@vue/babel-preset-jsx',
                {
                    functional: false,
                },
            ],
            '@babel/preset-typescript',
        ],
        plugins: [
            [
                '@babel/plugin-transform-runtime',
                {
                    corejs: false,
                    useESModules,
                },
            ],
            [
                'import',
                {
                    libraryName: 'vora',
                    libraryDirectory: useESModules ? 'es' : 'lib',
                    style: true,
                },
                'vora',
            ],
            '@babel/plugin-transform-object-assign',
        ],
    };
};
exports.default = module.exports;
