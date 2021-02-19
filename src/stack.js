// Data Structures
// a Stack is a data structure that is First In Last Out (FILO) || Last In First Out
// (as opposed to a Queue, which is First In First Out (FIFO))


const Stack = function() {
    this.count = 0
    this.storage = {}

    // push will add data onto the end of a stack
    this.push = function(data) {
        this.storage[this.count] = data
        this.count++
    }

    // pop will remove and return the data at the top of the stack
    this.pop = function() {
        if (this.count == 0) {
            return "The stack is empty"
        }
        this.count--
        let top = this.storage[this.count]
        delete this.storage[this.count]
        return top
    }   
    // size with return the size of the stack
    this.size = function() {
        return this.count
    }

    this.peek = function() {
        if (this.count == 0) {
            return "The stack is empty"
        }
        return this.storage[this.count-1]
    }
}

let newStack = new Stack()
newStack.push("Hi")
newStack.push("Second item")
newStack.push("Third item")