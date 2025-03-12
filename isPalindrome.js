function isPalindrome(string) {
     // create an alphabet var
    let alphabet = "abcdefghijklmnopqrstuvwxyz"
    // convert the string into lowerCase()
    let lowerCaseStr = string.toLowerCase();
    // convert the string to an Arr so we can loop through it
    let strArr = lowerCaseStr.split("")
    // use forEach() to check with alphabet and remove non letter characters by pushing the chars
    let newStrArr = [];
    strArr.forEach(char => {
        if(alphabet.includes(char)) {
            newStrArr.push(char);
        }
    })
    // the new array should only have just characters
    // reverse the array and compare it to the original array
    if (newStrArr.join("") === newStrArr.reverse().join("")) {
        return true; 
    }
    else {
        return false; 
    }
    // return true or false if palindrome
}

console.log(isPalindrome("Hannah"));