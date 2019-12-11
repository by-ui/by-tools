/*
 * @Author: xiaokangzheng 
 * @Date: 2019-12-04 09:43:46 
 * @Last Modified by: xiaokangzheng
 * @Last Modified time: 2019-12-04 09:46:08
 */

/**
 * 格式化日期
 * @param {*} datetime 时间
 * @param {*} format 格式化
 */
function formatDate(datetime: string | Date, format: string = 'YYYY-MM-DD HH:mm:ss') {
    if (typeof (datetime) == "string") {
        datetime = datetime.replace("年", "/").replace("月", "/").replace("日", "")
    }
    let date: Date;
    if (datetime instanceof Date) {
        date = datetime;
    } else {
        date = new Date(datetime);
    }

    const o: any = {
        'M+': date.getMonth() + 1, //月份
        'D+': date.getDate(),
        'd+': date.getDate(), //日
        'H+': date.getHours(),
        'h+': date.getHours(), //小时
        'm+': date.getMinutes(), //分
        's+': date.getSeconds(), //秒
        'q+': Math.floor((date.getMonth() + 3) / 3), //季度
        S: date.getMilliseconds(), //毫秒
    };

    if (/(y+)/.test(format)) {
        format = format.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length));
    }
    if (/(Y+)/.test(format)) {
        format = format.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length));
    }
    for (let k in o) {
        if (new RegExp('(' + k + ')').test(format)) {
            format = format.replace(RegExp.$1, RegExp.$1.length == 1 ? o[k] : ('00' + o[k]).substr(('' + o[k]).length));
        }
    }
    return format;
};

export default formatDate;
