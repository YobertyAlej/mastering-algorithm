const Queue = require("./queue");

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    /**
     * Inserts recursively the value in the BST
     *
     * Checks if root is empty, and set a new node as the new root
     * if theres a root, check recursively if the value of the new node is
     * greater or less than the value of the root or its childs
     */

    if (this.root === null) {
      this.root = new Node(value);
      return this.root;
    }
    const recursiveCheck = (value, root) => {
      switch (true) {
        case value === root.value:
          return root;

        case value > root.value:
          if (root.right === null) {
            root.right = new Node(value);
            return root.right;
          }
          return recursiveCheck(value, root.right);

        case value < root.value:
        default:
          if (root.left === null) {
            root.left = new Node(value);
            return root.left;
          }
          return recursiveCheck(value, root.left);
      }
    };

    return recursiveCheck(value, this.root);
  }

  find(value) {
    /**
     * Find recursively a value in the BST
     *
     * Check if the root is empty, and return null
     * 
     * If there is a root, check if the value of the new node
     * is the value we are searching and return it
     * 
     * If not, check recursively if the value is greater or less than the root
     
     * If greater
     * check if there is a node to the rigth and repeat the steps
     * if there is not, return null
     
     * If less
     * check to see if there is nodes to the left  and repeat the steps
     * if there is not, return null
     */

    if (this.root === null) return null;
    if (this.root.value === value) return this.root;

    const recursiveCheck = (value, root) => {
      switch (true) {
        case value === root.value:
          return root;

        case value > root.value:
          if (root.right === null) return null;
          return recursiveCheck(value, root.right);

        case value < root.value:
        default:
          if (root.left === null) return null;
          return recursiveCheck(value, root.left);
      }
    };

    return recursiveCheck(value, this.root);
  }

  BFS(closure) {
    /**
     * Breadth First Search · BFS
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

    let queue = new Queue();
    let current = null;

    queue.enqueue(this.root);

    while (queue.size > 0) {
      current = queue.dequeue();
      closure(current.value);

      if (current.left !== null) queue.enqueue(current.left);
      if (current.right !== null) queue.enqueue(current.right);
    }

    return true;
  }

  DFSPreOrder(closure) {
    /**
     * Depth Fisrt Search · Pre Order
     *
     * Traverse the tree vertically storing them from the root
     *
     * Create a variable to store the values of the nodes visited
     * Write a helper function to traverse the tree which accepts a node
     *  Push the value of the node to the variable that stores the values
     *  If the node has a left property, call the helper function with the left property
     *  If the node has a right property, call the helper function with the right property
     */

    const traverse = root => {
      closure(root.value);

      if (root.left !== null) traverse(root.left);
      if (root.right !== null) traverse(root.right);
    };

    traverse(this.root);

    return true;
  }

  DFSPostOrder(closure) {
    /**
     * Depth First Search · Post Order
     *
     * Traverse the tree vertically storing them from the leafs
     *
     * Create a variable to store the values of the nodes visited
     * Write a helper function to traverse the tree which accepts a node
     *  If the node has a left property, traverse with the left property
     *  If the node has a right property, traverse with the right property
     *  Push the value of the node to the visited list
     *  Traverse using the root
     */

    const traverse = root => {
      if (root.left !== null) traverse(root.left);
      if (root.right !== null) traverse(root.right);

      closure(root.value);
    };

    traverse(this.root);

    return true;
  }

  DFSInOrder(closure) {
    /**
     * Depth First Search · In Order
     *
     * Traverse the tree vertically operating them from the leafs and visiting the tree in order
     *
     * Create a variable to store the values of the nodes visited
     * Write a helper function to traverse the tree which accepts a node
     *  If the node has a left property, traverse with the left property
     *  Push the value of the node to the visited list
     *  If the node has a right property, traverse with the right property
     *  Traverse using the root
     */

    const traverse = root => {
      if (root.left !== null) traverse(root.left);

      closure(root.value);

      if (root.right !== null) traverse(root.right);
    };

    traverse(this.root);

    return true;
  }
}

let tree = new BinarySearchTree();
tree.insert(10);
tree.insert(6);
tree.insert(15);
tree.insert(3);
tree.insert(8);
tree.insert(20);

console.log(tree.BFS(node => console.log(node)));
