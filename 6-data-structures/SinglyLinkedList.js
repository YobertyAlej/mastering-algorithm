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
     * Push a value to be the tail of the list
     *
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
     * Removes the tail of the list and return its value
     *
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
     * Removes the head of the list and return its value
     *
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

  unshift(val) {
    /**
     * Set a new value as the head of the list
     */

    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    }
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
    return this;
  }
  get(index) {
    /**
     * Returns the value of the specified index in the list
     * by iterating over the list until the index it's matched
     */
    if (index < 0 || index >= this.length) return false;
    var counter = 0;
    var current = this.head;
    while (counter !== index) {
      current = current.next;
      counter++;
    }
    return current;
  }
  set(index, val) {
    /**
     * Set a value in a specified index
     */
    let foundNode = this.get(index);
    if (foundNode) {
      foundNode.val = val;
      return true;
    }
    return false;
  }
  insert(index, val) {
    /**
     * Insert a new value in the position of the specified index
     *
     * If is a wrong index, return false
     * If is the last item push it to the last and return true
     * If is the first item unshift it and return true
     *
     * If is in between put the next property of index - 1
     * to be pointing the new node to be attached, and put
     * the new node to be pointing the previous next
     * property of the index - 1
     */

    if (index < 0 || index > this.length) return false;
    if (index === this.length) return !!this.push(val);
    if (index === 0) return !!this.unshift(val);

    let newNode = new Node(val);
    let prev = this.get(index - 1);
    let temp = prev.next;
    prev.next = newNode;
    newNode.next = temp;
    this.length++;
    return true;
  }
  remove(index) {
    /**
     * Removes the item at the selected index
     *
     * If is a wrong index, return false
     * If is the last item pop it, and return true
     * If is the first item unshift it and return true
     *
     * If is in between put the next property of index - 1
     * to be pointing the new node to be attached, and put
     * the new node to be pointing the previous next
     * property of the index - 1
     */

    if (index < 0 || index >= this.length) return null;
    if (index === 0) return this.shift();
    if (index === this.length - 1) return this.pop();
    let previousNode = this.get(index - 1);
    let removed = previousNode.next;
    previousNode.next = removed.next;
    this.length--;
    return removed;
  }
  reverse() {
    /**
     * Change the order of the next chain from right to left
     *
     * Swap the head and the tail
     * Set a node variable to point the tail, which will be the new head
     * Set a prev and a next variable to be null
     * Iterate over the nodes
     * Set next to be the current node's next property
     * Set the current node's next property to be the prev
     * Set prev to point the currents node
     * Set node to point the next node
     *
     * Return the entire list
     */

    let node = this.head;
    this.head = this.tail;
    this.tail = node;
    let next;
    let prev = null;
    for (let i = 0; i < this.length; i++) {
      next = node.next;
      node.next = prev;
      prev = node;
      node = next;
    }
    return this;
  }
}

module.exports = SinglyLinkedList;
