/*
Escribe un método que, introduciendole un número N que representa dónde
se encuentra actualmente el
minutero en un reloj, devuelva el ángulo
formado por el minutero y la marca de las 12 en punto en el reloj.
*/

function simpleClockAngle(num) {
    //Sabiendo que una circunf tiene 360º y una hora 60'

    //necesitamos saber cuantos º equivalen a 1'

    //360/60 = 6 ---> por cada minuto que la manilla del minutero se mueve, serán 6º

    return num * 6
}

simpleClockAngle(15);
