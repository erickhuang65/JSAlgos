/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
// 88. Merge Sorted Array 
var merge = function(nums1, m, nums2, n) {
    // we need to compare each value in the array based on index position
    // the value that is greater goes behind the current index
    // start from the last element of the array and update nums1;
    // create a pointer for nums1
    var p1 = m - 1;
    // create a pointer for nums2
    var p2 = n - 1; 
    // create a pointer for m + n - 1; this pointer will update nums1;
    var p3 = m + n - 1; 
    // create a for loop to loop over nums1;
    // if nums1[m] > nums2[n]; p3 = nums1[m]; 
    // if nums2[n] > nums1[m]; p3 = nums[n]
    while(p1 >= 0 && p2 >= 0) {
        if(nums2[p2] >= nums1[p1]) {
            nums1[p3] = nums2[p2];
            p3--;
            p2--; 
        } else {
            nums1[p3] = nums1[p1];
            p3--;
            p1--; 
        }
    }
    while (p2 >= 0) {
        nums1[p3] = nums2[p2];
        p2--;
        p3--;
    }
};