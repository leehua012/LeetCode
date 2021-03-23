class Solution(object):
    def duplicateZeros(self, arr):
        """
        :type arr: List[int]
        :rtype: None Do not return anything, modify arr in-place instead.
        """
        self.arr = arr
        count = 0
        index = []
        for i in range(len(self.arr)):
            if self.arr[i] == 0:
                index.append(i+count)
                count+=1
        for i in index:
            x = len(self.arr)
            self.arr.insert(i,0)
            self.arr.pop(x)
