// 111. Minimum Depth of Binary Tree
// Easy
// Topics
// Companies
// Given a binary tree, find its minimum depth.

// The minimum depth is the number of nodes along the shortest path from the root node down to the nearest leaf node.

// Note: A leaf is a node with no children.

// Example 1:

// Input: root = [3,9,20,null,null,15,7]
// Output: 2
// Example 2:

// Input: root = [2,null,3,null,4,null,5,null,6]
// Output: 5

// Constraints:

// The number of nodes in the tree is in the range [0, 105].
// -1000 <= Node.val <= 1000

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var minDepth = function (root) {
  function findMinDepth(node, depth) {
    if (node === null) {
      return depth;
    }

    if (node.left === null) {
      return findMinDepth(node.right, depth + 1);
    }

    if (node.right === null) {
      return findMinDepth(node.left, depth + 1);
    }

    let leftDepth = findMinDepth(node.left, depth + 1);
    let rightDepth = findMinDepth(node.right, depth + 1);

    return Math.min(leftDepth, rightDepth);
  }

  if (root === null) return 0;
  return findMinDepth(root, 0);
};
