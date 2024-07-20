## Problem
#leetcode75 #firsttry #twopointer 
Given an integer array `nums`, move all `0`'s to the end of it while maintaining the relative order of the non-zero elements.

**Note** that you must do this in-place without making a copy of the array.

`Example 1:`
`Input: nums = 0,1,0,3,12`
`Output: 1,3,12,0,0`

`Example 2:`
`Input: nums = 0`
`Output: 0`

## Solution
We use two pointers L and R.
When R points to a non-zero number we swap numbers at L and R.
L will be pointing to a zero, and only be incremented when a swap happens.

```python
class Solution:
    def moveZeroes(self, nums: List[int]) -> None:
        L=0
        for R in range(len(nums)):
            if nums[R] != 0:
                nums[L], nums[R] = nums[R], nums[L]
                L+=1
```

