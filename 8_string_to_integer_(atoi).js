const MIN_INT = -2147483648;
const MAX_INT = 2147483647;

const isNumber = char => char !== ' ' &&
    char !== '' &&
    (char >= 0 ||
    char <= 9);

const isSign = char => char === '-' || char === '+';

/**
 * @param {string} str
 * @return {number}
 */
var myAtoi = function(str) {
    let result = 0;
    let sign = 1;
    let i = 0;

    while (str[i] === ' ') {
        i++;
    }
    
    if (!isNumber(str[i]) && !isSign(str[i])) {
        return result;
    }

    if (isSign(str[i])) {
        if (str[i] === '-') {
            sign = -1;
        }
        i++;
    }

    while (isNumber(str[i])) {
        const maxBase = Math.floor(MAX_INT / 10);
        const isOverMax = result > maxBase;
        const wouldGoOverMax = result === maxBase && +str[i] > 7;
        if (isOverMax || wouldGoOverMax) {
            return sign === -1
                ? MIN_INT
                : MAX_INT;
        }
        result = result * 10 + +str[i];
        i++;
    }

    return result * sign;
};
