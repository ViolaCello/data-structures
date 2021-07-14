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

        breadthFirstSearch() {
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
            const traverse = (node) => {
                result.push(node.value)
                if (!!node.left) traverse(node.left)
                if (!!node.right) traverse(node.right)
            }
            traverse(this.root)
            return result
        }

        depthFirstSearchPostOrder() {  // returns the tree in reverse order(ish)
            const result = []
            const traverse = (node) => {
                if (!!node.left) traverse(node.left)
                if (!!node.right) traverse(node.right)
                result.push(node.value)
            }
            traverse(this.root)
            return result
        }

        depthFirstSearchInOrder() {  
            const result = []
            const traverse = (node) => {
                if (!!node.left) traverse(node.left)
                result.push(node.value)
                if (!!node.right) traverse(node.right)
            }
            traverse(this.root)
            return result
        }

// go through this and see how works properly
        remove(value){
            this.root = this.removeNode(this.root, value)
        }
        // a recursive function to insert a new value in binary search tree
        
        removeNode(current, value) {
            
            // base case, if the tree is empty 
            
           if(current === null) return current
            
            // when value is the same as current's value, this is the node to be deleted
            
            if (value === current.value) {
                 
                // for case 1 and 2, node without child or with one child
                
                if (current.left === null && current.right === null){
                    
                        return null
                    
                    }else if(current.left === null){
                    
                        return current.right 
                 
                    }else if(current.right === null){
                    
                        return current.left
                    
                    }else{
                        
                        /// node with two children, get the inorder successor, 
                        //smallest in the right subtree
                        
                        let tempNode = this.kthSmallestNode(current.right)
                            current.value = tempNode.value
                        
                        /// delete the inorder successor
                        
                            current.right = this.removeNode(current.right, tempNode.value)
                        return current
                }
    
            // recur down the tree
                
            }else if(value < current.value) {
                
                current.left = this.removeNode(current.left, value)
                return current
                
            }else{
                
                current.right = this.removeNode(current.right, value)
                return current
            }
        }
        
         /// helper function to find the smallest node
        
        kthSmallestNode(node) {
            while(!node.left === null)
                node = node.left
    
            return node
        }
    
    }
