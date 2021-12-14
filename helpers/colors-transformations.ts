import Color from 'color';

const lightenColor = (colorString: string, amount: number): string => {
  const color = Color(colorString);

  return color.lightness(color.lightness() + amount).hex();
};
const darkenColor = (colorString: string, amount: number): string => lightenColor(colorString, -amount);
const transparizeColor = (colorString: string, amount: number): string => {
  const color = Color(colorString);

  return color.alpha(amount).string();
};
const getRGBArray = (colorString: string): number[] => {
  const color = Color(colorString);

  return color.rgb().array();
};

export {
  lightenColor,
  darkenColor,
  transparizeColor,
  getRGBArray,
};
