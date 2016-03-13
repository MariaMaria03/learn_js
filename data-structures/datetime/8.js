var date = new Date(2014, 7, 14);
//
// короткий вариант
//function formatDate(date) {
//   return (date.toLocaleString("ru", { year: '2-digit', month: '2-digit', day: '2-digit'}));
//
//}
//
//alert(formatDate(date));

function formatDate(date) {
    var day = date.getDate();
    if (day < 10) day = "0" + day;

    var month = date.getMonth() + 1;
    if (month < 10) month = "0" + month;

    var year = date.getFullYear();
    year = year.toString().substr(-2);
    if (year < 10) year = "0" + year;

    return day + "." + month + "." + year;
}

alert(formatDate(date));
