"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const execa_1 = __importDefault(require("execa"));
const logger_1 = require("../common/logger");
const constant_1 = require("../common/constant");
function runCommand(cmd, options, messages) {
    const spinner = logger_1.ora(messages.start).start();
    return new Promise(resolve => {
        execa_1.default(cmd, options, {
            env: { FORCE_COLOR: true },
        })
            .then(() => {
            spinner.succeed(messages.succeed);
            resolve(true);
        })
            .catch((err) => {
            spinner.fail(messages.failed);
            console.log(err.stdout);
            resolve(false);
        });
    });
}
function eslint() {
    return runCommand('eslint', ['./src', '--fix', '--ext', constant_1.SCRIPT_EXTS.join(',')], {
        start: 'Running eslint...',
        succeed: 'ESLint Passed.',
        failed: 'ESLint failed!',
    });
}
function stylelint() {
    return runCommand('stylelint', ['src/**/*.css', 'src/**/*.vue', 'src/**/*.less', 'src/**/*.sass', '--fix'], {
        start: 'Running stylelint...',
        succeed: 'Stylelint Passed.',
        failed: 'Stylelint failed!',
    });
}
async function lint() {
    const eslintPassed = await eslint();
    const stylelintPassed = await stylelint();
    if (!eslintPassed || !stylelintPassed) {
        process.exit(1);
    }
}
exports.lint = lint;
