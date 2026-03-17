/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    
    let left = 0;
    let right = nums.length - 1;
    let firstTrueIndex = -1;

    while (left <= right) {
        let mid = Math.floor(left + (right - left) / 2);

        if (nums[mid] >= target) {
            firstTrueIndex = mid;
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }

    if (firstTrueIndex !== -1 && nums[firstTrueIndex] === target) {
        return firstTrueIndex;
    }

    return -1;
};