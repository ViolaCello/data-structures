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
        return current
    }

    set(index, val) {
     let node = this.get(index)
     if (!!node) {
         node.val = val 
         return true
     } else return false 
    }

    insert(index, val) {
        if (index<0 || index>this.length) return false
        if (index===0) return !!this.unshift(val)
        if (index==this.length) return !!this.push(val)
        let newNode = new Node(val)
        let prevNode = this.get(index-1)
        let afterNewNode = prevNode.next
        newNode.prev = prevNode
        newNode.next = afterNewNode
        prevNode.next = newNode
        afterNewNode.prev = newNode
        this.length++
        return true
    }

    remove(index) {
        if (index<0 || index>=this.length) return undefined
        if (index===0) return this.shift()
        if (index===this.length-1) return this.pop()
        let removedNode = this.get(index)
        let prevNode = removedNode.prev
        let afterNode = removedNode.next
        prevNode.next = afterNode
        afterNode.prev = prevNode
        removedNode.prev = null
        removedNode.next = null
        this.length--
        return removedNode
    }

    reverse() {
        if(this.length === 0){
             return null;
         }
         else if(this.length > 1){
             let currNode = this.head;
             let prevNode = null;
             let nextNode = null;
   
             for(let i = 0; i < this.length; i++){
                 prevNode  = currNode.prev;
                 nextNode = currNode.next;
   
                 if(prevNode == null){
                     this.tail = currNode;
                     currNode.next = null;
                     currNode.prev = nextNode;
                 }
                 else if(nextNode == null){
                     this.head = currNode;
                     currNode.prev = null;
                     currNode.next = prevNode;
                 }
                 else{
                     currNode.next = prevNode;
                     currNode.prev = nextNode;
                 }
   
                 currNode = nextNode;
             }
         } return this
     }
   


}