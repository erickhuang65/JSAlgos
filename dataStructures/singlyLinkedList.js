// piece of data - val
// reference to the next node - next

class Node {
    constructor(val) {
        this.val = val;
        this.next = null; 
    }
}

class SinglyLinkedList {
    // have a pointer to head and tail
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    // Push pesudocode:
    // function should accept a value
    // create a new node using the value passed in
    // if there is no head on the list, set the head and tail to be the newly created node
    // set the next property on the tail to be the new node and set the tail property on the list to be the newly created node
    // increment the length by one
    // return the linked list
    push(val) {
        var newNode = new Node(val)
        if(!this.head) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            // took current tail and add on top of it
            this.tail.next = newNode;
            // move the tail marker on to the next
            this.tail = newNode;
        }
        this.length++;
        return this;
    }
    // Pop Pseudocode:
    // if there's no nodes in the list, return undefined
    // loop through the list until you reach the tail
    // set the next property of the 2nd to last node to be null
    // set the tail to be the 2nd to last node
    // decrement the length of the list by 1
    // return the value of the node removed
    pop() {
        if(this.head === null) {
            return undefined;
        }
        var current = this.head;
        var newTail = current;
        while(current.next) {
            newTail = current;
            current = current.next;
        }
        this.tail = newTail;
        this.length--;
        if(this.length === 0) {
            this.head = null;
            this.tail = null;
        }
        return current;
    }
    // Shifting pseudocode:
    // removing a new node from the beggining of the Linked List
    // delete the head and move the head to the item after
    shifting() {
        if(this.head === null) {
            return undefined;
        }
        var current = this.head;
        this.head = current.next;
        this.length--;
        if(this.length === 0) {
            this.tail = null;
        }
        return current;
    }
    // adding a new node to the beggining of the LL;
    unShift(val) {
        // if there is no head property, set head & tail to the new node;
        // otherwise set the newly created Node's property to the current head property
        // set the current head to be the value after
        // set the new head to new node created
        // increment the length;
        // return the LL;
        var newNode = new Node(val);
        if(!this.head) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            newNode = this.head;
            this.head = newNode;
        }
        this.length++;
        return this;
    }
    // retrieve a node by its position in the LL
    // should accept an index
    // if the index is < 0 or >= length of the list; return null
    // loop through the list until you reach the index and return the node at that specific index
    get(index) {
        if(index < 0 || index >= this.length) {
            return null;
        }
        var current = this.head;
        let counter = 0;
        while(counter != index) {
            current = current.next;
            counter++; 
        }
        return current;
    }
    // Set: changing the value of a node based on its position in the LL
    // function should accept a value and an index
    // use get() to find the specific node
    set(val, index) {
        var foundNode = this.get(index);
        if(foundNode) {
            foundNode.val = val; 
            return true;
        }
        return false; 
    }
    // adding a new node to the LL at a specific index
    insert(val, index) {
        // 1. check edge case: if index is less than 0 or greater than length of the Linked List
        if(index < 0 || index > this.length) {
            return false;
        }
        if(index === this.length) {
            this.push(val);
            return true;
        }
        // 1b check edge case: if insert at head and insert at tail (use unshift, push)
        if(index === 0) {
            // unshift returns an entire list
            this.unShift(val);
            return true; 
        }
        // set the next property on that node to be the new node
        // set the next property on the new node to be the previous next
        // 6. return true
        var newNode = new Node(val);
        var prev = this.get(index -1)
        var temp = prev.next;
        newNode.next = temp;
        this.length++;
        return true;
    }
    // remove a node from a specific position
    // Remove pseudocode:
    // if index is < 0 or > length return undefined
    // if index is the same as lenght -1, pop
    // otherwise, use get(), access the node at index -1
    // set the next property on that node to be the one after
    // decrement length
    // return value of the node removed
    remove(index) {
        if(index < 0 || index >= this.length) {
            return undefined;
        }
        if(index === 0) {
            return this.shifting();
        }
        if(index === this.length - 1) {
            return this.pop();
        }
        // this is to find the node before the index
        var previousNode = this.get(index -1);
        // this is to assign the node we'd like to remove; and its removed
        var removed = previousNode.next;
        // this is to assign the assign the next value to the index of the removed node
        previousNode.next = removed.next;
        this.length--;
        return removed; // return the value that was removed
    }

    reverse() {
    // Reverse pseudocode:
    // traverse the LL and reverse as you go
    // make head the tail
    // create a temp var to hold the value after
    // point the current.next to the temp var
    // when current.next reaches the end set to head
    // return the LL
    }
}
