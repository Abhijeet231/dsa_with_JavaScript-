/**
BEST TIME TO BUY AND SELL STOCK

* You are given an array prices where prices[i] is the price of a given stock on the ith day. 

You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.
 
 */

let arr = [9,1,3,5,8,4,2];

const maxProfit = (arr) => {
    let maxProfit = 0;
    let minVal = arr[0];

    for(let i = 1; i< arr.length; i++) {
         if( arr[i] - minVal > maxProfit ) {
            maxProfit = arr[i] - minVal
         }
         if(arr[i] < minVal) {
            minVal = arr[i]
         }
    }
    return maxProfit
}
console.log(maxProfit(arr))