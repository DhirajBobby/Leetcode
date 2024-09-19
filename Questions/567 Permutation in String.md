## Problem
#slidingwindow #neetcode #firsttry 
Given two strings `s1` and `s2` return `true` _if_ `s2` _contains a permutation of_ `s1` or `false` _otherwise_.

In other words, return `true` if one of `s1`'s permutations is the substring of `s2`.

`Example 1:`
`Input: s1 = "ab", s2 = "eidbaooo"`
`Output: true`
`Explanation: s2 contains one permutation of s1 ("ba").`

`Example 2:`
`Input: s1 = "ab", s2 = "eidboaoo"`
`Output: false`

## Solution
Here window size if fixed as the length of `s1`. Window is moved to the end by moving left and right pointer continuously.

We need to check if window is a permutation of `s1`. There are two ways to do that.
- Sort window and `s1`. This takes O(n\*n log n)  time complexity.
- Check if character frequencies of window and `s1` are the same. This takes O(n)  time complexity. This is because comparing Hash Maps is constant time.  
We use HashMap to store frequencies.
```python
class Solution:
    def checkInclusion(self, s1: str, s2: str) -> bool:
        hashmap = {'q': 0, 'w': 0, 'e': 0, 'r': 0, 't': 0, 'y': 0, 'u': 0, 'i': 0, 'o': 0, 'p': 0, 'l': 0, 'k': 0, 'j': 0, 'h': 0, 'g': 0, 'f': 0, 'd': 0, 's': 0, 'a': 0, 'z': 0, 'x': 0, 'c': 0, 'v': 0, 'b': 0, 'n': 0, 'm': 0}

        freq = {'q': 0, 'w': 0, 'e': 0, 'r': 0, 't': 0, 'y': 0, 'u': 0, 'i': 0, 'o': 0, 'p': 0, 'l': 0, 'k': 0, 'j': 0, 'h': 0, 'g': 0, 'f': 0, 'd': 0, 's': 0, 'a': 0, 'z': 0, 'x': 0, 'c': 0, 'v': 0, 'b': 0, 'n': 0, 'm': 0}
        #Edge case
        if len(s1) > len(s2):
            return False
        #Find frequency of s1
        for i in range(len(s1)):
            freq[s1[i]] = freq.get(s1[i], 0) + 1
        L = 0
        #Find frequecy of initial window
        for R in range(len(s1)):
            hashmap[s2[R]] = hashmap.get(s2[R], 0) + 1
        while R < len(s2) - 1:
            if hashmap == freq:
                return True
            hashmap[s2[L]] -= 1
            L += 1
            R += 1
            hashmap[s2[R]] = hashmap.get(s2[R], 0) + 1
        #check final window
        return hashmap == freq
```
