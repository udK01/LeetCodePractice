// 383. Ransom Note
// Solved
// Easy
// Topics
// Companies
// Given two strings ransomNote and magazine, return true if ransomNote can be constructed by using the letters from magazine and false otherwise.

// Each letter in magazine can only be used once in ransomNote.

// Example 1:

// Input: ransomNote = "a", magazine = "b"
// Output: false
// Example 2:

// Input: ransomNote = "aa", magazine = "ab"
// Output: false
// Example 3:

// Input: ransomNote = "aa", magazine = "aab"
// Output: true

// Constraints:

// 1 <= ransomNote.length, magazine.length <= 105
// ransomNote and magazine consist of lowercase English letters.

/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function (ransomNote, magazine) {
  const countChars = (str) => {
    const charMap = {};
    for (const char of str) {
      charMap[char] = (charMap[char] || 0) + 1;
    }
    return charMap;
  };

  const x = countChars(ransomNote);
  const y = countChars(magazine);

  for (const char in x) {
    if (!y[char] || y[char] < x[char]) {
      return false;
    }
  }

  return true;
};
