/**
 * @param {string} J
 * @param {string} S
 * @return {number}
 */
var numJewelsInStones = function(J, S) {
    const jewels = new Set(J);
    return S.split('').reduce((count, cur) => {
        if (jewels.has(cur)) {
            count++
        }
        return count;
    }, 0);
};
