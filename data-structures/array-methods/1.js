var words = {
    className: 'open menu house fruits sun'
}

function addClass(obj, cls) {
    var mass = obj.className.split(' ');

    if (mass.indexOf(cls) == -1) {
        mass.push(" " + cls);
    }
    obj.className = mass.join(' ');

    return obj.className;
}

alert(addClass(words, "phone"));
