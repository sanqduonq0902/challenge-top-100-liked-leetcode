function sortList(head: ListNode | null): ListNode | null {
    if (!head || !head.next) return head;
    
    let prev: ListNode | null = null;
    let slow: ListNode | null = head;
    let fast: ListNode | null = head;

    while (fast && fast.next) {
        prev = slow;
        slow = slow!.next;
        fast = fast.next.next;
    }

    if (prev) prev.next = null;

    const left = sortList(head);
    const right = sortList(slow);

    return mergeList(left, right);
};

function mergeList(list1: ListNode | null, list2: ListNode | null) {
    let dummy = new ListNode(-1);
    let tail = dummy;
    let l1 = list1;
    let l2 = list2;

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
}