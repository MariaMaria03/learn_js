var arr = [1, 2, 3, 4, 5, 6, 7];



alert(filter(arr, function(a) {
    return a % 2 == 0
}));

alert(filter(arr, inBetween(3, 6)) );

alert(filter(arr, inArray([1, 2, 10])) );