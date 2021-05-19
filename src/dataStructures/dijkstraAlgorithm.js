// weighted graph

class Graph {

    constructor() {
        this.graphList = {}
    }

    addVertex(vertex) {
        if (!this.graphList[vertex]) this.graphList[vertex] = []
    }

    addEdge(v1, v2, weight) {
        if (!this.graphList[v1] || !this.graphList[v2]) return undefined
        this.graphList[v1].push({node: v2, weight})
        this.graphList[v2].push({node: v1, weight})
    }

}