/**
 * @param {number[]} nums
 * @return {number[]}
 */
 
 // two-pointer approach
var sortedSquares = function(nums) {
    let i=0;
    let j=nums.length-1;
    let k=nums.length-1;
    const ans=[];
    
    while(i<=j){
        if(Math.abs(nums[j])>Math.abs(nums[i])){
            ans[k--] = nums[j]*nums[j];
            j--;
        }else{
            ans[k--] = nums[i]*nums[i];
            i++;
        }
    }
    return ans;
};
