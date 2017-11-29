export default class dateService {
  //日期字符串转对象
  static dateStrToObj(messageStr) {
    let messageDate = {};
    //2015-10-12 15:34:55
    let reg = /(^\d{4})-(\d{1,2})-(\d{1,2})\s(\d{1,2}):(\d{1,2}):(\d{1,2})/g;
    let result = [];
    if (messageStr) {
      result = reg.exec(messageStr);
      if (!result) {
        console.log("result is null");
        return null;
      }
      messageDate.year = parseInt(result[1]);
      messageDate.month = parseInt(result[2]);
      messageDate.day = parseInt(result[3]);
      messageDate.hour = parseInt(result[4]);
      messageDate.minute = parseInt(result[5]);
      messageDate.second = parseInt(result[6]);
      // console.log(messageDate);
      return messageDate;
    } else {
      console.log("message is null");
      return null;
    }
  }


  //获得yyyy-M-d hh:mm:ss格式当前日期
  static getFormatCSTDate() {
    return dateService.formatDate(new Date(), "yyyy-M-d hh:mm:ss");
  }


  //格式化日期
  static formatDate(date, format) {
    let paddNum = function (num) {
      num += "";
      return num.replace(/^(\d)$/, "0$1");
    };
    //指定格式字符
    let cfg = {
      yyyy: date.getFullYear() //年 : 4位
      , yy: date.getFullYear().toString().substring(2)//年 : 2位
      , M: date.getMonth() + 1  //月 : 如果1位的时候不补0
      , MM: paddNum(date.getMonth() + 1) //月 : 如果1位的时候补0
      , d: date.getDate()   //日 : 如果1位的时候不补0
      , dd: paddNum(date.getDate())//日 : 如果1位的时候补0
      , hh: paddNum(date.getHours())  //时
      , mm: paddNum(date.getMinutes()) //分
      , ss: paddNum(date.getSeconds()) //秒
    };
    format || (format = "yyyy-MM-dd hh:mm:ss");
    return format.replace(/([a-z])(\1)*/ig, function (m) {
      return cfg[m];
    });
  }

  static chatDateFormat(date) {
    let paddNum = function (num) {
      num += "";
      return num.replace(/^(\d)$/, "0$1");
    }
    let validDate = function (date) {
      let dateObj = dateService.dateStrToObj(date);
      let nowDateObj = dateService.dateStrToObj(dateService.getFormatCSTDate());
      return !((nowDateObj.year - dateObj.year < 0) ||
        (nowDateObj.year - dateObj.year === 0 && nowDateObj.month - dateObj.month < 0) ||
        (nowDateObj.year - dateObj.year === 0 && nowDateObj.month - dateObj.month === 0 && nowDateObj.day - dateObj.day < 0));
    };

    let weekArray = ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"];
    if (date) {
      let dateObj = dateService.dateStrToObj(date);
      let nowDateObj = dateService.dateStrToObj(dateService.getFormatCSTDate());
      if (!validDate(date)) {
        return date;
      }
      if (nowDateObj.year - dateObj.year > 0) {
        return date;
      }
      if (nowDateObj.month - dateObj.month >= 0) {
        if (nowDateObj.month > dateObj.month || ((nowDateObj.month === dateObj.month) && (nowDateObj.day - dateObj.day >= 7))) {
          return dateObj.month + '-' + dateObj.day + " " + dateObj.hour + ":" + paddNum(dateObj.minute) + ":" + paddNum(dateObj.second);
        } else {
          let dayGap = nowDateObj.day - dateObj.day;
          if (dayGap === 0) {
            return "今天" + dateObj.hour + ":" + paddNum(dateObj.minute) + ":" + paddNum(dateObj.second);
          } else if (dayGap === 1) {
            return "昨天" + dateObj.hour + ":" + paddNum(dateObj.minute) + ":" + paddNum(dateObj.second);
          } else {
            let nowWeekTemp = new Date().getDay();
            let nowWeek = nowWeekTemp - dayGap < 0 ? nowWeekTemp - dayGap + 7 : nowWeekTemp - dayGap;
            return weekArray[nowWeek] + dateObj.hour + ":" + paddNum(dateObj.minute) + ":" + paddNum(dateObj.second);
          }
        }
      }
      return null;
    }
  }
}
