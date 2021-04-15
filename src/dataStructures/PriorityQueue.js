class Node {

    constructor(data, priority) {
        this.data = data
        this.priority = priority
    }
}

class PriorityQueue {

    constructor() {
        this.values = []
    }

    // Big O O(log N)
    enqueue(data, priority){ // Basically works as a Min Binary Heap
    const newNode = new Node(data, priority)
    this.values.push(newNode)
    let index = this.values.length - 1
    let parentIndex
    while(!!index) {
        parentIndex = Math.floor((index-1)/2)
        if (this.values[parentIndex].priority<=this.values[index].priority) break
        let temp = this.values[parentIndex]    
        this.values[parentIndex] = this.values[index]
            this.values[index] = temp
            index = parentIndex
        }
        return this
    }

     // Big O O(log N)
    dequeue() {
        if (this.values.length===1) {
            return this.values.pop()
        }
        let min = this.values[0]
        let tail = this.values.pop()
        this.values[0] = tail
        let index = 0
        let element = this.values[index]
        // repeat until neither child is greater than the element
        while(true) {
            let swapped = null
        let leftIndex = 2 * index + 1
        let rightIndex = 2 * index + 2
        if (leftIndex < this.values.length) {
            if(this.values[leftIndex].priority < element.priority) {
                swapped = leftIndex
            }
        }
        if (rightIndex < this.values.length) {
            if( (!swapped && this.values[rightIndex].priority < element.priority || !!swapped && this.values[rightIndex].priority < this.values[leftIndex].priority)) {
                swapped = rightIndex
            }
        }
        if (swapped===null) break
        this.values[index] = this.values[swapped]
        this.values[swapped] = element
        index = swapped
        }
        return min
    }

}