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

function deleteDuplicates(head: ListNode | null): ListNode | null {
    if(head === null) return null; 
    
    let curr = head; 

    while(curr !== null && curr.next !== null){
        if(curr.val === curr.next.val){
            curr.next = curr.next.next;
        } else {
            curr = curr.next;
        }
    }

    return head
};