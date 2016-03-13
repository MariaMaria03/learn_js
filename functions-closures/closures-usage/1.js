
function sum(a) {
    return function(b) {
        return a + b;
    };
}



alert(sum(14)(9));