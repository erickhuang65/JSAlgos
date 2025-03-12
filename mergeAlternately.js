/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function(word1, word2) {
    let outPut = "";
    if(word1.length < word2.length) {
        for(let i = 0; i < word2.length; i++) {
            if(i < word1.length) {
                outPut += word1[i];
                outPut += word2[i];
                }
                else {
                    outPut += word2[i]
                }
            }
        }
    else {
        for(let i = 0; i < word1.length; i++) {
            if(i < word2.length) {
                outPut += word1[i];
                outPut += word2[i];
            }
            else {
                outPut += word1[i]
            }
        }
    }
    
    return outPut;
};