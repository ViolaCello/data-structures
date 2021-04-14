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

    def extract_max
        max = @values[0]
        tail = @values.pop()
        @values[0] = tail
        index = 0
        element = @values[index]
        while true do 
            swapped = nil
            left = 2 * index + 1
            right = 2 * index + 2
            if left < @values.length 
                if @values[left] > element
                    swapped = left
                end
            end
            if right < @values.length
                if (!swapped && @values[right] > element) || (!!swapped && @values[right] > @values[left])
                    swapped = right
                end
            end
            break if !swapped
            @values[index] = @values[swapped]
            @values[swapped] = element
            element = swapped
        end
        return max
    end

end