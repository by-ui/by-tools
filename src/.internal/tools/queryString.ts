/*
* @Author: xiaokangzheng 
* @Date: 2019-12-04 09:33:41 
 * @Last Modified by: xiaokangzheng
 * @Last Modified time: 2019-12-04 09:46:17
*/

/**
 * 从URL解析参数
 * @param {*} 参数名 
 */
function getQueryString(name: string) {
    var reg = new RegExp("(^|&|\\?)" + name + "=([^&]*)(&|$)", "i");
    var r = window.location.href.match(reg);
    if (r != null) return unescape(r[2]).replace('#/', '');
    return '';
}

export default getQueryString;
