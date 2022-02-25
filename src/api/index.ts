import { AxiosResponse } from 'axios';

import HttpRequest from '@src/helpers/request';

export const API_NAMES = {
    POSTS: '/posts',
};

interface RequestPostParams {
    search?: string;
    _start?: number;
    _end?: number;
}

class API extends HttpRequest {
    getPosts(params?: RequestPostParams): Promise<AxiosResponse<any[]>> {
        return this.get(API_NAMES.POSTS, { ...params });
    }
}

export default new API();
