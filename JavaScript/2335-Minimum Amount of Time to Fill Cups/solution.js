/**
 * @param {number[]} amount
 * @return {number}
 */
 var fillCups = function(amount) {
    let count = 0;
    amount.sort((a,b) => a-b );
    while(amount[1] && amount[2]){
        count++;
        amount[1]--;
        amount[2]--;
        amount.sort((a,b) => a-b);
    }
    count += amount[2];
    return count;
};