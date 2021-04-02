class Node {
    constructor(val){
    this.val = val
    this.next = null
    }
}
// Stack is First In First Out
class Stack {   // using a Singly Linked List with push() adding to the beginning and pop() removing from the beginning
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
        return ++this.size
    }

        pop() { // removes and returns the last entered Node (the front of the list)
            if (this.size===0) return null
            let oldHead = this.first
            if (this.size===1) {
                this.first = null
                this.last = null
            } else {
                this.first = this.first.next
            }
            this.size--
            oldHead.next = null
            return oldHead
        }
}