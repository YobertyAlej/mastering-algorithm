/**
 * Node
 *
 * value - Piece of data
 * next - Reference to next node
 */

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.lenght = 0;
  }

  push(value) {
    /**
     * Create a fresh node with the value, if no head
     * set the head and the tail to be the newly created node
     * and increment by 1 the length
     */

    let node = new Node(value);
    if (this.head === null) {
      this.head = node;
    } else {
      this.tail.next = node;
    }

    this.tail = node;
    this.lenght = this.lenght + 1;

    return this;
  }
}
