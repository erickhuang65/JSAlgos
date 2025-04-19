 // pattern involves:
// creating window which can either be an array or number from one position to another
// useful for keeping track of a subset of data in an array/string

// accepts an array of integers and a number called n
// calculate the max sum of n consecutive elements in the array
function  maxSubarraySum (arr, num) {
    let maxSum = 0;
    let tempSum = 0; 
    if (arr.length < num) {
        return null;
    }
    for (let i = 0; i < num; i++) {
        maxSum += arr[i];
    }
    tempSum = maxSum;
    for (let i = num; i < arr.length; i++) {
        // subtract the value before and add the next value after the array
        tempSum = tempSum - arr[i - num] + arr[i]
        if (tempSum > maxSum) {
            maxSum = tempSum;
        }
    }
    return maxSum
}