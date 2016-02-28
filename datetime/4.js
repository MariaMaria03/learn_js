
var date = new Date(2015, 10, 14);

function getDateAgo(date, countDay) {
    var newDate = new Date();
    newDate.setDate(date.getDate() - countDay);
    alert(newDate);
    return newDate.getDate();
}

alert(getDateAgo(date, 300));
