/**
 * Created by maria on 04.01.16.
 */
var age = prompt('Введите цифру > 100', '');

while (age < 100 && age != null)
{
    age = prompt('Введите цифру > 100', '');
}

number:
for (var n = 2; n < 11; n++)
{
    for (var i = 2; i < n; i++)
    {
        if (n%i == 0)
        {
            continue number;
        }
    }
    alert(n);

}