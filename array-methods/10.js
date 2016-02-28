
var arr = ["воз", "киборг", "корсет", "ЗОВ", "гробик", "костер", "сектор"];

function aclean(arr) {
    var new_arr =  arr.slice();
    for (var i = 0; i < arr.length; i++) {
        new_arr[i] = new_arr[i].toLowerCase().split('');
        new_arr[i] = new_arr[i].sort(compareNumeric).join('');
    }
    for (var i = 0; i < arr.length; i++) {
        if (new_arr.indexOf(new_arr[i]) != -1) {
            arr.splice(i, 1);
        }
    }

    return arr;
}

function compareNumeric(a, b) {
    if (a > b) return 1;
    if (a < b) return -1;
}

alert(aclean(arr));
