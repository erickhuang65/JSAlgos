function selectionSort(arr) {
    // sort the array by placing the smallest value in the front
    // store the first element as the smallest value you've seen so far
    // compare this item to the next item until you find the smaller num
    // if the smaller number is found, assign to a min variable
    // if the min is not the value (index) you began with, swap the two values;
    // repeat this with the next element until the array is sorted;
    for (let i = 0; i < arr.length; i++) {
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