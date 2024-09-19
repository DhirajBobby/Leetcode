## Problem
#notfirsttry #leetcode75 #neetcode 
Given an integer array `nums`, return _an array_ `answer` _such that_ `answer[i]` _is equal to the product of all the elements of_ `nums` _except_ `nums[i]`.

The product of any prefix or suffix of `nums` is **guaranteed** to fit in a **32-bit** integer.

You must write an algorithm that runs in `O(n)` time and without using the division operation.

`Example 1:`
`Input: nums = 1,2,3,4`
`Output: 24,12,8,6`

`Example 2:`
`Input: nums = -1,1,0,-3,3`
`Output: 0,0,9,0,0`

## Solution
Every element has a prefix and a postfix.
We get the answer for a particular index by multiplying its prefix and postfix.

We loop through the array twice to calculate prefixes and postfixes and then we loop a third time to multiply them and store them in a result list.

```python
class Solution:
    def productExceptSelf(self, nums: list[int]) -> list[int]:
        res=[]
        prefix=[1]
        postfix=[1]

        #Finding prefixes
        cummul=1
        for i in range(1,len(nums)):
            cummul *= nums[i-1]
            prefix.append(cummul)

        #Finding postfixes
        cummul=1
        for i in range(len(nums)-2,-1,-1):
            cummul *= nums[i+1]
            postfix.insert(0,cummul)

        #Multiplying prefix and postfixes
        for i in range(len(nums)):
            res.append(prefix[i]*postfix[i])

        return res
```

An optimization that can be done is to store prefixes in result array itself and in the second loop multiply postfix to the contents present in the result array (which is prefix).