var lengthOfLastWord = function(s) {
    // traverse the string from the last position
    // create a var to count the string;
    var count = 0;
    // use a for loop to start at the e of the index;
    for(let i = s.length - 1; i >= 0; i--) {
        // create a subcount in the loop
        // if the string equal to space " "; 
        // check if subcount is greater than count; if its greater swap; keep traversing
        if(s[i] === " ") {
            if(count === 0) {
                continue;
            } else {
                break; 
            }
        } else {
            // if string does not equal to space; incremnt count;
            count++;
        }
    }
    // returns count;
    return count;
};