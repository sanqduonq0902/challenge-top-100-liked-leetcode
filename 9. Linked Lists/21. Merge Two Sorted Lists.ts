function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
    let dummy: ListNode | null = new ListNode(-1);
    let tail: ListNode | null = dummy;
    let l1: ListNode | null = list1;
    let l2: ListNode | null = list2;

    while (l1 && l2) {
        if (l1.val <= l2.val) {
            tail.next = l1;
            l1 = l1.next;
        }
        else {
            tail.next = l2;
            l2 = l2.next;
        }

        tail = tail.next;
    }

    tail.next = l1 ?? l2;
    
    return dummy.next;
};