class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function addTwoNumbers(
  l1: ListNode | null,
  l2: ListNode | null,
): ListNode | null {
  l1 = reverseList(l1);
  l2 = reverseList(l2);

  let carry = 0;
  let result: ListNode | null = null;

  while (l1 || l2 || carry) {
    const sum = (l1?.val ?? 0) + (l2?.val ?? 0) + carry;
    const digit = sum % 10;
    carry = Math.floor(sum / 10);

    // Create a new node for the current digit
    const newNode = new ListNode(digit);
    newNode.next = result;
    result = newNode;

    // Move to the next nodes in the linked lists
    l1 = l1?.next ?? null;
    l2 = l2?.next ?? null;
  }

  return result;
}

function reverseList(head: ListNode | null): ListNode | null {
  let prev: ListNode | null = null;
  let current = head;

  while (current) {
    const next = current.next;
    current.next = prev;
    prev = current;
    current = next;
  }

  return prev;
}

console.log(addTwoNumbers(null, null));
