import { PluginObject } from './types/plugin';
import MapleRequestPlugin from './maple-request-plugin';

import MapleRequestApis, { api } from './maple-request-apis';

import { AxiosRequestConfig } from 'axios';

interface _AxiosRequestConfig extends AxiosRequestConfig {
    mock?: {
        url: string
        config: any
    };
}


class MapleRequestConfig {
    /** 创建axios实例时的通用配置 */
    create: _AxiosRequestConfig = {};
    /** api列表 */
    apis: MapleRequestApis = {};
    /** 拦截器 */
    interceptors!: {
        request: (config: any) => any;
        requestError: (error: any) => any;
        response: (response: any) => any;
        responseError: (error: any) => any;
    };
    /** loading的处理函数 */
    loading!: {
        start(): void;
        close(): void;
    };
    /** 预处理 */
    pre!: {
        request: (data: { [key: string]: any }) => void;
        response: (result: any) => void;
        responseError: (error: any) => void;
    };
}

const MapleRequest: PluginObject<MapleRequestConfig> = {
    install(Vue, options) {
        Vue.use(MapleRequestPlugin, options);
    },
};

const mapleRequest = { api, MapleRequestConfig, MapleRequest };

export { mapleRequest };
