'use strict';
//task 1.1
let sum = 0;
function sumEL(a, b) {
    while (a < b) {
        a++;
        if (a < b) {
            sum += a;
        }
    }
}
sumEL(1, 10);
console.log(sum);

//task 1.2
let c;

function el(a, b) {
    while (a < b) {
        a++;
        if (a % 2 !== 0) {
            console.log(a);
        }
    }
}
el(1, 10);
