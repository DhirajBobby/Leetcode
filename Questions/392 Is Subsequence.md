## Problem
#leetcode75 #twopointer #firsttry 
Given two strings `s` and `t`, return `true` _if_ `s` _is a **subsequence** of_ `t`_, or_ `false` _otherwise_.

A **subsequence** of a string is a new string that is formed from the original string by deleting some (can be none) of the characters without disturbing the relative positions of the remaining characters. (i.e., `"ace"` is a subsequence of `"abcde"` while `"aec"` is not).

`Example 1:`
`Input: s = "abc", t = "ahbgdc"`
`Output: true`

`Example 2:`
`Input: s = "axc", t = "ahbgdc"`
`Output: false`

## Solution
We maintain two pointers one for s and another for t.
If elements at both pointers match increment both otherwise increment only t pointer.
Return true when s pointer reaches the end.

```python
class Solution:
    def isSubsequence(self, s: str, t: str) -> bool:
        if s=="":
            return True
        SubP=0
        for P in range(len(t)):
            if t[P] == s[SubP]:
                SubP+=1
                if SubP == len(s):
                    return True
        return False
```