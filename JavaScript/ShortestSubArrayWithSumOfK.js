// 862. Shortest Subarray with Sum at Least K
// Hard
// Topics
// Companies
// Given an integer array nums and an integer k, return the length of the shortest non-empty subarray of nums with a sum of at least k. If there is no such subarray, return -1.

// A subarray is a contiguous part of an array.

// Example 1:

// Input: nums = [1], k = 1
// Output: 1
// Example 2:

// Input: nums = [1,2], k = 4
// Output: -1
// Example 3:

// Input: nums = [2,-1,2], k = 3
// Output: 3

// Constraints:

// 1 <= nums.length <= 105
// -105 <= nums[i] <= 105
// 1 <= k <= 109

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var shortestSubarray = function (nums, k) {
  let n = nums.length;
  let prefixSums = new Array(n + 1).fill(0);

  for (let i = 0; i < n; i++) {
    prefixSums[i + 1] = prefixSums[i] + nums[i];
  }

  let deque = [];
  let minLength = Infinity;

  for (let i = 0; i <= n; i++) {
    while (deque.length > 0 && prefixSums[i] - prefixSums[deque[0]] >= k) {
      minLength = Math.min(minLength, i - deque.shift());
    }

    while (
      deque.length > 0 &&
      prefixSums[i] <= prefixSums[deque[deque.length - 1]]
    ) {
      deque.pop();
    }

    deque.push(i);
  }

  return minLength === Infinity ? -1 : minLength;
};
