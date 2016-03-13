/**
 * Created by maria on 05.01.16.
 */
browser = 'Chrome';

function ifOperator(browser)
{
    if (browser == 'IE')
    {
        alert( 'Мда, у вас IE :(' );

    }
    else if (browser == 'Chrome' || browser == 'Firefox' || browser == 'Safari')
    {
        alert('Отлично!');
    }
    else
    {
        alert('В вашем браузере, надеемся, все ок.');
    }
}

ifOperator(browser);