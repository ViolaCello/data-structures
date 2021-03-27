class Node {
    constructor(val) {
        this.val = val
        this.next = null
        this.prev = null
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null
        this.tail = null
        this.length = 0
    }

    push(val) {
        let newNode = new Node(val)
        if (this.length===0) {
            this.head = newNode
            this.tail = newNode
        } else {
            this.tail.next = new_node   
            newNode.prev = this.tail
            this.tail = newNode
        }
        this.length++
        return this
    }
    pop() {
        if (!this.head) return undefined
        let oldTail = this.tail
        if (this.length===1) {
            this.head = null
            this.tail = null
        } else {
            let newTail = this.tail.prev
            newTail.next = null
            this.tail = newTail
        }
        this.length--
        return oldTail
    }
}