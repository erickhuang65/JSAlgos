/**
 * @param {number[]} nums
 * @return {number}
 */
 // 80. Remove Duplicates from Sorted Array II;
 var removeDuplicates = function(nums) {
    // unqiue values appears at most twice;
    // create a pointer k to point at the value that we're going to replace;
    // only increment k when there isn't a duplicate;
    var k = 2;
    // create a for loop to loop through the array;
    // if the the value at index position 2- before k equals to k; assign the next value after to k+2 position at nums;
    for(let i = 2; i < nums.length; i++) {
        if(nums[i] != nums[k - 2]) {
            // we need to assign k to nums[i];
            nums[k] = nums[i];
            k++;
        }
    }
    return k;
};