
function createCalc() {
    var mass = [];

    while (true) {
        elem = prompt('Вводите элемент массива', '');
        if ((elem === null) ||  elem === "" || isNaN(elem)) {
            break;
        }

        mass.push(+elem);
    }

    var summElem = 0;
    for (var i = 0; i < mass.length; i++){
        summElem += mass[i];
        alert(mass[i]);
    }


    return summElem;
}

alert(createCalc());
