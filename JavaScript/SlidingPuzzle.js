// 773. Sliding Puzzle
// Hard
// Topics
// Companies
// Hint
// On an 2 x 3 board, there are five tiles labeled from 1 to 5, and an empty square represented by 0. A move consists of choosing 0 and a 4-directionally adjacent number and swapping it.

// The state of the board is solved if and only if the board is [[1,2,3],[4,5,0]].

// Given the puzzle board board, return the least number of moves required so that the state of the board is solved. If it is impossible for the state of the board to be solved, return -1.

// Example 1:

// Image 1

// Input: board = [[1,2,3],[4,0,5]]
// Output: 1
// Explanation: Swap the 0 and the 5 in one move.

// Example 2:

// Image 2

// Input: board = [[1,2,3],[5,4,0]]
// Output: -1
// Explanation: No number of moves will make the board solved.

// Example 3:

// Image 3

// Input: board = [[4,1,2],[5,0,3]]
// Output: 5
// Explanation: 5 is the smallest number of moves that solves the board.
// An example path:
// After move 0: [[4,1,2],[5,0,3]]
// After move 1: [[4,1,2],[0,5,3]]
// After move 2: [[0,1,2],[4,5,3]]
// After move 3: [[1,0,2],[4,5,3]]
// After move 4: [[1,2,0],[4,5,3]]
// After move 5: [[1,2,3],[4,5,0]]

// Constraints:

// board.length == 2
// board[i].length == 3
// 0 <= board[i][j] <= 5
// Each value board[i][j] is unique.

/**
 * @param {number[][]} board
 * @return {number}
 */
var slidingPuzzle = function (board) {
  const start = board.flat().join("");
  const goal = "123450";

  const moves = [
    [1, 3],
    [0, 2, 4],
    [1, 5],
    [0, 4],
    [1, 3, 5],
    [2, 4],
  ];

  const queue = [[start, start.indexOf("0"), 0]];
  const visited = new Set();
  visited.add(start);

  while (queue.length > 0) {
    const [state, zeroIndex, steps] = queue.shift();

    if (state === goal) {
      return steps;
    }

    for (const move of moves[zeroIndex]) {
      const newState = state.split("");
      [newState[zeroIndex], newState[move]] = [
        newState[move],
        newState[zeroIndex],
      ];
      const newStateStr = newState.join("");

      if (!visited.has(newStateStr)) {
        visited.add(newStateStr);
        queue.push([newStateStr, move, steps + 1]);
      }
    }
  }

  return -1;
};
