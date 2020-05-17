"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs_extra_1 = require("fs-extra");
const logger_1 = require("../common/logger");
const commitRE = /^(revert: )?(fix|feat|docs|perf|test|types|style|build|chore|refactor|breaking change)(\(.+\))?: .{1,50}/;
const mergeRE = /Merge branch /;
function commitLint() {
    const gitParams = process.env.HUSKY_GIT_PARAMS;
    const commitMsg = fs_extra_1.readFileSync(gitParams, 'utf-8').trim();
    if (!commitRE.test(commitMsg) && !mergeRE.test(commitMsg)) {
        logger_1.consola.error(`invalid commit message: "${commitMsg}".

Proper commit message format is required for automated changelog generation.

Examples: 

- fix(Button): incorrect style
- feat(Button): incorrect style
- docs(Button): fix typo

Allowed Types:

- fix
- feat
- docs
- perf
- test
- types
- build
- chore
- refactor
- breaking change
- Merge branch 'foo' into 'bar'
`);
        process.exit(1);
    }
}
exports.commitLint = commitLint;
