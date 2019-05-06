class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  /**
   * Linked list built uppon nodes with pointers
   * for their previous and next node
   */
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    let node = new Node(val);
    if (this.length === 0) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      node.prev = this.tail;
      this.tail = node;
    }
    this.length++;
    return this;
  }

  pop() {
    if (this.tail === null) return false;
    let tail = this.tail;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = tail.prev;
      this.tail.next = null;
      tail.prev = null;
    }
    this.length = this.length - 1;

    return tail;
  }

  shift() {
    if (this.length === 0) return false;
    let oldHead = this.head;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = oldHead.next;
      this.head.prev = null;
      oldHead.next = null;
    }
    this.length = this.length - 1;

    return oldHead;
  }

  unshift() {
    let node = new Node();
    if (this.length === 0) {
      this.head = node;
      this.tail = node;
    } else {
      this.head.prev = node;
      node.next = this.head;
      this.head = node;
    }
    this.length = this.length + 1;

    return this;
  }

  get(index) {
    /**
     * Returns the value of the specified index in the list
     * by iterating over the list until the index it's matched
     *
     * Checks if is shorter from tail or from head
     */

    if (index < 0 || index >= this.length) return false;
    let isAtLastHalf = this.length / 2 < index;
    let property = isAtLastHalf ? "prev" : "next";
    let counter = 0;
    let current = isAtLastHalf ? this.tail : this.head;
    if (isAtLastHalf) index = this.length - 1 - index;
    while (counter !== index) {
      current = current[property];
      counter++;
    }

    return current;
  }

  set(index, val) {
    let foundNode = this.get(index);
    if (foundNode != null) {
      foundNode.val = val;
      return true;
    }
    return false;
  }
  insert(index, val) {
    if (index < 0 || index > this.length) return false;
    if (index === 0) return !!this.unshift(val);
    if (index === this.length) return !!this.push(val);

    let node = new Node(val);
    let beforeNode = this.get(index - 1);
    let afterNode = beforeNode.next;

    (beforeNode.next = node), (node.prev = beforeNode);
    (node.next = afterNode), (afterNode.prev = node);
    this.length++;
    return true;
  }
}

module.exports = DoublyLinkedList;
