'use strict';

function div() {
    let a = document.querySelectorAll('div');
    console.log(a);
    a.forEach((item) => {
     let b = item.querySelectorAll('div');
     console.log(b);
    });
}

div();
newDiv();

function newDiv() {
    let a = document.getElementsByTagName('div');
    console.log(a);
    for (let key of a) {
        let b = key.getElementsByTagName('div');
        console.log(b);
    }
    
}

