/**
 * @param {number[]} heights
 * @return {number}
 */
var heightChecker = function(heights) {
    if(heights.length<=1) return 0;
    
    let count = 0;
    dup = [...heights];
    dup.sort((a, b) => a - b);
    dup.map((el, i) => el!=heights[i]? count++ : null)
    return count
};
