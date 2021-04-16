class Node
attr_accessor :data, :priority

    def initialize(data, priority)
        @data = data
        @priority = priority
    end
end

class PriorityQueue
attr_accessor :values

    def initialize
        @values = []
    end

    def enqueue(data, priority)
        new_node = Node.new(data, priority)
        @values.push(new_node)
        index = @values.length - 1
        while !!index do
            parent_index = ((index-1)/2).to_i
            break if @values[parent_index].priority < @values[index].priority
            temp = @values[index]
            @values[index] = @values[parent_index]
            @values[parent_index] = temp
            index = parent_index
        end
        return self
    end

end