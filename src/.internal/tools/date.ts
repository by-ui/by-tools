/*
 * @Author: xiaokangzheng 
 * @Date: 2019-12-17 13:53:22 
 * @Last Modified by: xiaokangzheng 
 * @Last Modified time: 2019-12-17 13:53:22 
 */

class date {

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

    static getCurrentWeekDays(param = { format: false }) {
        const now: any = new Date()
        const weekFirstDay: any = new Date(now - (now.getDay() - 1) * 86400000)
        const firstMonth = Number(weekFirstDay.getMonth()) + 1
        const weekLastDay = new Date((weekFirstDay / 1000 + 6 * 86400) * 1000)
        const lastMonth = Number(weekLastDay.getMonth()) + 1

        const start = weekFirstDay.getFullYear() + '-' + firstMonth + '-' + weekFirstDay.getDate();
        const end = weekLastDay.getFullYear() + '-' + lastMonth + '-' + weekLastDay.getDate();

        const currentWeek = start + '~' + end

        return !param.format ? currentWeek : this.getDateRange(start, end);
    }

    static getDateRange(stime: string, etime: string) {
        
        stime = this.formDate(stime, 'YYYY-MM-DD');
        etime = this.formDate(etime, 'YYYY-MM-DD');

        //初始化日期列表，数组
        let diffdate = new Array();
        let i = 0;
        //开始日期小于等于结束日期,并循环
        while (stime <= etime) {
            diffdate[i] = stime;

            //获取开始日期时间戳
            let stime_ts = new Date(stime).getTime();

            //增加一天时间戳后的日期
            let next_date = stime_ts + (24 * 60 * 60 * 1000);

            //拼接年月日，这里的月份会返回（0-11），所以要+1
            let next_dates_y = new Date(next_date).getFullYear() + '-';
            let next_dates_m = (new Date(next_date).getMonth() + 1 < 10) ? '0' + (new Date(next_date).getMonth() + 1) + '-' : (new Date(next_date).getMonth() + 1) + '-';
            let next_dates_d = (new Date(next_date).getDate() < 10) ? '0' + new Date(next_date).getDate() : new Date(next_date).getDate();

            stime = next_dates_y + next_dates_m + next_dates_d;

            //增加数组key
            i++;
        }

        return diffdate;
    }
}

export default date;
