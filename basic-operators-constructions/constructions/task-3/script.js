'use strict';
//task  3.1
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

//task  3.2
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

//task  3.3
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

//task  3.4
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


