// 1861. Rotating the Box
// Medium
// Topics
// Companies
// Hint
// You are given an m x n matrix of characters box representing a side-view of a box. Each cell of the box is one of the following:

// A stone '#'
// A stationary obstacle '*'
// Empty '.'
// The box is rotated 90 degrees clockwise, causing some of the stones to fall due to gravity. Each stone falls down until it lands on an obstacle, another stone, or the bottom of the box. Gravity does not affect the obstacles' positions, and the inertia from the box's rotation does not affect the stones' horizontal positions.

// It is guaranteed that each stone in box rests on an obstacle, another stone, or the bottom of the box.

// Return an n x m matrix representing the box after the rotation described above.

// Example 1:

// Image 1

// Input: box = [["#",".","#"]]
// Output: [["."],
//          ["#"],
//          ["#"]]

// Example 2:

// Image 2

// Input: box = [["#",".","*","."],
//               ["#","#","*","."]]
// Output: [["#","."],
//          ["#","#"],
//          ["*","*"],
//          [".","."]]

// Example 3:

// Image 3

// Input: box = [["#","#","*",".","*","."],
//               ["#","#","#","*",".","."],
//               ["#","#","#",".","#","."]]
// Output: [[".","#","#"],
//          [".","#","#"],
//          ["#","#","*"],
//          ["#","*","."],
//          ["#",".","*"],
//          ["#",".","."]]

// Constraints:

// m == box.length
// n == box[i].length
// 1 <= m, n <= 500
// box[i][j] is either '#', '*', or '.'.

/**
 * @param {character[][]} box
 * @return {character[][]}
 */
var rotateTheBox = function (box) {
  const m = box.length;
  const n = box[0].length;

  for (let i = 0; i < m; i++) {
    let emptyPos = n - 1;
    for (let j = n - 1; j >= 0; j--) {
      if (box[i][j] === "#") {
        box[i][j] = ".";
        box[i][emptyPos] = "#";
        emptyPos--;
      } else if (box[i][j] === "*") {
        emptyPos = j - 1;
      }
    }
  }

  const rotatedBox = Array.from({ length: n }, () => Array(m).fill(""));
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      rotatedBox[j][m - 1 - i] = box[i][j];
    }
  }

  return rotatedBox;
};
