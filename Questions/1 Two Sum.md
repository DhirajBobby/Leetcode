## Problem
#neetcode #firsttry #hash 
Given an array of integers `nums` and an integer `target`, return _indices of the two numbers such that they add up to `target`_.

You may assume that each input would have **_exactly_ one solution**, and you may not use the _same_ element twice. [[12. Sorting an array]]

You can return the answer in any order.

`Example 1:`
`Input: nums = 2,7,11,15, target = 9`
`Output: 0,1`
`Explanation: Because nums0 + nums1 == 9, we return 0, 1.`

`Example 2:`
`Input: nums = 3,2,4, target = 6`
`Output: 1,2`

`Example 3:`
`Input: nums = 3,3, target = 6`
`Output: 0,1`

## Solution
We first create a  HashMap of all elements and their indices.
Then for every element in `nums` check if `target - element` is in HashMap. If it exist and 
`hashmap[target - element] != index`  i.e. it exist and also not referring to the same element, then return both indices.

```python
class Solution:
    def twoSum(self, nums: list[int], target: int) -> list[int]:
        hashmap = {}
        n=len(nums)
        for i in range(n):
            hashmap[nums[i]] = i
        print(hashmap)
        for index,element in enumerate(nums):
            print("index:",index,'element:',element)
            if (target - element) in hashmap and hashmap[target - element]!= index:
                return [index,hashmap[target - element]]
```
