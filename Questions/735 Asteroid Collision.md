## Problem
#firsttry #leetcode75 #stack 
We are given an array `asteroids` of integers representing asteroids in a row.

For each asteroid, the absolute value represents its size, and the sign represents its direction (positive meaning right, negative meaning left). Each asteroid moves at the same speed.

Find out the state of the asteroids after all collisions. If two asteroids meet, the smaller one will explode. If both are the same size, both will explode. Two asteroids moving in the same direction will never meet.

`Example 1:`
`Input: asteroids = 5,10,-5`
`Output: 5,10`
`Explanation: The 10 and -5 collide resulting in 10. The 5 and 10 never collide.`

`Example 2:`
`Input: asteroids = 8,-8`
`Output:` 
`Explanation: The 8 and -8 collide exploding each other.`

`Example 3:`
`Input: asteroids = 10,2,-5`
`Output: 10`
`Explanation: The 2 and -5 collide resulting in -5. The 10 and -5 collide resulting in 10.`

## Solution
A collision occurs only when negative asteroid is to the right of positive asteroid.
So we append elements to a stack and if negative input and stack top is positive we 
simulate a collision.


```python
class Solution:
    def asteroidCollision(self, asteroids: List[int]) -> List[int]:
        stack = []
        for aster in asteroids:
            if not stack or aster>0 or stack[-1]<0:
                stack.append(aster)
            else:
                exploded = False
                while stack and stack[-1]>0:
                    if -aster > stack[-1]:
                        stack.pop()
                    elif -aster < stack[-1]:
                        exploded = True
                        break
                    else:
                        exploded = True
                        stack.pop()
                        break
                if not exploded:
                    stack.append(aster)
        return stack
```
