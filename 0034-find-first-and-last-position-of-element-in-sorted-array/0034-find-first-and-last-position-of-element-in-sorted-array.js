var searchRange = function(nums, target) {

    function findFirst(nums, target) {
        let left = 0, right = nums.length - 1;
        let ans = -1;

        while (left <= right) {
            let mid = Math.floor(left + (right - left) / 2);

            if (nums[mid] === target) {
                ans = mid;        // store answer
                right = mid - 1;  // go left
            } 
            else if (nums[mid] < target) {
                left = mid + 1;
            } 
            else {
                right = mid - 1;
            }
        }

        return ans;
    }

    function findLast(nums, target) {
        let left = 0, right = nums.length - 1;
        let ans = -1;

        while (left <= right) {
            let mid = Math.floor(left + (right - left) / 2);

            if (nums[mid] === target) {
                ans = mid;       // store answer
                left = mid + 1;  // go right
            } 
            else if (nums[mid] < target) {
                left = mid + 1;
            } 
            else {
                right = mid - 1;
            }
        }

        return ans;
    }

    let first = findFirst(nums, target);
    let last = findLast(nums, target);

    return [first, last];
};