
function eratochene() {
    var summSimple = 0;
    var arrNumber = [0, 0];
    var updateMass = [];
    var arrSimple = [];

    for (var i = 2; i < 101; i++) {
        arrNumber[i] = i;
    }

    for (var i = 2; i < 101; i++) {
        if (arrNumber[i] != 0) {
            summSimple +=  i;
            updateMass = changeArr(arrNumber, i);
        }
    }

    alert(summSimple);
    for (var i = 0; i < arrNumber.length; i++) {
        if (arrNumber[i] != 0) {
            arrSimple.push(arrNumber[i]);
        }
    }

    return arrSimple;
}

function changeArr(mass, num) {
    for (var i = num; i*num < 101; i++) {
        mass[i*num] = 0;
    }

    return mass;
}

alert(eratochene());