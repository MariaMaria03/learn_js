/**
 * Created by maria on 15.01.16.
 */

function generateRandom(max) {
    return Math.random() * max;
}

function genRandDouble(min, max) {
    return (min + Math.random()*(max- min));
}

function randomInteger(min, max) {
    return Math.round(min - 0.5 + Math.random()*(max - min + 1));
}

//alert(generateRandom(8));
//
//alert(genRandDouble(-5, 8));

alert(randomInteger(-12, 37));