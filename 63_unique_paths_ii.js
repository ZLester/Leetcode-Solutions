/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function(obstacleGrid) {
    if (obstacleGrid[0][0] === 1) {
        return 0;
    }
    
    const m = obstacleGrid.length;
    const n = obstacleGrid[0].length;
    
    if (obstacleGrid[m - 1][n - 1] === 1) {
        return 0;
    }
    
    obstacleGrid[0][0] = 1;

    for (let i = 1; i < m; i++) {
        obstacleGrid[i][0] = (obstacleGrid[i][0] === 0 && obstacleGrid[i - 1][0] === 1)
            ? 1
            : 0;
    }

    for (let j = 1; j < n; j++) {
        obstacleGrid[0][j] = (obstacleGrid[0][j] === 0 && obstacleGrid[0][j - 1] === 1)
            ? 1
            : 0;
    }

    for (let y = 1; y < m; y++) {
        for (let x = 1; x < n; x++) {
            const top = obstacleGrid[y - 1][x];
            const left = obstacleGrid[y][x - 1];

            if (obstacleGrid[y][x] === 0) {
                obstacleGrid[y][x] = top + left;
            } else {
                obstacleGrid[y][x] = 0;
            }
        }
    }

    return obstacleGrid[m - 1][n - 1];
};
