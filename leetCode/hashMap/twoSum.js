/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 // 1. Two Sum;
 var twoSum = function(nums, target) {
    var hash = {};
    for(let i = 0; i < nums.length; i++) {
        var currentNum = nums[i];
        var complNum = target - currentNum;
        if(hash[complNum] != undefined) {
            return [hash[complNum], i]
        } 
        hash[nums[i]] = i; 
    }
    return [];
};