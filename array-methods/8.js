
var vasya = { name: "Вася", age: 23 };
var masha = { name: "Маша", age: 18 };
var vovochka = { name: "Вовочка", age: 6 };
var andrei = { name: "Андрей", age: 19 };

var people = [ vasya , masha , vovochka, andrei ];

people.sort(compareNumeric);

function compareNumeric(a, b) {
    if (a.age > b.age) return 1
    else return -1
}

var nameP = [];
for (var i = 0; i < people.length; i++) {
    nameP.push(people[i].name);
}

alert(nameP);

