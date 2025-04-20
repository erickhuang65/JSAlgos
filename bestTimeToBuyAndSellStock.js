var maxProfit = function(prices) {
    // slidingWindow;
    // create a var to track the lowest price; minPrice
    var minPrice = prices[0];
    // create a var to track the profit; Profit
    var maxProfit = 0;
    // create a for loop to traverse through the array;
    for(let i = 1; i < prices.length; i++) {
        // if next value is < minPrice;
        // swap minPrice;
        var profit = 0;
        if(prices[i] < minPrice) {
            minPrice = prices[i]
        } else {
            profit = prices[i] - minPrice;
            if(profit > maxProfit) {
                maxProfit = profit; 
            }
        }
    }
    return maxProfit; 
};