class Node
    attr_accessor :val, :next

    def initialize(val)
        @val = val
        @next = nil
    end
end

# Queue is First In First Out
# Big O of Queue = Constant Time: Insertion O(1), Removal O(1)

# In a Queue using Singly Linked Lists, we add to the end and remove from the beginning

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