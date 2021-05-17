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

    // if we wanted to make this Graph directional, just add one connection
    addEdge(vertex1, vertex2) {
        this.adjacencyList[vertex1].push(vertex2)
        this.adjacencyList[vertex2].push(vertex1)
    }

    removeEdge(vertex1, vertex2) {
        let v1 = this.adjacencyList[vertex1]
        let v2 = this.adjacencyList[vertex2]
        const remove = (x, y) => {
            for (let i = 0; i<x.length; i++) {
                if (x[i]===y) {
                     return x.splice(i, 1)
                }
            }
        }
        remove(vertex1, vertex2)
        remove(vertex2, vertex1)
    }

}