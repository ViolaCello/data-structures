class Node {
    constructor(val) {
        this.val = val
        this.next = null
    }
}

class SinglyLinkedList {
    constructor(){
        this.head = null
        this.tail = null
        this.length = 0
    }

    push(val) {
       let newNode = new Node(val)
       if (!this.head) {
        this.head = newNode
        this.tail = newNode
       } else {
           this.tail.next = newNode
           this.tail = newNode
       }
       this.length++
       return this
    }

    pop() {
        if (!this.head) return undefined
        let current = this.head
        while (current) {
           let preCurrent = current
            current = current.next
            if (current===this.tail) {
                this.tail = preCurrent
                this.tail.next = null
                this.length--
                if (this.length==0) {
                    this.head = null
                    this.tail = null
                }
                return current
            }
        }
    }

    shift() { // remove and return the beginning of the linked list
        if (!this.head) return undefined
        let oldHead = this.head
        this.head = this.head.next
        this.length--
        if (this.length==0) {
            this.tail = null
        }
        return oldHead
    }

    unshift(val) { // add value to the beginning of the linked list
        let newNode = new Node(val)
       if (!this.head) {
        this.head = newNode
        this.tail = newNode
       } else {
           newNode.next = this.head
           this.head = newNode
       }
       this.length++
       return this
    }

    get(index) {
        if (index>=this.length || index<0) return null
        let currentNode = this.head
        for (let i = 0; i<index; i++) {
           currentNode = currentNode.next
        }
        return currentNode
    }

}