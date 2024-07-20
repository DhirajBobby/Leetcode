## Problem
#neetcode #firsttry 
Given two strings `s` and `t`, return `true` _if_ `t` _is an anagram of_ `s`_, and_ `false` _otherwise_.

An **Anagram** is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

`Example 1:`
`Input: s = "anagram", t = "nagaram"`
`Output: true`

`Example 2:`
`Input: s = "rat", t = "car"`
`Output: false`


## Solution
We sort the strings and check if they match.

```python
class Solution:
    def isAnagram(self, s: str, t: str) -> bool:
        new_s = sorted(s)
        new_t = sorted(t)
        return new_s == new_t
```

