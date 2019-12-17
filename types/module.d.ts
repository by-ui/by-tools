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