// 2. Add Two Numbers
// Medium
// Topics
// Companies
// You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.

// You may assume the two numbers do not contain any leading zero, except the number 0 itself.

// Example 1:

// Input: l1 = [2,4,3], l2 = [5,6,4]
// Output: [7,0,8]
// Explanation: 342 + 465 = 807.
// Example 2:

// Input: l1 = [0], l2 = [0]
// Output: [0]
// Example 3:

// Input: l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
// Output: [8,9,9,9,0,0,0,1]

// Constraints:

// The number of nodes in each linked list is in the range [1, 100].
// 0 <= Node.val <= 9
// It is guaranteed that the list represents a number that does not have leading zeros.

var addTwoNumbers = function (l1, l2) {
  function traverse(head) {
    let value = "";
    let current = head;
    while (current !== null) {
      value += current.val.toString();
      current = current.next;
    }

    return BigInt(value.split("").reverse().join(""));
  }

  let result = traverse(l1) + traverse(l2);
  let resultArray = result.toString().split("").reverse();

  let resultListNode = new ListNode(Number(resultArray[0]));
  let current = resultListNode;

  for (let i = 1; i < resultArray.length; i++) {
    current.next = new ListNode(Number(resultArray[i]));
    current = current.next;
  }

  return resultListNode;
};
