const getComp = (a, b) => {
    if (a > b) {
        return 1;
    }
    if (a < b) {
        return -1;
    }
    return 0;
};

/**
 * @param {number[]} A
 * @return {boolean}
 */
var isMonotonic = function(A) {
    let comp = 0;
    for (let j = 1; j < A.length; j++) {
        let prevVal = A[j - 1];
        let curVal = A[j];
        let curComp = getComp(prevVal, curVal);
        if (curComp !== 0) {
            if (comp !== 0 && comp !== curComp) {
                return false;
            }
            comp = curComp;
        }
    }
    return true;
};
