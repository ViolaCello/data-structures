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
end