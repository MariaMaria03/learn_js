
var list = {
    value: 1,
    next: {
        value: 2,
        next: {
            value: 3,
            next: {
                value: 4,
                next: null
            }
        }
    }
};

// 1
//function printList(list) {
//    var flag = true;
//    var values_all = [];
//    while (flag) {
//        for (var key in list) {
//            values_all.push(list["value"]);
//            if (list["next"] != null) {
//                list = list["next"];
//            }
//            else {
//                flag = false;
//                break;
//            }
//        }
//    }
//
//    return values_all;
//}

// 2
//function printListRecurs(list) {
//    alert(list["value"]);
//    if (typeof list["next"] === "object" && list["next"] != null) {
//        printListRecurs(list["next"]);
//    }
//
//    return "end";
//}
//
//alert(printListRecurs(list));

// 3
//function printReverseListRecurs(list) {
//    if (list.next) {
//        printReverseList(list.next);
//    }
//
//    alert(list.value);
//    return "end";
//}
//
//alert(printReverseListRecurs(list));

// 4
function printListReverse(list) {
    // Вариант, когда известно что значения в объектах
    //  увеличиваются каждый раз на единицу (и начинаются с единицы).
    // !! вариант без создания отдельного массива для значений односвязного списка
    //var global_list = list;
    //var znach;
    //while (list.next) {
    //    list = list.next;
    //}
    //znach = list.value;
    //
    //while (znach != 0) {
    //    list = global_list;
    //    while (list.value != znach) {
    //        list = list.next;
    //    }
    //    alert(list.value);
    //    znach = znach - 1;
    //}
    //return "end";


    // реализация с отдельным массивом для хранения значений
    var arr_for_value = [];
    while (list) {
        arr_for_value.push(list.value);
        list = list.next;
    }

    for (var i = arr_for_value.length - 1; i >= 0; i--) {
        alert(arr_for_value[i]);
    }
    return "end";
}

alert(printListReverse(list));

