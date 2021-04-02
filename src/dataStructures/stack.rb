class Node
    attr_accessor :value, :next

    def initialize(value)
        @value = value
        @next = nil
    end
end

class Stack
    attr_accessor :first, :last, :size

    def initialize
        @first = nil
        @last = nil
        @size = nil
    end
end