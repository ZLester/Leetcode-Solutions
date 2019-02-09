/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    const results = [];
    const frontier = [['(', 1, 0]];
    
    while (frontier.length) {
        const [ cur, open, closing ] = frontier.pop();
        
        if (open + closing === n * 2) {
            results.push(cur);
            continue;
        }
        
        if (closing < open) {
            frontier.push([cur + ')', open, closing + 1]);
        }
        
        if (open < n) {
            frontier.push([cur + '(', open + 1, closing]);
        }
    }
    
    return results;
};
