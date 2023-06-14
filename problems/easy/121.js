// 121. Best Time to Buy and Sell Stock

var maxProfit = function (prices) {
    let result = []
    for (let i=0; i<prices.length-1; i++) {
        for (let j=i+1; j<prices.length; j++) {
            if ((prices[j] - prices[i]) > 0) {
                result.push(prices[j] - prices[i])
            }
        }
    }
    return result.length == 0 ? 0 : result.sort((a,b)=> a-b)[result.length-1]
};

// let prices = [7, 1, 5, 3, 6, 4]
let prices = [7, 6, 4, 3, 1]
console.log(maxProfit(prices))
