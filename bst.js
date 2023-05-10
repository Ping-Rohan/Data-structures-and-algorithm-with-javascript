class Node {
  constructor(value) {
    this.value = value;
    this.right = null;
    this.left = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    // for first insert
    if (!this.root) {
      const node = new Node(value);
      this.root = node;
      return this;
    } else {
      let currentNode = this.root;
      while (true) {
        if (currentNode.value > value) {
          if (!currentNode.left) {
            const node = new Node(value);
            currentNode.left = node;
            return this;
          }
          currentNode = currentNode.left;
        } else if (currentNode.value < value) {
          if (!currentNode.right) {
            const node = new Node(value);
            currentNode.right = node;
            return this;
          }
          currentNode = currentNode.right;
        }
      }
    }
  }

  lookup(value) {
    if (!this.root) return false;
    const { currentNode } = this.#searchNode(value);
    console.log(parentNode);
    return currentNode ? true : false;
  }

  remove(value) {
    if (!this.root) throw new Error("Empty tree");

    let { parentNode, currentNode } = this.#searchNode(value);

    // if it is leaf node
    if (!currentNode.right && !currentNode.left) {
      if (value > parentNode.value) {
        parentNode.right = null;
        return this;
      } else {
        parentNode.left = null;
      }
      // if it contains two child nodes
    } else if (currentNode.right && currentNode.left) {
      let { minimumNode, minimumNodeParent } = this.#findMinumum(currentNode);
      if (parentNode.value < currentNode.value) {
        parentNode.right = minimumNodeParent.left;
      } else {
        parentNode.left = minimumNode.left;
      }
      minimumNodeParent.left = null;
      minimumNode.right = currentNode.right;
      minimumNode.left = currentNode.left;
      return this;
    } else {
      if (parentNode.value > currentNode.value) {
        // parent need to go left node
        if (currentNode.right) {
          parentNode.left = currentNode.right;
        } else {
          parentNode.left = currentNode.left;
        }
        return this;
      } else {
        // parent need to go right
        if (currentNode.right) {
          parentNode.right = currentNode.right;
        } else {
          parentNode.right = currentNode.left;
        }
        return this;
      }
    }
  }

  #searchNode(value) {
    if (!value) throw new Error("Enter value to search");
    let currentNode = this.root;
    let parentNode = null;
    while (currentNode) {
      if (currentNode.value > value) {
        parentNode = currentNode;
        currentNode = currentNode.left;
      } else if (currentNode.value < value) {
        parentNode = currentNode;
        currentNode = currentNode.right;
      } else if (currentNode.value === value) {
        return { currentNode, parentNode };
      }
    }
    return false;
  }

  #findMinumum(node) {
    let minimumNodeParent = node;
    let minimumNode = node.right;

    while (minimumNode.left) {
      minimumNodeParent = minimumNode;
      minimumNode = minimumNode.left;
    }
    return { minimumNode, minimumNodeParent };
  }
}

const bst = new BinarySearchTree();
bst.insert(100);
bst.insert(120);
bst.insert(110);
bst.insert(130);
bst.insert(140);
bst.insert(125);
bst.insert(122);
bst.insert(127);

console.log(bst.remove(120));
