import defaultSemantic from './themes/default.json';
import darkSemantic from './themes/dark.json';

import {
  getRGBArray,
  darkenColor,
  lightenColor,
  transparizeColor,
  isDarkColor,
  isValidColor,
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
  'secondary-text-hover'?: string
  'icons-active'?: string
  'success-icons'?: string
}
interface theme {
  [x: string]: string
}

const defaultSemanticColors = <semanticColors> defaultSemantic;
const darkSemanticColors = <semanticColors> darkSemantic;

const makeThemeFromSemantic = (semanticColors: semanticColors, isDarkTheme: boolean): theme => {
  const buttonsColorRGBArray = getRGBArray(semanticColors.buttons);
  const secondaryTextColorRGBArray = getRGBArray(semanticColors['secondary-text']);
  const backgroundColorRGBArray = getRGBArray(semanticColors.background);

  let themeRelatedComputedColors = <computedColors> {};

  if (isDarkTheme) {
    themeRelatedComputedColors = {
      'buttons-active': darkenColor(semanticColors.buttons, 10),
      'buttons-hover': darkenColor(semanticColors.buttons, 5),
      'buttons-shadow': 'rgba(0, 0, 0, 0.2)',
      'error-background': darkenColor(semanticColors.error, 35),
      highlight: lightenColor(semanticColors['secondary-buttons'], 5),
      icons: darkenColor(semanticColors['secondary-text'], 10),
      'icons-hover': semanticColors['secondary-text'],
      'illustration-background': lightenColor(semanticColors.background, 5),
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
      icons: lightenColor(semanticColors['secondary-text'], 10),
      'icons-hover': semanticColors['secondary-text'],
      'illustration-background': darkenColor(semanticColors.background, 3),
      'links-hover': darkenColor(semanticColors.links, 15),
      'links-icons': lightenColor(semanticColors.links, 5),
      'links-background': lightenColor(semanticColors.links, 35),
      'popups-background': semanticColors.background,
      'secondary-buttons-active': darkenColor(semanticColors['secondary-buttons'], 10),
      'secondary-buttons-hover': darkenColor(semanticColors['secondary-buttons'], 5),
      'success-background': lightenColor(semanticColors.success, 35),
      'tooltip-background': semanticColors.buttons,
      'warning-background': lightenColor(semanticColors.warning, 35),
    };
  }

  const iconsColorRGBArray = getRGBArray(themeRelatedComputedColors.icons as string);
  const commonComputedColors = {
    'background-zero-opacity': `rgba(${backgroundColorRGBArray.join(', ')}, 0)`,
    'buttons-inactive': transparizeColor(semanticColors.buttons, 0.03),
    divider: transparizeColor(semanticColors['secondary-text'], 0.4),
    'input-line': `rgba(${secondaryTextColorRGBArray.join(', ')}, 0.6)`,
    'input-line-active': `rgba(${buttonsColorRGBArray.join(', ')}, 0.6)`,
    'input-line-disable': `rgba(${iconsColorRGBArray.join(', ')}, 0.3)`,
    'main-text-inactive': transparizeColor(semanticColors['main-text'], 0.2),
    'secondary-text-hover': darkenColor(semanticColors['secondary-text'], 10),
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
