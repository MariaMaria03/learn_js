/**
 * Created by maria on 05.01.16.
 */
 function checkAge(age)
 {
    return (age > 18) ? true : confirm('Родители разрешили?');
 }

age = 12;

checkAge(age);

age = 21;

function checkAge2(age)
{
    return age > 18 || confirm('Родители разрешили?');
}

checkAge2(age);