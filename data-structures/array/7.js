
function find(arr, value) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] === value) {
            return i;
        }
    }

    return -1;

}

var massiv = ['dfsdf', 34, 432, 937, 'xx'];

alert(find(massiv, 432));
