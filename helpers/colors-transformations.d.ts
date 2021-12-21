declare const lightenColor: (colorString: string, amount: number) => string;
declare const darkenColor: (colorString: string, amount: number) => string;
declare const transparizeColor: (colorString: string, amount: number) => string;
declare const getRGBArray: (colorString: string) => number[];
declare const isValidColor: (value: string) => boolean;
export { lightenColor, darkenColor, transparizeColor, getRGBArray, isValidColor, };
