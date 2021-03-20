int findMaxConsecutiveOnes(int* nums, int numsSize){
    int ones = 0, result = 0;
    for(int i=0; i<numsSize; i++){
        if (nums[i]==0){
            ones = 0;
        }
        else{
            ones+=1;
            if (ones>result){
                result = ones;
            }
        }
    }
    return result;
}