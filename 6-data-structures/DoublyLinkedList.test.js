/* eslint-env jest */

const DoublyLinkedList = require("./DoublyLinkedList");

let doublyLinked = null;

beforeEach(() => {
  doublyLinked = new DoublyLinkedList();
});

afterEach(() => {
  doublyLinked = null;
});

describe("# Doubly Linked List", () => {
  it("creates a fresh doubly linked list", () => {
    expect(doublyLinked).toHaveProperty("head");
    expect(doublyLinked).toHaveProperty("tail");
    expect(doublyLinked).toHaveProperty("length");

    expect(doublyLinked.head).toBe(null);
    expect(doublyLinked.tail).toBe(null);
    expect(doublyLinked.length).toBe(0);
  });

  xit("push a node to a doubly linked list", () => {});
});
