## Problem
#twopointer #leetcode75 #firsttry 
You are given an integer array `nums` and an integer `k`.

In one operation, you can pick two numbers from the array whose sum equals `k` and remove them from the array.

Return _the maximum number of operations you can perform on the array_.

`Example 1:`
`Input: nums = 1,2,3,4, k = 5`
`Output: 2`
`Explanation: Starting with nums = 1,2,3,4:`
`Remove numbers 1 and 4, then nums = 2,3`
`Remove numbers 2 and 3, then nums =` 
`There are no more pairs that sum up to 5, hence a total of 2 operations.`

`Example 2:`
`Input: nums = 3,1,3,4,3, k = 6`
`Output: 1`
`Explanation: Starting with nums = 3,1,3,4,3:`
`Remove the first two 3's, then nums = 1,4,3`
`There are no more pairs that sum up to 6, hence a total of 1 operation.`

## Solution
The intuition behind this solution is to use a `two-pointer` approach on a sorted array. Sorting the array allows us to efficiently find pairs of numbers that sum up to the target value `k`. The two pointers (`left` and `right`) are initialized at the beginning and end of the sorted array, and we move them towards each other based on the sum of the numbers at those positions.

- If the sum of `nums[left]` and `nums[right]` is equal to the target k, we have found a pair, so we increment the operation count and move both pointers towards the center  
- If the sum is less than **k**, we need a larger sum, so we move the left pointer to the right.  
- If the sum is greater than **k**, we need a smaller sum, so we move the right pointer to the left.

```python
class Solution:
    def maxOperations(self, nums: List[int], k: int) -> int:
        nums=sorted(nums)
        ans=0
        L=0
        R=len(nums)-1
        while L<R:
            if nums[L]+nums[R] == k:
                ans+=1
                L+=1
                R-=1
            elif nums[L]+nums[R] > k:
                R-=1
            else:
                L+=1
        return ans
```