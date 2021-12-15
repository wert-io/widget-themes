const fs = require('fs');
const path = require('path');

const {
  defaultSemanticColors,
  makeThemeFromSemantic,
} = require('./index.js');

const writeDirectory = './styles';
const filename = 'set-theme-var.styl';
const defaultTheme = makeThemeFromSemantic(defaultSemanticColors);

const content = `$theme = {
  ${Object
    .entries(defaultTheme)
    .map(([key, color]) => `"${key}": ${color}`).join(',\n  ')}
}`;

if (!fs.existsSync(writeDirectory)){
  fs.mkdirSync(writeDirectory, { recursive: true });
}

fs.writeFileSync(path.join(writeDirectory, filename), content);
