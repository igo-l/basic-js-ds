const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  constructor(data){
    this.data = data;
    this.left = null;
    this.right = null;
  }
}
module.exports = class BinarySearchTree {
  constructor()
    {
        this.node = null;
    }

    root() {
      return this.node;
    }

    add(data) {
      var nNode = new Node(data);
        if (this.node === null)
        this.node = nNode;
        else
        this.addTreeNode(this.node, nNode)
    }
    addTreeNode(tree, nNode){
      if (nNode.data < tree.data){
        if (tree.left === null)
          tree.left = nNode;
        else this.addTreeNode(tree.left, nNode);
      }
      else{
        if (tree.right === null)
          tree.right = nNode;
        else
          this.addTreeNode(tree.right, nNode)
      }
    }

    has(data) {
      if (this.find(data) !== null) return true
      else return false
    }

    find(data) {
      return this.search(this.node, data);
    }
    search(tree, data){
      if (tree === null)
        return null;
      else if(data < tree.data)
        return this.search(tree.left, data);
      else if(data > tree.data)
        return this.search(tree.right, data);
      else
        return tree;

    }

    remove(data) {
      this.node = this.removeInner(this.node, data);
    }
    removeInner(tree, data)
    {
      if (tree === null)
        return null;

      else if (data > tree.data){
        tree.right = this.removeInner(tree.right, data)
        return tree
      }
      else if (data < tree.data){
        tree.left = this.removeInner(tree.left, data)
        return tree
      }
      else {
        if(tree.left === null && tree.right === null){
          tree = null;
          return tree;
        }
        if (tree.left === null){
          tree = tree.right;
          return tree;
        }
        else if(tree.right === null){
          tree = tree.left;
          return tree;
        }
        var aux = this.minNode(tree.right);
          tree.data = aux.data;

          tree.right = this.removeInner(tree.right, aux.data);
          return tree;
      }
    }

    min() {
      return this.minNode(this.node).data;
    }
    minNode(tree){
      if (tree.left === null)
      {
        return tree;
      }
      else
        return this.minNode(tree.left);
    }
    max() {
      return this.maxNode(this.node).data;
    }
    maxNode(tree){
      if (tree.right === null)
      {
        return tree;
      } else
        return this.maxNode(tree.right);
    }

module.exports = {
  BinarySearchTree
};