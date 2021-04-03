class Node
    attr_accessor :val, :next

    def initialize(val)
        @val = val
        @next = nil
    end
end

class Queue
    attr_accessor :first, :last, :size

    def initialize
        @first = nil
        @last = nil
        @size = 0
    end

    def enqueue(val) # add Node to Queue 
        new_node = Node.new(val)
        if !@first
            @first = new_node
            @last = new_node
        else 
            @last.next = new_node
            @last = new_node
        end
        return @size += 1
    end

    def dequeue
        return nil if !@first
        old_head = @first
        @last = nil if @first == @last
         @first = old_head.next
        @size -= 1
        return old_head
    end

end