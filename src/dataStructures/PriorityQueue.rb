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

    # Big O O(log N)
    def enqueue(data, priority)
        new_node = Node.new(data, priority)
        @values.push(new_node)
        index = @values.length - 1
        while index > 0 do
            parent_index = ((index-1)/2).to_i
            break if @values[parent_index].priority < @values[index].priority
            temp = @values[index]
            @values[index] = @values[parent_index]
            @values[parent_index] = temp
            index = parent_index
        end
        return self
    end

    def peek
        i = 0
        j = @values.length
        while i<j do
          puts "Data = #{@values[i].data}, priority= #{@values[i].priority}"
          i += 1
        end
      end

     # Big O O(log N)
      def dequeue 
        min = @values[0]
        tail = @values.pop()
        @values[0] = tail
        index = 0
        element = @values[index]
        while true do 
            swapped = nil
            left = 2 * index + 1
            right = 2 * index + 2
            if left < @values.length 
                if @values[left].priority < element.priority
                    swapped = left
                end
            end
            if right < @values.length
                if (!swapped && @values[right].priority < element.priority) || (!!swapped && @values[right].priority < @values[left].priority)
                    swapped = right
                end
            end
            break if !swapped
            @values[index] = @values[swapped]
            @values[swapped] = element
            index = swapped
        end
        return min
    end

end