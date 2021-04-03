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


end