/*
 * @Author: wanlixin
 * @Date: 2020-05-09 22:23:49
 * @LastEditors: wanlixin
 * @LastEditTime: 2020-05-17 10:46:12
 * @Description: 
 */
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = require("path");
const fs_extra_1 = require("fs-extra");
const constant_1 = require("../common/constant");
const DEFAULT_CONFIG = {
    moduleNameMapper: {
        '\\.(css|less|scss)$': constant_1.JEST_STYLE_MOCK_FILE,
        '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': constant_1.JEST_FILE_MOCK_FILE,
    },
    setupFilesAfterEnv: [constant_1.JEST_SETUP_FILE],
    moduleFileExtensions: ['js', 'jsx', 'vue', 'ts', 'tsx'],
    transform: {
        '\\.(vue)$': 'vue-jest',
        '\\.(js|jsx|ts|tsx)$': 'babel-jest',
    },
    transformIgnorePatterns: ['/node_modules/(?!(vora-server))/'],
    snapshotSerializers: ['jest-serializer-vue'],
    collectCoverage: true,
    collectCoverageFrom: ['src/**/*.{js,jsx,ts,tsx,vue}', '!**/demo/**'],
    coverageReporters: ['html', 'lcov', 'text-summary'],
    coverageDirectory: './test/coverage',
};
function readRootConfig() {
    const ROOT_CONFIG_PATH = path_1.join(constant_1.ROOT, 'jest.config.js');
    if (fs_extra_1.existsSync(ROOT_CONFIG_PATH)) {
        return require(ROOT_CONFIG_PATH);
    }
    return {};
}
module.exports = Object.assign(Object.assign({}, DEFAULT_CONFIG), readRootConfig());
