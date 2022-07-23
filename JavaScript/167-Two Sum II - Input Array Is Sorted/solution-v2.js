/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
 var twoSum = function(numbers, target) {
    // binary search: O(nlogn)
    for(let i=0; i<numbers.length; i++){
        let num = target - numbers[i];
        let l = i+1; r = numbers.length-1;
        
        while(l<=r){
            pivot = Math.floor((l+r)/2);
            if(numbers[pivot]==num){
                return [i+1, pivot+1];
            }else if(num>numbers[pivot]){
                l = pivot + 1;
            }else{
                r = pivot - 1;
            }
        }
    }
};