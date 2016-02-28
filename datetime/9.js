
//исправить
function formatDate(date) {
    alert(date);
    new_date = new Date();
    if (new_date.getSeconds() - date.getSeconds() < 1) {
        return "Только что";
    }
    else if (new_date.getMinutes() - date.getMinutes() < 1) {
        return new_date.getSeconds() - date.getSeconds() + " сек. назад";
    }
    else if (new_date.getHours() - date.getHours() < 1) {
        return new_date.getMinutes() - date.getMinutes() + " мин. назад";
    }
    else {
        return date;
    }

}

alert(formatDate(new Date(new Date - 1)));
alert( formatDate(new Date(new Date - 35 * 1000)) );
alert( formatDate(new Date(new Date - 14 * 60 * 1000)) );
alert( formatDate(new Date(new Date - 86406 * 1000)) );