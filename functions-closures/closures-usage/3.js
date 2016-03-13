
function makeBuffer() {
    var text = '';
    function buffer(word) {
        if (arguments.length == 0) {
            return text;
        }
        text += word;
    }

    buffer.clear = function() {
        text = '';
    };

    return buffer;
}

var buffer = makeBuffer();

buffer('Учитесь');
buffer(' программировать');
buffer(' на JavaScript. :)');
buffer( 2016);
buffer(' г.');

alert(buffer());

buffer.clear();

alert(buffer());

buffer('Это');
buffer(' проверка');
alert(buffer());