"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.isValidColor = exports.getRGBArray = exports.transparizeColor = exports.darkenColor = exports.lightenColor = void 0;
const color_1 = __importDefault(require("color"));
const lightenColor = (colorString, amount) => {
    const color = (0, color_1.default)(colorString);
    return color.lightness(color.lightness() + amount).hex();
};
exports.lightenColor = lightenColor;
const darkenColor = (colorString, amount) => lightenColor(colorString, -amount);
exports.darkenColor = darkenColor;
const transparizeColor = (colorString, amount) => {
    const color = (0, color_1.default)(colorString);
    return color.alpha(amount).string();
};
exports.transparizeColor = transparizeColor;
const getRGBArray = (colorString) => {
    const color = (0, color_1.default)(colorString);
    return color.rgb().array();
};
exports.getRGBArray = getRGBArray;
const isValidColor = (value) => {
    let isValidColor = true;
    try {
        (0, color_1.default)(value);
    }
    catch (error) {
        isValidColor = false;
    }
    return isValidColor;
};
exports.isValidColor = isValidColor;
