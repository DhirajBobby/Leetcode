## Problem
#leetcode75 #notfirsttry #hash #bucketsort
Given an integer array `nums` and an integer `k`, return _the_ `k` _most frequent elements_. You may return the answer in **any order**.

`Example 1:`
`Input: nums = 1,1,1,2,2,3, k = 2`
`Output: 1,2`

`Example 2:`
`Input: nums = 1, k = 1`
`Output: 1`

## Solution

#### First approach
We first  create a HashMap of all elements and their count.
Sort the HashMap w.r.t the values using sorted function.

```python
class Solution:
    def topKFrequent(self, nums: list[int], k: int) -> list[int]:
        hashmap = {}
        for i in nums:
            hashmap[i] = hashmap.get(i,0) + 1
        ans = [i[0] for i in sorted(hashmap.items(),key = lambda x:x[1], reverse=True)[0:k]]
        return ans
```

`sorted(hashmap.items(),key = lambda x:x[1])` sorts dictionary elements based on value.
This method solves the problem in O(NlogN) time. We can achieve better time complexity using the second approach.

#### Second approach
We first  create a HashMap of all elements and their count.
Then create a bucket similar to Bucket Sort with count as indices and element as values.
![[Screenshot 2024-07-15 133947.png]]
This way even though we don't know the range of values (or very high range) we can create the list. The size of list will be size of input array. Then iterate from the end of the list and retrieve last k elements.

```python
class Solution:
    def topKFrequent(self, nums: list[int], k: int) -> list[int]:
        hashmap = {}
        freq= [[] for i in range(len(nums)+1)]
        for i in nums:
            hashmap[i] = hashmap.get(i,0) + 1
        for key,value in hashmap.items():
            freq[value].append(key)
        res = []
        for i in range(len(freq)-1, 0, -1):
            for n in freq[i]:
                res.append(n)
                if len(res) == k:
                    return res
```

`freq = [[], [3], [2], [1], [], [], []]` for input  `[1,1,1,2,2,3]`
This method solves the problem in O(N) time.