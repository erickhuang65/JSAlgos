function selectionSort(arr) {
    // LOOPS THROUGH THE ARRAY AND "SELECT" THE MINIMUM AND SWAP
    
    // sort the array by placing the "minimum" value in the front
    // store the first element as the "minimum" value you've seen so far
    // compare this item to the next item until you find the smaller number
    // if the smaller number is found, assign to var "minimum"

    // if the minimum is not the value (index) you began with, swap the two values;
    // repeat this with the next element until the array is sorted;
    for (let i = 0; i < arr.length; i++) {
        let lowest = i;
        for(let j = i + 1; j < arr.length; j++) {
            if(arr[j] < arr[lowest]) {
                lowest = j;
            }
        }
        if(i !== lowest) {
            let temp = arr[i];
            arr[i] = arr[lowest];
            arr[lowest] = temp;
        }
    }
    return arr;
}

selectionSort([20, 10, 2, 4, 15])