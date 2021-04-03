class Node {
    constructor(value) {
        this.value = value
        this.left = null
        this.right = null
    }
}
    class BinarySearchTree {
        constructor() {
            this.root = null
        }

        insert(value) {
            let newNode = new Node(value)
            if (!this.root) {
                this.root = newNode
                return this
            }
           let current = this.root
           while (current) {
               if (current.value<value) {
                   if (!current.right) {
                       current.right = newNode
                       current = null
                   } else {
                       current = current.right
                   }
               } else {
                   if (!current.left) {
                       current.left = newNode
                       current = null
                   } else {
                       current = current.left
                   }
               }
           }
           return this
        } 

    }
