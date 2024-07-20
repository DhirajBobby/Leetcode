## Problem
#neetcode #hash #firsttry #twopointer
Given an integer array `nums` and an integer `k`, return `true` _if there are two **distinct indices**_ `i` _and_ `j` _in the array such that_ `nums[i] == nums[j]` _and_ `abs(i - j) <= k`.

`Example 1:`
`Input: nums = 1,2,3,1, k = 3`
`Output: true`

`Example 2:`
`Input: nums = 1,0,1,1, k = 1`
`Output: true`

`Example 3:`
`Input: nums = 1,2,3,1,2,3, k = 2`
`Output: false`

## Solution 
#### First approach
We use a **HashMap** to map all elements to their indices.
When entering new element check if it already exists and is nearby.

```python
class Solution:
    def containsNearbyDuplicate(self, nums: List[int], k: int) -> bool:
        hsh = {}
        for i in range(len(nums)):
            if nums[i] in hsh and i - hsh[nums[i]] <= k:
                return True
            hsh[nums[i]] = i
        return False
```

#### Second approach
We use two pointer method.
We maintain a **HashSet** to store elements between the two pointers and check for duplicates entry in the set.

```python
class Solution:
    def containsNearbyDuplicate(self, nums: list[int], k: int) -> bool:
        hashset = list()
        L=0
        for R in range(len(nums)):
            if R-L > k:
                del hashset[0]
                L+=1
            if nums[R] in hashset:
                return True
            hashset.append(nums[R])
        return False
```

