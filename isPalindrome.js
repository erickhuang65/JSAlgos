// function isPalindrome(string) {
//      // create an alphabet var
//     let alphabet = "abcdefghijklmnopqrstuvwxyz"
//     // convert the string into lowerCase()
//     let lowerCaseStr = string.toLowerCase();
//     // convert the string to an Arr so we can loop through it
//     let strArr = lowerCaseStr.split("")
//     // use forEach() to check with alphabet and remove non letter characters by pushing the chars
//     let newStrArr = [];
//     strArr.forEach(char => {
//         if(alphabet.includes(char)) {
//             newStrArr.push(char);
//         }; 
//     })
//     // the new array should only have just characters
//     // reverse the array and compare it to the original array
//     if (newStrArr.join("") === newStrArr.reverse().join("")) {
//         return true; 
//     }
//     else {
//         return false; 
//     }
//     // return true or false if palindrome
// }

/**
 * @param {string} s
 * @return {boolean}
 */
// 125. is Palindrome;
var isPalindrome = function(s) {
    let cleaned = s.replace(/[^a-z0-9]/gi, '').toLowerCase();
    // create a pointer to start from the left;
    var left = 0;
    // create a pointer to start from the right;
    var right = cleaned.length - 1;
    // create while loop to start matching left and right of the values in the array;
    while(left < right) {
    // if left pointer does not equal to right pointer; return false;
    // otherwise return true; 
        if(cleaned[left] != cleaned[right]) {
            return false;
        }
        left++;
        right--;
    }
    return true;
};

console.log(isPalindrome("A man, a plan, a canal: Panama"));