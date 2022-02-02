declare const lightenColor: (colorString: string, amount: number) => string;
declare const darkenColor: (colorString: string, amount: number) => string;
declare const transparizeColor: (colorString: string, amount: number) => string;
declare const getRGBArray: (colorString: string) => number[];
declare const isValidColor: (value: string) => boolean;
declare const isDarkColor: (value: string) => boolean;
export { getRGBArray, darkenColor, lightenColor, transparizeColor, isDarkColor, isValidColor, };
