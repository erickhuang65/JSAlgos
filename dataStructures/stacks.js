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
            return this.size++;
        }
    }

    pop() {
        // if there are no nodes in the stack return null;
        if(!this.first) {
            return null;
        }
        // create a temp to hold the first property in the stack
        var temp = this.first;
        // if there is only 1 node, set the first and last property to null;
        if(this.size === 1) {
            this.first = null;
            this.last = null;
        }
        // if there is more than 1 node, set the first property to the next property on the current first
        this.first = this.first.next;
        // decrement size by 1
        this.size--
        return temp.value;
    }
}