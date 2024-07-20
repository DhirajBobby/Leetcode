## Problem
#firsttry #leetcode75 #stack 
Given an encoded string, return its decoded string.

The encoding rule is: `k[encoded_string]`, where the `encoded_string` inside the square brackets is being repeated exactly `k` times. Note that `k` is guaranteed to be a positive integer.

You may assume that the input string is always valid; there are no extra white spaces, square brackets are well-formed, etc. Furthermore, you may assume that the original data does not contain any digits and that digits are only for those repeat numbers, `k`. For example, there will not be input like `3a` or `2[4]`.

The test cases are generated so that the length of the output will never exceed `105`.

`Example 1:`
`Input: s = "3a2bc"`
`Output: "aaabcbc"`

`Example 2:`
`Input: s = "3a2[c]"`
`Output: "accaccacc"`

`Example 3:`
`Input: s = "2abc3cdef"`
`Output: "abcabccdcdcdef"`

## Solution 
We push input elements into a stack and when we get ' ] ' we pop till ' \[ ' to get string between [  ].
Then we pop numerical values from stack till we get the whole number.
Multiply string with number and push to stack.

```python
class Solution:
    def decodeString(self, s: str) -> str:
        stack = []
        for i in s:
            if i == ']':
                temp = ''
                x = stack.pop()
                while x != '[':
                    temp = x + temp
                    x = stack.pop()
                num = stack.pop()
                while(stack and stack[-1].isnumeric()):
                    num = stack.pop() + num
                temp*=int(num)
                stack.append(temp)
            else:
                stack.append(i)
        return "".join(stack)
```

