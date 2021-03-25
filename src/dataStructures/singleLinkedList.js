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

    set(index, val) {
        let node = this.get(index)
        if (node) {
            node.val = val
            return true
        } 
            return false
    }

    insert(index, val) {
        if (index<0 || index>this.length) return false
        if (index===0) return !!this.unshift(val)
        if (index==this.length) return !!this.push(val)
        let newNode = new Node(val)
        let preNode = this.get(index-1)
        let temp = preNode.next
        preNode.next = newNode
        newNode.next = temp
        this.length++
        return true
    }

    remove(index) {
        if (index<0 || index>this.length) return undefined
        if (index==this.length-1) return this.pop()
        if (index===0) return this.shift()
        let preNode = this.get(index-1)
        let removedNode = preNode.next
        preNode.next = removedNode.next
        this.length--
        return removedNode
    }

    reverse() {
        let currentNode = this.head
        this.head = this.tail
        this.tail = currentNode
        let next
        let prev = null // needs to be Null because on the first time through the loop, the .next of .tail needs to = null
        for (let i = 0; i<this.length; i++) {
            next = currentNode.next
            currentNode.next = prev
            prev = currentNode
            currentNode = next
        }
        return this
    }

}