/*
 * @lc app=leetcode id=153 lang=javascript
 *
 * [153] Find Minimum in Rotated Sorted Array
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
    let left = 0;
    let right = nums.length - 1;
    let result = -1;
    let last = nums[right];
    while (left <= right) {
      let mid = Math.floor((left + right) / 2);
      if (nums[mid] <= last) {
        result = mid;
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    }
    return nums[result];
};
// @lc code=end

