// Inspired by https://leetcode.com/problems/find-all-numbers-disappeared-in-an-array/discuss/92955/Python-4-lines-with-short-explanation

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
    const ans = [];
    for(let i=0; i<nums.length; i++){
        j = Math.abs(nums[i]) - 1;
        nums[j] = -Math.abs(nums[j]);
    }
    for(let i=0; i<nums.length; i++){
        if(nums[i]>0){
            ans.push(i+1);
        }
    }
    return ans;
};
