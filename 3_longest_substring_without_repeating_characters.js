/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    const map = new Map();
    let result = 0;
    let j = 0;
    for (let i = 0; i < s.length; i++) {
        const char = s[i];
        if (map.has(char)) {
            j = Math.max(j, map.get(char) + 1);
        }
        map.set(char, i);
        result = Math.max(result, i + 1 - j);
    }
    
    return result;
};
