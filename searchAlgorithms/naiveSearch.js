function naiveSearch(longer, shorter) {
    let counter = 0;
    for(let i = 0; i < longer.length; i++) {
        for(let j = 0; j < shorter.length; j++) {
            if(shorter[j] !== longer[i+j]) {
                break;
            }
            if(j === shorter.length - 1) {
                counter++;
            }
        }
    }
    return counter;
}

console.log(naiveSearch("lorie loled", "lol"));