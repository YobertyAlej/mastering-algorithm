/* eslint-env jest */

const Queue = require("./Queue");

let queue = null;

beforeEach(() => {
  queue = new Queue();
});

afterEach(() => {
  queue = null;
});

describe("# Queue", () => {
  it("creates a fresh queue", () => {
    expect(queue).toHaveProperty("first");
    expect(queue).toHaveProperty("last");
    expect(queue).toHaveProperty("size");

    expect(queue["first"]).toBe(null);
    expect(queue["last"]).toBe(null);
    expect(queue["size"]).toBe(0);
  });

  it("push an item to be the last element in the list", () => {
    queue.enqueue(1);
    queue.enqueue(2);

    expect(queue["last"].value).toBe(2);
  });

  it("enqueues an item and return it FIFO", () => {
    queue.enqueue(1);
    queue.enqueue(2);

    expect(queue.dequeue()).toBe(1);
    expect(queue.dequeue()).toBe(2);
  });

  it("returns null when asking to dequeue and its already empty", () => {
    expect(queue.dequeue()).toBe(null);
  });
});
