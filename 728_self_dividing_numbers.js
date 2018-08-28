/**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */
var selfDividingNumbers = function(left, right) {
    const results = [];
    for (let i = left; i <= right; i++) {
        const isValid = String(i)
            .split('')
            .map(Number)
            .every(digit => i % digit === 0);
        if (isValid) {
            results.push(i);
        }
    }
    return results;
};
