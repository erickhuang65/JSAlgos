class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    // Push pesudocode:
    // create a new node with the value passed to the function
    // if the head is null; set the head and tail to be the newly created node
    // if not, set the next property on the tail to be that node
    // set the previous property on the newly created node to be the tail
    // set the tail to be the newly created node
    // extend the length;
    // return the DLL
    push(val) {
        var newNode = new Node(val);
        if(this.head === null) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }
        this.length++
        return this;
    }

    pop() {
        // edge case: if no head, return undefined
        // create a var to hold the tail
        // if the length is 1, set head and tail to be null
        // point the tail to the previous value
        // set the newTail next to null;
        // decrement the length
        // return the removed value
        if(!this.head) {
            return undefined;
        }
        var poppedNode = this.tail; // will return this later
        if(this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.tail = poppedNode.prev;
            this.tail.next = null;
            poppedNode.prev = null; // this is to remove lingering connection
        }
        this.length--;
        return poppedNode; 
    }
    // remove a node from the beggining of the DLL
    shift() {
        // edge case: if there is no head return undefined
        // edge case: if length equal to 1; set head & tail to null;
        if(this.length === 0) {
            return undefined;
        }
        var poppedHead = this.head;
        if(this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            // create a var to hold the head;
            // point the head to the next value;
            // set the value prev to null;
            // set the var holding the head to null;
            this.head = poppedHead.next;
            this.head.prev = null;
            poppedHead.next = null;
        }
        this.length--;
        return poppedHead;
    }
    // adding a new node to the beggining of the DLL;
    unShift(val) {
        // create a new node with the val passed in
        var newNode = new Node(val);
        // edge case: if the length is empty; assign the newNode to head & tail;
        if(this.length === 0) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            // set the newNode to the previous property of the current head
            this.head.prev = newNode;
            // point the current head to the new head as .next
            newNode.next = this.head;
            // update the head to the newNode;
            this.head = newNode;
        }
        // increment length
        this.length++
        // return true;
        return this;
    }
    // Get: accessing a node in the DLL by its position
    get(index) {
        // returns the node at that index;
        // edge case: is index out of bound
        // edge case: is the index provided closer to 0 or closer to the last property
        if(index > this.length || index < this.length) {
            return null;
        }
        // create a var that divides the length by half
        // create a counter to track nodes we are on;
        // if the index is <= the var; start from the head to get to the index;
        // else start from the tail to get to the index;
    }
}
