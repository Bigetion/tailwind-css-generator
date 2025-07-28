export function getConfigOptions(options?: {}, pluginKeys?: any[]): {
    variants: {};
    theme: {};
    vars: {
        transform: string;
        filter: string;
        backdropFilter: string;
    };
    prefix: string;
};
export function generateCssString(getCssString?: () => void, options?: {}): void;
