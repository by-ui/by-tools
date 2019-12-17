
class date {

    /**
     * 格式化日期
     * @param {*} datetime 时间
     * @param {*} format 格式化
     */
    static formDate(datetime: string | Date, format: string = 'YYYY-MM-DD HH:mm:ss') {
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
    }

    /**
     * 获取当前这一周的日期
     * 返回 xxxx-xx-xx ~ xxxx-xx-xx
     */
    static getCurrentWeekDays() {
        const now: any = new Date()
        const weekFirstDay: any = new Date(now - (now.getDay() - 1) * 86400000)
        const firstMonth = Number(weekFirstDay.getMonth()) + 1
        const weekLastDay = new Date((weekFirstDay / 1000 + 6 * 86400) * 1000)
        const lastMonth = Number(weekLastDay.getMonth()) + 1
        const currentWeek = weekFirstDay.getFullYear() + '-' + firstMonth + '-' + weekFirstDay.getDate() + '~' + weekLastDay.getFullYear() + '-' + lastMonth + '-' + weekLastDay.getDate()

        return currentWeek;
    }
    
}

export default date;
