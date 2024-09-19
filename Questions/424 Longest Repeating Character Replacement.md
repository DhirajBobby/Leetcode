## Problem
#slidingwindow #neetcode #notfirsttry 
You are given a string `s` and an integer `k`. You can choose any character of the string and change it to any other uppercase English character. You can perform this operation at most `k` times.

Return _the length of the longest substring containing the same letter you can get after performing the above operations_.

`Example 1:`
`Input: s = "ABAB", k = 2`
`Output: 4`
`Explanation: Replace the two 'A's with two 'B's or vice versa.`

`Example 2:`
`Input: s = "AABABBA", k = 1`
`Output: 4`
`Explanation: Replace the one 'A' in the middle with 'B' and form "AABBBBA".`
`The substring "BBBB" has the longest repeating letters, which is 4.`
`There may exists other ways to achieve this answer too.`

## Solution
For every window find frequency of most frequent character. Window size - this frequency gives the number of characters we need to change. If this value is less than or equal to k window is valid and right pointer is moved. When invalid left pointer is moved.

We use HashMap to store frequency.

```python
class Solution:
    def characterReplacement(self, s: str, k: int) -> int:
        hashset = {}
        L=0
        R=0
        maxsize=0
        while R < len(s):
            hashset[s[R]] = hashset.get(s[R],0) + 1
            while (R-L+1 - max(hashset.values())) > k:
                hashset[s[L]] -= 1
                L+=1
            maxsize = max(maxsize, R - L + 1)
            R+=1
        return maxsize
```

