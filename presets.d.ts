export namespace presets {
    let full: {
        key: string;
        generate(config: any): any;
    }[];
    let minimal: {
        key: string;
        generate(config: any): any;
    }[];
    let layout: {
        key: string;
        generate(config: any): string;
    }[];
    let spacing: {
        key: string;
        generate(config: any): any;
    }[];
    let sizing: {
        key: string;
        generate(config: any): any;
    }[];
    let flexbox: {
        key: string;
        generate(config: any): any;
    }[];
    let grid: {
        key: string;
        generate(config: any): any;
    }[];
    let typography: {
        key: string;
        generate(config: any): any;
    }[];
    let colors: {
        key: string;
        generate(config: any): string;
    }[];
    let borders: {
        key: string;
        generate(config: any): any;
    }[];
    let effects: {
        key: string;
        generate(config: any): any;
    }[];
    let transforms: {
        key: string;
        generate(config: any): string;
    }[];
    let interactivity: {
        key: string;
        generate(config: any): string;
    }[];
    let animations: {
        key: string;
        generate(config: any): string;
    }[];
    let filters: {
        key: string;
        generate(config: any): string;
    }[];
    let tables: {
        key: string;
        generate(config: any): any;
    }[];
    let accessibility: {
        key: string;
        generate(config: any): void;
    }[];
}
