function flatten(arr){
    if(arr.length === 0) {
        return [];
    };
    let newArr = [];
    let arrVal = arr[0];
    // this condition checks if the first value of array is an array
    // if true; continues to flatten to array
    // else; push the value;
    if(Array.isArray(arrVal)) {
        newArr = newArr.concat(flatten(arrVal));
    } else {
        newArr.push(arrVal);
    }
    // Recursively process the rest of the array
    return newArr.concat(flatten(arr.slice(1)));
  }
