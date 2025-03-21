/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    // pick the buying number;
    // pick the selling number;
    let minPrice = prices[0];
    let maxPrice = 0;
    let maxProfit = 0;
    for(let i = 1; i < prices.length; i++){
        if(prices[i] < minPrice) {
            minPrice = prices[i];
        } else {
            maxPrice = prices[i];
            if(maxPrice - minPrice > maxProfit) {
                maxProfit = maxPrice - minPrice;
            }
        }
    }
    return maxProfit; 
};