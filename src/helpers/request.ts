import axios, { AxiosRequestConfig, AxiosStatic } from 'axios';
import { API_HOST } from 'config';

const DEFAULT_HEADERS = {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    'X-Requested-With': 'application/json',
};

export interface RequestParams {
    [key: string]: string | number | null | undefined | boolean;
}

export interface RequestBody {
    [key: string]: string | number | boolean | Record<string, unknown> | null | undefined;
}

class HttpRequest {
    private readonly headers: {
        [key: string]: string;
    };

    protected readonly apiUrl: string;
    private readonly axios: AxiosStatic;
    // private cancelToken: CancelTokenStatic;

    constructor() {
        this.headers = DEFAULT_HEADERS;
        this.apiUrl = API_HOST;
        this.axios = axios;
        // this.cancelToken = axios.CancelToken;
    }

    getURL(path: string) {
        return `${this.apiUrl}${path}`;
    }

    get(path: string, params?: RequestParams, config?: AxiosRequestConfig) {
        const requestUrl = this.getURL(path);
        const requestConfig: AxiosRequestConfig = {
            params,
            headers: this.headers,
            ...config,
        };
        return this.axios.get(requestUrl, requestConfig);
    }

    post(path: string, data?: RequestBody, config?: AxiosRequestConfig) {
        const requestUrl = this.getURL(path);
        const requestConfig: AxiosRequestConfig = {
            headers: this.headers,
            ...config,
        };

        return this.axios.post(requestUrl, data, requestConfig);
    }

    put(path: string, data?: RequestBody, config?: AxiosRequestConfig) {
        const requestUrl = this.getURL(path);
        const requestConfig: AxiosRequestConfig = {
            headers: this.headers,
            ...config,
        };

        return this.axios.put(requestUrl, data, requestConfig);
    }

    patch(path: string, data?: RequestBody, config?: AxiosRequestConfig) {
        const requestUrl = this.getURL(path);
        const requestConfig: AxiosRequestConfig = {
            headers: this.headers,
            ...config,
        };

        return this.axios.patch(requestUrl, data, requestConfig);
    }

    delete(path: string, params?: RequestParams, config?: AxiosRequestConfig) {
        const requestUrl = this.getURL(path);
        const requestConfig: AxiosRequestConfig = {
            params,
            headers: this.headers,
            ...config,
        };

        return this.axios.delete(requestUrl, requestConfig);
    }

    custom(config: AxiosRequestConfig) {
        return this.axios(config);
    }

    upload(path: string, data?: FormData, config?: AxiosRequestConfig) {
        const requestUrl = this.getURL(path);
        const requestConfig: AxiosRequestConfig = {
            headers: this.headers,
            ...config,
        };

        return this.axios.post(requestUrl, data, requestConfig);
    }
}

export default HttpRequest;
