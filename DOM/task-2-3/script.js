'use strict';

// Create a function that gets the value of <input type="text"> ands prints its value to the console

const input = document.querySelectorAll('input');

input[0].addEventListener('input', updateValue);

function updateValue(e) {
    console.log(e.target.value);
}

// Crеate a function that gets the value of <input type="color"> and sets the background of the body to this value

input[1].addEventListener('input', checkColor);

function checkColor(e) {
    input[1].style.backgroundColor = event.target.value;
}
