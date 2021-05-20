// weighted graph

class Graph {

    constructor() {
        this.graphList = {}
    }

    addVertex(vertex) {
        if (!this.graphList[vertex]) this.graphList[vertex] = []
    }

    addEdge(v1, v2, weight) {
        if (!this.graphList[v1] || !this.graphList[v2]) return false
        this.graphList[v1].push({node: v2, weight})
        this.graphList[v2].push({node: v1, weight})
        return true
    }

    dijkstra(start, end) {
        let distances = {}
        Object.keys(this.graphList).forEach(node => distances[node] = Number.POSITIVE_INFINITY)
        distances[start] = 0
        for (node in this.graphList) {
            if (distances[node]==Number.POSITIVE_INFINITY) enqueue(node, Number.POSITIVE_INFINITY)
        }
        let previous = {}
        Object.keys(this.graphList).forEach(node => previous[node] = null)
        console.log(distances, previous)

    }

}

class PriorityQueue {
    constructor() {
        this.values = []
    }
    enqueue(val, priority) {
        this.values.push({val, priority})
        this.sort()
        console.log(this.values)
    }
    dequeue() {
        return this.values.shift()
    }
    sort() {
        this.values.sort((a,b) => a.priority - b.priority)
    }
}