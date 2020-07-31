 'use strict';
 
 function calcArithmetic() {
    let a = +prompt('Введите первое число', '');
    while (a == null || a == '' || isNaN(a)) {
        a = +prompt('Введите первое число', '');
     } 
    let b = +prompt('Введите второе число', ''); 
    while (b == null || b == '' || isNaN(b)) {
        b = +prompt('Введите второе число', '');
     }
    let c = +prompt('Введите третье число', '');
    while (c == null || c == '' || isNaN(c)) {
        c = +prompt('Введите третье число', '');
     }
    const x = (a + b + c) / 3;
    console.log(x);
    return alert(Math.round(x));
}
calcArithmetic();