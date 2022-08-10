export declare class StorageService {
    static _prefix: string;
    static getItem(name: string): any;
    static setItem(name: any, value: any): void;
    static hasItem(name: any): boolean;
    static clear(name: string): void;
    static clearAll(): void;
    static _getKey(name: string): string;
}
