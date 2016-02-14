function fibBinet(n) {
    var prevRes = (Math.pow(((1 + Math.sqrt(5))/2), n))/Math.sqrt(5);
    var result = Math.floor(prevRes);
    return result;
}

var res = fibBinet(77);
alert(res);