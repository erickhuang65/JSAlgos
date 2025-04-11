// productOfArray([1,2,3]) // 6
// productOfArray([1,2,3,10]) // 60
function productOfArray(arr) {
    if(arr.length === 0) {
        return 1;
    }
    return arr[0] * productOfArray(arr.slice(1));
};

function collectOddValues(arr) {
    let newArr = []
    newArr = newArr.concat(collectOddValues(arr.slice(1)));
    return newArr;
}