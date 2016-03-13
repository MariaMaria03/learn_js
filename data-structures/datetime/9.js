
//исправить
function formatDate(date) {
    new_date = new Date();
    difference = new_date - date;

    if (difference/1000 < 1) {
        return "Только что";
    }

    var sec = Math.floor(difference/1000);
    if (sec < 60) {
        return sec + " сек. назад";
    }

    var min = Math.floor(difference/60000);
    if (min < 60) {
        return min + " мин. назад";
    }

    var str_year = (date.getYear() + '').slice(-2);
    var str_day =  date.getDate();
    if (str_day < 10) {
        str_day = '0' + str_day;
    }
    var str_month = date.getMonth() + 1;
    if (str_month < 10) {
        str_month = '0' + str_month;
    }
    var str_date = str_day + '.' + str_month + '.' + str_year +
        ' ' + date.getHours() + ':' + date.getMinutes();
    return str_date
}

alert(formatDate(new Date(new Date - 1)));
alert(formatDate(new Date(new Date - 34 * 1000)));
alert(formatDate(new Date(new Date - 12 * 60 * 1000)));
alert(formatDate(new Date(new Date - 86400 * 1000)));