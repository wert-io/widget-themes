import defaultSemantic from './themes/default.json';
import darkSemantic from './themes/dark.json';

import {
  getRGBArray,
  darkenColor,
  lightenColor,
  transparizeColor,
  desaturateColor,
  rotateColor,
  isDarkColor,
  isValidColor,
  saturateColor,
} from './helpers/colors-transformations';

interface semanticColors {
  background: string
  buttons: string
  'buttons-text': string
  links: string
  'main-text': string
  'scroll-thumb': string
  'scroll-track': string
  'secondary-buttons': string
  'secondary-buttons-text': string
  'secondary-text': string

  success: string
  warning: string
  error: string
}
interface computedColors {
  'buttons-active'?: string
  'buttons-hover'?: string
  'buttons-shadow'?: string
  'buttons-inactive'?: string
  'main-text-inactive'?: string
  'error-background'?: string
  highlight?: string
  icons?: string
  'icons-hover'?: string
  'illustration-background'?: string
  'links-hover'?: string
  'links-icons'?: string
  'links-background'?: string
  'popups-background'?: string
  'secondary-buttons-active'?: string
  'secondary-buttons-hover'?: string
  'success-background'?: string
  'tooltip-background'?: string
  'warning-background'?: string
  'main-text-hover'?: string
  'main-text-active'?: string
  'secondary-text-hover'?: string
  'secondary-text-active'?: string
  'input-line'?: string
  'input-line-hover'?: string
  'input-line-active'?: string
  'input-line-disable'?: string
}
interface theme {
  [x: string]: string
}

const defaultSemanticColors = <semanticColors> defaultSemantic;
const darkSemanticColors = <semanticColors> darkSemantic;

const makeThemeFromSemantic = (semanticColors: semanticColors, isDarkTheme: boolean): theme => {
  const buttonsColorRGBArray = getRGBArray(semanticColors.buttons);
  const backgroundColorRGBArray = getRGBArray(semanticColors.background);

  let themeRelatedComputedColors = <computedColors> {};

  if (isDarkTheme) {
    themeRelatedComputedColors = {
      'buttons-active': darkenColor(semanticColors.buttons, 10),
      'buttons-hover': darkenColor(semanticColors.buttons, 5),
      'buttons-shadow': 'rgba(0, 0, 0, 0.2)',
      'buttons-inactive': lightenColor(semanticColors.background, 10),
      'main-text-inactive': darkenColor(semanticColors['secondary-buttons'], 5),
      'error-background': darkenColor(semanticColors.error, 35),
      highlight: lightenColor(semanticColors['secondary-buttons'], 5),
      icons: darkenColor(semanticColors['secondary-text'], 10),
      'icons-hover': semanticColors['secondary-text'],
      'illustration-background': lightenColor(semanticColors.background, 5),
      'links-hover': lightenColor(semanticColors.links, 15),
      'links-icons': darkenColor(semanticColors.links, 5),
      'links-background': darkenColor(semanticColors.links, 35),
      'popups-background': lightenColor(semanticColors.background, 10),
      'secondary-buttons-active': darkenColor(semanticColors['secondary-buttons'], 9),
      'secondary-buttons-hover': darkenColor(semanticColors['secondary-buttons'], 5),
      'main-text-active': darkenColor(semanticColors['main-text'], 9),
      'main-text-hover': saturateColor(lightenColor(semanticColors['secondary-text'], 39), 3),
      'secondary-text-active': semanticColors['secondary-buttons'],
      'secondary-text-hover': darkenColor(semanticColors['secondary-text'], 11),
      'success-background': darkenColor(semanticColors.success, 35),
      'tooltip-background': lightenColor(semanticColors.background, 30),
      'warning-background': darkenColor(semanticColors.warning, 35),
      'input-line': semanticColors['secondary-text'],
      'input-line-active': lightenColor(desaturateColor(semanticColors['buttons'], 0.2), 4),
      'input-line-disable': transparizeColor(semanticColors['secondary-text'], 0.3),
      'input-line-hover': darkenColor(semanticColors['secondary-text'], 11),
    };
  } else {
    themeRelatedComputedColors = {
      'buttons-active': lightenColor(semanticColors.buttons, 10),
      'buttons-hover': lightenColor(semanticColors.buttons, 5),
      'buttons-shadow': `rgba(${buttonsColorRGBArray.join(', ')}, 0.15)`,
      'buttons-inactive': semanticColors['secondary-buttons'],
      'main-text-inactive': rotateColor(darkenColor(semanticColors['secondary-buttons'], 15), 20),
      'error-background': lightenColor(semanticColors.error, 35),
      highlight: darkenColor(semanticColors['secondary-buttons'], 5),
      icons: lightenColor(semanticColors['secondary-text'], 10),
      'icons-hover': semanticColors['secondary-text'],
      'illustration-background': darkenColor(semanticColors.background, 3),
      'links-hover': darkenColor(semanticColors.links, 15),
      'links-icons': lightenColor(semanticColors.links, 5),
      'links-background': lightenColor(semanticColors.links, 35),
      'popups-background': semanticColors.background,
      'secondary-buttons-active': darkenColor(semanticColors['secondary-buttons'], 10),
      'secondary-buttons-hover': darkenColor(semanticColors['secondary-buttons'], 5),
      'main-text-active': lightenColor(desaturateColor(semanticColors['main-text'], 0.2), 26),
      'main-text-hover': lightenColor(desaturateColor(semanticColors['main-text'], 0.2), 18),
      'secondary-text-active': darkenColor(semanticColors['secondary-text'], 10),
      'secondary-text-hover': darkenColor(semanticColors['secondary-text'], 10),
      'success-background': lightenColor(semanticColors.success, 35),
      'tooltip-background': semanticColors.buttons,
      'warning-background': lightenColor(semanticColors.warning, 35),
      'input-line': darkenColor(semanticColors['secondary-buttons'], 10),
      'input-line-active': lightenColor(semanticColors['secondary-text'], 10),
      'input-line-disable': darkenColor(semanticColors['secondary-buttons'], 10),
      'input-line-hover': rotateColor(darkenColor(semanticColors['secondary-buttons'], 15), 20),
    };
  }

  const commonComputedColors = {
    'background-zero-opacity': `rgba(${backgroundColorRGBArray.join(', ')}, 0)`,
    divider: transparizeColor(semanticColors['secondary-text'], 0.4),
    'icons-active': darkenColor(semanticColors['secondary-text'], 15),
    'success-icons': lightenColor(semanticColors.success, 5),
  };

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
  isDarkColor,
  isValidColor,
};
