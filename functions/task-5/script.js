'use strict';

// IIFE Make the function conc immediately-invoked function expression  

const func = ( function calc() {
   return 'IIFE';
})();
console.log(func);