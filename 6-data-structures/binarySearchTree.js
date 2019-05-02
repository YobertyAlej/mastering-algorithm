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
}
