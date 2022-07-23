/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
 var rotate = function(nums, k) {
    k%=nums.length;
    let j=nums.length-k-1;
    for(let i=0; i<j; i++){
        nums[j] ^= nums[i];
        nums[i] ^= nums[j];
        nums[j] ^= nums[i];
        j--;
    }
    let l=nums.length-1;
    for(let i=nums.length-k; i<l; i++){
        nums[l] ^= nums[i];
        nums[i] ^= nums[l];
        nums[l] ^= nums[i];
        l--;
    }
    let m=nums.length-1;
    for(let i=0; i<m; i++){
        nums[m] ^= nums[i];
        nums[i] ^= nums[m];
        nums[m] ^= nums[i];
        m--;
    }  
};