function longestCommonPrefix(strs) {
    let outPut = "";
    let j = 1;
    if (strs.length === 0) {
        return "";
    }
    strs.filter(str => str !== "")
    for(let i = 0; i < strs.length; i++) {
        let longestPrefix = strs[i];
        let nextValue = strs[j];
        if(longestPrefix[i] != nextValue[i]) {
            return outPut; 
        } else {
            outPut += longestPrefix[i];
        }
    }
    return outPut;
};

strings = ["flower","flow","flight"];
console.log(longestCommonPrefix(strings));