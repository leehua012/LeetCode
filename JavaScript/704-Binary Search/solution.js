var search = function(nums, target) {
    /** 
     * method 1: array
     * return nums.findIndex(el => el==target);
     */
    
    /**
     * method 2: binary search
     */
    let left = 0;
    let right = nums.length-1;
    while(left <= right){
        pivot = left + Math.floor((right - left) / 2);
        if (nums[pivot] == target) return pivot;
        if (target < nums[pivot]) {right = pivot-1;}
        else {left = pivot + 1;}
    }
    return -1;
};
