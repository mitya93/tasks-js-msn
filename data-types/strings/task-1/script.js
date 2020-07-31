'use strict';

// Write a JavaScript function reverses string and returns it
//     * Example: "sample" -> "elpmas".

function reverseString(str) {
    let newStr = '';
    for (let i = str.length-1; i >= 0; i--) {
        newStr += str[i];
    }
    return newStr;
}
console.log(reverseString('Hello Wolrd!'));