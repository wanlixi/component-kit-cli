"use strict";
var __importDefault = (this && this.__importDefault) || function(mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fast_glob_1 = __importDefault(require("fast-glob"));
const path_1 = require("path");
const fs_extra_1 = require("fs-extra");
const common_1 = require("../common");
const constant_1 = require("../common/constant");
function formatName(component, lang) {
    component = common_1.pascalize(component);
    if (lang) {
        return `${component}_${lang.replace('-', '_')}`;
    }
    return component;
}
/**
 * i18n mode:
 *   - action-sheet/README.md       => ActionSheet_EnUS
 *   - action-sheet/README.zh-CN.md => ActionSheet_ZhCN
 *
 * default mode:
 *   - action-sheet/README.md => ActionSheet
 */
function resolveDocuments(components) {
    const voraConfig = common_1.getVoraConfig();
    const { locales, defaultLang } = voraConfig.site;
    const docs = [];
    if (locales) {
        const langs = Object.keys(locales);
        langs.forEach(lang => {
            const fileName = lang === defaultLang ? 'README.md' : `README.${lang}.md`;
            components.forEach(component => {
                docs.push({
                    name: formatName(component, lang),
                    path: path_1.join(constant_1.SRC_DIR, component, fileName),
                });
            });
        });
    }
    else {
        components.forEach(component => {
            docs.push({
                name: formatName(component),
                path: path_1.join(constant_1.SRC_DIR, component, 'README.md'),
            });
        });
    }
    const staticDocs = fast_glob_1.default.sync(common_1.normalizePath(path_1.join(constant_1.DOCS_DIR, '**/*.md'))).map(path => {
        const pairs = path_1.parse(path).name.split('.');
        return {
            name: formatName(pairs[0], pairs[1] || defaultLang),
            path,
        };
    });
    return [...staticDocs, ...docs.filter(item => fs_extra_1.existsSync(item.path))];
}
function genImportDocuments(items) {
    return items
        .map(item => `import ${item.name} from '${common_1.normalizePath(item.path)}';`)
        .join('\n');
}
function genExportDocuments(items) {
    return `export const documents = {
  ${items.map(item => item.name).join(',\n  ')}
};`;
}
function genImportConfig() {
    return `import config from '${common_1.removeExt(common_1.normalizePath(constant_1.VORA_CONFIG_FILE))}';`;
}
function genExportConfig() {
    return 'export { config };';
}
function genExportVersion() {
    return `export const packageVersion = '${constant_1.getPackageJson().version}';`;
}
function genSiteDesktopShared() {
    const dirs = fs_extra_1.readdirSync(constant_1.SRC_DIR);
    const documents = resolveDocuments(dirs);
    const code = `${genImportConfig()}
${genImportDocuments(documents)}

${genExportConfig()}
${genExportDocuments(documents)}
${genExportVersion()}
`;
    common_1.smartOutputFile(constant_1.SITE_DESKTOP_SHARED_FILE, code);
}
exports.genSiteDesktopShared = genSiteDesktopShared;
