## Problem
#firsttry #neetcode #hash 
Given an array of strings `strs`, group **the anagrams** together. You can return the answer in **any order**.

An **Anagram** is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

`Example 1:`
`Input: strs = "eat","tea","tan","ate","nat","bat"`
`Output: [["bat"],["nat","tan"],["ate","eat","tea"]]`

`Example 2:`
`Input: strs = ""`
`Output: [[""]]`

`Example 3:`
`Input: strs = "a"`
`Output: [["a"]]`

## Solution
We  create a HashMap with sorted word as key and original words as values.
`{` 
    `"aet": "eat", "tea", "ate"`
	`"ant": "tan", "nat"`
	`"abt": "bat"`
`}`
When sorted anagrams become identical. Thus all anagrams get mapped to same key.

```python
class Solution:
    def groupAnagrams(self, strs: list[str]) -> list[list[str]]:
        hashmap={}
        for word in strs:
            sorted_word = ''.join(sorted(word))
            if sorted_word in hashmap:
                hashmap[sorted_word].append(word)
            else:
                hashmap[sorted_word] = [word]
        return list(hashmap.values())
```

