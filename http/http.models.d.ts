export interface ObjectKeyPair {
    [key: string]: any;
}
export declare type METHODS = 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELET';
export declare type ParamsData = Array<any> | Array<ParamsData>;
export declare type QueryPramsArray = [any, any];
export interface HttpPayload {
    queryParams?: ObjectKeyPair;
    queryParamsArray?: QueryPramsArray[];
    paramsData?: ParamsData[];
    data?: any;
    baseURL?: string;
    apiBaseUrl?: string;
    [key: string]: any;
}
