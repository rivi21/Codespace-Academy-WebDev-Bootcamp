
let hours = 23;
let minutes = 59;
let seconds = 55;

const delay = 1000;
const seconds60 = setinterval(oneMinute, delay);
setInterval( 
    if (seconds > 59) {
    seconds = 0;
    minutes++;
}
if (minutes > 59) {
    minutes = 0;
    hours++
}
if (seconds < 10) {
    console.log('0' + seconds);
} else {
    console.log(seconds);
}
if (minutes < 10) {
    console.log('0' + minutes);
} else {
    console.log(minutes);
}
console.clear();
seconds++;
), delay)

/* function oneHour(minutes) {

    if (minutes < 10) {
        console.log('0' + minutes);
    } else {
        console.log(minutes);
    }
    console.clear();
    minutes++;
}

function oneDay(hours) {

    if (hours < 10) {
        console.log('0' + hours);
    } else {
        console.log(hours);
    }
    console.clear();
    hours++;
} */


//solucion clase


