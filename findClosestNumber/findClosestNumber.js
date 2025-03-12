/**
 * @param {number[]} nums
 * @return {number}
 */
var findClosestNumber = function(nums) {
    let smallest = nums[0]; // Start by assuming the first number is the closest

    for (let i = 1; i < nums.length; i++) {
        // Compare absolute values and handle ties by preferring negative numbers
        if (Math.abs(nums[i]) < Math.abs(smallest) || (Math.abs(nums[i]) === Math.abs(smallest) && nums[i] > 0)) {
            smallest = nums[i];
        }
    }

    return smallest;
};

