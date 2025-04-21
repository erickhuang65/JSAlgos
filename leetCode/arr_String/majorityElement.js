//LEETCODE: 169. MAJORITY ELEMENT;

var majorityElement = function(nums) {
    // create a hash table to track frequency;
    var hash = {}; 
    // use a loop to traverse through the array;
    for(let i = 0; i < nums.length; i++) {
        var value = nums[i];
        hash[value] ? hash[value] += 1 : hash[value] = 1; 
    }; 
    // loop through the hash table
    // if the value can be divided by 2;Math.floor(value / 2)
    // return the key; 
    for(let key in hash) {
        if(hash[key] > nums.length / 2) {
            return Number(key);
        }
    }
};