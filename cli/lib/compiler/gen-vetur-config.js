/*
 * @Author: wanlixin
 * @Date: 2020-05-09 22:23:49
 * @LastEditors: wanlixin
 * @LastEditTime: 2020-05-17 08:48:30
 * @Description: 
 */
"use strict";
var __importDefault = (this && this.__importDefault) || function(mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const markdown_vetur_1 = __importDefault(require("@vora/markdown-vetur"));
const lodash_1 = require("lodash");
const constant_1 = require("../common/constant");
// generate vetur tags & attributes
function genVeturConfig() {
    const pkgJson = constant_1.getPackageJson();
    const voraConfig = constant_1.getVoraConfig();
    const options = lodash_1.get(voraConfig, 'build.vetur');
    if (options) {
        markdown_vetur_1.default.parseAndWrite(Object.assign({ name: voraConfig.name, path: constant_1.SRC_DIR, test: /zh-CN\.md/, version: pkgJson.version, outputDir: constant_1.VETUR_DIR }, options));
    }
}
exports.genVeturConfig = genVeturConfig;
