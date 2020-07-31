'use strict';

const input = document.querySelectorAll('input');
//task 2
input[0].addEventListener('input', updateValue);

function updateValue(e) {
    console.log(e.target.value);
}
//task 3
input[1].addEventListener('input', checkColor);

function checkColor(e) {
    input[1].style.backgroundColor = event.target.value;
}
