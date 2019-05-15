/* eslint-env jest */

const BinaryHeap = require("./BinaryHeap");

let binaryHeap = null;

beforeEach(() => {
  binaryHeap = new BinaryHeap();
});

afterEach(() => {
  binaryHeap = null;
});

describe("# Binary Heap", () => {
  it("creates a fresh binary heap", () => {
    expect(binaryHeap).toHaveProperty("values");
    expect(binaryHeap).toHaveProperty("bubbleUp");
    expect(binaryHeap).toHaveProperty("insert");
    expect(binaryHeap).toHaveProperty("getParent");
  });

  it("add items in the correct order (2n + 1)", () => {
    let output = [41, 39, 55, 18, 27, 12, 33];

    binaryHeap.insert(41);
    binaryHeap.insert(39);
    binaryHeap.insert(33);
    binaryHeap.insert(18);
    binaryHeap.insert(27);
    binaryHeap.insert(12);
    binaryHeap.insert(55);

    expect(binaryHeap.values).toEqual(output);
  });
});
