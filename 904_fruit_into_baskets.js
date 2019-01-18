/**
 * @param {number[]} tree
 * @return {number}
 */
var totalFruit = function(tree) {
    if (tree.length === 0) {
        return 0;
    }

    let result = 0;
    const map = new Map();
    let i = 0;
    let j = 0;
    
    while (j < tree.length) {
        if (map.size <= 2) {
            const curType = tree[j];
            map.set(curType, j);
            j++;
        }

        if (map.size > 2) {
            const min = Math.min(...map.values());

            map.delete(tree[min]);
            
            i = min + 1;
        }
        
        result = Math.max(result, j - i);
    }
    
    return result;
};
