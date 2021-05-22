class Q_Node
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
        new_node = Q_Node.new(val)
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

    def size
       if !!@size 
        return @size
       else 
        return 0
       end
    end
end

class Node
    attr_accessor :value, :left, :right

    def initialize(value)
        @value = value
        @left = nil
        @right = nil
    end
end

class BinarySearchTree
    attr_accessor :root

    def initialize
        @root = nil
    end

    def insert(value)
        new_node = Node.new(value)
        if !root
            @root = new_node
            return self
        end
        current = @root
        while current do
            return nil if current.value == value
            if value > current.value
                if !current.right
                    current.right = new_node
                    break
                else 
                    current = current.right
                end
            else 
                if !current.left
                    current.left = new_node
                    break
                else 
                    current = current.left
                end
            end
        end
        return self
    end

    def breath_first_search
        queue = []
        result = []
        queue.push(@root)
        while queue.length != 0 do
            dequeued = queue.shift()
            result.push(dequeued)
            queue.push(dequeued.left) if !!dequeued.left
            queue.push(dequeued.right) if !!dequeued.right
        end
        return result
    end

end
