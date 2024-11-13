// 20. Valid Parentheses
// Easy
// Topics
// Companies
// Hint
// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Every close bracket has a corresponding open bracket of the same type.

// Example 1:

// Input: s = "()"

// Output: true

// Example 2:

// Input: s = "()[]{}"

// Output: true

// Example 3:

// Input: s = "(]"

// Output: false

// Example 4:

// Input: s = "([])"

// Output: true

// Constraints:

// 1 <= s.length <= 104
// s consists of parentheses only '()[]{}'.

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  const openBrackets = ["(", "[", "{"];
  let stack = [];

  for (let i = 0; i < s.length; i++) {
    const char = s[i];

    if (openBrackets.includes(char)) {
      stack.push(char);
    } else {
      let lastOpen = stack.pop();

      if (
        (char === ")" && lastOpen !== "(") ||
        (char === "]" && lastOpen !== "[") ||
        (char === "}" && lastOpen !== "{")
      ) {
        return false;
      }
    }
  }

  return stack.length === 0;
};

console.log(isValid("()"));
console.log(isValid("()[]{}"));
console.log(isValid("(]"));
console.log(isValid("([])"));
