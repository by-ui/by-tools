/*
 * @Author: xiaokangzheng 
 * @Date: 2019-12-17 11:01:36 
 * @Last Modified by: xiaokangzheng
 * @Last Modified time: 2019-12-17 11:10:34
 */
class bystring {
    static getQueryString(name: string) {
        var reg = new RegExp("(^|&|\\?)" + name + "=([^&]*)(&|$)", "i");
        var r = window.location.href.match(reg);
        if (r != null) return unescape(r[2]).replace('#/', '');
        return '';
    }
}

export default bystring;