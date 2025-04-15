// 500. Keyboard Row
// Easy
// Topics
// Companies
// Given an array of strings words, return the words that can be typed using letters of the alphabet on only one row of American keyboard like the image below.

// Note that the strings are case-insensitive, both lowercased and uppercased of the same letter are treated as if they are at the same row.

// In the American keyboard:

// the first row consists of the characters "qwertyuiop",
// the second row consists of the characters "asdfghjkl", and
// the third row consists of the characters "zxcvbnm".

// Example 1:

// Input: words = ["Hello","Alaska","Dad","Peace"]

// Output: ["Alaska","Dad"]

// Explanation:

// Both "a" and "A" are in the 2nd row of the American keyboard due to case insensitivity.

// Example 2:

// Input: words = ["omk"]

// Output: []

// Example 3:

// Input: words = ["adsdf","sfd"]

// Output: ["adsdf","sfd"]

// Constraints:

// 1 <= words.length <= 20
// 1 <= words[i].length <= 100
// words[i] consists of English letters (both lowercase and uppercase).

/**
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function (words) {
  let row1 = "qwertyuiop";
  let row2 = "asdfghjkl";
  let row3 = "zxcvbnm";

  let result = [];

  words.forEach((word) => {
    let topRow = false;
    let middleRow = false;
    let bottomRow = false;

    word
      .toLowerCase()
      .split("")
      .forEach((char) => {
        if (row1.includes(char)) {
          topRow = true;
        }
        if (row2.includes(char)) {
          middleRow = true;
        }
        if (row3.includes(char)) {
          bottomRow = true;
        }
      });

    if ([topRow, middleRow, bottomRow].filter(Boolean).length === 1) {
      result.push(word);
    }
  });

  return result;
};
