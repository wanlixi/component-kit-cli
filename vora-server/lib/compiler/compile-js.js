"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@babel/core");
const fs_extra_1 = require("fs-extra");
const common_1 = require("../common");
const css_1 = require("../common/css");
function compileJs(filePath) {
    return new Promise((resolve, reject) => {
        let code = fs_extra_1.readFileSync(filePath, 'utf-8');
        code = css_1.replaceCssImport(code);
        core_1.transformAsync(code, { filename: filePath })
            .then(result => {
            if (result) {
                const jsFilePath = common_1.replaceExt(filePath, '.js');
                fs_extra_1.removeSync(filePath);
                fs_extra_1.outputFileSync(jsFilePath, result.code);
                resolve();
            }
        })
            .catch(reject);
    });
}
exports.compileJs = compileJs;
