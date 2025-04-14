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
    // push method pesudocode:
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
        // create a new node using the value passed in
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

    insert(val, index) {
        
    }
}
