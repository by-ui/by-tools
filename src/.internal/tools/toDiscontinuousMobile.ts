/*
 * @Author: xiaokangzheng 
 * @Date: 2019-12-12 11:02:05 
 * @Last Modified by: xiaokangzheng 
 * @Last Modified time: 2019-12-12 11:02:05 
 */

/**
 * 转为间断的手机号
 *
 * @param {string} mobile 手机号
 */
function toDiscontinuousMobile(mobile: string) {
    let result = mobile;
    result = result.replace(/[^(\d|\s)]/g, ''); //只保留数字和空格
    result = result.replace(/^(\d{1,3})\s?(\d{1,4})?\s?(\d{1,4})?$/, '$1 $2 $3'); //添加空格
    result = result.replace(/\s+$/, ''); //去除末尾不必要的空格

    return result;
}

export default toDiscontinuousMobile;
