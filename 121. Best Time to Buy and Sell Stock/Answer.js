var maxProfit = function(prices) {
    let min = Number.MAX_SAFE_INTEGER;
    let max = 0;
    for (let i = 0; i < prices.length; i++) {
        min = Math.min(min, prices[i]);
        max = Math.max(max, prices[i] - min);
    }
    return max;
};

    // runtime error
    // const profit = [];
    // for (let i = 0; i < prices.length; i++) {
    //     for (let j = i + 1; j < prices.length; j++) {
    //         if (prices[i] - prices[j] < 0) {
    //             profit.push(prices[i] - prices[j]);
    //         }
    //     }
    // }
    // if (!profit.length) {
    //     return 0;
    // }
    // return Math.abs(Math.min(...profit));