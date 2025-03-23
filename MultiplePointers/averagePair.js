function averagePair(arr, target){
    // add whatever parameters you deem necessary - good luck!
    let i = 0;
    let j = arr.length - 1;
    
    while(i < j) {
        let avg = (arr[i] + arr[j]) / 2;
        if(avg === target) {
            return true;
        } else if(avg < target){
            i++;
        } else {
            j--
        }
    }
    return false;
  }