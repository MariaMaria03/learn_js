
function filterRange(arr, a, b) {
    filtered = [];

    for (var i = 0; i < arr.length; i++) {
        if (arr[i] >= a && arr[i] <= b) {
            filtered.push(arr[i]);
        }
    }

    return filtered;
}

var mass = [54, 12, 74, 53, 12, 78, 41, 7, 245, 83, 32];

alert(filterRange(mass, 35, 79));
