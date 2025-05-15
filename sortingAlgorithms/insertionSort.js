  // taking an element from the array at a time
// sort it to the left side of the array
// will first consider the first element is sorted

// start by picking the second element in the array
// compare the second element with the one before; swap if necessary
// continue to the next. if it is in the incorrect order, iterate through the sorted portion (e.g. left side)
// repeat until the array is sorted 

function insertionSort(arr) {
    for(let i = 1; i < arr.length; i++) {
        let currentVal = arr[i];
        // the inner loop will keep looping and shifting until currentVal is smallest
        for(var j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
            arr[j+1] = arr[j];
        }
        arr[j+1] = currentVal;
        console.log(arr);
    }
    return arr;
}

console.log(insertionSort([1, 50, 5, 10, 8, 2]))