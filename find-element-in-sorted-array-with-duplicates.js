// Given a sorted array of integers and a target integer, find the first occurrence of the target and return its index. Return -1 if the target is not in the array.

// Input:

// arr = [1, 3, 3, 3, 3, 6, 10, 10, 10, 100]
// target = 3
// Output: 1

// Explanation: The first occurrence of 3 is at index 1.

// Input:

// arr = [2, 3, 5, 7, 11, 13, 17, 19]
// target = 6
// Output: -1

// Explanation: 6 does not exist in the array.

function findFirstOccurrence(arr, target) {
  let left = 0;
  let right = arr.length - 1;
  let result = -1
  while (left <= right) {
      let mid = Math.floor((left + right)/2)
      if (arr[mid] === target) {
          result = mid
          right = mid - 1;
      } else if (arr[mid] > target) {
          right = mid - 1;
      } else {
          left = mid + 1;
      }
      }
  return result;
}
