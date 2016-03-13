
//function makeBuffer() {
//    var massiv = [];
//    function buffer(a) {
//        if (a != undefined) {
//            a = a.toString();
//            massiv.push(a);
//        }
//        return massiv.join(' ');
//    }
//    return buffer;
//}
//
//var buffer = makeBuffer();
//
//buffer('Учитесь');
//buffer(' программировать');
//buffer(' на JavaScript. :)');
//buffer( 2016);
//buffer(' г.');
//
//
//alert(buffer());


// 2 реализация - более грамотная
function makeBuffer() {
    var text = '';
    function buffer(word) {
        if (arguments.length == 0) {
            return text;
        }
        text += word;
    }
    return buffer;
}

var buffer = makeBuffer();

buffer('Учитесь');
buffer(' программировать');
buffer(' на JavaScript. :)');
buffer( 2016);
buffer(' г.');


alert(buffer());