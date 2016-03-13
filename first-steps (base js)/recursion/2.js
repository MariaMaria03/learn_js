/**
 * Created by maria on 07.01.16.
 */
function sumTo(n)
{
    if (n > 1)
    {
        return n + sumTo(n -1);
    }
    else
    {
        return n;
    }
}

console.log(sumTo(57));