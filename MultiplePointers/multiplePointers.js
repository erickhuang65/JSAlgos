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