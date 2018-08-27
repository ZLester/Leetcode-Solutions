/**
 * @param {string} str
 * @return {string}
 */
var toLowerCase = function(str) {
    const ALPHA_LOWER = 65;
    const ALPHA_UPPER = 92;
    const CAPITAL_DISTANCE = 32;

    return str.split('').map(char => {
        const code = char.charCodeAt(0);
        if (code >= ALPHA_LOWER && code <= ALPHA_UPPER) {
            return String.fromCharCode(code + CAPITAL_DISTANCE);
        }
        return char;
    }).join('');
};
