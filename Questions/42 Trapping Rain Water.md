## Problem
#notfirsttry #neetcode #twopointer 
Given `n` non-negative integers representing an elevation map where the width of each bar is `1`, compute how much water it can trap after raining.

`Example 1:`
![](https://assets.leetcode.com/uploads/2018/10/22/rainwatertrap.png)

`Input: height = 0,1,0,2,1,0,1,3,2,1,2,1`
`Output: 6`
`Explanation: The above elevation map (black section) is represented by array 0,1,0,2,1,0,1,3,2,1,2,1. In this case, 6 units of rain water (blue section) are being trapped.`

`Example 2:`
`Input: height = 4,2,0,3,2,5`
`Output: 9`

## Solution
At every index, The amount of rainwater stored is the difference between the current index height and a minimum of left max height and right max-height.

Here we can use the two-pointer approachhttps://www.geeksforgeeks.org/two-pointers-technique to find the minimum among the left-max and right-max of the probable outermost boundary for any index and iterate likewise.

For example: 

- Say we have indices **i, j** and a boundary of **(left, right)**  where **i** is the left pointer and **j** is the right pointer.
- If the minimum is `arr\[left]`, we can say that **i** is bounded in one side by **left** and no matter whatever the values are in between **(i, right)**, the rightmost boundary of **i** will at  least have height `arr\[right]` which is the probable outermost boundary for **i**. 
- So the water height of water column at index **i** is `arr\[left] – arr\[i]` and we can increment **i** then.
- Similar things happen for **j** also.

```python
class Solution:
    def trap(self, height: List[int]) -> int:
        left = 0
        right = len(height) - 1
        left_max = height[left]
        right_max = height[right]
        water = 0

        while left < right:
            if left_max < right_max:
                left += 1
                left_max = max(left_max, height[left])
                water += left_max - height[left]
            else:
                right -= 1
                right_max = max(right_max, height[right])
                water += right_max - height[right]
        return water
```

