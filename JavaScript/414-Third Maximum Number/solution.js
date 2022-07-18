/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function(nums) {
    let arr = [nums[0]];
    for(let i=1; i<nums.length; i++){
        prev = nums[i-1];
        cur = nums[i];

        if(prev != cur){
            if(!arr.includes(cur)) arr.push(cur);
        }
    }
    arr.sort((a,b) => b-a);   
    ans = arr.length>=3? arr[2] : arr[0];
    return ans;
};
