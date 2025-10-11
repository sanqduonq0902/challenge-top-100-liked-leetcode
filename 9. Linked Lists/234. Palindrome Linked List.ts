function isPalindrome(head: ListNode | null): boolean {
    let slow: ListNode | null = head;
    let fast: ListNode | null = head;

    while (fast && fast.next) {
        slow = slow!.next;
        fast = fast.next.next;
    }

    let prev: ListNode | null = null;

    while (slow) {
        let next = slow.next;
        slow.next = prev;
        prev = slow;
        slow = next;
    }

    let left: ListNode | null = head;
    let right: ListNode | null = prev;

    while (right) {
        if (left!.val !== right.val) return false;
        left = left!.next;
        right = right.next;
    }

    return true;
};