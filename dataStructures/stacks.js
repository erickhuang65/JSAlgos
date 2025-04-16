class Node {
    constructor(val) {
        this.val = val;
        this.prev = null;
        this.next = null;
    }
}

class Stack{
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(val){
        // create a new node with the argument
        // if there are no nodes in the stack, set the first and last to the new node
        // if there is at least one node, create a variable that stores the current property on the stack
        // reset the first property to the newly created node
        // set the next property on the node to be the previous created var
        // increment the size of the stack by 1;
    }
}