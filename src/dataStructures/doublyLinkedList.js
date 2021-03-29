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
            this.tail.next = newNode  
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
            this.tail = oldTail.prev
            this.tail.next = null
            oldTail.prev = null
        }
        this.length--
        return oldTail
    }

    shift() {
        if (!this.head) return undefined
        let oldHead = this.head
        if (this.length===1) {
            this.head = null
            this.tail = null
        } else {
        this.head = oldHead.next
        this.head.prev = null
        oldHead.next = null
        
        }
    this.length--
    return oldHead
    }

    unshift(val) {
        let newNode = new Node(val)
        if (this.length===0) {
            this.head = newNode
            this.tail = newNode
        } else {
            this.head.prev = newNode
            newNode.next = this.head
            this.head = newNode
        }
        this.length++
        return this
    }

    get(index) {
        if (index<0 || index>= this.length) return null
        let current;
        if (index<=this.length/2) {
            let i = 0
            current = this.head
            while (i<index) {
                current = current.next
                nextNode
                i++
            }
        } else {
            let i = this.length - 1
            current = this.tail
            while (i>index) {
                current = current.prev
                i--
            }
        }
        return current.val
    }

}