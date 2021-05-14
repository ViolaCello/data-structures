class Node
    attr_accessor :value, :left, :right

    def initialize(value)
        @value = value
        @left = nil
        @right = nil
    end
end

# BIG O
# Insertion O(log n) = average & best.  Worst is O(n)
# Search O(log n) = average & best.  Worst is O(n)

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

    def find(value)
        return false if !@root
        current = @root
        while !!current do
            return true if current.value == value
            if value > current.value
                return false if !current.right
                current = current.right
            else 
                return false if !current.left
                current = current.left
            end
        end
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

    def depth_first_search_preOrder
        @result = [] # need @ because of scope of helper method
        def travserse(node)
            @result.push(node.value)
            travserse(node.left) if !!node.left
            travserse(node.right) if !!node.right
        end
        travserse(@root)
        return @result 
    end

    def depth_first_search_postOrder
        @result = []
        def travserse(node)
            travserse(node.left) if !!node.left
            travserse(node.right) if !!node.right
            @result.push(node.value)
        end
        travserse(@root)
        return @result
    end

    def depth_first_search_in_order
        @result = []
        def travserse(node)
            travserse(node.left) if !!node.left
            @result.push(node.value)
            travserse(node.right) if !!node.right
        end
        travserse(@root)
        return @result
    end


    def find_recursive(value, current = @root)
        return false if !current
        return true if current.value == value
        return find_recursive(value, current.right) if value > current.value
        return find_recursive(value, current.left) if value < current.value
    end

end