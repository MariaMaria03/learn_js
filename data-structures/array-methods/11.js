
var arr_words = ["язык", "знание", "книга", "Книга", "язык", "архИтектура", "архитектура"];

function getUnique(arr) {
    var new_arr =  arr.slice();
    for (var i = 0; i < arr.length; i++) {
        new_arr[i] = new_arr[i].toLowerCase();
    }

    for (var i = 0; i < arr.length; i++) {
        if ((new_arr.indexOf(new_arr[i], i + 1)) != -1) {
            new_arr.splice(i, 1);
        }
    }

    return new_arr;
}

alert(getUnique(arr_words));

