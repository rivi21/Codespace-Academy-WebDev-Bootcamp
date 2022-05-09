const arrayLength = 20;
let array = [];

for (let i = 0; i < arrayLength; i++) {

    array[i] = (Math.floor(Math.random() * 19 + 1));

    let compare = array[i];

    for (let j = 0; j < i; j++) {

        if (array[j] === compare) {

            array[j] = Math.floor(Math.random() * 19 + 1);

        }

    }
}
console.log(array);