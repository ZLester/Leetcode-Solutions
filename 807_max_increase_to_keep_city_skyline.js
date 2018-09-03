/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxIncreaseKeepingSkyline = function(grid) {
    const leftRight = [];
    const topBottom = [];
    let originalSum = 0;
    for (let i = 0; i < grid.length; i++) {
        let rowMax = 0;
        let colMax = 0;
        for (let j = 0; j < grid[i].length; j++) {
            const rowVal = grid[i][j];
            const colVal = grid[j][i];
            originalSum += rowVal;
            if (rowVal > rowMax) {
                rowMax = rowVal;
            }
            if (colVal > colMax) {
                colMax = colVal;
            }
        }
        leftRight.push(rowMax);
        topBottom.push(colMax);
    }

    let newSum = 0;
    for (lr of leftRight) {
        for (tb of topBottom) {
            newSum += Math.min(lr, tb);
        }
    }
    return newSum - originalSum;
};
