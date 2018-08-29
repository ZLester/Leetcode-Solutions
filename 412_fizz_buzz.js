/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function(n) {
    return Array.from({ length: n }, (_, i) => {
        const n = i + 1;
        if (n % 15 === 0) {
            return 'FizzBuzz';
        } 
        if (n % 3 === 0) {
            return 'Fizz';
        }
        if (n % 5 === 0) {
            return 'Buzz';
        }
        return String(n);
    });
};
