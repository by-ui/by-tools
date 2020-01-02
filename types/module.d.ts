/**
 * 函数相关
 */
export namespace byfunction {

    /**
     * 防抖函数
     * @param func 需要执行的方法
     * @param wait 定时器时间（毫秒）
     * @param immediate 是否立即执行, 默认 false
     */
    export function debounce(func: Function, wait: number, immediate?: boolean): Function;

    /**
     * 节流函数
     * @param func 需要执行的方法
     * @param delay 延迟时间（毫秒）
     */
    export function throttle(func: Function, delay: number): Function;
}
/**
 * 数据相关
 */
export namespace data {

    /**
     * 深层拷贝
     * @param obj 需要转换的对象或数组
     */
    export function deepClone<T>(obj: T): T;
}

/**
 * 日期相关
 */
export namespace date {

    /**
     * 格式化日期
     * @param {*} datetime 时间
     * @param {*} format 格式化 非必传 默认'YYYY-MM-DD HH:mm:ss'
     */
    export function formDate(datetime: string | Date, format?: string): string;

    /**
     * 获取当前这一周的日期
     * 返回 xxxx-xx-xx ~ xxxx-xx-xx
     */
    export function getCurrentWeekDays(): string;

}

/**
 * 手机号相关
 */
export namespace phone {

    /**
     * 转为间断的手机号
     * @param {string} mobile 手机号
     */
    export function toDiscontinuousMobile(mobile: string): string;

    /**
     * 加密手机号中间四位
     * @param mobile 手机号
     * @param mark 加密符号 非必传 默认*
     */
    export function toEncryptMobule(mobile: string, mark?: string): string;

}

/**
 * 货币相关
 */
export namespace money {

    /**
     * 数字转中文大写
     * @param number 阿拉伯数字的钱
     */
    export function toChineseAmount(number: number): string;

}

/**
 * 字符串相关
 */
export namespace string {

    /**
     * 获取浏览器GET参数
     * @param name 
     */
    export function getQueryString(name: string): string;
}