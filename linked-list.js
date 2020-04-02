// Don't forget to assess the big O for each of these exercises. 
// Start each problem by stating 1 or more sample inputs and outputs.

// Walk through the linked list code in the curriculum and understand it well. Then write a linked list class and its 
// core functions (insertFirst, insertLast, remove, find) from scratch.

/**
 * private class - should not be accessible to anyone else other than the linked list class
 * Implementation of a generic node class
 */
class _Node {
  constructor(value = null, next = null){
    this.value = value; // holds the data
    this.next = next;  // a pointer to the next node
  }
}



class LinkedList {
  constructor(){
    this.head = null;  // The head ALWAYS contains the first node. Its the beginning of the list.
  }
  insertFirst(item){
    // create new node with the data
    // direct head to the new node
    this.head = new _Node(item, this.head);
  }
  insertLast(item){
    // handling edge case
    if(this.head === null) {
      this.insertFirst(item);
    }
    // traverse to the end of the list
    // create the new node
    // set the next node's next pointer to null
    // set the end node's next pointer to the node
    let tempNode = this.head;
    while(tempNode.next !== null) {
      tempNode = tempNode.next;
    }
    tempNode.next = new _Node(item, null);
  }
  remove(item){
    // if the list is empty
    if(!this.head){
      return null;
    }
    // If the node to be removed is head, make the next node head
    if(this.head.value === item) {
      this.head = this.head.next;
      return;
    }
    // Start at the head
    let currentNode = this.head;
    // Keep track of previous
    let previousNode = this.head;

    while((currentNode !== null) && (currentNode.value !== item)) {
      // Save the previous node
      previousNode = currentNode;
      currentNode = currentNode.next;
    }
    if(currentNode === null){
      console.log('Item not found');
      return;
    }
    previousNode.next = currentNode.next;

  }
  find(item){
    // start at the head
    let currentNode = this.head;
    // if the list is empty
    if (!this.head) {
      return null;
    }
    // check for the item
    while (currentNode.value !== item) {
      // Return null if it the end of the list
      // and the item isn't on the list
      if(currentNode.next === null) {
        return null;
      }
      else {
        // otherwise keep looking
        currentNode = currentNode.next;
      }
    }
    // Return found item
    return currentNode;
  }
}

module.exports = LinkedList;