// combination of: merging & sorting
// exploits the fact that arrays of 0 or 1 element are always sorted
// works by decomposing an array into smaller arrays of 0 or 1 elements
// the build up a newly sorted array

// it is useful to first implement a function responsible for merging two sorted arrays
// this helper function should create a new array which is also sorted, and consist of all of the elements
 
// Pseudocode
// create an empty array, and look at the smallest values in the beggining of each input array
// have two counters (i, j) both start at index 0
// use while loop; while there are still values we haven't looked at;
// if the value in the first array is smaller than the value in the second array, push the value in the first array into our results and move on to the next value in the first array
// if the value in the first array is larger than the value in the second array, push the value in the second array into our results and move on to the next value in the second array
// once we exhaust one array, push in all remaining values from the other array

function merge(a, b) {
    let result = [];
    let i = 0;
    let j = 0;
    while(i < a.length && j < b.length) {
        if(b[j] > a[i]) {
            result.push(a[i]);
            i++;
        }
        if(b[j] < a[i]) {
            result.push(b[j]);
            j++;
        }
        if(a[i] === b[j]) {
            result.push(a[i]);
            result.push(b[j]);
            i++;
            j++;
        }
    }
    // if(i < a.length) {
    //     result.push(...a.slice(i));
    // }
    // if(j < b.length) {
    //     result.push(...b.slice(j));
    // }
    while(i < a.length) {
        result.push(a[i]);
        i++;
    }
    while(j < b.length) {
        result.push(b[j]);
        j++;
    }
    return result;
}

console.log(merge([1,10,50], [2,14,99,100]));