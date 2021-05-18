class Graph
    attr_accessor :list

    def initialize
        @list = {}
    end

    def add_vertex(vertex)
        return false if !!@list[vertex]
        @list[vertex] = []
        return true
    end

    def add_edge(v1, v2)
        return false if !@list[v1] || !@list[v2]
        @list[v1].push(v2)
        @list[v2].push(v1)
        return true
    end

end