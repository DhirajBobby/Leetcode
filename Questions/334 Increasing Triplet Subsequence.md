## Problem
#leetcode75 #notfirsttry 
Given an integer array `nums`, return `true` _if there exists a triple of indices_ `(i, j, k)` _such that_ `i < j < k` _and_ `nums[i] < nums[j] < nums[k]`. If no such indices exists, return `false`.

`Example 1:`
`Input: nums = 1,2,3,4,5`
`Output: true`
`Explanation: Any triplet where i < j < k is valid.`

`Example 2:`
`Input: nums = 5,4,3,2,1`
`Output: false`
`Explanation: No triplet exists.`
`Example 3:`

`Input: nums = 2,1,5,0,4,6`
`Output: true`
`Explanation: The triplet (3, 4, 5) is valid because nums3 == 0 < nums4 == 4 < nums5 == 6.`

## Solution
We initialize variables first and second to infinity.
Then we iterate through the list and if element if less than first we set that element as first.
If its not less than first but less than second we set that element as second.
So we basically maintain two variables first and second such that first\<second and we minimize it(smallest value for them).
Then if we encounter an element  that is not smaller than first and also not smaller than second we have found a triplet.


```python
class Solution {
public:
    bool increasingTriplet(vector<int>& nums)
    {
        int first_small = INT_MAX;
        int second_small = INT_MAX;
        for(int i=0;i<nums.size();i++)
        {
            if(nums[i]<=first_small)
                first_small=nums[i];
            else if( nums[i]<= second_small )
                second_small= nums[i];
            else
                return true;
        }
        return false;
    }
};
```