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
    const secondaryTextColorRGBArray = (0, colors_transformations_1.getRGBArray)(semanticColors['secondary-text']);
    const iconsColorRGBArray = (0, colors_transformations_1.getRGBArray)(semanticColors.icons);
    const backgroundColorRGBArray = (0, colors_transformations_1.getRGBArray)(semanticColors.background);
    const commonComputedColors = {
        'background-zero-opacity': `rgba(${backgroundColorRGBArray.join(', ')}, 0)`,
        'buttons-inactive': (0, colors_transformations_1.transparizeColor)(semanticColors.buttons, 0.03),
        divider: (0, colors_transformations_1.transparizeColor)(semanticColors['secondary-text'], 0.15),
        'input-line': `rgba(${secondaryTextColorRGBArray.join(', ')}, 0.6)`,
        'input-line-active': `rgba(${buttonsColorRGBArray.join(', ')}, 0.6)`,
        'input-line-disable': `rgba(${iconsColorRGBArray.join(', ')}, 0.3)`,
        'main-text-inactive': (0, colors_transformations_1.transparizeColor)(semanticColors['main-text'], 0.2),
    };
    let themeRelatedComputedColors = {};
    if (isDarkTheme) {
        themeRelatedComputedColors = {
            'buttons-active': (0, colors_transformations_1.darkenColor)(semanticColors.buttons, 10),
            'buttons-hover': (0, colors_transformations_1.darkenColor)(semanticColors.buttons, 5),
            'buttons-shadow': 'rgba(0, 0, 0, 0.2)',
            'error-background': (0, colors_transformations_1.darkenColor)(semanticColors.error, 35),
            highlight: (0, colors_transformations_1.lightenColor)(semanticColors['secondary-buttons'], 5),
            'icons-hover': (0, colors_transformations_1.darkenColor)(semanticColors.icons, 15),
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
            'icons-hover': (0, colors_transformations_1.darkenColor)(semanticColors.icons, 10),
            'links-hover': (0, colors_transformations_1.darkenColor)(semanticColors.links, 15),
            'links-icons': (0, colors_transformations_1.lightenColor)(semanticColors.links, 5),
            'links-background': (0, colors_transformations_1.lightenColor)(semanticColors.links, 35),
            'popups-background': semanticColors.background,
            'secondary-buttons-active': (0, colors_transformations_1.darkenColor)(semanticColors['secondary-buttons'], 10),
            'secondary-buttons-hover': (0, colors_transformations_1.darkenColor)(semanticColors['secondary-buttons'], 5),
            'success-background': (0, colors_transformations_1.lightenColor)(semanticColors.success, 35),
            'tooltip-background': semanticColors.background,
            'warning-background': (0, colors_transformations_1.lightenColor)(semanticColors.warning, 35),
        };
    }
    return Object.assign(Object.assign(Object.assign({}, semanticColors), commonComputedColors), themeRelatedComputedColors);
};
module.exports = {
    defaultSemanticColors,
    darkSemanticColors,
    makeThemeFromSemantic,
    isDarkColor: colors_transformations_1.isDarkColor,
    isValidColor: colors_transformations_1.isValidColor,
};
