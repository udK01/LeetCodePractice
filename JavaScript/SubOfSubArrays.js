// 2104. Sum of Subarray Ranges
// Medium
// Topics
// Companies
// Hint
// You are given an integer array nums. The range of a subarray of nums is the difference between the largest and smallest element in the subarray.

// Return the sum of all subarray ranges of nums.

// A subarray is a contiguous non-empty sequence of elements within an array.

// Example 1:

// Input: nums = [1,2,3]
// Output: 4
// Explanation: The 6 subarrays of nums are the following:
// [1], range = largest - smallest = 1 - 1 = 0
// [2], range = 2 - 2 = 0
// [3], range = 3 - 3 = 0
// [1,2], range = 2 - 1 = 1
// [2,3], range = 3 - 2 = 1
// [1,2,3], range = 3 - 1 = 2
// So the sum of all ranges is 0 + 0 + 0 + 1 + 1 + 2 = 4.
// Example 2:

// Input: nums = [1,3,3]
// Output: 4
// Explanation: The 6 subarrays of nums are the following:
// [1], range = largest - smallest = 1 - 1 = 0
// [3], range = 3 - 3 = 0
// [3], range = 3 - 3 = 0
// [1,3], range = 3 - 1 = 2
// [3,3], range = 3 - 3 = 0
// [1,3,3], range = 3 - 1 = 2
// So the sum of all ranges is 0 + 0 + 0 + 2 + 0 + 2 = 4.
// Example 3:

// Input: nums = [4,-2,-3,4,1]
// Output: 59
// Explanation: The sum of all subarray ranges of nums is 59.

// Constraints:

// 1 <= nums.length <= 1000
// -109 <= nums[i] <= 109

// Follow-up: Could you find a solution with O(n) time complexity?

/**
 * @param {number[]} nums
 * @return {number}
 */
var subArrayRanges = function (nums) {
  let total = 0;

  for (let start = 0; start < nums.length; start++) {
    let max = nums[start],
      min = nums[start];

    for (let end = start + 1; end < nums.length; end++) {
      max = Math.max(max, nums[end]);
      min = Math.min(min, nums[end]);

      total += max - min;
    }
  }

  return total;
};
