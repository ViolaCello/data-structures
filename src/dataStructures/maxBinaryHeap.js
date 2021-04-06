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
        let max = this.values[0]
        let tail = this.values.pop()
        this.values[0] = tail
        let index = 0
        let element = this.values[index]
        let leftIndex = 2 * index + 1
        let rightIndex = 2 * index + 2
        if (!!leftIndex && !!rightIndex) {
            if (this.values[leftIndex]>element && this.values[rightIndex]>element) {
                if (this.values[leftIndex] > this.values[rightIndex]) {
                    this.values[index] = this.values[leftIndex]
                    this.values[leftIndex] = element
                    index = leftIndex
                } else {
                    this.values[index] = this.values[rightIndex]
                    this.values[rightIndex] = element
                    index = rightIndex
                }
            } else if (this.values[leftIndex]>element) {
                this.values[index] = this.values[leftIndex]
                    this.values[leftIndex] = element
                    index = leftIndex 
            } else  {
                this.values[index] = this.values[rightIndex]
                    this.values[rightIndex] = element
                    index = rightIndex
            }
        } else if (!!leftIndex) {
            if (this.values[leftIndex]>element) {
                this.values[index] = this.values[leftIndex]
                this.values[leftIndex] = element
                index = leftIndex
            } else {
                break
            }

        } else if (!!rightIndex) {
            if (this.values[rightIndex]>element) {
                this.values[index] = this.values[rightIndex]
                this.values[rightIndex] = element
                index = rightIndex
            } else {
                break
            }
        }
    }

}
