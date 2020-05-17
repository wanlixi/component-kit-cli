/*
 * @Author: wanlixin
 * @Date: 2020-05-09 22:23:49
 * @LastEditors: wanlixin
 * @LastEditTime: 2020-05-17 08:47:29
 * @Description: 
 */
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const lodash_1 = require("lodash");
const path_1 = require("path");
const common_1 = require("../common");
const constant_1 = require("../common/constant");
function genImports(components, options) {
  return components
    .map(name => {
      let path = path_1.join(constant_1.SRC_DIR, name);
      if (options.pathResolver) {
        path = options.pathResolver(path);
      }
      return `import ${common_1.pascalize(name)} from '${common_1.normalizePath(path)}';`;
    })
    .join('\n');
}
function genExports(names) {
  return names.map(name => `${name}`).join(',\n  ');
}
function genPackageEntry(options) {
  const names = common_1.getComponents();
  const voraConfig = constant_1.getVoraConfig();
  const skipInstall = lodash_1.get(voraConfig, 'build.skipInstall', []).map(common_1.pascalize);
  const version = process.env.PACKAGE_VERSION || constant_1.getPackageJson().version;
  const components = names.map(common_1.pascalize);
  const content = `${genImports(names, options)}

const version = '${version}';

function install(Vue) {
  const components = [
    ${components.filter(item => !skipInstall.includes(item)).join(',\n    ')}
  ];

  components.forEach(item => {
    if (item.install) {
      Vue.use(item);
    } else if (item.name) {
      Vue.component(item.name, item);
    }
  });
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export {
  install,
  version,
  ${genExports(components)}
};

export default {
  install,
  version
};
`;
  common_1.smartOutputFile(options.outputPath, content);
}
exports.genPackageEntry = genPackageEntry;
