// multiple pointers patterns
// having two pointers (beggining and the end) work towards to the middle

// sorted array and find the closest pair to 0
function multiplePointers (arr) {
    // need a loop to start from beg of the arr
    let left = 0;
    let right = arr.length - 1
    while(left < right) {
        let sum = arr[left] + arr[right];
        if (sum === 0) {
            return [arr[left], arr[right]]
        }
        else  if(sum > 0) {
            right--;
        }
        else {
            left++;
        }
    }
}

array = [-4,-2,-2,-1,0,1,2,5]
// console.log(multiplePointers(array))


/**
 * @param {number[]} nums
 * @return {number}
 */
var findClosestNumber = function(nums) {
    let absList = [];
    for(let i = 0; i < nums.length; i++) {
        if (nums[i] < 0) {
            absList.push(Math.abs(nums[i]));
        }
        else {
            absList.push(nums[i])
        }
    }
    // find the smallest value to 0
    for (let i = 0; i < absList.length - 1; i++) {
        let value = absList[i];
        if (value > absList[i + 1]) {
            value = absList[i + 1]
        }
        if (value === absList[i + 1]) {
            continue
        }
    }
    // 
    let value = absList[0];
    for (let i = 0; i < absList.length - 1; i++) {
        if (value > absList[i + 1]) {
            value = absList[i + 1]
        }
        if (value === absList[i + 1]) {
            continue
        }
    }
    return value; 
};