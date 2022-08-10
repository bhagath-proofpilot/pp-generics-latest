import { AxiosStatic } from "axios";
import { HttpPayload } from "./http.models";
declare class HttpClient {
    static apiBaseUrl: string;
    static setAPIBaseURL(opt: {
        baseURL: string;
        apiBaseURL: string;
    }): void;
    static getAxios(): AxiosStatic;
    static get(url: string, payload?: HttpPayload): import("axios").AxiosPromise<any>;
    static post(url: string, payload?: HttpPayload): import("axios").AxiosPromise<any>;
    static put(url: string, payload?: HttpPayload): import("axios").AxiosPromise<any>;
    static patch(url: string, payload?: HttpPayload): import("axios").AxiosPromise<any>;
    static delete(url: string, payload?: HttpPayload): import("axios").AxiosPromise<any>;
    static payload(method: string, url: string, payloadObj?: HttpPayload): {
        queryParams?: import("./http.models").ObjectKeyPair | undefined;
        queryParamsArray?: import("./http.models").QueryPramsArray[] | undefined;
        paramsData?: import("./http.models").ParamsData[] | undefined;
        data?: any;
        baseURL?: string | undefined;
        apiBaseUrl?: string | undefined;
        url: string;
        method: string;
    };
    static buildUrl(url: string, payload: HttpPayload): string;
    static mapParams(url: string, str: string, val: string): string;
    private static buildQuery;
}
export default HttpClient;
