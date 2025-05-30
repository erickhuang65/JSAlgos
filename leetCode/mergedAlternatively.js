/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
// var mergeAlternately = function(word1, word2) {
//     // loop through the entire word1;
//     let mergedWord = "";
//     if(word1.length > word2.length) {
//         for(let i = 0; i < word1.length; i++) {
//             mergedWord += word1[i];
//             mergedWord += word2[i];
//         }
//     } else {
//         for(let i = 0; i < word2.length; i++) {
//             mergedWord += word1[i];
//             mergedWord += word2[i];
//         }
//     }
//     let cleaned = mergedWord.replace(/undefined/g, "");
//     return cleaned; 
// };
var mergeAlternately = function(word1, word2) {
    let i = 0;
    let mergedArr = [];
    while(i < word1.length || i < word2.length) {
        mergedArr.push(word1[i]);
        mergedArr.push(word2[i]);
        i++;
    }
    return mergedArr.join('');
};