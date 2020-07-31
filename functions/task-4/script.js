'use strict';

// NFE Create function fibo to calculate fibonachi numbers using named function expression 

const calcFibo = function fib(n) {
    if (n <=1) {
        return n;
    } else {
        return fib(n - 1) + fib(n - 2);
    }
  };
  console.log(calcFibo(7));