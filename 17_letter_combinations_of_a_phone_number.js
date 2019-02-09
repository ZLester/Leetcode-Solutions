const chars = {
    2: ['a', 'b', 'c'],
    3: ['d', 'e', 'f'],
    4: ['g', 'h', 'i'],
    5: ['j', 'k', 'l'],
    6: ['m', 'n', 'o'],
    7: ['p', 'q', 'r', 's'],
    8: ['t', 'u', 'v'],
    9: ['w', 'x', 'y', 'z'],
};

/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    const result = [];
    if (digits.length === 0) {
        return result;
    }

    const frontier = chars[digits[0]].map(char => ([char, 0]));

    while (frontier.length) {
        const [ curCombo, curIdx ] = frontier.pop();
        
        if (curIdx === digits.length - 1) {
            result.push(curCombo);
            continue;
        }
                    
        const nextIdx = curIdx + 1;
        const nextChars = chars[digits[nextIdx]];

        nextChars.forEach(char => {
            frontier.push([curCombo + char, nextIdx]);
        });   
    }
    
    return result;
};
