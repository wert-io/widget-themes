import Color from 'color';

const lightenColor = (colorString: string, amount: number): string => {
  const color = Color(colorString);

  return color.lightness(color.lightness() + amount).hex();
};
const darkenColor = (colorString: string, amount: number): string => lightenColor(colorString, -amount);
const saturateColor = (colorString: string, amount: number): string => {
  const color = Color(colorString);

  return color.saturate(amount).hex();
}
const desaturateColor = (colorString: string, amount: number): string => {
  const color = Color(colorString);

  return color.desaturate(amount).hex();
}
const rotateColor = (colorString: string, amount: number): string => {
  const color = Color(colorString);

  return color.rotate(amount).hex();
}
const transparizeColor = (colorString: string, amount: number): string => {
  const color = Color(colorString);

  return color.alpha(amount).string();
};
const getRGBArray = (colorString: string): number[] => {
  const color = Color(colorString);

  return color.rgb().array();
};
const isValidColor = (value: string): boolean => {
  let isValidColor = true;

  try {
    Color(value);
  } catch (error) {
    isValidColor = false;
  }

  return isValidColor;
};
const isDarkColor = (value: string): boolean => new Color(value).isDark();

export {
  getRGBArray,
  darkenColor,
  lightenColor,
  transparizeColor,
  saturateColor,
  desaturateColor,
  rotateColor,
  isDarkColor,
  isValidColor,
};
