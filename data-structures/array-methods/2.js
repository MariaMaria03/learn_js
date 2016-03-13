
function camelize(str) {
    var massStr = str.split('-');

    for (var i = 1; i < massStr.length; i++) {
        massStr[i] = massStr[i][0].toUpperCase() + massStr[i].slice(1);
    }

    return massStr.join('');
}

alert(camelize('creating-branch-project-git'));
