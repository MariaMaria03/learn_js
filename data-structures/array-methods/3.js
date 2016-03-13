var words = {
    className: 'open menu house fruits house sun'
}

function removeClass(obj, cls) {
    var massiv = obj.className.split(' ');

    for (var i = 0; i < massiv.length; i++) {
        if (massiv[i] == cls) {
            massiv.splice(i, 1);
        }
    }
    obj.className = massiv.join(' ');

    return obj.className;
}

alert(removeClass(words, "house"));