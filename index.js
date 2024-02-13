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
            'error-background': (0, colors_transformations_1.darkenColor)(semanticColors.error, 35),
            highlight: (0, colors_transformations_1.lightenColor)(semanticColors['secondary-buttons'], 5),
            icons: (0, colors_transformations_1.darkenColor)(semanticColors['secondary-text'], 10),
            'icons-hover': semanticColors['secondary-text'],
            'illustration-background': (0, colors_transformations_1.lightenColor)(semanticColors.background, 5),
            'links-hover': (0, colors_transformations_1.lightenColor)(semanticColors.links, 15),
            'links-icons': (0, colors_transformations_1.darkenColor)(semanticColors.links, 5),
            'links-background': (0, colors_transformations_1.darkenColor)(semanticColors.links, 35),
            'popups-background': (0, colors_transformations_1.lightenColor)(semanticColors.background, 10),
            'secondary-buttons-active': (0, colors_transformations_1.lightenColor)(semanticColors['secondary-buttons'], 10),
            'secondary-buttons-hover': (0, colors_transformations_1.lightenColor)(semanticColors['secondary-buttons'], 5),
            'success-background': (0, colors_transformations_1.darkenColor)(semanticColors.success, 35),
            'tooltip-background': (0, colors_transformations_1.lightenColor)(semanticColors.background, 30),
            'warning-background': (0, colors_transformations_1.darkenColor)(semanticColors.warning, 35),
        };
    }
    else {
        themeRelatedComputedColors = {
            'buttons-active': (0, colors_transformations_1.lightenColor)(semanticColors.buttons, 10),
            'buttons-hover': (0, colors_transformations_1.lightenColor)(semanticColors.buttons, 5),
            'buttons-shadow': `rgba(${buttonsColorRGBArray.join(', ')}, 0.15)`,
            'error-background': (0, colors_transformations_1.lightenColor)(semanticColors.error, 35),
            highlight: (0, colors_transformations_1.darkenColor)(semanticColors['secondary-buttons'], 5),
            icons: (0, colors_transformations_1.lightenColor)(semanticColors['secondary-text'], 10),
            'icons-hover': semanticColors['secondary-text'],
            'illustration-background': (0, colors_transformations_1.darkenColor)(semanticColors.background, 3),
            'links-hover': (0, colors_transformations_1.darkenColor)(semanticColors.links, 15),
            'links-icons': (0, colors_transformations_1.lightenColor)(semanticColors.links, 5),
            'links-background': (0, colors_transformations_1.lightenColor)(semanticColors.links, 35),
            'popups-background': semanticColors.background,
            'secondary-buttons-active': (0, colors_transformations_1.darkenColor)(semanticColors['secondary-buttons'], 10),
            'secondary-buttons-hover': (0, colors_transformations_1.darkenColor)(semanticColors['secondary-buttons'], 5),
            'success-background': (0, colors_transformations_1.lightenColor)(semanticColors.success, 35),
            'tooltip-background': semanticColors.buttons,
            'warning-background': (0, colors_transformations_1.lightenColor)(semanticColors.warning, 35),
        };
    }
    const iconsColorRGBArray = (0, colors_transformations_1.getRGBArray)(themeRelatedComputedColors.icons);
    const commonComputedColors = {
        'background-zero-opacity': `rgba(${backgroundColorRGBArray.join(', ')}, 0)`,
        'buttons-inactive': (0, colors_transformations_1.transparizeColor)(semanticColors.buttons, 0.03),
        divider: (0, colors_transformations_1.transparizeColor)(semanticColors['secondary-text'], 0.4),
        'input-line': (0, colors_transformations_1.darkenColor)(semanticColors['secondary-buttons'], 10),
        'input-line-active': (0, colors_transformations_1.lightenColor)(semanticColors['secondary-text'], 10),
        'input-line-disable': `rgba(${iconsColorRGBArray.join(', ')}, 0.3)`,
        'input-line-hover': (0, colors_transformations_1.rotateColor)((0, colors_transformations_1.darkenColor)(semanticColors['secondary-buttons'], 15), 20),
        'main-text-inactive': (0, colors_transformations_1.transparizeColor)(semanticColors['main-text'], 0.2),
        'main-text-hover': (0, colors_transformations_1.lightenColor)((0, colors_transformations_1.desaturateColor)(semanticColors['main-text'], 0.24), 18),
        'main-text-active': (0, colors_transformations_1.rotateColor)((0, colors_transformations_1.lightenColor)((0, colors_transformations_1.desaturateColor)(semanticColors['main-text'], 0.28), 26), -2),
        'secondary-text-hover': (0, colors_transformations_1.darkenColor)(semanticColors['secondary-text'], 10),
        'icons-active': (0, colors_transformations_1.darkenColor)(semanticColors['secondary-text'], 15),
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
