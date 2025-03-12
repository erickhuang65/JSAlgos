// accepts a sorted array
// counts the unique values in the array
// output will be the total unique values
// edge cases: there can be negative numbers in the array but it will always be sorted

function countUniqueValues (arr) {
    // check the edge case
    if (arr.length === 0) {
        return 0;
    }
    let i = 0;
    for (let j=1; j < arr.length; j++) {
        if (arr[i] !== arr[j]) {
            i++;
            arr[i] = arr[j]
        }
    }
    return i + 1;
}

array = [1,2,2,5,7,7,99]
console.log(countUniqueValues(array))