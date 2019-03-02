/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function(s, wordDict) {
    const wordSet = new Set(wordDict);

    const T = Array.from({ length: s.length }, () => ([]));
    for (let i = 0; i < s.length; i++) {
        for (let j = 0; j < s.length; j++) {
            T[i][j] = false;
        }
    }

    for (let l = 1; l <= s.length; l++) {
        for (let i = 0; i < s.length - l + 1; i++) {
            const j = i + l - 1;
            const curStr = s.slice(i, j + 1);

            if (wordSet.has(curStr)) {
                T[i][j] = true;
                continue;
            }
            
            for (let k = i + 1; k <= j; k++) {
                if (T[i][k - 1] && T[k][j]) {
                    T[i][j] = true;
                    break;
                }
            }
        }
    }

    return T[0][s.length - 1];
};
