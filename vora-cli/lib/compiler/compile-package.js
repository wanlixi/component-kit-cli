/*
 * @Author: wanlixin
 * @Date: 2020-05-09 22:23:49
 * @LastEditors: wanlixin
 * @LastEditTime: 2020-05-16 21:27:31
 * @Description: 
 */


const __importDefault = (this && this.__importDefault) || function(mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const webpack_1 = __importDefault(require("webpack"));
const webpack_package_1 = require("../config/webpack.package");

async function compilePackage(isMinify) {
    return new Promise((resolve, reject) => {
        const config = webpack_package_1.getPackageConfig(isMinify);
        webpack_1.default(config, (err, stats) => {
            if (err || stats.hasErrors()) {
                reject();
            }
            else {
                resolve();
            }
        });
    });
}
exports.compilePackage = compilePackage;
