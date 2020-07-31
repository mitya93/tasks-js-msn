'use strict';

// Используя циклы нарисуйте в браузере с помощью пробелов (&nbsp) и звездочек (*): 
// +· Прямоугольник 
// *_*_*_*_*_
// _*_*_*_*_*
// *_*_*_*_*_
// _*_*_*_*_*
// *_*_*_*_*_
// _*_*_*_*_*
// *_*_*_*_*_
// _*_*_*_*_*

let horizCount = 5,
    vertCount = 8,
    star = '*_',
    whitespace = '_*';

for (let i = 0; i < vertCount; ++i) {
    let str = '';
        if (i % 2 == 0) {
            for (let j = 0; j < horizCount; ++j) {
                str += star;
              }
        } else {
            for (let j = 0; j < horizCount; ++j) {
                str += whitespace;
        }
    }
        console.log(str);
}


// Прямоугольный треугольник
// *
// **
// ***
// ****
// *****

vertCount = 5;

for (let i = 0; i < vertCount; ++i) {
    let str = '';
    switch (i) {
        case 0:
            str = '*';
            break;
        case 1:
            str = '**';
            break;
        case 2: 
            str = '***';
            break;
        case 3: 
            str = '****';
            break;
        case 4:
            str = '*****';
            break;
    }
    console.log(str);

}


// Равносторонний треугольник

for (let i = 0; i < vertCount; ++i) {
    let str = '';
    switch (i) {
        case 0:
            str = '    *';
            break;
        case 1:
            str = '   ***';
            break;
        case 2: 
            str = '  *****';
            break;
        case 3: 
            str = ' *******';
            break;
        case 4:
            str = '*********';
            break;
    }
    console.log(str);

}

// Ромб. 
// _____
// __*__
// _***_
// *****
// _***_
// __*__
// _____

vertCount = 7;
for (let i = 0; i < vertCount; ++i) {
    let str = '';
    switch (i) {
        case 0:
            str = '_____';
            break;
        case 1:
            str = '__*__';
            break;
        case 2: 
            str = '_***_';
            break;
        case 3: 
            str = '*****';
            break;
        case 4:
            str = '_***_';
            break;
        case 5:
            str = '__*__';
            break;
        case 6: 
            str = '_____';
            break;
    }
    console.log(str);

}


