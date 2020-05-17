"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const vue_1 = __importDefault(require("vue"));
require("jest-canvas-mock");
// @ts-ignore
const package_entry_1 = __importDefault(require("../../dist/package-entry"));
vue_1.default.use(package_entry_1.default);
