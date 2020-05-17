

Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("../common");
const compile_site_1 = require("../compiler/compile-site");

async function dev() {
    common_1.setNodeEnv('development');
    await compile_site_1.compileSite();
}
exports.dev = dev;
