/**
 * @param {number[]} nums
 * @return {number}
 */
var minStartValue = function(nums) {
    let sum = 0;
    let minSum = 0;

    for (let num of nums){
        sum += num;
        minSum = Math.min(minSum, sum);
    }
    return 1 - minSum;
    
};