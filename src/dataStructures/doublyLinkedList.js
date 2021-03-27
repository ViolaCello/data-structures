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
        if (this.length===0) {
            let newNode = new Node(val)
            this.head = newNode
            this.tail = newNode
            this.length = 1
        } else {
            let newNode = new Node(val)
            let temp = this.tail
            temp.next = newNode
            newNode.prev = temp
            this.tail = newNode
            this.length++
        }
        return this
    }

}