function capitalizeFirst (arr) {
    // add whatever parameters you deem necessary - good luck!
    // .toUpperCase();
    if(arr.length === 0) {
        return [];
    }
    let newArr = [];
    let arrVal = arr[0];
    let capFirstVal = arrVal.charAt(0).toUpperCase() + arrVal.slice(1);
    newArr.push(capFirstVal);
    return newArr.concat(capitalizeFirst(arr.slice(1)));
  }
  // capitalizeFirst(['car','taco','banana']); // ['Car','Taco','Banana']
  