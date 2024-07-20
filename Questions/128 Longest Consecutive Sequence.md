## Problem
#neetcode #notfirsttry
Given an unsorted array of integers `nums`, return _the length of the longest consecutive elements sequence._

You must write an algorithm that runs in `O(n)` time.

`Example 1:`
`Input: nums = 100,4,200,1,3,2`
`Output: 4`

`Example 2:`
`Input: nums = 0,3,7,2,5,8,4,6,0,1`
`Output: 9`

## Solution
For every element in the list we check if it the starting of a Consecutive Sequence.
![[Screenshot 2024-07-14 204702.png]]

Here 1, 100, 200 are starting elements of a Consecutive Sequence.
Then we check if the next element exist and keep count. Return largest count.

```python
class Solution:
    def longestConsecutive(self, nums: List[int]) -> int:
        nums = set(nums)
        longest = 0
        length = 0
        for i in nums:
            if i-1 not in nums:
                length = 0
                while(i+length in nums):
                    length += 1
                longest = max(length,longest)
        return longest
```
