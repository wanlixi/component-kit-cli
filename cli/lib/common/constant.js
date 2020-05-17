/*
 * @Author: wanlixin
 * @Date: 2020-05-09 22:23:49
 * @LastEditors: wanlixin
 * @LastEditTime: 2020-05-17 08:46:40
 * @Description: 
 */
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const lodash_1 = require("lodash");
const fs_extra_1 = require("fs-extra");
const path_1 = require("path");
function findRootDir(dir) {
    if (dir === '/') {
        return '/';
    }
    if (fs_extra_1.existsSync(path_1.join(dir, 'vora.config.js'))) {
        return dir;
    }
    return findRootDir(path_1.dirname(dir));
}
// Colors
exports.GREEN = '#07c160';
// Root paths
exports.CWD = process.cwd();
exports.ROOT = findRootDir(exports.CWD);
exports.ES_DIR = path_1.join(exports.ROOT, 'es');
exports.LIB_DIR = path_1.join(exports.ROOT, 'lib');
exports.DOCS_DIR = path_1.join(exports.ROOT, 'docs');
exports.VETUR_DIR = path_1.join(exports.ROOT, 'vetur');
exports.SITE_DIST_DIR = path_1.join(exports.ROOT, 'site');
exports.VORA_CONFIG_FILE = path_1.join(exports.ROOT, 'vora.config.js');
exports.PACKAGE_JSON_FILE = path_1.join(exports.ROOT, 'package.json');
exports.ROOT_WEBPACK_CONFIG_FILE = path_1.join(exports.ROOT, 'webpack.config.js');
exports.ROOT_POSTCSS_CONFIG_FILE = path_1.join(exports.ROOT, 'postcss.config.js');
exports.CACHE_DIR = path_1.join(exports.ROOT, 'node_modules/.cache');
// Relative paths
exports.DIST_DIR = path_1.join(__dirname, '../../dist');
exports.CONFIG_DIR = path_1.join(__dirname, '../config');
// Dist files
exports.PACKAGE_ENTRY_FILE = path_1.join(exports.DIST_DIR, 'package-entry.js');
exports.PACKAGE_STYLE_FILE = path_1.join(exports.DIST_DIR, 'package-style.css');
exports.SITE_MODILE_SHARED_FILE = path_1.join(exports.DIST_DIR, 'site-mobile-shared.js');
exports.SITE_DESKTOP_SHARED_FILE = path_1.join(exports.DIST_DIR, 'site-desktop-shared.js');
exports.STYPE_DEPS_JSON_FILE = path_1.join(exports.DIST_DIR, 'style-deps.json');
// Config files
exports.BABEL_CONFIG_FILE = path_1.join(exports.CONFIG_DIR, 'babel.config.js');
exports.POSTCSS_CONFIG_FILE = path_1.join(exports.CONFIG_DIR, 'postcss.config.js');
exports.JEST_SETUP_FILE = path_1.join(exports.CONFIG_DIR, 'jest.setup.js');
exports.JEST_CONFIG_FILE = path_1.join(exports.CONFIG_DIR, 'jest.config.js');
exports.JEST_TRANSFORM_FILE = path_1.join(exports.CONFIG_DIR, 'jest.transform.js');
exports.JEST_FILE_MOCK_FILE = path_1.join(exports.CONFIG_DIR, 'jest.file-mock.js');
exports.JEST_STYLE_MOCK_FILE = path_1.join(exports.CONFIG_DIR, 'jest.style-mock.js');
exports.SCRIPT_EXTS = ['.js', '.jsx', '.vue', '.ts', '.tsx'];
exports.STYLE_EXTS = ['.css', '.less', '.scss'];
function getPackageJson() {
    delete require.cache[exports.PACKAGE_JSON_FILE];
    return require(exports.PACKAGE_JSON_FILE);
}
exports.getPackageJson = getPackageJson;
function getVoraConfig() {
    delete require.cache[exports.VORA_CONFIG_FILE];
    try {
        return require(exports.VORA_CONFIG_FILE);
    }
    catch (err) {
        return {};
    }
}
exports.getVoraConfig = getVoraConfig;
function getSrcDir() {
    const voraConfig = getVoraConfig();
    const srcDir = lodash_1.get(voraConfig, 'build.srcDir');
    if (srcDir) {
        if (path_1.isAbsolute(srcDir)) {
            return srcDir;
        }
        return path_1.join(exports.ROOT, srcDir);
    }
    return path_1.join(exports.ROOT, 'src');
}
exports.SRC_DIR = getSrcDir();
exports.STYLE_DIR = path_1.join(exports.SRC_DIR, 'style');
