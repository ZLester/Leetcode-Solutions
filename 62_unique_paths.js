/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
    const A = Array.from({ length: m }, () => ([]));

    for (let y = 0; y < m; y++) {
        for (let x = 0; x < n; x++) {
            A[y][x] = (x === 0 || y === 0)
                ? 1
                : A[y - 1][x] + A[y][x - 1]; 
        }
    }
    
    return A[m - 1][n - 1];
};
