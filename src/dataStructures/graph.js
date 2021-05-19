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
        for (let vert in this.adjacencyList) {
            console.log(vert)
            this.removeEdge(vertex, vert)
        }
        delete this.adjacencyList[vertex]
    }

    depthFirstSearch(startingNode) {
        let result = []
        let visited = {}
        const traverse = vertex => {
            console.log("vertex=", vertex, " length=", vertex.length)
            if (vertex.length==0) return
            result.push(vertex)
            visited[vertex] = true
            for (let i = 0; i < this.adjacencyList[vertex].length; i++) {
                console.log("current loop: i=", i, " =", this.adjacencyList[vertex][i])
                if (!visited[this.adjacencyList[vertex][i]]) {
                    traverse(this.adjacencyList[vertex][i])
                }
            }
        }
        traverse(startingNode)
        return result
    }

}

let a = new Graph
a.addVertex("A")
a.addVertex("B")
a.addVertex("C")
a.addVertex("D")
a.addVertex("E")
a.addVertex("F")
a.addEdge("A", "B")
a.addEdge("A", "C")
a.addEdge("B", "D")
a.addEdge("C", "E")
a.addEdge("D", "E")
a.addEdge("D", "F")
a.addEdge("E", "F")
