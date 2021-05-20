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
        let queue = new PriorityQueue
        for (let node in this.graphList) {
            if (distances[node]==Number.POSITIVE_INFINITY) queue.enqueue(node, Number.POSITIVE_INFINITY)
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

let a = new Graph
a.addVertex("A")
a.addVertex("B")
a.addVertex("C")
a.addVertex("D")
a.addVertex("E")
a.addVertex("F")
a.addEdge("A","B",5)
a.addEdge("A","C", 10)
a.addEdge("A", "D", 14)
a.addEdge("B", "C", 3)
a.addEdge("C", "D", 8)
a.addEdge("D", "E", 11)
a.addEdge("E", "F", 9)