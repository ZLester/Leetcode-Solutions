/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */

const padLeft = (str, toLength) => {
    while (str.length < toLength) {
        str = 0 + str;
    }
    return str;
};

var hammingDistance = function(x, y) {
    const xStr = x.toString(2);
    const yStr = y.toString(2);
    const largerLength = xStr.length > yStr.length
        ? xStr.length
        : yStr.length;

    const xStrPadded = padLeft(xStr, largerLength);
    const yStrPadded = padLeft(yStr, largerLength);
    
    let res = 0;
    for (let i = 0; i < largerLength; i++) {
        if (xStrPadded[i] !== yStrPadded[i]) {
            res++;
        }
    }

    return res;
};
