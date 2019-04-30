/* eslint-env jest */

const { SinglyLinkedList } = require("./singlyLinkedList");

let singlyLinked = null;

beforeEach(() => {
  singlyLinked = new SinglyLinkedList();
});

afterEach(() => {
  singlyLinked = null;
});

describe("# Singly Linked List", () => {
  it("creates a fresh linked list", () => {
    expect(singlyLinked).toHaveProperty("head");
    expect(singlyLinked).toHaveProperty("tail");
    expect(singlyLinked).toHaveProperty("length");

    expect(singlyLinked.head).toBe(null);
    expect(singlyLinked.tail).toBe(null);
    expect(singlyLinked.length).toBe(0);
  });

  it("push an item to the end", () => {
    expect(singlyLinked.push(1).tail.value).toBe(1);
  });

  it("has the same head and tail if only one element", () => {
    let current = singlyLinked.push(1);
    expect(current.head).toEqual(current.tail);
    expect(current.length).toBe(1);
  });

  it("references the next node", () => {
    let current = singlyLinked.push(1).push(2);
    expect(current.head.value).toBe(1);
    expect(current.head.next.value).toBe(2);
  });

  it("pops the last item", () => {
    expect(singlyLinked.push(1).pop().value).toBe(1);
  });

  it("pops the only item in the list", () => {
    singlyLinked.push(1).pop();
    expect(singlyLinked.head).toBe(null);
    expect(singlyLinked.tail).toBe(null);
  });

  it("shifts the first item", () => {
    expect(singlyLinked.push(1).shift().value).toBe(1);
    singlyLinked.push(1).shift();
    expect(singlyLinked.head).toBe(null);
    expect(singlyLinked.tail).toBe(null);
  });

  xit("unshifts an item as the first item", () => {});
  xit("gets an item in the specified index", () => {});
  xit("sets an item in the specified index", () => {});
  xit("inserts an item in the specified index and point the previous next pointer to point him", () => {});
  xit("inserts an item in the specified index and point the previous next pointer to point him", () => {});
  xit("removes an item in the specified index", () => {});
  xit("reverse the entire list pointers", () => {});
});
