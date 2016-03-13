function getSummMax(mass) {
    var summ = 0;
    var globalSumm = 0;

    for (var i = 0; i < mass.length; i++) {
        for (var j = i; j < mass.length; j++) {
            summ += mass[j];
            if (summ > globalSumm) globalSumm = summ;
        }
        summ = 0;
    }

    return globalSumm;
}

var arr = [8, -21, 53, 12, -40, 200, -3, -4];
alert(getSummMax(arr));