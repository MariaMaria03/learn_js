
function summArgs() {
    var sum = 0;
    for (var i = 0; i < arguments.length; i++) {
        sum += arguments[i];
    }

    return(sum);
}

alert(summArgs(1, 43, 9, 8));
alert(summArgs(5, 12));
alert(summArgs());



