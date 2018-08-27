/**
 * @param {string} moves
 * @return {boolean}
 */
const MOVES = {
    U: [0, 1],
    D: [0, -1],
    L: [-1, 0],
    R: [1, 0],
};

var judgeCircle = function(moves) {
    const position = [0, 0];
    const result = moves.split('')
        .reduce((acc, move) => {
            const [x, y] = MOVES[move];
            return [acc[0] + x, acc[1] + y]
        }, position);
    
    return result[0] === 0 && result[1] === 0;
};
