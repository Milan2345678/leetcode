/**
 * @param {number[]} nums
 * @param {number[]} queries
 * @return {number[]}
 */
var answerQueries = function(nums, queries) {
    nums.sort((a, b) => a - b);

    const prefix = [];
    prefix[0] = nums[0];
    for (let i = 1; i < nums.length; i++){
        prefix[i] = prefix[i - 1] + nums[i];
    }
    function binarySearch(target){
        let left = 0; right = prefix.length - 1;
        let ans = 0;

        while(left <= right){
            let mid = Math.floor((left + right) / 2);

            if(prefix[mid] <= target){
                ans = mid + 1;
                left = mid + 1;
            }else {
                right = mid - 1; 
            }
        }
        return ans;
    }
    const result = [];
    for (let q of queries){
        result.push(binarySearch(q));
    }
    return result;
};