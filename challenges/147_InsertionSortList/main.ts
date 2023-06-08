class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function _insertionSortList(head: ListNode | null): ListNode | null {
  if (head === null || head.next === null) return head;

  // Create a dummy head node to simplify insertion
  const dummyHead: ListNode = new ListNode();
  dummyHead.next = head;

  let curr: ListNode | null = head; // Current node being considered
  let lastSorted: ListNode | null = head; // Last node in the sorted portion of the list

  while (curr !== null) {
    if (lastSorted!.val <= curr.val) {
      // If the current node is greater than or equal to the last sorted node,
      // move the pointers forward
      lastSorted = curr;
      curr = curr.next;
    } else {
      // Find the insertion position for the current node in the sorted list
      let prev: ListNode | null = dummyHead;

      // Iterate until the correct insertion position is found
      while (prev.next !== null && prev.next.val < curr.val) {
        prev = prev.next;
      }

      // Perform the insertion
      lastSorted!.next = curr.next;
      curr.next = prev.next;
      prev.next = curr;
      curr = lastSorted!.next;
    }
  }

  return dummyHead.next;
}
