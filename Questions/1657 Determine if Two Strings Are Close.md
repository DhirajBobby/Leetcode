## Problem
#leetcode75 #firsttry #hash 
Two strings are considered **close** if you can attain one from the other using the following operations:

- Operation 1: Swap any two **existing** characters.
    - For example, `abcde -> aecdb`
- Operation 2: Transform **every** occurrence of one **existing** character into another **existing** character, and do the same with the other character.
    - For example, `aacabb -> bbcbaa` (all `a`'s turn into `b`'s, and all `b`'s turn into `a`'s)

You can use the operations on either string as many times as necessary.

Given two strings, `word1` and `word2`, return `true` _if_ `word1` _and_ `word2` _are **close**, and_ `false` _otherwise._

`Example 1:`
`Input: word1 = "abc", word2 = "bca"`
`Output: true`
`Explanation: You can attain word2 from word1 in 2 operations.`
`Apply Operation 1: "abc" -> "acb"`
`Apply Operation 1: "acb" -> "bca"`

`Example 2:`
`Input: word1 = "a", word2 = "aa"`
`Output: false`
`Explanation: It is impossible to attain word2 from word1, or vice versa, in any number of operations.`

`Example 3:`
`Input: word1 = "cabbba", word2 = "abbccc"`
`Output: true`
`Explanation: You can attain word2 from word1 in 3 operations.`
`Apply Operation 1: "cabbba" -> "caabbb"`
`Apply Operation 2: "caabbb" -> "baaccc"`
`Apply Operation 2: "baaccc" -> "abbccc"`

## Solution
There are three conditions to be met
- Length of words should be equal
- Both words should have the same set of letters (swapping can be done only between existing letters).
- The letter frequencies of both words should match. 
	Consider `word1 = "cabbba", word2 = "abbccc"`. Frequencies will be 
	`{'c':1, 'a':2, 'b':3}` and `{'c':3, 'a':1, 'b':2}`. Both words have one letter once one letter twice and one letter thrice.
Return true if all conditions are met.

```python
class Solution:
    def closeStrings(self, word1: str, word2: str) -> bool:
        if len(word1) != len(word2):
            print("len trigger")
            return False
        if set(word1) != set(word2):
            print("set trigger")
            return False
        freq1={}
        freq2={}
        for i in range(len(word1)):
            freq1[word1[i]] = freq1.get(word1[i], 0) + 1
            freq2[word2[i]] = freq2.get(word2[i], 0) + 1
        l1 = sorted(list(freq1.values()))
        l2 = sorted(list(freq2.values()))
        return l1 == l2
```