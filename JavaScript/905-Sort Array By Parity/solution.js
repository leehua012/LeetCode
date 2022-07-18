/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParity = function(nums) {
    if(nums.length<=1)return nums;
    
    let i=0;
    let j=0;
    
    while(j<nums.length){
        if(nums[j]%2 == 0){
            temp = nums[i];
            nums[i++] =  nums[j];
            nums[j] = temp;
        }
        j++;
    }
    return nums;
};
