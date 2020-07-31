'use strict';

// FDS Create function conc which should concatenate two parameters a and b and return concatanating string 
// using Function Declaration Statement (FDS). Call this function before its declaration. 
// Test Data: a = “1”, b = “1”, result = “11” a = 1, b = 1, result = “11”

calc(1, 1);

function calc(a, b) {
    a = String(a);
    b = String(b);
    return console.log(a + b);
}