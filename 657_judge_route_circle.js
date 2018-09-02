const MOVES = {
    U: [0, 1],
    D: [0, -1],
    L: [-1, 0],
    R: [1, 0],
};

/**
 * @param {string} moves
 * @return {boolean}
 */
var judgeCircle = function(moves) {
    const [endX, endY] = moves.split('')
        .reduce(([curX, curY], move) => {
            const [x, y] = MOVES[move];
            return [curX + x, curY + y]
        }, [0, 0]);
    
    return endX === 0 && endY === 0;
};
