class MaxBinaryHeap {

    constructor() {
    this.values = []
    }

    insert(value) {
        this.values.push(value)
        let index = this.values.length - 1
        let parentIndex 
        while (!!index) {
            parentIndex = Math.floor((index-1)/2)
            if (this.values[parentIndex]>this.values[index]) break
            this.values[index] = this.values[parentIndex]
            this.values[parentIndex] = value
            index = parentIndex
        }
        return this
    }

    extractMax() {
        if (this.values.length===1) {
            return this.values.pop()
        }
        let max = this.values[0]
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
            if(this.values[leftIndex] > element) {
                swapped = leftIndex
            }
        }
        if (rightIndex < this.values.length) {
            if( (!swapped && this.values[rightIndex] > element || !!swapped && this.values[rightIndex] > this.values[leftIndex])) {
                swapped = rightIndex
            }
        }
        if (swapped===null) break
        this.values[index] = this.values[swapped]
        this.values[swapped] = element
        index = swapped
        }
        return max
    }

}
