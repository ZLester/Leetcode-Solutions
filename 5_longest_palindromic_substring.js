/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    const A = Array.from({ length: s.length }, () => ([]));

    let resIdx = 0;
    let resLen = 1;
    
    for (let i = 0; i < A.length; i++) {
        A[i][i] = true;
        if (i < A.length - 1) {
            if (s[i] === s[i + 1]) {
                A[i][i + 1] = true;
                resIdx = i;
                resLen = 2;
            } else {
                A[i][i + 1] = false;
            }
        }
    }

    for (let sl = 3; sl <= A.length; sl++) {
        const diagMax = A.length - sl + 1;
        for (let i = 0; i < diagMax; i++) {
            const j = i + sl - 1;
            const isPal = A[i + 1][j - 1] && s[i] === s[j];
            if (isPal) {
                A[i][j] = true;
                if (sl > resLen) {
                    resIdx = i;
                    resLen = sl;   
                }
            } else {
                A[i][j] = false;
            }
        }
    }

    return s.substring(resIdx, resIdx + resLen);
};
