function swapPairs(head: ListNode | null): ListNode | null {
    if (!head || !head.next) return head;

    let first: ListNode | null = head;
    let second: ListNode | null = head.next;

    first.next = swapPairs(second.next);
    second.next = first;

    return second;
};