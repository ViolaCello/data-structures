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

    enqueue(data, priority){
    const newNode = new Node(data, priority)
    this.values.push(newNode)
    let index = this.values.length - 1
    let parentIndex
    while(!!index) {
        parentIndex = Math.floor((index-1)/2)
        if (this.values[parentIndex].priority>this.values[index].priority) break
            this.values[index] = this.values[parentIndex]
            this.values[parentIndex] = this.values[index]
            index = parentIndex
        }
        return this
    }
}