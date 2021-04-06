class MaxBinaryHeap
attr_accessor :values

    def initialize
        @values = []
    end

    def insert(value) # works according to VisualAlgo
        @values.push(value)
        index = @values.length - 1
        while index > 0 do
            parent_index = ((index-1)/2).to_i
            break if @values[parent_index] > @values[index]
            @values[index] = @values[parent_index]
            @values[parent_index] = value
            index = parent_index
        end
        return self
    end

end