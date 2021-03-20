class Solution(object):
    def findNumbers(self, nums):
        """
        :type nums: List[int]
        :rtype: int
        """
        self.nums = nums
        count = 0
        for i in range(len(self.nums)):
            x = len(str(self.nums[i]))
            if x%2==0: count +=1
        return count