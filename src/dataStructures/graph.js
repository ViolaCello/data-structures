// Undirectional Graph

class Graph {
    constructor() {
        this.adjacencyList = {}
    }


    addVertex(vertex) {
        if (!!this.adjacencyList[vertex]) {
            return undefined
        } else {
        return this.adjacencyList[vertex] = []
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
        for (let i = 0; i<v1.length; i++) {
                if (v1[i]===vertex2) {
                 v1.splice(i, 1)
                }
            }
        for (let i = 0; i<v2.length; i++) {
                if (v2[i]===vertex1) {
                 v2.splice(i, 1)
                }
            } 
    }

    // Alternate Solution using FILTER for removeEdge()
    removeEdgeAlt(v1, v2) {
        this.adjacencyList[v1] = this.adjacencyList[v1].filter(v => v != v2)
        this.adjacencyList[v2] = this.adjacencyList[v2].filter(v => v != v1)
    }

    removeVertex(vertex) {
        delete this.adjacencyList[vertex]
        for (let vert in this.adjacencyList) {
            console.log(vert)
            this.removeEdge(vertex, vert)
        }
    }

}

let a = new Graph
a.addVertex("New York")
a.addVertex("Chicago")
a.addVertex("LA")
a.addVertex("Boston")
a.addEdge("New York", "LA")
a.addEdge("New York", "Boston")
a.addEdge("LA", "Boston")