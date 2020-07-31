'use strict';

let arr = [
    [ -2, -2, +2 , 4, -5],
    [ +3, +4, -1, -4, -9],
    [ -1, +4, +6, +8, -1],
    [ +1 , -2, 4, 6, +8],
    [ 9, -2, -1, +4, -9]
];
if (arr[0][0] < 0) {
    arr[0].splice(0, 1, 0);
} else {
    arr[0].splice(0, 1, 1);
}

if (arr[1][1] < 0) {
    arr[1].splice(1, 1, 0);
} else {
    arr[1].splice(1, 1, 1);
}

if (arr[2][2] < 0) {
    arr[2].splice(2, 1, 0);
} else {
    arr[2].splice(2, 1, 1);
}

if (arr[3][3] < 0) {
    arr[3].splice(3, 1, 0);
} else {
    arr[3].splice(3, 1, 1);
}

if (arr[4][4] < 0) {
    arr[4].splice(4, 1, 0);
} else {
    arr[4].splice(4, 1, 1);
}

console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2]);
console.log(arr[3]);
console.log(arr[4]);
