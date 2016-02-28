//var massNums = [43, 64, 12, 7, 1];
var massNums = [-3, 5, -7, -8, 13];

function getSums(array) {
    var new_arr = [];
     array.reduce(function(prevSum, current) {
         new_arr.push(prevSum + current);
         return prevSum + current;
    }, 0);

    return new_arr;
}

alert(getSums(massNums));