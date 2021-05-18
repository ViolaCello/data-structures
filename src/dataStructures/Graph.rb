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

end