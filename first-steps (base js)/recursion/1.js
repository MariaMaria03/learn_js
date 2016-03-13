/**
 * Created by maria on 07.01.16.
 */
 function sumTo(n)
{
    for (var i = n - 1; i >= 1; i-- )
    {
        n += i;
    }
    return n
}

console.log(sumTo(572));