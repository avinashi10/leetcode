/*
 * @lc app=leetcode id=367 lang=javascript
 *
 * [367] Valid Perfect Square
 */

// @lc code=start
/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function(num) {
    let left = 1;
    let right = num;
    while (left <= right) {
      let mid = Math.floor((left + right)/2);
      if (mid * mid === num) {
        return true;
      } else if (mid * mid > num) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    }
    return false;
};
// @lc code=end

