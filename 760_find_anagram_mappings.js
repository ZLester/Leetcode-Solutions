/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number[]}
 */
var anagramMappings = function(A, B) {
    const map = {};
    for (let i = 0; i < B.length; i++) {
        map[B[i]] = i;
    }
    return A.map(v => map[v]);
};
