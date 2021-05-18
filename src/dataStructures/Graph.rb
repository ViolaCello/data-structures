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

    def remove_edge(v1, v2)
        return false if !@list[v1] || !@list[v2]
        i = 0
        while i<@list[v1].length do
            @list[v1].slice!(i) if @list[v1][i] == v2
            i += 1
        end
        i = 0
        while i<@list[v2].length do
            @list[v2].slice!(i) if @list[v2][i] == v1
            i += 1
        end
        return true
    end

    def remove_vertex(vertex)
        return false if !@list[vertex]
        i = 0
        @list.each  { |k, v| remove_edge(vertex, k)}
        @list.delete_if { |k, v| k == vertex } # deletes the key from the hash table
        return true 
    end

end