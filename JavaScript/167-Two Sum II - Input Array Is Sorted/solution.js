/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
 var twoSum = function(numbers, target) {
    let r = numbers.length - 1, l = 0;    
    while(l<r){
        sum = numbers[l] + numbers[r];
        if(sum == target){
            return [l+1, r+1];
        }else if(sum > target){
            r--;
        }else{
            l++;
        }
    }
};