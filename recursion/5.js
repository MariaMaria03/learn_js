
//function fib(n)
//{
//    if (n > 1)
//    {
//        return (fib(n - 1) + fib(n - 2));
//    }
//    else
//    {
//        return n;
//    }
//}

console.log(fib(7));


function fib(n)
{
    var a = 0, b = 1, c = 1;
    if (n < 3)
    {
        return 1;

    }
    else
    {
        for (var i = 3; i <= n; i++)
        {

                a = b + c;
                b = c;
                c = a;
        }
        return a;
    }

}

//function fib(n)
//{
//    if (n < 3)
//    {
//        return 1;
//
//    }
//    else
//    {
//        var result = 1, prev = 0;
//        for (var i = 3; i <= n; i++)
//        {
//
//            result += prev;
//            prev = result - prev;
//        }
//        return result;
//    }
//
//}