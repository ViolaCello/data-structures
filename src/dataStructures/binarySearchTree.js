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
               if (value===current.value) return undefined // this is one way to handle it.  Other way, create a counter for duplicates
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

        find(value) {
            if (!this.root) return false 
            let current = this.root
            while (current) {
                if (current.value===value) return true
                if (value > current.value) {
                    if (!current.right) {
                        return false
                    } else {
                        current = current.right
                    }
                } else {
                    if (!current.left) {
                        return false
                    } else {
                        current = current.left
                    }
                }
            }
        }

        // breath first search
        // return all the values in a Binary Search Tree, touching all of them only once

        breathFirstSearch() {
            let queue = []
            let result = []
            queue.push(this.root)
            while (queue.length != 0) {
                let dequeue = queue.shift()
                result.push(dequeue)
                if (!!dequeue.left) queue.push(dequeue.left)
                if (!!dequeue.right) queue.push(dequeue.right)
            }
            return result
        }

        depthFirstSearchPreOrder() {
            const result = []
            let current = this.root
            const traverse = (node) => {
                result.push(node.value)
                if (!!node.left) traverse(node.left)
                if (!!node.right) traverse(node.right)
            }
            traverse(current)
            return result
        }

    }
