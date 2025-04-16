class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class Stack{
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }

    push(val){
        // create a new node with the argument
        var newNode = new Node(val);
        // if there are no nodes in the stack, set the first and last to the new node
        if(!this.first) {
            this.first = newNode;
            this.last = newNode;
        } else {
            // if there is at least one node, create a variable that stores the current property on the stack
            // reset the first property to the newly created node
            // set the next property on the node to be the previous created var
            var temp  = this.first;
            this.first = newNode;
            this.first.next = temp;
            // increment the size of the stack by 1;
            return ++this.size;
        }
    }
}