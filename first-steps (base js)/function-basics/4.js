/**
 * Created by maria on 05.01.16.
 */
function pow(x, n)
{
    var answer = x;
    for (var i = 1; i < n; i++)
    {
        answer *= x;
    }

    return answer;
}

var first = prompt("Введите число для возведения его в степень", '');
var second = prompt("Введите степень", '');

if (second <= 1 || second/second != 1)
{
    alert('Степень' + n + 'не поддерживается');
}
else
{
    alert(pow(first, second));
}
