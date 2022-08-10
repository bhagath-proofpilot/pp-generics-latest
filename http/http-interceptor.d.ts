declare function ApiInterceptor(): {
    request: import("axios").AxiosInterceptorManager<import("axios").AxiosRequestConfig<any>>;
    response: import("axios").AxiosInterceptorManager<import("axios").AxiosResponse<any, any>>;
};
export default ApiInterceptor;
