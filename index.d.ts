interface semanticColors {
    background: string;
    buttons: string;
    'buttons-text': string;
    icons: string;
    links: string;
    'main-text': string;
    'scroll-thumb': string;
    'scroll-track': string;
    'secondary-buttons': string;
    'secondary-buttons-text': string;
    'secondary-text': string;
    success: string;
    warning: string;
    error: string;
}
interface theme {
    [x: string]: string;
}
declare const _default: {
    defaultSemanticColors: semanticColors;
    darkSemanticColors: semanticColors;
    makeThemeFromSemantic: (semanticColors: semanticColors, isDarkTheme: boolean) => theme;
    isValidColor: (value: string) => boolean;
};
export = _default;
