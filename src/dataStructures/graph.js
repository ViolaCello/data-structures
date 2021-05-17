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
                console.log(x[i], y)
                if (x[i]==y) {
                    console.log(x.splice(i, 1))
                     return x.splice(i, 1)
                }
            }
        }
        remove(v1, v2)
        remove(v2, v1)
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