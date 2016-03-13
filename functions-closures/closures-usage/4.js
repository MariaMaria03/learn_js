
var users = [{
    name: "Вася",
    surname: 'Иванов',
    age: 17
}, {
    name: "Петя",
    surname: 'Чапаев',
    age: 34
}, {
    name: "Маша",
    surname: 'Медведева',
    age: 7
}];

function byField(field) {
    return function(a, b) {
        return a[field] > b[field] ? 1 : -1;
    }
}

users.sort(byField('name'));
users.forEach(function(user) {
    alert( user.name );
});

users.sort(byField('age'));
users.forEach(function(user) {
    alert( user.name );
});