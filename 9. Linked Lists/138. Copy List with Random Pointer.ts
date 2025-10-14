class _Node {
  val: number;
  next: _Node | null;
  random: _Node | null;

  constructor(val?: number, next?: _Node, random?: _Node) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
    this.random = random === undefined ? null : random;
  }
}

function copyRandomList(head: _Node | null): _Node | null {
  if (!head) return null;

  let curr: _Node | null = head;
  while (curr) {
    const copy: any = new _Node(curr.val);
    copy.next = curr.next;
    curr.next = copy;
    curr = copy.next;
  }

  curr = head;
  while (curr) {
    if (curr.random) {
      curr.next!.random = curr.random.next;
    }
    curr = curr.next!.next;
  }

  curr = head;
  const dummy = new _Node(0);
  let copyCurr: _Node | null = dummy;

  while (curr) {
    copyCurr!.next = curr.next;
    curr.next = curr.next!.next;
    curr = curr.next;
    copyCurr = copyCurr!.next;
  }

  return dummy.next;
}
