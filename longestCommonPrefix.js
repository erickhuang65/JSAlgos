function longestCommonPrefix(strs) {
    let longestPrefix = strs[0];
    let outPut = "";
    let left = 0;
    let right = strs.length - 1;
    // for(let i = 0; i < longestPrefix.length; i++) {
    //     let compareStr = strs[i + 1];
    //     if(longestPrefix[i] != compareStr[i]) {
    //     } else {
    //         outPut += longestPrefix[i];
    //     }
    // }
    // return outPut;
    while(left < right) {
        let compareStr = strs[right];
        if(longestPrefix[left] === compareStr[left]) {
            outPut += longestPrefix;
            left++
        } else {
            left++;
            right--;
        }
    }
    return outPut;
}

strings = ["flower","flow","flight"];
console.log(longestCommonPrefix(strings));