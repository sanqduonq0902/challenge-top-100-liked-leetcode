function detectCycle(head: ListNode | null): ListNode | null {
    let slow: ListNode | null = head;
    let fast: ListNode | null = head;
    let hasCycle = false; 

    while (fast && fast.next) {
        slow = slow!.next;
        fast = fast.next.next;

        if (slow === fast) {
            hasCycle = true;
            break;
        }
    }

    if (!hasCycle) return null;

    let entry: ListNode | null = head;
    while (entry !== slow) {
        entry = entry!.next;
        slow = slow!.next;
    }

    return entry;
};