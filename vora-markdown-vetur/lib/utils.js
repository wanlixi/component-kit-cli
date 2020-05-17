"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// myName -> my-name
function toKebabCase(input) {
    return input.replace(/[A-Z]/g, (val, index) => (index === 0 ? '' : '-') + val.toLowerCase());
}
exports.toKebabCase = toKebabCase;
// name `v2.0.0` -> name
function removeVersion(str) {
    return str.replace(/`(\w|\.)+`/g, '').trim();
}
exports.removeVersion = removeVersion;
// *boolean* -> boolean
// _boolean_ -> boolean
function formatType(type) {
    return type.replace(/(^(\*|_))|((\*|_)$)/g, '');
}
exports.formatType = formatType;
function normalizePath(path) {
    return path.replace(/\\/g, '/');
}
exports.normalizePath = normalizePath;
