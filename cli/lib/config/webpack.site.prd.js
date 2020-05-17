/*
 * @Author: wanlixin
 * @Date: 2020-05-09 22:23:49
 * @LastEditors: wanlixin
 * @LastEditTime: 2020-05-17 08:50:48
 * @Description: 
 */


const __importDefault = (this && this.__importDefault) || function(mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const webpack_merge_1 = __importDefault(require("webpack-merge"));
const lodash_1 = require("lodash");
const common_1 = require("../common");
const webpack_site_dev_1 = require("./webpack.site.dev");
const constant_1 = require("../common/constant");

const voraConfig = common_1.getVoraConfig();
const outputDir = lodash_1.get(voraConfig, 'build.site.outputDir', constant_1.SITE_DIST_DIR);
const publicPath = lodash_1.get(voraConfig, 'build.site.publicPath', '/');
function getSitePrdConfig() {
    return webpack_merge_1.default(webpack_site_dev_1.getSiteDevBaseConfig(), {
        mode: 'production',
        stats: 'none',
        performance: {
            maxAssetSize: 5 * 1024 * 1024,
            maxEntrypointSize: 5 * 1024 * 1024,
        },
        output: {
            publicPath,
            path: outputDir,
            filename: '[name].[hash:8].js',
            chunkFilename: 'async_[name].[chunkhash:8].js',
        },
    }, common_1.getWebpackConfig());
}
exports.getSitePrdConfig = getSitePrdConfig;
