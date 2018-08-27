/**
 * @param {number[][]} A
 * @return {number[][]}
 */
var flipAndInvertImage = function(A) {
    return A.map(row => row.reverse().map(v => v ? 0 : 1))
};
