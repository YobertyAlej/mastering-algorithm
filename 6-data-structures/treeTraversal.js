/**
 * Breath First Search · BFS
 *
 * Traverse the tree horizontally first
 *
 * Create a queue, and a variable to store the values of nodes visited
 * Place the root node in the queue
 * Loop as long as there is anything in the queue
 *   Dequee a node from the queue and push the value of the node into the variable visited
 *   If there is a left property on the node dequeued add it to the queue
 *   If there is a right property on the node dequeued add it to the queue
 *
 * Return the visited nodes
 */

const Queue = require("./queue");

const BFS = tree => {
  let queue = new Queue();
  let visited = [];

  queue.enqueue(tree.root);

  while (queue.size > 0) {
    let current = queue.dequeue();
    visited.push(current.value);

    if (current.left !== null) {
      queue.enqueue(current.left);
    }

    if (current.right !== null) {
      queue.enqueue(current.right);
    }
  }

  return visited;
};
