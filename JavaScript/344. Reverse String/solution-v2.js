/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
 var reverseString = function(s) {
    r = s.length-1;
    // deconstructing assignment: O(n)
    for(let i=0; i<r; i++){
        [s[i], s[r]] = [s[r], s[i]];
        r--;
    }
};