// 7. Reverse Integer
// Medium
// Topics
// Companies
// Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.

// Assume the environment does not allow you to store 64-bit integers (signed or unsigned).

// Example 1:

// Input: x = 123
// Output: 321
// Example 2:

// Input: x = -123
// Output: -321
// Example 3:

// Input: x = 120
// Output: 21

// Constraints:

// -231 <= x <= 231 - 1

/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
  const MIN_INT = -2147483648;
  const MAX_INT = 2147483647;

  let reversedNumber = 0;

  let absX = Math.abs(x);
  let reversedStr = absX.toString().split("").reverse().join("");
  reversedNumber = parseInt(reversedStr);

  if (reversedNumber > MAX_INT || reversedNumber < MIN_INT) {
    return 0;
  }

  if (x < 0) {
    reversedNumber = -reversedNumber;
  }

  return reversedNumber;
};
