/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function(s, p) {
    const A = Array.from({ length: s.length + 1 }, () => ([]));
    
    A[0][0] = true;

    for (let k = 1; k <= p.length; k++ ) {
        if (p[k - 1] === '*') {
            A[0][k] = A[0][k - 2];
        }
    }

    for (let i = 0; i <= s.length; i++) {
        for (let j = 0; j <= p.length; j++) {
            if (i === 0 || j === 0) {
                A[i][j] = A[i][j] || false;
                continue;
            }

            const curChar = s[i - 1];
            const curPat = p[j - 1];
            const curMatch = curChar === curPat || curPat === '.';

            if (curMatch) {
                A[i][j] = A[i - 1][j - 1];
            } else if (curPat === '*') {
                A[i][j] = A[i][j - 2];

                const prevPat = p[j - 2];
                const prevMatch = curChar === prevPat || prevPat === '.';

                if (prevMatch) {
                    A[i][j] = A[i][j] || A[i - 1][j];
                }
            } else {
                A[i][j] = false;
            }
        }
    }

    return A[s.length][p.length];
};
