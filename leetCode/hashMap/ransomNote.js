/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
 // 383. Ransome Note
 var canConstruct = function(ransomNote, magazine) {
    var hash = {};
    // create a loop to loop through ransomNote
    for(let i = 0; i < ransomNote.length; i++) {
    // create a var to check for the values; looker
    // if looker; add the values into the empty hash
        var looker = ransomNote[i];
        hash[looker] ? hash[looker] += 1 :hash[looker] = 1;
    }
    // create a second loop to loop through magazine;
    // create a var to check for the values in magazine; looker
    // if looker exist -= 1;
    for(let i = 0; i < magazine.length; i++) {
        var checker = magazine[i];
        if(hash[checker]) {
            hash[checker] -= 1;
        }
    }
    // last loop to check;
    // if all the values in hash are === 0; return true; otherwise false;
    for(let key in hash) {
        if(hash[key] > 0) {
            return false;
        }
    }
    return true; 
};