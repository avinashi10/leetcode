/*
 * @lc app=leetcode id=852 lang=javascript
 *
 * [852] Peak Index in a Mountain Array
 */

// @lc code=start
/**
 * @param {number[]} arr
 * @return {number}
 */
var peakIndexInMountainArray = function(arr) {
  let left = 0;
  let right = arr.length - 1;
  let result = -1;
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (arr[mid] > arr[mid + 1]){
      result = mid;
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return result;

};
// @lc code=end

