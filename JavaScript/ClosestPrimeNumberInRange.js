// 2523. Closest Prime Numbers in Range
// Medium
// Topics
// Companies
// Hint
// Given two positive integers left and right, find the two integers num1 and num2 such that:

// left <= num1 < num2 <= right .
// Both num1 and num2 are prime numbers.
// num2 - num1 is the minimum amongst all other pairs satisfying the above conditions.
// Return the positive integer array ans = [num1, num2]. If there are multiple pairs satisfying these conditions, return the one with the smallest num1 value. If no such numbers exist, return [-1, -1].

// Example 1:

// Input: left = 10, right = 19
// Output: [11,13]
// Explanation: The prime numbers between 10 and 19 are 11, 13, 17, and 19.
// The closest gap between any pair is 2, which can be achieved by [11,13] or [17,19].
// Since 11 is smaller than 17, we return the first pair.
// Example 2:

// Input: left = 4, right = 6
// Output: [-1,-1]
// Explanation: There exists only one prime number in the given range, so the conditions cannot be satisfied.

// Constraints:

// 1 <= left <= right <= 106

/**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */
var closestPrimes = function (left, right) {
  function sieve(limit) {
    const primes = new Array(limit + 1).fill(true);
    primes[0] = primes[1] = false;
    for (let i = 2; i * i <= limit; i++) {
      if (primes[i]) {
        for (let j = i * i; j <= limit; j += i) {
          primes[j] = false;
        }
      }
    }

    return primes.map((isPrime, num) => (isPrime ? num : null)).filter(Boolean);
  }

  let primesList = sieve(right).filter((num) => num >= left);

  if (primesList.length >= 2) {
    let num1, num2;
    let result = [primesList[0], primesList[1]];
    let min = result[1] - result[0];

    for (let i = 1; i < primesList.length - 1; i++) {
      num1 = primesList[i];
      num2 = primesList[i + 1];

      if (num2 - num1 < min) {
        min = num2 - num1;
        result = [num1, num2];
      }
    }
    return result;
  } else {
    return [-1, -1];
  }
};
