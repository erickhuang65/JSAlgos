function makeAnagram(a, b) {
    // Write your code here
    var alphabet = "abcdefghijklmnopqrstuvwxyz"
    // create a var called count to track the chars to be deleted;
    var count = 0;
    // create a {} called looker to keep track the number of characters in string a;
    var hashA = {};
    // use a for loop to iterate through the a;
    // if value exist, increment 1, if value does not exist set to 1;
    for(let i = 0; i < a.length; i++) {
        // create a var to track current value in the string;
        let value = a[i];
        hashA[value] ? hashA[value] += 1 : hashA[value] = 1;
    }
    // use a second for loop to iterate through b
    var hashB = {}
    for(let i = 0; i < b.length; i++) {
        let value = b[i];
        hashB[value] ? hashB[value] += 1 : hashB[value] = 1;
    }
    for (let i = 0; i < alphabet.length; i++) {
        let char = alphabet[i];
        let freqA = hashA[char] || 0;
        let freqB = hashB[char] || 0;
        count += Math.abs(freqA - freqB);
    }
    return count; 
}