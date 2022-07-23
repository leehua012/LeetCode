/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
 var reverseString = function(s) {
    r = s.length-1;
    for(let i=0; i<r; i++){
        tmp = s[r];
        s[r] = s[i];
        s[i] = tmp;
        r--;
    }
};