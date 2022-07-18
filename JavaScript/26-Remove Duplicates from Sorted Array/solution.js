/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    if(nums.length <= 1) return nums.length;
    /**
     * two-pointer approach:
     * i holds the unique positions
     * j bypass the duplicates and find the next unique value
     */
    
    let i = 1;
    let j = 1;
    
    while(j<nums.length){
        prev = nums[j-1];
        cur = nums[j];
        
        if(prev != cur){
            nums[i] = nums[j];
            i++;
        }
        
        j++;
    }
    return i;
};
