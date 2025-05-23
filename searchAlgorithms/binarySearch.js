function binarySearch(arr, num) {
    // only works on "SORTED" array

    let start = 0;
    let end = arr.length -1;
    let middle = Math.floor((start + end) / 2 );
    while (arr[middle] !== num && start <= end) {
        // check if the num is == middle;
        if(num < arr[middle]) {
            end = middle - 1;
        } else {
            start = start + 1;
        }
        middle = Math.floor((start + end) / 2 );
    }
    if(arr[middle] == num) {
        return middle;
    } else {
        return -1;
    }
}

console.log(binarySearch([1,2,3,4,5],2))