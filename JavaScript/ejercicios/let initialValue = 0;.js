let initialValue = 0;
let limit = 3;

for (let count1 = initialValue; count1 < limit; count1++) {

    console.log('Iteración ', count1, ' del bucle externo');

    for (let count2 = initialValue; count2 < limit; count2++) {
        console.log('Iteración ', count2, ' del bucle interno');
    }

    console.log("");
}