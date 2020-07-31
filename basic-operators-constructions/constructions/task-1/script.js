'use strict';

// Дано два числа A и B где (A<B).  
// Выведите на экран суму всех чисел расположенных в числовом промежутке от А до В.  

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


// Выведите на экран все нечетные значения, расположенные в числовом промежутке от А до В. 

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
