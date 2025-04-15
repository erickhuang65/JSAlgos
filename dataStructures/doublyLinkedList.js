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
        // edge case: if the length is empty; assign the newNode to head & tail;
        // create a new node with the val passed in
        // create a temp var to store the current head
        // point the new node to temp var prev
        // increment length
        // return true;
    }
}
