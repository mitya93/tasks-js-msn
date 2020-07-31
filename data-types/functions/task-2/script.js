'use strict';

// Write a function that reverses the digits of given decimal number. Example: 256 -> 652

function reverseNumbers(num) {
    let rvsNum = '';
    num = String(num);
    for (let i = num.length-1; i >= 0; i--) {
        rvsNum += num[i];
    }
    return parseInt(rvsNum);
}
console.log(reverseNumbers('2362'));