import defaultSemantic from './themes/default.json';
import darkSemantic from './themes/dark.json';

import {
  lightenColor,
  darkenColor,
  transparizeColor,
  getRGBArray,
} from './helpers/colors-transformations';

interface semanticColors {
  background: string
  buttons: string
  'buttons-text': string
  icons: string
  links: string
  'main-text': string,
  'scroll-thumb': string
  'scroll-track': string
  'secondary-buttons': string
  'secondary-buttons-text': string
  'secondary-text': string

  success: string
  warning: string
  error: string
}
interface theme {
  [x: string]: string
}

const defaultSemanticColors = <semanticColors> defaultSemantic;
const darkSemanticColors = <semanticColors> darkSemantic;

const makeThemeFromSemantic = (semanticColors: semanticColors, isDarkTheme: boolean): theme => {
  const buttonsColorRGBArray = getRGBArray(semanticColors.buttons);
  const secondaryTextColorRGBArray = getRGBArray(semanticColors['secondary-text']);
  const iconsColorRGBArray = getRGBArray(semanticColors.icons);
  const backgroundColorRGBArray = getRGBArray(semanticColors.background);

  const commonComputedColors = {
    'background-zero-opacity': `rgba(${backgroundColorRGBArray.join(', ')}, 0)`,
    'buttons-inactive': transparizeColor(semanticColors.buttons, 0.03),
    divider: transparizeColor(semanticColors['secondary-text'], 0.15),
    'input-line': `rgba(${secondaryTextColorRGBArray.join(', ')}, 0.6)`,
    'input-line-active': `rgba(${buttonsColorRGBArray.join(', ')}, 0.6)`,
    'input-line-disable': `rgba(${iconsColorRGBArray.join(', ')}, 0.3)`,
    'main-text-inactive': transparizeColor(semanticColors['main-text'], 0.2),
  };
  let themeRelatedComputedColors = {};

  if (isDarkTheme) {
    themeRelatedComputedColors = {
      'buttons-active': darkenColor(semanticColors.buttons, 10),
      'buttons-hover': darkenColor(semanticColors.buttons, 5),
      'buttons-shadow': 'rgba(0, 0, 0, 0.2)',
      'error-background': darkenColor(semanticColors.error, 35),
      highlight: lightenColor(semanticColors['secondary-buttons'], 5),
      'icons-hover': darkenColor(semanticColors.icons, 15),
      'links-hover': lightenColor(semanticColors.links, 15),
      'links-icons': darkenColor(semanticColors.links, 5),
      'links-background': darkenColor(semanticColors.links, 35),
      'popups-background': lightenColor(semanticColors.background, 10),
      'secondary-buttons-active': lightenColor(semanticColors['secondary-buttons'], 10),
      'secondary-buttons-hover': lightenColor(semanticColors['secondary-buttons'], 5),
      'success-background': darkenColor(semanticColors.success, 35),
      'tooltip-background': lightenColor(semanticColors.background, 30),
      'warning-background': darkenColor(semanticColors.warning, 35),
    };
  } else {
    themeRelatedComputedColors = {
      'buttons-active': lightenColor(semanticColors.buttons, 10),
      'buttons-hover': lightenColor(semanticColors.buttons, 5),
      'buttons-shadow': `rgba(${buttonsColorRGBArray.join(', ')}, 0.15)`,
      'error-background': lightenColor(semanticColors.error, 35),
      highlight: darkenColor(semanticColors['secondary-buttons'], 5),
      'icons-hover': darkenColor(semanticColors.icons, 10),
      'links-hover': darkenColor(semanticColors.links, 15),
      'links-icons': lightenColor(semanticColors.links, 5),
      'links-background': lightenColor(semanticColors.links, 35),
      'popups-background': semanticColors.background,
      'secondary-buttons-active': darkenColor(semanticColors['secondary-buttons'], 10),
      'secondary-buttons-hover': darkenColor(semanticColors['secondary-buttons'], 5),
      'success-background': lightenColor(semanticColors.success, 35),
      'tooltip-background': semanticColors.background,
      'warning-background': lightenColor(semanticColors.warning, 35),
    };
  }

  return {
    ...semanticColors,
    ...commonComputedColors,
    ...themeRelatedComputedColors,
  };
};

export = {
  defaultSemanticColors,
  darkSemanticColors,
  makeThemeFromSemantic,
};
