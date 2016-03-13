
function getSecondsToTomorrow() {
    var date = new Date();
    alert(date.getHours());
    return (3600 * 24 - (3600 * date.getHours() + 60* date.getMinutes() + date.getSeconds()));
}

alert(getSecondsToTomorrow());
