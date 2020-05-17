/*
 * @Author: wanlixin
 * @Date: 2
020-05-09 22:23:49
 * @LastEditTime: 2020-05-17 08:53:14
 * @Description: 
 */


Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = require("path");

const fs_extra_1 = require("fs-extra");
const constant_1 = require("../common/constant");
const common_1 = require("../common");

function genInstall() {
    return `import Vue from 'vue';
import PackageEntry from './package-entry';
import './package-style';
`;
}
function genImports(demos) {
    return demos
        .map(item => `import ${item.name} from '${common_1.removeExt(common_1.normalizePath(item.path))}';`)
        .join('\n');
}
function genExports(demos) {
    return `export const demos = {\n  ${demos
        .map(item => item.name)
        .join(',\n  ')}\n};`;
}
function getSetName(demos) {
    return demos
        .map(item => `${item.name}.name = 'demo-${item.component}';`)
        .join('\n');
}
function genConfig(demos) {
    const voraConfig = common_1.getVoraConfig();
    const demoNames = demos.map(item => common_1.decamelize(item.name));
    function demoFilter(nav) {
        return nav.filter(group => {
            group.items = group.items.filter((item) => demoNames.includes(item.path));
            return group.items.length;
        });
    }
    const { nav, locales } = voraConfig.site;
    if (locales) {
        Object.keys(locales).forEach((lang) => {
            if (locales[lang].nav) {
                locales[lang].nav = demoFilter(locales[lang].nav);
            }
        });
    }
    else if (nav) {
        voraConfig.site.nav = demoFilter(nav);
    }
    return `export const config = ${JSON.stringify(voraConfig, null, 2)}`;
}
function genCode(components) {
    const demos = components
        .map(component => ({
            component,
            name: common_1.pascalize(component),
            path: path_1.join(constant_1.SRC_DIR, component, 'demo/index.vue'),
        }))
        .filter(item => fs_extra_1.existsSync(item.path));
    return `${genInstall()}
${genImports(demos)}

Vue.use(PackageEntry);

${getSetName(demos)}

${genExports(demos)}
${genConfig(demos)}
`;
}
function genSiteMobileShared() {
    const dirs = fs_extra_1.readdirSync(constant_1.SRC_DIR);
    const code = genCode(dirs);
    common_1.smartOutputFile(constant_1.SITE_MODILE_SHARED_FILE, code);
}
exports.genSiteMobileShared = genSiteMobileShared;
