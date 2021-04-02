class Node {
    constructor(val){
    this.val = val
    this.next = null
    }
}

class Stack {
    constructor() {
        this.first = null
        this.last = null
        this.size = 0
    }

    push(val) { // adds a Node to the BEGINNING of a Stack in constant time - Big O(1)
        let newNode = new Node(val)
        if (this.size===0) {
            this.first = newNode
            this.last = newNode
        } else {
            let oldHead = this.first
            this.first = newNode
            newNode.next = oldHead
        }
        this.size++
    }

}