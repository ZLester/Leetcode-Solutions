/**
 * @param {string[]} words
 * @return {number}
 */
var uniqueMorseRepresentations = function(words) {
    const MORSE_CODE = [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."];
    const ALPHA = 'abcdefghijklmnopqrstuvwxyz';
    const combos = new Set();

    words
        .map(word => (
            word
                .split('')
                .map(char => MORSE_CODE[ALPHA.indexOf(char)])
                .join('')
        ))
        .forEach(combo => combos.add(combo));
    
    return combos.size;
};
