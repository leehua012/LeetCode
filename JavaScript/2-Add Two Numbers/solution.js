/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
 var addTwoNumbers = function(l1, l2) {
    let head = null, tail = null, carry = 0;
    
    while(l1 || l2){
        let num1 = l1? l1.val: 0;
        let num2 = l2? l2.val: 0;
        
        sum = num1 + num2 + carry;
        val = sum%10;
        carry = Math.floor(sum/10);
        
        if(!head){
            head = tail = new ListNode(val); // initialize first node
        }else{
            tail.next = new ListNode(val);
            tail = tail.next;
        }
        
        l1 = l1? l1.next: null;
        l2 = l2? l2.next: null;
    }
    
    if(carry>0){
        tail.next = new ListNode(carry);
    }
    return head;
};
