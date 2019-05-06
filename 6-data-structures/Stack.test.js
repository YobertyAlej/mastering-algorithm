/* eslint-env jest */

const Stack = require("./Stack");

let stack = null;

beforeEach(() => {
  stack = new Stack();
});

afterEach(() => {
  stack = null;
});

describe("# Stack", () => {
  it("creates a fresh stack", () => {
    expect(stack).toHaveProperty("first");
    expect(stack).toHaveProperty("last");
    expect(stack).toHaveProperty("size");

    expect(stack.first).toBe(null);
    expect(stack.last).toBe(null);
    expect(stack.size).toBe(0);
  });

  it("push an item to be the first element in the list", () => {
    stack.push(1);
    stack.push(2);

    expect(stack["first"].value).toBe(2);
  });

  it("pops the last item to be pushed first · LIFO", () => {
    stack.push(1);
    stack.push(2);

    expect(stack.pop()).toBe(2);
  });

  it("returns null when asking to pop and its already empty", () => {
    expect(stack.pop()).toBe(null);
  });

  it("push the same item as the first and last when its empty", () => {
    stack.push(1);

    expect(stack["first"]).toBe(stack["last"]);
  });
});
