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
    this.length = 0;
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
    this.length = this.length + 1;

    return this;
  }

  pop() {
    /**
     * If there are no nodes in the list, return undefined
     * Loop through the list until you reach the tail
     * Set the next property of the 2nd to last node to be null
     * Set the tail to be the 2nd to last node
     */

    if (this.head === null) {
      return undefined;
    }

    let current = this.head;
    let newTail = current;
    while (current.next) {
      newTail = current;
      current = current.next;
    }

    this.tail = newTail;
    this.tail.next = null;
    this.length = this.length - 1;

    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }

    return current;
  }

  shift() {
    /**
     * If no items in node, return undefined
     * Set the head to be the next property of current head
     * Decrement the length
     * Return the previous head
     */

    if (this.head === null) {
      return undefined;
    }

    let current = this.head;
    this.head = current.next;
    this.length = this.length - 1;

    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return current;
  }
}

module.exports = {
  Node,
  SinglyLinkedList
};
