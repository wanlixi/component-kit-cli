/*
 * @Author: wanlixin
 * @Date: 2020-05-09 22:23:49
 * @LastEditors: wanlixin
 * @LastEditTime: 2020-05-17 09:01:42
 * @Description: 
 */
"use strict";
var __importDefault = (this && this.__importDefault) || function(mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const release_it_1 = __importDefault(require("release-it"));
const build_1 = require("@vora/cli/lib/commands/build");
const changelog_1 = require("@vora/cli/lib/commands/changelog");
class VoraCliReleasePlugin extends release_it_1.default.Plugin {
    async beforeRelease() {
        // log an empty line
        console.log('');
        await build_1.build();
        await changelog_1.changelog();
    }
}
module.exports = VoraCliReleasePlugin;
