# widget-themes
WertWidget Themes Helper

`@wert-io/widget-themes` provides default required colors for WertWidget and a function that makes a theme from them.

## Installation

```
yarn add @wert-io/widget-themes
```

or

```
npm install @wert-io/widget-themes
```

## Documentation

```
import {
  defaultSemanticColors,
  darkSemanticColors,
  makeThemeFromSemantic,
 } from '@wert-io/widget-themes';
```

**makeThemeFromSemantic** function usage example:
```
const customizedColors = {
  ...defaultSemanticColors,
  buttons: '#000000',
};
const isDarkTheme = false;
const themeColors = makeThemeFromSemantic(customizedColors, isDarkTheme);
```
