/*
 * @lc app=leetcode id=1448 lang=javascript
 *
 * [1448] Count Good Nodes in Binary Tree
 */

// @lc code=start
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
var goodNodes = function(root, currentMax = root.val) {
  if (root === null) {
    return 0;
  }
  let total = 0;
  if (root.val >= currentMax) {
    total++;
  }
  total += goodNodes(root.left, Math.max(currentMax, root.val));
  total += goodNodes(root.right, Math.max(currentMax, root.val));
  return total;

};
// @lc code=end

