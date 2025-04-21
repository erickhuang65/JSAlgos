var lengthOfLastWord = function(s) {
    // traverse the string from the last position
    // create a var to count the string;
    var count = 0;
    // use a for loop to start at the end of the index;
    for(let i = s.length - 1; i >= 0; i--) {
        // if the string equal to space " "; 
        if(s[i] === " ") {
            if(count === 0) {
                continue;
            } else {
                break; 
            }
        } else {
            count++;
        }
    }
    // returns count;
    return count;
};