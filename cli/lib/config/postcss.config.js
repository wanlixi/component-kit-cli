"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("../common");
function mergePostcssConfig(config1, config2) {
    const plugins = Object.assign(Object.assign({}, config1.plugins), config2.plugins);
    return Object.assign(Object.assign(Object.assign({}, config1), config2), { plugins });
}
const DEFAULT_CONFIG = {
    plugins: {
        autoprefixer: {},
    },
};
module.exports = mergePostcssConfig(DEFAULT_CONFIG, common_1.getPostcssConfig());
