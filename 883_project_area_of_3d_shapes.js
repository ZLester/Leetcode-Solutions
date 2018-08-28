/**
 * @param {number[][]} grid
 * @return {number}
 */
var projectionArea = function(grid) {
    let baseTotal = 0;
    let rowTotal = 0;
    let colTotal = 0;

    for (let i = 0; i < grid.length; i++) {
        let baseMax = 0;
        let rowMax = 0;
        let colMax = 0;

        for (let j = 0; j < grid.length; j++) {
            const rowVal = grid[i][j];
            const colVal = grid[j][i];
            if (rowVal > 0) {
                baseMax += 1;
            }
            if (rowVal > rowMax) {
                rowMax = rowVal;
            }
            if (colVal > colMax) {
                colMax = colVal;
            }
        }

        baseTotal += baseMax;
        rowTotal += rowMax;
        colTotal += colMax;
    }

    return baseTotal + rowTotal + colTotal;
};
