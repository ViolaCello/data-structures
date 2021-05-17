// Undirectional Graph

class Graph {
    constructor() {
        this.adjacencyList = {}
    }


    addVertex(name) {
        if (!!this.adjacencyList[name]) {
            return undefined
        } else {
        return this.adjacencyList[name] = []
        }
    }

}