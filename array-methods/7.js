
var mass = [1, 3, 54, 78, 123, 534, 6, 71];
mass.sort(compareNumeric);

function compareNumeric(a, b) {
    if (Math.floor(Math.random()*10) < 5) return 1
    else return -1;
}

alert(mass);
