const OPEN = new Set(['(', '{', '[']);
const MATCH = {
    ')': '(',
    '}': '{',
    ']': '[',
};

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const stack = [];

    for (let i = 0; i < s.length; i++) {
        const char = s[i];
        
        if (OPEN.has(char)) {
            stack.push(char);
        } else {
            const match = stack.pop();
            if (match !== MATCH[char]) {
                return false;
            }
        }
    }
    
    return !stack.length;
};
