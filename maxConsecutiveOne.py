class Solution(object):
    def findMaxConsecutiveOnes(self, nums):
        """
        :type nums: List[int]
        :rtype: int
        """
        self.nums = nums
        count = 0
        ones = 0
        for i in range (len(self.nums)): 
            if self.nums[i] == 0:  
                count = 0
            else:
                count+=1
                ones = max(ones,count)
        return ones
