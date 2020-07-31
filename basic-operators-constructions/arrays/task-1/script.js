'use strict';

//Создать массив размерностью N элементов, заполнить его произвольными целыми значениями. 
//Вывести наибольшее значение массива, наименьшее значение массива, общую сумму элементов, 
//среднее арифметическое всех элементов, вывести все нечетные значения

let arr = [1, 4, 12, 92, 22, 4, 9, 10];
//вывести все нечетные значения
for (let i = 0; i < arr.length; i++) {
    if ((arr[i] % 2) !== 0) {
       console.log(arr[i]);
    }
}
// найти найменьшее значение в массиве
const maxNum = Math.min.apply(null, arr);
// найти найбольшее значение в массиве
const minNum = Math.max.apply(null, arr);
// найти общую сумму элементов массива
const sumEl = arr.reduce(function(a, b) {
    return a + b;
});
// среднее арифметическое значение всех элементов массива
const midEl = sumEl / arr.length;

console.log(maxNum);
console.log(minNum);
console.log(sumEl);
console.log(parseInt(midEl));