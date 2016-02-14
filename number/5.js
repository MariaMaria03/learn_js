/**
 * Created by maria on 15.01.16.
 */
function getDecimal(num) {
    return ((num - (num ^ 0)).toFixed(4));
}

var num = +prompt("Введите число нецелое", '');
alert(getDecimal(num));