## Problem
#firsttry #stack
You are given a string `s` that consists of lower case English letters and brackets.
Reverse the strings in each pair of matching parentheses, starting from the innermost one.

Your result should **not** contain any brackets.

`Example 1:`
`Input: s = "(abcd)"`
`Output: "dcba"`

`Example 2:`
`Input: s = "(u(love)i)"`
`Output: "iloveu"`
`Explanation: The substring "love" is reversed first, then the whole string is reversed.`

`Example 3:`
`Input: s = "(ed(et(oc))el)"`
`Output: "leetcode"`
`Explanation: First, we reverse the substring "oc", then "etco", and finally, the whole string.`

## Solution

While iterating through the string store indices of ' ( ' in a stack.
When ' ) ' is encountered pop the stack. Now we have index of ' ( ' and ' ) '.
Reconstruct string by  reversing elements between ' ( ' and ' ) '.

```python
class Solution:
    def reverseParentheses(self, s: str) -> str:
        stack=[]
        i=0
        while i < len(s):
            if s[i] == '(':
                stack.append(i)
                i+=1
            elif s[i] == ')':
                x=stack.pop()
                s=s[:x]+s[i-1:x:-1]+s[i+1:]
                i-=1
            else:
                i+=1
        return s
```
