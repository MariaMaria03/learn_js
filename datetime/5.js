
var date = new Date(2015, 10, 14);

function getLastDayOfMonth(year, month) {
    var date = new Date(year, month + 1, 0);
    return date.getDate();
}

alert(getLastDayOfMonth(2016, 1));
alert(getLastDayOfMonth(2014, 5));
