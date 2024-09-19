## Problem
#slidingwindow #neetcode #firsttry 
Given a string `s`, find the length of the **longest substring** without repeating characters.

`Example 1:`
`Input: s = "abcabcbb"`
`Output: 3`
`Explanation: The answer is "abc", with the length of 3.`

`Example 2:`
`Input: s = "bbbbb"`
`Output: 1`
`Explanation: The answer is "b", with the length of 1.`

`Example 3:`
`Input: s = "pwwkew"`
`Output: 3`
`Explanation: The answer is "wke", with the length of 3.`
`Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.`

## Solution
We expand window till no duplicates. When a duplicate is encountered left pointer shrinks window to latest occurrence of that character.

Right pointer is moved continuously.
Window size is window value.
Left pointer moves to latest occurrence.

We maintain a HashMap to store character occurrences.

```python
class Solution:
    def lengthOfLongestSubstring(self, s: str) -> int:
        if len(s) == 0:
            return 0
        hashmap = {s[0]:0}
        L=0
        R=1
        maxsize = 1
        while R < len(s):
            if s[R] in hashmap and hashmap[s[R]] >= L: 
            #second condition for 'tmmabct'. t is found repeating but is outside                window.
                L = hashmap[s[R]] + 1
            else:
                size = R - L + 1
                maxsize = max(maxsize,size)
            hashmap[s[R]] = R
            R+=1
        return maxsize
```

