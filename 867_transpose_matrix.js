/**
 * @param {number[][]} A
 * @return {number[][]}
 */
var transpose = function(A) {
    const res = Array.from({ length: A[0].length }, () => []);
    for (let i = 0; i < A.length; i++) {
        const row = A[i];
        for (let j = 0; j < row.length; j++) {
            res[j][i] = row[j];
        }
    }
    return res;
};
