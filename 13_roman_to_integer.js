/**
 * @param {string} s
 * @return {number}
 */

const map = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
};

var romanToInt = function(s) {
    const numbers = s.split('').map(roman => map[roman]);
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        const curNumber = numbers[i];
        const nextNumber = numbers[i + 1];
        if (curNumber < nextNumber) {
            sum += nextNumber - curNumber;
            i++;
        } else {
            sum += curNumber;
        }
    }
    return sum;
};
