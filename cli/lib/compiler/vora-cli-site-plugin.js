/*
 * @Author: wanlixin
 * @Date: 2020-05-09 22:23:49
 * @LastEditors: wanlixin
 * @LastEditTime: 2020-05-17 09:02:19
 * @Description: 
 */
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@vora/cli/lib/common");
const css_1 = require("@vora/cli/lib/common/css");
const gen_package_entry_1 = require("@vora/cli/lib/compiler/gen-package-entry");
const gen_package_style_1 = require("@vora/cli/lib/compiler/gen-package-style");
const gen_site_mobile_shared_1 = require("@vora/cli/lib/compiler/gen-site-mobile-shared");
const gen_site_desktop_shared_1 = require("@vora/cli/lib/compiler/gen-site-desktop-shared");
const gen_style_deps_map_1 = require("@vora/cli/lib/compiler/gen-style-deps-map");
const constant_1 = require("@vora/cli/lib/common/constant");
const PLUGIN_NAME = 'VoraCliSitePlugin';
async function genSiteEntry() {
    return new Promise((resolve, reject) => {
        gen_style_deps_map_1.genStyleDepsMap()
            .then(() => {
                gen_package_entry_1.genPackageEntry({
                    outputPath: constant_1.PACKAGE_ENTRY_FILE,
                });
                gen_package_style_1.genPacakgeStyle({
                    outputPath: common_1.replaceExt(constant_1.PACKAGE_STYLE_FILE, `.${css_1.CSS_LANG}`),
                });
                gen_site_mobile_shared_1.genSiteMobileShared();
                gen_site_desktop_shared_1.genSiteDesktopShared();
                resolve();
            })
            .catch(err => {
                console.log(err);
                reject(err);
            });
    });
}
exports.genSiteEntry = genSiteEntry;
class VoraCliSitePlugin {
    apply(compiler) {
        if (process.env.NODE_ENV === 'production') {
            compiler.hooks.beforeCompile.tapPromise(PLUGIN_NAME, genSiteEntry);
        }
        else {
            compiler.hooks.watchRun.tapPromise(PLUGIN_NAME, genSiteEntry);
        }
    }
}
exports.VoraCliSitePlugin = VoraCliSitePlugin;
