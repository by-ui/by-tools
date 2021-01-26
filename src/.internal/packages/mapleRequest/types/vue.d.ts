declare module 'vue/types/vue' {
    interface Vue {
        /**
         * MapleRequset请求
         *
         * @param {string} name 请求标识符
         * @param {{ [key: string]: any }} data 参数/数据
         * @param {boolean | number | string} [loading=false] 开启加载中处理 假设 Loading 需要覆盖的 DOM 节点。可传入一个 DOM 对象或字符串；若传入字符串，则会将其作为参数传入 document.querySelector以获取到对应 DOM 节点
         * @param {(string | boolean)} [query=false] 开启响应队列
         * @returns 请求结果
         * @memberof Vue
         */
        $request(key: string, data?: { [key: string]: any }, loading?: boolean | number | string, queue?: string | boolean): Promise<any> & string;
    }
}
