var strStr = function(haystack, needle) {
    // return index position of haystack from the matching string from needle;
    // create a var to hold the start of index when string matches; strIdx
    // use a for loop to iterate through haystack;
    // if string matches; assign str[Idx] = i;
    for(let i = 0; i < haystack.length; i++) {
        for(let j = 0; j < needle.length; j++) {
            if(haystack[i + j] === needle[j]) {
                return haystack.indexOf(needle);
            }
        }
    }
    return -1; 
};