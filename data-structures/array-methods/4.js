
function filterRangeInPlace(mass, a, b) {
    for (var i = 0; i < mass.length; i++) {
        if (mass[i] <= a || mass[i] >= b) {
            mass.splice(i, 1);
            i--;
        }
    }
}

mass = [54, 433, 75, 12, 87, 93, 199];
alert(mass);

filterRangeInPlace(mass, 74, 200);

alert(mass);
