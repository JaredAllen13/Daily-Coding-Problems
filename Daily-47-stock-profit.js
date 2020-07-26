/*This problem was asked by Facebook.

Given a array of numbers representing the stock prices of a company in chronological 
order, write a function that calculates the maximum profit you could have made from 
buying and selling that stock once. You must buy before you can sell it.

For example, given [9, 11, 8, 5, 7, 10], you should return 5, since you could buy 
the stock at 5 dollars and sell it at 10 dollars.
*/


var stockPrices1 = [2 , 6 , 10, 7, 1, 6, 11, 4, 9];
var stockPrices2 = [9, 11, 8, 5, 7, 10];


var highestProfit = function (priceArray){ 
    var mostProfitableIndex = 0;
    var mostProfitableTotal = 0;
    var mostProfitableValue = 0;

    for (var x = 0; x < priceArray.length - 1; x++){
        let maxProfit = 0;
        for(var y = x+1; y < priceArray.length; y++){
            let profit = priceArray[y] - priceArray[x];
            if (profit > maxProfit){
                maxProfit = profit;
            }
        }
        if (maxProfit > mostProfitableTotal){
            mostProfitableTotal = maxProfit;
            mostProfitableIndex = x;
            mostProfitableValue = priceArray[x];
        }
    }
    return mostProfitableValue;
}

console.log(highestProfit(stockPrices1));
console.log(highestProfit(stockPrices2));
