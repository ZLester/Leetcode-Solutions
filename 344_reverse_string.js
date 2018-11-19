/**
 * @param {string} s
 * @return {string}
 */
var reverseString = function(s) {
    let result = '';
    for (let i = s.length - 1; i >= 0; i--) {
        result += s[i];
    }
    return result;
};
