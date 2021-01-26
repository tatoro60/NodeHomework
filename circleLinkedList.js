function checkCircularLinkedList(root) {
    if (root == null) {
        return false;
    }
    let slow = root;
    let fast = root;
    while (fast.next != null && fast.next.next != null) {
        slow = slow.next;
        fast = fast.next.next;
        if (fast == slow) {
            return true;
        }
    }
    return false;
}