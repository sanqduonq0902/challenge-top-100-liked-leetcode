function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
    const dummy = new ListNode(0, head);
    let slow: ListNode | null = dummy;
    let fast: ListNode | null = dummy;

    for (let i = 0; i < n; i++) {
        fast = fast!.next;
    }

    while (fast && fast.next) {
        slow = slow!.next;
        fast = fast.next;
    }

    slow!.next = slow!.next!.next;

    return dummy.next;
};