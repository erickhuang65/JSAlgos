/**
 * @param {number[]} nums
 * @return {number}
 */
// 26. Remove Duplicates from Sorted Array;
var removeDuplicates = function(nums) {
    let k = 0;
    for(let i = 0; i < nums.length; i++) {
        if(nums[k] != nums[i]) {
            k++;
            nums[k] = nums[i];
        }
    }
    return k + 1; 
};