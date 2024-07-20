## Problem
#neetcode #firsttry #hash 
Determine if a `9 x 9` Sudoku board is valid. Only the filled cells need to be validated **according to the following rules**:

1. Each row must contain the digits `1-9` without repetition.
2. Each column must contain the digits `1-9` without repetition.
3. Each of the nine `3 x 3` sub-boxes of the grid must contain the digits `1-9` without repetition.

**Example 1:**

![](https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Sudoku-by-L2G-20050714.svg/250px-Sudoku-by-L2G-20050714.svg.png)

`Input: board =` 
`["5","3",".",".","7",".",".",".","."]`
`,"6",".",".","1","9","5",".",".","."`
`,".","9","8",".",".",".",".","6","."`
`,"8",".",".",".","6",".",".",".","3"`
`,"4",".",".","8",".","3",".",".","1"`
`,"7",".",".",".","2",".",".",".","6"`
`,".","6",".",".",".",".","2","8","."`
`,".",".",".","4","1","9",".",".","5"`
`,".",".",".",".","8",".",".","7","9"]`
`Output: true`

`Example 2:`

`Input: board =` 
`["8","3",".",".","7",".",".",".","."]`
`,"6",".",".","1","9","5",".",".","."`
`,".","9","8",".",".",".",".","6","."`
`,"8",".",".",".","6",".",".",".","3"`
`,"4",".",".","8",".","3",".",".","1"`
`,"7",".",".",".","2",".",".",".","6"`
`,".","6",".",".",".",".","2","8","."`
`,".",".",".","4","1","9",".",".","5"`
`,".",".",".",".","8",".",".","7","9"]`
`Output: false`

## Solution
We maintain three HashMap. One stores elements in every row, next stores elements in every column and the last stores elements in every sub-box.
We use **any** function to check if count of any number(0-9) is greater than 1 in any row, column or sub-box.

```python
class Solution:
    def isValidSudoku(self, board: list[list[str]]) -> bool:
        rhash = {0:[],1:[],2:[],3:[],4:[],5:[],6:[],7:[],8:[]}
        chash = {0:[],1:[],2:[],3:[],4:[],5:[],6:[],7:[],8:[]}
        bhash = {0:[],1:[],2:[],3:[],4:[],5:[],6:[],7:[],8:[]}
        for row in range(9):
            for col in range(9):
                 ele = board[row][col]
                 if ele != '.':
                    rhash[row].append(ele)
                    chash[col].append(ele)
                    bhash[(row // 3)*3 + col // 3].append(ele)
        for i in range(9):
            if any(rhash[i].count(x) > 1 for x in rhash[i]) or any(chash[i].count(x) > 1 for x in chash[i])  or any(bhash[i].count(x) > 1 for x in bhash[i]):
                return False
        return True
```