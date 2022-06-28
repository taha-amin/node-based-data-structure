// class Node {
//   constructor(val) {
//     this.val = val;
//     this.next = null;
//   }
// }

// class LinkedList {
//   constructor(val) {
//     this.head = new Node(val);
//   }

//   add(val) {
//     let current = this.head;
//     while (current.next) {
//       current = current.next;
//     }
//     if (!current.next) {
//       current.next = new Node(val);
//     }
//   }
//   removeTail() {
//     let current = this.head;
//     while (current.next) {
//       let next = current.next;
//       if (next.next) {
//         current = current.next;
//       } else {
//         current.next = null;
//       }
//     }

//   }

//   getList() {
//     const listArr = [];
//     let current = this.head;
//     while (current.next) {
//       listArr.push(current.val);
//       current = current.next;
//     }
//     listArr.push(current.val);
//     return listArr;
//   }
// }

// const list = new LinkedList("A");
// console.log(list.head);
// list.add("B");
// console.log(list.getList());
// list.add("C");
// console.log(list.getList());
// list.removeTail();
// console.log(list.getList());
// list.removeTail();
// console.log(list.getList());

// module.exports = { LinkedList };

class BinaryTreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree {
  constructor(value) {
    this.root = new BinaryTree(value);
  }

  add(node) {
    // Implement me!
    const newNode = new BinaryTreeNode(node);

    let current = this.root;

    if (current === null) {
      current = newNode;
    } else {
      this.addNode(this.root, newNode);
    }
  }

  addNode(current, newNode) {
    if (newNode.value < current.value) {
      if (current.left === null) {
        current.left = newNode;
      } else {
        this.addNode(current.left, newNode);
      }
    } else {
      if (current.right === null) {
        current.right = newNode;
      } else {
        this.addNode(current.right, newNode);
      }
    }
  }
}
