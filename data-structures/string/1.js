/**
 * Created by maria on 07.02.16.
 */
//function ucFirst(str) {
//    return (str[0].toUpperCase() + str.substring(1));
//}
//
//alert(ucFirst("планета Земля"));


//function checkSpam(str) {
//    var new_str = str.toLowerCase();
//    if ((new_str.indexOf("viagra") != -1) || (new_str.indexOf("xxx") != -1)) {
//        return true;
//    }
//    else {
//        return false;
//    }
//}
//
//alert(checkSpam("sdfsdfsdXxXiAgragfbhgf"));

//function truncate(str, maxlength) {
//    var points = "...";
//    if (str.length > maxlength) {
//        return str.substr(0, maxlength - 3) + points;
//    }
//    else {
//        return str;
//    }
//}
//
//alert(truncate("Сейчас я изучаю курс по языку программирования JavaScript", 31));

function extractCurrencyValue(str) {
    return +str.substring(1);
}

alert(extractCurrencyValue("Р141"));