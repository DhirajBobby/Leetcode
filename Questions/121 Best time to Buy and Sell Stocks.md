## Problem
#slidingwindow #neetcode #firsttry 
You are given an array `prices` where `prices[i]` is the price of a given stock on the `ith` day.

You want to maximize your profit by choosing a **single day** to buy one stock and choosing a **different day in the future** to sell that stock.

Return _the maximum profit you can achieve from this transaction_. If you cannot achieve any profit, return `0`.

`Example 1:`
`Input: prices = 7,1,5,3,6,4`
`Output: 5`
`Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.`
`Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.`

`Example 2:`
`Input: prices = 7,6,4,3,1`
`Output: 0`
`Explanation: In this case, no transactions are done and the max profit = 0.`

## Solution
We move the right pointer and calculate the profit. If negative we found a new max lower price and shift left pointer (shrink window) to that price.

Right pointer is moved continuously.
Difference between left and right values is window value(It is maximized).
Left pointer is moved to a new lower price.

```python
class Solution:
    def maxProfit(self, prices: List[int]) -> int:
        L=0
        R=1
        maxprofit = 0
        while R < len(prices):
            if prices[L] < prices[R]:
                profit = prices[R] - prices[L]
                maxprofit = max(profit, maxprofit)
            else:
                L = R
            R+=1
        return maxprofit
```
