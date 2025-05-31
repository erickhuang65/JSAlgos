/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function(candies, extraCandies) {
    let largest = candies[0]
    let finalArr = [];
    for(let i = 1; i < candies.length; i++) {
        if(largest < candies[i]) {
            largest = candies[i];
        }
    }
    for(let i = 0; i < candies.length; i++) {
        if(largest <= candies[i] + extraCandies) {
            finalArr.push(true);
        } else {
            finalArr.push(false);
        }
    }
    return finalArr; 
};