/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
    nums = nums.map(el => el*el);
    nums.sort((a,b) => a-b);
    return nums;
};
