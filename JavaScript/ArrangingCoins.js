// 441. Arranging Coins
// Easy
// Topics
// Companies
// You have n coins and you want to build a staircase with these coins. The staircase consists of k rows where the ith row has exactly i coins. The last row of the staircase may be incomplete.

// Given the integer n, return the number of complete rows of the staircase you will build.

// Example 1:

// Input: n = 5
// Output: 2
// Explanation: Because the 3rd row is incomplete, we return 2.
// Example 2:

// Input: n = 8
// Output: 3
// Explanation: Because the 4th row is incomplete, we return 3.

// Constraints:

// 1 <= n <= 231 - 1

/**
 * @param {number} n
 * @return {number}
 */
var arrangeCoins = function (n) {
  let count = n;
  let stairs = 0;

  for (let i = 1; i <= n; i++) {
    if (count >= i) {
      stairs++;
      count -= i;
    } else {
      break;
    }
  }

  return stairs;
};

// Efficient Approach With Binary Search
// var arrangeCoins = function(n) {
//   let left = 1, right = n;

//   while (left <= right) {
//       let mid = Math.floor((left + right) / 2);
//       let coinsUsed = (mid * (mid + 1)) / 2;

//       if (coinsUsed === n) return mid;
//       if (coinsUsed < n) left = mid + 1;
//       else right = mid - 1;
//   }

//   return right;
// };
