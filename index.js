"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const default_json_1 = __importDefault(require("./themes/default.json"));
const dark_json_1 = __importDefault(require("./themes/dark.json"));
const colors_transformations_1 = require("./helpers/colors-transformations");
const defaultSemanticColors = default_json_1.default;
const darkSemanticColors = dark_json_1.default;
const makeThemeFromSemantic = (semanticColors, isDarkTheme) => {
    const buttonsColorRGBArray = (0, colors_transformations_1.getRGBArray)(semanticColors.buttons);
    const backgroundColorRGBArray = (0, colors_transformations_1.getRGBArray)(semanticColors.background);
    let themeRelatedComputedColors = {};
    if (isDarkTheme) {
        themeRelatedComputedColors = {
            'buttons-active': (0, colors_transformations_1.darkenColor)(semanticColors.buttons, 10),
            'buttons-hover': (0, colors_transformations_1.darkenColor)(semanticColors.buttons, 5),
            'buttons-shadow': 'rgba(0, 0, 0, 0.2)',
            'main-text-inactive': (0, colors_transformations_1.desaturateColor)((0, colors_transformations_1.darkenColor)(semanticColors['secondary-text'], 35), 0.2),
            'error-background': (0, colors_transformations_1.darkenColor)(semanticColors.error, 35),
            highlight: (0, colors_transformations_1.lightenColor)(semanticColors['secondary-buttons'], 5),
            icons: semanticColors['secondary-text'],
            'icons-hover': (0, colors_transformations_1.darkenColor)(semanticColors['secondary-text'], 10),
            'icons-active': (0, colors_transformations_1.desaturateColor)((0, colors_transformations_1.darkenColor)(semanticColors['secondary-text'], 30), 0.2),
            'illustration-background': (0, colors_transformations_1.lightenColor)(semanticColors.background, 5),
            'links-hover': (0, colors_transformations_1.lightenColor)(semanticColors.links, 15),
            'links-icons': (0, colors_transformations_1.darkenColor)(semanticColors.links, 5),
            'links-background': (0, colors_transformations_1.darkenColor)(semanticColors.links, 35),
            'popups-background': (0, colors_transformations_1.lightenColor)(semanticColors.background, 10),
            'secondary-buttons-active': (0, colors_transformations_1.darkenColor)(semanticColors['secondary-buttons'], 9),
            'secondary-buttons-hover': (0, colors_transformations_1.darkenColor)(semanticColors['secondary-buttons'], 5),
            'main-text-active': (0, colors_transformations_1.darkenColor)(semanticColors['main-text'], 10),
            'main-text-hover': (0, colors_transformations_1.darkenColor)(semanticColors['main-text'], 3),
            'secondary-text-active': (0, colors_transformations_1.desaturateColor)((0, colors_transformations_1.darkenColor)(semanticColors['secondary-text'], 30), 0.2),
            'secondary-text-hover': (0, colors_transformations_1.darkenColor)(semanticColors['secondary-text'], 10),
            'success-background': (0, colors_transformations_1.darkenColor)(semanticColors.success, 35),
            'tooltip-background': (0, colors_transformations_1.lightenColor)(semanticColors.background, 30),
            'warning-background': (0, colors_transformations_1.darkenColor)(semanticColors.warning, 35),
            'input-line': semanticColors['secondary-text'],
            'input-line-active': (0, colors_transformations_1.rotateColor)((0, colors_transformations_1.lightenColor)((0, colors_transformations_1.desaturateColor)(semanticColors['buttons'], 0.2), 4), 20),
            'input-line-disable': semanticColors['secondary-text'],
            'input-line-hover': (0, colors_transformations_1.darkenColor)(semanticColors['secondary-text'], 10),
        };
    }
    else {
        themeRelatedComputedColors = {
            'buttons-active': (0, colors_transformations_1.lightenColor)(semanticColors.buttons, 10),
            'buttons-hover': (0, colors_transformations_1.lightenColor)(semanticColors.buttons, 5),
            'buttons-shadow': `rgba(${buttonsColorRGBArray.join(', ')}, 0.15)`,
            'main-text-inactive': (0, colors_transformations_1.lightenColor)(semanticColors['secondary-text'], 20),
            'error-background': (0, colors_transformations_1.lightenColor)(semanticColors.error, 35),
            highlight: (0, colors_transformations_1.darkenColor)(semanticColors['secondary-buttons'], 5),
            icons: (0, colors_transformations_1.lightenColor)(semanticColors['secondary-text'], 10),
            'icons-hover': semanticColors['secondary-text'],
            'icons-active': (0, colors_transformations_1.darkenColor)(semanticColors['secondary-text'], 10),
            'illustration-background': (0, colors_transformations_1.darkenColor)(semanticColors.background, 3),
            'links-hover': (0, colors_transformations_1.darkenColor)(semanticColors.links, 15),
            'links-icons': (0, colors_transformations_1.lightenColor)(semanticColors.links, 5),
            'links-background': (0, colors_transformations_1.lightenColor)(semanticColors.links, 35),
            'popups-background': semanticColors.background,
            'secondary-buttons-active': (0, colors_transformations_1.darkenColor)(semanticColors['secondary-buttons'], 10),
            'secondary-buttons-hover': (0, colors_transformations_1.darkenColor)(semanticColors['secondary-buttons'], 5),
            'main-text-active': (0, colors_transformations_1.lightenColor)((0, colors_transformations_1.desaturateColor)(semanticColors['main-text'], 0.2), 26),
            'main-text-hover': (0, colors_transformations_1.lightenColor)((0, colors_transformations_1.desaturateColor)(semanticColors['main-text'], 0.2), 18),
            'secondary-text-active': (0, colors_transformations_1.darkenColor)(semanticColors['secondary-text'], 10),
            'secondary-text-hover': (0, colors_transformations_1.darkenColor)(semanticColors['secondary-text'], 10),
            'success-background': (0, colors_transformations_1.lightenColor)(semanticColors.success, 35),
            'tooltip-background': semanticColors.buttons,
            'warning-background': (0, colors_transformations_1.lightenColor)(semanticColors.warning, 35),
            'input-line': (0, colors_transformations_1.rotateColor)((0, colors_transformations_1.saturateColor)((0, colors_transformations_1.lightenColor)(semanticColors['secondary-text'], 25), 0.2), -20),
            'input-line-active': (0, colors_transformations_1.lightenColor)(semanticColors['secondary-text'], 10),
            'input-line-disable': (0, colors_transformations_1.rotateColor)((0, colors_transformations_1.saturateColor)((0, colors_transformations_1.lightenColor)(semanticColors['secondary-text'], 25), 0.2), -20),
            'input-line-hover': (0, colors_transformations_1.saturateColor)((0, colors_transformations_1.lightenColor)(semanticColors['secondary-text'], 20), 0.05),
        };
    }
    const commonComputedColors = {
        'background-zero-opacity': `rgba(${backgroundColorRGBArray.join(', ')}, 0)`,
        'buttons-inactive': (0, colors_transformations_1.transparizeColor)(semanticColors.buttons, 0.03),
        divider: (0, colors_transformations_1.transparizeColor)(semanticColors['secondary-text'], 0.4),
        'success-icons': (0, colors_transformations_1.lightenColor)(semanticColors.success, 5),
    };
    return Object.assign(Object.assign(Object.assign({}, semanticColors), commonComputedColors), themeRelatedComputedColors);
};
module.exports = {
    defaultSemanticColors,
    darkSemanticColors,
    makeThemeFromSemantic,
    isDarkColor: colors_transformations_1.isDarkColor,
    isValidColor: colors_transformations_1.isValidColor,
};
