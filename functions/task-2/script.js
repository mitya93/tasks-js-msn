'use strict';

// FDE Create function comp which should compare two parameters a and b and return 1 if a equal b 
// and -1 if a not equal b using Function Definition Expression (FDE). Call this function before its declaration. 
// Test Data: a = “abc”, b = “abc”, result = 1 a = “abC”, b = “abc”, result = -1

decl();
function decl(){
    const comp = function(a, b) {
    if (a == b) {
        return 1;
    } else {
        return -1;
    }
};
console.log(comp('abc', 'aBc'));
}

/* В таске сказано, что нужно использовать FDE функцию и вызвать её до её объявления, 
но FDE функцию мы не можем вызвать до её объявления, 
как например функцию FDS:
func();
function func(a, b) {
    return a + b;
} 
поэтому Я нашёл данный выход из ситуации: объявить FDE функцию внутри FDS функции, которую мы и вызовем до её объявления! */