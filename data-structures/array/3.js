
var styles = ['Джаз', 'Блюз'];

function changeArr(mass) {
    alert(mass);
    mass[mass.length] = 'Рок-н-Ролл';
    alert(mass);
    mass[mass.length - 2] = 'Классика';
    alert(mass);
    alert(mass.shift());
    mass.unshift('Рэп', 'Рэгги');

    return mass;
}

alert(changeArr(styles));
