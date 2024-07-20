## Problem
#firsttry #leetcode75 
You have a long flowerbed in which some of the plots are planted, and some are not. However, flowers cannot be planted in **adjacent** plots.

Given an integer array `flowerbed` containing `0`'s and `1`'s, where `0` means empty and `1` means not empty, and an integer `n`, return `true` _if_ `n` _new flowers can be planted in the_ `flowerbed` _without violating the no-adjacent-flowers rule and_ `false` _otherwise_.

`Example 1:`
`Input: flowerbed = 1,0,0,0,1, n = 1`
`Output: true`

`Example 2:`
`Input: flowerbed = 1,0,0,0,1, n = 2`
`Output: false`

## Solution
Observed pattern :

| Number of 0 |             | Flowerbeds placed |
| ----------- | ----------- | ----------------- |
| 1           | 101         | 0                 |
| 2           | 1001        | 0                 |
| 3           | 10001       | 1                 |
| 4           | 100001      | 1                 |
| 5           | 1000001     | 2                 |
| 6           | 10000001    | 2                 |
| 7           | 100000001   | 3                 |
| 8           | 1000000001  | 3                 |
| 9           | 10000000001 | 4                 |
We check number of consecutive 0s each time. `(Count-1)//2` will give number of flowerbeds.

```python
class Solution:
    def canPlaceFlowers(self, flowerbed: list[int], n: int) -> bool:
        flowers = 0
        count = 0
        if flowerbed[0] == 0:
            flowerbed = [1,0] + flowerbed
        if flowerbed[-1] == 0:
            flowerbed.extend([0,1])
        for i in flowerbed:
            if i == 1 and count != 0:
                flowers += (count-1)//2
                count = 0
            elif i == 0:
                count += 1
        return n <= flowers
```

Edge case : 
If it begins or ends with 0, we add 10 to the beginning and add 01 to the end to that the pattern holds.  `[0010...10100]` becomes `[10010...1010001]`