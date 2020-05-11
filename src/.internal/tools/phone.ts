/*
 * @Author: xiaokangzheng 
 * @Date: 2019-12-17 11:01:36 
 * @Last Modified by: xiaokangzheng
 * @Last Modified time: 2019-12-17 11:10:34
 */
class phoneFormat {
    static toDiscontinuousMobile(mobile: string) {
        let result = mobile;
        result = result.replace(/[^(\d|\s)]/g, ''); //只保留数字和空格
        result = result.replace(/^(\d{1,3})\s?(\d{1,4})?\s?(\d{1,4})?$/, '$1 $2 $3'); //添加空格
        result = result.replace(/\s+$/, ''); //去除末尾不必要的空格

        return result;
    }

    static toEncryptMobule(mobile: string, mark: string = '*') {
        return mobile.replace(/^(\d{3})\d{4}(\d*)$/, `$1${mark}${mark}${mark}${mark}$2`);
    }
    
    static has(mobile: string) {
        if (!mobile) {
            return false;
        } else if (!/^[1][3-9][0-9]{9}$/.test(mobile)) {
            return false;
        } else {
            return true;
        }
    }
}

export default phoneFormat;