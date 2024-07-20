## Problem
#leetcode75 #firsttry #twopointer 
Given a string `s`, reverse only all the vowels in the string and return it.

The vowels are `'a'`, `'e'`, `'i'`, `'o'`, and `'u'`, and they can appear in both lower and upper cases, more than once.

`Example 1:`
`Input: s = "hello"`
`Output: "holle"`

`Example 2:`
`Input: s = "leetcode"`
`Output: "leotcede"`

## Solution
We use **two pointer** method. One pointer starts from the beginning and moves forward, other starts at the end and moves backward. When both pointers point a vowel swap elements. Do this till L\<R
```python
class Solution:
    def reverseVowels(self, s: str) -> str:
        L = 0
        R = len(s)-1
        s = list(s)
        while L<R:
            if s[L] not in 'aeiouAEIOU':
                L+=1
            elif s[R] not in 'aeiouAEIOU':
               R -= 1
            else:
               s[L], s[R] = s[R], s[L]
               L += 1
               R -= 1
        return "".join(s)
```

We convert the string into a list to enable swapping. List is mutable and string is immutable.