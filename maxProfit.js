/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    // pick the buying number;
    // pick the selling number;
    let buyPrice = prices[0];
    let sellPrice = 0;
    let maxProfit = 0;
    for(let i = 1; i < prices.length; i++){
        if(prices[i] < buyPrice) {
            buyPrice = prices[i];
        } else {
            sellPrice = prices[i];
            if(sellPrice - buyPrice > maxProfit) {
                maxProfit = sellPrice - buyPrice;
            }
        }
    }
    return maxProfit; 
};