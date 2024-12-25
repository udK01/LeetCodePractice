// 345. Reverse Vowels of a String
// Easy
// Topics
// Companies
// Given a string s, reverse only all the vowels in the string and return it.

// The vowels are 'a', 'e', 'i', 'o', and 'u', and they can appear in both lower and upper cases, more than once.

// Example 1:

// Input: s = "IceCreAm"

// Output: "AceCreIm"

// Explanation:

// The vowels in s are ['I', 'e', 'e', 'A']. On reversing the vowels, s becomes "AceCreIm".

// Example 2:

// Input: s = "leetcode"

// Output: "leotcede"

// Constraints:

// 1 <= s.length <= 3 * 105
// s consist of printable ASCII characters.

/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function (s) {
  let left = 0;
  let right = s.length - 1;

  let str = s.split("");
  let vowels = ["a", "e", "i", "o", "u"];

  while (right > left) {
    if (!vowels.includes(str[left].toLowerCase())) {
      left += 1;
      continue;
    }

    if (!vowels.includes(str[right].toLowerCase())) {
      right -= 1;
      continue;
    }

    [str[left], str[right]] = [str[right], str[left]];
    left += 1;
    right -= 1;
  }

  let result = str.join("");
  return result;
};
