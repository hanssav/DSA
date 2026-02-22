/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function removeElements(head: ListNode | null, val: number): ListNode | null {
    while(head !== null && head.val === val){
        head = head.next;
    }; 

    if(head === null) return null; 

    let curr = head; 

    while(curr !== null && curr.next !== null){
        if(curr.next.val === val){
            curr.next = curr.next.next;
        } else {
            curr = curr.next;
        }
    }; 

    return head;
};