// export allows you to send information to another file
export class Node {
  constructor(value, next) {
    this.value = value;
    this.next = next || null;
    this.prev = null;
  }
}

export default class DoubleLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  /**
   * Push a new value to the tail of the linked list.
   */
  // Why is this method important?
  push(value) {
    // ADD a node to the END of the dll

    //Creates a new Node
    const node = new Node(value);

    // if there are 0 nodes
    if (this.length == 0) {
      this.head = node; // the new node is the head; length is now 1
      this.tail = node; // the new node is the tail; length is now 1
    } else {
      // If the dll is NOT empty add a node to the END of dll
      this.tail.next = node; // after the tail , the new node is added
      node.prev = this.tail; // before the new node, is the current tail
      this.tail = node; // now the new tail, is the new added node
    }
    // increment the size of dll
    this.length++;
  }

  /**
   * Remove an item from the end of the linked list.
   */
  pop() {
    if (!this.head) {
      return; // if there is no head there is nothing to return
    } else if (this.size == 1) {
      // when calling pop to a dll of 1, head/tail is removed (null)
      // dll is now empty
      this.head = null;
      this.tail = null;
    } else {
      // the previous image becomes the new tail
      this.tail = this.tail.prev;
      // there is no (null) images to come after the new tail
      this.tail.next = null;
    }
    // decrement the length of dll
    this.length--;
  }

  /**
   * Remove a node from the beginning of the list.
   */
  shift() {}

  /**
   * Add a node to the head of the linked list.
   */
  unshift(value) {}

  /**
   * Get a Node at a specific index
   */
  getNodeAtIndex(index) {
    // index will be defined when function is called ex. getNodeAtIndex(3)
    //Assign an index to them

    if (index < 0 || index >= this.length) {
      return null; // there are no nodes to return here
    } else {
      let counter = 0;
      let current = this.head;

      while (counter < index) {
        // while the counter is less than the requested index, change the current view to the next node
        current = current.next;
        // increment the counter
        counter++;
      }
      // return the current node once index >= counter
      return current;
    }
  }

  // HOMEWORK

  /**
   *  Insert a node at a specific index.
   */
  insertAtIndex(index, val) {
    // what to do when index is < 0 or >= length of dll?
    if (index < 0 || index >= this.length) {
      return null;
    } else {
      let counter = 0;
      let current = this.head;

      while (counter < index) {
        current = current.next;
        counter++;
      }
      if (index == counter) {
        // this SWITCHES the image at index but does NOT add it
        // original image at this index will be removed
        current.value = val;
      }
      // this.length++;
      return current;
    }
  }

  /**
   * Remove a node at a specific index.
   */

  removeAtIndex(index, val) {
    if (index < 0 || index >= this.length) {
      return null;
    } else {
      let counter = 0;
      let current = this.head;

      while (counter < index) {
        current = current.next;
        counter++;
      }

      if (index == counter) {
        current.value = ' ';
      }
      return current;
    }
  }
}

// Export the Node and DLL class
