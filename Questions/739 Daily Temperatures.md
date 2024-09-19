## Problems
#notfirsttry #stack #neetcode #monotonicstack
Given an array of integers `temperatures` represents the daily temperatures, return _an array_ `answer` _such that_ `answer[i]` _is the number of days you have to wait after the_ `ith` _day to get a warmer temperature_. If there is no future day for which this is possible, keep `answer[i] == 0` instead.

**Example 1:**
**Input:** temperatures = `[73,74,75,71,69,72,76,73]`
**Output:** `[1,1,4,2,1,1,0,0]`

**Example 2:**
**Input:** temperatures = `[30,40,50,60]`
**Output:** `[1,1,1,0]`

**Example 3:**
**Input:** temperatures = `[30,60,90]`
**Output:** `[1,1,0]`

## Solution
Use a stack to push indices of temperatures. We push a new element only if the temperature is lesser then stack top. If it new element is greater we pop till we find a greater value as stack top. When we pop an element we get the first occurrence of a temperature greater than it. So we find the difference (in index) between the popped element and the element which caused it to pop.

We append this difference the corresponding index in a result.

```python
class Solution:
    def dailyTemperatures(self, temperatures: list[int]) -> list[int]:

        res = []
        stack = []
        for i in range(len(temperatures)):
            res.append(0)
            while stack and temperatures[stack[-1]] < temperatures[i]:
                index = stack.pop()
                res[index] = i - index
            stack.append(i)  
        return res
```





