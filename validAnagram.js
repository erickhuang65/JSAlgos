// frequency counter example

function validAnagram(first, second) {
    // check if str1 and str2 are the same length otherwise return false
    if (first.length !== second.length) {
        return false;
    }

    const lookup = {}
    // check if the word exist: if exist += 1 : = 1
    for (let i = 0; i < first.length; i++) {
        let letter = first[i]
        lookup[letter] ? lookup[letter] += 1 : lookup[letter] = 1;
    }
    for (let i = 0; i < second.length; i++) {
        let letter = second[i];
        if (!lookup[letter]) {
            return false;
        }
        else {
            lookup[letter] -= 1
        }
    }
    return true; 
}

validAnagram('aaz', 'zza')