/**
 * @param {number[]} widths
 * @param {string} S
 * @return {number[]}
 */
var numberOfLines = function(widths, S) {
    return S.split('')
        .map(char => widths[char.charCodeAt(0) - 97])
        .reduce(([lines, line], value) => {
            line += value;
            if (line === 100) {
                return [lines + 1, 0];
            }
            if (line > 100) {
                return [lines + 1, value];
            }
            return [lines, line];
        }, [1, 0]);
};
