/*
 * @lc app=leetcode id=278 lang=javascript
 *
 * [278] First Bad Version
 */

// @lc code=start
/**
 * Definition for isBadVersion()
 *
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function(isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function(n) {
        let left = 1;
        let right = n;
        while (left <= right) {
            let mid = Math.floor((left + right) / 2);
            if (left === mid) {
                return left;
            } else if (isBadVersion(mid) === true) {
                right = mid;
            } else {
                left = mid;
            }
        }
    };
};
// @lc code=end

