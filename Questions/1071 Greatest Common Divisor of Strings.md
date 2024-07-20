## Problem
#firsttry #leetcode75 
For two strings `s` and `t`, we say "`t` divides `s`" if and only if `s = t + t + t + ... + t + t` (i.e., `t` is concatenated with itself one or more times).

Given two strings `str1` and `str2`, return _the largest string_ `x` _such that_ `x` _divides both_ `str1` _and_ `str2`.

`Example 1:`
`Input: str1 = "ABCABC", str2 = "ABC"`
`Output: "ABC"`

`Example 2:`
`Input: str1 = "ABABAB", str2 = "ABAB"`
`Output: "AB"`

`Example 3:`
`Input: str1 = "LEET", str2 = "CODE"`
`Output: ""`

## Solution
For every substring starting with a single character, check if repeating the substring produces the string. If it does check if repeating the same substring produces the other string. If both conditions are true store substring.

```python
class Solution:
    def gcdOfStrings(self, str1: str, str2: str) -> str:
        len1=len(str1)
        len2=len(str2)
        smaller = min(len1,len2)
        res=""
        for i in range(1,smaller+1):
            if str1[:i] * (len1//i) == str1 and str1[:i] * (len2//i) == str2:
                res = str1[:i]
        return res
```

`str1:i gives substring.`
`len(substring) * x = len(string), thus x= len(string)//len(substring)`
