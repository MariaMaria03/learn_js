
//function isEmpty(obj) {
//    for (var key in obj) {
//        return false;
//    }
//
//    return true;
//}
//
//var asd = { name: 'Rokky'};
//
//alert(isEmpty(asd));

//var salaries = {
//    "Вася": 150,
//    "Дима": 237,
//    "Катя": 201
//};
//
//function sumSal(obj) {
//    var sumCommon = 0;
//
//    for (var pay in obj) {
//        sumCommon += obj[pay];
//    }
//
//    return sumCommon;
//}
//
//alert("Сумма зарплат:" + sumSal(salaries));


//var salaries = {
//    "Вася": 150,
//    "Дима": 437,
//    "Катя": 201,
//    "Владимир": 305
//};
//
//function sumSal(obj) {
//    var nameEmployee = "Нет сотрудников";
//    var prevValue = 0;
//
//    for (var empl in obj) {
//
//        if (prevValue < obj[empl]) {
//            nameEmployee = empl;
//            prevValue = obj[empl];
//        }
//
//    }
//
//    return nameEmployee;
//}
//
//alert("Имя сотрудника, у которого самая большая зарплата: " + sumSal(salaries));



var price = {
    "tomato": 201,
    "apple": 55,
    "kivi": "not have",
    "orange": 61,
    "avokado": "not have"
};

function multiplyNumeric(obj) {
    var mass = []

    for (var key in obj) {
        if (isNumeric(obj[key])) {
            obj[key] *= 2;
        }

        mass.push(obj[key]);
    }

    return mass
}

function isNumeric(num) {
    return !isNaN(parseFloat(num)) && isFinite(num);
}


alert(multiplyNumeric(price));























































