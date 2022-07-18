/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    if(nums.length<=1) return nums;
    
    /**
     * method 1
     *
     * let zero = 0; // no. of non-zero
     *
     *  for (let i = 0; i< nums.length; i++){
     *  if(nums[i]!==0)nums[zero++]=nums[i];
     * }
     * for(let i = zero; i<nums.length; i++){
     *   nums[i] = 0;
     * }
     */
    
    /**
     * method 2
     */
    let i = 0; // holds index of zero
    let j = 0; // find next non-zero
    
    while(j<nums.length){
        if(nums[j]!=0){
            temp = nums[i];
            nums[i++] = nums[j];
            nums[j] = temp;
        }
        j++;
    }
         
};
