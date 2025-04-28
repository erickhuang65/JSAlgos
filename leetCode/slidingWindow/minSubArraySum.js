/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
// 209. Min Subarray Sum
var minSubArrayLen = function(target, nums) {
    // create a var total of 0;
    var total = 0;
    // create a left pointer to start at 0;
    var left = 0;
    // return this; 
    var result = Infinity;
    // loop over the array; with right pointer at 0;
    for(var right = 0; right < nums.length; right++) {
        total += nums[right];

        while(total >= target) {
            // to get the size of the window; right pointer - left pointer + 1
            let currentLen = right - left + 1;
            if(currentLen < result) {
                result = currentLen;
            }
            total -= nums[left];
            left++;
        }
    }
    if(result === Infinity) {
        return 0; 
    } else {
        return result; 
    }
};