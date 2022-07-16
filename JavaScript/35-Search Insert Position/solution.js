var searchInsert = function(nums, target) {
    let left = 0;
    let right = nums.length-1;
    let ans = 0
    while(left <= right){
        pivot = left + Math.floor((right - left)/2);
        if (nums[pivot] == target) return pivot;
        if (target <= nums[pivot]){right = pivot-1}
        else{left = pivot + 1;}
    }
    if(nums[left]>target){return left}
    if(nums[right]>target){return right}
    return nums.length
};
