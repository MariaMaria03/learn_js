
var dateFeb = new Date(2012, 0, 7);

function getWeekDay(date) {
    return date.toLocaleString("ru", {weekday: "short"});
}

alert(getWeekDay(dateFeb));