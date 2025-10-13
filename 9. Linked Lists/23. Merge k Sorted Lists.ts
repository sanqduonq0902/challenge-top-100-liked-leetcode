class MyMinHeap {
    private heap: ListNode[];

    constructor() {
        this.heap = [];
    }

    push(node: ListNode): void {
        this.heap.push(node);
        this.heap.sort((a, b) => a.val - b.val);
    }

    pop(): ListNode | undefined {
        return this.heap.shift();
    }

    get size(): number {
        return this.heap.length;
    }
}

function mergeKLists(lists: Array<ListNode | null>): ListNode | null {
    const heap = new MyMinHeap();
    let dummy: ListNode | null = new ListNode(-1);
    let tail: ListNode | null = dummy;

    for (const list of lists) {
        if (list !== null) heap.push(list);
    }

    while (heap.size > 0) {
        const node = heap.pop()!;
        tail.next = node;
        tail = tail.next; 

        if (node.next !== null) heap.push(node.next);
    }

    return dummy.next;
};