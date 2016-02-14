
var arr = ['Груша', 'Киви', 'Манго', 'Апельсин', 'Гранат'];

function getRandom(arr) {
    var rand = Math.floor(Math.random() * (arr.length));

    return arr[rand];
}

alert(getRandom(arr));
