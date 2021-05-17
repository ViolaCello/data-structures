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

    addEdge(vertex1, vertex2) {
        this.adjacencyList[vertex1].push(vertex2)
        this.adjacencyList[vertex2].push(vertex1)
    }

}