// easiest to solve through recursion
// like merge sort, exploit the fact that 0 or 1 is sorted
// works by selecting one element (called pivot)
// move all the number that is < pivot to the left (not yet sorted)
// move all the number that is > pivot to the right (not yet sorted)
// once pivot is positioned, quick sort can be applied to either side of pivot

// Pivot Helper:
// to implement merge sort, its useful to first implement a function responsible arranging elements in an array on either side of a pivot
// helper function should designate an element as the pivot
// it should then rearrage elements in the array so that all values less than the pivot are moved to the left of the pivot, and all values greater than the pivot are moved to the right
// helper should not create a new array
// when complete, helper should return the index of the pivot
// runtime of quick sort depends on selection of pivot
// ideally, pivot should be chosen so that its rougly the "median" in data

// Pivot helper Pseudocode:
// accept 3 arguments: an array, start index (o), and end index (array length + 1)
// grab pivot from start of the array
// store the current pivot index in a var
// 1) loop through the array from start -> end
// 1a) if pivot is greater than current element, increment the pivot index var and swap the current element with element at the pivot index
// swap the pivot with the pivot index
// return the pivot index
function pivot(arr, start=0, end=arr.length-1) {
    
    const swap = (arr, idx1, idx2) => {
        [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
    };
    // assuming that the smallest is the first value;
    let pivot = arr[start];
    let swapIdx = start; // this is to compare values that's lower than start;
    
    for(let i = start + 1; i <= end; i++) {
        if(pivot > arr[i]) {
            swapIdx++
            swap(arr, swapIdx, i)
        }
    }
    swap(arr, start, swapIdx);
    return swapIdx;
}

// Quicksort Pseudocode: 
// call pivot helper on the full array
// when helper returns you the updated pivot index, recursively call the pivot helper on subarray to the left of that index, and the right of the index;
// base case occurs when a subarray with < 2 elements;
function quickSort(arr, left = 0, right = arr.length-1) {
    if(left < right) {
        let pivotIdx = pivot(arr, left, right);
        // left 
        quickSort(arr, left, pivotIdx-1);
        // right
        quickSort(arr, pivotIdx+1, right);
    }
    return arr; 
}

console.log(quickSort([4, 6, 9, 1, 2, 5]))