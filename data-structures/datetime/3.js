
var dateFeb = new Date(2013, 6, 21);

function getLocalDay(date) {
    if (date.getDay() == 0) return 7;
    return date.getDay()
}

alert(getLocalDay(dateFeb));

