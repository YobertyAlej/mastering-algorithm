const swap = require("../5-sorting-algorithms/swap");

class BinaryHeap {
  constructor() {
    this.values = [];
  }

  bubbleUp() {
    /**
     * Create a variable index which is the length of the values
     * property - 1
     */

    let current = this.values.length - 1;
    let parent = this.getParent(current);
    let temp = null;
    while (this.values[parent] < this.values[current]) {
      swap(this.values, current, parent);
      temp = current;
      current = parent;
      parent = this.getParent(temp);
    }
  }

  getParent(node) {
    return Math.floor((node - 1) / 2);
  }

  push(value) {
    this.values.push(value);
    this.bubbleUp();
  }
}
