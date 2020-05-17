/*
 * @Author: wanlixin
 * @Date: 2020-05-09 22:23:49
 * @LastEditors: wanlixin
 * @LastEditTime: 2020-05-17 08:32:48
 * @Description: 
 */
"use strict";
var __importDefault = (this && this.__importDefault) || function(mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable no-template-curly-in-string */
const release_it_1 = __importDefault(require("release-it"));
const path_1 = require("path");
const PLUGIN_PATH = path_1.join(__dirname, '../compiler/vora-cli-release-plugin.js');
async function release() {
    await release_it_1.default({
        plugins: {
            [PLUGIN_PATH]: {},
        },
        git: {
            tagName: 'v${version}',
            commitMessage: 'chore: release ${version}',
        },
    });
}
exports.release = release;
