/*
 * @lc app=leetcode id=744 lang=javascript
 *
 * [744] Find Smallest Letter Greater Than Target
 */

// @lc code=start
/**
 * @param {character[]} letters
 * @param {character} target
 * @return {character}
 */
var nextGreatestLetter = function(letters, target) {
  let left = 0;
  let right = letters.length - 1;
  let result = letters[0];
  while (left <= right) {
    let mid = Math.floor((left + right)/2);
    if (letters[mid] > target) {
      result = letters[mid];
      right = mid -1;
    } else {
      left = mid + 1;
    }
  }
  return result;

};
// @lc code=end

