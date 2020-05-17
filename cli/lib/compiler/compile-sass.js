"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sass_1 = require("sass");
async function compileSass(filePath) {
    const { css } = sass_1.renderSync({ file: filePath });
    return css;
}
exports.compileSass = compileSass;
