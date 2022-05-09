let number = 1;
let line = " ";

let count = 0;
while (count < 15) {

    while (number <= 10) {
        line = line + number + " ";
        number++;
    }

    console.log(line);

    count++;
}


/* while (number <= 15) {

    console.log('1 2 3 4 5');
    number++
} */
