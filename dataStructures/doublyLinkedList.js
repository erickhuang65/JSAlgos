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
        //  
    }
    
    unshift() {

    }
}
