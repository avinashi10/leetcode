/*
 * @lc app=leetcode id=441 lang=javascript
 *
 * [441] Arranging Coins
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var arrangeCoins = function(n) {
    let left = 1;
    let right = n;
    let result = 0;
    while (left <= right) {
      let mid = Math.floor((left + right) / 2);
      if (n - ((mid ** 2 + mid) / 2) > (mid + 1)) {
        result = mid;
        left = mid + 1;
      } else if (n - ((mid ** 2 + mid) / 2) <= (mid + 1) && n - ((mid ** 2 + mid) / 2) >= 0) {
        result = mid;
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
    return result;
};
// @lc code=end

