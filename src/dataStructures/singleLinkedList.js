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

    shift() {
        if (!this.head) return undefined
        let oldHead = this.head
        this.head = this.head.next
        this.length--
        return oldHead
    }

}