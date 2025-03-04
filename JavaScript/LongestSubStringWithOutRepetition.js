// 3. Longest Substring Without Repeating Characters
// Medium
// Topics
// Companies
// Hint
// Given a string s, find the length of the longest substring without duplicate characters.

// Example 1:

// Input: s = "abcabcbb"
// Output: 3
// Explanation: The answer is "abc", with the length of 3.
// Example 2:

// Input: s = "bbbbb"
// Output: 1
// Explanation: The answer is "b", with the length of 1.
// Example 3:

// Input: s = "pwwkew"
// Output: 3
// Explanation: The answer is "wke", with the length of 3.
// Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.

// Constraints:

// 0 <= s.length <= 5 * 104
// s consists of English letters, digits, symbols and spaces.

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  let maxLen = 0;
  let start = 0;
  let seen = new Map();

  for (let end = 0; end < s.length; end++) {
    if (seen.has(s[end])) {
      start = Math.max(seen.get(s[end]) + 1, start);
    }
    seen.set(s[end], end);
    maxLen = Math.max(maxLen, end - start + 1);
  }

  return maxLen;
};
