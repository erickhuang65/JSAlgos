class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }

    enqueue(val) {
        // create a new node
        var newNode = new Node(val);
        // edge case: if there are no node, assign the first and last to the newNode
        if(!this.first) {
            this.first = newNode;
            this.last = newNode;
        } else {
            // if node exist, add the new node to the last position
            this.last.next = newNode;
            // this moves the pointer;
            this.last = newNode;
        }
        // increment size
        this.size++;
        // return true
        return true; 
    }

    dequeue() {
        if(!this.first) {
            return null;
        }
        var temp = this.first;
        if(this.first === this.last) {
            this.last = null;
        }
        this.first = this.first.next;
        this.size--; 
        return temp.val;
    }
}
